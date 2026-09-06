/**
 * ============================================================
 *  WEDDING CONFIGURATION — Mayank ❤️ Nikita
 *  Edit this file to update all wedding details site-wide.
 * ============================================================
 */

// ─── Couple ──────────────────────────────────────────────────
export const GROOM_NAME = "Mayank";
export const BRIDE_NAME = "Nikita";
export const COUPLE_NAMES = `${GROOM_NAME} & ${BRIDE_NAME}`;
export const COUPLE_NAMES_HEART = `${GROOM_NAME} ❤️ ${BRIDE_NAME}`;
export const HASHTAG = "#MayNikForever2027";
export const TAGLINE = "Two hearts. One journey. Forever begins.";
export const INVITATION_HEADING =
  "Together with our families, we invite you to celebrate the wedding of";

// Email address to use in mailto: links
export const WEDDING_EMAIL = "arenamayank20@gmail.com";


// ─── Dates ───────────────────────────────────────────────────
/** ISO datetime of the main wedding ceremony (used for countdown) */
export const WEDDING_DATETIME_ISO = "2027-02-20T20:00:00+05:30"; // 19 Feb
/** Human-readable display date shown throughout the site */
export const WEDDING_DATE_DISPLAY = "20 February 2027";
/** Short year used in badges / seals */
export const WEDDING_YEAR = "2027";
/** Calendar date range (UTC) for "Add to Google Calendar" on main event */
export const WEDDING_CALENDAR_DATES = "20270219T143000Z/20270220T183000Z";

// ─── Venue ───────────────────────────────────────────────────
export const VENUE_NAME = "Uchaman Udaipur Nature Valley";
export const VENUE_CITY = "Udaipur";
export const VENUE_STATE = "Rajasthan";
export const VENUE_COUNTRY = "India";
export const VENUE_FULL_ADDRESS = `${VENUE_NAME}, ${VENUE_CITY}, ${VENUE_STATE}, ${VENUE_COUNTRY}`;
/** Embed src for Google Maps iframe */
export const VENUE_MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.202754269171!2d73.60986647606191!3d24.58219795633445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967fbe767cea1a7%3A0x9171a1a9a7f1f865!2sMountain%20Creek%20Villa%20Udaipur!5e0!3m2!1sen!2sin!4v1788657038524!5m2!1sen!2sin";
export const VENUE_IMAGE_URL =
  "https://images.unsplash.com/photo-1724947052687-e580b3010aad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// ─── Family ──────────────────────────────────────────────────
export const GROOM_FAMILY = {
  surname: "Agrawal",
  parents: "Smt. Suman & Shri Vinod Kumar Agarwal",
  grandparents: "Smt. Anushuya Devi & Shri Jagdish Prasad Agarwal",
  message:
    "We look forward to welcoming you into our celebration of family, laughter, and heritage.",
};

export const BRIDE_FAMILY = {
  surname: "Singhal",
  parents: "Smt. Meena & Shri Naresh Kumar Singhal",
  grandparents: "Smt. Sudha Devi & Shri Om Prakash Singhal",
  message:
    "Your presence and affectionate blessings will be the greatest honour for our daughter.",
};

// ─── Contacts ────────────────────────────────────────────────
export const CONTACT_GROOM_SIDE = {
  name: "Vinod Kumar Agrawal",
  role: "Father of Groom",
  description:
    "Reach out for airport transfers, room allocations, and baraat schedule coordination.",
  phone: "+919876543211",
  whatsappMsg: "Hello, I have a question regarding Mayank & Nikita's wedding",
  email: `${WEDDING_EMAIL}`,
};

export const CONTACT_BRIDE_SIDE = {
  name: "Rishi Singhal",
  role: "Brother of Bride",
  description:
    "Reach out for Mehendi artist bookings, attire guidance, and special guest assistance.",
  phone: "+919876543212",
  whatsappMsg: "Hello, I have a question regarding Mayank & Nikita's wedding",
  email: `${WEDDING_EMAIL}`,
};

/** General concierge phone shown on the Venue section */
export const CONCIERGE_PHONE = "+918619668236";

// ─── Gifts / UPI ─────────────────────────────────────────────
export const UPI_ID = "arenmayank17@ybl";

// ─── Couple Portrait ─────────────────────────────────────────
export const COUPLE_PORTRAIT_URL =
  "https://images.unsplash.com/photo-1636725518015-9450c7b61055?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// ─── Wedding Events ───────────────────────────────────────────
export interface WeddingEventConfig {
  title: string;
  subTitle: string;
  date: string;
  time: string;
  venue: string;
  theme: string;
  dressCode: string;
  themeColor: string;
  badgeBg: string;
  iconName: "Sun" | "Flame" | "Music2" | "HeartHandshake" | "Wine";
  image: string;
  description: string;
  calendarDates: string;
}

export const WEDDING_EVENTS: WeddingEventConfig[] = [
  {
    title: "The Auspicious Haldi",
    subTitle: "Splashes of Turmeric & Sunshine Laughs",
    date: "19 February 2027",
    time: "11:00 AM Onwards",
    venue: VENUE_NAME,
    theme: "Sun-drenched Marigold Yellow & Floral Elegance",
    dressCode: "Yellows, Ochre, & Floral Pastels",
    themeColor: "from-amber-400 to-yellow-500",
    badgeBg: "bg-amber-50 border-amber-300 text-amber-800",
    iconName: "Sun",
    image:
      "https://images.unsplash.com/photo-1670774837214-21b88943a6bb?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "An exuberant morning of smearing holy turmeric paste, holy songs, showering of flower petals, and spirited dhol beats.",
    calendarDates: "20270210T053000Z/20270210T083000Z",
  },
  {
    title: "Mehendi Ki Shaam",
    subTitle: "Intricate Henna & Folk Rhythms",
    date: "19 February 2027",
    time: "04:00 PM Onwards",
    venue: VENUE_NAME,
    theme: "Botanical Green & Earthy Henna Nuances",
    dressCode: "Sage Greens, Mint, & Olive Ensembles",
    themeColor: "from-emerald-500 to-teal-600",
    badgeBg: "bg-emerald-50 border-emerald-300 text-emerald-800",
    iconName: "Flame",
    image:
      "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A fragrant afternoon as exquisite henna adorns the bride's and guests' hands, accompanied by acoustic Rajasthani folk melodies and high tea.",
    calendarDates: "20270210T103000Z/20270210T143000Z",
  },
  {
    title: "Sangeet Extravaganza",
    subTitle: "Dance, Glitz & Starlit Beats",
    date: "19 February 2027",
    time: "07:00 PM Onwards",
    venue: VENUE_NAME,
    theme: "Royal Midnight Blue & Shimmering Gold",
    dressCode: "Indo-Western Glitz, Sequins, & Tuxedos",
    themeColor: "from-indigo-600 to-blue-700",
    badgeBg: "bg-blue-50 border-blue-300 text-blue-800",
    iconName: "Music2",
    image:
      "https://images.unsplash.com/photo-1762363018649-6dde58bd568b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A night of electrifying family dance performances, witty roasts, a sparkling cocktail bar, and our DJ spinning till the early hours.",
    calendarDates: "20270211T133000Z/20270211T183000Z",
  },
  {
    title: "The Royal Wedding (Varmala & Pheras)",
    subTitle: "Sacred Vows & Eternal Union",
    date: "20 February 2027",
    time: "08:00 PM (Baraat at 06:30 PM)",
    venue: VENUE_NAME,
    theme: "Ivory, Heritage Gold & Crimson Mandap",
    dressCode: "Traditional Regal Silks, Sherwanis & Lehengas",
    themeColor: "from-rose-600 to-amber-700",
    badgeBg: "bg-rose-50 border-rose-300 text-rose-800",
    iconName: "HeartHandshake",
    image:
      "https://images.unsplash.com/photo-1680491024867-1a5768225dac?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The grand moment where Mayank and Nikita take the sacred seven pheras around the holy fire, sealing their vows of eternity under starlit Udaipur skies.",
    calendarDates: "20270220T043000Z/20270220T203000Z",
  },
  {
    title: "The Grand Reception",
    subTitle: "Champagne, Speeches & Memories",
    date: "20 February 2027",
    time: "08:00 PM Onwards",
    venue: VENUE_NAME,
    theme: "Champagne Elegance & Starlight Glamour",
    dressCode: "Black Tie, Evening Gowns & Bandhgalas",
    themeColor: "from-amber-600 to-yellow-600",
    badgeBg: "bg-stone-50 border-stone-300 text-stone-800",
    iconName: "Wine",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
    description:
      "An enchanting evening to toast the newlywed couple with gourmet feasts, champagne cascades, and warm heartfelt speeches.",
    calendarDates: "20270213T133000Z/20270213T183000Z",
  },
];

/** Flat list of event titles used by the RSVP form */
export const RSVP_EVENTS_LIST = [
  "The Auspicious Haldi (19 Feb)",
  "Mehendi Ki Shaam (19 Feb)",
  "Sangeet Extravaganza (19 Feb)",
  "The Royal Wedding (20 Feb)"
];

// ─── Our Story Milestones ─────────────────────────────────────
export const STORY_MILESTONES = [
  {
    year: "2026",
    title: "The First Meeting",
    subtitle: "Novo Hotel, Jodhpur",
    description:
      "With the blessings of our parents, we first met on 19th June, 2026 at Novo Hotel, Jodhpur.",
    image:
      "https://plus.unsplash.com/premium_photo-1680303989822-70a22898d62b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Where It All Began",
  },
  {
    year: "2026",
    title: "Best Friends First",
    subtitle: "Endless Calls & Shared Dreams",
    description:
      "From midnight drives under city lights to listening to our favorite playlists on repeat, we quickly realized we couldn't go a single day without sharing our thoughts.",
    image:
      "https://plus.unsplash.com/premium_photo-1682088141274-36add4dab544?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "The Foundation",
  },
  {
    year: "2026",
    title: "Falling Deeply In Love",
    subtitle: "A Quiet Realization",
    description:
      "There wasn't one grand dramatic moment; it was a thousand small ordinary moments that felt like home. In each other's laughter, we found our forever.",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop",
    tag: "Two Hearts as One",
  },
  {
    year: "2026",
    title: "The Dream Proposal",
    subtitle: "She Said YES!",
    description:
      "Beneath an amber sunset over the Udaipur lakes, on bended knee with trembling hands and tearful smiles, a promise was sealed forever - 27th June, 2026.",
    image:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop",
    tag: "Forever Begins",
  },
  {
    year: "2027",
    title: "The Royal Wedding",
    subtitle: "20 February 2027",
    description:
      "With the blessings of our parents and surrounded by the warmth of our dearest friends, we step into eternity together.",
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop",
    tag: "The Grand Beginning",
  },
];

// ─── Gallery Photos ───────────────────────────────────────────
export interface GalleryPhotoConfig {
  id: number;
  title: string;
  category: "pre-wedding" | "proposal" | "celebrations" | "moments";
  src: string;
  aspect: string;
}

export const GALLERY_PHOTOS: GalleryPhotoConfig[] = [
  { id: 1, title: "Golden Hour in Udaipur", category: "pre-wedding", src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { id: 2, title: "The Starlit Proposal", category: "proposal", src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[4/5]" },
  { id: 3, title: "Royal Mandap Lights", category: "celebrations", src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { id: 4, title: "Intricate Bridal Mehendi", category: "celebrations", src: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[4/3]" },
  { id: 5, title: "Whispered Laughter", category: "moments", src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { id: 6, title: "Haldi Marigold Blooms", category: "celebrations", src: "https://images.unsplash.com/photo-1605651202774-7d573fd3f12d?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[4/5]" },
  { id: 7, title: "Sunlit Courtyard Stroll", category: "pre-wedding", src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { id: 8, title: "Kundan & Pearl Jewelry", category: "celebrations", src: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[4/3]" },
  { id: 9, title: "The Moment She Said Yes", category: "proposal", src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { id: 10, title: "Sangeet Dance Glow", category: "celebrations", src: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[4/5]" },
  { id: 11, title: "Eyes Filled With Dreams", category: "moments", src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { id: 12, title: "Palace Archway Romance", category: "pre-wedding", src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[4/3]" },
  { id: 13, title: "Sacred Holy Vows", category: "celebrations", src: "https://images.unsplash.com/photo-1583939411023-14783179e581?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { id: 14, title: "Walking Hand in Hand", category: "moments", src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[4/5]" },
  { id: 15, title: "The Ring That Began Forever", category: "proposal", src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { id: 16, title: "Grand Reception Toast", category: "celebrations", src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[4/3]" },
  { id: 17, title: "Candid Sunset Smile", category: "moments", src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { id: 18, title: "Regal Velvet & Silk", category: "pre-wedding", src: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[4/5]" },
  { id: 19, title: "A Shower of Rose Petals", category: "celebrations", src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { id: 20, title: "A Shared Secret", category: "moments", src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[4/3]" },
  { id: 21, title: "Desert Sunset Silhouette", category: "pre-wedding", src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { id: 22, title: "Tears of Joy", category: "proposal", src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[4/5]" },
  { id: 23, title: "The Grand Chandelier Ballroom", category: "celebrations", src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { id: 24, title: "Unfiltered Joy", category: "moments", src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[4/3]" },
  { id: 25, title: "Heritage Jharokha Portrait", category: "pre-wedding", src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { id: 26, title: "Under The Canopy of Lights", category: "celebrations", src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[4/5]" },
  { id: 27, title: "Two Coffee Cups & Forever", category: "moments", src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { id: 28, title: "The Golden Ring Exchange", category: "proposal", src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[4/3]" },
  { id: 29, title: "The Royal Baraat Beats", category: "celebrations", src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { id: 30, title: "Forever Begins Now", category: "moments", src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[4/5]" },
];

// ─── Design Palette ───────────────────────────────────────────
export const PALETTE = {
  gold: "#C9A46A",
  goldLight: "#DFBE85",
  goldDark: "#B58742",
  goldDeep: "#A37E3E",
  ivory: "#F8F5F0",
  ivoryLight: "#FCFAF7",
  charcoal: "#2D2622",
  charcoalMid: "#5C524A",
  charcoalLight: "#7F8D70",
  roseGold: "#B76E79",
  sage: "#A8B59A",
  sageDark: "#7F8D70",
} as const;
