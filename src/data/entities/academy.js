// src/data/entities/lessons.js
// Lessons are “content containers” that reference TERMS by id.
// This makes your Academy scalable and later quiz-generation easy.

export const LESSONS = {
  tasting_level2: {
    id: "tasting_level2",
    title: "Tasting & Evaluating Wine (WSET L2)",
    pillar: "academy",
    read_time: "6–10 min",
    term_ids: [
      "sat_intro",
      "tasting_prep_environment",
      "appearance_out_of_condition",
      "faults_cork_taint_oxidation",
      "wine_lexicon_groups",
      "quality_balance",
      "quality_finish",
      "quality_intensity",
      "quality_complexity",
      "sat_quality_scale",
    ],
    sections: [
      {
        title: "Why taste systematically?",
        bullets: [
          "Tasting (not just drinking) improves memory and communication.",
          "A consistent structure helps compare wines fairly.",
        ],
      },
      {
        title: "SAT Flow",
        bullets: [
          "Appearance → Nose → Palate → Conclusion (Quality).",
          "Use consistent glassware when comparing wines.",
        ],
      },
      {
        title: "Quality markers",
        bullets: [
          "Balance: components should work together.",
          "Finish: longer can indicate quality.",
          "Intensity + Complexity: more layers usually means higher quality.",
        ],
      },
    ],
  },

  food_pairing_core: {
    id: "food_pairing_core",
    title: "Wine & Food Pairing (WSET L2)",
    pillar: "academy",
    read_time: "7–12 min",
    term_ids: [
      "pairing_primary_interactions",
      "pairing_high_risk_foods",
      "pairing_sugar_rule",
      "pairing_umami_effects",
      "pairing_acid_food_effects",
      "pairing_salt_food_effects",
      "pairing_bitterness_effects",
      "pairing_chilli_heat",
      "pairing_low_risk_foods",
      "pairing_high_risk_wines",
    ],
    sections: [
      {
        title: "High-risk foods (tricky)",
        bullets: ["Sugar, umami, bitterness, chilli heat create strong taste interactions."],
      },
      {
        title: "Low-risk foods (easier)",
        bullets: ["Salt and acid are usually pairing-friendly, but acid still needs acid in the wine."],
      },
      {
        title: "Practical pairing approach",
        bullets: [
          "If dish is sweet → pick a wine at least as sweet.",
          "If dish is umami-heavy → avoid harsh tannin; prefer fruity wines.",
          "If chilli is high → keep tannin + alcohol lower; some sweetness/fruit helps.",
        ],
      },
    ],
  },

  climate_style_quality: {
    id: "climate_style_quality",
    title: "Climate, Weather & Style (WSET L2)",
    pillar: "academy",
    read_time: "6–10 min",
    term_ids: [
      "climate_categories",
      "climate_drivers_latitude_altitude_ocean",
      "climate_hot_vs_cool",
      "weather_vintage",
      "water_sunlight_and_ripening",
    ],
    sections: [
      {
        title: "What controls climate?",
        bullets: [
          "Latitude (distance from the Equator) is the big driver.",
          "Altitude cools a region even at the same latitude.",
          "Oceans + currents can warm or cool coastal vineyards.",
        ],
      },
      {
        title: "Hot vs cool climate styles (general)",
        bullets: [
          "Hot: more alcohol, fuller body, more tannin, less acidity.",
          "Cool: less alcohol, lighter body, less tannin, more acidity.",
        ],
      },
      {
        title: "Weather & vintage",
        bullets: [
          "Year-to-year weather shifts style and quality.",
          "Extreme events (hail/frost/flood/wind) can damage grapes and reduce yield.",
        ],
      },
    ],
  },

  label_essentials: {
    id: "label_essentials",
    title: "Reading the Label (WSET L2)",
    pillar: "academy",
    read_time: "6–10 min",
    term_ids: [
      "gi_definition",
      "eu_pdo_pgi",
      "eu_traditional_gi_terms",
      "traditional_terms_examples",
      "italy_classico_riserva",
      "spain_aging_terms",
      "spain_aging_hierarchy_detail",
      "cuvee_definition",
      "old_vines_definition",
    ],
    sections: [
      {
        title: "Geographical Indications (GI)",
        bullets: [
          "Most wines have a GI; EU labels often show legal categories.",
          "Non-EU countries also have GI systems but legal category may not appear on label.",
        ],
      },
      {
        title: "Traditional terms (examples)",
        bullets: [
          "France: AOC (PDO), Vin de Pays (PGI)",
          "Italy: DOC/DOCG (PDO), IGT (PGI)",
          "Spain: DO/DOCa (PDO), Vino de la Tierra (PGI)",
          "Germany: Prädikatswein/Qualitätswein (PDO), Landwein (PGI)",
        ],
      },
      {
        title: "Common label words",
        bullets: [
          "Cuvée: selection/blend term; not legally controlled.",
          "Old vines: not legally defined; often implies lower yields (not guaranteed).",
          "Spain ageing terms: Joven → Crianza → Reserva → Gran Reserva.",
        ],
      },
    ],
  },

  storage_service: {
    id: "storage_service",
    title: "Storage & Service (WSET L2)",
    pillar: "academy",
    read_time: "5–8 min",
    term_ids: [
      "storage_cork_side",
      "storage_light_vibration",
      "service_red_temp",
      "service_ice_bucket",
      "service_temp_table",
      "service_temperature_bands",
      "sparkling_opening_safety",
      "decanting_principles",
      "opened_wine_preservation",
    ],
    sections: [
      {
        title: "Storage basics",
        bullets: [
          "Cork bottles: store on side so cork stays moist.",
          "Avoid strong light and vibration.",
        ],
      },
      {
        title: "Serving temperature basics",
        bullets: [
          "Many reds show best around 15–18°C.",
          "Use ice+water in a bucket for faster chilling.",
          "Match temperature to style: lighter wines → colder; fuller wines → warmer (within range).",
        ],
      },
      {
        title: "Service operations",
        bullets: [
          "Open sparkling carefully: hold cork, turn bottle, release pressure quietly.",
          "Decant old wines for sediment; decant selected young wines for controlled aeration.",
          "Recork and chill opened wine to slow oxidation; preservation tools extend life further.",
        ],
      },
    ],
  },

  core_grape_profiles_wset_l2: {
    id: "core_grape_profiles_wset_l2",
    title: "Core Grape Profiles (WSET L2)",
    pillar: "academy",
    read_time: "8–14 min",
    term_ids: [
      "grape_profile_chardonnay",
      "grape_profile_pinot_noir",
      "grape_profile_cabernet_merlot",
      "grape_profile_sauvignon_blanc",
      "grape_profile_syrah_grenache",
      "grape_profile_riesling",
    ],
    sections: [
      {
        title: "Why this module matters",
        bullets: [
          "These six profiles map to the main WSET Level 2 grape chapters and exam-style style expectations.",
          "Use climate + structure + aroma clues together rather than relying on one marker.",
        ],
      },
      {
        title: "Profile method",
        bullets: [
          "For each variety, remember climate fit, structural profile, common winemaking choices, and aging behavior.",
          "Compare two wines side-by-side to anchor differences in acid, tannin, and fruit spectrum.",
        ],
      },
    ],
  },
};
