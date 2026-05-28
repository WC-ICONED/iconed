// Run with: node nations/_generate.js
// Generates all 48 nation subsite folders under nations/
//
// Each folder contains:
//   index.html  — sets NATION_CONFIG colors + loads shared files
//   data.js     — empty PUZZLES (fill in when squad data is ready)

const fs   = require("fs");
const path = require("path");

const NATIONS = [
  // Confederation of North, Central America and Caribbean Association Football (CONCACAF)
  { name: "Canada",               slug: "canada",      flag: "🇨🇦", pitch: "#CC0000", gold: "#c8a14a", spine: "#AA0000", spineDeep: "#880000", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#f0d0d0", paperCard: "#fce8e8", bodyBg: "#d8b8b8" },
  { name: "Mexico",               slug: "mexico",      flag: "🇲🇽", pitch: "#006847", gold: "#CE1126", spine: "#004d35", spineDeep: "#003020", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#c8ddd2", paperCard: "#e8f4ee", bodyBg: "#b0ccbc" },
  { name: "United States",        slug: "usa",         flag: "🇺🇸", pitch: "#3C3B6E", gold: "#BF0A30", spine: "#2a2a50", spineDeep: "#1a1a38", spineInk: "#f6f1e6", page: "#ffffff", pageEdge: "#c8c8e0", paperCard: "#e8e8f4", bodyBg: "#b8b8d8" },
  { name: "Panama",               slug: "panama",      flag: "🇵🇦", pitch: "#DA121A", gold: "#1A47B8", spine: "#b00f15", spineDeep: "#880c10", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#f0cece", paperCard: "#fce8e8", bodyBg: "#d8b8b8" },
  { name: "Curaçao",              slug: "curacao",     flag: "🇨🇼", pitch: "#002B7F", gold: "#F9E000", spine: "#002060", spineDeep: "#001540", spineInk: "#f6f1e6", page: "#ffffff", pageEdge: "#c0cce8", paperCard: "#dde5f8", bodyBg: "#a8b8d8" },
  { name: "Haiti",                slug: "haiti",       flag: "🇭🇹", pitch: "#00209F", gold: "#D21034", spine: "#001880", spineDeep: "#001060", spineInk: "#f6f1e6", page: "#ffffff", pageEdge: "#c0cae8", paperCard: "#dde3f8", bodyBg: "#a8b6d8" },

  // CONMEBOL
  { name: "Argentina",            slug: "argentina",   flag: "🇦🇷", pitch: "#4a7aaa", gold: "#F6B40E", spine: "#3a6090", spineDeep: "#2a4870", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#c0d8ee", paperCard: "#deedf8", bodyBg: "#a8c8e0" },
  { name: "Brazil",               slug: "brazil",      flag: "🇧🇷", pitch: "#009C3B", gold: "#FFDF00", spine: "#007a2e", spineDeep: "#005820", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#b8dfc8", paperCard: "#d5f0e0", bodyBg: "#98caa8" },
  { name: "Ecuador",              slug: "ecuador",     flag: "🇪🇨", pitch: "#003580", gold: "#FFD100", spine: "#002060", spineDeep: "#001540", spineInk: "#f6f1e6", page: "#ffffff", pageEdge: "#b8c8e8", paperCard: "#d5dff8", bodyBg: "#98a8d8" },
  { name: "Paraguay",             slug: "paraguay",    flag: "🇵🇾", pitch: "#D52B1E", gold: "#0038A8", spine: "#a82218", spineDeep: "#801a12", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#edd0cc", paperCard: "#fae8e6", bodyBg: "#d8b8b5" },
  { name: "Uruguay",              slug: "uruguay",     flag: "🇺🇾", pitch: "#0038A8", gold: "#F6B40E", spine: "#002880", spineDeep: "#001860", spineInk: "#f6f1e6", page: "#ffffff", pageEdge: "#b8c8e8", paperCard: "#d5dff8", bodyBg: "#98a8d8" },
  { name: "Colombia",             slug: "colombia",    flag: "🇨🇴", pitch: "#003087", gold: "#FCD116", spine: "#002268", spineDeep: "#001548", spineInk: "#f6f1e6", page: "#ffffff", pageEdge: "#b8c5e8", paperCard: "#d5dcf8", bodyBg: "#98a5d8" },

  // AFC
  { name: "Japan",                slug: "japan",       flag: "🇯🇵", pitch: "#BC002D", gold: "#c8a14a", spine: "#8C0022", spineDeep: "#600018", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#f0c0cc", paperCard: "#fcd8e0", bodyBg: "#e0a8b5" },
  { name: "South Korea",          slug: "south-korea", flag: "🇰🇷", pitch: "#C60C30", gold: "#003478", spine: "#9c0a26", spineDeep: "#70081c", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#f0c0cc", paperCard: "#fcd8e0", bodyBg: "#e0a8b5" },
  { name: "Australia",            slug: "australia",   flag: "🇦🇺", pitch: "#012169", gold: "#E8112D", spine: "#001850", spineDeep: "#001038", spineInk: "#f6f1e6", page: "#ffffff", pageEdge: "#b8c0e0", paperCard: "#d5d8f5", bodyBg: "#98a0d5" },
  { name: "Iran",                 slug: "iran",        flag: "🇮🇷", pitch: "#239F40", gold: "#DA0000", spine: "#1a7530", spineDeep: "#104d20", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#b8dfc5", paperCard: "#d5f0dd", bodyBg: "#98c8a8" },
  { name: "New Zealand",          slug: "new-zealand", flag: "🇳🇿", pitch: "#00247D", gold: "#CC0000", spine: "#001d63", spineDeep: "#001548", spineInk: "#f6f1e6", page: "#ffffff", pageEdge: "#b8c0e0", paperCard: "#d5d8f5", bodyBg: "#98a0d5" },
  { name: "Jordan",               slug: "jordan",      flag: "🇯🇴", pitch: "#007A3D", gold: "#CE1126", spine: "#005c2e", spineDeep: "#003d1e", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#b8d8c8", paperCard: "#d5edd8", bodyBg: "#98c8a8" },
  { name: "Uzbekistan",           slug: "uzbekistan",  flag: "🇺🇿", pitch: "#1EB53A", gold: "#0099B5", spine: "#178a2c", spineDeep: "#106020", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#b8ddc5", paperCard: "#d5f0dd", bodyBg: "#98c8a8" },
  { name: "Saudi Arabia",         slug: "saudi-arabia",flag: "🇸🇦", pitch: "#006C35", gold: "#c8a14a", spine: "#005228", spineDeep: "#003818", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#b8d8c8", paperCard: "#d5edd8", bodyBg: "#98c8a8" },
  { name: "Qatar",                slug: "qatar",       flag: "🇶🇦", pitch: "#8D1B3D", gold: "#c8a14a", spine: "#6b1430", spineDeep: "#480d20", spineInk: "#f6f1e6", page: "#ffffff", pageEdge: "#e8c8d4", paperCard: "#f8dde8", bodyBg: "#d8b0c0" },
  { name: "Iraq",                 slug: "iraq",        flag: "🇮🇶", pitch: "#CE1126", gold: "#007A3D", spine: "#a30d1f", spineDeep: "#780a18", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#edccc8", paperCard: "#fae6e4", bodyBg: "#d8b8b5" },

  // CAF
  { name: "Morocco",              slug: "morocco",     flag: "🇲🇦", pitch: "#C1272D", gold: "#006233", spine: "#961f23", spineDeep: "#6a1618", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#edccc8", paperCard: "#fae6e4", bodyBg: "#d8b8b5" },
  { name: "Tunisia",              slug: "tunisia",     flag: "🇹🇳", pitch: "#E70013", gold: "#c8a14a", spine: "#b8000f", spineDeep: "#880009", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#f0c8c8", paperCard: "#fce0e0", bodyBg: "#e0b8b8" },
  { name: "Egypt",                slug: "egypt",       flag: "🇪🇬", pitch: "#CE1126", gold: "#C8A14A", spine: "#a30d1f", spineDeep: "#780a18", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#edccc8", paperCard: "#fae6e4", bodyBg: "#d8b8b5" },
  { name: "Algeria",              slug: "algeria",     flag: "🇩🇿", pitch: "#006233", gold: "#D21034", spine: "#004d27", spineDeep: "#003318", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#b8d8c8", paperCard: "#d5edd8", bodyBg: "#98c8a8" },
  { name: "Ghana",                slug: "ghana",       flag: "🇬🇭", pitch: "#006B3F", gold: "#FCD116", spine: "#005230", spineDeep: "#003820", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#b8d8c5", paperCard: "#d5edda", bodyBg: "#98c8a8" },
  { name: "Cape Verde",           slug: "cape-verde",  flag: "🇨🇻", pitch: "#003893", gold: "#CF2027", spine: "#002870", spineDeep: "#001848", spineInk: "#f6f1e6", page: "#ffffff", pageEdge: "#b8c0e0", paperCard: "#d5d8f5", bodyBg: "#98a0d5" },
  { name: "Senegal",              slug: "senegal",     flag: "🇸🇳", pitch: "#00853F", gold: "#FDEF42", spine: "#006430", spineDeep: "#004220", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#b8ddc8", paperCard: "#d5f0dd", bodyBg: "#98c8a8" },
  { name: "South Africa",         slug: "south-africa",flag: "🇿🇦", pitch: "#007A4D", gold: "#FFB81C", spine: "#005c3a", spineDeep: "#003d26", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#b8d8c8", paperCard: "#d5edd8", bodyBg: "#98c8a8" },
  { name: "Ivory Coast",          slug: "ivory-coast", flag: "🇨🇮", pitch: "#F77F00", gold: "#009A44", spine: "#c46200", spineDeep: "#904800", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#edddc5", paperCard: "#fbeedd", bodyBg: "#d8c8a8" },
  { name: "DR Congo",             slug: "dr-congo",    flag: "🇨🇩", pitch: "#007FFF", gold: "#F7D618", spine: "#0065cc", spineDeep: "#004c99", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#b8d0f0", paperCard: "#d5e5fc", bodyBg: "#98b8e8" },

  // UEFA
  { name: "England",              slug: "england",     flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", pitch: "#CF081F", gold: "#c8a14a", spine: "#a00618", spineDeep: "#780513", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#f0c0c8", paperCard: "#fcd8dc", bodyBg: "#e0a8b0" },
  { name: "France",               slug: "france",      flag: "🇫🇷", pitch: "#002395", gold: "#ED2939", spine: "#001a70", spineDeep: "#00104a", spineInk: "#f6f1e6", page: "#ffffff", pageEdge: "#b8c0e0", paperCard: "#d5d8f5", bodyBg: "#98a0d5" },
  { name: "Croatia",              slug: "croatia",     flag: "🇭🇷", pitch: "#171796", gold: "#FF0000", spine: "#111168", spineDeep: "#0c0c48", spineInk: "#f6f1e6", page: "#ffffff", pageEdge: "#c0c0e0", paperCard: "#ddddf5", bodyBg: "#a8a8d8" },
  { name: "Portugal",             slug: "portugal",    flag: "🇵🇹", pitch: "#006600", gold: "#FF0000", spine: "#004d00", spineDeep: "#003300", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#b8d8c0", paperCard: "#d5f0da", bodyBg: "#98c8a0" },
  { name: "Norway",               slug: "norway",      flag: "🇳🇴", pitch: "#EF2B2D", gold: "#002868", spine: "#bf2224", spineDeep: "#8c191a", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#edc8c8", paperCard: "#fce0e0", bodyBg: "#d8b8b8" },
  { name: "Germany",              slug: "germany",     flag: "🇩🇪", pitch: "#333333", gold: "#FFCE00", spine: "#222222", spineDeep: "#111111", spineInk: "#f6f1e6", page: "#ffffff", pageEdge: "#cccccc", paperCard: "#e8e8e8", bodyBg: "#b8b8b8" },
  { name: "Netherlands",          slug: "netherlands", flag: "🇳🇱", pitch: "#FF4F00", gold: "#21468B", spine: "#cc3f00", spineDeep: "#992f00", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#eec8b5", paperCard: "#fbe2d5", bodyBg: "#d8baa8" },
  { name: "Switzerland",          slug: "switzerland", flag: "🇨🇭", pitch: "#D52B1E", gold: "#c8a14a", spine: "#a82218", spineDeep: "#801a12", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#edccc8", paperCard: "#fae6e4", bodyBg: "#d8b8b5" },
  { name: "Scotland",             slug: "scotland",    flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", pitch: "#003078", gold: "#c8a14a", spine: "#001d5c", spineDeep: "#001040", spineInk: "#f6f1e6", page: "#ffffff", pageEdge: "#b8c0e0", paperCard: "#d5d8f5", bodyBg: "#98a0d5" },
  { name: "Spain",                slug: "spain",       flag: "🇪🇸", pitch: "#AA151B", gold: "#F1BF00", spine: "#821118", spineDeep: "#5a0c10", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#edccc8", paperCard: "#fae6e4", bodyBg: "#d8b8b5" },
  { name: "Austria",              slug: "austria",     flag: "🇦🇹", pitch: "#ED2939", gold: "#c8a14a", spine: "#be2030", spineDeep: "#8c1822", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#eec8c8", paperCard: "#fde0e0", bodyBg: "#d8b8b8" },
  { name: "Belgium",              slug: "belgium",     flag: "🇧🇪", pitch: "#1a1a1a", gold: "#FAE042", spine: "#111111", spineDeep: "#000000", spineInk: "#f6f1e6", page: "#ffffff", pageEdge: "#cccccc", paperCard: "#e8e8e8", bodyBg: "#b8b8b8" },
  { name: "Sweden",               slug: "sweden",      flag: "🇸🇪", pitch: "#006AA7", gold: "#FECC02", spine: "#005285", spineDeep: "#003d63", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#b8cee0", paperCard: "#d5e2f5", bodyBg: "#98b5d8" },
  { name: "Turkey",               slug: "turkey",      flag: "🇹🇷", pitch: "#E30A17", gold: "#c8a14a", spine: "#b50812", spineDeep: "#860610", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#efc8c8", paperCard: "#fde0e0", bodyBg: "#d8b8b8" },
  { name: "Czech Republic",       slug: "czech-republic", flag: "🇨🇿", pitch: "#D7141A", gold: "#11457E", spine: "#a80f14", spineDeep: "#780c10", spineInk: "#ffffff", page: "#ffffff", pageEdge: "#edccc8", paperCard: "#fae6e4", bodyBg: "#d8b8b5" },
  { name: "Bosnia and Herzegovina", slug: "bosnia",   flag: "🇧🇦", pitch: "#002395", gold: "#FFCD00", spine: "#001a70", spineDeep: "#00104a", spineInk: "#f6f1e6", page: "#ffffff", pageEdge: "#b8c0e0", paperCard: "#d5d8f5", bodyBg: "#98a0d5" },
];

const outDir = path.join(__dirname);

function makeNationIndexHtml(n) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <base href="/nations/${n.slug}/">
  <title>ICONED · ${n.name} ${n.flag}</title>
  <meta name="description" content="ICONED · ${n.name}: Guess the iconic 2026 World Cup player from ${n.name}. Five shots, new player every day.">
  <link rel="canonical" href="https://www.iconed.wtf/nations/${n.slug}/">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚽</text></svg>" type="image/svg+xml">

  <meta property="og:type" content="website">
  <meta property="og:site_name" content="ICONED">
  <meta property="og:title" content="ICONED · ${n.name}: Guess the 2026 World Cup player">
  <meta property="og:description" content="Guess the iconic ${n.name} player from the 2026 World Cup squad.">
  <meta property="og:url" content="https://www.iconed.wtf/nations/${n.slug}/">
  <meta property="og:image" content="https://www.iconed.wtf/og-image.png">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="ICONED · ${n.name}: Guess the 2026 WC player">
  <meta name="twitter:image" content="https://www.iconed.wtf/og-image.png">
  <meta name="theme-color" content="${n.spine}">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:ital,wght@0,400;0,600;0,700;1,400;1,500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../styles.css" />
  <style>
    :root {
      --page:       ${n.page};
      --page-edge:  ${n.pageEdge};
      --paper-card: ${n.paperCard};
      --ink:        #181410;
      --ink-soft:   rgba(24,20,16,.55);
      --spine:      ${n.spine};
      --spine-deep: ${n.spineDeep};
      --spine-ink:  ${n.spineInk};
      --gold:       ${n.gold};
      --pitch:      ${n.pitch};
      --red:        #c8412e;
      --body-bg:    ${n.bodyBg};
    }
  </style>
</head>
<body>
  <script>
    window.NATION_CONFIG = {
      name:      "${n.name}",
      flag:      "${n.flag}",
      slug:      "${n.slug}",
      pitch:     "${n.pitch}",
      gold:      "${n.gold}",
      spine:     "${n.spine}",
      spineDeep: "${n.spineDeep}",
      spineInk:  "${n.spineInk}"
    };
  </script>

  <div class="album">
    <div class="spine">
      <a class="spine-top" id="spineTitle" href="/" title="Back to ICONED Home">ICONED HOME</a>
      <div class="spine-rules"><span></span><span></span><span></span></div>
      <span class="spine-bottom">WC26 · ${n.flag}</span>
    </div>
    <div class="album-content">
      <header class="album-header">
        <div class="wordmark-block">
          <div class="wordmark">
            <a class="wordmark-title" id="wordmarkLink" href="/nations/"><span class="logo-ball">⚽</span> ICONED · WC26 🏆</a>
            <span class="wordmark-page" id="pageLabel">PAGE 1</span>
          </div>
        </div>
        <nav class="album-nav">
          <button class="nav-link" id="rulesToggle" type="button">Rules</button>
          <button class="nav-link" id="archiveToggle" type="button">Archive</button>
          <button class="nav-link" id="statsToggle" type="button">Stats</button>
        </nav>
      </header>

      <div class="page-title" id="pageTitleBlock">
        <span class="kicker gold" id="pageKicker">Page 1 · matchday №1</span>
        <h1>Guess the ${n.flag}<br>${n.name}<br>WC 2026 player.</h1>
        <p class="page-desc">Four clues are on the page.<br>Five shots to guess the player. Each miss reveals a new clue.</p>
      </div>

      <div class="archive-banner hidden" id="archiveBanner">
        <span id="archiveBannerText">Archive · Page 1</span>
        <button id="backToToday" type="button">← Back to today</button>
      </div>

      <div class="sticker-grid" id="stickerGrid">
        <!-- Always visible: WC Squad -->
        <div class="sticker" id="sticker-squad" style="--tilt:-1.4deg">
          <span class="sticker-notch"></span>
          <span class="sticker-tape"></span>
          <span class="label label-squad">WC Squad</span>
          <span class="sticker-value big" id="clueSquad">2026</span>
          <span class="sticker-locked-text"></span>
        </div>
        <!-- Always visible: Country -->
        <div class="sticker" id="sticker-nation" style="--tilt:1.2deg">
          <span class="sticker-notch"></span>
          <span class="sticker-tape"></span>
          <span class="label">Country</span>
          <span class="sticker-value" id="clueNationality">${n.flag} ${n.name}</span>
          <span class="sticker-locked-text"></span>
        </div>
        <!-- Always visible: Caps -->
        <div class="sticker" id="sticker-caps" style="--tilt:-0.4deg">
          <span class="sticker-notch"></span>
          <span class="sticker-tape"></span>
          <span class="label">Caps by June 1, 2026</span>
          <span class="sticker-value big" id="clueCaps">·</span>
          <span class="sticker-locked-text"></span>
        </div>
        <!-- Always visible: Club Country -->
        <div class="sticker" id="sticker-club-country" style="--tilt:0.9deg">
          <span class="sticker-notch"></span>
          <span class="sticker-tape"></span>
          <span class="label">Plays in</span>
          <span class="sticker-value" id="clueClubCountry">·</span>
          <span class="sticker-locked-text"></span>
        </div>
        <!-- Miss 1: Position -->
        <div class="sticker locked" id="sticker-position" style="--tilt:0.8deg">
          <span class="sticker-notch"></span>
          <span class="sticker-tape"></span>
          <span class="label">Position</span>
          <span class="sticker-value" id="cluePosition">·</span>
          <span class="sticker-locked-text">Reveals after miss 1</span>
        </div>
        <!-- Miss 1: Goals -->
        <div class="sticker locked" id="sticker-goals" style="--tilt:-0.7deg">
          <span class="sticker-notch"></span>
          <span class="sticker-tape"></span>
          <span class="label">Goals</span>
          <span class="sticker-value big" id="clueGoals">·</span>
          <span class="sticker-locked-text">Reveals after miss 1</span>
        </div>
        <!-- Miss 2: Age (full width) -->
        <div class="sticker sticker-wide locked" id="sticker-age" style="--tilt:-0.6deg">
          <span class="sticker-notch"></span>
          <span class="sticker-tape"></span>
          <span class="label">Age</span>
          <span class="sticker-value big" id="clueAge">·</span>
          <span class="sticker-locked-text">Reveals after miss 2</span>
        </div>

        <!-- Miss 3: Current club (full width, unlocks with photo) -->
        <div class="sticker sticker-wide locked" id="sticker-club" style="--tilt:-0.3deg">
          <span class="sticker-notch"></span>
          <span class="sticker-tape"></span>
          <span class="label">Current club</span>
          <span class="sticker-value" id="clueClub">·</span>
          <span class="sticker-locked-text">Reveals after miss 3</span>
        </div>
        <!-- Miss 4: Photo -->
        <div class="photo-slot locked" id="photoSlot">
          <div class="photo-slot-placeholder" id="photoPlaceholder">
            <span class="label">Photograph · sticker</span>
            <span class="photo-slot-sub">Reveals after miss 4</span>
          </div>
          <img id="player-image" class="photo-slot-image" alt="Player photo" />
          <span class="photo-corner tl"></span>
          <span class="photo-corner tr"></span>
          <span class="photo-corner bl"></span>
          <span class="photo-corner br"></span>
        </div>      </div>

      <div class="submit-dock" id="guessArea">
        <div class="autocomplete-wrap">
          <input type="text" id="guessInput" placeholder="Type a name…" autocomplete="off" spellcheck="false" />
          <ul class="suggestions" id="suggestions"></ul>
        </div>
        <button id="guessButton" type="button">SHOOT!</button>
      </div>

      <div class="guess-log" id="guessLogCard">
        <div class="guess-log-header">
          <span class="label">Guess log</span>
          <span class="label guess-counter" id="guessCount">0 used · 5 left</span>
        </div>
        <div id="guessList"></div>
      </div>

      <section class="result hidden" id="result">
        <span class="kicker gold result-kicker" id="resultKicker">Page complete</span>
        <div class="countdown-line" id="countdownLine">
          <span class="countdown-label">Time until new player</span>
          <span class="countdown-time" id="countdownTime">--:--:--</span>
        </div>
        <div class="result-header">
          <div>
            <h1 id="resultTitle">Sticker<br>collected.</h1>
          </div>
          <div class="stamp stamp-win" id="solvedStamp">SOLVED</div>
        </div>
        <div class="player-card">
          <span class="sticker-tape tape-wide"></span>
          <div class="player-card-grid">
            <div class="player-portrait">
              <span class="portrait-number" id="portraitNumber"></span>
              <span class="portrait-meta" id="portraitMeta"></span>
              <img id="playerImageResult" alt="Player photo" />
              <span class="portrait-placeholder">WIKI<br>PORTRAIT</span>
              <span class="foil-shimmer"></span>
            </div>
            <div class="player-info">
              <span class="kicker gold" id="stickerNumber">Sticker N° 1</span>
              <h2 id="playerName">PLAYER</h2>
              <div class="player-tags" id="playerTags"></div>
            </div>
          </div>
        </div>
        <div class="match-log-section">
          <span class="label">Shot log</span>
          <div class="match-log" id="matchLogCells"></div>
          <div class="result-guesses" id="resultGuesses"></div>
        </div>
        <pre class="share-preview" id="shareText"></pre>
        <div class="result-ctas">
          <button class="cta-primary" id="shareButton" type="button">SHARE RESULT!</button>
          <button class="cta-secondary" id="archiveButton" type="button">OPEN MY ALBUM</button>
        </div>
        <div class="archive-nav hidden" id="archiveNav">
          <button class="archive-nav-btn" id="archivePrev" type="button">← Previous day</button>
          <button class="archive-nav-btn" id="archiveNext" type="button">Next day →</button>
        </div>
      </section>

      <!-- Stats Modal -->
      <div class="modal-overlay hidden" id="statsModal">
        <div class="modal">
          <div class="modal-header">
            <div><span class="kicker gold">Your collection</span><h2>Statistics</h2></div>
            <button class="modal-close" id="statsClose" type="button">✕</button>
          </div>
          <p class="stats-note">Every game counts: today's player and any past player from the archive. Replay an archive day as many times as you like; it only counts once.</p>
          <div class="stat-boxes">
            <div class="stat-box"><span class="stat-num" id="statPlayed">0</span><span class="stat-label-text">Played</span></div>
            <div class="stat-box"><span class="stat-num" id="statWon">0</span><span class="stat-label-text">Won</span></div>
            <div class="stat-box"><span class="stat-num" id="statPct">0</span><span class="stat-label-text">Win %</span></div>
            <div class="stat-box"><span class="stat-num" id="statStreak">0</span><span class="stat-label-text">Streak</span></div>
            <div class="stat-box"><span class="stat-num" id="statMax">0</span><span class="stat-label-text">Best</span></div>
          </div>
          <div class="dist-chart" id="distChart"></div>
          <div class="modal-actions">
            <button class="cta-secondary" id="copyStatsBtn" type="button">SHARE YOUR SCORE</button>
          </div>
          <div class="modal-actions">
            <button class="transfer-btn" id="transferToggle" type="button">Transfer stats to another device</button>
            <button class="reset-btn" id="resetStats" type="button">Reset stats</button>
          </div>
        </div>
      </div>

      <!-- Transfer Modal -->
      <div class="modal-overlay hidden" id="transferModal">
        <div class="modal">
          <div class="modal-header">
            <div><span class="kicker gold">Transfer</span><h2>Move your stats</h2></div>
            <button class="modal-close" id="transferClose" type="button">✕</button>
          </div>
          <div class="transfer-section">
            <p class="label">Export code</p>
            <p class="transfer-hint">Copy this code and paste it on your other device.</p>
            <div class="transfer-code-wrap">
              <textarea class="transfer-code" id="exportCode" readonly></textarea>
              <button class="cta-secondary" id="copyExportCode" type="button">COPY CODE</button>
            </div>
          </div>
          <div class="transfer-section">
            <p class="label">Import code</p>
            <p class="transfer-hint">Paste a transfer code to import stats.</p>
            <div class="transfer-code-wrap">
              <textarea class="transfer-code" id="importCode" placeholder="Paste transfer code here…"></textarea>
              <button class="cta-secondary" id="importStatsBtn" type="button">IMPORT</button>
            </div>
            <p class="transfer-msg hidden" id="transferMsg"></p>
          </div>
        </div>
      </div>

      <!-- Rules Modal -->
      <div class="modal-overlay hidden" id="rulesModal">
        <div class="modal">
          <div class="modal-header">
            <div><span class="kicker gold">How to play</span><h2>Rules</h2></div>
            <button class="modal-close" id="rulesClose" type="button">✕</button>
          </div>
          <div class="rules-body">
            <p>Guess the <strong>${n.name} ${n.flag}</strong> player from the 2026 World Cup squad.</p>
            <p>You start with four clues:</p>
            <ul>
              <li><strong>WC Squad</strong>: always 2026</li>
              <li><strong>Country</strong>: always ${n.name}</li>
              <li><strong>Caps</strong>: international appearances by June 1, 2026</li>
              <li><strong>Plays in</strong>: country where their club is based</li>
            </ul>
            <p>Each wrong guess reveals an extra clue:</p>
            <ul>
              <li>Miss 1 → <strong>Position</strong> &amp; <strong>Goals scored</strong></li>
              <li>Miss 2 → <strong>Age</strong></li>
              <li>Miss 3 → <strong>Current club</strong></li>
              <li>Miss 4 → <strong>Wikipedia photo</strong></li>
            </ul>
            <p>You have <strong>5 shots</strong> to guess the player. A new player appears every day at midnight.</p>
          </div>
        </div>
      </div>

      <!-- Archive Modal -->
      <div class="modal-overlay hidden" id="archiveModal">
        <div class="modal modal-archive">
          <div class="modal-header">
            <div><span class="kicker gold">Past players</span><h2>Archive</h2></div>
            <button class="modal-close" id="archiveClose" type="button">✕</button>
          </div>
          <button class="archive-album-link" id="archiveOpenAlbum">
            <span>My ${n.name} Album</span>
            <span>→</span>
          </button>
          <div class="archive-list" id="archiveList"></div>
        </div>
      </div>

      <!-- Sticker Album View -->
      <div class="album-view hidden" id="albumView">
        <div class="album-view-header">
          <div>
            <span class="kicker gold">My collection</span>
            <h1>${n.flag} ${n.name}<br>Album</h1>
          </div>
          <button class="back-btn" id="albumBack" type="button">← Back</button>
        </div>
        <div class="album-progress">
          <div class="album-progress-header">
            <span class="label">Progress</span>
            <span class="album-progress-pct" id="albumPct">0/0 · 0%</span>
          </div>
          <div class="album-progress-bar"><div class="album-progress-fill" id="albumFill" style="width:0%"></div></div>
        </div>
        <div class="sticker-album-grid" id="albumGrid"></div>
      </div>

      <!-- Cookie Consent -->
      <div class="consent-overlay hidden" id="consentOverlay">
        <div class="consent-card">
          <div class="consent-header">
            <span class="kicker gold">Before you play</span>
            <h2>We use cookies & local storage</h2>
            <p class="consent-subtitle">ICONED stores your game progress and stats on this device. We also use Microsoft Clarity to understand how the game is used, which is data that goes to Microsoft.</p>
          </div>
          <div class="consent-body">
            <span class="label">What we store</span>
            <ul class="consent-list">
              <li>Your game state and guesses (today + archive)</li>
              <li>Your win/streak statistics</li>
              <li>Player thumbnail image cache</li>
            </ul>
          </div>
          <div class="consent-actions">
            <button class="cta-primary" id="consentAccept" type="button" style="flex:1">Got it, let's play!</button>
            <button class="cta-secondary" id="consentDecline" type="button" style="flex:1">Decline</button>
          </div>
        </div>
      </div>

      <footer class="site-footer">
        <button class="cookie-settings-link" id="cookieSettingsLink" type="button">Cookie settings</button>
        <p class="footer-contact"><a href="mailto:trier.boaster.2f@icloud.com">hello@iconed</a> · <a href="/">Back to ICONED</a></p>
      </footer>
    </div>
  </div>

  <script src="data.js"></script>
  <script src="../stats.js"></script>
  <script src="../app.js"></script>
</body>
</html>`;
}

function makeDataJs() {
  return `// Player data for this nation's 2026 World Cup squad.
// Format:
// {
//   id:            "brazil-vinicius-jr",     // unique id (no spaces/accents)
//   answer:        "Vinícius Júnior",        // display name
//   aliases:       ["Vinicius Jr", "Vini"],  // accepted alternate spellings
//   nationality:   "Brazil",
//   caps:          87,                       // caps by June 1, 2026 (always shown)
//   clubCountry:   "Spain",                  // country where club is based (always shown)
//   position:      "Forward",               // Goalkeeper | Defender | Midfielder | Forward (miss 1)
//   goals:         36,                       // international goals (miss 1)
//   age:           25,                       // age as of June 11, 2026 (miss 2)
//   shirtNumber:   7,                        // shirt number (miss 3)
//   club:          "Real Madrid",            // current club name (miss 4)
//   wikipediaTitle:"Vinícius Júnior",        // exact Wikipedia article title for photo fetch (miss 4)
//   imageUrl:      null                      // optional direct image URL (overrides Wikipedia)
// }

window.PUZZLES = [
  // TODO: add squad players here
];

window.PUZZLE_ORDER = []; // will be auto-generated when squad is added
`;
}

// Generate each nation folder
let created = 0;
for (const n of NATIONS) {
  const dir = path.join(outDir, n.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const indexPath = path.join(dir, "index.html");
  const dataPath  = path.join(dir, "data.js");

  // Only write index.html if it doesn't exist (don't overwrite manual edits)
  fs.writeFileSync(indexPath, makeNationIndexHtml(n), "utf8");

  // Only create data.js if it doesn't exist yet
  if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, makeDataJs(), "utf8");
  }

  console.log(`✓ ${n.flag}  /nations/${n.slug}/`);
  created++;
}

console.log(`\nDone! Created/updated ${created} nation folders.`);
