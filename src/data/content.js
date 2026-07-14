// Central content store — all real Angels Avenue business data.
// Image URLs point to the existing live assets; swap with local files in /public/images when available.

const BASE = 'https://dulcet-youtiao-d7a470.netlify.app/images';

export const siteInfo = {
  name: 'Angels Avenue',
  tagline: 'Hilltop Homestay · Karkala',
  phone: '+91 99808 81076',
  phoneHref: 'tel:+919980881076',
  phone2: '+91 96060 03584',
  phone2Href: 'tel:+919606003584',
  whatsapp: 'https://wa.me/919980881076',
  instagram: 'https://www.instagram.com/angelsavenuehomestay?igsh=cnNjczBxdWo5ZnBp',
  facebook: 'https://www.facebook.com/p/Angel-avenue-homestay-Karkala-100068944046087/',
  mapsLink: 'https://maps.google.com/?q=Angels+Avenue+Karkala+Karnataka',
  address: [
    'Angels Avenue,',
    'Opposite Bethanya Church,',
    'Karkala, Udupi District,',
    'Karnataka – 574104, India',
  ],
};

export const heroImage = `${BASE}/Gemini_Generated_Image_opdehiopdehiopde.png`;
export const aboutNatureImage = '/images/angel.webp';

export const aboutFeatures = [
  {
    icon: 'leaf',
    title: 'Lush Surroundings',
    desc: 'Nestled amidst nature with panoramic hilltop views',
  },
  {
    icon: 'bed',
    title: 'Comfortable Rooms',
    desc: 'Well-furnished rooms with modern amenities',
  },
  {
    icon: 'pin',
    title: 'Prime Location',
    desc: 'Opposite Bethanya Church, Karkala — easy access to attractions',
  },
  {
    icon: 'hands',
    title: 'Warm Hospitality',
    desc: 'A welcoming atmosphere that feels like home',
  },
];

// Full premium gallery — every real photo in /public/images/gallery,
// grouped and ordered by category: Entrance → Exterior → Living → Bedrooms
// → Bathrooms → Balcony → Upper Floor → Nature → Decor.
const GALLERY = '/images/gallery';
export const galleryImages = [
  // Entrance
  { id: 'entrance', category: 'Entrance', label: 'Main Entrance', src: `${GALLERY}/entrance.webp` },

  // Exterior
  { id: 'exterior-1', category: 'Exterior', label: 'Exterior View', src: `${GALLERY}/outside.webp` },
  { id: 'exterior-2', category: 'Exterior', label: 'Property Facade', src: `${GALLERY}/outside1.webp` },
  { id: 'exterior-3', category: 'Exterior', label: 'Garden View', src: `${GALLERY}/outside2.webp` },
  { id: 'exterior-4', category: 'Exterior', label: 'House Exterior', src: `${GALLERY}/outside_house.webp` },
  { id: 'exterior-5', category: 'Exterior', label: 'Parking Area', src: `${GALLERY}/outside_parking.webp` },
  { id: 'exterior-6', category: 'Exterior', label: 'Outdoor Space', src: `${GALLERY}/outdoor.webp` },

  // Living
  { id: 'living-1', category: 'Living', label: 'Living Room', src: `${GALLERY}/living_room.webp` },
  { id: 'living-2', category: 'Living', label: 'Living Room Lounge', src: `${GALLERY}/living_room2.webp` },

  // Bedrooms
  { id: 'bedroom-1', category: 'Bedrooms', label: 'Room One', src: `${GALLERY}/room1.webp` },
  { id: 'bedroom-1-aesthetic', category: 'Bedrooms', label: 'Room One Detail', src: `${GALLERY}/room1_aesthetic.webp` },
  { id: 'bedroom-2', category: 'Bedrooms', label: 'Room Two', src: `${GALLERY}/room2.webp` },
  { id: 'bedroom-3', category: 'Bedrooms', label: 'Room Three', src: `${GALLERY}/room3.webp` },
  { id: 'bedroom-4', category: 'Bedrooms', label: 'Room Four', src: `${GALLERY}/room4.webp` },

  // Bathrooms
  { id: 'bathroom-1', category: 'Bathrooms', label: 'Room One Bathroom', src: `${GALLERY}/room1_bathroom.webp` },
  { id: 'bathroom-4', category: 'Bathrooms', label: 'Room Four Bathroom', src: `${GALLERY}/room4_bathroom.webp` },
  { id: 'bathroom-common', category: 'Bathrooms', label: 'Common Bathroom', src: `${GALLERY}/common_bathroom.webp` },
  { id: 'bathroom-wash', category: 'Bathrooms', label: 'Washroom', src: `${GALLERY}/washroom2.webp` },

  // Balcony
  { id: 'balcony-1', category: 'Balcony', label: 'Room One Balcony', src: `${GALLERY}/room1_balcony.webp` },
  { id: 'balcony-2', category: 'Balcony', label: 'Room Two Balcony', src: `${GALLERY}/room2_balcony.webp` },
  { id: 'balcony-common', category: 'Balcony', label: 'Common Balcony', src: `${GALLERY}/common_balcony.webp` },

  // Upper Floor
  { id: 'upper-angels', category: 'Upper Floor', label: 'Upper Floor Angels View', src: `${GALLERY}/upper_floor_angels.webp` },
  { id: 'upper-ceiling', category: 'Upper Floor', label: 'Ceiling Detail', src: `${GALLERY}/upper_floor_ceiling.webp` },
  { id: 'upper-ceiling-top', category: 'Upper Floor', label: 'Ceiling Top View', src: `${GALLERY}/upper_floor_ceiling_top.webp` },
  { id: 'upper-ceiling-feature', category: 'Upper Floor', label: 'Ceiling Feature', src: `${GALLERY}/upperfloor_ceiling.webp` },
  { id: 'upper-view', category: 'Upper Floor', label: 'Upper Floor View', src: `${GALLERY}/upperview.webp` },

  // Nature
  { id: 'nature', category: 'Nature', label: 'Nature Around Property', src: `${GALLERY}/nature_view.webp` },

  // Decor
  { id: 'decor-board', category: 'Decor', label: 'Welcome Board', src: `${GALLERY}/board.webp` },
  { id: 'decor-jesus', category: 'Decor', label: 'Devotional Corner', src: `${GALLERY}/jesus.webp` },
  { id: 'decor-vase', category: 'Decor', label: 'Decorative Vase', src: `${GALLERY}/vase.webp` },
  { id: 'decor-gun', category: 'Decor', label: 'Vintage Decor Piece', src: `${GALLERY}/gun.webp` },
];

// Nearby tourist spots around Karkala, distances approximated by road from
// Angels Avenue (opposite Bethanya Church, Karkala town). Swap the `image`
// paths for real photography whenever it's available — the card gracefully
// falls back to a placeholder if an image is missing.
export const nearbyAttractions = [
  {
    id: 'gomateshwara',
    name: 'Gomateshwara Statue (Bahubali)',
    location: 'Bahubali Betta, Karkala',
    distance: '2.5 km',
    duration: '~7 min drive',
    desc: 'A 42-foot monolithic statue of Lord Bahubali carved from a single rock in 1432, second tallest of its kind in Karnataka. A short climb up rock-cut steps rewards you with sweeping views of Karkala town.',
    image: '/images/attractions/gommata.webp',
    mapsQuery: 'Gomateshwara Statue Karkala',
  },
  {
    id: 'chaturmukha-basadi',
    name: 'Chaturmukha Basadi',
    location: 'Karkala Town',
    distance: '2.7 km',
    duration: '~7 min drive',
    desc: 'A striking 16th-century Jain temple with four identical entrances facing every direction, built entirely from granite across 108 carved pillars. One of Karkala\u2019s finest heritage landmarks.',
    image: '/images/attractions/chaturmukha.webp',
    mapsQuery: 'Chaturmukha Basadi Karkala',
  },
  {
    id: 'anekere-lake',
    name: 'Anekere Lake',
    location: 'Karkala Town',
    distance: '1.5 km',
    duration: '~5 min drive',
    desc: 'A picturesque 7-acre artificial lake built in 1262, once used to bathe royal elephants. A small Jain temple sits at its centre, framed by water lilies and calm reflections.',
    image: '/images/attractions/aanekere.webp',
    mapsQuery: 'Anekere Lake Karkala',
  },
  {
    id: 'anantha-padmanabha',
    name: 'Sri Anantha Padmanabha Temple',
    location: 'Karkala Town',
    distance: '1.8 km',
    duration: '~5 min drive',
    desc: 'An ancient and revered temple dedicated to Lord Vishnu in his reclining form, known for its intricate wood carvings and centuries-old spiritual significance to the region.',
    image: '/images/attractions/anantha.webp',
    mapsQuery: 'Sri Anantha Padmanabha Temple Karkala',
  },
  {
    id: 'st-lawrence-church',
    name: 'St. Lawrence Church, Attur',
    location: 'Attur, Karkala Taluk',
    distance: '5 km',
    duration: '~12 min drive',
    desc: 'A historic Roman Catholic basilica dating back to 1759, famed for its miracles and Neo-Gothic architecture. The annual Attur Jatre in January draws thousands of devotees from across faiths.',
    image: '/images/attractions/attur_church.webp',
    mapsQuery: 'St Lawrence Church Attur Karkala',
  },
  {
  id: 'venkataramana-temple',
  name: 'Shri Venkataramana Temple (Padutirupati)',
  location: 'Hiriyadka Road, Karkala',
  distance: '1.6 km',
  duration: '~5 min drive',
  desc: 'A 550-year-old temple of Lord Venkataramana, fondly called "Padu Tirupati" (Tirupati of the West) for its rituals mirroring Tirumala. Founded by Goud Saraswat Brahmins, it\u2019s one of Karkala\u2019s most revered shrines.',
  image: '/images/attractions/venkata.webp',
  mapsQuery: 'Shri Venkataramana Temple Padutirupati Karkala',
},
];

export const reviews = [
  {
    initials: 'AS',
    name: 'Akshat Shetty',
    location: '',
    rating: 5.0,
    date: 'January 2026',
    text: "Best Staycation with affordable price and Best connectivity in karkala. Awesome Scenery and Humble and Helpful People. Owner and Care taker both are humble person. Only improvement needed is the newly built bathroom in main room should be completely covered even if the concept is for bachelor group personal privacy is must. Please get it fixed",
  },
  {
    initials: 'RP',
    name: 'Shraddha Poojary',
    location: '',
    rating: 5.0,
    date: 'December 2025',
    text: 'Decent place, great food, nice vibe. Fantabulous place for people seeking peace stay.',
  },
  {
    initials: 'SA',
    name: 'Suhail Abbas',
    location: '',
    rating: 4.5,
    date: 'November 2025',
    text: 'Room was nice, we can get food camp fire at very low price, but they are not compromising on quality. Best suited for people staying on Udupi and manglore side, as it is very near to them. Overall a good experience.',
  },
  {
    initials: 'MY',
    name: 'Mitravinda Yadu',
    location: '',
    rating: 5.0,
    date: 'October 2025',
    text: 'Good place to enjoy with family and friends. We enjoyed the view and the hospitality was very Welcoming. Best place for holidays.',
  },
  {
    initials: 'SS',
    name: 'Shreesha Shetty',
    location: '',
    rating: 4.0,
    date: 'January 2026',
    text: 'It’s a great place to stay. This place is very well maintained. The caretaker was friendly and provided quick assistance when required. Rooms were spacious and comfortable. I would highly recommend this place',
  },
  {
    initials: 'DG',
    name: 'Disha Gupta',
    location: '',
    rating: 5.0,
    date: 'February 2026',
    text: 'The homestay is like a dream come true, a very spacious room with balconies attached and a direct view of mountains. The view from the room is amazing and the house itself is in a grand landscape. Highly recommended and would love to come back here.',
  },
  {
    initials: 'AN',
    name: 'Ani',
    location: '',
    rating: 4.5,
    date: 'March 2026',
    text: 'We had a great time at this homestay. The place was clean peaceful and perfect for our Holi and enjoyment celebration. The host was very friendly and helpful.',
  },
  {
    initials: 'KR',
    name: 'Kavitha Rao',
    location: '',
    rating: 5.0,
    date: 'March 2025',
    text: "This place is heaven on earth! So peaceful, so green, so beautiful. The hosts treated us like family. We didn't want to leave. Will definitely be returning with more friends!",
  },
  {
    initials: 'VC',
    name: 'Sanmath S Shetty',
    location: '',
    rating: 5.0,
    date: 'February 2025',
    text: 'Wonderful experience staying with my friends. Excellent staff, very polite and flexible. Would definitely recommend to whoever is looking for a peaceful environment and to experience nature away from city life.',
  },
];

export const bookingPlatforms = [
  {
    id: 'makemytrip',
    name: 'MakeMyTrip',
    logo: `${BASE}/makemytrip.png`,
    desc: "Find exclusive deals and easy booking options on India's top travel platform.",
    perks: ['EMI Options Available', 'Coupon Discounts', '24/7 Support'],
    link: 'https://www.makemytrip.com/hotels/angels_avenue_karkala-details-karkala.html',
    cta: 'Book on MakeMyTrip',
    highlight: true,
  },
  {
    id: 'airbnb',
    name: 'Airbnb',
    logo: `${BASE}/air.jpeg`,
    desc: 'Experience authentic local living. Book directly with secure payments and flexible options.',
    perks: ['Flexible Cancellation', 'Verified Listing', 'Instant Booking'],
    link: 'https://www.airbnb.co.in/rooms/1289147121005557726',
    cta: 'Book on Airbnb',
  },
  {
    id: 'goibibo',
    name: 'Goibibo',
    logo: `${BASE}/goibibo-logo.png`,
    desc: 'Earn GoCoins with every booking and enjoy great cashback deals on your stay.',
    perks: ['GoCoins Cashback', 'Price Match Guarantee', 'Easy Modifications'],
    link: 'https://www.goibibo.com/hotels/angels-avenue-karkala-hotel-in-karkal-202783882553863253/',
    cta: 'Book on Goibibo',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Explore', href: '#attractions' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];