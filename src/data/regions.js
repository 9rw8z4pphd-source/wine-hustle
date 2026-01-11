// src/data/regions.js
export const REGIONS_DATA = [
  {
    id: "italy",
    name: "Italy",
    description: "From the foggy hills of the North to the volcanic South.",
    subRegions: [
      { 
        name: "Tuscany", 
        methods: "Sangiovese focus. Hierarchy is based on aging and specific zones.", 
        wines: [
          { 
            name: "The Chianti Family", 
            grape: "Sangiovese", 
            pro: "The quality ladder: Classico is the historic heart; Riserva requires 24 months aging.",
            food: ["Pizza", "Bolognese", "Bistecca"],
            subTypes: ["Chianti DOCG", "Chianti Classico", "Chianti Classico Riserva", "Gran Selezione"]
          },
          { 
            name: "Brunello di Montalcino", 
            grape: "Sangiovese Grosso", 
            pro: "100% Sangiovese. A powerhouse requiring 5 years of aging before release.", 
            food: ["Roasted Lamb", "Wild Boar"],
            subTypes: ["Rosso di Montalcino", "Brunello", "Brunello Riserva"]
          }
        ] 
      },
      { 
        name: "Piedmont", 
        methods: "Focus on Nebbiolo and long aging in large neutral oak (Botte).", 
        wines: [
          { name: "Barolo", grape: "Nebbiolo", pro: "The King. Masculine and structured. Needs air and fat.", food: ["Truffle", "Ribeye"] },
          { name: "Barbaresco", grape: "Nebbiolo", pro: "The Queen. More elegant and approachable than Barolo.", food: ["Duck", "Mushroom"] },
          { name: "Gavi", grape: "Cortese", pro: "Fresh, citrusy, and mineral white wine.", food: ["Seafood"] }
        ] 
      },
      { 
        name: "Veneto", 
        methods: "Specialist in the Appassimento (dried grape) technique.", 
        wines: [
          { name: "Amarone", grape: "Corvina Blend", pro: "Intense, raisinated, and 15%+ alcohol.", food: ["Blue Cheese", "Venison"] },
          { name: "Prosecco", grape: "Glera", pro: "Fresh bubbles. DOCG is the higher quality hilly region.", food: ["Aperitivo"], subTypes: ["DOC", "DOCG Superiore"] }
        ] 
      },
      { name: "Sicily", methods: "Volcanic soils.", wines: [{ name: "Etna Rosso", grape: "Nerello Mascalese", pro: "Smoky and elegant.", food: ["Tuna"] }] },
      { name: "Puglia", methods: "Hot climate.", wines: [{ name: "Primitivo", grape: "Primitivo", pro: "Bold and jammy.", food: ["BBQ"] }] },
      { name: "Alto Adige", methods: "Alpine cooling.", wines: [{ name: "Pinot Grigio", grape: "Pinot Grigio", pro: "Zesty and mineral.", food: ["Salads"] }] }
    ]
  },
  {
    id: "france",
    name: "France",
    description: "The global gold standard for terroir-driven wine.",
    subRegions: [
      { 
        name: "Burgundy", 
        methods: "Hierarchy based on specific vineyard plots (Climats).", 
        wines: [
          { 
            name: "Côte d'Or Reds", 
            grape: "Pinot Noir", 
            pro: "The progression of soil: Higher tiers equal more complexity and aging potential.", 
            food: ["Duck", "Chicken"],
            subTypes: ["Bourgogne (Regional)", "Village", "Premier Cru", "Grand Cru"]
          },
          { name: "Chablis", grape: "Chardonnay", pro: "Bone-dry, unoaked, and saline.", food: ["Oysters"], subTypes: ["Petit Chablis", "Chablis", "1er Cru", "Grand Cru"] }
        ] 
      },
      { 
        name: "Bordeaux", 
        methods: "Left Bank (Gravel/Cabernet) vs Right Bank (Clay/Merlot).", 
        wines: [
          { name: "Left Bank", grape: "Cabernet Blend", pro: "Structured and cedar-scented.", food: ["Steak", "Lamb"], subTypes: ["Médoc", "Pauillac", "Margaux"] },
          { name: "Right Bank", grape: "Merlot Blend", pro: "Velvety and plum-forward.", food: ["Roast Beef"], subTypes: ["St-Émilion", "Pomerol"] }
        ] 
      }
    ]
  },
  {
    id: "germany",
    name: "Germany",
    description: "Extreme cooling and precision acidity.",
    subRegions: [
      { 
        name: "Mosel", 
        methods: "Steep slate slopes. Classification by ripeness (Pradikat).", 
        wines: [
          { 
            name: "Riesling Hierarchy", 
            grape: "Riesling", 
            pro: "A scale from bone-dry to dessert sweet.", 
            food: ["Thai", "Spicy Fish"],
            subTypes: ["Kabinett (Light)", "Spätlese (Late)", "Auslese (Select)"] 
          }
        ] 
      }
    ]
  }
];
