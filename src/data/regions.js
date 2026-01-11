export const REGIONS_DATA = [
  {
    id: "italy",
    name: "Italy",
    description: "The land of acidity and tradition.",
    subRegions: [
      { 
        name: "Tuscany", 
        methods: "Sangiovese-led blends. Use of French Barrique in 'Super Tuscans'.", 
        wines: [
          {name: "Chianti Classico", grape: "Sangiovese", pro: "The 'Black Rooster'. High acid, cherry, oregano."},
          {name: "Brunello di Montalcino", grape: "Sangiovese", pro: "Power & Longevity. Must be 100% Sangiovese."},
          {name: "Rosso di Montalcino", grape: "Sangiovese", pro: "The 'Baby Brunello'. Fresher and younger."},
          {name: "Bolgheri / Super Tuscan", grape: "Cabernet Blend", pro: "Coastal Tuscany. Modern, international style."},
          {name: "Vino Nobile di Montepulciano", grape: "Sangiovese", pro: "Elegant, 'Noble' style from high altitude."},
          {name: "Vernaccia di San Gimignano", grape: "Vernaccia", pro: "Tuscany's most famous white. Crisp and nutty."},
          {name: "Vin Santo", grape: "Trebbiano/Grechetto", pro: "Sweet 'Holy Wine'. Served with biscotti."}
        ] 
      },
      { 
        name: "Piedmont", 
        methods: "Long maceration, large oak aging.", 
        wines: [
          {name: "Barolo", grape: "Nebbiolo", pro: "The King. Tannic, rose, and tar notes."},
          {name: "Barbaresco", grape: "Nebbiolo", pro: "The Queen. More elegant and approachable."},
          {name: "Barbera d'Asti", grape: "Barbera", pro: "High acid, low tannin. The 'everyday' red."},
          {name: "Dolcetto d'Alba", grape: "Dolcetto", pro: "Blackberry and almond. Soft and easy."},
          {name: "Gavi", grape: "Cortese", pro: "Bone-dry, flinty white. Italy's Chablis."},
          {name: "Moscato d'Asti", grape: "Moscato", pro: "Sweet, low alcohol, fizzy."}
        ] 
      }
      // ... I will provide the rest of the countries below in a similar format
    ]
  },
  {
    id: "spain",
    name: "Spain",
    description: "Traditional oak aging and high-altitude desert climates.",
    subRegions: [
      {
        name: "Rioja",
        methods: "Graded by aging: Crianza, Reserva, Gran Reserva.",
        wines: [
          {name: "Rioja Reserva", grape: "Tempranillo", pro: "Vanilla and dill notes from American Oak."},
          {name: "Rioja Blanco", grape: "Viura", pro: "Can be fresh or heavily oaked and nutty."},
          {name: "Rosado", grape: "Garnacha", pro: "Bright, strawberry-focused rosés."}
        ]
      },
      {
        name: "Priorat",
        methods: "Llicorella (black slate) soil. Low yielding old vines.",
        wines: [
          {name: "Priorat Red", grape: "Garnacha/Cariñena", pro: "Powerful, mineral, and high alcohol."}
        ]
      },
      {
        name: "Rías Baixas",
        methods: "Coastal Atlantic influence. Pergola vine training.",
        wines: [
          {name: "Albariño", grape: "Albariño", pro: "Salty, peachy, and zesty. Best with seafood."}
        ]
      }
    ]
  },
  {
    id: "usa",
    name: "USA",
    description: "Bold fruit and technological precision.",
    subRegions: [
      {
        name: "Napa Valley",
        methods: "Volcanic soils and heavy French Oak usage.",
        wines: [
          {name: "Napa Cabernet", grape: "Cabernet Sauvignon", pro: "Expensive, bold, and prestigious."},
          {name: "Oakville / Rutherford", grape: "Cabernet Sauvignon", pro: "Known for 'Rutherford Dust' (earthy tannins)."},
          {name: "Napa Chardonnay", grape: "Chardonnay", pro: "Full-bodied, buttery, and tropical."}
        ]
      },
      {
        name: "Oregon",
        methods: "Cool climate, similar to Burgundy.",
        wines: [
          {name: "Willamette Valley", grape: "Pinot Noir", pro: "Earthier and lighter than California Pinot."}
        ]
      }
    ]
  }
];
