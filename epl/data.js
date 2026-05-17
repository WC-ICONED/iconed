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
        },
        {
          "name": "David Ginola",
          "club": "Newcastle United",
          "nationality": "French",
          "position": "MID",
          "shirt_number": 11,
          "age": 28,
          "fun_fact": "Dazzled Premier League defences with his silky dribbling as Newcastle pushed United all the way before their famous title collapse.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/David_Ginola_Deauville_2014_2.jpg/330px-David_Ginola_Deauville_2014_2.jpg"
        },
        {
          "name": "Peter Schmeichel",
          "club": "Manchester United",
          "nationality": "Danish",
          "position": "GK",
          "shirt_number": 1,
          "age": 32,
          "fun_fact": "Kept 22 clean sheets as United won the Double, widely regarded as the best goalkeeper in the world at the time.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Peter_Schmeichel_2012-01-25_001.jpg/330px-Peter_Schmeichel_2012-01-25_001.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Les Ferdinand",
          "club": "Newcastle United",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 9,
          "age": 29,
          "fun_fact": "Scored 29 goals in his debut season at St James' Park, forming a lethal partnership with Ginola to power Newcastle's title challenge.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/LesFerdinandMay2015_%28cropped%29.JPG/330px-LesFerdinandMay2015_%28cropped%29.JPG"
        },
        {
          "name": "Robbie Fowler",
          "club": "Liverpool",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 23,
          "age": 20,
          "fun_fact": "Won the PFA Young Player of the Year with 36 goals across all competitions, cementing his reputation as England's most natural finisher.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/6/64/Fowler%2C_Robbie.jpg"
        },
        {
          "name": "Gary Pallister",
          "club": "Manchester United",
          "nationality": "English",
          "position": "DEF",
          "shirt_number": 6,
          "age": 31,
          "fun_fact": "Anchored United's defence through their Double triumph, forming a reliable partnership alongside Steve Bruce.",
          "image_url": ""
        },
        {
          "name": "Tim Flowers",
          "club": "Blackburn Rovers",
          "nationality": "English",
          "position": "GK",
          "shirt_number": 1,
          "age": 29,
          "fun_fact": "Was Blackburn's dependable last line of defence as they finished runners-up, earning England recognition for his consistent shot-stopping.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tim_Flowers_December_2020.png/330px-Tim_Flowers_December_2020.png"
        },
        {
          "name": "Chris Armstrong",
          "club": "Tottenham Hotspur",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 9,
          "age": 26,
          "fun_fact": "Scored 15 league goals in his debut Spurs season, justifying his £4.5m fee with consistent performances throughout the campaign.",
          "image_url": ""
        },
        {
          "name": "Tony Adams",
          "club": "Arsenal",
          "nationality": "English",
          "position": "DEF",
          "shirt_number": 6,
          "age": 29,
          "fun_fact": "Led Arsenal's backline with authority as they finished fifth, a commanding presence who embodied the best of English defending in this era.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Tony_Adams_2017_portrait_%28cropped%29.jpg/330px-Tony_Adams_2017_portrait_%28cropped%29.jpg"
        }
      ]
    },
    {
      "season": "1996-97",
      "players": [
        {
          "name": "Dennis Bergkamp",
          "club": "Arsenal",
          "nationality": "Dutch",
          "position": "FWD",
          "shirt_number": 10,
          "age": 27,
          "fun_fact": "Won both the PFA Players' Player of the Year and FWA Footballer of the Year — a stunning maiden full season at Highbury.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/7/75/Dennis_Bergkamp_2014_%28cropped%29.jpg"
        },
        {
          "name": "Gianfranco Zola",
          "club": "Chelsea",
          "nationality": "Italian",
          "position": "MID",
          "shirt_number": 25,
          "age": 30,
          "fun_fact": "Arrived in November and won the FWA Footballer of the Year in his debut season, dazzling Stamford Bridge with sublime skill and vision.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Zola_2018_%28cropped%29.jpg/330px-Zola_2018_%28cropped%29.jpg"
        },
        {
          "name": "Roy Keane",
          "club": "Manchester United",
          "nationality": "Irish",
          "position": "MID",
          "shirt_number": 16,
          "age": 25,
          "fun_fact": "United's engine as they retained the title, his combative leadership and driving runs from midfield were key to their domestic dominance.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Roy_keane_2014.jpg/330px-Roy_keane_2014.jpg"
        },
        {
          "name": "David Beckham",
          "club": "Manchester United",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 24,
          "age": 21,
          "fun_fact": "Announced himself to the world with his halfway-line lob against Wimbledon on the opening day and was named PFA Young Player of the Year.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/David_Beckham_UNICEF_%28cropped2%29.jpg/330px-David_Beckham_UNICEF_%28cropped2%29.jpg"
        },
        {
          "name": "Ian Wright",
          "club": "Arsenal",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 8,
          "age": 33,
          "fun_fact": "Scored 23 league goals and surpassed Cliff Bastin's all-time Arsenal goalscoring record mid-season, a landmark moment at Highbury.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ian_Wright_at_SXSW_London_June_2025_%28cropped%29.jpg/330px-Ian_Wright_at_SXSW_London_June_2025_%28cropped%29.jpg"
        },
        {
          "name": "Fabrizio Ravanelli",
          "club": "Middlesbrough",
          "nationality": "Italian",
          "position": "FWD",
          "shirt_number": 9,
          "age": 27,
          "fun_fact": "Scored a hat-trick on his debut and netted 16 league goals for a Boro side that were relegated despite his extraordinary individual effort.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Fabrizio_Ravanelli_maggio_2012.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
        },
        {
          "name": "Juninho",
          "club": "Middlesbrough",
          "nationality": "Brazilian",
          "position": "MID",
          "shirt_number": 10,
          "age": 23,
          "fun_fact": "The diminutive Brazilian magician was Boro's creative heartbeat, dazzling with his technique despite the club's relegation.",
          "image_url": ""
        },
        {
          "name": "Gary Neville",
          "club": "Manchester United",
          "nationality": "English",
          "position": "DEF",
          "shirt_number": 2,
          "age": 21,
          "fun_fact": "Cemented his place as first-choice right back for United as they retained the title, his energy and commitment epitomising Fergie's class.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Gary_Neville_2014_%28cropped%29.jpg/330px-Gary_Neville_2014_%28cropped%29.jpg"
        },
        {
          "name": "Matt Le Tissier",
          "club": "Southampton",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 7,
          "age": 28,
          "fun_fact": "Continued to bewitch Premier League defences with his extraordinary technique, his stunning goals making him the most naturally gifted English player of the era.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Matt_Le_Tissier_2022.png/330px-Matt_Le_Tissier_2022.png"
        },
        {
          "name": "Emile Heskey",
          "club": "Leicester City",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 9,
          "age": 18,
          "fun_fact": "Terrified Premier League defenders with his power and pace for Leicester, earning his first England recognition at just 18 years old.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Emile_Heskey_as_a_player_of_England_national_football_team.jpg/330px-Emile_Heskey_as_a_player_of_England_national_football_team.jpg"
        }
      ]
    },
    {
      "season": "1997-98",
      "players": [
        {
          "name": "Marc Overmars",
          "club": "Arsenal",
          "nationality": "Dutch",
          "position": "MID",
          "shirt_number": 11,
          "age": 24,
          "fun_fact": "Tormented defences with blistering pace, scoring the title-swinging winner against United at Highbury as Arsenal won the Double.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/2/20/Marc_Overmars.jpg"
        },
        {
          "name": "Michael Owen",
          "club": "Liverpool",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 18,
          "age": 17,
          "fun_fact": "Burst onto the scene as a 17-year-old, scoring 18 league goals to win the PFA Young Player of the Year and announce himself as a future superstar.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Michael_Owen.jpg/330px-Michael_Owen.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Patrick Vieira",
          "club": "Arsenal",
          "nationality": "French",
          "position": "MID",
          "shirt_number": 4,
          "age": 21,
          "fun_fact": "The imperious midfielder was the defensive spine of Wenger's Double-winning team, dominating midfield battles with power and technique.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Patrick_Vieira_NYCFC_%28cropped%29.JPG/330px-Patrick_Vieira_NYCFC_%28cropped%29.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Stuart Pearce",
          "club": "Nottingham Forest",
          "nationality": "English",
          "position": "DEF",
          "shirt_number": 3,
          "age": 35,
          "fun_fact": "The legendary 'Psycho' marshalled Nottingham Forest's defence in their first Premier League campaign back, bringing experience and fierce left-footed defending to the City Ground.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Stuart_Pearce_%2831651906441%29.jpg/330px-Stuart_Pearce_%2831651906441%29.jpg"
        },
        {
          "name": "Chris Sutton",
          "club": "Blackburn Rovers",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 9,
          "age": 24,
          "fun_fact": "Returned to form with 18 goals for Blackburn, showing the clinical touch that had made him one of England's most coveted strikers.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Sutton%2C_Chris.jpg/330px-Sutton%2C_Chris.jpg"
        },
        {
          "name": "Nigel Martyn",
          "club": "Leeds United",
          "nationality": "English",
          "position": "GK",
          "shirt_number": 1,
          "age": 31,
          "fun_fact": "England's reliable custodian produced a string of outstanding saves for Leeds, keeping them competitive throughout the campaign.",
          "image_url": ""
        },
        {
          "name": "Andy Cole",
          "club": "Manchester United",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 9,
          "age": 26,
          "fun_fact": "Scored 15 league goals as United pushed Arsenal all the way, his electric pace and predatory instincts making him a constant threat.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Andy_Cole_in_2014.jpg/330px-Andy_Cole_in_2014.jpg"
        },
        {
          "name": "David Batty",
          "club": "Newcastle United",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 4,
          "age": 29,
          "fun_fact": "A combative midfield anchor for Newcastle as they challenged for the title, his uncompromising style the bedrock of their approach.",
          "image_url": ""
        },
        {
          "name": "Tim Sherwood",
          "club": "Blackburn Rovers",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 4,
          "age": 27,
          "fun_fact": "Captained Blackburn from the centre of midfield, his leadership and competitive edge earning him wider England recognition.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Sherwood_1_%28cropped%29.jpg/330px-Sherwood_1_%28cropped%29.jpg"
        },
        {
          "name": "Gareth Southgate",
          "club": "Aston Villa",
          "nationality": "English",
          "position": "DEF",
          "shirt_number": 6,
          "age": 27,
          "fun_fact": "Produced an excellent season at the heart of Aston Villa's defence, his composure and reading of the game making him the model of the modern centre-back.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Southgate_2023.jpg/330px-Southgate_2023.jpg"
        }
      ]
    },
    {
      "season": "1998-99",
      "players": [
        {
          "name": "Dwight Yorke",
          "club": "Manchester United",
          "nationality": "Trinidadian",
          "position": "FWD",
          "shirt_number": 19,
          "age": 26,
          "fun_fact": "Arrived from Aston Villa and formed a lethal partnership with Cole, scoring 18 league goals as United claimed the historic Treble.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Dwight_Yorke_in_Chennai.jpg/330px-Dwight_Yorke_in_Chennai.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Nicolas Anelka",
          "club": "Arsenal",
          "nationality": "French",
          "position": "FWD",
          "shirt_number": 9,
          "age": 19,
          "fun_fact": "Scored 17 goals and won the PFA Young Player of the Year before controversially engineering a move to Real Madrid.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/3/36/Nicolas_Anelka_4720.jpg"
        },
        {
          "name": "Freddie Ljungberg",
          "club": "Arsenal",
          "nationality": "Swedish",
          "position": "MID",
          "shirt_number": 8,
          "age": 21,
          "fun_fact": "The flame-haired Swedish midfielder burst onto the Premier League scene at Arsenal, providing creativity and energy in his debut season at Highbury.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Football_against_poverty_2014_-_Fredrik_Ljungberg.jpg/330px-Football_against_poverty_2014_-_Fredrik_Ljungberg.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Jaap Stam",
          "club": "Manchester United",
          "nationality": "Dutch",
          "position": "DEF",
          "shirt_number": 6,
          "age": 26,
          "fun_fact": "A domineering presence at the heart of United's Treble-winning defence, his pace and power making him arguably the best centre-back in the world.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Jaap_Stam_-_1.jpg/330px-Jaap_Stam_-_1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Paul Scholes",
          "club": "Manchester United",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 18,
          "age": 24,
          "fun_fact": "Scored nine league goals from midfield and was an integral part of United's historic Treble, combining tireless running with pinpoint passing.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/P_Scholes.jpg/330px-P_Scholes.jpg"
        },
        {
          "name": "Nicky Butt",
          "club": "Manchester United",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 8,
          "age": 24,
          "fun_fact": "An unsung hero of United's Treble season, his combative midfield displays providing the platform for the more creative players to shine.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Cropped_Butt_by_nyaa_birdies_perch.jpg/330px-Cropped_Butt_by_nyaa_birdies_perch.jpg"
        },
        {
          "name": "Robbie Keane",
          "club": "Coventry City",
          "nationality": "Irish",
          "position": "FWD",
          "shirt_number": 7,
          "age": 18,
          "fun_fact": "Burst onto the scene as a teenager at Coventry, his energy and eye for goal catching the attention of Europe's biggest clubs.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/2013_Robbie_Keane_%28cropped%29.jpg/330px-2013_Robbie_Keane_%28cropped%29.jpg"
        },
        {
          "name": "Sami Hyypia",
          "club": "Liverpool",
          "nationality": "Finnish",
          "position": "DEF",
          "shirt_number": 4,
          "age": 24,
          "fun_fact": "Arrived from Willem II and immediately became a commanding presence at the heart of Liverpool's defence — a bargain at £2.6m.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/2/21/Sami_Hyypia_2012_%28cropped%29.jpg"
        },
        {
          "name": "Richard Wright",
          "club": "Ipswich Town",
          "nationality": "English",
          "position": "GK",
          "shirt_number": 1,
          "age": 21,
          "fun_fact": "The young Ipswich goalkeeper kept clean sheets regularly as Town punched above their weight, earning England Under-21 recognition with his composed displays at Portman Road.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Richard_Wright_%28Ipswich_goalkeeper%29.jpg/330px-Richard_Wright_%28Ipswich_goalkeeper%29.jpg"
        },
        {
          "name": "Ugo Ehiogu",
          "club": "Aston Villa",
          "nationality": "English",
          "position": "DEF",
          "shirt_number": 6,
          "age": 25,
          "fun_fact": "The commanding Villa centre-back was ever-present in 1998-99, his aerial ability and reading of the game making him one of the top English defenders of the era and an England international.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ugo_Ehiogu.jpg/330px-Ugo_Ehiogu.jpg"
        }
      ]
    },
    {
      "season": "1999-00",
      "players": [
        {
          "name": "Kevin Phillips",
          "club": "Sunderland",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 10,
          "age": 26,
          "fun_fact": "Won the European Golden Shoe with 30 league goals in Sunderland's first top-flight season in years — a remarkable feat for an unfancied club.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Kevin_Phillips_2014.jpg/330px-Kevin_Phillips_2014.jpg"
        },
        {
          "name": "Thierry Henry",
          "club": "Arsenal",
          "nationality": "French",
          "position": "FWD",
          "shirt_number": 14,
          "age": 22,
          "fun_fact": "Arrived from Juventus and was reinvented as a striker by Wenger, scoring 17 league goals in a stunning debut Premier League season.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Thierry_Henry_%2851649035951%29_%28cropped%29.jpg/330px-Thierry_Henry_%2851649035951%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Harry Kewell",
          "club": "Leeds United",
          "nationality": "Australian",
          "position": "MID",
          "shirt_number": 10,
          "age": 21,
          "fun_fact": "Led Leeds to a surprise third-place finish with his creative brilliance, emerging as one of the most gifted left-sided players in Europe.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/HarryKewell.jpg/330px-HarryKewell.jpg"
        },
        {
          "name": "Stefan Schwarz",
          "club": "Sunderland",
          "nationality": "Swedish",
          "position": "MID",
          "shirt_number": 6,
          "age": 31,
          "fun_fact": "The experienced Swedish international was the midfield anchor behind Kevin Phillips, bringing European class to the Stadium of Light.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/1_Stefan_Schwarz_2017_%28cropped%29_%28cropped%29.jpg/330px-1_Stefan_Schwarz_2017_%28cropped%29_%28cropped%29.jpg"
        },
        {
          "name": "Gary Speed",
          "club": "Newcastle United",
          "nationality": "Welsh",
          "position": "MID",
          "shirt_number": 11,
          "age": 30,
          "fun_fact": "One of the most consistent midfielders in the division, his box-to-box energy and leadership a constant Premier League presence.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gary_Speed_2011.jpg/330px-Gary_Speed_2011.jpg"
        },
        {
          "name": "Paulo Wanchope",
          "club": "West Ham United",
          "nationality": "Costa Rican",
          "position": "FWD",
          "shirt_number": 9,
          "age": 23,
          "fun_fact": "The eccentric Costa Rican scored 12 league goals with his unorthodox style that completely baffled defenders throughout the season.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Paulo_Wanchope_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
        },
        {
          "name": "Denis Irwin",
          "club": "Manchester United",
          "nationality": "Irish",
          "position": "DEF",
          "shirt_number": 3,
          "age": 34,
          "fun_fact": "The quietly brilliant full back was still delivering top-level performances for United as they retained the title, his consistency unmatched at his age.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Denis_Irwin_%282017-07-29_img06%29_%28cropped%29.jpg/330px-Denis_Irwin_%282017-07-29_img06%29_%28cropped%29.jpg"
        },
        {
          "name": "Alan Smith",
          "club": "Leeds United",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 8,
          "age": 18,
          "fun_fact": "Burst onto the scene as a teenager for Leeds, his bravery and desire to score from every angle making him one of the most popular young players in England.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Alan_Smith_MK_Dons_%28cropped%29.jpg/330px-Alan_Smith_MK_Dons_%28cropped%29.jpg"
        },
        {
          "name": "Muzzy Izzet",
          "club": "Leicester City",
          "nationality": "Turkish",
          "position": "MID",
          "shirt_number": 8,
          "age": 24,
          "fun_fact": "Was a creative and energetic force in Leicester's midfield as they competed in Europe, his quality making him a cult figure at Filbert Street.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Izzet%2C_Muzzy.jpg"
        },
        {
          "name": "David James",
          "club": "Aston Villa",
          "nationality": "English",
          "position": "GK",
          "shirt_number": 1,
          "age": 29,
          "fun_fact": "Produced a string of excellent performances for Aston Villa after moving from Liverpool, his imposing presence and athleticism making him a top-flight mainstay.",
          "image_url": ""
        }
      ]
    },
    {
      "season": "2000-01",
      "players": [
        {
          "name": "Teddy Sheringham",
          "club": "Manchester United",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 10,
          "age": 34,
          "fun_fact": "Won both PFA and FWA Player of the Year at age 34, scoring 15 goals to disprove all his critics after a difficult first season at Old Trafford.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Teddy_Sheringham_-_53492983124_%28original%29.jpg/330px-Teddy_Sheringham_-_53492983124_%28original%29.jpg"
        },
        {
          "name": "Steven Gerrard",
          "club": "Liverpool",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 17,
          "age": 20,
          "fun_fact": "Emerged as Liverpool's driving force as they won the cup Treble, his thunderous shooting and infectious energy marking him as England's next great midfielder.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Steven_Gerrard_2018.jpg/330px-Steven_Gerrard_2018.jpg"
        },
        {
          "name": "Marcus Stewart",
          "club": "Ipswich Town",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 10,
          "age": 27,
          "fun_fact": "Scored 19 league goals as newly-promoted Ipswich finished fifth — one of the great overachievement stories in Premier League history.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Marcus_Stewart_30-04-2016_1.jpg/330px-Marcus_Stewart_30-04-2016_1.jpg"
        },
        {
          "name": "Matt Holland",
          "club": "Ipswich Town",
          "nationality": "Irish",
          "position": "MID",
          "shirt_number": 8,
          "age": 26,
          "fun_fact": "The engine of Ipswich's remarkable fifth-place finish, his tireless box-to-box play the foundation of George Burley's surprise package.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/MattHolland.jpg/330px-MattHolland.jpg"
        },
        {
          "name": "Steed Malbranque",
          "club": "Fulham",
          "nationality": "French",
          "position": "MID",
          "shirt_number": 10,
          "age": 21,
          "fun_fact": "Shone for Fulham as they won the First Division title under Jean Tigana, his technical quality a standout as they prepared for Premier League football.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/SM_Caen_vs_UNFP%2C_July_30th_2016_-_Steed_Malbranque_1.jpg/330px-SM_Caen_vs_UNFP%2C_July_30th_2016_-_Steed_Malbranque_1.jpg"
        },
        {
          "name": "Jermain Defoe",
          "club": "West Ham United",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 28,
          "age": 18,
          "fun_fact": "Made a stunning impact as a teenager for West Ham, his predatory instincts marking him as one of England's most exciting young strikers.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Jermain-Defoe_%28cropped%29.jpg/330px-Jermain-Defoe_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Darius Vassell",
          "club": "Aston Villa",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 11,
          "age": 20,
          "fun_fact": "Burst onto the scene at Aston Villa with powerful performances, his pace and directness earning him an England call-up and widespread recognition.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Darius_Vassell_2011_%28cropped%29.jpg/330px-Darius_Vassell_2011_%28cropped%29.jpg"
        },
        {
          "name": "Sylvain Wiltord",
          "club": "Arsenal",
          "nationality": "French",
          "position": "FWD",
          "shirt_number": 12,
          "age": 26,
          "fun_fact": "Scored the title-clinching goal at Old Trafford the following season — his energy and directness were key parts of Arsenal's evolving attack.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Sylvain_Wiltord_Rennes_081229.jpg"
        },
        {
          "name": "Niall Quinn",
          "club": "Sunderland",
          "nationality": "Irish",
          "position": "FWD",
          "shirt_number": 10,
          "age": 34,
          "fun_fact": "The towering Republic of Ireland striker formed a deadly partnership with Kevin Phillips at Sunderland, his intelligent hold-up play helping Town challenge for a top-seven finish.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Niall_Quinn_2011_%28cropped%29.jpg/330px-Niall_Quinn_2011_%28cropped%29.jpg"
        },
        {
          "name": "George Boateng",
          "club": "Aston Villa",
          "nationality": "Dutch",
          "position": "MID",
          "shirt_number": 8,
          "age": 24,
          "fun_fact": "The combative Dutch midfielder was Villa's engine in 2000-01, winning tackles and breaking up play to allow the more creative players around him to flourish.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/George_Boateng_2008.jpg/330px-George_Boateng_2008.jpg"
        }
      ]
    },
    {
      "season": "2001-02",
      "players": [
        {
          "name": "Emile Heskey",
          "club": "Liverpool",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 8,
          "age": 23,
          "fun_fact": "The powerful Liverpool striker formed a lethal partnership with Michael Owen, his physical presence and pace causing havoc for Premier League defences throughout the 2001-02 campaign.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Emile_Heskey_as_a_player_of_England_national_football_team.jpg/330px-Emile_Heskey_as_a_player_of_England_national_football_team.jpg"
        },
        {
          "name": "Ruud van Nistelrooy",
          "club": "Manchester United",
          "nationality": "Dutch",
          "position": "FWD",
          "shirt_number": 10,
          "age": 25,
          "fun_fact": "Debuted in the Premier League and scored 23 league goals in his first season, his movement and finishing immediately ranking him among Europe's elite.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Ruud_van_Nistelrooy_2017.jpg/330px-Ruud_van_Nistelrooy_2017.jpg"
        },
        {
          "name": "Robert Pires",
          "club": "Arsenal",
          "nationality": "French",
          "position": "MID",
          "shirt_number": 7,
          "age": 27,
          "fun_fact": "Won the FWA Footballer of the Year before his season was cut short by a knee injury, his elegant left-footed play the creative catalyst of the Double.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Robert_Pires_2011.jpg/330px-Robert_Pires_2011.jpg"
        },
        {
          "name": "Sol Campbell",
          "club": "Arsenal",
          "nationality": "English",
          "position": "DEF",
          "shirt_number": 23,
          "age": 26,
          "fun_fact": "Joined Arsenal on a free from Spurs in the most controversial move in north London history and was magnificent as they won the Double.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Sol_Campbell_%2854921202604%29_%28cropped%29.jpg/330px-Sol_Campbell_%2854921202604%29_%28cropped%29.jpg"
        },
        {
          "name": "Ashley Cole",
          "club": "Arsenal",
          "nationality": "English",
          "position": "DEF",
          "shirt_number": 3,
          "age": 20,
          "fun_fact": "Established himself as England's first-choice left back at just 20, his athleticism and overlapping runs making him one of the world's best in his position.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/d/d5/ACole.JPG"
        },
        {
          "name": "Craig Bellamy",
          "club": "Newcastle United",
          "nationality": "Welsh",
          "position": "FWD",
          "shirt_number": 9,
          "age": 22,
          "fun_fact": "Terrorised Premier League defences with his electrifying pace, helping Newcastle qualify for the Champions League under Bobby Robson.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Craig_Bellamy_2014.jpg/330px-Craig_Bellamy_2014.jpg"
        },
        {
          "name": "Nolberto Solano",
          "club": "Newcastle United",
          "nationality": "Peruvian",
          "position": "MID",
          "shirt_number": 4,
          "age": 27,
          "fun_fact": "The Peruvian's precise crossing and creative play were vital in Newcastle's push to the Champions League places under Bobby Robson.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/6/67/Solano.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
        },
        {
          "name": "Ledley King",
          "club": "Tottenham Hotspur",
          "nationality": "English",
          "position": "DEF",
          "shirt_number": 26,
          "age": 21,
          "fun_fact": "Emerged as one of the finest young centre-backs in the division, his reading of the game and composure on the ball belying his young age.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Ledley_King.jpg"
        },
        {
          "name": "Steve McManaman",
          "club": "Real Madrid",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 16,
          "age": 29,
          "fun_fact": "Returned to Premier League consciousness with a La Liga winner's medal — his Champions League exploits made him England's most celebrated export.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/1_steve_mcmanaman_2017_%28cropped%29.jpg/330px-1_steve_mcmanaman_2017_%28cropped%29.jpg"
        },
        {
          "name": "David Beckham",
          "club": "Manchester United",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 7,
          "age": 26,
          "fun_fact": "Beckham's precise crossing and dead-ball delivery were central to United's title challenge, his right foot creating numerous goals as he cemented his status as England's key playmaker.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/David_Beckham_UNICEF_%28cropped2%29.jpg/330px-David_Beckham_UNICEF_%28cropped2%29.jpg"
        }
      ]
    },
    {
      "season": "2002-03",
      "players": [
        {
          "name": "Ole Gunnar Solskjaer",
          "club": "Manchester United",
          "nationality": "Norwegian",
          "position": "FWD",
          "shirt_number": 20,
          "age": 29,
          "fun_fact": "The 'Baby-faced Assassin' came off the bench to devastating effect throughout 2002-03, netting crucial goals as United reclaimed the Premier League title from Arsenal.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Ole_Gunnar_Solskjaer_Trondheim2011-1_crop.jpg/330px-Ole_Gunnar_Solskjaer_Trondheim2011-1_crop.jpg"
        },
        {
          "name": "Rio Ferdinand",
          "club": "Manchester United",
          "nationality": "English",
          "position": "DEF",
          "shirt_number": 5,
          "age": 23,
          "fun_fact": "Joined for a then-British record £29.1m and was imperious in United's title triumph before a missing drugs test led to an eight-month ban.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Web_Summit_2015_-_Dublin%2C_Ireland_-_22183056474_%28cropped%29.jpg/330px-Web_Summit_2015_-_Dublin%2C_Ireland_-_22183056474_%28cropped%29.jpg"
        },
        {
          "name": "James Milner",
          "club": "Leeds United",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 22,
          "age": 16,
          "fun_fact": "Became the second youngest scorer in Premier League history at 16 years and 356 days, announcing a remarkable talent that would last two decades.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/James_Milner_2022-07-21_Fu%C3%9Fball%2C_M%C3%A4nner%2CFreundschaftsspiel%2C_RB_Leipzig_-_FC_Liverpool_1DX_2223_by_Stepro_%28cropped%29.jpg/330px-James_Milner_2022-07-21_Fu%C3%9Fball%2C_M%C3%A4nner%2CFreundschaftsspiel%2C_RB_Leipzig_-_FC_Liverpool_1DX_2223_by_Stepro_%28cropped%29.jpg"
        },
        {
          "name": "Alan Shearer",
          "club": "Newcastle United",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 9,
          "age": 32,
          "fun_fact": "Led Newcastle to their best modern league finish with 17 goals as Bobby Robson's side finished third and qualified for the Champions League.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Alan_Shearer_2008.jpg"
        },
        {
          "name": "Lauren",
          "club": "Arsenal",
          "nationality": "Cameroonian",
          "position": "DEF",
          "shirt_number": 12,
          "age": 25,
          "fun_fact": "The right back was a key part of the Invincibles' foundations being laid, his tenacity and ability on the ball vital to Arsenal's style.",
          "image_url": ""
        },
        {
          "name": "Gianfranco Zola",
          "club": "Chelsea",
          "nationality": "Italian",
          "position": "MID",
          "shirt_number": 25,
          "age": 36,
          "fun_fact": "Produced one of the great individual Premier League seasons at 36, his artistry and creativity as sharp as ever in what proved to be his final Chelsea campaign.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Zola_2018_%28cropped%29.jpg/330px-Zola_2018_%28cropped%29.jpg"
        },
        {
          "name": "Dion Dublin",
          "club": "Aston Villa",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 9,
          "age": 33,
          "fun_fact": "A reliable presence and leader for Aston Villa, using his physical presence and experience to help the club to a solid mid-table finish.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Dion_hillsborough_2008_05_04_%28cropped%29.jpg/330px-Dion_hillsborough_2008_05_04_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Michael Carrick",
          "club": "West Ham United",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 16,
          "age": 21,
          "fun_fact": "Caught the eye with composed and intelligent midfield displays for West Ham, his reading of the game already beyond his years.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Michael_Carrick_12042025_%285%29_%28cropped%29.jpg/330px-Michael_Carrick_12042025_%285%29_%28cropped%29.jpg"
        },
        {
          "name": "Mark Viduka",
          "club": "Leeds United",
          "nationality": "Australian",
          "position": "FWD",
          "shirt_number": 9,
          "age": 27,
          "fun_fact": "Scored 20 Premier League goals for Leeds in a season when the club were in financial meltdown, his individual quality shining through the chaos.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Mark_Viduka_2005_WCQ.jpg"
        },
        {
          "name": "Patrick Vieira",
          "club": "Arsenal",
          "nationality": "French",
          "position": "MID",
          "shirt_number": 4,
          "age": 26,
          "fun_fact": "Led Arsenal's midfield with power and vision as Wenger's team continued laying the foundations for the Invincibles season, dominant in every duel.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Patrick_Vieira_NYCFC_%28cropped%29.JPG/330px-Patrick_Vieira_NYCFC_%28cropped%29.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        }
      ]
    },
    {
      "season": "2003-04",
      "players": [
        {
          "name": "Claude Makelele",
          "club": "Chelsea",
          "nationality": "French",
          "position": "MID",
          "shirt_number": 11,
          "age": 30,
          "fun_fact": "The diminutive French midfielder was the unsung hero of Chelsea's Abramovich era, his tireless defensive work earning widespread acclaim and giving rise to the footballing term 'The Makelele Role'.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Claude_Mak%C3%A9l%C3%A9l%C3%A9_%2853557564951%29_%28cropped%29.jpg/330px-Claude_Mak%C3%A9l%C3%A9l%C3%A9_%2853557564951%29_%28cropped%29.jpg"
        },
        {
          "name": "Wayne Rooney",
          "club": "Everton",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 18,
          "age": 17,
          "fun_fact": "Burst onto the scene as the most exciting teenager in Europe, his stunning goal against Arsenal making him the Premier League's hottest property.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Wayne_Rooney_%2850121495731%29_%28cropped%29.jpg/330px-Wayne_Rooney_%2850121495731%29_%28cropped%29.jpg"
        },
        {
          "name": "Jens Lehmann",
          "club": "Arsenal",
          "nationality": "German",
          "position": "GK",
          "shirt_number": 1,
          "age": 33,
          "fun_fact": "Ever-present as Arsenal went unbeaten, his shot-stopping and commanding presence crucial to the Invincibles' historic season.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Jens_Lehmann_-_2019202184453_2019-07-21_Champions_for_Charity_-_3017_-_B70I3052_%28cropped%29.jpg/330px-Jens_Lehmann_-_2019202184453_2019-07-21_Champions_for_Charity_-_3017_-_B70I3052_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Kolo Toure",
          "club": "Arsenal",
          "nationality": "Ivorian",
          "position": "DEF",
          "shirt_number": 28,
          "age": 22,
          "fun_fact": "The young Ivorian centre-back was a revelation in Arsenal's Invincibles season, partnering Sol Campbell to form one of the tightest central defensive pairings in Premier League history.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Kolo_Toure_8932.JPG/330px-Kolo_Toure_8932.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Jose Antonio Reyes",
          "club": "Arsenal",
          "nationality": "Spanish",
          "position": "MID",
          "shirt_number": 9,
          "age": 20,
          "fun_fact": "The Spanish winger brought flair and directness to Arsenal's Invincibles, contributing goals from the left flank as Wenger's side went the entire league season unbeaten.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Sevillia-Zenit_%282%29.jpg/330px-Sevillia-Zenit_%282%29.jpg"
        },
        {
          "name": "William Gallas",
          "club": "Chelsea",
          "nationality": "French",
          "position": "DEF",
          "shirt_number": 17,
          "age": 26,
          "fun_fact": "The versatile French defender was part of Chelsea's meanest defence that season, his pace and composure across the backline making him one of the best in his position.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/William_Gallas_2018_%282%29.jpg/330px-William_Gallas_2018_%282%29.jpg"
        },
        {
          "name": "Freddie Ljungberg",
          "club": "Arsenal",
          "nationality": "Swedish",
          "position": "MID",
          "shirt_number": 8,
          "age": 26,
          "fun_fact": "An integral part of the Invincibles midfield, his pressing and ability to arrive late into the box contributing crucially to the unbeaten season.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Football_against_poverty_2014_-_Fredrik_Ljungberg.jpg/330px-Football_against_poverty_2014_-_Fredrik_Ljungberg.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Frank Lampard",
          "club": "Chelsea",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 8,
          "age": 25,
          "fun_fact": "Scored 10 league goals from midfield as Chelsea reached the Champions League semi-finals under Ranieri, hinting at the dominance to follow under Mourinho.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Frank_Lampard_2019.jpg/330px-Frank_Lampard_2019.jpg"
        },
        {
          "name": "John Terry",
          "club": "Chelsea",
          "nationality": "English",
          "position": "DEF",
          "shirt_number": 26,
          "age": 22,
          "fun_fact": "Established himself as England's premier centre-back, his commanding leadership and aerial dominance making Chelsea's defence one of the best in England.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/John_Terry_at_pro-am_Wentworth_golf_course_September_2023_%28cropped%29.jpg/330px-John_Terry_at_pro-am_Wentworth_golf_course_September_2023_%28cropped%29.jpg"
        },
        {
          "name": "Tim Cahill",
          "club": "Millwall",
          "nationality": "Australian",
          "position": "MID",
          "shirt_number": 16,
          "age": 23,
          "fun_fact": "Starred for Millwall as they reached the FA Cup final, his box-to-box energy and knack for scoring prompting Everton to snap him up that summer.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Tim_Cahill_%2853557484101%29.jpg/330px-Tim_Cahill_%2853557484101%29.jpg"
        }
      ]
    },
    {
      "season": "2004-05",
      "players": [
        {
          "name": "Petr Cech",
          "club": "Chelsea",
          "nationality": "Czech",
          "position": "GK",
          "shirt_number": 1,
          "age": 22,
          "fun_fact": "Set a then-Premier League record of 24 clean sheets in a debut season of extraordinary quality — the best goalkeeper in England from day one.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/7/75/Arsenal_players_training_before_2019_UEFA_Europa_League_final_07_%28cropped%29.jpg"
        },
        {
          "name": "Arjen Robben",
          "club": "Chelsea",
          "nationality": "Dutch",
          "position": "MID",
          "shirt_number": 18,
          "age": 20,
          "fun_fact": "Dazzled in his debut Premier League season, cutting inside from the right with his trademark move to score stunning goals for the champions.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Arjen_Robben_v_Shakhtar_2015_%28cropped%29.jpg/330px-Arjen_Robben_v_Shakhtar_2015_%28cropped%29.jpg"
        },
        {
          "name": "Andrew Johnson",
          "club": "Crystal Palace",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 9,
          "age": 23,
          "fun_fact": "Scored 21 Premier League goals for relegated Crystal Palace — a stunning individual achievement that made him one of the season's standout performers.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Andrew_Johnson_photo_portrait_head_and_shoulders%2C_c1870-1880-Edit1.jpg/330px-Andrew_Johnson_photo_portrait_head_and_shoulders%2C_c1870-1880-Edit1.jpg"
        },
        {
          "name": "Shaun Wright-Phillips",
          "club": "Manchester City",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 29,
          "age": 23,
          "fun_fact": "Produced a sensational season for City before his move to Chelsea, his pace and trickery on the right wing making him England's most exciting winger.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Shaun_Wright-Phillips_warming_up.jpg/330px-Shaun_Wright-Phillips_warming_up.jpg"
        },
        {
          "name": "John Arne Riise",
          "club": "Liverpool",
          "nationality": "Norwegian",
          "position": "DEF",
          "shirt_number": 6,
          "age": 24,
          "fun_fact": "The Norwegian left-back was a powerhouse for Liverpool in 2004-05, his thunderous shooting and marauding runs complementing the Reds' Champions League winning campaign that season.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/John_Arne_Riise_-_53492829703.jpg/330px-John_Arne_Riise_-_53492829703.jpg"
        },
        {
          "name": "Damien Duff",
          "club": "Chelsea",
          "nationality": "Irish",
          "position": "MID",
          "shirt_number": 15,
          "age": 25,
          "fun_fact": "A lightning-quick winger whose trickery and delivery from the left were key weapons in Chelsea's record-breaking title-winning armoury.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Damien_Duff_2025.png/330px-Damien_Duff_2025.png"
        },
        {
          "name": "Robbie Savage",
          "club": "Blackburn Rovers",
          "nationality": "Welsh",
          "position": "MID",
          "shirt_number": 8,
          "age": 30,
          "fun_fact": "The combative Welsh midfielder was Blackburn's driving force in midfield, his tenacious pressing and reading of the game helping Rovers achieve a competitive mid-table finish.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Savage%2C_Robbie.jpg/330px-Savage%2C_Robbie.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Kevin Campbell",
          "club": "West Bromwich Albion",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 10,
          "age": 35,
          "fun_fact": "The experienced striker brought vital Premier League know-how to West Brom, his goals and leadership helping the Baggies survive in the top flight against the odds.",
          "image_url": "https://upload.wikimedia.org/wikipedia/en/5/50/Kevin_Campbell.jpeg"
        },
        {
          "name": "Lee Carsley",
          "club": "Everton",
          "nationality": "Irish",
          "position": "MID",
          "shirt_number": 16,
          "age": 30,
          "fun_fact": "The Republic of Ireland midfielder was the engine of Everton's impressive fourth-place finish, his tireless running and composed distribution earning him widespread praise from Toffees fans.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/6/64/Lee_Carsley.png"
        },
        {
          "name": "Nigel Reo-Coker",
          "club": "West Ham United",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 8,
          "age": 20,
          "fun_fact": "The young West Ham captain was one of the most promising midfielders in the division, his leadership and energy helping the Hammers consolidate their Premier League status.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Nigel_Reo-Coker%2C_Aston_Villa.jpg/330px-Nigel_Reo-Coker%2C_Aston_Villa.jpg"
        }
      ]
    },
    {
      "season": "2005-06",
      "players": [
        {
          "name": "Thierry Henry",
          "club": "Arsenal",
          "nationality": "French",
          "position": "FWD",
          "shirt_number": 14,
          "age": 28,
          "fun_fact": "Won his fourth and final Golden Boot with 27 goals as Arsenal reached the Champions League final, matching Ian Wright's all-time club scoring record.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Thierry_Henry_%2851649035951%29_%28cropped%29.jpg/330px-Thierry_Henry_%2851649035951%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Shay Given",
          "club": "Newcastle United",
          "nationality": "Irish",
          "position": "GK",
          "shirt_number": 1,
          "age": 29,
          "fun_fact": "Consistently one of the Premier League's finest goalkeepers, his heroics kept Newcastle competitive despite ongoing managerial upheaval.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Shay_Given.jpg/330px-Shay_Given.jpg"
        },
        {
          "name": "Cesc Fabregas",
          "club": "Arsenal",
          "nationality": "Spanish",
          "position": "MID",
          "shirt_number": 4,
          "age": 18,
          "fun_fact": "Became Arsenal's creative heartbeat at just 18, running the midfield with maturity beyond his years as Henry's main support act.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/2023_-_Cesc_Fabregas_%28cropped%29.jpg/330px-2023_-_Cesc_Fabregas_%28cropped%29.jpg"
        },
        {
          "name": "Dean Ashton",
          "club": "West Ham United",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 9,
          "age": 22,
          "fun_fact": "The powerful young striker was one of the most exciting forwards in the league, his strength, technique and eye for goal making him one of West Ham's most exciting signings of the era.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Dean_ashton_%28cropped%29.jpg/330px-Dean_ashton_%28cropped%29.jpg"
        },
        {
          "name": "Leighton Baines",
          "club": "Wigan Athletic",
          "nationality": "English",
          "position": "DEF",
          "shirt_number": 3,
          "age": 20,
          "fun_fact": "Emerged as an outstanding young left back at Wigan as they established themselves in the Premier League, his attacking ability catching the eye of bigger clubs.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Baines_Leighton_126176_%28cropped%29.jpg/330px-Baines_Leighton_126176_%28cropped%29.jpg"
        },
        {
          "name": "Darren Fletcher",
          "club": "Manchester United",
          "nationality": "Scottish",
          "position": "MID",
          "shirt_number": 24,
          "age": 21,
          "fun_fact": "Established himself as a key cog in United's midfield, his energy and work rate allowing the more creative players to express themselves.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Darren_Fletcher_2017_%28cropped%29.jpg/330px-Darren_Fletcher_2017_%28cropped%29.jpg"
        },
        {
          "name": "Robbie Keane",
          "club": "Tottenham Hotspur",
          "nationality": "Irish",
          "position": "FWD",
          "shirt_number": 10,
          "age": 25,
          "fun_fact": "Scored 16 goals forming a devastating partnership with Defoe as Spurs pushed for the top four, a constant threat to opposition defences.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/2013_Robbie_Keane_%28cropped%29.jpg/330px-2013_Robbie_Keane_%28cropped%29.jpg"
        },
        {
          "name": "Gabriel Agbonlahor",
          "club": "Aston Villa",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 11,
          "age": 19,
          "fun_fact": "Made his senior debut and scored his first Premier League goals, the fleet-footed Brummie announcing himself as a real talent.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Gabriel_Agbonlahor_Aston_Villa-FH_318.jpg/330px-Gabriel_Agbonlahor_Aston_Villa-FH_318.jpg"
        },
        {
          "name": "Mido",
          "club": "Tottenham Hotspur",
          "nationality": "Egyptian",
          "position": "FWD",
          "shirt_number": 9,
          "age": 23,
          "fun_fact": "The powerful Egyptian striker was a fan favourite at Spurs, his strength and finishing ability contributing important goals as Tottenham pushed for European qualification in 2005-06.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Mido_%28Egyptian_Footballer%29.png/330px-Mido_%28Egyptian_Footballer%29.png"
        },
        {
          "name": "Boaz Myhill",
          "club": "Watford",
          "nationality": "Welsh",
          "position": "GK",
          "shirt_number": 1,
          "age": 24,
          "fun_fact": "The Welsh goalkeeper was a key part of Watford's surprise promotion campaign, his consistent performances helping the Hornets win the Championship and earn Premier League football.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Boazmyhillforwiki.png/330px-Boazmyhillforwiki.png"
        }
      ]
    },
    {
      "season": "2006-07",
      "players": [
        {
          "name": "Cristiano Ronaldo",
          "club": "Manchester United",
          "nationality": "Portuguese",
          "position": "MID",
          "shirt_number": 7,
          "age": 21,
          "fun_fact": "Won the PFA Young Player of the Year as his emergence into world-class status began, scoring 17 league goals as United won the title.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/President_Donald_Trump_meets_with_Cristiano_Ronaldo_in_the_Oval_Office_%2854933344262%29_%28cropped_and_rotated%29.jpg/330px-President_Donald_Trump_meets_with_Cristiano_Ronaldo_in_the_Oval_Office_%2854933344262%29_%28cropped_and_rotated%29.jpg"
        },
        {
          "name": "Didier Drogba",
          "club": "Chelsea",
          "nationality": "Ivorian",
          "position": "FWD",
          "shirt_number": 11,
          "age": 28,
          "fun_fact": "Won the Golden Boot with 20 goals in an imposing season, his physicality and skill making him the most feared striker in the Premier League.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Didier_Drogba_%282019%29_%28cropped2%29.jpg/330px-Didier_Drogba_%282019%29_%28cropped2%29.jpg"
        },
        {
          "name": "Ryan Giggs",
          "club": "Manchester United",
          "nationality": "Welsh",
          "position": "MID",
          "shirt_number": 11,
          "age": 33,
          "fun_fact": "Produced another brilliant season for United, his experience and creativity invaluable as they won the league in a vintage Ferguson campaign.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/1/13/Ryan_Giggs_2015_%28cropped%29.jpg"
        },
        {
          "name": "Michael Essien",
          "club": "Chelsea",
          "nationality": "Ghanaian",
          "position": "MID",
          "shirt_number": 5,
          "age": 23,
          "fun_fact": "The 'Bison' was a powerhouse in Chelsea's midfield, his strength, stamina and technical ability making him one of the most complete midfielders in Europe.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Chelsea_Legends_1_Inter_Forever_4_%2828453496098%29_%28cropped%29.jpg/330px-Chelsea_Legends_1_Inter_Forever_4_%2828453496098%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Carlos Tevez",
          "club": "West Ham United",
          "nationality": "Argentine",
          "position": "FWD",
          "shirt_number": 32,
          "age": 22,
          "fun_fact": "Almost single-handedly kept West Ham in the division with crucial late-season goals despite the controversy over his registration status.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Carlos_Tevez_with_Argentina_November_2014_%28cropped%29.jpg/330px-Carlos_Tevez_with_Argentina_November_2014_%28cropped%29.jpg"
        },
        {
          "name": "Emmanuel Adebayor",
          "club": "Arsenal",
          "nationality": "Togolese",
          "position": "FWD",
          "shirt_number": 25,
          "age": 22,
          "fun_fact": "Scored 8 league goals in his breakthrough season at Arsenal, his imposing presence and technique hinting at the prolific returns to follow.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Emmanuel_Adebayor_-_Lech_-_Manchester_026.jpg/330px-Emmanuel_Adebayor_-_Lech_-_Manchester_026.jpg"
        },
        {
          "name": "Benni McCarthy",
          "club": "Blackburn Rovers",
          "nationality": "South African",
          "position": "FWD",
          "shirt_number": 9,
          "age": 29,
          "fun_fact": "Scored 18 Premier League goals in an outstanding season for Blackburn — the highest ever by a South African player in the top flight.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/BenniMcCarthy.jpg/330px-BenniMcCarthy.jpg"
        },
        {
          "name": "Joleon Lescott",
          "club": "Everton",
          "nationality": "English",
          "position": "DEF",
          "shirt_number": 6,
          "age": 24,
          "fun_fact": "Emerged as one of the finest young centre-backs in the division, his composure and aerial ability drawing admiring glances from top clubs.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Joleon_Lescott_8696_%2815441498930%29.jpg/330px-Joleon_Lescott_8696_%2815441498930%29.jpg"
        },
        {
          "name": "Phil Neville",
          "club": "Everton",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 18,
          "age": 29,
          "fun_fact": "Thrived as Everton's midfield lynchpin after joining from United, his versatility and professionalism making him a key part of Moyes's solid side.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Phil_Neville_2019.jpg/330px-Phil_Neville_2019.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Nwankwo Kanu",
          "club": "Portsmouth",
          "nationality": "Nigerian",
          "position": "FWD",
          "shirt_number": 25,
          "age": 30,
          "fun_fact": "Produced moments of brilliance for Portsmouth, his touch and vision still exceptional even in the twilight of his extraordinary career.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/1_nwankwo_kanu_2017_%28edited%29.jpg/330px-1_nwankwo_kanu_2017_%28edited%29.jpg"
        }
      ]
    },
    {
      "season": "2007-08",
      "players": [
        {
          "name": "David Bentley",
          "club": "Blackburn Rovers",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 7,
          "age": 22,
          "fun_fact": "The talented Blackburn winger was widely regarded as one of England's brightest prospects in 2007-08, his stunning long-range goal against Arsenal becoming one of the season's most memorable strikes.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/David_Michael_Bentle_16_09_2012_Rostov_on_Don_stadium_Olimp_2.jpg/330px-David_Michael_Bentle_16_09_2012_Rostov_on_Don_stadium_Olimp_2.jpg"
        },
        {
          "name": "Fernando Torres",
          "club": "Liverpool",
          "nationality": "Spanish",
          "position": "FWD",
          "shirt_number": 9,
          "age": 23,
          "fun_fact": "Scored 24 league goals in his debut season after arriving from Atletico Madrid — the fastest Liverpool player to 50 goals and an instant Anfield legend.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/5/57/Fernando_Torres_2017.jpg"
        },
        {
          "name": "Edwin van der Sar",
          "club": "Manchester United",
          "nationality": "Dutch",
          "position": "GK",
          "shirt_number": 1,
          "age": 36,
          "fun_fact": "Was United's hero in the Champions League final shootout, his save from Anelka winning them European glory in Moscow in fitting fashion.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Edwin_van_der_Sar_2015.jpg/330px-Edwin_van_der_Sar_2015.jpg"
        },
        {
          "name": "Rio Ferdinand",
          "club": "Manchester United",
          "nationality": "English",
          "position": "DEF",
          "shirt_number": 5,
          "age": 29,
          "fun_fact": "Produced arguably his best season at United, his composure and ball-playing ability making him the most elegant centre-back in England.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Web_Summit_2015_-_Dublin%2C_Ireland_-_22183056474_%28cropped%29.jpg/330px-Web_Summit_2015_-_Dublin%2C_Ireland_-_22183056474_%28cropped%29.jpg"
        },
        {
          "name": "Gareth Barry",
          "club": "Aston Villa",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 18,
          "age": 26,
          "fun_fact": "Named in the PFA Team of the Year after an excellent season for Villa, his consistency and reading of the game making him a regular England international.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Gareth_Barry_2014_2.jpg/330px-Gareth_Barry_2014_2.jpg"
        },
        {
          "name": "Luka Modric",
          "club": "Tottenham Hotspur",
          "nationality": "Croatian",
          "position": "MID",
          "shirt_number": 14,
          "age": 22,
          "fun_fact": "Arrived from Dinamo Zagreb and immediately showed his class, his technical excellence hinting at the generational talent the world would later recognise.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Ofrenda_de_la_Liga_y_la_Champions-57-L.Mill%C3%A1n_%2852109310843%29_%28Luka_Modri%C4%87%29.jpg/330px-Ofrenda_de_la_Liga_y_la_Champions-57-L.Mill%C3%A1n_%2852109310843%29_%28Luka_Modri%C4%87%29.jpg"
        },
        {
          "name": "Gareth Bale",
          "club": "Tottenham Hotspur",
          "nationality": "Welsh",
          "position": "MID",
          "shirt_number": 3,
          "age": 18,
          "fun_fact": "Made his Premier League debut as a teenager for Spurs, his prodigious talent immediately evident even if the best was still to come.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/2022_FIFA_World_Cup_United_States_1%E2%80%931_Wales_-_%2832%29_%28cropped%29.jpg/330px-2022_FIFA_World_Cup_United_States_1%E2%80%931_Wales_-_%2832%29_%28cropped%29.jpg"
        },
        {
          "name": "Stilian Petrov",
          "club": "Aston Villa",
          "nationality": "Bulgarian",
          "position": "MID",
          "shirt_number": 19,
          "age": 28,
          "fun_fact": "The Bulgarian captain was the heartbeat of Martin O'Neill's Villa side, his energy and leadership making him a beloved figure at Villa Park.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Stiliyan_Petrov_-_2011_%282%29.jpg/330px-Stiliyan_Petrov_-_2011_%282%29.jpg"
        },
        {
          "name": "Niko Kranjcar",
          "club": "Portsmouth",
          "nationality": "Croatian",
          "position": "MID",
          "shirt_number": 10,
          "age": 23,
          "fun_fact": "The silky Croatian midfielder was the creative hub of Portsmouth's midfield, his vision and technique helping Pompey finish eighth and challenge for the FA Cup that season.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Niko_Kranj%C4%8Dar_2012.jpg/330px-Niko_Kranj%C4%8Dar_2012.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Wes Brown",
          "club": "Manchester United",
          "nationality": "English",
          "position": "DEF",
          "shirt_number": 6,
          "age": 28,
          "fun_fact": "Produced a reliable campaign in United's Treble-chasing season, his versatility and reading of the game consistently impressive.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Wes_Brown_-_53689574832.jpg/330px-Wes_Brown_-_53689574832.jpg"
        }
      ]
    },
    {
      "season": "2008-09",
      "players": [
        {
          "name": "Steven Gerrard",
          "club": "Liverpool",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 8,
          "age": 28,
          "fun_fact": "Produced arguably his finest Premier League season, scoring 16 goals as Liverpool pushed United all the way in a classic two-horse title race.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Steven_Gerrard_2018.jpg/330px-Steven_Gerrard_2018.jpg"
        },
        {
          "name": "Nicolas Anelka",
          "club": "Chelsea",
          "nationality": "French",
          "position": "FWD",
          "shirt_number": 39,
          "age": 29,
          "fun_fact": "Won the Golden Boot jointly with 19 goals, producing the best season of his stop-start Premier League career at Stamford Bridge.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/3/36/Nicolas_Anelka_4720.jpg"
        },
        {
          "name": "Nemanja Vidic",
          "club": "Manchester United",
          "nationality": "Serbian",
          "position": "DEF",
          "shirt_number": 15,
          "age": 27,
          "fun_fact": "Won the PFA Players' Player of the Year as United retained the title, his dominant defending and leadership earning him the accolade of best player in England.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Vidi%C4%87_%28cropped%29.jpg/330px-Vidi%C4%87_%28cropped%29.jpg"
        },
        {
          "name": "Darren Bent",
          "club": "Sunderland",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 9,
          "age": 24,
          "fun_fact": "Scored 16 goals after joining Sunderland from Spurs, proving himself one of England's most reliable goalscorers at the highest level.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Darren_Bent_26-04-2008_1.jpg/330px-Darren_Bent_26-04-2008_1.jpg"
        },
        {
          "name": "Glen Johnson",
          "club": "Portsmouth",
          "nationality": "English",
          "position": "DEF",
          "shirt_number": 2,
          "age": 24,
          "fun_fact": "Produced an outstanding season at Portsmouth, his marauding right-back play prompting Liverpool to pay £17m for him in the summer.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Glen_Johnson_20111226_%28cropped%29.jpg/330px-Glen_Johnson_20111226_%28cropped%29.jpg"
        },
        {
          "name": "Scott Parker",
          "club": "West Ham United",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 8,
          "age": 28,
          "fun_fact": "A tireless performer in West Ham's midfield, his energy and competitive instinct made him one of the most effective defensive midfielders outside the top clubs.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Scott_Parker_Bournemouth_%28cropped%29.jpg/330px-Scott_Parker_Bournemouth_%28cropped%29.jpg"
        },
        {
          "name": "James Milner",
          "club": "Aston Villa",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 7,
          "age": 23,
          "fun_fact": "Shone as Villa finished sixth under Martin O'Neill, his tireless running and versatility establishing him as one of the best midfielders outside the top four.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/James_Milner_2022-07-21_Fu%C3%9Fball%2C_M%C3%A4nner%2CFreundschaftsspiel%2C_RB_Leipzig_-_FC_Liverpool_1DX_2223_by_Stepro_%28cropped%29.jpg/330px-James_Milner_2022-07-21_Fu%C3%9Fball%2C_M%C3%A4nner%2CFreundschaftsspiel%2C_RB_Leipzig_-_FC_Liverpool_1DX_2223_by_Stepro_%28cropped%29.jpg"
        },
        {
          "name": "Wayne Bridge",
          "club": "Chelsea",
          "nationality": "English",
          "position": "DEF",
          "shirt_number": 3,
          "age": 27,
          "fun_fact": "Produced a strong campaign at left back for Chelsea under Hiddink, his overlapping runs and defensive solidity contributing to their title challenge.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/WayneBridge.jpg/330px-WayneBridge.jpg"
        },
        {
          "name": "Roque Santa Cruz",
          "club": "Blackburn Rovers",
          "nationality": "Paraguayan",
          "position": "FWD",
          "shirt_number": 9,
          "age": 27,
          "fun_fact": "The Paraguayan striker was in devastating form for Blackburn in 2008-09, his clinical finishing and powerful running making him one of the Premier League's most feared centre-forwards.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/0/04/Roque_Luis_Santa_Cruz.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
        },
        {
          "name": "Emile Heskey",
          "club": "Wigan Athletic",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 9,
          "age": 30,
          "fun_fact": "The powerful Wigan striker used his strength and work-rate to hold up play effectively, his physical presence unsettling Premier League defences throughout the 2008-09 campaign.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Emile_Heskey_as_a_player_of_England_national_football_team.jpg/330px-Emile_Heskey_as_a_player_of_England_national_football_team.jpg"
        }
      ]
    },
    {
      "season": "2009-10",
      "players": [
        {
          "name": "Shaun Wright-Phillips",
          "club": "Manchester City",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 29,
          "age": 28,
          "fun_fact": "The pacy winger was a key player for Manchester City as they began their transformation under Sheikh Mansour's ownership, his directness and crossing creating chances throughout the season.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Shaun_Wright-Phillips_warming_up.jpg/330px-Shaun_Wright-Phillips_warming_up.jpg"
        },
        {
          "name": "Matt Upson",
          "club": "West Ham United",
          "nationality": "English",
          "position": "DEF",
          "shirt_number": 5,
          "age": 31,
          "fun_fact": "The composed West Ham centre-back was one of the most reliable defenders in the league, his reading of the game and aerial ability earning him a regular England squad place.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Matthew-Upson-2009_%28cropped%29.jpg/330px-Matthew-Upson-2009_%28cropped%29.jpg"
        },
        {
          "name": "Wayne Rooney",
          "club": "Manchester United",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 10,
          "age": 24,
          "fun_fact": "Won the PFA Players' Player of the Year with 26 goals in all competitions, his best individual season cementing him as arguably the world's best striker.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Wayne_Rooney_%2850121495731%29_%28cropped%29.jpg/330px-Wayne_Rooney_%2850121495731%29_%28cropped%29.jpg"
        },
        {
          "name": "Frank Lampard",
          "club": "Chelsea",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 8,
          "age": 31,
          "fun_fact": "Scored 22 goals in all competitions as Chelsea won the Double, his consistency from midfield making him one of the world's best goal-scoring midfielders.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Frank_Lampard_2019.jpg/330px-Frank_Lampard_2019.jpg"
        },
        {
          "name": "Joe Hart",
          "club": "Birmingham City",
          "nationality": "English",
          "position": "GK",
          "shirt_number": 25,
          "age": 22,
          "fun_fact": "Went on loan to Birmingham and produced a sensational season, earning the FWA Young Player of the Year and forcing his way into the England squad.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Joe_Hart_69775.jpg/330px-Joe_Hart_69775.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Aaron Lennon",
          "club": "Tottenham Hotspur",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 7,
          "age": 22,
          "fun_fact": "Was one of England's most exciting wingers, his electric pace helping Spurs to their historic Champions League qualification.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Aaron_Lennon_Brighton_v_Spurs_Amex_Opening_30711.jpg/330px-Aaron_Lennon_Brighton_v_Spurs_Amex_Opening_30711.jpg"
        },
        {
          "name": "Michael Dawson",
          "club": "Tottenham Hotspur",
          "nationality": "English",
          "position": "DEF",
          "shirt_number": 5,
          "age": 26,
          "fun_fact": "Was a rock at the heart of Tottenham's defence as they qualified for the Champions League for the first time, impressing with his authority.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Michael_Dawson_2016-05-28_1.jpg/330px-Michael_Dawson_2016-05-28_1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Paul Scholes",
          "club": "Manchester United",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 18,
          "age": 34,
          "fun_fact": "Produced a vintage late-career campaign as United pushed Chelsea all the way, his range of passing and vision still among the best in the Premier League.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/P_Scholes.jpg/330px-P_Scholes.jpg"
        },
        {
          "name": "Ryan Nelsen",
          "club": "Blackburn Rovers",
          "nationality": "New Zealander",
          "position": "DEF",
          "shirt_number": 15,
          "age": 31,
          "fun_fact": "The New Zealand captain was a colossus at the heart of Blackburn's defence, his commitment and leadership helping Rovers achieve a respectable mid-table finish in 2009-10.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Ryan_Nelsen-Toronto_FC_%28Cropped%29.jpg/330px-Ryan_Nelsen-Toronto_FC_%28Cropped%29.jpg"
        },
        {
          "name": "Brad Friedel",
          "club": "Aston Villa",
          "nationality": "American",
          "position": "GK",
          "shirt_number": 1,
          "age": 38,
          "fun_fact": "Extended his own Premier League consecutive appearance record well past 160 games, still performing excellently well into his late thirties.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Brad_Friedel_entrance_Brighton_v_Spurs_Amex_Opening_30711.jpg/330px-Brad_Friedel_entrance_Brighton_v_Spurs_Amex_Opening_30711.jpg"
        }
      ]
    },
    {
      "season": "2010-11",
      "players": [
        {
          "name": "Jack Wilshere",
          "club": "Arsenal",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 19,
          "age": 18,
          "fun_fact": "Emerged as one of the most exciting young midfielders in Europe, his technical quality and composure making him a regular starter for Arsenal at just 18.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Jack_Wilshere_-_Hertha_BSC_vs._West_Ham_United_%2820190731%29.jpg/330px-Jack_Wilshere_-_Hertha_BSC_vs._West_Ham_United_%2820190731%29.jpg"
        },
        {
          "name": "Samir Nasri",
          "club": "Arsenal",
          "nationality": "French",
          "position": "MID",
          "shirt_number": 8,
          "age": 23,
          "fun_fact": "Produced a brilliant season of creative midfield play for Arsenal, his technique and vision making him one of the most sought-after players in Europe.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Samir_Nasri_Euro_2012.jpg/330px-Samir_Nasri_Euro_2012.jpg"
        },
        {
          "name": "Dimitar Berbatov",
          "club": "Manchester United",
          "nationality": "Bulgarian",
          "position": "FWD",
          "shirt_number": 9,
          "age": 29,
          "fun_fact": "Won the Golden Boot with 20 goals including five in a single game against Blackburn, his languid elegance disguising clinical finishing of the highest order.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Dimitar_Berbatov_-_53689576017.jpg/330px-Dimitar_Berbatov_-_53689576017.jpg"
        },
        {
          "name": "Robbie Keane",
          "club": "Tottenham Hotspur",
          "nationality": "Irish",
          "position": "FWD",
          "shirt_number": 10,
          "age": 30,
          "fun_fact": "The experienced Republic of Ireland captain was a reliable goal threat for Spurs, his intelligent movement and finishing contributing important goals as Tottenham chased a top-four finish.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/2013_Robbie_Keane_%28cropped%29.jpg/330px-2013_Robbie_Keane_%28cropped%29.jpg"
        },
        {
          "name": "David Silva",
          "club": "Manchester City",
          "nationality": "Spanish",
          "position": "MID",
          "shirt_number": 21,
          "age": 25,
          "fun_fact": "Arrived from Valencia and immediately enchanted the Etihad with his close control and vision, the key creative signing that transformed City into contenders.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/David_Silva_2017.jpg/330px-David_Silva_2017.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Yaya Toure",
          "club": "Manchester City",
          "nationality": "Ivorian",
          "position": "MID",
          "shirt_number": 42,
          "age": 27,
          "fun_fact": "Signed from Barcelona and immediately showed his power and range, the most complete box-to-box midfielder in English football on his day.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Yaya_Tour%C3%A9_%28cropped%29.jpg/330px-Yaya_Tour%C3%A9_%28cropped%29.jpg"
        },
        {
          "name": "Charlie Adam",
          "club": "Blackpool",
          "nationality": "Scottish",
          "position": "MID",
          "shirt_number": 26,
          "age": 24,
          "fun_fact": "Was the standout performer in Blackpool's whirlwind Premier League season, his long-range passing and dead-ball ability a consistent highlight.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/1_charlie_adam_stoke_2015.jpg/330px-1_charlie_adam_stoke_2015.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Bobby Zamora",
          "club": "Fulham",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 19,
          "age": 29,
          "fun_fact": "The Fulham striker was at his best in 2010-11, his clinical finishing and intelligent link-up play helping Craven Cottage's side achieve a comfortable mid-table finish under Mark Hughes.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Bobby_Zamora_14092024_%281%29.jpg/330px-Bobby_Zamora_14092024_%281%29.jpg"
        },
        {
          "name": "Chris Brunt",
          "club": "West Bromwich Albion",
          "nationality": "Northern Irish",
          "position": "MID",
          "shirt_number": 11,
          "age": 25,
          "fun_fact": "The industrious Northern Irish midfielder was West Brom's standout player in 2010-11, his work-rate and set-piece delivery a constant threat as the Baggies enjoyed life in the top flight.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Chris_Brunt_23-08-2015_1.png/330px-Chris_Brunt_23-08-2015_1.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Nicky Shorey",
          "club": "Aston Villa",
          "nationality": "English",
          "position": "DEF",
          "shirt_number": 3,
          "age": 28,
          "fun_fact": "A reliable performer for Aston Villa on the left side of defence, his dependability making him a key squad member throughout the campaign.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/0/05/Nicky_Shorey.jpg"
        }
      ]
    },
    {
      "season": "2011-12",
      "players": [
        {
          "name": "Vincent Kompany",
          "club": "Manchester City",
          "nationality": "Belgian",
          "position": "DEF",
          "shirt_number": 4,
          "age": 25,
          "fun_fact": "Captained City to their first title in 44 years with a dominant defensive campaign, his leadership and composure the bedrock of their dramatic title win.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vincent_Kompany_Bayern_Munich_%28cropped%29.jpg/330px-Vincent_Kompany_Bayern_Munich_%28cropped%29.jpg"
        },
        {
          "name": "Sergio Aguero",
          "club": "Manchester City",
          "nationality": "Argentine",
          "position": "FWD",
          "shirt_number": 16,
          "age": 23,
          "fun_fact": "Scored perhaps the most dramatic goal in Premier League history — the 93:20 title-winner against QPR — having netted 23 league goals in his debut season.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Ag%C3%BCero_in_2018.jpg/330px-Ag%C3%BCero_in_2018.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Robin van Persie",
          "club": "Arsenal",
          "nationality": "Dutch",
          "position": "FWD",
          "shirt_number": 10,
          "age": 27,
          "fun_fact": "Won the Golden Boot with 30 goals in what proved his farewell Arsenal season, the finest campaign of his career before his controversial move to United.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Loco-Fener_%2810%29.jpg/330px-Loco-Fener_%2810%29.jpg"
        },
        {
          "name": "David de Gea",
          "club": "Manchester United",
          "nationality": "Spanish",
          "position": "GK",
          "shirt_number": 1,
          "age": 20,
          "fun_fact": "Struggled initially but showed flashes of brilliance that would eventually make him the best goalkeeper in the Premier League — a future great emerging.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/David_de_Gea_2017.jpg/330px-David_de_Gea_2017.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Ba Demba",
          "club": "Newcastle United",
          "nationality": "Senegalese",
          "position": "FWD",
          "shirt_number": 19,
          "age": 26,
          "fun_fact": "Scored 16 league goals in an outstanding debut season at Newcastle, his power and predatory instincts making him one of the division's most effective strikers.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Demba_Ba_BJK%2714.JPG/330px-Demba_Ba_BJK%2714.JPG"
        },
        {
          "name": "Daniel Sturridge",
          "club": "Chelsea",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 39,
          "age": 22,
          "fun_fact": "Made his mark with Chelsea before his move to Liverpool, his pace and directness offering a consistent goal threat in an otherwise turbulent campaign.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/LFC_Parade_2019_01_Daniel_Sturridge.jpg/330px-LFC_Parade_2019_01_Daniel_Sturridge.jpg"
        },
        {
          "name": "Kyle Walker",
          "club": "Tottenham Hotspur",
          "nationality": "English",
          "position": "DEF",
          "shirt_number": 2,
          "age": 21,
          "fun_fact": "Established himself as England's finest young right back with electric overlapping runs, named in the PFA Team of the Year for the first time.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Kyle_Walker.jpg/330px-Kyle_Walker.jpg"
        },
        {
          "name": "Papiss Cisse",
          "club": "Newcastle United",
          "nationality": "Senegalese",
          "position": "FWD",
          "shirt_number": 9,
          "age": 26,
          "fun_fact": "The Senegalese striker took the Premier League by storm after his January arrival, scoring 13 goals in half a season including a stunning volley against Chelsea that became one of the year's best goals.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Papiss_Cisse.jpg/330px-Papiss_Cisse.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Gylfi Sigurdsson",
          "club": "Swansea City",
          "nationality": "Icelandic",
          "position": "MID",
          "shirt_number": 10,
          "age": 21,
          "fun_fact": "Arrived on loan from Hoffenheim and was instrumental in Swansea's debut Premier League season, his creativity and goals invaluable to their survival.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/ISL-HRV_%2821%29_%28cropped%29.jpg/330px-ISL-HRV_%2821%29_%28cropped%29.jpg"
        },
        {
          "name": "Leighton Baines",
          "club": "Everton",
          "nationality": "English",
          "position": "DEF",
          "shirt_number": 3,
          "age": 26,
          "fun_fact": "Named in the PFA Team of the Year after an outstanding season for Everton, his crossing and set-piece delivery among the best in the league.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Baines_Leighton_126176_%28cropped%29.jpg/330px-Baines_Leighton_126176_%28cropped%29.jpg"
        }
      ]
    },
    {
      "season": "2012-13",
      "players": [
        {
          "name": "Luis Suarez",
          "club": "Liverpool",
          "nationality": "Uruguayan",
          "position": "FWD",
          "shirt_number": 7,
          "age": 25,
          "fun_fact": "Scored 23 goals and provided 12 assists in a campaign of incredible skill and controversy — the most captivating and maddening player in England.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Luis_Su%C3%A1rez_2026_%28cropped%29.jpg/330px-Luis_Su%C3%A1rez_2026_%28cropped%29.jpg"
        },
        {
          "name": "Michael Carrick",
          "club": "Manchester United",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 16,
          "age": 31,
          "fun_fact": "Quietly produced his finest season as the platform for United's title win, his positional intelligence and passing accuracy finally earning deserved recognition.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Michael_Carrick_12042025_%285%29_%28cropped%29.jpg/330px-Michael_Carrick_12042025_%285%29_%28cropped%29.jpg"
        },
        {
          "name": "Juan Mata",
          "club": "Chelsea",
          "nationality": "Spanish",
          "position": "MID",
          "shirt_number": 10,
          "age": 24,
          "fun_fact": "Won both the PFA and FWA Player of the Year awards with a season of intricate creativity, his vision and technique lighting up Stamford Bridge.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Juan_Mata_2024.png/330px-Juan_Mata_2024.png"
        },
        {
          "name": "Gareth Bale",
          "club": "Tottenham Hotspur",
          "nationality": "Welsh",
          "position": "MID",
          "shirt_number": 11,
          "age": 23,
          "fun_fact": "Scored 21 goals from a wide position in an outstanding season, his pace and power making him unstoppable before his world-record move to Real Madrid.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/2022_FIFA_World_Cup_United_States_1%E2%80%931_Wales_-_%2832%29_%28cropped%29.jpg/330px-2022_FIFA_World_Cup_United_States_1%E2%80%931_Wales_-_%2832%29_%28cropped%29.jpg"
        },
        {
          "name": "Theo Walcott",
          "club": "Arsenal",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 14,
          "age": 23,
          "fun_fact": "Scored 14 league goals as one of Arsenal's brightest performers before injury curtailed his brilliant first half of the season.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Theo_Walcott_happy_with_his_goal%21_1_%2816501335572%29_%28cropped%29.jpg/330px-Theo_Walcott_happy_with_his_goal%21_1_%2816501335572%29_%28cropped%29.jpg"
        },
        {
          "name": "Michu",
          "club": "Swansea City",
          "nationality": "Spanish",
          "position": "MID",
          "shirt_number": 22,
          "age": 26,
          "fun_fact": "The bargain of the season — signed for £2m — scored 18 goals in all competitions, one of the great Premier League surprise packages.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Michu_2013.jpg/330px-Michu_2013.jpg"
        },
        {
          "name": "Jan Vertonghen",
          "club": "Tottenham Hotspur",
          "nationality": "Belgian",
          "position": "DEF",
          "shirt_number": 5,
          "age": 25,
          "fun_fact": "Arrived from Ajax and immediately impressed with his technical quality and reading of the game — one of the best centre-back arrivals of that summer.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Jan_Vertonghen_14_Jul_2018.jpg/330px-Jan_Vertonghen_14_Jul_2018.jpg"
        },
        {
          "name": "Danny Welbeck",
          "club": "Manchester United",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 19,
          "age": 22,
          "fun_fact": "The young Manchester United striker was full of energy and pace in 2012-13, his goals and assists contributing to United's dominant title-winning campaign under Sir Alex Ferguson's final season.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Danny_Welbeck_2018-06-13_1.jpg/330px-Danny_Welbeck_2018-06-13_1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Laurent Koscielny",
          "club": "Arsenal",
          "nationality": "French",
          "position": "DEF",
          "shirt_number": 6,
          "age": 27,
          "fun_fact": "Was Arsenal's standout defender, his athleticism and reading of the game making him one of the finest centre-backs in the Premier League.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Laurent_Koscielny_-_France_-_2018.jpg/330px-Laurent_Koscielny_-_France_-_2018.jpg"
        },
        {
          "name": "Gareth Barry",
          "club": "Manchester City",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 18,
          "age": 32,
          "fun_fact": "The experienced City midfielder was the unsung hero of their title challenge, his positional discipline and passing range providing the platform for Silva and Toure to excel around him.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Gareth_Barry_2014_2.jpg/330px-Gareth_Barry_2014_2.jpg"
        }
      ]
    },
    {
      "season": "2013-14",
      "players": [
        {
          "name": "Romelu Lukaku",
          "club": "Everton",
          "nationality": "Belgian",
          "position": "FWD",
          "shirt_number": 10,
          "age": 20,
          "fun_fact": "The powerful Belgian striker was on loan at Everton, tearing apart Premier League defences with his strength and pace to score 15 league goals and announce himself as one of Europe's top talents.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Romelu_Lukaku_2021.jpg/330px-Romelu_Lukaku_2021.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Adam Lallana",
          "club": "Southampton",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 20,
          "age": 25,
          "fun_fact": "The elegant Southampton captain was the heartbeat of their impressive season, his technical ability and leadership earning widespread praise and a place in the PFA Team of the Year.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Adam_Lallana_in_Bangkok_%2819721313015%29.jpg/330px-Adam_Lallana_in_Bangkok_%2819721313015%29.jpg"
        },
        {
          "name": "Eden Hazard",
          "club": "Chelsea",
          "nationality": "Belgian",
          "position": "MID",
          "shirt_number": 17,
          "age": 22,
          "fun_fact": "Won the PFA Young Player of the Year in a season of increasing brilliance, his electric dribbling and creativity making him one of the best in England.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Eden_Hazard_at_Baku_before_2019_UEFA_Europe_League_Final.jpg/330px-Eden_Hazard_at_Baku_before_2019_UEFA_Europe_League_Final.jpg"
        },
        {
          "name": "Wilfried Bony",
          "club": "Swansea City",
          "nationality": "Ivorian",
          "position": "FWD",
          "shirt_number": 9,
          "age": 24,
          "fun_fact": "Scored 16 Premier League goals for Swansea — extraordinary for a mid-table side — establishing himself as one of the most effective strikers outside the top six.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Wilfried_Bony_%282013%29.JPG/330px-Wilfried_Bony_%282013%29.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Rickie Lambert",
          "club": "Southampton",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 9,
          "age": 32,
          "fun_fact": "The late-blooming Saints striker scored 13 league goals with intelligent movement and reliable finishing, earning him an unlikely England international debut that season.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rickie_Lambert_2023.png/330px-Rickie_Lambert_2023.png"
        },
        {
          "name": "Oscar",
          "club": "Chelsea",
          "nationality": "Brazilian",
          "position": "MID",
          "shirt_number": 11,
          "age": 22,
          "fun_fact": "The creative Brazilian midfielder was a consistent performer in Chelsea's midfield, his technical quality and pressing making him a key figure in Jose Mourinho's system at Stamford Bridge.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/20141118_AUTBRA_5022.jpg/330px-20141118_AUTBRA_5022.jpg"
        },
        {
          "name": "Mark Noble",
          "club": "West Ham United",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 16,
          "age": 26,
          "fun_fact": "The one-club man and West Ham's midfield heartbeat produced another excellent season, his consistency and loyalty making him a genuine fan favourite.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Mark_Noble_2023.jpeg/330px-Mark_Noble_2023.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Loic Remy",
          "club": "Newcastle United",
          "nationality": "French",
          "position": "FWD",
          "shirt_number": 10,
          "age": 27,
          "fun_fact": "The French striker was in scintillating form during his loan spell at Newcastle, his pace and clinical finishing making him one of the most feared forwards in the division that season.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Chelsea_2_West_Brom_0_The_Blues_go_marching_on_%2815672771328%29.jpg/330px-Chelsea_2_West_Brom_0_The_Blues_go_marching_on_%2815672771328%29.jpg"
        },
        {
          "name": "Philippe Coutinho",
          "club": "Liverpool",
          "nationality": "Brazilian",
          "position": "MID",
          "shirt_number": 10,
          "age": 21,
          "fun_fact": "Emerged as Liverpool's creative cornerstone, his dribbling and stunning long-range goals making him a standout performer in the post-Suarez era.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Philippe_Coutinho_850_1692.jpg/330px-20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Philippe_Coutinho_850_1692.jpg"
        },
        {
          "name": "Christian Eriksen",
          "club": "Tottenham Hotspur",
          "nationality": "Danish",
          "position": "MID",
          "shirt_number": 23,
          "age": 21,
          "fun_fact": "Arrived from Ajax and immediately demonstrated his quality, his vision and passing ability illuminating Spurs' midfield throughout the campaign.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/d/d8/EriksenTottenham2016%28cropped%29_2.jpg"
        }
      ]
    },
    {
      "season": "2014-15",
      "players": [
        {
          "name": "Harry Kane",
          "club": "Tottenham Hotspur",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 18,
          "age": 21,
          "fun_fact": "Burst onto the scene and won PFA Young Player of the Year with 21 league goals — the Premier League's great surprise of the season.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Harry_Kane_on_October_10%2C_2023.jpg/330px-Harry_Kane_on_October_10%2C_2023.jpg"
        },
        {
          "name": "Diego Costa",
          "club": "Chelsea",
          "nationality": "Spanish",
          "position": "FWD",
          "shirt_number": 19,
          "age": 25,
          "fun_fact": "Arrived from Atletico Madrid and scored 20 league goals in his debut season, his physicality and combativeness making him the most feared striker in England.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Iran_and_Spain_match_at_the_FIFA_World_Cup_23.jpg/330px-Iran_and_Spain_match_at_the_FIFA_World_Cup_23.jpg"
        },
        {
          "name": "Alexis Sanchez",
          "club": "Arsenal",
          "nationality": "Chilean",
          "position": "FWD",
          "shirt_number": 17,
          "age": 25,
          "fun_fact": "Scored 16 league goals and created numerous more in a stunning debut Arsenal season, his tireless energy and quality immediately evident.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Alexis_S%C3%A1nchez_2017.jpg/330px-Alexis_S%C3%A1nchez_2017.jpg"
        },
        {
          "name": "Morgan Schneiderlin",
          "club": "Southampton",
          "nationality": "French",
          "position": "MID",
          "shirt_number": 28,
          "age": 24,
          "fun_fact": "Was Southampton's standout performer in another excellent campaign, his defensive midfield quality earning him a move to Manchester United in the summer.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Morgan_Schneiderlin_-_France_v_Armenia_2014.jpg/330px-Morgan_Schneiderlin_-_France_v_Armenia_2014.jpg"
        },
        {
          "name": "Petr Cech",
          "club": "Chelsea",
          "nationality": "Czech",
          "position": "GK",
          "shirt_number": 1,
          "age": 32,
          "fun_fact": "Kept 13 clean sheets as Chelsea won the title, his experience and commanding shot-stopping making him a key part of Mourinho's second championship.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/7/75/Arsenal_players_training_before_2019_UEFA_Europa_League_final_07_%28cropped%29.jpg"
        },
        {
          "name": "Charlie Austin",
          "club": "Queens Park Rangers",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 9,
          "age": 25,
          "fun_fact": "The prolific QPR striker scored 18 league goals in a struggling team, his clinical finishing making him one of the top scorers in the division despite QPR's ultimately unsuccessful battle against relegation.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Southampton_FC_versus_FC_Augsburg_%2836228030141%29_%28cropped%29.jpg/330px-Southampton_FC_versus_FC_Augsburg_%2836228030141%29_%28cropped%29.jpg"
        },
        {
          "name": "Marc Albrighton",
          "club": "Leicester City",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 11,
          "age": 24,
          "fun_fact": "Was a key component of Leicester's narrow survival from relegation, his crossing and industry proving crucial as they survived on the final day.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Marc_Albrighton_Spartak_Moscow_vs._Leicester_City%2C_2021-10-20_134_4_%28cropped%29.jpg"
        },
        {
          "name": "Matt Ritchie",
          "club": "Bournemouth",
          "nationality": "Scottish",
          "position": "MID",
          "shirt_number": 11,
          "age": 25,
          "fun_fact": "Was a key creative force in Bournemouth's historic Championship promotion, his goals and assists driving their remarkable top-flight ascent.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Chelsea_0_Bournemouth_1_%281%29.jpg/330px-Chelsea_0_Bournemouth_1_%281%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Odion Ighalo",
          "club": "Watford",
          "nationality": "Nigerian",
          "position": "FWD",
          "shirt_number": 24,
          "age": 25,
          "fun_fact": "Scored 20 Championship goals as Watford won promotion, announcing himself as one of the most prolific strikers outside the Premier League.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Odion_Ighalo_24.jpeg/330px-Odion_Ighalo_24.jpeg"
        },
        {
          "name": "Saido Berahino",
          "club": "West Bromwich Albion",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 19,
          "age": 21,
          "fun_fact": "Burst into the top flight with 14 league goals for West Brom, his predatory instincts in the penalty area making him one of the most exciting young strikers in the country.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Saido_Berahino_8886_%2815632059695%29.jpg/330px-Saido_Berahino_8886_%2815632059695%29.jpg"
        }
      ]
    },
    {
      "season": "2015-16",
      "players": [
        {
          "name": "Riyad Mahrez",
          "club": "Leicester City",
          "nationality": "Algerian",
          "position": "MID",
          "shirt_number": 26,
          "age": 24,
          "fun_fact": "Won PFA Player of the Year with 17 goals and 11 assists as Leicester completed the most improbable title win in football history.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Mahrez_2021.jpg/330px-Mahrez_2021.jpg"
        },
        {
          "name": "Jamie Vardy",
          "club": "Leicester City",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 9,
          "age": 28,
          "fun_fact": "Broke the record for scoring in consecutive Premier League games with 11 in a row and finished with 24 goals, the hero at the heart of the fairytale.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Jamie_Vardy_2018_%28cropped%29.jpg/330px-Jamie_Vardy_2018_%28cropped%29.jpg"
        },
        {
          "name": "N'Golo Kante",
          "club": "Leicester City",
          "nationality": "French",
          "position": "MID",
          "shirt_number": 7,
          "age": 24,
          "fun_fact": "The unsung hero of Leicester's miracle, his ability to cover every blade of grass single-handedly was central to their extraordinary title triumph.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/0/05/N%27Golo_Kant%C3%A9_%28cropped%29.jpg"
        },
        {
          "name": "Wes Morgan",
          "club": "Leicester City",
          "nationality": "Jamaican",
          "position": "DEF",
          "shirt_number": 5,
          "age": 31,
          "fun_fact": "Captained Leicester to the most improbable title in football history, his no-nonsense defending and leadership the foundation of their season.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Wes_Morgan_Warming_up_vs_Leamington_Spa.jpg/330px-Wes_Morgan_Warming_up_vs_Leamington_Spa.jpg"
        },
        {
          "name": "Dmitri Payet",
          "club": "West Ham United",
          "nationality": "French",
          "position": "MID",
          "shirt_number": 27,
          "age": 28,
          "fun_fact": "The revelation of the season for West Ham, his stunning free kicks and creative brilliance making him the most talked-about player after the Leicester miracle.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Lens_-_Marseille_%2803-02-2021%29_12_%28cropped%29.jpg/330px-Lens_-_Marseille_%2803-02-2021%29_12_%28cropped%29.jpg"
        },
        {
          "name": "Dele Alli",
          "club": "Tottenham Hotspur",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 20,
          "age": 19,
          "fun_fact": "Won PFA Young Player of the Year after an astonishing debut season at Spurs, his late runs and quality suggesting a generational talent.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/2020-03-10_Dele_Alli_%28cropped%29.jpg/330px-2020-03-10_Dele_Alli_%28cropped%29.jpg"
        },
        {
          "name": "Robert Huth",
          "club": "Leicester City",
          "nationality": "German",
          "position": "DEF",
          "shirt_number": 4,
          "age": 31,
          "fun_fact": "The uncompromising German centre-back was a cult hero in Leicester's title-winning season, his aggressive defending and partnership with Morgan key to their success.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Robert_Huth_Middlesbrough_relegation_day.jpg/330px-Robert_Huth_Middlesbrough_relegation_day.jpg"
        },
        {
          "name": "Heurelho Gomes",
          "club": "Watford",
          "nationality": "Brazilian",
          "position": "GK",
          "shirt_number": 1,
          "age": 34,
          "fun_fact": "Kept 13 clean sheets for newly-promoted Watford, his consistent performances helping them to a comfortable 13th-place finish on their return to the top flight.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Watford_v_Norwich_%282%29.jpg/330px-Watford_v_Norwich_%282%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Shinji Okazaki",
          "club": "Leicester City",
          "nationality": "Japanese",
          "position": "FWD",
          "shirt_number": 20,
          "age": 29,
          "fun_fact": "The Japanese international was an unsung hero of Leicester's miraculous title win, his relentless pressing and work-rate opening up space for Vardy and Mahrez to exploit throughout the season.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Shinji_Okazaki_Japan_2018.jpg/330px-Shinji_Okazaki_Japan_2018.jpg"
        },
        {
          "name": "Danny Drinkwater",
          "club": "Leicester City",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 6,
          "age": 26,
          "fun_fact": "The combative Leicester midfielder was one of the unsung heroes of their historic title win, his driving runs from midfield and crisp passing complementing N'Golo Kante's tireless energy.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Danny_Drinkwater_20170114_%28cropped%29.jpg/330px-Danny_Drinkwater_20170114_%28cropped%29.jpg"
        }
      ]
    },
    {
      "season": "2016-17",
      "players": [
        {
          "name": "Marcos Alonso",
          "club": "Chelsea",
          "nationality": "Spanish",
          "position": "DEF",
          "shirt_number": 3,
          "age": 26,
          "fun_fact": "The attacking left wingback was crucial to Chelsea's title win under Antonio Conte, his overlapping runs and set-piece delivery making him one of the most effective defenders in the Premier League.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/7/76/Marcos_Alonso_Mendoza.jpg"
        },
        {
          "name": "Ross Barkley",
          "club": "Everton",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 8,
          "age": 23,
          "fun_fact": "The talented Everton midfielder was at his creative best in 2016-17, his surging runs, vision and eye for goal making him one of the most dynamic midfielders in the Premier League.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Ross_Barkley_in_2019.jpg/330px-Ross_Barkley_in_2019.jpg"
        },
        {
          "name": "Sadio Mane",
          "club": "Liverpool",
          "nationality": "Senegalese",
          "position": "FWD",
          "shirt_number": 19,
          "age": 24,
          "fun_fact": "Arrived from Southampton and immediately shone in Klopp's pressing system, his electric pace making him one of the most exciting forwards in England.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Sadio_Mane_Al-Nassr.jpg/330px-Sadio_Mane_Al-Nassr.jpg"
        },
        {
          "name": "Zlatan Ibrahimovic",
          "club": "Manchester United",
          "nationality": "Swedish",
          "position": "FWD",
          "shirt_number": 9,
          "age": 34,
          "fun_fact": "Scored 17 league goals at 34 in his debut Premier League season, winning the League Cup before a serious knee injury curtailed his extraordinary campaign.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Zlatan_Ibrahimovi%C4%87_June_2018.jpg/330px-Zlatan_Ibrahimovi%C4%87_June_2018.jpg"
        },
        {
          "name": "David Luiz",
          "club": "Chelsea",
          "nationality": "Brazilian",
          "position": "DEF",
          "shirt_number": 30,
          "age": 29,
          "fun_fact": "Returned from PSG and was transformed under Conte, his ball-playing ability and leadership making him one of the best performers in the title-winning season.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/David_Luiz_at_Baku_before_2019_UEFA_Europe_League_Final.jpg/330px-David_Luiz_at_Baku_before_2019_UEFA_Europe_League_Final.jpg"
        },
        {
          "name": "Joshua King",
          "club": "Bournemouth",
          "nationality": "Norwegian",
          "position": "FWD",
          "shirt_number": 17,
          "age": 24,
          "fun_fact": "Scored 16 Premier League goals for Bournemouth — remarkable for a mid-table side — establishing himself as one of the division's most underrated strikers.",
          "image_url": "player_images/joshua_king.jpg"
        },
        {
          "name": "Tom Heaton",
          "club": "Burnley",
          "nationality": "English",
          "position": "GK",
          "shirt_number": 1,
          "age": 30,
          "fun_fact": "Was superb for Burnley in their return to the Premier League, his consistent performances earning him England recognition and helping them finish seventh.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Tom_Heaton_playing_for_Burnley_%28cropped%29.jpg/330px-Tom_Heaton_playing_for_Burnley_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Henrikh Mkhitaryan",
          "club": "Manchester United",
          "nationality": "Armenian",
          "position": "MID",
          "shirt_number": 22,
          "age": 28,
          "fun_fact": "The Armenian playmaker was at his creative best for United, his assists and goals including a stunning scorpion-kick finish against Sunderland cementing his place as one of United's key players.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Henrikh_Mkhitaryan_2017.jpg/330px-Henrikh_Mkhitaryan_2017.jpg"
        },
        {
          "name": "Michael Keane",
          "club": "Burnley",
          "nationality": "English",
          "position": "DEF",
          "shirt_number": 5,
          "age": 23,
          "fun_fact": "Was outstanding for Burnley in their successful first season back in the top flight, his commanding defending prompting England recognition and big-club interest.",
          "image_url": "player_images/michael_keane.jpg"
        },
        {
          "name": "Leighton Baines",
          "club": "Everton",
          "nationality": "English",
          "position": "DEF",
          "shirt_number": 3,
          "age": 32,
          "fun_fact": "The veteran Everton left-back remained one of the most technically accomplished full-backs in the division, his delivery from set pieces and attacking play helping Toffees fans enjoy an encouraging season.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Baines_Leighton_126176_%28cropped%29.jpg/330px-Baines_Leighton_126176_%28cropped%29.jpg"
        }
      ]
    },
    {
      "season": "2017-18",
      "players": [
        {
          "name": "Mohamed Salah",
          "club": "Liverpool",
          "nationality": "Egyptian",
          "position": "FWD",
          "shirt_number": 11,
          "age": 25,
          "fun_fact": "Set a new Premier League record with 32 goals in a 38-game season, winning the PFA Player of the Year in the most prolific debut campaign in league history.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mohamed_Salah_2018.jpg/330px-Mohamed_Salah_2018.jpg"
        },
        {
          "name": "Kevin De Bruyne",
          "club": "Manchester City",
          "nationality": "Belgian",
          "position": "MID",
          "shirt_number": 17,
          "age": 26,
          "fun_fact": "The creative genius behind City's record-breaking 100-point title triumph, his passing, vision and goals from midfield key to Guardiola's masterplan.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Kevin_De_Bruyne_USMNT_v_Belgium_Mar_28_2026-64_%28cropped%29.jpg/330px-Kevin_De_Bruyne_USMNT_v_Belgium_Mar_28_2026-64_%28cropped%29.jpg"
        },
        {
          "name": "Leroy Sane",
          "club": "Manchester City",
          "nationality": "German",
          "position": "MID",
          "shirt_number": 19,
          "age": 21,
          "fun_fact": "Won PFA Young Player of the Year as City romped to the title, his explosive pace and direct running the perfect weapon in Guardiola's attacking system.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/FC_Red_Bull_Salzburg_gegen_Bayern_M%C3%BCnchen_%282025-01-06_Testspiel%29_22.jpg/330px-FC_Red_Bull_Salzburg_gegen_Bayern_M%C3%BCnchen_%282025-01-06_Testspiel%29_22.jpg"
        },
        {
          "name": "Roberto Firmino",
          "club": "Liverpool",
          "nationality": "Brazilian",
          "position": "FWD",
          "shirt_number": 9,
          "age": 26,
          "fun_fact": "The selfless connector of Liverpool's front three, his pressing, link play and goals just as important as Salah's record-breaking return despite fewer headlines.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Roberto_Firmino_850_1557.jpg/330px-20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Roberto_Firmino_850_1557.jpg"
        },
        {
          "name": "Glenn Murray",
          "club": "Brighton",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 17,
          "age": 33,
          "fun_fact": "Scored 12 league goals in Brighton's first Premier League season in 34 years, the veteran striker's goals crucial to their comfortable survival.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Glenn_Murray_Brighton_%28cropped%29.jpg/330px-Glenn_Murray_Brighton_%28cropped%29.jpg"
        },
        {
          "name": "David de Gea",
          "club": "Manchester United",
          "nationality": "Spanish",
          "position": "GK",
          "shirt_number": 1,
          "age": 26,
          "fun_fact": "Named in the PFA Team of the Year with a series of world-class saves — widely regarded as the world's best goalkeeper throughout the campaign.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/David_de_Gea_2017.jpg/330px-David_de_Gea_2017.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Alexandre Lacazette",
          "club": "Arsenal",
          "nationality": "French",
          "position": "FWD",
          "shirt_number": 9,
          "age": 26,
          "fun_fact": "The elegant French striker made an immediate impact at Arsenal following his club-record move, his technical quality and composure in front of goal making him one of the top strikers in the division.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Lacazette_asse_ol_2425.png/330px-Lacazette_asse_ol_2425.png"
        },
        {
          "name": "Willian",
          "club": "Chelsea",
          "nationality": "Brazilian",
          "position": "MID",
          "shirt_number": 22,
          "age": 29,
          "fun_fact": "The tireless Brazilian winger was Chelsea's most consistent performer in 2017-18, his pressing, direct running and creativity making him one of the Premier League's most reliable wide players.",
          "image_url": "player_images/willian.jpg"
        },
        {
          "name": "Kyle Walker",
          "club": "Manchester City",
          "nationality": "English",
          "position": "DEF",
          "shirt_number": 2,
          "age": 27,
          "fun_fact": "Transformed into City's marauding right back under Guardiola, his pace and positioning in the title-winning team making him England's best in his position.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Kyle_Walker.jpg/330px-Kyle_Walker.jpg"
        },
        {
          "name": "Jan Vertonghen",
          "club": "Tottenham Hotspur",
          "nationality": "Belgian",
          "position": "DEF",
          "shirt_number": 5,
          "age": 30,
          "fun_fact": "Produced a superb campaign as the left-sided centre-back in Spurs' three-man defence, his composure and passing ability making him a top-class operator.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Jan_Vertonghen_14_Jul_2018.jpg/330px-Jan_Vertonghen_14_Jul_2018.jpg"
        }
      ]
    },
    {
      "season": "2018-19",
      "players": [
        {
          "name": "Raheem Sterling",
          "club": "Manchester City",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 7,
          "age": 23,
          "fun_fact": "Won PFA Players' Player of the Year with 17 goals and 10 assists as City won the title with 98 points — his transformation into a world-class attacker complete.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Raheem_Sterling_2018.jpg/330px-Raheem_Sterling_2018.jpg"
        },
        {
          "name": "Virgil van Dijk",
          "club": "Liverpool",
          "nationality": "Dutch",
          "position": "DEF",
          "shirt_number": 4,
          "age": 27,
          "fun_fact": "Transformed Liverpool's defence, his commanding presence helping them achieve 97 points and finish runners-up in the tightest title race in history.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/20160604_AUT_NED_8876_%28cropped%29.jpg/330px-20160604_AUT_NED_8876_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Pierre-Emerick Aubameyang",
          "club": "Arsenal",
          "nationality": "Gabonese",
          "position": "FWD",
          "shirt_number": 14,
          "age": 29,
          "fun_fact": "Shared the Golden Boot with 22 goals in his first full Arsenal season, his pace and clinical finishing making him one of the most dangerous strikers in Europe.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/1_Pierre-Emerick_Aubameyang_%28cropped%29.jpg/330px-1_Pierre-Emerick_Aubameyang_%28cropped%29.jpg"
        },
        {
          "name": "Son Heung-min",
          "club": "Tottenham Hotspur",
          "nationality": "South Korean",
          "position": "FWD",
          "shirt_number": 7,
          "age": 26,
          "fun_fact": "Produced his best season yet with 12 league goals and numerous key contributions as Spurs reached the Champions League final under Pochettino.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/BFA_2023_-2_Heung-Min_Son_%28cropped%29.jpg/330px-BFA_2023_-2_Heung-Min_Son_%28cropped%29.jpg"
        },
        {
          "name": "Alisson Becker",
          "club": "Liverpool",
          "nationality": "Brazilian",
          "position": "GK",
          "shirt_number": 1,
          "age": 25,
          "fun_fact": "Arrived for a then world-record goalkeeper fee and won the Golden Glove with 21 clean sheets, completing Liverpool's remarkable defensive transformation.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_850_1625.jpg/330px-20180610_FIFA_Friendly_Match_Austria_vs._Brazil_850_1625.jpg"
        },
        {
          "name": "Andrew Robertson",
          "club": "Liverpool",
          "nationality": "Scottish",
          "position": "DEF",
          "shirt_number": 26,
          "age": 24,
          "fun_fact": "Registered 11 assists from left back as Liverpool finished runners-up with 97 points, his crossing making him arguably the world's best in his position.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/First_Minister_meets_with_Scottish_National_Football_Team_%28cropped_2%29.jpg/330px-First_Minister_meets_with_Scottish_National_Football_Team_%28cropped_2%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Bernardo Silva",
          "club": "Manchester City",
          "nationality": "Portuguese",
          "position": "MID",
          "shirt_number": 20,
          "age": 24,
          "fun_fact": "Grew into one of City's most important players, his technical quality, work rate and versatility making him Guardiola's most reliable option.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Bernardo_Silva_%28Isto_%C3%89_Gozar_Com_Quem_Trabalha%2C_2024%29.png/330px-Bernardo_Silva_%28Isto_%C3%89_Gozar_Com_Quem_Trabalha%2C_2024%29.png"
        },
        {
          "name": "Jordan Pickford",
          "club": "Everton",
          "nationality": "English",
          "position": "GK",
          "shirt_number": 1,
          "age": 24,
          "fun_fact": "England's World Cup hero was outstanding for Everton, his shot-stopping and distribution making him one of the most reliable goalkeepers in the league.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Jordan_Pickford_2022-07-16_1.jpg/330px-Jordan_Pickford_2022-07-16_1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Richarlison",
          "club": "Everton",
          "nationality": "Brazilian",
          "position": "FWD",
          "shirt_number": 7,
          "age": 21,
          "fun_fact": "Moved from Watford for £40m and immediately justified the fee with outstanding performances for Everton, his direct running and pressing energy a constant threat.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Richarlison_%C3%A9_homenageado_na_ALES_%2810.July.2019%29_01_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
        },
        {
          "name": "Declan Rice",
          "club": "West Ham United",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 41,
          "age": 20,
          "fun_fact": "Emerged as a genuine Premier League force at West Ham, his reading of the game and composure far beyond his years attracting attention from the biggest clubs.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/1_declan_rice_arsenal_2025_%28cropped%29.jpg/330px-1_declan_rice_arsenal_2025_%28cropped%29.jpg"
        }
      ]
    },
    {
      "season": "2019-20",
      "players": [
        {
          "name": "Jordan Henderson",
          "club": "Liverpool",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 14,
          "age": 29,
          "fun_fact": "Won the PFA Players' Player of the Year as he captained Liverpool to their first league title in 30 years, his leadership finally earning the recognition he deserved.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Jordan_Henderson_29112025_%284%29.jpg/330px-Jordan_Henderson_29112025_%284%29.jpg"
        },
        {
          "name": "Trent Alexander-Arnold",
          "club": "Liverpool",
          "nationality": "English",
          "position": "DEF",
          "shirt_number": 66,
          "age": 21,
          "fun_fact": "Registered 13 assists — a Premier League record for a defender — as Liverpool won the title at a canter, his delivery from right back redefining the full-back position.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Trent_Alexander-Arnold_2018_%28cropped%29.jpg"
        },
        {
          "name": "James Maddison",
          "club": "Leicester City",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 10,
          "age": 23,
          "fun_fact": "The creative Leicester midfielder was one of the league's standout performers, his goals, assists and clever movement helping the Foxes challenge for the top four under Brendan Rodgers.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/James_Maddison_pre-match_training_%28cropped%29.jpg/330px-James_Maddison_pre-match_training_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Danny Ings",
          "club": "Southampton",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 9,
          "age": 27,
          "fun_fact": "The Southampton striker enjoyed a breakout season, scoring 22 goals to finish second in the golden boot race, his clinical finishing giving the Saints something to cheer about in a difficult year.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Ings_West_Ham.jpeg/330px-Ings_West_Ham.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Raul Jimenez",
          "club": "Wolverhampton Wanderers",
          "nationality": "Mexican",
          "position": "FWD",
          "shirt_number": 9,
          "age": 28,
          "fun_fact": "Scored 17 Premier League goals for Wolves as they established themselves as genuine top-half contenders, his hold-up play and finishing making him world-class.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Ra%C3%BAl_Jim%C3%A9nez_04032026_%281%29.jpg/330px-Ra%C3%BAl_Jim%C3%A9nez_04032026_%281%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Nick Pope",
          "club": "Burnley",
          "nationality": "English",
          "position": "GK",
          "shirt_number": 1,
          "age": 27,
          "fun_fact": "Produced a superb season for Burnley that earned him the Golden Glove runner-up spot and a place in England's squad, crucial to their survival.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Nick_Pope_23-04-2016_1.jpg/330px-Nick_Pope_23-04-2016_1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Marcus Rashford",
          "club": "Manchester United",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 10,
          "age": 21,
          "fun_fact": "Scored 17 league goals as United recovered strongly under Solskjaer, his pace and directness making him one of the most effective attackers in the second half of the season.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Marcus_Rashford_in_2023.jpg/330px-Marcus_Rashford_in_2023.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Caglar Soyuncu",
          "club": "Leicester City",
          "nationality": "Turkish",
          "position": "DEF",
          "shirt_number": 4,
          "age": 23,
          "fun_fact": "Stepped up to replace the injured Maguire and excelled, his aggressive defending and composure making him one of the revelations of the season.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/AUT_vs._TUR_2016-03-29_%28381%29_%28cropped%29.jpg/330px-AUT_vs._TUR_2016-03-29_%28381%29_%28cropped%29.jpg"
        },
        {
          "name": "Jack Grealish",
          "club": "Aston Villa",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 10,
          "age": 24,
          "fun_fact": "Captained newly-promoted Villa with class and flair, his dribbling and creativity making him the most exciting player in their successful Premier League return.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/ManCity20240722-017_%28cropped%29.jpg/330px-ManCity20240722-017_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Anthony Martial",
          "club": "Manchester United",
          "nationality": "French",
          "position": "FWD",
          "shirt_number": 11,
          "age": 24,
          "fun_fact": "The French winger was in top form for Manchester United in 2019-20, his goals and assists during the restart period helping Ole Gunnar Solskjaer's side secure Champions League qualification.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Anthony_Martial_27_September_2017_cropped.jpg/330px-Anthony_Martial_27_September_2017_cropped.jpg"
        }
      ]
    },
    {
      "season": "2020-21",
      "players": [
        {
          "name": "Ruben Dias",
          "club": "Manchester City",
          "nationality": "Portuguese",
          "position": "DEF",
          "shirt_number": 3,
          "age": 23,
          "fun_fact": "Won PFA Players' Player of the Year in his debut season, transforming City's defence after his £65m arrival and anchoring their title-winning campaign.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Portugal_national_football_team_0866_%28R%C3%BAben_Dias%29.jpg"
        },
        {
          "name": "Ilkay Gundogan",
          "club": "Manchester City",
          "nationality": "German",
          "position": "MID",
          "shirt_number": 8,
          "age": 30,
          "fun_fact": "Scored 13 league goals — extraordinary for a deep-lying midfielder — including an unstoppable run of 9 in 8 games that effectively won City the title.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/20180602_FIFA_Friendly_Match_Austria_vs._Germany_%C4%B0lkay_G%C3%BCndo%C4%9Fan_850_0728.jpg/330px-20180602_FIFA_Friendly_Match_Austria_vs._Germany_%C4%B0lkay_G%C3%BCndo%C4%9Fan_850_0728.jpg"
        },
        {
          "name": "Emiliano Martinez",
          "club": "Aston Villa",
          "nationality": "Argentine",
          "position": "GK",
          "shirt_number": 1,
          "age": 28,
          "fun_fact": "Left Arsenal to become Villa's first-choice keeper and was outstanding all season, winning the Golden Glove in a remarkable debut campaign at his new club.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/St._Louis_City_vs_Aston_Villa_%28Jul_2025%29_14_%28Emiliano_Mart%C3%ADnez%29.jpg/330px-St._Louis_City_vs_Aston_Villa_%28Jul_2025%29_14_%28Emiliano_Mart%C3%ADnez%29.jpg"
        },
        {
          "name": "Ollie Watkins",
          "club": "Aston Villa",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 11,
          "age": 25,
          "fun_fact": "Scored 14 league goals in his first Premier League season including a stunning hat-trick against Liverpool, justifying his £28m move from Brentford.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Manchester_United_v_Aston_Villa%2C_25_September_2021_%2817%29_%28cropped%29.jpg/330px-Manchester_United_v_Aston_Villa%2C_25_September_2021_%2817%29_%28cropped%29.jpg"
        },
        {
          "name": "Patrick Bamford",
          "club": "Leeds United",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 9,
          "age": 27,
          "fun_fact": "Scored 17 Premier League goals in Leeds' first top-flight season back after 16 years, his movement perfectly suited to Bielsa's demanding system.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Patrick_Bamford.jpg/330px-Patrick_Bamford.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "John McGinn",
          "club": "Aston Villa",
          "nationality": "Scottish",
          "position": "MID",
          "shirt_number": 7,
          "age": 26,
          "fun_fact": "Was outstanding for Aston Villa as they finished 11th, his energy, goals and leadership prompting comparisons with Scottish legends of the past.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/First_Minister_meets_with_Scottish_National_Football_Team_%282%29_%28cropped%29.jpg/330px-First_Minister_meets_with_Scottish_National_Football_Team_%282%29_%28cropped%29.jpg"
        },
        {
          "name": "Mason Mount",
          "club": "Chelsea",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 19,
          "age": 21,
          "fun_fact": "Won the PFA Young Player of the Year in an excellent season, his pressing and goals central to Chelsea's Champions League triumph under Tuchel.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Mountbrightonoct3_2019_%28cropped%29.jpg/330px-Mountbrightonoct3_2019_%28cropped%29.jpg"
        },
        {
          "name": "Tomas Soucek",
          "club": "West Ham United",
          "nationality": "Czech",
          "position": "MID",
          "shirt_number": 28,
          "age": 25,
          "fun_fact": "Arrived for a small fee and proved a revelation, scoring 10 league goals from midfield as West Ham excelled and qualified for Europe.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Tom%C3%A1%C5%A1_Sou%C4%8Dek_WHU.jpeg/330px-Tom%C3%A1%C5%A1_Sou%C4%8Dek_WHU.jpeg"
        },
        {
          "name": "Harvey Barnes",
          "club": "Leicester City",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 15,
          "age": 22,
          "fun_fact": "Had a brilliant first half to the season with seven goals before injury struck, his directness from the left wing attracting big-club interest.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Harvey_Barnes_2022_%28cropped%29.jpg/330px-Harvey_Barnes_2022_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Bruno Fernandes",
          "club": "Manchester United",
          "nationality": "Portuguese",
          "position": "MID",
          "shirt_number": 18,
          "age": 26,
          "fun_fact": "Scored 18 league goals and created 12 more in his first full season at Old Trafford, the creative force whose arrival had transformed United's fortunes.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Bruno_Fernandes_USMNT_v_Portugal_Mar_31_2026-27_%28cropped%29.jpg/330px-Bruno_Fernandes_USMNT_v_Portugal_Mar_31_2026-27_%28cropped%29.jpg"
        }
      ]
    },
    {
      "season": "2021-22",
      "players": [
        {
          "name": "Riyad Mahrez",
          "club": "Manchester City",
          "nationality": "Algerian",
          "position": "MID",
          "shirt_number": 26,
          "age": 30,
          "fun_fact": "The Algerian winger was a key contributor to City's title win in 2021-22, his dribbling, creativity and goals from wide positions making him one of the most dangerous attackers in the division.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Mahrez_2021.jpg/330px-Mahrez_2021.jpg"
        },
        {
          "name": "Heung-min Son",
          "club": "Tottenham Hotspur",
          "nationality": "South Korean",
          "position": "FWD",
          "shirt_number": 7,
          "age": 29,
          "fun_fact": "Shared the Golden Boot on 23 goals — the first Asian player to win the award — cementing his status as one of Europe's elite forwards.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/BFA_2023_-2_Heung-Min_Son_%28cropped%29.jpg/330px-BFA_2023_-2_Heung-Min_Son_%28cropped%29.jpg"
        },
        {
          "name": "Luke Shaw",
          "club": "Manchester United",
          "nationality": "English",
          "position": "DEF",
          "shirt_number": 23,
          "age": 26,
          "fun_fact": "The Manchester United left-back was in his finest personal form, his attacking prowess and defensive solidity earning him a PFA Team of the Year nomination and national team recognition.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Luke_Shaw%2C_Manchester_United_v_Newcastle_United%2C_11_September_2021_%2844%29_%28cropped%29.jpg/330px-Luke_Shaw%2C_Manchester_United_v_Newcastle_United%2C_11_September_2021_%2844%29_%28cropped%29.jpg"
        },
        {
          "name": "Joao Cancelo",
          "club": "Manchester City",
          "nationality": "Portuguese",
          "position": "DEF",
          "shirt_number": 27,
          "age": 27,
          "fun_fact": "Named in the PFA Team of the Year as City's inverted full-back system was embodied perfectly by Cancelo, his technical quality and attacking output outstanding.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Jo%C3%A3o_Cancelo_USMNT_v_Portugal_Mar_31_2026-30_%28cropped%29.jpg/330px-Jo%C3%A3o_Cancelo_USMNT_v_Portugal_Mar_31_2026-30_%28cropped%29.jpg"
        },
        {
          "name": "Tyrone Mings",
          "club": "Aston Villa",
          "nationality": "English",
          "position": "DEF",
          "shirt_number": 5,
          "age": 28,
          "fun_fact": "The commanding Aston Villa centre-back was a vocal leader at the heart of Villa's defence, his aerial dominance and reading of the game making him one of the most composed central defenders in the league.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Tyron_Mings_2021.jpg/330px-Tyron_Mings_2021.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Rodri",
          "club": "Manchester City",
          "nationality": "Spanish",
          "position": "MID",
          "shirt_number": 16,
          "age": 25,
          "fun_fact": "Was the metronome of City's title-winning midfield, his ability to control tempo and break up opposition attacks making him Guardiola's most important player.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/RODRI_-_SWE_vs_ESP_-_UEFA_EURO_2020_QUALIFIERS_-_2019.10.15_%28cropped%29.jpg/330px-RODRI_-_SWE_vs_ESP_-_UEFA_EURO_2020_QUALIFIERS_-_2019.10.15_%28cropped%29.jpg"
        },
        {
          "name": "Emile Smith Rowe",
          "club": "Arsenal",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 10,
          "age": 21,
          "fun_fact": "Broke into Arsenal's first team and was a revelation, his creative play from the left of midfield providing a glimpse of a very bright future.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Emile_Smith_Rowe_14092024_%28cropped2%29.jpg/330px-Emile_Smith_Rowe_14092024_%28cropped2%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "James Ward-Prowse",
          "club": "Southampton",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 8,
          "age": 27,
          "fun_fact": "Was arguably the best set-piece taker in the league, his free-kick ability and consistent performances for Southampton earning widespread admiration.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/James_Ward-Prowse_in_2024.jpeg/330px-James_Ward-Prowse_in_2024.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Conor Gallagher",
          "club": "Crystal Palace",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 23,
          "age": 21,
          "fun_fact": "Was superb in a remarkable loan spell at Palace, his energy and goals from midfield making Vieira's side a genuine threat to the established order.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Conor_Gallagher_2024_%28cropped%29.jpg/330px-Conor_Gallagher_2024_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Diogo Jota",
          "club": "Liverpool",
          "nationality": "Portuguese",
          "position": "FWD",
          "shirt_number": 20,
          "age": 25,
          "fun_fact": "The Portuguese forward was Liverpool's most clinical finisher in 2021-22, his goals across all competitions helping the Reds push City all the way in the title race and reach two domestic cup finals.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Diogo_Jota_2025_Cropped.jpg/330px-Diogo_Jota_2025_Cropped.jpg"
        }
      ]
    },
    {
      "season": "2022-23",
      "players": [
        {
          "name": "Erling Haaland",
          "club": "Manchester City",
          "nationality": "Norwegian",
          "position": "FWD",
          "shirt_number": 9,
          "age": 22,
          "fun_fact": "Broke the Premier League single-season record with 36 goals in 35 games in his debut season, also setting records for most hat-tricks and fastest to 30 goals.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Erling_Haaland_June_2025.jpg/330px-Erling_Haaland_June_2025.jpg"
        },
        {
          "name": "Martin Odegaard",
          "club": "Arsenal",
          "nationality": "Norwegian",
          "position": "MID",
          "shirt_number": 8,
          "age": 24,
          "fun_fact": "Named in the PFA Team of the Year as Arsenal's creative captain led their title challenge, his vision and goals integral to their best campaign in over a decade.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Norway_Italy_-_June_2025_E_04.jpg/330px-Norway_Italy_-_June_2025_E_04.jpg"
        },
        {
          "name": "Bukayo Saka",
          "club": "Arsenal",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 7,
          "age": 21,
          "fun_fact": "Named in the PFA Team of the Year with 14 goals and 11 assists, his electrifying right-wing play and composure making him one of the most complete young players in Europe.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/1_bukayo_saka_arsenal_2025_%28cropped%29.jpg/330px-1_bukayo_saka_arsenal_2025_%28cropped%29.jpg"
        },
        {
          "name": "Aaron Ramsdale",
          "club": "Arsenal",
          "nationality": "English",
          "position": "GK",
          "shirt_number": 1,
          "age": 24,
          "fun_fact": "Named in the PFA Team of the Year after a brilliant season as Arsenal's keeper, his shot-stopping and sweeping ability contributing to their title challenge.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Aaron_Ramsdale_22122024_%284%29.jpg/330px-Aaron_Ramsdale_22122024_%284%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Kieran Trippier",
          "club": "Newcastle United",
          "nationality": "English",
          "position": "DEF",
          "shirt_number": 2,
          "age": 32,
          "fun_fact": "Named in the PFA Team of the Year as he inspired Newcastle to Champions League qualification, his leadership and delivery from right back class throughout.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Kieran_Trippier_2018-07-14_1.jpg/330px-Kieran_Trippier_2018-07-14_1.jpg"
        },
        {
          "name": "John Stones",
          "club": "Manchester City",
          "nationality": "English",
          "position": "DEF",
          "shirt_number": 5,
          "age": 28,
          "fun_fact": "Named in the PFA Team of the Year after his remarkable reinvention as an advanced midfielder-defender hybrid, pivotal to City's historic Treble-winning campaign.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/John_Stones_2018-06-24_1.jpg/330px-John_Stones_2018-06-24_1.jpg"
        },
        {
          "name": "Miguel Almiron",
          "club": "Newcastle United",
          "nationality": "Paraguayan",
          "position": "MID",
          "shirt_number": 24,
          "age": 28,
          "fun_fact": "Scored 11 league goals — far exceeding all expectations — as Newcastle qualified for the Champions League, becoming an unlikely cult hero at St James' Park.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Miguel_Almir%C3%B3n_Red_Bull_Atlanta_5.31.25-069_%28cropped%29.jpg/330px-Miguel_Almir%C3%B3n_Red_Bull_Atlanta_5.31.25-069_%28cropped%29.jpg"
        },
        {
          "name": "Callum Wilson",
          "club": "Newcastle United",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 9,
          "age": 30,
          "fun_fact": "Scored 18 goals when fit for Newcastle, his movement and clinical finishing proving crucial to their historic Champions League return.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Callum_Wilson_2023.png/330px-Callum_Wilson_2023.png"
        },
        {
          "name": "Brennan Johnson",
          "club": "Nottingham Forest",
          "nationality": "Welsh",
          "position": "FWD",
          "shirt_number": 22,
          "age": 21,
          "fun_fact": "Scored 8 goals as Nottingham Forest retained their Premier League status in their first top-flight season in 23 years, his pace a constant danger.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Brennan_Johnson_%28cropped%29.jpg/330px-Brennan_Johnson_%28cropped%29.jpg"
        },
        {
          "name": "Harry Kane",
          "club": "Tottenham Hotspur",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 10,
          "age": 29,
          "fun_fact": "Broke Wayne Rooney's England scoring record and surpassed Jimmy Greaves as Spurs' all-time top scorer before his £100m summer move to Bayern Munich.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Harry_Kane_on_October_10%2C_2023.jpg/330px-Harry_Kane_on_October_10%2C_2023.jpg"
        }
      ]
    },
    {
      "season": "2023-24",
      "players": [
        {
          "name": "Phil Foden",
          "club": "Manchester City",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 47,
          "age": 23,
          "fun_fact": "Won PFA Players' Player of the Year with a career-best 19 league goals and 8 assists — his transition into City's main creative focal point fully dominant.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/2023-10-04_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Manchester_City_FC_1DX_2613%2C_Phil_Foden.jpg/330px-2023-10-04_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Manchester_City_FC_1DX_2613%2C_Phil_Foden.jpg"
        },
        {
          "name": "Cole Palmer",
          "club": "Chelsea",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 20,
          "age": 21,
          "fun_fact": "Won PFA Young Player of the Year with 22 goals and 11 assists after his move from City — the best debut season by any player in Chelsea's Premier League history.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Cole_Palmer_2025_FIFA_Club_World_Cup_Final.jpg"
        },
        {
          "name": "Ivan Toney",
          "club": "Brentford",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 17,
          "age": 28,
          "fun_fact": "Despite returning from suspension, the Brentford striker remained one of the most clinical finishers in the league, his powerful shooting and intelligent movement making him a constant threat.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Ivan_Tony_with_Al-Ahli.jpg/330px-Ivan_Tony_with_Al-Ahli.jpg"
        },
        {
          "name": "William Saliba",
          "club": "Arsenal",
          "nationality": "French",
          "position": "DEF",
          "shirt_number": 12,
          "age": 22,
          "fun_fact": "Named in the PFA Team of the Year for a second consecutive season, his reading of the game and composure cementing him as the best young defender in Europe.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/1_william_saliba_arsenal_2025_%28cropped%29.jpg/330px-1_william_saliba_arsenal_2025_%28cropped%29.jpg"
        },
        {
          "name": "Pervis Estupinan",
          "club": "Brighton & Hove Albion",
          "nationality": "Ecuadorian",
          "position": "DEF",
          "shirt_number": 21,
          "age": 26,
          "fun_fact": "The dynamic Ecuadorian left-back was one of the league's most effective wing-backs, his overlapping runs, defensive work and goal contributions making him one of Brighton's standout players.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Pervis_Estupinan_00-00-54.40.png/330px-Pervis_Estupinan_00-00-54.40.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Alexander Isak",
          "club": "Newcastle United",
          "nationality": "Swedish",
          "position": "FWD",
          "shirt_number": 14,
          "age": 24,
          "fun_fact": "Scored 21 league goals in another outstanding season, his combination of pace, technical skill and finishing making him one of Europe's most coveted strikers.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/UEFA_EURO_qualifiers_Sweden_vs_Spain_20191015_Alexander_Isak_56_%28cropped%29.jpg/330px-UEFA_EURO_qualifiers_Sweden_vs_Spain_20191015_Alexander_Isak_56_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "David Raya",
          "club": "Arsenal",
          "nationality": "Spanish",
          "position": "GK",
          "shirt_number": 22,
          "age": 28,
          "fun_fact": "Named in the PFA Team of the Year after joining on loan from Brentford, his sweeping ability and shot-stopping a seamless fit for Arsenal's high-defensive-line.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/David_Raya_in_2025_%28cropped%29.jpg/330px-David_Raya_in_2025_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Declan Rice",
          "club": "Arsenal",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 41,
          "age": 25,
          "fun_fact": "Produced an outstanding debut season for Arsenal after his £105m move from West Ham, winning the FA Cup and excelling in both defensive and attacking phases.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/1_declan_rice_arsenal_2025_%28cropped%29.jpg/330px-1_declan_rice_arsenal_2025_%28cropped%29.jpg"
        },
        {
          "name": "Jarrod Bowen",
          "club": "West Ham United",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 20,
          "age": 27,
          "fun_fact": "Scored 13 league goals and was one of West Ham's standout performers in their final season at the London Stadium, earning him regular England caps.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/JarrodBowen2023_%28cropped%29.jpeg/330px-JarrodBowen2023_%28cropped%29.jpeg"
        },
        {
          "name": "Kobbie Mainoo",
          "club": "Manchester United",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 37,
          "age": 18,
          "fun_fact": "The teenage Manchester United midfielder burst onto the scene with composure beyond his years, his assured performances in Wembley finals and league games marking him as one of England's most exciting talents.",
          "image_url": "player_images/kobbie_mainoo.jpg"
        }
      ]
    },
    {
      "season": "2024-25",
      "players": [
        {
          "name": "Mohamed Salah",
          "club": "Liverpool",
          "nationality": "Egyptian",
          "position": "FWD",
          "shirt_number": 11,
          "age": 32,
          "fun_fact": "Won a record third PFA Men's Player of the Year award with 29 goals and 18 assists as Liverpool won the title under Arne Slot — a historic final Anfield chapter.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mohamed_Salah_2018.jpg/330px-Mohamed_Salah_2018.jpg"
        },
        {
          "name": "Virgil van Dijk",
          "club": "Liverpool",
          "nationality": "Dutch",
          "position": "DEF",
          "shirt_number": 4,
          "age": 33,
          "fun_fact": "Named in the PFA Team of the Year as Liverpool's defensive leader in their title-winning season, his authority and leadership undiminished approaching his mid-thirties.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/20160604_AUT_NED_8876_%28cropped%29.jpg/330px-20160604_AUT_NED_8876_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Chris Wood",
          "club": "Nottingham Forest",
          "nationality": "New Zealander",
          "position": "FWD",
          "shirt_number": 11,
          "age": 32,
          "fun_fact": "Named in the PFA Team of the Year after an extraordinary season for Forest, his clinical finishing helping them to a stunning top-four finish.",
          "image_url": "player_images/chris_wood.jpg"
        },
        {
          "name": "Matz Sels",
          "club": "Nottingham Forest",
          "nationality": "Belgian",
          "position": "GK",
          "shirt_number": 1,
          "age": 32,
          "fun_fact": "Named in the PFA Team of the Year in a breakout Premier League season, his commanding performances central to Forest's remarkable push for European football.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Matz_Sels_USMNT_v_Belgium_Mar_28_2026-12_%28cropped%29.jpg/330px-Matz_Sels_USMNT_v_Belgium_Mar_28_2026-12_%28cropped%29.jpg"
        },
        {
          "name": "Gabriel Magalhaes",
          "club": "Arsenal",
          "nationality": "Brazilian",
          "position": "DEF",
          "shirt_number": 6,
          "age": 26,
          "fun_fact": "Named in the PFA Team of the Year after another dominant defensive season, his aerial ability and ball-playing quality making him one of the best in Europe.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/GabrielLille2019.png/330px-GabrielLille2019.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
        },
        {
          "name": "Ryan Gravenberch",
          "club": "Liverpool",
          "nationality": "Dutch",
          "position": "MID",
          "shirt_number": 38,
          "age": 22,
          "fun_fact": "Named in the PFA Team of the Year after a stunning transformation from squad player to Liverpool's midfield anchor, his composure key to their title triumph.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/2022-07-30_Fu%C3%9Fball%2C_M%C3%A4nner%2C_DFL-Supercup%2C_RB_Leipzig_-_FC_Bayern_M%C3%BCnchen_1DX_3342_by_Stepro_%28cropped%29.jpg/330px-2022-07-30_Fu%C3%9Fball%2C_M%C3%A4nner%2C_DFL-Supercup%2C_RB_Leipzig_-_FC_Bayern_M%C3%BCnchen_1DX_3342_by_Stepro_%28cropped%29.jpg"
        },
        {
          "name": "Milos Kerkez",
          "club": "Bournemouth",
          "nationality": "Hungarian",
          "position": "DEF",
          "shirt_number": 3,
          "age": 20,
          "fun_fact": "Named in the PFA Team of the Year as the surprise inclusion of the season — the young Hungarian left back's attacking quality making him the best in his position.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Milot_Kerkez_%28cropped%29.png/330px-Milot_Kerkez_%28cropped%29.png"
        },
        {
          "name": "Morgan Rogers",
          "club": "Aston Villa",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 10,
          "age": 22,
          "fun_fact": "Won the PFA Young Player of the Year in a breakthrough season at Villa, his direct running and goals establishing him as one of England's most exciting talents.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Morgan_Rogers_April_2026_%28cropped%29.jpg/330px-Morgan_Rogers_April_2026_%28cropped%29.jpg"
        },
        {
          "name": "Liam Delap",
          "club": "Ipswich Town",
          "nationality": "English",
          "position": "FWD",
          "shirt_number": 9,
          "age": 21,
          "fun_fact": "The powerful Ipswich striker led the line with maturity beyond his years, his goals helping the promoted Tractor Boys defy expectations and compete in the Premier League in 2024-25.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/6/66/Liam_Delap_in_2025.jpg"
        },
        {
          "name": "Noni Madueke",
          "club": "Chelsea",
          "nationality": "English",
          "position": "MID",
          "shirt_number": 11,
          "age": 22,
          "fun_fact": "The pacy Chelsea winger was one of the league's most exciting attackers, his direct running, creativity and important goals making him central to Enzo Maresca's system at Stamford Bridge.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Fulham_v_Chelsea_20042025_%287%29_%28Noni_Madueke%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
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
