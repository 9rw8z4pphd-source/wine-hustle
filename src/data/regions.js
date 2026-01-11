export const REGIONS_DATA = [
  {
    id: "italy",
    name: "Italy",
    description: "Alpine peaks to volcanic islands.",
    subRegions: [
      { 
        name: "Tuscany", 
        methods: "Focus on Sangiovese aging and specific sub-zones.", 
        wines: [
          { 
            name: "Chianti Family", grape: "Sangiovese", 
            pro: "Italy's icon. Quality is based on geography and time in oak.",
            subTypes: [
              { level: "Chianti DOCG", rule: "Basic, fresh, drink young." },
              { level: "Classico", rule: "The historic hills. More mineral and soul." },
              { level: "Riserva", rule: "Aged 24 months. Vanilla and spice notes." },
              { level: "Gran Selezione", rule: "30 months aging. Estate fruit only." }
            ]
          },
          { 
            name: "Brunello di Montalcino", grape: "Sangiovese Grosso", 
            pro: "Masculine, powerful, and requires 5 years aging.",
            subTypes: [
              { level: "Rosso di Montalcino", rule: "Younger, fresher 'Baby Brunello'." },
              { level: "Brunello DOCG", rule: "Minimum 2 years in oak, 5 years total aging." }
            ]
          }
        ] 
      },
      { 
        name: "Piedmont", methods: "Nebbiolo specialists with long oak aging.", 
        wines: [
          { name: "Barolo", grape: "Nebbiolo", pro: "The King. High tannin, high acid. Needs age.", subTypes: [{level: "DOCG", rule: "Standard blend"}, {level: "Riserva", rule: "5 years aging"}] },
          { name: "Barbaresco", grape: "Nebbiolo", pro: "The Queen. More elegant and floral.", subTypes: [{level: "DOCG", rule: "Standard"}, {level: "Riserva", rule: "4 years aging"}] }
        ] 
      },
      { name: "Veneto", methods: "Appassimento technique.", wines: [{ name: "Amarone", grape: "Corvina Blend", pro: "Dried grapes. Intense and 15% alc.", subTypes: [{level: "Standard", rule: "2 years oak"}, {level: "Riserva", rule: "4 years oak"}] }] },
      { name: "Sicily", methods: "Volcanic Mt. Etna.", wines: [{ name: "Etna Rosso", grape: "Nerello", pro: "Elegant/Smoky." }] },
      { name: "Puglia", methods: "Intense sun.", wines: [{ name: "Primitivo", grape: "Primitivo", pro: "Bold and Jammy." }] },
      { name: "Alto Adige", methods: "Alpine slopes.", wines: [{ name: "Pinot Grigio", grape: "Pinot Grigio", pro: "Mineral/Zesty." }] }
    ]
  },
  {
    id: "france",
    name: "France",
    description: "The global benchmark for Terroir.",
    subRegions: [
      { 
        name: "Burgundy", methods: "Hierarchy based on specific soil plots.", 
        wines: [
          { 
            name: "Côte d'Or", grape: "Pinot Noir / Chardonnay", 
            pro: "Hierarchy moves from wide regions to tiny, expensive plots.",
            subTypes: [
              { level: "Regional", rule: "Entry level. Grapes from across Burgundy." },
              { level: "Village", rule: "Specific town (e.g., Gevrey-Chambertin)." },
              { level: "Premier Cru", rule: "High-quality specific vineyard slopes." },
              { level: "Grand Cru", rule: "The Top 1%. Incredible power and aging." }
            ]
          }
        ] 
      },
      { 
        name: "Bordeaux", methods: "Left Bank (Cabernet) vs Right Bank (Merlot).", 
        wines: [
          { name: "Médoc", grape: "Cabernet Blend", pro: "Left Bank. Cedar, lead, structured.", subTypes: [{level: "Village", rule: "e.g. Pauillac"}, {level: "Cru Classé", rule: "Ranked since 1855"}] },
          { name: "Saint-Émilion", grape: "Merlot Blend", pro: "Right Bank. Plush, plum, and soft." }
        ] 
      },
      { name: "Champagne", methods: "Traditional Method bubbles.", wines: [{ name: "Champagne", grape: "Blend", pro: "Brioche and yeast notes.", subTypes: [{level: "Non-Vintage", rule: "Consistency"}, {level: "Vintage", rule: "Great years only"}, {level: "Prestige", rule: "The house's best"}] }] }
    ]
  },
  {
    id: "spain",
    name: "Spain",
    description: "Focus on American Oak aging categories.",
    subRegions: [
      { 
        name: "Rioja", methods: "Classification by time spent in oak barrels.", 
        wines: [
          { 
            name: "Tempranillo", grape: "Tempranillo", 
            pro: "The label color tells you the age and oak level.",
            subTypes: [
              { level: "Crianza", rule: "1 year in oak. Fresh and fruity." },
              { level: "Reserva", rule: "3 years aging. Tobacco and leather." },
              { level: "Gran Reserva", rule: "5 years aging. Developed and silky." }
            ]
          }
        ] 
      }
    ]
  },
  {
    id: "germany",
    name: "Germany",
    description: "Precision acidity and ripeness scales.",
    subRegions: [
      { 
        name: "Mosel", methods: "Blue slate soil and Pradikat ripeness scale.", 
        wines: [
          { 
            name: "Riesling", grape: "Riesling", 
            pro: "Electric acidity. Scale goes from bone-dry to sweet.",
            subTypes: [
              { level: "Kabinett", rule: "Light and off-dry." },
              { level: "Spätlese", rule: "Late harvest, richer fruit." },
              { level: "Auslese", rule: "Selected bunches, very intense." }
            ]
          }
        ] 
      }
    ]
  }
];
