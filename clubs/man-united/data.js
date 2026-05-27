// ──────────────────────────────────────────────────────────────────────
// Manchester United · data — player roster across Premier League seasons.
// Same shape as EPL/FCK: { league, club, seasons: [ { season, players: [...] } ] }
// The block below is the raw data; helpers convert it into PUZZLES + PUZZLE_ORDER.
// ──────────────────────────────────────────────────────────────────────

window.CLUB_DATA = {
  "league": "English Premier League",
  "club": "Manchester United",
  "seasons": [
    {
      "season": "1992-93",
      "players": [
        {
          "name": "Steve Bruce",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Defender",
          "shirt_number": 6,
          "age": 32,
          "fun_fact": "The iconic Man Utd captain who headed two injury-time goals against Sheffield Wednesday to clinch United's first league title in 26 years.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Steve_Bruce.jpg/330px-Steve_Bruce.jpg"
        },
        {
          "name": "Denis Irwin",
          "club": "Manchester United",
          "nationality": "Irish",
          "position": "Defender",
          "shirt_number": 3,
          "age": 27,
          "fun_fact": "Regarded as one of the best full backs in United's history, the Irishman was ever-reliable over a decade at Old Trafford.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Denis_Irwin_%282017-07-29_img06%29_%28cropped%29.jpg/330px-Denis_Irwin_%282017-07-29_img06%29_%28cropped%29.jpg"
        },
        {
          "name": "Bryan Robson",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Midfielder",
          "shirt_number": 7,
          "age": 35,
          "fun_fact": "Captain Marvel made sporadic but influential appearances as United clinched their first top-flight title in 26 years.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bryan_Robson_Thailand_2009-11-01_%282%29.jpg/330px-Bryan_Robson_Thailand_2009-11-01_%282%29.jpg"
        },
        {
          "name": "Paul Ince",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Midfielder",
          "shirt_number": 8,
          "age": 25,
          "fun_fact": "The 'Guv'nor' was a driving force in midfield as United romped to their inaugural Premier League title.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Paul_Ince.jpg/330px-Paul_Ince.jpg"
        },
        {
          "name": "Mark Hughes",
          "club": "Manchester United",
          "nationality": "Welsh",
          "position": "Striker",
          "shirt_number": 10,
          "age": 29,
          "fun_fact": "The powerful Welsh striker was United's top scorer and provided the physical focal point of Fergie's first championship team.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Mark_Hughes_2015.jpg/330px-Mark_Hughes_2015.jpg"
        }
      ]
    },
    {
      "season": "1993-94",
      "players": [
        {
          "name": "Eric Cantona",
          "club": "Manchester United",
          "nationality": "French",
          "position": "Forward",
          "shirt_number": 7,
          "age": 27,
          "fun_fact": "The mercurial Frenchman was the heartbeat of United's Double-winning team, finishing as top scorer and winning the PFA Players' Player award.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Eric_Cantona_Cannes_2009.jpg/330px-Eric_Cantona_Cannes_2009.jpg"
        },
        {
          "name": "Gary Pallister",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Defender",
          "shirt_number": 6,
          "age": 28,
          "fun_fact": "A colossus at the heart of United's defence, Pallister formed one of English football's most formidable central defensive partnerships with Steve Bruce.",
          "image_url": ""
        },
        {
          "name": "Andrei Kanchelskis",
          "club": "Manchester United",
          "nationality": "Russian",
          "position": "Winger",
          "shirt_number": 14,
          "age": 25,
          "fun_fact": "The lightning-fast Russian winger terrorised defences in the Double-winning season, forming a devastating right-flank partnership with United's attackers.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/c/c9/Kanchelskis_Andrei.jpg"
        },
        {
          "name": "Lee Sharpe",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Winger",
          "shirt_number": 11,
          "age": 23,
          "fun_fact": "The tricky left winger won PFA Young Player of the Year as he tormented full backs in United's dominant Double campaign.",
          "image_url": ""
        },
        {
          "name": "Brian McClair",
          "club": "Manchester United",
          "nationality": "Scottish",
          "position": "Midfielder",
          "shirt_number": 9,
          "age": 30,
          "fun_fact": "The reliable Scottish utility player contributed vital goals and assists in both the league and FA Cup as United completed the Double.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Brian_McClair_%282017-07-29_img03%29.jpg/330px-Brian_McClair_%282017-07-29_img03%29.jpg"
        }
      ]
    },
    {
      "season": "1994-95",
      "players": [
        {
          "name": "Gary Neville",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Defender",
          "shirt_number": 2,
          "age": 19,
          "fun_fact": "The first of the Class of 92 to become a regular starter, Neville established himself as United's first-choice right back during this transitional season.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Gary_Neville_2014_%28cropped%29.jpg/330px-Gary_Neville_2014_%28cropped%29.jpg"
        },
        {
          "name": "Phil Neville",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Defender",
          "shirt_number": 23,
          "age": 17,
          "fun_fact": "Phil made his senior debut this season, the younger Neville twin beginning a long Old Trafford career as part of the celebrated Class of 92.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Phil_Neville_2019.jpg/330px-Phil_Neville_2019.jpg"
        },
        {
          "name": "Nicky Butt",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Midfielder",
          "shirt_number": 8,
          "age": 19,
          "fun_fact": "The combative Manchester-born midfielder broke into the first team as part of the Class of 92, showing the tenacity that would define his United career.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Cropped_Butt_by_nyaa_birdies_perch.jpg/330px-Cropped_Butt_by_nyaa_birdies_perch.jpg"
        },
        {
          "name": "Paul Scholes",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Midfielder",
          "shirt_number": 18,
          "age": 19,
          "fun_fact": "The diminutive genius made his debut and immediately showed the precise passing and sharp shooting that would make him one of United's greatest ever players.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/P_Scholes.jpg/330px-P_Scholes.jpg"
        },
        {
          "name": "Paul Parker",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Defender",
          "shirt_number": 2,
          "age": 29,
          "fun_fact": "The experienced English right back provided stability and nous as Ferguson began blooding the famous Class of 92 generation alongside veterans.",
          "image_url": ""
        }
      ]
    },
    {
      "season": "1995-96",
      "players": [
        {
          "name": "Roy Keane",
          "club": "Manchester United",
          "nationality": "Irish",
          "position": "Midfielder",
          "shirt_number": 16,
          "age": 24,
          "fun_fact": "The ferocious Irish captain was the engine of United's Double-winning fledglings team, winning everything that season bar the FA Cup final through injury.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Roy_keane_2014.jpg/330px-Roy_keane_2014.jpg"
        },
        {
          "name": "Ryan Giggs",
          "club": "Manchester United",
          "nationality": "Welsh",
          "position": "Winger",
          "shirt_number": 11,
          "age": 22,
          "fun_fact": "The Welsh wizard was at the peak of his dazzling early powers, tormenting defenders with his pace and trickery in United's second Double triumph.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/1/13/Ryan_Giggs_2015_%28cropped%29.jpg"
        },
        {
          "name": "David Beckham",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Midfielder",
          "shirt_number": 7,
          "age": 21,
          "fun_fact": "Beckham's breakthrough season included a stunning debut goal from inside his own half at Wimbledon, announcing himself to the world in spectacular fashion.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/David_Beckham_UNICEF_%28cropped2%29.jpg/330px-David_Beckham_UNICEF_%28cropped2%29.jpg"
        },
        {
          "name": "Peter Schmeichel",
          "club": "Manchester United",
          "nationality": "Danish",
          "position": "Goalkeeper",
          "shirt_number": 1,
          "age": 32,
          "fun_fact": "The Great Dane was impeccable all season as United's Fledglings won the Double, defying Alan Hansen's famous prediction that 'you can't win anything with kids'.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Peter_Schmeichel_2012-01-25_001.jpg/330px-Peter_Schmeichel_2012-01-25_001.jpg"
        },
        {
          "name": "David May",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Defender",
          "shirt_number": 12,
          "age": 26,
          "fun_fact": "The centre back played a crucial role in United's Double-winning season, his defensive solidity helping balance the youthful exuberance around him.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/David_May_-_53690808149.jpg/330px-David_May_-_53690808149.jpg"
        }
      ]
    },
    {
      "season": "1996-97",
      "players": [
        {
          "name": "Ole Gunnar Solskjær",
          "club": "Manchester United",
          "nationality": "Norwegian",
          "position": "Striker",
          "shirt_number": 20,
          "age": 23,
          "fun_fact": "The Norwegian striker arrived and immediately became United's super-sub and impact striker, scoring 18 goals in his debut Premier League season.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Ole_Gunnar_Solskjaer_Trondheim2011-1_crop.jpg/330px-Ole_Gunnar_Solskjaer_Trondheim2011-1_crop.jpg"
        },
        {
          "name": "Karel Poborský",
          "club": "Manchester United",
          "nationality": "Czech",
          "position": "Winger",
          "shirt_number": 16,
          "age": 24,
          "fun_fact": "Signed after his Euro 96 heroics with the Czech Republic, Poborský's scoop-chip goal in the tournament made him one of the most wanted players in Europe.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Karel_Poborsk%C3%BD_%282012%29.jpg/330px-Karel_Poborsk%C3%BD_%282012%29.jpg"
        },
        {
          "name": "Ronny Johnsen",
          "club": "Manchester United",
          "nationality": "Norwegian",
          "position": "Defender",
          "shirt_number": 5,
          "age": 26,
          "fun_fact": "The composed Norwegian international was a key part of United's title-winning defence, comfortable in possession and commanding in the air.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Ronny_Johnsen_%282017-07-29_img02%29.jpg/330px-Ronny_Johnsen_%282017-07-29_img02%29.jpg"
        },
        {
          "name": "Jordi Cruyff",
          "club": "Manchester United",
          "nationality": "Dutch",
          "position": "Midfielder",
          "shirt_number": 14,
          "age": 22,
          "fun_fact": "The son of Johan Cruyff brought creativity and technical quality to United's midfield after joining from Barcelona the previous summer.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Cruyff%2C_Jordi.jpg"
        },
        {
          "name": "Keith Gillespie",
          "club": "Manchester United",
          "nationality": "Northern Irish",
          "position": "Winger",
          "shirt_number": 11,
          "age": 21,
          "fun_fact": "The Northern Irish winger had been part of the Andy Cole deal, returning to Old Trafford briefly before making his impact as a pacey wide player.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Keith_Gillespie.png"
        }
      ]
    },
    {
      "season": "1997-98",
      "players": [
        {
          "name": "Teddy Sheringham",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Forward",
          "shirt_number": 10,
          "age": 31,
          "fun_fact": "Signed to replace Eric Cantona, Sheringham's intelligent movement and link play were integral to United's style even in the disappointing runner-up season.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Teddy_Sheringham_-_53492983124_%28original%29.jpg/330px-Teddy_Sheringham_-_53492983124_%28original%29.jpg"
        },
        {
          "name": "Henning Berg",
          "club": "Manchester United",
          "nationality": "Norwegian",
          "position": "Defender",
          "shirt_number": 21,
          "age": 28,
          "fun_fact": "The Norwegian international defender arrived from Blackburn Rovers to add experienced cover in central defence for the title-challenging United side.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Legia_tren_%282%29.jpg/330px-Legia_tren_%282%29.jpg"
        },
        {
          "name": "Wes Brown",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Defender",
          "shirt_number": 23,
          "age": 18,
          "fun_fact": "The young Mancunian defender broke into the first team this season, showing the raw ability that would keep him at Old Trafford for over a decade.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Wes_Brown_-_53689574832.jpg/330px-Wes_Brown_-_53689574832.jpg"
        },
        {
          "name": "Raimond van der Gouw",
          "club": "Manchester United",
          "nationality": "Dutch",
          "position": "Goalkeeper",
          "shirt_number": 13,
          "age": 34,
          "fun_fact": "The Dutch veteran goalkeeper deputised capably behind Peter Schmeichel, making crucial appearances when United's number one was unavailable.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Raimond-van-der-gouw-1398447774.jpg/330px-Raimond-van-der-gouw-1398447774.jpg"
        },
        {
          "name": "Ben Thornley",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Winger",
          "shirt_number": 24,
          "age": 22,
          "fun_fact": "The Salford-born winger's career had been disrupted by a serious knee injury, but he contributed from the bench in this title-chasing campaign.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Benjamin_Lindsay_Thornley_-_53690601886.jpg/330px-Benjamin_Lindsay_Thornley_-_53690601886.jpg"
        }
      ]
    },
    {
      "season": "1998-99",
      "players": [
        {
          "name": "Jaap Stam",
          "club": "Manchester United",
          "nationality": "Dutch",
          "position": "Defender",
          "shirt_number": 6,
          "age": 26,
          "fun_fact": "The towering Dutch defender was United's defensive cornerstone during the Treble season, his dominant aerial ability and pace making him the world's best centre back.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Jaap_Stam_-_1.jpg/330px-Jaap_Stam_-_1.jpg"
        },
        {
          "name": "Dwight Yorke",
          "club": "Manchester United",
          "nationality": "Trinidadian",
          "position": "Striker",
          "shirt_number": 19,
          "age": 27,
          "fun_fact": "The joyful Trinidadian formed the most lethal striking partnership in Europe with Andy Cole, scoring 29 goals as United claimed an historic Treble.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Dwight_Yorke_in_Chennai.jpg/330px-Dwight_Yorke_in_Chennai.jpg"
        },
        {
          "name": "Andy Cole",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Striker",
          "shirt_number": 9,
          "age": 27,
          "fun_fact": "Cole's deadly partnership with Dwight Yorke propelled United to the Treble, with the pair combining for 53 goals in all competitions that season.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Andy_Cole_in_2014.jpg/330px-Andy_Cole_in_2014.jpg"
        },
        {
          "name": "Jesper Blomqvist",
          "club": "Manchester United",
          "nationality": "Swedish",
          "position": "Winger",
          "shirt_number": 15,
          "age": 25,
          "fun_fact": "The Swedish winger started the Champions League final in Barcelona after Giggs and Keane were unavailable, part of the unforgettable Treble squad.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Jesper_Blomqvist.jpg"
        },
        {
          "name": "Philip Mulryne",
          "club": "Manchester United",
          "nationality": "Northern Irish",
          "position": "Midfielder",
          "shirt_number": 22,
          "age": 22,
          "fun_fact": "The Northern Irish international midfielder was a squad member during the Treble campaign, part of the deep pool of talent Fergie had assembled.",
          "image_url": ""
        }
      ]
    },
    {
      "season": "1999-00",
      "players": [
        {
          "name": "Mikael Silvestre",
          "club": "Manchester United",
          "nationality": "French",
          "position": "Defender",
          "shirt_number": 27,
          "age": 22,
          "fun_fact": "The French defender arrived from Inter Milan and quickly became a mainstay of United's defence as they won the title by a record 18-point margin.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Stade_rennais_-_Le_Havre_AC_20150708_57.JPG/330px-Stade_rennais_-_Le_Havre_AC_20150708_57.JPG"
        },
        {
          "name": "Mark Bosnich",
          "club": "Manchester United",
          "nationality": "Australian",
          "position": "Goalkeeper",
          "shirt_number": 1,
          "age": 27,
          "fun_fact": "The Australian goalkeeper took over from Peter Schmeichel, making 23 Premier League appearances as United cruised to a dominant title triumph.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Mark_Bosnich.jpg/330px-Mark_Bosnich.jpg"
        },
        {
          "name": "Quinton Fortune",
          "club": "Manchester United",
          "nationality": "South African",
          "position": "Midfielder",
          "shirt_number": 28,
          "age": 23,
          "fun_fact": "The South African utility player's versatility proved valuable as United set a new record points tally in winning the Premier League title.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/0/01/Fortune%2C_Quinton.jpg"
        },
        {
          "name": "Luke Chadwick",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Winger",
          "shirt_number": 27,
          "age": 19,
          "fun_fact": "The Cambridge-born winger was part of United's impressive youth pipeline, making his first-team contributions as United romped to the championship.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Chadwick%2C_Luke.jpg"
        },
        {
          "name": "Massimo Taibi",
          "club": "Manchester United",
          "nationality": "Italian",
          "position": "Goalkeeper",
          "shirt_number": 31,
          "age": 27,
          "fun_fact": "The Italian goalkeeper's brief spell became infamous after he fumbled a weak shot from Matt Le Tissier through his hands in one of football's most memorable blunders.",
          "image_url": ""
        }
      ]
    },
    {
      "season": "2000-01",
      "players": [
        {
          "name": "Fabien Barthez",
          "club": "Manchester United",
          "nationality": "French",
          "position": "Goalkeeper",
          "shirt_number": 1,
          "age": 29,
          "fun_fact": "The flamboyant World Cup-winner brought charisma and shot-stopping excellence to Old Trafford, winning the title in his first season as United claimed a third consecutive championship.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Fabien_Barthez_at_OM.jpg/330px-Fabien_Barthez_at_OM.jpg"
        },
        {
          "name": "Ronny Wallwork",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Midfielder",
          "shirt_number": 20,
          "age": 22,
          "fun_fact": "The Mancunian midfielder came through the United academy and made his contributions as the club won a third consecutive Premier League title.",
          "image_url": ""
        },
        {
          "name": "Michael Stewart",
          "club": "Manchester United",
          "nationality": "Scottish",
          "position": "Midfielder",
          "shirt_number": 21,
          "age": 19,
          "fun_fact": "The Scottish midfielder was part of United's development squad, representing the club's commitment to nurturing young homegrown talent during their dominant era.",
          "image_url": ""
        },
        {
          "name": "John Curtis",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Defender",
          "shirt_number": 27,
          "age": 22,
          "fun_fact": "The promising English right back made appearances for United during their title-winning campaign before eventually moving on to continue his career elsewhere.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/20260311-rios-516.jpg/330px-20260311-rios-516.jpg"
        },
        {
          "name": "Mark Wilson",
          "club": "Manchester United",
          "nationality": "Scottish",
          "position": "Midfielder",
          "shirt_number": 22,
          "age": 21,
          "fun_fact": "The Scottish midfielder was a product of United's renowned academy system, part of the squad that delivered a third consecutive Premier League title.",
          "image_url": ""
        }
      ]
    },
    {
      "season": "2001-02",
      "players": [
        {
          "name": "Ruud van Nistelrooy",
          "club": "Manchester United",
          "nationality": "Dutch",
          "position": "Striker",
          "shirt_number": 10,
          "age": 25,
          "fun_fact": "After missing his debut season through injury, the Dutch striker fired 23 Premier League goals in his first campaign, announcing himself as one of the deadliest finishers in the world.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Ruud_van_Nistelrooy_2017.jpg/330px-Ruud_van_Nistelrooy_2017.jpg"
        },
        {
          "name": "Juan Sebastián Verón",
          "club": "Manchester United",
          "nationality": "Argentine",
          "position": "Midfielder",
          "shirt_number": 4,
          "age": 26,
          "fun_fact": "Signed for a then-British record fee, the Argentine playmaker brought flair and vision to United's midfield despite struggling to fully adapt to the Premier League's intensity.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Juan_Sebastian_Veron_2017.jpg/330px-Juan_Sebastian_Veron_2017.jpg"
        },
        {
          "name": "Laurent Blanc",
          "club": "Manchester United",
          "nationality": "French",
          "position": "Defender",
          "shirt_number": 6,
          "age": 35,
          "fun_fact": "The World Cup winner joined on a free transfer to provide experienced cover in central defence, bringing composure and reading of the game honed over a distinguished career.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Laurent_blanc_11_11_2013_reves_de_Clara.jpg/330px-Laurent_blanc_11_11_2013_reves_de_Clara.jpg"
        },
        {
          "name": "Diego Forlán",
          "club": "Manchester United",
          "nationality": "Uruguayan",
          "position": "Striker",
          "shirt_number": 11,
          "age": 22,
          "fun_fact": "The Uruguayan striker had a difficult debut season at United before finding his feet, going on to win the PFA Fans' Player of the Year before his career flourished abroad.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/U10_Diego_Forl%C3%A1n_7524.jpg/330px-U10_Diego_Forl%C3%A1n_7524.jpg"
        },
        {
          "name": "Bojan Djordjić",
          "club": "Manchester United",
          "nationality": "Swedish",
          "position": "Midfielder",
          "shirt_number": 32,
          "age": 19,
          "fun_fact": "The Swedish-Serbian midfielder of Serbian heritage was a highly touted youth talent who had brief involvement with United's first team during this campaign.",
          "image_url": ""
        }
      ]
    },
    {
      "season": "2002-03",
      "players": [
        {
          "name": "Rio Ferdinand",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Defender",
          "shirt_number": 5,
          "age": 23,
          "fun_fact": "Signed for a British record £30 million, Ferdinand was imperious at the heart of United's defence as they clinched the Premier League title, playing with supreme elegance and pace.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Web_Summit_2015_-_Dublin%2C_Ireland_-_22183056474_%28cropped%29.jpg/330px-Web_Summit_2015_-_Dublin%2C_Ireland_-_22183056474_%28cropped%29.jpg"
        },
        {
          "name": "Roy Carroll",
          "club": "Manchester United",
          "nationality": "Northern Irish",
          "position": "Goalkeeper",
          "shirt_number": 13,
          "age": 25,
          "fun_fact": "The Northern Irish goalkeeper provided excellent cover and deputised for Barthez during the title-winning season, his most notable moment coming in the notorious 'ghost goal' controversy later.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Roy_Carroll_2012.jpg/330px-Roy_Carroll_2012.jpg"
        },
        {
          "name": "Darren Fletcher",
          "club": "Manchester United",
          "nationality": "Scottish",
          "position": "Midfielder",
          "shirt_number": 24,
          "age": 18,
          "fun_fact": "The tenacious Scottish midfielder made his United debut this season, beginning a long and decorated career at Old Trafford that would see him become club captain.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Darren_Fletcher_2017_%28cropped%29.jpg/330px-Darren_Fletcher_2017_%28cropped%29.jpg"
        },
        {
          "name": "John O'Shea",
          "club": "Manchester United",
          "nationality": "Irish",
          "position": "Defender",
          "shirt_number": 22,
          "age": 21,
          "fun_fact": "The versatile Irishman could play anywhere across the back line and in midfield, his adaptability making him invaluable to Fergie's title-winning squad.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/FIFA_WC-qualification_2014_-_Austria_vs_Ireland_2013-09-10_-_John_O%27Shea_01.jpg/330px-FIFA_WC-qualification_2014_-_Austria_vs_Ireland_2013-09-10_-_John_O%27Shea_01.jpg"
        },
        {
          "name": "Danny Pugh",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Midfielder",
          "shirt_number": 33,
          "age": 20,
          "fun_fact": "The English midfielder was part of United's development setup, a squad player contributing to the depth of talent during United's championship-winning campaign.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Danny_Pugh.jpg/330px-Danny_Pugh.jpg"
        }
      ]
    },
    {
      "season": "2003-04",
      "players": [
        {
          "name": "Tim Howard",
          "club": "Manchester United",
          "nationality": "American",
          "position": "Goalkeeper",
          "shirt_number": 1,
          "age": 24,
          "fun_fact": "The American goalkeeper made 32 Premier League appearances in his debut season, becoming the first American to play regularly for Manchester United.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Tim_Howard_2023.jpg/330px-Tim_Howard_2023.jpg"
        },
        {
          "name": "Eric Djemba-Djemba",
          "club": "Manchester United",
          "nationality": "Cameroonian",
          "position": "Midfielder",
          "shirt_number": 18,
          "age": 23,
          "fun_fact": "The energetic Cameroonian international was signed from Nantes and brought tenacity and physicality to United's midfield during this transitional period.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Eric_Djemba-Djemba_-_53690895590.jpg/330px-Eric_Djemba-Djemba_-_53690895590.jpg"
        },
        {
          "name": "Kleberson",
          "club": "Manchester United",
          "nationality": "Brazilian",
          "position": "Midfielder",
          "shirt_number": 15,
          "age": 24,
          "fun_fact": "The World Cup-winning Brazilian was signed from Atlético Paranaense after his displays in the 2002 World Cup, though he never fully established himself at Old Trafford.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Kleberson_Fla_2010.jpg/330px-Kleberson_Fla_2010.jpg"
        },
        {
          "name": "David Bellion",
          "club": "Manchester United",
          "nationality": "French",
          "position": "Striker",
          "shirt_number": 20,
          "age": 20,
          "fun_fact": "The French forward arrived from Sunderland and made his contributions as United reached the FA Cup final, scoring some important goals in cup competitions.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/David_Bellion.jpg/330px-David_Bellion.jpg"
        },
        {
          "name": "Kieran Richardson",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Midfielder",
          "shirt_number": 24,
          "age": 19,
          "fun_fact": "The technically gifted English midfielder came through the United academy and made his first-team contributions, going on to win an England cap before departing for Sunderland.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/1/18/Richardson%2C_Kieran.jpg"
        }
      ]
    },
    {
      "season": "2004-05",
      "players": [
        {
          "name": "Wayne Rooney",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Striker",
          "shirt_number": 8,
          "age": 18,
          "fun_fact": "The teenage sensation from Everton exploded onto the Old Trafford stage with a Champions League hat-trick on debut and went on to become United's all-time top scorer.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Wayne_Rooney_%2850121495731%29_%28cropped%29.jpg/330px-Wayne_Rooney_%2850121495731%29_%28cropped%29.jpg"
        },
        {
          "name": "Gabriel Heinze",
          "club": "Manchester United",
          "nationality": "Argentine",
          "position": "Defender",
          "shirt_number": 21,
          "age": 26,
          "fun_fact": "The combative Argentine left back arrived from PSG and won United's Player of the Season award in his debut campaign, bringing attacking intent and fierce determination.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Gabriel_Heinze_en_Newell%27s_Old_Boys_%282022%29.jpg/330px-Gabriel_Heinze_en_Newell%27s_Old_Boys_%282022%29.jpg"
        },
        {
          "name": "Alan Smith",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Midfielder",
          "shirt_number": 10,
          "age": 23,
          "fun_fact": "The combative English forward signed from Leeds United despite their relegation, his selfless pressing and work-rate making him a crowd favourite at Old Trafford.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Alan_Smith_MK_Dons_%28cropped%29.jpg/330px-Alan_Smith_MK_Dons_%28cropped%29.jpg"
        },
        {
          "name": "Liam Miller",
          "club": "Manchester United",
          "nationality": "Irish",
          "position": "Midfielder",
          "shirt_number": 14,
          "age": 23,
          "fun_fact": "The Republic of Ireland international joined from Celtic and made his Premier League bow for United, adding depth to Fergie's midfield options.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Liam_Miller_%28cropped%29.jpg/330px-Liam_Miller_%28cropped%29.jpg"
        },
        {
          "name": "Jonathan Spector",
          "club": "Manchester United",
          "nationality": "American",
          "position": "Defender",
          "shirt_number": 20,
          "age": 18,
          "fun_fact": "The American defender made his Premier League debut for United this season, becoming one of the club's few American players before later carving out a career in MLS.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jonathan_Spector.jpg/330px-Jonathan_Spector.jpg"
        }
      ]
    },
    {
      "season": "2005-06",
      "players": [
        {
          "name": "Edwin van der Sar",
          "club": "Manchester United",
          "nationality": "Dutch",
          "position": "Goalkeeper",
          "shirt_number": 1,
          "age": 34,
          "fun_fact": "The Dutch legend arrived on a free transfer and proved a transformative signing, beginning a six-year stint that would include four Premier League titles and a Champions League.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Edwin_van_der_Sar_2015.jpg/330px-Edwin_van_der_Sar_2015.jpg"
        },
        {
          "name": "Park Ji-sung",
          "club": "Manchester United",
          "nationality": "South Korean",
          "position": "Midfielder",
          "shirt_number": 13,
          "age": 24,
          "fun_fact": "The tireless South Korean became United's first Asian player and a cult hero at Old Trafford, his extraordinary work-rate and key big-game goals endearing him to supporters.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Park_Ji-sung_G20_Seoul_Summit_Ambassador_%28cropped%29.jpg/330px-Park_Ji-sung_G20_Seoul_Summit_Ambassador_%28cropped%29.jpg"
        },
        {
          "name": "Nemanja Vidić",
          "club": "Manchester United",
          "nationality": "Serbian",
          "position": "Defender",
          "shirt_number": 15,
          "age": 24,
          "fun_fact": "Signed from Spartak Moscow in January 2006, the Serbian centre back immediately formed what became one of football's most fearsome defensive partnerships with Rio Ferdinand.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Vidi%C4%87_%28cropped%29.jpg/330px-Vidi%C4%87_%28cropped%29.jpg"
        },
        {
          "name": "Patrice Évra",
          "club": "Manchester United",
          "nationality": "French",
          "position": "Defender",
          "shirt_number": 3,
          "age": 24,
          "fun_fact": "The French left back arrived from Monaco mid-season and became one of United's most consistent performers over eight years, winning 15 major trophies at the club.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Patrice_Evra_%2852472689279%29_%28cropped%29.jpg/330px-Patrice_Evra_%2852472689279%29_%28cropped%29.jpg"
        },
        {
          "name": "Giuseppe Rossi",
          "club": "Manchester United",
          "nationality": "Italian",
          "position": "Striker",
          "shirt_number": 26,
          "age": 18,
          "fun_fact": "The dual-nationality Italian-American striker was among United's most exciting youth prospects, earning comparisons to the greats before going on to shine at Villarreal and Fiorentina.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Giuseppe_Rossi01_%28cropped%29.jpg/330px-Giuseppe_Rossi01_%28cropped%29.jpg"
        }
      ]
    },
    {
      "season": "2006-07",
      "players": [
        {
          "name": "Michael Carrick",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Midfielder",
          "shirt_number": 16,
          "age": 25,
          "fun_fact": "Signed from Spurs for £18.6 million, Carrick's understated elegance and precise passing immediately elevated United's midfield as they clinched the Premier League title.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Michael_Carrick_cropped_%28cropped_smaller%29.jpg/330px-Michael_Carrick_cropped_%28cropped_smaller%29.jpg"
        },
        {
          "name": "Louis Saha",
          "club": "Manchester United",
          "nationality": "French",
          "position": "Striker",
          "shirt_number": 9,
          "age": 28,
          "fun_fact": "The swift French striker provided United with a potent attacking option alongside Wayne Rooney in the title-winning campaign, his pace a constant threat to defenders.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Louis_Saha_%28cropped%29.jpg/330px-Louis_Saha_%28cropped%29.jpg"
        },
        {
          "name": "Henrik Larsson",
          "club": "Manchester United",
          "nationality": "Swedish",
          "position": "Striker",
          "shirt_number": 7,
          "age": 35,
          "fun_fact": "The Swedish legend joined on a three-month loan from Helsingborg and produced a match-winning impact in the Champions League last 16 against Lille, becoming an instant fan favourite.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Henrik_Larsson_in_Jan_2014.jpg/330px-Henrik_Larsson_in_Jan_2014.jpg"
        },
        {
          "name": "Tomasz Kuszczak",
          "club": "Manchester United",
          "nationality": "Polish",
          "position": "Goalkeeper",
          "shirt_number": 26,
          "age": 24,
          "fun_fact": "The Polish goalkeeper deputised for van der Sar and made crucial saves as United won the Premier League title, most memorably saving a penalty against Everton.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Tomasz_Kuszczak_2016.jpg/330px-Tomasz_Kuszczak_2016.jpg"
        },
        {
          "name": "Chris Eagles",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Winger",
          "shirt_number": 23,
          "age": 20,
          "fun_fact": "The Blackburn-born winger was a product of United's academy who contributed from the bench as United reclaimed the Premier League title under Ferguson.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Chris_Eagles_-_1.jpg/330px-Chris_Eagles_-_1.jpg"
        }
      ]
    },
    {
      "season": "2007-08",
      "players": [
        {
          "name": "Cristiano Ronaldo",
          "club": "Manchester United",
          "nationality": "Portuguese",
          "position": "Winger",
          "shirt_number": 7,
          "age": 22,
          "fun_fact": "In the greatest season of his first United stint, Ronaldo scored 42 goals in all competitions, winning the Ballon d'Or and leading United to the Premier League and Champions League double.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/President_Donald_Trump_meets_with_Cristiano_Ronaldo_in_the_Oval_Office_%2854933344262%29_%28cropped_and_rotated%29.jpg/330px-President_Donald_Trump_meets_with_Cristiano_Ronaldo_in_the_Oval_Office_%2854933344262%29_%28cropped_and_rotated%29.jpg"
        },
        {
          "name": "Carlos Tévez",
          "club": "Manchester United",
          "nationality": "Argentine",
          "position": "Striker",
          "shirt_number": 32,
          "age": 23,
          "fun_fact": "The ferocious Argentine formed a devastating partnership with Rooney and Ronaldo, his relentless pressing and opportunist goals central to United's historic double triumph.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Carlos_Tevez_with_Argentina_November_2014_%28cropped%29.jpg/330px-Carlos_Tevez_with_Argentina_November_2014_%28cropped%29.jpg"
        },
        {
          "name": "Anderson",
          "club": "Manchester United",
          "nationality": "Brazilian",
          "position": "Midfielder",
          "shirt_number": 8,
          "age": 19,
          "fun_fact": "The dynamic Brazilian midfielder arrived from Porto for £17 million and immediately impressed with his energy, ball-winning ability and raw talent in midfield.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/4/48/Anderson_2013.jpg"
        },
        {
          "name": "Nani",
          "club": "Manchester United",
          "nationality": "Portuguese",
          "position": "Winger",
          "shirt_number": 17,
          "age": 21,
          "fun_fact": "Signed alongside Anderson from Sporting Lisbon, the tricky Portuguese winger brought dazzling skill and direct running that would light up Old Trafford for nearly a decade.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/New_Zealand-Portugal_Nani.jpg/330px-New_Zealand-Portugal_Nani.jpg"
        },
        {
          "name": "Owen Hargreaves",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Midfielder",
          "shirt_number": 4,
          "age": 26,
          "fun_fact": "The combative England international finally got his dream move from Bayern Munich and delivered his best Premier League performances in United's title and Champions League winning season.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/O_Hargreaves.jpg/330px-O_Hargreaves.jpg"
        }
      ]
    },
    {
      "season": "2008-09",
      "players": [
        {
          "name": "Dimitar Berbatov",
          "club": "Manchester United",
          "nationality": "Bulgarian",
          "position": "Striker",
          "shirt_number": 9,
          "age": 27,
          "fun_fact": "The elegant Bulgarian joined from Spurs for £30 million and contributed 14 league goals, including a stunning hat-trick against Liverpool, as United won the Premier League title.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Dimitar_Berbatov_-_53689576017.jpg/330px-Dimitar_Berbatov_-_53689576017.jpg"
        },
        {
          "name": "Fábio da Silva",
          "club": "Manchester United",
          "nationality": "Brazilian",
          "position": "Defender",
          "shirt_number": 20,
          "age": 18,
          "fun_fact": "One half of the Brazilian twins who joined United from Fluminense, Fábio made his Premier League debut this season as United retained their league crown.",
          "image_url": ""
        },
        {
          "name": "Jonny Evans",
          "club": "Manchester United",
          "nationality": "Northern Irish",
          "position": "Defender",
          "shirt_number": 23,
          "age": 20,
          "fun_fact": "The young Northern Irish centre back broke into the first team and impressed with his calmness and reading of the game as United won their 18th league title.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Jonny_Evans%2C_CZE-NIR_2019-10-14_%283%29_%28cropped%29.jpg/330px-Jonny_Evans%2C_CZE-NIR_2019-10-14_%283%29_%28cropped%29.jpg"
        },
        {
          "name": "Fraizer Campbell",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Striker",
          "shirt_number": 29,
          "age": 20,
          "fun_fact": "The young English striker impressed on loan before eventually signing permanently, his goals and energy bringing him to wide attention in the title-winning season.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Fraizer_Campbell_2018_%28cropped%29.jpg/330px-Fraizer_Campbell_2018_%28cropped%29.jpg"
        },
        {
          "name": "Rodrigo Possebon",
          "club": "Manchester United",
          "nationality": "Brazilian",
          "position": "Midfielder",
          "shirt_number": 22,
          "age": 19,
          "fun_fact": "The Brazilian midfielder was one of the most highly rated youngsters in Europe when United signed him from Internacional, representing the club's ambitious youth recruitment.",
          "image_url": ""
        }
      ]
    },
    {
      "season": "2009-10",
      "players": [
        {
          "name": "Antonio Valencia",
          "club": "Manchester United",
          "nationality": "Ecuadorian",
          "position": "Winger",
          "shirt_number": 25,
          "age": 23,
          "fun_fact": "Signed from Wigan for £16 million, the Ecuadorian's pace and precision crossing immediately made him one of the Premier League's most effective wide players.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/AntonioValencia2022.jpg/330px-AntonioValencia2022.jpg"
        },
        {
          "name": "Michael Owen",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Striker",
          "shirt_number": 7,
          "age": 29,
          "fun_fact": "The former Liverpool and Real Madrid striker joined on a free transfer and delivered the most dramatic moment of the season — a last-minute winner against rivals Manchester City.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Michael_Owen.jpg/330px-Michael_Owen.jpg"
        },
        {
          "name": "Mame Biram Diouf",
          "club": "Manchester United",
          "nationality": "Senegalese",
          "position": "Striker",
          "shirt_number": 20,
          "age": 21,
          "fun_fact": "The Senegalese striker joined from Molde — the same club that would later produce Erling Haaland — and made his mark as a lively squad player for United.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Mame_Biram_Diouf.jpg"
        },
        {
          "name": "Gabriel Obertan",
          "club": "Manchester United",
          "nationality": "French",
          "position": "Winger",
          "shirt_number": 26,
          "age": 20,
          "fun_fact": "The French winger signed from Bordeaux and made his Premier League appearances for United, his raw pace giving him potential that promised much for the future.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Gabbyobertan.jpg/330px-Gabbyobertan.jpg"
        },
        {
          "name": "Ritchie De Laet",
          "club": "Manchester United",
          "nationality": "Belgian",
          "position": "Defender",
          "shirt_number": 31,
          "age": 21,
          "fun_fact": "The Belgian full back was part of United's defensive depth during this period, capable of playing on both flanks and representing excellent squad depth for Fergie.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/7/75/Ritchie_De_Laet-Carrington%2CApril2010.jpg"
        }
      ]
    },
    {
      "season": "2010-11",
      "players": [
        {
          "name": "Javier Hernández",
          "club": "Manchester United",
          "nationality": "Mexican",
          "position": "Striker",
          "shirt_number": 14,
          "age": 22,
          "fun_fact": "Chicharito became United's super-sub supreme in his debut season, scoring 20 goals including crucial Champions League strikes, and becoming the first Mexican to win the Premier League.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Hertha_BSC_vs._West_Ham_United_20190731_%28139%29.jpg/330px-Hertha_BSC_vs._West_Ham_United_20190731_%28139%29.jpg"
        },
        {
          "name": "Chris Smalling",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Defender",
          "shirt_number": 12,
          "age": 20,
          "fun_fact": "The former Maidstone United defender joined from Fulham and quickly established himself in the Premier League title-winning squad, beginning a long United career.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/CSKA-MU_2017_%2815%29.jpg/330px-CSKA-MU_2017_%2815%29.jpg"
        },
        {
          "name": "Bébe",
          "club": "Manchester United",
          "nationality": "Portuguese",
          "position": "Winger",
          "shirt_number": 9,
          "age": 19,
          "fun_fact": "The Portuguese winger became one of football's most discussed signings — bought for £7.4 million from a homeless shelter to Old Trafford — in one of Fergie's most unconventional transfers.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Tiago_Manuel_Dias_Correia.JPG/330px-Tiago_Manuel_Dias_Correia.JPG"
        },
        {
          "name": "Anders Lindegaard",
          "club": "Manchester United",
          "nationality": "Danish",
          "position": "Goalkeeper",
          "shirt_number": 13,
          "age": 26,
          "fun_fact": "The Danish goalkeeper arrived from Aalesund as long-term competition for van der Sar, making his early appearances as United won a record 19th league title.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Anders_Lindegaard_2016.jpg/330px-Anders_Lindegaard_2016.jpg"
        },
        {
          "name": "Darron Gibson",
          "club": "Manchester United",
          "nationality": "Irish",
          "position": "Midfielder",
          "shirt_number": 18,
          "age": 23,
          "fun_fact": "The Republic of Ireland international midfielder was a regular squad member and made his contributions as United won their 19th and record-breaking First Division/Premier League title.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Darron_Gibson_2012_Sopot.jpg/330px-Darron_Gibson_2012_Sopot.jpg"
        }
      ]
    },
    {
      "season": "2011-12",
      "players": [
        {
          "name": "David de Gea",
          "club": "Manchester United",
          "nationality": "Spanish",
          "position": "Goalkeeper",
          "shirt_number": 1,
          "age": 20,
          "fun_fact": "Signed from Atlético Madrid for £17.8 million, the young Spaniard had a difficult start to life in England before becoming one of the world's best goalkeepers over the next decade.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/David_de_Gea_2017.jpg/330px-David_de_Gea_2017.jpg"
        },
        {
          "name": "Ashley Young",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Winger",
          "shirt_number": 18,
          "age": 26,
          "fun_fact": "Signed from Aston Villa for £15 million, the versatile English winger offered width and directness as United dramatically lost the title to Manchester City on goal difference.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Ashley_Young_2018-06-13_1.jpg/330px-Ashley_Young_2018-06-13_1.jpg"
        },
        {
          "name": "Phil Jones",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Defender",
          "shirt_number": 4,
          "age": 19,
          "fun_fact": "Purchased from Blackburn for £16.5 million, the young English defender was earmarked as a future United captain by Sir Alex Ferguson in one of his boldest predictions.",
          "image_url": ""
        },
        {
          "name": "Tom Cleverley",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Midfielder",
          "shirt_number": 23,
          "age": 22,
          "fun_fact": "The promising English midfielder had an excellent first full season at United, showing the technique and intelligence that made Ferguson believe he would be a future England regular.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Tom_Cleverley_2015.jpg/330px-Tom_Cleverley_2015.jpg"
        },
        {
          "name": "Danny Welbeck",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Striker",
          "shirt_number": 19,
          "age": 21,
          "fun_fact": "The versatile Manchester-born forward showed his considerable talent in United's title race campaign, his energy and goal-scoring ability making him a popular figure at Old Trafford.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Danny_Welbeck_2018-06-13_1.jpg/330px-Danny_Welbeck_2018-06-13_1.jpg"
        }
      ]
    },
    {
      "season": "2012-13",
      "players": [
        {
          "name": "Robin van Persie",
          "club": "Manchester United",
          "nationality": "Dutch",
          "position": "Striker",
          "shirt_number": 20,
          "age": 29,
          "fun_fact": "Signed from Arsenal for £24 million, van Persie's 26 league goals — including a stunning volley against Villa — were the defining factor in United's 20th and final title under Sir Alex Ferguson.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Loco-Fener_%2810%29.jpg/330px-Loco-Fener_%2810%29.jpg"
        },
        {
          "name": "Shinji Kagawa",
          "club": "Manchester United",
          "nationality": "Japanese",
          "position": "Midfielder",
          "shirt_number": 26,
          "age": 23,
          "fun_fact": "The Japanese international midfielder arrived from Borussia Dortmund and showed his quality with a hat-trick against Norwich in one of Old Trafford's most celebrated individual performances.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Shinji_Kagawa_2018_%28cropped%29.jpg/330px-Shinji_Kagawa_2018_%28cropped%29.jpg"
        },
        {
          "name": "Nick Powell",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Midfielder",
          "shirt_number": 25,
          "age": 18,
          "fun_fact": "The highly-rated English youngster joined from Crewe and scored a stunning debut goal against Wigan, marking himself out as one of the most exciting talents in United's academy.",
          "image_url": ""
        },
        {
          "name": "Alexander Büttner",
          "club": "Manchester United",
          "nationality": "Dutch",
          "position": "Defender",
          "shirt_number": 3,
          "age": 23,
          "fun_fact": "The Dutch left back signed from Vitesse as left-back cover, becoming a popular figure with supporters during his time at Old Trafford in United's final title-winning campaign.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Dinamo-Rostov_%281%29.jpg/330px-Dinamo-Rostov_%281%29.jpg"
        },
        {
          "name": "Wilfried Zaha",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Winger",
          "shirt_number": 11,
          "age": 20,
          "fun_fact": "Signed from Crystal Palace for £10 million in January 2013, the dual-nationality English winger was loaned back to Palace after the season — his United career never truly began.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Wilfried_Zaha_NYCFC_v_Charlotte_20_Sep_2025-022_%28cropped%29.jpg/330px-Wilfried_Zaha_NYCFC_v_Charlotte_20_Sep_2025-022_%28cropped%29.jpg"
        }
      ]
    },
    {
      "season": "2013-14",
      "players": [
        {
          "name": "Marouane Fellaini",
          "club": "Manchester United",
          "nationality": "Belgian",
          "position": "Midfielder",
          "shirt_number": 27,
          "age": 25,
          "fun_fact": "David Moyes's first signing as United manager — brought from Everton on deadline day for £27.5 million — became a symbol of the post-Fergie transition and Moyes's difficult reign.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Marouane_Fellaini_2018.jpg/330px-Marouane_Fellaini_2018.jpg"
        },
        {
          "name": "Juan Mata",
          "club": "Manchester United",
          "nationality": "Spanish",
          "position": "Midfielder",
          "shirt_number": 8,
          "age": 25,
          "fun_fact": "Signed from Chelsea for a then-club record £37.1 million in January 2014, the creative Spaniard brought quality and composure to United's struggling midfield under Moyes.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Juan_Mata_Melbourne_Victory_Signing_Press_Conference.png/330px-Juan_Mata_Melbourne_Victory_Signing_Press_Conference.png"
        },
        {
          "name": "Adnan Januzaj",
          "club": "Manchester United",
          "nationality": "Belgian",
          "position": "Winger",
          "shirt_number": 11,
          "age": 18,
          "fun_fact": "The Belgian-Kosovan winger burst onto the scene with two goals against Sunderland in October 2013, sparking a debate about international eligibility and enormous expectations.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Januzaj_and_Hazard_%28cropped%29_%28cropped%29.jpg/330px-Januzaj_and_Hazard_%28cropped%29_%28cropped%29.jpg"
        },
        {
          "name": "Rafael da Silva",
          "club": "Manchester United",
          "nationality": "Brazilian",
          "position": "Defender",
          "shirt_number": 22,
          "age": 23,
          "fun_fact": "The energetic Brazilian right back was one of United's better performers in the difficult post-Ferguson season under David Moyes, his attacking instincts and recovery speed standing out.",
          "image_url": ""
        },
        {
          "name": "Michael Keane",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Defender",
          "shirt_number": 5,
          "age": 20,
          "fun_fact": "The tall English centre back from Stockport came through United's academy and began making his mark on the first team, eventually departing to flourish at Burnley and Everton.",
          "image_url": ""
        }
      ]
    },
    {
      "season": "2014-15",
      "players": [
        {
          "name": "Ángel Di María",
          "club": "Manchester United",
          "nationality": "Argentine",
          "position": "Winger",
          "shirt_number": 7,
          "age": 26,
          "fun_fact": "Signed for a then-British record £59.7 million, the Argentine wizard dazzled on his debut but struggled with form and personal issues before a disappointing single season at Old Trafford.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/NIG-ARG_%285%29.jpg/330px-NIG-ARG_%285%29.jpg"
        },
        {
          "name": "Radamel Falcao",
          "club": "Manchester United",
          "nationality": "Colombian",
          "position": "Striker",
          "shirt_number": 9,
          "age": 28,
          "fun_fact": "One of the world's best strikers arrived on loan from Monaco but a serious knee injury hampered him, and his time at United proved one of football's great unfulfilled transfers.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Radamel_Falcao_Garc%C3%ADa_%28cropped%29.jpg/330px-Radamel_Falcao_Garc%C3%ADa_%28cropped%29.jpg"
        },
        {
          "name": "Luke Shaw",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Defender",
          "shirt_number": 23,
          "age": 19,
          "fun_fact": "Signed from Southampton for up to £30 million, the teenage England left back showed his enormous potential before a devastating double leg fracture curtailed his first major season.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Luke_Shaw%2C_Manchester_United_v_Newcastle_United%2C_11_September_2021_%2844%29_%28cropped%29.jpg/330px-Luke_Shaw%2C_Manchester_United_v_Newcastle_United%2C_11_September_2021_%2844%29_%28cropped%29.jpg"
        },
        {
          "name": "Marcos Rojo",
          "club": "Manchester United",
          "nationality": "Argentine",
          "position": "Defender",
          "shirt_number": 5,
          "age": 24,
          "fun_fact": "The combative Argentine defender arrived from Sporting CP and became a regular in United's defence, his physicality and aerial prowess making him a useful squad member.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Marcos_Rojo_2018.jpg/330px-Marcos_Rojo_2018.jpg"
        },
        {
          "name": "Ander Herrera",
          "club": "Manchester United",
          "nationality": "Spanish",
          "position": "Midfielder",
          "shirt_number": 21,
          "age": 24,
          "fun_fact": "The Spanish midfielder from Athletic Club arrived to add energy and technical quality to United's midfield, going on to become a crucial player and fans' favourite under Mourinho.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93282_%28cropped%29.jpg/330px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93282_%28cropped%29.jpg"
        }
      ]
    },
    {
      "season": "2015-16",
      "players": [
        {
          "name": "Memphis Depay",
          "club": "Manchester United",
          "nationality": "Dutch",
          "position": "Winger",
          "shirt_number": 7,
          "age": 21,
          "fun_fact": "Signed from PSV for £25 million after a stellar season, the Dutch forward's United career never lived up to his immense potential despite early promise, before he flourished at Lyon.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Memphis_Depay_2019.jpg/330px-Memphis_Depay_2019.jpg"
        },
        {
          "name": "Morgan Schneiderlin",
          "club": "Manchester United",
          "nationality": "French",
          "position": "Midfielder",
          "shirt_number": 28,
          "age": 25,
          "fun_fact": "The French holding midfielder signed from Southampton and provided exactly the defensive cover in midfield that United had long been searching for during a difficult transition period.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Morgan_Schneiderlin_-_France_v_Armenia_2014.jpg/330px-Morgan_Schneiderlin_-_France_v_Armenia_2014.jpg"
        },
        {
          "name": "Matteo Darmian",
          "club": "Manchester United",
          "nationality": "Italian",
          "position": "Defender",
          "shirt_number": 36,
          "age": 25,
          "fun_fact": "The Italian full back arrived from Torino and proved a reliable and technically accomplished player in the right back position during United's fifth-place finish under Van Gaal.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/20150616_-_Portugal_-_Italie_-_Gen%C3%A8ve_-_Matteo_Darmian_1.jpg/330px-20150616_-_Portugal_-_Italie_-_Gen%C3%A8ve_-_Matteo_Darmian_1.jpg"
        },
        {
          "name": "Bastian Schweinsteiger",
          "club": "Manchester United",
          "nationality": "German",
          "position": "Midfielder",
          "shirt_number": 31,
          "age": 31,
          "fun_fact": "The World Cup-winning German captain arrived from Bayern Munich as one of the most decorated players in European football, though injuries limited his impact at Old Trafford.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Re-publica_23_-_Tag_3_%2852957826298%29_%28cropped%29.jpg/330px-Re-publica_23_-_Tag_3_%2852957826298%29_%28cropped%29.jpg"
        },
        {
          "name": "Marcus Rashford",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Striker",
          "shirt_number": 39,
          "age": 18,
          "fun_fact": "The local-born teenager burst onto the scene against Midtjylland in the Europa League, then scored on his Premier League debut against Arsenal — one of the most extraordinary first-week careers in football history.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Marcus_Rashford_in_2023.jpg/330px-Marcus_Rashford_in_2023.jpg"
        }
      ]
    },
    {
      "season": "2016-17",
      "players": [
        {
          "name": "Paul Pogba",
          "club": "Manchester United",
          "nationality": "French",
          "position": "Midfielder",
          "shirt_number": 6,
          "age": 23,
          "fun_fact": "Rejoined for a then-world record £89 million, the French midfielder won the League Cup and Europa League under Mourinho in his first season back, dividing opinion with his mix of genius and inconsistency.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Paul_Pogba_at_the_2025_Cannes_Film_Festival_02.jpg/330px-Paul_Pogba_at_the_2025_Cannes_Film_Festival_02.jpg"
        },
        {
          "name": "Henrikh Mkhitaryan",
          "club": "Manchester United",
          "nationality": "Armenian",
          "position": "Midfielder",
          "shirt_number": 22,
          "age": 27,
          "fun_fact": "The Armenian playmaker signed from Dortmund for £26.3 million and was key to United winning the Europa League, his thunderous volley against Celta Vigo being a season highlight.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Henrikh_Mkhitaryan_2017.jpg/330px-Henrikh_Mkhitaryan_2017.jpg"
        },
        {
          "name": "Eric Bailly",
          "club": "Manchester United",
          "nationality": "Ivorian",
          "position": "Defender",
          "shirt_number": 3,
          "age": 22,
          "fun_fact": "Mourinho's first signing, the Ivorian centre back arrived from Villarreal for £30 million and impressed in his debut season with his physical power and aggressive defending.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Eric_Bailly_in_2023_%28cropped%29.jpg/330px-Eric_Bailly_in_2023_%28cropped%29.jpg"
        },
        {
          "name": "Zlatan Ibrahimović",
          "club": "Manchester United",
          "nationality": "Swedish",
          "position": "Striker",
          "shirt_number": 9,
          "age": 34,
          "fun_fact": "The legendary Swede joined on a free transfer at 34 and delivered 28 goals in all competitions, his charisma and character energising Old Trafford as United won the Europa League.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Zlatan_Ibrahimovi%C4%87_June_2018.jpg/330px-Zlatan_Ibrahimovi%C4%87_June_2018.jpg"
        },
        {
          "name": "Daley Blind",
          "club": "Manchester United",
          "nationality": "Dutch",
          "position": "Defender",
          "shirt_number": 17,
          "age": 26,
          "fun_fact": "The Dutch international had arrived in 2014 and proved his versatility playing in midfield and defence, helping United win the Europa League under Mourinho.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Zarya-MU_%286%29_%E2%80%94_%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg"
        }
      ]
    },
    {
      "season": "2017-18",
      "players": [
        {
          "name": "Romelu Lukaku",
          "club": "Manchester United",
          "nationality": "Belgian",
          "position": "Striker",
          "shirt_number": 9,
          "age": 24,
          "fun_fact": "Signed from Everton for £75 million, the powerful Belgian striker hit the ground running with 27 goals in all competitions, his physicality and hold-up play giving United a powerful focal point.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Romelu_Lukaku_2021.jpg/330px-Romelu_Lukaku_2021.jpg"
        },
        {
          "name": "Victor Lindelöf",
          "club": "Manchester United",
          "nationality": "Swedish",
          "position": "Defender",
          "shirt_number": 2,
          "age": 22,
          "fun_fact": "The elegant Swedish centre back arrived from Benfica for £30 million and developed into one of United's most reliable defenders, becoming a key figure under multiple managers.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Sweden-Slovenia_Nations_League_2022-09-27_6_%28Victor_Lindelof%2C_cropped%29.jpg/330px-Sweden-Slovenia_Nations_League_2022-09-27_6_%28Victor_Lindelof%2C_cropped%29.jpg"
        },
        {
          "name": "Nemanja Matic",
          "club": "Manchester United",
          "nationality": "Serbian",
          "position": "Midfielder",
          "shirt_number": 31,
          "age": 29,
          "fun_fact": "The commanding Serbian midfielder followed Mourinho from Chelsea for £40 million and provided the defensive midfield anchor United had craved, shielding the back four with authority.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/8/86/Nemanja_Mati%C4%87_2018_%28cropped%29.jpg"
        },
        {
          "name": "Alexis Sánchez",
          "club": "Manchester United",
          "nationality": "Chilean",
          "position": "Winger",
          "shirt_number": 7,
          "age": 29,
          "fun_fact": "Arrived in a high-profile swap deal with Mkhitaryan from Arsenal in January 2018, although his enormous wages and inconsistent form made the transfer one of the most divisive in United's recent history.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Alexis_S%C3%A1nchez_2017.jpg/330px-Alexis_S%C3%A1nchez_2017.jpg"
        },
        {
          "name": "Scott McTominay",
          "club": "Manchester United",
          "nationality": "Scottish",
          "position": "Midfielder",
          "shirt_number": 39,
          "age": 20,
          "fun_fact": "The Manchester-born Scottish international made his league debut this season and won Sir Alex Ferguson's appreciation — the legendary manager called him an 'outstanding young man' in his first senior appearance.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Manchester_United_v_Liverpool%2C_22_August_2022_%2821%29_%28Scott_McTominay%29.jpg/330px-Manchester_United_v_Liverpool%2C_22_August_2022_%2821%29_%28Scott_McTominay%29.jpg"
        }
      ]
    },
    {
      "season": "2018-19",
      "players": [
        {
          "name": "Fred",
          "club": "Manchester United",
          "nationality": "Brazilian",
          "position": "Midfielder",
          "shirt_number": 17,
          "age": 25,
          "fun_fact": "Signed for £52 million from Shakhtar Donetsk, the Brazilian struggled initially but developed into a dependable squad player whose engine and work-rate eventually won over the Old Trafford crowd.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Fred_Brazil_%28cropped%29.jpg"
        },
        {
          "name": "Diogo Dalot",
          "club": "Manchester United",
          "nationality": "Portuguese",
          "position": "Defender",
          "shirt_number": 20,
          "age": 19,
          "fun_fact": "Signed from Porto for £19 million, the Portuguese right back showed his attacking instincts and versatility in his debut season under José Mourinho and then Ole Gunnar Solskjær.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Diogo_Dalot_USMNT_v_Portugal_Mar_31_2026-12.jpg/330px-Diogo_Dalot_USMNT_v_Portugal_Mar_31_2026-12.jpg"
        },
        {
          "name": "Lee Grant",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Goalkeeper",
          "shirt_number": 13,
          "age": 35,
          "fun_fact": "The experienced English goalkeeper was signed as third-choice backup, his calm professionalism providing crucial squad depth during a turbulent season that saw two managers.",
          "image_url": ""
        },
        {
          "name": "Andreas Pereira",
          "club": "Manchester United",
          "nationality": "Brazilian",
          "position": "Midfielder",
          "shirt_number": 15,
          "age": 22,
          "fun_fact": "The Belgian-born Brazilian midfielder with Brazilian and Belgian heritage made regular appearances during this difficult season as United searched for consistency and direction.",
          "image_url": ""
        },
        {
          "name": "Tahith Chong",
          "club": "Manchester United",
          "nationality": "Dutch",
          "position": "Winger",
          "shirt_number": 45,
          "age": 18,
          "fun_fact": "The Dutch-born Curaçaoan winger was one of United's most exciting youth prospects, making his Premier League debut this season after a stunning FA Youth Cup campaign.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Tahith_Chong_%2838487929362%29.jpg/330px-Tahith_Chong_%2838487929362%29.jpg"
        }
      ]
    },
    {
      "season": "2019-20",
      "players": [
        {
          "name": "Harry Maguire",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Defender",
          "shirt_number": 5,
          "age": 26,
          "fun_fact": "Signed for a world-record £80 million for a defender, the tall English centre back from Sheffield became United's captain and a commanding presence in defence under Solskjær.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Harry_Maguire_2023_%28cropped%29.jpg/330px-Harry_Maguire_2023_%28cropped%29.jpg"
        },
        {
          "name": "Aaron Wan-Bissaka",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Defender",
          "shirt_number": 29,
          "age": 21,
          "fun_fact": "Signed from Crystal Palace for £50 million, the young English right back's extraordinary tackling ability and one-on-one defending made him one of the Premier League's most discussed defenders.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Aaron_Wan-Bissaka_of_West_Ham_United.jpeg/330px-Aaron_Wan-Bissaka_of_West_Ham_United.jpeg"
        },
        {
          "name": "Daniel James",
          "club": "Manchester United",
          "nationality": "Welsh",
          "position": "Winger",
          "shirt_number": 21,
          "age": 21,
          "fun_fact": "The Welsh winger arrived from Swansea City for £18 million and lit up Old Trafford with his pace and directness, scoring a memorable debut goal at Southampton on the opening day.",
          "image_url": ""
        },
        {
          "name": "Bruno Fernandes",
          "club": "Manchester United",
          "nationality": "Portuguese",
          "position": "Midfielder",
          "shirt_number": 18,
          "age": 25,
          "fun_fact": "Signed from Sporting CP for £47 million in January 2020, the Portuguese playmaker immediately transformed United's performances with 12 goals and 8 assists in a half-season of brilliance.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Bruno_Fernandes_USMNT_v_Portugal_Mar_31_2026-27_%28cropped%29.jpg/330px-Bruno_Fernandes_USMNT_v_Portugal_Mar_31_2026-27_%28cropped%29.jpg"
        },
        {
          "name": "Odion Ighalo",
          "club": "Manchester United",
          "nationality": "Nigerian",
          "position": "Striker",
          "shirt_number": 25,
          "age": 30,
          "fun_fact": "The Nigerian striker became one of football's most heart-warming stories — a lifelong United fan signed on loan deadline day — becoming the first Nigerian to score for United.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Odion_Ighalo_24.jpeg/330px-Odion_Ighalo_24.jpeg"
        }
      ]
    },
    {
      "season": "2020-21",
      "players": [
        {
          "name": "Edinson Cavani",
          "club": "Manchester United",
          "nationality": "Uruguayan",
          "position": "Striker",
          "shirt_number": 7,
          "age": 33,
          "fun_fact": "The Uruguayan legend joined on a free transfer from PSG and won United's Player of the Year award with his lethal finishing, work-rate and genuine star quality making him a cult hero.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Edinson_Cavani_2018_%28cropped%29.jpg/330px-Edinson_Cavani_2018_%28cropped%29.jpg"
        },
        {
          "name": "Alex Telles",
          "club": "Manchester United",
          "nationality": "Brazilian",
          "position": "Defender",
          "shirt_number": 27,
          "age": 27,
          "fun_fact": "The Brazilian left back signed from Porto for £15.4 million and brought attacking intent and a venomous free-kick technique that gave United a different dimension down the left flank.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Alex_Telles_2021.jpg/330px-Alex_Telles_2021.jpg"
        },
        {
          "name": "Donny van de Beek",
          "club": "Manchester United",
          "nationality": "Dutch",
          "position": "Midfielder",
          "shirt_number": 34,
          "age": 23,
          "fun_fact": "Signed from Ajax for £40 million, the Dutch midfielder's loan from Everton to United was plagued by minimal appearances and he never recovered his Ajax form at Old Trafford.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Donny_van_de_Beek_2021_%28cropped%29.jpg/330px-Donny_van_de_Beek_2021_%28cropped%29.jpg"
        },
        {
          "name": "Amad Diallo",
          "club": "Manchester United",
          "nationality": "Ivorian",
          "position": "Winger",
          "shirt_number": 19,
          "age": 18,
          "fun_fact": "The Ivorian teenager arrived from Atalanta in January 2021 for up to £37 million and marked his debut with a goal in the Champions League against Milan, promising enormous things.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Manchester_United_v_BSC_Young_Boys%2C_8_December_2021_%2817%29_%28cropped%29.jpg/330px-Manchester_United_v_BSC_Young_Boys%2C_8_December_2021_%2817%29_%28cropped%29.jpg"
        },
        {
          "name": "Dean Henderson",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Goalkeeper",
          "shirt_number": 26,
          "age": 23,
          "fun_fact": "The English goalkeeper returned from his successful loan at Sheffield United and was seen as the long-term successor to de Gea, making a strong case for the number one shirt.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Dean_Henderson.jpg/330px-Dean_Henderson.jpg"
        }
      ]
    },
    {
      "season": "2021-22",
      "players": [
        {
          "name": "Jadon Sancho",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Winger",
          "shirt_number": 25,
          "age": 21,
          "fun_fact": "Signed for £73 million from Borussia Dortmund in a deal that had been anticipated for two years, the English winger had a difficult debut season before finding his best form the following year.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Manchester_United_v_Liverpool%2C_22_August_2022_%2833%29_%28cropped%29.jpg/330px-Manchester_United_v_Liverpool%2C_22_August_2022_%2833%29_%28cropped%29.jpg"
        },
        {
          "name": "Raphaël Varane",
          "club": "Manchester United",
          "nationality": "French",
          "position": "Defender",
          "shirt_number": 19,
          "age": 28,
          "fun_fact": "The World Cup and four-time Champions League winner arrived from Real Madrid for £42 million and initially formed a formidable central defensive partnership with Harry Maguire.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Rapha%C3%ABl_Varane_2018_%28cropped%29.jpg"
        },
        {
          "name": "Jesse Lingard",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Midfielder",
          "shirt_number": 14,
          "age": 29,
          "fun_fact": "The Warrington-born forward had one of his most influential seasons in a United shirt after returning from his brilliant loan at West Ham, though he left on a free transfer that summer.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/240609_FC_%EC%84%9C%EC%9A%B8_%ED%8C%AC%EC%82%AC%EC%9D%B8%ED%9A%8C_%28Jesse_Lingard%29.jpg/330px-240609_FC_%EC%84%9C%EC%9A%B8_%ED%8C%AC%EC%82%AC%EC%9D%B8%ED%9A%8C_%28Jesse_Lingard%29.jpg"
        },
        {
          "name": "Tom Heaton",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Goalkeeper",
          "shirt_number": 22,
          "age": 35,
          "fun_fact": "The veteran English goalkeeper returned to United — his boyhood club — as experienced third-choice cover, providing valuable backup during a turbulent season under multiple managers.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Tom_Heaton_playing_for_Burnley_%28cropped%29.jpg/330px-Tom_Heaton_playing_for_Burnley_%28cropped%29.jpg"
        },
        {
          "name": "Hannibal Mejbri",
          "club": "Manchester United",
          "nationality": "Tunisian",
          "position": "Midfielder",
          "shirt_number": 46,
          "age": 18,
          "fun_fact": "The highly-rated Tunisian teenager began breaking into the first-team picture, his technical ability and combative style drawing comparisons to Samir Nasri and exciting United's coaching staff.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Hannibal_Mejbri_26042025_%281%29.jpg/330px-Hannibal_Mejbri_26042025_%281%29.jpg"
        }
      ]
    },
    {
      "season": "2022-23",
      "players": [
        {
          "name": "Casemiro",
          "club": "Manchester United",
          "nationality": "Brazilian",
          "position": "Midfielder",
          "shirt_number": 18,
          "age": 30,
          "fun_fact": "Signed from Real Madrid for £60 million, the Brazilian defensive midfielder transformed United's midfield with his composure, positioning and winning mentality from nine Champions League campaigns.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Casemiro_Brazil_Austria_June_2018.jpg/330px-Casemiro_Brazil_Austria_June_2018.jpg"
        },
        {
          "name": "Antony",
          "club": "Manchester United",
          "nationality": "Brazilian",
          "position": "Winger",
          "shirt_number": 21,
          "age": 22,
          "fun_fact": "Signed from Ajax for £85 million — United's second most expensive transfer ever — the Brazilian winger scored on his debut and brought directness and creativity to the attack.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Antony_2022.jpg/330px-Antony_2022.jpg"
        },
        {
          "name": "Lisandro Martínez",
          "club": "Manchester United",
          "nationality": "Argentine",
          "position": "Defender",
          "shirt_number": 6,
          "age": 24,
          "fun_fact": "Signed from Ajax for £57 million, the Argentine World Cup winner immediately endeared himself to the Old Trafford crowd with his aggressive defending and passionate leadership.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Lisandro_Martinez_2022.jpg/330px-Lisandro_Martinez_2022.jpg"
        },
        {
          "name": "Christian Eriksen",
          "club": "Manchester United",
          "nationality": "Danish",
          "position": "Midfielder",
          "shirt_number": 14,
          "age": 30,
          "fun_fact": "The Danish playmaker joined on a free transfer after his miraculous recovery from cardiac arrest at Euro 2020, contributing creativity and experience to United's midfield.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/d/d8/EriksenTottenham2016%28cropped%29_2.jpg"
        },
        {
          "name": "Tyrell Malacia",
          "club": "Manchester United",
          "nationality": "Dutch",
          "position": "Defender",
          "shirt_number": 12,
          "age": 22,
          "fun_fact": "Signed from Feyenoord for £13 million, the energetic Dutch left back impressed in his debut season with his tireless running and composure in possession, winning over the United faithful.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/FC_Red_Bull_Salzburg_gegen_Feyenoord_Rotterdam_%28Testspiel_12._Juli_2019%29_12.jpg/330px-FC_Red_Bull_Salzburg_gegen_Feyenoord_Rotterdam_%28Testspiel_12._Juli_2019%29_12.jpg"
        }
      ]
    },
    {
      "season": "2023-24",
      "players": [
        {
          "name": "Rasmus Højlund",
          "club": "Manchester United",
          "nationality": "Danish",
          "position": "Striker",
          "shirt_number": 11,
          "age": 20,
          "fun_fact": "Signed from Atalanta for £72 million, the Danish striker broke Wayne Rooney's record by becoming the youngest player to score in six consecutive Champions League games.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Rasmus_H%C3%B8jlund_with_a_fan.jpg"
        },
        {
          "name": "André Onana",
          "club": "Manchester United",
          "nationality": "Cameroonian",
          "position": "Goalkeeper",
          "shirt_number": 24,
          "age": 27,
          "fun_fact": "Signed from Inter Milan for £47 million after his Champions League final display, the Cameroonian goalkeeper brought a modern, ball-playing style — though his first season was inconsistent.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Andr%C3%A9_Onana.jpg/330px-Andr%C3%A9_Onana.jpg"
        },
        {
          "name": "Kobbie Mainoo",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Midfielder",
          "shirt_number": 37,
          "age": 18,
          "fun_fact": "The Stockport-born academy product burst onto the scene and became one of the Premier League's most exciting young talents, earning England recognition before his 19th birthday.",
          "image_url": ""
        },
        {
          "name": "Mason Mount",
          "club": "Manchester United",
          "nationality": "English",
          "position": "Midfielder",
          "shirt_number": 7,
          "age": 24,
          "fun_fact": "Signed from Chelsea for £55 million as a technical, dynamic midfielder, though injuries severely disrupted his first season at Old Trafford and limited his impact.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Mountbrightonoct3_2019_%28cropped%29.jpg/330px-Mountbrightonoct3_2019_%28cropped%29.jpg"
        },
        {
          "name": "Sofyan Amrabat",
          "club": "Manchester United",
          "nationality": "Moroccan",
          "position": "Midfielder",
          "shirt_number": 4,
          "age": 27,
          "fun_fact": "The Moroccan World Cup star joined on loan from Fiorentina and provided energetic, ball-winning midfield play as United won the FA Cup under Erik ten Hag.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Sofyan_Amrabat_vs_Niger_%28cropped%29.jpg/330px-Sofyan_Amrabat_vs_Niger_%28cropped%29.jpg"
        }
      ]
    },
    {
      "season": "2024-25",
      "players": [
        {
          "name": "Leny Yoro",
          "club": "Manchester United",
          "nationality": "French",
          "position": "Defender",
          "shirt_number": 15,
          "age": 18,
          "fun_fact": "Signed from Lille for £52 million as one of Europe's most sought-after young defenders, the French teenager was immediately sidelined by a serious foot injury before making his delayed debut.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/RC_Lens_-_Lille_OSC_%2808-10-2023%29_12_%28cropped1%29.jpg/330px-RC_Lens_-_Lille_OSC_%2808-10-2023%29_12_%28cropped1%29.jpg"
        },
        {
          "name": "Matthijs de Ligt",
          "club": "Manchester United",
          "nationality": "Dutch",
          "position": "Defender",
          "shirt_number": 5,
          "age": 24,
          "fun_fact": "Signed from Bayern Munich for £38 million, the Dutch international centre back brought pedigree and authority to United's defence under new manager Rúben Amorim.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/c/c9/2022-07-30_Fu%C3%9Fball%2C_M%C3%A4nner%2C_DFL-Supercup%2C_RB_Leipzig_-_FC_Bayern_M%C3%BCnchen_Matthijs_de_Ligt_%28cropped%29.jpg"
        },
        {
          "name": "Joshua Zirkzee",
          "club": "Manchester United",
          "nationality": "Dutch",
          "position": "Striker",
          "shirt_number": 9,
          "age": 23,
          "fun_fact": "Signed from Bologna for £36.5 million, the creative Dutch forward's technical ability and link-up play offered a different option for United in the first season of the Amorim era.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Joshua_Zirkzee_2019.jpg/330px-Joshua_Zirkzee_2019.jpg"
        },
        {
          "name": "Noussair Mazraoui",
          "club": "Manchester United",
          "nationality": "Moroccan",
          "position": "Defender",
          "shirt_number": 2,
          "age": 26,
          "fun_fact": "Signed from Bayern Munich, the Moroccan right back's pace and attacking instincts brought a new dimension to United's full-back options under Rúben Amorim's high-pressing system.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Mazraoui.jpg/330px-Mazraoui.jpg"
        },
        {
          "name": "Altay Bayındır",
          "club": "Manchester United",
          "nationality": "Turkish",
          "position": "Goalkeeper",
          "shirt_number": 1,
          "age": 26,
          "fun_fact": "The Turkish international goalkeeper provided competition for André Onana, his athleticism and distribution making him a useful second-choice option in the evolving Amorim squad.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Altay_Bayindir_%28cropped%29.jpg"
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
