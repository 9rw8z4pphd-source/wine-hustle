export const GRAPES = {
  sangiovese: {
    id: "sangiovese",
    name: "Sangiovese",
    origin: "Tuscany, Italy",
    stats: { acidity: 5, tannin: 4, body: 3, alcohol: 3 },
    technical: {
      parentage: "Ciliegiolo x Calabrese di Montenuovo",
      soil_affinity: "Galestro and albarese limestone",
      clones: "Grosso (Montalcino), Piccolo (Chianti)",
      phenolics: "High anthocyanins but moderate color stability; evolves quickly to garnet tones."
    },
    summary: "High-acid, late ripening, and extremely site-sensitive.",
    description:
      "Sangiovese delivers savory red fruit and firm structure, with quality strongly linked to clone, yield control, and slope exposure.",
    flavors: ["Sour Cherry", "Tomato Leaf", "Dried Herbs", "Balsamic", "Leather", "Brick Dust"],
    style: "Structural and Savory",
    synonyms: []
  },

  nebbiolo: {
    id: "nebbiolo",
    name: "Nebbiolo",
    origin: "Piedmont, Italy",
    stats: { acidity: 5, tannin: 5, body: 4, alcohol: 4 },
    technical: {
      parentage: "Ancient Piedmont variety",
      soil_affinity: "Calcareous marl and sandstone",
      clones: "Lampia, Michet, Rosé",
      phenolics: "Very high tannin and acidity with relatively pale color."
    },
    summary: "Demanding grape with huge aging potential and aromatic lift.",
    description: "Nebbiolo needs precise mesoclimate and full ripeness; top examples show rose, tar, citrus peel, and truffle over time.",
    flavors: ["Rose", "Tar", "Anise", "Dried Cherry", "Orange Peel", "Truffle"],
    style: "Tannic and Perfumed",
    synonyms: []
  },

  "pinot-noir": {
    id: "pinot-noir",
    name: "Pinot Noir",
    origin: "Burgundy, France",
    stats: { acidity: 4, tannin: 2, body: 2, alcohol: 3 },
    technical: {
      parentage: "Ancient variety; parent to Chardonnay and Gamay",
      soil_affinity: "Limestone and marl",
      clones: "Dijon 115/667/777, Pommard, Mt. Eden",
      phenolics: "Thin skins, lower tannin, high aromatic detail.",
      climate_fit: "Most successful in cool to moderate climates.",
      wset_style_core: "Delicate structure with red-fruit and savory expression; oak use must stay restrained."
    },
    summary: "Transparent grape that mirrors site and farming choices.",
    description: "Pinot Noir performs best in cool to moderate climates and punishes excess heat, overcropping, and careless extraction.",
    flavors: ["Raspberry", "Red Cherry", "Forest Floor", "Clove", "Rose Petal"],
    style: "Elegant and Silky",
    synonyms: []
  },

  "cabernet-sauvignon": {
    id: "cabernet-sauvignon",
    name: "Cabernet Sauvignon",
    origin: "Bordeaux, France",
    stats: { acidity: 3, tannin: 5, body: 5, alcohol: 4 },
    technical: {
      parentage: "Cabernet Franc x Sauvignon Blanc",
      soil_affinity: "Gravel, well-drained alluvial benches",
      clones: "337, 191, 15",
      phenolics: "Small berries with thick skins and high tannin load.",
      climate_fit: "Needs moderate to warm conditions for full ripeness.",
      wset_style_core: "Black fruit, high tannin/acid structure, often oak-aged for longevity."
    },
    summary: "Backbone grape for structured, ageworthy reds.",
    description: "Late budding and ripening with strong disease resistance; excels where sunlight allows full tannin ripeness.",
    flavors: ["Blackcurrant", "Cedar", "Graphite", "Mint", "Tobacco"],
    style: "Powerful and Structured",
    synonyms: []
  },

  merlot: {
    id: "merlot",
    name: "Merlot",
    origin: "Bordeaux, France",
    stats: { acidity: 3, tannin: 3, body: 4, alcohol: 4 },
    technical: {
      parentage: "Magdeleine Noire des Charentes x Cabernet Franc",
      soil_affinity: "Clay and cool moisture-retentive sites",
      clones: "181, 343, 348",
      phenolics: "Softer tannin architecture than Cabernet Sauvignon.",
      wset_style_core: "Generally less aromatic and less tannic than Cabernet Sauvignon, often fuller in body."
    },
    summary: "Plush texture grape that rounds blends and can stand alone.",
    description: "Merlot ripens earlier than Cabernet Sauvignon and can offer plush fruit without sacrificing ageability in top terroirs.",
    flavors: ["Plum", "Black Cherry", "Cocoa", "Bay Leaf", "Mocha"],
    style: "Supple and Layered",
    synonyms: []
  },

  syrah: {
    id: "syrah",
    name: "Syrah",
    origin: "Northern Rhone, France",
    stats: { acidity: 3, tannin: 4, body: 5, alcohol: 4 },
    technical: {
      parentage: "Dureza x Mondeuse Blanche",
      soil_affinity: "Granite, schist, and iron-rich clays",
      clones: "174, 470, 877",
      phenolics: "High color density and robust tannin with spicy phenolics.",
      climate_fit: "Moderate to warm sites; struggles in cool climates.",
      wset_style_core: "Moderate climates show pepper/meat notes; warmer sites show sweeter spice and riper fruit."
    },
    summary: "Dark-fruited red with savory spice and structure.",
    description: "Syrah thrives in sunny but not excessive heat, preserving pepper and floral notes when nights remain cool.",
    flavors: ["Blackberry", "Black Olive", "Violet", "Pepper", "Smoked Meat"],
    style: "Dense and Savory",
    synonyms: ["Shiraz"]
  },

  grenache: {
    id: "grenache",
    name: "Grenache",
    origin: "Aragon, Spain",
    stats: { acidity: 2, tannin: 2, body: 4, alcohol: 5 },
    technical: {
      parentage: "Ancient Iberian variety",
      soil_affinity: "Stoney galets, schist, and dry sandy soils",
      clones: "ENTAV-INRA 136, 362",
      phenolics: "Moderate color, low tannin, high sugar accumulation.",
      climate_fit: "Requires warm to hot climates for full ripeness.",
      wset_style_core: "Red-fruit and spice profile, high alcohol potential, often blended for structure."
    },
    summary: "Warm-climate specialist that brings ripeness and perfume.",
    description: "Grenache is drought tolerant and often blended with Syrah and Mourvedre for balance and complexity.",
    flavors: ["Strawberry", "Red Plum", "White Pepper", "Orange Zest", "Dried Herbs"],
    style: "Generous and Spicy",
    synonyms: ["Garnacha"]
  },

  tempranillo: {
    id: "tempranillo",
    name: "Tempranillo",
    origin: "Rioja, Spain",
    stats: { acidity: 3, tannin: 3, body: 4, alcohol: 4 },
    technical: {
      parentage: "Ancient Iberian variety",
      soil_affinity: "Clay-limestone and alluvial terraces",
      clones: "CENIT, RJ-43",
      phenolics: "Moderate acidity with fine tannins; oak aging shapes profile strongly."
    },
    summary: "Spanish flagship red with fruit, leather, and cedar evolution.",
    description: "Tempranillo adapts to both Atlantic and continental zones and is often defined by aging category.",
    flavors: ["Red Cherry", "Plum", "Tobacco", "Coconut", "Leather"],
    style: "Classic and Oak-Friendly",
    synonyms: ["Tinta del Pais", "Tinto Fino"]
  },

  chardonnay: {
    id: "chardonnay",
    name: "Chardonnay",
    origin: "Burgundy, France",
    stats: { acidity: 4, tannin: 1, body: 4, alcohol: 4 },
    technical: {
      parentage: "Pinot x Gouais Blanc",
      soil_affinity: "Limestone, chalk, and clay-limestone",
      clones: "95, 96, 548, Mendoza",
      phenolics: "Neutral aromatic base that transmits site and cellar decisions.",
      climate_fit: "Performs across cool, moderate, and warm regions with large style variation.",
      wset_style_core: "Not strongly aromatic; style is heavily shaped by MLF, lees, and oak handling."
    },
    summary: "Global benchmark white for terroir and winemaking expression.",
    description: "Chardonnay ranges from linear, mineral styles to richer oak-influenced wines depending on climate and elevage.",
    flavors: ["Lemon", "Green Apple", "Hazelnut", "Brioche", "Stone Fruit"],
    style: "Versatile and Textural",
    synonyms: []
  },

  "sauvignon-blanc": {
    id: "sauvignon-blanc",
    name: "Sauvignon Blanc",
    origin: "Loire and Bordeaux, France",
    stats: { acidity: 5, tannin: 1, body: 2, alcohol: 3 },
    technical: {
      parentage: "Ancient western French variety",
      soil_affinity: "Silex, limestone, and free-draining gravels",
      clones: "1-Davis, 376, 530",
      phenolics: "High thiol potential for pungent citrus and herbal notes.",
      climate_fit: "Best in cool to moderate climates to preserve aromatic precision.",
      wset_style_core: "Typically high acid and dry; most styles are unoaked and best consumed young."
    },
    summary: "Aromatic white built on high acidity and freshness.",
    description: "Sauvignon Blanc can be sharply mineral or intensely tropical depending on climate and harvest timing.",
    flavors: ["Grapefruit", "Gooseberry", "Cut Grass", "Passionfruit", "Wet Stone"],
    style: "Zesty and Aromatic",
    synonyms: []
  },

  riesling: {
    id: "riesling",
    name: "Riesling",
    origin: "Rhine Valley, Germany",
    stats: { acidity: 5, tannin: 1, body: 2, alcohol: 2 },
    technical: {
      parentage: "Heunisch x wild vine lineage",
      soil_affinity: "Slate, quartzite, and limestone",
      clones: "239 Gm, 110, 198",
      phenolics: "Very high natural acidity and strong aromatic precursor load.",
      climate_fit: "Thrives in cool to moderate climates with long ripening seasons.",
      wset_style_core: "Can produce dry to lusciously sweet wines and ages with honeyed, toasty complexity."
    },
    summary: "Precision grape with unmatched acid spine and longevity.",
    description: "Riesling communicates site with clarity and can produce dry to lusciously sweet styles with excellent ageability.",
    flavors: ["Lime", "Green Apple", "White Peach", "Jasmine", "Petrol"],
    style: "Linear and Electric",
    synonyms: []
  },

  malbec: {
    id: "malbec",
    name: "Malbec",
    origin: "Southwest France",
    stats: { acidity: 3, tannin: 4, body: 5, alcohol: 4 },
    technical: {
      parentage: "Prunelard x Magdeleine Noire",
      soil_affinity: "Alluvial stones and calcareous foothill soils",
      clones: "595, 598, 46",
      phenolics: "Deep color and broad mid-palate texture."
    },
    summary: "Andean icon with dark fruit and floral lift at altitude.",
    description: "Malbec reaches freshness and definition in high-altitude vineyards where UV intensity improves skin maturity.",
    flavors: ["Black Plum", "Violet", "Blueberry", "Cocoa", "Sweet Spice"],
    style: "Rich and Floral",
    synonyms: ["Cot"]
  },

  "chenin-blanc": {
    id: "chenin-blanc",
    name: "Chenin Blanc",
    origin: "Loire Valley, France",
    stats: { acidity: 5, tannin: 1, body: 3, alcohol: 3 },
    technical: {
      parentage: "Ancient Loire variety",
      soil_affinity: "Tuffeau limestone and schist",
      clones: "INRA 220, 278",
      phenolics: "High acidity with waxy texture; wide sugar ripeness window."
    },
    summary: "Multi-style white from bone dry to lusciously sweet.",
    description: "Chenin Blanc thrives in moderate climates and can express honeyed complexity while retaining fresh acidity.",
    flavors: ["Quince", "Pear", "Chamomile", "Honey", "Wet Wool"],
    style: "High-Acid and Textural",
    synonyms: []
  },

  albarino: {
    id: "albarino",
    name: "Albarino",
    origin: "Rias Baixas, Spain",
    stats: { acidity: 4, tannin: 1, body: 2, alcohol: 3 },
    technical: {
      parentage: "Ancient Atlantic Iberian variety",
      soil_affinity: "Granite sands and alluvial coastal soils",
      clones: "Massal selections dominate",
      phenolics: "Thick skins help in humid climates and preserve aromatic purity."
    },
    summary: "Atlantic white with saline lift and citrus intensity.",
    description: "Albarino handles humidity well and shines with ocean-influenced acidity and bright stone fruit.",
    flavors: ["Lemon Peel", "White Peach", "Nectarine", "Sea Spray", "Orange Blossom"],
    style: "Bright and Saline",
    synonyms: ["Alvarinho"]
  }
};
