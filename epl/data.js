// ──────────────────────────────────────────────────────────────────────
// EPL data — paste the raw JSON from epl_players.json into EPL_DATA below.
// The schema mirrors the input file:
//   { league, seasons: [ { season, players: [ { name, club, nationality,
//     position, shirt_number, age, fun_fact, image_url } ] } ] }
//
// This file converts that raw structure into the game's puzzle schema and
// generates a deterministic PUZZLE_ORDER so the daily order is stable.
// ──────────────────────────────────────────────────────────────────────

window.EPL_DATA = {
  "league": "English Premier League",
  "seasons": [
    {
      "season": "1995-96",
      "players": [
        {
          "name": "Alan Shearer",
          "club": "Blackburn Rovers",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 9,
          "age": 25,
          "fun_fact": "Scored 31 league goals to claim the Golden Boot in his final Blackburn season before his world-record £15m move to Newcastle.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Alan_Shearer_2008.jpg"
        },
        {
          "name": "Eric Cantona",
          "club": "Manchester United",
          "nationality": "French",
          "position": "FWD",
          "shirt_number": 7,
          "age": 29,
          "fun_fact": "Returned from his ban to inspire United to the Double, winning PFA Player of the Year and scoring the title-winning goal on the final day.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Eric_Cantona_Cannes_2009.jpg/330px-Eric_Cantona_Cannes_2009.jpg"
        }
      ]
    }
  ]
};

// ─── Lookup tables ───
const NATIONALITY_TO_COUNTRY = {
  "English":      "England",
  "French":       "France",
  "Danish":       "Denmark",
  "German":       "Germany",
  "Spanish":      "Spain",
  "Italian":      "Italy",
  "Portuguese":   "Portugal",
  "Dutch":        "Netherlands",
  "Belgian":      "Belgium",
  "Argentine":    "Argentina",
  "Argentinian":  "Argentina",
  "Brazilian":    "Brazil",
  "Uruguayan":    "Uruguay",
  "Chilean":      "Chile",
  "Colombian":    "Colombia",
  "Mexican":      "Mexico",
  "American":     "United States",
  "Croatian":     "Croatia",
  "Serbian":      "Yugoslavia",
  "Polish":       "Poland",
  "Swedish":      "Sweden",
  "Norwegian":    "Norway",
  "Bulgarian":    "Bulgaria",
  "Romanian":     "Romania",
  "Hungarian":    "Hungary",
  "Senegalese":   "Senegal",
  "Ivorian":      "Ivory Coast",
  "Ghanaian":     "Ghana",
  "Nigerian":     "Nigeria",
  "Cameroonian":  "Cameroon",
  "Egyptian":     "Egypt",
  "Moroccan":     "Morocco",
  "Iranian":      "Iran",
  "Japanese":     "Japan",
  "South Korean": "South Korea",
  "Korean":       "South Korea",
  "Scottish":     "Scotland",
  "Welsh":        "Wales",
  "Irish":        "Ireland",
  "Northern Irish": "Northern Ireland",
  "Australian":   "Australia",
  "Paraguayan":   "Paraguay"
};

const POSITION_MAP = {
  "GK":  "Goalkeeper",
  "DEF": "Defender",
  "MID": "Midfielder",
  "FWD": "Forward"
};

// Build a URL-safe slug from a player name (strips accents).
function slugify(s) {
  return String(s)
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Auto-generate aliases: last word of name (so "Shearer" matches "Alan Shearer").
function buildAliases(name) {
  const parts = name.split(/\s+/);
  const aliases = [];
  if (parts.length > 1) {
    aliases.push(parts[parts.length - 1]); // last name
    // Also try last two words for compound surnames (e.g., "Van Persie")
    if (parts.length > 2) aliases.push(parts.slice(-2).join(" "));
  }
  return aliases;
}

// Convert raw EPL_DATA into the puzzle shape that app.js expects.
function buildPuzzles() {
  const out = [];
  const data = window.EPL_DATA || {};
  for (const season of data.seasons || []) {
    const seasonStr = season.season; // e.g. "1995-96"
    const seasonStartYear = parseInt(seasonStr.slice(0, 4), 10);
    const seasonSlug = seasonStr.replace("-", "");
    for (const p of season.players || []) {
      const id = `epl-${seasonSlug}-${slugify(p.name)}`;
      out.push({
        id,
        answer: p.name,
        aliases: buildAliases(p.name),
        season: seasonStr,
        seasonStartYear,
        nationality: NATIONALITY_TO_COUNTRY[p.nationality] || p.nationality,
        nationalityRaw: p.nationality,
        club: p.club,
        position: POSITION_MAP[p.position] || p.position,
        age: p.age,
        shirtNumber: p.shirt_number,
        funFact: p.fun_fact,
        imageUrl: p.image_url,
        wikipediaTitle: p.name
      });
    }
  }
  return out;
}

// Deterministic seeded shuffle so the daily order is stable across users.
function buildPuzzleOrder(puzzles) {
  const ids = puzzles.map(p => p.id);
  let seed = 1995;
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }
  return ids;
}

window.PUZZLES = buildPuzzles();
window.PUZZLE_ORDER = buildPuzzleOrder(window.PUZZLES);
