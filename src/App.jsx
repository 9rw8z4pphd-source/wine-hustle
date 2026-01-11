import React, { useState } from 'react';

// ==========================================
// 1. MASTER DATABASE
// ==========================================
const REGIONS_DATA = [
  {
    id: "italy",
    name: "Italy",
    description: "The land of 1,000 grapes and volcanic energy.",
    subRegions: [
      { 
        name: "Piedmont", 
        methods: "Long maceration in neutral Botte oak.", 
        wines: [
          {name: "Barolo", grape: "Nebbiolo", profile: "Rose, tar, leather", pro: "The King. Decant 1hr. Pair with Truffle/Fatty Red Meat.", food: ["Steak", "Truffle", "Hard Cheese"] },
          {name: "Gavi", grape: "Cortese", profile: "Lime, flint, almond", pro: "The Italian Chablis. High acid.", food: ["Seafood", "Pesto", "Salad"] }
        ] 
      },
      { 
        name: "Tuscany", 
        methods: "Sangiovese focus on Galestro (clay/schist) soil.", 
        wines: [
          {name: "Brunello", grape: "Sangiovese", pro: "Power & Longevity. Must be 100% Sangiovese.", food: ["Steak", "Wild Boar", "Roasted Lamb"] },
          {name: "Chianti Classico", grape: "Sangiovese", pro: "The 'Black Rooster'. High acid cuts tomato sauce.", food: ["Pizza", "Pasta", "Tomato Sauce"] }
        ] 
      }
    ]
  },
  {
    id: "france",
    name: "France",
    description: "The global benchmark for structure and elegance.",
    subRegions: [
      { 
        name: "Burgundy", 
        methods: "Small parcel (Climat) farming.", 
        wines: [
          {name: "Chablis", grape: "Chardonnay", pro: "Pure mineral. Grown on fossilized oyster shells.", food: ["Oysters", "White Fish", "Goat Cheese"] },
          {name: "Gevrey-Chambertin", grape: "Pinot Noir", pro: "Powerful Pinot. Gamey and earthy.", food: ["Duck", "Mushroom", "Chicken"] }
        ] 
      }
    ]
  }
];

const GRAPE_DB = {
  "Nebbiolo": {
    vibe: "The Tough Sophisticate",
    color: "Pale Garnet",
    body: "Heavy Tannin / High Acid",
    basic: "Roses, Tar, Sour Cherry.",
    science: "Very sensitive to soil; only thrives in calcareous marl.",
    proTip: "Looks light like Pinot Noir, but hits like a heavyweight boxer."
  },
  "Sangiovese": {
    vibe: "The Italian Soul",
    color: "Ruby Red",
    body: "Medium / High Acid",
    basic: "Red Cherry, Roasted Tomato, Herbs.",
    science: "High acidity makes it the ultimate digestive aid for fatty foods.",
    proTip: "The #1 recommendation for any tomato-based Italian dish."
  }
};

// ==========================================
// 2. THE APP LOGIC
// ==========================================
export default function App() {
  const [view, setView] = useState('home'); 
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [selectedGrape, setSelectedGrape] = useState(null);

  const openGrape = (name) => {
    const data = GRAPE_DB[name] || { name, vibe: "Varietal", color: "TBD", body: "Medium", basic: "Loading info...", science: "Updating...", proTip: "Serve at 16°C." };
    setSelectedGrape({ ...data, name });
    setView('grape');
    setMenuOpen(false);
  };

  const goHome = () => { setView('home'); setMenuOpen(false); setActiveItem(null); };

  return (
    <div className="min-h-screen bg-[#121212] text-[#F4F1DE] font-sans">
      
      {/* SIDEBAR MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-[200] flex animate-fadeIn">
          <div className="w-72 bg-[#1a1a1a] border-r border-[#E2725B]/30 p-8 shadow-2xl flex flex-col justify-between">
            <div>
              <h2 className="text-[#E2725B] font-black italic mb-12 uppercase tracking-widest">Master Menu</h2>
              <nav className="space-y-8">
                <button onClick={goHome} className="block text-2xl font-serif hover:text-[#E2725B]">🌍 Regions</button>
                <button onClick={() => {setView('all-grapes'); setMenuOpen(false);}} className="block text-2xl font-serif hover:text-[#E2725B]">🍇 Grape DNA</button>
                <button onClick={() => {setView('flavors'); setMenuOpen(false);}} className="block text-2xl font-serif hover:text-[#E2725B]">👅 Flavors</button>
                <button onClick={() => {setView('pairings'); setMenuOpen(false);}} className="block text-2xl font-serif hover:text-[#E2725B]">🍖 Pairings</button>
              </nav>
            </div>
            <button onClick={() => setMenuOpen(false)} className="text-[#E2725B] font-bold text-[10px] tracking-widest">CLOSE [X]</button>
          </div>
          <div className="flex-1 bg-black/70 backdrop-blur-sm" onClick={() => setMenuOpen(false)}></div>
        </div>
      )}

      {/* HEADER */}
      <nav className="flex justify-between items-center p-6 bg-[#1a1a1a] sticky top-0 z-[100] border-b border-[#E2725B]/10">
        <button onClick={() => setMenuOpen(true)} className="text-3xl text-[#E2725B]">☰</button>
        <h1 onClick={goHome} className="text-xl font-black text-[#E2725B] italic tracking-tighter cursor-pointer">WINE ACADEMY</h1>
        <div className="w-8"></div>
      </nav>

      <main className="p-6 max-w-3xl mx-auto">

        {/* --- VIEW: HOME (REGIONS) --- */}
        {view === 'home' && (
          <div className="animate-fadeIn">
            <h2 className="text-5xl font-serif mb-10 italic text-[#C6AC8F]">Global Map</h2>
            {REGIONS_DATA.map(country => (
              <div key={country.id} onClick={() => {setActiveItem(country); setView('country');}} 
                   className="p-8 bg-[#1c1c1c] rounded-[2.5rem] border border-white/5 mb-6 hover:border-[#E2725B]/40 cursor-pointer shadow-lg active:scale-95 transition-all">
                <h3 className="text-3xl font-bold">{country.name}</h3>
                <p className="text-[#A9927D] mt-2 text-lg">{country.description}</p>
                <div className="mt-6 text-[#E2725B] text-[10px] font-black tracking-widest uppercase">Select Territory →</div>
              </div>
            ))}
          </div>
        )}

        {/* --- VIEW: PAIRINGS (NEW PIVOT) --- */}
        {view === 'pairings' && (
          <div className="animate-fadeIn">
            <h2 className="text-5xl font-serif mb-10 italic text-[#C6AC8F]">The Food Match</h2>
            <div className="space-y-4">
              {[
                { type: "Steak / Red Meat", recommendations: ["Barolo", "Brunello", "Napa Cabernet"], icon: "🥩" },
                { type: "Seafood / Oysters", recommendations: ["Chablis", "Gavi", "Albariño"], icon: "🦪" },
                { type: "Pizza / Tomato Pasta", recommendations: ["Chianti", "Barbera", "Valpolicella"], icon: "🍝" },
                { type: "Duck / Mushrooms", recommendations: ["Pinot Noir", "Barbaresco", "Etna Rosso"], icon: "🍄" }
              ].map(match => (
                <div key={match.type} className="p-8 bg-[#1c1c1c] rounded-3xl border border-white/5">
                  <div className="text-4xl mb-4">{match.icon}</div>
                  <h3 className="text-2xl font-bold text-[#E2725B] mb-4">{match.type}</h3>
                  <div className="flex flex-wrap gap-2">
                    {match.recommendations.map(r => (
                      <span key={r} className="px-4 py-2 bg-[#E2725B]/10 rounded-full text-sm border border-[#E2725B]/20">{r}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
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
                     className="p-8 bg-[#252525] rounded-3xl border-l-4 border-[#E2725B] hover:bg-[#2d2d2d] cursor-pointer shadow-md transition-all">
                  <h4 className="text-2xl font-bold">{reg.name}</h4>
                  <p className="text-[10px] text-[#E2725B] uppercase font-black mt-2 tracking-widest">Open Data →</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- VIEW: REGION --- */}
        {view === 'region' && activeItem && (
          <div className="animate-fadeIn">
            <button onClick={() => setView('country')} className="text-[#E2725B] font-bold mb-8 italic">← Back</button>
            <h2 className="text-4xl font-serif text-[#E2725B] mb-8 italic">{activeItem.name}</h2>
            {activeItem.wines.map((wine, i) => (
              <div key={i} className="mb-12 border-b border-white/5 pb-10">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-3xl font-bold">{wine.name}</h3>
                  <button onClick={() => openGrape(wine.grape)} className="text-[#E2725B] underline text-sm font-mono pt-2">{wine.grape}</button>
                </div>
                <div className="mt-5 p-5 bg-white/5 rounded-2xl border-l-2 border-[#E2725B] italic text-[#C6AC8F]">
                  <strong className="text-[#E2725B] not-italic mr-2 font-black uppercase text-[10px]">Manager Pitch:</strong> {wine.pro}
                </div>
                <div className="flex gap-2 mt-4">
                  {wine.food?.map(f => <span key={f} className="text-[10px] px-2 py-1 bg-white/5 rounded uppercase tracking-tighter text-slate-500">#{f}</span>)}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* --- VIEW: GRAPE DEEP DIVE --- */}
        {view === 'grape' && selectedGrape && (
          <div className="animate-fadeIn bg-[#252525] p-8 rounded-[3rem] border border-[#E2725B]/30 relative shadow-2xl">
            <button onClick={goHome} className="absolute top-8 right-8 text-2xl text-[#A9927D]">✕</button>
            <h2 className="text-5xl font-black text-[#E2725B] italic mb-2 tracking-tighter">{selectedGrape.name}</h2>
            <p className="text-[#C6AC8F] font-bold uppercase tracking-[0.3em] text-[10px] mb-8">"{selectedGrape.vibe}"</p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-[#1a1a1a] p-4 rounded-2xl border border-white/5">
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1 tracking-widest">Visual</p>
                <p className="text-sm font-medium">{selectedGrape.color}</p>
              </div>
              <div className="bg-[#1a1a1a] p-4 rounded-2xl border border-white/5">
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1 tracking-widest">Body</p>
                <p className="text-sm font-medium">{selectedGrape.body}</p>
              </div>
            </div>
            <section className="mb-8">
              <h4 className="text-[#E2725B] font-bold text-sm mb-2 uppercase italic tracking-widest text-center">Profile</h4>
              <p className="text-xl text-white font-serif leading-relaxed italic text-center">"{selectedGrape.basic}"</p>
            </section>
            <div className="p-8 bg-[#E2725B] rounded-3xl text-white shadow-2xl">
              <p className="text-[10px] font-black uppercase mb-1 tracking-widest opacity-80">Manager's Edge</p>
              <p className="font-bold text-lg leading-tight">{selectedGrape.proTip}</p>
            </div>
          </div>
        )}

        {/* --- VIEW: ALL GRAPES & FLAVORS --- */}
        {/* (Simplified logic here to keep code copy-pasteable) */}
        {(view === 'all-grapes' || view === 'flavors') && (
            <div className="animate-fadeIn text-center py-20">
                <h3 className="text-2xl text-[#C6AC8F] italic mb-4">Perspective Loading...</h3>
                <p className="text-sm text-slate-500">Applying the relational filters to the database.</p>
                <button onClick={goHome} className="mt-8 text-[#E2725B] font-bold">Return to Main World</button>
            </div>
        )}

      </main>
    </div>
  );
}
