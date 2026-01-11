export const REGIONS_DATA = [
  {
    id: "italy",
    name: "Italy",
    description: "Diverse styles from the alpine North to the volcanic South.",
    subRegions: [
      {
        name: "Piedmont",
        methods: "Long skin maceration for tannins; aging in large neutral oak (Botte).",
        wines: [
          { name: "Barolo", grape: "Nebbiolo", profile: "Rose, tar, high acid/tannin", pro: "The 'King'. Decant for 1-2 hours." },
          { name: "Gavi", grape: "Cortese", profile: "Bone-dry, lime, almond", pro: "Great alternative for Pinot Grigio drinkers." }
        ]
      },
      {
        name: "Veneto",
        methods: "Appassimento (drying grapes on mats) for Amarone; Charmat method for Prosecco.",
        wines: [
          { name: "Amarone", grape: "Corvina blend", profile: "Raisin, chocolate, 15%+ abv", pro: "Meditative wine. Intense and velvety." },
          { name: "Prosecco", grape: "Glera", profile: "Green apple, pear, floral", pro: "Fresh and fruity, meant for immediate drinking." }
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
        methods: "Malolactic fermentation (for texture); small-batch fermentation.",
        wines: [
          { name: "Chablis", grape: "Chardonnay", profile: "Steel, citrus, oyster shell", pro: "No oak. Pure mineral expression." },
          { name: "Meursault", grape: "Chardonnay", profile: "Butter, hazelnut, rich", pro: "Heavy oak influence. Very prestigious." }
        ]
      },
      {
        name: "Champagne",
        methods: "Méthode Traditionnelle (secondary fermentation in the bottle); aging on Lees (dead yeast).",
        wines: [
          { name: "Non-Vintage", grape: "Chard/PN/Meunier", profile: "Brioche, apple, fine bubbles", pro: "The 'Lees' aging gives it that bakery smell." }
        ]
      }
    ]
  },
  {
    id: "spain",
    name: "Spain",
    description: "Famous for traditional oak aging and high-altitude vineyards.",
    subRegions: [
      {
        name: "Rioja",
        methods: "Extended aging in American Oak (Vanilla/Dill flavors).",
        wines: [
          { name: "Reserva", grape: "Tempranillo", profile: "Dried cherry, tobacco, vanilla", pro: "Aged 3 years minimum. Silky texture." }
        ]
      },
      {
        name: "Jerez (Sherry)",
        methods: "Solera System (fractional blending of old and new wine).",
        wines: [
          { name: "Fino", grape: "Palomino", profile: "Saline, almond, bone-dry", pro: "Fortified. Best served ice cold with olives." }
        ]
      }
    ]
  },
  {
    id: "usa",
    name: "USA",
    description: "Focus on fruit intensity and high-quality French Oak.",
    subRegions: [
      {
        name: "Napa Valley",
        methods: "Small barrel aging (Barrique); late harvesting for ripeness.",
        wines: [
          { name: "Cabernet", grape: "Cabernet Sauvignon", profile: "Blackberry, mocha, high tannin", pro: "The gold standard for American luxury." }
        ]
      }
    ]
  }
];
