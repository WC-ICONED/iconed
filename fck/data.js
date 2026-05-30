// ──────────────────────────────────────────────────────────────────────
// FCK data — F.C. København player roster (1992-93 → 2024-25).
// Source schema:
//   { league, club, age_basis, players: [
//        { season, name, nationality, position, shirt_number,
//          age_that_season, fun_fact, image_url? } ] }
//
// All players share the same club (FCK) so "club" is not a clue.
// Schedule shuffled deterministically with LCG seed=2025.
// ──────────────────────────────────────────────────────────────────────

window.FCK_DATA = {
  "league": "Danish Superliga",
  "club": "FC Copenhagen",
  "age_basis": "age on July 1 at the start of the listed season",
  "players": [
    {
      "season": "1992-93",
      "name": "Palle Petersen",
      "nationality": "Danish",
      "position": "Goalkeeper",
      "shirt_number": 1,
      "age_that_season": 33,
      "fun_fact": "FCK fans voted him Player of the Year in the club’s debut championship season, 1992-93.",
      "image_url": "https://www.fck.dk/sites/default/files/styles/player_teaser_portrait/public/players/portrait/Palle%20Petersen_portrait.jpg?h=4f321f6b&itok=n6VID6-4"
    },
    {
      "season": "1992-93",
      "name": "Martin Johansen",
      "nationality": "Danish",
      "position": "Forward",
      "shirt_number": 10,
      "age_that_season": 19,
      "fun_fact": "He scored twice in the 3-2 win at Brøndby that helped decide FCK’s first league title.",
      "image_url": "https://www.fck.dk/sites/default/files/styles/player_teaser_portrait/public/players/portrait/Martin%20Johansen_portrait.jpg?h=4f321f6b&itok=QKFU6g8T"
    },
    {
      "season": "1992-93",
      "name": "Lars Højer",
      "nationality": "Danish",
      "position": "Midfielder",
      "shirt_number": 5,
      "age_that_season": 21,
      "fun_fact": "FCK’s official profile credits him with 214 total appearances and 66 goals; a renowned free-kick specialist, he was voted the club’s Player of the Year in 1994 before a herniated disc forced him to retire at just 29.",
      "image_url": "https://www.fck.dk/sites/default/files/styles/player_teaser_portrait/public/players/portrait/Lars%20H%C3%B8jer_portrait.jpg?h=4f321f6b&itok=AxUUQm4o"
    },
    {
      "season": "2001-02",
      "name": "Peter Møller",
      "nationality": "Danish",
      "position": "Forward",
      "shirt_number": 14,
      "age_that_season": 29,
      "fun_fact": "FCK’s official profile credits him with 203 total appearances and 55 goals; he arrived in 2001 from Real Oviedo having already been a two-time Superliga top scorer and a league champion with Brøndby.",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/8/8a/Peter_M%C3%B8ller_%28cropped%29.jpg"
    },
    {
      "season": "1993-94",
      "name": "Morten Falch",
      "nationality": "Danish",
      "position": "Defender",
      "shirt_number": 12,
      "age_that_season": 19,
      "fun_fact": "FCK’s official profile credits him with 203 total appearances and 22 goals — a fine tally for a defender who played in the club’s very first match on 1 July 1992.",
      "image_url": "https://www.fck.dk/sites/default/files/styles/hero_image/public/2020-04/morten_falch.jpg?h=c673cd1c&itok=cCneIrNx"
    },
    {
      "season": "1993-94",
      "name": "Michael Johansen",
      "nationality": "Danish",
      "position": "Midfielder",
      "shirt_number": 11,
      "age_that_season": 20,
      "fun_fact": "He and twin brother Martin both played in FCK’s first match on 1 July 1992.",
      "image_url": "https://www.fck.dk/sites/default/files/styles/player_teaser_portrait/public/players/portrait/Michael%20Johansen_portrait.jpg?h=4f321f6b&itok=Z3Vst2V0"
    },
    {
      "season": "1994-95",
      "name": "Per Frandsen",
      "nationality": "Danish",
      "position": "Midfielder",
      "shirt_number": 15,
      "age_that_season": 24,
      "fun_fact": "FCK’s official profile credits him with 24 goals in 68 total appearances before he was sold to England’s Bolton Wanderers for £1.25 million in 1996.",
      "image_url": "https://img.sofascore.com/api/v1/player/1421775/image"
    },
    {
      "season": "1994-95",
      "name": "Allan Nielsen",
      "nationality": "Danish",
      "position": "Midfielder",
      "shirt_number": 7,
      "age_that_season": 23,
      "fun_fact": "FCK’s official profile lists his debut as 20 March 1994 against Lyngby.",
      "image_url": "https://img.sofascore.com/api/v1/player/1421776/image"
    },
    {
      "season": "1995-96",
      "name": "Christian Lønstrup",
      "nationality": "Danish",
      "position": "Midfielder",
      "shirt_number": 6,
      "age_that_season": 24,
      "fun_fact": "FCK’s official profile credits him with 256 appearances and four Superliga titles; an original 1992-93 gold medalist, his career also took in a spell at Italy’s Cagliari.",
      "image_url": "https://img.sofascore.com/api/v1/player/2321652/image"
    },
    {
      "season": "1996-97",
      "name": "Antti Niemi",
      "nationality": "Finnish",
      "position": "Goalkeeper",
      "shirt_number": 1,
      "age_that_season": 24,
      "fun_fact": "FCK’s official profile records 55 total appearances after he joined in November 1995, and he later became the first goalkeeper ever substituted in an FA Cup final, for Southampton in 2003.",
      "image_url": "https://img.sofascore.com/api/v1/player/886/image"
    },
    {
      "season": "1996-97",
      "name": "Diego Tur",
      "nationality": "Danish",
      "position": "Defender",
      "shirt_number": 3,
      "age_that_season": 24,
      "fun_fact": "He played most of his career at FCK and is in the club’s Legends Club.",
      "image_url": "https://www.fck.dk/sites/default/files/styles/player_teaser_portrait/public/players/portrait/Diego%20Tur_portrait.jpg?h=4f321f6b&itok=F-E3wsMO"
    },
    {
      "season": "1997-98",
      "name": "Bjarne Goldbæk",
      "nationality": "Danish",
      "position": "Midfielder",
      "shirt_number": 7,
      "age_that_season": 28,
      "fun_fact": "FCK’s official profile credits him with 99 appearances and 22 goals, and in 1998 he joined Chelsea in the deal that sent Brian Laudrup the other way to Copenhagen.",
      "image_url": "https://img.sofascore.com/api/v1/player/1422046/image"
    },
    {
      "season": "1997-98",
      "name": "David Nielsen",
      "nationality": "Danish",
      "position": "Forward",
      "shirt_number": 9,
      "age_that_season": 20,
      "fun_fact": "FCK’s official profile credits him with 43 goals in 133 total appearances; the club’s top scorer three seasons running (1998-2000), he later became a well-known Superliga manager.",
      "image_url": "https://img.sofascore.com/api/v1/player/8458/image"
    },
    {
      "season": "1997-98",
      "name": "Niclas Jensen",
      "nationality": "Danish",
      "position": "Defender",
      "shirt_number": 18,
      "age_that_season": 22,
      "fun_fact": "FCK highlights his memorable free-kick against Ajax in the 2001 UEFA Cup.",
      "image_url": "https://img.sofascore.com/api/v1/player/102/image"
    },
    {
      "season": "1997-98",
      "name": "Thomas Thorninger",
      "nationality": "Danish",
      "position": "Midfielder",
      "shirt_number": 14,
      "age_that_season": 24,
      "fun_fact": "FCK’s official profile credits him with 134 appearances and 29 goals, and he supplied the cross for Sibusiso Zuma’s famous bicycle kick at Brøndby in 2001.",
      "image_url": "https://www.fck.dk/sites/default/files/styles/hero_image/public/2017-06/Thomas%20Thorninger.jpg?h=c673cd1c&itok=sOlC-Xe1"
    },
    {
      "season": "1998-99",
      "name": "Brian Laudrup",
      "nationality": "Danish",
      "position": "Forward",
      "shirt_number": 11,
      "age_that_season": 29,
      "fun_fact": "FCK’s official profile records 12 Superliga appearances and two goals — the final months of a career in which the Euro ’92 winner was four times named Danish Footballer of the Year.",
      "image_url": "https://img.sofascore.com/api/v1/player/1421772/image"
    },
    {
      "season": "1999-00",
      "name": "Hjalte Nørregaard",
      "nationality": "Danish",
      "position": "Midfielder",
      "shirt_number": 25,
      "age_that_season": 18,
      "fun_fact": "FCK’s official profile credits him with 320 appearances and six Superliga titles; twice the club’s Player of the Year, he later served as FCK’s interim manager in 2020.",
      "image_url": "https://img.sofascore.com/api/v1/player/1854849/image"
    },
    {
      "season": "2000-01",
      "name": "Sibusiso Zuma",
      "nationality": "South African",
      "position": "Forward",
      "shirt_number": 10,
      "age_that_season": 25,
      "fun_fact": "His bicycle kick against Brøndby in 2001 is one of FCK’s iconic title-race moments.",
      "image_url": "https://img.sofascore.com/api/v1/player/989/image"
    },
    {
      "season": "2000-01",
      "name": "Heine Fernandez",
      "nationality": "Danish",
      "position": "Forward",
      "shirt_number": 11,
      "age_that_season": 33,
      "fun_fact": "FCK’s official profile credits him with 12 goals in 37 total appearances, part of a career in which he scored 126 Superliga goals — among the most in the league’s history.",
      "image_url": "https://www.fck.dk/sites/default/files/styles/hero_image/public/2017-06/Heine%20Fernandez.jpg?h=c673cd1c&itok=pJ7eUHk2"
    },
    {
      "season": "2001-02",
      "name": "Christian Poulsen",
      "nationality": "Danish",
      "position": "Midfielder",
      "shirt_number": 6,
      "age_that_season": 21,
      "fun_fact": "He moved from FCK to Schalke 04 after his breakthrough in Denmark.",
      "image_url": "https://img.sofascore.com/api/v1/player/251/image"
    },
    {
      "season": "2001-02",
      "name": "Morten Bisgaard",
      "nationality": "Danish",
      "position": "Midfielder",
      "shirt_number": 21,
      "age_that_season": 27,
      "fun_fact": "FCK’s official profile credits him with 98 appearances and two Superliga titles before he moved to England’s Derby County in 2004.",
      "image_url": "https://img.sofascore.com/api/v1/player/10006/image"
    },
    {
      "season": "2001-02",
      "name": "Thomas Røll",
      "nationality": "Danish",
      "position": "Midfielder",
      "shirt_number": 9,
      "age_that_season": 24,
      "fun_fact": "FCK’s official profile credits him with 127 appearances and 26 goals; signed from Silkeborg for a reported 7 million kroner, he won three league titles before injuries took their toll.",
      "image_url": "https://www.fck.dk/sites/default/files/styles/hero_image/public/2017-06/Thomas%20R%C2%AFll.jpg?h=c673cd1c&itok=o_DX9d_V"
    },
    {
      "season": "2003-04",
      "name": "Lars Jacobsen",
      "nationality": "Danish",
      "position": "Defender",
      "shirt_number": 2,
      "age_that_season": 23,
      "fun_fact": "FCK’s official profile credits him with 263 appearances and four Superliga titles across two spells; the Denmark right-back also won 81 caps and played at the 2010 World Cup.",
      "image_url": "https://img.sofascore.com/api/v1/player/8508/image"
    },
    {
      "season": "2003-04",
      "name": "Michael Silberbauer",
      "nationality": "Danish",
      "position": "Midfielder",
      "shirt_number": 8,
      "age_that_season": 21,
      "fun_fact": "FCK’s official profile credits him with 195 appearances and 29 goals; capped 25 times by Denmark, he later moved into coaching in the Bundesliga.",
      "image_url": "https://img.sofascore.com/api/v1/player/8526/image"
    },
    {
      "season": "2003-04",
      "name": "Álvaro Santos",
      "nationality": "Brazilian",
      "position": "Forward",
      "shirt_number": 18,
      "age_that_season": 23,
      "fun_fact": "FCK’s shirt-number archive lists him in #18 before he later took #7.",
      "image_url": "https://img.sofascore.com/api/v1/player/16453/image"
    },
    {
      "season": "2004-05",
      "name": "William Kvist",
      "nationality": "Danish",
      "position": "Midfielder",
      "shirt_number": 23,
      "age_that_season": 19,
      "fun_fact": "FCK’s official profile credits him with 425 appearances and eight Superliga titles; the Denmark midfielder later played for Stuttgart and Fulham before returning to finish his career at FCK.",
      "image_url": "https://img.sofascore.com/api/v1/player/8521/image"
    },
    {
      "season": "2004-05",
      "name": "Tobias Linderoth",
      "nationality": "Swedish",
      "position": "Midfielder",
      "shirt_number": 6,
      "age_that_season": 25,
      "fun_fact": "FCK’s official profile credits him with 127 appearances after joining in July 2004, and the Sweden midfielder captained the club to its first-ever Champions League group stage in 2006.",
      "image_url": "https://img.sofascore.com/api/v1/player/8511/image"
    },
    {
      "season": "2005-06",
      "name": "Jesper Christiansen",
      "nationality": "Danish",
      "position": "Goalkeeper",
      "shirt_number": 1,
      "age_that_season": 27,
      "fun_fact": "FCK’s official profile credits him with 210 appearances and four Superliga titles, and he was voted Denmark’s Goalkeeper of the Year three seasons running (2005-2007).",
      "image_url": "https://img.sofascore.com/api/v1/player/8505/image"
    },
    {
      "season": "2005-06",
      "name": "Atiba Hutchinson",
      "nationality": "Canadian",
      "position": "Midfielder",
      "shirt_number": 13,
      "age_that_season": 22,
      "fun_fact": "FCK’s official profile credits him with 215 appearances and four Superliga titles; the six-time Canadian Player of the Year later spent a decade at Beşiktaş.",
      "image_url": "https://img.sofascore.com/api/v1/player/7721/image"
    },
    {
      "season": "2005-06",
      "name": "Brede Hangeland",
      "nationality": "Norwegian",
      "position": "Defender",
      "shirt_number": 5,
      "age_that_season": 24,
      "fun_fact": "FCK’s official profile credits him with 107 appearances after joining in January 2006, and the Norway captain was later sold to Fulham, whom he helped reach the 2010 Europa League final.",
      "image_url": "https://img.sofascore.com/api/v1/player/6381/image"
    },
    {
      "season": "2005-06",
      "name": "Michael Gravgaard",
      "nationality": "Danish",
      "position": "Defender",
      "shirt_number": 14,
      "age_that_season": 27,
      "fun_fact": "FCK’s official profile credits him with 129 appearances and 10 goals, his aerial power earning him the nickname ‘Copenhagen Air Force’ among the fans.",
      "image_url": "https://img.sofascore.com/api/v1/player/8503/image"
    },
    {
      "season": "2005-06",
      "name": "Marcus Allbäck",
      "nationality": "Swedish",
      "position": "Forward",
      "shirt_number": 11,
      "age_that_season": 31,
      "fun_fact": "He was later inducted into FCK’s Legends Club.",
      "image_url": "https://img.sofascore.com/api/v1/player/1422223/image"
    },
    {
      "season": "2006-07",
      "name": "Jesper Grønkjær",
      "nationality": "Danish",
      "position": "Midfielder",
      "shirt_number": 10,
      "age_that_season": 28,
      "fun_fact": "He was later inducted into FCK’s Legends Club.",
      "image_url": "https://img.sofascore.com/api/v1/player/2425/image"
    },
    {
      "season": "2007-08",
      "name": "Zdeněk Pospěch",
      "image_url": "https://img.sofascore.com/api/v1/player/12406/image",
      "nationality": "Czech",
      "position": "Defender",
      "shirt_number": 2,
      "age_that_season": 28,
      "fun_fact": "FCK’s official profile credits him with 151 appearances and 16 goals; the Czech right-back played at Euro 2008 and later joined Bundesliga side Mainz."
    },
    {
      "season": "2007-08",
      "name": "Rasmus Würtz",
      "nationality": "Danish",
      "position": "Midfielder",
      "shirt_number": 6,
      "age_that_season": 23,
      "fun_fact": "FCK’s shirt-number archive lists him with #6 from autumn 2007 to autumn 2009.",
      "image_url": "https://img.sofascore.com/api/v1/player/8307/image"
    },
    {
      "season": "2007-08",
      "name": "Libor Sionko",
      "nationality": "Czech",
      "position": "Midfielder",
      "shirt_number": 24,
      "age_that_season": 30,
      "fun_fact": "FCK’s shirt-number archive lists him with #24 from autumn 2007 to autumn 2009.",
      "image_url": "https://img.sofascore.com/api/v1/player/1422482/image"
    },
    {
      "season": "2007-08",
      "name": "Morten Nordstrand",
      "nationality": "Danish",
      "position": "Forward",
      "shirt_number": 9,
      "age_that_season": 24,
      "fun_fact": "FCK’s shirt-number archive lists him with #9 from autumn 2007 to spring 2012.",
      "image_url": "https://img.sofascore.com/api/v1/player/15904/image"
    },
    {
      "season": "2008-09",
      "name": "Johan Wiland",
      "nationality": "Swedish",
      "position": "Goalkeeper",
      "shirt_number": 21,
      "age_that_season": 27,
      "fun_fact": "FCK’s shirt-number archive lists him with #21 from spring 2009 to autumn 2015.",
      "image_url": "https://img.sofascore.com/api/v1/player/1103969/image"
    },
    {
      "season": "2008-09",
      "name": "Martin Vingaard",
      "nationality": "Danish",
      "position": "Midfielder",
      "shirt_number": 20,
      "age_that_season": 23,
      "fun_fact": "FCK’s shirt-number archive lists him with #20 from spring 2009 to autumn 2013.",
      "image_url": "https://img.sofascore.com/api/v1/player/859699/image"
    },
    {
      "season": "2008-09",
      "name": "César Santin",
      "nationality": "Brazilian",
      "position": "Forward",
      "shirt_number": 11,
      "age_that_season": 27,
      "fun_fact": "FCK’s shirt-number archive lists him with #11 from autumn 2008 to autumn 2013.",
      "image_url": "https://img.sofascore.com/api/v1/player/7766/image"
    },
    {
      "season": "2008-09",
      "name": "Dame N'Doye",
      "nationality": "Senegalese",
      "position": "Forward",
      "shirt_number": 14,
      "age_that_season": 23,
      "fun_fact": "FCK’s official profile credits him with 118 goals in 217 total appearances, making him the club’s all-time leading scorer and the highest-scoring foreign player in Superliga history.",
      "image_url": "https://img.sofascore.com/api/v1/player/30178/image"
    },
    {
      "season": "2009-10",
      "name": "Bryan Oviedo",
      "nationality": "Costa Rican",
      "position": "Defender",
      "shirt_number": 19,
      "age_that_season": 19,
      "fun_fact": "FCK’s shirt-number archive lists him with #19 during two FCK spells.",
      "image_url": "https://img.sofascore.com/api/v1/player/109064/image"
    },
    {
      "season": "2009-10",
      "name": "Oscar Wendt",
      "nationality": "Swedish",
      "position": "Defender",
      "shirt_number": 17,
      "age_that_season": 23,
      "fun_fact": "FCK’s shirt-number archive lists him with #17 from autumn 2006 to spring 2011.",
      "image_url": "https://img.sofascore.com/api/v1/player/7058/image"
    },
    {
      "season": "2010-11",
      "name": "Pierre Bengtsson",
      "nationality": "Swedish",
      "position": "Defender",
      "shirt_number": 3,
      "age_that_season": 22,
      "fun_fact": "FCK’s shirt-number archive lists him with #3 from spring 2011 to autumn 2014.",
      "image_url": "https://img.sofascore.com/api/v1/player/7085/image"
    },
    {
      "season": "2010-11",
      "name": "Claudemir",
      "nationality": "Brazilian",
      "position": "Midfielder",
      "shirt_number": 6,
      "age_that_season": 22,
      "fun_fact": "FCK’s shirt-number archive lists him with #6 from autumn 2010 to spring 2015.",
      "image_url": "https://img.sofascore.com/api/v1/player/34257/image"
    },
    {
      "season": "2010-11",
      "name": "Christian Bolaños",
      "nationality": "Costa Rican",
      "position": "Midfielder",
      "shirt_number": 30,
      "age_that_season": 26,
      "fun_fact": "FCK’s shirt-number archive lists him with #30 from autumn 2010 to spring 2014.",
      "image_url": "https://img.sofascore.com/api/v1/player/11381/image"
    },
    {
      "season": "2011-12",
      "name": "Ragnar Sigurðsson",
      "nationality": "Icelandic",
      "position": "Defender",
      "shirt_number": 17,
      "age_that_season": 25,
      "fun_fact": "FCK’s shirt-number archive lists him with #17 from autumn 2011 to autumn 2013.",
      "image_url": "https://img.sofascore.com/api/v1/player/22071/image"
    },
    {
      "season": "2011-12",
      "name": "Youssef Toutouh",
      "nationality": "Danish",
      "position": "Midfielder",
      "shirt_number": 24,
      "age_that_season": 18,
      "fun_fact": "FCK’s shirt-number archive lists him with #24 from autumn 2011 to spring 2018.",
      "image_url": "https://img.sofascore.com/api/v1/player/150630/image"
    },
    {
      "season": "2012-13",
      "name": "Thomas Delaney",
      "nationality": "Danish",
      "position": "Midfielder",
      "shirt_number": 27,
      "age_that_season": 20,
      "fun_fact": "FCK’s shirt-number archive lists him with #27 before he later took #8.",
      "image_url": "https://img.sofascore.com/api/v1/player/66477/image"
    },
    {
      "season": "2012-13",
      "name": "Nicolai Jørgensen",
      "nationality": "Danish",
      "position": "Forward",
      "shirt_number": 18,
      "age_that_season": 21,
      "fun_fact": "FCK’s shirt-number archive lists him with #18 from autumn 2012 to spring 2014.",
      "image_url": "https://img.sofascore.com/api/v1/player/57857/image"
    },
    {
      "season": "2012-13",
      "name": "Rúrik Gíslason",
      "nationality": "Icelandic",
      "position": "Midfielder",
      "shirt_number": 19,
      "age_that_season": 24,
      "fun_fact": "FCK’s shirt-number archive lists him with #19 from spring 2013 to spring 2015.",
      "image_url": "https://img.sofascore.com/api/v1/player/13059/image"
    },
    {
      "season": "2012-13",
      "name": "Danny Amankwaa",
      "nationality": "Danish",
      "position": "Midfielder",
      "shirt_number": 32,
      "age_that_season": 18,
      "fun_fact": "FCK’s official profile credits him with 99 appearances and three Superliga titles; tracked by Ajax and Arsenal as a teenager, he chose to stay at his boyhood club.",
      "image_url": "https://img.sofascore.com/api/v1/player/94279/image"
    },
    {
      "season": "2012-13",
      "name": "Andreas Cornelius",
      "nationality": "Danish",
      "position": "Forward",
      "shirt_number": 29,
      "age_that_season": 19,
      "fun_fact": "FCK’s shirt-number archive lists him with #29 in 2012-13 before he later wore #11 and #14.",
      "image_url": "https://img.sofascore.com/api/v1/player/183483/image"
    },
    {
      "season": "2014-15",
      "name": "Mathias Zanka Jørgensen",
      "nationality": "Danish",
      "position": "Defender",
      "shirt_number": 25,
      "age_that_season": 24,
      "fun_fact": "FCK’s shirt-number archive lists him in multiple #25 spells.",
      "image_url": "https://img.sofascore.com/api/v1/player/26404/image"
    },
    {
      "season": "2014-15",
      "name": "Mikael Antonsson",
      "nationality": "Swedish",
      "position": "Defender",
      "shirt_number": 15,
      "age_that_season": 33,
      "fun_fact": "FCK’s shirt-number archive lists his second #15 spell from autumn 2014 to spring 2018.",
      "image_url": "https://img.sofascore.com/api/v1/player/1050/image"
    },
    {
      "season": "2014-15",
      "name": "Stephan Andersen",
      "nationality": "Danish",
      "position": "Goalkeeper",
      "shirt_number": 1,
      "age_that_season": 32,
      "fun_fact": "FCK’s shirt-number archive lists him with #1 from autumn 2014 to spring 2021.",
      "image_url": "https://img.sofascore.com/api/v1/player/15654/image"
    },
    {
      "season": "2014-15",
      "name": "Tom Høgli",
      "nationality": "Norwegian",
      "position": "Defender",
      "shirt_number": 2,
      "age_that_season": 30,
      "fun_fact": "FCK’s shirt-number archive lists him with #2 from autumn 2014 to autumn 2017.",
      "image_url": "https://img.sofascore.com/api/v1/player/6985/image"
    },
    {
      "season": "2014-15",
      "name": "Ludwig Augustinsson",
      "nationality": "Swedish",
      "position": "Defender",
      "shirt_number": 3,
      "age_that_season": 20,
      "fun_fact": "FCK’s shirt-number archive lists him with #3 from spring 2015 to spring 2017.",
      "image_url": "https://img.sofascore.com/api/v1/player/138546/image"
    },
    {
      "season": "2014-15",
      "name": "Bashkim Kadrii",
      "nationality": "Danish",
      "position": "Forward",
      "shirt_number": 9,
      "age_that_season": 22,
      "fun_fact": "FCK’s shirt-number archive lists him with #9 from autumn 2014 to spring 2017.",
      "image_url": "https://img.sofascore.com/api/v1/player/95446/image"
    },
    {
      "season": "2015-16",
      "name": "Kasper Kusk",
      "nationality": "Danish",
      "position": "Midfielder",
      "shirt_number": 17,
      "age_that_season": 23,
      "fun_fact": "FCK’s shirt-number archive lists him with #17 from autumn 2015 to spring 2018.",
      "image_url": "https://img.sofascore.com/api/v1/player/121260/image"
    },
    {
      "season": "2015-16",
      "name": "Erik Johansson",
      "nationality": "Swedish",
      "position": "Defender",
      "shirt_number": 5,
      "age_that_season": 26,
      "fun_fact": "FCK’s shirt-number archive lists him with #5 from spring 2016 to spring 2018.",
      "image_url": "https://img.sofascore.com/api/v1/player/362156/image"
    },
    {
      "season": "2015-16",
      "name": "Benjamin Verbič",
      "image_url": "https://img.sofascore.com/api/v1/player/153230/image",
      "nationality": "Slovenian",
      "position": "Forward",
      "shirt_number": 7,
      "age_that_season": 21,
      "fun_fact": "FCK’s shirt-number archive lists him with #7 from autumn 2015 to autumn 2017."
    },
    {
      "season": "2015-16",
      "name": "Robin Olsen",
      "nationality": "Swedish",
      "position": "Goalkeeper",
      "shirt_number": 31,
      "age_that_season": 25,
      "fun_fact": "FCK’s shirt-number archive lists him with #31 from spring 2016 to spring 2017.",
      "image_url": "https://img.sofascore.com/api/v1/player/26025/image"
    },
    {
      "season": "2015-16",
      "name": "Peter Ankersen",
      "nationality": "Danish",
      "position": "Defender",
      "shirt_number": 22,
      "age_that_season": 24,
      "fun_fact": "FCK’s shirt-number archive lists him with #22 in two FCK spells.",
      "image_url": "https://img.sofascore.com/api/v1/player/113700/image"
    },
    {
      "season": "2015-16",
      "name": "Federico Santander",
      "nationality": "Paraguayan",
      "position": "Forward",
      "shirt_number": 19,
      "age_that_season": 24,
      "fun_fact": "FCK’s shirt-number archive lists him with #19 from autumn 2015 to spring 2017.",
      "image_url": "https://img.sofascore.com/api/v1/player/46972/image"
    },
    {
      "season": "2016-17",
      "name": "Rasmus Falk",
      "nationality": "Danish",
      "position": "Midfielder",
      "shirt_number": 33,
      "age_that_season": 24,
      "fun_fact": "FCK’s official profile credits him with 339 appearances before his 2025 move back to OB; he won five league titles and, as a boy, had moved to OB alongside Christian Eriksen.",
      "image_url": "https://img.sofascore.com/api/v1/player/116660/image"
    },
    {
      "season": "2016-17",
      "name": "Jores Okore",
      "nationality": "Danish",
      "position": "Defender",
      "shirt_number": 26,
      "age_that_season": 23,
      "fun_fact": "FCK’s shirt-number archive lists him with #26 from autumn 2016 to spring 2017.",
      "image_url": "https://img.sofascore.com/api/v1/player/90341/image"
    },
    {
      "season": "2016-17",
      "name": "Uroš Matić",
      "image_url": "https://img.sofascore.com/api/v1/player/63273/image",
      "nationality": "Serbian",
      "position": "Midfielder",
      "shirt_number": 8,
      "age_that_season": 26,
      "fun_fact": "FCK’s shirt-number archive notes his special #88 European registration as well as his fixed #8."
    },
    {
      "season": "2016-17",
      "name": "Ján Greguš",
      "nationality": "Slovak",
      "position": "Midfielder",
      "shirt_number": 16,
      "age_that_season": 25,
      "fun_fact": "FCK’s shirt-number archive lists him with #16 from autumn 2016 to autumn 2018.",
      "image_url": "https://img.sofascore.com/api/v1/player/72903/image"
    },
    {
      "season": "2017-18",
      "name": "Viktor Fischer",
      "nationality": "Danish",
      "position": "Forward",
      "shirt_number": 7,
      "age_that_season": 23,
      "fun_fact": "FCK’s shirt-number archive also records his temporary #77 in the 2018 Atlético Madrid ties.",
      "image_url": "https://img.sofascore.com/api/v1/player/94287/image"
    },
    {
      "season": "2017-18",
      "name": "Andrija Pavlović",
      "image_url": "https://img.sofascore.com/api/v1/player/157637/image",
      "nationality": "Serbian",
      "position": "Forward",
      "shirt_number": 11,
      "age_that_season": 23,
      "fun_fact": "FCK’s shirt-number archive lists him with #11 in autumn 2017 and spring 2018."
    },
    {
      "season": "2017-18",
      "name": "Nicolaj Thomsen",
      "nationality": "Danish",
      "position": "Midfielder",
      "shirt_number": 14,
      "age_that_season": 24,
      "fun_fact": "FCK’s shirt-number archive lists him with #14 before he later wore #8.",
      "image_url": "https://img.sofascore.com/api/v1/player/180477/image"
    },
    {
      "season": "2017-18",
      "name": "Martin Pusic",
      "nationality": "Austrian",
      "position": "Forward",
      "shirt_number": 23,
      "age_that_season": 29,
      "fun_fact": "FCK’s shirt-number archive lists him with #23 in autumn 2017.",
      "image_url": "https://img.sofascore.com/api/v1/player/28260/image"
    },
    {
      "season": "2018-19",
      "name": "Pieros Sotiriou",
      "nationality": "Cypriot",
      "position": "Forward",
      "shirt_number": 28,
      "age_that_season": 25,
      "fun_fact": "FCK’s shirt-number archive lists him with #28 from autumn 2017 to spring 2019.",
      "image_url": "https://img.sofascore.com/api/v1/player/97060/image"
    },
    {
      "season": "2018-19",
      "name": "Robert Skov",
      "nationality": "Danish",
      "position": "Midfielder",
      "shirt_number": 29,
      "age_that_season": 22,
      "fun_fact": "FCK’s shirt-number archive lists him with #29 from spring 2018 to autumn 2019.",
      "image_url": "https://img.sofascore.com/api/v1/player/327863/image"
    },
    {
      "season": "2018-19",
      "name": "Mohamed Daramy",
      "nationality": "Danish",
      "position": "Forward",
      "shirt_number": 40,
      "age_that_season": 16,
      "fun_fact": "FCK’s U19 shirt-number section records him with #40 before he later took #11.",
      "image_url": "https://img.sofascore.com/api/v1/player/957279/image"
    },
    {
      "season": "2018-19",
      "name": "Guillermo Varela",
      "nationality": "Uruguayan",
      "position": "Defender",
      "shirt_number": 2,
      "age_that_season": 25,
      "fun_fact": "FCK’s shirt-number archive lists him with #2 from spring 2019 to spring 2021.",
      "image_url": "https://img.sofascore.com/api/v1/player/311456/image"
    },
    {
      "season": "2019-20",
      "name": "Carlos Zeca",
      "nationality": "Greek",
      "position": "Midfielder",
      "shirt_number": 10,
      "age_that_season": 30,
      "fun_fact": "FCK’s shirt-number archive lists him with #10 from autumn 2017 to spring 2023.",
      "image_url": "https://img.sofascore.com/api/v1/player/125584/image"
    },
    {
      "season": "2019-20",
      "name": "Nicolai Boilesen",
      "nationality": "Danish",
      "position": "Defender",
      "shirt_number": 20,
      "age_that_season": 27,
      "fun_fact": "FCK’s shirt-number archive lists him with #20 from autumn 2016 to spring 2025.",
      "image_url": "https://img.sofascore.com/api/v1/player/95443/image"
    },
    {
      "season": "2019-20",
      "name": "Pep Biel",
      "nationality": "Spanish",
      "position": "Midfielder",
      "shirt_number": 16,
      "age_that_season": 22,
      "fun_fact": "FCK’s shirt-number archive lists him with #16 from autumn 2019 to autumn 2022.",
      "image_url": "https://img.sofascore.com/api/v1/player/914857/image"
    },
    {
      "season": "2019-20",
      "name": "Nicklas Bendtner",
      "nationality": "Danish",
      "position": "Forward",
      "shirt_number": 32,
      "age_that_season": 31,
      "fun_fact": "FCK’s shirt-number archive lists him with #32 in autumn 2019.",
      "image_url": "https://img.sofascore.com/api/v1/player/14049/image"
    },
    {
      "season": "2019-20",
      "name": "Michael Santos",
      "nationality": "Uruguayan",
      "position": "Forward",
      "shirt_number": 18,
      "age_that_season": 26,
      "fun_fact": "FCK’s shirt-number archive lists him with #18 from autumn 2019 to autumn 2020.",
      "image_url": "https://img.sofascore.com/api/v1/player/339115/image"
    },
    {
      "season": "2019-20",
      "name": "Jens Stage",
      "nationality": "Danish",
      "position": "Midfielder",
      "shirt_number": 6,
      "age_that_season": 22,
      "fun_fact": "FCK’s shirt-number archive lists him with #6 from autumn 2019 to spring 2022.",
      "image_url": "https://img.sofascore.com/api/v1/player/830142/image"
    },
    {
      "season": "2020-21",
      "name": "Lukas Lerager",
      "nationality": "Danish",
      "position": "Midfielder",
      "shirt_number": 12,
      "age_that_season": 26,
      "fun_fact": "FCK’s shirt-number archive lists him with #12 from spring 2021 onward.",
      "image_url": "https://img.sofascore.com/api/v1/player/151470/image"
    },
    {
      "season": "2020-21",
      "name": "Victor Nelsson",
      "nationality": "Danish",
      "position": "Defender",
      "shirt_number": 4,
      "age_that_season": 21,
      "fun_fact": "FCK’s shirt-number archive lists him with #4 from autumn 2020 to autumn 2021.",
      "image_url": "https://img.sofascore.com/api/v1/player/846148/image"
    },
    {
      "season": "2020-21",
      "name": "Marko Stamenic",
      "nationality": "New Zealand",
      "position": "Midfielder",
      "shirt_number": 35,
      "age_that_season": 18,
      "fun_fact": "FCK’s U19 shirt-number section records him with #35 in 2020-21.",
      "image_url": "https://img.sofascore.com/api/v1/player/1002620/image"
    },
    {
      "season": "2021-22",
      "name": "Victor Kristiansen",
      "nationality": "Danish",
      "position": "Defender",
      "shirt_number": 34,
      "age_that_season": 18,
      "fun_fact": "FCK’s U19 shirt-number section records him with #34 before it became his fixed number.",
      "image_url": "https://img.sofascore.com/api/v1/player/1092409/image"
    },
    {
      "season": "2021-22",
      "name": "Hákon Arnar Haraldsson",
      "nationality": "Icelandic",
      "position": "Midfielder",
      "shirt_number": 30,
      "age_that_season": 18,
      "fun_fact": "FCK’s shirt-number archive lists him with #30 from autumn 2021 to spring 2023.",
      "image_url": "https://img.sofascore.com/api/v1/player/1138804/image"
    },
    {
      "season": "2021-22",
      "name": "Viktor Claesson",
      "nationality": "Swedish",
      "position": "Midfielder",
      "shirt_number": 15,
      "age_that_season": 29,
      "fun_fact": "FCK’s shirt-number archive lists him with #15 in spring 2022 before he switched to #7.",
      "image_url": "https://img.sofascore.com/api/v1/player/137661/image"
    },
    {
      "season": "2021-22",
      "name": "Denis Vavro",
      "nationality": "Slovak",
      "position": "Defender",
      "shirt_number": 3,
      "age_that_season": 25,
      "fun_fact": "FCK’s shirt-number archive lists him with #3 from spring 2022 to autumn 2024.",
      "image_url": "https://img.sofascore.com/api/v1/player/293127/image"
    },
    {
      "season": "2021-22",
      "name": "Rasmus Højlund",
      "nationality": "Danish",
      "position": "Forward",
      "shirt_number": 28,
      "age_that_season": 18,
      "fun_fact": "FCK’s shirt-number archive lists him with #28 in autumn 2021.",
      "image_url": "https://img.sofascore.com/api/v1/player/1086417/image"
    },
    {
      "season": "2021-22",
      "name": "Kamil Grabara",
      "nationality": "Polish",
      "position": "Goalkeeper",
      "shirt_number": 1,
      "age_that_season": 22,
      "fun_fact": "FCK’s shirt-number archive lists him with #1 from autumn 2021 to spring 2024.",
      "image_url": "https://img.sofascore.com/api/v1/player/902080/image"
    },
    {
      "season": "2021-22",
      "name": "Davit Khocholava",
      "nationality": "Georgian",
      "position": "Defender",
      "shirt_number": 5,
      "age_that_season": 28,
      "fun_fact": "FCK’s shirt-number archive lists him with #5 from autumn 2021 to spring 2024.",
      "image_url": "https://img.sofascore.com/api/v1/player/97023/image"
    },
    {
      "season": "2022-23",
      "name": "Roony Bardghji",
      "nationality": "Swedish",
      "position": "Forward",
      "shirt_number": 40,
      "age_that_season": 16,
      "fun_fact": "FCK’s shirt-number archive lists him with #40 from autumn 2022 to spring 2025.",
      "image_url": "https://img.sofascore.com/api/v1/player/1162107/image"
    },
    {
      "season": "2022-23",
      "name": "Paul Mukairu",
      "nationality": "Nigerian",
      "position": "Forward",
      "shirt_number": 17,
      "age_that_season": 22,
      "fun_fact": "FCK’s shirt-number archive lists him with #17 from spring 2022 to spring 2024.",
      "image_url": "https://img.sofascore.com/api/v1/player/992198/image"
    },
    {
      "season": "2022-23",
      "name": "Orri Óskarsson",
      "nationality": "Icelandic",
      "position": "Forward",
      "shirt_number": 18,
      "age_that_season": 17,
      "fun_fact": "FCK’s shirt-number archive lists him with #18 from autumn 2022 to autumn 2024.",
      "image_url": "https://img.sofascore.com/api/v1/player/1026015/image"
    },
    {
      "season": "2023-24",
      "name": "Kevin Diks",
      "nationality": "Dutch",
      "position": "Defender",
      "shirt_number": 2,
      "age_that_season": 26,
      "fun_fact": "FCK’s shirt-number archive lists him with #2 from autumn 2021 to spring 2025.",
      "image_url": "https://img.sofascore.com/api/v1/player/583806/image"
    },
    {
      "season": "2023-24",
      "name": "Diogo Gonçalves",
      "nationality": "Portuguese",
      "position": "Midfielder",
      "shirt_number": 9,
      "age_that_season": 26,
      "fun_fact": "FCK’s shirt-number archive lists him with #9 from spring 2023 to autumn 2024.",
      "image_url": "https://img.sofascore.com/api/v1/player/357746/image"
    },
    {
      "season": "2023-24",
      "name": "Elias Jelert",
      "nationality": "Danish",
      "position": "Defender",
      "shirt_number": 19,
      "age_that_season": 20,
      "fun_fact": "FCK’s shirt-number archive lists him with #19 from autumn 2022 to spring 2024.",
      "image_url": "https://img.sofascore.com/api/v1/player/1126433/image"
    },
    {
      "season": "2023-24",
      "name": "Jordan Larsson",
      "nationality": "Swedish",
      "position": "Forward",
      "shirt_number": 11,
      "age_that_season": 26,
      "fun_fact": "FCK’s shirt-number archive lists him with #11 from autumn 2023 onward.",
      "image_url": "https://img.sofascore.com/api/v1/player/578380/image"
    },
    {
      "season": "2023-24",
      "name": "Mohamed Elyounoussi",
      "nationality": "Norwegian",
      "position": "Forward",
      "shirt_number": 10,
      "age_that_season": 28,
      "fun_fact": "FCK’s shirt-number archive lists him with #10 from autumn 2023 onward.",
      "image_url": "https://img.sofascore.com/api/v1/player/119151/image"
    },
    {
      "season": "2023-24",
      "name": "Elias Achouri",
      "nationality": "Tunisian",
      "position": "Forward",
      "shirt_number": 30,
      "age_that_season": 24,
      "fun_fact": "FCK’s official profile lists his debut as 25 July 2023 against Breidablik.",
      "image_url": "https://img.sofascore.com/api/v1/player/945204/image"
    },
    {
      "season": "2024-25",
      "name": "Victor Froholdt",
      "nationality": "Danish",
      "position": "Midfielder",
      "shirt_number": 47,
      "age_that_season": 18,
      "fun_fact": "FCK’s official profile records his 2025 transfer to FC Porto.",
      "image_url": "https://img.sofascore.com/api/v1/player/1406639/image"
    },
    {
      "season": "2024-25",
      "name": "William Clem",
      "nationality": "Danish",
      "position": "Midfielder",
      "shirt_number": 36,
      "age_that_season": 20,
      "fun_fact": "FCK’s official profile credits him with 119 appearances by the 2025-26 season, and he made his Champions League debut at just 18, away to Sevilla in 2022.",
      "image_url": "https://img.sofascore.com/api/v1/player/1083413/image"
    }
  ]
};

// Demonyms → country (for FLAG lookup in app.js). Superset of EPL list +
// FCK-specific (Cypriot, Slovak).
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
  "Serbian":      "Serbia",
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
  "Czech":        "Czech Republic",
  "Turkish":      "Turkey",
  "New Zealander":"New Zealand",
  "Algerian":     "Algeria",
  "Trinidadian":  "Trinidad and Tobago",
  "Finnish":      "Finland",
  "Costa Rican":  "Costa Rica",
  "Peruvian":     "Peru",
  "Togolese":     "Togo",
  "South African":"South Africa",
  "Icelandic":    "Iceland",
  "Jamaican":     "Jamaica",
  "Armenian":     "Armenia",
  "Gabonese":     "Gabon",
  "Ecuadorian":   "Ecuador",
  "Greek":        "Greece",
  "Bosnian":      "Bosnia and Herzegovina",
  "Albanian":     "Albania",
  "Slovakian":    "Slovakia",
  "Slovak":       "Slovakia",
  "Slovenian":    "Slovenia",
  "Israeli":      "Israel",
  "Ukrainian":    "Ukraine",
  "Russian":      "Russia",
  "Austrian":     "Austria",
  "Swiss":        "Switzerland",
  "Canadian":     "Canada",
  "Honduran":     "Honduras",
  "Venezuelan":   "Venezuela",
  "Cypriot":      "Cyprus"
};

function slugify(s) {
  return String(s)
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function buildAliases(name) {
  const parts = name.split(/\s+/);
  const out = [];
  if (parts.length > 1) {
    out.push(parts[parts.length - 1]);
    if (parts.length > 2) out.push(parts.slice(-2).join(" "));
  }
  return out;
}

function buildPuzzles() {
  const out = [];
  const data = window.FCK_DATA || {};
  for (const p of data.players || []) {
    const seasonStr = p.season;
    const seasonStartYear = parseInt(seasonStr.slice(0, 4), 10);
    const seasonSlug = seasonStr.replace("-", "");
    const id = `fck-${seasonSlug}-${slugify(p.name)}`;
    out.push({
      id,
      answer: p.name,
      aliases: buildAliases(p.name),
      season: seasonStr,
      seasonStartYear,
      nationality: NATIONALITY_TO_COUNTRY[p.nationality] || p.nationality,
      nationalityRaw: p.nationality,
      club: "F.C. København",
      position: p.position,
      age: p.age_that_season,
      shirtNumber: p.shirt_number,
      funFact: p.fun_fact,
      imageUrl: p.image_url || null,
      wikipediaTitle: p.name
    });
  }
  return out;
}

function buildPuzzleOrder(puzzles) {
  const ids = puzzles.map(p => p.id);
  let seed = 2025;
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
