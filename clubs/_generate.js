// ─────────────────────────────────────────────────────────────────────
// /clubs/_generate.js — template & checklist for spinning up a new club
// ─────────────────────────────────────────────────────────────────────
//
// To launch a new club at /clubs/<slug>/:
//
//   1. Create /clubs/<slug>/ folder with two files:
//        - index.html  (copy of clubs/_template/index.html below, edit config + theme)
//        - data.js     (clubs/_template/data.js with your JSON pasted into CLUB_DATA)
//
//   2. Copy /fck/stickers/_shadow.jpg into /clubs/<slug>/stickers/ as fallback portrait.
//
//   3. The shared engine at /clubs/{app.js, styles.css, stats.js, community.js}
//      reads CLUB_CONFIG from window. No other files need editing.
//
// ─── HTML config block to paste in each club's <head> ───────────────
//
//   <script>
//     window.CLUB_CONFIG = {
//       name:        "Manchester United",          // display name
//       slug:        "man-united",                 // URL slug + storage prefix
//       countryFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",                  // base country emoji for share text
//       shareLabel:  "MU",                         // short label in share string
//       urlPath:     "clubs/man-united"            // path appended to iconed.wtf domain
//     };
//   </script>
//
// ─── Theme override CSS variables (in <head> after stylesheet) ──────
//
//   <style>
//     :root {
//       --page:       #ffffff;
//       --page-edge:  #f3c9c4;   /* light border tint */
//       --paper-card: #fbece9;   /* sticker background */
//       --ink:        #1a1a1a;
//       --ink-soft:   rgba(26,26,26,.55);
//       --spine:      #DA291C;   /* primary club colour */
//       --spine-deep: #9b1a11;   /* darker spine gradient */
//       --spine-ink:  #ffffff;   /* text on spine */
//       --gold:       #FBE122;   /* secondary accent */
//       --pitch:      #DA291C;   /* highlight + CTA */
//     }
//   </style>
//
// ─── data.js skeleton ──────────────────────────────────────────────
//
//   window.CLUB_DATA = {
//     "league": "...",
//     "club":   "...",
//     "seasons": [
//       { "season": "YYYY-YY", "players": [ { name, club, nationality,
//         position, shirt_number, age, fun_fact, image_url } ] }
//     ]
//   };
//   // then include the buildPuzzles + buildPuzzleOrder helpers
//   // (copy from clubs/man-united/data.js — they use CLUB_CONFIG.slug for puzzle IDs)
//
// ─── Required text-replacement checklist in index.html ─────────────
//
//   - <base href="/clubs/<slug>/">
//   - <title>ICONED · <ShortLabel></title>
//   - <link rel="canonical" href="https://www.iconed.wtf/clubs/<slug>/">
//   - All og: + twitter: meta tags use the new path
//   - <meta name="theme-color" content="<club spine hex>">
//   - Wordmark, hero heading, rules-modal copy reference the club name
//   - "OPEN MY <X> ALBUM" / "My <X> Album" labels match club shorthand
//
// ─── Hidden launch checklist ────────────────────────────────────────
//
//   - DO NOT link the club from /index.html or /nations/ landing pages
//   - The /clubs/ folder has no index.html itself — direct URL access only
//   - When ready to promote, add a card to /index.html and announce
//
// ─── Existing clubs ─────────────────────────────────────────────────
//
//   /clubs/man-united/   — Manchester United, 165 players, 33 seasons, red theme
//   /clubs/chelsea/      — Chelsea FC,        165 players, 33 seasons, royal blue theme
//   /clubs/arsenal/      — Arsenal FC,        165 players, 33 seasons, bright red theme
//
// ─────────────────────────────────────────────────────────────────────
