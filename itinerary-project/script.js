const DATA = [
  {
    label: "Sat Dec 5", sub: "Houston → Saigon", city: "Saigon", stamp: "SGN\nARR",
    stops: [
      {t:"7:00 AM", type:"transit", name:"IAH → SGN", blurb:"AS 453, AS 119, KE 479 (booked & confirmed). Arrives Sun Dec 6, 11:20 PM.", photo:"images/hcmc.jpg", badges:["~28 hrs"]}
    ]
  },
  {
    label: "Mon Dec 7", sub: "Saigon", city: "Saigon", stamp: "SAIGON",
    stops: [
      {t:"1:00 AM", type:"activity", name:"Check in Service Apartment and Rest", blurb:"", badges:["8 hrs"]},
      {t:"11:00 AM", type:"activity", name:"Visit Independence Palace & Ride Metro to Thao Dien", blurb:"", badges:["5 hrs"], photo:"images/indpalace.png"},
      {t:"5:00 PM", type:"activity", name:"Don works remote & Dinner with uncle", blurb:"Online to 1:00 AM Tue."}
    ]
  },
  {
    label: "Tue Dec 8", sub: "Saigon", city: "Saigon", stamp: "SAIGON",
    stops: [
      {t:"10:00 AM", type:"activity", name:"Notre Dame & Central Post & Opera House", blurb:"Notre Dame Cathedral of Saigon.", badges:["6 hrs"], photo:"images/hcmccathedral.png"},
      {t:"5:00 PM", type:"activity", name:"Don works remote & Dinner with uncle", blurb:"Online to 1:00 AM Wed."}
    ]
  },
  {
    label: "Wed Dec 9", sub: "Saigon", city: "Saigon", stamp: "SAIGON",
    stops: [
      {t:"10:00 AM", type:"activity", name:"War Remnants Museum & Ben Thanh Market", blurb:"", photo:"images/warrem.jpg", badges:["6 hrs"]},
      {t:"5:00 PM", type:"activity", name:"Don works remote & Pho Di Bo & City Bus", blurb:"Online to 1:00 AM Thu.", photo:"images/phodibohcmc.jpg"}
    ]
  },
  {
    label: "Thu Dec 10", sub: "Saigon", city: "Saigon", stamp: "SAIGON",
    stops: [
      {t:"10:00 AM", type:"activity", name:"Cu Chi Tunnel", blurb:"", photo:["images/cuchi.jpg"], badges:["6 hrs"]},
      {t:"5:00 PM", type:"activity", name:"Don works remote", blurb:"Online to 1:00 AM Fri."}
    ]
  },
  {
    label: "Fri Dec 11", sub: "Saigon → Trị An", city: "Trị An", stamp: "TRI AN",
    stops: [
      {t:"10:00 AM", type:"transit", name:"Check out & Depart to Tri An", blurb:"Trị An.", badges:["5 hrs"]},
      {t:"5:00 PM", type:"activity", name:"Don works remote & Visit Family", blurb:"Online to 1:00 AM Sat."}
    ]
  },
  {
    label: "Sat Dec 12", sub: "Trị An — Family Visit", city: "Trị An", stamp: "TRI AN",
    stops: [
      {t:"10:00 AM", type:"activity", name:"Visit Family", blurb:"Trị An."}
    ]
  },
  {
    label: "Sun Dec 13", sub: "Trị An — Family Visit", city: "Trị An", stamp: "TRI AN",
    stops: [
      {t:"10:00 AM", type:"activity", name:"Visit Family", blurb:"Trị An."}
    ]
  },
  {
    label: "Mon Dec 14", sub: "Saigon → Phu Quoc", city: "Phu Quoc", stamp: "PHU\nQUOC",
    stops: [
      {t:"7:20 AM", type:"transit", name:"SGN → PQC (with Uncle Luc)", blurb:"Pick up rental car. VietJet VJ 329."},
      {t:"10:00 AM", type:"activity", name:"Thanh Nga Center (Phu Quoc Dog)", blurb:"Trung tâm bảo tồn chó xoáy Phú Quốc trang trại Thanh Nga.", photo:"images/chophuquoc.jpg"},
      {t:"12:00 PM", type:"activity", name:"Lunch", blurb:""},
      {t:"2:00 PM", type:"activity", name:"Hon Thom Island Cable Car", blurb:"Ga Ánh Dương.", photo:"images/honthom.jpg"},
      {t:"5:00 PM", type:"activity", name:"Check in hotel", blurb:""},
      {t:"6:30 PM", type:"activity", name:"Sunset Town Show & Night Market & Rest", blurb:"Sunset Town.", photo:"images/sunsettownshow.jpg"}
    ]
  },
  {
    label: "Tue Dec 15", sub: "Phu Quoc", city: "Phu Quoc", stamp: "PHU\nQUOC",
    stops: [
      {t:"10:00 AM", type:"activity", name:"Private Coral Snorkel Trip", blurb:"", photo:["images/phuquoccoral.jpg"]},
      {t:"5:00 PM", type:"activity", name:"Khai Hoan Fish Sauce Barrel House", blurb:"Doanh Nghiệp Tư Nhân Hải Sản Khải Hoàn.", photo:["images/fishsauce.jpg"]},
      {t:"7:30 PM", type:"activity", name:"Grand World Show (Optional) & Night Market & Rest", blurb:""}
    ]
  },
  {
    label: "Wed Dec 16", sub: "Phu Quoc → Hue", city: "Hue", stamp: "HUE",
    stops: [
      {t:"8:30 AM", type:"activity", name:"Check out Hotel", blurb:""},
      {t:"12:10 PM", type:"transit", name:"PQC → DAD", blurb:"Danang International Airport."},
      {t:"3:20 PM", type:"transit", name:"Da Nang → Hue on Train", blurb:"Train HD4."},
      {t:"7:00 PM", type:"activity", name:"Check in Hotel Hue & Dinner", blurb:""},
      {t:"9:00 PM", type:"activity", name:"Truong Tien - Phu Xuan Walk & Rest", blurb:""}
    ]
  },
  {
    label: "Thu Dec 17", sub: "Hue → Quang Tri", city: "Hue / Quang Tri", stamp: "HUE",
    stops: [
      {t:"6:30 AM", type:"activity", name:"Check out hotel and Hue City Tour", blurb:"Hue Discovery Tour.", note:"Keep luggage at hotel after checking out."},
      {t:"4:30 PM", type:"activity", name:"Dong Ba Market", blurb:"", note:"Buy Kẹo Mè Xửng."},
      {t:"7:30 PM", type:"transit", name:"Pick up luggage, Hue → Quang Tri (Dong Ha)", blurb:""},
      {t:"10:00 PM", type:"activity", name:"Check in Hotel Quang Tri & Rest", blurb:""}
    ]
  },
  {
    label: "Fri Dec 18", sub: "Quang Tri", city: "Quang Tri", stamp: "QUANG\nTRI",
    stops: [
      {t:"9:00 AM", type:"activity", name:"Hien Luong Bridge and Vinh Moc Tunnel (if time permits)", blurb:"17th Parallel — Historic Hiền Lương Bridge."},
      {t:"12:00 PM", type:"transit", name:"Vinh Moc → Dong Ha & Lunch", blurb:""},
      {t:"2:30 PM", type:"activity", name:"Quang Tri Citadel", blurb:""},
      {t:"5:30 PM", type:"activity", name:"Back to Dong Ha & Rest", blurb:""}
    ]
  },
  {
    label: "Sat Dec 19", sub: "Quang Tri → Hanoi", city: "Quang Tri / Hanoi", stamp: "QUANG\nTRI",
    stops: [
      {t:"7:00 AM", type:"activity", name:"Check out hotel & Dai Hao Village (Uncle Tho)", blurb:"", note:"Keep luggage at Uncle Tho's."},
      {t:"11:30 AM", type:"activity", name:"Lunch", blurb:""},
      {t:"1:30 PM", type:"activity", name:"Dai Hao Village (Family Cemetery)", blurb:""},
      {t:"4:25 PM", type:"transit", name:"Pick up luggage, Quang Tri → Hanoi Night Train", blurb:"SE4 train, Car 6. Arrives Sun Dec 20, 4:36 AM."}
    ]
  },
  {
    label: "Sun Dec 20", sub: "Tokyo Arrival Day", city: "Tokyo", stamp: "TOKYO\nARR",
    stops: [
      {t:"5:30 AM", type:"transit", name:"Hanoi train station → HAN airport", blurb:""},
      {t:"8:20 AM", type:"activity", name:"HAN → NRT (Don & Giang)", blurb:"Lands 3:25 PM JST", badges:["$217"]},
      {t:"Fri 8:16 PM", type:"activity", name:"HOU → HND (Zack)", blurb:"~28 hrs incl. layover, lands 3:05 PM JST", photo:["images/tokyo.jpg"]},
      {t:"5:00 PM", type:"transit", name:"NRT → Shimbashi (hotel)", blurb:"Keisei Skyliner → Nippori, JR Yamanote → Shimbashi, 10 min walk. Shimbashi is closer to the hotel than Hamamatsuchō.", badges:["~75 min","¥2,780 (~$17)"]},
      {t:"5:00 PM", type:"transit", name:"HND → Hamamatsuchō (hotel)", blurb:"Tokyo Monorail northbound to the last stop, 10 min walk to hotel.", badges:["~13–20 min","¥500 (~$3)"]},
      {t:"7:00 PM", type:"activity", name:"Zack checks in first", blurb:"Mitsui Garden Hotel Shiodome Italia-gai · Conf# 3788-8853-7416", photo:["images/mitsui.jpg"], badges:["¥143,298 (~$896)"]},
      {t:"7:30 PM", type:"activity", name:"Dinner, walk Shinjuku (Kabukicho) & rest", blurb:"Walk to Shiodome Sta., Oedo Line direct to Shinjuku.", photo:["images/kabukicho.jpg"], badges:["~12–15 min","¥180–210 (~$1)"]}
    ]
  },
  {
    label: "Mon Dec 21", sub: "Harajuku · Shinjuku · Shibuya", city: "Shinjuku / Shibuya", stamp: "TOKYO",
    stops: [
      {t:"8:30 AM", type:"transit", name:"Hotel → Meiji Jingu", blurb:"Oedo Line direct.", badges:["~13 min","¥180 (~$1)"]},
      {t:"9:00 AM", type:"activity", name:"Visit Meiji Jingu", blurb:"", photo:["images/meiji-shrine1.jpg"]},
      {t:"11:15 AM", type:"transit", name:"→ Zauo Shinjuku", blurb:"JR Yamanote, 2 stops.", badges:["~5 min","¥150 (~$1)"]},
      {t:"11:30 AM", type:"activity", name:"Lunch at Zauo Shinjuku", blurb:"", photo:["images/zauo.jpg"]},
      {t:"1:30 PM", type:"activity", name:"Shinjuku Samurai Museum + shopping", blurb:"Don Quijote / LOFT — walking distance.", photo:["images/samurai.jpg"]},
      {t:"4:45 PM", type:"transit", name:"→ Shibuya Sky", blurb:"JR Yamanote Line direct, 2 stops.", badges:["~7 min","¥170 (~$1)"]},
      {t:"5:00 PM", type:"activity", name:"Shibuya Sky", blurb:"Book a timed ticket ahead — last entry is 9 PM. Catch sunset/dusk from the top.", photo:["images/shibuyasky.jpg"]},
      {t:"6:15 PM", type:"activity", name:"Shibuya Crossing & Hachiko Statue", blurb:"Walk the Scramble Crossing after dark for the classic neon-lit view, then visit the Hachiko statue right outside Shibuya Station's Hachiko Exit.", photo:["images/crossing.avif"]},
      {t:"6:45 PM", type:"activity", name:"Center-Gai & Yokocho Food Court", blurb:"Dinner here.", photo:["images/yokocho.jpg"]},
      {t:"8:00 PM", type:"transit", name:"Shibuya → Shiodome, rest early", blurb:"Ginza Line direct.", badges:["~17 min","¥210 (~$1)"]}
    ]
  },
  {
    label: "Tue Dec 22", sub: "Toyosu · Skytree · Bay Cruise", city: "Toyosu / Akasuka", stamp: "TOKYO", 
    stops: [
      {t:"4:15 AM", type:"transit", name:"→ Toyosu Market", blurb:"Too early for trains — taxi.", badges:["~15–20 min","¥2,500–3,500 (~$16–22)"]},
      {t:"5:00 AM", type:"activity", name:"Tuna Auction + Breakfast at Tsukiji", blurb:"Apply 30 days in advance for the close-up auction view; otherwise watch from the 2nd floor observation deck. After the auction, take Toei Bus 01, Toyosu-Shijō → Tsukiji-Rokuchōme (Tsukiji 6), to reach Tsukiji for breakfast.", note:"Check the market schedule for closures before you go — Toyosu is closed on irregular days.", photo:"images/tuna.jpg"},
      {t:"8:00 AM", type:"transit", name:"→ Marunouchi", blurb:"From Tsukiji-Sanchōme (Tsukiji 3) bus stop, Toei Bus 05-1/05-2 bound for Tokyo Station, Marunouchi South Exit.", badges:["~35 min","¥420 (~$3)"]},
      {t:"9:00 AM", type:"activity", name:"Marunouchi Tokyo Station Square & Imperial Palace", blurb:"", photo:["images/tokyostation.jpg", "images/palace.jpg"]},
      {t:"11:40 AM", type:"transit", name:"→ Skytree", blurb:"Hanzomon Line direct.", badges:["~20 min","¥210–240 (~$1–2)"]},
      {t:"12:00 PM", type:"activity", name:"Lunch near Tokyo Skytree", blurb:""},
      {t:"1:30 PM", type:"activity", name:"Tokyo Skytree Observation", blurb:"", photo:"images/skytree.jpg"},
      {t:"3:45 PM", type:"transit", name:"→ Sensō-ji", blurb:"Tobu Skytree Line.", badges:["~3 min","¥180 (~$1)"]},
      {t:"4:00 PM", type:"activity", name:"Visit Sensō-ji Temple", blurb:"", photo:"images/sensoji.jpg"},
      {t:"5:30 PM", type:"transit", name:"→ Cruise Pier (Daimon Sta.)", blurb:"Toei Asakusa Line direct from Asakusa Sta. — no transfer, and Daimon is right by your hotel.", badges:["~15 min","¥210 (~$1)"]},
      {t:"5:45 PM", type:"activity", name:"Tokyo Bay Cruise (optional) + Dinner", blurb:"", photo:"images/nightcruise.jpg"},
      {t:"9:45 PM", type:"transit", name:"Back to Shiodome, rest early", blurb:"Short walk — Daimon Sta. is right by the hotel.", badges:["~5 min"]}
    ]
  },
  {
    label: "Wed Dec 23", sub: "Mt. Fuji · Akihabara", city: "Mt. Fuji", stamp: "TOKYO", 
    photo: "images/fuji.jpg",
    stops: [
      {t:"7:00 AM", type:"activity", name:"Mt Fuji Private Tour", blurb:"Hotel pickup/drop-off included in tour price."},
      {t:"7:30 PM", type:"activity", name:"Dinner & Shopping in Akihabara", blurb:"Yodobashi Akiba"},
      {t:"9:45 PM", type:"transit", name:"Akihabara → Shiodome, rest", blurb:"Hibiya Line direct.", badges:["~12 min","¥180–200 (~$1)"]}
    ]
  },
  {
    label: "Thu Dec 24", sub: "Osaka", city: "Osaka / Sakai", stamp: "OSAKA",
    stops: [
      {t:"5:30 AM", type:"activity", name:"Check out hotel", blurb:""},
      {t:"7:00 AM", type:"transit", name:"→ Tokyo Station", blurb:"Walk or Marunouchi Line 1 stop.", badges:[]},
      {t:"7:30 AM", type:"transit", name:"Bullet Train to Shin-Osaka", photo:["images/bullet.jpg"], blurb:"Nozomi Shinkansen — sit right side, Mt. Fuji appears ~40–50 min in. Reserve the free oversized-luggage seat if bags exceed 160cm combined dimensions.", badges:["~2h30m","¥13,870–14,720 pp (~$87–92)"]},
      {t:"10:00 AM", type:"transit", name:"Shin-Osaka → Namba", blurb:"Osaka Metro Midosuji Line, bound for Nakamozu — direct, no transfer.", badges:["~20–24 min","¥290 pp (~$2)"]},
      {t:"10:25 AM", type:"activity", name:"Drop off luggage at Toyoko Inn Osaka Namba", photo:["images/tokyoinn.webp"], blurb:"Most Japan hotels will hold bags at the front desk before official check-in time — confirm at the desk when you arrive."},
      {t:"11:00 AM", type:"transit", name:"Namba → Sakai: Mizuno Tanrenjo", photo:["images/knife.webp"], blurb:"Nankai Main Line, direct.", badges:["~10–15 min"], note:"Small family-run forge, not a standard retail shop — confirm hours/availability ahead of time."},
      {t:"12:30 PM", type:"activity", name:"Lunch in Sakai", blurb:""},
      {t:"1:30 PM", type:"transit", name:"Sakai → Osaka Castle", blurb:"Nankai Main Line back to Namba, then Osaka Metro Tanimachi Line to Tanimachi 4-chōme, short walk to the park.", badges:["~30–35 min total"]},
      {t:"2:30 PM", type:"activity", name:"Osaka Castle (afternoon into sunset)", photo:["images/osakasunset.jpeg"], blurb:""},
      {t:"7:00 PM", type:"transit", name:"→ Umeda Sky Building", blurb:"JR Osaka Loop Line, direct.", badges:["~15–18 min"]},
      {t:"7:30 PM", type:"activity", name:"Dinner, Umeda Sky Building", photo:["images/umeda.avif"], blurb:"Observation deck typically open until ~10:30 PM."},
      {t:"9:30 PM", type:"activity", name:"Check in Toyoko Inn Osaka Namba", blurb:"Luggage already dropped off this morning — check in whenever suits, no rush."}
    ]
  },
  {
    label: "Fri Dec 25", sub: "Kyoto", city: "Nara / Kyoto", stamp: "KYOTO",
    stops: [
      {t:"8:00 AM", type:"transit", name:"Namba → Nara", blurb:"Kintetsu Nara Line Rapid Express, direct.", badges:["~40 min","¥680 pp (~$4)"]},
      {t:"9:00 AM", type:"activity", name:"Tōdai-ji & Nara Deer Park", photo:["images/nara.jpg"], blurb:"Full daylight for the deer park. Get the goshuin stamp at the Great Buddha Hall (open until 5 PM) whenever suits — no need to rush."},
      {t:"12:00 PM", type:"transit", name:"Nara → Kyoto (Aoniyoshi)", blurb:"Kintetsu's dedicated sightseeing limited express — retro purple interior, big windows, on-board snack counter. Same Kintetsu-Nara Station, direct to Kyoto.", badges:["~35 min","¥1,960 full-route fare (~$12) — confirm exact Nara–Kyoto segment price"], note:"Runs daily except Thursdays — fine for your Friday. Only 84 seats total and it's popular, so reserve online or at a Kintetsu counter in advance rather than same-day. Double-check the exact midday departure time on the official Kintetsu site before finalizing, since it can shift."},
      {t:"1:20 PM", type:"activity", name:"Lunch near Kyoto Station", blurb:""},
      {t:"1:45 PM", type:"transit", name:"→ Nanzen-ji", blurb:"Karasuma Line → transfer to Tozai Line at Karasuma-Oike → Keage Sta., then a 10-min walk.", badges:["~25 min","¥260 pp (~$2)"]},
      {t:"2:20 PM", type:"activity", name:"Nanzen-ji Temple", photo:["images/nanzenji.jpg"], blurb:"Zen temple grounds with the famous Sanmon gate and aqueduct. Open until 4:30 PM in winter (last admission ~4:10 PM) — plan to leave by then."},
      {t:"3:40 PM", type:"transit", name:"→ Fushimi Inari Taisha", blurb:"Walk back to Keage Sta., Tozai Line one stop to Sanjo-Keihan, transfer directly to the Keihan Main Line south to Fushimi-Inari Sta.", badges:["~25–30 min","¥330 pp (~$2)"]},
      {t:"4:15 PM", type:"activity", name:"Fushimi Inari Taisha", photo:["images/fushimi.webp"], blurb:"The torii gate trail into dusk/evening — sunset is ~4:47 PM this time of year, so plan on evening lighting rather than full daylight here."},
      {t:"6:00 PM", type:"transit", name:"→ Kyoto Station", blurb:"JR Nara Line, 2 stops, direct.", badges:["~8 min","¥150 pp (~$1)"]},
      {t:"6:15 PM", type:"transit", name:"Kyoto → Osaka", blurb:"JR Special Rapid, direct.", badges:["~29 min","¥580 pp (~$4)"]},
      {t:"7:00 PM", type:"activity", name:"Dinner at Kuromon Ichiba, walk Dotonbori & Shinsaibashi", photo:["images/kuromon.jpg", "images/dotonbori.jpg"], blurb:"~10–15 min from Osaka Sta. to Namba/Dotonbori.", note:"Reserve the Tombori River Cruise ahead of time."}
    ]
  },
  {
    label: "Sat Dec 26", sub: "Osaka → Hanoi", city: "Hanoi", stamp: "HANOI\nARR",
    stops: [
      {t:"5:30 AM", type:"activity", name:"Check out hotel Osaka", blurb:""},
      {t:"6:00 AM", type:"transit", name:"→ Kansai Airport", blurb:"Underground walk from Namba Sta., follow signs for Nankai Line, Nankai Limited Express Rapi.", badges:["~15 min walk"], note:"Ticket must be purchased online in advance."},
      {t:"7:00 AM", type:"transit", name:"Osaka to Kansai Airport", blurb:"", badges:["$500"]},
      {t:"10:00 AM", type:"transit", name:"KIX → HAN", blurb:""},
      {t:"2:30 PM", type:"activity", name:"Lunch at Airport & Check in hotel in Hanoi", blurb:"Near the Old Quarter."},
      {t:"5:00 PM", type:"activity", name:"Walk Hoan Kiem Lake, Dinner, Water Puppet Show", blurb:"Last show 8pm."},
      {t:"9:00 PM", type:"activity", name:"Walk Hanoi Cathedral & Opera House, Rest", blurb:""}
    ]
  },
  {
    label: "Sun Dec 27", sub: "Hanoi Sightseeing", city: "Hanoi", stamp: "HANOI",
    stops: [
      {t:"9:00 AM", type:"activity", name:"Ho Chi Minh Museum & Mausoleum", blurb:""},
      {t:"12:30 PM", type:"activity", name:"Lunch", blurb:""},
      {t:"2:30 PM", type:"activity", name:"Military Museum, Quốc Tử Giám", blurb:""},
      {t:"5:30 PM", type:"activity", name:"Train Track Coffee and Dinner", blurb:""},
      {t:"8:00 PM", type:"activity", name:"Walk Ta Hien Street and Rest", blurb:""}
    ]
  },
  {
    label: "Mon Dec 28", sub: "Hanoi → Sapa (overnight train)", city: "Hanoi / Sapa", stamp: "SAPA",
    stops: [
      {t:"10:30 AM", type:"activity", name:"Visit Hỏa Lò Prison Relic and Lunch", blurb:""},
      {t:"2:00 PM", type:"activity", name:"Relax or Hanoi Train Street, Dinner, head to rail station for Sapa", blurb:"", note:"Keep luggage at Hanoi hotel — just pack enough for 2 nights in Sapa."},
      {t:"10:15 PM", type:"transit", name:"Sleeper Train Hanoi → Lao Cai", blurb:"Tonkin Heritage Train. Arrives Tue Dec 29, 6:00 AM."}
    ]
  },
  {
    label: "Tue Dec 29", sub: "Sapa", city: "Sapa", stamp: "SAPA",
    stops: [
      {t:"8:00 AM", type:"activity", name:"Check in Shom Li's Homestay", blurb:"Contact to customize itinerary."},
      {t:"11:00 AM", type:"activity", name:"Guided Cultural Activities and Trekking", blurb:""},
      {t:"6:30 PM", type:"activity", name:"Dinner at homestay", blurb:""},
      {t:"9:00 PM", type:"activity", name:"Homestay Activities or Sapa Night Market & Rest", blurb:""}
    ]
  },
  {
    label: "Wed Dec 30", sub: "Sapa → Hanoi (overnight train)", city: "Sapa / Hanoi", stamp: "HANOI",
    stops: [
      {t:"8:00 AM", type:"activity", name:"Cat Cat Village & Fansipan Summit 1-Day Tour", blurb:"Lunch buffet combo. Cable Car Station – Sun World Fansipan Legend, via Sunworld Cable Car."},
      {t:"5:00 PM", type:"activity", name:"Shopping & Dinner at homestay", blurb:""},
      {t:"9:30 PM", type:"transit", name:"Lao Cai → Hanoi Train", blurb:"Tonkin Heritage Train. Arrives Thu Dec 31, 5:30 AM."}
    ]
  },
  {
    label: "Thu Dec 31", sub: "Ninh Binh · NYE Hanoi", city: "Hanoi", stamp: "HANOI",
    stops: [
      {t:"5:30 AM", type:"transit", name:"Arrive Hanoi (overnight train from Lao Cai)", blurb:"Tonkin Heritage Train."},
      {t:"7:00 AM", type:"activity", name:"Tràng An Ninh Binh Tour or Relax", blurb:"Tràng An Landscape Complex, via Trang An 1 Day Tour."},
      {t:"9:00 PM", type:"activity", name:"NYE in Hanoi", blurb:""}
    ]
  },
  {
    label: "Fri Jan 1", sub: "Hanoi → Halong Bay", city: "Halong Bay", stamp: "HALONG\nBAY",
    stops: [
      {t:"7:00 AM", type:"activity", name:"Check out hotel Hanoi, Halong Bay Cruise", blurb:"Picked up by cruise shuttle, Hanoi → Quảng Ninh."}
    ]
  },
  {
    label: "Sat Jan 2", sub: "Halong Bay → Hanoi", city: "Halong Bay / Hanoi", stamp: "HANOI",
    stops: [
      {t:"7:00 AM", type:"activity", name:"Halong Bay Cruise", blurb:"Dropped off by cruise shuttle, Quảng Ninh → Hanoi."},
      {t:"4:30 PM", type:"activity", name:"Coffee & Relax in train station", blurb:"Tonkin Lounge."},
      {t:"7:20 PM", type:"transit", name:"Hanoi → Da Nang Train", blurb:"Tonkin Heritage Train. Arrives Sun Jan 3, 11:35 AM."}
    ]
  },
  {
    label: "Sun Jan 3", sub: "Da Nang · Hoi An", city: "Da Nang", stamp: "DA NANG",
    stops: [
      {t:"12:00 PM", type:"activity", name:"Check in hotel Da Nang", blurb:""},
      {t:"2:00 PM", type:"activity", name:"Lunch & Walk Da Nang Beach", blurb:""},
      {t:"5:00 PM", type:"activity", name:"Hoi An, Dinner, Dragon Bridge & Night Market, Rest", blurb:""}
    ]
  },
  {
    label: "Mon Jan 4", sub: "Da Nang → Saigon", city: "Da Nang / Saigon", stamp: "SAIGON",
    stops: [
      {t:"8:00 AM", type:"activity", name:"Check out hotel, visit Mỹ Sơn Sanctuary (optional)", blurb:"", note:"Hotel luggage storage."},
      {t:"1:00 PM", type:"activity", name:"Sơn Trà Peninsula (Linh Ứng Pagoda)", blurb:""},
      {t:"5:10 PM", type:"transit", name:"Pick up luggage, DAD → SGN", blurb:"Vietnam Airlines VN 135."},
      {t:"8:00 PM", type:"activity", name:"Dinner, City Bus, Rest", blurb:""}
    ]
  },
  {
    label: "Tue Jan 5", sub: "Ho Chi Minh City", city: "Saigon", stamp: "SAIGON",
    stops: [
      {t:"8:00 AM", type:"activity", name:"HCM City", blurb:""}
    ]
  },
  {
    label: "Wed Jan 6", sub: "Saigon → Singapore", city: "Saigon / Singapore", stamp: "SIN\nARR",
    stops: [
      {t:"8:00 AM", type:"activity", name:"Check out hotel, shopping and relax HCM City", blurb:""},
      {t:"5:10 PM", type:"transit", name:"SGN → SIN, uber to hotel", blurb:"Vietnam Airlines VN 657."},
      {t:"8:00 PM", type:"activity", name:"Check in hotel, Dinner, Rest", blurb:""}
    ]
  },
  {
    label: "Thu Jan 7", sub: "Singapore", city: "Singapore", stamp: "SINGA\nPORE",
    stops: [
      {t:"8:00 AM", type:"activity", name:"Merlion, Marina Bay Sands, Gardens by the Bay, Chinatown, Bugis Street", blurb:""}
    ]
  },
  {
    label: "Fri Jan 8", sub: "Zack flies home · Don & Giang → Saigon → Trị An Lake", city: "Singapore / Saigon / Trị An Lake", stamp: "TRI AN",
    stops: [
      {t:"8:00 AM", type:"transit", name:"Zack: SIN → HND", blurb:"Singapore Airlines SQ 632."},
      {t:"9:00 AM", type:"activity", name:"Check out hotel", blurb:""},
      {t:"1:15 PM", type:"transit", name:"Don and Giang: SIN → SGN", blurb:"Vietnam Airlines VN 650. Lands 2:30 PM."},
      {t:"2:30 PM", type:"transit", name:"Don and Giang: SGN → Trị An Lake", blurb:"Head straight to Trị An Lake after landing, so Saturday is a full day with family."},
      {t:"6:00 PM", type:"transit", name:"Zack: HND → HOU", blurb:"Connecting flight home, via LAX and DFW.", badges:["Flies home"]}
    ]
  },
  {
    label: "Sat Jan 9 – Fri Jan 15", sub: "Trị An Lake — Family Visit (7 days)", city: "Trị An Lake", stamp: "TRI AN",
    stops: [
      {t:"Sat–Fri", type:"activity", name:"Visit Family", blurb:"A full week at Trị An Lake with family, starting Saturday — no fixed daily schedule."}
    ]
  },
  {
    label: "Sat Jan 16", sub: "Trị An Lake → Saigon → Fly Home", city: "Trị An Lake / Saigon", stamp: "FLY\nHOME",
    stops: [
      {t:"Early AM", type:"transit", name:"Trị An Lake → Saigon", blurb:"Head to Saigon ahead of the flight home."},
      {t:"TBD", type:"transit", name:"Don and Giang: SGN → IAH", blurb:"Flight TBD."}
    ]
  }
];

(function countdownClock(){
  const el = document.getElementById('countdown');
  if(!el) return;
  // Trip departure: Sat Dec 5, 2026, 7:00 AM (Houston / Central Time, UTC-6)
  const target = new Date('2026-12-05T07:00:00-06:00').getTime();

  function render(){
    const now = Date.now();
    const diff = target - now;
    if(diff <= 0){
      el.classList.add('cd-live');
      el.innerHTML = `<span class="cd-label">Status</span><span class="cd-num">Trip in progress ✈️</span>`;
      return;
    }
    const sec = Math.floor(diff / 1000);
    const days = Math.floor(sec / 86400);
    const hours = Math.floor((sec % 86400) / 3600);
    const mins = Math.floor((sec % 3600) / 60);
    const secs = sec % 60;
    el.innerHTML = `<span class="cd-label">Departure in</span>` +
      `<span class="cd-num">${days}</span>d ` +
      `<span class="cd-num">${String(hours).padStart(2,'0')}</span>h ` +
      `<span class="cd-num">${String(mins).padStart(2,'0')}</span>m ` +
      `<span class="cd-num">${String(secs).padStart(2,'0')}</span>s`;
  }
  render();
  setInterval(render, 1000);
})();

const tabsEl = document.getElementById('tabs');
const daysEl = document.getElementById('days');

function renderPhotos(photo, alt, className) {
  if (!photo) return '';
  const photos = Array.isArray(photo) ? photo : [photo];
  return `<div class="${className}">${photos.map(src => `<img src="${src}" alt="${alt}">`).join('')}</div>`;
}

DATA.forEach((day, i) => {
  const btn = document.createElement('button');
  btn.innerHTML = `<span class="tab-date">${day.label}${day.icon ? ' ' + day.icon : ''}</span><span class="tab-city">${day.city || ''}</span>`;
  btn.className = i === 0 ? 'active' : '';
  btn.onclick = () => selectDay(i);
  tabsEl.appendChild(btn);

  const section = document.createElement('section');
  section.className = 'day' + (i === 0 ? ' active' : '');
  section.id = 'day-' + i;

  const stopsHtml = day.stops.map(s => {
    const badgesHtml = (s.badges && s.badges.length)
      ? `<div class="badges">${s.badges.map(b => `<span class="badge${/min|hr/.test(b) ? ' time-badge':''}">${b}</span>`).join('')}</div>`
      : '';
    const noteHtml = s.note ? `<div class="note"><b>Note —</b> ${s.note}</div>` : '';
    const photoHtml = renderPhotos(s.photo, s.name, 'stop-photo');
    return `
      <div class="stop${s.type === 'transit' ? ' transit' : ''}">
        <div class="time mono">${s.t}</div>
        <div class="rail"><div class="dot"></div></div>
        <div class="stop-content">
          <div class="name">${s.name}</div>
          ${s.blurb ? `<div class="blurb">${s.blurb}</div>` : ''}
          ${badgesHtml}
          ${noteHtml}
          ${photoHtml}
        </div>
      </div>`;
  }).join('');

  section.innerHTML = `
    <div class="ticket">
      <div class="ticket-head">
        <div>
          <div class="daylabel">${day.label}</div>
          <div class="daysub">${day.sub}</div>
        </div>
        <div class="stamp mono">${day.stamp}</div>
      </div>
      ${renderPhotos(day.photo, `${day.label} photo`, 'day-photo')}
      <div class="stops">${stopsHtml}</div>
    </div>`;

  daysEl.appendChild(section);
});

function selectDay(i){
  document.querySelectorAll('nav.tabs button').forEach((b, idx) => b.classList.toggle('active', idx === i));
  document.querySelectorAll('.day').forEach((d, idx) => d.classList.toggle('active', idx === i));
  window.scrollTo({top: 0, behavior: 'smooth'});
}