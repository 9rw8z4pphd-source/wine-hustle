export const REGIONS_DATA = [
  {
    id: "italy",
    name: "Italy",
    description: "The most complex wine nation on earth.",
    subRegions: [
      { 
        name: "Tuscany", 
        methods: "Sangiovese focus. Terroir varies from coastal sands to inland limestone.", 
        wines: [
          { 
            name: "Chianti Family", grape: "Sangiovese", 
            pro: "Iconic acid and cherry. The Black Rooster (Classico) is the heart.",
            subTypes: [
              { level: "Chianti DOCG", rule: "Fresh, simple, stainless steel aged." },
              { level: "Classico", rule: "Historic zone. More mineral and elegance." },
              { level: "Classico Riserva", rule: "24 mo aging. Spice and tobacco notes." },
              { level: "Gran Selezione", rule: "30 mo aging. Single estate fruit only." }
            ],
            food: ["Pasta", "Pizza"]
          },
          { 
            name: "Brunello di Montalcino", grape: "Sangiovese Grosso", 
            pro: "Power, depth, and 5 years of required aging.",
            subTypes: [
              { level: "Rosso di Montalcino", rule: "Fresh, 1-year aged 'Baby Brunello'." },
              { level: "Brunello DOCG", rule: "The legend. 2 years oak, 5 total." },
              { level: "Brunello Riserva", rule: "6 years aging. Massive complexity." }
            ],
            food: ["Lamb", "Wild Boar"]
          },
          { name: "Vino Nobile di Montepulciano", grape: "Prugnolo Gentile", pro: "The 'Noble' wine. More floral than Brunello.", food: ["Roast Pork"] },
          { name: "Bolgheri / Super Tuscan", grape: "Bordeaux Blend", pro: "Coastal power. Polished, oaky, and prestigious.", food: ["Ribeye"] },
          { name: "Vernaccia di San Gimignano", grape: "Vernaccia", pro: "Tuscany's great white. Crisp and almond-toned.", food: ["White Fish"] }
        ] 
      },
      { 
        name: "Piedmont", methods: "Alpine cooling meets the 'Botte' (large oak) tradition.", 
        wines: [
          { name: "Barolo", grape: "Nebbiolo", pro: "King of wines. Rose, tar, and high tannin.", subTypes: [{level: "Commune", rule: "e.g. La Morra (soft) vs Serralunga (power)"}, {level: "Riserva", rule: "5+ years aging"}], food: ["Truffle"] },
          { name: "Barbaresco", grape: "Nebbiolo", pro: "Queen of wines. Softer tannins, more floral.", food: ["Duck"] },
          { name: "Barbera d'Asti", grape: "Barbera", pro: "The everyday red. High acid, no tannin. Juicy.", food: ["Salumi"] },
          { name: "Dolcetto d'Alba", grape: "Dolcetto", pro: "Easy-drinking, dark fruit, and bitter almond finish.", food: ["Pasta"] },
          { name: "Gavi", grape: "Cortese", pro: "Bone-dry, lime, and flinty minerality.", food: ["Seafood"] },
          { name: "Roero Arneis", grape: "Arneis", pro: "Peach, apricot, and medium body white.", food: ["Chicken"] }
        ] 
      },
      { 
        name: "Veneto", methods: "Home of the drying room (Fruttaio) and the bubble.", 
        wines: [
          { name: "Amarone", grape: "Corvina Blend", pro: "Intense, raisinated fruit, and 15% alcohol.", food: ["Blue Cheese"] },
          { name: "Valpolicella Ripasso", grape: "Corvina", pro: "The bridge between fresh and intense.", food: ["Beef Stew"] },
          { name: "Soave Classico", grape: "Garganega", pro: "Volcanic white. Lemon and saline notes.", food: ["Risotto"] },
          { name: "Prosecco Superiore", grape: "Glera", pro: "The hilly DOCG quality tier.", food: ["Aperitivo"] },
          { name: "Bardolino", grape: "Corvina", pro: "Light, chilled red. Perfect for summer.", food: ["Fish"] }
        ] 
      },
      { name: "Sicily", methods: "Volcanic Etna vs the hot plains.", wines: [{ name: "Etna Rosso", grape: "Nerello", pro: "The Mediterranean Burgundy." }, { name: "Nero d'Avola", grape: "Nero d'Avola", pro: "Dark, plummy, and sun-drenched." }, { name: "Grillo", grape: "Grillo", pro: "Zesty coastal white." }] }
    ]
  },
  {
    id: "france",
    name: "France",
    description: "The birthplace of 'Terroir' and the Appellation system.",
    subRegions: [
      { 
        name: "Burgundy", methods: "Mosaic of soil. Hierarchy is based on precise vineyard plots.", 
        wines: [
          { name: "Côte de Nuits (Red)", grape: "Pinot Noir", pro: "Earth, mushroom, and red fruit. The pinnacle of Pinot.", subTypes: [{level: "Village", rule: "e.g. Gevrey-Chambertin"}, {level: "Grand Cru", rule: "The Top 1%"}], food: ["Coq au Vin"] },
          { name: "Côte de Beaune (White)", grape: "Chardonnay", pro: "Butter, hazelnut, and citrus complexity.", food: ["Lobster"] },
          { name: "Chablis", grape: "Chardonnay", pro: "Unoaked 'Oyster-shell' minerality.", subTypes: [{level: "1er Cru", rule: "Classic stone fruit"}, {level: "Grand Cru", rule: "Richness and age"}], food: ["Oysters"] },
          { name: "Beaujolais", grape: "Gamay", pro: "Light, fruity, and low tannin. Drink slightly chilled.", food: ["Charcuterie"] },
          { name: "Mâconnais", grape: "Chardonnay", pro: "Affordable, sunny, and approachable white Burgundy.", food: ["Salads"] }
        ] 
      },
      { 
        name: "Bordeaux", methods: "The battle of the Banks. Left (Gravel) vs Right (Clay).", 
        wines: [
          { name: "Pauillac", grape: "Cabernet", pro: "The icon of the Left Bank. Pencil lead and cedar.", food: ["Lamb"] },
          { name: "Saint-Émilion", grape: "Merlot", pro: "The plush heart of the Right Bank. Plum and chocolate.", food: ["Roast Beef"] },
          { name: "Sauternes", grape: "Sémillon/Sauvignon", pro: "Noble Rot dessert wine. Honey and apricot.", food: ["Foie Gras"] },
          { name: "Pessac-Léognan", grape: "Sauvignon/Sémillon", pro: "The world's greatest dry oaked whites.", food: ["Scallops"] },
          { name: "Margaux", grape: "Cabernet", pro: "The most floral and elegant of the Medoc.", food: ["Duck"] }
        ] 
      },
      { name: "Rhône Valley", methods: "Northern Granite vs Southern Stones.", wines: [{ name: "Hermitage", grape: "Syrah", pro: "Smoky, meaty, and powerful." }, { name: "Châteauneuf-du-Pape", grape: "Grenache Blend", pro: "Rich, spicy, and warm." }, { name: "Condrieu", grape: "Viognier", pro: "Explosive apricot and honeysuckle white." }] }
    ]
  },
  {
    id: "usa",
    name: "USA",
    description: "Napa, Sonoma, and the Pacific Northwest.",
    subRegions: [
      { 
        name: "Napa Valley", methods: "Valley floor vs Mountain fruit styles.", 
        wines: [
          { name: "Oakville Cabernet", grape: "Cabernet", pro: "Perfect balance of power and velvety texture.", food: ["Steak"] },
          { name: "Rutherford Cabernet", grape: "Cabernet", pro: "Famous for 'Rutherford Dust' earthy tannins.", food: ["Grilled Meats"] },
          { name: "Stags Leap Cabernet", grape: "Cabernet", pro: "Soft, supple, and very elegant style.", food: ["Filet Mignon"] },
          { name: "Mountain Fruit (Howell Mtn)", grape: "Cabernet", pro: "Inky, massive tannins, built for 20 years.", food: ["Venison"] },
          { name: "Carneros Chardonnay", grape: "Chardonnay", pro: "Cooler climate. Apple and bright acid.", food: ["Chicken"] }
        ] 
      },
      { name: "Oregon", methods: "The 45th Parallel.", wines: [{ name: "Willamette Pinot", grape: "Pinot Noir", pro: "Elegant and earthy." }, { name: "Dundee Hills Pinot", grape: "Pinot Noir", pro: "Red fruit and iron-rich soil." }] }
    ]
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    description: "High intensity, high acid, and pure fruit.",
    subRegions: [
      { 
        name: "Marlborough", methods: "Ocean influence and gravelly riverbeds.", 
        wines: [
          { name: "Sauvignon Blanc", grape: "Sauvignon Blanc", pro: "Passionfruit and gooseberry explosion.", food: ["Goat Cheese"] },
          { name: "Marlborough Chardonnay", grape: "Chardonnay", pro: "Citrus-driven and high energy white.", food: ["Seafood"] },
          { name: "Pinot Noir", grape: "Pinot Noir", pro: "Lighter, red-fruit-focused style.", food: ["Salmon"] },
          { name: "Riesling", grape: "Riesling", pro: "Lime zest and high-octane acidity.", food: ["Thai"] },
          { name: "Pinot Gris", grape: "Pinot Gris", pro: "Off-dry, pear, and spice notes.", food: ["Indian"] }
        ] 
      }
    ]
  }
];
