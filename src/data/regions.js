// src/data/regions.js
export const REGIONS_DATA = [
  {
    id: "italy",
    name: "Italy",
    description: "The world's most diverse wine landscape.",
    subRegions: [
      { 
        name: "Tuscany", 
        methods: "Sangiovese focus on Galestro (schist) and Alberese (limestone) soils.", 
        wines: [
          { 
            name: "The Chianti Family", 
            grape: "Sangiovese", 
            pro: "Quality increases with aging and stricter zones. Classico is the historic heart.",
            food: ["Pizza", "Bolognese", "Bistecca"],
            subTypes: ["Chianti DOCG", "Chianti Classico", "Chianti Classico Riserva", "Gran Selezione"]
          },
          { 
            name: "Brunello di Montalcino", 
            grape: "Sangiovese Grosso", 
            pro: "100% Sangiovese. A powerhouse requiring 5 years of aging. Masculine and earthy.", 
            food: ["Wild Boar", "Roasted Lamb"],
            subTypes: ["Rosso di Montalcino", "Brunello", "Brunello Riserva"]
          },
          { name: "Bolgheri", grape: "Cabernet Blend", pro: "The 'Super Tuscans'. International style, polished and expensive.", food: ["Ribeye Steak"] }
        ] 
      },
      { 
        name: "Piedmont", 
        methods: "Traditional long maceration in neutral 'Botte' oak. High-altitude Alpine air.", 
        wines: [
          { name: "Barolo", grape: "Nebbiolo", pro: "The King. Masculine, high tannin/acid. Needs age and air.", food: ["Truffle", "Ribeye"], subTypes: ["Barolo", "Barolo Riserva", "Single Vineyard (Cru)"] },
          { name: "Barbaresco", grape: "Nebbiolo", pro: "The Queen. More elegant and approachable than Barolo.", food: ["Duck", "Mushroom"] },
          { name: "Gavi", grape: "Cortese", pro: "Italy's Chablis. Bone-dry, lime, and mineral.", food: ["Seafood", "Branzino"] },
          { name: "Barbera d'Asti", grape: "Barbera", pro: "High acid, low tannin. The ultimate food-friendly red.", food: ["Salami", "Pizza"] }
        ] 
      },
      { 
        name: "Veneto", 
        methods: "Appassimento (drying grapes) and the Prosecco Charmat method.", 
        wines: [
          { name: "Amarone", grape: "Corvina Blend", pro: "Dried grapes. Intense, 15%+ alc, raisinated fruit.", food: ["Blue Cheese", "Venison"] },
          { name: "Valpolicella Ripasso", grape: "Corvina Blend", pro: "Re-fermented on Amarone skins for richness.", food: ["Osso Buco"] },
          { name: "Prosecco", grape: "Glera", pro: "Fresh bubbles. Look for 'Superiore' from hilly Valdobbiadene.", food: ["Aperitivo"], subTypes: ["DOC", "DOCG Superiore", "Cartizze"] }
        ] 
      },
      { name: "Sicily", methods: "Volcanic soils from Mt. Etna.", wines: [{ name: "Etna Rosso", grape: "Nerello Mascalese", pro: "Smoky, light, and mineral.", food: ["Grilled Tuna"] }] },
      { name: "Puglia", methods: "Intense sun.", wines: [{ name: "Primitivo", grape: "Primitivo", pro: "Bold, jammy, and smooth.", food: ["BBQ"] }] },
      { name: "Alto Adige", methods: "Alpine slopes.", wines: [{ name: "Pinot Grigio", grape: "Pinot Grigio", pro: "Zesty, mineral, and clean.", food: ["Salad"] }] }
    ]
  },
  {
    id: "france",
    name: "France",
    description: "The global gold standard for terroir and hierarchy.",
    subRegions: [
      { 
        name: "Burgundy", 
        methods: "Hierarchy based on specific vineyard plots (Climats).", 
        wines: [
          { name: "Côte d'Or Reds", grape: "Pinot Noir", pro: "The world's most elegant Pinot. Earthy and silky.", food: ["Duck"], subTypes: ["Regional", "Village", "1er Cru", "Grand Cru"] },
          { name: "Chablis", grape: "Chardonnay", pro: "Unoaked, saline, and sharp.", food: ["Oysters"], subTypes: ["Petit Chablis", "Chablis", "1er Cru", "Grand Cru"] }
        ] 
      },
      { 
        name: "Bordeaux", 
        methods: "Left Bank (Cabernet/Gravel) vs Right Bank (Merlot/Clay).", 
        wines: [
          { name: "Left Bank (Médoc)", grape: "Cabernet Blend", pro: "Structured, cedar, and blackcurrant.", food: ["Lamb"], subTypes: ["Pauillac", "Margaux", "St-Julien"] },
          { name: "Right Bank (St-Emilion)", grape: "Merlot Blend", pro: "Velvety, plum, and chocolate.", food: ["Roast Beef"] }
        ] 
      },
      { name: "Champagne", methods: "Méthode Traditionnelle.", wines: [{ name: "Champagne", grape: "Blend", pro: "Brioche and citrus bubbles.", food: ["Fried Chicken"], subTypes: ["Non-Vintage", "Vintage", "Blanc de Blancs"] }] }
    ]
  },
  {
    id: "germany",
    name: "Germany",
    description: "Precision, acidity, and slate soils.",
    subRegions: [
      { 
        name: "Mosel", 
        methods: "Blue slate soil. Classification by ripeness (Pradikat).", 
        wines: [
          { name: "Riesling", grape: "Riesling", pro: "The ultimate balance of sugar and laser-sharp acid.", food: ["Thai"], subTypes: ["Trocken (Dry)", "Kabinett", "Spätlese", "Auslese"] }
        ] 
      }
    ]
  },
  {
    id: "spain",
    name: "Spain",
    description: "Mastery of American Oak aging.",
    subRegions: [
      { 
        name: "Rioja", 
        methods: "Oak aging determines the label.", 
        wines: [
          { name: "Tempranillo", grape: "Tempranillo", pro: "Vanilla, tobacco, and dill notes from oak.", food: ["Lamb"], subTypes: ["Crianza", "Reserva", "Gran Reserva"] }
        ] 
      }
    ]
  }
];
