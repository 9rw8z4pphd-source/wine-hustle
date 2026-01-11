// src/data/regions.js
export const REGIONS_DATA = [
  {
    id: "italy",
    name: "Italy",
    description: "Complex laws based on tradition and terroir.",
    subRegions: [
      { 
        name: "Tuscany", 
        methods: "Focus on Sangiovese and aging classifications.", 
        wines: [
          { 
            name: "Chianti Family", 
            grape: "Sangiovese", 
            pro: "The most famous Italian red. Quality is strictly regulated by zone and time in oak.",
            food: ["Pizza", "Steak", "Tomato Pasta"],
            hierarchyTitle: "The Quality Pyramid",
            subTypes: [
              { level: "Chianti DOCG", rule: "Standard version. Fruit-forward, light, drink now." },
              { level: "Chianti Classico", rule: "The 'Black Rooster' zone. Higher altitude, more mineral and structure." },
              { level: "Classico Riserva", rule: "Aged 24 months. More oak influence, tobacco, and spice notes." },
              { level: "Gran Selezione", rule: "Highest tier. Estate-grown fruit only. Maximum concentration." }
            ]
          },
          { 
            name: "Brunello di Montalcino", 
            grape: "Sangiovese Grosso", 
            pro: "One of Italy's 'Big B' wines. Requires massive aging.",
            food: ["Lamb", "Game"],
            subTypes: [
              { level: "Rosso di Montalcino", rule: "The 'Baby Brunello'. Fresher, younger, and cheaper." },
              { level: "Brunello DOCG", rule: "Required 5 years aging (2 in oak). Powerful and earthy." }
            ]
          }
        ] 
      },
      {
        name: "Piedmont",
        methods: "Nebbiolo specialists.",
        wines: [
          { 
            name: "Barolo", 
            grape: "Nebbiolo", 
            pro: "The King of Wines. High tannin/acid. Needs age.",
            food: ["Truffle", "Red Meat"],
            subTypes: [
              { level: "Barolo DOCG", rule: "Standard blend of vineyards." },
              { level: "Barolo 'Cru'", rule: "Single vineyard (e.g., Cannubi) showing specific terroir." },
              { level: "Barolo Riserva", rule: "Aged for 5+ years before release." }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "france",
    name: "France",
    description: "Benchmark for global wine standards.",
    subRegions: [
      { 
        name: "Burgundy", 
        methods: "Soil-based hierarchy (Climats).", 
        wines: [
          { 
            name: "Burgundy Reds/Whites", 
            grape: "Pinot Noir / Chardonnay", 
            pro: "The closer the wine gets to a single plot of land, the more expensive it becomes.",
            food: ["Duck", "Creamy Fish"],
            hierarchyTitle: "The Soil Tiers",
            subTypes: [
              { level: "Regional", rule: "Grapes from anywhere in Burgundy. Basic fruit." },
              { level: "Village", rule: "Grapes from a specific town (e.g., Meursault)." },
              { level: "Premier Cru", rule: "High-quality specific hillsides. Notable elegance." },
              { level: "Grand Cru", rule: "The top 1%. Best sun exposure. Massive power and complexity." }
            ]
          }
        ] 
      },
      {
        name: "Champagne",
        methods: "Method Traditionnelle (bubbles in bottle).",
        wines: [
          {
            name: "Champagne Tiers",
            grape: "Chardonnay/Pinot Noir",
            pro: "Aging on 'lees' (yeast) creates the toasted brioche flavor.",
            food: ["Oysters", "Fried Foods"],
            subTypes: [
              { level: "Non-Vintage (NV)", rule: "Consistency. A blend of multiple years." },
              { level: "Vintage", rule: "Exceptional years only. Aged longer for more toastiness." },
              { level: "Prestige Cuvée", rule: "The House's best (e.g., Dom Perignon)." }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "spain",
    name: "Spain",
    description: "Aging determined by time in oak barrels.",
    subRegions: [
      {
        name: "Rioja",
        methods: "Tempranillo aged in American/French oak.",
        wines: [
          {
            name: "Rioja Aging Tiers",
            grape: "Tempranillo",
            pro: "The label color tells you how long the wine stayed in the cellar.",
            food: ["Lamb", "Tapas"],
            subTypes: [
              { level: "Crianza", rule: "1 year in oak. Fresh fruit with a hint of vanilla." },
              { level: "Reserva", rule: "3 years aging (1 in oak). Smooth, tobacco, and leather notes." },
              { level: "Gran Reserva", rule: "5 years aging (2 in oak). Developed, silky, and complex." }
            ]
          }
        ]
      }
    ]
  }
];
