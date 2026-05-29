// ──────────────────────────────────────────────────────────────────────
// Paris Saint-Germain · data — player roster.
// Same shape as Man United / Chelsea / Arsenal / FCK.
//
// HOW TO ADD PLAYERS:
//   • Add one object per season to the "seasons" array below.
//   • Inside each season, "players" is a list — one entry per player.
//   • Every field is required. positions: GK | DEF | MID | FWD.
//   • "age" = the player's age during that season.
//   • "fun_fact" must NOT contain the player's name (it would spoil the guess).
//   • "image_url" = a direct, hot-linkable image (Wikipedia/Commons works well).
//   • A working page needs at least one player.
// ──────────────────────────────────────────────────────────────────────

window.CLUB_DATA = {
  "club": "PSG",
  "seasons": [
    // ─── EXAMPLE — delete these comments and uncomment / replace with real data ───
    // {
    //   "season": "YYYY-YY",
    //   "players": [
    //     {
    //       "name": "Pauleta",
    //       "club": "PSG",
    //       "nationality": "Portuguese",
    //       "position": "FWD",
    //       "shirt_number": 9,
    //       "age": 30,
    //       "fun_fact": "A prolific striker who topped the scoring charts for the capital club.",
    //       "image_url": "https://upload.wikimedia.org/..."
    //     }
    //   ]
    // },
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
  "Paraguayan":   "Paraguay",
  "Czech":         "Czech Republic",
  "Turkish":       "Turkey",
  "New Zealander": "New Zealand",
  "Algerian":      "Algeria",
  "Trinidadian":   "Trinidad and Tobago",
  "Finnish":       "Finland",
  "Costa Rican":   "Costa Rica",
  "Peruvian":      "Peru",
  "Togolese":      "Togo",
  "South African": "South Africa",
  "Icelandic":     "Iceland",
  "Jamaican":      "Jamaica",
  "Armenian":      "Armenia",
  "Gabonese":      "Gabon",
  "Ecuadorian":    "Ecuador",
  "Greek":         "Greece",
  "Bosnian":       "Bosnia and Herzegovina",
  "Albanian":      "Albania",
  "Slovakian":     "Slovakia",
  "Slovenian":     "Slovenia",
  "Israeli":       "Israel",
  "Ukrainian":     "Ukraine",
  "Russian":       "Russia",
  "Austrian":      "Austria",
  "Swiss":         "Switzerland",
  "Canadian":      "Canada",
  "Honduran":      "Honduras",
  "Venezuelan":    "Venezuela"
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

// Convert raw CLUB_DATA into the puzzle shape that app.js expects.
function buildPuzzles() {
  const out = [];
  const data = window.CLUB_DATA || {};
  for (const season of data.seasons || []) {
    const seasonStr = season.season; // e.g. "1995-96"
    const seasonStartYear = parseInt(seasonStr.slice(0, 4), 10);
    const seasonSlug = seasonStr.replace("-", "");
    for (const p of season.players || []) {
      const clubSlug = (window.CLUB_CONFIG && window.CLUB_CONFIG.slug) || "club";
      const id = `${clubSlug}-${seasonSlug}-${slugify(p.name)}`;
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
