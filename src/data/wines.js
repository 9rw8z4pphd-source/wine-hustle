// src/data/wines.js
export const WINE_LIBRARY = {
  // --- ITALY ---
  piedmont: [
    { name: "Barolo DOCG", grape: "Nebbiolo", pro: "The King of Wines. Powerful tannins, notes of tar and roses.", subTypes: [{level: "Commune", rule: "La Morra (Elegant) vs Serralunga (Powerful)"}, {level: "Riserva", rule: "Aged 5 years (18mo in oak)"}], food: ["Truffle", "Beef"] },
    { name: "Barbaresco DOCG", grape: "Nebbiolo", pro: "The Queen. More elegant and approachable than Barolo.", food: ["Duck"] },
    { name: "Gavi di Gavi", grape: "Cortese", pro: "The 'White Knight'. Bone-dry, lime, and flinty.", food: ["Seafood"] },
    { name: "Barbera d'Asti", grape: "Barbera", pro: "High acidity, low tannin. The ultimate food wine.", food: ["Pizza", "Pasta"] },
    { name: "Dolcetto d'Alba", grape: "Dolcetto", pro: "Soft, fruity, and meant to be drunk young.", food: ["Charcuterie"] }
  ],
  tuscany: [
    { name: "Chianti Family", grape: "Sangiovese", pro: "Italy's signature red. Quality depends on sub-zone and aging.", subTypes: [{level: "Classico", rule: "The historic heartland"}, {level: "Riserva", rule: "24mo aging"}, {level: "Gran Selezione", rule: "30mo aging, estate fruit"}], food: ["Bolognese"] },
    { name: "Brunello di Montalcino", grape: "Sangiovese Grosso", pro: "100% Sangiovese. Massive power and required 5-year aging.", subTypes: [{level: "Rosso", rule: "Baby Brunello (fresh)"}, {level: "DOCG", rule: "The main legend"}, {level: "Riserva", rule: "6 years aging"}], food: ["Steak"] },
    { name: "Bolgheri", grape: "Cabernet Blend", pro: "The 'Super Tuscans'. International style, rich and polished.", food: ["Ribeye"] },
    { name: "Vernaccia", grape: "Vernaccia", pro: "Crisp white with a classic almond finish.", food: ["White Fish"] }
  ],
  veneto: [
    { name: "Amarone", grape: "Corvina Blend", pro: "Grapes dried for 100 days. Intense, high alcohol, raisinated.", food: ["Venison"] },
    { name: "Ripasso", grape: "Corvina", pro: "Baby Amarone. Re-fermented on Amarone skins.", food: ["Osso Buco"] },
    { name: "Prosecco DOCG", grape: "Glera", pro: "The superior hills of Valdobbiadene. Fresh and floral.", food: ["Aperitivo"] },
    { name: "Soave", grape: "Garganega", pro: "Volcanic white wine. Peach and saline notes.", food: ["Risotto"] }
  ],
  sicily: [
    { name: "Etna Rosso", grape: "Nerello Mascalese", pro: "Smoky, elegant, and light-colored. Alpine style in the South.", food: ["Tuna"] },
    { name: "Nero d'Avola", grape: "Nero d'Avola", pro: "Black fruit and sun-drenched power.", food: ["Burgers"] },
    { name: "Grillo", grape: "Grillo", pro: "Salty, citrusy, and perfect for the beach.", food: ["Fried Fish"] }
  ],
  puglia: [
    { name: "Primitivo", grape: "Primitivo", pro: "Full-bodied, jammy, and high alcohol.", food: ["BBQ"] },
    { name: "Negroamaro", grape: "Negroamaro", pro: "Earthy, dark, and slightly bitter finish.", food: ["Meatballs"] }
  ],
  alto_adige: [
    { name: "Pinot Grigio", grape: "Pinot Grigio", pro: "Dry, zesty, and mineral-driven Alpine white.", food: ["Salads"] },
    { name: "Lagrein", grape: "Lagrein", pro: "Unique red with forest fruit and velvety tannins.", food: ["Speck"] }
  ],
  lombardy: [
    { name: "Franciacorta", grape: "Chard/Pinot", pro: "Italy's answer to Champagne. Traditional method bubbles.", food: ["Parmesan"] }
  ],
  emilia_romagna: [
    { name: "Lambrusco", grape: "Lambrusco", pro: "Sparkling red wine. Can be bone-dry or sweet.", food: ["Lasagna"] }
  ],
  campania: [
    { name: "Fiano di Avellino", grape: "Fiano", pro: "Smoky, honeyed, and complex ancient white.", food: ["Shellfish"] },
    { name: "Taurasi", grape: "Aglianico", pro: "The 'Barolo of the South'. Huge tannins and longevity.", food: ["Braised Beef"] }
  ],
  abruzzo: [
    { name: "Montepulciano d'Abruzzo", grape: "Montepulciano", pro: "Deep purple, rustic, and very reliable.", food: ["Lamb"] }
  ],

  // --- FRANCE ---
  bordeaux: [
    { name: "Left Bank (Médoc)", grape: "Cabernet", pro: "Structure and cedar notes. The land of Chateaux.", subTypes: [{level: "Cru Bourgeois", rule: "Quality value"}, {level: "Grand Cru Classé", rule: "The 1855 Ranking"}], food: ["Lamb"] },
    { name: "Right Bank (Pomerol)", grape: "Merlot", pro: "Velvety, plush, and plum-forward.", food: ["Roast Beef"] },
    { name: "Sauternes", grape: "Sémillon", pro: "Sweet 'Noble Rot' wine. Honey and apricot.", food: ["Blue Cheese"] }
  ],
  burgundy: [
    { name: "Côte de Nuits", grape: "Pinot Noir", pro: "The world's most elegant red. Focus on soil.", subTypes: [{level: "Village", rule: "Classic town style"}, {level: "1er Cru", rule: "Specific hillside"}, {level: "Grand Cru", rule: "The 1% top sites"}], food: ["Duck"] },
    { name: "Côte de Beaune", grape: "Chardonnay", pro: "Rich, oaked, and buttery whites.", food: ["Lobster"] },
    { name: "Chablis", grape: "Chardonnay", pro: "Unoaked, saline, and 'flinty' mineral white.", food: ["Oysters"] }
  ],
  champagne: [
    { name: "Champagne", grape: "Blend", pro: "Bubbles made in this specific bottle with yeast aging.", subTypes: [{level: "NV", rule: "House Style"}, {level: "Vintage", rule: "Great years"}, {level: "Blanc de Blancs", rule: "100% Chardonnay"}], food: ["Fried Chicken"] }
  ],
  rhone: [
    { name: "North Rhône", grape: "Syrah", pro: "Black pepper, olive, and meat notes.", food: ["Grilled Meat"] },
    { name: "South Rhône (CdP)", grape: "Grenache Blend", pro: "Spicy, warm, and high-volume fruit.", food: ["Stew"] }
  ],
  loire: [
    { name: "Sancerre", grape: "Sauvignon Blanc", pro: "Crisp, grass, and gunflint minerality.", food: ["Goat Cheese"] },
    { name: "Chinon", grape: "Cabernet Franc", pro: "Bell pepper and raspberry. Light and savory.", food: ["Pork"] }
  ],
  alsace: [
    { name: "Alsace Riesling", grape: "Riesling", pro: "Dry, aromatic, and very powerful.", food: ["Choucroute"] }
  ],
  provence: [
    { name: "Provence Rosé", grape: "Grenache Blend", pro: "The global gold standard for pale, dry Rosé.", food: ["Salads"] }
  ],
  languedoc: [
    { name: "Languedoc Red", grape: "GSM Blend", pro: "Wild herbs (Garrigue) and dark fruit value.", food: ["BBQ"] }
  ]
};
