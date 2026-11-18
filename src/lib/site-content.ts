import { z } from "zod";

/**
 * Brand facts come from Narayan's own website (narayanevents.com), Instagram and LinkedIn.
 * Do not invent contact details: fill `whatsappNumber` only when the client supplies it
 * (international format, digits only, e.g. "919810000000").
 */
export const brand = {
  name: "Narayan Events Management",
  shortName: "Narayan Events",
  siteUrl: "https://www.narayanevents.com",
  email: "info@narayanevents.com",
  whatsappNumber: "",
  location: "Delhi, India",
  instagram: "https://www.instagram.com/narayaneventsmanagement/",
  facebook: "https://www.facebook.com/p/Narayan-Events-Management-100066764966771/",
  linkedin: "https://www.linkedin.com/in/rahul-dwivedi-55b12233/",
} as const;

export function whatsappUrl(message: string) {
  const text = encodeURIComponent(message);
  return brand.whatsappNumber
    ? `https://wa.me/${brand.whatsappNumber}?text=${text}`
    : `https://wa.me/?text=${text}`;
}

export function mailtoUrl(subject: string, body: string) {
  return `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Responsive helpers for images optimised into public/images as -800 and -1600 WebP. */
export function imageSet(name: string) {
  return {
    src: `/images/${name}-1600.webp`,
    srcSet: `/images/${name}-800.webp 800w, /images/${name}-1600.webp 1600w`,
  };
}

export const navigation = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
] as const;

export const stats = [
  { value: "1,200+", label: "Events delivered" },
  { value: "500+", label: "Brands served" },
  { value: "95%", label: "Client retention" },
] as const;

export const services = [
  {
    slug: "corporate-events",
    number: "01",
    title: "Corporate Events & Conferences",
    short: "Conferences, dealer meets and gala evenings, staged with poise.",
    description:
      "From leadership summits to annual dealer meets, we design the stage, manage the run of show and look after every guest so the room feels effortless.",
    includes: [
      "Conferences & summits",
      "Dealer & channel meets",
      "Gala dinners",
      "AV & LED staging",
    ],
    image: "corporate-gala-dinner",
    alt: "A corporate gala dinner in a ballroom, guests seated at round tables facing an LED stage.",
  },
  {
    slug: "launches",
    number: "02",
    title: "Launches & Inaugurations",
    short: "Product reveals, plant inaugurations and store openings.",
    description:
      "A launch is a single moment that has to land perfectly. We build the set, choreograph the reveal and manage the ceremony from ribbon to applause.",
    includes: ["Product launches", "Plant inaugurations", "Store openings", "Reveal choreography"],
    image: "crompton-launch-stage",
    alt: "A product launch stage with a branded backdrop beneath crystal chandeliers.",
  },
  {
    slug: "brand-activations",
    number: "03",
    title: "Brand Activations & BTL",
    short: "On-ground experiences that put a brand in people's hands.",
    description:
      "ATL and BTL activations, campus and mall campaigns, roadshows and promotions, planned with indoor and outdoor branding that carries the brand story.",
    includes: ["BTL campaigns", "Roadshows", "Indoor & outdoor branding", "Promotions"],
    image: "medtronic-exhibit-build",
    alt: "A branded Medtronic activation space being built inside a hotel ballroom.",
  },
  {
    slug: "exhibitions",
    number: "04",
    title: "Exhibition Stalls & Pavilions",
    short: "Custom stalls designed, fabricated and built on time.",
    description:
      "Concept, 3D design, fabrication and on-site build for trade-show stalls and pavilions, finished with lighting and graphics that draw visitors in.",
    includes: ["Stall design & 3D", "Fabrication", "Graphics & lighting", "On-site build"],
    image: "scoda-exhibition-stall",
    alt: "A custom exhibition stall with a dark lounge, white seating and illuminated brand signage.",
  },
  {
    slug: "awards",
    number: "05",
    title: "Awards & Recognition",
    short: "Evenings that honour people and achievement.",
    description:
      "Award nights, skill contests and recognition ceremonies with considered staging, smooth cueing and moments worth remembering.",
    includes: ["Award nights", "Skill contests", "Recognition ceremonies", "Show flow & cueing"],
    image: "iifl-led-stage",
    alt: "A large LED stage with moving lights prepared for an awards evening.",
  },
  {
    slug: "sports-events",
    number: "06",
    title: "Sports & Outdoor Events",
    short: "Large-format outdoor events, managed end to end.",
    description:
      "Sports meets, outdoor gatherings and live entertainment, with staging, seating, branding and on-ground crowd management handled by our team.",
    includes: ["Sports meets", "Outdoor staging", "Seating & logistics", "Live entertainment"],
    image: "outdoor-evening-stage",
    alt: "An outdoor evening event with a red carpet leading to a lit stage framed by palm trees.",
  },
] as const;

export const eventTypes = [
  "Corporate event / conference",
  "Launch or inauguration",
  "Brand activation / BTL",
  "Exhibition stall",
  "Awards & recognition",
  "Sports or outdoor event",
  "Other / not sure yet",
] as const;

export const portfolioCategories = [
  "Stages & Launches",
  "Conferences",
  "Exhibitions",
  "Outdoor",
] as const;
export type PortfolioCategory = (typeof portfolioCategories)[number];

export const portfolioItems: readonly {
  image: string;
  title: string;
  category: PortfolioCategory;
  alt: string;
}[] = [
  {
    image: "metso-led-stage",
    title: "Metso, LED stage",
    category: "Stages & Launches",
    alt: "A glowing LED stage with the Metso brand, reflected on a polished marble floor.",
  },
  {
    image: "crompton-launch-stage",
    title: "Crompton, product launch",
    category: "Stages & Launches",
    alt: "Crompton product launch stage under ornate crystal chandeliers.",
  },
  {
    image: "scoda-exhibition-stall",
    title: "Scoda, exhibition stall",
    category: "Exhibitions",
    alt: "A dark, modern exhibition stall with a lounge and illuminated signage.",
  },
  {
    image: "outdoor-evening-stage",
    title: "An evening under the palms",
    category: "Outdoor",
    alt: "Red carpet leading through rows of white chairs to an outdoor stage at dusk.",
  },
  {
    image: "corporate-gala-dinner",
    title: "Corporate gala dinner",
    category: "Conferences",
    alt: "Guests at round tables in a warmly lit ballroom facing an LED screen.",
  },
  {
    image: "iifl-led-stage",
    title: "IIFL, awards stage",
    category: "Stages & Launches",
    alt: "A wide LED stage with beam lights set for an awards evening.",
  },
  {
    image: "venus-exhibition-stall",
    title: "Venus, double-height stall",
    category: "Exhibitions",
    alt: "A tall white exhibition stall with a lit brand tower and display panels.",
  },
  {
    image: "plant-inauguration-ceremony",
    title: "ACE, plant inauguration",
    category: "Stages & Launches",
    alt: "Guests and photographers at a plant inauguration ceremony before a blue LED backdrop.",
  },
  {
    image: "ballroom-led-stage",
    title: "Ballroom LED staging",
    category: "Conferences",
    alt: "A ballroom set with an LED wall and chandelier, ready for a conference.",
  },
  {
    image: "adra-exhibition-stall",
    title: "Adra, open stall",
    category: "Exhibitions",
    alt: "An open exhibition stall with white furniture and brand graphics on an orange floor.",
  },
  {
    image: "conference-hall-stage",
    title: "Conference hall setup",
    category: "Conferences",
    alt: "A conference hall with a lit stage, podium and banquet seating.",
  },
  {
    image: "gm-engineering-stall",
    title: "GM Engineering, pavilion",
    category: "Exhibitions",
    alt: "An exhibition pavilion with a white and blue fascia and product displays.",
  },
  {
    image: "plant-inauguration-stage",
    title: "Inauguration stage build",
    category: "Stages & Launches",
    alt: "A blue-carpeted inauguration stage with an LED backdrop inside a factory hall.",
  },
  {
    image: "awards-contest-stage",
    title: "Service skill contest",
    category: "Conferences",
    alt: "A compact stage with a red riser and printed backdrop for a skills contest.",
  },
  {
    image: "medtronic-exhibit-build",
    title: "Medtronic, exhibit build",
    category: "Exhibitions",
    alt: "A Medtronic exhibit in the final stages of build inside a hotel ballroom.",
  },
  {
    image: "exhibition-hall-aisle",
    title: "Trade show aisle",
    category: "Exhibitions",
    alt: "A busy trade show aisle lined with branded stalls.",
  },
];

export const reasons = [
  {
    title: "Design to delivery, in-house",
    text: "Concept, 3D design, fabrication, branding and on-ground execution sit with one team, so nothing gets lost between vendors.",
  },
  {
    title: "Pan-India execution",
    text: "Based in Delhi and trusted across India, we have delivered events in hotels, factories, campuses and exhibition halls nationwide.",
  },
  {
    title: "A calm team on the ground",
    text: "Our crew runs the floor from build to breakdown, keeping cues, vendors and timelines on track while you look after your guests.",
  },
  {
    title: "Detail you can see",
    text: "Lighting, finishes, signage and flow are considered together, so every touchpoint feels intentional and on-brand.",
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Listen",
    text: "We start with your objective, audience, venue and budget.",
  },
  {
    step: "02",
    title: "Design",
    text: "Concept, 3D visuals and a clear plan you can sign off with confidence.",
  },
  {
    step: "03",
    title: "Produce",
    text: "Fabrication, AV, printing and branding, built and quality-checked.",
  },
  {
    step: "04",
    title: "Deliver",
    text: "Our team runs the day on the ground, from first guest to final bow.",
  },
] as const;

/** Only testimonials published by the client. Add more as they are supplied. */
export const testimonials = [
  {
    quote: "The coordination, design, and on-ground management were seamless.",
    name: "Bharat Sharma",
    role: "Marketing Head, Axis Bank",
  },
] as const;

/** Client logos as published on narayanevents.com (public/images/clients). */
export const clients = [
  { name: "BMW", logo: "bmw" },
  { name: "TATA", logo: "tata" },
  { name: "Reliance Industries", logo: "reliance" },
  { name: "Kotak Mahindra Bank", logo: "kotak" },
  { name: "Axis Bank", logo: "axis-bank" },
  { name: "IndusInd Bank", logo: "indusind-bank" },
  { name: "IDFC First Bank", logo: "idfc-first-bank" },
  { name: "DBS Bank", logo: "dbs-bank" },
  { name: "AU Small Finance Bank", logo: "au-small-finance-bank" },
  { name: "Equitas Small Finance Bank", logo: "equitas" },
  { name: "Ujjivan Small Finance Bank", logo: "ujjivan" },
  { name: "Utkarsh Small Finance Bank", logo: "utkarsh" },
  { name: "Nippon India Mutual Fund", logo: "nippon-india-mutual-fund" },
  { name: "Axis Max Life Insurance", logo: "axis-max-life" },
  { name: "M3M", logo: "m3m" },
] as const;

export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter your name.")
    .max(100, "Keep your name under 100 characters."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254, "Please use an email address under 255 characters."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(24, "Please keep your phone number under 25 characters.")
    .regex(/^[+\d()\s.-]+$/, "Please use numbers and common phone punctuation only."),
  eventType: z.enum(eventTypes, { errorMap: () => ({ message: "Please choose an event type." }) }),
  preferredDate: z.string().max(10, "Please enter a valid date."),
  message: z
    .string()
    .trim()
    .min(1, "Please tell us a little about your event.")
    .max(2000, "Please keep your note under 2,000 characters."),
});

export type Enquiry = z.infer<typeof enquirySchema>;

export function enquiryText(enquiry: Enquiry) {
  return [
    `Hello ${brand.shortName}, I'd like to plan an event.`,
    "",
    `Name: ${enquiry.name}`,
    `Email: ${enquiry.email}`,
    `Phone: ${enquiry.phone}`,
    `Event: ${enquiry.eventType}`,
    `Preferred date: ${enquiry.preferredDate || "Flexible"}`,
    "",
    enquiry.message,
  ].join("\n");
}
