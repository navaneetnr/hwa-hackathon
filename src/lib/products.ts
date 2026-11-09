export type CategorySlug =
  | "audio"
  | "timepieces"
  | "footwear"
  | "bags"
  | "eyewear"
  | "cameras"
  | "home"
  | "wellness"
  | "desk";

export type Product = {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  category: CategorySlug;
  price: number;
  compareAt?: number;
  rating: number;
  reviews: number;
  badge?: "Bestseller" | "New" | "Limited" | "Editor's pick";
  image: string;
  gallery: string[];
  colors: { name: string; hex: string }[];
  description: string;
  details: string[];
  bestseller?: boolean;
  isNew?: boolean;
};

export type Category = {
  slug: CategorySlug;
  name: string;
  blurb: string;
  image: string;
};

const U = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=80`;

const A = {
  a1: "1505740420928-5e560c06d30e",
  a2: "1511707171634-5f897ff02aa9",
  a3: "1583394838336-acd977736f90",
  a4: "1546435770-a3e426bf472b",
  a5: "1484704849700-f032a568e944",
  a6: "1606220588913-b3aacb4d2f46",
  a7: "1618366712010-f4ae9c647dcb",
  s1: "1608043152269-423dbba4e7e1",
  s2: "1585298723682-7115561c51b7",
  s3: "1545454675-3531b543be5d",
  s4: "1558537348-c0f8e733989d",
};

const W = {
  w1: "1523275335684-37898b6baf30",
  w2: "1546868871-7041f2a55e12",
  w3: "1524592094714-0f0654e20314",
  w4: "1434493789847-2f02dc6ca35d",
  w5: "1524805444758-089113d48a6d",
  w6: "1508685096489-7aacd43bd3b1",
};

const F = {
  f1: "1542291026-7eec264c27ff",
  f2: "1549298916-b41d501d3772",
  f3: "1600185365483-26d7a4cc7519",
  f4: "1595950653106-6c9ebd614d3a",
  f5: "1608231387042-66d1773070a5",
  f6: "1560343090-f0409e92791a",
  f7: "1543163521-1bf539c55dd2",
  f8: "1552346154-21d32810aba3",
  f9: "1460353581641-37baddab0fa2",
  f10: "1491553895911-0055eca6402d",
};

const B = {
  b1: "1553062407-98eeb64c6a62",
  b2: "1556906781-9a412961c28c",
  b3: "1547949003-9792a18a2601",
  b4: "1622560480605-d83c853bc5c3",
  b5: "1590874103328-eac38a683ce7",
  b6: "1581605405669-fcdf81165afa",
  b7: "1491637639811-60e2756cc1c7",
};

const E = {
  e1: "1511499767150-a48a237f0083",
  e2: "1473496169904-658ba7c44d8a",
  e3: "1577803645773-f96470509666",
  e4: "1572635196237-14b3f281503f",
};

const C = {
  c1: "1526170375885-4d8ecf77b99f",
  c2: "1553025934-296397db4010",
  c3: "1516035069371-29a1b244cc32",
  c4: "1502920917128-1aa500764cbd",
  c5: "1510127034890-ba27508e9f1c",
  c6: "1495707902641-75cac588d2e9",
};

const H = {
  h1: "1567538096630-e0c55bd6374c",
  h2: "1507473885765-e6ed057f782c",
  h3: "1513506003901-1e6a229e2d15",
  h4: "1543198126-a8ad8e47fb22",
  h5: "1592078615290-033ee584e267",
  h6: "1485955900006-10f4d324d411",
  h7: "1416879595882-3373a0480b5b",
  h8: "1514228742587-6b1558fcca3d",
  h9: "1524758631624-e2822e304c36",
  h10: "1565814329452-e1efa11c5b89",
  h11: "1509423350716-97f9360b4e09",
  h12: "1520412099551-62b6bafeb5bb",
  h13: "1503602642458-232111445657",
  h14: "1517701550927-30cf4ba1dba5",
  h15: "1577937927133-66ef06acdf18",
  h16: "1586023492125-27b2c045efd7",
  h17: "1616486338812-3dadae4b4ace",
  h18: "1493663284031-b7e3aefcae8e",
  h19: "1447933601403-0c6688de566e",
  h20: "1495474472287-4d71bcdd2085",
  h21: "1522335789203-aabd1fc54bc9",
  h22: "1533090161767-e6ffed986c88",
  h23: "1517842645767-c639042777db",
};

const N = {
  n1: "1541643600914-78b084683601",
  n2: "1594035910387-fea47794261f",
  n3: "1592945403244-b3fbafd7f539",
  n4: "1547887538-e3a2f32cb1cc",
  n5: "1556228720-195a672e8a03",
  n6: "1571781926291-c477ebfd024b",
  n7: "1592496431122-2349e0fbc666",
  n8: "1602143407151-7111542de6e8",
  n9: "1523362628745-0c100150b504",
};

const D = {
  d1: "1587829741301-dc798b83add3",
  d2: "1595225476474-87563907a212",
  d3: "1618384887929-16ec33fab9ef",
  d4: "1527864550417-7fd91fc51a46",
};

const g = (primary: string, ...rest: string[]) => [primary, ...rest].map(U);

export const categories: Category[] = [
  {
    slug: "audio",
    name: "Audio",
    blurb: "Room-filling sound, quietly engineered.",
    image: U(A.a1),
  },
  {
    slug: "timepieces",
    name: "Timepieces",
    blurb: "Mechanical precision, worn lightly.",
    image: U(W.w1),
  },
  {
    slug: "footwear",
    name: "Footwear",
    blurb: "Built for the long way home.",
    image: U(F.f1),
  },
  {
    slug: "bags",
    name: "Bags",
    blurb: "Carry less, carry better.",
    image: U(B.b1),
  },
  {
    slug: "eyewear",
    name: "Eyewear",
    blurb: "Frames with a point of view.",
    image: U(E.e1),
  },
  {
    slug: "cameras",
    name: "Cameras",
    blurb: "Slow down. Look closer.",
    image: U(C.c1),
  },
  {
    slug: "home",
    name: "Home & Living",
    blurb: "Objects for the everyday ritual.",
    image: U(H.h1),
  },
  {
    slug: "wellness",
    name: "Wellness",
    blurb: "Small daily acts, compounded.",
    image: U(N.n1),
  },
  {
    slug: "desk",
    name: "Desk",
    blurb: "A better place to think.",
    image: U(D.d1),
  },
];

export const products: Product[] = [
  {
    id: 1,
    slug: "halo-over-ear-headphones",
    name: "Halo Over-Ear",
    tagline: "Open, unhurried sound",
    category: "audio",
    price: 349,
    compareAt: 420,
    rating: 4.9,
    reviews: 412,
    badge: "Bestseller",
    image: U(A.a1),
    gallery: g(A.a1, A.a2, A.a3),
    colors: [
      { name: "Graphite", hex: "#2c2b28" },
      { name: "Bone", hex: "#ddd3c2" },
      { name: "Clay", hex: "#b4552f" },
    ],
    description:
      "A reference headphone for people who listen properly. Machined aluminium arms, memory-foam earcups and a tuned 40mm driver that keeps the low end honest and the mids open.",
    details: [
      "40mm beryllium-coated dynamic drivers",
      "40-hour battery, USB-C fast charge",
      "Hybrid active noise cancellation",
      "Folds flat into a recycled wool case",
    ],
    bestseller: true,
  },
  {
    id: 2,
    slug: "halo-studio-edition",
    name: "Halo Studio",
    tagline: "The monitoring edition",
    category: "audio",
    price: 399,
    rating: 4.8,
    reviews: 186,
    badge: "Limited",
    image: U(A.a2),
    gallery: g(A.a2, A.a4, A.a5),
    colors: [
      { name: "Matte Black", hex: "#1c1b19" },
      { name: "Silver", hex: "#c9c6bf" },
    ],
    description:
      "Halo, re-voiced for the studio. A flatter response curve, detachable braided cable and a wider headband for long sessions at the desk.",
    details: [
      "Flat reference tuning, ±2dB",
      "Detachable 2m braided cable",
      "Replaceable earpads and headband",
      "Limited run of 500 pairs",
    ],
  },
  {
    id: 3,
    slug: "echo-reference-headphones",
    name: "Echo Reference",
    tagline: "Closed-back, all day",
    category: "audio",
    price: 279,
    rating: 4.7,
    reviews: 298,
    image: U(A.a3),
    gallery: g(A.a3, A.a1, A.a6),
    colors: [
      { name: "Charcoal", hex: "#34322e" },
      { name: "Sand", hex: "#cfc3ae" },
    ],
    description:
      "Sealed earcups that keep your music yours. Echo is the commuter's headphone: light on the head, generous in the low mids, and quiet on a crowded train.",
    details: [
      "Closed-back isolation, 28dB reduction",
      "38-hour battery life",
      "Multipoint Bluetooth 5.3",
      "Memory foam with protein leather",
    ],
  },
  {
    id: 4,
    slug: "mono-wireless-headphones",
    name: "Mono Wireless",
    tagline: "One honest headphone",
    category: "audio",
    price: 229,
    compareAt: 269,
    rating: 4.6,
    reviews: 521,
    image: U(A.a4),
    gallery: g(A.a4, A.a5, A.a2),
    colors: [
      { name: "Ink", hex: "#1f1e1b" },
      { name: "Olive", hex: "#5b6247" },
    ],
    description:
      "No app, no six-band equaliser, no nonsense. Mono pairs with whatever you're holding and plays it warmly, with controls you can find in the dark.",
    details: [
      "On-ear, 34-hour battery",
      "Physical volume and transport controls",
      "USB-C and 3.5mm input",
      "Two-year warranty",
    ],
  },
  {
    id: 5,
    slug: "airwave-open-back",
    name: "Airwave Open-Back",
    tagline: "Let the room in",
    category: "audio",
    price: 319,
    rating: 4.8,
    reviews: 143,
    badge: "New",
    image: U(A.a5),
    gallery: g(A.a5, A.a3, A.a7),
    colors: [
      { name: "Walnut", hex: "#6b4b35" },
      { name: "Black", hex: "#201f1c" },
    ],
    description:
      "An open-back pair for the armchair listener. Airwave trades isolation for air, giving strings and voices a sense of the room they were recorded in.",
    details: [
      "Open-back acoustic architecture",
      "Solid walnut earcup rings",
      "Detachable 1.8m cable",
      "300-ohm, amplifier recommended",
    ],
    isNew: true,
  },
  {
    id: 6,
    slug: "beacon-portable-speaker",
    name: "Beacon Speaker",
    tagline: "A room in your bag",
    category: "audio",
    price: 149,
    rating: 4.7,
    reviews: 634,
    badge: "Bestseller",
    image: U(A.s1),
    gallery: g(A.s1, A.s2, A.s4),
    colors: [
      { name: "Slate", hex: "#4b4c4a" },
      { name: "Terracotta", hex: "#b4552f" },
      { name: "Cream", hex: "#e8dfd0" },
    ],
    description:
      "A palm-sized speaker with an unreasonable amount of low end. Beacon is IP67, floats, and runs for eighteen hours on a charge.",
    details: [
      "Dual passive radiators",
      "IP67 dust and water resistant",
      "18-hour battery, USB-C",
      "Stereo pairing with a second Beacon",
    ],
    bestseller: true,
  },
  {
    id: 7,
    slug: "drift-bluetooth-speaker",
    name: "Drift Speaker",
    tagline: "Desk to dinner",
    category: "audio",
    price: 119,
    compareAt: 145,
    rating: 4.5,
    reviews: 271,
    image: U(A.s2),
    gallery: g(A.s2, A.s1, A.s3),
    colors: [
      { name: "Oat", hex: "#d8cdb8" },
      { name: "Forest", hex: "#3d4a3a" },
    ],
    description:
      "Drift is the one that lives on the kitchen shelf. Warm, forgiving sound, a fabric grille you can wipe clean, and a dial that feels good to turn.",
    details: [
      "360-degree driver array",
      "12-hour battery",
      "Fabric-wrapped recycled enclosure",
      "AUX input for the old turntable",
    ],
  },
  {
    id: 8,
    slug: "pulse-mini-speaker",
    name: "Pulse Mini",
    tagline: "Small, not shy",
    category: "audio",
    price: 89,
    rating: 4.4,
    reviews: 389,
    badge: "New",
    image: U(A.s3),
    gallery: g(A.s3, A.s4, A.s1),
    colors: [
      { name: "Signal Red", hex: "#b23a2e" },
      { name: "Black", hex: "#1d1c1a" },
    ],
    description:
      "A pocket speaker for picnics and hotel rooms. Pulse Mini clips to a bag, survives a splash, and still sounds like a proper speaker.",
    details: [
      "Pocket format, 240g",
      "IPX5 splash resistant",
      "10-hour battery",
      "Built-in strap and carabiner",
    ],
    isNew: true,
  },
  {
    id: 9,
    slug: "meridian-automatic",
    name: "Meridian Automatic",
    tagline: "Sunburst, 38mm",
    category: "timepieces",
    price: 540,
    compareAt: 640,
    rating: 4.9,
    reviews: 204,
    badge: "Bestseller",
    image: U(W.w1),
    gallery: g(W.w1, W.w3, W.w5),
    colors: [
      { name: "Steel / Cream", hex: "#d8d2c5" },
      { name: "Steel / Ink", hex: "#23262b" },
    ],
    description:
      "A three-hand automatic with a dial that shifts from cream to champagne as the light moves. 38mm, sapphire crystal, and a movement you can watch through the back.",
    details: [
      "Miyota 9015 automatic movement",
      "38mm brushed stainless case",
      "Sapphire crystal, exhibition back",
      "40-hour power reserve",
    ],
    bestseller: true,
  },
  {
    id: 10,
    slug: "atlas-chronograph",
    name: "Atlas Chronograph",
    tagline: "For people who time things",
    category: "timepieces",
    price: 420,
    rating: 4.7,
    reviews: 167,
    image: U(W.w2),
    gallery: g(W.w2, W.w1, W.w4),
    colors: [
      { name: "Black / Tan", hex: "#6d4c33" },
      { name: "Steel / Black", hex: "#242322" },
    ],
    description:
      "A clean two-register chronograph on a vegetable-tanned strap. Atlas keeps the dial legible and the pushers crisp, which is harder than it sounds.",
    details: [
      "Seiko VK64 meca-quartz",
      "40mm case, 12mm thick",
      "Vegetable-tanned leather strap",
      "5-year warranty",
    ],
  },
  {
    id: 11,
    slug: "linea-slim-watch",
    name: "Linea Slim",
    tagline: "6.8mm of restraint",
    category: "timepieces",
    price: 260,
    rating: 4.6,
    reviews: 238,
    badge: "Editor's pick",
    image: U(W.w3),
    gallery: g(W.w3, W.w5, W.w1),
    colors: [
      { name: "Silver / White", hex: "#e3ded4" },
      { name: "Gold / Sand", hex: "#b79a6d" },
    ],
    description:
      "A dress watch that disappears under a cuff. The 6.8mm case, domed crystal and applied indices do the talking quietly.",
    details: [
      "Swiss quartz movement",
      "6.8mm case, 36mm diameter",
      "Domed sapphire crystal",
      "Quick-release mesh bracelet",
    ],
  },
  {
    id: 12,
    slug: "heritage-1968",
    name: "Heritage 1968",
    tagline: "An archive reissue",
    category: "timepieces",
    price: 690,
    rating: 4.8,
    reviews: 92,
    badge: "Limited",
    image: U(W.w4),
    gallery: g(W.w4, W.w2, W.w6),
    colors: [
      { name: "Aged Steel", hex: "#8d8b84" },
      { name: "Oxblood", hex: "#5c2727" },
    ],
    description:
      "A faithful reissue of our 1968 field watch, down to the stepped bezel and the slightly domed dial. 300 pieces, each numbered on the caseback.",
    details: [
      "Hand-wound Sellita SW210",
      "36mm case, drilled lugs",
      "Double-domed acrylic crystal",
      "Numbered edition of 300",
    ],
  },
  {
    id: 13,
    slug: "nomad-field-watch",
    name: "Nomad Field",
    tagline: "Weekend-proof",
    category: "timepieces",
    price: 310,
    compareAt: 360,
    rating: 4.7,
    reviews: 311,
    image: U(W.w5),
    gallery: g(W.w5, W.w6, W.w3),
    colors: [
      { name: "Olive / Canvas", hex: "#5b6247" },
      { name: "Black / Rubber", hex: "#211f1d" },
    ],
    description:
      "Built for the kind of weekend that involves a map and no signal. Luminous hands, a screw-down crown and a strap you can rinse in the sink.",
    details: [
      "100m water resistance",
      "Screw-down crown",
      "Super-LumiNova indices",
      "Woven nylon strap included",
    ],
  },
  {
    id: 14,
    slug: "orbit-smart-watch",
    name: "Orbit Smart",
    tagline: "Quietly connected",
    category: "timepieces",
    price: 380,
    rating: 4.5,
    reviews: 456,
    badge: "New",
    image: U(W.w6),
    gallery: g(W.w6, W.w5, W.w2),
    colors: [
      { name: "Graphite", hex: "#2c2b28" },
      { name: "Sage", hex: "#7f8a72" },
    ],
    description:
      "A smart watch that looks like a watch. Orbit keeps notifications to a glance, tracks the basics, and lasts a week between charges.",
    details: [
      "7-day battery life",
      "AMOLED always-on display",
      "Sleep and recovery tracking",
      "Interchangeable 20mm straps",
    ],
    isNew: true,
  },
  {
    id: 15,
    slug: "court-low-sneaker",
    name: "Court Low",
    tagline: "The everyday sneaker",
    category: "footwear",
    price: 165,
    rating: 4.8,
    reviews: 742,
    badge: "Bestseller",
    image: U(F.f1),
    gallery: g(F.f1, F.f6, F.f9),
    colors: [
      { name: "White / Gum", hex: "#e6e0d5" },
      { name: "Black / Gum", hex: "#232220" },
      { name: "Clay / Cream", hex: "#b4552f" },
    ],
    description:
      "A low-profile court shoe cut from full-grain leather and set on a gum sole. Court is the pair you keep by the door because it goes with everything.",
    details: [
      "Full-grain leather upper",
      "Natural gum rubber sole",
      "Cork-lined footbed",
      "Resoleable construction",
    ],
    bestseller: true,
  },
  {
    id: 16,
    slug: "trail-runner-gt",
    name: "Trail Runner GT",
    tagline: "Grip first",
    category: "footwear",
    price: 145,
    compareAt: 175,
    rating: 4.6,
    reviews: 388,
    image: U(F.f2),
    gallery: g(F.f2, F.f3, F.f10),
    colors: [
      { name: "Moss", hex: "#4f5a41" },
      { name: "Rust", hex: "#9a4a2f" },
    ],
    description:
      "A trail shoe that doesn't look like a spaceship. Lugged rubber, a rock plate underfoot and a breathable mesh that dries fast.",
    details: [
      "4mm lugged rubber outsole",
      "Nylon rock plate",
      "Quick-dry engineered mesh",
      "8mm drop",
    ],
  },
  {
    id: 17,
    slug: "aero-knit-trainer",
    name: "Aero Knit Trainer",
    tagline: "Sock-like, weightless",
    category: "footwear",
    price: 180,
    rating: 4.7,
    reviews: 219,
    badge: "New",
    image: U(F.f3),
    gallery: g(F.f3, F.f1, F.f8),
    colors: [
      { name: "Bone", hex: "#ded6c6" },
      { name: "Storm", hex: "#6f7576" },
    ],
    description:
      "A one-piece knit upper that moves with the foot, wrapped around a supercritical foam midsole. Aero is for the walk that turns into a run.",
    details: [
      "Seamless recycled knit upper",
      "Supercritical foam midsole",
      "240g per shoe (size 42)",
      "Machine washable",
    ],
    isNew: true,
  },
  {
    id: 18,
    slug: "daybreak-retro",
    name: "Daybreak Retro",
    tagline: "Seventies, revived",
    category: "footwear",
    price: 135,
    rating: 4.5,
    reviews: 501,
    image: U(F.f4),
    gallery: g(F.f4, F.f9, F.f2),
    colors: [
      { name: "Sand / Navy", hex: "#c9bda7" },
      { name: "Olive / Cream", hex: "#6a7158" },
    ],
    description:
      "A low-slung runner with a suede overlay and a slightly exaggerated sole. Daybreak is a little louder than the rest of the shelf, on purpose.",
    details: [
      "Suede and nylon upper",
      "EVA wedge midsole",
      "Padded collar",
      "Unisex sizing",
    ],
  },
  {
    id: 19,
    slug: "alpine-boot",
    name: "Alpine Boot",
    tagline: "Weather is not a problem",
    category: "footwear",
    price: 240,
    rating: 4.8,
    reviews: 164,
    image: U(F.f5),
    gallery: g(F.f5, F.f7, F.f10),
    colors: [
      { name: "Brown / Tan", hex: "#6b4b35" },
      { name: "Black", hex: "#1f1e1b" },
    ],
    description:
      "A waterproof leather boot with a padded collar and a commando sole. Alpine is overbuilt in the way a good boot should be.",
    details: [
      "Waterproof full-grain leather",
      "Vibram commando outsole",
      "Goodyear welted",
      "Resoleable for life",
    ],
  },
  {
    id: 20,
    slug: "slip-on-canvas",
    name: "Slip-On Canvas",
    tagline: "Two seconds to leave",
    category: "footwear",
    price: 95,
    compareAt: 115,
    rating: 4.4,
    reviews: 612,
    image: U(F.f6),
    gallery: g(F.f6, F.f4, F.f1),
    colors: [
      { name: "Natural", hex: "#ddd3c1" },
      { name: "Ink", hex: "#252521" },
    ],
    description:
      "Heavyweight canvas, elastic gussets, a vulcanised sole. The kind of shoe that gets better the more it's ignored.",
    details: [
      "12oz cotton canvas",
      "Vulcanised rubber sole",
      "Removable arch support",
      "Machine washable",
    ],
  },
  {
    id: 21,
    slug: "leather-derby",
    name: "Leather Derby",
    tagline: "Smart, not stiff",
    category: "footwear",
    price: 210,
    rating: 4.7,
    reviews: 133,
    image: U(F.f7),
    gallery: g(F.f7, F.f5, F.f8),
    colors: [
      { name: "Chestnut", hex: "#6d4a30" },
      { name: "Black", hex: "#1c1b19" },
    ],
    description:
      "An unlined derby on a slim last, with a soft leather footbed from day one. Wear it to the wedding, wear it on the train home.",
    details: [
      "Vegetable-tanned calf leather",
      "Blake-stitched leather sole",
      "Unlined upper",
      "Includes cedar shoe trees",
    ],
  },
  {
    id: 22,
    slug: "voyager-backpack",
    name: "Voyager Backpack",
    tagline: "22 litres, no clutter",
    category: "bags",
    price: 189,
    rating: 4.8,
    reviews: 486,
    badge: "Bestseller",
    image: U(B.b1),
    gallery: g(B.b1, B.b4, B.b6),
    colors: [
      { name: "Olive", hex: "#5b6247" },
      { name: "Black", hex: "#1f1e1b" },
      { name: "Sand", hex: "#c7b9a2" },
    ],
    description:
      "A clean 22-litre daypack with a padded laptop sleeve and exactly the right number of pockets. Waxed canvas, brass hardware, no logo where you don't want one.",
    details: [
      "22L capacity, 16in laptop sleeve",
      "Waxed cotton canvas",
      "Solid brass hardware",
      "Padded ventilated back panel",
    ],
    bestseller: true,
  },
  {
    id: 23,
    slug: "summit-roll-top-pack",
    name: "Summit Roll-Top",
    tagline: "Pack it full",
    category: "bags",
    price: 160,
    rating: 4.6,
    reviews: 204,
    image: U(B.b2),
    gallery: g(B.b2, B.b3, B.b7),
    colors: [
      { name: "Slate", hex: "#555b5c" },
      { name: "Rust", hex: "#9a4a2f" },
    ],
    description:
      "A roll-top that expands from a day bag to a weekender. Waterproof fabric, welded seams and a strap system that stays out of the way.",
    details: [
      "18–28L expandable",
      "Waterproof TPU-coated fabric",
      "Welded seams",
      "Removable hip belt",
    ],
  },
  {
    id: 24,
    slug: "field-canvas-tote",
    name: "Field Canvas Tote",
    tagline: "The market bag, upgraded",
    category: "bags",
    price: 120,
    rating: 4.7,
    reviews: 327,
    badge: "Editor's pick",
    image: U(B.b3),
    gallery: g(B.b3, B.b1, B.b6),
    colors: [
      { name: "Natural", hex: "#d9cfbc" },
      { name: "Olive", hex: "#5b6247" },
    ],
    description:
      "A structured tote in heavyweight canvas with leather handles and a zip closure. Big enough for a laptop, a lunch and a bunch of flowers.",
    details: [
      "20L capacity",
      "18oz cotton canvas",
      "Leather handles and base",
      "Internal zip pocket",
    ],
  },
  {
    id: 25,
    slug: "commuter-daypack",
    name: "Commuter Daypack",
    tagline: "For the 8:12 train",
    category: "bags",
    price: 145,
    compareAt: 175,
    rating: 4.5,
    reviews: 412,
    image: U(B.b4),
    gallery: g(B.b4, B.b2, B.b1),
    colors: [
      { name: "Black", hex: "#1e1d1a" },
      { name: "Navy", hex: "#2b3542" },
    ],
    description:
      "A slim commuter pack with a suspended laptop sleeve, a quick-access top pocket and reflective details for winter evenings.",
    details: [
      "16L capacity",
      "Suspended 16in laptop sleeve",
      "Recycled ballistic nylon",
      "Reflective trim and loop",
    ],
  },
  {
    id: 26,
    slug: "leather-weekender",
    name: "Leather Weekender",
    tagline: "Two nights, one bag",
    category: "bags",
    price: 420,
    rating: 4.9,
    reviews: 118,
    badge: "Limited",
    image: U(B.b5),
    gallery: g(B.b5, B.b3, B.b7),
    colors: [
      { name: "Chestnut", hex: "#6d4a30" },
      { name: "Black", hex: "#1c1b19" },
    ],
    description:
      "A full-grain leather holdall that will outlast the trip, the airline and probably the marriage. Brass zip, cotton lining, removable strap.",
    details: [
      "40L capacity",
      "Full-grain vegetable-tanned leather",
      "Solid brass zips",
      "Detachable shoulder strap",
    ],
  },
  {
    id: 27,
    slug: "sling-crossbody",
    name: "Sling Crossbody",
    tagline: "Phone, keys, done",
    category: "bags",
    price: 85,
    rating: 4.4,
    reviews: 563,
    image: U(B.b6),
    gallery: g(B.b6, B.b4, B.b2),
    colors: [
      { name: "Black", hex: "#1f1e1b" },
      { name: "Sand", hex: "#c7b9a2" },
      { name: "Clay", hex: "#b4552f" },
    ],
    description:
      "A small sling for the days you don't want a bag. Fits a phone, a passport, keys and a paperback, with a strap that adjusts one-handed.",
    details: [
      "3L capacity",
      "Ripstop nylon with leather trim",
      "Magnetic quick-release buckle",
      "Fits a 7in tablet",
    ],
  },
  {
    id: 28,
    slug: "horizon-sunglasses",
    name: "Horizon Sunglasses",
    tagline: "A wider view",
    category: "eyewear",
    price: 155,
    rating: 4.7,
    reviews: 289,
    image: U(E.e1),
    gallery: g(E.e1, E.e2, E.e4),
    colors: [
      { name: "Tortoise / Green", hex: "#6b4a2f" },
      { name: "Black / Grey", hex: "#22211e" },
    ],
    description:
      "A softened square frame in Italian acetate, with polarised lenses and a keyhole bridge that sits comfortably on most faces.",
    details: [
      "Italian acetate frame",
      "Polarised CR-39 lenses",
      "100% UV400 protection",
      "Includes leather case and cloth",
    ],
  },
  {
    id: 29,
    slug: "mesa-acetate-frames",
    name: "Mesa Frames",
    tagline: "Optical, or not",
    category: "eyewear",
    price: 175,
    rating: 4.6,
    reviews: 174,
    badge: "New",
    image: U(E.e2),
    gallery: g(E.e2, E.e1, E.e3),
    colors: [
      { name: "Honey", hex: "#b58a52" },
      { name: "Smoke", hex: "#6f6a62" },
    ],
    description:
      "A rounder frame with a thicker rim and a bit more personality. Comes with clear lenses, ready for your prescription.",
    details: [
      "Hand-polished acetate",
      "Prescription ready",
      "Five-barrel hinges",
      "Adjustable nose pads",
    ],
    isNew: true,
  },
  {
    id: 30,
    slug: "sunline-aviator",
    name: "Sunline Aviator",
    tagline: "The classic, corrected",
    category: "eyewear",
    price: 145,
    compareAt: 170,
    rating: 4.5,
    reviews: 341,
    image: U(E.e3),
    gallery: g(E.e3, E.e4, E.e1),
    colors: [
      { name: "Gold / Green", hex: "#b79a6d" },
      { name: "Silver / Blue", hex: "#a9adb0" },
    ],
    description:
      "The aviator, with a slightly smaller lens and a lighter titanium frame. Enough nostalgia, none of the weight.",
    details: [
      "Titanium frame, 22g",
      "Polarised mineral glass",
      "100% UV protection",
      "Silicone nose pads",
    ],
  },
  {
    id: 31,
    slug: "coast-round-frames",
    name: "Coast Round",
    tagline: "Light on the face",
    category: "eyewear",
    price: 130,
    rating: 4.6,
    reviews: 198,
    image: U(E.e4),
    gallery: g(E.e4, E.e3, E.e2),
    colors: [
      { name: "Sand", hex: "#cbbda5" },
      { name: "Ink", hex: "#23221f" },
    ],
    description:
      "A thin round frame for people who don't like wearing glasses. Bio-acetate, wire core temples and a very light touch.",
    details: [
      "Bio-acetate frame",
      "Wire-core temples",
      "Scratch-resistant lenses",
      "Recycled packaging",
    ],
  },
  {
    id: 32,
    slug: "lumen-x100-compact",
    name: "Lumen X100",
    tagline: "Pocket-sized, full-frame",
    category: "cameras",
    price: 899,
    rating: 4.9,
    reviews: 152,
    badge: "Bestseller",
    image: U(C.c1),
    gallery: g(C.c1, C.c3, C.c5),
    colors: [
      { name: "Silver / Black", hex: "#c5c2ba" },
      { name: "All Black", hex: "#1d1c1a" },
    ],
    description:
      "A fixed-lens compact with an APS-C sensor and dials where your fingers expect them. The camera you actually carry.",
    details: [
      "26MP APS-C sensor",
      "35mm equivalent f/2 lens",
      "Hybrid optical viewfinder",
      "4K/30p video",
    ],
    bestseller: true,
  },
  {
    id: 33,
    slug: "frame-35-rangefinder",
    name: "Frame 35",
    tagline: "Slow, deliberate",
    category: "cameras",
    price: 749,
    rating: 4.7,
    reviews: 88,
    image: U(C.c2),
    gallery: g(C.c2, C.c4, C.c6),
    colors: [
      { name: "Chrome", hex: "#b8b6b0" },
      { name: "Black", hex: "#1e1d1b" },
    ],
    description:
      "A manual-focus rangefinder for the patient. Brass top plate, cloth shutter and a viewfinder that makes you compose properly.",
    details: [
      "Full-frame 24MP sensor",
      "Mechanical shutter to 1/4000",
      "Rangefinder patch focus",
      "Brass top and bottom plates",
    ],
  },
  {
    id: 34,
    slug: "aperture-mirrorless",
    name: "Aperture M",
    tagline: "The system camera",
    category: "cameras",
    price: 1290,
    rating: 4.8,
    reviews: 204,
    badge: "New",
    image: U(C.c3),
    gallery: g(C.c3, C.c1, C.c4),
    colors: [
      { name: "Graphite", hex: "#3b3b39" },
      { name: "Silver", hex: "#c2c0ba" },
    ],
    description:
      "A full-frame mirrorless body with in-body stabilisation and a viewfinder you can actually see through in daylight. The start of a system.",
    details: [
      "33MP full-frame sensor",
      "8-stop in-body stabilisation",
      "Dual card slots",
      "6K/30p video, 10-bit",
    ],
    isNew: true,
  },
  {
    id: 35,
    slug: "field-camera-mark-ii",
    name: "Field Camera II",
    tagline: "Weather-sealed workhorse",
    category: "cameras",
    price: 980,
    compareAt: 1100,
    rating: 4.6,
    reviews: 117,
    image: U(C.c4),
    gallery: g(C.c4, C.c2, C.c6),
    colors: [
      { name: "Olive", hex: "#4f5a41" },
      { name: "Black", hex: "#1e1d1b" },
    ],
    description:
      "A rugged body built for rain, dust and long days. Two dials, a deep grip and a battery that keeps going.",
    details: [
      "26MP APS-C sensor",
      "IP53 weather sealing",
      "700-shot battery life",
      "Dual SD slots",
    ],
  },
  {
    id: 36,
    slug: "pocket-snap-camera",
    name: "Pocket Snap",
    tagline: "Always in a pocket",
    category: "cameras",
    price: 420,
    rating: 4.4,
    reviews: 276,
    image: U(C.c5),
    gallery: g(C.c5, C.c1, C.c3),
    colors: [
      { name: "Black", hex: "#1f1e1b" },
      { name: "Sand", hex: "#cfc3ae" },
    ],
    description:
      "A tiny 1-inch sensor camera with a bright zoom and a screen you can flip. For the moments a phone is too distracting.",
    details: [
      "20MP 1-inch sensor",
      "24–70mm equivalent zoom",
      "Flip-up touchscreen",
      "USB-C charging",
    ],
  },
  {
    id: 37,
    slug: "solstice-lounge-chair",
    name: "Solstice Lounge Chair",
    tagline: "Sit for a while",
    category: "home",
    price: 890,
    rating: 4.8,
    reviews: 74,
    badge: "Editor's pick",
    image: U(H.h1),
    gallery: g(H.h1, H.h9, H.h13),
    colors: [
      { name: "Oat Bouclé", hex: "#d8cdb8" },
      { name: "Forest Velvet", hex: "#3d4a3a" },
    ],
    description:
      "A low lounge chair with a solid oak frame and a deep, forgiving seat. Solstice is designed to be sat in sideways, with a book.",
    details: [
      "Solid FSC-certified oak frame",
      "High-resilience foam and bouclé",
      "Removable, washable covers",
      "Ships assembled",
    ],
  },
  {
    id: 38,
    slug: "arc-floor-lamp",
    name: "Arc Floor Lamp",
    tagline: "Light where you need it",
    category: "home",
    price: 320,
    rating: 4.7,
    reviews: 193,
    image: U(H.h2),
    gallery: g(H.h2, H.h3, H.h10),
    colors: [
      { name: "Black / Brass", hex: "#2a2926" },
      { name: "Bone / Brass", hex: "#ddd3c2" },
    ],
    description:
      "A slender arc in powder-coated steel with a brass diffuser. Reaches over a sofa without asking for floor space.",
    details: [
      "Powder-coated steel stem",
      "Solid brass shade",
      "Dimmable warm LED included",
      "2.1m cable with foot switch",
    ],
  },
  {
    id: 39,
    slug: "halo-table-lamp",
    name: "Halo Table Lamp",
    tagline: "A small pool of light",
    category: "home",
    price: 180,
    compareAt: 210,
    rating: 4.6,
    reviews: 248,
    image: U(H.h3),
    gallery: g(H.h3, H.h2, H.h10),
    colors: [
      { name: "Cream", hex: "#e6ddcd" },
      { name: "Clay", hex: "#b4552f" },
    ],
    description:
      "A ceramic base and a linen shade, sized for a bedside table. Halo gives off the kind of light that makes a room feel finished.",
    details: [
      "Hand-thrown ceramic base",
      "Natural linen shade",
      "Inline dimmer switch",
      "E27 bulb included",
    ],
  },
  {
    id: 40,
    slug: "column-pendant-light",
    name: "Column Pendant",
    tagline: "Hang it low",
    category: "home",
    price: 240,
    rating: 4.7,
    reviews: 121,
    badge: "New",
    image: U(H.h4),
    gallery: g(H.h4, H.h10, H.h2),
    colors: [
      { name: "Brushed Brass", hex: "#b79a6d" },
      { name: "Matte Black", hex: "#252420" },
    ],
    description:
      "A cylindrical pendant with an opal diffuser, designed to sit low over a table. Warm, even light with no glare.",
    details: [
      "Spun metal cylinder",
      "Opal glass diffuser",
      "2m braided cord",
      "Dimmable LED included",
    ],
    isNew: true,
  },
  {
    id: 41,
    slug: "terrace-lounge-chair",
    name: "Terrace Chair",
    tagline: "Indoor, outdoor",
    category: "home",
    price: 540,
    rating: 4.5,
    reviews: 86,
    image: U(H.h5),
    gallery: g(H.h5, H.h13, H.h16),
    colors: [
      { name: "Teak / Ecru", hex: "#a8815c" },
      { name: "Teak / Olive", hex: "#5b6247" },
    ],
    description:
      "A teak lounge chair with a quick-dry sling seat. Equally at home on a balcony or in a sunroom.",
    details: [
      "Solid teak frame",
      "Quick-dry acrylic sling",
      "Marine-grade hardware",
      "Folds for storage",
    ],
  },
  {
    id: 42,
    slug: "olive-tree-planter",
    name: "Olive Tree Planter",
    tagline: "A little patience",
    category: "home",
    price: 95,
    rating: 4.6,
    reviews: 312,
    image: U(H.h6),
    gallery: g(H.h6, H.h7, H.h11),
    colors: [
      { name: "Terracotta", hex: "#b4552f" },
      { name: "Stone", hex: "#b7b0a4" },
    ],
    description:
      "A young olive tree in a hand-thrown terracotta pot. Slow-growing, forgiving, and better looking than most furniture.",
    details: [
      "Approx. 60cm including pot",
      "Hand-thrown terracotta",
      "Care card included",
      "Ships within 3 days",
    ],
  },
  {
    id: 43,
    slug: "monstera-stoneware",
    name: "Monstera in Stoneware",
    tagline: "Green, without the fuss",
    category: "home",
    price: 75,
    rating: 4.5,
    reviews: 407,
    image: U(H.h7),
    gallery: g(H.h7, H.h6, H.h12),
    colors: [
      { name: "Stoneware", hex: "#c8c0b2" },
      { name: "Charcoal", hex: "#3a3833" },
    ],
    description:
      "A mature monstera in a matte stoneware planter. Tolerates a forgetful watering schedule and a north-facing window.",
    details: [
      "Approx. 70cm including pot",
      "Matte stoneware planter",
      "Drainage saucer included",
      "Pet-friendly alternative available",
    ],
  },
  {
    id: 44,
    slug: "stoneware-mug-set",
    name: "Stoneware Mug Set",
    tagline: "Four, for the table",
    category: "home",
    price: 48,
    rating: 4.8,
    reviews: 689,
    badge: "Bestseller",
    image: U(H.h8),
    gallery: g(H.h8, H.h14, H.h15),
    colors: [
      { name: "Oat", hex: "#d8cdb8" },
      { name: "Slate", hex: "#6f7576" },
    ],
    description:
      "Four stackable mugs in a speckled stoneware glaze, made to be used every morning and put in the dishwasher afterwards.",
    details: [
      "Set of four, 300ml each",
      "Reactive speckled glaze",
      "Dishwasher and microwave safe",
      "Made in small batches",
    ],
    bestseller: true,
  },
  {
    id: 45,
    slug: "ceramic-pour-over-set",
    name: "Ceramic Pour-Over",
    tagline: "The morning ritual",
    category: "home",
    price: 65,
    rating: 4.7,
    reviews: 256,
    image: U(H.h20),
    gallery: g(H.h20, H.h19, H.h21),
    colors: [
      { name: "Bone", hex: "#e2d9c8" },
      { name: "Clay", hex: "#b4552f" },
    ],
    description:
      "A ceramic dripper, carafe and scoop in one box. The kind of slow morning that pays for itself.",
    details: [
      "Ceramic cone dripper",
      "600ml borosilicate carafe",
      "Stainless scoop included",
      "100 filters included",
    ],
  },
  {
    id: 46,
    slug: "single-origin-coffee",
    name: "Single Origin Coffee",
    tagline: "Roasted this week",
    category: "home",
    price: 24,
    rating: 4.8,
    reviews: 834,
    badge: "Bestseller",
    image: U(H.h19),
    gallery: g(H.h19, H.h21, H.h20),
    colors: [
      { name: "Whole Bean", hex: "#6b4b35" },
      { name: "Ground", hex: "#8a6a4e" },
    ],
    description:
      "A rotating single-origin, roasted to order. Notes of cocoa, stone fruit and a clean finish. 250g bag.",
    details: [
      "250g whole bean or ground",
      "Roasted to order, ships weekly",
      "Specialty grade, 86+ score",
      "Compostable bag",
    ],
    bestseller: true,
  },
  {
    id: 47,
    slug: "no-04-eau-de-parfum",
    name: "No. 04 Eau de Parfum",
    tagline: "Cedar, fig, salt",
    category: "wellness",
    price: 120,
    rating: 4.8,
    reviews: 367,
    badge: "Editor's pick",
    image: U(N.n1),
    gallery: g(N.n1, N.n3, N.n6),
    colors: [
      { name: "50ml", hex: "#d8cbb6" },
      { name: "100ml", hex: "#c9b89d" },
    ],
    description:
      "A warm, dry fragrance built around cedarwood, fig leaf and a mineral salt note. Unisex, long-wearing, and not at all loud.",
    details: [
      "Eau de parfum, 18% concentration",
      "Cedar, fig leaf, sea salt",
      "Vegan and cruelty-free",
      "Recyclable glass bottle",
    ],
  },
  {
    id: 48,
    slug: "cedar-smoke-cologne",
    name: "Cedar & Smoke",
    tagline: "For the evening",
    category: "wellness",
    price: 135,
    rating: 4.6,
    reviews: 189,
    image: U(N.n2),
    gallery: g(N.n2, N.n1, N.n3),
    colors: [
      { name: "50ml", hex: "#b9a88f" },
      { name: "100ml", hex: "#a18e73" },
    ],
    description:
      "Smoked cedar, black pepper and a trace of leather. The one to put on before dinner.",
    details: [
      "Eau de parfum, 20% concentration",
      "Cedar, black pepper, leather",
      "Made in Grasse, France",
      "Refillable bottle",
    ],
  },
  {
    id: 49,
    slug: "botanic-face-serum",
    name: "Botanic Face Serum",
    tagline: "Three drops, morning",
    category: "wellness",
    price: 58,
    compareAt: 68,
    rating: 4.7,
    reviews: 512,
    image: U(N.n4),
    gallery: g(N.n4, N.n5, N.n6),
    colors: [{ name: "30ml", hex: "#c9c3b4" }],
    description:
      "A lightweight serum with squalane, niacinamide and green tea. Absorbs quickly, sits well under sunscreen, and doesn't announce itself.",
    details: [
      "30ml amber glass bottle",
      "5% niacinamide, squalane",
      "Fragrance-free",
      "Dermatologist tested",
    ],
  },
  {
    id: 50,
    slug: "ritual-body-oil",
    name: "Ritual Body Oil",
    tagline: "After the bath",
    category: "wellness",
    price: 46,
    rating: 4.6,
    reviews: 298,
    image: U(N.n5),
    gallery: g(N.n5, N.n4, N.n2),
    colors: [{ name: "100ml", hex: "#cbbda5" }],
    description:
      "A fast-absorbing blend of jojoba, sweet almond and a little neroli. Warm it in your hands first.",
    details: [
      "100ml pump bottle",
      "Jojoba, almond, neroli",
      "No mineral oils",
      "Vegan and cruelty-free",
    ],
  },
  {
    id: 51,
    slug: "insulated-flask",
    name: "Insulated Flask",
    tagline: "Cold for 24 hours",
    category: "wellness",
    price: 42,
    rating: 4.7,
    reviews: 723,
    image: U(N.n7),
    gallery: g(N.n7, N.n8, N.n9),
    colors: [
      { name: "Bone", hex: "#ded5c4" },
      { name: "Forest", hex: "#3d4a3a" },
      { name: "Clay", hex: "#b4552f" },
    ],
    description:
      "Double-walled stainless steel with a leakproof lid and a powder-coated finish that survives a rucksack. 750ml.",
    details: [
      "750ml capacity",
      "18/8 stainless steel",
      "Cold 24h, hot 12h",
      "Dishwasher safe lid",
    ],
  },
  {
    id: 52,
    slug: "everyday-water-bottle",
    name: "Everyday Bottle",
    tagline: "The one you refill",
    category: "wellness",
    price: 32,
    rating: 4.5,
    reviews: 614,
    image: U(N.n8),
    gallery: g(N.n8, N.n7, N.n9),
    colors: [
      { name: "Clear", hex: "#d9d5cc" },
      { name: "Smoke", hex: "#6f6a62" },
    ],
    description:
      "A lightweight bottle in recycled Tritan with a wide mouth and a lid that actually seals. 600ml.",
    details: [
      "600ml capacity",
      "Recycled Tritan plastic",
      "BPA and BPS free",
      "Fits most cup holders",
    ],
  },
  {
    id: 53,
    slug: "tactile-mechanical-keyboard",
    name: "Tactile Mechanical",
    tagline: "A better thock",
    category: "desk",
    price: 165,
    rating: 4.8,
    reviews: 342,
    badge: "Bestseller",
    image: U(D.d1),
    gallery: g(D.d1, D.d2, D.d4),
    colors: [
      { name: "Bone / Walnut", hex: "#ddd3c2" },
      { name: "Graphite", hex: "#34322e" },
    ],
    description:
      "A 75% mechanical keyboard with a gasket-mounted plate, hot-swappable switches and a solid walnut accent. Sounds as good as it feels.",
    details: [
      "75% layout, hot-swappable",
      "Gasket-mounted aluminium case",
      "PBT dye-sublimated keycaps",
      "USB-C and Bluetooth",
    ],
    bestseller: true,
  },
  {
    id: 54,
    slug: "compact-65-keyboard",
    name: "Compact 65",
    tagline: "Small desk, full function",
    category: "desk",
    price: 139,
    compareAt: 159,
    rating: 4.6,
    reviews: 208,
    image: U(D.d2),
    gallery: g(D.d2, D.d1, D.d3),
    colors: [
      { name: "Sand", hex: "#d0c5b0" },
      { name: "Ink", hex: "#252420" },
    ],
    description:
      "A 65% board with arrow keys, a rotary knob and a low profile that slips into a bag. Wired, for the purists.",
    details: [
      "65% layout with arrow keys",
      "Rotary volume knob",
      "Lubed linear switches",
      "Detachable USB-C cable",
    ],
  },
  {
    id: 55,
    slug: "studio-wireless-keyboard",
    name: "Studio Wireless",
    tagline: "Quiet, for shared rooms",
    category: "desk",
    price: 119,
    rating: 4.5,
    reviews: 431,
    image: U(D.d3),
    gallery: g(D.d3, D.d4, D.d1),
    colors: [
      { name: "Silver", hex: "#c7c5be" },
      { name: "Space Grey", hex: "#5c5d5e" },
    ],
    description:
      "A low-profile wireless keyboard with scissor switches and a full number row. Quiet enough for a library, solid enough for a desk.",
    details: [
      "Low-profile scissor switches",
      "Bluetooth, three devices",
      "Rechargeable, 3-month battery",
      "Aluminium top plate",
    ],
  },
  {
    id: 56,
    slug: "linen-desk-notebook",
    name: "Linen Desk Notebook",
    tagline: "For the good ideas",
    category: "desk",
    price: 28,
    rating: 4.7,
    reviews: 586,
    image: U(H.h22),
    gallery: g(H.h22, H.h23, H.h8),
    colors: [
      { name: "Oat", hex: "#d8cdb8" },
      { name: "Olive", hex: "#5b6247" },
      { name: "Ink", hex: "#252420" },
    ],
    description:
      "A lay-flat notebook with 160 pages of 100gsm dot-grid paper and a linen cover. Fountain-pen friendly, no bleed-through.",
    details: [
      "A5, 160 dot-grid pages",
      "100gsm ivory paper",
      "Lay-flat binding",
      "Two ribbon markers",
    ],
  },
];

export const allProducts = products;

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getProductsByCategory(category: CategorySlug): Product[] {
  return products.filter((product) => product.category === category);
}

export function getBestsellers(limit = 4): Product[] {
  return products.filter((product) => product.bestseller).slice(0, limit);
}

export function getNewArrivals(limit = 8): Product[] {
  const newOnes = products.filter((product) => product.isNew || product.badge === "New");
  const rest = products.filter((product) => !newOnes.includes(product));
  return [...newOnes, ...rest].slice(0, limit);
}

export function getRelated(product: Product, limit = 4): Product[] {
  const sameCategory = products.filter(
    (candidate) =>
      candidate.category === product.category && candidate.slug !== product.slug,
  );
  const others = products.filter(
    (candidate) =>
      candidate.category !== product.category && candidate.slug !== product.slug,
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return products.filter((product) =>
    [product.name, product.tagline, product.category, product.description]
      .join(" ")
      .toLowerCase()
      .includes(q),
  );
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function categoryName(slug: CategorySlug): string {
  return categories.find((category) => category.slug === slug)?.name ?? slug;
}

export const navCategories = categories.filter((category) =>
  ["audio", "timepieces", "footwear", "bags", "home"].includes(category.slug),
);

export const featuredCategories = categories.filter((category) =>
  ["audio", "timepieces", "footwear", "bags", "home", "cameras"].includes(
    category.slug,
  ),
);
