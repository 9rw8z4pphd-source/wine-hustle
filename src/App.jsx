import React, { useState } from 'react';

// ==========================================
// 1. MASTER DATABASE (REGIONS)
// ==========================================
const REGIONS_DATA = [
  {
    id: "italy",
    name: "Italy",
    description: "Diverse styles from alpine North to volcanic South.",
    subRegions: [
      { 
        name: "Piedmont", 
        methods: "Long maceration in large neutral oak (Botte).", 
        wines: [
          {name: "Barolo", grape: "Nebbiolo", profile: "Rose, tar, high acid/tannin", pro: "The King. Decant for 1 hour minimum."},
          {name: "Barbaresco", grape: "Nebbiolo", pro: "The Queen. More elegant and approachable."},
          {name: "Gavi", grape: "Cortese", pro: "Bone-dry, lime, almond. Italy's Chablis."},
          {name: "Barbera d'Asti", grape: "Barbera", pro: "High acid, low tannin. The perfect food red."}
        ] 
      },
      { 
        name: "Tuscany", 
        methods: "Sangiovese focus with 'Galestro' soil influence.", 
        wines: [
          {name: "Brunello di Montalcino", grape: "Sangiovese", pro: "Power and longevity. 100% Sangiovese."},
          {name: "Chianti Classico", grape: "Sangiovese", pro: "The Black Rooster. Sour cherry and herbs."},
          {name: "Bolgheri", grape: "Cabernet Blend", pro: "Super Tuscans. Modern, plush, and prestigious."},
          {name: "Vernaccia di San Gimignano", grape: "Vernaccia", pro: "Tuscany's white icon. Nutty and crisp."}
        ] 
      },
      { 
        name: "Veneto", 
        methods: "Appassimento (drying grapes) and Charmat bubbles.", 
        wines: [
          {name: "Amarone", grape: "Corvina Blend", pro: "15%+ alcohol. Dried fig and chocolate."},
          {name: "Valpolicella Ripasso", grape: "Corvina Blend", pro: "The 'Baby Amarone'. Value and richness."},
          {name: "Prosecco Superiore", grape: "Glera", pro: "Higher quality bubbles from hilly sites."}
        ] 
      },
      { 
        name: "Sicily", 
        methods: "Volcanic 'Etna' viticulture.", 
        wines: [
          {name: "Etna Rosso", grape: "Nerello Mascalese", pro: "The Burgundy of the Mediterranean."},
          {name: "Grillo", grape: "Grillo", pro: "Saline, citrusy, and perfect for seafood."}
        ] 
      }
    ]
  },
  {
    id: "france",
    name: "France",
    description: "The global benchmark for Terroir and AOC regulations.",
    subRegions: [
      { 
        name: "Burgundy", 
        methods: "Small-batch fermentation, focus on 'Climats'.", 
        wines: [
          {name: "Chablis", grape: "Chardonnay", pro: "No oak. Pure mineral and oyster shell."},
          {name: "Meursault", grape: "Chardonnay", pro: "Rich, buttery, and prestigious."},
          {name: "Gevrey-Chambertin", grape: "Pinot Noir", pro: "Structured and muscular Pinot Noir."},
          {name: "Volnay", grape: "Pinot Noir", pro: "Floral, light, and feminine style."}
        ] 
      },
      { 
        name: "Bordeaux", 
        methods: "Left Bank (Gravel/Cab) vs Right Bank (Clay/Merlot).", 
        wines: [
          {name: "Pauillac", grape: "Cabernet Sauvignon", pro: "Left Bank icon. Pencil lead and cedar."},
          {name: "Saint-Émilion", grape: "Merlot", pro: "Right Bank. Velvet, plum, and chocolate."},
          {name: "Sauternes", grape: "Semillon Blend", pro: "Noble rot dessert wine. Honey and apricot."}
        ] 
      },
      { 
        name: "Rhône Valley", 
        methods: "Granite soils in North vs Galets (stones) in South.", 
        wines: [
          {name: "Hermitage", grape: "Syrah", pro: "Smoky, meaty, and world-class Syrah."},
          {name: "Châteauneuf-du-Pape", grape: "Grenache Blend", pro: "Powerful, spicy, and high alcohol."}
        ] 
      }
    ]
  },
  {
    id: "spain",
    name: "Spain",
    description: "High altitude, ancient vines, and unique oak aging.",
    subRegions: [
      { 
        name: "Rioja", 
        methods: "Graded by oak time (Crianza, Reserva, Gran Reserva).", 
        wines: [
          {name: "Rioja Reserva", grape: "Tempranillo", pro: "Classic vanilla, tobacco, and dried fruit."},
          {name: "Rioja Blanco", grape: "Viura", pro: "Nutty, oxidized, and complex when aged."}
        ] 
      },
      { 
        name: "Rías Baixas", 
        methods: "Coastal Atlantic cooling.", 
        wines: [
          {name: "Albariño", grape: "Albariño", pro: "Zesty, saline, and peach-driven white."}
        ] 
      }
    ]
  }
];

// ==========================================
// 2. GRAPE DATABASE (DNA)
// ==========================================
const GRAPE_DB = {
  "Nebbiolo": {
    vibe: "The Tough Sophisticate",
    color: "Pale Garnet / Orange rim",
    body: "Heavy Tannin / High Acid",
    basic: "Smells like Rose, Tar, and Sour Cherry.",
    science: "A finicky grape that only thrives in the specific calcareous marl of Piedmont.",
    proTip: "Look for the orange rim—it's a sign of Nebbiolo even when the wine is young."
  },
  "Sangiovese": {
    vibe: "The Italian Soul",
    color: "Ruby Red",
    body: "Medium Body / High Acid",
    basic: "Red Cherry, Roasted Tomato, and Oregano.",
    science: "Highly clonal; varies significantly from the thin Chianti to the thick Brunello.",
    proTip: "The acidity cuts through fat. Suggest this for high-fat meats or tomato dishes."
  },
  "Chardonnay": {
    vibe: "The Chameleon",
    color: "Pale to Golden Yellow",
    body: "Medium to Full",
    basic: "Apple, Lemon, Butter, and Pineapple.",
    science: "Takes on winemaking influence (oak, malolactic) more than any other grape.",
    proTip: "Always ask: 'Do you prefer crisp/unoaked or rich/buttery?'"
  },
  "Pinot Noir": {
    vibe: "The Heartbreak Grape",
    color: "Translucent Red",
    body: "Light Body / High Acid",
    basic: "Strawberry, Mushroom, and Forest Floor.",
    science: "Thin skin makes it susceptible to rot but allows for elegant, low-tannin wines.",
    proTip: "The most flexible food wine. Pairs with fish, poultry, and mushroom risotto."
  }
};

// ==========================================
// 3. THE APP COMPONENT
// ==========================================
export default function App() {
  const [view, setView] = useState('home'); 
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [selectedGrape, setSelectedGrape] = useState(null);

  // --- PERSPECTIVE PIVOTS ---
  const openGrape = (name) => {
    const data = GRAPE_DB[name] || { name, vibe: "Discovery", color: "TBD", body: "Medium", basic: "Researching...", science: "Updating...", proTip: "Serve at 16-18°C." };
    setSelectedGrape({ ...data, name });
    setView('grape');
    setMenuOpen(false);
  };

  const goHome = () => { setView('home'); setMenuOpen(false); setActiveItem(null); };

  return (
    <div className="min-h-screen bg-[#121212] text-[#F4F1DE] font-sans selection:bg-[#E2725B]">
      
      {/* SIDEBAR MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-[200] flex animate-fadeIn">
          <div className="w-72 bg-[#1a1a1a] border-r border-[#E2725B]/30 p-8 shadow-2xl flex flex-col justify-between">
            <div>
              <h2 className="text-[#E2725B] font-black italic tracking-widest mb-12">ACADEMY MENU</h2>
              <nav className="space-y-8">
                <button onClick={goHome} className="block text-2xl font-serif hover:text-[#E2725B] transition-colors">🌍 Regions</button>
                <button onClick={() => {setView('all-grapes'); setMenuOpen(false);}} className="block text-2xl font-serif hover:text-[#E2725B] transition-colors">🍇 Grape DNA</button>
                <button onClick={() => {setView('flavors'); setMenuOpen(false);}} className="block text-2xl font-serif hover:text-[#E2725B] transition-colors">👅 Flavor Profile</button>
              </nav>
            </div>
            <button onClick={() => setMenuOpen(false)} className="text-[#E2725B] font-bold text-sm tracking-[0.3em]">CLOSE [X]</button>
          </div>
          <div className="flex-1 bg-black/70 backdrop-blur-sm" onClick={() => setMenuOpen(false)}></div>
        </div>
      )}

      {/* TOP HEADER */}
      <nav className="flex justify-between items-center p-6 bg-[#1a1a1a] sticky top-0 z-[100] border-b border-[#E2725B]/10">
        <button onClick={() => setMenuOpen(true)} className="text-3xl text-[#E2725B] active:scale-90 transition-transform">☰</button>
        <h1 onClick={goHome} className="text-xl font-black text-[#E2725B] uppercase cursor-pointer tracking-tighter">Wine Academy</h1>
        <div className="w-8"></div>
      </nav>

      <main className="p-6 max-w-3xl mx-auto">

        {/* --- VIEW: HOME (REGIONS) --- */}
        {view === 'home' && (
          <div className="animate-fadeIn">
            <h2 className="text-5xl font-serif mb-10 italic text-[#C6AC8F]">Global Territories</h2>
            {REGIONS_DATA.map(country => (
              <div key={country.id} onClick={() => {setActiveItem(country); setView('country');}} 
                   className="p-8 bg-[#1c1c1c] rounded-[2.5rem] border border-white/5 mb-6 hover:border-[#E2725B]/40 transition-all cursor-pointer shadow-lg active:scale-[0.98]">
                <h3 className="text-3xl font-bold">{country.name}</h3>
                <p className="text-[#A9927D] mt-2 text-lg">{country.description}</p>
                <div className="mt-6 text-[#E2725B] text-[10px] font-black tracking-widest uppercase">Explore {country.subRegions.length} Regions →</div>
              </div>
            ))}
          </div>
        )}

        {/* --- VIEW: COUNTRY --- */}
        {view === 'country' && activeItem && (
          <div className="animate-fadeIn">
            <button onClick={goHome} className="text-[#E2725B] font-bold mb-8 italic">← Back</button>
            <h2 className="text-6xl font-serif mb-12">{activeItem.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeItem.subRegions.map(reg => (
                <div key={reg.name} onClick={() => {setActiveItem(reg); setView('region');}} 
                     className="p-8 bg-[#252525] rounded-3xl border-l-4 border-[#E2725B] hover:bg-[#2d2d2d] cursor-pointer shadow-md">
                  <h4 className="text-2xl font-bold">{reg.name}</h4>
                  <p className="text-[10px] text-[#E2725B] uppercase font-black mt-2 tracking-widest">Open Dataset</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- VIEW: REGION --- */}
        {view === 'region' && activeItem && (
          <div className="animate-fadeIn">
            <button onClick={() => setView('country')} className="text-[#E2725B] font-bold mb-8 italic">← Back</button>
            <h2 className="text-4xl font-serif text-[#E2725B] mb-8">{activeItem.name}</h2>
            <div className="bg-[#E2725B]/5 p-8 rounded-[2.5rem] border border-[#E2725B]/20 mb-12">
              <h5 className="text-[10px] font-black text-[#E2725B] uppercase mb-2 tracking-widest">Regional Methodology</h5>
              <p className="italic text-xl text-[#C6AC8F] font-serif leading-relaxed">{activeItem.methods}</p>
            </div>
            {activeItem.wines.map((wine, i) => (
              <div key={i} className="mb-12 border-b border-white/5 pb-10 group">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-3xl font-bold group-hover:text-white transition-colors">{wine.name}</h3>
                  <button onClick={() => openGrape(wine.grape)} className="text-[#E2725B] underline text-sm font-mono whitespace-nowrap pt-2">{wine.grape}</button>
                </div>
                <p className="text-slate-400 mt-3 text-lg">{wine.profile}</p>
                <div className="mt-5 p-5 bg-white/5 rounded-2xl border-l-2 border-[#E2725B] italic text-[#C6AC8F]">
                  <strong className="text-[#E2725B] not-italic mr-2 font-black uppercase text-[10px] tracking-widest">Pitch:</strong> {wine.pro}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* --- VIEW: GRAPE DNA --- */}
        {view === 'all-grapes' && (
          <div className="animate-fadeIn">
            <h2 className="text-5xl font-serif mb-10 italic text-[#C6AC8F]">Varietal Library</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.keys(GRAPE_DB).map(name => (
                <div key={name} onClick={() => openGrape(name)} className="p-8 bg-[#1c1c1c] rounded-3xl border border-white/5 hover:border-[#E2725B]/50 transition-all cursor-pointer">
                  <h4 className="text-2xl font-bold text-[#E2725B]">{name}</h4>
                  <p className="text-xs text-slate-500 uppercase font-black mt-2 tracking-widest">{GRAPE_DB[name].vibe}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- VIEW: FLAVORS --- */}
        {view === 'flavors' && (
          <div className="animate-fadeIn">
            <h2 className="text-5xl font-serif mb-10 italic text-[#C6AC8F]">The Palate Pivot</h2>
            <div className="space-y-6">
              {[
                { title: "Crisp & Mineral", color: "text-blue-300", bg: "bg-blue-500/5", list: ["Chablis", "Gavi", "Sancerre", "Albariño"] },
                { title: "Bold & Tannic", color: "text-red-500", bg: "bg-red-500/5", list: ["Barolo", "Brunello", "Napa Cabernet"] },
                { title: "Floral & Ethereal", color: "text-pink-300", bg: "bg-pink-500/5", list: ["Pinot Noir", "Barbaresco", "Etna Rosso"] },
                { title: "Rich & Textured", color: "text-orange-300", bg: "bg-orange-500/5", list: ["Meursault", "Rioja Reserva", "Amarone"] }
              ].map(cat => (
                <div key={cat.title} className={`${cat.bg} p-8 rounded-[2.5rem] border border-white/5`}>
                  <h3 className={`${cat.color} text-2xl font-black uppercase italic tracking-widest mb-6`}>{cat.title}</h3>
                  <div className="flex flex-wrap gap-3">
                    {cat.list.map(item => (
                      <span key={item} className="px-4 py-2 bg-[#121212] rounded-full text-sm border border-white/10">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- VIEW: GRAPE DEEP DIVE --- */}
        {view === 'grape' && selectedGrape && (
          <div className="animate-fadeIn bg-[#252525] p-8 rounded-[3rem] border border-[#E2725B]/30 relative shadow-2xl">
            <button onClick={() => setView('home')} className="absolute top-8 right-8 text-2xl text-[#A9927D]">✕</button>
            <h2 className="text-5xl font-black text-[#E2725B] italic mb-2 tracking-tighter">{selectedGrape.name}</h2>
            <p className="text-[#C6AC8F] font-bold uppercase tracking-[0.3em] text-[10px] mb-8">"{selectedGrape.vibe}"</p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-[#1a1a1a] p-4 rounded-2xl border border-white/5">
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Visual</p>
                <p className="text-sm">{selectedGrape.color}</p>
              </div>
              <div className="bg-[#1a1a1a] p-4 rounded-2xl border border-white/5">
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Body</p>
                <p className="text-sm">{selectedGrape.body}</p>
              </div>
            </div>

            <section className="mb-8">
              <h4 className="text-[#E2725B] font-bold text-sm mb-2 uppercase italic tracking-widest">The Profile</h4>
              <p className="text-xl text-white font-serif leading-relaxed italic">"{selectedGrape.basic}"</p>
            </section>

            <section className="mb-8 p-6 bg-white/5 rounded-3xl border border-white/5">
              <h4 className="text-blue-400 font-bold text-[10px] uppercase mb-2 tracking-tighter">Production Science</h4>
              <p className="text-slate-400 text-sm italic leading-relaxed">{selectedGrape.science}</p>
            </section>

            <div className="p-8 bg-[#E2725B] rounded-2xl text-white shadow-2xl">
              <p className="text-[10px] font-black uppercase mb-1 tracking-widest">Manager's Edge</p>
              <p className="font-bold text-xl leading-tight">{selectedGrape.proTip}</p>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
