// Shared logic for the NATIONS "My Album" — collecting stickers of correctly
// guessed players from localStorage. Used by the hub (/nations/) preview and
// the full album page (/nations/album/).
window.Album = (function () {
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  // Build slug → { flag, name } from a document's nation cards, keeping the
  // hub page the single source of truth for the nation list.
  function buildNationInfo(doc) {
    const info = {};
    doc.querySelectorAll(".nation-card").forEach(card => {
      const m = (card.getAttribute("href") || "").match(/\/nations\/([^/]+)\//);
      if (!m) return;
      const flag = card.querySelector(".flag");
      const name = card.querySelector(".name");
      info[m[1]] = {
        flag: flag ? flag.textContent : "",
        name: name ? name.textContent : m[1]
      };
    });
    return info;
  }

  // Scan localStorage for every finished, won game across all nations.
  // State lives in `wc26-{slug}-day-state` / `wc26-{slug}-archive-{n}`;
  // the player's photo is cached in `wc26-{slug}-thumb-{puzzleId}`.
  // Dedupe by slug:puzzleId (earliest win wins). Returns newest-first.
  function collect(nationInfo) {
    const stickers = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const m = key && key.match(/^wc26-(.+?)-(day-state|archive-\d+)$/);
      if (!m) continue;
      const slug = m[1];
      if (!nationInfo[slug]) continue;

      let state;
      try { state = JSON.parse(localStorage.getItem(key)); } catch { continue; }
      if (!state || !state.finished || !Array.isArray(state.guesses)) continue;

      const win = state.guesses.find(g => g && g.correct);
      if (!win || !state.puzzleId) continue;

      const id = slug + ":" + state.puzzleId;
      const day = typeof state.day === "number" ? state.day : 0;
      if (stickers[id] && stickers[id].day <= day) continue;

      const img = localStorage.getItem(`wc26-${slug}-thumb-${state.puzzleId}`);
      stickers[id] = {
        id,
        slug,
        name: win.text || "Unknown",
        flag: nationInfo[slug].flag,
        nation: nationInfo[slug].name,
        img: img && img !== "null" ? img : null,
        day
      };
    }
    return Object.values(stickers).sort((a, b) =>
      b.day - a.day || a.name.localeCompare(b.name)
    );
  }

  // ── Pins ──────────────────────────────────────────────────────────────
  // The player chooses up to MAX_PINS stickers to feature on the hub preview.
  // Stored as an ordered list of sticker ids (`slug:puzzleId`).
  const PIN_KEY = "wc26-album-pinned";
  const MAX_PINS = 3;

  function getPinned() {
    try { const a = JSON.parse(localStorage.getItem(PIN_KEY)); return Array.isArray(a) ? a : []; }
    catch { return []; }
  }
  function setPinned(arr) { try { localStorage.setItem(PIN_KEY, JSON.stringify(arr)); } catch {} }
  function isPinned(id) { return getPinned().indexOf(id) !== -1; }

  // Toggle a pin. Returns { ok, pinned } — or { ok:false, reason:"max" } when
  // trying to add a 4th pin.
  function togglePin(id) {
    const arr = getPinned();
    const i = arr.indexOf(id);
    if (i !== -1) { arr.splice(i, 1); setPinned(arr); return { ok: true, pinned: false }; }
    if (arr.length >= MAX_PINS) return { ok: false, reason: "max" };
    arr.push(id); setPinned(arr); return { ok: true, pinned: true };
  }

  // The hub preview: pinned stickers first (in the order they were pinned),
  // then the newest unpinned ones fill any remaining slots.
  function previewList(list, n) {
    n = n || MAX_PINS;
    const pinnedIds = getPinned();
    const byId = {};
    list.forEach(s => { byId[s.id] = s; });
    const pinned = pinnedIds.map(id => byId[id]).filter(Boolean);
    const rest = list.filter(s => pinnedIds.indexOf(s.id) === -1);
    return pinned.concat(rest).slice(0, n);
  }

  function stickerHTML(s, opts) {
    opts = opts || {};
    const photo = s.img
      ? `<img src="${s.img}" alt="${escapeHtml(s.name)}" loading="lazy" onerror="this.parentNode.innerHTML='<span class=&quot;no-photo&quot;>👤</span>'">`
      : `<span class="no-photo">👤</span>`;
    const pin = opts.pinnable
      ? `<button type="button" class="pin-btn${opts.pinned ? " pinned" : ""}" data-id="${escapeHtml(s.id)}" aria-pressed="${opts.pinned ? "true" : "false"}" title="${opts.pinned ? "Featured on your home — tap to remove" : "Feature on your home"}">${opts.pinned ? "★" : "☆"}</button>`
      : "";
    return `<a class="sticker" href="/nations/${s.slug}/">
      <div class="sticker-photo"><span class="sticker-flag">${s.flag}</span>${photo}${pin}</div>
      <div class="sticker-name">${escapeHtml(s.name)}</div>
      <div class="sticker-sub">${escapeHtml(s.nation)}</div>
    </a>`;
  }

  return {
    escapeHtml, buildNationInfo, collect, stickerHTML,
    getPinned, isPinned, togglePin, previewList, MAX_PINS
  };
})();
