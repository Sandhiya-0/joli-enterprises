(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Pe=[{id:"stationery",slug:"stationery",name:"Stationery Products",description:"Bulk pens, notebooks, mathematical sets, school kits, and high-volume combo packs for schools, offices, and retail stationery shops.",image:"https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=900&auto=format&fit=crop&q=80",itemCount:8},{id:"household",slug:"household",name:"Household Products",description:"Everyday cleaning utilities, heavy-duty hooks, storage clips, kitchen organizers, and high-turnover home essentials.",image:"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&auto=format&fit=crop&q=80",itemCount:7},{id:"fashion-accessories",slug:"fashion-accessories",name:"Fashion Accessories",description:"Trending hair accessories, claw clips, elastic bands, scrunchies, headbands, and wholesale jewelry assortments.",image:"https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=900&auto=format&fit=crop&q=80",itemCount:7},{id:"mobile-accessories",slug:"mobile-accessories",name:"Mobile Accessories",description:"Fast-moving smartphone utilities, braided charging cables, desktop phone stands, wire protectors, and universal mounts.",image:"https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=900&auto=format&fit=crop&q=80",itemCount:6},{id:"gift-general",slug:"gift-general",name:"Gift & General Items",description:"Silicone character keychains, return gift sets, novelty stationery gifts, decorative washi tapes, and impulse retail items.",image:"https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=900&auto=format&fit=crop&q=80",itemCount:7}],Ee=[{id:"mega-back-to-school-combo",slug:"mega-back-to-school-combo",name:"Mega Back-to-School Combo Kit (100 Items)",category:"stationery",categoryName:"Stationery Products",subcategory:"School Kits & Combos",sku:"JLI-STN-CMB01",shortDescription:"Complete retail-ready school stationery combo pack containing 100 individual items: 30 pencils, 10 erasers, 10 sharpeners, 10 rulers, 12 crayons, 12 sketch pens, and 16 notebooks.",fullDescription:"Designed specifically for resellers, stationery stores, and educational kit distributors. Each master kit contains 100 individually wrapped essential stationery pieces in attractive retail blister packaging. All materials are non-toxic, child-safe, and tested for standard school durability.",images:["https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=1000&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=1000&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=1000&auto=format&fit=crop&q=80"],unitPrice:420,packPrice:4200,packQuantity:10,cartonQuantity:50,moq:10,increment:5,priceTiers:[{minQty:10,price:420},{minQty:30,price:385},{minQty:50,price:350}],inStock:!0,stockCount:450,featured:!0,isCombo:!0,badge:"Super Bulk Combo",comboItems:["30 x Premium HB Graphite Pencils","10 x Dust-Free Vinyl Erasers","10 x Dual-Hole Safety Sharpeners","10 x Clear Acrylic Rulers (15cm)","12 x Non-Toxic Wax Color Crayons","12 x Washable Fine-Tip Sketch Pens","16 x Softcover Ruled Student Notebooks (64 Pages)"],specifications:[{label:"Total Item Count",value:"100 Verified Pieces per Bundle"},{label:"Target Audience",value:"Primary & Middle School Students"},{label:"Packaging",value:"Individual Sealed Polybag inside Master Carton"},{label:"Carton Weight",value:"22.5 kg per 50 combos"},{label:"Compliance",value:"EN-71 Non-Toxic Certified"}]},{id:"all-the-best-exam-kit",slug:"all-the-best-exam-kit",name:"'All the Best' Transparent Exam Kit",category:"stationery",categoryName:"Stationery Products",subcategory:"School Kits & Combos",sku:"JLI-STN-CMB02",shortDescription:"Board-exam compliant see-through zipper pouch packed with 2 blue gel pens, 1 black pen, pencil, eraser, sharpener, and 15cm ruler.",fullDescription:"Transparent PVC exam pouch pre-assembled with examination-approved writing instruments. High seller during secondary and higher-secondary board examination seasons. Sold in counter-display cartons.",images:["https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=1000&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=1000&auto=format&fit=crop&q=80"],unitPrice:48,packPrice:1152,packQuantity:24,cartonQuantity:240,moq:24,increment:24,priceTiers:[{minQty:24,price:48},{minQty:120,price:42},{minQty:240,price:36.5}],inStock:!0,stockCount:1200,featured:!0,isCombo:!0,badge:"Exam Season Hit",comboItems:["1 x Heavy-Gauge Clear Zipper Pouch","2 x Smooth-Glide 0.7mm Blue Gel Pens","1 x Quick-Dry Black Gel Pen","1 x Dark Lead HB Pencil","1 x Soft Plastic Eraser","1 x 15cm Beveled Metric Scale"],specifications:[{label:"Pouch Material",value:"0.3mm Clear PVC with Nylon Zipper"},{label:"Exam Compliance",value:"100% Transparent (Hall-ticket Approved)"},{label:"Pack Packaging",value:"Box of 24 Pouches"}]},{id:"unicorn-pastel-art-stationery-set",slug:"unicorn-pastel-art-stationery-set",name:"Unicorn Pastel Gift Stationery Set",category:"stationery",categoryName:"Stationery Products",subcategory:"School Kits & Combos",sku:"JLI-STN-CMB03",shortDescription:"Attractive themed children's stationery box with unicorn metal pencil case, multi-color click pen, notepad, tape, and eraser.",fullDescription:"High-margin impulse gift item for gift shops and toy retailers. Features popular pastel unicorn graphics embossed on a durable tin pencil box packed with coordinated writing accessories.",images:["https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1000&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=1000&auto=format&fit=crop&q=80"],unitPrice:115,packPrice:1380,packQuantity:12,cartonQuantity:120,moq:12,increment:12,priceTiers:[{minQty:12,price:115},{minQty:60,price:102},{minQty:120,price:92}],inStock:!0,stockCount:680,featured:!0,isCombo:!0,badge:"Trending Gift",comboItems:["1 x Embossed Double-Tier Tin Pencil Box","1 x 6-in-1 Multicolor Retractable Ballpoint Pen","2 x Graphite Pastel Pencils","1 x Novelty Scented Rainbow Eraser","1 x Decorative Mini Washi Tape Roll","1 x Pocket Spiral Note Pad (40 Sheets)"],specifications:[{label:"Box Material",value:"Printed Tinplate Metal"},{label:"Color Options",value:"Pastel Pink, Lavender, Mint Blue Assorted"},{label:"Display Unit",value:"Shrink-wrapped Retail Gift Box"}]},{id:"classic-blue-gel-pens-box",slug:"classic-blue-gel-pens-box",name:"Smooth-Flow 0.5mm Blue Gel Pens (Box of 50)",category:"stationery",categoryName:"Stationery Products",subcategory:"Pens & Pencils",sku:"JLI-STN-PEN01",shortDescription:"Waterproof Japanese ink 0.5mm tip gel pens with rubberized comfort grip for students and corporate offices.",fullDescription:"Consistent fast-drying Japanese formula ink that resists smudging and water seepage. High volume daily wholesale item supplied to retail stores and coaching centers.",images:["https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=1000&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=1000&auto=format&fit=crop&q=80"],unitPrice:6.5,packPrice:325,packQuantity:50,cartonQuantity:1e3,moq:100,increment:50,priceTiers:[{minQty:100,price:6.5},{minQty:500,price:5.8},{minQty:1e3,price:5.1}],inStock:!0,stockCount:15e3,featured:!1,badge:"High Turnover",specifications:[{label:"Tip Size",value:"0.5mm Swiss Tungsten Carbide Ball"},{label:"Ink Color",value:"Deep Royal Blue"},{label:"Writing Distance",value:"800+ Meters per Pen"},{label:"Packaging",value:"Box of 50 Pens, 20 Boxes per Master Carton"}]},{id:"dust-free-pastel-erasers-jar",slug:"dust-free-pastel-erasers-jar",name:"Dust-Free Pastel Erasers (Counter Jar of 60)",category:"stationery",categoryName:"Stationery Products",subcategory:"Erasers & Sharpeners",sku:"JLI-STN-ERS01",shortDescription:"Super soft dust-free synthetic rubber erasers in assorted macaron pastel shades housed in a transparent display jar.",fullDescription:"Non-smudging polymer erasers that roll debris into a single neat strand without tearing school notebook paper. Supplied in a counter-top display jar designed for retail billing desks.",images:["https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=1000&auto=format&fit=crop&q=80"],unitPrice:3.2,packPrice:192,packQuantity:60,cartonQuantity:1440,moq:120,increment:60,priceTiers:[{minQty:120,price:3.2},{minQty:360,price:2.8},{minQty:1440,price:2.4}],inStock:!0,stockCount:8500,featured:!1,badge:"Fast Moving",specifications:[{label:"Material",value:"Phthalate-Free Polymer Resin"},{label:"Quantity",value:"60 Pieces per Counter Jar"},{label:"Colors",value:"Pastel Pink, Mint, Lilac, Butter Yellow"}]},{id:"hardbound-ruled-notebooks-a5",slug:"hardbound-ruled-notebooks-a5",name:"A5 Hardbound Executive Ruled Notebooks (Pack of 12)",category:"stationery",categoryName:"Stationery Products",subcategory:"Notebooks",sku:"JLI-STN-NTB01",shortDescription:"Premium 80 GSM natural shade paper with leatherette water-resistant cover, ribbon bookmark, and elastic band.",fullDescription:"Sturdy hardbound journal notebooks ideal for corporate procurement, gifting, and premium retail shelves. Bleed-resistant paper works flawlessly with fountain and gel pens.",images:["https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1000&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=1000&auto=format&fit=crop&q=80"],unitPrice:85,packPrice:1020,packQuantity:12,cartonQuantity:120,moq:24,increment:12,priceTiers:[{minQty:24,price:85},{minQty:60,price:76},{minQty:120,price:68}],inStock:!0,stockCount:2200,featured:!1,badge:"Office Essential",specifications:[{label:"Size",value:"A5 (210 x 148 mm)"},{label:"Page Count",value:"192 Pages (96 Sheets)"},{label:"Paper Quality",value:"80 GSM Acid-Free Cream Paper"}]},{id:"heavy-duty-office-stapler-set",slug:"heavy-duty-office-stapler-set",name:"Heavy-Duty All-Metal Stapler with 5000 Pins",category:"stationery",categoryName:"Stationery Products",subcategory:"Desk Accessories",sku:"JLI-STN-STP01",shortDescription:"Jam-free steel mechanism stapler capable of binding up to 30 sheets, bundled with 5 boxes of No. 10 staples.",fullDescription:"Engineered with anti-jam inner rails and anti-skid rubber base. Includes wholesale quantity of standard replacement staples.",images:["https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=1000&auto=format&fit=crop&q=80"],unitPrice:95,packPrice:950,packQuantity:10,cartonQuantity:100,moq:10,increment:10,priceTiers:[{minQty:10,price:95},{minQty:50,price:84},{minQty:100,price:74}],inStock:!0,stockCount:1400,featured:!1,badge:"Commercial Grade",specifications:[{label:"Binding Capacity",value:"Up to 30 Sheets (75 GSM)"},{label:"Staple Type",value:"Standard No. 10 / 24/6 Compatible"},{label:"Pins Included",value:"5 x 1000 Staple Cartridges"}]},{id:"color-coated-paper-clips-tub",slug:"color-coated-paper-clips-tub",name:"Vinyl Coated Color Paper Clips (Tub of 500)",category:"stationery",categoryName:"Stationery Products",subcategory:"Desk Accessories",sku:"JLI-STN-CLP01",shortDescription:"Rust-resistant spring steel paper clips with colorful smooth vinyl coating in a stackable round acrylic tub.",fullDescription:"28mm standard size office paper clips that prevent page tearing. Ideal for corporate offices, law firms, and school staffrooms.",images:["https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=1000&auto=format&fit=crop&q=80"],unitPrice:65,packPrice:650,packQuantity:10,cartonQuantity:100,moq:20,increment:10,priceTiers:[{minQty:20,price:65},{minQty:50,price:58},{minQty:100,price:50}],inStock:!0,stockCount:3200,featured:!1,specifications:[{label:"Clip Size",value:"28 mm Standard"},{label:"Pieces per Tub",value:"500 Assorted Colors"},{label:"Corrosion Proof",value:"Vinyl Powder Coated"}]},{id:"heavy-duty-stainless-adhesive-hooks",slug:"heavy-duty-stainless-adhesive-hooks",name:"Heavy-Duty Seamless Adhesive Wall Hooks (Pack of 20 Cards)",category:"household",categoryName:"Household Products",subcategory:"Hooks & Storage",sku:"JLI-HSH-HOK01",shortDescription:"Transparent acrylic backing with stainless steel hooks holding up to 8kg on tiles, glass, wood, and marble without drilling.",fullDescription:"One of the highest velocity daily household items for convenience stores and plastic retail shops. 100% waterproof adhesive that bonds firmly in wet bathroom and kitchen environments.",images:["https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1000&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1000&auto=format&fit=crop&q=80"],unitPrice:28,packPrice:560,packQuantity:20,cartonQuantity:400,moq:40,increment:20,priceTiers:[{minQty:40,price:28},{minQty:120,price:23.5},{minQty:400,price:19.8}],inStock:!0,stockCount:6500,featured:!0,badge:"Top Wholesale Seller",specifications:[{label:"Load Capacity",value:"Up to 8 kg (17.6 lbs)"},{label:"Card Pack",value:"6 Hooks mounted per blister card"},{label:"Hook Metal",value:"Grade 304 Stainless Steel"},{label:"Surface Compatibility",value:"Glazed tiles, glass, acrylic, metal, painted wood"}]},{id:"ergonomic-sponge-scrubbers-pack",slug:"ergonomic-sponge-scrubbers-pack",name:"Dual-Action Kitchen Sponge Scrubbers (Pack of 24)",category:"household",categoryName:"Household Products",subcategory:"Cleaning Utilities",sku:"JLI-HSH-SCR01",shortDescription:"High-density polyurethane foam with abrasive green scouring pad for non-scratch dishwashing and heavy grease removal.",fullDescription:"Durable kitchen scourer sponges packed in ready-to-hang retail blister strips. Superior lather retention and fast air-drying foam.",images:["https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1000&auto=format&fit=crop&q=80"],unitPrice:7.5,packPrice:180,packQuantity:24,cartonQuantity:576,moq:72,increment:24,priceTiers:[{minQty:72,price:7.5},{minQty:288,price:6.4},{minQty:576,price:5.5}],inStock:!0,stockCount:9200,featured:!1,badge:"Essential",specifications:[{label:"Dimensions",value:"10 x 7 x 3 cm"},{label:"Layers",value:"Dual Layer (Abrasive Fiber + Sponge)"},{label:"Packaging",value:"Master carton of 24 polybags"}]},{id:"microfiber-cleaning-cloths-pack",slug:"microfiber-cleaning-cloths-pack",name:"Multi-Surface Microfiber Towels 40x40cm (Pack of 20)",category:"household",categoryName:"Household Products",subcategory:"Cleaning Utilities",sku:"JLI-HSH-MCF01",shortDescription:"Ultra-absorbent 350 GSM microfiber lint-free cloths for kitchen slabs, glass windows, mirrors, and automobile detailing.",fullDescription:"Lint-free, scratch-free microfiber fabric holding up to 8x its weight in liquid. Color-coded in packs of 20 for hygienic zoning.",images:["https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1000&auto=format&fit=crop&q=80"],unitPrice:22,packPrice:440,packQuantity:20,cartonQuantity:300,moq:40,increment:20,priceTiers:[{minQty:40,price:22},{minQty:100,price:18.5},{minQty:300,price:15}],inStock:!0,stockCount:4200,featured:!0,badge:"Volume Wholesale",specifications:[{label:"Fabric Density",value:"350 GSM High-Pile Microfiber"},{label:"Size",value:"40 cm x 40 cm"},{label:"Washable",value:"Over 300 Machine Wash Cycles"}]},{id:"food-bag-sealing-clips-box",slug:"food-bag-sealing-clips-box",name:"Airtight Food Storage Sealing Clips (Box of 30 Sets)",category:"household",categoryName:"Household Products",subcategory:"Kitchen Tools",sku:"JLI-HSH-CLP01",shortDescription:"Heavy-duty polypropylene bag sealer clamps in 3 assorted sizes to keep snacks, bread, spices, and cereals fresh.",fullDescription:"Snap-tight food conservation clamps in bright pastel colors. Each retail set contains 10 assorted length clips.",images:["https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1000&auto=format&fit=crop&q=80"],unitPrice:35,packPrice:1050,packQuantity:30,cartonQuantity:180,moq:30,increment:30,priceTiers:[{minQty:30,price:35},{minQty:90,price:30},{minQty:180,price:25}],inStock:!0,stockCount:1800,featured:!1,specifications:[{label:"Material",value:"Food-Grade PP Plastic"},{label:"Sizes Included",value:"Large (14cm), Medium (10cm), Small (7cm)"},{label:"Temperature",value:"Freezer & Dishwasher Safe (-20°C to 100°C)"}]},{id:"flexible-crevice-cleaning-brush",slug:"flexible-crevice-cleaning-brush",name:"Ultra-Thin Tile & Window Crevice Cleaning Brush (Pack of 24)",category:"household",categoryName:"Household Products",subcategory:"Cleaning Utilities",sku:"JLI-HSH-BRS01",shortDescription:"Ultra-stiff ultra-fine PET bristles designed for narrow window sliders, tile grout, kitchen sink gaps, and air conditioner vents.",fullDescription:"Viral trending household utility brush featuring high-density angled bristles and an ergonomic curved handle.",images:["https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1000&auto=format&fit=crop&q=80"],unitPrice:14.5,packPrice:348,packQuantity:24,cartonQuantity:240,moq:48,increment:24,priceTiers:[{minQty:48,price:14.5},{minQty:120,price:12},{minQty:240,price:9.8}],inStock:!0,stockCount:3800,featured:!1,badge:"Trending Gadget",specifications:[{label:"Bristle Material",value:"High-Tensile PET Micro-Bristles"},{label:"Length",value:"24 cm Length x 2 cm Width"},{label:"Hanger Hole",value:"Yes, for wall hanging"}]},{id:"silicone-sink-drain-strainer",slug:"silicone-sink-drain-strainer",name:"Anti-Clog Silicone Sink Drain Strainer (Pack of 24)",category:"household",categoryName:"Household Products",subcategory:"Kitchen Tools",sku:"JLI-HSH-STR01",shortDescription:"Heat-resistant silicone basket with stainless steel rim catches food debris and hair without slowing water flow.",fullDescription:"Flexible inverted silicone sink strainer that pops inside-out for effortless emptying into the trash bin without touching residue.",images:["https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1000&auto=format&fit=crop&q=80"],unitPrice:18,packPrice:432,packQuantity:24,cartonQuantity:288,moq:48,increment:24,priceTiers:[{minQty:48,price:18},{minQty:144,price:15.5},{minQty:288,price:12.8}],inStock:!0,stockCount:2900,featured:!1,specifications:[{label:"Rim Material",value:"Brushed 201 Stainless Steel"},{label:"Basket Material",value:"Stain-Proof TPR Silicone"},{label:"Universal Fit",value:"Standard 75mm - 110mm drain openings"}]},{id:"under-shelf-hanging-storage-basket",slug:"under-shelf-hanging-storage-basket",name:"Under-Shelf Wire Hanging Storage Basket (Carton of 12)",category:"household",categoryName:"Household Products",subcategory:"Hooks & Storage",sku:"JLI-HSH-BSK01",shortDescription:"Powder-coated rust-proof steel wire basket slides instantly under wardrobe and kitchen cabinet shelves for instant bonus storage.",fullDescription:"Slides onto any shelf up to 3cm thick with zero tools or drilling. Popular home organizer for cups, napkins, foil rolls, and clothing.",images:["https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1000&auto=format&fit=crop&q=80"],unitPrice:110,packPrice:1320,packQuantity:12,cartonQuantity:48,moq:12,increment:12,priceTiers:[{minQty:12,price:110},{minQty:24,price:98},{minQty:48,price:86}],inStock:!0,stockCount:850,featured:!1,specifications:[{label:"Material",value:"Heavy-Gauge Wrought Iron Wire"},{label:"Finish",value:"Electrostatic White / Matte Black Powder Coat"},{label:"Dimensions",value:"38 x 26 x 14 cm"}]},{id:"matte-pastel-claw-hair-clips-box",slug:"matte-pastel-claw-hair-clips-box",name:"Matte Pastel Large Claw Hair Clips (Box of 48)",category:"fashion-accessories",categoryName:"Fashion Accessories",subcategory:"Hair Accessories",sku:"JLI-FSH-CLW01",shortDescription:"11cm durable acrylic jaw clips with non-slip soft rubberized matte coating and reinforced steel torsion springs.",fullDescription:"Fastest-selling hair accessory across beauty retailers, salons, and accessory kiosks. 48 clips in 8 curated neutral and pastel tones.",images:["https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=1000&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1000&auto=format&fit=crop&q=80"],unitPrice:16.5,packPrice:792,packQuantity:48,cartonQuantity:576,moq:48,increment:48,priceTiers:[{minQty:48,price:16.5},{minQty:192,price:14},{minQty:576,price:11.5}],inStock:!0,stockCount:7800,featured:!0,badge:"Bestseller",specifications:[{label:"Length",value:"11 cm Extra Large Grip"},{label:"Finish",value:"Velvet Soft-Touch Rubberized Matte"},{label:"Assortment",value:"Cream, Olive, Taupe, Rose, Clay, Charcoal"}]},{id:"seamless-elastic-hair-bands-jar",slug:"seamless-elastic-hair-bands-jar",name:"Seamless Cotton Elastic Hair Bands (Jar of 300)",category:"fashion-accessories",categoryName:"Fashion Accessories",subcategory:"Hair Accessories",sku:"JLI-FSH-BND01",shortDescription:"Snag-free thick elastic ponytail holders with zero metal joints that prevent hair breakage and maintain elasticity.",fullDescription:"High-stretch nylon-cotton blend elastic ties in a transparent retail display jar. Essential everyday retail counter purchase.",images:["https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=1000&auto=format&fit=crop&q=80"],unitPrice:.95,packPrice:285,packQuantity:300,cartonQuantity:3600,moq:600,increment:300,priceTiers:[{minQty:600,price:.95},{minQty:1800,price:.8},{minQty:3600,price:.68}],inStock:!0,stockCount:18e3,featured:!1,badge:"Daily Essential",specifications:[{label:"Diameter",value:"4.5 cm (Expands up to 18 cm)"},{label:"Joint Type",value:"100% Seamless Glueless"},{label:"Pieces per Jar",value:"300 Pieces (Black & Assorted Mix)"}]},{id:"silk-touch-satin-scrunchies-pack",slug:"silk-touch-satin-scrunchies-pack",name:"Silk-Touch Satin Hair Scrunchies (Pack of 36)",category:"fashion-accessories",categoryName:"Fashion Accessories",subcategory:"Hair Accessories",sku:"JLI-FSH-SCR01",shortDescription:"Lustrous high-density polyester satin scrunchies that glide over curls and straight hair without friction damage.",fullDescription:"Packaged in sets of 36 assorted luxury jewel and pastel tones. High profit margin item for fashion boutiques and lifestyle stores.",images:["https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=1000&auto=format&fit=crop&q=80"],unitPrice:12,packPrice:432,packQuantity:36,cartonQuantity:432,moq:72,increment:36,priceTiers:[{minQty:72,price:12},{minQty:216,price:10.2},{minQty:432,price:8.5}],inStock:!0,stockCount:5400,featured:!1,specifications:[{label:"Material",value:"Premium Crepe Satin Silk-Blend"},{label:"Width",value:"10 cm Outer Diameter"},{label:"Colors",value:"Emerald, Champagne, Rose Gold, Midnight, Ivory"}]},{id:"minimalist-metal-arc-headbands",slug:"minimalist-metal-arc-headbands",name:"Minimalist Metallic Arc Headbands (Pack of 24)",category:"fashion-accessories",categoryName:"Fashion Accessories",subcategory:"Hair Accessories",sku:"JLI-FSH-HDB01",shortDescription:"Thin 4mm gold and silver tone flexible alloy hair hoops with protective silicone tips behind ears.",fullDescription:"Classic lightweight metal bands suited for everyday casual wear, bridal styling, or DIY craft embellishment.",images:["https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=1000&auto=format&fit=crop&q=80"],unitPrice:18,packPrice:432,packQuantity:24,cartonQuantity:288,moq:48,increment:24,priceTiers:[{minQty:48,price:18},{minQty:144,price:15.5},{minQty:288,price:13}],inStock:!0,stockCount:3100,featured:!1,specifications:[{label:"Metal",value:"Electroplated Spring Brass Alloy"},{label:"Comfort",value:"Dual Soft Polymer Ear Tips"}]},{id:"crystal-stone-stud-earrings-card",slug:"crystal-stone-stud-earrings-card",name:"Zircon Crystal Stud Earrings Assortment (Card of 36 Pairs)",category:"fashion-accessories",categoryName:"Fashion Accessories",subcategory:"Jewellery",sku:"JLI-FSH-EAR01",shortDescription:"Hypoallergenic stainless steel post studs with faceted cubic zirconia stones in 6 graduated sizes.",fullDescription:"Mounted on an elegant retail velvet-touch display card. High volume everyday fashion jewelry with anti-tarnish coating.",images:["https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=1000&auto=format&fit=crop&q=80"],unitPrice:9.5,packPrice:342,packQuantity:36,cartonQuantity:360,moq:72,increment:36,priceTiers:[{minQty:72,price:9.5},{minQty:180,price:8.2},{minQty:360,price:6.9}],inStock:!0,stockCount:4200,featured:!0,badge:"High Margin",specifications:[{label:"Posts",value:"Medical Grade Surgical Steel (Lead & Nickel Free)"},{label:"Stones",value:"AAA Grade Faceted Cubic Zirconia"},{label:"Display",value:"36 Pairs on Display Card with Back Stoppers"}]},{id:"enamel-aesthetic-keychains-card",slug:"enamel-aesthetic-keychains-card",name:"Hard Enamel Floral & Geometric Keychains (Display of 30)",category:"fashion-accessories",categoryName:"Fashion Accessories",subcategory:"Keychains",sku:"JLI-FSH-KEY01",shortDescription:"Gold-plated zinc alloy key rings with vibrant colored hard enamel charms and swivel lobster clasp.",fullDescription:"Trending accessory for handbags, backpacks, and car keys. High retail appeal across college and young professional shoppers.",images:["https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1000&auto=format&fit=crop&q=80"],unitPrice:28,packPrice:840,packQuantity:30,cartonQuantity:300,moq:30,increment:30,priceTiers:[{minQty:30,price:28},{minQty:90,price:24.5},{minQty:300,price:21}],inStock:!0,stockCount:2600,featured:!1,specifications:[{label:"Base Metal",value:"Zinc Alloy with 14K Gold Flash Plating"},{label:"Finish",value:"Scratch-Resistant Hard Enamel"}]},{id:"decorative-resin-buttons-pack",slug:"decorative-resin-buttons-pack",name:"Decorative Multi-Color Resin Craft Buttons (Pack of 200)",category:"fashion-accessories",categoryName:"Fashion Accessories",subcategory:"Sewing & Craft",sku:"JLI-FSH-BTN01",shortDescription:"4-hole polished polyester resin buttons in assorted diameters (12mm to 25mm) for tailoring, shirts, and DIY clothing.",fullDescription:"Smooth, machine-washable buttons resistant to dry cleaning chemicals. Supplied in wholesale polybags for tailors and craft retailers.",images:["https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=1000&auto=format&fit=crop&q=80"],unitPrice:.65,packPrice:130,packQuantity:200,cartonQuantity:4e3,moq:400,increment:200,priceTiers:[{minQty:400,price:.65},{minQty:1e3,price:.52},{minQty:4e3,price:.42}],inStock:!0,stockCount:16e3,featured:!1,specifications:[{label:"Diameter Mix",value:"12mm, 15mm, 20mm, 25mm"},{label:"Holes",value:"Standard 4-Hole Punch"}]},{id:"desktop-folding-phone-stand-box",slug:"desktop-folding-phone-stand-box",name:"Universal Desktop Folding Phone & Tablet Stand (Box of 20)",category:"mobile-accessories",categoryName:"Mobile Accessories",subcategory:"Phone Stands",sku:"JLI-MOB-STN01",shortDescription:"Fully foldable dual-axis adjustable phone holder with silicone anti-slip pads and cable charging cutout.",fullDescription:"Universal pocket-folding phone cradle compatible with all 4 to 11-inch smartphones and tablets. Sturdy weighted base prevents tipping during video calls.",images:["https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1000&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1000&auto=format&fit=crop&q=80"],unitPrice:58,packPrice:1160,packQuantity:20,cartonQuantity:200,moq:20,increment:20,priceTiers:[{minQty:20,price:58},{minQty:60,price:51},{minQty:200,price:44}],inStock:!0,stockCount:3400,featured:!0,badge:"Corporate Gifting",specifications:[{label:"Material",value:"ABS Resin with Non-Slip Silicone"},{label:"Compatibility",value:'Universal 4.0" to 11.0" Devices'},{label:"Adjustability",value:"Dual Axis 0° to 120° Angle Tilt"}]},{id:"braided-3-in-1-charging-cable-box",slug:"braided-3-in-1-charging-cable-box",name:"Heavy-Duty Braided 3-in-1 Charging Cable 1.2m (Box of 25)",category:"mobile-accessories",categoryName:"Mobile Accessories",subcategory:"Charging Cables",sku:"JLI-MOB-CBL01",shortDescription:"Tangle-free nylon braided fast-charging cable with Type-C, Lightning, and Micro-USB connectors on a single cord.",fullDescription:"High-density copper core supporting up to 3.0A high-speed charging. Aluminum alloy connector shells tested for 10,000+ bends.",images:["https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1000&auto=format&fit=crop&q=80"],unitPrice:62,packPrice:1550,packQuantity:25,cartonQuantity:250,moq:25,increment:25,priceTiers:[{minQty:25,price:62},{minQty:75,price:54},{minQty:250,price:47}],inStock:!0,stockCount:4800,featured:!0,badge:"Top Utility",specifications:[{label:"Connectors",value:"Type-C + Lightning (iOS) + Micro USB"},{label:"Current",value:"Up to 3.0A Max Output"},{label:"Cord Length",value:"1.2 Meters / 4 Feet"},{label:"Jacket",value:"Tangle-Free Double-Braided Military Nylon"}]},{id:"silicone-cable-wire-protectors-pack",slug:"silicone-cable-wire-protectors-pack",name:"Spiral Silicone Cable Wire Protectors (Pack of 100)",category:"mobile-accessories",categoryName:"Mobile Accessories",subcategory:"Cable Protectors",sku:"JLI-MOB-PRT01",shortDescription:"Flexible spiral silicone coils that wrap around charging cable ends to prevent fraying, bending, and wire breakage.",fullDescription:"Inexpensive impulse add-on product for mobile recharge shops and electronics retailers. Pack of 100 assorted color spirals.",images:["https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1000&auto=format&fit=crop&q=80"],unitPrice:2.1,packPrice:210,packQuantity:100,cartonQuantity:2e3,moq:200,increment:100,priceTiers:[{minQty:200,price:2.1},{minQty:600,price:1.75},{minQty:2e3,price:1.4}],inStock:!0,stockCount:14e3,featured:!1,badge:"Super Affordable",specifications:[{label:"Material",value:"Elastic High-Memory TPU Silicone"},{label:"Compatibility",value:"Fits all 2.5mm - 4.5mm round cables"}]},{id:"magnetic-car-dashboard-phone-mount",slug:"magnetic-car-dashboard-phone-mount",name:"360° Magnetic Car Dashboard Phone Mount (Box of 15)",category:"mobile-accessories",categoryName:"Mobile Accessories",subcategory:"Phone Stands",sku:"JLI-MOB-MNT01",shortDescription:"Compact zinc alloy magnetic car holder with 6 powerful N52 neodymium magnets and 3M VHB automotive adhesive base.",fullDescription:"Secure one-hand mounting for car dashboards and office desks. Includes two ultra-thin metal plates that slip behind any phone case.",images:["https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1000&auto=format&fit=crop&q=80"],unitPrice:78,packPrice:1170,packQuantity:15,cartonQuantity:150,moq:15,increment:15,priceTiers:[{minQty:15,price:78},{minQty:45,price:69},{minQty:150,price:59.5}],inStock:!0,stockCount:1900,featured:!1,specifications:[{label:"Magnets",value:"6 x N52 Neodymium Array (Closed Field)"},{label:"Base Adhesive",value:"Genuine 3M VHB Heat-Resistant Tape"},{label:"Plates Included",value:"2 Metal Adhesive Discs"}]},{id:"wired-stereo-earphones-with-mic",slug:"wired-stereo-earphones-with-mic",name:"Deep-Bass 3.5mm Wired In-Ear Earphones with Mic (Box of 30)",category:"mobile-accessories",categoryName:"Mobile Accessories",subcategory:"Audio Accessories",sku:"JLI-MOB-EAR01",shortDescription:"Tangle-resistant 1.2m TPE wired earphones with inline microphone, multi-function call button, and noise-isolating silicone buds.",fullDescription:"High-demand replacement earphones for calling and online schooling. Crystal-clear voice microphone and gold-plated 3.5mm audio jack.",images:["https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1000&auto=format&fit=crop&q=80"],unitPrice:42,packPrice:1260,packQuantity:30,cartonQuantity:300,moq:30,increment:30,priceTiers:[{minQty:30,price:42},{minQty:90,price:36.5},{minQty:300,price:31}],inStock:!0,stockCount:3800,featured:!1,specifications:[{label:"Jack Type",value:"3.5 mm Gold-Plated TRRS"},{label:"Driver Size",value:"10mm Dynamic Drivers"},{label:"Microphone",value:"High-Sensitivity Omnidirectional Mic"}]},{id:"waterproof-pouch-lanyard-pack",slug:"waterproof-pouch-lanyard-pack",name:"IPX8 Universal Waterproof Phone Pouch with Lanyard (Pack of 50)",category:"mobile-accessories",categoryName:"Mobile Accessories",subcategory:"Utility Accessories",sku:"JLI-MOB-WTR01",shortDescription:"Dual-swivel lock seal waterproof phone dry-bag with sensitive touch-screen window for monsoon, swimming, and travel.",fullDescription:"Certified IPX8 submersible up to 10 meters depth. Fits all smartphones up to 6.8 inches diagonal screen size.",images:["https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1000&auto=format&fit=crop&q=80"],unitPrice:32,packPrice:1600,packQuantity:50,cartonQuantity:500,moq:50,increment:50,priceTiers:[{minQty:50,price:32},{minQty:150,price:27.5},{minQty:500,price:23}],inStock:!0,stockCount:2900,featured:!1,badge:"Monsoon Essential",specifications:[{label:"Waterproof Rating",value:"IPX8 Certified (10M Underwater)"},{label:"Device Size",value:"Screens up to 6.8 inches"}]},{id:"cartoon-silicone-character-keychains",slug:"cartoon-silicone-character-keychains",name:"3D Cartoon Silicone Character Keychains (Display of 40)",category:"gift-general",categoryName:"Gift & General Items",subcategory:"Keychains & Novelty",sku:"JLI-GFT-KEY01",shortDescription:"Embossed colorful 3D PVC silicone figurines with braided wrist strap and gold metal bell charm.",fullDescription:"High-velocity gift item displayed near billing counters. Popular animated anime and animal motifs loved by school and college students.",images:["https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1000&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=1000&auto=format&fit=crop&q=80"],unitPrice:24,packPrice:960,packQuantity:40,cartonQuantity:400,moq:40,increment:40,priceTiers:[{minQty:40,price:24},{minQty:120,price:20.5},{minQty:400,price:17.5}],inStock:!0,stockCount:6200,featured:!0,badge:"Top Retail Seller",specifications:[{label:"Material",value:"Eco-Friendly Soft PVC Silicone"},{label:"Fittings",value:"Gold Alloy Swivel Clasp + Wrist Strap"},{label:"Assortment",value:"8 Different Character Themes"}]},{id:"holographic-washi-tape-sticker-set",slug:"holographic-washi-tape-sticker-set",name:"Aesthetic Washi Tape & Foil Sticker Gift Box (Set of 20 Boxes)",category:"gift-general",categoryName:"Gift & General Items",subcategory:"Craft & Stickers",sku:"JLI-GFT-WSH01",shortDescription:"Decorative Japanese masking paper tapes with metallic foil accents and matching die-cut sticker sheets in an illustrated gift box.",fullDescription:"Prime gift item for scrapbooking, journaling, and card making enthusiasts. Packaged in a compact slide-out storage box.",images:["https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1000&auto=format&fit=crop&q=80"],unitPrice:65,packPrice:1300,packQuantity:20,cartonQuantity:200,moq:20,increment:20,priceTiers:[{minQty:20,price:65},{minQty:60,price:57},{minQty:200,price:49}],inStock:!0,stockCount:2200,featured:!1,badge:"Stationery Gift",specifications:[{label:"Box Contents",value:"4 Washi Tape Rolls (15mm) + 10 Sticker Sheets"},{label:"Adhesive",value:"Residue-Free Repositionable"}]},{id:"metallic-gift-wrapping-ribbon-rolls",slug:"metallic-gift-wrapping-ribbon-rolls",name:"Metallic Curling Gift Wrapping Ribbons (Pack of 24 Rolls)",category:"gift-general",categoryName:"Gift & General Items",subcategory:"Gift Packaging",sku:"JLI-GFT-RBN01",shortDescription:"10-meter rolls of high-shine holographic curling ribbon in vibrant festive colors for birthday presents, bouquets, and balloons.",fullDescription:"Standard 5mm width ribbons that curl effortlessly with a light scissor scrape. Essential retail stock for gift wrapping and party stores.",images:["https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1000&auto=format&fit=crop&q=80"],unitPrice:12,packPrice:288,packQuantity:24,cartonQuantity:288,moq:48,increment:24,priceTiers:[{minQty:48,price:12},{minQty:144,price:10},{minQty:288,price:8.2}],inStock:!0,stockCount:4800,featured:!1,specifications:[{label:"Length per Roll",value:"10 Meters (32.8 Feet)"},{label:"Width",value:"5 mm Ribbon Width"},{label:"Colors",value:"Gold, Silver, Red, Royal Blue, Green, Magenta"}]},{id:"pocket-card-spray-sanitizer-bottles",slug:"pocket-card-spray-sanitizer-bottles",name:"Refillable Credit-Card Pocket Mist Spray Bottles 20ml (Display of 36)",category:"gift-general",categoryName:"Gift & General Items",subcategory:"Novelty & Utility",sku:"JLI-GFT-SPR01",shortDescription:"Ultra-slim 20ml pocket mist spray bottles in pastel silicone slip-cases with keychain clip for sanitizers and perfumes.",fullDescription:"Fits effortlessly into pockets, wallets, or school bags. Leak-proof fine mist atomizing nozzle with removable funnel.",images:["https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1000&auto=format&fit=crop&q=80"],unitPrice:26,packPrice:936,packQuantity:36,cartonQuantity:360,moq:36,increment:36,priceTiers:[{minQty:36,price:26},{minQty:108,price:22.5},{minQty:360,price:19}],inStock:!0,stockCount:3100,featured:!1,specifications:[{label:"Capacity",value:"20 ml (Over 300 Sprays)"},{label:"Case",value:"Food-Grade Removable Silicone Sleeve"}]},{id:"led-keychain-torch-carabiner",slug:"led-keychain-torch-carabiner",name:"Mini High-Lumen COB LED Keychain Flashlight (Display of 24)",category:"gift-general",categoryName:"Gift & General Items",subcategory:"Keychains & Novelty",sku:"JLI-GFT-LED01",shortDescription:"Rechargeable 500-lumen pocket emergency work light with bottle opener, folding bracket, magnet base, and carabiner.",fullDescription:"Tremendously popular viral pocket gadget with 4 brightness modes and Type-C rechargeable battery. Ideal hardware/gift cross-seller.",images:["https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1000&auto=format&fit=crop&q=80"],unitPrice:88,packPrice:2112,packQuantity:24,cartonQuantity:240,moq:24,increment:24,priceTiers:[{minQty:24,price:88},{minQty:72,price:78},{minQty:240,price:68}],inStock:!0,stockCount:1600,featured:!0,badge:"Viral Novelty",specifications:[{label:"Brightness",value:"500 Lumens COB Floodlight"},{label:"Battery",value:"500mAh USB-C Rechargeable Li-Ion"},{label:"Features",value:"Strong Magnet + Carabiner + Stand + Bottle Opener"}]},{id:"birthday-return-gift-stationery-pouches",slug:"birthday-return-gift-stationery-pouches",name:"Birthday Party Return Gift Stationery Pouches (Pack of 30)",category:"gift-general",categoryName:"Gift & General Items",subcategory:"School Kits & Combos",sku:"JLI-GFT-RTN01",shortDescription:"Pre-assembled celebration pouches containing printed pencil, novelty eraser, sharpener, mini notepad, and decorative ruler.",fullDescription:"Ready-to-distribute return gift solution for birthday parties and school events. Takes the hassle out of assembling individual bags.",images:["https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1000&auto=format&fit=crop&q=80"],unitPrice:28,packPrice:840,packQuantity:30,cartonQuantity:300,moq:30,increment:30,priceTiers:[{minQty:30,price:28},{minQty:90,price:24.5},{minQty:300,price:21}],inStock:!0,stockCount:2800,featured:!1,badge:"Party Pack",specifications:[{label:"Contents per Pouch",value:"Pencil, Eraser, Sharpener, Notepad, 15cm Scale"},{label:"Outer Bag",value:"Zipper PVC Colorful Print Bag"}]},{id:"mini-wooden-block-perpetual-calendar",slug:"mini-wooden-block-perpetual-calendar",name:"Mini Wooden Perpetual Block Calendar (Box of 12)",category:"gift-general",categoryName:"Gift & General Items",subcategory:"Novelty & Utility",sku:"JLI-GFT-CAL01",shortDescription:"Rustic natural wood manual date cube calendar for study desks, office cubicles, and boutique gifting.",fullDescription:"Eco-friendly wooden blocks displaying month and date numbers. Reusable year after year with timeless aesthetic appeal.",images:["https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1000&auto=format&fit=crop&q=80"],unitPrice:95,packPrice:1140,packQuantity:12,cartonQuantity:120,moq:12,increment:12,priceTiers:[{minQty:12,price:95},{minQty:36,price:84},{minQty:120,price:74}],inStock:!0,stockCount:1100,featured:!1,specifications:[{label:"Material",value:"Sustainably Harvested Pine Wood"},{label:"Dimensions",value:"11 x 7 x 5.5 cm"}]}];function Y(){return Pe}function q(){return Ee}function ae(e){return q().find(t=>t.id===e||t.slug===e)}function U(e,a){if(!e||!e.priceTiers||e.priceTiers.length===0)return e?e.unitPrice:0;const t=[...e.priceTiers].sort((o,i)=>i.minQty-o.minQty);for(const o of t)if(a>=o.minQty)return o.price;return e.unitPrice}const be="joli_wholesale_cart_v1";function G(){try{const e=localStorage.getItem(be);if(e)return JSON.parse(e)}catch(e){console.error("Failed to load cart",e)}return[]}function oe(e){try{localStorage.setItem(be,JSON.stringify(e)),window.dispatchEvent(new CustomEvent("cart-updated",{detail:{cart:e}})),X()}catch(a){console.error("Failed to save cart",a)}}function re(e,a=null){const t=ae(e);if(!t)return{success:!1,message:"Product not found"};const o=G(),i=o.findIndex(l=>l.productId===e),s=t.moq||1,r=t.increment||1;if(i>-1){const u=o[i].quantity+(a!==null?a:r),m=U(t,u);o[i].quantity=u,o[i].unitPrice=m,o[i].lineTotal=m*u}else{const l=a!==null?Math.max(a,s):s,c=U(t,l);o.push({productId:t.id,name:t.name,sku:t.sku,image:t.images[0],category:t.category,categoryName:t.categoryName,packQuantity:t.packQuantity,moq:t.moq,increment:t.increment,quantity:l,unitPrice:c,lineTotal:c*l})}return oe(o),{success:!0,cart:o}}function Z(e,a){const t=ae(e);if(!t)return;const o=G(),i=o.findIndex(c=>c.productId===e);if(i===-1)return;const s=t.moq||1,r=Math.max(s,parseInt(a,10)||s),l=U(t,r);o[i].quantity=r,o[i].unitPrice=l,o[i].lineTotal=l*r,oe(o)}function Ie(e){const a=G().filter(t=>t.productId!==e);oe(a)}function ke(){oe([])}function ie(){const e=G();let a=0,t=0;e.forEach(r=>{a+=r.lineTotal,t+=r.quantity});const o=a*.18,i=a===0||a>=5e3?0:250,s=a+o+i;return{itemsCount:t,uniqueLines:e.length,subtotal:a,gst:o,shipping:i,grandTotal:s}}function h(e){return"₹"+Number(e||0).toLocaleString("en-IN",{maximumFractionDigits:2,minimumFractionDigits:2})}function X(){const e=ie();document.querySelectorAll(".cart-badge-count").forEach(t=>{t.textContent=e.itemsCount,e.itemsCount>0?t.style.display="inline-flex":t.style.display="none"})}function $(e){const a=e.badge?`<span class="badge product-card-badge">${n(e.badge)}</span>`:e.isCombo?'<span class="badge product-card-badge" style="background-color: var(--color-gold); color: var(--color-navy);">Combo Pack</span>':"",t=e.priceTiers&&e.priceTiers.length>0?e.priceTiers[e.priceTiers.length-1].price:e.unitPrice;return`
    <article class="product-card fade-up" data-id="${n(e.id)}">
      <div class="product-card-img-wrap">
        ${a}
        <a href="#/product?id=${encodeURIComponent(e.id)}" aria-label="${n(e.name)}">
          <img 
            src="${n(e.images[0])}" 
            alt="${n(e.name)}" 
            loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=800&auto=format&fit=crop&q=80'"
          >
        </a>
      </div>
      <div class="product-card-body">
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.35rem;">
          <span class="product-card-cat">${n(e.categoryName)}</span>
          <span style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 600;">MOQ: ${e.moq} pcs</span>
        </div>

        <h3 class="product-card-title">
          <a href="#/product?id=${encodeURIComponent(e.id)}">${n(e.name)}</a>
        </h3>

        <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 0.75rem;">
          ${e.packQuantity?`Pack of ${e.packQuantity} units`:""} 
          ${e.cartonQuantity?`• Carton: ${e.cartonQuantity}`:""}
        </div>

        <div class="product-card-price-row">
          <div class="price-stack">
            <span class="wholesale-price-label">Wholesale Price</span>
            <div class="product-card-price">${h(e.unitPrice)} <span class="price-unit">/ unit</span></div>
            ${t<e.unitPrice?`<span class="price-bulk-hint">As low as ${h(t)}</span>`:""}
          </div>
        </div>

        <div class="product-card-footer">
          <a href="#/product?id=${encodeURIComponent(e.id)}" class="product-card-link">
            <span>View Details</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
          <button 
            type="button" 
            class="btn btn-primary btn-sm btn-card-add-cart" 
            data-product-id="${n(e.id)}"
            aria-label="Add MOQ of ${n(e.name)} to Cart"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span>+ Cart (${e.moq})</span>
          </button>
        </div>
      </div>
    </article>
  `}function n(e){return e?String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):""}function Te(e={}){return e.enquire,`
    <header class="about-hero">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a>
          <span class="separator">/</span>
          <span class="current">Contact Us</span>
        </nav>
        <h1 class="section-title" style="margin-bottom: 0.5rem;">Direct Wholesale Order Desk</h1>
        <p class="section-subtitle">
          Fast assistance with carton volume pricing, sample requests, and 24h warehouse dispatch across India.
        </p>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <!-- Left: Contact Details Card -->
          <div class="contact-info-card fade-up">
            <h3>Joli Enterprises Wholesale Desk</h3>
            <p>
              We supply small, everyday retail merchandise to retail shops, stationery dealers, gift boutiques, and resellers across India.
            </p>

            <div class="contact-channel-list">
              <div class="contact-channel">
                <div class="contact-channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <div class="contact-channel-title">Wholesale Warehouse & Dispatch</div>
                  <div class="contact-channel-value">
                    Wholesale Commercial Hub, Industrial Estate<br>
                    Chennai, Tamil Nadu, India (Demo Representation)
                  </div>
                  <div class="contact-channel-hint">Sample wholesale warehouse demonstration address</div>
                </div>
              </div>

              <div class="contact-channel">
                <div class="contact-channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <div class="contact-channel-title">Direct Wholesale Helpline</div>
                  <div class="contact-channel-value">+91 98765 43210 (Demo Contact)</div>
                  <div class="contact-channel-hint">Mon – Sat: 9:30 AM – 7:00 PM IST</div>
                </div>
              </div>

              <div class="contact-channel">
                <div class="contact-channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <div class="contact-channel-title">Official Wholesale Email</div>
                  <div class="contact-channel-value">wholesale@jolienterprises.sample</div>
                  <div class="contact-channel-hint">Proforma invoices & bulk order confirmations</div>
                </div>
              </div>
            </div>

            <div style="padding-top: 1.5rem; margin-top: 1.5rem; font-size: 0.85rem; color: #94A3B8;">
              <strong style="color: var(--color-gold);">Bulk Orders & Custom Combos:</strong> For institutional school orders (500+ kits) or custom packaging, please visit our <a href="#/bulk-enquiry" style="color: #fff; text-decoration: underline;">Bulk Enquiry Form</a>.
            </div>
          </div>

          <!-- Right: Interactive Contact Form -->
          <div class="form-card fade-up">
            <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--color-navy);">Send a Wholesale Enquiry</h2>
            <p style="color: var(--color-text-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">
              Submit your store details or product requirements. Our trade desk responds within 2 business hours.
            </p>

            <div id="contact-alert-container"></div>

            <form id="page-contact-form" novalidate>
              <div class="form-row">
                <div class="form-group">
                  <label for="contact-name" class="form-label">Full Name <span class="required">*</span></label>
                  <input type="text" id="contact-name" class="form-control" placeholder="e.g. Anand Murthy" required>
                  <span class="form-error-msg" id="err-contact-name"></span>
                </div>
                <div class="form-group">
                  <label for="contact-business" class="form-label">Shop / Enterprise Name</label>
                  <input type="text" id="contact-business" class="form-control" placeholder="e.g. Murthy Book Depot">
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="contact-phone" class="form-label">Phone / WhatsApp <span class="required">*</span></label>
                  <input type="tel" id="contact-phone" class="form-control" placeholder="+91 98765 43210" required>
                  <span class="form-error-msg" id="err-contact-phone"></span>
                </div>
                <div class="form-group">
                  <label for="contact-email" class="form-label">Email Address (Optional)</label>
                  <input type="email" id="contact-email" class="form-control" placeholder="anand@bookdepot.com">
                  <span class="form-error-msg" id="err-contact-email"></span>
                </div>
              </div>

              <div class="form-group">
                <label for="contact-subject" class="form-label">Enquiry Subject</label>
                <select id="contact-subject" class="form-control">
                  <option value="Product Stock & Pricing">Product Stock & Wholesale Pricing</option>
                  <option value="Minimum Order Quantities">Minimum Order Quantity (MOQ) Clarification</option>
                  <option value="Transport & Logistics">Transport Logistics & Delivery Timeline</option>
                  <option value="School Stationery Combos">School Stationery Combo Procurement</option>
                  <option value="Proforma & GST Invoice">Proforma & GST Tax Invoicing</option>
                  <option value="General Question">General Wholesale Question</option>
                </select>
              </div>

              <div class="form-group">
                <label for="contact-message" class="form-label">Your Message <span class="required">*</span></label>
                <textarea id="contact-message" class="form-control" rows="4" placeholder="Detail your required products, target quantity, or delivery city..." required></textarea>
                <span class="form-error-msg" id="err-contact-message"></span>
              </div>

              <button type="submit" class="btn btn-primary btn-lg" id="btn-contact-submit">
                <span>Submit Wholesale Enquiry</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </form>
          </div>
        </div>

        <!-- Demonstration Notice Box -->
        <div class="location-card fade-up" style="margin-top: 2rem;">
          <div class="location-map-mock">
            <div class="location-pin-wrap">
              <div style="font-family: var(--font-heading); font-weight: 700; color: var(--color-white); font-size: 1.05rem;">
                Joli Enterprises Wholesale Warehouse Hub
              </div>
              <div style="font-size: 0.85rem; color: #CBD5E1; margin-top: 0.25rem;">
                Industrial Estate, Chennai • Logistics Dispatches Pan-India
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function we(){const e=document.getElementById("page-contact-form"),a=document.getElementById("contact-alert-container"),t=document.getElementById("btn-contact-submit");e&&e.addEventListener("submit",o=>{o.preventDefault(),["err-contact-name","err-contact-phone","err-contact-email","err-contact-message"].forEach(b=>{const p=document.getElementById(b);p&&(p.textContent="")}),e.querySelectorAll(".form-control").forEach(b=>b.classList.remove("error")),a&&(a.innerHTML="");const s=document.getElementById("contact-name"),r=document.getElementById("contact-phone"),l=document.getElementById("contact-email"),c=document.getElementById("contact-message"),u=document.getElementById("contact-subject");let m=!1;if(s.value.trim()||(s.classList.add("error"),document.getElementById("err-contact-name").textContent="Please enter your name.",m=!0),(!r.value.trim()||r.value.trim().length<10)&&(r.classList.add("error"),document.getElementById("err-contact-phone").textContent="Please enter a valid 10-digit phone number.",m=!0),l.value.trim()&&(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l.value.trim())||(l.classList.add("error"),document.getElementById("err-contact-email").textContent="Please enter a valid email format.",m=!0)),c.value.trim()||(c.classList.add("error"),document.getElementById("err-contact-message").textContent="Please enter your message or question.",m=!0),m)return;const f=t.innerHTML;t.disabled=!0,t.innerHTML=`
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin-icon"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle><path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="1"></path></svg>
      <span>Submitting Wholesale Enquiry...</span>
    `,setTimeout(()=>{t.disabled=!1,t.innerHTML=f,a&&(a.innerHTML=`
          <div class="alert-box alert-success">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <div>
              <strong>Enquiry Received!</strong><br>
              Thank you, <strong>${n(s.value.trim())}</strong>. Your enquiry regarding <em>"${n(u.value)}"</em> has been received in this demonstration environment. Our wholesale sales team will contact you at <strong>${n(r.value.trim())}</strong> shortly.
            </div>
          </div>
        `),e.reset()},1e3)})}function ge(){const e=Y(),a=q();a.filter(i=>i.featured||!i.isCombo&&i.cartonQuantity&&i.cartonQuantity>=100).slice(0,8);const t=a.filter(i=>!i.isCombo&&i.cartonQuantity&&i.cartonQuantity>=200).slice(0,4),o=a.filter(i=>i.isCombo).slice(0,4);return`
    <!-- Section 1 — HOME (Full Background Video) -->
        <!-- Section 1 — HERO SHOWCASE (Centered Orbital Design Matching Image 2) -->
    <section id="home" class="hero-section hero-centered-theme">
      <!-- High-res Warehouse Logistics Background -->
      <div class="hero-bg-media-wrap" aria-hidden="true">
        <video 
          id="hero-bg-video" 
          src="/videos/promo-video.mp4" 
          autoplay 
          muted 
          loop 
          playsinline 
          preload="auto"
          poster="/images/hero-warehouse-bg.jpg"
          class="hero-bg-video"
        ></video>
        <div class="hero-cinematic-scrim"></div>
      </div>
      </div>

      <!-- Golden Orbital Elliptical Curves Overlay -->
      <svg class="hero-orbital-svg" viewBox="0 0 1440 680" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <!-- Outer Glowing Golden Ellipse -->
        <ellipse cx="720" cy="340" rx="620" ry="240" stroke="url(#heroOrbitGrad1)" stroke-width="1.6" stroke-dasharray="8 6" opacity="0.65"/>
        <!-- Inner Subtle Golden Ellipse -->
        <ellipse cx="720" cy="340" rx="560" ry="210" stroke="url(#heroOrbitGrad2)" stroke-width="1.2" opacity="0.45"/>
        <defs>
          <linearGradient id="heroOrbitGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#C7A56A" stop-opacity="0.8"/>
            <stop offset="25%" stop-color="#E5CA92" stop-opacity="1"/>
            <stop offset="75%" stop-color="#BA9556" stop-opacity="0.9"/>
            <stop offset="100%" stop-color="#C7A56A" stop-opacity="0.3"/>
          </linearGradient>
          <linearGradient id="heroOrbitGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#E5CA92" stop-opacity="0.2"/>
            <stop offset="50%" stop-color="#C7A56A" stop-opacity="0.7"/>
            <stop offset="100%" stop-color="#E5CA92" stop-opacity="0.1"/>
          </linearGradient>
        </defs>
      </svg>

      <!-- Floating Orbital Icon Badges (Positioned symmetrically around center) -->
      <div class="hero-orbital-badges-wrap" aria-hidden="true">
        <!-- 1. Top-Left: Shopping Cart -->
        <div class="hero-orbit-badge badge-top-left">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </div>

        <!-- 2. Bottom-Left: Package Box -->
        <div class="hero-orbit-badge badge-bottom-left">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        </div>

        <!-- 3. Top-Right: Growth / Bar Chart -->
        <div class="hero-orbit-badge badge-top-right">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
            <polyline points="3 8 9 2 15 6 21 1"></polyline>
          </svg>
        </div>

        <!-- 4. Bottom-Right: Delivery Truck -->
        <div class="hero-orbit-badge badge-bottom-right">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <rect x="1" y="3" width="15" height="13"></rect>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
            <circle cx="5.5" cy="18.5" r="2.5"></circle>
            <circle cx="18.5" cy="18.5" r="2.5"></circle>
          </svg>
        </div>
      </div>

      <!-- Foreground Centered Content -->
      <div class="container hero-container-centered">
        <div class="hero-centered-content">
          <!-- Top Trust Pill Badge -->
          <div class="hero-partner-badge fade-up">
            <span class="partner-badge-icon">&#x1F451;</span>
            <span class="partner-badge-text">TRUSTED B2B WHOLESALE PARTNER</span>
            <span class="partner-badge-arrow">&rsaquo;</span>
          </div>

          <!-- Centered Hero Title -->
          <h1 class="hero-title-centered fade-up">
            <span class="hero-title-line-1">Small Products.</span>
            <span class="hero-title-line-2"><span class="gold-gradient-word">Bigger</span> Wholesale Opportunities.</span>
          </h1>


          <!-- Centered Translucent Glass Metrics Pill -->
          <div class="hero-metrics-glass-pill fade-up">
            <div class="metric-pill-item">
              <div class="metric-icon-circle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <div class="metric-text-group">
                <span class="metric-val">50,000+</span>
                <span class="metric-lbl">DAILY UNITS CAPACITY</span>
              </div>
            </div>

            <div class="metric-pill-item">
              <div class="metric-icon-circle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div class="metric-text-group">
                <span class="metric-val">500+</span>
                <span class="metric-lbl">ACTIVE RETAIL PARTNERS</span>
              </div>
            </div>

            <div class="metric-pill-item">
              <div class="metric-icon-circle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div class="metric-text-group">
                <span class="metric-val">100%</span>
                <span class="metric-lbl">GST TAX INVOICED</span>
              </div>
            </div>

            <div class="metric-pill-item">
              <div class="metric-icon-circle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              </div>
              <div class="metric-text-group">
                <span class="metric-val">24h</span>
                <span class="metric-lbl">ORDER DISPATCH WINDOW</span>
              </div>
            </div>
          </div>

          <!-- Dual CTA Buttons -->
          <div class="hero-cta-centered-group fade-up">
            <a href="#/categories" class="btn-hero-explore-gold">
              <span>Explore Products</span>
              <span class="btn-arrow">&rarr;</span>
            </a>
            <button type="button" class="btn-hero-watch-video" id="btn-hero-watch-video" aria-label="Watch Video Showcase">
              <span class="play-icon-circle">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </span>
              <span>Watch Video</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Video Modal -->
      <div class="hero-video-modal" id="hero-video-modal" aria-hidden="true" role="dialog" aria-label="Wholesale Promotional Video">
        <div class="video-modal-backdrop" id="video-modal-backdrop"></div>
        <div class="video-modal-dialog">
          <button type="button" class="video-modal-close" id="btn-close-video-modal" aria-label="Close Video">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div class="video-modal-player-wrap">
            <video id="modal-video-player" src="/videos/promo-video.mp4" controls playsinline preload="metadata"></video>
          </div>
        </div>
      </div>
    </section>

            <!-- Section 2 — ABOUT -->
    <section id="about" class="about-ref-section">
      <!-- Decorative Background Curves -->
      <svg class="about-bg-curves" viewBox="0 0 1440 760" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M 640 -30 C 730 140 700 290 820 380 C 900 440 1020 470 1200 480" stroke="url(#aboutGoldGrad1)" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M 1260 620 C 1320 660 1380 680 1460 690" stroke="url(#aboutGoldGrad2)" stroke-width="1.5" stroke-linecap="round"/>
        <defs>
          <linearGradient id="aboutGoldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#E5CA92" stop-opacity="0.15"/>
            <stop offset="50%" stop-color="#C7A56A" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#BA9556" stop-opacity="0.2"/>
          </linearGradient>
          <linearGradient id="aboutGoldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#C7A56A" stop-opacity="0.7"/>
            <stop offset="100%" stop-color="#BA9556" stop-opacity="0.1"/>
          </linearGradient>
        </defs>
      </svg>

      <div class="container about-ref-container">
        <!-- Two-Column Main Editorial Showcase -->
        <div class="about-ref-main-grid">
          <!-- Left Column (52%): Text & Actions -->
          <div class="about-ref-left-col fade-up">
            <div class="about-ref-eyebrow">
              <span class="about-eyebrow-line"></span>
              <span class="about-eyebrow-text">ABOUT JOLI ENTERPRISES</span>
            </div>

            <h2 class="about-ref-title">
              Wholesale Merchandise for<br>Everyday Retail
            </h2>

            <div class="about-ref-copy">
              <p class="about-ref-p">
                <strong>Joli Enterprises</strong> delivers high-turnover everyday retail merchandise directly to 500+ independent shopkeepers, stationery stores, and gift boutiques across India.
              </p>
              <p class="about-ref-p">
                Every batch comes with guaranteed piece counts, accessible MOQs from 12 units, and honest wholesale margins of 35% to 65% on standard resale.
              </p>
            </div>

            <div class="about-ref-cta-group">
              <a href="#/categories" class="btn-about-gold">
                <span>Browse Wholesale Products</span>
                <span class="btn-arrow">&rarr;</span>
              </a>
              <a href="#/categories" class="btn-about-white">
                <span>Explore 5 Categories</span>
              </a>
            </div>
          </div>

          <!-- Right Column (48%): Floating Category Badges + Joli Enterprises Box Showcase -->
          <div class="about-ref-right-col fade-up">
            <!-- Floating Category Labels Stack (Aligned vertically beside the box) -->
            <div class="about-category-pills-stack" aria-label="Retail Store Channels We Supply">
              <div class="about-cat-pill">
                <div class="cat-pill-icon-circle">
                  <!-- Retail Shops Icon -->
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </div>
                <span class="cat-pill-text">Retail Shops</span>
              </div>

              <div class="about-cat-pill">
                <div class="cat-pill-icon-circle">
                  <!-- Stationery Stores Icon -->
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <span class="cat-pill-text">Stationery Stores</span>
              </div>

              <div class="about-cat-pill">
                <div class="cat-pill-icon-circle">
                  <!-- Gift Boutiques Icon -->
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 12 20 22 4 22 4 12"></polyline>
                    <rect x="2" y="7" width="20" height="5"></rect>
                    <line x1="12" y1="22" x2="12" y2="7"></line>
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                  </svg>
                </div>
                <span class="cat-pill-text">Gift Boutiques</span>
              </div>

              <div class="about-cat-pill">
                <div class="cat-pill-icon-circle">
                  <!-- Mobile Accessory Kiosks Icon -->
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  </svg>
                </div>
                <span class="cat-pill-text">Mobile Accessory Kiosks</span>
              </div>

              <div class="about-cat-pill">
                <div class="cat-pill-icon-circle">
                  <!-- Online Resellers Icon -->
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <span class="cat-pill-text">Online Resellers</span>
              </div>
            </div>

            <!-- Joli Enterprises Open Cardboard Product Box Visual -->
            <div class="about-box-visual-wrap">
              <div class="about-box-image-card">
                <img 
                  src="/images/about-product-box.jpg" 
                  alt="Joli Enterprises Open Wholesale Cardboard Box Filled with Colourful Retail Merchandise" 
                  class="about-box-img"
                  loading="lazy"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3 — FOUNDER -->
    <section id="founder" class="section bg-soft-grey">
      <div class="container">
        <div class="about-intro-grid" style="align-items: center; margin-bottom: 3.5rem;">
          <div class="fade-up">
            <div style="font-size: 0.85rem; font-weight: 700; color: var(--color-gold); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.5rem;">
              Founder's Vision &amp; Leadership
            </div>
            <h2 class="section-title">Built for the Grassroots Retailer</h2>
            <p style="font-size: 1.05rem; line-height: 1.7; color: var(--color-text-main); margin-bottom: 1.25rem;">
              <strong>Joli Enterprises</strong> was founded to empower independent shopkeepers with direct factory pricing, realistic pack sizes, and zero middleman markups.
            </p>
            <p style="font-size: 0.95rem; line-height: 1.65; color: var(--color-text-muted); margin-bottom: 1.75rem;">
              We eliminate the burden of container-scale orders, giving local merchants the flexibility to test trending goods safely with low MOQs and healthy 35%–65% margins.
            </p>

            <!-- Key Metric Highlights -->
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 2rem;">
              <div style="background: #FFFFFF; padding: 1rem; border-left: 3px solid var(--color-gold); border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                <div style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 800; color: var(--color-navy); line-height: 1.1;">500+</div>
                <div style="font-size: 0.75rem; font-weight: 700; color: var(--color-text-muted); margin-top: 0.25rem; text-transform: uppercase;">Retail Partners</div>
              </div>
              <div style="background: #FFFFFF; padding: 1rem; border-left: 3px solid var(--color-gold); border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                <div style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 800; color: var(--color-navy); line-height: 1.1;">35%–65%</div>
                <div style="font-size: 0.75rem; font-weight: 700; color: var(--color-text-muted); margin-top: 0.25rem; text-transform: uppercase;">Resale Margins</div>
              </div>
              <div style="background: #FFFFFF; padding: 1rem; border-left: 3px solid var(--color-gold); border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                <div style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 800; color: var(--color-navy); line-height: 1.1;">24h</div>
                <div style="font-size: 0.75rem; font-weight: 700; color: var(--color-text-muted); margin-top: 0.25rem; text-transform: uppercase;">Dispatch SLA</div>
              </div>
            </div>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="#/categories" class="btn btn-primary">
                <span>Explore Sourcing Lines</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <a href="#/contact" class="btn btn-outline">
                <span>Connect with Leadership</span>
              </a>
            </div>
          </div>

          <div class="about-img-frame fade-up">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&auto=format&fit=crop&q=80" 
              alt="Joli Enterprises Founder and Leadership Operations"
            >
          </div>
        </div>

        <div class="section-header text-center" style="margin-bottom: 2rem;">
          <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--color-navy); margin-bottom: 0.5rem;">The Four Founding Commitments</h3>
          <p class="section-subtitle">
            Core operating tenets established by our leadership to govern every product, carton, and client interaction.
          </p>
        </div>

        <div class="about-values-grid">
          <div class="value-card fade-up">
            <h4 class="value-card-title">1. Fair Retailer Margins</h4>
            <p class="value-card-desc">
              Every item in our catalogue is priced to ensure that retail shopkeepers and resellers enjoy healthy, sustainable profit margins ranging from 35% to 65% upon resale.
            </p>
          </div>

          <div class="value-card fade-up">
            <h4 class="value-card-title">2. Exact Piece-Count Integrity</h4>
            <p class="value-card-desc">
              No shortages, no approximations. Whether it is our 100-item Mega Back-to-School kit or a 200-piece carton of adhesive hooks, every lot is piece-verified prior to dispatch.
            </p>
          </div>

          <div class="value-card fade-up">
            <h4 class="value-card-title">3. Realistic Minimum Order Quantities</h4>
            <p class="value-card-desc">
              We maintain accessible MOQs starting from just 12 to 24 units, allowing shop owners to test trending items without locking up their operating funds in excess inventory.
            </p>
          </div>

          <div class="value-card fade-up">
            <h4 class="value-card-title">4. Formal GST &amp; Pan-India Transport</h4>
            <p class="value-card-desc">
              Full transparency with formal GST invoices, appropriate HSN codes for input tax credit claims, and insured freight dispatches across all Indian pin codes.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4 — CATEGORIES -->
    <section id="categories" class="section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">Shop by Product Category</h2>
          <p class="section-subtitle">
            Source small, affordable everyday products in retail-ready packaging and bulk carton quantities across our 5 primary categories.
          </p>
        </div>

        <div class="categories-grid">
          ${e.map(i=>`
            <a href="#/category?slug=${encodeURIComponent(i.slug||i.id)}" class="category-card fade-up">
              <img src="${n(i.image)}" alt="${n(i.name)}" class="category-card-bg" loading="lazy">
              <div class="category-card-content">
                <h3 class="category-card-title">${n(i.name)}</h3>
                <span class="category-card-cta">
                  <span>Browse Category</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
              </div>
            </a>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Section 6 — BULK DEALS -->
    <section id="bulk-deals" class="section">
      <div class="container">
        <div class="section-header" style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1.5rem;">
          <div>
            <h2 class="section-title">Master Carton Volume Specials</h2>
            <p class="section-subtitle">
              High turnover daily household, mobile accessories, and stationery items available in factory master carton lots.
            </p>
          </div>
          <a href="#/bulk-enquiry" class="btn btn-outline">
            <span>Request Container Quote</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>

        <div class="products-grid" style="margin-bottom: 3.5rem;">
          ${t.map(i=>$(i)).join("")}
        </div>

        <!-- Tiered Wholesale Breakdown Banner -->
        <div class="cta-banner fade-up">
          <div class="cta-banner-content">
            <h3 class="cta-banner-title">Quantity-Based Wholesale Price Tiers</h3>
            <p class="cta-banner-desc">
              Tiered volume pricing. Save up to 35% on master carton lots with guaranteed piece counts, formal GST tax invoices, and insured 24h express dispatch.
            </p>
          </div>
          <div class="cta-banner-action">
            <a href="#/bulk-enquiry" class="btn btn-primary btn-lg">
              <span>Request Volume Price List</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 7 — COMBOS -->
    <section id="combos" class="section bg-soft-grey">
      <div class="container">
        <div class="section-header" style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1.5rem;">
          <div>
            <h2 class="section-title">Ready-Made Wholesale Combo Packs</h2>
            <p class="section-subtitle">
              Pre-assembled retail bundles and school kits configured with verified item counts for instant resale.
            </p>
          </div>
          <a href="#/bulk-enquiry?category=stationery&product=Custom+Combo+Kit" class="btn btn-outline">
            <span>Custom Combo Assembly</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>

        <div class="products-grid" style="margin-bottom: 3.5rem;">
          ${o.map(i=>$(i)).join("")}
        </div>

        <!-- Custom Combo Banner -->
        <div style="background: var(--color-navy); color: var(--color-white); padding: 3rem 2.5rem; text-align: center; max-width: 960px; margin: 0 auto; border-radius: var(--radius-sm);" class="fade-up">
          <h3 style="font-size: 1.75rem; font-weight: 800; color: #FFFFFF; margin-bottom: 0.75rem;">
            Need a Custom Combo Assembled for Your School or Brand?
          </h3>
          <p style="font-size: 0.95rem; color: #CBD5E1; max-width: 680px; margin: 0 auto 1.75rem; line-height: 1.6;">
            We assemble, shrink-wrap, and pack customized stationery kits, birthday return gift bundles, and school exam supply packs with your choice of items and quantities.
          </p>
          <a href="#/bulk-enquiry?category=stationery&product=Custom+Combo+Kit" class="btn btn-primary btn-lg">
            <span>Request Custom Combo Assembly</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Section 8 — CONTACT -->
    <section id="contact" class="section">
      <div class="container">
        <div class="contact-grid">
          <!-- Left: Contact Information -->
          <div class="contact-info-card fade-up">
            <h3>Joli Enterprises Wholesale Desk</h3>
            <p>
              We supply small, everyday retail merchandise to retail shops, stationery dealers, gift boutiques, and resellers across India.
            </p>

            <div class="contact-channel-list">
              <div class="contact-channel">
                <div class="contact-channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <div class="contact-channel-title">Wholesale Warehouse &amp; Dispatch</div>
                  <div class="contact-channel-value">
                    Wholesale Commercial Hub, Industrial Estate<br>
                    Chennai, Tamil Nadu, India (Demo Representation)
                  </div>
                  <div class="contact-channel-hint">Sample wholesale warehouse demonstration address</div>
                </div>
              </div>

              <div class="contact-channel">
                <div class="contact-channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <div class="contact-channel-title">Direct Wholesale Helpline</div>
                  <div class="contact-channel-value">+91 98765 43210 (Demo Contact)</div>
                  <div class="contact-channel-hint">Mon – Sat: 9:30 AM – 7:00 PM IST</div>
                </div>
              </div>

              <div class="contact-channel">
                <div class="contact-channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <div class="contact-channel-title">Official Wholesale Email</div>
                  <div class="contact-channel-value">wholesale@jolienterprises.sample</div>
                  <div class="contact-channel-hint">Proforma invoices &amp; bulk order confirmations</div>
                </div>
              </div>
            </div>

            <div style="padding-top: 1.5rem; margin-top: 1.5rem; font-size: 0.85rem; color: #94A3B8;">
              <strong style="color: var(--color-gold);">Bulk Orders &amp; Custom Combos:</strong> For institutional school orders (500+ kits) or custom packaging, please visit our <a href="#/bulk-enquiry" style="color: #fff; text-decoration: underline;">Bulk Enquiry Form</a>.
            </div>
          </div>

          <!-- Right: Interactive Contact Form -->
          <div class="form-card fade-up">
            <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--color-navy);">Send a Wholesale Enquiry</h3>
            <p style="color: var(--color-text-muted); font-size: 0.9rem; margin-bottom: 1.75rem;">
              Send your questions to our B2B commercial desk. We respond during business hours.
            </p>

            <div id="contact-alert-container"></div>

            <form id="page-contact-form" novalidate>
              <div class="form-row">
                <div class="form-group">
                  <label for="contact-name" class="form-label">Full Name <span class="required">*</span></label>
                  <input type="text" id="contact-name" class="form-control" placeholder="e.g. Anand Murthy" required>
                  <span class="form-error-msg" id="err-contact-name"></span>
                </div>
                <div class="form-group">
                  <label for="contact-business" class="form-label">Shop / Enterprise Name</label>
                  <input type="text" id="contact-business" class="form-control" placeholder="e.g. Murthy Book Depot">
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="contact-phone" class="form-label">Phone / WhatsApp <span class="required">*</span></label>
                  <input type="tel" id="contact-phone" class="form-control" placeholder="+91 98765 43210" required>
                  <span class="form-error-msg" id="err-contact-phone"></span>
                </div>
                <div class="form-group">
                  <label for="contact-email" class="form-label">Email Address (Optional)</label>
                  <input type="email" id="contact-email" class="form-control" placeholder="anand@bookdepot.com">
                  <span class="form-error-msg" id="err-contact-email"></span>
                </div>
              </div>

              <div class="form-group">
                <label for="contact-subject" class="form-label">Enquiry Subject</label>
                <select id="contact-subject" class="form-control">
                  <option value="Product Stock & Pricing">Product Stock &amp; Wholesale Pricing</option>
                  <option value="Minimum Order Quantities">Minimum Order Quantity (MOQ) Clarification</option>
                  <option value="Transport & Logistics">Transport Logistics &amp; Delivery Timeline</option>
                  <option value="School Stationery Combos">School Stationery Combo Procurement</option>
                  <option value="Proforma & GST Invoice">Proforma &amp; GST Tax Invoicing</option>
                  <option value="General Question">General Wholesale Question</option>
                </select>
              </div>

              <div class="form-group">
                <label for="contact-message" class="form-label">Your Message <span class="required">*</span></label>
                <textarea id="contact-message" class="form-control" rows="4" placeholder="Detail your required products, target quantity, or delivery city..." required></textarea>
                <span class="form-error-msg" id="err-contact-message"></span>
              </div>

              <button type="submit" class="btn btn-primary btn-lg" id="btn-contact-submit">
                <span>Submit Wholesale Enquiry</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </form>
          </div>
        </div>

        <!-- Demonstration Notice Box -->
        <div class="location-card fade-up" style="margin-top: 2rem;">
          <div class="location-map-mock">
            <div class="location-pin-wrap">
              <div style="font-family: var(--font-heading); font-weight: 700; color: var(--color-white); font-size: 1.05rem;">
                Joli Enterprises Wholesale Warehouse Hub
              </div>
              <div style="font-size: 0.85rem; color: #CBD5E1; margin-top: 0.25rem;">
                Industrial Estate, Chennai • Logistics Dispatches Pan-India
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function ve(){we()}function qe(){return`
    <!-- About Header & Breadcrumbs -->
    <header class="about-hero">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a>
          <span class="separator">/</span>
          <span class="current">About Us</span>
        </nav>
        <h1 class="section-title" style="margin-bottom: 0.5rem;">Small Products. Maximum Retail Margins.</h1>
        <p class="section-subtitle">
          Direct B2B wholesale partner supplying fast-moving everyday goods to 500+ independent retail merchants across India.
        </p>
      </div>
    </header>

    <!-- Main About Showcase (Reference Cream & Gold Theme) -->
    <section class="about-ref-section">
      <!-- Decorative Background Golden Orbital Curves -->
      <div class="about-bg-curves" aria-hidden="true">
        <svg viewBox="0 0 1440 650" fill="none" preserveAspectRatio="none">
          <path d="M-100 280 C 250 80, 750 480, 1540 180" stroke="#C9A25E" stroke-width="1.8" stroke-dasharray="7 9" opacity="0.45" />
          <path d="M-50 420 C 350 200, 850 560, 1500 320" stroke="#C9A25E" stroke-width="1.2" opacity="0.32" />
        </svg>
      </div>

      <div class="container about-ref-container">
        <div class="about-ref-grid">
          <!-- Left Column: Concise & Attractive Story -->
          <div class="about-ref-col-left fade-up">
            <span class="about-ref-badge">About Joli Enterprises</span>
            <h2 class="about-ref-title">
              Wholesale Merchandise for <span class="about-ref-title-gold">Everyday Retail</span>
            </h2>
            
            <p class="about-ref-lead">
              We connect local retail shopkeepers, school supply stores, and gift boutiques directly with high-demand everyday essentials at transparent factory prices.
            </p>

            <p class="about-ref-body">
              Every shipment features verified piece counts, realistic MOQs starting from 12 units, and honest wholesale profit margins of 35% to 65% upon resale.
            </p>

            <div class="about-ref-actions">
              <a href="#/categories" class="btn-about-gold">
                <span>Browse Categories</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <a href="#/bulk-deals" class="btn-about-white">
                <span>Carton Volume Deals</span>
              </a>
            </div>
          </div>

          <!-- Right Column: Visual Box Asset & Floating Channel Pills -->
          <div class="about-ref-col-right fade-up">
            <div class="about-category-pills-stack" aria-label="Retail Channels We Supply">
              <div class="about-cat-pill">
                <div class="cat-pill-icon-circle">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </div>
                <span class="cat-pill-text">Retail Shops</span>
              </div>

              <div class="about-cat-pill">
                <div class="cat-pill-icon-circle">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </div>
                <span class="cat-pill-text">Stationery Stores</span>
              </div>

              <div class="about-cat-pill">
                <div class="cat-pill-icon-circle">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 12 20 22 4 22 4 12"></polyline>
                    <rect x="2" y="7" width="20" height="5"></rect>
                    <line x1="12" y1="22" x2="12" y2="7"></line>
                  </svg>
                </div>
                <span class="cat-pill-text">Gift Boutiques</span>
              </div>

              <div class="about-cat-pill">
                <div class="cat-pill-icon-circle">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  </svg>
                </div>
                <span class="cat-pill-text">Mobile Kiosks</span>
              </div>

              <div class="about-cat-pill">
                <div class="cat-pill-icon-circle">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  </svg>
                </div>
                <span class="cat-pill-text">Online Resellers</span>
              </div>
            </div>

            <!-- Joli Enterprises Open Cardboard Product Box Visual -->
            <div class="about-box-visual-wrap">
              <div class="about-box-image-card">
                <img 
                  src="/images/about-product-box.jpg" 
                  alt="Joli Enterprises Open Wholesale Cardboard Box Filled with Colourful Retail Merchandise" 
                  class="about-box-img"
                  loading="lazy"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Wholesale Strengths & Commercial Pillars -->
    <section class="section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">The Joli Wholesale Advantage</h2>
          <p class="section-subtitle">
            Purpose-built purchasing benefits designed to protect retailer cash flow and accelerate sales velocity.
          </p>
        </div>

        <div class="about-values-grid">
          <div class="value-card fade-up">
            <div class="value-card-icon-wrap" style="width: 44px; height: 44px; border-radius: 10px; background: rgba(201, 162, 94, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-gold); margin-bottom: 1rem;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </div>
            <h3 class="value-card-title">Tiered Volume Rates</h3>
            <p class="value-card-desc">
              Automatic tier discounts on carton lots. Test items with low MOQs and scale to master cartons as velocity grows.
            </p>
          </div>

          <div class="value-card fade-up">
            <div class="value-card-icon-wrap" style="width: 44px; height: 44px; border-radius: 10px; background: rgba(201, 162, 94, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-gold); margin-bottom: 1rem;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line></svg>
            </div>
            <h3 class="value-card-title">Ready-to-Resell Combos</h3>
            <p class="value-card-desc">
              Pre-assembled school kits and gift combos shrink-wrapped and barcoded for instant shelf placement.
            </p>
          </div>

          <div class="value-card fade-up">
            <div class="value-card-icon-wrap" style="width: 44px; height: 44px; border-radius: 10px; background: rgba(201, 162, 94, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-gold); margin-bottom: 1rem;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <h3 class="value-card-title">100% Verified Piece Counts</h3>
            <p class="value-card-desc">
              Zero shortage guarantee. Every carton and multipack is piece-audited before dispatch for complete peace of mind.
            </p>
          </div>

          <div class="value-card fade-up">
            <div class="value-card-icon-wrap" style="width: 44px; height: 44px; border-radius: 10px; background: rgba(201, 162, 94, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-gold); margin-bottom: 1rem;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
            </div>
            <h3 class="value-card-title">GST ITC & 24h Dispatch</h3>
            <p class="value-card-desc">
              Formal GST tax invoices with HSN codes for instant ITC claims. Orders dispatched via insured express freight.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Wholesale Call to Action Banner -->
    <section class="section-sm bg-soft-grey">
      <div class="container">
        <div class="cta-banner fade-up">
          <div class="cta-banner-content">
            <h2 class="cta-banner-title">Stock Your Retail Shelves with Confidence</h2>
            <p class="cta-banner-desc">
              Explore our 5 primary wholesale categories or connect directly with our trade desk for custom carton volume quotations.
            </p>
          </div>
          <div class="cta-banner-action" style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="#/categories" class="btn btn-primary btn-lg">
              <span>Explore Categories</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="#/bulk-enquiry" class="btn btn-outline btn-lg">
              <span>Request Trade Quote</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `}function Me(){return`
    <header class="about-hero">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a>
          <span class="separator">/</span>
          <span class="current">Founder & Leadership</span>
        </nav>
        <h1 class="section-title" style="margin-bottom: 0.5rem;">Founder's Vision & Mission</h1>
        <p class="section-subtitle">
          Empowering India's independent retailers with fair margins, honest piece counts, and zero middleman markups.
        </p>
      </div>
    </header>

    <!-- Founder Introduction & Vision -->
    <section class="section">
      <div class="container">
        <div class="about-intro-grid" style="align-items: center;">
          <div class="fade-up">
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--color-gold); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">
              Leadership Profile
            </span>
            <h2 class="section-title">Built for the Grassroots Retailer</h2>
            
            <p style="font-size: 1.05rem; line-height: 1.7; color: var(--color-text-main); margin-bottom: 1.25rem;">
              <strong>Joli Enterprises</strong> was founded on a straightforward principle: independent shopkeepers deserve access to high-demand everyday merchandise at genuine wholesale rates, with accessible pack sizes and guaranteed piece counts.
            </p>

            <p style="font-size: 0.95rem; line-height: 1.65; color: var(--color-text-muted); margin-bottom: 1.75rem;">
              By bypassing inflated middleman layers and inflexible container-scale demands, we help neighbourhood stationery shops, gift boutiques, and retail merchants preserve working capital while maximizing resale profits.
            </p>

            <!-- Key Metric Highlights -->
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 2rem;">
              <div style="background: var(--color-soft-grey); padding: 1rem; border-left: 3px solid var(--color-gold);">
                <div style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 800; color: var(--color-navy); line-height: 1.1;">500+</div>
                <div style="font-size: 0.75rem; font-weight: 700; color: var(--color-text-muted); margin-top: 0.25rem; text-transform: uppercase;">Retail Partners</div>
              </div>
              <div style="background: var(--color-soft-grey); padding: 1rem; border-left: 3px solid var(--color-gold);">
                <div style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 800; color: var(--color-navy); line-height: 1.1;">35%–65%</div>
                <div style="font-size: 0.75rem; font-weight: 700; color: var(--color-text-muted); margin-top: 0.25rem; text-transform: uppercase;">Resale Margins</div>
              </div>
              <div style="background: var(--color-soft-grey); padding: 1rem; border-left: 3px solid var(--color-gold);">
                <div style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 800; color: var(--color-navy); line-height: 1.1;">24h</div>
                <div style="font-size: 0.75rem; font-weight: 700; color: var(--color-text-muted); margin-top: 0.25rem; text-transform: uppercase;">Dispatch SLA</div>
              </div>
            </div>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="#/categories" class="btn btn-primary">
                <span>Explore Sourcing Lines</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <a href="#/contact" class="btn btn-outline">
                <span>Speak with Trade Desk</span>
              </a>
            </div>
          </div>

          <div class="about-img-frame fade-up">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&auto=format&fit=crop&q=80" 
              alt="Joli Enterprises Founder and Leadership Operations"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Founder's Core Principles Grid -->
    <section class="section bg-soft-grey">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">The Four Founding Commitments</h2>
          <p class="section-subtitle">
            Core operating tenets established by our leadership to govern every product, carton, and merchant partnership.
          </p>
        </div>

        <div class="about-values-grid">
          <div class="value-card fade-up">
            <div style="width: 44px; height: 44px; border-radius: 10px; background: rgba(201, 162, 94, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-gold); margin-bottom: 1rem;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </div>
            <h3 class="value-card-title">1. Fair Retailer Margins</h3>
            <p class="value-card-desc">
              Every catalog item is structured to deliver sustainable 35% to 65% profit margins when sold at standard retail price points.
            </p>
          </div>

          <div class="value-card fade-up">
            <div style="width: 44px; height: 44px; border-radius: 10px; background: rgba(201, 162, 94, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-gold); margin-bottom: 1rem;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <h3 class="value-card-title">2. Exact Piece-Count Guarantee</h3>
            <p class="value-card-desc">
              Zero shortage tolerance. Whether it's a 100-item school combo or a 200-piece utility carton, every order is piece-verified.
            </p>
          </div>

          <div class="value-card fade-up">
            <div style="width: 44px; height: 44px; border-radius: 10px; background: rgba(201, 162, 94, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-gold); margin-bottom: 1rem;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
            </div>
            <h3 class="value-card-title">3. Realistic Low MOQs</h3>
            <p class="value-card-desc">
              Accessible minimum orders starting from 12–24 units allow merchants to test new trending stock without tying up capital.
            </p>
          </div>

          <div class="value-card fade-up">
            <div style="width: 44px; height: 44px; border-radius: 10px; background: rgba(201, 162, 94, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-gold); margin-bottom: 1rem;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
            </div>
            <h3 class="value-card-title">4. Pan-India GST Delivery</h3>
            <p class="value-card-desc">
              Formal GST invoices with valid HSN codes for instant input tax credit claims, backed by insured express dispatch.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership Quote Banner -->
    <section class="section">
      <div class="container">
        <div style="background: var(--color-navy); color: var(--color-white); padding: 3rem 2.5rem; text-align: center; max-width: 880px; margin: 0 auto; border-radius: var(--radius-md); box-shadow: 0 16px 40px rgba(14, 26, 41, 0.25);" class="fade-up">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2" style="margin-bottom: 1.25rem;"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path></svg>
          <blockquote style="font-family: var(--font-heading); font-size: 1.3rem; font-weight: 600; line-height: 1.6; color: #FFFFFF; margin-bottom: 1.25rem;">
            &ldquo;When neighbourhood retail shops thrive, local communities prosper. Our mission is to be the most dependable wholesale backbone for every retailer who partners with us.&rdquo;
          </blockquote>
          <div style="font-size: 0.95rem; font-weight: 700; color: var(--color-gold);">
            Founder & Managing Director
          </div>
          <div style="font-size: 0.8rem; color: #94A3B8; margin-top: 0.2rem; letter-spacing: 0.05em; text-transform: uppercase;">
            Joli Enterprises Wholesale Merchandise
          </div>
        </div>
      </div>
    </section>

    <!-- Wholesale Call to Action -->
    <section class="section-sm bg-soft-grey">
      <div class="container">
        <div class="cta-banner fade-up">
          <div class="cta-banner-content">
            <h2 class="cta-banner-title">Build Your Inventory with Joli Enterprises</h2>
            <p class="cta-banner-desc">
              Explore our verified wholesale catalogue or request customized carton quotations tailored to your retail shop.
            </p>
          </div>
          <div class="cta-banner-action" style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="#/categories" class="btn btn-primary btn-lg">
              <span>Browse Categories</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="#/bulk-enquiry" class="btn btn-outline btn-lg">
              <span>Request Wholesale Quote</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `}function Le(){const e=Y(),a=q(),t={stationery:{punchline:"High-turnover school kits, notebooks, and writing essentials engineered for rapid repeat sales.",margin:"40%–55% Margin",dispatch:"24h Dispatch"},household:{punchline:"Everyday utility hooks, storage clips, and cleaning essentials with high impulse counter turnover.",margin:"35%–50% Margin",dispatch:"Ready Master Cartons"},"fashion-accessories":{punchline:"Trending pastel claw clips, satin scrunchies, and hair accessories designed for high volume resale.",margin:"45%–65% Margin",dispatch:"Assorted Color Lots"},"mobile-accessories":{punchline:"Fast-moving charging cables, desktop stands, and wire protectors with universal phone compatibility.",margin:"40%–60% Margin",dispatch:"Retail Blister Packs"},"gift-general":{punchline:"Silicone 3D keychains, novelty stationery gifts, and washi tapes ideal for seasonal and gift sales.",margin:"45%–65% Margin",dispatch:"Return Gift Ready"}};return`
    <header class="about-hero">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a>
          <span class="separator">/</span>
          <span class="current">Categories</span>
        </nav>
        <h1 class="section-title" style="margin-bottom: 0.5rem;">5 Primary Sourcing Lines</h1>
        <p class="section-subtitle">
          Direct factory wholesale merchandise curated for independent retail stores, stationery dealers, and gift boutiques.
        </p>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <div style="display: flex; flex-direction: column; gap: 2rem;">
          ${e.map((o,i)=>{const s=a.filter(c=>c.category===(o.slug||o.id)),r=i%2===1,l=t[o.slug||o.id]||{punchline:o.description,margin:"35%–55% Margin",dispatch:"Wholesale Ready"};return`
              <div class="fade-up" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2.25rem; align-items: center; background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: var(--radius-md); padding: 2.25rem; box-shadow: 0 4px 16px rgba(0,0,0,0.04); transition: transform 0.3s ease, box-shadow 0.3s ease;">
                <div style="order: ${r?"2":"1"};">
                  <div style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(201, 162, 94, 0.12); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 800; color: #9A7432; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.75rem;">
                    Category 0${i+1}
                  </div>
                  
                  <h2 style="font-size: 1.65rem; font-weight: 800; color: var(--color-navy); margin-bottom: 0.65rem; line-height: 1.2;">
                    ${n(o.name)}
                  </h2>
                  
                  <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 1.25rem;">
                    ${n(l.punchline)}
                  </p>

                  <!-- Neat Key Tags -->
                  <div style="display: flex; gap: 0.65rem; align-items: center; flex-wrap: wrap; margin-bottom: 1.65rem;">
                    <span style="background: var(--color-soft-grey); border: 1px solid #E2E8F0; padding: 0.35rem 0.75rem; border-radius: 6px; font-size: 0.8rem; font-weight: 700; color: var(--color-navy);">
                      ${s.length||7} Wholesale SKUs
                    </span>
                    <span style="background: rgba(14, 26, 41, 0.06); padding: 0.35rem 0.75rem; border-radius: 6px; font-size: 0.8rem; font-weight: 700; color: var(--color-navy);">
                      ${l.margin}
                    </span>
                    <span style="background: rgba(201, 162, 94, 0.15); padding: 0.35rem 0.75rem; border-radius: 6px; font-size: 0.8rem; font-weight: 700; color: #9A7432;">
                      ${l.dispatch}
                    </span>
                  </div>

                  <div style="display: flex; gap: 0.85rem; flex-wrap: wrap;">
                    <a href="#/category?slug=${encodeURIComponent(o.slug||o.id)}" class="btn btn-primary btn-sm">
                      <span>Browse Products</span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                    <a href="#/bulk-enquiry?category=${encodeURIComponent(o.slug||o.id)}" class="btn btn-outline btn-sm">
                      <span>Request Carton Quote</span>
                    </a>
                  </div>
                </div>

                <div style="order: ${r?"1":"2"}; height: 240px; border-radius: var(--radius-sm); overflow: hidden; background: var(--color-soft-grey);">
                  <img 
                    src="${n(o.image)}" 
                    alt="${n(o.name)}" 
                    style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;"
                    onmouseover="this.style.transform='scale(1.05)'"
                    onmouseout="this.style.transform='scale(1)'"
                    loading="lazy"
                  >
                </div>
              </div>
            `}).join("")}
        </div>
      </div>
    </section>
  `}let N=[],K="",E="featured",ee=!1,te=!1;function Qe(e={}){const a=Y();return e.search?K=e.search.trim().toLowerCase():e.keepSearch||(K=""),e.category?N=[e.category]:N=[],`
    <header class="about-hero">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a>
          <span class="separator">/</span>
          <span class="current">Shop Wholesale</span>
        </nav>
        <h1 class="section-title" style="margin-bottom: 0.5rem;">Wholesale Product Catalogue</h1>
        <p class="section-subtitle">
          Browse our complete range of everyday merchandise, stationery, household goods, accessories, and combo packs.
        </p>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <div class="shop-layout">
          <!-- Filter Sidebar -->
          <aside class="filter-sidebar">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
              <h3 style="font-size: 1.1rem; color: var(--color-navy);">Filters</h3>
              <button type="button" id="btn-clear-filters" style="background: none; border: none; font-size: 0.8rem; color: var(--color-gold-hover); font-weight: 700; cursor: pointer;">
                Reset All
              </button>
            </div>

            <!-- Categories Filter -->
            <div class="filter-group">
              <h4 class="filter-group-title">Categories</h4>
              <div id="filter-categories-list">
                ${a.map(t=>`
                  <label class="filter-checkbox-label">
                    <input 
                      type="checkbox" 
                      class="category-filter-checkbox" 
                      value="${n(t.id)}"
                      ${N.includes(t.id)?"checked":""}
                    >
                    <span>${n(t.name)}</span>
                  </label>
                `).join("")}
              </div>
            </div>

            <!-- Special Product Types -->
            <div class="filter-group">
              <h4 class="filter-group-title">Product Types</h4>
              <label class="filter-checkbox-label">
                <input type="checkbox" id="filter-combo-checkbox" ${ee?"checked":""}>
                <span>Wholesale Combo Kits Only</span>
              </label>
              <label class="filter-checkbox-label">
                <input type="checkbox" id="filter-instock-checkbox" ${te?"checked":""}>
                <span>In Stock Ready to Dispatch</span>
              </label>
            </div>
          </aside>

          <!-- Main Shop Content Area -->
          <div>
            <!-- Toolbar -->
            <div class="shop-toolbar">
              <div style="font-size: 0.925rem; color: var(--color-text-muted);" id="shop-results-count">
                Showing wholesale products
              </div>

              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <label for="shop-sort-select" style="font-size: 0.85rem; color: var(--color-text-muted); font-weight: 600;">Sort By:</label>
                <select id="shop-sort-select" class="sort-select">
                  <option value="featured" ${E==="featured"?"selected":""}>Featured Products</option>
                  <option value="price-asc" ${E==="price-asc"?"selected":""}>Price: Low to High</option>
                  <option value="price-desc" ${E==="price-desc"?"selected":""}>Price: High to Low</option>
                  <option value="name-asc" ${E==="name-asc"?"selected":""}>Name: A to Z</option>
                  <option value="moq-asc" ${E==="moq-asc"?"selected":""}>MOQ: Low to High</option>
                </select>
              </div>
            </div>

            <!-- Live Products Grid Container -->
            <div id="shop-grid-container">
              <!-- Populated by updateShopGrid() -->
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function De(){const e=document.querySelectorAll(".category-filter-checkbox"),a=document.getElementById("filter-combo-checkbox"),t=document.getElementById("filter-instock-checkbox"),o=document.getElementById("shop-sort-select"),i=document.getElementById("btn-clear-filters");e.forEach(s=>{s.addEventListener("change",()=>{N=Array.from(document.querySelectorAll(".category-filter-checkbox:checked")).map(r=>r.value),V()})}),a==null||a.addEventListener("change",s=>{ee=s.target.checked,V()}),t==null||t.addEventListener("change",s=>{te=s.target.checked,V()}),o==null||o.addEventListener("change",s=>{E=s.target.value,V()}),i==null||i.addEventListener("click",()=>{N=[],K="",ee=!1,te=!1,E="featured",e.forEach(s=>s.checked=!1),a&&(a.checked=!1),t&&(t.checked=!1),o&&(o.value="featured"),V()}),V()}function V(){var i;const e=document.getElementById("shop-grid-container"),a=document.getElementById("shop-results-count");if(!e)return;const t=q();let o=t.filter(s=>{if(N.length>0&&!N.includes(s.category)||ee&&!s.isCombo||te&&!s.inStock)return!1;if(K){const r=K,l=s.name.toLowerCase().includes(r),c=s.shortDescription.toLowerCase().includes(r),u=s.categoryName.toLowerCase().includes(r),m=(s.sku||"").toLowerCase().includes(r),f=(s.subcategory||"").toLowerCase().includes(r);if(!l&&!c&&!u&&!m&&!f)return!1}return!0});if(E==="price-asc"?o.sort((s,r)=>s.unitPrice-r.unitPrice):E==="price-desc"?o.sort((s,r)=>r.unitPrice-s.unitPrice):E==="name-asc"?o.sort((s,r)=>s.name.localeCompare(r.name)):E==="moq-asc"?o.sort((s,r)=>(s.moq||0)-(r.moq||0)):o.sort((s,r)=>(r.featured?1:0)-(s.featured?1:0)),a&&(a.innerHTML=`Showing <strong>${o.length}</strong> of ${t.length} wholesale products`),o.length===0){e.innerHTML=`
      <div class="empty-state">
        <div class="empty-state-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
        </div>
        <h3 class="empty-state-title">No Matching Products Found</h3>
        <p class="empty-state-desc">
          We couldn't find any wholesale items matching your current filters. Try unchecking some categories or reset your search.
        </p>
        <button type="button" class="btn btn-primary" id="btn-empty-reset">
          <span>Reset All Filters</span>
        </button>
      </div>
    `,(i=document.getElementById("btn-empty-reset"))==null||i.addEventListener("click",()=>{var s;(s=document.getElementById("btn-clear-filters"))==null||s.click()});return}e.innerHTML=`
    <div class="products-grid">
      ${o.map(s=>$(s)).join("")}
    </div>
  `}function Ae(){const e=q(),a=e.filter(o=>o.isCombo),t=e.filter(o=>o.cartonQuantity&&o.cartonQuantity>=200&&!o.isCombo);return`
    <header class="about-hero">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a>
          <span class="separator">/</span>
          <span class="current">Bulk Deals</span>
        </nav>
        <h1 class="section-title" style="margin-bottom: 0.5rem;">Volume Specials & Master Cartons</h1>
        <p class="section-subtitle">
          Direct factory carton discounts and pre-assembled retail bundles structured for maximum merchant profit.
        </p>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <!-- Ready-Made Combo Kits Section -->
        <div class="section-header" style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1rem; margin-bottom: 2rem;">
          <div>
            <h2 class="section-title" style="margin-bottom: 0.35rem;">Pre-Packaged Retail Combos</h2>
            <p class="section-subtitle" style="margin: 0;">
              Zero assembly required. Shrink-wrapped school kits and novelty gift packs with verified piece counts.
            </p>
          </div>
          <a href="#/combos" class="btn btn-outline btn-sm">
            <span>View All Combos &rarr;</span>
          </a>
        </div>

        <div class="products-grid" style="margin-bottom: 4rem;">
          ${a.map(o=>$(o)).join("")}
        </div>

        <!-- High Volume Carton Deals -->
        <div class="section-header" style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1rem; margin-bottom: 2rem;">
          <div>
            <h2 class="section-title" style="margin-bottom: 0.35rem;">Master Carton Volume Specials</h2>
            <p class="section-subtitle" style="margin: 0;">
              High-velocity everyday essentials available in factory-sealed lots at direct tier discounts.
            </p>
          </div>
          <a href="#/bulk-enquiry" class="btn btn-outline btn-sm">
            <span>Request Container Quote &rarr;</span>
          </a>
        </div>

        <div class="products-grid">
          ${t.map(o=>$(o)).join("")}
        </div>
      </div>
    </section>
  `}function $e(){return`
    <header class="about-hero">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a>
          <span class="separator">/</span>
          <span class="current">Combos & Kits</span>
        </nav>
        <h1 class="section-title" style="margin-bottom: 0.5rem;">Pre-Packaged Wholesale Combos</h1>
        <p class="section-subtitle">
          Ready-to-sell stationery kits, exam bundles, and gift multipacks with guaranteed piece-count accuracy.
        </p>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Verified Retail & School Bundles</h2>
          <p class="section-subtitle">
            Individually packaged and barcoded for instant shelf placement with up to 60% retailer resale margin.
          </p>
        </div>

        <div class="products-grid" style="margin-bottom: 3.5rem;">
          ${q().filter(t=>t.isCombo).map(t=>$(t)).join("")}
        </div>

        <!-- Custom Combo Assembly Banner -->
        <div style="background: var(--color-navy); color: var(--color-white); padding: 2.75rem 2.25rem; text-align: center; max-width: 860px; margin: 0 auto; border-radius: var(--radius-md); box-shadow: 0 12px 35px rgba(14, 26, 41, 0.25);" class="fade-up">
          <div style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(201, 162, 94, 0.2); padding: 0.25rem 0.85rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 800; color: var(--color-gold); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1rem;">
            Custom Assembly Service
          </div>
          <h2 style="font-size: 1.65rem; font-weight: 800; color: #FFFFFF; margin-bottom: 0.65rem;">
            Need Custom Kits for Your School or Institution?
          </h2>
          <p style="font-size: 0.95rem; color: #CBD5E1; max-width: 600px; margin: 0 auto 1.5rem; line-height: 1.6;">
            We assemble, shrink-wrap, and barcode custom stationery packages, return gift bundles, and exam kits to your exact piece specifications.
          </p>
          <a href="#/bulk-enquiry?category=stationery&product=Custom+Combo+Kit" class="btn btn-primary btn-lg">
            <span>Request Custom Kit Assembly</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </div>
    </section>
  `}function He(e={}){const a=Y(),t=e.slug||"stationery",o=a.find(r=>r.slug===t||r.id===t)||a[0],s=q().filter(r=>r.category===o.id||r.category===o.slug);return`
    <header class="about-hero">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a>
          <span class="separator">/</span>
          <a href="#/shop">Shop</a>
          <span class="separator">/</span>
          <span class="current">${n(o.name)}</span>
        </nav>
        <h1 class="section-title" style="margin-bottom: 0.5rem;">${n(o.name)}</h1>
        <p class="section-subtitle">
          ${n(o.description)}
        </p>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <!-- Category Navigation Bar -->
        <div style="display: flex; gap: 0.75rem; overflow-x: auto; padding-bottom: 1rem; margin-bottom: 2.5rem;">
          ${a.map(r=>`
            <a 
              href="#/category?slug=${encodeURIComponent(r.slug||r.id)}"
              class="btn ${r.id===o.id?"btn-navy":"btn-outline"} btn-sm"
              style="white-space: nowrap;"
            >
              ${n(r.name)}
            </a>
          `).join("")}
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
          <div style="font-size: 0.95rem; color: var(--color-text-muted);">
            Showing <strong>${s.length}</strong> items in ${n(o.name)}
          </div>
          <a href="#/bulk-enquiry?category=${encodeURIComponent(o.name)}" class="btn btn-outline btn-sm">
            Request Category Bulk Quote
          </a>
        </div>

        <div class="products-grid">
          ${s.map(r=>$(r)).join("")}
        </div>
      </div>
    </section>
  `}let j=1,d=null;function Re(e={}){const a=q(),t=e.id||(a[0]?a[0].id:null);if(d=ae(t)||a[0],!d)return`
      <div class="container section">
        <div class="empty-state">
          <h2 class="empty-state-title">Product Not Found</h2>
          <p class="empty-state-desc">The requested wholesale product could not be located in our catalogue.</p>
          <a href="#/shop" class="btn btn-primary">Return to Shop</a>
        </div>
      </div>
    `;j=d.moq||1;const o=U(d,j),i=o*j,s=a.filter(r=>r.category===d.category&&r.id!==d.id).slice(0,4);return`
    <header class="about-hero" style="padding-top: 2.5rem; padding-bottom: 2.5rem;">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a>
          <span class="separator">/</span>
          <a href="#/shop">Shop</a>
          <span class="separator">/</span>
          <a href="#/category?slug=${encodeURIComponent(d.category)}">${n(d.categoryName)}</a>
          <span class="separator">/</span>
          <span class="current">${n(d.name)}</span>
        </nav>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <!-- Main Product Layout Grid -->
        <div class="product-detail-grid">
          <!-- Left: Image Gallery -->
          <div class="gallery-wrap">
            <div class="gallery-main">
              <img 
                id="gallery-main-image" 
                src="${n(d.images[0])}" 
                alt="${n(d.name)}"
              >
            </div>

            <!-- Thumbnail Selector -->
            ${d.images.length>1?`
              <div class="gallery-thumbnails" id="gallery-thumbs">
                ${d.images.map((r,l)=>`
                  <button 
                    type="button" 
                    class="gallery-thumb ${l===0?"active":""}" 
                    data-img-src="${n(r)}"
                    aria-label="View Angle ${l+1}"
                  >
                    <img src="${n(r)}" alt="Thumbnail ${l+1}">
                  </button>
                `).join("")}
              </div>
            `:""}
          </div>

          <!-- Right: Product Information & Wholesale Buying Box -->
          <div class="detail-info">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
              <span class="badge">${n(d.categoryName)}</span>
              ${d.badge?`<span class="badge badge-navy">${n(d.badge)}</span>`:""}
              <span style="font-size: 0.8rem; color: var(--color-success); font-weight: 700;">In Stock (${d.stockCount||1e3}+ available)</span>
            </div>

            <h1 class="detail-title">${n(d.name)}</h1>
            
            <div class="detail-sku-row">
              <span>SKU: <strong>${n(d.sku||"N/A")}</strong></span>
              <span>•</span>
              <span>Pack Size: <strong>${d.packQuantity||1} units</strong></span>
              ${d.cartonQuantity?`<span>•</span><span>Carton: <strong>${d.cartonQuantity} units</strong></span>`:""}
            </div>

            <p style="font-size: 0.95rem; color: var(--color-text); line-height: 1.6; margin-bottom: 1.5rem;">
              ${n(d.shortDescription)}
            </p>

            <!-- Tiered Wholesale Pricing Table -->
            <div class="tier-table-wrap">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                <span class="tier-table-title">Wholesale Volume Pricing Tiers</span>
                <span style="font-size: 0.75rem; color: var(--color-text-muted);">Prices in INR (excl. 18% GST)</span>
              </div>
              <table class="tier-table">
                <thead>
                  <tr>
                    <th>Order Quantity Range</th>
                    <th>Price per Unit</th>
                    <th>Savings</th>
                  </tr>
                </thead>
                <tbody id="tier-table-body">
                  ${xe(d,j)}
                </tbody>
              </table>
            </div>

            <!-- Wholesale Buy Box -->
            <div class="purchase-box">
              <div class="moq-notice-banner">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                <span>Minimum Order Quantity: <strong>${d.moq} units</strong> (Increments of ${d.increment||d.moq})</span>
              </div>

              <div class="qty-control-row">
                <div>
                  <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-navy); display: block; margin-bottom: 0.35rem;">
                    Select Units:
                  </span>
                  <div class="qty-stepper">
                    <button type="button" class="qty-step-btn" id="btn-qty-minus" aria-label="Decrease quantity">−</button>
                    <input type="number" id="detail-qty-input" class="qty-input" value="${j}" min="${d.moq}" step="${d.increment||1}">
                    <button type="button" class="qty-step-btn" id="btn-qty-plus" aria-label="Increase quantity">+</button>
                  </div>
                </div>

                <div>
                  <span style="font-size: 0.8rem; color: var(--color-text-muted); display: block;">Effective Unit Rate:</span>
                  <div style="font-size: 1.15rem; font-weight: 800; color: var(--color-navy);" id="detail-active-unit-price">
                    ${h(o)} / unit
                  </div>
                </div>

                <div>
                  <span style="font-size: 0.8rem; color: var(--color-text-muted); display: block;">Line Estimate:</span>
                  <div class="line-preview-total" id="detail-line-total">
                    ${h(i)}
                  </div>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="detail-cta-row">
                <button type="button" class="btn btn-primary btn-lg" id="btn-detail-add-cart">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                  <span>Add to Wholesale Cart</span>
                </button>

                <button type="button" class="btn btn-navy btn-lg" id="btn-detail-buy-now">
                  <span>Buy Now</span>
                </button>

                <a href="#/bulk-enquiry?product=${encodeURIComponent(d.name)}" class="btn btn-outline btn-lg">
                  <span>Request Custom Bulk Quote</span>
                </a>
              </div>
            </div>

            <!-- Combo Items List if Bundle -->
            ${d.isCombo&&d.comboItems?`
              <div class="combo-items-box">
                <h4 style="font-size: 0.95rem; font-weight: 800; color: var(--color-navy); text-transform: uppercase; letter-spacing: 0.05em;">
                  Verified Bundle Contents (${d.comboItems.length} Product Categories)
                </h4>
                <ul>
                  ${d.comboItems.map(r=>`
                    <li>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span>${n(r)}</span>
                    </li>
                  `).join("")}
                </ul>
              </div>
            `:""}

            <!-- Specifications Table -->
            <div style="margin-top: 2rem;">
              <h3 style="font-size: 1.2rem; color: var(--color-navy); margin-bottom: 0.75rem;">Wholesale Product Specifications</h3>
              <table class="specs-table">
                <tbody>
                  ${d.specifications.map(r=>`
                    <tr>
                      <th>${n(r.label)}</th>
                      <td>${n(r.value)}</td>
                    </tr>
                  `).join("")}
                  <tr>
                    <th>Minimum Order (MOQ)</th>
                    <td>${d.moq} units</td>
                  </tr>
                  <tr>
                    <th>Order Increment</th>
                    <td>${d.increment||d.moq} units</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style="margin-top: 2rem;">
              <h3 style="font-size: 1.2rem; color: var(--color-navy); margin-bottom: 0.5rem;">Detailed Commercial Description</h3>
              <p style="color: var(--color-text); line-height: 1.7; font-size: 0.95rem;">
                ${n(d.fullDescription)}
              </p>
            </div>
          </div>
        </div>

        <!-- Related Wholesale Items -->
        ${s.length>0?`
          <div style="margin-top: 5rem; padding-top: 3rem;">
            <div class="section-header" style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2rem;">
              <div>
                <h2 class="section-title" style="font-size: 1.85rem;">Related Wholesale Products</h2>
                <p class="section-subtitle">Complementary items from ${n(d.categoryName)}</p>
              </div>
              <a href="#/category?slug=${encodeURIComponent(d.category)}" class="btn btn-outline btn-sm">
                <span>View Full Category</span>
              </a>
            </div>

            <div class="products-grid">
              ${s.map(r=>$(r)).join("")}
            </div>
          </div>
        `:""}
      </div>
    </section>
  `}function xe(e,a){if(!e.priceTiers||e.priceTiers.length===0)return`<tr><td>Standard MOQ: ${e.moq}+</td><td>${h(e.unitPrice)}</td><td>Base Rate</td></tr>`;const t=e.priceTiers[0].price;return e.priceTiers.map((o,i)=>{const s=e.priceTiers[i+1],r=s?`${o.minQty} – ${s.minQty-1} units`:`${o.minQty}+ units (Master Carton)`;let l=!1;s?l=a>=o.minQty&&a<s.minQty:l=a>=o.minQty;const c=t>o.price?Math.round((t-o.price)/t*100)+"% OFF":"Standard";return`
      <tr class="${l?"active-tier":""}">
        <td>${r} ${l?"◀ Selected":""}</td>
        <td><strong>${h(o.price)}</strong> / unit</td>
        <td style="color: var(--color-success); font-weight: 700;">${c}</td>
      </tr>
    `}).join("")}function Fe(){if(!d)return;const e=document.getElementById("gallery-thumbs"),a=document.getElementById("gallery-main-image");e&&a&&e.addEventListener("click",p=>{const x=p.target.closest(".gallery-thumb");if(!x)return;const v=x.getAttribute("data-img-src");v&&(a.style.opacity="0.3",setTimeout(()=>{a.src=v,a.style.opacity="1"},120),e.querySelectorAll(".gallery-thumb").forEach(w=>w.classList.remove("active")),x.classList.add("active"))});const t=document.getElementById("btn-qty-minus"),o=document.getElementById("btn-qty-plus"),i=document.getElementById("detail-qty-input"),s=document.getElementById("detail-active-unit-price"),r=document.getElementById("detail-line-total"),l=document.getElementById("tier-table-body"),c=d.moq||1,u=d.increment||c;function m(){let p=parseInt(i.value,10);(isNaN(p)||p<c)&&(p=c,i.value=p),j=p;const x=U(d,p),v=x*p;s&&(s.textContent=`${h(x)} / unit`),r&&(r.textContent=h(v)),l&&(l.innerHTML=xe(d,p))}t==null||t.addEventListener("click",()=>{let p=parseInt(i.value,10)||c;p-u>=c?i.value=p-u:i.value=c,m()}),o==null||o.addEventListener("click",()=>{let p=parseInt(i.value,10)||c;i.value=p+u,m()}),i==null||i.addEventListener("change",m);const f=document.getElementById("btn-detail-add-cart");f==null||f.addEventListener("click",()=>{const p=parseInt(i.value,10)||c;re(d.id,p),ze(`Added ${p} units of ${d.name} to cart!`)});const b=document.getElementById("btn-detail-buy-now");b==null||b.addEventListener("click",()=>{const p=parseInt(i.value,10)||c;re(d.id,p),window.location.hash="#/checkout"})}function ze(e){const a=document.getElementById("cart-toast"),t=document.getElementById("toast-message");a&&t&&(t.textContent=e,a.classList.add("show"),setTimeout(()=>{a.classList.remove("show")},3500))}function Ne(){const e=G(),a=ie();return e.length===0?`
      <header class="about-hero">
        <div class="container">
          <nav class="breadcrumbs" aria-label="Breadcrumb">
            <a href="#/">Home</a>
            <span class="separator">/</span>
            <span class="current">Shopping Cart</span>
          </nav>
          <h1 class="section-title">Your Wholesale Cart is Empty</h1>
          <p class="section-subtitle">You have not added any wholesale items or combo packs to your order yet.</p>
        </div>
      </header>

      <section class="section">
        <div class="container text-center">
          <div class="empty-state">
            <div class="empty-state-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            </div>
            <h3 class="empty-state-title">No Products in Cart</h3>
            <p class="empty-state-desc">
              Explore our catalogue of stationery, household goods, fashion accessories, mobile items, and gift combos.
            </p>
            <a href="#/shop" class="btn btn-primary btn-lg">
              <span>Start Wholesale Shopping</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>
      </section>
    `:`
    <header class="about-hero">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a>
          <span class="separator">/</span>
          <span class="current">Shopping Cart (${a.itemsCount} Units)</span>
        </nav>
        <h1 class="section-title" style="margin-bottom: 0.5rem;">Wholesale Order Review</h1>
        <p class="section-subtitle">
          Verify your wholesale quantities, applicable tiered rates, and minimum order requirements.
        </p>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <div class="cart-layout">
          <!-- Cart Items Table -->
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
              <span style="font-weight: 700; color: var(--color-navy);">${e.length} Wholesale Product Line(s)</span>
              <button type="button" id="btn-clear-cart" style="background: none; border: none; font-size: 0.825rem; color: var(--color-error); font-weight: 700; cursor: pointer;">
                Clear All Items
              </button>
            </div>

            <table class="cart-table">
              <thead>
                <tr>
                  <th>Product Details</th>
                  <th>Tier Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                ${e.map(t=>`
                  <tr data-product-id="${n(t.productId)}">
                    <td>
                      <div class="cart-product-cell">
                        <img src="${n(t.image)}" alt="${n(t.name)}" class="cart-thumb">
                        <div>
                          <a href="#/product?id=${encodeURIComponent(t.productId)}" style="font-weight: 700; color: var(--color-navy); font-size: 0.95rem;">
                            ${n(t.name)}
                          </a>
                          <div style="font-size: 0.775rem; color: var(--color-text-muted); margin-top: 0.2rem;">
                            SKU: ${n(t.sku||"N/A")} • MOQ: ${t.moq} pcs
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>
                      <strong>${h(t.unitPrice)}</strong>
                      <span style="font-size: 0.75rem; color: var(--color-text-muted); display: block;">/ unit</span>
                    </td>

                    <td>
                      <div class="qty-stepper" style="width: 120px;">
                        <button type="button" class="qty-step-btn cart-qty-minus" data-id="${n(t.productId)}">−</button>
                        <input 
                          type="number" 
                          class="qty-input cart-qty-input" 
                          data-id="${n(t.productId)}" 
                          value="${t.quantity}" 
                          min="${t.moq}" 
                          step="${t.increment||1}"
                        >
                        <button type="button" class="qty-step-btn cart-qty-plus" data-id="${n(t.productId)}">+</button>
                      </div>
                    </td>

                    <td>
                      <strong style="color: var(--color-navy); font-size: 1.05rem;">
                        ${h(t.lineTotal)}
                      </strong>
                    </td>

                    <td style="text-align: right;">
                      <button 
                        type="button" 
                        class="btn-cart-remove" 
                        data-id="${n(t.productId)}" 
                        aria-label="Remove item" 
                        style="background: none; border: none; color: var(--color-text-muted); cursor: pointer; padding: 0.5rem;"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7l-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                      </button>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>

            <div style="margin-top: 2rem;">
              <a href="#/shop" class="btn btn-outline">
                <span>&larr; Continue Wholesale Shopping</span>
              </a>
            </div>
          </div>

          <!-- Order Summary Card -->
          <aside class="cart-summary-card">
            <h3 class="summary-title">Wholesale Order Summary</h3>

            <div class="summary-row">
              <span style="color: var(--color-text-muted);">Total Units:</span>
              <strong>${a.itemsCount} pieces</strong>
            </div>

            <div class="summary-row">
              <span style="color: var(--color-text-muted);">Wholesale Subtotal:</span>
              <strong>${h(a.subtotal)}</strong>
            </div>

            <div class="summary-row">
              <span style="color: var(--color-text-muted);">GST (18% B2B Tax):</span>
              <strong>${h(a.gst)}</strong>
            </div>

            <div class="summary-row">
              <span style="color: var(--color-text-muted);">Bulk Logistics & Freight:</span>
              <strong>${a.shipping===0?'<span style="color: var(--color-success);">FREE Delivery (₹5,000+)</span>':h(a.shipping)}</strong>
            </div>

            <div class="summary-row summary-total">
              <span>Estimated Total:</span>
              <span>${h(a.grandTotal)}</span>
            </div>

            <div style="margin-top: 2rem; display: flex; flex-direction: column; gap: 0.75rem;">
              <a href="#/checkout" class="btn btn-primary btn-block btn-lg">
                <span>Proceed to Checkout</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>

              <a href="#/bulk-enquiry" class="btn btn-outline btn-block">
                <span>Request Custom Bulk Quotation</span>
              </a>
            </div>

            <div style="margin-top: 1.5rem; font-size: 0.785rem; color: var(--color-text-muted); line-height: 1.5;">
              Formal GST Tax Invoice generated on order placement. Proforma available for school and corporate institutional procurement.
            </div>
          </aside>
        </div>
      </div>
    </section>
  `}function We(){const e=document.querySelector(".cart-table"),a=document.getElementById("btn-clear-cart");a==null||a.addEventListener("click",()=>{confirm("Are you sure you want to remove all items from your wholesale cart?")&&(ke(),window.location.reload())}),e&&(e.addEventListener("click",t=>{const o=t.target.closest(".btn-cart-remove");if(o){const r=o.getAttribute("data-id");Ie(r),window.location.reload();return}const i=t.target.closest(".cart-qty-plus");if(i){const r=i.getAttribute("data-id"),l=e.querySelector(`.cart-qty-input[data-id="${r}"]`);if(l){const c=parseInt(l.value,10)||1,u=parseInt(l.step,10)||1;Z(r,c+u),window.location.reload()}return}const s=t.target.closest(".cart-qty-minus");if(s){const r=s.getAttribute("data-id"),l=e.querySelector(`.cart-qty-input[data-id="${r}"]`);if(l){const c=parseInt(l.value,10)||1,u=parseInt(l.min,10)||1,m=parseInt(l.step,10)||1;c-m>=u?Z(r,c-m):Z(r,u),window.location.reload()}return}}),e.addEventListener("change",t=>{if(t.target.classList.contains("cart-qty-input")){const o=t.target.getAttribute("data-id"),i=parseInt(t.target.value,10);Z(o,i),window.location.reload()}}))}function Ge(){const e=G(),a=ie();return e.length===0?`
      <header class="about-hero">
        <div class="container">
          <nav class="breadcrumbs" aria-label="Breadcrumb">
            <a href="#/">Home</a>
            <span class="separator">/</span>
            <span class="current">Checkout</span>
          </nav>
          <h1 class="section-title">Wholesale Checkout</h1>
          <p class="section-subtitle">No items in your cart to checkout.</p>
        </div>
      </header>

      <section class="section">
        <div class="container text-center">
          <div class="empty-state">
            <div class="empty-state-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            </div>
            <h3 class="empty-state-title">Your Wholesale Cart is Empty</h3>
            <p class="empty-state-desc">
              Please add stationery, household items, accessories, or wholesale combo packs to your cart before proceeding to checkout.
            </p>
            <a href="#/shop" class="btn btn-primary btn-lg">
              <span>Explore Wholesale Catalogue</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>
      </section>
    `:`
    <header class="about-hero">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a>
          <span class="separator">/</span>
          <a href="#/cart">Cart</a>
          <span class="separator">/</span>
          <span class="current">Wholesale Checkout</span>
        </nav>
        <h1 class="section-title" style="margin-bottom: 0.5rem;">Wholesale Order Checkout</h1>
        <p class="section-subtitle">
          Enter your business invoicing details, dispatch destination, and select payment settlement method.
        </p>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <div id="checkout-main-container" class="cart-layout">
          <!-- Left: Checkout Form -->
          <div class="form-card">
            <form id="wholesale-checkout-form" novalidate>
              <!-- Step 1: Business & Contact Info -->
              <div style="margin-bottom: 2rem;">
                <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--color-navy); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                  <span style="display: inline-flex; align-items: center; justify-content: center; width: 26px; height: 26px; background: var(--color-navy); color: #fff; font-size: 0.85rem; font-weight: 700;">1</span>
                  Buyer & Business Information
                </h2>
                <p style="font-size: 0.875rem; color: var(--color-text-muted); margin-bottom: 1.25rem;">
                  Used for GST tax invoice generation and commercial shipping consignment.
                </p>

                <div class="form-row">
                  <div class="form-group">
                    <label for="checkout-name" class="form-label">Full Name / Authorized Contact <span class="required">*</span></label>
                    <input type="text" id="checkout-name" class="form-control" placeholder="e.g. Ramesh Kumar" required>
                    <span class="form-error-msg" id="err-checkout-name"></span>
                  </div>
                  <div class="form-group">
                    <label for="checkout-business" class="form-label">Shop / Business Name</label>
                    <input type="text" id="checkout-business" class="form-control" placeholder="e.g. Sri Balaji Stationery & Fancy">
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="checkout-phone" class="form-label">Mobile Number (WhatsApp updates) <span class="required">*</span></label>
                    <input type="tel" id="checkout-phone" class="form-control" placeholder="+91 98765 43210" required>
                    <span class="form-error-msg" id="err-checkout-phone"></span>
                  </div>
                  <div class="form-group">
                    <label for="checkout-email" class="form-label">Email Address (Invoice copy) <span class="required">*</span></label>
                    <input type="email" id="checkout-email" class="form-control" placeholder="buyer@business.com" required>
                    <span class="form-error-msg" id="err-checkout-email"></span>
                  </div>
                </div>

                <div class="form-group">
                  <label for="checkout-gstin" class="form-label">GSTIN (Optional for Input Tax Credit)</label>
                  <input type="text" id="checkout-gstin" class="form-control" placeholder="e.g. 33AAAAA0000A1Z5" style="text-transform: uppercase;">
                  <span style="font-size: 0.75rem; color: var(--color-text-muted); margin-top: 0.25rem; display: block;">If provided, GST tax invoice will be uploaded to GSTN portal for input tax claim.</span>
                </div>
              </div>

              <!-- Step 2: Shipping & Consignment Address -->
              <div style="margin-bottom: 2rem; padding-top: 1.5rem;">
                <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--color-navy); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                  <span style="display: inline-flex; align-items: center; justify-content: center; width: 26px; height: 26px; background: var(--color-navy); color: #fff; font-size: 0.85rem; font-weight: 700;">2</span>
                  Delivery & Warehouse Consignment Address
                </h2>
                <p style="font-size: 0.875rem; color: var(--color-text-muted); margin-bottom: 1.25rem;">
                  Where cartons and parcels should be delivered by our logistics partners.
                </p>

                <div class="form-group">
                  <label for="checkout-address" class="form-label">Premises Address / Shop Address <span class="required">*</span></label>
                  <textarea id="checkout-address" class="form-control" rows="2" placeholder="Building no., Street name, Landmark, Industrial area..." required></textarea>
                  <span class="form-error-msg" id="err-checkout-address"></span>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="checkout-city" class="form-label">City / Town <span class="required">*</span></label>
                    <input type="text" id="checkout-city" class="form-control" placeholder="e.g. Coimbatore" required>
                    <span class="form-error-msg" id="err-checkout-city"></span>
                  </div>
                  <div class="form-group">
                    <label for="checkout-state" class="form-label">State <span class="required">*</span></label>
                    <select id="checkout-state" class="form-control" required>
                      <option value="Tamil Nadu" selected>Tamil Nadu</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Other State">Other Pan-India State</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="checkout-pincode" class="form-label">Pincode <span class="required">*</span></label>
                    <input type="text" id="checkout-pincode" class="form-control" placeholder="e.g. 641001" required maxlength="6">
                    <span class="form-error-msg" id="err-checkout-pincode"></span>
                  </div>
                </div>
              </div>

              <!-- Step 3: Payment Settlement Method -->
              <div style="margin-bottom: 2rem; padding-top: 1.5rem;">
                <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--color-navy); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                  <span style="display: inline-flex; align-items: center; justify-content: center; width: 26px; height: 26px; background: var(--color-navy); color: #fff; font-size: 0.85rem; font-weight: 700;">3</span>
                  Wholesale Payment Method
                </h2>
                <p style="font-size: 0.875rem; color: var(--color-text-muted); margin-bottom: 1.25rem;">
                  Choose your settlement preference. (Demonstration mode: simulated checkout).
                </p>

                <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                  <label class="filter-checkbox-label" style="padding: 1rem; background: var(--color-bg-alt); cursor: pointer; display: flex; gap: 0.75rem; align-items: flex-start;">
                    <input type="radio" name="payment-method" value="neft" checked style="margin-top: 0.25rem;">
                    <div>
                      <strong style="color: var(--color-navy); font-size: 0.95rem;">Direct Bank Transfer (NEFT / RTGS / IMPS)</strong>
                      <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.2rem;">
                        Recommended for high-volume orders. Official Proforma Invoice and bank account coordinates provided upon order confirmation.
                      </div>
                    </div>
                  </label>

                  <label class="filter-checkbox-label" style="padding: 1rem; background: var(--color-bg-alt); cursor: pointer; display: flex; gap: 0.75rem; align-items: flex-start;">
                    <input type="radio" name="payment-method" value="upi" style="margin-top: 0.25rem;">
                    <div>
                      <strong style="color: var(--color-navy); font-size: 0.95rem;">Instant UPI / Corporate Net Banking</strong>
                      <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.2rem;">
                        Scan QR code or use VPA handle for instant digital clearance and priority next-morning dispatch.
                      </div>
                    </div>
                  </label>

                  <label class="filter-checkbox-label" style="padding: 1rem; background: var(--color-bg-alt); cursor: pointer; display: flex; gap: 0.75rem; align-items: flex-start;">
                    <input type="radio" name="payment-method" value="cod-advance" style="margin-top: 0.25rem;">
                    <div>
                      <strong style="color: var(--color-navy); font-size: 0.95rem;">Wholesale COD (20% Advance Token Freight)</strong>
                      <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.2rem;">
                        Pay 20% freight advance for transport booking; settle remaining 80% with transport courier on carton handover.
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <!-- Order Dispatch Notes -->
              <div class="form-group">
                <label for="checkout-notes" class="form-label">Special Packing or Dispatch Instructions (Optional)</label>
                <textarea id="checkout-notes" class="form-control" rows="2" placeholder="e.g. Preferred transport service (VRL, Kranti, Professional Couriers), gate timing, labeling instructions..."></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-submit-order" style="margin-top: 1.5rem;">
                <span>Confirm Wholesale Order (${h(a.grandTotal)})</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </button>

              <div style="margin-top: 1rem; text-align: center; font-size: 0.8rem; color: var(--color-text-muted);">
                Demonstration checkout environment. No real funds are charged. Simulated order confirmation receipt will be generated.
              </div>
            </form>
          </div>

          <!-- Right: Order Summary Sidebar -->
          <aside class="cart-summary-card">
            <h3 class="summary-title">Order Summary</h3>

            <div style="max-height: 280px; overflow-y: auto; margin-bottom: 1.5rem; padding-right: 0.25rem;">
              ${e.map(t=>`
                <div style="display: flex; gap: 0.75rem; align-items: center; padding: 0.6rem 0;">
                  <img src="${n(t.image)}" alt="${n(t.name)}" style="width: 44px; height: 44px; object-fit: cover; background: var(--color-bg-alt); flex-shrink: 0;">
                  <div style="flex: 1; min-width: 0;">
                    <div style="font-size: 0.85rem; font-weight: 600; color: var(--color-navy); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                      ${n(t.name)}
                    </div>
                    <div style="font-size: 0.75rem; color: var(--color-text-muted);">
                      Qty: ${t.quantity} pcs &times; ${h(t.unitPrice)}
                    </div>
                  </div>
                  <div style="font-size: 0.85rem; font-weight: 700; color: var(--color-navy); flex-shrink: 0;">
                    ${h(t.lineTotal)}
                  </div>
                </div>
              `).join("")}
            </div>

            <div class="summary-row">
              <span style="color: var(--color-text-muted);">Total Pieces:</span>
              <strong>${a.itemsCount} pcs</strong>
            </div>

            <div class="summary-row">
              <span style="color: var(--color-text-muted);">Wholesale Subtotal:</span>
              <strong>${h(a.subtotal)}</strong>
            </div>

            <div class="summary-row">
              <span style="color: var(--color-text-muted);">GST (18% B2B Tax):</span>
              <strong>${h(a.gst)}</strong>
            </div>

            <div class="summary-row">
              <span style="color: var(--color-text-muted);">Logistics & Freight:</span>
              <strong>${a.shipping===0?'<span style="color: var(--color-success);">FREE</span>':h(a.shipping)}</strong>
            </div>

            <div class="summary-row summary-total">
              <span>Grand Total:</span>
              <span>${h(a.grandTotal)}</span>
            </div>

            <div style="margin-top: 1.5rem; padding: 0.75rem; background: var(--color-bg-alt); font-size: 0.75rem; color: var(--color-text-muted); line-height: 1.5;">
              <strong style="color: var(--color-navy);">B2B Guarantee:</strong> All goods verified against quality standards prior to packing. GST input tax credit invoice included with shipment docket.
            </div>
          </aside>
        </div>
      </div>
    </section>
  `}function Oe(){const e=document.getElementById("wholesale-checkout-form"),a=document.getElementById("checkout-main-container");!e||!a||e.addEventListener("submit",t=>{var B,y,k,H,M,g,R,F,P,z,ne,le,ce,de,pe,ue,me;t.preventDefault(),["err-checkout-name","err-checkout-phone","err-checkout-email","err-checkout-address","err-checkout-city","err-checkout-pincode"].forEach(L=>{const he=document.getElementById(L);he&&(he.textContent="")}),e.querySelectorAll(".form-control").forEach(L=>L.classList.remove("error"));const i=(B=document.getElementById("checkout-name"))==null?void 0:B.value.trim(),s=(y=document.getElementById("checkout-business"))==null?void 0:y.value.trim(),r=(k=document.getElementById("checkout-phone"))==null?void 0:k.value.trim(),l=(H=document.getElementById("checkout-email"))==null?void 0:H.value.trim(),c=(M=document.getElementById("checkout-gstin"))==null?void 0:M.value.trim(),u=(g=document.getElementById("checkout-address"))==null?void 0:g.value.trim(),m=(R=document.getElementById("checkout-city"))==null?void 0:R.value.trim(),f=(F=document.getElementById("checkout-state"))==null?void 0:F.value,b=(P=document.getElementById("checkout-pincode"))==null?void 0:P.value.trim(),p=((z=e.querySelector('input[name="payment-method"]:checked'))==null?void 0:z.value)||"neft",x=(ne=document.getElementById("checkout-notes"))==null?void 0:ne.value.trim();let v=!1;if(i||((le=document.getElementById("checkout-name"))==null||le.classList.add("error"),document.getElementById("err-checkout-name").textContent="Please enter authorized contact name.",v=!0),(!r||r.length<10)&&((ce=document.getElementById("checkout-phone"))==null||ce.classList.add("error"),document.getElementById("err-checkout-phone").textContent="Please enter a valid 10-digit mobile number.",v=!0),(!l||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l))&&((de=document.getElementById("checkout-email"))==null||de.classList.add("error"),document.getElementById("err-checkout-email").textContent="Please enter a valid email address.",v=!0),u||((pe=document.getElementById("checkout-address"))==null||pe.classList.add("error"),document.getElementById("err-checkout-address").textContent="Please enter delivery address.",v=!0),m||((ue=document.getElementById("checkout-city"))==null||ue.classList.add("error"),document.getElementById("err-checkout-city").textContent="Please enter city.",v=!0),(!b||b.length<6)&&((me=document.getElementById("checkout-pincode"))==null||me.classList.add("error"),document.getElementById("err-checkout-pincode").textContent="Please enter valid 6-digit postal PIN code.",v=!0),v)return;const I=document.getElementById("btn-submit-order");I.innerHTML,I.disabled=!0,I.innerHTML=`
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin-icon"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle><path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="1"></path></svg>
      <span>Processing Wholesale Consignment...</span>
    `;const D=G(),S=ie(),A="JLI-"+Math.floor(1e5+Math.random()*9e5),O=new Date().toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});setTimeout(()=>{ke(),a.innerHTML=`
        <div style="grid-column: 1 / -1;" class="fade-up">
          <div class="alert-box alert-success" style="margin-bottom: 2rem;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <div>
              <strong style="font-size: 1.15rem;">Wholesale Order Received Successfully!</strong>
              <div style="margin-top: 0.25rem; font-size: 0.95rem;">
                Order Reference: <strong style="color: var(--color-navy); font-size: 1.05rem;"><code>${A}</code></strong> • Placed on ${O}
              </div>
            </div>
          </div>

          <div style="background: var(--color-white); border: 1px solid var(--color-border); padding: 2rem; margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: gap: 1rem; margin-bottom: 1.5rem; padding-bottom: 1.5rem;">
              <div>
                <div style="font-family: var(--font-heading); font-size: 1.35rem; font-weight: 800; color: var(--color-navy);">JOLI ENTERPRISES</div>
                <div style="font-size: 0.85rem; color: var(--color-text-muted);">B2B Wholesale Merchandise Consignment Note</div>
              </div>
              <div style="text-align: right;">
                <div style="font-size: 0.85rem; font-weight: 700; color: var(--color-navy);">Status: Confirmed (Simulated Demonstration)</div>
                <div style="font-size: 0.8rem; color: var(--color-text-muted);">Est. Dispatch: 24-48 Hours</div>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem; margin-bottom: 2rem; font-size: 0.875rem;">
              <div>
                <strong style="color: var(--color-navy); display: block; margin-bottom: 0.35rem;">Consignee Details:</strong>
                <div>${n(i)}</div>
                ${s?`<div>${n(s)}</div>`:""}
                <div>Phone: ${n(r)}</div>
                <div>Email: ${n(l)}</div>
                ${c?`<div style="margin-top: 0.25rem;"><span style="color: var(--color-gold); font-weight: 600;">GSTIN:</span> ${n(c)}</div>`:""}
              </div>

              <div>
                <strong style="color: var(--color-navy); display: block; margin-bottom: 0.35rem;">Delivery Destination:</strong>
                <div>${n(u)}</div>
                <div>${n(m)}, ${n(f)} — ${n(b)}</div>
              </div>

              <div>
                <strong style="color: var(--color-navy); display: block; margin-bottom: 0.35rem;">Payment Settlement:</strong>
                <div style="text-transform: capitalize; font-weight: 600;">${p.replace("-"," ")}</div>
                <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.25rem;">
                  Proforma reference sent to ${n(l)}.
                </div>
              </div>
            </div>

            <h4 style="font-size: 1rem; font-weight: 700; color: var(--color-navy); margin-bottom: 1rem;">Consignment Manifest (${S.itemsCount} pieces total)</h4>
            <div style="overflow-x: auto; margin-bottom: 1.5rem;">
              <table class="cart-table" style="width: 100%;">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>SKU</th>
                    <th>Quantity</th>
                    <th>Applied Tier Rate</th>
                    <th style="text-align: right;">Total</th>
                  </tr>
                </thead>
                <tbody>
                  ${D.map(L=>`
                    <tr>
                      <td style="font-weight: 600; color: var(--color-navy);">${n(L.name)}</td>
                      <td style="font-size: 0.8rem; color: var(--color-text-muted);"><code>${n(L.sku)}</code></td>
                      <td>${L.quantity} pieces</td>
                      <td>${h(L.unitPrice)}</td>
                      <td style="text-align: right; font-weight: 700;">${h(L.lineTotal)}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>

            <div style="display: flex; justify-content: flex-end;">
              <div style="width: 100%; max-width: 320px;">
                <div class="summary-row">
                  <span style="color: var(--color-text-muted);">Subtotal:</span>
                  <strong>${h(S.subtotal)}</strong>
                </div>
                <div class="summary-row">
                  <span style="color: var(--color-text-muted);">GST (18%):</span>
                  <strong>${h(S.gst)}</strong>
                </div>
                <div class="summary-row">
                  <span style="color: var(--color-text-muted);">Logistics:</span>
                  <strong>${S.shipping===0?"FREE":h(S.shipping)}</strong>
                </div>
                <div class="summary-row summary-total">
                  <span>Grand Total:</span>
                  <span>${h(S.grandTotal)}</span>
                </div>
              </div>
            </div>

            ${x?`
              <div style="margin-top: 1.5rem; padding: 1rem; background: var(--color-bg-alt); font-size: 0.85rem;">
                <strong style="color: var(--color-navy);">Dispatch Instructions:</strong>
                <div>${n(x)}</div>
              </div>
            `:""}
          </div>

          <div style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;">
            <button type="button" class="btn btn-outline btn-lg" onclick="window.print()">
              <span>Print Proforma Order Copy</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
            </button>

            <a href="#/shop" class="btn btn-primary btn-lg">
              <span>Continue Wholesale Shopping</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>
      `,window.scrollTo({top:0,behavior:"smooth"})},1200)})}function Ve(e={}){const a=q(),t=Y(),o=e.product||"",i=e.category||"";return`
    <header class="about-hero">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a>
          <span class="separator">/</span>
          <span class="current">Bulk Order Enquiry</span>
        </nav>
        <h1 class="section-title" style="margin-bottom: 0.5rem;">Request a Wholesale Bulk Quotation</h1>
        <p class="section-subtitle">
          For full carton orders, custom combo kit curation, institutional school supplies, or customized retailer merchandise.
        </p>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <!-- Left Column: Wholesale Desk Info -->
          <div class="contact-info-card fade-up">
            <h3>Joli Enterprises Wholesale Desk</h3>
            <p>
              We partner directly with retail shop owners, school stationery suppliers, gift boutique curators, and corporate resellers across India.
            </p>

            <div class="contact-channel-list">
              <div class="contact-channel">
                <div class="contact-channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                </div>
                <div>
                  <div class="contact-channel-title">Carton & Container Volumes</div>
                  <div class="contact-channel-value">Volume discounts beyond Tier 3</div>
                  <div class="contact-channel-hint">Special rates for orders exceeding 500+ units or 10+ cartons</div>
                </div>
              </div>

              <div class="contact-channel">
                <div class="contact-channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                </div>
                <div>
                  <div class="contact-channel-title">Custom Combo Assembling</div>
                  <div class="contact-channel-value">Exam Kits, Birthday Return Gifts</div>
                  <div class="contact-channel-hint">We assemble and shrink-wrap customized combos with your SKU codes</div>
                </div>
              </div>

              <div class="contact-channel">
                <div class="contact-channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <div class="contact-channel-title">Wholesale Desk Hotline</div>
                  <div class="contact-channel-value">+91 98765 43210 (Demo Contact)</div>
                  <div class="contact-channel-hint">Mon – Sat: 9:30 AM – 7:00 PM IST</div>
                </div>
              </div>
            </div>

            <div style="padding-top: 1.5rem; font-size: 0.825rem; color: #94A3B8; line-height: 1.5;">
              <strong style="color: var(--color-gold);">Demonstration Notice:</strong> Submitted enquiries demonstrate client-side validation and immediate proposal confirmation feedback for wholesale buyers.
            </div>
          </div>

          <!-- Right Column: Interactive Bulk Quotation Form -->
          <div class="form-card fade-up">
            <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--color-navy);">Wholesale Quote Request Form</h2>
            <p style="color: var(--color-text-muted); font-size: 0.9rem; margin-bottom: 1.75rem;">
              Fill in your bulk quantity specifications. Our B2B commercial team prepares written proforma proposals within 24 business hours.
            </p>

            <div id="bulk-alert-container"></div>

            <form id="bulk-enquiry-form" novalidate>
              <div class="form-row">
                <div class="form-group">
                  <label for="bulk-name" class="form-label">Buyer / Contact Name <span class="required">*</span></label>
                  <input type="text" id="bulk-name" class="form-control" placeholder="e.g. Suresh Chandran" required>
                  <span class="form-error-msg" id="err-bulk-name"></span>
                </div>
                <div class="form-group">
                  <label for="bulk-business" class="form-label">Shop / Enterprise Name (Optional)</label>
                  <input type="text" id="bulk-business" class="form-control" placeholder="e.g. Venus Novelties & Gifts">
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="bulk-phone" class="form-label">WhatsApp / Phone Number <span class="required">*</span></label>
                  <input type="tel" id="bulk-phone" class="form-control" placeholder="+91 98765 43210" required>
                  <span class="form-error-msg" id="err-bulk-phone"></span>
                </div>
                <div class="form-group">
                  <label for="bulk-email" class="form-label">Email Address (Optional)</label>
                  <input type="email" id="bulk-email" class="form-control" placeholder="contact@shopdomain.com">
                  <span class="form-error-msg" id="err-bulk-email"></span>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="bulk-category" class="form-label">Product Category <span class="required">*</span></label>
                  <select id="bulk-category" class="form-control" required>
                    <option value="">-- Select Category --</option>
                    ${t.map(s=>`
                      <option value="${s.slug}" ${i===s.slug?"selected":""}>
                        ${n(s.name)}
                      </option>
                    `).join("")}
                    <option value="mixed-catalogue">Mixed Categories / Multi-Product Container</option>
                  </select>
                  <span class="form-error-msg" id="err-bulk-category"></span>
                </div>

                <div class="form-group">
                  <label for="bulk-product" class="form-label">Specific Product (Optional)</label>
                  <select id="bulk-product" class="form-control">
                    <option value="All Items in Category">Any / Multiple Products in Selected Category</option>
                    ${a.map(s=>`
                      <option value="${n(s.name)}" ${o===s.name||o===s.id?"selected":""}>
                        ${n(s.name)} (${s.sku})
                      </option>
                    `).join("")}
                    <option value="Custom Combo Kit">Custom Tailored Combo / Back to School Kit</option>
                  </select>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="bulk-qty" class="form-label">Estimated Required Quantity <span class="required">*</span></label>
                  <input type="text" id="bulk-qty" class="form-control" placeholder="e.g. 500 pcs, 20 cartons, 1000 sets" required>
                  <span class="form-error-msg" id="err-bulk-qty"></span>
                </div>

                <div class="form-group">
                  <label for="bulk-timeline" class="form-label">Required Delivery Timeline</label>
                  <select id="bulk-timeline" class="form-control">
                    <option value="Immediate (1-3 Days)">Immediate Dispatch (Stock on hand)</option>
                    <option value="Within 1-2 Weeks">Within 1-2 Weeks</option>
                    <option value="Next Month (School Reopening / Festival)">Next Month (School Season / Festival Prep)</option>
                    <option value="Regular Recurring Monthly Contract">Regular Recurring Monthly Supply</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="bulk-notes" class="form-label">Specific Specifications & Packaging Preferences <span class="required">*</span></label>
                <textarea id="bulk-notes" class="form-control" rows="3" placeholder="Provide any details regarding preferred packaging (individual polybag, display box, master cartons), target purchase budget, or custom branding requirements..." required></textarea>
                <span class="form-error-msg" id="err-bulk-notes"></span>
              </div>

              <div class="form-group">
                <label class="filter-checkbox-label" style="display: flex; gap: 0.5rem; align-items: flex-start; cursor: pointer;">
                  <input type="checkbox" id="bulk-consent" checked style="margin-top: 0.25rem;">
                  <span style="font-size: 0.8rem; color: var(--color-text-muted);">
                    I consent to Joli Enterprises contacting me via WhatsApp or telephone regarding wholesale rate quotations and commercial terms.
                  </span>
                </label>
              </div>

              <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-bulk-submit">
                <span>Submit Wholesale Bulk Enquiry</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `}function je(){const e=document.getElementById("bulk-enquiry-form"),a=document.getElementById("bulk-alert-container"),t=document.getElementById("btn-bulk-submit");e&&e.addEventListener("submit",o=>{var v,w,I,D,S,A,O,B,y,k,H,M,g,R,F;o.preventDefault(),["err-bulk-name","err-bulk-phone","err-bulk-email","err-bulk-category","err-bulk-qty","err-bulk-notes"].forEach(P=>{const z=document.getElementById(P);z&&(z.textContent="")}),e.querySelectorAll(".form-control").forEach(P=>P.classList.remove("error")),a&&(a.innerHTML="");const s=(v=document.getElementById("bulk-name"))==null?void 0:v.value.trim(),r=(w=document.getElementById("bulk-business"))==null?void 0:w.value.trim(),l=(I=document.getElementById("bulk-phone"))==null?void 0:I.value.trim(),c=(D=document.getElementById("bulk-email"))==null?void 0:D.value.trim(),u=(S=document.getElementById("bulk-category"))==null?void 0:S.value,m=(A=document.getElementById("bulk-product"))==null?void 0:A.value,f=(O=document.getElementById("bulk-qty"))==null?void 0:O.value.trim();(B=document.getElementById("bulk-timeline"))==null||B.value;const b=(y=document.getElementById("bulk-notes"))==null?void 0:y.value.trim();let p=!1;if(s||((k=document.getElementById("bulk-name"))==null||k.classList.add("error"),document.getElementById("err-bulk-name").textContent="Please enter your name.",p=!0),(!l||l.length<10)&&((H=document.getElementById("bulk-phone"))==null||H.classList.add("error"),document.getElementById("err-bulk-phone").textContent="Please enter a valid 10-digit mobile number.",p=!0),c&&(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c)||((M=document.getElementById("bulk-email"))==null||M.classList.add("error"),document.getElementById("err-bulk-email").textContent="Please enter a valid email format.",p=!0)),u||((g=document.getElementById("bulk-category"))==null||g.classList.add("error"),document.getElementById("err-bulk-category").textContent="Please select a product category.",p=!0),f||((R=document.getElementById("bulk-qty"))==null||R.classList.add("error"),document.getElementById("err-bulk-qty").textContent="Please specify estimated quantity.",p=!0),b||((F=document.getElementById("bulk-notes"))==null||F.classList.add("error"),document.getElementById("err-bulk-notes").textContent="Please describe your packaging or product requirements.",p=!0),p)return;const x=t.innerHTML;t.disabled=!0,t.innerHTML=`
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin-icon"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle><path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="1"></path></svg>
      <span>Transmitting Wholesale Quotation Request...</span>
    `,setTimeout(()=>{t.disabled=!1,t.innerHTML=x;const P="QTE-"+Math.floor(1e4+Math.random()*9e4);a&&(a.innerHTML=`
          <div class="alert-box alert-success" style="margin-bottom: 1.5rem;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <div>
              <strong style="font-size: 1.05rem;">Quotation Request Registered! (Ref #${P})</strong>
              <div style="margin-top: 0.25rem; font-size: 0.9rem;">
                Thank you, <strong>${n(s)}</strong> ${r?`(${n(r)})`:""}. Your request for <strong>${n(f)}</strong> of <em>"${n(m)}"</em> has been recorded. Our wholesale sales representative will contact <strong>${n(l)}</strong> within 24 business hours.
              </div>
            </div>
          </div>
        `),e.reset(),window.scrollTo({top:e.offsetTop-100,behavior:"smooth"})},1100)})}function Je(){window.addEventListener("hashchange",ye),window.addEventListener("load",()=>{X(),ye()}),document.addEventListener("click",e=>{if(e.target.closest(".nav-link, .mobile-drawer-link, #brand-logo-link")){Ce(),Se();return}if(e.target.closest(".hero-scroll-cue")){e.preventDefault();const i=document.getElementById("about");i?i.scrollIntoView({behavior:"smooth"}):window.location.hash="#/about";return}const o=e.target.closest(".btn-card-add-cart");if(o){e.preventDefault(),e.stopPropagation();const i=o.getAttribute("data-product-id"),s=ae(i);s&&(re(s.id),Ke(`Added MOQ of ${s.moq} units (${s.name}) to wholesale cart!`))}}),X()}function Ue(){const e=window.location.hash.slice(1)||"/",[a,t]=e.split("?"),o=a.startsWith("/")?a:"/"+a,i={};if(t){const s=new URLSearchParams(t);for(const[r,l]of s.entries())i[r]=l}return{path:o,queryParams:i}}function ye(){const{path:e,queryParams:a}=Ue(),t=document.getElementById("app-content");if(!t)return;switch(Ce(),Se(),e.startsWith("/")?e.slice(1):e){case"":case"home":t.innerHTML=ge(),ve(),C("home");break;case"about":t.innerHTML=qe(),C("about");break;case"founder":t.innerHTML=Me(),C("founder");break;case"categories":t.innerHTML=Le(),C("categories");break;case"products":case"shop":window.location.hash="#/categories";break;case"shop":t.innerHTML=Qe(a),De(),C("products");break;case"bulk-deals":t.innerHTML=Ae(),C("bulk-deals");break;case"combos":t.innerHTML=$e(),C("combos");break;case"contact":t.innerHTML=Te(a),we(),C("contact");break;case"category":t.innerHTML=He(a),C("categories");break;case"product":t.innerHTML=Re(a),Fe(),C("products");break;case"cart":t.innerHTML=Ne(),We(),C("cart");break;case"checkout":t.innerHTML=Ge(),Oe(),C("cart");break;case"bulk-enquiry":t.innerHTML=Ve(a),je(),C("contact");break;default:t.innerHTML=ge(),ve(),C("home");break}window.scrollTo({top:0,behavior:"instant"}),X(),Ye()}function C(e){document.querySelectorAll(".nav-link").forEach(a=>{a.getAttribute("data-route")===e?a.classList.add("active"):a.classList.remove("active")}),document.querySelectorAll(".mobile-drawer-link").forEach(a=>{a.getAttribute("data-route")===e?a.classList.add("active"):a.classList.remove("active")})}function Ce(){const e=document.getElementById("mobile-drawer"),a=document.getElementById("mobile-drawer-backdrop");e&&e.classList.remove("open"),a&&a.classList.remove("open"),document.body.style.overflow=""}function Se(){const e=document.getElementById("search-overlay-modal"),a=document.getElementById("account-info-modal");e&&e.classList.remove("open"),a&&a.classList.remove("open")}function Ke(e){const a=document.getElementById("cart-toast"),t=document.getElementById("toast-message");a&&t&&(t.textContent=e,a.classList.add("show"),setTimeout(()=>{a.classList.remove("show")},3500))}function Ye(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.querySelectorAll(".fade-up").forEach(a=>a.classList.add("in-view"));return}const e=new IntersectionObserver(a=>{a.forEach(t=>{t.isIntersecting&&(t.target.classList.add("in-view"),e.unobserve(t.target))})},{rootMargin:"0px 0px -40px 0px",threshold:.1});document.querySelectorAll(".fade-up:not(.in-view)").forEach(a=>{e.observe(a)})}let T=null,W=null,_=null,Q=null,J=null;function Ze(){T=document.getElementById("enquiry-modal"),W=document.getElementById("modal-enquiry-form"),_=document.getElementById("modal-product-name"),Q=document.getElementById("modal-alert-box"),J=document.getElementById("modal-submit-btn");const e=document.getElementById("modal-close-btn"),a=document.getElementById("btn-quick-enquiry"),t=document.getElementById("btn-mobile-enquiry");a&&a.addEventListener("click",()=>fe()),t&&t.addEventListener("click",()=>{const o=document.getElementById("mobile-drawer"),i=document.getElementById("mobile-drawer-backdrop");o&&o.classList.remove("open"),i&&i.classList.remove("open"),fe()}),e&&e.addEventListener("click",se),T&&T.addEventListener("click",o=>{o.target===T&&se()}),document.addEventListener("keydown",o=>{o.key==="Escape"&&T&&T.classList.contains("open")&&se()}),W&&W.addEventListener("submit",_e)}function fe(e=""){T&&(Q&&(Q.style.display="none",Q.className="alert-box",Q.innerHTML=""),Be(),_&&(_.value=e||""),T.classList.add("open"),document.body.style.overflow="hidden",setTimeout(()=>{const a=e?document.getElementById("modal-full-name"):_||document.getElementById("modal-full-name");a&&a.focus()},100))}function se(){T&&(T.classList.remove("open"),document.body.style.overflow="")}function Be(){["err-modal-name","err-modal-email","err-modal-message"].forEach(t=>{const o=document.getElementById(t);o&&(o.textContent="")});const a=W==null?void 0:W.querySelectorAll(".form-control");a==null||a.forEach(t=>t.classList.remove("error"))}function _e(e){e.preventDefault(),Be();const a=document.getElementById("modal-full-name"),t=document.getElementById("modal-email"),o=document.getElementById("modal-message");let i=!1;a.value.trim()||(a.classList.add("error"),document.getElementById("err-modal-name").textContent="Please enter your name.",i=!0);const s=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(t.value.trim()?s.test(t.value.trim())||(t.classList.add("error"),document.getElementById("err-modal-email").textContent="Please provide a valid email format.",i=!0):(t.classList.add("error"),document.getElementById("err-modal-email").textContent="Please enter your business email.",i=!0),o.value.trim()||(o.classList.add("error"),document.getElementById("err-modal-message").textContent="Please specify your wholesale enquiry details.",i=!0),i)return;const r=J.innerHTML;J.disabled=!0,J.innerHTML=`
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin-icon"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle><path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="1"></path></svg>
    <span>Processing Demo Enquiry...</span>
  `,setTimeout(()=>{J.disabled=!1,J.innerHTML=r,Q&&(Q.style.display="block",Q.className="alert-box alert-success",Q.innerHTML=`
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        <div>
          <strong>Demo Enquiry Received!</strong><br>
          Thank you, ${a.value.trim()}. This simulated enquiry has been logged successfully for review. (Client-side demo only).
        </div>
      `),W.reset()},1e3)}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("site-header");window.addEventListener("scroll",()=>{window.scrollY>20?e==null||e.classList.add("scrolled"):e==null||e.classList.remove("scrolled")},{passive:!0});const a=document.getElementById("mobile-toggle"),t=document.getElementById("mobile-drawer"),o=document.getElementById("mobile-drawer-backdrop"),i=document.getElementById("mobile-drawer-close");function s(){t==null||t.classList.add("open"),o==null||o.classList.add("open"),document.body.style.overflow="hidden"}function r(){t==null||t.classList.remove("open"),o==null||o.classList.remove("open"),document.body.style.overflow=""}a==null||a.addEventListener("click",s),i==null||i.addEventListener("click",r),o==null||o.addEventListener("click",r),t==null||t.querySelectorAll(".mobile-drawer-link").forEach(y=>{y.addEventListener("click",r)});const l=document.getElementById("btn-header-search"),c=document.getElementById("search-overlay-modal"),u=document.getElementById("overlay-search-input"),m=document.getElementById("search-overlay-results"),f=document.getElementById("close-search-overlay");function b(){c==null||c.classList.add("open"),document.body.style.overflow="hidden",setTimeout(()=>{u==null||u.focus(),x((u==null?void 0:u.value)||"")},100)}function p(){c==null||c.classList.remove("open"),document.body.style.overflow="",u&&(u.value=""),m&&(m.innerHTML="")}l==null||l.addEventListener("click",b),f==null||f.addEventListener("click",p),c==null||c.addEventListener("click",y=>{y.target===c&&p()});function x(y){if(!m)return;const k=y.trim().toLowerCase(),H=q();if(!k){m.innerHTML=`
        <div style="padding: 1rem 0; font-size: 0.85rem; color: var(--color-text-muted);">
          Suggested searches: <em>pencils</em>, <em>notebooks</em>, <em>claw clips</em>, <em>cables</em>, <em>hooks</em>, <em>combos</em>...
        </div>
      `;return}const M=H.filter(g=>{const R=g.name.toLowerCase().includes(k),F=(g.categoryName||"").toLowerCase().includes(k),P=(g.sku||"").toLowerCase().includes(k),z=(g.shortDescription||"").toLowerCase().includes(k);return R||F||P||z}).slice(0,6);if(M.length===0){m.innerHTML=`
        <div style="padding: 1.5rem 0; text-align: center; color: var(--color-text-muted); font-size: 0.9rem;">
          No matching wholesale products found for "<strong>${n(k)}</strong>".
          <div style="margin-top: 0.5rem;">
            <a href="#/shop" style="color: var(--color-gold); font-weight: 700;">Browse All Products &rarr;</a>
          </div>
        </div>
      `;return}m.innerHTML=M.map(g=>`
      <a href="#/product?id=${encodeURIComponent(g.id)}" class="search-result-item" data-search-item>
        <img src="${n(g.images[0])}" alt="${n(g.name)}" class="search-result-thumb">
        <div style="flex: 1; min-width: 0;">
          <div style="font-weight: 700; color: var(--color-navy); font-size: 0.925rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            ${n(g.name)}
          </div>
          <div style="font-size: 0.785rem; color: var(--color-text-muted);">
            ${n(g.categoryName)} &bull; MOQ: ${g.moq} pcs &bull; <code>${n(g.sku)}</code>
          </div>
        </div>
        <div style="font-weight: 800; color: var(--color-navy); font-size: 0.925rem; flex-shrink: 0;">
          ${h(g.unitPrice)}
        </div>
      </a>
    `).join("")+`
      <div style="margin-top: 1rem; padding-top: 0.75rem; text-align: center;">
        <a href="#/shop?search=${encodeURIComponent(k)}" class="btn btn-primary btn-block btn-sm">
          <span>View All Results in Shop (${M.length}+) &rarr;</span>
        </a>
      </div>
    `,m.querySelectorAll("[data-search-item]").forEach(g=>{g.addEventListener("click",p)})}u==null||u.addEventListener("input",y=>{x(y.target.value)}),u==null||u.addEventListener("keydown",y=>{if(y.key==="Enter"){y.preventDefault();const k=u.value.trim();k&&(window.location.hash=`#/shop?search=${encodeURIComponent(k)}`,p())}});const v=document.getElementById("btn-header-account"),w=document.getElementById("account-info-modal"),I=document.getElementById("close-account-modal"),D=document.getElementById("account-modal-backdrop"),S=document.getElementById("btn-account-view-cart"),A=document.getElementById("btn-account-bulk-quote");function O(){w==null||w.classList.add("open"),document.body.style.overflow="hidden"}function B(){w==null||w.classList.remove("open"),document.body.style.overflow=""}v==null||v.addEventListener("click",O),I==null||I.addEventListener("click",B),D==null||D.addEventListener("click",B),S==null||S.addEventListener("click",B),A==null||A.addEventListener("click",B),document.addEventListener("keydown",y=>{y.key==="Escape"&&(c!=null&&c.classList.contains("open")&&p(),w!=null&&w.classList.contains("open")&&B(),t!=null&&t.classList.contains("open")&&r())}),Ze(),Je()});
