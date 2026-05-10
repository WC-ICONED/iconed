(() => {
  const MAX_GUESSES = 5;

  const FLAG = {
    Argentina: "🇦🇷", Australia: "🇦🇺", Belgium: "🇧🇪", Brazil: "🇧🇷",
    Bulgaria: "🇧🇬", Cameroon: "🇨🇲", Chile: "🇨🇱", Colombia: "🇨🇴",
    Croatia: "🇭🇷", Denmark: "🇩🇰", Egypt: "🇪🇬", England: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    France: "🇫🇷", Germany: "🇩🇪", Ghana: "🇬🇭", Hungary: "🇭🇺",
    Iran: "🇮🇷", Italy: "🇮🇹", "Ivory Coast": "🇨🇮", Japan: "🇯🇵",
    Mexico: "🇲🇽", Morocco: "🇲🇦", Netherlands: "🇳🇱", Nigeria: "🇳🇬",
    Paraguay: "🇵🇾", Poland: "🇵🇱", Portugal: "🇵🇹", Romania: "🇷🇴",
    Senegal: "🇸🇳", "South Korea": "🇰🇷", Spain: "🇪🇸", Sweden: "🇸🇪",
    "United States": "🇺🇸", Uruguay: "🇺🇾", "West Germany": "🇩🇪",
    Yugoslavia: "🇷🇸"
  };

  let puzzles = [];
  let puzzle = null;
  let guesses = [];
  let finished = false;
  let imageFetched = false;
  let archiveMode = false;
  let archiveDayNum = null;

  const els = {
    pageLabel: document.getElementById("pageLabel"),
    pageKicker: document.getElementById("pageKicker"),
    spineTitle: document.getElementById("spineTitle"),
    pageTitleBlock: document.getElementById("pageTitleBlock"),
    clueYear: document.getElementById("clueYear"),
    clueNationality: document.getElementById("clueNationality"),
    clueClub: document.getElementById("clueClub"),
    stickerAge: document.getElementById("sticker-age"),
    clueAge: document.getElementById("clueAge"),
    stickerPosition: document.getElementById("sticker-position"),
    cluePosition: document.getElementById("cluePosition"),
    stickerShirt: document.getElementById("sticker-shirt"),
    clueShirt: document.getElementById("clueShirt"),
    photoSlot: document.getElementById("photoSlot"),
    photoPlaceholder: document.getElementById("photoPlaceholder"),
    playerImage: document.getElementById("player-image"),
    guessInput: document.getElementById("guessInput"),
    guessButton: document.getElementById("guessButton"),
    suggestions: document.getElementById("suggestions"),
    guessList: document.getElementById("guessList"),
    guessCount: document.getElementById("guessCount"),
    guessArea: document.getElementById("guessArea"),
    guessLogCard: document.getElementById("guessLogCard"),
    result: document.getElementById("result"),
    resultKicker: document.getElementById("resultKicker"),
    resultTitle: document.getElementById("resultTitle"),
    solvedStamp: document.getElementById("solvedStamp"),
    stickerNumber: document.getElementById("stickerNumber"),
    playerName: document.getElementById("playerName"),
    playerTags: document.getElementById("playerTags"),
    portraitNumber: document.getElementById("portraitNumber"),
    portraitMeta: document.getElementById("portraitMeta"),
    playerImageResult: document.getElementById("playerImageResult"),
    matchLogCells: document.getElementById("matchLogCells"),
    shareText: document.getElementById("shareText"),
    shareButton: document.getElementById("shareButton"),
    archiveButton: document.getElementById("archiveButton"),
    archiveBanner: document.getElementById("archiveBanner"),
    archiveBannerText: document.getElementById("archiveBannerText"),
    backToToday: document.getElementById("backToToday"),
    stickerGrid: document.getElementById("stickerGrid"),
    resultGuesses: document.getElementById("resultGuesses")
  };

  function normalize(s) {
    return s
      .toLowerCase()
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
    return allNamesFor(p).some((name) => normalize(name) === n);
  }

  function pickPuzzleForDay(dayNum) {
    const order = window.PUZZLE_ORDER || [];
    if (order.length) {
      const id = order[dayNum % order.length];
      const found = puzzles.find(p => p.id === id);
      if (found) return found;
    }
    return puzzles[dayNum % puzzles.length];
  }

  function getPuzzleNumber() {
    if (archiveMode) return archiveDayNum + 1;
    return Stats.todayNumber() + 1;
  }

  function updatePageNumbers() {
    const num = getPuzzleNumber();
    const dayNum = archiveMode ? archiveDayNum : Stats.todayNumber();
    els.pageLabel.textContent = `PAGE ${num}`;
    els.pageKicker.textContent = `Page ${num} · matchday №${dayNum + 1}`;
    els.spineTitle.textContent = "ICONED";
  }

  function saveState() {
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

  let resultSaved = false;

  function loadState() {
    const state = Stats.getDayState();
    if (!state) return null;
    if (state.day !== Stats.todayNumber()) {
      Stats.clearDayState();
      return null;
    }
    resultSaved = !!state.resultSaved;
    return state;
  }

  function clearState() {
    Stats.clearDayState();
    resultSaved = false;
  }

  function unlockSticker(stickerEl) {
    stickerEl.classList.remove("locked");
    stickerEl.classList.add("just-unlocked");
    setTimeout(() => stickerEl.classList.remove("just-unlocked"), 600);
  }

  function renderClues() {
    els.clueYear.textContent = puzzle.worldCupYear;
    const flag = FLAG[puzzle.nationality] || "";
    els.clueNationality.textContent = `${puzzle.nationality} ${flag}`.trim();
    els.clueClub.textContent = puzzle.club;

    const wrong = guesses.filter((g) => !g.correct).length;

    if (wrong >= 1) {
      if (els.stickerAge.classList.contains("locked")) unlockSticker(els.stickerAge);
      els.clueAge.textContent = puzzle.ageDuringWC ?? "Unknown";
    }

    if (wrong >= 2) {
      if (els.stickerPosition.classList.contains("locked")) unlockSticker(els.stickerPosition);
      els.cluePosition.textContent = puzzle.position ?? "Unknown";
    }

    if (wrong >= 3) {
      if (els.stickerShirt.classList.contains("locked")) unlockSticker(els.stickerShirt);
      if (puzzle.shirtNumberDuringWC == null) {
        els.clueShirt.textContent = puzzle.shirtNumberNote ? "N/A" : "Unknown";
      } else {
        els.clueShirt.textContent = `#${puzzle.shirtNumberDuringWC}`;
      }
    }

    if (wrong >= 4) {
      if (els.photoSlot.classList.contains("locked")) {
        els.photoSlot.classList.remove("locked");
        els.photoSlot.classList.add("revealed");
      }
      maybeFetchImage();
    }
  }

  function renderCluesFromState() {
    els.clueYear.textContent = puzzle.worldCupYear;
    const flag = FLAG[puzzle.nationality] || "";
    els.clueNationality.textContent = `${puzzle.nationality} ${flag}`.trim();
    els.clueClub.textContent = puzzle.club;

    const wrong = guesses.filter((g) => !g.correct).length;

    if (wrong >= 1) {
      els.stickerAge.classList.remove("locked");
      els.clueAge.textContent = puzzle.ageDuringWC ?? "Unknown";
    }
    if (wrong >= 2) {
      els.stickerPosition.classList.remove("locked");
      els.cluePosition.textContent = puzzle.position ?? "Unknown";
    }
    if (wrong >= 3) {
      els.stickerShirt.classList.remove("locked");
      if (puzzle.shirtNumberDuringWC == null) {
        els.clueShirt.textContent = puzzle.shirtNumberNote ? "N/A" : "Unknown";
      } else {
        els.clueShirt.textContent = `#${puzzle.shirtNumberDuringWC}`;
      }
    }
    if (wrong >= 4) {
      els.photoSlot.classList.remove("locked");
      els.photoSlot.classList.add("revealed");
      maybeFetchImage();
    }
  }

  async function maybeFetchImage() {
    if (imageFetched) return;
    imageFetched = true;
    if (puzzle.imageUrl) {
      setPlayerImage(puzzle.imageUrl);
      return;
    }
    const title = encodeURIComponent(puzzle.wikipediaTitle || puzzle.answer);
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${title}`;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("wiki fetch failed");
      const data = await res.json();
      const src = data.thumbnail?.source || data.originalimage?.source;
      if (src) {
        setPlayerImage(src);
      } else {
        showImageFallback();
      }
    } catch {
      showImageFallback();
    }
  }

  function setPlayerImage(src) {
    els.playerImage.src = src;
    els.playerImageResult.src = src;
    els.playerImageResult.onload = () => {
      const placeholder = document.querySelector(".portrait-placeholder");
      if (placeholder) placeholder.style.display = "none";
    };
  }

  function showImageFallback() {
    els.playerImage.alt = "No photo available";
    els.playerImage.classList.add("fallback");
  }

  function renderGuesses() {
    els.guessList.innerHTML = "";
    const used = guesses.length;
    const left = MAX_GUESSES - used;
    els.guessCount.textContent = `${used} used · ${left} left`;

    for (let i = 0; i < MAX_GUESSES; i++) {
      const g = guesses[i];
      const row = document.createElement("div");
      row.className = "guess-row";

      const isCurrent = !finished && i === used;
      const isSkipped = !g && !isCurrent;
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

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[c]);
  }

  function buildShareText(puzzleNum) {
    const flag = FLAG[puzzle.nationality] || "";
    const cells = [];
    for (let i = 0; i < MAX_GUESSES; i++) {
      const g = guesses[i];
      if (!g) cells.push("·");
      else if (g.correct) cells.push("✓");
      else cells.push("✕");
    }
    return `Football·Icons №${puzzleNum} — ${puzzle.worldCupYear} 🏆 ${flag}\n⚽ ${cells.join(" ")}\nwww.ICONED.wtf`;
  }

  function renderSharePreview(puzzleNum) {
    const flag = FLAG[puzzle.nationality] || "";
    const line1 = document.createElement("div");
    line1.textContent = `Football·Icons №${puzzleNum} — ${puzzle.worldCupYear} 🏆 ${flag}`;

    const line2 = document.createElement("div");
    line2.appendChild(document.createTextNode("⚽ "));
    for (let i = 0; i < MAX_GUESSES; i++) {
      const g = guesses[i];
      const span = document.createElement("span");
      if (!g) {
        span.textContent = "·";
        span.style.color = "var(--ink-soft)";
      } else if (g.correct) {
        span.textContent = "✓";
        span.style.color = "var(--pitch)";
      } else {
        span.textContent = "✕";
        span.style.color = "var(--red)";
      }
      line2.appendChild(span);
      if (i < MAX_GUESSES - 1) line2.appendChild(document.createTextNode(" "));
    }

    const line3 = document.createElement("div");
    line3.textContent = "www.ICONED.wtf";

    els.shareText.innerHTML = "";
    els.shareText.appendChild(line1);
    els.shareText.appendChild(line2);
    els.shareText.appendChild(line3);
  }

  function renderMatchLog() {
    els.matchLogCells.innerHTML = "";
    for (let i = 0; i < MAX_GUESSES; i++) {
      const g = guesses[i];
      const cell = document.createElement("span");
      cell.className = "match-cell";
      if (g) {
        if (g.correct) {
          cell.classList.add("hit");
          cell.textContent = "✓";
        } else {
          cell.classList.add("miss");
          cell.textContent = "✕";
        }
      } else {
        cell.classList.add("unused");
        cell.textContent = "·";
      }
      els.matchLogCells.appendChild(cell);
    }
  }

  function renderResultGuesses() {
    els.resultGuesses.innerHTML = "";
    guesses.forEach((g, i) => {
      const row = document.createElement("div");
      row.className = "result-guess-row";
      row.textContent = `Guess ${i + 1}: ${g.text}`;
      els.resultGuesses.appendChild(row);
    });
  }

  function renderPlayerCard() {
    const puzzleNum = getPuzzleNumber();
    const flag = FLAG[puzzle.nationality] || "";
    const won = guesses.some(g => g.correct);

    els.stickerNumber.textContent = `Sticker N° ${puzzleNum}`;
    els.playerName.textContent = puzzle.answer.toUpperCase();
    els.portraitNumber.textContent = puzzleNum;
    els.portraitMeta.textContent = `${puzzle.nationality.substring(0, 3).toUpperCase()} · ${puzzle.worldCupYear}`;

    els.playerTags.innerHTML = "";
    const tags = [];
    if (puzzle.position) tags.push(puzzle.position === "Goalkeeper" ? "GK" : puzzle.position.substring(0, 3).toUpperCase());
    if (puzzle.shirtNumberDuringWC != null) tags.push(`#${puzzle.shirtNumberDuringWC}`);
    if (puzzle.club) tags.push(puzzle.club);
    tags.push(`${puzzle.worldCupYear}`);

    tags.forEach(t => {
      const span = document.createElement("span");
      span.className = "player-tag";
      span.textContent = t;
      els.playerTags.appendChild(span);
    });

    if (won) {
      els.resultKicker.textContent = "Page complete";
      els.resultTitle.innerHTML = "Sticker<br>collected.";
      els.solvedStamp.textContent = "SOLVED";
      els.solvedStamp.className = "stamp stamp-win";
    } else {
      els.resultKicker.textContent = "Page incomplete";
      els.resultTitle.innerHTML = "Sticker<br>missed.";
      els.solvedStamp.textContent = "MISSED";
      els.solvedStamp.className = "stamp stamp-lose";
    }
  }

  function finish(won) {
    finished = true;

    if (!resultSaved && !archiveMode) {
      resultSaved = true;
      Stats.updateStats({ won, attempts: guesses.length });
    }
    saveState();

    els.guessArea.style.display = "none";
    els.guessLogCard.style.display = "none";
    els.pageTitleBlock.style.display = "none";
    els.stickerGrid.style.display = "none";
    hideSuggestions();

    renderPlayerCard();
    renderMatchLog();
    renderResultGuesses();
    maybeFetchImage();

    const puzzleNum = getPuzzleNumber();
    renderSharePreview(puzzleNum);
    els.shareText.classList.toggle("hidden", archiveMode);
    els.shareButton.classList.toggle("hidden", archiveMode);

    els.result.classList.remove("hidden");
    window.scrollTo({ top: 0 });
  }

  function submitGuess(text) {
    if (finished) return;
    const trimmed = text.trim();

    const correct = trimmed ? isMatch(trimmed, puzzle) : false;
    const display = trimmed || "(skipped)";
    guesses.push({ text: display, correct, skipped: !trimmed });
    saveState();

    renderGuesses();
    renderClues();
    els.guessInput.value = "";
    hideSuggestions();

    if (correct) {
      finish(true);
      return;
    }
    if (guesses.length >= MAX_GUESSES) {
      finish(false);
    }
  }

  function buildSuggestionIndex() {
    const items = [];
    puzzles.forEach((p) => {
      allNamesFor(p).forEach((name) => {
        items.push({ display: name, normalized: normalize(name), puzzle: p });
      });
    });
    return items;
  }

  let suggestionIndex = [];
  let activeSuggestion = -1;

  function showSuggestions(query) {
    const n = normalize(query);
    if (!n) return hideSuggestions();
    const seen = new Set();
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

    els.suggestions.innerHTML = "";
    matches.forEach((m, i) => {
      const li = document.createElement("li");
      li.textContent = m.display;
      li.dataset.index = String(i);
      li.addEventListener("mousedown", (e) => {
        e.preventDefault();
        els.guessInput.value = m.display;
        hideSuggestions();
        els.guessInput.focus();
      });
      els.suggestions.appendChild(li);
    });
    activeSuggestion = -1;
  }

  function hideSuggestions() {
    els.suggestions.innerHTML = "";
    activeSuggestion = -1;
  }

  function moveSuggestion(delta) {
    const items = Array.from(els.suggestions.children);
    if (!items.length) return;
    activeSuggestion = (activeSuggestion + delta + items.length) % items.length;
    items.forEach((it, i) => it.classList.toggle("active", i === activeSuggestion));
    els.guessInput.value = items[activeSuggestion].textContent;
  }

  function resetStickerStates() {
    els.stickerAge.classList.add("locked");
    els.stickerPosition.classList.add("locked");
    els.stickerShirt.classList.add("locked");
    els.photoSlot.classList.add("locked");
    els.photoSlot.classList.remove("revealed");

    els.clueAge.textContent = "—";
    els.cluePosition.textContent = "—";
    els.clueShirt.textContent = "—";

    const placeholder = document.querySelector(".portrait-placeholder");
    if (placeholder) placeholder.style.display = "";
  }

  function showGameUI() {
    els.guessArea.style.display = "";
    els.guessLogCard.style.display = "";
    els.pageTitleBlock.style.display = "";
    els.stickerGrid.style.display = "";
    els.result.classList.add("hidden");
  }

  function startNewGame() {
    archiveMode = false;
    archiveDayNum = null;
    clearState();
    puzzle = pickPuzzleForDay(Stats.todayNumber());
    guesses = [];
    finished = false;
    imageFetched = false;
    resultSaved = false;
    els.playerImage.removeAttribute("src");
    els.playerImageResult.removeAttribute("src");
    resetStickerStates();
    showGameUI();
    els.archiveBanner.classList.add("hidden");
    updatePageNumbers();
    renderClues();
    renderGuesses();
    saveState();
  }

  function loadArchiveGame(dayNum) {
    archiveMode = true;
    archiveDayNum = dayNum;
    resultSaved = false;
    imageFetched = false;

    const saved = Stats.getArchiveState(dayNum);
    if (saved && saved.puzzleId) {
      const found = puzzles.find(p => p.id === saved.puzzleId);
      if (found) {
        puzzle = found;
        guesses = saved.guesses || [];
        finished = !!saved.finished;
        resultSaved = !!saved.resultSaved;
        resetStickerStates();
        renderArchiveUI();
        return;
      }
    }

    puzzle = pickPuzzleForDay(dayNum);
    guesses = [];
    finished = false;
    els.playerImage.removeAttribute("src");
    els.playerImageResult.removeAttribute("src");
    resetStickerStates();
    renderArchiveUI();
    saveState();
  }

  function renderArchiveUI() {
    els.archiveBanner.classList.remove("hidden");
    const puzzleNum = getPuzzleNumber();
    const date = Stats.dateForDay(archiveDayNum);
    const dateStr = date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    els.archiveBannerText.textContent = `Archive · Page ${puzzleNum} (${dateStr})`;
    updatePageNumbers();
    renderCluesFromState();
    renderGuesses();

    if (finished) {
      els.guessArea.style.display = "none";
      els.guessLogCard.style.display = "none";
      els.pageTitleBlock.style.display = "none";
      els.stickerGrid.style.display = "none";

      renderPlayerCard();
      renderMatchLog();
      renderResultGuesses();
      maybeFetchImage();
      renderSharePreview(puzzleNum);
      els.shareText.classList.add("hidden");
      els.shareButton.classList.add("hidden");
      els.result.classList.remove("hidden");
      window.scrollTo({ top: 0 });
    } else {
      showGameUI();
    }
  }

  function goBackToToday() {
    archiveMode = false;
    archiveDayNum = null;
    imageFetched = false;
    els.archiveBanner.classList.add("hidden");
    els.shareText.classList.remove("hidden");
    els.shareButton.classList.remove("hidden");
    resetStickerStates();
    restoreOrStart();
  }

  function restoreOrStart() {
    const saved = loadState();
    if (saved) {
      const found = puzzles.find((p) => p.id === saved.puzzleId);
      if (found) {
        puzzle = found;
        guesses = saved.guesses || [];
        finished = !!saved.finished;
        saveState();
        resetStickerStates();
        showGameUI();
        updatePageNumbers();
        renderCluesFromState();
        renderGuesses();
        if (finished) {
          els.guessArea.style.display = "none";
          els.guessLogCard.style.display = "none";
          els.pageTitleBlock.style.display = "none";
          els.stickerGrid.style.display = "none";

          renderPlayerCard();
          renderMatchLog();
          renderResultGuesses();
          maybeFetchImage();
          renderSharePreview(getPuzzleNumber());
          els.result.classList.remove("hidden");
          window.scrollTo({ top: 0 });
        }
        return;
      }
    }
    startNewGame();
  }

  function bindEvents() {
    els.guessButton.addEventListener("click", () => submitGuess(els.guessInput.value));

    els.guessInput.addEventListener("input", (e) => showSuggestions(e.target.value));
    els.guessInput.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") { e.preventDefault(); moveSuggestion(1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); moveSuggestion(-1); }
      else if (e.key === "Enter") { e.preventDefault(); submitGuess(els.guessInput.value); }
      else if (e.key === "Escape") { hideSuggestions(); }
    });
    els.guessInput.addEventListener("blur", () => setTimeout(hideSuggestions, 120));

    els.shareButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(buildShareText(getPuzzleNumber()));
        els.shareButton.textContent = "COPIED!";
        setTimeout(() => (els.shareButton.textContent = "SHARE PAGE"), 1500);
      } catch {
        els.shareButton.textContent = "COPY FAILED";
      }
    });

    els.archiveButton.addEventListener("click", openArchiveModal);
    els.backToToday.addEventListener("click", goBackToToday);

    document.getElementById("spineTitle").addEventListener("click", (e) => { e.preventDefault(); goBackToToday(); });
    document.getElementById("wordmarkLink").addEventListener("click", (e) => { e.preventDefault(); goBackToToday(); });
    document.getElementById("archiveToggle").addEventListener("click", openArchiveModal);
    document.getElementById("archiveClose").addEventListener("click", closeArchiveModal);
    document.getElementById("archiveModal").addEventListener("click", (e) => {
      if (e.target.id === "archiveModal") closeArchiveModal();
    });

    document.getElementById("rulesToggle").addEventListener("click", () => {
      document.getElementById("rulesModal").classList.remove("hidden");
    });
    document.getElementById("rulesClose").addEventListener("click", () => {
      document.getElementById("rulesModal").classList.add("hidden");
    });
    document.getElementById("rulesModal").addEventListener("click", (e) => {
      if (e.target.id === "rulesModal") document.getElementById("rulesModal").classList.add("hidden");
    });

    document.getElementById("statsToggle").addEventListener("click", openStatsModal);
    document.getElementById("statsClose").addEventListener("click", closeStatsModal);
    document.getElementById("statsModal").addEventListener("click", (e) => {
      if (e.target.id === "statsModal") closeStatsModal();
    });
    document.getElementById("resetStats").addEventListener("click", () => {
      if (confirm("Reset all stats? This cannot be undone.")) {
        Stats.resetStats();
        renderStatsModal();
      }
    });

    document.getElementById("transferToggle").addEventListener("click", openTransferModal);
    document.getElementById("transferClose").addEventListener("click", closeTransferModal);
    document.getElementById("transferModal").addEventListener("click", (e) => {
      if (e.target.id === "transferModal") closeTransferModal();
    });
    document.getElementById("copyExportCode").addEventListener("click", copyExportCode);
    document.getElementById("importStatsBtn").addEventListener("click", importStats);
  }

  function openStatsModal() {
    renderStatsModal();
    document.getElementById("statsModal").classList.remove("hidden");
  }

  function closeStatsModal() {
    document.getElementById("statsModal").classList.add("hidden");
  }

  function renderStatsModal() {
    const s = Stats.getStats();
    document.getElementById("statPlayed").textContent = s.gamesPlayed;
    document.getElementById("statWon").textContent = s.gamesWon;
    document.getElementById("statPct").textContent = s.winPercentage;
    document.getElementById("statStreak").textContent = s.currentStreak;
    document.getElementById("statMax").textContent = s.maxStreak;

    const chart = document.getElementById("distChart");
    chart.innerHTML = "";
    const maxVal = Math.max(...s.guesses, 1);
    const lastWinIdx = finished && guesses.some((g) => g.correct) ? guesses.length - 1 : -1;

    for (let i = 0; i < s.guesses.length; i++) {
      const row = document.createElement("div");
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

  function openArchiveModal() {
    renderArchiveList();
    document.getElementById("archiveModal").classList.remove("hidden");
  }

  function closeArchiveModal() {
    document.getElementById("archiveModal").classList.add("hidden");
  }

  function renderArchiveList() {
    const list = document.getElementById("archiveList");
    list.innerHTML = "";
    const today = Stats.todayNumber();

    if (today === 0) {
      list.innerHTML = '<p style="color: var(--ink-soft); text-align: center; padding: 20px;">No past pages yet!</p>';
      return;
    }

    for (let d = today - 1; d >= 0; d--) {
      const item = document.createElement("div");
      item.className = "archive-item";
      const date = Stats.dateForDay(d);
      const dateStr = date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });

      const saved = Stats.getArchiveState(d);
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
        <span style="font-size:1.1rem; font-weight:700; color: ${statusIcon === "✓" ? "var(--pitch)" : "var(--red)"}">${statusIcon}</span>
      `;
      item.addEventListener("click", () => {
        closeArchiveModal();
        loadArchiveGame(d);
      });
      list.appendChild(item);
    }
  }

  function toBase64(str) {
    const bytes = new TextEncoder().encode(str);
    let bin = "";
    for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return btoa(bin);
  }

  function fromBase64(b64) {
    const bin = atob(b64.trim());
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new TextDecoder().decode(bytes);
  }

  function buildExportCode() {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k.startsWith("fi-")) data[k] = localStorage.getItem(k);
    }
    return toBase64(JSON.stringify(data));
  }

  function openTransferModal() {
    closeStatsModal();
    document.getElementById("exportCode").value = buildExportCode();
    document.getElementById("importCode").value = "";
    const msg = document.getElementById("transferMsg");
    msg.classList.add("hidden");
    msg.className = "transfer-msg hidden";
    document.getElementById("transferModal").classList.remove("hidden");
  }

  function closeTransferModal() {
    document.getElementById("transferModal").classList.add("hidden");
  }

  async function copyExportCode() {
    const btn = document.getElementById("copyExportCode");
    try {
      await navigator.clipboard.writeText(document.getElementById("exportCode").value);
      btn.textContent = "COPIED!";
      setTimeout(() => (btn.textContent = "COPY CODE"), 1500);
    } catch {
      btn.textContent = "FAILED";
      setTimeout(() => (btn.textContent = "COPY CODE"), 1500);
    }
  }

  function importStats() {
    const code = document.getElementById("importCode").value.trim();
    const msg = document.getElementById("transferMsg");

    if (!code) {
      msg.textContent = "Paste a transfer code first.";
      msg.className = "transfer-msg error";
      return;
    }

    try {
      const json = fromBase64(code);
      const data = JSON.parse(json);

      if (typeof data !== "object" || data === null) throw new Error("Invalid data");

      const keys = Object.keys(data).filter(k => k.startsWith("fi-"));
      if (!keys.length) throw new Error("No stats found in code");

      if (!confirm("This will replace your current stats. Continue?")) return;

      keys.forEach(k => localStorage.setItem(k, data[k]));

      msg.textContent = "Stats imported successfully!";
      msg.className = "transfer-msg success";

      resultSaved = false;
      restoreOrStart();
    } catch {
      msg.textContent = "Invalid transfer code. Please check and try again.";
      msg.className = "transfer-msg error";
    }
  }

  async function init() {
    if (Array.isArray(window.PUZZLES)) {
      puzzles = window.PUZZLES;
    } else {
      try {
        const res = await fetch("data.json");
        puzzles = await res.json();
      } catch (err) {
        document.body.innerHTML = "<p style='color:#c8412e;padding:20px'>Failed to load puzzles.</p>";
        return;
      }
    }
    suggestionIndex = buildSuggestionIndex();
    bindEvents();
    restoreOrStart();
  }

  init();
})();
