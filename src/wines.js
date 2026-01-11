export const WINE_LIBRARY = {
  piedmont: [
    { 
      name: "Barolo DOCG", 
      grape: "Nebbiolo", 
      pro: "The 'King of Wines'. Known for massive longevity and structural power.",
      tech_specs: {
        aging: "38 months (18 in wood); Riserva requires 62 months.",
        terroir: "Tortonian soil (La Morra/Barolo) vs Helvetian (Serralunga/Monforte).",
        elevation: "250m - 450m on south-facing slopes."
      },
      subTypes: [
        {level: "Commune: Serralunga d'Alba", rule: "Iron-rich soils; most tannic and long-lived."},
        {level: "Commune: La Morra", rule: "Manganese-rich soils; softer, more perfumed style."}
      ]
    },
    { 
      name: "Barbaresco DOCG", 
      grape: "Nebbiolo", 
      pro: "Often more elegant than Barolo due to lower elevation and proximity to the Tanaro river.",
      tech_specs: { aging: "26 months (9 in wood); Riserva 50 months." }
    },
    { 
      name: "Gattinara DOCG", 
      grape: "Nebbiolo", 
      pro: "Northern Piedmont style. Volcanic soils provide a distinct 'iron' or blood-like minerality." 
    }
  ],
  tuscany: [
    { 
      name: "Brunello di Montalcino DOCG", 
      grape: "Sangiovese Grosso", 
      pro: "The pinnacle of Sangiovese. A dry, hot microclimate produces immense concentration.",
      tech_specs: { 
        aging: "5 years total (2 in oak, 4 months in bottle).",
        requirement: "100% Sangiovese; no blending allowed."
      }
    },
    { 
      name: "Chianti Classico DOCG", 
      grape: "Sangiovese", 
      pro: "The historic heartland between Florence and Siena.",
      subTypes: [
        {level: "Gran Selezione", rule: "Single estate fruit; 30 months aging; strict lab testing."}
      ]
    }
  ],
  bordeaux: [
    {
      name: "Pauillac (Left Bank)",
      grape: "Cabernet Sauvignon",
      pro: "The 'Powerhouse' of Bordeaux. Home to 3 of the 5 First Growths.",
      tech_specs: { soil: "Deep Garonne gravel; perfect drainage for Cabernet." }
    },
    {
      name: "Pomerol (Right Bank)",
      grape: "Merlot",
      pro: "Plush, opulent, and expensive. Iron-rich blue clay (Crasse de fer) is the secret to Petrus.",
      tech_specs: { soil: "Blue Clay & Gravel." }
    }
  ]
};
