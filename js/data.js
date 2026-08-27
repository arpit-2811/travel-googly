/**
 * TRAVEL GOOGLY — CORE DATA STORE
 * Packages, Categories, Destinations, Reviews, FAQs, and Gallery items.
 */

const CATEGORIES = [
  {
    id: 'domestic',
    name: 'Domestic Tours',
    description: 'Explore breathtaking hill stations, serene beaches, royal heritage circuits, and sacred pilgrimage yatras across India (Goa, Kashmir, Kerala, Manali, Rajasthan, Andaman, Ladakh, Char Dham).',
    count: 'Explore Domestic Packages',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 10a2 2 0 100-4 2 2 0 000 4zM9 21v-6a2 2 0 012-2h2a2 2 0 012 2v6"/></svg>`
  },
  {
    id: 'international',
    name: 'International Tours',
    description: 'Seamless overseas vacations with verified 4★ hotels, sightseeing, flights, and visa assistance (Nepal, Dubai, Bali, Thailand, Singapore & Malaysia, Vietnam, Maldives).',
    count: 'Explore International Packages',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 000 18M12 3a14.5 14.5 0 010 18"/></svg>`
  }
];

const PACKAGES = [
  {
    slug: 'goa-beach-break',
    name: 'Goa Beach Break & Watersports',
    category: 'domestic',
    nights: 3,
    days: 4,
    price: '5,999',
    route: 'North Goa · Calangute · Baga · South Goa Heritage',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582972236019-ea4af5dec5f0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=800&q=80'
    ],
    summary: 'A relaxed coastal holiday featuring North Goa beach hubs, watersports combo at Baga, historical Portuguese churches in Old Goa, and an evening Mandovi river cruise.',
    highlights: [
      '3 Nights accommodation in premium resort with swimming pool',
      'Full-day North Goa sightseeing covering Calangute, Anjuna & Chapora Fort',
      'Full-day South Goa tour: Basilica of Bom Jesus & Miramar Beach',
      '1-Hour Mandovi river sunset cruise with Goan folk dance',
      'Airport/Railway station private cab pick & drop'
    ],
    itinerary: [
      { day: '01', title: 'Arrival in Goa & Beach Leisure', detail: 'Meet our chauffeur upon arrival at Goa Airport or Thivim/Madgaon station. Transfer to your resort. Spend the evening relaxing at Calangute beach or exploring local shacks.' },
      { day: '02', title: 'North Goa Forts & Water Adventures', detail: 'Visit the historic 17th-century Fort Aguada, followed by Baga, Anjuna, and Chapora Fort (Dil Chahta Hai point). Optional parasailing and jet-ski package included.' },
      { day: '03', title: 'South Goa Churches, Spices & River Cruise', detail: 'Explore UNESCO Heritage Old Goa churches including Basilica of Bom Jesus and Se Cathedral. Visit Mangueshi temple and end with a sunset cruise on the Mandovi river.' },
      { day: '04', title: 'Souvenir Shopping & Departure', detail: 'Enjoy a leisurely breakfast buffet. Check out and proceed to Panjim market for cashew and feni shopping before dropping off at the airport/station.' }
    ],
    inclusions: [
      '3 Nights resort accommodation in AC Deluxe room',
      'Daily buffet breakfast at resort',
      'Private AC sedan for all airport transfers and sightseeing',
      '1-Hour Mandovi River Cruise entry tickets',
      'Driver allowances, toll, parking, and fuel charges'
    ],
    exclusions: [
      'Flight or train tickets to/from Goa',
      'Lunch, dinners, and alcoholic beverages',
      'Personal water sports fees beyond package',
      'Anything not explicitly mentioned in inclusions'
    ],
    thingsToCarry: ['Cotton clothes & swimwear', 'Sunscreen & sunglasses', 'Valid Govt ID proof (Aadhaar/Voter ID)', 'Waterproof phone pouch'],
    cancellationPolicy: 'Full refund up to 15 days before travel. 50% refund between 7–14 days. Non-refundable within 7 days of journey.',
    bestTime: 'October to May',
    featured: true
  },
  {
    slug: 'kashmir-valley-gulmarg',
    name: 'Kashmir Valley & Gulmarg Snowfields',
    category: 'domestic',
    nights: 5,
    days: 6,
    price: '11,499',
    route: 'Srinagar · Gulmarg · Pahalgam · Dal Lake Houseboat',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80'
    ],
    summary: 'Experience paradise on earth: romantic Shikara rides on Dal Lake, meadow of gold in Sonmarg, world famous Gulmarg Gondola, and the pine valleys of Pahalgam.',
    highlights: [
      '1 Night stay in luxury cedar-wood Dal Lake houseboat',
      '1-Hour complementary Shikara ride at golden hour',
      'Excursion to Gulmarg with Phase 1 Gondola ride assistance',
      '2 Nights scenic stay in Pahalgam near Lidder River',
      'Private heater-equipped sedan throughout the tour'
    ],
    itinerary: [
      { day: '01', title: 'Arrival in Srinagar & Shikara Sunset', detail: 'Chauffeur pickup from Srinagar Airport. Check-in to your luxury houseboat on Dal Lake. Enjoy a serene 1-hour sunset Shikara ride across Floating Gardens and Nehru Park.' },
      { day: '02', title: 'Srinagar Mughal Gardens to Gulmarg', detail: 'Visit Shalimar Bagh, Nishat Bagh, and the Cheshma Shahi gardens. Afternoon drive to Gulmarg (Meadow of Flowers) through saffron fields and Tangmarg.' },
      { day: '03', title: 'Gulmarg Gondola & Snow Activities', detail: 'Ride the world’s second-highest cable car (Gondola Phase 1 & 2) up to Mt. Apharwat. Enjoy snow sledging or skiing before driving to hotel for dinner.' },
      { day: '04', title: 'Gulmarg to Pahalgam Valley of Shepherds', detail: 'Drive scenic route along Lidder River to Pahalgam. En route visit Avantipur ruins and apple orchards. Check-in to riverside hotel.' },
      { day: '05', title: 'Pahalgam Aru & Betaab Valley Sightseeing', detail: 'Visit Betaab Valley (named after the Bollywood classic) and Aru Valley. Enjoy horseback riding to Baisaran meadow (Mini Switzerland).' },
      { day: '06', title: 'Departure from Srinagar', detail: 'Breakfast at hotel, scenic drive back to Srinagar Airport with stops at Kashmiri saffron and dry fruit emporiums for authentic shopping.' }
    ],
    inclusions: [
      '4 Nights 3★/4★ Hotel stays + 1 Night Houseboat stay',
      'Breakfast and Dinner (MAP Plan) on all days',
      'Dedicated private non-sharing heating cab',
      '1-Hour Shikara ride on Dal Lake',
      'Inner line passes and toll/parking charges'
    ],
    exclusions: [
      'Airfare to/from Srinagar',
      'Gulmarg Gondola tickets (booked directly via official portal)',
      'Union cab charges in Pahalgam (Aru/Betaab valley local taxi)',
      'Pony rides and personal winter activities'
    ],
    thingsToCarry: ['Heavy woollens & thermals (Winter) / Light jacket (Summer)', 'Sturdy walking shoes', 'Moisturiser & lip balm', 'Postpaid SIM card (only postpaid works in J&K)'],
    cancellationPolicy: 'Full refund up to 20 days prior to departure. 50% between 10–19 days. Non-refundable under 10 days.',
    bestTime: 'Year-round (Snow in Dec-Feb, Greenery in Apr-Sep)',
    featured: true
  },
  {
    slug: 'manali-solang-honeymoon',
    name: 'Manali & Solang Valley Honeymoon Special',
    category: 'honeymoon',
    nights: 4,
    days: 5,
    price: '6,999',
    route: 'Delhi/Chandigarh · Manali · Solang Valley · Atal Tunnel · Kasol',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1579619569724-4fec7b309605?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80'
    ],
    summary: 'A tailor-made romantic mountain getaway with flower-bed decor, private candlelight dinner, scenic snow views at Atal Tunnel, and relaxed riverside cafe hopping in Kasol.',
    highlights: [
      'Special Honeymoon Inclusions: Candlelight dinner, honeymoon cake & flower bed decor',
      'Solang Valley adventure hub + Atal Tunnel & Sissu (Lahaul) day trip',
      'Manali local sightseeing: Hadimba Temple, Vashisht Hot Springs & Mall Road',
      'Day trip to Parvati Valley, Manikaran Sahib & Kasol cafes',
      'Delhi/Chandigarh to Manali roundtrip transfers'
    ],
    itinerary: [
      { day: '01', title: 'Arrival in Manali & Candlelight Dinner', detail: 'Pickup from Manali Volvo stand or Chandigarh. Check into your mountain-view resort. Evening at leisure followed by a special candlelight dinner with anniversary/honeymoon cake.' },
      { day: '02', title: 'Hadimba Temple & Local Culture', detail: 'Explore the 450-year-old wooden Hadimba Devi Temple amidst giant deodar trees. Visit Vashisht hot water sulphur springs, Tibetan Monastery, and stroll along Mall Road.' },
      { day: '03', title: 'Solang Valley & Atal Tunnel to Sissu', detail: 'Full-day excursion to Solang Valley for ropeway and zorbing. Drive through the engineering marvel Atal Tunnel into the snow-capped valley of Sissu in Lahaul.' },
      { day: '04', title: 'Kasol & Manikaran Gurudwara Excursion', detail: 'Scenic drive to Kullu for river rafting and Pashmina shawl showroom visit. Proceed to Manikaran Sahib hot springs and chill out at Kasol hipster cafes.' },
      { day: '05', title: 'Shopping on Mall Road & Farewell', detail: 'Enjoy breakfast with valley views. Late checkout, shop for wooden handicrafts and Kullu apples, followed by evening departure transfer.' }
    ],
    inclusions: [
      '4 Nights stay in 4★ mountain-view room',
      'Daily breakfast & dinners at hotel',
      '1 Special Candlelight Dinner with cake and floral decor',
      'Private AC/Heated cab for all sightseeing',
      'All toll taxes, state permits, and driver charges'
    ],
    exclusions: [
      'Personal adventure sports (Paragliding, River Rafting, ATV)',
      'Rohtang Pass NGT Permit (if required, booked subject to availability)',
      'Lunches and snacks',
      'Room heater charges if charged separately by hotel'
    ],
    thingsToCarry: ['Warm layers & jackets', 'Comfortable sports shoes', 'Sunscreen & camera', 'Personal medicines'],
    cancellationPolicy: '100% refund up to 14 days before trip date. 50% between 7–13 days. Non-refundable under 7 days.',
    bestTime: 'October to June',
    featured: true
  },
  {
    slug: 'kerala-backwaters-munnar',
    name: 'Kerala Tea Gardens & Backwater Cruise',
    category: 'domestic',
    nights: 5,
    days: 6,
    price: '9,999',
    route: 'Cochin · Munnar · Thekkady · Alleppey Houseboat',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80'
    ],
    summary: 'Immerse yourself in God’s Own Country: lush green tea plantations of Munnar, spice plantations in Thekkady, and a private overnight cruise in Alleppey backwaters.',
    highlights: [
      '2 Nights amidst rolling emerald tea estates in Munnar',
      '1 Night in spice capital Thekkady with Periyar Lake boat safari',
      '1 Night in private traditional air-conditioned Alleppey Houseboat',
      'Authentic Kerala meals prepared fresh on-board by private chef',
      'Visit Cheeyappara & Valara Waterfalls en route'
    ],
    itinerary: [
      { day: '01', title: 'Arrival Cochin & Drive to Munnar', detail: 'Chauffeur pickup at Cochin Airport/Ernakulam. Drive through misty Western Ghats with photo stops at Cheeyappara and Valara waterfalls. Check-in to Munnar resort.' },
      { day: '02', title: 'Munnar Tea Estates & Eravikulam', detail: 'Visit Eravikulam National Park (home to endangered Nilgiri Tahr). Explore Tata Tea Museum, Mattupetty Dam, Echo Point, and Rose Garden.' },
      { day: '03', title: 'Munnar to Thekkady Spice Hills', detail: 'Scenic morning drive to Thekkady. Check-in and visit aromatic spice plantations (cardamom, pepper, cinnamon). Evening Kathakali and Kalaripayattu martial arts show.' },
      { day: '04', title: 'Periyar Safari & Alleppey Houseboat Check-in', detail: 'Optional early boat safari in Periyar Wildlife Sanctuary. Drive to Alleppey and board your private traditional Houseboat at 12:30 PM. Cruise through tranquil canals.' },
      { day: '05', title: 'Alleppey to Kovalam / Marari Beach', detail: 'Breakfast on houseboat while watching village life on backwaters. Check-out and transfer to scenic Marari/Kovalam beach resort for relaxing seaside evening.' },
      { day: '06', title: 'Cochin Fort & Departure', detail: 'Check out and visit historic Fort Kochi, Chinese Fishing Nets, and Jew Town for spice and antique shopping before drop-off at Cochin Airport.' }
    ],
    inclusions: [
      '4 Nights in 3★/4★ Resort + 1 Night Private AC Houseboat',
      'All meals on Houseboat (Lunch, Evening tea/snacks, Dinner, Breakfast)',
      'Daily breakfast at all other hotels',
      'Private AC vehicle for all transfers and sightseeing',
      'All toll, parking, driver bata, and state tax'
    ],
    exclusions: [
      'Flight/Train tickets to Cochin',
      'Periyar boat safari tickets and cultural show tickets',
      'Lunch and dinner at hotels (other than Houseboat)',
      'Any Ayurvedic spa treatments taken locally'
    ],
    thingsToCarry: ['Light breathable cottons', 'Rain umbrella / poncho', 'Mosquito repellent cream', 'Camera with extra memory card'],
    cancellationPolicy: 'Free cancellation up to 15 days before arrival. 50% deduction between 8–14 days. 100% deduction within 7 days.',
    bestTime: 'September to April',
    featured: true
  },
  {
    slug: 'rajasthan-heritage-circuit',
    name: 'Royal Rajasthan Heritage Circuit',
    category: 'domestic',
    nights: 6,
    days: 7,
    price: '11,999',
    route: 'Jaipur · Jodhpur · Jaisalmer Thar Desert',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80'
    ],
    summary: 'Travel back in time to the era of Maharajas: grandeur of Amer Fort in Pink City, majestic Mehrangarh Fort in Blue City, and luxury desert camping in Thar.',
    highlights: [
      '2 Nights in Jaipur, 1 Night in Jodhpur & 2 Nights in Jaisalmer (1 Night Desert Camp)',
      'Camel safari & sunset on Sam Sand Dunes with Rajasthani folk music & dance',
      'Private guided visits to Amer Fort, City Palace, Hawa Mahal & Jantar Mantar',
      'Explore massive Mehrangarh Fort and Jaswant Thada in Jodhpur',
      'Authentic Rajasthani Dal Baati Churma dinner experience'
    ],
    itinerary: [
      { day: '01', title: 'Arrival in Jaipur (Pink City)', detail: 'Welcome pickup at Jaipur Airport/Railway Station with traditional tilak. Check-in to heritage hotel. Evening visit to Birla Temple and Chokhi Dhani cultural village.' },
      { day: '02', title: 'Jaipur Royal Forts & Palaces', detail: 'Full-day tour: Amer Fort with elephant/jeep ride, Jal Mahal photo stop, City Palace Museum, Hawa Mahal facade, and UNESCO-listed Jantar Mantar observatory.' },
      { day: '03', title: 'Jaipur to Jodhpur (The Blue City)', detail: 'Drive to Jodhpur via Pushkar (Brahma Temple & sacred lake). Arrive in Jodhpur, check-in, and spend the evening admiring blue alley views from old city rooftops.' },
      { day: '04', title: 'Mehrangarh Fort & Drive to Jaisalmer', detail: 'Visit the impregnable Mehrangarh Fort and marble cenotaph Jaswant Thada. Scenic drive across Thar desert to the Golden City of Jaisalmer.' },
      { day: '05', title: 'Jaisalmer Living Fort & Sam Dunes Camp', detail: 'Explore Jaisalmer Golden Fort and Patwon ki Haveli. Afternoon drive to Sam Sand Dunes. Enjoy camel ride, quad biking, and stay in Swiss tents with live Kalbelia dance and buffet dinner.' },
      { day: '06', title: 'Jaisalmer Heritage & Gadisar Lake', detail: 'Visit the haunted village of Kuldhara and peaceful Gadisar Lake. Leisure time to shop for leather crafts, silver jewellery, and mirror-work textiles.' },
      { day: '07', title: 'Departure via Jodhpur / Jaisalmer', detail: 'Breakfast at hotel, check out and transfer to Jaisalmer or Jodhpur airport/station for your onward journey.' }
    ],
    inclusions: [
      '5 Nights in 3★/4★ Heritage Hotels + 1 Night Swiss Luxury Desert Camp',
      'Daily breakfast at all hotels + 1 Gala Buffet Dinner at Desert Camp',
      'Camel Safari on Thar Sand Dunes',
      'Dedicated AC chauffeur-driven sedan throughout',
      'Toll tax, state border taxes, parking, and driver allowances'
    ],
    exclusions: [
      'Train or Airfare tickets',
      'Monument entry tickets and guide fees',
      'Lunches and drinks',
      'Jeep Dune bashing and personal activities'
    ],
    thingsToCarry: ['Sunglasses and broad-rim hat', 'Comfortable footwear for fort walking', 'Light jacket for desert night', 'Cash for local street shopping'],
    cancellationPolicy: 'Free cancellation up to 14 days before tour. 50% penalty between 7–13 days. Non-refundable under 7 days.',
    bestTime: 'October to March',
    featured: true
  },
  {
    slug: 'andaman-islands-paradise',
    name: 'Andaman Islands & Radhanagar Beach',
    category: 'domestic',
    nights: 5,
    days: 6,
    price: '14,999',
    route: 'Port Blair · Havelock Island · Neil Island',
    image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80'
    ],
    summary: 'Turquoise waters and pristine coral reefs: Cellular Jail light & sound show, high-speed cruise to Havelock, Asia’s cleanest Radhanagar beach, and natural coral bridge at Neil Island.',
    highlights: [
      'High-speed premium catamaran cruise tickets (Makruzz / Nautika)',
      'Visit Asia’s top-ranked Radhanagar Beach (Beach No. 7 Havelock)',
      'Elephanta Beach excursion with complimentary introductory snorkeling',
      'Natural Rock Formation & Laxmanpur beach sunset at Neil Island',
      'Historical Cellular Jail Sound & Light Show in Port Blair'
    ],
    itinerary: [
      { day: '01', title: 'Arrival Port Blair & Cellular Jail History', detail: 'Pickup from Veer Savarkar Airport Port Blair. Transfer to hotel. Afternoon visit to Cellular Jail National Memorial and attend the poignant Sound & Light Show.' },
      { day: '02', title: 'High-Speed Cruise to Havelock & Radhanagar', detail: 'Board luxury catamaran to Havelock Island. Check-in to beach resort. Afternoon visit to stunning Radhanagar Beach, renowned for powdery white sand and crimson sunsets.' },
      { day: '03', title: 'Elephant Beach Snorkeling & Coral Life', detail: 'Speedboat ride to Elephant Beach. Complimentary snorkeling session to see vivid coral reefs and marine life. Afternoon at leisure for cafe visits in Havelock.' },
      { day: '04', title: 'Havelock to Neil Island (Shaheed Dweep)', detail: 'Cruise to Neil Island. Visit Bharatpur Beach (water sports hub) and Laxmanpur Beach to see the famous Natural Coral Bridge rock formation.' },
      { day: '05', title: 'Neil Island to Port Blair Return & Souvenirs', detail: 'Morning cruise back to Port Blair. Visit Sagarika Govt Cottage Industries emporium for pearl jewellery and seashell souvenirs.' },
      { day: '06', title: 'Departure from Andaman', detail: 'Breakfast at hotel, check out and airport drop-off with unforgettable island memories.' }
    ],
    inclusions: [
      '5 Nights in 3★/4★ AC Beach Resorts & Hotels',
      'Daily breakfast at all accommodations',
      'All inter-island ferry transfers in luxury AC Cruise (Makruzz/Green Ocean)',
      'Private AC cabs for all land transfers and sightseeing',
      'Cellular jail entry tickets and sound & light show passes'
    ],
    exclusions: [
      'Airfare to/from Port Blair',
      'Scuba diving / Sea kart / Underwater sea-walk charges',
      'Meals not specified in inclusions',
      'Camera / video fees at monuments'
    ],
    thingsToCarry: ['Beachwear & rash guards', 'Underwater camera / waterproof pouch', 'Sunblock & sunhat', 'Valid Govt Photo ID (Mandatory for ferry checks)'],
    cancellationPolicy: 'Cancellations 21 days before departure get 80% refund. 10–20 days get 40%. Under 10 days non-refundable.',
    bestTime: 'October to May',
    featured: true
  },
  {
    slug: 'char-dham-yatra',
    name: 'Sacred Char Dham Yatra (Uttarakhand)',
    category: 'pilgrimage',
    nights: 10,
    days: 11,
    price: '16,999',
    route: 'Haridwar · Yamunotri · Gangotri · Kedarnath · Badrinath · Rishikesh',
    image: 'https://images.unsplash.com/photo-1609137144822-211c473138b3?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1609137144822-211c473138b3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80'
    ],
    summary: 'The ultimate spiritual journey in the Himalayas: holy darshans at Yamunotri, Gangotri, Kedarnath Jyotirlinga, and Badrinath with verified hotel stays and experienced mountain drivers.',
    highlights: [
      'Complete darshan of all four holy shrines with biometric yatra registration',
      'Helicopter / pony / doli booking assistance for Kedarnath trek',
      'Special Ganga Aarti darshan at Har Ki Pauri Haridwar & Rishikesh',
      'Experienced Himalayan chauffeur in pushback comfortable coach/tempo/sedan',
      'Pure vegetarian hygienic satvik meals throughout the yatra'
    ],
    itinerary: [
      { day: '01', title: 'Delhi/Haridwar to Barkot', detail: 'Pickup from Haridwar/Dehradun. Drive through Mussoorie and Kempty Falls to Barkot base camp. Evening yatra briefing and temple rest.' },
      { day: '02', title: 'Barkot – Yamunotri Darshan – Barkot', detail: 'Early drive to Janki Chatti. Trek 6 km to sacred Yamunotri temple. Holy dip in Surya Kund, cook rice in hot springs, darshan and trek back to Barkot.' },
      { day: '03', title: 'Barkot to Uttarkashi (Kashi Vishwanath)', detail: 'Drive along Bhagirathi river to Uttarkashi. Visit the ancient Kashi Vishwanath temple and Shakti temple with giant bronze trident.' },
      { day: '04', title: 'Uttarkashi – Gangotri Darshan – Uttarkashi', detail: 'Drive to holy Gangotri through picturesque Harsil Valley. Take holy dip in Bhagirathi river, attend temple prayer, and return to Uttarkashi.' },
      { day: '05', title: 'Uttarkashi to Guptkashi / Sitapur', detail: 'Scenic journey to Guptkashi along Mandakini river. Visit Ardh Narishwar temple. Prepare for Kedarnath trek next morning.' },
      { day: '06', title: 'Guptkashi to Kedarnath Ji Shrine', detail: 'Proceed to Sonprayag/Gaurikund. Trek 16 km or take helicopter to Kedarnath. Evening darshan and attend the divine evening Aarti at Kedarnath temple.' },
      { day: '07', title: 'Kedarnath Darshan & Trek down to Guptkashi', detail: 'Early morning Maha Abhishek darshan at Kedarnath. Trek down to Gaurikund, reunite with driver at Sonprayag and overnight stay in Guptkashi.' },
      { day: '08', title: 'Guptkashi to Badrinath via Chopta', detail: 'Drive through Chopta and Joshimath to Badrinath. Evening darshan and dip in Tapt Kund natural thermal sulphur spring.' },
      { day: '09', title: 'Badrinath Darshan, Mana Village to Rudraprayag', detail: 'Morning darshan at Badrinath. Visit Mana (last Indian village), Vyas Gufa, and Bhim Pul. Drive down to Rudraprayag (confluence of Alaknanda and Mandakini).' },
      { day: '10', title: 'Rudraprayag to Rishikesh & Haridwar', detail: 'Drive via Devprayag (confluence forming Holy Ganga). Arrive in Rishikesh, visit Laxman Jhula and attend Parmarth Niketan Ganga Aarti.' },
      { day: '11', title: 'Haridwar to Delhi Drop-off', detail: 'Morning holy dip at Har Ki Pauri. Check-out and drop off at Haridwar / Delhi for onward journey with divine blessings.' }
    ],
    inclusions: [
      '10 Nights accommodation in verified neat 2★/3★ pilgrimage hotels and ashrams',
      'Daily breakfast and pure vegetarian dinner',
      'Dedicated mountain vehicle with professional driver',
      'Char Dham Biometric Yatra registration card assistance',
      'All toll, state tax, and parking fees'
    ],
    exclusions: [
      'Kedarnath helicopter tickets or Pony / Doli / Palki charges',
      'VIP darshan slips or Special Pooja tokens',
      'Lunch and beverages',
      'Travel insurance and medical expenses'
    ],
    thingsToCarry: ['Heavy thermal woollens, gloves & cap', 'Trekking shoes with good grip', 'Raincoat / poncho', 'Basic first aid kit & Diamox (altitude sickness)'],
    cancellationPolicy: 'Cancellations 30 days prior receive 80% refund. 15–29 days receive 50%. Under 15 days non-refundable.',
    bestTime: 'May to June & September to November',
    featured: true
  },
  {
    slug: 'ladakh-bike-expedition',
    name: 'Ladakh Bike & SUV Expedition',
    category: 'adventure',
    nights: 7,
    days: 8,
    price: '17,499',
    route: 'Leh · Sham Valley · Nubra Valley · Pangong Lake · Khardung La',
    image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80'
    ],
    summary: 'The ultimate adrenaline rush: conquer Khardung La (17,982 ft), ride Royal Enfield bikes through Hunder sand dunes, and camp under millions of stars by azure Pangong Lake.',
    highlights: [
      'Royal Enfield Himalayan 411cc / 350cc bike with fuel or 4x4 SUV seat',
      'Cross world’s highest motorable passes: Khardung La & Chang La',
      'Overnight luxury tented camp stay directly on the shores of Pangong Lake',
      'Double-humped Bactrian camel ride at Hunder sand dunes',
      'Mechanic backup vehicle + Oxygen cylinder and medical support'
    ],
    itinerary: [
      { day: '01', title: 'Arrival in Leh & Complete Acclimatization', detail: 'Fly into Kushok Bakula Rimpochee Airport Leh (11,500 ft). Transfer to hotel. Mandatory full day rest to acclimatize to high altitude.' },
      { day: '02', title: 'Leh Local: Magnetic Hill & Sangam', detail: 'Test ride along Indus Highway. Visit Magnetic Hill, Gurudwara Pathar Sahib, and Sangam (confluence of Zanskar & Indus rivers). Evening at Leh Palace.' },
      { day: '03', title: 'Leh to Nubra Valley via Khardung La (17,982 ft)', detail: 'Ride over the mighty Khardung La pass. Descend into Nubra Valley. Enjoy double-humped camel safari on white sand dunes at Hunder.' },
      { day: '04', title: 'Nubra Valley: Diskit Monastery & Turtuk', detail: 'Visit the 106-ft Maitreya Buddha statue at Diskit. Day ride to Turtuk, the last Indian village before the LoC with rich Balti culture.' },
      { day: '05', title: 'Nubra to Pangong Tso via Shyok River', detail: 'Off-road along the dramatic Shyok river route directly to Pangong Lake. Witness shifting shades of blue and camp near the lake under starry skies.' },
      { day: '06', title: 'Pangong Sunrise to Leh via Chang La (17,590 ft)', detail: 'Wake up to magical sunrise reflections on Pangong Lake. Ride across Chang La pass and visit Thiksey Monastery before returning to Leh.' },
      { day: '07', title: 'Leh Leisure & Local Cafe Exploration', detail: 'Buffer day for local shopping in Leh Main Bazaar, Tibetan handicrafts, and relaxing at German bakeries.' },
      { day: '08', title: 'Departure from Leh', detail: 'Breakfast at hotel, check out and airport drop-off with a memory of a lifetime.' }
    ],
    inclusions: [
      '7 Nights in 3★ Hotels & Deluxe Lake/Valley Camps',
      'Royal Enfield Himalayan 411cc with fuel (for riders) or 4x4 SUV',
      'Daily breakfast and dinner (MAP Plan)',
      'Backup support truck with professional mechanic & spare parts',
      'Oxygen cylinder and first-aid kits in all backup vehicles',
      'Inner Line Permits and Ladakh Wildlife entry fees'
    ],
    exclusions: [
      'Flight tickets to/from Leh',
      'Security deposit for motorcycle (refundable on handover)',
      'Riding gear (helmets, jackets, knee pads available on rent)',
      'Personal snacks and monument fees'
    ],
    thingsToCarry: ['Valid driving license (for riders)', 'Windproof riding jacket & warm gloves', 'High SPF 50+ sunscreen & polarized sunglasses', 'Postpaid Airtel/Jio connection'],
    cancellationPolicy: 'Full refund up to 25 days before departure. 50% between 15–24 days. Non-refundable under 15 days.',
    bestTime: 'May to September',
    featured: true
  },
  {
    slug: 'dubai-city-desert-adventure',
    name: 'Dubai City, Desert Safari & Marina Cruise',
    category: 'international',
    nights: 4,
    days: 5,
    price: '24,999',
    route: 'Dubai · Burj Khalifa · Desert Safari · Marina Dhow Cruise · Miracle Garden',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582972236019-ea4af5dec5f0?auto=format&fit=crop&w=800&q=80'
    ],
    summary: 'Experience the futuristic wonderland: 124th floor view of Burj Khalifa, 4x4 red dune desert safari with BBQ buffet & belly dance, and luxury Marina Dhow Cruise.',
    highlights: [
      'Burj Khalifa At The Top 124th/125th Floor non-prime entry tickets',
      'Premium Desert Safari with dune bashing, camel ride, fire show & Tanoura dance',
      'Dubai Marina Dhow Cruise with international buffet dinner & soft drinks',
      'Guided Dubai city tour: Dubai Frame, Palm Jumeirah & Burj Al Arab photo stop',
      'UAE Tourist Visa & OK to Board processing assistance'
    ],
    itinerary: [
      { day: '01', title: 'Arrival Dubai & Marina Dhow Cruise', detail: 'Chauffeur pickup from Dubai International Airport (DXB). Check-in to 4★ hotel. Evening transfer to Dubai Marina for luxury 2-hour Dhow Cruise with buffet dinner.' },
      { day: '02', title: 'Half-Day City Tour & Burj Khalifa 124th Floor', detail: 'Morning guided tour of Dubai Museum, Gold & Spice Souks, Jumeirah Beach, and Atlantis Palm. Afternoon visit Dubai Mall, Dubai Fountain show, and ascend Burj Khalifa 124th floor.' },
      { day: '03', title: 'Desert Safari with BBQ & Cultural Shows', detail: 'Morning free for shopping at Meena Bazaar. 3:00 PM pickup for 4x4 Land Cruiser dune bashing in Lahbab red dunes. Sunset photo stop, sandboarding, henna painting, belly dance, and BBQ dinner.' },
      { day: '04', title: 'Miracle Garden / Global Village', detail: 'Visit the world’s largest natural flower garden (Miracle Garden) or explore diverse international pavilions and street food at Global Village.' },
      { day: '05', title: 'Gold Souk Shopping & DXB Departure', detail: 'Enjoy breakfast, last-minute shopping at Deira Gold Souk, checkout and private airport transfer for flight back home.' }
    ],
    inclusions: [
      '4 Nights stay in 4★ hotel in City Centre / Bur Dubai / Al Barsha',
      'Daily international buffet breakfast',
      'Desert Safari with 4x4 Dune Bashing and BBQ Dinner',
      'Burj Khalifa 124th Floor tickets + Dubai Aquarium combo',
      'Marina Dhow Cruise with dinner',
      'All airport and sightseeing transfers on private/SIC basis'
    ],
    exclusions: [
      'International Flight tickets',
      'UAE Visa fee (approx ₹6,500 per person)',
      'Tourism Dirham Tax (payable directly to hotel at check-in)',
      'Personal expenses and shopping'
    ],
    thingsToCarry: ['Passport valid for minimum 6 months', 'International roaming or local SIM', 'Smart casuals for evening cruises', 'Universal power adapter'],
    cancellationPolicy: 'Free cancellation up to 20 days prior to travel. Visa fees once applied are non-refundable.',
    bestTime: 'November to April',
    featured: true
  },
  {
    slug: 'thailand-bangkok-pattaya',
    name: 'Thailand: Bangkok Temples & Coral Island',
    category: 'international',
    nights: 5,
    days: 6,
    price: '19,999',
    route: 'Bangkok · Pattaya · Coral Island (Koh Larn) · Safari World',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80'
    ],
    summary: 'The classic tropical getaway: pristine beaches and speedboat ride to Coral Island in Pattaya, Alcazar cabaret show, and world-famous Bangkok temples with Safari World animal shows.',
    highlights: [
      'Speedboat excursion to Coral Island (Koh Larn) with Indian buffet lunch',
      'VIP tickets for world-renowned Alcazar Cabaret Show in Pattaya',
      'Full-day Bangkok Safari World & Marine Park with 7 live shows & lunch',
      'Bangkok City Temple Tour: Wat Traimit (Golden Buddha) & Wat Benchamabophit',
      'Chao Phraya Princess luxury dinner cruise with live pop band'
    ],
    itinerary: [
      { day: '01', title: 'Arrival Bangkok & Drive to Pattaya', detail: 'Arrive at Suvarnabhumi Airport (BKK). Chauffeur transfer to Pattaya beach city (2 hrs). Check into 4★ resort. Evening Alcazar Cabaret show.' },
      { day: '02', title: 'Coral Island Speedboat Tour & Watersports', detail: 'Speedboat cruise to Coral Island. Relax on white sand beach or participate in parasailing, sea-walking, and banana boat rides. Delicious Indian lunch included.' },
      { day: '03', title: 'Nong Nooch Botanical Garden to Bangkok', detail: 'Visit sprawling Nong Nooch Tropical Botanical Gardens and Thai cultural elephant show. Afternoon drive back to Bangkok city and check in.' },
      { day: '04', title: 'Safari World & Marine Park Day Out', detail: 'Full day at Safari World: drive-through open animal safari, Dolphin show, Sea Lion show, Hollywood stunt show, and buffet lunch.' },
      { day: '05', title: 'Bangkok Temples & Chao Phraya Dinner Cruise', detail: 'Guided tour of Golden Buddha (Wat Traimit) and Marble Temple. Afternoon shopping at Pratunam and MBK Mall. Grand Chao Phraya river dinner cruise.' },
      { day: '06', title: 'Chatuchak / Duty Free & Departure', detail: 'Breakfast at hotel, free time for last-minute shopping at CentralWorld before transfer to BKK airport for return flight.' }
    ],
    inclusions: [
      '3 Nights in Pattaya 4★ Resort + 2 Nights in Bangkok 4★ Hotel',
      'Daily buffet breakfast at hotels',
      'Coral Island tour with speedboat and Indian lunch',
      'Safari World & Marine Park tickets with buffet lunch',
      'Alcazar Cabaret show standard seats',
      'All airport and intercity transfers in AC coach/private van'
    ],
    exclusions: [
      'International flights to Bangkok',
      'Thailand Visa (Free / Visa on Arrival terms as per govt policy)',
      'Water sports charges at Coral Island',
      'Personal tipping and laundry'
    ],
    thingsToCarry: ['Passport with 6 months validity', 'Thai Baht currency / Forex card', 'Light summer clothing', 'Modest clothing covering shoulders & knees for temples'],
    cancellationPolicy: 'Full refund up to 15 days before arrival date. 50% between 7–14 days. Non-refundable under 7 days.',
    bestTime: 'November to April',
    featured: true
  },
  {
    slug: 'bali-tropical-honeymoon',
    name: 'Bali Romantic Villa & Island Discovery',
    category: 'honeymoon',
    nights: 6,
    days: 7,
    price: '29,999',
    route: 'Kuta · Ubud Cultural Heart · Nusa Penida Island · Seminyak Pool Villa',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80'
    ],
    summary: 'The ultimate tropical honeymoon: stay in a private luxury pool villa, experience the famous Bali jungle swing in Ubud, take a speedboat to dramatic Kelingking T-Rex beach in Nusa Penida, and witness Uluwatu sunset.',
    highlights: [
      '2 Nights in Private Pool Villa with floating breakfast & flower bath decor',
      '4 Nights in premium 4★/5★ beach resorts in Ubud and Kuta',
      'West Nusa Penida day tour: Kelingking Beach, Broken Beach & Angel’s Billabong',
      'Ubud Aloha Jungle Swing + Tegalalang Rice Terraces & Coffee Plantation',
      'Sunset at Uluwatu Cliff Temple with Kecak Fire Dance performance'
    ],
    itinerary: [
      { day: '01', title: 'Arrival Denpasar (DPS) & Kuta Check-in', detail: 'Traditional Balinese flower garland welcome at Ngurah Rai Airport. Private transfer to your Kuta/Seminyak hotel. Spend evening enjoying sunset at Double Six Beach.' },
      { day: '02', title: 'Nusa Penida Island Tour by Speedboat', detail: 'Early morning speedboat to Nusa Penida. Visit the jaw-dropping cliff view of Kelingking T-Rex beach, Angel’s Billabong natural infinity pool, and Broken Beach. Indonesian lunch included.' },
      { day: '03', title: 'Water Sports & Uluwatu Sunset Temple', detail: 'Banana boat and parasailing at Tanjung Benoa. Afternoon visit to dramatic Uluwatu Cliff Temple overlooking Indian Ocean. Attend the hypnotic Kecak & Fire Dance at sunset.' },
      { day: '04', title: 'Transfer to Ubud & Jungle Swing Adventure', detail: 'Drive into Ubud’s spiritual heart. Experience the viral Bali Jungle Swing over lush valleys. Walk through Tegalalang Rice Terraces and taste Luwak coffee at an agro plantation.' },
      { day: '05', title: 'Mount Batur Sunrise & Kintamani Volcano', detail: 'Scenic morning excursion to Kintamani with panoramic views of Mount Batur active volcano and lake. Visit sacred Tirta Empul holy water spring temple.' },
      { day: '06', title: 'Private Luxury Pool Villa Leisure', detail: 'Check into your private honeymoon pool villa. Enjoy the signature floating breakfast, relaxing couples Balinese massage, and romantic candlelight dinner with wine.' },
      { day: '07', title: 'Art Market Shopping & DPS Departure', detail: 'Enjoy breakfast at the villa. Shop for rattan bags and wooden crafts at Ubud Art Market, followed by airport drop-off.' }
    ],
    inclusions: [
      '2 Nights in Private Pool Villa + 4 Nights in 4★/5★ Resorts',
      'Daily breakfast including 1 Signature Floating Breakfast in villa',
      '1 Romantic Candlelight Dinner with flower petal pool setup',
      'Nusa Penida Island tour with fast boat tickets and lunch',
      'Aloha Ubud Jungle Swing entry passes',
      'Private AC vehicle with English-speaking driver guide throughout'
    ],
    exclusions: [
      'International Flight tickets to Bali',
      'Indonesia Visa on Arrival (approx 500,000 IDR / ₹2,700 per person)',
      'Bali Tourist Tax (approx 150,000 IDR / ₹800 per person)',
      'Personal water sports upgrades'
    ],
    thingsToCarry: ['Passport valid for 6 months', 'Flowy dresses & swimwear for photos', 'Waterproof phone case', 'International driving permit (if renting scooter)'],
    cancellationPolicy: '100% refund up to 21 days before trip. 50% between 10–20 days. Non-refundable under 10 days.',
    bestTime: 'April to October',
    featured: true
  },
  {
    slug: 'singapore-malaysia-family',
    name: 'Singapore & Malaysia Highlights',
    category: 'international',
    nights: 6,
    days: 7,
    price: '34,999',
    route: 'Singapore · Sentosa Island · Kuala Lumpur · Genting Highlands',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80'
    ],
    summary: 'The ultimate twin-country Asian vacation: Universal Studios Singapore, Gardens by the Bay, Sentosa cable car, Petronas Twin Towers in KL, and Genting cable car rides.',
    highlights: [
      '3 Nights in Singapore 4★ Hotel + 3 Nights in Kuala Lumpur 4★ Hotel',
      'Universal Studios Singapore One-Day pass with access to all rides',
      'Gardens by the Bay (Flower Dome & Supertree Observatory) entry',
      'Sentosa Island: Cable car, Madame Tussauds & Wings of Time laser show',
      'Day trip to Genting Highlands with two-way Awana SkyWay cable car'
    ],
    itinerary: [
      { day: '01', title: 'Arrival Singapore & Night Safari', detail: 'Pickup from Changi Airport. Transfer to 4★ city hotel. Evening excursion to the world’s first Night Safari with tram ride and animal presentation.' },
      { day: '02', title: 'Full Day Universal Studios & Sentosa', detail: 'Spend an action-packed day at Universal Studios on Sentosa Island: Battlestar Galactica, Transformers 3D, and Jurassic Park. End the evening watching the Wings of Time firework show.' },
      { day: '03', title: 'Gardens by the Bay & Marina Bay Sands', detail: 'Explore futuristic Gardens by the Bay, cooled Flower Dome, and Cloud Forest indoor waterfall. Marina Bay Sands Skypark observation deck visit.' },
      { day: '04', title: 'Singapore to Kuala Lumpur & KL City Tour', detail: 'Scenic luxury coach transfer to Kuala Lumpur (or flight). Check-in and evening photo stop at iconic 88-storey Petronas Twin Towers, King’s Palace, and Independence Square.' },
      { day: '05', title: 'Batu Caves & Genting Highlands', detail: 'Visit the colourful 272-step Batu Caves Murugan Temple. Ascend Genting Highlands via Awana SkyWay glass cable car. Explore SkyAvenue mall and indoor theme park.' },
      { day: '06', title: 'Sunway Lagoon / KL Shopping', detail: 'Enjoy a thrilling day at Sunway Lagoon Water Park with 6 adventure zones or indulge in luxury shopping at Pavilion KL and Bukit Bintang.' },
      { day: '07', title: 'Putrajaya Tour & KLIA Departure', detail: 'Breakfast at hotel. Visit the administrative capital Putrajaya (Pink Mosque & Prime Minister office) before drop-off at KLIA Airport.' }
    ],
    inclusions: [
      '6 Nights accommodation in 4★ hotels in prime locations',
      'Daily buffet breakfast at all hotels',
      'Universal Studios Singapore 1-day pass',
      'Gardens by the Bay double conservatories tickets',
      'Genting Highlands tour with Awana Skyway cable car return tickets',
      'Cross-border luxury coach transfer Singapore to KL',
      'All airport and sightseeing transfers'
    ],
    exclusions: [
      'International flights',
      'Singapore & Malaysia Visa fees',
      'Tourism tax in Malaysia (10 MYR per room/night)',
      'Lunches, dinners, and personal shopping'
    ],
    thingsToCarry: ['Passport valid for 6 months from travel date', 'SGD & MYR currencies', 'Comfortable footwear for theme parks', 'Power bank & universal adapter'],
    cancellationPolicy: '100% refund up to 25 days before travel date. 50% between 14–24 days. Non-refundable within 14 days.',
    bestTime: 'Year-round',
    featured: true
  },
  {
    slug: 'nepal-kathmandu-pokhara-valley',
    name: 'Nepal: Kathmandu & Pokhara Himalayan Escape',
    category: 'international',
    nights: 5,
    days: 6,
    price: '12,999',
    route: 'Kathmandu · Pashupatinath · Pokhara · Phewa Lake · Sarangkot Sunrise',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'Experience the Himalayan charm of Nepal with sacred darshan at UNESCO Heritage Pashupatinath Temple, serene boat rides on Pokhara\'s Phewa Lake against Annapurna peaks, and breathtaking golden sunrises over the Himalayas from Sarangkot.',
    highlights: [
      'Sacred Darshan at UNESCO World Heritage Pashupatinath & Guhyeshwari Shakti Peeth',
      'Boating on Phewa Lake with Tal Barahi Island Temple visit in Pokhara',
      'Magnificent Himalayan sunrise view of Annapurna & Fishtail peaks from Sarangkot',
      'Sightseeing at Davis Falls, Gupteshwor Mahadev Cave, & World Peace Pagoda',
      'Visit Swayambhunath (Monkey Temple) & historic Kathmandu Durbar Square',
      'Dedicated private AC vehicle for all transfers and mountain routes'
    ],
    itinerary: [
      { day: '01', title: 'Arrival in Kathmandu & Hotel Check-in', detail: 'Warm traditional Nepali welcome at Tribhuvan International Airport (KTM). Private vehicle transfer to hotel in Thamel/Kathmandu. Evening free to explore vibrant local markets, cafes, and authentic Nepali cuisine.' },
      { day: '02', title: 'Pashupatinath Darshan & Kathmandu Sightseeing', detail: 'Morning holy darshan and puja at sacred Pashupatinath Temple on the banks of Bagmati River and Guhyeshwari Temple. Afternoon visit to the hilltop Swayambhunath Buddhist Stupa offering 360-degree panoramic views of Kathmandu valley.' },
      { day: '03', title: 'Scenic Drive to Pokhara via Manakamana', detail: 'Scenic highway drive along the Trishuli River towards picturesque lake city Pokhara (approx. 6 hrs). Optional stop at Kurintar for thrilling Manakamana Devi Temple cable car ride. Check-in at lakeside Pokhara hotel with mountain views.' },
      { day: '04', title: 'Sarangkot Sunrise & Pokhara City Tour', detail: 'Early morning drive to Sarangkot hill for a mesmerising sunrise over Annapurna, Dhaulagiri, and Machapuchare (Fishtail). Return for breakfast. Full day Pokhara sightseeing: Davis Fall, Gupteshwor Cave, Seti River gorge, and evening boat ride on Phewa Lake.' },
      { day: '05', title: 'Return Drive to Kathmandu & Shopping', detail: 'After breakfast, scenic drive back to Kathmandu valley. Check in at hotel. Afternoon visit to Kathmandu Durbar Square and leisure time for shopping pashmina shawls, singing bowls, and Himalayan tea.' },
      { day: '06', title: 'Final Departure Transfer', detail: 'Enjoy breakfast at hotel with mountain air. Private vehicle transfer to Tribhuvan International Airport for your return flight home with unforgettable Himalayan memories.' }
    ],
    inclusions: [
      '5 Nights accommodation in hand-picked 3★/4★ hotels (3N Kathmandu + 2N Pokhara)',
      'Daily buffet breakfast at all hotels',
      'All airport pickup, drop-off, and intercity transfers in private AC vehicle',
      'Complete guided sightseeing tours in Kathmandu & Pokhara as per itinerary',
      'One-hour boat ride on Pokhara’s Phewa Lake',
      'All fuel charges, toll taxes, parking fees, and driver allowances'
    ],
    exclusions: [
      'Flight tickets to/from Kathmandu',
      'Entry monument fees and cable car tickets at Manakamana',
      'Lunches, dinners, and personal expenses',
      'Travel insurance and emergency evacuation'
    ],
    thingsToCarry: ['Valid Indian Passport or Voter ID Card (Mandatory for Indian Citizens)', 'Warm jacket & comfortable walking shoes', 'Indian currency notes (₹100/₹500 as per RBI/Nepal rules)', 'Camera & universal power adapter'],
    cancellationPolicy: '100% refund up to 15 days before travel. 50% refund between 7–14 days. Rescheduling allowed with minimal airline/hotel adjustment.',
    bestTime: 'September to May',
    featured: true
  },
  {
    slug: 'nepal-muktinath-yatra-pilgrimage',
    name: 'Sacred Nepal: Muktinath Dham & Pashupatinath Yatra',
    category: 'pilgrimage',
    nights: 6,
    days: 7,
    price: '18,499',
    route: 'Kathmandu · Pashupatinath · Pokhara · Jomsom · Muktinath Dham (Mustang)',
    image: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'A spiritually enriching Himalayan pilgrimage to Sri Muktinath Dham (Lord Vishnu Divya Desam at 12,172 ft in Mustang), holy bath under 108 sacred water spouts, combined with Pashupatinath Mahadev and Manakamana Devi darshan.',
    highlights: [
      'Holy darshan & snan under 108 Sacred Water Spouts (Mukti Dhara) at Muktinath Temple',
      'Special darshan at Pashupatinath Temple & Guhyeshwari Shakti Peeth in Kathmandu',
      'Thrilling flight or 4x4 Mountain Jeep journey through deep Kali Gandaki Gorge to Jomsom',
      'Cable car ride to the holy wish-fulfilling Manakamana Temple',
      'Boating on Phewa Lake and Bindhyabasini Temple puja in Pokhara',
      'Senior-citizen friendly yatra coordination with dedicated tour manager assistance'
    ],
    itinerary: [
      { day: '01', title: 'Arrival in Kathmandu & Pashupatinath Evening Aarti', detail: 'Meet & greet at Kathmandu airport. Transfer to hotel. In the evening, attend the divine Bagmati Ganga Aarti opposite the sacred Pashupatinath Temple.' },
      { day: '02', title: 'Kathmandu to Pokhara via Manakamana Devi', detail: 'Morning drive to Pokhara valley. Enroute visit Kurintar and take the scenic cable car ride to Manakamana Devi Temple. Continue to Pokhara, check-in and evening rest.' },
      { day: '03', title: 'Pokhara to Jomsom (Flight or 4x4 Jeep)', detail: 'Early morning mountain flight or 4x4 SUV Jeep drive through the dramatic Kali Gandaki valley to Jomsom (Mustang region). Check in at Jomsom hotel and acclimatize in the crisp mountain air.' },
      { day: '04', title: 'Jomsom to Muktinath Darshan & Return to Pokhara', detail: 'Drive from Jomsom to Ranipauwa, followed by a short walk or horse/doli ride to Sri Muktinath Temple. Take holy bath in the 108 water spouts and 2 holy kundas, perform sacred puja. Return to Jomsom and travel back to Pokhara.' },
      { day: '05', title: 'Pokhara Sightseeing & Bindhyabasini Temple', detail: 'Visit Bindhyabasini Temple, Davis Fall, Gupteshwor Mahadev Cave, and enjoy a calming sunset boat ride on Phewa Lake with Annapurna reflection.' },
      { day: '06', title: 'Pokhara to Kathmandu & Jal Narayan (Budhanilkantha)', detail: 'Drive back to Kathmandu. Visit the revered sleeping Vishnu idol at Budhanilkantha (Jal Narayan Temple) and historic Patan Krishna Mandir.' },
      { day: '07', title: 'Final Darshan & Airport Departure', detail: 'Breakfast at hotel. Final blessings and souvenir shopping before private transfer to Kathmandu Airport for your onward journey.' }
    ],
    inclusions: [
      '6 Nights accommodation (2N Kathmandu, 3N Pokhara, 1N Jomsom)',
      'Daily breakfast & pure vegetarian dinners at all hotels',
      'Kathmandu-Pokhara-Kathmandu private AC vehicle transfers',
      'Jomsom–Muktinath 4x4 Jeep transfers & Annapurna Conservation Area (ACAP) permits',
      'Muktinath Yatra special coordination & guide assistance',
      'All toll taxes, parking, and driver allowances'
    ],
    exclusions: [
      'Flight tickets to Kathmandu & optional Pokhara-Jomsom internal flight',
      'Manakamana cable car ticket',
      'Horse / Pony / Doli charges at Muktinath',
      'Personal puja samagri and dakshina'
    ],
    thingsToCarry: ['Original Voter ID card or Passport', 'Heavy woollens, thermals, gloves & monkey cap for Muktinath', 'Comfortable trekking/walking shoes', 'Personal medicines and camphor for high altitude'],
    cancellationPolicy: '100% refund up to 20 days before travel. Weather rescheduling assistance provided for Jomsom mountain sector.',
    bestTime: 'March to June & September to November',
    featured: true
  }
];

const DESTINATIONS = {
  domestic: [
    { name: 'Kashmir', price: '₹11,499', image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80', isTall: true },
    { name: 'Goa', price: '₹5,999', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80', isWide: true },
    { name: 'Kerala', price: '₹9,999', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80' },
    { name: 'Manali', price: '₹6,999', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80' },
    { name: 'Ladakh', price: '₹17,499', image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80' },
    { name: 'Andaman', price: '₹14,999', image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80' },
    { name: 'Rajasthan', price: '₹11,999', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80' },
    { name: 'Char Dham', price: '₹16,999', image: 'https://images.unsplash.com/photo-1609137144822-211c473138b3?auto=format&fit=crop&w=800&q=80' }
  ],
  international: [
    { name: 'Nepal', price: '₹12,999', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80', isTall: true },
    { name: 'Dubai', price: '₹24,999', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80', isTall: true },
    { name: 'Bali', price: '₹29,999', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80', isWide: true },
    { name: 'Thailand', price: '₹19,999', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80' },
    { name: 'Singapore & Malaysia', price: '₹34,999', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80' },
    { name: 'Vietnam', price: '₹21,999', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80' },
    { name: 'Maldives', price: '₹39,999', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80' },
    { name: 'Sri Lanka', price: '₹18,999', image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80' }
  ]
};

const TESTIMONIALS = [
  {
    initials: 'RS',
    name: 'Rahul & Sneha Sharma',
    city: 'Mumbai',
    trip: 'Bali Romantic Villa Special',
    rating: 5,
    text: 'We compared three agencies before choosing Travel Googly. What set them apart was how quickly they answered every single question on WhatsApp. The floating breakfast and Ubud pool villa were exactly as shown in photos.'
  },
  {
    initials: 'VP',
    name: 'Vikram Patel',
    city: 'Ahmedabad',
    trip: 'Kashmir Valley & Gulmarg',
    rating: 5,
    text: 'Travelling with senior parents can be stressful, but our driver in Srinagar was extraordinarily polite and attentive. The Dal Lake houseboat was sparkling clean and warm. Zero hidden charges.'
  },
  {
    initials: 'AS',
    name: 'Ananya Sengupta',
    city: 'Kolkata',
    trip: 'Kerala Backwaters & Munnar',
    rating: 5,
    text: 'The Alleppey houseboat chef cooked authentic local Karimeen fish curry for dinner which was incredible. All transfers were smooth without any delays. I have already recommended them to my colleagues.'
  },
  {
    initials: 'RG',
    name: 'Rajesh & Sunita Gupta',
    city: 'Delhi',
    trip: 'Char Dham Yatra',
    rating: 5,
    text: 'Completing the Char Dham with our family was a lifelong dream. Travel Googly handled our biometric passes, hotel bookings, and Kedarnath helicopter coordination with utmost devotion and care.'
  },
  {
    initials: 'AD',
    name: 'Amit Deshmukh',
    city: 'Pune',
    trip: 'Ladakh Bike Expedition',
    rating: 5,
    text: 'The Himalayan 411cc bikes were in pristine mechanical condition. Crossing Khardung La with our mechanic support truck right behind gave immense peace of mind. Truly unforgettable trip!'
  },
  {
    initials: 'PS',
    name: 'Priya Sundaram',
    city: 'Bengaluru',
    trip: 'Dubai Family Holiday',
    rating: 5,
    text: 'Our UAE tourist visas were approved within 36 hours. The desert safari red dune bashing and Burj Khalifa 124th floor tickets were seamlessly organized. Professional and trustworthy agency.'
  },
  {
    initials: 'KM',
    name: 'Karan & Riya Malhotra',
    city: 'Chandigarh',
    trip: 'Manali Solang Honeymoon',
    rating: 5,
    text: 'The candlelight dinner setup facing snow peaks was magical. Our itinerary had the perfect balance of adventure at Atal Tunnel and relaxed cafe time in Old Manali. Great pricing too.'
  },
  {
    initials: 'NJ',
    name: 'Neha Joshi',
    city: 'Hyderabad',
    trip: 'Thailand Bangkok & Pattaya',
    rating: 5,
    text: 'From speedboat transfer at Coral Island to our Safari World tickets, everything ran like clockwork. Their 24x7 WhatsApp support team replied within 5 minutes when we needed restaurant tips.'
  }
];

const FAQS = [
  {
    question: 'How do I book a tour package with Travel Googly?',
    answer: 'Simply click "Plan my trip" or message us on WhatsApp with your desired destination, travel dates, and number of guests. Our travel consultant will share 2–3 customised itinerary options with clear pricing within 2 hours. Once you approve the plan, pay a 25% advance to confirm your booking.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all standard Indian payment modes: UPI (Google Pay, PhonePe, Paytm), Net Banking (NEFT/IMPS/RTGS), Debit Cards, and Credit Cards via our secure RBI-compliant payment gateway. GST invoices are issued for every transaction.'
  },
  {
    question: 'What is your cancellation and refund policy?',
    answer: 'Most domestic packages offer a full refund if cancelled 15 days or more before the travel date, and a 50% refund between 7–14 days. For international packages and flight/train tickets, airline and hotel cancellation rules apply. Clear terms are always provided in your written booking voucher.'
  },
  {
    question: 'Do you help with international visas and documentation?',
    answer: 'Yes! We provide complete end-to-end visa assistance including document checklist guidance, appointment scheduling, cover letter drafting, flight itinerary vouchers, and visa form submissions for UAE, Thailand, Bali, Singapore, Schengen, and other global destinations.'
  },
  {
    question: 'Can I customise the itinerary and upgrade hotels?',
    answer: 'Absolutely. Every package on Travel Googly is 100% customisable. You can add extra days, change destinations, upgrade from 3★ to 4★/5★ luxury resorts, request private pool villas, or add specific adventure activities.'
  },
  {
    question: 'Do you offer group discounts or corporate tour packages?',
    answer: 'Yes, we offer special slab discounts for family groups of 6+ passengers and curated corporate MICE retreats, college industrial tours, and team offsites with dedicated tour managers and conference facilities.'
  },
  {
    question: 'What is generally not included in standard package quotes?',
    answer: 'Standard quotes exclude flights/trains (unless explicitly requested), monument entrance tickets, camera fees, personal laundry, alcoholic drinks, lunches (unless specified), and optional adventure sports (scuba, parasailing, rafting).'
  },
  {
    question: 'How do I reach Travel Googly team during my trip if I need support?',
    answer: 'You will have a dedicated On-Trip Support Manager assigned to you on WhatsApp who is available from 7:00 AM to 11:00 PM IST, plus a 24×7 emergency call hotline for any urgent assistance during your travel.'
  }
];

const GALLERY = [
  { image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80', caption: 'Serene Shikara ride on Dal Lake, Srinagar, Kashmir' },
  { image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80', caption: 'Golden sunset over palm trees at Baga Beach, Goa' },
  { image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80', caption: 'Ancient Balinese stone temple gate in Ubud, Bali' },
  { image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80', caption: 'Illuminated Burj Khalifa & Dubai Downtown skyline' },
  { image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80', caption: 'Traditional wooden houseboat sailing through Alleppey backwaters' },
  { image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80', caption: 'High-altitude mountain road expedition in Ladakh' },
  { image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80', caption: 'Majestic Amer Fort reflected in Maota Lake, Jaipur' },
  { image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80', caption: 'Crystal turquoise waters at Radhanagar Beach, Andaman' },
  { image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80', caption: 'Gardens by the Bay & Marina Bay Sands, Singapore' },
  { image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80', caption: 'Snow-capped peaks of Solang Valley and Rohtang Pass, Manali' }
];
