// src/data/regions.js
export const REGIONS_DATA = [
  {
    id: "italy",
    name: "Italy",
    description: "Alpine peaks to volcanic islands.",
    subRegions: [
      { 
        name: "Piedmont", 
        methods: "Neutral 'Botte' oak. Alpine cooling.", 
        wines: [
          { name: "Barolo", grape: "Nebbiolo", pro: "The King. High tannin. Needs fat.", food: ["Steak", "Truffle"] },
          { name: "Barbaresco", grape: "Nebbiolo", pro: "The Queen. Elegant and floral.", food: ["Duck"] },
          { name: "Gavi", grape: "Cortese", pro: "Lime and flint. Italy's Chablis.", food: ["Seafood"] },
          { name: "Barbera d'Asti", grape: "Barbera", pro: "High acid, low tannin. Juicy.", food: ["Pasta"] }
        ] 
      },
      { 
        name: "Tuscany", 
        methods: "Sangiovese focus on Galestro clay.", 
        wines: [
          { name: "Brunello", grape: "Sangiovese", pro: "Power and longevity. 100% Sangiovese.", food: ["Lamb"] },
          { name: "Chianti Classico", grape: "Sangiovese", pro: "Tart cherry and herbs.", food: ["Pizza"] },
          { name: "Bolgheri", grape: "Cabernet Blend", pro: "Super Tuscan. Plush and prestigious.", food: ["Steak"] }
        ] 
      },
      { 
        name: "Veneto", 
        methods: "Appassimento (drying) method.", 
        wines: [
          { name: "Amarone", grape: "Corvina Blend", pro: "Full-bodied (15%+). Dried fruit.", food: ["Blue Cheese"] },
          { name: "Valpolicella Ripasso", grape: "Corvina Blend", pro: "Baby Amarone. Great value.", food: ["Pork"] },
          { name: "Prosecco Superiore", grape: "Glera", pro: "Fine bubbles from DOCG hills.", food: ["Aperitivo"] }
        ] 
      },
      { 
        name: "Sicily", 
        methods: "Volcanic soils from Mt. Etna.", 
        wines: [
          { name: "Etna Rosso", grape: "Nerello Mascalese", pro: "Smoky, light, and mineral.", food: ["Grilled Tuna"] },
          { name: "Grillo", grape: "Grillo", pro: "Coastal, saline, and fresh.", food: ["Calamari"] }
        ] 
      },
      { 
        name: "Puglia", 
        methods: "Intense heat and ancient bush vines.", 
        wines: [
          { name: "Primitivo", grape: "Primitivo", pro: "Jammy, dark fruit, and smooth.", food: ["BBQ"] }
        ] 
      },
      { 
        name: "Alto Adige", 
        methods: "Steep Alpine limestone slopes.", 
        wines: [
          { name: "Pinot Grigio", grape: "Pinot Grigio", pro: "High altitude and zesty.", food: ["Fish"] }
        ] 
      }
    ]
  },
  {
    id: "germany",
    name: "Germany",
    description: "Precision acidity and steep river banks.",
    subRegions: [
      { name: "Mosel", methods: "Blue slate soil.", wines: [{ name: "Mosel Riesling", grape: "Riesling", pro: "Electric acid.", food: ["Thai"] }] },
      { name: "Rheingau", methods: "South-facing Rhine slopes.", wines: [{ name: "Dry Riesling", grape: "Riesling", pro: "Structured.", food: ["Pork"] }] },
      { name: "Pfalz", methods: "Warmer sandstone.", wines: [{ name: "Spätburgunder", grape: "Pinot Noir", pro: "Savory red.", food: ["Chicken"] }] }
    ]
  },
  {
    id: "france",
    name: "France",
    description: "The global benchmark for Terroir.",
    subRegions: [
      { name: "Burgundy", methods: "Single-parcel Climats.", wines: [{ name: "Chablis", grape: "Chardonnay", pro: "Pure mineral.", food: ["Oysters"] }, { name: "Meursault", grape: "Chardonnay", pro: "Buttery.", food: ["Lobster"] }] },
      { name: "Bordeaux", methods: "Left Bank Gravel.", wines: [{ name: "Pauillac", grape: "Cabernet", pro: "Cedar/Lead.", food: ["Steak"] }] },
      { name: "Rhône", methods: "Granite hills.", wines: [{ name: "Hermitage", grape: "Syrah", pro: "Meaty/Smoky.", food: ["BBQ"] }] }
    ]
  },
  {
    id: "spain",
    name: "Spain",
    description: "Ancient vines and oak mastery.",
    subRegions: [
      { name: "Rioja", methods: "American Oak aging.", wines: [{ name: "Rioja Reserva", grape: "Tempranillo", pro: "Vanilla/Tobacco.", food: ["Lamb"] }] },
      { name: "Priorat", methods: "Llicorella (slate) soils.", wines: [{ name: "Priorat Red", grape: "Garnacha", pro: "Powerful/Mineral.", food: ["Beef"] }] }
    ]
  }
];
