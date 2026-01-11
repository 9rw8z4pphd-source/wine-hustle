export const WINE_LIBRARY = {
  // ITALY
  tuscany: [
    { 
      name: "Chianti Family", grape: "Sangiovese", 
      pro: "The soul of Tuscany. From easy-drinking DOCG to the prestigious Gran Selezione.",
      subTypes: [
        { level: "Chianti DOCG", rule: "Young, fruity, no oak requirement. Drink now." },
        { level: "Classico", rule: "From the historic heart. More structure and mineral." },
        { level: "Classico Riserva", rule: "Aged 24 months. Developed spice and leather notes." },
        { level: "Gran Selezione", rule: "30 months aging. Single estate fruit. The peak tier." }
      ],
      food: ["Bolognese", "Pizza", "Pecorino"]
    },
    { 
      name: "Brunello di Montalcino", grape: "Sangiovese Grosso", 
      pro: "A powerhouse. One of Italy's most age-worthy and expensive reds.",
      subTypes: [
        { level: "Rosso di Montalcino", rule: "The 'Baby Brunello'. Fresh and accessible." },
        { level: "Brunello DOCG", rule: "Required 5 years aging (2 in oak). Earthy and massive." },
        { level: "Brunello Riserva", rule: "6 years aging. Only made in exceptional vintages." }
      ],
      food: ["Wild Boar", "T-Bone Steak"]
    },
    { name: "Bolgheri / Super Tuscan", grape: "Bordeaux Blend", pro: "Coastal power. Polished, oaky, and international.", food: ["Ribeye"] },
    { name: "Vino Nobile di Montepulciano", grape: "Prugnolo Gentile", pro: "Elegant, floral, and softer than Brunello.", food: ["Roast Pork"] },
    { name: "Vernaccia di San Gimignano", grape: "Vernaccia", pro: "The great white of the towers. Crisp and almond-toned.", food: ["Seafood"] }
  ],
  piedmont: [
    { name: "Barolo", grape: "Nebbiolo", pro: "The King. Rose, tar, and high tannin. Needs fat.", subTypes: [{level: "Commune", rule: "e.g. La Morra (soft) vs Serralunga (power)"}, {level: "Riserva", rule: "5+ years aging"}], food: ["Truffle"] },
    { name: "Barbaresco", grape: "Nebbiolo", pro: "The Queen. More elegant, floral, and approachable.", food: ["Duck"] },
    { name: "Barbera d'Asti", grape: "Barbera", pro: "High acid, low tannin. The ultimate food red.", food: ["Salumi"] },
    { name: "Gavi di Gavi", grape: "Cortese", pro: "Bone-dry, lime, and flinty minerality.", food: ["Branzino"] },
    { name: "Dolcetto d'Alba", grape: "Dolcetto", pro: "Dark fruit and bitter almond finish. Easy-drinking.", food: ["Pasta"] },
    { name: "Roero Arneis", grape: "Arneis", pro: "Peach, apricot, and medium body white.", food: ["Chicken"] }
  ],
  veneto: [
    { name: "Amarone della Valpolicella", grape: "Corvina Blend", pro: "Dried grapes. Intense, 15%+ alc, raisinated fruit.", food: ["Blue Cheese", "Venison"] },
    { name: "Valpolicella Ripasso", grape: "Corvina", pro: "Re-passed over Amarone skins for extra body.", food: ["Osso Buco"] },
    { name: "Soave Classico", grape: "Garganega", pro: "Volcanic white. Lemon, saline, and almond notes.", food: ["Risotto"] },
    { name: "Prosecco Superiore", grape: "Glera", pro: "Fine bubbles from the DOCG quality hills.", food: ["Aperitivo"] },
    { name: "Bardolino", grape: "Corvina", pro: "Light, chilled red. Perfect for summer/fish.", food: ["Grilled Fish"] }
  ],
  sicily: [
    { name: "Etna Rosso", grape: "Nerello Mascalese", pro: "The 'Burgundy of the Mediterranean'. Smoky/Floral.", food: ["Tuna"] },
    { name: "Nero d'Avola", grape: "Nero d'Avola", pro: "Dark, plummy, and sun-drenched power.", food: ["BBQ"] },
    { name: "Grillo", grape: "Grillo", pro: "Zesty coastal white with saline finish.", food: ["Calamari"] },
    { name: "Frappato", grape: "Frappato", pro: "Light, aromatic, and strawberry-scented.", food: ["Couscous"] }
  ],
  puglia: [
    { name: "Primitivo di Manduria", grape: "Primitivo", pro: "Jammy, bold, and high alcohol. Rich fruit.", food: ["Lamb Stew"] },
    { name: "Salice Salentino", grape: "Negroamaro", pro: "Deep, dusty, and savory Mediterranean red.", food: ["Meatballs"] }
  ],
  alto_adige: [
    { name: "Pinot Grigio", grape: "Pinot Grigio", pro: "Alpine precision. Zesty, mineral, and clean.", food: ["Salads"] },
    { name: "Gewürztraminer", grape: "Gewürztraminer", pro: "Explosive lychee and rose petal aromatics.", food: ["Spicy Asian"] }
  ],
  // FRANCE
  burgundy: [
    { name: "Gevrey-Chambertin", grape: "Pinot Noir", pro: "Structure and power. The most 'masculine' Pinot.", subTypes: [{level: "Village", rule: "Classic"}, {level: "1er Cru", rule: "Refined"}, {level: "Grand Cru", rule: "Epic"}], food: ["Steak"] },
    { name: "Meursault", grape: "Chardonnay", pro: "Rich, buttery, and hazelnut complexity.", food: ["Lobster"] },
    { name: "Chablis", grape: "Chardonnay", pro: "Unoaked, saline, and sharp as a razor.", food: ["Oysters"] }
  ]
};
