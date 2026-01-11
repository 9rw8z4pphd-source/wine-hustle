
export const REGIONS_DATA = [
  {
    id: "italy",
    name: "Italy",
    description: "The land of 1,000 grapes and volcanic energy.",
    subRegions: [
      { 
        name: "Piedmont", 
        methods: "Long maceration in neutral 'Botte' oak. High altitude alpine influence.", 
        wines: [
          { name: "Barolo", grape: "Nebbiolo", pro: "The King. High tannin and acid. Needs fat (Ribeye) or Truffles.", food: ["Steak", "Truffle", "Aged Cheese"] },
          { name: "Barbaresco", grape: "Nebbiolo", pro: "The Queen. More elegant and floral than Barolo. Softer tannins.", food: ["Duck", "Mushroom", "Game"] },
          { name: "Gavi", grape: "Cortese", pro: "Bone-dry, lime, and almond. Often called the Chablis of Italy.", food: ["Seafood", "Pesto", "White Fish"] },
          { name: "Barbera d'Asti", grape: "Barbera", pro: "High acid, low tannin. Juicy red fruit. The ultimate pasta wine.", food: ["Pasta", "Salami", "Pizza"] }
        ] 
      },
      { 
        name: "Tuscany", 
        methods: "Sangiovese focus on Galestro (clay/schist) soils.", 
        wines: [
          { name: "Brunello di Montalcino", grape: "Sangiovese", pro: "Power and longevity. Must be 100% Sangiovese Grosso.", food: ["Lamb", "Bistecca alla Fiorentina"] },
          { name: "Chianti Classico", grape: "Sangiovese", pro: "Tart cherry and dried herbs. High acid cuts through tomato sauce.", food: ["Bolognese", "Pizza", "Pecorino"] },
          { name: "Bolgheri", grape: "Cabernet Blend", pro: "The 'Super Tuscan' home. Modern, plush, and international in style.", food: ["Grilled Meats", "Venison"] }
        ] 
      },
      { 
        name: "Veneto", 
        methods: "Appassimento (drying grapes) and Charmat bubble methods.", 
        wines: [
          { name: "Amarone", grape: "Corvina Blend", pro: "Full-bodied (15%+). Notes of dried fig, chocolate, and spice.", food: ["Blue Cheese", "Braised Beef", "Wild Boar"] },
          { name: "Valpolicella Ripasso", grape: "Corvina Blend", pro: "The 'Baby Amarone'. Re-fermented on Amarone skins for richness.", food: ["Pork", "Mushrooms", "Beef Stew"] },
          { name: "Prosecco Superiore", grape: "Glera", pro: "The highest tier of Prosecco. Fine bubbles from hilly DOCG sites.", food: ["Aperitivo", "Light Snacks", "Prosciutto"] }
        ] 
      },
      { 
        name: "Sicily", 
        methods: "High altitude volcanic viticulture on Mt. Etna.", 
        wines: [
          { name: "Etna Rosso", grape: "Nerello Mascalese", pro: "The Burgundy of the Mediterranean. Smoky, light, and mineral.", food: ["Grilled Tuna", "Duck", "Swordfish"] },
          { name: "Grillo", grape: "Grillo", pro: "Coastal white. Saline, citrusy, and crisp. Perfect summer wine.", food: ["Calamari", "Clams", "Salads"] }
        ] 
      }
    ]
  },
  {
    id: "germany",
    name: "Germany",
    description: "Precision acidity and extreme cool-climate river slopes.",
    subRegions: [
      { 
        name: "Mosel", 
        methods: "Blue slate soil and incredibly steep river banks.", 
        wines: [
          { name: "Mosel Riesling", grape: "Riesling", pro: "Electric acidity, low alcohol, and intense slate minerality.", food: ["Thai Food", "Spicy Fish", "Sushi"] },
          { name: "Kabinett Riesling", grape: "Riesling", pro: "Light and off-dry. Perfect balance of sugar and laser-sharp acid.", food: ["Spicy Wings", "Indian Curry"] }
        ] 
      },
      { 
        name: "Rheingau", 
        methods: "South-facing terraces along the Rhine River.", 
        wines: [
          { name: "Dry (Trocken) Riesling", grape: "Riesling", pro: "More powerful and structured than Mosel. Bone-dry and herbal.", food: ["Pork Roast", "Grilled Salmon", "Roasted Roots"] }
        ] 
      },
      { 
        name: "Pfalz", 
        methods: "Warmer, sunnier climate with sandstone and limestone soils.", 
        wines: [
          { name: "Spätburgunder", grape: "Pinot Noir", pro: "Germany's top red. Elegant, savory, and often surprisingly earthy.", food: ["Chicken", "Mushrooms", "Quail"] }
        ] 
      }
    ]
  },
  {
    id: "france",
    name: "France",
    description: "The global benchmark for Terroir and AOC regulations.",
    subRegions: [
      { 
        name: "Burgundy", 
        methods: "Single-parcel (Climat) farming. Focus on soil transparency.", 
        wines: [
          { name: "Chablis", grape: "Chardonnay", pro: "Pure mineral and oyster shell. Generally unoaked and high acid.", food: ["Oysters", "Mussels", "Goat Cheese"] },
          { name: "Meursault", grape: "Chardonnay", pro: "Rich, buttery, and prestigious. The icon of opulent white wine.", food: ["Lobster", "Chicken in Cream Sauce"] },
          { name: "Gevrey-Chambertin", grape: "Pinot Noir", pro: "The 'King' of Burgundy reds. Muscular, earthy, and deep.", food: ["Duck", "Beef Bourguignon"] }
        ] 
      },
      { 
        name: "Bordeaux", 
        methods: "Left Bank (Gravel/Cabernet) vs Right Bank (Clay/Merlot).", 
        wines: [
          { name: "Pauillac", grape: "Cabernet Sauvignon", pro: "Left Bank icon. Cedar, pencil lead, and blackcurrant.", food: ["Steak", "Roasted Lamb"] },
          { name: "Saint-Émilion", grape: "Merlot", pro: "Right Bank velvet. Plum, chocolate, and soft tannins.", food: ["Roast Beef", "Hard Cheeses"] }
        ] 
      }
    ]
  }
];
