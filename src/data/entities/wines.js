export const WINES = {
  barolo_docg: {
    id: "barolo_docg",
    name: "Barolo DOCG",
    classification: "DOCG",
    style_profile: "Long-Age Nebbiolo",
    region_id: "piedmont",
    grape_ids: ["nebbiolo"],
    pro: "Nebbiolo from designated communes with long maturation before release.",
    tech_specs: {
      aging: "38 months total (18 in wood); Riserva minimum 62 months.",
      extraction: "Extended maceration common in traditional examples.",
      elevation: "Typically 250m to 500m with south or southwest exposures."
    },
    subTypes: [
      { level: "La Morra", rule: "Marl-heavy zones often produce more aromatic and earlier-open styles." },
      { level: "Serralunga", rule: "Denser structure and firmer tannin profile with long aging arc." }
    ]
  },

  barbaresco_docg: {
    id: "barbaresco_docg",
    name: "Barbaresco DOCG",
    classification: "DOCG",
    style_profile: "Perfumed Nebbiolo",
    region_id: "piedmont",
    grape_ids: ["nebbiolo"],
    pro: "Often slightly earlier-drinking than Barolo while preserving classic Nebbiolo frame.",
    tech_specs: {
      aging: "26 months minimum; Riserva 50 months.",
      terrain: "Steeper river-influenced hills around the Tanaro valley."
    }
  },

  chianti_classico_docg: {
    id: "chianti_classico_docg",
    name: "Chianti Classico DOCG",
    classification: "DOCG",
    style_profile: "High-Acid Sangiovese",
    region_id: "tuscany",
    grape_ids: ["sangiovese"],
    pro: "Sangiovese-led red from historic hill communes between Florence and Siena.",
    tech_specs: {
      blend_rule: "Minimum 80% Sangiovese.",
      aging: "Annata 12 months; Riserva 24; Gran Selezione 30 months minimum.",
      altitude: "Many quality sites between 250m and 600m."
    }
  },

  brunello_montalcino_docg: {
    id: "brunello_montalcino_docg",
    name: "Brunello di Montalcino DOCG",
    classification: "DOCG",
    style_profile: "Ageworthy Sangiovese",
    region_id: "tuscany",
    grape_ids: ["sangiovese"],
    pro: "100% Sangiovese from warmer southern Tuscany with significant cellar aging.",
    tech_specs: {
      aging: "5 years total from harvest; Riserva 6 years.",
      grape_requirement: "100% Sangiovese.",
      structure: "Higher tannin and body than most Chianti expressions."
    }
  },

  pauillac_aoc: {
    id: "pauillac_aoc",
    name: "Pauillac AOC",
    classification: "AOC",
    style_profile: "Left Bank Cabernet Blend",
    region_id: "bordeaux",
    grape_ids: ["cabernet-sauvignon", "merlot"],
    pro: "Gravel-based Medoc commune known for tannic, cedar-toned longevity.",
    tech_specs: {
      soils: "Deep gravel over clay and limestone sublayers.",
      blend_logic: "Cabernet Sauvignon dominant with Merlot and supporting varieties."
    }
  },

  pomerol_aoc: {
    id: "pomerol_aoc",
    name: "Pomerol AOC",
    classification: "AOC",
    style_profile: "Right Bank Merlot Blend",
    region_id: "bordeaux",
    grape_ids: ["merlot", "cabernet-sauvignon"],
    pro: "Clay-rich Right Bank wines with plush texture and truffle evolution.",
    tech_specs: {
      soils: "Blue clay and gravel pockets.",
      blend_logic: "Merlot-led with Cabernet Franc/Cabernet Sauvignon support."
    }
  },

  gevrey_chambertin_aoc: {
    id: "gevrey_chambertin_aoc",
    name: "Gevrey-Chambertin AOC",
    classification: "AOC",
    style_profile: "Structured Pinot Noir",
    region_id: "burgundy",
    grape_ids: ["pinot-noir"],
    pro: "Northern Cote de Nuits expression with dark fruit, earth, and firm backbone.",
    tech_specs: {
      grape_requirement: "Red wines from Pinot Noir.",
      elevage: "French oak maturation with varied new-oak percentages by producer."
    }
  },

  chablis_aoc: {
    id: "chablis_aoc",
    name: "Chablis AOC",
    classification: "AOC",
    style_profile: "Mineral Chardonnay",
    region_id: "burgundy",
    grape_ids: ["chardonnay"],
    pro: "Cool-climate Chardonnay centered on saline, citrus, and chalky profile.",
    tech_specs: {
      grape_requirement: "100% Chardonnay.",
      soils: "Kimmeridgian marl with fossil-rich limestone influence."
    }
  },

  champagne_brut_nv: {
    id: "champagne_brut_nv",
    name: "Champagne Brut NV",
    classification: "AOC",
    style_profile: "Traditional Method Sparkling",
    region_id: "champagne",
    grape_ids: ["chardonnay", "pinot-noir"],
    pro: "Non-vintage blends built around reserve wines for house consistency.",
    tech_specs: {
      method: "Traditional method with second fermentation in bottle.",
      lees_aging: "15 months minimum for non-vintage category."
    }
  },

  cote_rotie_aoc: {
    id: "cote_rotie_aoc",
    name: "Cote-Rotie AOC",
    classification: "AOC",
    style_profile: "Savory Syrah",
    region_id: "rhone",
    grape_ids: ["syrah"],
    pro: "Steep granite slopes producing aromatic Syrah with pepper and smoked nuances.",
    tech_specs: {
      grape_rule: "Syrah dominant; small Viognier share permitted.",
      terrain: "Terraced vineyards with high labor intensity."
    }
  },

  chateauneuf_du_pape_aoc: {
    id: "chateauneuf_du_pape_aoc",
    name: "Chateauneuf-du-Pape AOC",
    classification: "AOC",
    style_profile: "Southern Rhone Blend",
    region_id: "rhone",
    grape_ids: ["grenache", "syrah"],
    pro: "Grenache-led blends from warm stony soils delivering power and spice.",
    tech_specs: {
      grape_palette: "Multiple grape varieties allowed with Grenache typically dominant.",
      soils: "Galets roulés over clay and sand contribute heat retention and drainage."
    }
  },

  sancerre_aoc: {
    id: "sancerre_aoc",
    name: "Sancerre AOC",
    classification: "AOC",
    style_profile: "Linear Sauvignon Blanc",
    region_id: "loire",
    grape_ids: ["sauvignon-blanc"],
    pro: "Loire benchmark for taut Sauvignon Blanc with mineral definition.",
    tech_specs: {
      soils: "Silex, caillottes limestone, and clay-limestone terre blanches.",
      vinification: "Mostly stainless steel to preserve aromatic purity."
    }
  },

  vouvray_sec: {
    id: "vouvray_sec",
    name: "Vouvray Sec",
    classification: "AOC",
    style_profile: "Dry Chenin Blanc",
    region_id: "loire",
    grape_ids: ["chenin-blanc"],
    pro: "Dry Chenin showing orchard fruit, wax texture, and high acidity.",
    tech_specs: {
      grape_requirement: "100% Chenin Blanc.",
      sweetness_band: "Sec category allows very low residual sugar depending on balance."
    }
  },

  napa_valley_cabernet: {
    id: "napa_valley_cabernet",
    name: "Napa Valley Cabernet Sauvignon",
    classification: "AVA",
    style_profile: "Ripe Structured Red",
    region_id: "napa",
    grape_ids: ["cabernet-sauvignon", "merlot"],
    pro: "Concentrated black-fruit profile with polished tannin and oak framing.",
    tech_specs: {
      labeling: "At least 75% named variety for US varietal labeling.",
      climate: "Warm afternoons with cooling evening influence by sub-AVA."
    }
  },

  sonoma_coast_pinot: {
    id: "sonoma_coast_pinot",
    name: "Sonoma Coast Pinot Noir",
    classification: "AVA",
    style_profile: "Cool-Climate Pinot",
    region_id: "sonoma",
    grape_ids: ["pinot-noir"],
    pro: "Ocean influence preserves acidity and aromatic lift in Pinot Noir.",
    tech_specs: {
      climate: "Marine fog and wind delay ripening and build tension.",
      cellar: "Whole-cluster and neutral oak usage varies by producer."
    }
  },

  willamette_pinot: {
    id: "willamette_pinot",
    name: "Willamette Valley Pinot Noir",
    classification: "AVA",
    style_profile: "Fresh Earthy Pinot",
    region_id: "oregon",
    grape_ids: ["pinot-noir"],
    pro: "Red-fruited Pinot Noir with savory edge and vibrant acidity.",
    tech_specs: {
      rain_profile: "Dry harvest period is key to concentration and disease control.",
      soils: "Volcanic and marine sedimentary sub-AVA variation."
    }
  },

  columbia_syrah: {
    id: "columbia_syrah",
    name: "Columbia Valley Syrah",
    classification: "AVA",
    style_profile: "Sunlit Savory Syrah",
    region_id: "washington",
    grape_ids: ["syrah"],
    pro: "Dry, bright conditions produce ripe but defined dark-fruit Syrah.",
    tech_specs: {
      irrigation: "Regulated deficit irrigation controls vigor in desert conditions.",
      temperature: "Hot days and cool nights protect acidity."
    }
  },

  paso_robles_rhone_blend: {
    id: "paso_robles_rhone_blend",
    name: "Paso Robles Rhone Blend",
    classification: "AVA",
    style_profile: "Warm-Climate Blend",
    region_id: "central_coast",
    grape_ids: ["syrah", "grenache"],
    pro: "Generous fruit and spice shaped by inland warmth and evening marine draw.",
    tech_specs: {
      blend_focus: "Syrah/Grenache/Mourvedre families commonly used.",
      subregion_effect: "Westside limestone and eastside heat create diverse profiles."
    }
  },

  finger_lakes_riesling: {
    id: "finger_lakes_riesling",
    name: "Finger Lakes Riesling",
    classification: "AVA",
    style_profile: "Cool Precision White",
    region_id: "finger_lakes",
    grape_ids: ["riesling"],
    pro: "Tense acid frame with citrus and stone fruit from lake-moderated climate.",
    tech_specs: {
      climate: "Deep lakes reduce winter kill and extend ripening season.",
      style_range: "Dry, off-dry, and sparkling formats all common."
    }
  },

  rioja_reserva: {
    id: "rioja_reserva",
    name: "Rioja Reserva",
    classification: "DOCa",
    style_profile: "Oak-Matured Tempranillo",
    region_id: "rioja",
    grape_ids: ["tempranillo"],
    pro: "Tempranillo-led Rioja with integrated oak and tertiary evolution.",
    tech_specs: {
      aging: "Minimum 3 years total with at least 1 year in oak for Reserva category.",
      blend: "Tempranillo base with optional Garnacha, Graciano, and Mazuelo."
    }
  },

  ribera_reserva: {
    id: "ribera_reserva",
    name: "Ribera del Duero Reserva",
    classification: "DO",
    style_profile: "Altitude Tempranillo",
    region_id: "ribera",
    grape_ids: ["tempranillo"],
    pro: "Powerful, dark-fruited Tempranillo from high-elevation plateau vineyards.",
    tech_specs: {
      altitude: "Many vineyards between 700m and 950m.",
      aging: "Reserva category requires extended oak and bottle maturation."
    }
  },

  priorat_doq: {
    id: "priorat_doq",
    name: "Priorat DOQ",
    classification: "DOQ",
    style_profile: "Slate-Driven Red",
    region_id: "priorat",
    grape_ids: ["grenache", "syrah"],
    pro: "Concentrated blends from old vines rooted in steep llicorella slopes.",
    tech_specs: {
      soils: "Llicorella slate limits vigor and stores heat.",
      vines: "Old bush vines with low yields are common in top sites."
    }
  },

  rias_baixas_albarino: {
    id: "rias_baixas_albarino",
    name: "Rias Baixas Albarino",
    classification: "DO",
    style_profile: "Atlantic Saline White",
    region_id: "rías_baixas",
    grape_ids: ["albarino"],
    pro: "High-acid coastal white with citrus, peach, and sea-spray character.",
    tech_specs: {
      canopy: "Pergola systems improve airflow in humid conditions.",
      vinification: "Mostly stainless steel for freshness and aromatics."
    }
  },

  marlborough_sauvignon: {
    id: "marlborough_sauvignon",
    name: "Marlborough Sauvignon Blanc",
    classification: "GI",
    style_profile: "Aromatic Benchmark White",
    region_id: "marlborough",
    grape_ids: ["sauvignon-blanc"],
    pro: "High-impact thiol profile combining tropical fruit, citrus, and herbal lift.",
    tech_specs: {
      harvest: "Night picking and reductive handling preserve volatile thiols.",
      climate: "High sunshine with cool nights supports flavor intensity."
    }
  },

  central_otago_pinot: {
    id: "central_otago_pinot",
    name: "Central Otago Pinot Noir",
    classification: "GI",
    style_profile: "Southern Structured Pinot",
    region_id: "central_otago",
    grape_ids: ["pinot-noir"],
    pro: "Concentrated Pinot Noir with dark cherry fruit and mountain freshness.",
    tech_specs: {
      climate: "Large diurnal shifts sharpen acidity and aromatic lift.",
      soils: "Schist-derived sandy soils with low fertility."
    }
  },

  hawkes_bay_syrah: {
    id: "hawkes_bay_syrah",
    name: "Hawke's Bay Syrah",
    classification: "GI",
    style_profile: "Peppered Maritime Syrah",
    region_id: "hawkes_bay",
    grape_ids: ["syrah"],
    pro: "Mid-weight Syrah with black fruit, olive, and cracked pepper notes.",
    tech_specs: {
      sites: "Warmer gravels and river terraces are favored for ripening.",
      style: "Often less jammy than hotter New World Syrah expressions."
    }
  },

  barossa_shiraz: {
    id: "barossa_shiraz",
    name: "Barossa Shiraz",
    classification: "GI",
    style_profile: "Full-Bodied Shiraz",
    region_id: "barossa",
    grape_ids: ["syrah"],
    pro: "Dense dark-fruit Shiraz with plush texture and sweet spice from oak.",
    tech_specs: {
      vine_age: "Many old-vine parcels contribute concentration.",
      climate: "Warm conditions favor full phenolic ripeness."
    }
  },

  margaret_river_cabernet: {
    id: "margaret_river_cabernet",
    name: "Margaret River Cabernet Blend",
    classification: "GI",
    style_profile: "Refined Maritime Cabernet",
    region_id: "margaret_river",
    grape_ids: ["cabernet-sauvignon", "merlot"],
    pro: "Blackcurrant-led blends combining ripeness with coastal freshness.",
    tech_specs: {
      maritime_effect: "Strong ocean influence narrows annual temperature swings.",
      blend: "Cabernet Sauvignon usually supported by Merlot and other Bordeaux grapes."
    }
  },

  mendoza_malbec: {
    id: "mendoza_malbec",
    name: "Mendoza Malbec",
    classification: "GI",
    style_profile: "Altitude Malbec",
    region_id: "mendoza",
    grape_ids: ["malbec"],
    pro: "Dark-fruited Malbec with violet lift and broad palate from Andean foothills.",
    tech_specs: {
      altitude: "Commonly 900m to 1400m depending on subregion.",
      irrigation: "Snowmelt-fed irrigation is central in dry desert conditions."
    }
  },

  salta_torrontes_style: {
    id: "salta_torrontes_style",
    name: "Salta Aromatic White",
    classification: "GI",
    style_profile: "High-Altitude Aromatic White",
    region_id: "salta",
    grape_ids: ["riesling", "sauvignon-blanc"],
    pro: "Fresh aromatic white profile inspired by Cafayate altitude expression.",
    tech_specs: {
      altitude: "Some vineyards exceed 1700m for cool-night retention.",
      style: "Floral aromatics with dry palate tension and moderate alcohol."
    }
  },

  mosel_kabinett: {
    id: "mosel_kabinett",
    name: "Mosel Riesling Kabinett",
    classification: "Pradikat",
    style_profile: "Light Off-Dry Riesling",
    region_id: "mosel",
    grape_ids: ["riesling"],
    pro: "Low-alcohol style balancing natural sweetness against very high acidity.",
    tech_specs: {
      terrain: "Steep slate slopes maximize ripening in a cool region.",
      fermentation: "Cold ferments and residual sugar retention are common."
    }
  },

  rheingau_gg_style: {
    id: "rheingau_gg_style",
    name: "Rheingau Dry Riesling",
    classification: "PDO",
    style_profile: "Structured Dry Riesling",
    region_id: "rheingau",
    grape_ids: ["riesling"],
    pro: "Powerful dry style with ripe citrus, stone, and long phenolic finish.",
    tech_specs: {
      exposure: "South-facing river bends improve heat accumulation.",
      cellar: "Long lees contact increasingly used for texture."
    }
  },

  pfalz_chardonnay_style: {
    id: "pfalz_chardonnay_style",
    name: "Pfalz Chardonnay",
    classification: "PDO",
    style_profile: "Modern German Chardonnay",
    region_id: "pfalz",
    grape_ids: ["chardonnay"],
    pro: "Riper German Chardonnay profile with balancing acidity and oak precision.",
    tech_specs: {
      climate: "Warmer than many German regions, enabling fuller phenolic ripeness.",
      style: "Range from stainless steel precision to barrel-aged complexity."
    }
  },

  rheinhessen_riesling_trocken: {
    id: "rheinhessen_riesling_trocken",
    name: "Rheinhessen Riesling Trocken",
    classification: "PDO",
    style_profile: "Dry Mineral Riesling",
    region_id: "rheinhessen",
    grape_ids: ["riesling"],
    pro: "Dry Riesling focused on precision, citrus, and chalky length.",
    tech_specs: {
      viticulture: "Low yields and site selection drive modern quality style.",
      sweetness: "Trocken indicates analytically dry category."
    }
  }
};
