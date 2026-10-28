// Joli Enterprises — Centralized Wholesale Product & Category Data Store
// Categories: Stationery, Household, Fashion Accessories, Mobile Accessories, Gift & General Items

export const initialCategories = [
  {
    id: "stationery",
    slug: "stationery",
    name: "Stationery Products",
    description: "Bulk pens, notebooks, mathematical sets, school kits, and high-volume combo packs for schools, offices, and retail stationery shops.",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=900&auto=format&fit=crop&q=80",
    itemCount: 8
  },
  {
    id: "household",
    slug: "household",
    name: "Household Products",
    description: "Everyday cleaning utilities, heavy-duty hooks, storage clips, kitchen organizers, and high-turnover home essentials.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&auto=format&fit=crop&q=80",
    itemCount: 7
  },
  {
    id: "fashion-accessories",
    slug: "fashion-accessories",
    name: "Fashion Accessories",
    description: "Trending hair accessories, claw clips, elastic bands, scrunchies, headbands, and wholesale jewelry assortments.",
    image: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=900&auto=format&fit=crop&q=80",
    itemCount: 7
  },
  {
    id: "mobile-accessories",
    slug: "mobile-accessories",
    name: "Mobile Accessories",
    description: "Fast-moving smartphone utilities, braided charging cables, desktop phone stands, wire protectors, and universal mounts.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=900&auto=format&fit=crop&q=80",
    itemCount: 6
  },
  {
    id: "gift-general",
    slug: "gift-general",
    name: "Gift & General Items",
    description: "Silicone character keychains, return gift sets, novelty stationery gifts, decorative washi tapes, and impulse retail items.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=900&auto=format&fit=crop&q=80",
    itemCount: 7
  }
];

export const initialProducts = [
  // ==========================================
  // CATEGORY 1: STATIONERY PRODUCTS
  // ==========================================
  {
    id: "mega-back-to-school-combo",
    slug: "mega-back-to-school-combo",
    name: "Mega Back-to-School Combo Kit (100 Items)",
    category: "stationery",
    categoryName: "Stationery Products",
    subcategory: "School Kits & Combos",
    sku: "JLI-STN-CMB01",
    shortDescription: "Complete retail-ready school stationery combo pack containing 100 individual items: 30 pencils, 10 erasers, 10 sharpeners, 10 rulers, 12 crayons, 12 sketch pens, and 16 notebooks.",
    fullDescription: "Designed specifically for resellers, stationery stores, and educational kit distributors. Each master kit contains 100 individually wrapped essential stationery pieces in attractive retail blister packaging. All materials are non-toxic, child-safe, and tested for standard school durability.",
    images: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 420.00,
    packPrice: 4200.00,
    packQuantity: 10,
    cartonQuantity: 50,
    moq: 10,
    increment: 5,
    priceTiers: [
      { minQty: 10, price: 420.00 },
      { minQty: 30, price: 385.00 },
      { minQty: 50, price: 350.00 }
    ],
    inStock: true,
    stockCount: 450,
    featured: true,
    isCombo: true,
    badge: "Super Bulk Combo",
    comboItems: [
      "30 x Premium HB Graphite Pencils",
      "10 x Dust-Free Vinyl Erasers",
      "10 x Dual-Hole Safety Sharpeners",
      "10 x Clear Acrylic Rulers (15cm)",
      "12 x Non-Toxic Wax Color Crayons",
      "12 x Washable Fine-Tip Sketch Pens",
      "16 x Softcover Ruled Student Notebooks (64 Pages)"
    ],
    specifications: [
      { label: "Total Item Count", value: "100 Verified Pieces per Bundle" },
      { label: "Target Audience", value: "Primary & Middle School Students" },
      { label: "Packaging", value: "Individual Sealed Polybag inside Master Carton" },
      { label: "Carton Weight", value: "22.5 kg per 50 combos" },
      { label: "Compliance", value: "EN-71 Non-Toxic Certified" }
    ]
  },
  {
    id: "all-the-best-exam-kit",
    slug: "all-the-best-exam-kit",
    name: "'All the Best' Transparent Exam Kit",
    category: "stationery",
    categoryName: "Stationery Products",
    subcategory: "School Kits & Combos",
    sku: "JLI-STN-CMB02",
    shortDescription: "Board-exam compliant see-through zipper pouch packed with 2 blue gel pens, 1 black pen, pencil, eraser, sharpener, and 15cm ruler.",
    fullDescription: "Transparent PVC exam pouch pre-assembled with examination-approved writing instruments. High seller during secondary and higher-secondary board examination seasons. Sold in counter-display cartons.",
    images: [
      "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 48.00,
    packPrice: 1152.00,
    packQuantity: 24,
    cartonQuantity: 240,
    moq: 24,
    increment: 24,
    priceTiers: [
      { minQty: 24, price: 48.00 },
      { minQty: 120, price: 42.00 },
      { minQty: 240, price: 36.50 }
    ],
    inStock: true,
    stockCount: 1200,
    featured: true,
    isCombo: true,
    badge: "Exam Season Hit",
    comboItems: [
      "1 x Heavy-Gauge Clear Zipper Pouch",
      "2 x Smooth-Glide 0.7mm Blue Gel Pens",
      "1 x Quick-Dry Black Gel Pen",
      "1 x Dark Lead HB Pencil",
      "1 x Soft Plastic Eraser",
      "1 x 15cm Beveled Metric Scale"
    ],
    specifications: [
      { label: "Pouch Material", value: "0.3mm Clear PVC with Nylon Zipper" },
      { label: "Exam Compliance", value: "100% Transparent (Hall-ticket Approved)" },
      { label: "Pack Packaging", value: "Box of 24 Pouches" }
    ]
  },
  {
    id: "unicorn-pastel-art-stationery-set",
    slug: "unicorn-pastel-art-stationery-set",
    name: "Unicorn Pastel Gift Stationery Set",
    category: "stationery",
    categoryName: "Stationery Products",
    subcategory: "School Kits & Combos",
    sku: "JLI-STN-CMB03",
    shortDescription: "Attractive themed children's stationery box with unicorn metal pencil case, multi-color click pen, notepad, tape, and eraser.",
    fullDescription: "High-margin impulse gift item for gift shops and toy retailers. Features popular pastel unicorn graphics embossed on a durable tin pencil box packed with coordinated writing accessories.",
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 115.00,
    packPrice: 1380.00,
    packQuantity: 12,
    cartonQuantity: 120,
    moq: 12,
    increment: 12,
    priceTiers: [
      { minQty: 12, price: 115.00 },
      { minQty: 60, price: 102.00 },
      { minQty: 120, price: 92.00 }
    ],
    inStock: true,
    stockCount: 680,
    featured: true,
    isCombo: true,
    badge: "Trending Gift",
    comboItems: [
      "1 x Embossed Double-Tier Tin Pencil Box",
      "1 x 6-in-1 Multicolor Retractable Ballpoint Pen",
      "2 x Graphite Pastel Pencils",
      "1 x Novelty Scented Rainbow Eraser",
      "1 x Decorative Mini Washi Tape Roll",
      "1 x Pocket Spiral Note Pad (40 Sheets)"
    ],
    specifications: [
      { label: "Box Material", value: "Printed Tinplate Metal" },
      { label: "Color Options", value: "Pastel Pink, Lavender, Mint Blue Assorted" },
      { label: "Display Unit", value: "Shrink-wrapped Retail Gift Box" }
    ]
  },
  {
    id: "classic-blue-gel-pens-box",
    slug: "classic-blue-gel-pens-box",
    name: "Smooth-Flow 0.5mm Blue Gel Pens (Box of 50)",
    category: "stationery",
    categoryName: "Stationery Products",
    subcategory: "Pens & Pencils",
    sku: "JLI-STN-PEN01",
    shortDescription: "Waterproof Japanese ink 0.5mm tip gel pens with rubberized comfort grip for students and corporate offices.",
    fullDescription: "Consistent fast-drying Japanese formula ink that resists smudging and water seepage. High volume daily wholesale item supplied to retail stores and coaching centers.",
    images: [
      "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 6.50,
    packPrice: 325.00,
    packQuantity: 50,
    cartonQuantity: 1000,
    moq: 100,
    increment: 50,
    priceTiers: [
      { minQty: 100, price: 6.50 },
      { minQty: 500, price: 5.80 },
      { minQty: 1000, price: 5.10 }
    ],
    inStock: true,
    stockCount: 15000,
    featured: false,
    badge: "High Turnover",
    specifications: [
      { label: "Tip Size", value: "0.5mm Swiss Tungsten Carbide Ball" },
      { label: "Ink Color", value: "Deep Royal Blue" },
      { label: "Writing Distance", value: "800+ Meters per Pen" },
      { label: "Packaging", value: "Box of 50 Pens, 20 Boxes per Master Carton" }
    ]
  },
  {
    id: "dust-free-pastel-erasers-jar",
    slug: "dust-free-pastel-erasers-jar",
    name: "Dust-Free Pastel Erasers (Counter Jar of 60)",
    category: "stationery",
    categoryName: "Stationery Products",
    subcategory: "Erasers & Sharpeners",
    sku: "JLI-STN-ERS01",
    shortDescription: "Super soft dust-free synthetic rubber erasers in assorted macaron pastel shades housed in a transparent display jar.",
    fullDescription: "Non-smudging polymer erasers that roll debris into a single neat strand without tearing school notebook paper. Supplied in a counter-top display jar designed for retail billing desks.",
    images: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 3.20,
    packPrice: 192.00,
    packQuantity: 60,
    cartonQuantity: 1440,
    moq: 120,
    increment: 60,
    priceTiers: [
      { minQty: 120, price: 3.20 },
      { minQty: 360, price: 2.80 },
      { minQty: 1440, price: 2.40 }
    ],
    inStock: true,
    stockCount: 8500,
    featured: false,
    badge: "Fast Moving",
    specifications: [
      { label: "Material", value: "Phthalate-Free Polymer Resin" },
      { label: "Quantity", value: "60 Pieces per Counter Jar" },
      { label: "Colors", value: "Pastel Pink, Mint, Lilac, Butter Yellow" }
    ]
  },
  {
    id: "hardbound-ruled-notebooks-a5",
    slug: "hardbound-ruled-notebooks-a5",
    name: "A5 Hardbound Executive Ruled Notebooks (Pack of 12)",
    category: "stationery",
    categoryName: "Stationery Products",
    subcategory: "Notebooks",
    sku: "JLI-STN-NTB01",
    shortDescription: "Premium 80 GSM natural shade paper with leatherette water-resistant cover, ribbon bookmark, and elastic band.",
    fullDescription: "Sturdy hardbound journal notebooks ideal for corporate procurement, gifting, and premium retail shelves. Bleed-resistant paper works flawlessly with fountain and gel pens.",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 85.00,
    packPrice: 1020.00,
    packQuantity: 12,
    cartonQuantity: 120,
    moq: 24,
    increment: 12,
    priceTiers: [
      { minQty: 24, price: 85.00 },
      { minQty: 60, price: 76.00 },
      { minQty: 120, price: 68.00 }
    ],
    inStock: true,
    stockCount: 2200,
    featured: false,
    badge: "Office Essential",
    specifications: [
      { label: "Size", value: "A5 (210 x 148 mm)" },
      { label: "Page Count", value: "192 Pages (96 Sheets)" },
      { label: "Paper Quality", value: "80 GSM Acid-Free Cream Paper" }
    ]
  },
  {
    id: "heavy-duty-office-stapler-set",
    slug: "heavy-duty-office-stapler-set",
    name: "Heavy-Duty All-Metal Stapler with 5000 Pins",
    category: "stationery",
    categoryName: "Stationery Products",
    subcategory: "Desk Accessories",
    sku: "JLI-STN-STP01",
    shortDescription: "Jam-free steel mechanism stapler capable of binding up to 30 sheets, bundled with 5 boxes of No. 10 staples.",
    fullDescription: "Engineered with anti-jam inner rails and anti-skid rubber base. Includes wholesale quantity of standard replacement staples.",
    images: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 95.00,
    packPrice: 950.00,
    packQuantity: 10,
    cartonQuantity: 100,
    moq: 10,
    increment: 10,
    priceTiers: [
      { minQty: 10, price: 95.00 },
      { minQty: 50, price: 84.00 },
      { minQty: 100, price: 74.00 }
    ],
    inStock: true,
    stockCount: 1400,
    featured: false,
    badge: "Commercial Grade",
    specifications: [
      { label: "Binding Capacity", value: "Up to 30 Sheets (75 GSM)" },
      { label: "Staple Type", value: "Standard No. 10 / 24/6 Compatible" },
      { label: "Pins Included", value: "5 x 1000 Staple Cartridges" }
    ]
  },
  {
    id: "color-coated-paper-clips-tub",
    slug: "color-coated-paper-clips-tub",
    name: "Vinyl Coated Color Paper Clips (Tub of 500)",
    category: "stationery",
    categoryName: "Stationery Products",
    subcategory: "Desk Accessories",
    sku: "JLI-STN-CLP01",
    shortDescription: "Rust-resistant spring steel paper clips with colorful smooth vinyl coating in a stackable round acrylic tub.",
    fullDescription: "28mm standard size office paper clips that prevent page tearing. Ideal for corporate offices, law firms, and school staffrooms.",
    images: [
      "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 65.00,
    packPrice: 650.00,
    packQuantity: 10,
    cartonQuantity: 100,
    moq: 20,
    increment: 10,
    priceTiers: [
      { minQty: 20, price: 65.00 },
      { minQty: 50, price: 58.00 },
      { minQty: 100, price: 50.00 }
    ],
    inStock: true,
    stockCount: 3200,
    featured: false,
    specifications: [
      { label: "Clip Size", value: "28 mm Standard" },
      { label: "Pieces per Tub", value: "500 Assorted Colors" },
      { label: "Corrosion Proof", value: "Vinyl Powder Coated" }
    ]
  },

  // ==========================================
  // CATEGORY 2: HOUSEHOLD PRODUCTS
  // ==========================================
  {
    id: "heavy-duty-stainless-adhesive-hooks",
    slug: "heavy-duty-stainless-adhesive-hooks",
    name: "Heavy-Duty Seamless Adhesive Wall Hooks (Pack of 20 Cards)",
    category: "household",
    categoryName: "Household Products",
    subcategory: "Hooks & Storage",
    sku: "JLI-HSH-HOK01",
    shortDescription: "Transparent acrylic backing with stainless steel hooks holding up to 8kg on tiles, glass, wood, and marble without drilling.",
    fullDescription: "One of the highest velocity daily household items for convenience stores and plastic retail shops. 100% waterproof adhesive that bonds firmly in wet bathroom and kitchen environments.",
    images: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 28.00,
    packPrice: 560.00,
    packQuantity: 20,
    cartonQuantity: 400,
    moq: 40,
    increment: 20,
    priceTiers: [
      { minQty: 40, price: 28.00 },
      { minQty: 120, price: 23.50 },
      { minQty: 400, price: 19.80 }
    ],
    inStock: true,
    stockCount: 6500,
    featured: true,
    badge: "Top Wholesale Seller",
    specifications: [
      { label: "Load Capacity", value: "Up to 8 kg (17.6 lbs)" },
      { label: "Card Pack", value: "6 Hooks mounted per blister card" },
      { label: "Hook Metal", value: "Grade 304 Stainless Steel" },
      { label: "Surface Compatibility", value: "Glazed tiles, glass, acrylic, metal, painted wood" }
    ]
  },
  {
    id: "ergonomic-sponge-scrubbers-pack",
    slug: "ergonomic-sponge-scrubbers-pack",
    name: "Dual-Action Kitchen Sponge Scrubbers (Pack of 24)",
    category: "household",
    categoryName: "Household Products",
    subcategory: "Cleaning Utilities",
    sku: "JLI-HSH-SCR01",
    shortDescription: "High-density polyurethane foam with abrasive green scouring pad for non-scratch dishwashing and heavy grease removal.",
    fullDescription: "Durable kitchen scourer sponges packed in ready-to-hang retail blister strips. Superior lather retention and fast air-drying foam.",
    images: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 7.50,
    packPrice: 180.00,
    packQuantity: 24,
    cartonQuantity: 576,
    moq: 72,
    increment: 24,
    priceTiers: [
      { minQty: 72, price: 7.50 },
      { minQty: 288, price: 6.40 },
      { minQty: 576, price: 5.50 }
    ],
    inStock: true,
    stockCount: 9200,
    featured: false,
    badge: "Essential",
    specifications: [
      { label: "Dimensions", value: "10 x 7 x 3 cm" },
      { label: "Layers", value: "Dual Layer (Abrasive Fiber + Sponge)" },
      { label: "Packaging", value: "Master carton of 24 polybags" }
    ]
  },
  {
    id: "microfiber-cleaning-cloths-pack",
    slug: "microfiber-cleaning-cloths-pack",
    name: "Multi-Surface Microfiber Towels 40x40cm (Pack of 20)",
    category: "household",
    categoryName: "Household Products",
    subcategory: "Cleaning Utilities",
    sku: "JLI-HSH-MCF01",
    shortDescription: "Ultra-absorbent 350 GSM microfiber lint-free cloths for kitchen slabs, glass windows, mirrors, and automobile detailing.",
    fullDescription: "Lint-free, scratch-free microfiber fabric holding up to 8x its weight in liquid. Color-coded in packs of 20 for hygienic zoning.",
    images: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 22.00,
    packPrice: 440.00,
    packQuantity: 20,
    cartonQuantity: 300,
    moq: 40,
    increment: 20,
    priceTiers: [
      { minQty: 40, price: 22.00 },
      { minQty: 100, price: 18.50 },
      { minQty: 300, price: 15.00 }
    ],
    inStock: true,
    stockCount: 4200,
    featured: true,
    badge: "Volume Wholesale",
    specifications: [
      { label: "Fabric Density", value: "350 GSM High-Pile Microfiber" },
      { label: "Size", value: "40 cm x 40 cm" },
      { label: "Washable", value: "Over 300 Machine Wash Cycles" }
    ]
  },
  {
    id: "food-bag-sealing-clips-box",
    slug: "food-bag-sealing-clips-box",
    name: "Airtight Food Storage Sealing Clips (Box of 30 Sets)",
    category: "household",
    categoryName: "Household Products",
    subcategory: "Kitchen Tools",
    sku: "JLI-HSH-CLP01",
    shortDescription: "Heavy-duty polypropylene bag sealer clamps in 3 assorted sizes to keep snacks, bread, spices, and cereals fresh.",
    fullDescription: "Snap-tight food conservation clamps in bright pastel colors. Each retail set contains 10 assorted length clips.",
    images: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 35.00,
    packPrice: 1050.00,
    packQuantity: 30,
    cartonQuantity: 180,
    moq: 30,
    increment: 30,
    priceTiers: [
      { minQty: 30, price: 35.00 },
      { minQty: 90, price: 30.00 },
      { minQty: 180, price: 25.00 }
    ],
    inStock: true,
    stockCount: 1800,
    featured: false,
    specifications: [
      { label: "Material", value: "Food-Grade PP Plastic" },
      { label: "Sizes Included", value: "Large (14cm), Medium (10cm), Small (7cm)" },
      { label: "Temperature", value: "Freezer & Dishwasher Safe (-20°C to 100°C)" }
    ]
  },
  {
    id: "flexible-crevice-cleaning-brush",
    slug: "flexible-crevice-cleaning-brush",
    name: "Ultra-Thin Tile & Window Crevice Cleaning Brush (Pack of 24)",
    category: "household",
    categoryName: "Household Products",
    subcategory: "Cleaning Utilities",
    sku: "JLI-HSH-BRS01",
    shortDescription: "Ultra-stiff ultra-fine PET bristles designed for narrow window sliders, tile grout, kitchen sink gaps, and air conditioner vents.",
    fullDescription: "Viral trending household utility brush featuring high-density angled bristles and an ergonomic curved handle.",
    images: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 14.50,
    packPrice: 348.00,
    packQuantity: 24,
    cartonQuantity: 240,
    moq: 48,
    increment: 24,
    priceTiers: [
      { minQty: 48, price: 14.50 },
      { minQty: 120, price: 12.00 },
      { minQty: 240, price: 9.80 }
    ],
    inStock: true,
    stockCount: 3800,
    featured: false,
    badge: "Trending Gadget",
    specifications: [
      { label: "Bristle Material", value: "High-Tensile PET Micro-Bristles" },
      { label: "Length", value: "24 cm Length x 2 cm Width" },
      { label: "Hanger Hole", value: "Yes, for wall hanging" }
    ]
  },
  {
    id: "silicone-sink-drain-strainer",
    slug: "silicone-sink-drain-strainer",
    name: "Anti-Clog Silicone Sink Drain Strainer (Pack of 24)",
    category: "household",
    categoryName: "Household Products",
    subcategory: "Kitchen Tools",
    sku: "JLI-HSH-STR01",
    shortDescription: "Heat-resistant silicone basket with stainless steel rim catches food debris and hair without slowing water flow.",
    fullDescription: "Flexible inverted silicone sink strainer that pops inside-out for effortless emptying into the trash bin without touching residue.",
    images: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 18.00,
    packPrice: 432.00,
    packQuantity: 24,
    cartonQuantity: 288,
    moq: 48,
    increment: 24,
    priceTiers: [
      { minQty: 48, price: 18.00 },
      { minQty: 144, price: 15.50 },
      { minQty: 288, price: 12.80 }
    ],
    inStock: true,
    stockCount: 2900,
    featured: false,
    specifications: [
      { label: "Rim Material", value: "Brushed 201 Stainless Steel" },
      { label: "Basket Material", value: "Stain-Proof TPR Silicone" },
      { label: "Universal Fit", value: "Standard 75mm - 110mm drain openings" }
    ]
  },
  {
    id: "under-shelf-hanging-storage-basket",
    slug: "under-shelf-hanging-storage-basket",
    name: "Under-Shelf Wire Hanging Storage Basket (Carton of 12)",
    category: "household",
    categoryName: "Household Products",
    subcategory: "Hooks & Storage",
    sku: "JLI-HSH-BSK01",
    shortDescription: "Powder-coated rust-proof steel wire basket slides instantly under wardrobe and kitchen cabinet shelves for instant bonus storage.",
    fullDescription: "Slides onto any shelf up to 3cm thick with zero tools or drilling. Popular home organizer for cups, napkins, foil rolls, and clothing.",
    images: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 110.00,
    packPrice: 1320.00,
    packQuantity: 12,
    cartonQuantity: 48,
    moq: 12,
    increment: 12,
    priceTiers: [
      { minQty: 12, price: 110.00 },
      { minQty: 24, price: 98.00 },
      { minQty: 48, price: 86.00 }
    ],
    inStock: true,
    stockCount: 850,
    featured: false,
    specifications: [
      { label: "Material", value: "Heavy-Gauge Wrought Iron Wire" },
      { label: "Finish", value: "Electrostatic White / Matte Black Powder Coat" },
      { label: "Dimensions", value: "38 x 26 x 14 cm" }
    ]
  },

  // ==========================================
  // CATEGORY 3: FASHION ACCESSORIES
  // ==========================================
  {
    id: "matte-pastel-claw-hair-clips-box",
    slug: "matte-pastel-claw-hair-clips-box",
    name: "Matte Pastel Large Claw Hair Clips (Box of 48)",
    category: "fashion-accessories",
    categoryName: "Fashion Accessories",
    subcategory: "Hair Accessories",
    sku: "JLI-FSH-CLW01",
    shortDescription: "11cm durable acrylic jaw clips with non-slip soft rubberized matte coating and reinforced steel torsion springs.",
    fullDescription: "Fastest-selling hair accessory across beauty retailers, salons, and accessory kiosks. 48 clips in 8 curated neutral and pastel tones.",
    images: [
      "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 16.50,
    packPrice: 792.00,
    packQuantity: 48,
    cartonQuantity: 576,
    moq: 48,
    increment: 48,
    priceTiers: [
      { minQty: 48, price: 16.50 },
      { minQty: 192, price: 14.00 },
      { minQty: 576, price: 11.50 }
    ],
    inStock: true,
    stockCount: 7800,
    featured: true,
    badge: "Bestseller",
    specifications: [
      { label: "Length", value: "11 cm Extra Large Grip" },
      { label: "Finish", value: "Velvet Soft-Touch Rubberized Matte" },
      { label: "Assortment", value: "Cream, Olive, Taupe, Rose, Clay, Charcoal" }
    ]
  },
  {
    id: "seamless-elastic-hair-bands-jar",
    slug: "seamless-elastic-hair-bands-jar",
    name: "Seamless Cotton Elastic Hair Bands (Jar of 300)",
    category: "fashion-accessories",
    categoryName: "Fashion Accessories",
    subcategory: "Hair Accessories",
    sku: "JLI-FSH-BND01",
    shortDescription: "Snag-free thick elastic ponytail holders with zero metal joints that prevent hair breakage and maintain elasticity.",
    fullDescription: "High-stretch nylon-cotton blend elastic ties in a transparent retail display jar. Essential everyday retail counter purchase.",
    images: [
      "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 0.95,
    packPrice: 285.00,
    packQuantity: 300,
    cartonQuantity: 3600,
    moq: 600,
    increment: 300,
    priceTiers: [
      { minQty: 600, price: 0.95 },
      { minQty: 1800, price: 0.80 },
      { minQty: 3600, price: 0.68 }
    ],
    inStock: true,
    stockCount: 18000,
    featured: false,
    badge: "Daily Essential",
    specifications: [
      { label: "Diameter", value: "4.5 cm (Expands up to 18 cm)" },
      { label: "Joint Type", value: "100% Seamless Glueless" },
      { label: "Pieces per Jar", value: "300 Pieces (Black & Assorted Mix)" }
    ]
  },
  {
    id: "silk-touch-satin-scrunchies-pack",
    slug: "silk-touch-satin-scrunchies-pack",
    name: "Silk-Touch Satin Hair Scrunchies (Pack of 36)",
    category: "fashion-accessories",
    categoryName: "Fashion Accessories",
    subcategory: "Hair Accessories",
    sku: "JLI-FSH-SCR01",
    shortDescription: "Lustrous high-density polyester satin scrunchies that glide over curls and straight hair without friction damage.",
    fullDescription: "Packaged in sets of 36 assorted luxury jewel and pastel tones. High profit margin item for fashion boutiques and lifestyle stores.",
    images: [
      "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 12.00,
    packPrice: 432.00,
    packQuantity: 36,
    cartonQuantity: 432,
    moq: 72,
    increment: 36,
    priceTiers: [
      { minQty: 72, price: 12.00 },
      { minQty: 216, price: 10.20 },
      { minQty: 432, price: 8.50 }
    ],
    inStock: true,
    stockCount: 5400,
    featured: false,
    specifications: [
      { label: "Material", value: "Premium Crepe Satin Silk-Blend" },
      { label: "Width", value: "10 cm Outer Diameter" },
      { label: "Colors", value: "Emerald, Champagne, Rose Gold, Midnight, Ivory" }
    ]
  },
  {
    id: "minimalist-metal-arc-headbands",
    slug: "minimalist-metal-arc-headbands",
    name: "Minimalist Metallic Arc Headbands (Pack of 24)",
    category: "fashion-accessories",
    categoryName: "Fashion Accessories",
    subcategory: "Hair Accessories",
    sku: "JLI-FSH-HDB01",
    shortDescription: "Thin 4mm gold and silver tone flexible alloy hair hoops with protective silicone tips behind ears.",
    fullDescription: "Classic lightweight metal bands suited for everyday casual wear, bridal styling, or DIY craft embellishment.",
    images: [
      "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 18.00,
    packPrice: 432.00,
    packQuantity: 24,
    cartonQuantity: 288,
    moq: 48,
    increment: 24,
    priceTiers: [
      { minQty: 48, price: 18.00 },
      { minQty: 144, price: 15.50 },
      { minQty: 288, price: 13.00 }
    ],
    inStock: true,
    stockCount: 3100,
    featured: false,
    specifications: [
      { label: "Metal", value: "Electroplated Spring Brass Alloy" },
      { label: "Comfort", value: "Dual Soft Polymer Ear Tips" }
    ]
  },
  {
    id: "crystal-stone-stud-earrings-card",
    slug: "crystal-stone-stud-earrings-card",
    name: "Zircon Crystal Stud Earrings Assortment (Card of 36 Pairs)",
    category: "fashion-accessories",
    categoryName: "Fashion Accessories",
    subcategory: "Jewellery",
    sku: "JLI-FSH-EAR01",
    shortDescription: "Hypoallergenic stainless steel post studs with faceted cubic zirconia stones in 6 graduated sizes.",
    fullDescription: "Mounted on an elegant retail velvet-touch display card. High volume everyday fashion jewelry with anti-tarnish coating.",
    images: [
      "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 9.50,
    packPrice: 342.00,
    packQuantity: 36,
    cartonQuantity: 360,
    moq: 72,
    increment: 36,
    priceTiers: [
      { minQty: 72, price: 9.50 },
      { minQty: 180, price: 8.20 },
      { minQty: 360, price: 6.90 }
    ],
    inStock: true,
    stockCount: 4200,
    featured: true,
    badge: "High Margin",
    specifications: [
      { label: "Posts", value: "Medical Grade Surgical Steel (Lead & Nickel Free)" },
      { label: "Stones", value: "AAA Grade Faceted Cubic Zirconia" },
      { label: "Display", value: "36 Pairs on Display Card with Back Stoppers" }
    ]
  },
  {
    id: "enamel-aesthetic-keychains-card",
    slug: "enamel-aesthetic-keychains-card",
    name: "Hard Enamel Floral & Geometric Keychains (Display of 30)",
    category: "fashion-accessories",
    categoryName: "Fashion Accessories",
    subcategory: "Keychains",
    sku: "JLI-FSH-KEY01",
    shortDescription: "Gold-plated zinc alloy key rings with vibrant colored hard enamel charms and swivel lobster clasp.",
    fullDescription: "Trending accessory for handbags, backpacks, and car keys. High retail appeal across college and young professional shoppers.",
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 28.00,
    packPrice: 840.00,
    packQuantity: 30,
    cartonQuantity: 300,
    moq: 30,
    increment: 30,
    priceTiers: [
      { minQty: 30, price: 28.00 },
      { minQty: 90, price: 24.50 },
      { minQty: 300, price: 21.00 }
    ],
    inStock: true,
    stockCount: 2600,
    featured: false,
    specifications: [
      { label: "Base Metal", value: "Zinc Alloy with 14K Gold Flash Plating" },
      { label: "Finish", value: "Scratch-Resistant Hard Enamel" }
    ]
  },
  {
    id: "decorative-resin-buttons-pack",
    slug: "decorative-resin-buttons-pack",
    name: "Decorative Multi-Color Resin Craft Buttons (Pack of 200)",
    category: "fashion-accessories",
    categoryName: "Fashion Accessories",
    subcategory: "Sewing & Craft",
    sku: "JLI-FSH-BTN01",
    shortDescription: "4-hole polished polyester resin buttons in assorted diameters (12mm to 25mm) for tailoring, shirts, and DIY clothing.",
    fullDescription: "Smooth, machine-washable buttons resistant to dry cleaning chemicals. Supplied in wholesale polybags for tailors and craft retailers.",
    images: [
      "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 0.65,
    packPrice: 130.00,
    packQuantity: 200,
    cartonQuantity: 4000,
    moq: 400,
    increment: 200,
    priceTiers: [
      { minQty: 400, price: 0.65 },
      { minQty: 1000, price: 0.52 },
      { minQty: 4000, price: 0.42 }
    ],
    inStock: true,
    stockCount: 16000,
    featured: false,
    specifications: [
      { label: "Diameter Mix", value: "12mm, 15mm, 20mm, 25mm" },
      { label: "Holes", value: "Standard 4-Hole Punch" }
    ]
  },

  // ==========================================
  // CATEGORY 4: MOBILE ACCESSORIES
  // ==========================================
  {
    id: "desktop-folding-phone-stand-box",
    slug: "desktop-folding-phone-stand-box",
    name: "Universal Desktop Folding Phone & Tablet Stand (Box of 20)",
    category: "mobile-accessories",
    categoryName: "Mobile Accessories",
    subcategory: "Phone Stands",
    sku: "JLI-MOB-STN01",
    shortDescription: "Fully foldable dual-axis adjustable phone holder with silicone anti-slip pads and cable charging cutout.",
    fullDescription: "Universal pocket-folding phone cradle compatible with all 4 to 11-inch smartphones and tablets. Sturdy weighted base prevents tipping during video calls.",
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 58.00,
    packPrice: 1160.00,
    packQuantity: 20,
    cartonQuantity: 200,
    moq: 20,
    increment: 20,
    priceTiers: [
      { minQty: 20, price: 58.00 },
      { minQty: 60, price: 51.00 },
      { minQty: 200, price: 44.00 }
    ],
    inStock: true,
    stockCount: 3400,
    featured: true,
    badge: "Corporate Gifting",
    specifications: [
      { label: "Material", value: "ABS Resin with Non-Slip Silicone" },
      { label: "Compatibility", value: "Universal 4.0\" to 11.0\" Devices" },
      { label: "Adjustability", value: "Dual Axis 0° to 120° Angle Tilt" }
    ]
  },
  {
    id: "braided-3-in-1-charging-cable-box",
    slug: "braided-3-in-1-charging-cable-box",
    name: "Heavy-Duty Braided 3-in-1 Charging Cable 1.2m (Box of 25)",
    category: "mobile-accessories",
    categoryName: "Mobile Accessories",
    subcategory: "Charging Cables",
    sku: "JLI-MOB-CBL01",
    shortDescription: "Tangle-free nylon braided fast-charging cable with Type-C, Lightning, and Micro-USB connectors on a single cord.",
    fullDescription: "High-density copper core supporting up to 3.0A high-speed charging. Aluminum alloy connector shells tested for 10,000+ bends.",
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 62.00,
    packPrice: 1550.00,
    packQuantity: 25,
    cartonQuantity: 250,
    moq: 25,
    increment: 25,
    priceTiers: [
      { minQty: 25, price: 62.00 },
      { minQty: 75, price: 54.00 },
      { minQty: 250, price: 47.00 }
    ],
    inStock: true,
    stockCount: 4800,
    featured: true,
    badge: "Top Utility",
    specifications: [
      { label: "Connectors", value: "Type-C + Lightning (iOS) + Micro USB" },
      { label: "Current", value: "Up to 3.0A Max Output" },
      { label: "Cord Length", value: "1.2 Meters / 4 Feet" },
      { label: "Jacket", value: "Tangle-Free Double-Braided Military Nylon" }
    ]
  },
  {
    id: "silicone-cable-wire-protectors-pack",
    slug: "silicone-cable-wire-protectors-pack",
    name: "Spiral Silicone Cable Wire Protectors (Pack of 100)",
    category: "mobile-accessories",
    categoryName: "Mobile Accessories",
    subcategory: "Cable Protectors",
    sku: "JLI-MOB-PRT01",
    shortDescription: "Flexible spiral silicone coils that wrap around charging cable ends to prevent fraying, bending, and wire breakage.",
    fullDescription: "Inexpensive impulse add-on product for mobile recharge shops and electronics retailers. Pack of 100 assorted color spirals.",
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 2.10,
    packPrice: 210.00,
    packQuantity: 100,
    cartonQuantity: 2000,
    moq: 200,
    increment: 100,
    priceTiers: [
      { minQty: 200, price: 2.10 },
      { minQty: 600, price: 1.75 },
      { minQty: 2000, price: 1.40 }
    ],
    inStock: true,
    stockCount: 14000,
    featured: false,
    badge: "Super Affordable",
    specifications: [
      { label: "Material", value: "Elastic High-Memory TPU Silicone" },
      { label: "Compatibility", value: "Fits all 2.5mm - 4.5mm round cables" }
    ]
  },
  {
    id: "magnetic-car-dashboard-phone-mount",
    slug: "magnetic-car-dashboard-phone-mount",
    name: "360° Magnetic Car Dashboard Phone Mount (Box of 15)",
    category: "mobile-accessories",
    categoryName: "Mobile Accessories",
    subcategory: "Phone Stands",
    sku: "JLI-MOB-MNT01",
    shortDescription: "Compact zinc alloy magnetic car holder with 6 powerful N52 neodymium magnets and 3M VHB automotive adhesive base.",
    fullDescription: "Secure one-hand mounting for car dashboards and office desks. Includes two ultra-thin metal plates that slip behind any phone case.",
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 78.00,
    packPrice: 1170.00,
    packQuantity: 15,
    cartonQuantity: 150,
    moq: 15,
    increment: 15,
    priceTiers: [
      { minQty: 15, price: 78.00 },
      { minQty: 45, price: 69.00 },
      { minQty: 150, price: 59.50 }
    ],
    inStock: true,
    stockCount: 1900,
    featured: false,
    specifications: [
      { label: "Magnets", value: "6 x N52 Neodymium Array (Closed Field)" },
      { label: "Base Adhesive", value: "Genuine 3M VHB Heat-Resistant Tape" },
      { label: "Plates Included", value: "2 Metal Adhesive Discs" }
    ]
  },
  {
    id: "wired-stereo-earphones-with-mic",
    slug: "wired-stereo-earphones-with-mic",
    name: "Deep-Bass 3.5mm Wired In-Ear Earphones with Mic (Box of 30)",
    category: "mobile-accessories",
    categoryName: "Mobile Accessories",
    subcategory: "Audio Accessories",
    sku: "JLI-MOB-EAR01",
    shortDescription: "Tangle-resistant 1.2m TPE wired earphones with inline microphone, multi-function call button, and noise-isolating silicone buds.",
    fullDescription: "High-demand replacement earphones for calling and online schooling. Crystal-clear voice microphone and gold-plated 3.5mm audio jack.",
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 42.00,
    packPrice: 1260.00,
    packQuantity: 30,
    cartonQuantity: 300,
    moq: 30,
    increment: 30,
    priceTiers: [
      { minQty: 30, price: 42.00 },
      { minQty: 90, price: 36.50 },
      { minQty: 300, price: 31.00 }
    ],
    inStock: true,
    stockCount: 3800,
    featured: false,
    specifications: [
      { label: "Jack Type", value: "3.5 mm Gold-Plated TRRS" },
      { label: "Driver Size", value: "10mm Dynamic Drivers" },
      { label: "Microphone", value: "High-Sensitivity Omnidirectional Mic" }
    ]
  },
  {
    id: "waterproof-pouch-lanyard-pack",
    slug: "waterproof-pouch-lanyard-pack",
    name: "IPX8 Universal Waterproof Phone Pouch with Lanyard (Pack of 50)",
    category: "mobile-accessories",
    categoryName: "Mobile Accessories",
    subcategory: "Utility Accessories",
    sku: "JLI-MOB-WTR01",
    shortDescription: "Dual-swivel lock seal waterproof phone dry-bag with sensitive touch-screen window for monsoon, swimming, and travel.",
    fullDescription: "Certified IPX8 submersible up to 10 meters depth. Fits all smartphones up to 6.8 inches diagonal screen size.",
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 32.00,
    packPrice: 1600.00,
    packQuantity: 50,
    cartonQuantity: 500,
    moq: 50,
    increment: 50,
    priceTiers: [
      { minQty: 50, price: 32.00 },
      { minQty: 150, price: 27.50 },
      { minQty: 500, price: 23.00 }
    ],
    inStock: true,
    stockCount: 2900,
    featured: false,
    badge: "Monsoon Essential",
    specifications: [
      { label: "Waterproof Rating", value: "IPX8 Certified (10M Underwater)" },
      { label: "Device Size", value: "Screens up to 6.8 inches" }
    ]
  },

  // ==========================================
  // CATEGORY 5: GIFT & GENERAL ITEMS
  // ==========================================
  {
    id: "cartoon-silicone-character-keychains",
    slug: "cartoon-silicone-character-keychains",
    name: "3D Cartoon Silicone Character Keychains (Display of 40)",
    category: "gift-general",
    categoryName: "Gift & General Items",
    subcategory: "Keychains & Novelty",
    sku: "JLI-GFT-KEY01",
    shortDescription: "Embossed colorful 3D PVC silicone figurines with braided wrist strap and gold metal bell charm.",
    fullDescription: "High-velocity gift item displayed near billing counters. Popular animated anime and animal motifs loved by school and college students.",
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 24.00,
    packPrice: 960.00,
    packQuantity: 40,
    cartonQuantity: 400,
    moq: 40,
    increment: 40,
    priceTiers: [
      { minQty: 40, price: 24.00 },
      { minQty: 120, price: 20.50 },
      { minQty: 400, price: 17.50 }
    ],
    inStock: true,
    stockCount: 6200,
    featured: true,
    badge: "Top Retail Seller",
    specifications: [
      { label: "Material", value: "Eco-Friendly Soft PVC Silicone" },
      { label: "Fittings", value: "Gold Alloy Swivel Clasp + Wrist Strap" },
      { label: "Assortment", value: "8 Different Character Themes" }
    ]
  },
  {
    id: "holographic-washi-tape-sticker-set",
    slug: "holographic-washi-tape-sticker-set",
    name: "Aesthetic Washi Tape & Foil Sticker Gift Box (Set of 20 Boxes)",
    category: "gift-general",
    categoryName: "Gift & General Items",
    subcategory: "Craft & Stickers",
    sku: "JLI-GFT-WSH01",
    shortDescription: "Decorative Japanese masking paper tapes with metallic foil accents and matching die-cut sticker sheets in an illustrated gift box.",
    fullDescription: "Prime gift item for scrapbooking, journaling, and card making enthusiasts. Packaged in a compact slide-out storage box.",
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 65.00,
    packPrice: 1300.00,
    packQuantity: 20,
    cartonQuantity: 200,
    moq: 20,
    increment: 20,
    priceTiers: [
      { minQty: 20, price: 65.00 },
      { minQty: 60, price: 57.00 },
      { minQty: 200, price: 49.00 }
    ],
    inStock: true,
    stockCount: 2200,
    featured: false,
    badge: "Stationery Gift",
    specifications: [
      { label: "Box Contents", value: "4 Washi Tape Rolls (15mm) + 10 Sticker Sheets" },
      { label: "Adhesive", value: "Residue-Free Repositionable" }
    ]
  },
  {
    id: "metallic-gift-wrapping-ribbon-rolls",
    slug: "metallic-gift-wrapping-ribbon-rolls",
    name: "Metallic Curling Gift Wrapping Ribbons (Pack of 24 Rolls)",
    category: "gift-general",
    categoryName: "Gift & General Items",
    subcategory: "Gift Packaging",
    sku: "JLI-GFT-RBN01",
    shortDescription: "10-meter rolls of high-shine holographic curling ribbon in vibrant festive colors for birthday presents, bouquets, and balloons.",
    fullDescription: "Standard 5mm width ribbons that curl effortlessly with a light scissor scrape. Essential retail stock for gift wrapping and party stores.",
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 12.00,
    packPrice: 288.00,
    packQuantity: 24,
    cartonQuantity: 288,
    moq: 48,
    increment: 24,
    priceTiers: [
      { minQty: 48, price: 12.00 },
      { minQty: 144, price: 10.00 },
      { minQty: 288, price: 8.20 }
    ],
    inStock: true,
    stockCount: 4800,
    featured: false,
    specifications: [
      { label: "Length per Roll", value: "10 Meters (32.8 Feet)" },
      { label: "Width", value: "5 mm Ribbon Width" },
      { label: "Colors", value: "Gold, Silver, Red, Royal Blue, Green, Magenta" }
    ]
  },
  {
    id: "pocket-card-spray-sanitizer-bottles",
    slug: "pocket-card-spray-sanitizer-bottles",
    name: "Refillable Credit-Card Pocket Mist Spray Bottles 20ml (Display of 36)",
    category: "gift-general",
    categoryName: "Gift & General Items",
    subcategory: "Novelty & Utility",
    sku: "JLI-GFT-SPR01",
    shortDescription: "Ultra-slim 20ml pocket mist spray bottles in pastel silicone slip-cases with keychain clip for sanitizers and perfumes.",
    fullDescription: "Fits effortlessly into pockets, wallets, or school bags. Leak-proof fine mist atomizing nozzle with removable funnel.",
    images: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 26.00,
    packPrice: 936.00,
    packQuantity: 36,
    cartonQuantity: 360,
    moq: 36,
    increment: 36,
    priceTiers: [
      { minQty: 36, price: 26.00 },
      { minQty: 108, price: 22.50 },
      { minQty: 360, price: 19.00 }
    ],
    inStock: true,
    stockCount: 3100,
    featured: false,
    specifications: [
      { label: "Capacity", value: "20 ml (Over 300 Sprays)" },
      { label: "Case", value: "Food-Grade Removable Silicone Sleeve" }
    ]
  },
  {
    id: "led-keychain-torch-carabiner",
    slug: "led-keychain-torch-carabiner",
    name: "Mini High-Lumen COB LED Keychain Flashlight (Display of 24)",
    category: "gift-general",
    categoryName: "Gift & General Items",
    subcategory: "Keychains & Novelty",
    sku: "JLI-GFT-LED01",
    shortDescription: "Rechargeable 500-lumen pocket emergency work light with bottle opener, folding bracket, magnet base, and carabiner.",
    fullDescription: "Tremendously popular viral pocket gadget with 4 brightness modes and Type-C rechargeable battery. Ideal hardware/gift cross-seller.",
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 88.00,
    packPrice: 2112.00,
    packQuantity: 24,
    cartonQuantity: 240,
    moq: 24,
    increment: 24,
    priceTiers: [
      { minQty: 24, price: 88.00 },
      { minQty: 72, price: 78.00 },
      { minQty: 240, price: 68.00 }
    ],
    inStock: true,
    stockCount: 1600,
    featured: true,
    badge: "Viral Novelty",
    specifications: [
      { label: "Brightness", value: "500 Lumens COB Floodlight" },
      { label: "Battery", value: "500mAh USB-C Rechargeable Li-Ion" },
      { label: "Features", value: "Strong Magnet + Carabiner + Stand + Bottle Opener" }
    ]
  },
  {
    id: "birthday-return-gift-stationery-pouches",
    slug: "birthday-return-gift-stationery-pouches",
    name: "Birthday Party Return Gift Stationery Pouches (Pack of 30)",
    category: "gift-general",
    categoryName: "Gift & General Items",
    subcategory: "School Kits & Combos",
    sku: "JLI-GFT-RTN01",
    shortDescription: "Pre-assembled celebration pouches containing printed pencil, novelty eraser, sharpener, mini notepad, and decorative ruler.",
    fullDescription: "Ready-to-distribute return gift solution for birthday parties and school events. Takes the hassle out of assembling individual bags.",
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 28.00,
    packPrice: 840.00,
    packQuantity: 30,
    cartonQuantity: 300,
    moq: 30,
    increment: 30,
    priceTiers: [
      { minQty: 30, price: 28.00 },
      { minQty: 90, price: 24.50 },
      { minQty: 300, price: 21.00 }
    ],
    inStock: true,
    stockCount: 2800,
    featured: false,
    badge: "Party Pack",
    specifications: [
      { label: "Contents per Pouch", value: "Pencil, Eraser, Sharpener, Notepad, 15cm Scale" },
      { label: "Outer Bag", value: "Zipper PVC Colorful Print Bag" }
    ]
  },
  {
    id: "mini-wooden-block-perpetual-calendar",
    slug: "mini-wooden-block-perpetual-calendar",
    name: "Mini Wooden Perpetual Block Calendar (Box of 12)",
    category: "gift-general",
    categoryName: "Gift & General Items",
    subcategory: "Novelty & Utility",
    sku: "JLI-GFT-CAL01",
    shortDescription: "Rustic natural wood manual date cube calendar for study desks, office cubicles, and boutique gifting.",
    fullDescription: "Eco-friendly wooden blocks displaying month and date numbers. Reusable year after year with timeless aesthetic appeal.",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1000&auto=format&fit=crop&q=80"
    ],
    unitPrice: 95.00,
    packPrice: 1140.00,
    packQuantity: 12,
    cartonQuantity: 120,
    moq: 12,
    increment: 12,
    priceTiers: [
      { minQty: 12, price: 95.00 },
      { minQty: 36, price: 84.00 },
      { minQty: 120, price: 74.00 }
    ],
    inStock: true,
    stockCount: 1100,
    featured: false,
    specifications: [
      { label: "Material", value: "Sustainably Harvested Pine Wood" },
      { label: "Dimensions", value: "11 x 7 x 5.5 cm" }
    ]
  }
];

// Centralized Wholesale Product & Category Frontend Data Store
export function getCategories() {
  return initialCategories;
}

export function getProducts() {
  return initialProducts;
}

export function getProductById(id) {
  const all = getProducts();
  return all.find(p => p.id === id || p.slug === id);
}

export function calculateTieredPrice(product, quantity) {
  if (!product || !product.priceTiers || product.priceTiers.length === 0) {
    return product ? product.unitPrice : 0;
  }
  
  // Sort descending by minQty
  const sortedTiers = [...product.priceTiers].sort((a, b) => b.minQty - a.minQty);
  for (const tier of sortedTiers) {
    if (quantity >= tier.minQty) {
      return tier.price;
    }
  }
  return product.unitPrice;
}

export const companyWholesaleHighlights = [
  {
    title: "Transparent Tiered Pricing",
    desc: "Order small test batches or full cartons with guaranteed unit discounts automatically applied at volume thresholds."
  },
  {
    title: "Strict Quality Inspection",
    desc: "Every stationery kit, household utility, and accessory batch undergoes piece-by-piece testing for non-toxic materials and mechanical durability."
  },
  {
    title: "GST Invoicing & Pan-India Dispatch",
    desc: "All wholesale orders receive formal tax invoices with applicable HSN codes and express surface/air cargo delivery."
  },
  {
    title: "Dedicated B2B Account Desk",
    desc: "Direct support for custom combos, school procurement, branding imprints, and mixed container estimates."
  }
];
