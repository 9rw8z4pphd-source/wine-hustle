export const REGIONS_DATA = [
  {
    id: "italy",
    name: "Italy",
    description: "The land of 1,000 grapes. Focus on acid and structure.",
    subRegions: [
      {
        name: "Piedmont",
        climate: "Cool, foggy continental",
        methods: "Long maceration (skin contact), aging in large 'Botte' (old oak).",
        wines: [
          { name: "Barolo", grape: "Nebbiolo", profile: "High Tannin, Roses, Tar", pro: "Needs 10+ years to soften. The 'King'." },
          { name: "Gavi", grape: "Cortese", profile: "Crisp, Lime, Peachy", pro: "The Chablis of Italy." }
        ]
      },
      {
        name: "Tuscany",
        climate: "Warm Mediterranean",
        methods: "Sangiovese-led blends. Use of French Barrique in 'Super Tuscans'.",
        wines: [
          { name: "Brunello", grape: "Sangiovese Grosso", profile: "Bold, Earthy, Espresso", pro: "Must be 100% Sangiovese by law." },
          { name: "Chianti Classico", grape: "Sangiovese", profile: "Sour Cherry, Herbs", pro: "Look for the Gallo Nero (Black Rooster)." }
        ]
      }
    ]
  },
  {
    id: "france",
    name: "France",
    description: "The global benchmark for 'Terroir' and technique.",
    subRegions: [
      {
        name: "Burgundy",
        climate: "Cool Continental",
        methods: "Malolactic fermentation (creates buttery feel), Small parcel farming.",
        wines: [
          { name: "Chablis", grape: "Chardonnay", profile: "Flint, Green Apple", pro: "Kimmeridgian limestone soil is key." },
          { name: "Côte d'Or", grape: "Pinot Noir", profile: "Silk, Raspberry, Mushroom", pro: "The most expensive soil on earth." }
        ]
      },
      {
        name: "Bordeaux",
        climate: "Maritime (Atlantic influence)",
        methods: "The 'Assemblage' (Blending) method. Heavy use of new French Oak.",
        wines: [
          { name: "Left Bank", grape: "Cabernet Lead", profile: "Graphite, Cedar, Power", pro: "Structured by the gravel soils of Médoc." },
          { name: "Right Bank", grape: "Merlot Lead", profile: "Plum, Velvet, Soft", pro: "Clay soils make Merlot plush and rich." }
        ]
      }
    ]
  }
];
