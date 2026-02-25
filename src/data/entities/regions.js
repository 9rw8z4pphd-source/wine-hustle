export const REGIONS_DATA = [
  {
    id: "italy",
    name: "Italy",
    description: "Massive native grape diversity with strong DOCG and DOC identity.",
    subRegions: [
      {
        id: "piedmont",
        name: "Piedmont",
        methods: "Foggy hills and long-season reds with strict appellation hierarchy.",
        climate: "Continental with cool nights and autumn fog.",
        soils: "Calcareous marl, sandstone, and clay-limestone mixes.",
        key_grapes: ["nebbiolo", "barbera", "dolcetto"],
        flagship_styles: ["Barolo DOCG", "Barbaresco DOCG", "Traditional Method Sparkling"]
      },
      {
        id: "tuscany",
        name: "Tuscany",
        methods: "Sangiovese heartland from inland hills to maritime Maremma.",
        climate: "Mediterranean with inland continental pockets.",
        soils: "Galestro schist, alberese limestone, marine clays.",
        key_grapes: ["sangiovese", "cabernet-sauvignon", "merlot"],
        flagship_styles: ["Chianti Classico", "Brunello di Montalcino", "Super Tuscan blends"]
      },
      {
        id: "veneto",
        name: "Veneto",
        methods: "Large region balancing volume production and premium hillside zones.",
        climate: "Continental to sub-Mediterranean with Alpine moderation.",
        soils: "Volcanic basalt, alluvial plains, limestone ridges.",
        key_grapes: ["garganega", "corvina", "glera"],
        flagship_styles: ["Amarone della Valpolicella", "Soave Classico", "Conegliano Valdobbiadene Prosecco"]
      },
      {
        id: "sicily",
        name: "Sicily",
        methods: "Island viticulture with altitude and maritime airflow preserving freshness.",
        climate: "Warm Mediterranean moderated by sea breezes and elevation.",
        soils: "Volcanic ash, lava sands, limestone and clay.",
        key_grapes: ["nero-davola", "catarratto", "nerello-mascalese"],
        flagship_styles: ["Etna Rosso", "Nero dAvola", "Marsala"]
      },
      {
        id: "puglia",
        name: "Puglia",
        methods: "High-sun southern region with old bush vines and broad output.",
        climate: "Hot Mediterranean with limited rainfall.",
        soils: "Red clays, limestone plateaus, sandy coastal belts.",
        key_grapes: ["primitivo", "negroamaro", "nero-di-troia"],
        flagship_styles: ["Primitivo di Manduria", "Salice Salentino", "Rosato from Negroamaro"]
      },
      {
        id: "alto_adige",
        name: "Alto Adige",
        methods: "Mountain precision with major diurnal shifts and crisp acidity.",
        climate: "Alpine with warm days and cool nights.",
        soils: "Porphyry, dolomite limestone, glacial deposits.",
        key_grapes: ["pinot-noir", "chardonnay", "gewurztraminer"],
        flagship_styles: ["Pinot Bianco", "Lagrein", "Metodo Classico from altitude"]
      },
      {
        id: "emilia_romagna",
        name: "Emilia-Romagna",
        methods: "Food-centric region spanning sparkling Lambrusco to Sangiovese hills.",
        climate: "Continental inland, humid toward plains.",
        soils: "Alluvial silts, clay, and marl in foothills.",
        key_grapes: ["lambrusco", "sangiovese", "albana"],
        flagship_styles: ["Lambrusco Secco", "Romagna Sangiovese", "Albana passito"]
      },
      {
        id: "abruzzo",
        name: "Abruzzo",
        methods: "Mountain-to-sea transect delivering freshness and value.",
        climate: "Mediterranean coast with Apennine cooling.",
        soils: "Clay-limestone hills and sandy alluvials.",
        key_grapes: ["montepulciano", "trebbiano"],
        flagship_styles: ["Montepulciano dAbruzzo", "Cerasuolo dAbruzzo"]
      },
      {
        id: "lombardy",
        name: "Lombardy",
        methods: "Home of Franciacorta and high-altitude alpine reds.",
        climate: "Continental with major lake influence.",
        soils: "Morainic glacial soils and calcareous clays.",
        key_grapes: ["chardonnay", "pinot-noir", "nebbiolo"],
        flagship_styles: ["Franciacorta", "Valtellina Superiore", "Lugana"]
      },
      {
        id: "campania",
        name: "Campania",
        methods: "Ancient southern terroirs on volcanic slopes and inland hills.",
        climate: "Warm Mediterranean tempered by altitude.",
        soils: "Volcanic tuff, ash, and limestone pockets.",
        key_grapes: ["aglianico", "fiano", "greco"],
        flagship_styles: ["Taurasi", "Fiano di Avellino", "Greco di Tufo"]
      }
    ]
  },
  {
    id: "france",
    name: "France",
    description: "Benchmark origin for GI systems, classic grapes, and style definitions.",
    subRegions: [
      {
        id: "bordeaux",
        name: "Bordeaux",
        methods: "River-defined Left and Right Bank blend archetypes.",
        climate: "Maritime with moderate rainfall.",
        soils: "Gravel, clay-limestone, and sandy alluvials.",
        key_grapes: ["cabernet-sauvignon", "merlot", "sauvignon-blanc"],
        flagship_styles: ["Medoc blends", "Saint-Emilion Merlot blends", "Dry and sweet whites"],
        wset_label_focus: "Left Bank is generally Cabernet-led; Right Bank is generally Merlot-led."
      },
      {
        id: "burgundy",
        name: "Burgundy",
        methods: "Climat-level terroir mapping with narrow vineyard distinctions.",
        climate: "Continental with frost and hail pressure.",
        soils: "Limestone and marl by subregion and slope.",
        key_grapes: ["pinot-noir", "chardonnay", "aligote"],
        flagship_styles: ["Cote de Nuits Pinot Noir", "Chablis", "Cote de Beaune Chardonnay"],
        wset_label_focus: "Hierarchy runs from regional to village, then Premier Cru and Grand Cru."
      },
      {
        id: "champagne",
        name: "Champagne",
        methods: "Traditional method sparkling with reserve wine architecture.",
        climate: "Cool continental with marginal ripening conditions.",
        soils: "Chalk, marl, and sandy loams.",
        key_grapes: ["chardonnay", "pinot-noir", "pinot-meunier"],
        flagship_styles: ["Non-vintage blends", "Blanc de Blancs", "Rose Champagne"]
      },
      {
        id: "rhone",
        name: "Rhone Valley",
        methods: "North-south axis from single-variety Syrah to GSM blends.",
        climate: "Continental north to Mediterranean south.",
        soils: "Granite, galets, sandy alluvials, and limestone.",
        key_grapes: ["syrah", "grenache", "viognier"],
        flagship_styles: ["Cote-Rotie", "Hermitage", "Chateauneuf-du-Pape"],
        wset_label_focus: "Cotes du Rhone < Villages < named crus such as Hermitage and Chateauneuf-du-Pape."
      },
      {
        id: "loire",
        name: "Loire Valley",
        methods: "Long river corridor with major stylistic diversity.",
        climate: "Maritime west, continental inland.",
        soils: "Tuffeau limestone, schist, flint, and clay.",
        key_grapes: ["sauvignon-blanc", "chenin-blanc", "cabernet-franc"],
        flagship_styles: ["Sancerre", "Vouvray", "Chinon"]
      },
      {
        id: "alsace",
        name: "Alsace",
        methods: "Dry rain-shadow region focused on aromatic varietal labelling.",
        climate: "Semi-continental and relatively dry.",
        soils: "Granite, limestone, sandstone, and marl mosaics.",
        key_grapes: ["riesling", "gewurztraminer", "pinot-gris"],
        flagship_styles: ["Dry Riesling", "Vendanges Tardives", "Cremant dAlsace"]
      },
      {
        id: "provence",
        name: "Provence",
        methods: "Mediterranean rose center with coastal and inland subzones.",
        climate: "Hot, sunny Mediterranean with Mistral winds.",
        soils: "Limestone, schist, and clay-limestone.",
        key_grapes: ["grenache", "syrah", "mourvedre"],
        flagship_styles: ["Pale dry rose", "Bandol reds", "Mediterranean blends"]
      },
      {
        id: "languedoc",
        name: "Languedoc-Roussillon",
        methods: "Large southern belt shifting from bulk to quality-focused terroir wines.",
        climate: "Mediterranean with wind and drought pressure.",
        soils: "Schist, limestone, clay, and galets.",
        key_grapes: ["grenache", "syrah", "carignan"],
        flagship_styles: ["Minervois", "Corbieres", "Picpoul de Pinet"]
      }
    ]
  },
  {
    id: "usa",
    name: "USA",
    description: "AVA-driven regions spanning maritime, mountain, and desert climates.",
    subRegions: [
      {
        id: "napa",
        name: "Napa Valley",
        methods: "Compact valley with major variation by floor, bench, and mountain AVAs.",
        climate: "Mediterranean with strong diurnal shifts.",
        soils: "Volcanic uplands, gravelly alluvials, and marine sediments.",
        key_grapes: ["cabernet-sauvignon", "chardonnay", "merlot"],
        flagship_styles: ["Cabernet Sauvignon", "Bordeaux-style blends", "Barrel-fermented Chardonnay"]
      },
      {
        id: "sonoma",
        name: "Sonoma County",
        methods: "Broad county with cool coast and warm inland zones.",
        climate: "Maritime to inland Mediterranean.",
        soils: "Volcanic loam, gravelly clay, and Goldridge soils.",
        key_grapes: ["pinot-noir", "chardonnay", "zinfandel"],
        flagship_styles: ["Russian River Pinot Noir", "Sonoma Coast Chardonnay", "Dry Creek Zinfandel"]
      },
      {
        id: "oregon",
        name: "Oregon",
        methods: "Cool-climate precision led by Willamette Valley.",
        climate: "Maritime-influenced cool climate.",
        soils: "Volcanic basalt, marine sedimentary, and loess.",
        key_grapes: ["pinot-noir", "chardonnay", "riesling"],
        flagship_styles: ["Willamette Pinot Noir", "Eola-Amity Chardonnay", "Cool-climate sparkling"]
      },
      {
        id: "washington",
        name: "Washington State",
        methods: "Irrigated desert viticulture east of the Cascades.",
        climate: "Continental and dry with strong sunlight.",
        soils: "Loess over basalt and sandy alluvials.",
        key_grapes: ["cabernet-sauvignon", "syrah", "riesling"],
        flagship_styles: ["Columbia Valley Cabernet", "Walla Walla Syrah", "Off-dry Riesling"]
      },
      {
        id: "central_coast",
        name: "Central Coast (CA)",
        methods: "Pacific-cooled corridor with long growing season and style range.",
        climate: "Cool maritime to warm inland.",
        soils: "Limestone, shale, and sandy alluvials.",
        key_grapes: ["chardonnay", "pinot-noir", "syrah"],
        flagship_styles: ["Santa Barbara Pinot Noir", "Paso Robles Rhone blends", "Monterey Chardonnay"]
      },
      {
        id: "finger_lakes",
        name: "Finger Lakes (NY)",
        methods: "Deep lakes moderate winter and extend ripening windows.",
        climate: "Cool continental moderated by large lakes.",
        soils: "Glacial till, shale, and gravelly loams.",
        key_grapes: ["riesling", "cabernet-franc", "chardonnay"],
        flagship_styles: ["Dry Riesling", "Sparkling wine", "Cabernet Franc"]
      }
    ]
  },
  {
    id: "spain",
    name: "Spain",
    description: "High-altitude plateaus, Atlantic zones, and strong aging traditions.",
    subRegions: [
      {
        id: "rioja",
        name: "Rioja",
        methods: "Blend philosophy and aging categories with Tempranillo core.",
        climate: "Atlantic-influenced to continental by subzone.",
        soils: "Clay-limestone, alluvial, and iron-rich clays.",
        key_grapes: ["tempranillo", "garnacha", "graciano"],
        flagship_styles: ["Crianza", "Reserva", "Gran Reserva"],
        wset_label_focus: "Aging terms (Joven, Crianza, Reserva, Gran Reserva) signal minimum maturation."
      },
      {
        id: "ribera",
        name: "Ribera del Duero",
        methods: "High-elevation Tempranillo with strong day-night shifts.",
        climate: "Continental with hot summers and cold winters.",
        soils: "Limestone, marl, and sandy clay.",
        key_grapes: ["tempranillo", "cabernet-sauvignon", "merlot"],
        flagship_styles: ["Tinto Fino blends", "Reserva reds"]
      },
      {
        id: "priorat",
        name: "Priorat",
        methods: "Steep schist slopes with old-vine Garnacha and Carinena.",
        climate: "Hot Mediterranean with altitude moderation.",
        soils: "Llicorella slate.",
        key_grapes: ["grenache", "carignan", "syrah"],
        flagship_styles: ["Concentrated old-vine reds"]
      },
      {
        id: "rías_baixas",
        name: "Rias Baixas",
        methods: "Atlantic humidity managed by pergola systems and airflow.",
        climate: "Cool Atlantic and rainy.",
        soils: "Granite sands with alluvial deposits.",
        key_grapes: ["albarino"],
        flagship_styles: ["Fresh saline Albarino"]
      },
      {
        id: "jerez",
        name: "Jerez (Sherry)",
        methods: "Biological and oxidative aging under flor and solera.",
        climate: "Hot, dry summers with Atlantic humidity.",
        soils: "Albariza chalk, barros clay, arenas sands.",
        key_grapes: ["palomino", "pedro-ximenez", "moscatel"],
        flagship_styles: ["Fino", "Amontillado", "Oloroso", "PX sweet"]
      },
      {
        id: "catalonia",
        name: "Penedes / Cava",
        methods: "Traditional method sparkling plus still-wine innovation.",
        climate: "Mediterranean with altitude tiers.",
        soils: "Limestone and alluvial soils.",
        key_grapes: ["xarello", "macabeo", "parellada"],
        flagship_styles: ["Cava", "Corpinnat", "Penedes still wines"]
      }
    ]
  },
  {
    id: "new_zealand",
    name: "New Zealand",
    description: "Cool-climate, high-UV viticulture with intense aromatics.",
    subRegions: [
      {
        id: "marlborough",
        name: "Marlborough",
        methods: "Long sunny days and cool nights drive aromatic concentration.",
        climate: "Cool maritime with dry season windows.",
        soils: "Free-draining alluvial river stones and loess.",
        key_grapes: ["sauvignon-blanc", "pinot-noir", "chardonnay"],
        flagship_styles: ["Pungent Sauvignon Blanc", "Method traditional sparkling"]
      },
      {
        id: "central_otago",
        name: "Central Otago",
        methods: "Southern latitude and altitude produce tension and purity.",
        climate: "Continental with warm days and very cool nights.",
        soils: "Schist-derived sandy loams.",
        key_grapes: ["pinot-noir", "riesling"],
        flagship_styles: ["Structured Pinot Noir", "Dry aromatic whites"]
      },
      {
        id: "hawkes_bay",
        name: "Hawke's Bay",
        methods: "Warmer North Island region balancing ripeness and maritime freshness.",
        climate: "Warm maritime.",
        soils: "Gravelly river terraces and clay hills.",
        key_grapes: ["syrah", "cabernet-sauvignon", "merlot"],
        flagship_styles: ["Bordeaux blends", "Syrah"]
      },
      {
        id: "martinborough",
        name: "Martinborough",
        methods: "Small premium zone known for savory, structured Pinot Noir.",
        climate: "Cool and windy maritime.",
        soils: "Old alluvial river gravels.",
        key_grapes: ["pinot-noir", "sauvignon-blanc"],
        flagship_styles: ["Pinot Noir", "Textural Sauvignon Blanc"]
      }
    ]
  },
  {
    id: "australia",
    name: "Australia",
    description: "From old-vine warmth to refined cool-climate precision.",
    subRegions: [
      {
        id: "barossa",
        name: "Barossa Valley",
        methods: "Old-vine concentration with modern freshness-focused winemaking.",
        climate: "Warm Mediterranean.",
        soils: "Red-brown earth, sandy loams, and clay.",
        key_grapes: ["syrah", "grenache", "cabernet-sauvignon"],
        flagship_styles: ["Shiraz", "GSM blends", "Eden Valley Riesling nearby"]
      },
      {
        id: "mclaren_vale",
        name: "McLaren Vale",
        methods: "Sea-breeze influence with Mediterranean variety experimentation.",
        climate: "Warm Mediterranean with maritime airflow.",
        soils: "Complex mix of sand, clay, and limestone.",
        key_grapes: ["syrah", "grenache", "fiano"],
        flagship_styles: ["Shiraz", "Grenache", "Alternative Italian whites"]
      },
      {
        id: "yarra",
        name: "Yarra Valley",
        methods: "Cool-climate zone with elegant Pinot and Chardonnay focus.",
        climate: "Cool maritime.",
        soils: "Volcanic and sedimentary loams.",
        key_grapes: ["pinot-noir", "chardonnay", "syrah"],
        flagship_styles: ["Sparkling base wines", "Pinot Noir", "Cool-climate Chardonnay"]
      },
      {
        id: "margaret_river",
        name: "Margaret River",
        methods: "Ocean-locked peninsula with stable ripening conditions.",
        climate: "Mediterranean maritime.",
        soils: "Gravelly loam over clay with lateritic ironstone.",
        key_grapes: ["cabernet-sauvignon", "chardonnay", "sauvignon-blanc"],
        flagship_styles: ["Cabernet blends", "Bordeaux-inspired white blends"]
      },
      {
        id: "hunter_valley",
        name: "Hunter Valley",
        methods: "Humid warm region known for unique low-alcohol Semillon longevity.",
        climate: "Warm humid subtropical.",
        soils: "Alluvial sands and red duplex soils.",
        key_grapes: ["semillon", "syrah", "chardonnay"],
        flagship_styles: ["Hunter Semillon", "Earthy Shiraz"]
      }
    ]
  },
  {
    id: "argentina",
    name: "Argentina",
    description: "Altitude-driven freshness and concentration along the Andes.",
    subRegions: [
      {
        id: "mendoza",
        name: "Mendoza",
        methods: "Andean irrigation and altitude create ripe but lifted profiles.",
        climate: "High-altitude desert with low rainfall.",
        soils: "Alluvial stones, sand, and calcareous pockets.",
        key_grapes: ["malbec", "cabernet-sauvignon", "chardonnay"],
        flagship_styles: ["Altitude Malbec", "Mountain Chardonnay", "Bordeaux blends"]
      },
      {
        id: "salta",
        name: "Salta / Cafayate",
        methods: "Extreme altitude vineyards with high UV and cool nights.",
        climate: "Arid high-altitude continental.",
        soils: "Sandy alluvial with rocky scree.",
        key_grapes: ["torrontes", "malbec"],
        flagship_styles: ["Aromatic Torrontes", "Fresh mountain reds"]
      },
      {
        id: "patagonia",
        name: "Patagonia",
        methods: "Windy southern regions producing linear, cool-profile wines.",
        climate: "Cool, dry, and windy continental.",
        soils: "Alluvial gravels and sandy loams.",
        key_grapes: ["pinot-noir", "malbec", "chardonnay"],
        flagship_styles: ["Patagonian Pinot Noir", "Cool-climate whites"]
      }
    ]
  },
  {
    id: "germany",
    name: "Germany",
    description: "Steep-slope precision and a global standard for Riesling.",
    subRegions: [
      {
        id: "mosel",
        name: "Mosel",
        methods: "Steep slate vineyards emphasizing low alcohol and high tension.",
        climate: "Cool continental with river moderation.",
        soils: "Blue and red slate.",
        key_grapes: ["riesling"],
        flagship_styles: ["Kabinett", "Spatlese", "Feinherb and dry Riesling"],
        wset_label_focus: "Pradikat categories map to grape ripeness levels and broad sweetness style."
      },
      {
        id: "rheingau",
        name: "Rheingau",
        methods: "Historic Riesling zone with fuller dry and noble sweet examples.",
        climate: "Cool continental with river heat reflection.",
        soils: "Slate, quartzite, and loess.",
        key_grapes: ["riesling", "pinot-noir"],
        flagship_styles: ["Grosses Gewachs Riesling", "Spatburgunder"]
      },
      {
        id: "pfalz",
        name: "Pfalz",
        methods: "Warmer German region delivering ripe yet dry modern styles.",
        climate: "Mild and relatively dry continental.",
        soils: "Limestone, loess, sandstone, basalt.",
        key_grapes: ["riesling", "pinot-noir", "chardonnay"],
        flagship_styles: ["Dry Riesling", "Burgundian varieties"]
      },
      {
        id: "rheinhessen",
        name: "Rheinhessen",
        methods: "Large dynamic region leading dry Riesling and quality reform.",
        climate: "Mild continental.",
        soils: "Limestone, loess, clay marl.",
        key_grapes: ["riesling", "silvaner"],
        flagship_styles: ["Dry Riesling", "Single-vineyard limestone wines"]
      }
    ]
  }
];

export const COUNTRIES = REGIONS_DATA.reduce((acc, country) => {
  acc[country.id] = {
    id: country.id,
    name: country.name,
    description: country.description,
  };
  return acc;
}, {});

export const REGIONS = REGIONS_DATA.reduce((acc, country) => {
  for (const region of country.subRegions) {
    acc[region.id] = {
      ...region,
      country_id: country.id,
    };
  }
  return acc;
}, {});
