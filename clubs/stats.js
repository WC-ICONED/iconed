// Shared per-club stats — uses CLUB_CONFIG.slug to namespace localStorage keys.
window.Stats = (() => {
  const LAUNCH_DATE = new Date("2026-05-09T00:00:00");
  const MAX_GUESSES = 5;
  const SLUG        = (window.CLUB_CONFIG && window.CLUB_CONFIG.slug) || "club";

  function k(name, mode) {
    const base = `${SLUG}-${name}`;
    return mode ? `${mode}-${base}` : base;
  }

  function todayNumber() {
    const now = new Date();
    const start = new Date(LAUNCH_DATE);
    start.setHours(0, 0, 0, 0);
    now.setHours(0, 0, 0, 0);
    return Math.floor((now - start) / 86400000);
  }

  function emptyStats() {
    return {
      gamesPlayed: 0,
      gamesWon: 0,
      fail: 0,
      currentStreak: 0,
      maxStreak: 0,
      winPercentage: 0,
      guesses: new Array(MAX_GUESSES).fill(0)
    };
  }

  function getStats(mode) {
    const raw = localStorage.getItem(k("stats", mode));
    if (!raw) return emptyStats();
    try {
      const s = JSON.parse(raw);
      if (!Array.isArray(s.guesses) || s.guesses.length !== MAX_GUESSES) {
        s.guesses = new Array(MAX_GUESSES).fill(0);
      }
      return s;
    } catch { return emptyStats(); }
  }

  function saveStats(stats, mode) { localStorage.setItem(k("stats", mode), JSON.stringify(stats)); }

  function updateStats(game, mode) {
    const stats = getStats(mode);
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
      ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100)
      : 0;
    saveStats(stats, mode);
    return stats;
  }

  function resetStats(mode)        { localStorage.removeItem(k("stats", mode)); }
  function getDayState(mode)       {
    const raw = localStorage.getItem(k("day-state", mode));
    if (!raw) return null;
    try { return JSON.parse(raw); } catch { return null; }
  }
  function setDayState(state, mode){ localStorage.setItem(k("day-state", mode), JSON.stringify(state)); }
  function clearDayState(mode)     { localStorage.removeItem(k("day-state", mode)); }

  function getArchiveState(dayNum) {
    const raw = localStorage.getItem(`${SLUG}-archive-${dayNum}`);
    if (!raw) return null;
    try { return JSON.parse(raw); } catch { return null; }
  }
  function setArchiveState(dayNum, state) {
    localStorage.setItem(`${SLUG}-archive-${dayNum}`, JSON.stringify(state));
  }

  function dateForDay(dayNum) {
    const d = new Date(LAUNCH_DATE);
    d.setDate(d.getDate() + dayNum);
    return d;
  }

  return {
    todayNumber, getStats, updateStats, resetStats,
    getDayState, setDayState, clearDayState,
    getArchiveState, setArchiveState, dateForDay,
    emptyStats, MAX_GUESSES, _key: k
  };
})();
