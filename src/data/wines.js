export const WINE_LIBRARY = {
  // --- ITALY ---
  piedmont: [
    { name: "Barolo", grape: "Nebbiolo", pro: "The King. Tar, roses, and massive tannins.", subTypes: [{level: "Riserva", rule: "5 years aging"}, {level: "Cannubi", rule: "Example of a prestigious Cru"}] },
    { name: "Barbaresco", grape: "Nebbiolo", pro: "The Queen. More elegant and perfume-driven." },
    { name: "Gavi di Gavi", grape: "Cortese", pro: "Bone-dry, lime, and flinty minerality." },
    { name: "Barbera d'Asti", grape: "Barbera", pro: "Juicy, high acid, low tannin. The food red." },
    { name: "Moscato d'Asti", grape: "Moscato", pro: "Sweet, fizzy, and low alcohol dessert wine." }
  ],
  tuscany: [
    { name: "Chianti Classico", grape: "Sangiovese", pro: "The historic heart. Cherry and herbs.", subTypes: [{level: "Riserva", rule: "24mo oak"}, {level: "Gran Selezione", rule: "30mo estate only"}] },
    { name: "Brunello di Montalcino", grape: "Sangiovese Grosso", pro: "Powerful and built for 20+ years.", subTypes: [{level: "Rosso", rule: "Fresh Baby Brunello"}, {level: "DOCG", rule: "Standard legend"}] },
    { name: "Bolgheri", grape: "Bordeaux Blend", pro: "The Super Tuscans. Polished and international." },
    { name: "Vino Nobile", grape: "Prugnolo Gentile", pro: "The 'Noble' wine of Montepulciano." }
  ],
  veneto: [
    { name: "Amarone della Valpolicella", grape: "Corvina Blend", pro: "Raisinated grapes. Intense and powerful." },
    { name: "Prosecco Superiore", grape: "Glera", pro: "The high-quality DOCG bubbles from the hills." },
    { name: "Soave Classico", grape: "Garganega", pro: "Volcanic, saline, and peach-toned white." }
  ],
  sicily: [
    { name: "Etna Rosso", grape: "Nerello Mascalese", pro: "Volcanic 'Burgundy'. Smoky and elegant." },
    { name: "Nero d'Avola", grape: "Nero d'Avola", pro: "Deep, dark fruit and sun-drenched power." }
  ],
  puglia: [{ name: "Primitivo", grape: "Primitivo", pro: "Bold, jammy, and high alcohol." }],
  alto_adige: [{ name: "Pinot Grigio", grape: "Pinot Grigio", pro: "Alpine precision and zesty mineral." }],
  emilia_romagna: [{ name: "Lambrusco Grasparossa", grape: "Lambrusco", pro: "Sparkling red with deep color." }],
  abruzzo: [{ name: "Montepulciano d'Abruzzo", grape: "Montepulciano", pro: "Rustic, purple, and reliable." }],
  lombardy: [{ name: "Franciacorta", grape: "Chardonnay/Pinot", pro: "Italy's finest traditional method bubbles." }],
  campania: [{ name: "Fiano di Avellino", grape: "Fiano", pro: "Smoky, honeyed, and complex white." }],

  // --- FRANCE ---
  bordeaux: [
    { name: "Pauillac (Left Bank)", grape: "Cabernet", pro: "Powerful, cedar, and pencil lead notes." },
    { name: "Saint-Émilion (Right Bank)", grape: "Merlot", pro: "Plush, chocolatey, and soft tannins." },
    { name: "Sauternes", grape: "Sémillon", pro: "World-class sweet botrytis wine." }
  ],
  burgundy: [
    { name: "Gevrey-Chambertin", grape: "Pinot Noir", pro: "Structured and masculine Pinot Noir." },
    { name: "Meursault", grape: "Chardonnay", pro: "Rich, buttery, and hazelnut notes." },
    { name: "Chablis", grape: "Chardonnay", pro: "Steely, high acid, and oyster-shell mineral." }
  ],
  champagne: [{ name: "Champagne", grape: "Chard/Pinot", pro: "The pinnacle of sparkling wine.", subTypes: [{level: "NV", rule: "Consistency"}, {level: "Vintage", rule: "Greatest years only"}] }],
  rhone: [
    { name: "Hermitage", grape: "Syrah", pro: "Smoky, meaty, and world-class North Rhône red." },
    { name: "Châteauneuf-du-Pape", grape: "Grenache Blend", pro: "Spicy, warm, and massive Southern red." }
  ],
  loire: [{ name: "Sancerre", grape: "Sauvignon Blanc", pro: "Pure, grassy, and chalky minerality." }],
  alsace: [{ name: "Alsace Riesling", grape: "Riesling", pro: "Powerful, dry, and aromatic." }],
  provence: [{ name: "Cotes de Provence", grape: "Grenache/Cinsault", pro: "The gold standard for pale Rosé." }],
  languedoc: [{ name: "Picpoul de Pinet", grape: "Picpoul", pro: "The 'Lip-Stinger' white for seafood." }],

  // --- USA ---
  napa: [
    { name: "Oakville Cabernet", grape: "Cabernet", pro: "Velvety, rich, and perfectly balanced." },
    { name: "Rutherford Cabernet", grape: "Cabernet", pro: "Famous for 'Rutherford Dust' tannins." }
  ],
  sonoma: [{ name: "Russian River Valley", grape: "Pinot Noir", pro: "Cola and cherry-toned, cool-climate Pinot." }],
  oregon: [{ name: "Willamette Valley", grape: "Pinot Noir", pro: "The American home for earthy Pinot." }],
  washington: [{ name: "Walla Walla Syrah", grape: "Syrah", pro: "Meaty, bold, and structured." }],
  central_coast: [{ name: "Santa Barbara", grape: "Chardonnay", pro: "Tropical fruit and bright acidity." }],
  finger_lakes: [{ name: "Finger Lakes Riesling", grape: "Riesling", pro: "Razor-sharp acidity and lime." }],

  // --- SPAIN ---
  rioja: [
    { name: "Rioja Reserva", grape: "Tempranillo", pro: "Vanilla, dill, and leather notes.", subTypes: [{level: "Crianza", rule: "1yr oak"}, {level: "Reserva", rule: "3yr age"}, {level: "Gran Reserva", rule: "5yr age"}] }
  ],
  ribera: [{ name: "Ribera del Duero", grape: "Tinto Fino", pro: "Powerful, dark, and intense Tempranillo." }],
  priorat: [{ name: "Priorat", grape: "Garnacha/Cariñena", pro: "Volcanic slate (Llicorella) power." }],
  rías_baixas: [{ name: "Albariño", grape: "Albariño", pro: "Peach, apricot, and Atlantic saltiness." }],
  jerez: [{ name: "Fino Sherry", grape: "Palomino", pro: "Bone-dry, nutty, and yeast-influenced." }],
  catalonia: [{ name: "Cava", grape: "Xarel-lo Blend", pro: "Traditional method sparkling value." }],

  // --- NEW ZEALAND ---
  marlborough: [{ name: "Marlborough Sauv Blanc", grape: "Sauvignon Blanc", pro: "Explosive passionfruit and grass." }],
  central_otago: [{ name: "Central Otago Pinot", grape: "Pinot Noir", pro: "Muscular, dark cherry, and spice." }],
  hawkes_bay: [{ name: "Hawke's Bay Syrah", grape: "Syrah", pro: "Floral, peppery, and elegant." }],
  martinborough: [{ name: "Martinborough Pinot", grape: "Pinot Noir", pro: "Savory, complex, and small-batch." }],

  // --- AUSTRALIA ---
  barossa: [{ name: "Barossa Shiraz", grape: "Shiraz", pro: "Old vines, chocolate, and dark fruit power." }],
  mclaren_vale: [{ name: "McLaren Vale Shiraz", grape: "Shiraz", pro: "Coastal influence, soft and rich." }],
  yarra: [{ name: "Yarra Valley Chardonnay", grape: "Chardonnay", pro: "Modern, lean, and citrus-focused." }],
  margaret_river: [{ name: "Margaret River Cabernet", grape: "Cabernet", pro: "Bordeaux elegance with Aussie sun." }],
  hunter_valley: [{ name: "Hunter Semillon", grape: "Semillon", pro: "Low alcohol, high acid, ages for decades." }],

  // --- ARGENTINA ---
  mendoza: [
    { name: "Uco Valley Malbec", grape: "Malbec", pro: "Floral, high-altitude, and refined.", subTypes: [{level: "Classic", rule: "Fruit forward"}, {level: "Gran Reserva", rule: "Heavy oak and age"}] }
  ],
  salta: [{ name: "Torrontés", grape: "Torrontés", pro: "Highly aromatic white; lychee and roses." }],
  patagonia: [{ name: "Patagonia Pinot Noir", grape: "Pinot Noir", pro: "Cool-climate, fresh, and elegant." }],

  // --- GERMANY ---
  mosel: [{ name: "Mosel Riesling", grape: "Riesling", pro: "Light, low alcohol, and slate minerality.", subTypes: [{level: "Kabinett", rule: "Off-dry"}, {level: "Spätlese", rule: "Late harvest richness"}] }],
  rheingau: [{ name: "Rheingau Riesling", grape: "Riesling", pro: "Drier and more powerful than Mosel." }],
  pfalz: [{ name: "Pfalz Spätburgunder", grape: "Pinot Noir", pro: "Warm-climate German Pinot Noir." }],
  rheinhessen: [{ name: "Rheinhessen Dry", grape: "Riesling", pro: "The home of 'GG' (Grand Cru) dry wines." }]
};
