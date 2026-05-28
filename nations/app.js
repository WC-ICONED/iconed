// ─── Domain guard — deter unauthorized hosting ────────────────────────────
(function() {
  const _allow = ["iconed.wtf", "www.iconed.wtf", "localhost", "127.0.0.1", ""];
  const _host  = (typeof location !== "undefined" ? location.hostname : "").toLowerCase();
  if (_allow.indexOf(_host) === -1) {
    document.addEventListener("DOMContentLoaded", function() {
      document.body.style.cssText = "margin:0;padding:0;background:#0a0a0a;color:#f6f1e6;font-family:system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100dvh;text-align:center";
      document.body.innerHTML = '<div style="padding:32px;max-width:360px"><div style="font-size:3rem;margin-bottom:16px">⚽</div><p style="font-size:.75rem;letter-spacing:.2em;text-transform:uppercase;opacity:.45;margin-bottom:8px">ICONED · WC26</p><h1 style="font-size:1.4rem;font-weight:900;margin-bottom:14px;line-height:1.15">This game only runs on the official site.</h1><p style="opacity:.6;margin-bottom:24px;line-height:1.5;font-size:.9rem">Find the real ICONED Nations game at iconed.wtf</p><a href="https://www.iconed.wtf/nations/" style="display:inline-block;background:#1F6B3A;color:#fff;text-decoration:none;padding:12px 28px;border-radius:100px;font-weight:700;font-size:.85rem;letter-spacing:.1em">PLAY AT ICONED.WTF →</a></div>';
    });
  }
})();

// ICONED · Nations — 2026 World Cup squad guessing game.
// Clue structure:
//   Always shown : WC Squad (2026) · Country (nationality) · Caps (by Jun 1 2026) · Club Country
//   Miss 1       : Position + Goals scored
//   Miss 2       : Age
//   Miss 3       : Current club name
//   Miss 4       : Wikipedia photo
//
// Player data format (window.PUZZLES):
// {
//   id, answer, aliases, nationality,
//   caps, clubCountry,
//   position, goals, age, shirtNumber, club,
//   wikipediaTitle?, imageUrl?
// }
//
// Nation config (window.NATION_CONFIG, set per-nation in index.html):
// { name, flag, slug, pitch, gold, spine, spineDeep, spineInk,
//   page, pageEdge, paperCard, bodyBg, ink }

(() => {
  const MAX_GUESSES = 5;
  const cfg = window.NATION_CONFIG || { name: "Nation", flag: "🌍", slug: "nation" };

  let puzzles = [];
  let puzzle  = null;
  let guesses = [];
  let finished    = false;
  let imageFetched = false;
  let archiveMode  = false;
  let archiveDayNum = null;
  let resultSaved  = false;

  const els = {
    pageLabel:       document.getElementById("pageLabel"),
    pageKicker:      document.getElementById("pageKicker"),
    spineTitle:      document.getElementById("spineTitle"),
    pageTitleBlock:  document.getElementById("pageTitleBlock"),
    clueSquad:       document.getElementById("clueSquad"),
    clueNationality: document.getElementById("clueNationality"),
    clueCaps:        document.getElementById("clueCaps"),
    clueClubCountry: document.getElementById("clueClubCountry"),
    stickerPosition: document.getElementById("sticker-position"),
    cluePosition:    document.getElementById("cluePosition"),
    stickerGoals:    document.getElementById("sticker-goals"),
    clueGoals:       document.getElementById("clueGoals"),
    stickerAge:      document.getElementById("sticker-age"),
    clueAge:         document.getElementById("clueAge"),
    photoSlot:       document.getElementById("photoSlot"),
    stickerClub:     document.getElementById("sticker-club"),
    clueClub:        document.getElementById("clueClub"),
    photoPlaceholder:document.getElementById("photoPlaceholder"),
    playerImage:     document.getElementById("player-image"),
    guessInput:      document.getElementById("guessInput"),
    guessButton:     document.getElementById("guessButton"),
    suggestions:     document.getElementById("suggestions"),
    guessList:       document.getElementById("guessList"),
    guessCount:      document.getElementById("guessCount"),
    guessArea:       document.getElementById("guessArea"),
    guessLogCard:    document.getElementById("guessLogCard"),
    result:          document.getElementById("result"),
    resultKicker:    document.getElementById("resultKicker"),
    resultTitle:     document.getElementById("resultTitle"),
    solvedStamp:     document.getElementById("solvedStamp"),
    stickerNumber:   document.getElementById("stickerNumber"),
    playerName:      document.getElementById("playerName"),
    playerTags:      document.getElementById("playerTags"),
    portraitNumber:  document.getElementById("portraitNumber"),
    portraitMeta:    document.getElementById("portraitMeta"),
    playerImageResult: document.getElementById("playerImageResult"),
    matchLogCells:   document.getElementById("matchLogCells"),
    shareText:       document.getElementById("shareText"),
    shareButton:     document.getElementById("shareButton"),
    archiveButton:   document.getElementById("archiveButton"),
    archiveBanner:   document.getElementById("archiveBanner"),
    archiveBannerText: document.getElementById("archiveBannerText"),
    backToToday:     document.getElementById("backToToday"),
    stickerGrid:     document.getElementById("stickerGrid"),
    resultGuesses:   document.getElementById("resultGuesses"),
    albumView:       document.getElementById("albumView"),
    albumGrid:       document.getElementById("albumGrid"),
    albumPct:        document.getElementById("albumPct"),
    albumFill:       document.getElementById("albumFill"),
    albumBack:       document.getElementById("albumBack"),
  };

  // ─── Helpers ───────────────────────────────────────────────────────────

  function normalize(s) {
    return s.toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9 ]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function allNamesFor(p) {
    return [p.answer, ...(p.aliases || [])];
  }

  function isMatch(input, p) {
    const n = normalize(input);
    if (!n) return false;
    return allNamesFor(p).some(name => normalize(name) === n);
  }

  function pickPuzzleForDay(dayNum) {
    const order = window.PUZZLE_ORDER || [];
    if (order.length) {
      const id = order[dayNum % order.length];
      const found = puzzles.find(p => p.id === id);
      if (found) return found;
    }
    if (!puzzles.length) return null;
    return puzzles[dayNum % puzzles.length];
  }

  function getPuzzleNumber() {
    return (archiveMode ? archiveDayNum : Stats.todayNumber()) + 1;
  }

  // ─── Page labels ───────────────────────────────────────────────────────

  function updatePageNumbers() {
    const num    = getPuzzleNumber();
    const dayNum = archiveMode ? archiveDayNum : Stats.todayNumber();
    if (els.pageLabel)  els.pageLabel.textContent  = `PAGE ${num}`;
    if (els.pageKicker) els.pageKicker.textContent = `Page ${num} · matchday №${dayNum + 1}`;
  }

  // ─── State persistence ─────────────────────────────────────────────────

  function saveState() {
    if (!puzzle) return;
    const state = {
      day: archiveMode ? archiveDayNum : Stats.todayNumber(),
      puzzleId: puzzle.id,
      guesses,
      finished,
      resultSaved: !!finished && resultSaved
    };
    if (archiveMode) {
      Stats.setArchiveState(archiveDayNum, state);
    } else {
      Stats.setDayState(state);
      Stats.setArchiveState(state.day, state);
    }
  }

  function loadState() {
    const state = Stats.getDayState();
    if (!state) return null;
    if (state.day !== Stats.todayNumber()) { Stats.clearDayState(); return null; }
    resultSaved = !!state.resultSaved;
    return state;
  }

  function clearState() { Stats.clearDayState(); resultSaved = false; }

  // ─── Clue rendering ────────────────────────────────────────────────────

  function unlockSticker(el) {
    if (!el) return;
    el.classList.remove("locked");
    el.classList.add("just-unlocked");
    setTimeout(() => el.classList.remove("just-unlocked"), 600);
  }

  function renderClues() {
    // Always-visible clues
    if (els.clueSquad) els.clueSquad.textContent = "2026";
    if (els.clueNationality) {
      els.clueNationality.textContent = `${cfg.flag || ""} ${puzzle.nationality || cfg.name}`.trim();
    }
    if (els.clueCaps) {
      els.clueCaps.textContent = puzzle.caps != null ? puzzle.caps : "·";
    }
    if (els.clueClubCountry) {
      els.clueClubCountry.textContent = puzzle.clubCountry || "·";
    }

    const wrong = guesses.filter(g => !g.correct).length;

    if (wrong >= 1) {
      if (els.stickerPosition && els.stickerPosition.classList.contains("locked")) {
        unlockSticker(els.stickerPosition);
      }
      if (els.stickerGoals && els.stickerGoals.classList.contains("locked")) {
        unlockSticker(els.stickerGoals);
      }
      if (els.cluePosition) els.cluePosition.textContent = puzzle.position || "Unknown";
      if (els.clueGoals) els.clueGoals.textContent = puzzle.goals != null ? puzzle.goals : "·";
    }

    if (wrong >= 2) {
      if (els.stickerAge && els.stickerAge.classList.contains("locked")) {
        unlockSticker(els.stickerAge);
      }
      if (els.clueAge) els.clueAge.textContent = puzzle.age != null ? puzzle.age : "Unknown";
    }

    if (wrong >= 3) {
      if (els.stickerClub && els.stickerClub.classList.contains("locked")) {
        unlockSticker(els.stickerClub);
      }
      if (els.clueClub) els.clueClub.textContent = puzzle.club || "Unknown";
    }

    if (wrong >= 4) {
      if (els.photoSlot && els.photoSlot.classList.contains("locked")) {
        els.photoSlot.classList.remove("locked");
        els.photoSlot.classList.add("revealed");
      }
      maybeFetchImage();
    }
  }

  function renderCluesFromState() {
    if (els.clueSquad) els.clueSquad.textContent = "2026";
    if (els.clueNationality) {
      els.clueNationality.textContent = `${cfg.flag || ""} ${puzzle.nationality || cfg.name}`.trim();
    }
    if (els.clueCaps) {
      els.clueCaps.textContent = puzzle.caps != null ? puzzle.caps : "·";
    }
    if (els.clueClubCountry) {
      els.clueClubCountry.textContent = puzzle.clubCountry || "·";
    }

    const wrong = guesses.filter(g => !g.correct).length;

    if (wrong >= 1) {
      if (els.stickerPosition) els.stickerPosition.classList.remove("locked");
      if (els.stickerGoals) els.stickerGoals.classList.remove("locked");
      if (els.cluePosition) els.cluePosition.textContent = puzzle.position || "Unknown";
      if (els.clueGoals) els.clueGoals.textContent = puzzle.goals != null ? puzzle.goals : "·";
    }
    if (wrong >= 2) {
      if (els.stickerAge) els.stickerAge.classList.remove("locked");
      if (els.clueAge) els.clueAge.textContent = puzzle.age != null ? puzzle.age : "Unknown";
    }
    if (wrong >= 3) {
      if (els.stickerClub) els.stickerClub.classList.remove("locked");
      if (els.clueClub) els.clueClub.textContent = puzzle.club || "Unknown";
    }
    if (wrong >= 4) {
      if (els.photoSlot) {
        els.photoSlot.classList.remove("locked");
        els.photoSlot.classList.add("revealed");
      }
      maybeFetchImage();
    }
  }

  // ─── Image fetching ────────────────────────────────────────────────────

  async function maybeFetchImage() {
    if (imageFetched) return;
    imageFetched = true;

    // 1. Explicit imageUrl in data is the ground truth — always wins
    if (puzzle.imageUrl) {
      setPlayerImage(puzzle.imageUrl);
      setCachedThumb(puzzle.id, puzzle.imageUrl);
      return;
    }

    // 2. Check localStorage cache — instant display, no network
    //    Guard against stale "null" strings written by older code versions
    const cached = getCachedThumb(puzzle.id);
    if (cached && cached !== "null") { setPlayerImage(cached); return; }

    // 3. Fetch from Wikipedia REST API
    setPhotoLoading(true);
    const title = encodeURIComponent(puzzle.wikipediaTitle || puzzle.answer);
    try {
      const res  = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${title}`);
      if (!res.ok) throw new Error("wiki fail");
      const data = await res.json();
      let src = data.thumbnail?.source || data.originalimage?.source || null;
      if (src) {
        // Upscale: Wikipedia returns ~330px thumbnails — request 600px for portrait quality
        src = src.replace(/\/\d+px-/, "/600px-");
        setCachedThumb(puzzle.id, src);
      }
      setPlayerImage(src);
    } catch {
      setPlayerImage(null);
    } finally {
      setPhotoLoading(false);
    }
  }

  function setPhotoLoading(on) {
    if (!els.photoSlot) return;
    els.photoSlot.classList.toggle("img-loading", on);
    // Keep the placeholder visible while loading so slot isn't blank
    if (els.photoPlaceholder) {
      if (on) {
        els.photoPlaceholder.dataset.orig = els.photoPlaceholder.innerHTML;
        els.photoPlaceholder.innerHTML = '<span class="photo-loading-text">Loading…</span>';
        els.photoPlaceholder.style.display = "";
      } else if (els.photoPlaceholder.dataset.orig !== undefined) {
        els.photoPlaceholder.innerHTML = els.photoPlaceholder.dataset.orig;
        delete els.photoPlaceholder.dataset.orig;
      }
    }
  }

  function setPlayerImage(src) {
    // ── In-game photo slot ──
    if (src) {
      if (els.photoPlaceholder) els.photoPlaceholder.style.display = "none";
      if (els.playerImage) {
        els.playerImage.src = src;
        els.playerImage.style.display = "";
        els.playerImage.onerror = () => setPlayerImage(null); // fallback if URL breaks
      }
    } else {
      // No photo available — show a silhouette placeholder
      if (els.playerImage) { els.playerImage.removeAttribute("src"); els.playerImage.style.display = "none"; }
      if (els.photoPlaceholder) {
        els.photoPlaceholder.innerHTML =
          '<span class="photo-no-img">👤</span><span class="photo-slot-sub">No photo on Wikipedia</span>';
        els.photoPlaceholder.style.display = "";
      }
    }

    // ── Result card portrait ──
    if (els.playerImageResult) {
      if (src) {
        els.playerImageResult.src = src;
        els.playerImageResult.style.display = "";
        els.playerImageResult.onload = () => {
          const ph = document.querySelector(".portrait-placeholder");
          if (ph) ph.style.display = "none";
        };
        els.playerImageResult.onerror = () => {
          els.playerImageResult.style.display = "none";
        };
      } else {
        els.playerImageResult.removeAttribute("src");
        els.playerImageResult.style.display = "none";
        // portrait-placeholder stays visible with its "WIKI PORTRAIT" fallback text
      }
    }
  }

  // ─── Guess log ─────────────────────────────────────────────────────────

  function renderGuesses() {
    if (!els.guessList) return;
    els.guessList.innerHTML = "";
    const used = guesses.length;
    const left = MAX_GUESSES - used;
    if (els.guessCount) els.guessCount.textContent = `${used} used · ${left} left`;

    for (let i = 0; i < MAX_GUESSES; i++) {
      const g   = guesses[i];
      const row = document.createElement("div");
      row.className = "guess-row";
      const isCurrent = !finished && i === used;
      if (isCurrent) row.classList.add("active-row");

      const pip = document.createElement("span");
      pip.className = "guess-pip";
      if (g) {
        pip.classList.add(g.correct ? "correct" : "wrong");
        pip.textContent = g.correct ? "✓" : "✕";
      } else {
        pip.classList.add("empty");
      }

      const num = document.createElement("span");
      num.className = "guess-num";
      num.textContent = String(i + 1).padStart(2, "0");

      const name = document.createElement("span");
      name.className = "guess-name";
      if (g) {
        name.textContent = g.text;
        if (g.skipped) name.classList.add("skipped");
      } else if (isCurrent) {
        name.textContent = "Waiting for Icon";
        name.classList.add("current");
      } else {
        name.textContent = "";
        name.classList.add("skipped");
      }

      row.appendChild(pip);
      row.appendChild(num);
      row.appendChild(name);

      if (isCurrent) {
        const now = document.createElement("span");
        now.className = "guess-now";
        now.textContent = "NOW";
        row.appendChild(now);
      }

      els.guessList.appendChild(row);
    }
  }

  // ─── Result ────────────────────────────────────────────────────────────

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[c]);
  }

  const POS_ABBR = { Goalkeeper: "GK", Defender: "DEF", Midfielder: "MID", Forward: "FWD" };

  function renderPlayerCard() {
    const puzzleNum = getPuzzleNumber();
    const won = guesses.some(g => g.correct);

    if (els.stickerNumber) els.stickerNumber.textContent = `Sticker N° ${puzzleNum}`;
    if (els.playerName)    els.playerName.textContent    = puzzle.answer.toUpperCase();
    if (els.portraitNumber) els.portraitNumber.textContent = puzzleNum;
    if (els.portraitMeta) {
      const posAbbr = POS_ABBR[puzzle.position] || (puzzle.position || "").substring(0, 3).toUpperCase();
      els.portraitMeta.textContent = `${cfg.flag || ""} ${posAbbr}`.trim();
    }

    if (els.playerTags) {
      els.playerTags.innerHTML = "";
      const tags = [];
      if (puzzle.position) tags.push(POS_ABBR[puzzle.position] || puzzle.position);
      if (puzzle.caps    != null) tags.push(`${puzzle.caps} caps`);
      if (puzzle.goals   != null) tags.push(`${puzzle.goals} goals`);
      if (puzzle.age     != null) tags.push(`Age ${puzzle.age}`);
      if (puzzle.club)             tags.push(puzzle.club);
      tags.forEach(t => {
        const span = document.createElement("span");
        span.className = "player-tag";
        span.textContent = t;
        els.playerTags.appendChild(span);
      });
    }

    if (won) {
      if (els.resultKicker) els.resultKicker.textContent = "Page complete";
      if (els.resultTitle)  els.resultTitle.innerHTML    = "Sticker<br>collected.";
      if (els.solvedStamp)  { els.solvedStamp.textContent = "SOLVED"; els.solvedStamp.className = "stamp stamp-win"; }
    } else {
      if (els.resultKicker) els.resultKicker.textContent = "Page incomplete";
      if (els.resultTitle)  els.resultTitle.innerHTML    = "Sticker<br>missed.";
      if (els.solvedStamp)  { els.solvedStamp.textContent = "MISSED"; els.solvedStamp.className = "stamp stamp-lose"; }
    }
  }

  function buildShareText(puzzleNum) {
    const cells = [];
    for (let i = 0; i < MAX_GUESSES; i++) {
      const g = guesses[i];
      if (!g) cells.push("⚪");
      else if (g.correct) cells.push("✅");
      else cells.push("❌");
    }
    const slug = cfg.slug || "nation";
    return `ICONED·WC26·${cfg.flag || ""} №${puzzleNum}\n⚽ ${cells.join(" ")}\nhttps://www.iconed.wtf/nations/${slug}/`;
  }

  function renderSharePreview(puzzleNum) {
    if (!els.shareText) return;
    const slug = cfg.slug || "nation";
    const line1 = document.createElement("div");
    line1.textContent = `ICONED·WC26·${cfg.flag || ""} №${puzzleNum}`;

    const line2 = document.createElement("div");
    line2.appendChild(document.createTextNode("⚽ "));
    for (let i = 0; i < MAX_GUESSES; i++) {
      const g    = guesses[i];
      const span = document.createElement("span");
      span.textContent = !g ? "⚪" : g.correct ? "✅" : "❌";
      line2.appendChild(span);
      if (i < MAX_GUESSES - 1) line2.appendChild(document.createTextNode(" "));
    }

    const line3 = document.createElement("div");
    line3.textContent = `https://www.iconed.wtf/nations/${slug}/`;

    els.shareText.innerHTML = "";
    els.shareText.appendChild(line1);
    els.shareText.appendChild(line2);
    els.shareText.appendChild(line3);
  }

  function renderMatchLog() {
    if (!els.matchLogCells) return;
    els.matchLogCells.innerHTML = "";
    for (let i = 0; i < MAX_GUESSES; i++) {
      const g    = guesses[i];
      const cell = document.createElement("span");
      cell.className = "match-cell";
      if (g) {
        if (g.correct) { cell.classList.add("hit");  cell.textContent = "✅"; }
        else           { cell.classList.add("miss"); cell.textContent = "❌"; }
      } else {
        cell.classList.add("unused");
        cell.textContent = "⚪";
      }
      els.matchLogCells.appendChild(cell);
    }
  }

  function renderResultGuesses() {
    if (!els.resultGuesses) return;
    els.resultGuesses.innerHTML = "";
    guesses.forEach((g, i) => {
      const row = document.createElement("div");
      row.className = "result-guess-row";
      row.textContent = `Guess ${i + 1}: ${g.text}`;
      els.resultGuesses.appendChild(row);
    });
  }

  function finish(won) {
    finished = true;
    // Count stats for EVERY game (today + archive), but only once per day.
    const gameDay = archiveMode ? archiveDayNum : Stats.todayNumber();
    if (!Stats.isCountedDay(gameDay)) {
      Stats.markCountedDay(gameDay);
      Stats.updateStats({ won, attempts: guesses.length });
    }
    resultSaved = true;
    saveState();

    if (els.guessArea)    els.guessArea.style.display    = "none";
    if (els.guessLogCard) els.guessLogCard.style.display = "none";
    if (els.pageTitleBlock) els.pageTitleBlock.style.display = "none";
    if (els.stickerGrid)  els.stickerGrid.style.display  = "none";
    hideSuggestions();

    renderPlayerCard();
    renderMatchLog();
    renderResultGuesses();
    maybeFetchImage();

    const puzzleNum = getPuzzleNumber();
    renderSharePreview(puzzleNum);
    if (els.shareText)   els.shareText.classList.toggle("hidden", archiveMode);
    if (els.shareButton) els.shareButton.classList.toggle("hidden", archiveMode);
    const squadPrompt = document.getElementById("resultSquadPrompt");
    if (squadPrompt) squadPrompt.classList.toggle("hidden", archiveMode);

    if (els.result) els.result.classList.remove("hidden");
    startCountdown();
    updateArchiveNav();
    window.scrollTo({ top: 0 });

    // Community: submit this result then show distribution
    submitAndFetchCommunity(
      archiveMode ? archiveDayNum : Stats.todayNumber(),
      guesses.length,
      won
    );
  }

  // ─── Guess submission ──────────────────────────────────────────────────

  function submitGuess(text) {
    if (finished || !puzzle) return;
    const trimmed = text.trim();
    const correct = trimmed ? isMatch(trimmed, puzzle) : false;
    const display = trimmed || "(skipped)";
    guesses.push({ text: display, correct, skipped: !trimmed });
    saveState();

    renderGuesses();
    renderClues();
    if (els.guessInput) { els.guessInput.value = ""; els.guessInput.blur(); }
    hideSuggestions();

    if (correct) { finish(true); return; }
    if (guesses.length >= MAX_GUESSES) finish(false);
  }

  // ─── Autocomplete ──────────────────────────────────────────────────────

  function buildSuggestionIndex() {
    const items = [];
    puzzles.forEach(p => {
      allNamesFor(p).forEach(name => {
        items.push({ display: name, normalized: normalize(name), puzzle: p });
      });
    });
    return items;
  }

  let suggestionIndex  = [];
  let activeSuggestion = -1;

  function showSuggestions(query) {
    const n = normalize(query);
    if (!n) return hideSuggestions();
    const seen    = new Set();
    const matches = [];
    for (const item of suggestionIndex) {
      if (!item.normalized.includes(n)) continue;
      const key = item.puzzle.answer + "|" + item.display;
      if (seen.has(key)) continue;
      seen.add(key);
      matches.push(item);
      if (matches.length >= 8) break;
    }
    if (!matches.length) return hideSuggestions();

    if (!els.suggestions) return;
    els.suggestions.innerHTML = "";
    matches.forEach((m, i) => {
      const li = document.createElement("li");
      li.textContent  = m.display;
      li.dataset.index = String(i);
      li.addEventListener("mousedown", e => {
        e.preventDefault();
        if (els.guessInput) { els.guessInput.value = m.display; els.guessInput.focus(); }
        hideSuggestions();
      });
      els.suggestions.appendChild(li);
    });
    activeSuggestion = -1;
  }

  function hideSuggestions() {
    if (els.suggestions) els.suggestions.innerHTML = "";
    activeSuggestion = -1;
  }

  function moveSuggestion(delta) {
    if (!els.suggestions) return;
    const items = Array.from(els.suggestions.children);
    if (!items.length) return;
    activeSuggestion = (activeSuggestion + delta + items.length) % items.length;
    items.forEach((it, i) => it.classList.toggle("active", i === activeSuggestion));
    if (els.guessInput) els.guessInput.value = items[activeSuggestion].textContent;
  }

  // ─── Sticker reset ─────────────────────────────────────────────────────

  function resetStickerStates() {
    if (els.stickerPosition) els.stickerPosition.classList.add("locked");
    if (els.stickerGoals)    els.stickerGoals.classList.add("locked");
    if (els.stickerAge)      els.stickerAge.classList.add("locked");
    if (els.stickerClub)     els.stickerClub.classList.add("locked");
    if (els.photoSlot) {
      els.photoSlot.classList.add("locked");
      els.photoSlot.classList.remove("revealed");
    }
    if (els.cluePosition)    els.cluePosition.textContent    = "·";
    if (els.clueGoals)       els.clueGoals.textContent       = "·";
    if (els.clueAge)         els.clueAge.textContent         = "·";
    if (els.clueClubCountry) els.clueClubCountry.textContent = "·";
    if (els.clueClub)        els.clueClub.textContent        = "·";
    const ph = document.querySelector(".portrait-placeholder");
    if (ph) ph.style.display = "";
  }

  function showGameUI() {
    stopCountdown();
    const navEl = document.getElementById("archiveNav");
    if (navEl) navEl.classList.add("hidden");
    if (els.guessArea)    els.guessArea.style.display    = "";
    if (els.guessLogCard) els.guessLogCard.style.display = "";
    if (els.pageTitleBlock) els.pageTitleBlock.style.display = "";
    if (els.stickerGrid)  els.stickerGrid.style.display  = "";
    if (els.result)       els.result.classList.add("hidden");
  }

  // ─── Game flow ─────────────────────────────────────────────────────────

  function startNewGame() {
    archiveMode   = false;
    archiveDayNum = null;
    clearState();
    puzzle     = pickPuzzleForDay(Stats.todayNumber());
    guesses    = [];
    finished   = false;
    imageFetched = false;
    resultSaved  = false;
    if (els.playerImage) els.playerImage.removeAttribute("src");
    if (els.playerImageResult) els.playerImageResult.removeAttribute("src");
    resetStickerStates();
    showGameUI();
    if (els.archiveBanner) els.archiveBanner.classList.add("hidden");
    if (els.albumView)     els.albumView.classList.add("hidden");
    updatePageNumbers();
    renderClues();
    renderGuesses();
    saveState();
  }

  function loadArchiveGame(dayNum) {
    archiveMode   = true;
    archiveDayNum = dayNum;
    resultSaved   = false;
    imageFetched  = false;
    if (els.playerImage) els.playerImage.removeAttribute("src");
    if (els.playerImageResult) els.playerImageResult.removeAttribute("src");

    const saved = Stats.getArchiveState(dayNum);
    if (saved && saved.puzzleId) {
      const found = puzzles.find(p => p.id === saved.puzzleId);
      if (found) {
        puzzle  = found;
        guesses = saved.guesses || [];
        finished = !!saved.finished;
        resultSaved = !!saved.resultSaved;
        resetStickerStates();
        renderArchiveUI();
        return;
      }
    }
    puzzle   = pickPuzzleForDay(dayNum);
    guesses  = [];
    finished = false;
    resetStickerStates();
    renderArchiveUI();
    saveState();
  }

  function renderArchiveUI() {
    if (els.archiveBanner) els.archiveBanner.classList.remove("hidden");
    const puzzleNum = getPuzzleNumber();
    const date    = Stats.dateForDay(archiveDayNum);
    const dateStr = date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    if (els.archiveBannerText) els.archiveBannerText.textContent = `Archive · Page ${puzzleNum} (${dateStr})`;
    updatePageNumbers();
    renderCluesFromState();
    renderGuesses();

    if (finished) {
      if (els.guessArea)    els.guessArea.style.display    = "none";
      if (els.guessLogCard) els.guessLogCard.style.display = "none";
      if (els.pageTitleBlock) els.pageTitleBlock.style.display = "none";
      if (els.stickerGrid)  els.stickerGrid.style.display  = "none";
      renderPlayerCard();
      renderMatchLog();
      renderResultGuesses();
      maybeFetchImage();
      renderSharePreview(puzzleNum);
      if (els.shareText)   els.shareText.classList.add("hidden");
      if (els.shareButton) els.shareButton.classList.add("hidden");
      const squadPromptA = document.getElementById("resultSquadPrompt");
      if (squadPromptA) squadPromptA.classList.add("hidden");
      if (els.result)      els.result.classList.remove("hidden");
      startCountdown();
      updateArchiveNav();
      window.scrollTo({ top: 0 });

      // Community: fetch stats for this archive day (no submit in archive)
      fetchAndRenderCommunity(
        archiveDayNum,
        guesses.length,
        guesses.some(g => g.correct)
      );
    } else {
      showGameUI();
      updateArchiveNav();
    }
  }

  function goBackToToday() {
    archiveMode   = false;
    archiveDayNum = null;
    imageFetched  = false;
    if (els.archiveBanner) els.archiveBanner.classList.add("hidden");
    if (els.albumView)     els.albumView.classList.add("hidden");
    if (els.shareText)   els.shareText.classList.remove("hidden");
    if (els.shareButton) els.shareButton.classList.remove("hidden");
    const squadPromptB = document.getElementById("resultSquadPrompt");
    if (squadPromptB) squadPromptB.classList.remove("hidden");
    resetStickerStates();
    restoreOrStart();
  }

  function restoreOrStart() {
    archiveMode   = false;
    archiveDayNum = null;
    imageFetched  = false;
    if (els.playerImage) els.playerImage.removeAttribute("src");
    if (els.playerImageResult) els.playerImageResult.removeAttribute("src");
    if (els.archiveBanner) els.archiveBanner.classList.add("hidden");
    if (els.albumView)     els.albumView.classList.add("hidden");

    const saved = loadState();
    if (saved) {
      const found = puzzles.find(p => p.id === saved.puzzleId);
      if (found) {
        puzzle   = found;
        guesses  = saved.guesses || [];
        finished = !!saved.finished;
        saveState();
        resetStickerStates();
        showGameUI();
        updatePageNumbers();
        renderCluesFromState();
        renderGuesses();
        if (finished) {
          if (els.guessArea)    els.guessArea.style.display    = "none";
          if (els.guessLogCard) els.guessLogCard.style.display = "none";
          if (els.pageTitleBlock) els.pageTitleBlock.style.display = "none";
          if (els.stickerGrid)  els.stickerGrid.style.display  = "none";
          renderPlayerCard();
          renderMatchLog();
          renderResultGuesses();
          maybeFetchImage();
          renderSharePreview(getPuzzleNumber());
          if (els.shareText)   els.shareText.classList.remove("hidden");
          if (els.shareButton) els.shareButton.classList.remove("hidden");
          if (els.result)      els.result.classList.remove("hidden");
          startCountdown();
          updateArchiveNav();
          window.scrollTo({ top: 0 });

          // Community: fetch only (already submitted when they first finished)
          fetchAndRenderCommunity(
            Stats.todayNumber(),
            guesses.length,
            guesses.some(g => g.correct)
          );
        }
        return;
      }
    }
    startNewGame();
  }

  // ─── Archive nav (prev/next) ───────────────────────────────────────────

  function updateArchiveNav() {
    const navEl  = document.getElementById("archiveNav");
    const prevBtn = document.getElementById("archivePrev");
    const nextBtn = document.getElementById("archiveNext");
    if (!navEl || !prevBtn || !nextBtn) return;
    if (!archiveMode || !finished) { navEl.classList.add("hidden"); return; }
    navEl.classList.remove("hidden");
    const today = Stats.todayNumber();
    prevBtn.disabled = archiveDayNum <= 0;
    nextBtn.disabled = archiveDayNum >= today;
    nextBtn.textContent = (archiveDayNum === today - 1) ? "Today →" : "Next day →";
  }

  // ─── Stats modal ───────────────────────────────────────────────────────

  function openStatsModal() {
    renderStatsModal();
    const modal = document.getElementById("statsModal");
    if (modal) modal.classList.remove("hidden");
    // Stats modal community section ALWAYS shows today's player —
    // independent of whether you're currently browsing an archive day.
    // This keeps the modal a stable "overview" rather than context-switching.
    (async () => {
      if (typeof window.Community === "undefined") return;
      const el = document.getElementById("statsCommunityChart");
      if (!el) return;
      el.innerHTML = '<p class="community-empty">Loading…</p>';
      const todayNum = Stats.todayNumber();
      const stats = await window.Community.fetchStats({ nationSlug: cfg.slug, dayNumber: todayNum });

      // Highlight the user's bar only if they've finished TODAY's puzzle
      // (not an archive day). Check today's saved state, not current play state.
      let userGuessesUsed = null;
      let userWon         = false;
      const todayState = Stats.getDayState();
      if (todayState && todayState.day === todayNum && todayState.finished) {
        const tg = todayState.guesses || [];
        userGuessesUsed = tg.length;
        userWon         = tg.some(g => g.correct);
      }
      el.innerHTML = buildCommunityChartHTML(stats, userGuessesUsed, userWon);
    })();
  }

  function closeStatsModal() {
    const modal = document.getElementById("statsModal");
    if (modal) modal.classList.add("hidden");
  }

  function renderStatsModal() {
    const s = Stats.getStats();
    const setEl = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    setEl("statPlayed", s.gamesPlayed);
    setEl("statWon",    s.gamesWon);
    setEl("statPct",    s.winPercentage);
    setEl("statStreak", s.currentStreak);
    setEl("statMax",    s.maxStreak);

    const chart = document.getElementById("distChart");
    if (!chart) return;
    chart.innerHTML = "";
    const maxVal = Math.max(...s.guesses, 1);
    const lastWinIdx = finished && guesses.some(g => g.correct) ? guesses.length - 1 : -1;
    for (let i = 0; i < s.guesses.length; i++) {
      const row   = document.createElement("div");
      row.className = "dist-row";
      const label = document.createElement("span");
      label.className = "dist-label";
      label.textContent = i + 1;
      const bar = document.createElement("div");
      bar.className = "dist-bar" + (i === lastWinIdx ? " highlight" : "");
      bar.style.width = Math.max((s.guesses[i] / maxVal) * 100, 8) + "%";
      bar.textContent = s.guesses[i];
      row.appendChild(label);
      row.appendChild(bar);
      chart.appendChild(row);
    }
  }

  // ─── Archive modal ─────────────────────────────────────────────────────

  function openArchiveModal() {
    renderArchiveList();
    const modal = document.getElementById("archiveModal");
    if (modal) modal.classList.remove("hidden");
  }

  function closeArchiveModal() {
    const modal = document.getElementById("archiveModal");
    if (modal) modal.classList.add("hidden");
  }

  function renderArchiveList() {
    const list = document.getElementById("archiveList");
    if (!list) return;
    list.innerHTML = "";
    const today = Stats.todayNumber();
    if (today === 0) {
      list.innerHTML = '<p style="color:var(--ink-soft);text-align:center;padding:20px">No past pages yet!</p>';
      return;
    }
    for (let d = today - 1; d >= 0; d--) {
      const item    = document.createElement("div");
      item.className = "archive-item";
      const date    = Stats.dateForDay(d);
      const dateStr = date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
      const saved   = Stats.getArchiveState(d);
      let statusIcon = "";
      if (saved && saved.finished) {
        const won = (saved.guesses || []).some(g => g.correct);
        statusIcon = won ? "✓" : "✕";
      }
      item.innerHTML = `
        <div class="archive-item-info">
          <span class="archive-item-num">Page ${d + 1}</span>
          <span class="archive-item-date">${dateStr}</span>
        </div>
        <span style="font-size:1.1rem;font-weight:700;color:${statusIcon==="✓"?"var(--pitch)":"var(--red)"}">${statusIcon}</span>`;
      item.addEventListener("click", () => { closeArchiveModal(); loadArchiveGame(d); });
      list.appendChild(item);
    }
  }

  // ─── Album view ────────────────────────────────────────────────────────

  const ALBUM_TOTAL = 200;

  function getCachedThumb(id)       { return localStorage.getItem(`wc26-${cfg.slug}-thumb-${id}`); }
  function setCachedThumb(id, src)  { try { localStorage.setItem(`wc26-${cfg.slug}-thumb-${id}`, src); } catch {} }

  async function fetchAlbumThumb(p) {
    if (!p) return null;
    const cached = getCachedThumb(p.id);
    if (cached) return cached;
    if (p.imageUrl) { setCachedThumb(p.id, p.imageUrl); return p.imageUrl; }
    const title = encodeURIComponent(p.wikipediaTitle || p.answer);
    try {
      const res  = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${title}`);
      if (!res.ok) return null;
      const data = await res.json();
      let src = data.thumbnail?.source || data.originalimage?.source || null;
      if (src) {
        src = src.replace(/\/\d+px-/, "/600px-");
        setCachedThumb(p.id, src);
      }
      return src;
    } catch { return null; }
  }

  function getDayStatus(dayNum) {
    const today = Stats.todayNumber();
    if (dayNum > today) return { state: "upcoming", puzzle: null, guesses: [] };
    const archived = Stats.getArchiveState(dayNum);
    if (!archived || !archived.finished) return { state: "unplayed", puzzle: null, guesses: [] };
    const p   = puzzles.find(pl => pl.id === archived.puzzleId) || null;
    const gs  = archived.guesses || [];
    const won = gs.some(g => g && g.correct);
    return { state: won ? "collected" : "missed", puzzle: p, guesses: gs };
  }

  function buildShotDots(guesses) {
    const wrap = document.createElement("div");
    wrap.className = "album-slot-shots";
    for (let i = 0; i < 5; i++) {
      const dot = document.createElement("span");
      const g = guesses[i];
      if (!g)         dot.className = "shot-dot shot-dot-empty";
      else if (g.correct) dot.className = "shot-dot shot-dot-hit";
      else            dot.className = "shot-dot shot-dot-miss";
      wrap.appendChild(dot);
    }
    return wrap;
  }

  function buildAlbumSlot(dayNum, status) {
    const num  = dayNum + 1;
    const cell = document.createElement("div");
    cell.className = "album-cell";
    const slot = document.createElement("div");
    slot.className = "album-slot";
    cell.appendChild(slot);

    if (status.state === "upcoming" || status.state === "unplayed") {
      slot.classList.add("upcoming");
      slot.innerHTML = `<span class="album-slot-q">?</span><span class="album-slot-upcoming-day">№${num}</span>`;
      if (status.state === "unplayed") {
        cell.classList.add("album-cell-clickable");
        cell.addEventListener("click", () => {
          const today = Stats.todayNumber();
          if (dayNum === today) {
            closeAlbumView();
          } else {
            if (els.albumView) els.albumView.classList.add("hidden");
            loadArchiveGame(dayNum);
          }
        });
      }
      return cell;
    }

    if (status.state === "missed") {
      slot.classList.add("missed");
      const name = status.puzzle ? escapeHtml(status.puzzle.answer) : "";
      slot.innerHTML = `
        <span class="album-slot-missed-day">№${num}</span>
        <span class="album-slot-missed-icon">👤</span>
        <span class="album-slot-missed-label">MISSED</span>
        <span class="album-slot-missed-name">${name}</span>`;
      cell.appendChild(buildShotDots(status.guesses));
      return cell;
    }

    // collected
    const p = status.puzzle;
    if (!p) {
      slot.classList.add("missed");
      slot.innerHTML = `<span class="album-slot-missed-day">№${num}</span><span class="album-slot-missed-icon">👤</span><span class="album-slot-missed-label">MISSED</span>`;
      cell.appendChild(buildShotDots(status.guesses));
      return cell;
    }

    slot.classList.add("collected");
    slot.innerHTML = `
      <img class="album-slot-img" alt="${escapeHtml(p.answer)}" />
      <div class="album-slot-meta">
        <span class="album-slot-name">${escapeHtml(p.answer.toUpperCase())}</span>
        <span class="album-slot-detail">${cfg.flag || ""} WC 2026</span>
      </div>
      <span class="album-slot-day">№${num}</span>
      <span class="foil-overlay"></span>`;
    const img    = slot.querySelector(".album-slot-img");
    const cached = getCachedThumb(p.id);
    if (cached) {
      img.src = cached;
    } else {
      fetchAlbumThumb(p).then(src => { if (src) img.src = src; });
    }
    cell.appendChild(buildShotDots(status.guesses));
    return cell;
  }

  function openAlbumView() {
    if (els.pageTitleBlock) els.pageTitleBlock.style.display = "none";
    if (els.stickerGrid)    els.stickerGrid.style.display    = "none";
    if (els.guessArea)      els.guessArea.style.display      = "none";
    if (els.guessLogCard)   els.guessLogCard.style.display   = "none";
    if (els.archiveBanner)  els.archiveBanner.classList.add("hidden");
    if (els.result)         els.result.classList.add("hidden");

    if (els.albumGrid) els.albumGrid.innerHTML = "";

    const today   = Stats.todayNumber();
    let collected = 0;
    const total   = Math.min(today + 1, ALBUM_TOTAL);

    for (let d = 0; d < total; d++) {
      const status = getDayStatus(d);
      if (status.state === "collected") collected++;
      const cell = buildAlbumSlot(d, status);
      if (els.albumGrid) els.albumGrid.appendChild(cell);
    }

    const pct = total > 0 ? Math.round((collected / total) * 100) : 0;
    if (els.albumPct)  els.albumPct.textContent  = `${collected}/${total} collected · ${pct}%`;
    if (els.albumFill) els.albumFill.style.width = `${pct}%`;

    if (els.albumView) els.albumView.classList.remove("hidden");
    window.scrollTo({ top: 0 });
  }

  function closeAlbumView() {
    if (els.albumView) els.albumView.classList.add("hidden");
    restoreOrStart();
  }

  // ─── Community stats ───────────────────────────────────────────────────

  // Shared chart builder — used by result screen and stats modal
  function buildCommunityChartHTML(stats, userGuessesUsed, won) {
    if (!stats || !stats.total) {
      return '<p class="community-empty">No data yet: be the first!</p>';
    }
    const { total, wins, dist } = stats;
    const winPct  = Math.round((wins / total) * 100);
    const userKey = (userGuessesUsed != null) ? (won ? String(userGuessesUsed) : "miss") : null;
    const rows    = [
      { key: "1", label: "1" }, { key: "2", label: "2" },
      { key: "3", label: "3" }, { key: "4", label: "4" },
      { key: "5", label: "5" }, { key: "miss", label: "✕" }
    ];
    const maxVal = Math.max(...rows.map(r => dist[r.key] || 0), 1);
    let html = `
      <div class="community-header">
        <span class="community-title">COMMUNITY</span>
        <span class="community-meta">${total} ${total !== 1 ? "tries" : "try"} · ${winPct}% solved</span>
      </div>
      <div class="community-chart">`;
    for (const row of rows) {
      const count = dist[row.key] || 0;
      const pct   = total > 0 ? Math.round((count / total) * 100) : 0;
      const width = count > 0 ? Math.max((count / maxVal) * 100, 4) : 0;
      const isYou = userKey !== null && row.key === userKey;
      html += `
        <div class="community-row${isYou ? " community-row-you" : ""}">
          <span class="community-label">${row.label}</span>
          <div class="community-bar-wrap">
            <div class="community-bar" style="width:${width}%"></div>
          </div>
          <span class="community-count">${pct}%</span>
        </div>`;
    }
    return html + `</div>`;
  }

  function renderCommunityStats(stats, userGuessesUsed, won) {
    const el = document.getElementById("communityStats");
    if (!el) return;
    el.classList.remove("hidden");
    if (!stats || !stats.total) {
      el.innerHTML = '<p class="community-empty">Be the first to play today!</p>';
      return;
    }
    el.innerHTML = buildCommunityChartHTML(stats, userGuessesUsed, won);
  }

  async function submitAndFetchCommunity(dayNumber, guessesUsed, won) {
    if (typeof window.Community === "undefined") return;
    await window.Community.submit({
      nationSlug:  cfg.slug,
      puzzleId:    puzzle.id,
      dayNumber,
      guessesUsed,
      won
    });
    const stats = await window.Community.fetchStats({ nationSlug: cfg.slug, dayNumber });
    renderCommunityStats(stats, guessesUsed, won);
  }

  async function fetchAndRenderCommunity(dayNumber, guessesUsed, won) {
    if (typeof window.Community === "undefined") return;
    const stats = await window.Community.fetchStats({ nationSlug: cfg.slug, dayNumber });
    renderCommunityStats(stats, guessesUsed, won);
  }

  // ─── Countdown ─────────────────────────────────────────────────────────

  let countdownInterval = null;

  function tickCountdown() {
    const el = document.getElementById("countdownTime");
    if (!el) return;
    const now      = new Date();
    const tomorrow = new Date(now);
    tomorrow.setHours(24, 0, 0, 0);
    let ms = Math.max(0, tomorrow - now);
    const h  = Math.floor(ms / 3600000);
    const m  = Math.floor((ms % 3600000) / 60000);
    const s  = Math.floor((ms % 60000) / 1000);
    const fmt = n => String(n).padStart(2, "0");
    el.textContent = `${fmt(h)}:${fmt(m)}:${fmt(s)}`;
  }

  function startCountdown() {
    stopCountdown();
    tickCountdown();
    countdownInterval = setInterval(tickCountdown, 1000);
  }

  function stopCountdown() {
    if (countdownInterval) { clearInterval(countdownInterval); countdownInterval = null; }
  }

  // ─── Copy stats ───────────────────────────────────────────────────────────

  async function copyStats() {
    const s    = Stats.getStats();
    const slug = cfg.slug || "nation";
    const dist = s.guesses.map((n, i) => `${i + 1}✕${n}`).join("  ");
    const text = [
      `${cfg.flag || ""} ${cfg.name.toUpperCase()} · ICONED WC26`,
      `Played ${s.gamesPlayed} · Won ${s.gamesWon} · ${s.winPercentage}%`,
      `Streak ${s.currentStreak} · Best ${s.maxStreak}`,
      `Guesses: ${dist}`,
      `https://www.iconed.wtf/nations/${slug}/`,
    ].join("\n");
    const btn = document.getElementById("copyStatsBtn");
    try {
      await navigator.clipboard.writeText(text);
      if (btn) { btn.textContent = "COPIED!"; setTimeout(() => { btn.textContent = "SHARE YOUR SCORE"; }, 1500); }
    } catch {
      if (btn) { btn.textContent = "FAILED"; setTimeout(() => { btn.textContent = "SHARE YOUR SCORE"; }, 1500); }
    }
  }

  // ─── Transfer (export / import) ────────────────────────────────────────

  function toBase64(str) {
    const bytes = new TextEncoder().encode(str);
    let bin = "";
    for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return btoa(bin);
  }

  function fromBase64(b64) {
    const bin   = atob(b64.trim());
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new TextDecoder().decode(bytes);
  }

  function buildExportCode() {
    const data = {};
    const prefix = `wc26-${cfg.slug}-`;
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k.startsWith(prefix)) data[k] = localStorage.getItem(k);
    }
    return toBase64(JSON.stringify(data));
  }

  function openTransferModal() {
    closeStatsModal();
    const code = document.getElementById("exportCode");
    const imp  = document.getElementById("importCode");
    const msg  = document.getElementById("transferMsg");
    if (code) code.value = buildExportCode();
    if (imp)  imp.value  = "";
    if (msg)  { msg.classList.add("hidden"); msg.className = "transfer-msg hidden"; }
    const modal = document.getElementById("transferModal");
    if (modal) modal.classList.remove("hidden");
  }

  function closeTransferModal() {
    const modal = document.getElementById("transferModal");
    if (modal) modal.classList.add("hidden");
  }

  async function copyExportCode() {
    const btn = document.getElementById("copyExportCode");
    try {
      await navigator.clipboard.writeText(document.getElementById("exportCode").value);
      if (btn) { btn.textContent = "COPIED!"; setTimeout(() => btn.textContent = "COPY CODE", 1500); }
    } catch {
      if (btn) { btn.textContent = "FAILED"; setTimeout(() => btn.textContent = "COPY CODE", 1500); }
    }
  }

  function importStats() {
    const code = document.getElementById("importCode");
    const msg  = document.getElementById("transferMsg");
    if (!code || !code.value.trim()) {
      if (msg) { msg.textContent = "Paste a transfer code first."; msg.className = "transfer-msg error"; }
      return;
    }
    try {
      const json   = fromBase64(code.value.trim());
      const data   = JSON.parse(json);
      const prefix = `wc26-${cfg.slug}-`;
      const keys   = Object.keys(data).filter(k => k.startsWith(prefix));
      if (!keys.length) throw new Error("No matching stats found");
      if (!confirm("This will replace your current stats. Continue?")) return;
      keys.forEach(k => localStorage.setItem(k, data[k]));
      if (msg) { msg.textContent = "Stats imported successfully!"; msg.className = "transfer-msg success"; }
      resultSaved = false;
      restoreOrStart();
    } catch {
      if (msg) { msg.textContent = "Invalid transfer code. Please check and try again."; msg.className = "transfer-msg error"; }
    }
  }

  // ─── Consent ───────────────────────────────────────────────────────────

  function initConsent() {
    const overlay    = document.getElementById("consentOverlay");
    const acceptBtn  = document.getElementById("consentAccept");
    const declineBtn = document.getElementById("consentDecline");
    const settingsLink = document.getElementById("cookieSettingsLink");
    if (!overlay) return;
    const key = `wc26-${cfg.slug}-consent`;
    if (localStorage.getItem(key)) overlay.classList.add("hidden");
    if (acceptBtn)  acceptBtn.addEventListener("click",  () => { localStorage.setItem(key, "accepted");  overlay.classList.add("hidden"); });
    if (declineBtn) declineBtn.addEventListener("click", () => { localStorage.setItem(key, "declined"); overlay.classList.add("hidden"); });
    if (settingsLink) settingsLink.addEventListener("click", () => overlay.classList.remove("hidden"));
  }

  // ─── Event bindings ────────────────────────────────────────────────────

  function bindEvents() {
    if (els.guessButton) els.guessButton.addEventListener("click", () => submitGuess(els.guessInput?.value || ""));

    if (els.guessInput) {
      els.guessInput.addEventListener("input",   e  => showSuggestions(e.target.value));
      els.guessInput.addEventListener("keydown", e => {
        if (e.key === "ArrowDown") { e.preventDefault(); moveSuggestion(1); }
        else if (e.key === "ArrowUp")   { e.preventDefault(); moveSuggestion(-1); }
        else if (e.key === "Enter")     { e.preventDefault(); submitGuess(els.guessInput.value); }
        else if (e.key === "Escape")    { hideSuggestions(); }
      });
      els.guessInput.addEventListener("blur", () => setTimeout(hideSuggestions, 120));
    }

    if (els.shareButton) {
      els.shareButton.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(buildShareText(getPuzzleNumber()));
          els.shareButton.textContent = "COPIED!";
          setTimeout(() => els.shareButton.textContent = "SHARE RESULT!", 1500);
        } catch {
          els.shareButton.textContent = "COPY FAILED";
        }
      });
    }

    if (els.archiveButton) els.archiveButton.addEventListener("click", openAlbumView);
    if (els.albumBack)     els.albumBack.addEventListener("click", closeAlbumView);

    const resultSquadLink = document.getElementById("resultSquadLink");
    if (resultSquadLink) resultSquadLink.addEventListener("click", e => { e.preventDefault(); openArchiveModal(); });
    if (els.backToToday)   els.backToToday.addEventListener("click", goBackToToday);

    const wordmarkLink = document.getElementById("wordmarkLink");
    if (wordmarkLink) wordmarkLink.addEventListener("click", () => { window.location.href = "/nations/"; });

    const archiveToggle = document.getElementById("archiveToggle");
    if (archiveToggle) archiveToggle.addEventListener("click", openArchiveModal);
    const archiveClose = document.getElementById("archiveClose");
    if (archiveClose) archiveClose.addEventListener("click", closeArchiveModal);
    const archiveModal = document.getElementById("archiveModal");
    if (archiveModal) archiveModal.addEventListener("click", e => { if (e.target === archiveModal) closeArchiveModal(); });
    const archiveOpenAlbum = document.getElementById("archiveOpenAlbum");
    if (archiveOpenAlbum) archiveOpenAlbum.addEventListener("click", () => { closeArchiveModal(); openAlbumView(); });

    const rulesToggle = document.getElementById("rulesToggle");
    const rulesClose  = document.getElementById("rulesClose");
    const rulesModal  = document.getElementById("rulesModal");
    if (rulesToggle) rulesToggle.addEventListener("click", () => rulesModal?.classList.remove("hidden"));
    if (rulesClose)  rulesClose.addEventListener("click",  () => rulesModal?.classList.add("hidden"));
    if (rulesModal)  rulesModal.addEventListener("click",  e  => { if (e.target === rulesModal) rulesModal.classList.add("hidden"); });

    const statsToggle = document.getElementById("statsToggle");
    const statsClose  = document.getElementById("statsClose");
    const statsModal  = document.getElementById("statsModal");
    if (statsToggle) statsToggle.addEventListener("click", openStatsModal);
    if (statsClose)  statsClose.addEventListener("click",  closeStatsModal);
    if (statsModal)  statsModal.addEventListener("click",  e => { if (e.target === statsModal) closeStatsModal(); });

    const resetBtn = document.getElementById("resetStats");
    if (resetBtn) resetBtn.addEventListener("click", () => {
      if (confirm("Reset all stats? This cannot be undone.")) { Stats.resetStats(); renderStatsModal(); }
    });

    const archivePrev = document.getElementById("archivePrev");
    const archiveNext = document.getElementById("archiveNext");
    if (archivePrev) archivePrev.addEventListener("click", () => {
      if (archiveDayNum > 0) { if (els.albumView) els.albumView.classList.add("hidden"); loadArchiveGame(archiveDayNum - 1); }
    });
    if (archiveNext) archiveNext.addEventListener("click", () => {
      const today = Stats.todayNumber();
      if (archiveDayNum < today - 1) {
        if (els.albumView) els.albumView.classList.add("hidden");
        loadArchiveGame(archiveDayNum + 1);
      } else if (archiveDayNum === today - 1) {
        goBackToToday();
      }
    });

    const transferToggle = document.getElementById("transferToggle");
    const transferClose  = document.getElementById("transferClose");
    const transferModal  = document.getElementById("transferModal");
    if (transferToggle) transferToggle.addEventListener("click", openTransferModal);
    if (transferClose)  transferClose.addEventListener("click",  closeTransferModal);
    if (transferModal)  transferModal.addEventListener("click",  e => { if (e.target === transferModal) closeTransferModal(); });
    const copyExportBtn = document.getElementById("copyExportCode");
    const importBtn     = document.getElementById("importStatsBtn");
    if (copyExportBtn) copyExportBtn.addEventListener("click", copyExportCode);
    if (importBtn)     importBtn.addEventListener("click", importStats);

    const copyStatsBtn = document.getElementById("copyStatsBtn");
    if (copyStatsBtn) copyStatsBtn.addEventListener("click", copyStats);
  }

  // ─── Init ──────────────────────────────────────────────────────────────

  function cleanupCorruptedArchive() {
    const validIds = new Set(puzzles.map(p => p.id));
    let cleaned = 0;
    for (let d = 0; d < ALBUM_TOTAL; d++) {
      const archived = Stats.getArchiveState(d);
      if (!archived || !archived.puzzleId) continue;
      if (!validIds.has(archived.puzzleId)) {
        localStorage.removeItem(`wc26-${cfg.slug}-archive-${d}`);
        cleaned++;
      }
    }
    const dayState = Stats.getDayState();
    if (dayState && dayState.puzzleId && !validIds.has(dayState.puzzleId)) {
      Stats.clearDayState();
    }
  }

  async function init() {
    initConsent();
    if (Array.isArray(window.PUZZLES)) {
      puzzles = window.PUZZLES;
    } else {
      document.body.innerHTML = "<p style='color:var(--red);padding:20px'>No player data loaded.</p>";
      return;
    }
    suggestionIndex = buildSuggestionIndex();
    cleanupCorruptedArchive();
    bindEvents();
    restoreOrStart();
  }

  init();
})();
