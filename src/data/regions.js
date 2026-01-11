export const REGIONS_DATA = [
  {
    id: "italy",
    name: "Italy",
    description: "20 Regions, 1000+ grapes. The land of acidity and tradition.",
    image: "/images/italy-hero.jpg",
    subRegions: [
      { name: "Piedmont", methods: "Long maceration, Botte aging.", wines: [{name:"Barolo", grape:"Nebbiolo", pro:"King of wines."}, {name:"Barbaresco", grape:"Nebbiolo", pro:"The Queen; more elegant."}, {name:"Gavi", grape:"Cortese", pro:"Crisp, mineral white."}] },
      { name: "Tuscany", methods: "Sangiovese blends, French Barrique.", wines: [{name:"Brunello", grape:"Sangiovese", pro:"Power & Longevity."}, {name:"Chianti Classico", grape:"Sangiovese", pro:"The Black Rooster standard."}, {name:"Bolgheri", grape:"Cabernet/Merlot", pro:"The Super Tuscans."}] },
      { name: "Veneto", methods: "Appassimento (Dried grapes).", wines: [{name:"Amarone", grape:"Corvina", pro:"Rich, dried fruit flavors."}, {name:"Valpolicella", grape:"Corvina", pro:"Fresh cherry flavors."}, {name:"Prosecco", grape:"Glera", pro:"Charmat method bubbles."}] },
      { name: "Alto Adige", methods: "Alpine viticulture.", wines: [{name:"Pinot Grigio", grape:"Pinot Grigio", pro:"High-altitude, flinty."}, {name:"Gewürztraminer", grape:"Gewürztraminer", pro:"Highly aromatic, lychee."}] },
      { name: "Sicily", methods: "Volcanic soil (Etna).", wines: [{name:"Etna Rosso", grape:"Nerello Mascalese", pro:"The Burgundy of the Mediterranean."}, {name:"Grillo", grape:"Grillo", pro:"Saline, citrusy white."}] },
      { name: "Puglia", methods: "Hot climate, high extraction.", wines: [{name:"Primitivo", grape:"Primitivo", pro:"Jammy, high alcohol, bold."}] },
      { name: "Campania", methods: "Ancient volcanic grapes.", wines: [{name:"Taurasi", grape:"Aglianico", pro:"The Barolo of the South."}] }
    ]
  },
  {
    id: "france",
    name: "France",
    description: "The global benchmark for structure and elegance.",
    image: "/images/france-hero.jpg",
    subRegions: [
      { name: "Bordeaux", methods: "Blending (Assemblage), New Oak.", wines: [{name:"Médoc", grape:"Cabernet Sauvignon", pro:"Left bank, gravel soil."}, {name:"St-Émilion", grape:"Merlot", pro:"Right bank, clay soil."}, {name:"Sauternes", grape:"Semillon/Sauvignon", pro:"Noble rot sweet wine."}] },
      { name: "Burgundy", methods: "Single vineyard (Climat) focus.", wines: [{name:"Chablis", grape:"Chardonnay", pro:"Pure mineral, no oak."}, {name:"Côte de Nuits", grape:"Pinot Noir", pro:"World-class red."}, {name:"Côte de Beaune", grape:"Chardonnay", pro:"World-class white."}] },
      { name: "Rhône Valley", methods: "Northern (Syrah) vs Southern (Blends).", wines: [{name:"Hermitage", grape:"Syrah", pro:"Smoky, meaty red."}, {name:"Châteauneuf-du-Pape", grape:"Grenache Blend", pro:"13 grapes allowed."}, {name:"Condrieu", grape:"Viognier", pro:"Apricot and floral white."}] },
      { name: "Loire Valley", methods: "Focus on freshness and high acid.", wines: [{name:"Sancerre", grape:"Sauvignon Blanc", pro:"Flinty white."}, {name:"Chinon", grape:"Cabernet Franc", pro:"Herbal, bell pepper red."}] },
      { name: "Champagne", methods: "Méthode Champenoise (Second fermentation in bottle).", wines: [{name:"Côte des Blancs", grape:"Chardonnay", pro:"Blanc de Blancs style."}, {name:"Montagne de Reims", grape:"Pinot Noir", pro:"Structure and body."}] },
      { name: "Alsace", methods: "Varietal labeling, Germanic influence.", wines: [{name:"Riesling", grape:"Riesling", pro:"Dry, petrol notes, lime."}] }
    ]
  },
  {
    id: "australia",
    name: "Australia",
    description: "From ancient vines to cool-climate elegance.",
    image: "/images/australia-hero.jpg",
    subRegions: [
      { name: "Barossa Valley", methods: "Old vine Shiraz (100yr+ vines).", wines: [{name:"Barossa Shiraz", grape:"Shiraz", pro:"The Aussie icon."}] },
      { name: "Margaret River", methods: "Maritime influence (Indian Ocean).", wines: [{name:"M.R. Cabernet", grape:"Cabernet Sauvignon", pro:"Elegance like Bordeaux."}, {name:"M.R. Chardonnay", grape:"Chardonnay", pro:"Gingin clone, powerful."}] },
      { name: "Hunter Valley", methods: "Early pick, low alcohol aging.", wines: [{name:"Hunter Semillon", grape:"Semillon", pro:"Ages 20 years into toast."}] },
      { name: "Yarra Valley", methods: "Cool climate, whole bunch press.", wines: [{name:"Yarra Pinot", grape:"Pinot Noir", pro:"Bright, ethereal red."}] },
      { name: "Coonawarra", methods: "Terra Rossa (Red Soil) influence.", wines: [{name:"Coonawarra Cab", grape:"Cabernet Sauvignon", pro:"Distinct minty note."}] },
      { name: "Adelaide Hills", methods: "High altitude, cool nights.", wines: [{name:"Sauvignon Blanc", grape:"Sauvignon Blanc", pro:"Tropical but zesty."}] }
    ]
  }
];
