// ─────────────────────────────────────────────────────────────
// CENTRAL SALON CONFIG — edit this single file to re-skin the
// template for any salon client (name, prices, services, images).
// ─────────────────────────────────────────────────────────────

export const uimg = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const salon = {
  name: "Unique Beauty Parlour",
  shortName: "Unique",
  tagline: "Where Beauty Meets Confidence",
  established: 2019,
  phone: "+91 98220 12345",
  phoneHref: "tel:+919822012345",
  whatsapp: "919822012345",
  whatsappMessage: "Hi Unique Beauty Parlour! I'd like to book an appointment.",
  email: "hello@uniquebeauty.in",
  address: "2nd Floor, Pearl Plaza, FC Road, Pune, Maharashtra 411005",
  mapQuery: "FC Road, Pune, Maharashtra",
  instagram: "@uniquebeautyparlour",
  hours: [
    { days: "Monday – Saturday", time: "10:00 AM – 8:30 PM" },
    { days: "Sunday", time: "10:00 AM – 6:00 PM" },
  ],
};

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

export const images = {
  hero: uimg("1610173827043-9db50e0d8ef9", 1800),
  heroAlt: "Bride in a red and gold ensemble with intricate jewellery, styled at Unique Beauty Parlour",
  interiors: [
    uimg("1637777277435-3c44f82fd0c9"),
    uimg("1781450090585-1a511b7066d9"),
    uimg("1746723378067-83a345ff3160"),
    uimg("1626383137804-ff908d2753a2"),
  ],
  hair: {
    cut: uimg("1700760934268-8aa0ef52ce0a"),
    spa: uimg("1580618672591-eb180b1a973f"),
    color: uimg("1560869713-bf165a9cfac1"),
    keratin: uimg("1634449571017-5fecfd26ad76"),
    smoothening: uimg("1629397685944-7073f5589754"),
    treatment: uimg("1560869713-7d0a29430803"),
    portrait: uimg("1619218533116-f050e7d91d91"),
  },
  skin: {
    cleanup: uimg("1616394584738-fc6e612e71b9"),
    facial: uimg("1570172619644-dfd03ed5d881"),
    glow: uimg("1731514771613-991a02407132"),
    treatment: uimg("1552693673-1bf958298935"),
    bridal: uimg("1643684391140-c5056cfd3436"),
    spa: uimg("1540555700478-4be289fbecef"),
    towel: uimg("1544717304-a2db4a7b16ee"),
  },
  beauty: {
    threading: uimg("1512290923902-8a9f81dc236c"),
    waxing: uimg("1544717304-a2db4a7b16ee"),
    manicure: uimg("1610992015762-45dca7fa3a85"),
    pedicure: uimg("1632345031435-8727f6897d53"),
    makeup: uimg("1512496015851-a90fb38ba796"),
    polish: uimg("1522337660859-02fbefca4702"),
    nails: uimg("1519014816548-bf5fe059798b"),
  },
  bridal: {
    one: uimg("1684868268327-7e5590bcfbd6"),
    two: uimg("1684868265714-fd2300637c23"),
    three: uimg("1610047614301-13c63f00c032"),
    four: uimg("1600685890506-593fdf55949b"),
    five: uimg("1631549424057-403e75d68e2f"),
    six: uimg("1641699862936-be9f49b1c38d"),
    seven: uimg("1631549423034-ceb712f24ab2"),
  },
};

export const serviceCategories = [
  {
    id: "hair",
    title: "Hair Artistry",
    blurb: "Precision cuts, couture colour and restorative rituals for hair that turns heads.",
    items: [
      { name: "Hair Cut & Styling", desc: "A bespoke cut and finish, tailored to your face shape and lifestyle.", price: 399, img: images.hair.cut },
      { name: "Hair Spa", desc: "Deep-nourishment ritual that restores softness, shine and scalp health.", price: 799, img: images.hair.spa },
      { name: "Hair Coloring", desc: "Global colour, balayage and fashion shades with premium ammonia-free ranges.", price: 1499, img: images.hair.color },
      { name: "Keratin Treatment", desc: "Frizz-erasing keratin therapy for silk-smooth hair that lasts for months.", price: 2499, img: images.hair.keratin },
      { name: "Hair Smoothening", desc: "Glass-like straightness and mirror shine with a gentle smoothening system.", price: 2999, img: images.hair.smoothening },
      { name: "Hair Treatment", desc: "Targeted repair for damage, dandruff and hair fall, prescribed by experts.", price: 999, img: images.hair.treatment },
    ],
  },
  {
    id: "skin",
    title: "Skin & Facial",
    blurb: "From quick clean-ups to Korean glass-skin facials — glow, guaranteed.",
    items: [
      { name: "Cleanup", desc: "An express deep-cleanse that lifts dullness and refreshes tired skin.", price: 499, img: images.skin.cleanup },
      { name: "Facial", desc: "Classic glow facial with massage, mask and lymphatic drainage.", price: 999, img: images.skin.facial },
      { name: "Premium Glow Facial", desc: "Korean glass-skin, thermal and vitamin-C rituals for a lit-from-within glow.", price: 1499, img: images.skin.glow },
      { name: "Skin Treatment", desc: "Anti-ageing, de-tan and brightening therapies customised to your skin.", price: 1999, img: images.skin.treatment },
      { name: "Bridal Facial", desc: "A multi-step luminosity ritual designed to photograph flawlessly.", price: 2499, img: images.skin.bridal },
    ],
  },
  {
    id: "beauty",
    title: "Beauty Essentials",
    blurb: "Everyday elegance — brows, waxing, nails and makeup, perfected.",
    items: [
      { name: "Threading", desc: "Precision brow shaping and facial threading by steady expert hands.", price: 99, img: images.beauty.threading },
      { name: "Waxing", desc: "Gentle liposomal waxing for silky, irritation-free skin.", price: 399, img: images.beauty.waxing },
      { name: "Manicure", desc: "Cuticle care, massage and polish for hands that feel brand new.", price: 499, img: images.beauty.manicure },
      { name: "Pedicure", desc: "A relaxing soak, scrub and spa ritual for happy, heels-ready feet.", price: 599, img: images.beauty.pedicure },
      { name: "Makeup", desc: "Party, HD and airbrush looks that enhance — never mask — you.", price: 1499, img: images.beauty.makeup },
    ],
  },
  {
    id: "bridal",
    title: "Bridal Couture",
    blurb: "Your once-in-a-lifetime look, composed like a work of art.",
    items: [
      { name: "Bridal Makeup", desc: "Signature HD bridal artistry with trials, lashes and long-wear finish.", price: 14999, img: images.bridal.one },
      { name: "Engagement Makeup", desc: "Soft-glam looks for your ring ceremony, sangeet and receptions.", price: 7999, img: images.bridal.two },
      { name: "Pre-Bridal Package", desc: "A 4-week glow program: facials, polishing, hair spa and more.", price: 9999, img: images.bridal.four },
      { name: "Bridal Hair Styling", desc: "Braids, buns and floral styling engineered to last the whole night.", price: 2999, img: images.bridal.five },
    ],
  },
];

export const allServices = serviceCategories.flatMap((c) =>
  c.items.map((i) => ({ ...i, category: c.title }))
);

export const packages = [
  {
    id: "basic",
    name: "Basic Beauty Package",
    price: 699,
    tag: "Everyday Glow",
    inclusions: ["Cleanup", "Full Hand Wax", "Half Leg Wax", "Eyebrow Free"],
    img: images.skin.cleanup,
  },
  {
    id: "advanced",
    name: "Advanced Beauty Package",
    price: 1299,
    tag: "Most Loved",
    inclusions: ["Facial", "Bleach", "Full Hand Waxing", "Half Leg Waxing", "Haircut Free"],
    img: images.skin.facial,
  },
  {
    id: "premium-glow",
    name: "Premium Glow Package",
    price: 1500,
    tag: "Signature",
    featured: true,
    inclusions: ["Korean Glass Skin Facial", "Thermal Facial", "Vitamin C Facial", "Anti-Ageing Facial"],
    img: images.skin.glow,
  },
  {
    id: "hair-care",
    name: "Hair Care Package",
    price: 799,
    tag: "Hair Ritual",
    inclusions: ["Hair Spa", "Hair Cutting", "Eyebrow", "Face Waxing"],
    img: images.hair.spa,
  },
  {
    id: "skin-revival",
    name: "Skin Revival Package",
    price: 3999,
    tag: "Transformation",
    featured: true,
    inclusions: ["Smoothening", "Keratin", "Hair Botox", "Expert Consultation"],
    img: images.skin.treatment,
  },
  {
    id: "hair-transformation",
    name: "Hair Transformation Package",
    price: 1500,
    tag: "New Look",
    inclusions: ["Hair Coloring", "Touch Up", "Highlights", "Haircut Free"],
    img: images.hair.color,
  },
  {
    id: "bridal",
    name: "Bridal Package",
    price: 24999,
    tag: "The Big Day",
    featured: true,
    inclusions: ["HD Bridal Makeup", "Bridal Hair Styling", "Saree Draping", "Pre-Bridal Glow Facial", "Complimentary Trial"],
    img: images.bridal.one,
  },
];

export const offer = {
  overline: "Special Offer",
  title: "10% OFF",
  subtitle: "on Selected Services",
  note: "Limited Time Offer — gift yourself the beauty you deserve.",
  cta: "Book Now",
};

export const whyChooseUs = [
  {
    title: "Hygienic Sanctuary",
    desc: "Hospital-grade sanitation, fresh linen for every guest and single-use kits where it matters.",
  },
  {
    title: "Professional Artists",
    desc: "Certified stylists and skin experts, trained on the latest global techniques and trends.",
  },
  {
    title: "Quality Products",
    desc: "Only authentic, premium ranges — gentle on your skin, uncompromising on results.",
  },
  {
    title: "Time, Respected",
    desc: "On-time appointments, zero rushed rituals and a 100% satisfaction promise.",
  },
];

export const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "20+", label: "Beauty Services" },
  { value: "100%", label: "Satisfaction Promise" },
];

export const team = [
  { name: "Sonali Aataya", role: "Founder & Creative Director", img: images.bridal.two },
  { name: "Riya Nair", role: "Senior Hair Stylist", img: images.hair.portrait },
  { name: "Kavya Joshi", role: "Skin & Bridal Specialist", img: images.bridal.five },
  { name: "Ankita More", role: "Nail & Beauty Artist", img: images.beauty.nails },
];

export const testimonials = [
  {
    name: "Priya Sharma",
    service: "Bridal Makeup",
    quote: "I cried when I saw myself in the mirror — in the best way. Sonali ma'am understood exactly what I wanted without me saying a word.",
    img: images.bridal.three,
  },
  {
    name: "Sneha Kulkarni",
    service: "Premium Glow Facial",
    quote: "The Korean glass-skin facial is pure magic. My skin looked airbrushed for weeks, and the ambience feels like a five-star spa.",
    img: images.skin.glow,
  },
  {
    name: "Aishwarya Patil",
    service: "Keratin Treatment",
    quote: "Three months later my hair still falls like silk. Worth every rupee — the team explains everything and never oversells.",
    img: images.hair.keratin,
  },
  {
    name: "Meera Deshmukh",
    service: "Hair Care Package",
    quote: "₹799 for a spa, cut and styling felt unreal. The attention to hygiene and detail here is what keeps me coming back.",
    img: images.hair.spa,
  },
];

export const galleryCategories = ["All", "Interior", "Hair", "Skin", "Makeup", "Bridal", "Nails"];

export const gallery = [
  { src: images.interiors[0], category: "Interior", caption: "The styling floor", tall: true },
  { src: images.bridal.one, category: "Bridal", caption: "Classic red bridal" },
  { src: images.hair.spa, category: "Hair", caption: "Signature blow-out" },
  { src: images.skin.glow, category: "Skin", caption: "Glass-skin ritual", tall: true },
  { src: images.beauty.manicure, category: "Nails", caption: "Blush manicure" },
  { src: images.bridal.four, category: "Bridal", caption: "Heritage veil", tall: true },
  { src: images.interiors[1], category: "Interior", caption: "Mirror lounge" },
  { src: images.hair.cut, category: "Hair", caption: "Precision cut" },
  { src: images.beauty.makeup, category: "Makeup", caption: "The artist's palette", tall: true },
  { src: images.skin.facial, category: "Skin", caption: "Thermal facial" },
  { src: images.bridal.seven, category: "Bridal", caption: "Rose in her hair" },
  { src: images.beauty.polish, category: "Nails", caption: "Glitter detail", tall: true },
  { src: images.interiors[2], category: "Interior", caption: "The colour bar" },
  { src: images.hair.smoothening, category: "Hair", caption: "Curl craft" },
  { src: images.beauty.threading, category: "Makeup", caption: "Finishing touches", tall: true },
  { src: images.bridal.six, category: "Bridal", caption: "Plum & gold muse" },
  { src: images.skin.cleanup, category: "Skin", caption: "Deep-cleanse ritual" },
  { src: images.beauty.pedicure, category: "Nails", caption: "Spa pedicure" },
];

export const timeSlots = [
  "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM",
  "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
];

export const marqueeItems = [
  "Hair Artistry",
  "Bridal Makeup",
  "Skin Revival",
  "Luxury Facials",
  "Nail Care",
  "Keratin Rituals",
  "Where Beauty Meets Confidence",
];

export const waLink = `https://wa.me/${salon.whatsapp}?text=${encodeURIComponent(salon.whatsappMessage)}`;
