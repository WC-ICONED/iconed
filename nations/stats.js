// Nations stats — storage keys are namespaced by window.NATION_CONFIG.slug
// so each country's stats are fully independent.
// Unlike the main ICONED, stats count for EVERY game — today's and archive.
window.Stats = (() => {
  // WC 2026 kicks off June 11, 2026 — nation pages launch the same day.
  const LAUNCH_DATE = new Date("2026-06-11T00:00:00");
  const MAX_GUESSES = 5;

  function slug() {
    return (window.NATION_CONFIG && window.NATION_CONFIG.slug) || "nation";
  }

  function todayNumber() {
    const now   = new Date();
    const start = new Date(LAUNCH_DATE);
    start.setHours(0, 0, 0, 0);
    now.setHours(0, 0, 0, 0);
    return Math.max(0, Math.floor((now - start) / 86400000));
  }

  function emptyStats() {
    return {
      gamesPlayed:   0,
      gamesWon:      0,
      fail:          0,
      currentStreak: 0,
      maxStreak:     0,
      winPercentage: 0,
      guesses:       new Array(MAX_GUESSES).fill(0)
    };
  }

  function getStats() {
    const raw = localStorage.getItem(`wc26-${slug()}-stats`);
    if (!raw) return emptyStats();
    try {
      const s = JSON.parse(raw);
      if (!Array.isArray(s.guesses) || s.guesses.length !== MAX_GUESSES) {
        s.guesses = new Array(MAX_GUESSES).fill(0);
      }
      return s;
    } catch { return emptyStats(); }
  }

  function saveStats(stats) {
    localStorage.setItem(`wc26-${slug()}-stats`, JSON.stringify(stats));
  }

  function updateStats(game) {
    const stats = getStats();
    stats.gamesPlayed++;
    if (game.won) {
      stats.gamesWon++;
      stats.currentStreak++;
      if (stats.currentStreak > stats.maxStreak) stats.maxStreak = stats.currentStreak;
      const idx = Math.min(game.attempts - 1, MAX_GUESSES - 1);
      stats.guesses[idx]++;
    } else {
      stats.currentStreak = 0;
      stats.fail++;
    }
    stats.winPercentage = stats.gamesPlayed
      ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100) : 0;
    saveStats(stats);
    return stats;
  }

  function resetStats() {
    localStorage.removeItem(`wc26-${slug()}-stats`);
    localStorage.removeItem(`wc26-${slug()}-counted`);
  }

  // Track which day-numbers have already had their result counted in stats,
  // so replaying an archive game doesn't double-count.
  function isCountedDay(dayNum) {
    const raw = localStorage.getItem(`wc26-${slug()}-counted`);
    if (!raw) return false;
    try {
      const days = JSON.parse(raw);
      return Array.isArray(days) && days.includes(dayNum);
    } catch { return false; }
  }

  function markCountedDay(dayNum) {
    const key = `wc26-${slug()}-counted`;
    let days = [];
    try { days = JSON.parse(localStorage.getItem(key)) || []; } catch {}
    if (!days.includes(dayNum)) {
      days.push(dayNum);
      try { localStorage.setItem(key, JSON.stringify(days)); } catch {}
    }
  }

  function getDayState() {
    const raw = localStorage.getItem(`wc26-${slug()}-day-state`);
    if (!raw) return null;
    try { return JSON.parse(raw); } catch { return null; }
  }

  function setDayState(state) {
    localStorage.setItem(`wc26-${slug()}-day-state`, JSON.stringify(state));
  }

  function clearDayState() {
    localStorage.removeItem(`wc26-${slug()}-day-state`);
  }

  function getArchiveState(dayNum) {
    const raw = localStorage.getItem(`wc26-${slug()}-archive-${dayNum}`);
    if (!raw) return null;
    try { return JSON.parse(raw); } catch { return null; }
  }

  function setArchiveState(dayNum, state) {
    localStorage.setItem(`wc26-${slug()}-archive-${dayNum}`, JSON.stringify(state));
  }

  function dateForDay(dayNum) {
    const d = new Date(LAUNCH_DATE);
    d.setDate(d.getDate() + dayNum);
    return d;
  }

  return {
    todayNumber,
    getStats,
    updateStats,
    resetStats,
    getDayState,
    setDayState,
    clearDayState,
    getArchiveState,
    setArchiveState,
    dateForDay,
    emptyStats,
    isCountedDay,
    markCountedDay,
    MAX_GUESSES
  };
})();
