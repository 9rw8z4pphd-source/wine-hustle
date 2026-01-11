import React, { useState } from 'react';

// ==========================================
// 1. FULL WORLD DATABASE (Fixed & Expanded)
// ==========================================
const REGIONS_DATA = [
  {
    id: "italy",
    name: "Italy",
    description: "The land of 1,000 grapes and volcanic energy.",
    subRegions: [
      { 
        name: "Piedmont", 
        methods: "Long maceration in neutral Botte oak. Focus on Nebbiolo.", 
        wines: [
          {name: "Barolo", grape: "Nebbiolo", pro: "The King. High tannin. Pair with Truffle/Steak.", food: ["Steak", "Truffle", "Hard Cheese"] },
          {name: "Barbaresco", grape: "Nebbiolo", pro: "The Queen. Elegant, floral, and softer.", food: ["Duck", "Mushroom"] },
          {name: "Gavi", grape: "Cortese", pro: "Bone-dry white. Flinty and almond notes.", food: ["Seafood", "Shellfish"] },
          {name: "Barbera d'Asti", grape: "Barbera", pro: "High acid, low tannin. The 'Workhorse' red.", food: ["Salami", "Pizza"] }
        ] 
      },
      { 
        name: "Tuscany", 
        methods: "Sangiovese focus with clay and limestone influence.", 
        wines: [
          {name: "Brunello", grape: "Sangiovese", pro: "Power and longevity. 100% Sangiovese.", food: ["Roasted Lamb", "Steak"] },
          {name: "Chianti Classico", grape: "Sangiovese", pro: "The Black Rooster icon. Earthy and tart.", food: ["Pizza", "Bolognese"] },
          {name: "Bolgheri", grape: "Cabernet Blend", pro: "Super Tuscans. Modern, plush, and prestigious.", food: ["Steak", "Venison"] },
          {name: "Vernaccia", grape: "Vernaccia", pro: "Tuscany's white gold. Crisp and nutty.", food: ["Vegetables", "Fish"] }
        ] 
      },
      { 
        name: "Veneto", 
        methods: "Drying grapes (Appassimento) for concentration.", 
        wines: [
          {name: "Amarone", grape: "Corvina Blend", pro: "Full-bodied (15%+). Dried fruit and chocolate.", food: ["Blue Cheese", "Braised Beef"] },
          {name: "Valpolicella Ripasso", grape: "Corvina Blend", pro: "Baby Amarone. Great value/richness.", food: ["Pork", "Mushrooms"] },
          {name: "Prosecco Superiore", grape: "Glera", pro: "Fine bubbles from hilly sites.", food: ["Aperitivo"] }
        ] 
      },
      { 
        name: "Sicily", 
        methods: "Volcanic soils from Mt. Etna.", 
        wines: [
          {name: "Etna Rosso", grape: "Nerello Mascalese", pro: "Elegant, smoky, and light in color.", food: ["Grilled Tuna", "Duck"] },
          {name: "Grillo", grape: "Grillo", pro: "Coastal white. Saline, citrusy, and fresh.", food: ["Seafood"] }
        ] 
      },
      { 
        name: "Puglia", 
        methods: "Extreme heat and old bush vines.", 
        wines: [
          {name: "Primitivo", grape: "Primitivo (Zinfandel)", pro: "Jammy, dark fruit, and very smooth.", food: ["BBQ", "Burgers"] }
        ] 
      },
      { 
        name: "Alto Adige", 
        methods: "Alpine cooling and steep mountain slopes.", 
        wines: [
          {name: "Pinot Grigio", grape: "Pinot Grigio", pro: "High altitude, mineral, and zesty.", food: ["Light Pasta", "Fish"] }
        ] 
      }
    ]
  },
  {
    id: "france",
    name: "France",
    description: "Benchmark for Terroir and Appellation laws.",
    subRegions: [
      { 
        name: "Burgundy", 
        methods: "Single vineyard focus.", 
        wines: [
          {name: "Chablis", grape: "Chardonnay", pro: "No oak. Pure mineral and citrus.", food: ["Oysters"] },
          {name: "Meursault", grape: "Chardonnay", pro: "Rich, buttery, and prestigious.", food: ["Lobster"] }
        ] 
      }
    ]
  },
  {
    id: "germany",
    name: "Germany",
    description: "Precision acidity and steep river slopes.",
    subRegions: [
      { name: "Mosel", methods: "Blue slate soil.", wines: [{name: "Riesling", grape: "Riesling", pro: "Electric acid.", food: ["Spicy"] }] },
      { name: "Rheingau", methods: "South slopes.", wines: [{name: "Dry Riesling", grape: "Riesling", pro: "Powerful.", food: ["Pork"] }] },
      { name: "Pfalz", methods: "Warmer soil.", wines: [{name: "Spätburgunder", grape: "Pinot Noir", pro: "Elegant.", food: ["Chicken"] }] }
    ]
  }
];

const GRAPE_DB = {
  "Nebbiolo": { vibe: "The Tough Sophisticate", color: "Garnet", body: "Heavy/High Acid", basic: "Roses, Tar, Leather.", proTip: "High tannin needs fat or age to soften." },
  "Sangiovese": { vibe: "The Italian Soul", color: "Ruby", body: "Medium/High Acid", basic: "Cherries and Herbs.", proTip: "High acid makes it perfect for tomato-based food." }
};

// ==========================================
// 2. APP COMPONENT
// ==========================================
export default function App() {
  const [view, setView] = useState('home'); 
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [selectedGrape, setSelectedGrape] = useState(null);

  const openGrape = (name) => {
    const data = GRAPE_DB[name] || { name, vibe: "Varietal", proTip: "Standard service." };
    setSelectedGrape({ ...data, name });
    setView('grape');
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#F4F1DE] font-sans pb-10">
      
      {/* SIDE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-[200] flex animate-fadeIn">
          <div className="w-72 bg-[#1a1a1a] border-r border-[#E2725B]/30 p-8 shadow-2xl flex flex-col justify-between">
            <nav className="space-y-8 mt-10">
              <button onClick={() => {setView('home'); setMenuOpen(false);}} className="block text-2xl font-serif hover:text-[#E2725B]">🌍 World Map</button>
              <button onClick={() => {setView('pairings'); setMenuOpen(false);}} className="block text-2xl font-serif hover:text-[#E2725B]">🍖 Pairings</button>
            </nav>
            <button onClick={() => setMenuOpen(false)} className="text-[#E2725B] font-bold">CLOSE [X]</button>
          </div>
          <div className="flex-1 bg-black/70" onClick={() => setMenuOpen(false)}></div>
        </div>
      )}

      {/* HEADER */}
      <nav className="flex justify-between items-center p-6 bg-[#1a1a1a] sticky top-0 z-[100] border-b border-[#E2725B]/20">
        <button onClick={() => setMenuOpen(true)} className="text-3xl text-[#E2725B]">☰</button>
        <h1 onClick={() => setView('home')} className="text-xl font-black text-[#E2725B] italic cursor-pointer">WINE ACADEMY</h1>
        <div className="w-8"></div>
      </nav>

      <main className="p-6 max-w-3xl mx-auto">

        {/* HOME VIEW */}
        {view === 'home' && (
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-serif mb-10 italic text-[#C6AC8F]">Global Territories</h2>
            {REGIONS_DATA.map(country => (
              <div key={country.id} onClick={() => {setActiveItem(country); setView('country');}} 
                   className="p-8 bg-[#1c1c1c] rounded-[2rem] border border-white/5 mb-6 hover:border-[#E2725B]/40 cursor-pointer transition-all">
                <h3 className="text-3xl font-bold">{country.name}</h3>
                <p className="text-[#A9927D] mt-2">{country.description}</p>
                <div className="mt-4 text-[#E2725B] text-[10px] font-black tracking-widest uppercase">Explore {country.subRegions.length} Regions →</div>
              </div>
            ))}
          </div>
        )}

        {/* COUNTRY VIEW */}
        {view === 'country' && activeItem && (
          <div className="animate-fadeIn">
            <button onClick={() => setView('home')} className="text-[#E2725B] font-bold mb-8">← Back</button>
            <h2 className="text-6xl font-serif mb-10">{activeItem.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeItem.subRegions.map(reg => (
                <div key={reg.name} onClick={() => {setActiveItem(reg); setView('region');}} 
                     className="p-8 bg-[#252525] rounded-3xl border-l-4 border-[#E2725B] hover:bg-[#2d2d2d] cursor-pointer shadow-md">
                  <h4 className="text-2xl font-bold">{reg.name}</h4>
                  <p className="text-[10px] text-[#E2725B] uppercase font-black mt-2">Open Dataset</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* REGION VIEW */}
        {view === 'region' && activeItem && (
          <div className="animate-fadeIn">
            <button onClick={() => setView('country')} className="text-[#E2725B] font-bold mb-8">← Back</button>
            <h2 className="text-4xl font-serif text-[#E2725B] mb-8">{activeItem.name}</h2>
            <div className="bg-[#E2725B]/5 p-8 rounded-[2rem] border border-[#E2725B]/20 mb-10">
              <p className="italic text-[#C6AC8F] font-serif">{activeItem.methods}</p>
            </div>
            {activeItem.wines.map((wine, i) => (
              <div key={i} className="mb-10 border-b border-white/5 pb-8">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold">{wine.name}</h3>
                  <button onClick={() => openGrape(wine.grape)} className="text-[#E2725B] underline text-sm">{wine.grape}</button>
                </div>
                <div className="mt-4 p-5 bg-white/5 rounded-2xl border-l-2 border-[#E2725B] text-[#C6AC8F] text-sm italic">
                  <strong>Pitch:</strong> {wine.pro}
                </div>
                <div className="flex gap-2 mt-3">
                  {wine.food?.map(f => <span key={f} className="text-[10px] px-2 py-1 bg-[#E2725B]/10 rounded uppercase text-[#E2725B]">#{f}</span>)}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* GRAPE VIEW */}
        {view === 'grape' && selectedGrape && (
          <div className="animate-fadeIn bg-[#252525] p-8 rounded-[3rem] border border-[#E2725B]/30 relative">
            <button onClick={() => setView('home')} className="absolute top-8 right-8 text-2xl text-[#A9927D]">✕</button>
            <h2 className="text-5xl font-black text-[#E2725B] italic mb-6">{selectedGrape.name}</h2>
            <p className="text-xl text-white font-serif mb-8 leading-relaxed">"{selectedGrape.basic}"</p>
            <div className="p-8 bg-[#E2725B] rounded-3xl text-white">
              <p className="text-[10px] font-black uppercase mb-1">Manager's Edge</p>
              <p className="font-bold text-lg leading-tight">{selectedGrape.proTip}</p>
            </div>
          </div>
        )}

        {/* PAIRINGS VIEW */}
        {view === 'pairings' && (
          <div className="animate-fadeIn">
            <h2 className="text-5xl font-serif mb-10 italic text-[#C6AC8F]">The Perfect Match</h2>
            {["Steak", "Seafood", "Pasta", "Mushroom", "Truffle"].map(food => (
              <div key={food} className="p-8 bg-[#1c1c1c] rounded-3xl border border-white/5 mb-4">
                <h3 className="text-2xl font-bold text-[#E2725B]">{food}</h3>
                <p className="text-sm text-slate-400 mt-2">See Regions for specific recommendations.</p>
              </div>
            ))}
          </div>
        )}

      </main>
    </div>
  );
}
