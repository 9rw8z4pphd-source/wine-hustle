export const GRAPES = {
  sangiovese: {
    id: "sangiovese",
    name: "Sangiovese",
    origin: "Tuscany, Italy",
    stats: { acidity: 5, tannin: 4, body: 3, alcohol: 3 },
    technical: {
      parentage: "Ciliegiolo x Calabrese di Montenuovo",
      soil_affinity: "Galestro & Albarese (limestone)",
      clones: "Grosso (Montalcino), Piccolo (Chianti)",
      phenolics: "High anthocyanins but low color stability; turns garnet/brick early."
    },
    summary: "The 'Blood of Jove.' High-acid, site-sensitive, late ripening.",
    description:
      "A high-acid, late-ripening variety that is notoriously site-sensitive...",
    flavors: ["Sour Red Cherry", "Roasted Tomato", "Potpourri", "Balsamic", "Leather", "Flint"],
    style: "Structural & Savory",
    synonyms: []
  },

  nebbiolo: {
    id: "nebbiolo",
    name: "Nebbiolo",
    origin: "Piedmont, Italy",
    stats: { acidity: 5, tannin: 5, body: 4, alcohol: 4 },
    technical: {
      parentage: "Ancient; parent to Freisa and Vespolina",
      soil_affinity: "Calcareous Marl & Sandstone",
      clones: "Lampia, Michet, Rosé",
      phenolics: "Extremely high tannins and acids; low color density."
    },
    summary: "The most demanding grape in viticulture.",
    description: "First to bud, last to harvest; demands steep, south-facing slopes...",
    flavors: ["Damask Rose", "Tar", "Truffle", "Dried Cranberry", "Anise", "Orange Peel"],
    style: "Tannic & Ethereal",
    synonyms: []
  },

  "pinot-noir": {
    id: "pinot-noir",
    name: "Pinot Noir",
    origin: "Burgundy, France",
    stats: { acidity: 4, tannin: 2, body: 2, alcohol: 3 },
    technical: {
      parentage: "Ancient; parent to Chardonnay and Gamay",
      soil_affinity: "Limestone (Kimmeridgian/Oxfordian)",
      clones: "Dijon (115, 667, 777), Pommard, Mt. Eden",
      phenolics: "Thin skins; low tannins; high aromatic volatility."
    },
    summary: "The 'Heartbreak Grape.' Pure terroir translator.",
    description: "Mutation-prone; reflects micro-terroir; needs cool climates...",
    flavors: ["Wild Raspberry", "Hibiscus", "Damp Earth", "Clove", "Game"],
    style: "Elegant & Silky",
    synonyms: []
  }
};