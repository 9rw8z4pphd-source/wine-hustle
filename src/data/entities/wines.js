export const WINES = {
  barolo_docg: {
    id: "barolo_docg",
    name: "Barolo DOCG",
    region_id: "piedmont",
    grape_ids: ["nebbiolo"],
    pro: "The 'King of Wines'...",
    tech_specs: {
      aging: "38 months (18 in wood); Riserva requires 62 months.",
      terroir: "Tortonian soil (La Morra/Barolo) vs Helvetian (Serralunga/Monforte).",
      elevation: "250m - 450m on south-facing slopes."
    },
    subTypes: [
      { level: "Commune: Serralunga d'Alba", rule: "Iron-rich soils; most tannic and long-lived." },
      { level: "Commune: La Morra", rule: "Manganese-rich soils; softer, more perfumed style." }
    ]
  },

  barbaresco_docg: {
    id: "barbaresco_docg",
    name: "Barbaresco DOCG",
    region_id: "piedmont",
    grape_ids: ["nebbiolo"],
    pro: "Often more elegant than Barolo...",
    tech_specs: { aging: "26 months (9 in wood); Riserva 50 months." }
  },

  brunello_montalcino_docg: {
    id: "brunello_montalcino_docg",
    name: "Brunello di Montalcino DOCG",
    region_id: "tuscany",
    grape_ids: ["sangiovese"],
    pro: "The pinnacle of Sangiovese...",
    tech_specs: { aging: "5 years total (2 in oak, 4 months in bottle).", requirement: "100% Sangiovese." }
  },

  pauillac_left_bank: {
    id: "pauillac_left_bank",
    name: "Pauillac (Left Bank)",
    region_id: "bordeaux",
    grape_ids: ["cabernet-sauvignon"], // (add entity later)
    pro: "The 'Powerhouse' of Bordeaux...",
    tech_specs: { soil: "Deep Garonne gravel; perfect drainage for Cabernet." }
  }
};