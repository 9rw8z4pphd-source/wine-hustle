export const REGIONS_DATA = [
  {
    id: "italy",
    name: "Italy",
    description: "The land of 1,000 grapes and volcanic energy.",
    subRegions: [
      { 
        name: "Piedmont", 
        methods: "Long maceration in neutral Botte oak.", 
        wines: [
          {name: "Barolo", grape: "Nebbiolo", pro: "The King. Decant 1hr. Powerful tannins.", food: ["Steak", "Truffle"] },
          {name: "Barbaresco", grape: "Nebbiolo", pro: "The Queen. Elegant, floral, and softer.", food: ["Duck", "Mushroom"] },
          {name: "Gavi", grape: "Cortese", pro: "Bone-dry white. Flinty and almond notes.", food: ["Seafood", "Pesto"] }
        ] 
      },
      { 
        name: "Tuscany", 
        methods: "Sangiovese-led blends on clay-schist soils.", 
        wines: [
          {name: "Brunello", grape: "Sangiovese", pro: "Power and longevity. 100% Sangiovese.", food: ["Roasted Lamb", "Steak"] },
          {name: "Chianti Classico", grape: "Sangiovese", pro: "Sour cherry and dried herbs. High acid.", food: ["Pizza", "Pasta"] },
          {name: "Bolgheri", grape: "Cabernet Blend", pro: "Super Tuscans. Modern, plush, and prestigious.", food: ["Steak"] }
        ] 
      },
      { 
        name: "Veneto", 
        methods: "Appassimento (drying grapes) for intensity.", 
        wines: [
          {name: "Amarone", grape: "Corvina Blend", pro: "Full-bodied (15%+). Dried fruit and chocolate.", food: ["Blue Cheese", "Venison"] },
          {name: "Prosecco", grape: "Glera", pro: "Fresh bubbles, peach and pear notes.", food: ["Aperitivo", "Light Snacks"] }
        ] 
      }
    ]
  },
  {
    id: "france",
    name: "France",
    description: "The global benchmark for Terroir and elegance.",
    subRegions: [
      { 
        name: "Burgundy", 
        methods: "Single vineyard focus (Climats).", 
        wines: [
          {name: "Chablis", grape: "Chardonnay", pro: "No oak. Pure mineral and oyster shell.", food: ["Oysters", "White Fish"] },
          {name: "Meursault", grape: "Chardonnay", pro: "Rich, buttery, and prestigious white.", food: ["Lobster", "Chicken"] },
          {name: "Gevrey-Chambertin", grape: "Pinot Noir", pro: "Muscular, earthy, and gamey red.", food: ["Duck", "Game"] }
        ] 
      },
      { 
        name: "Bordeaux", 
        methods: "Left Bank (Gravel) vs Right Bank (Clay).", 
        wines: [
          {name: "Pauillac", grape: "Cabernet Sauvignon", pro: "Left Bank icon. Pencil lead and cedar.", food: ["Steak", "Lamb"] },
          {name: "St-Émilion", grape: "Merlot", pro: "Right Bank. Velvet, plum, and chocolate.", food: ["Beef Stew", "Hard Cheese"] }
        ] 
      },
      { 
        name: "Rhône", 
        methods: "Steep granite hills (North) vs Stony plains (South).", 
        wines: [
          {name: "Hermitage", grape: "Syrah", pro: "Smoky, meaty, and world-class Syrah.", food: ["Steak", "Black Pepper dishes"] },
          {name: "Châteauneuf-du-Pape", grape: "Grenache Blend", pro: "Spicy, bold, and high alcohol.", food: ["BBQ", "Spicy Sausage"] }
        ] 
      }
    ]
  },
  {
    id: "germany",
    name: "Germany",
    description: "Extreme cool-climate viticulture and steep slopes.",
    subRegions: [
      { 
        name: "Mosel", 
        methods: "Blue slate soil and very steep river banks.", 
        wines: [
          {name: "Mosel Riesling", grape: "Riesling", pro: "Electric acidity, low alcohol, slate mineral.", food: ["Thai Food", "Spicy Fish"] },
          {name: "Kabinett Riesling", grape: "Riesling", pro: "Off-dry and light. Perfect balance of sugar/acid.", food: ["Spicy Food"] }
        ] 
      },
      { 
        name: "Rheingau", 
        methods: "South-facing slopes, fuller-bodied styles.", 
        wines: [
          {name: "Dry Riesling", grape: "Riesling", pro: "Powerful, structured, and bone-dry.", food: ["Pork", "Roasted Vegetables"] }
        ] 
      },
      { 
        name: "Pfalz", 
        methods: "Warmer climate, diverse soil types.", 
        wines: [
          {name: "Spätburgunder", grape: "Pinot Noir", pro: "Germany's best red. Elegant and savory.", food: ["Chicken", "Mushrooms"] }
        ] 
      }
    ]
  },
  {
    id: "spain",
    name: "Spain",
    description: "High altitude, ancient vines, and oak mastery.",
    subRegions: [
      { 
        name: "Rioja", 
        methods: "American Oak aging for vanilla notes.", 
        wines: [
          {name: "Rioja Reserva", grape: "Tempranillo", pro: "Vanilla, tobacco, and dried plum.", food: ["Lamb", "Iberico Ham"] }
        ] 
      },
      { 
        name: "Priorat", 
        methods: "Black slate (Llicorella) soil.", 
        wines: [
          {name: "Priorat Red", grape: "Garnacha Blend", pro: "Mineral, powerful, and intense.", food: ["Grilled Meats"] }
        ] 
      }
    ]
  },
  {
    id: "new-world",
    name: "New World",
    description: "Australia, USA, New Zealand, and Argentina.",
    subRegions: [
      { 
        name: "Napa Valley (USA)", 
        methods: "Volcanic soil and heavy French Oak.", 
        wines: [
          {name: "Napa Cabernet", grape: "Cabernet Sauvignon", pro: "Bold fruit, expensive oak, prestigious.", food: ["Steak"] }
        ] 
      },
      { 
        name: "Marlborough (NZ)", 
        methods: "Cool maritime climate.", 
        wines: [
          {name: "Sauvignon Blanc", grape: "Sauvignon Blanc", pro: "Passionfruit and grass notes. High acid.", food: ["Salad", "Goat Cheese"] }
        ] 
      },
      { 
        name: "Barossa (AUS)", 
        methods: "Ironstone soil and ancient vines.", 
        wines: [
          {name: "Barossa Shiraz", grape: "Shiraz", pro: "Dark chocolate, plum, and spice.", food: ["BBQ", "Rich Stews"] }
        ] 
      },
      { 
        name: "Mendoza (ARG)", 
        methods: "High altitude (1000m+) UV intensity.", 
        wines: [
          {name: "Malbec", grape: "Malbec", pro: "Velvety tannins and deep purple fruit.", food: ["Steak", "Empanadas"] }
        ] 
      }
    ]
  }
];
