// ICONED · Community stats — Supabase integration
// Submits anonymous results and fetches aggregate guess distributions.

(() => {
  const URL  = "https://tbmgkzjcplqvvjkyugxg.supabase.co";
  const ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRibWdrempjcGxxdnZqa3l1Z3hnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4MDg2MzIsImV4cCI6MjA5NTM4NDYzMn0.QpirHdvtLgwym_cAkkZkJIAK-zV3oSJ7HiqX_27_KE8";

  const H = {
    "Content-Type":  "application/json",
    "apikey":        ANON,
    "Authorization": `Bearer ${ANON}`
  };

  window.Community = {

    // Submit result once per puzzle (deduplicated via localStorage)
    async submit({ nationSlug, puzzleId, dayNumber, guessesUsed, won }) {
      const key = `wc26-${nationSlug}-submitted-${dayNumber}`;
      if (localStorage.getItem(key)) return;
      try {
        const res = await fetch(`${URL}/rest/v1/puzzle_results`, {
          method:  "POST",
          headers: { ...H, "Prefer": "return=minimal" },
          body: JSON.stringify({
            nation_slug:  nationSlug,
            puzzle_id:    puzzleId,
            day_number:   dayNumber,
            guesses_used: guessesUsed,
            won
          })
        });
        if (res.ok) localStorage.setItem(key, "1");
      } catch {}
    },

    // Fetch aggregate stats for a given nation + day
    async fetchStats({ nationSlug, dayNumber }) {
      try {
        const res = await fetch(`${URL}/rest/v1/rpc/get_puzzle_stats`, {
          method:  "POST",
          headers: H,
          body: JSON.stringify({ p_nation_slug: nationSlug, p_day_number: dayNumber })
        });
        if (!res.ok) return null;
        return await res.json();
      } catch { return null; }
    }
  };
})();
