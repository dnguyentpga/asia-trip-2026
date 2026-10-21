const DATA = [
  {
    label: "Sat Dec 5", sub: "Houston → Saigon", city: "Saigon", stamp: "SGN\nARR",
    stops: [
      {t:"7:00 AM", type:"transit", name:"IAH → SGN", blurb:"AS 453, AS 119, KE 479 (booked & confirmed). Arrives Sun Dec 6, 11:20 PM.", photo:"images/hcmc.jpg", badges:["~28 hrs"], mapLink:"https://maps.app.goo.gl/XU3XtWifTQuBfFcFA", mapLabel:"Rest at Thanh Long Bach Dang Hotel (Expedia Confirm #: 73548618531876)"}
    ]
  },
  {
    label: "Mon Dec 7", sub: "Saigon", city: "Saigon", stamp: "SAIGON",
    stops: [
      {t:"10:00 AM", type:"activity", name:"Check out Thanh Long Hotel", blurb:""},
      {t:"2:00 PM", type:"activity", name:"Check in Service Apartment", blurb:"", mapLink:"https://maps.app.goo.gl/8VN6HkrqQnFzD7qw7", mapLabel:"Stay at Masteri Thao Dien (Expedia Confirm #: 73548621935496)"},        
      {t:"3:00 PM", type:"activity", name:"Ride Metro & Visit Independence Palace", blurb:"", photo:"images/indpalace.png"},
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
      {t:"9:00 AM", type:"activity", name:"Check out rental apartment", blurb:""},
      {t:"10:15 AM", type:"transit", name:"Saigon → Bien Hoa on train", blurb:"SE22 train. Arrives Bien Hoa station 11:00 AM.", photo:"images/bhtrain.jpg"},
      {t:"11:15 AM", type:"transit", name:"Bien Hoa → Tri An by car", blurb:"stop by MM MegaMarket"},
      {t:"5:00 PM", type:"activity", name:"Don works remote & Visit Family", blurb:"Online to 1:00 AM Sat."}
    ]
  },
  {
    label: "Sat Dec 12", sub: "Trị An — Family Visit", city: "Trị An", stamp: "TRI AN",
    stops: [
      {t:"10:00 AM", type:"activity", name:"Visit Family", blurb:"Family Reunion", photo:"images/caosu.jpg"}
    ]
  },
  {
    label: "Sun Dec 13", sub: "Trị An — Family Visit", city: "Trị An", stamp: "TRI AN",
    stops: [
      {t:"10:00 AM", type:"activity", name:"Visit Family", blurb:"Trị An", photo:"images/caosu.jpg"},
      {t:"7:00 PM", type:"activity",  name:"Tri An → Saigon (with Uncle Luc), check in hotel", blurb:"Rest in Saigon for early flight to Phu Quoc on Mon Dec 14", note:"Pack luggage, bring all necessary items. Wont return till Jan 9, 2027."}
    ]
  },
  {
    label: "Mon Dec 14", sub: "Saigon → Phu Quoc", city: "Phu Quoc", stamp: "PHU\nQUOC",
    stops: [
      {t:"6:00 AM", type:"activity", name:"Check out hotel", blurb:""},
      {t:"6:50 AM", type:"transit", name:"SGN → PQC (with Uncle Luc). VietJet VJ 329. Confirm # YKH7RA", blurb:"Arriving 7:50 AM. Pick up rental car.", mapLink:"https://kiengiangtravel.vn/thue-xe-o-to-tu-lai-phu-quoc/", mapLabel:"THUÊ XE Ô TÔ TỰ LÁI PHÚ QUỐC"},
      {t:"9:00 AM", type:"activity", name:"Thanh Nga Center (Phu Quoc Dog)", blurb:"Trung tâm bảo tồn chó xoáy Phú Quốc trang trại Thanh Nga.", photo:"images/chophuquoc.jpg"},
      {t:"11:00 AM", type:"activity", name:"Hon Thom Island Cable Car, Lunch buffet", blurb:"Ga Ánh Dương.", photo:"images/honthom.jpg", note:"Cable car midday break 11:30 AM - 1:30 PM. Buffet Hours: 11:00 AM – 02:30 PM."},
      {t:"4:00 PM", type:"activity", name:"Check in hotel", blurb:"", mapLink:"https://maps.app.goo.gl/KiaMRZm5YrGEErdx9", mapLabel:"Stay at Labe Phú Quốc Hotel (Expedia Confirm #: 73560227782042)"},
      {t:"6:30 PM", type:"activity", name:"Sunset Town Show & Night Market & Rest", blurb:"Sunset Town.", photo:"images/sunsettownshow.jpg"}
    ]
  },
  {
    label: "Tue Dec 15", sub: "Phu Quoc", city: "Phu Quoc", stamp: "PHU\nQUOC",
    stops: [
      {t:"10:00 AM", type:"activity", name:"Private Coral Snorkel Trip", blurb:"", photo:["images/phuquoccoral.jpg"], mapLink:"https://kiengiangtravel.vn/bang-gia-thue-cano-phu-quoc/", mapLabel:"Thuê Cano Phú Quốc", badges:["$100"]},
      {t:"5:00 PM", type:"activity", name:"Khai Hoan Fish Sauce Barrel House", blurb:"Doanh Nghiệp Tư Nhân Hải Sản Khải Hoàn.", photo:["images/fishsauce.jpg"]},
      {t:"7:30 PM", type:"activity", name:"Grand World Show (Optional) & Night Market & Rest", blurb:""}
    ]
  },
  {
    label: "Wed Dec 16", sub: "Phu Quoc → Hue", city: "Hue", stamp: "HUE",
    stops: [
      {t:"8:30 AM", type:"activity", name:"Check out Hotel", blurb:""},
      {t:"12:10 PM", type:"transit", name:"PQC → DAD", blurb:"Danang International Airport."},
      {t:"3:20 PM", type:"transit", name:"Da Nang --> Hue on Train", blurb:"Heritage Train HD4. Arriving 6:30PM. Booked, confirm # EQZ951.", photo:["images/trainhue.jpg"], badges:["3 hrs, $15 pp"]},
      {t:"7:00 PM", type:"activity", name:"Check in Hotel Hue & Dinner", blurb:"", mapLink:"https://maps.app.goo.gl/45KG26wvCAMge8ZGA", mapLabel:"Stay at Kly Boutique Hue (Expedia Confirm #: 73565481234639)"},
      {t:"9:00 PM", type:"activity", name:"Truong Tien - Phu Xuan Walk & Rest", blurb:"", photo:["images/truongtien.webp"]}
    ]
  },
  {
    label: "Thu Dec 17", sub: "Hue → Quang Tri", city: "Hue / Quang Tri", stamp: "HUE",
    stops: [
      {t:"6:30 AM", type:"activity", name:"Check out hotel and Hue City Tour", blurb:"Hue Discovery Tour (Full Day, Dong Ba Market included).", mapLink:"https://www.klook.com/en-US/activity/1560-hue-discovery-half-full-day-tour-hue/", mapLabel:"Hue City Tour", note:"Luggage storage service at hotel after checking out."},
      {t:"7:30 PM", type:"transit", name:"Pick up luggage from hotel, Hue → Quang Tri (Dong Ha) by car", blurb:"", note:"Contracted Transportation Service"},
      {t:"10:00 PM", type:"activity", name:"Check in Hotel Dong Ha & Rest", blurb:""}
    ]
  },
  {
    label: "Fri Dec 18", sub: "Quang Tri", city: "Quang Tri", stamp: "QUANG\nTRI",
    stops: [
      {t:"9:00 AM", type:"activity", name:"Hien Luong Bridge and Vinh Moc Tunnel (if time permits)", blurb:"17th Parallel — Historic Hiền Lương Bridge", photo:["images/hienluong.webp"], note:"Contracted Transportation Service"},
      {t:"12:00 PM", type:"transit", name:"Vinh Moc → Dong Ha & Lunch", blurb:""},
      {t:"2:30 PM", type:"activity", name:"Quang Tri Citadel", blurb:"", photo:["images/citadel.jpg"]},
      {t:"5:30 PM", type:"activity", name:"Back to Dong Ha & Rest", blurb:"", note:"Contracted Transportation Service"}
    ]
  },
  {
    label: "Sat Dec 19", sub: "Quang Tri → Hanoi", city: "Quang Tri / Hanoi", stamp: "QUANG\nTRI",
    stops: [
      {t:"7:00 AM", type:"activity", name:"Check out hotel & Dai Hao Village (Uncle Tho)", blurb:"", note:"Contracted Transportation Service. Keep luggage at Uncle Tho."},
      {t:"11:30 AM", type:"activity", name:"Lunch", blurb:""},
      {t:"1:30 PM", type:"activity", name:"Dai Hao Village (Family Cemetery)", blurb:""},
      {t:"3:30 PM", type:"transit", name:"Pick up luggage, Quang Tri → Da Nang. Arrives Da Nang ~7:30 PM", blurb:"Dinner, drop off Uncle Luc at train station first, then proceed to airport", note:"Contracted Transportation Service."},
      {t:"10:30 PM", type:"transit", name:"Uncle Luc Da Nang --> Bien Hoa on SE7 train", blurb:"Arriving Dec 20 at 4:00 PM"},
      {t:"11:30 PM", type:"transit", name:"Don & Giang DAD --> HAN", blurb:"Vietjet VJ 506. Confirm # ZE3PB2. Arriving Dec 20 at 12:50 AM. Rest at Noi Bai Boutique Hotel.", note:"No need to pick up checked bags at Hanoi airport. Contact hotel in advance for free shuttle pick up", mapLink:"https://maps.app.goo.gl/jeWmDH92fjpL3DRf6", mapLabel:"Noi Bai Boutique Hotel. Expedia Confirm #: 73568148766613"}
    ]
  },
  {
    label: "Sun Dec 20", sub: "Tokyo Arrival Day", city: "Tokyo", stamp: "TOKYO\nARR",
    stops: [
      {t:"6:00 AM", type:"activity", name:"Check out hotel", blurb:"", note:"Collect all belongings, make sure all travel documents are ready and accurate, head to airport."},
      {t:"8:20 AM", type:"transit", name:"Don & Giang HAN --> NRT", blurb:"Vietjet VJ 934. Confirm # ZE3PB2. Arriving 3:25 PM JST", badges:["$250 pp"]},
      {t:"Sat 8:37 AM", type:"transit", name:"DFW --> DEN --> NRT (Zack)", blurb:"UA 143. Arriving 3:35 PM JST", photo:["images/tokyo.jpg"]},
      {t:"4:00 PM", type:"activity", name:"Clear customs and immigration", blurb:""},      
      {t:"5:00 PM", type:"transit", name:"NRT --> Shimbashi (hotel)", blurb:"• Limited Express Skyliner --> Nippori Sta. (suica + limited express fare)\n• Ride JR Yamanote (for Ueno / Tokyo) to Hamamatsuchō Sta, ~10 min walk to hotel.", badges:["~75 min","¥2,780 (~$17)"]},
      {t:"7:00 PM", type:"activity", name:"Check in hotel Tokyo", blurb:"Mitsui Garden Hotel Shiodome Italia-gai · Conf# 3788-8853-7416", photo:["images/mitsui.jpg"], badges:["¥143,298 (~$896)"]},
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
      {t:"11:40 AM", type:"transit", name:"→ Skytree", blurb:"Exit Imperial palace via Ōte-mon Gate. Walk to Otemachi Station. Ride Hanzomon Line from Otemachi Sta --> Oshiage Sta.", badges:["~20 min","¥210–240 (~$1–2)"]},
      {t:"12:00 PM", type:"activity", name:"Lunch near Tokyo Skytree", blurb:""},
      {t:"1:30 PM", type:"activity", name:"Tokyo Skytree Observation", blurb:"", photo:"images/skytree.jpg"},
      {t:"3:45 PM", type:"transit", name:"→ Sensō-ji", blurb:"Tobu Skytree Line.", badges:["~3 min","¥180 (~$1)"]},
      {t:"4:00 PM", type:"activity", name:"Visit Sensō-ji Temple", blurb:"", photo:"images/sensoji.jpg"},
      {t:"5:30 PM", type:"transit", name:"→ Cruise Pier", blurb:"Toei Asakusa Line direct from Asakusa Sta --> Daimon Sta. Cruise pier is near by Daimon Station.", badges:["~15 min","¥210 (~$1)"]},
      {t:"5:45 PM", type:"activity", name:"Tokyo Bay Cruise (optional) + Dinner", blurb:"", photo:"images/nightcruise.jpg"},
      {t:"9:45 PM", type:"transit", name:"Back to Shiodome, rest early", blurb:"Short walk — Daimon Sta. is right by the hotel.", badges:["~5 min"]}
    ]
  },
  {
    label: "Wed Dec 23", sub: "Mt. Fuji · Akihabara", city: "Mt. Fuji", stamp: "TOKYO",
    stops: [
      {t:"7:00 AM", type:"activity", name:"Mt Fuji Private Tour", blurb:"Pickup & drop-off included in tour price. Select Small Group Tour (Max 9) option on Klook.", mapLink:"https://www.klook.com/en-US/activity/100747-mount-fuji-arakurayama-park-oshino-hakkai-kawaguchiko-bus-tour-tokyo/", mapLabel:"Mt Fuji Full Day Tour", photo:["images/fuji.jpg"], badges:["$70 pp"]},
      {t:"7:30 PM", type:"activity", name:"Dinner & Shopping in Akihabara", blurb:"Yodobashi Akiba", photo:["images/akihabara.jpg"]},
      {t:"9:45 PM", type:"transit", name:"Akihabara → Shiodome, rest", blurb:"Hibiya Line direct.", badges:["~12 min","¥180–200 (~$1)"]}
    ]
  },
  {
    label: "Thu Dec 24", sub: "Osaka", city: "Osaka / Sakai", stamp: "OSAKA",
    stops: [
      {t:"5:30 AM", type:"activity", name:"Check out hotel", blurb:""},
      {t:"7:00 AM", type:"transit", name:"→ Tokyo Station", blurb:"Walk or Marunouchi Line 1 stop.", badges:[]},
      {t:"7:30 AM", type:"transit", name:"Bullet Train to Shin-Osaka", photo:["images/bullet.jpg"], blurb:"Nozomi Shinkansen — sit right side, Mt. Fuji appears ~40–50 min in. Arriving Shin-Osaka ~10:00 AM", badges:["~2h30m","¥13,870–14,720 pp (~$87–92)"], note:"Reserve free oversized-luggage seat if bags exceed 160cm combined dimensions."},
      {t:"10:00 AM", type:"transit", name:"Shin-Osaka → Namba", blurb:"Ride Osaka Metro Midosuji Line to Namba Subway Station", badges:["~20–24 min","¥290 pp (~$2)"]},
      {t:"10:25 AM", type:"activity", name:"Drop off luggage at APA Namba Hotel", photo:["images/apa.jpg"], blurb:"Most Japan hotels will hold bags at the front desk before official check-in time — confirm at the desk when you arrive. Reserved, confirmation # 261003006936.", badges:["¥46,200 (~$300)"]},
      {t:"11:00 AM", type:"transit", name:"Namba → Sakai: Mizuno Tanrenjo", photo:["images/knife.webp"], blurb:"Ride Nankai Main Line from Namba Train Sta (not Namba Subway Sta) --> Shichidō Sta. Walk ~10 mins to shop.", badges:["~10–15 min"], note:"Small family-run shops, forging takes place between 9:30 AM and 11:30 AM. Contact Instagram @mizunotanrenjo to confirm hours."},
      {t:"12:30 PM", type:"activity", name:"Lunch in Sakai", blurb:""},
      {t:"1:30 PM", type:"transit", name:"Sakai → Osaka Castle", blurb:"• Ride Nankai Main Line from Shichidō Sta --> Shin-Imamiya Sta.\n• Ride Osaka Loop Line to Morinomiya Sta, short walk to the castle entrance.", badges:["~30–35 min total"]},
      {t:"2:30 PM", type:"activity", name:"Osaka Castle (afternoon into sunset)", photo:["images/osakasunset.jpeg"], blurb:""},
      {t:"4:30 PM", type:"transit", name:"Osaka Castle → Umeda Sky Building", blurb:"Ride Osaka Loop Line from Morinomiya Sta to Osaka Sta. Walk ~15min to Umeda Sky Building", badges:["~25 min"]},
      {t:"5:30 PM", type:"activity", name:"Umeda Sky Building", photo:["images/umeda.avif"], blurb:"Observation deck typically open until ~10:30 PM."},
      {t:"7:30 PM", type:"transit", name:"Umeda --> Namba", blurb:"Ride Midosuji Line from Osaka Sta (via Umeda Sta) --> Namba Subway Sta. Walk ~10min to hotel.", badges:["~20 min"]}, 
      {t:"8:00 PM", type:"activity", name:"Check in APA Namba Hotel", blurb:"Luggage already dropped off this morning"},
      {t:"8:30 PM", type:"activity", name:"Walk Dotonbori & Shinsaibashi, dinner at Kuromon Ichiba", photo:["images/kuromon.jpg", "images/dotonbori.jpg"], blurb:"~10–15 min from hotel to Dotonbori.", note:"Reserve the Tombori River Cruise ahead of time. Last cruise at 9:00PM"},
      {t:"10:30 PM", type:"activity", name:"Back to hotel & Rest", blurb:""}
    ]
  },
  {
    label: "Fri Dec 25", sub: "Kyoto - Nara", city: "Kyoto / Nara", stamp: "KYOTO/NARA",
    stops: [
      {t:"7:30 AM", type:"transit", name:"Namba → Kameoka", blurb:"• Walk ~10 mins from hotel to Namba Subway Station.\n• Ride Midosuji Line to Umeda Sta (9 mins, 4 stops).\n• Walk ~4 mins to Osaka Sta.\n• Ride Special Rapid JR Kyoto Line to Kyoto Sta (~30 mins, 3 stops).\n• Ride San-In Line to Saga-Arashiyama Sta (~20 mins, 7 stops). Arriving ~9:15AM", badges:["~1hr 45 mins","¥1400 pp (~$10)"], note:"Bring flashlight for Fushimi Inari Taisha hike later evening."},
      {t:"10:00 AM", type:"activity", name:"Hozugawa River Boat Ride", blurb:"Adventure on a charming, traditional boat downstream", badges:["~2 hr","$40 pp"], photo:["images/boat.avif"]},
      {t:"12:30 PM", type:"activity", name:"Arashiyama Park Nakanoshima Area / Togetsukyō Bridge", blurb:"Lunch", photo:["images/saganobridge.jpg"]},      
      {t:"2:00 PM", type:"transit", name:"Saga-Arashiyama Sta --> Kyoto Sta", blurb:"Ride San-In Line back to Kyoto Sta (~20 mins, 7 stops).", badges:["~20 mins","¥240 pp (~$2)"]},   
      {t:"2:55 PM", type:"transit", name:" Kyoto Sta --> Nara", blurb:"• Ride Aoniyoshi (Purple Sightseeing) train from Kyoto Sta to Kintetsu-Nara Sta. Arriving ~3:30PM.\n• Ride taxi or Nara City Loop Bus (Yellow Bus) outside Kintetsu Sta to Tōdai-ji Daibutsuden stop.\n• Head directly to Great Buddha Hall to get goshuin stamp.", badges:["~35 min","¥1,960 full-route fare (~$12)"], photo:["images/aoniyoshi.jpg"], note:"Runs daily except Thursdays — fine for your Friday. Only 84 seats total and it's popular, so reserve online or at a Kintetsu counter in advance rather than same-day. Double-check the exact midday departure time on the official Kintetsu site before finalizing, since it can shift."},      
      {t:"3:30 PM", type:"activity", name:"Todai-Ji & Nara Park", blurb:"Visit Nara Park and feed the deer.", photo:["images/nara.jpg"]},          
      {t:"6:00 PM", type:"transit", name:"Nara Park --> Inari Sta", blurb:"• Walk ~10mins from Nara Park to Kintetsu-Nara Sta.\n• Ride Kintetsu Limited Express to Kintetsu-Tambabashi Sta (~30 mins, 2 stops).\n• Walk ~3 mins to Tambabashi Sta.\n• Ride Keihan Main Line to Fushimi-Inari Sta (~7 mins, 4 stops).", badges:["~45 min","¥1440 pp (~$10)"]},        
      {t:"6:30 PM", type:"activity", name:"Fushimi Inari Taisha", photo:["images/fushimi.jpg"], blurb:"Walk 5 mins thru local houses and neighborhood to reach Fushimi foothills. Fushiminari Shrine --> Senbon Torii --> Bamboo Forest --> Kojingamine Observation Deck", badges:["~2hrs min"]},      
      {t:"9:00 PM", type:"transit", name:"Dinner near Inari Station. Inari Sta --> Kyoto Sta", blurb:"JR Nara Line, 2 stops, direct.", badges:["~8 min","¥150 pp (~$1)"]},
      {t:"9:30 PM", type:"transit", name:"Kyoto Sta -->  Namba", blurb:"• Ride Special Rapid JR Kyoto Line to Osaka Sta. (~30 mins, 3 stops).\n• Walk ~4 mins to Umeda Sta. \n• Ride Midosuji Line to Namba Subway Sta. Arriving hotel ~7:30 PM.", badges:["~50 min","¥820 pp (~$6)"]},    
      {t:"10:30 PM", type:"activity", name:"Pack luggage and rest", note:"Make sure all travel documents ready and accurate for next day flight to Hanoi."},      
    ]
  },
  {
    label: "Sat Dec 26", sub: "Osaka --> Hanoi", city: "Hanoi", stamp: "HANOI\nARR",
    stops: [
      {t:"9:00 AM", type:"activity", name:"Check out hotel Osaka", blurb:""},
      {t:"10:00 AM", type:"transit", name:"→ Kansai Airport", blurb:"Walk to Kintetsu Nambaekinishiguchi bus stop. Ride Kansai Airport Limousine Bus.", badges:["~1hr bus ride"], note:"Depart from the 2nd floor of the OCAT (Osaka City Air Terminal) building, located on Platform 9."},
      {t:"11:30 AM", type:"activity", name:"Arrive at KIX Airport, check in flight and clear duty free customs.", blurb:"Stop by KIX Observation Hall Sky View", photo:["images/kix.jpg"]},
      {t:"3:30 PM", type:"transit", name:"KIX --> HAN VJ 931. Confirmed # DEFZUF", blurb:"", badges:["$571 pp"]},
      {t:"7:15 PM", type:"activity", name:"Arrive in HAN, clear customs and immigration", blurb:" Take Bus 86 (Express Bus) to Cua Bac Intersection stop, walk 6 mins to La Santé Hotel, or contact hotel for aiprort shuttle service.", mapLink:"https://maps.app.goo.gl/2UaK5z1RSm7o6dS39", mapLabel:"Stay at La Santé Hotel (Expedia Confirm #: 73563866189458)"},
      {t:"10:30 PM", type:"activity", name:"Walk Hoan Kiem Lake and Rest", blurb:"", photo:["images/hoankiem.jpg"]}
    ]
  },
  {
    label: "Sun Dec 27", sub: "Hanoi", city: "Hanoi", stamp: "HANOI",
    stops: [
      {t:"9:00 AM", type:"activity", name:"Ho Chi Minh Museum & Mausoleum", blurb:"", photo:["images/hcmmau.jpg"]},
      {t:"12:30 PM", type:"activity", name:"Lunch", blurb:""},
      {t:"2:30 PM", type:"activity", name:"Military Museum, Quốc Tử Giám", blurb:"", photo:["images/qtg.jpg"]},
      {t:"5:20 PM", type:"activity", name:"Water puppet show", blurb:"Last water puppet show is 8:00 PM.", photo:["images/waterpup.jpg"]},        
      {t:"7:30 PM", type:"activity", name:"Train Track Coffee and Dinner", blurb:"", photo:["images/traincoffee.jpg"]},
      {t:"8:00 PM", type:"activity", name:"City Walk (stop by Opera House) and Rest", blurb:""}
      
    ]
  },
  {
    label: "Mon Dec 28", sub: "Hanoi --> Sapa (overnight train)", city: "Hanoi / Sapa", stamp: "SAPA",
    stops: [
      {t:"8:30 AM", type:"activity", name:"Tour Central Cathedral Interior", blurb:"", photo:["images/hanoicath.jpg"]},
      {t:"10:30 AM", type:"activity", name:"Check out Hanoi hotel and lunch", note:"Use luggage storage service (most hotels offer) in Hanoi, avoid carrying heavy to Sapa."},
      {t:"2:00 PM", type:"activity", name:"Visit Hoa Lo Prison relic and shopping", blurb:"", photo:["images/hoalo.jpg"]},
      {t:"7:00 PM", type:"activity", name:"Dinner, head to rail station for Sapa", blurb:"", note:"Pick up light baggage for overnight train. Leave heavy luggage at storage service."},      
      {t:"10:15 PM", type:"transit", name:"Sleeper Train Hanoi → Lao Cai", blurb:"Tonkin Heritage Train. Arrives Tue Dec 29, 6:00 AM.", photo:["images/tonkin.jpg"], note:"Ride shuttle (booked with train tickets) from Lao Cai station to Sapa town. Arrives Sapa Town ~7:30 AM."}
    ]
  },
  {
    label: "Tue Dec 29", sub: "Sapa", city: "Sapa", stamp: "SAPA",
    stops: [
      {t:"9:00 AM", type:"activity", name:"Check in Shom Li's Homestay", blurb:"Meet Shom Li near Catholic Church in Sapa town. Shom Li's husband takes heavy luggage to homestay. Trekking to homestay with Shom Li.", note:"~10km, 3–4 hrs trekking"},
      {t:"12:00 PM", type:"activity", name:"Guided Cultural Activities", blurb:""},
      {t:"6:30 PM", type:"activity", name:"Dinner at homestay", blurb:""},
      {t:"9:00 PM", type:"activity", name:"Homestay Activities or Sapa Night Market & Rest", blurb:""}
    ]
  },
  {
    label: "Wed Dec 30", sub: "Sapa --> Hanoi (overnight train)", city: "Sapa / Hanoi", stamp: "HANOI",
    stops: [
      {t:"8:00 AM", type:"activity", name:"Cat Cat Village & Fansipan Summit 1-Day Tour", blurb:"Lunch buffet combo. Cable Car Station – Sun World Fansipan Legend, via Sunworld Cable Car.", photo:["images/fansipancable.jpeg", "images/fansipan.jpg"], note:"Leave backpack at homestay, take only light daypack for the tour."},
      {t:"5:00 PM", type:"activity", name:"Shopping & Dinner at homestay", blurb:"", note:"Taxi from homestay to Lao Cai station. Ride shuttle (booked with train tickets) from Sapa town to Lao Cai station."},
      {t:"9:30 PM", type:"transit", name:"Lao Cai → Hanoi Train", blurb:"Tonkin Heritage Train. Arrives Thu Dec 31, 5:30 AM.", photo:["images/tonkin.jpg"]}
    ]
  },
  {
    label: "Thu Dec 31", sub: "Ninh Binh · NYE Hanoi", city: "Hanoi", stamp: "HANOI",
    stops: [
      {t:"5:30 AM", type:"transit", name:"Arrive Hanoi (overnight train from Lao Cai)", blurb:"Tonkin Heritage Train."},
      {t:"6:00 AM", type:"activity", name:"Check in La Santé Hotel hotel early, leave bags (if needed) and breakfast", blurb:"", note:"Book same hotel as before for convenient luggage storage. Need to contact for early check in."},
      {t:"8:00 AM", type:"activity", name:"Tràng An Ninh Binh Tour or Paragliding in Tam Dao", blurb:"", photo:["images/trangan.webp", "images/tamdao.jpg"], links:[{url:"https://www.klook.com/en-US/activity/203987-custom-private-ninh-binh-tour-hoa-lu-bai-dinh-trang-an-tam-coc-hang-mua-english-vietnamese-driver/?source_channel=googlettd&_language=en&_currency=USD&_activity_id=203987&package_id=672444&google_surface=&google_ads_click_source=tpa&google_funnel=&feed_product_id=203987&kl_package_id=672444&aid=26991&campaignid=24175408517&adgroupid=196813861662&targetid=kwl-2496495353726&matchtype=a&device=c&creative=822508711641&extensionid=&keyword=&loc_interest_ms=&loc_physical_ms=9027725&network=g&utm_content=campaignid_24175408517_adgroupid_196813861662&clk_src=%28GOOGLE-ADS-CLICK-SOURCE%29&gad_source=1&gad_campaignid=24175408517&gbraid=0AAAAACa_CWwBQj8DSyfEP0aq1XsriYwMR&gclid=CjwKCAjw25fWBhAVEiwAMopNjjhNku_nD_gN4NDPuRU4IXXDIqiysmfCjMLetq9nshiE7ZSXm5wA_hoCGPQQAvD_BwE&utm_medium=affiliate-alwayson&utm_source=non-network&utm_campaign=26991&utm_term=", label:"Custom Private Ninh Binh Tour"},{url:"https://youtu.be/iztUFaqt0L4?si=B9E8w9iAwhHHcr-G", label:"Trang An Youtube"},{url:"https://duluontamdao.vn/", label:"Tam Dao Paragliding"}]},     
      {t:"9:00 PM", type:"activity", name:"Dinner & NYE in Hanoi", blurb:"", photo:["images/nye.jpg"]}
    ]
  },
  {
    label: "Fri Jan 1", sub: "Hanoi → Quang Ninh", city: "Halong Bay", stamp: "HALONG\nBAY",
    stops: [
      {t:"6:00 AM", type:"activity", name:"Check out hotel Hanoi, Lan Ha Bay Cruise ", blurb:"Ride Grab to Opera House and get picked up by cruise shuttle, Hanoi → Quảng Ninh.", photo:["images/lanha.webp"]}
    ]
  },
  {
    label: "Sat Jan 2", sub: "Halong Bay → Hanoi", city: "Halong Bay / Hanoi", stamp: "HANOI",
    stops: [
      {t:"7:00 AM", type:"activity", name:"Lan Ha Bay Cruise", blurb:"Dropped off by cruise shuttle, Quảng Ninh → Hanoi."},
      {t:"4:30 PM", type:"activity", name:"Coffee & Relax in train station", blurb:"Tonkin Lounge."},
      {t:"7:20 PM", type:"transit", name:"Hanoi → Da Nang Train", blurb:"Tonkin Heritage Train. Arrives Sun Jan 3, 11:35 AM."}
    ]
  },
  {
    label: "Sun Jan 3", sub: "Da Nang · Hoi An", city: "Da Nang", stamp: "DA NANG",
    stops: [
      {t:"12:00 PM", type:"transit", name:"Da Nange strain station --> hotel", blurb:""},
      {t:"1:00 PM", type:"activity", name:"Check in hotel Da Nang & Lunch", blurb:"Contact hotel for early check in", photo:["images/danang.webp"]},
      {t:"2:30 PM", type:"transit", name:"Da Nang → Hoi An (grab or taxi)", blurb:"", badges:["~1hr"]},
      {t:"3:30 PM", type:"activity", name:"Visit Hoi An Ancient Town, Dinner", blurb:"yellow merchant houses, Japanese Covered Bridge, iconic silk lanterns (6:00-6:30 PM)", photo:["images/hoian.jpg"]},
      {t:"7:30 PM", type:"transit", name:"Hoi An → Da Nang", blurb:""},
      {t:"8:30 PM", type:"activity", name:"Dragon Bridge & Night Market, Rest", blurb:"Dragon Bridge fire show starts at 9:00 PM for 15 mins", photo:["images/dragon.jpg"]}
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
      {t:"9:00 AM", type:"activity", name:"Check out hotel", blurb:""},
      {t:"10:10 AM", type:"transit", name:"Zack: SIN --> SFO --> DFW", blurb:"UA2/UA2842", note:"Zack leaves early to catch the flight home. Don and Giang check out hotel and head to the airport later."},
      {t:"1:15 PM", type:"transit", name:"Don and Giang: SIN → SGN", blurb:"Vietnam Airlines VN 650. Lands 2:30 PM.", badges:["Flies home"]},
      {t:"2:30 PM", type:"transit", name:"Don and Giang: SGN → Trị An Lake", blurb:"Head straight to Trị An Lake after landing, so Saturday is a full day with family."}
    ]
  },
  {
    label: "Sat Jan 9 – Thu Jan 14", sub: "Trị An Lake — Family Visit (7 days)", city: "Trị An Lake", stamp: "TRI AN",
    stops: [
      {t:"Sat–Thu", type:"activity", name:"Visit Family", blurb:"A full week at Trị An Lake with family, starting Saturday — no fixed daily schedule."}
    ]
  },
  {
    label: "Fri Jan 15", sub: "Trị An Lake → Saigon → Fly Home", city: "Trị An Lake / Saigon", stamp: "FLY\nHOME",
    stops: [
      {t:"3:30 AM", type:"transit", name:"Trị An Lake → Saigon", blurb:"Head to Saigon ahead of the flight home."},
      {t:"7:55 AM", type:"transit", name:"Don and Giang: SGN --> ICN --> LAX --> IAH", blurb:"DAL7920 / DAL7833 / DAL1287."}
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
const sectionTabs = document.querySelectorAll('[data-section]');
const contentSections = {
  prep: document.querySelector('.todo-panel').closest('.content-section'),
  itinerary: document.querySelector('.itinerary-section'),
  'cost-tracking': document.querySelector('.cost-tracking-section')
};
const todoItems = document.querySelectorAll('[data-todo]');
const todoCount = document.getElementById('todo-count');
const todoStorageKey = 'asia-trip-2026-todos';

function updateTodoCount() {
  const completed = [...todoItems].filter(item => item.checked).length;
  todoCount.textContent = `${completed} / ${todoItems.length}`;
}

try {
  const savedTodos = JSON.parse(localStorage.getItem(todoStorageKey) || '{}');
  todoItems.forEach(item => {
    item.checked = savedTodos[item.dataset.todo] === true;
    item.addEventListener('change', () => {
      const currentTodos = JSON.parse(localStorage.getItem(todoStorageKey) || '{}');
      currentTodos[item.dataset.todo] = item.checked;
      localStorage.setItem(todoStorageKey, JSON.stringify(currentTodos));
      updateTodoCount();
    });
  });
} catch (error) {
  todoItems.forEach(item => item.addEventListener('change', updateTodoCount));
}
updateTodoCount();

sectionTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const selectedSection = tab.dataset.section;
    sectionTabs.forEach(item => item.classList.toggle('active', item === tab));
    Object.entries(contentSections).forEach(([name, section]) => {
      section.classList.toggle('active', name === selectedSection);
    });
    tabsEl.hidden = selectedSection !== 'itinerary';
  });
});

const costTripTabs = document.querySelectorAll('[data-cost-trip]');
const costTripPanels = document.querySelectorAll('[data-cost-trip-panel]');
const costSettlements = document.querySelectorAll('[data-cost-settlement]');

const costCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2
});
const costChartColors = ['#AE3B34', '#A6842A', '#267447', '#526A9C', '#B66B2C', '#805A91', '#4C8587'];

function escapeChartText(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function getCostEntries(panel) {
  return Array.from(panel.querySelectorAll('.cost-table tbody tr')).flatMap(row => {
    const cells = row.cells;
    const category = cells[6]?.textContent.trim();
    const dateMatch = cells[4]?.textContent.trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (!category || category === '—' || !dateMatch) return [];

    let usdAmount = 0;
    for (let index = 7; index < cells.length; index += 2) {
      const paidAmount = Number.parseFloat(cells[index].textContent.replace(/,/g, '').trim());
      if (Number.isFinite(paidAmount) && paidAmount > 0) usdAmount += paidAmount;
    }
    if (usdAmount <= 0) return [];

    const [, month, day, year] = dateMatch;
    return [{
      category,
      amount: usdAmount,
      date: new Date(Number(year), Number(month) - 1, Number(day))
    }];
  });
}

function renderCategoryChart(panel, entries) {
  const chart = panel.querySelector('.cost-category-chart');
  const totalElement = panel.querySelector('[data-cost-category-total]');
  const totals = new Map();
  entries.forEach(({ category, amount }) => totals.set(category, (totals.get(category) || 0) + amount));
  const categories = Array.from(totals, ([category, amount]) => ({ category, amount }))
    .sort((left, right) => right.amount - left.amount);
  const total = categories.reduce((sum, item) => sum + item.amount, 0);
  totalElement.textContent = costCurrency.format(total);

  if (total <= 0) {
    chart.innerHTML = '<p class="cost-chart-empty">No categorized expenses to chart yet.</p>';
    return;
  }

  let angle = -Math.PI / 2;
  const slices = categories.map(({ category, amount }, index) => {
    const portion = amount / total;
    const color = costChartColors[index % costChartColors.length];
    let path;
    if (portion >= 0.9999) {
      path = 'M 160 30 A 130 130 0 1 1 160 290 A 130 130 0 1 1 160 30 Z';
    } else {
      const endAngle = angle + portion * Math.PI * 2;
      const startX = 160 + 130 * Math.cos(angle);
      const startY = 160 + 130 * Math.sin(angle);
      const endX = 160 + 130 * Math.cos(endAngle);
      const endY = 160 + 130 * Math.sin(endAngle);
      const largeArc = portion > 0.5 ? 1 : 0;
      path = `M 160 160 L ${startX} ${startY} A 130 130 0 ${largeArc} 1 ${endX} ${endY} Z`;
      angle = endAngle;
    }
    return `<path d="${path}" fill="${color}"><title>${escapeChartText(category)}: ${costCurrency.format(amount)} (${(portion * 100).toFixed(1)}%)</title></path>`;
  }).join('');
  const legend = categories.map(({ category, amount }, index) => {
    const percent = (amount / total * 100).toFixed(1);
    return `<li><span class="cost-legend-swatch" style="--swatch:${costChartColors[index % costChartColors.length]}"></span><span class="cost-legend-name">${escapeChartText(category)}</span><span>${costCurrency.format(amount)} · ${percent}%</span></li>`;
  }).join('');

  chart.innerHTML = `
    <div class="cost-category-content">
      <svg class="cost-pie-svg" viewBox="0 0 320 320" role="img" aria-label="Expense share by category, total ${costCurrency.format(total)}">
        <title>Expense share by category</title>${slices}
      </svg>
      <ul class="cost-chart-legend">${legend}</ul>
    </div>`;
}

function renderDailyChart(panel, entries) {
  const chart = panel.querySelector('.cost-daily-chart');
  const totalElement = panel.querySelector('[data-cost-daily-total]');
  const totals = new Map();
  entries.forEach(({ date, amount }) => {
    const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    const current = totals.get(key) || { date, amount: 0 };
    current.amount += amount;
    totals.set(key, current);
  });
  const days = Array.from(totals.values()).sort((left, right) => left.date - right.date);
  const total = days.reduce((sum, item) => sum + item.amount, 0);
  totalElement.textContent = costCurrency.format(total);

  if (!days.length) {
    chart.innerHTML = '<p class="cost-chart-empty">No dated expenses to chart yet.</p>';
    return;
  }

  const width = Math.max(720, days.length * 82 + 120);
  const height = 330;
  const left = 108;
  const right = width - 108;
  const top = 30;
  const bottom = 264;
  const plotHeight = bottom - top;
  const step = (right - left) / days.length;
  const dailyMaximum = Math.max(...days.map(day => day.amount));
  const runningMaximum = total;
  let runningTotal = 0;
  const linePoints = [];
  const bars = [];
  const labels = [];

  days.forEach(({ date, amount }, index) => {
    const center = left + step * (index + 0.5);
    const barHeight = amount / dailyMaximum * plotHeight;
    const barY = bottom - barHeight;
    runningTotal += amount;
    const lineY = bottom - runningTotal / runningMaximum * plotHeight;
    const dateLabel = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    linePoints.push(`${center},${lineY}`);
    bars.push(`<g><title>${dateLabel}: daily ${costCurrency.format(amount)}, running total ${costCurrency.format(runningTotal)}</title><rect x="${center - Math.min(40, step * 0.28)}" y="${barY}" width="${Math.min(80, step * 0.56)}" height="${barHeight}" rx="3" fill="#A6842A" opacity="0.82"/></g>`);
    labels.push(`<text x="${center}" y="${bottom + 22}" text-anchor="middle">${dateLabel}</text>`);
  });

  const dailyTicks = [0, dailyMaximum / 2, dailyMaximum];
  const dailyGrid = dailyTicks.map((value, index) => {
    const y = bottom - index / 2 * plotHeight;
    return `<line x1="${left}" y1="${y}" x2="${right}" y2="${y}" class="cost-chart-grid"/><text x="${left - 8}" y="${y + 4}" text-anchor="end">${costCurrency.format(value)}</text><text x="${right + 8}" y="${y + 4}">${costCurrency.format(total * index / 2)}</text>`;
  }).join('');
  chart.innerHTML = `
    <div class="cost-daily-scroll">
      <svg class="cost-daily-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Daily expenses as bars and running total as a line">
        <title>Daily spend and running total in USD</title>
        <text x="${left}" y="16" class="cost-chart-axis-title">Daily spend</text>
        <text x="${right}" y="16" text-anchor="end" class="cost-chart-axis-title">Running total</text>
        ${dailyGrid}
        ${bars.join('')}
        <polyline points="${linePoints.join(' ')}" fill="none" stroke="#AE3B34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        ${linePoints.map(point => {
          const [x, y] = point.split(',');
          return `<circle cx="${x}" cy="${y}" r="4" fill="#AE3B34"/>`;
        }).join('')}
        ${labels.join('')}
      </svg>
    </div>
    <div class="cost-chart-key"><span><i class="cost-bar-key"></i>Daily spend</span><span><i class="cost-line-key"></i>Running total</span></div>`;
}

function renderCostCharts(panel) {
  const entries = getCostEntries(panel);
  renderCategoryChart(panel, entries);
  renderDailyChart(panel, entries);
}

costTripPanels.forEach(renderCostCharts);
costTripTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const selectedTrip = tab.dataset.costTrip;
    costTripTabs.forEach(item => {
      const isSelected = item === tab;
      item.classList.toggle('active', isSelected);
      item.setAttribute('aria-pressed', String(isSelected));
    });
    costTripPanels.forEach(panel => {
      const isSelected = panel.dataset.costTripPanel === selectedTrip;
      panel.classList.toggle('active', isSelected);
      panel.hidden = !isSelected;
    });
    costSettlements.forEach(settlement => {
      settlement.hidden = settlement.dataset.costSettlement !== selectedTrip;
    });
    const selectedPanel = Array.from(costTripPanels).find(panel => panel.dataset.costTripPanel === selectedTrip);
    if (selectedPanel) renderCostCharts(selectedPanel);
  });
});

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
    const links = s.links || (s.mapLink ? [{url: s.mapLink, label: s.mapLabel || 'Open in Google Maps'}] : []);
    const linksHtml = links.length
      ? `<ul class="activity-links">${links.map(link => `<li><a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}</a></li>`).join('')}</ul>`
      : '';
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
          ${linksHtml}
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