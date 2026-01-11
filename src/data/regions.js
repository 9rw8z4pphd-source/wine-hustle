export const REGIONS_DATA = [
  {
    id: "italy",
    name: "Italy",
    description: "The world's most complex wine landscape.",
    subRegions: [
      {
        name: "Piedmont (North)",
        methods: "Traditional aging in large 'Botte' oak. Focus on single-vineyard expressions.",
        wines: [
          { name: "Barolo", grape: "Nebbiolo", profile: "Earthy, powerful, floral", pro: "The most prestigious wine in Italy." },
          { name: "Gavi", grape: "Cortese", profile: "Crisp, almondy, white flowers", pro: "The perfect Italian alternative to Chablis." }
        ]
      },
      {
        name: "Tuscany (Central)",
        methods: "Blending Sangiovese with French grapes (Super Tuscans). Use of 'Galestro' soil.",
        wines: [
          { name: "Chianti Classico", grape: "Sangiovese", profile: "Sour cherry, herbs, dry", pro: "Look for the Black Rooster symbol." },
          { name: "Brunello", grape: "Sangiovese", profile: "Deep, chocolate, tobacco", pro: "Requires 5 years of aging before release." }
        ]
      },
      {
        name: "Veneto (North-East)",
        methods: "Appassimento (Drying grapes on straw mats to concentrate sugar/flavor).",
        wines: [
          { name: "Amarone", grape: "Corvina Blend", profile: "Raisin, fig, dark chocolate", pro: "Massive alcohol, usually 15-16%." }
        ]
      }
    ]
  },
  {
    id: "france",
    name: "France",
    description: "The birthplace of 'Terroir'.",
    subRegions: [
      {
        name: "Burgundy",
        methods: "Small parcel farming (Lieus-dits). Minimal intervention.",
        wines: [
          { name: "Chablis", grape: "Chardonnay", profile: "Steel, salt, green apple", pro: "Grown in fossilized oyster shells." },
          { name: "Côte de Nuits", grape: "Pinot Noir", profile: "Silk, raspberry, earth", pro: "The world standard for Pinot Noir." }
        ]
      },
      {
        name: "Bordeaux",
        methods: "The 'Château' system. Aging in 225L French Oak barrels (Barriques).",
        wines: [
          { name: "Pauillac", grape: "Cabernet Sauvignon", profile: "Pencil lead, cedar, power", pro: "The 'business' wine. Very expensive." },
          { name: "St. Émilion", grape: "Merlot", profile: "Plum, velvet, violet", pro: "Softer and more approachable than the Left Bank." }
        ]
      }
    ]
  },
  {
    id: "australia",
    name: "Australia",
    description: "Bold sunshine meets modern science.",
    subRegions: [
      {
        name: "Barossa Valley",
        methods: "Old vine conservation (some vines are 150+ years old). High ripeness.",
        wines: [
          { name: "Barossa Shiraz", grape: "Syrah/Shiraz", profile: "Blackberry, mocha, spice", pro: "A fruit-powerhouse. Crowds love this." }
        ]
      },
      {
        name: "Margaret River",
        methods: "Maritime cooling. Focus on elegant French styles.",
        wines: [
          { name: "M.R. Cabernet", grape: "Cabernet Sauvignon", profile: "Cassis, mint, bay leaf", pro: "The 'Bordeaux' of the Southern Hemisphere." }
        ]
      }
    ]
  }
];
