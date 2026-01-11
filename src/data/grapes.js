export const GRAPES_DATA = [
  // --- PREVIOUSLY ADDED ---
  {
    id: "sangiovese",
    name: "Sangiovese",
    origin: "Tuscany, Italy",
    stats: { acidity: 5, tannin: 4, body: 3, alcohol: 3 },
    summary: "The backbone of Italian reds. Its name translates to 'The Blood of Jove'.",
    description: "Highly sensitive to terroir. It is savory and rustic, known for high acidity that makes it the ultimate food partner.",
    flavors: ["Red Cherry", "Roasted Tomato", "Balsamic", "Dried Oregano"],
    regions: ["Tuscany", "Umbria", "Romagna", "Washington State"],
    style: "Savory & High Acid"
  },
  {
    id: "nebbiolo",
    name: "Nebbiolo",
    origin: "Piedmont, Italy",
    stats: { acidity: 5, tannin: 5, body: 4, alcohol: 4 },
    summary: "A 'detective' grape: looks light like Pinot Noir, but hits like a heavyweight.",
    description: "Famous for its 'Tar and Roses' aroma. It has incredibly high tannins and acidity, requiring years of aging to soften.",
    flavors: ["Rose Petal", "Tar", "Leather", "Sour Cherry"],
    regions: ["Piedmont", "Valtellina", "Yarra Valley"],
    style: "Powerful & Aromatic"
  },
  {
    id: "cabernet-sauvignon",
    name: "Cabernet Sauvignon",
    origin: "Bordeaux, France",
    stats: { acidity: 3, tannin: 5, body: 5, alcohol: 4 },
    summary: "The world's most famous black grape. Known for its structure and longevity.",
    description: "Thick skins provide deep color and high tannins, making it the perfect candidate for aging in French Oak.",
    flavors: ["Blackcurrant", "Cedar", "Baking Spices", "Graphite"],
    regions: ["Bordeaux", "Napa Valley", "Coonawarra", "Maipo Valley"],
    style: "Structured & Full Bodied"
  },
  {
    id: "sauvignon-blanc",
    name: "Sauvignon Blanc",
    origin: "Loire Valley, France",
    stats: { acidity: 5, tannin: 0, body: 2, alcohol: 3 },
    summary: "A crisp, aromatic white that 'punches' out of the glass.",
    description: "Known for its 'green' profile. Producers prefer to preserve its electric acidity and pungent aromatics without oak.",
    flavors: ["Gooseberry", "Passionfruit", "Fresh Cut Grass", "Lime"],
    regions: ["Marlborough", "Sancerre", "Adelaide Hills"],
    style: "Crisp & Herbaceous"
  },

  // --- NEW 8 MAJOR ADDITIONS ---
  {
    id: "pinot-noir",
    name: "Pinot Noir",
    origin: "Burgundy, France",
    stats: { acidity: 4, tannin: 2, body: 2, alcohol: 3 },
    summary: "The world's most coveted light-bodied red. Elegant and temperamental.",
    description: "Often called 'the heartbreaker' because it is difficult to grow. It results in translucent, aromatic wines with silky tannins.",
    flavors: ["Raspberry", "Mushroom", "Forest Floor", "Hibiscus"],
    regions: ["Burgundy", "Willamette Valley", "Central Otago", "Sonoma"],
    style: "Elegant & Earthy"
  },
  {
    id: "merlot",
    name: "Merlot",
    origin: "Bordeaux, France",
    stats: { acidity: 3, tannin: 3, body: 4, alcohol: 4 },
    summary: "The 'velvet' grape. Often blended with Cabernet to soften its edges.",
    description: "Merlot provides a rounder, plusher mouthfeel. It is higher in sugar and lower in tannin than Cabernet Sauvignon.",
    flavors: ["Plum", "Blackberry", "Chocolate", "Dried Herbs"],
    regions: ["Bordeaux (Right Bank)", "Napa Valley", "Tuscany", "Washington"],
    style: "Plush & Velvety"
  },
  {
    id: "syrah-shiraz",
    name: "Syrah / Shiraz",
    origin: "Rhône Valley, France",
    stats: { acidity: 3, tannin: 4, body: 5, alcohol: 5 },
    summary: "A dark-skinned grape that produces some of the world's deep-colored wines.",
    description: "Known as Syrah in France (savory/peppery) and Shiraz in Australia (fruit-forward/bold). It is famous for its dark fruit and meaty notes.",
    flavors: ["Blueberry", "Black Pepper", "Tobacco", "Cured Meat"],
    regions: ["Northern Rhône", "Barossa Valley", "Stellenbosch", "Walla Walla"],
    style: "Bold & Peppery"
  },
  {
    id: "chardonnay",
    name: "Chardonnay",
    origin: "Burgundy, France",
    stats: { acidity: 3, tannin: 0, body: 4, alcohol: 4 },
    summary: "The 'chameleon' of white grapes. It tastes like where it's grown and how it's made.",
    description: "Highly responsive to winemaking. Cool climates yield citrus/mineral; warm climates yield tropical/buttery (when oaked).",
    flavors: ["Yellow Apple", "Lemon Peel", "Vanilla", "Butter"],
    regions: ["Burgundy", "Napa Valley", "Margaret River", "Chablis"],
    style: "Versatile & Textured"
  },
  {
    id: "riesling",
    name: "Riesling",
    origin: "Rhine, Germany",
    stats: { acidity: 5, tannin: 0, body: 1, alcohol: 2 },
    summary: "The most aromatic and terroir-expressive white wine in the world.",
    description: "Uniquely high acidity allows it to age for decades. It can be bone-dry or intensely sweet, always remaining light on its feet.",
    flavors: ["Lime", "Green Apple", "Honeycomb", "Petroleum"],
    regions: ["Mosel", "Rheingau", "Alsace", "Finger Lakes"],
    style: "Aromatic & Electric"
  },
  {
    id: "tempranillo",
    name: "Tempranillo",
    origin: "Spain",
    stats: { acidity: 3, tannin: 4, body: 4, alcohol: 4 },
    summary: "Spain's noble grape. Known for its affinity for long-term oak aging.",
    description: "Its name comes from 'temprano' (early), as it ripens weeks before most Spanish red grapes. It is the core of Rioja.",
    flavors: ["Dried Fig", "Dill", "Leather", "Cherry"],
    regions: ["Rioja", "Ribera del Duero", "Paso Robles"],
    style: "Savory & Oak-Influenced"
  },
  {
    id: "malbec",
    name: "Malbec",
    origin: "Cahors, France",
    stats: { acidity: 3, tannin: 4, body: 5, alcohol: 4 },
    summary: "A French native that found its true home in the high altitudes of Argentina.",
    description: "Malbec is known for its deep purple color and 'magenta' rim. It offers a big, juicy mid-palate and a smooth finish.",
    flavors: ["Black Plum", "Cocoa", "Violet", "Vanilla"],
    regions: ["Mendoza", "Cahors", "Wahluke Slope"],
    style: "Juicy & Jammy"
  },
  {
    id: "grenache",
    name: "Grenache / Garnacha",
    origin: "Spain",
    stats: { acidity: 3, tannin: 2, body: 5, alcohol: 5 },
    summary: "High alcohol, low tannin, and massive red fruit flavors.",
    description: "The workhorse of the Mediterranean. It thrives in hot, windy conditions and is the star of Châteauneuf-du-Pape.",
    flavors: ["Strawberry", "White Pepper", "Dried Cranberry", "Baking Spices"],
    regions: ["Rhône Valley", "Priorat", "McLaren Vale"],
    style: "Warm & Spicy"
  }
];
