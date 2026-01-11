import React, { useState } from 'react';
import { REGIONS_DATA } from './data/regions.js';
import { GRAPE_DB } from './data/grapes.js';

export default function App() {
  const [view, setView] = useState('home'); 
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [selectedGrape, setSelectedGrape] = useState(null);

  // --- HELPER: GET ALL WINES ACROSS ALL REGIONS ---
  const allWines = REGIONS_DATA.flatMap(c => c.subRegions.flatMap(s => s.wines));

  const openGrape = (name) => {
    const data = GRAPE_DB[name] || { name, vibe: "Discovery", basic: "Data loading..." };
    setSelectedGrape({ ...data, name });
    setView('grape');
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#F4F1DE] font-sans">
      
      {/* SIDEBAR MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-[200] flex">
          <div className="w-64 bg-[#1a1a1a] border-r border-[#E2725B]/30 p-6 shadow-2xl animate-slideRight">
            <h2 className="text-[#E2725B] font-black italic mb-8">ACADEMY MENU</h2>
            <nav className="space-y-6">
              <button onClick={() => {setView('home'); setMenuOpen(false);}} className="block text-xl hover:text-[#E2725B]">🌍 Regions</button>
              <button onClick={() => {setView('all-grapes'); setMenuOpen(false);}} className="block text-xl hover:text-[#E2725B]">🍇 Grapes</button>
              <button onClick={() => {setView('flavors'); setMenuOpen(false);}} className="block text-xl hover:text-[#E2725B]">👅 Flavor Profiles</button>
            </nav>
          </div>
          <div className="flex-1 bg-black/60" onClick={() => setMenuOpen(false)}></div>
        </div>
      )}

      {/* TOP HEADER */}
      <nav className="flex justify-between items-center p-6 bg-[#1a1a1a] sticky top-0 z-[100] border-b border-white/5">
        <button onClick={() => setMenuOpen(true)} className="text-2xl text-[#E2725B]">☰</button>
        <h1 onClick={() => setView('home')} className="text-xl font-black text-[#E2725B] uppercase cursor-pointer">Wine Academy</h1>
        <div className="w-6"></div> {/* Spacer for symmetry */}
      </nav>

      <main className="p-6 max-w-3xl mx-auto">

        {/* --- PERSPECTIVE 1: REGIONS (Original View) --- */}
        {view === 'home' && (
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-serif mb-8 italic">World Regions</h2>
            {REGIONS_DATA.map(country => (
              <div key={country.id} onClick={() => {setActiveItem(country); setView('country');}} 
                   className="p-8 bg-[#1c1c1c] rounded-[2rem] border border-white/5 mb-4 hover:border-[#E2725B]/40 cursor-pointer">
                <h3 className="text-2xl font-bold">{country.name}</h3>
                <p className="text-[#A9927D] text-sm mt-1">{country.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* --- PERSPECTIVE 2: ALL GRAPES --- */}
        {view === 'all-grapes' && (
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-serif mb-8 italic">Grape Library</h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(GRAPE_DB).map(grape => (
                <div key={grape} onClick={() => openGrape(grape)}
                     className="p-6 bg-[#1c1c1c] rounded-2xl border border-white/5 hover:bg-[#E2725B]/10 cursor-pointer">
                  <h4 className="font-bold text-[#E2725B]">{grape}</h4>
                  <p className="text-[10px] text-slate-500 uppercase mt-1">{GRAPE_DB[grape].vibe}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- PERSPECTIVE 3: FLAVOR MATCHING --- */}
        {view === 'flavors' && (
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-serif mb-8 italic">Flavor Styles</h2>
            <div className="space-y-8">
              {/* Pro Categorization */}
              {[
                { title: "Crisp & Mineral", keywords: ["Chablis", "Gavi", "Sancerre"] },
                { title: "Bold & Tannic", keywords: ["Barolo", "Cabernet", "Brunello"] },
                { title: "Rich & Buttery", keywords: ["Chardonnay", "Meursault"] },
                { title: "Smooth & Jammy", keywords: ["Malbec", "Shiraz", "Primitivo"] }
              ].map(cat => (
                <section key={cat.title} className="p-6 bg-[#1c1c1c] rounded-3xl border border-white/5">
                  <h3 className="text-[#E2725B] font-black text-xl mb-4">{cat.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.keywords.map(kw => (
                      <span key={kw} className="px-4 py-2 bg-white/5 rounded-full text-sm font-mono border border-white/10">{kw}</span>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        )}

        {/* --- GRAPE DETAIL VIEW (Same as before) --- */}
        {view === 'grape' && selectedGrape && (
          <div className="animate-fadeIn bg-[#252525] p-8 rounded-[3rem] border border-[#E2725B]/30 shadow-2xl relative">
            <button onClick={() => setView('home')} className="absolute top-8 right-8 text-2xl text-[#A9927D]">✕</button>
            <h2 className="text-5xl font-black text-[#E2725B] italic mb-2 tracking-tighter">{selectedGrape.name}</h2>
            <p className="text-[#C6AC8F] font-bold uppercase tracking-[0.3em] text-[10px] mb-8">"{selectedGrape.vibe}"</p>
            {/* ... Visual/Body/Profile/Manager's Edge boxes go here as in your last update ... */}
            <div className="p-6 bg-[#E2725B] rounded-2xl text-white mt-10 shadow-2xl">
              <p className="text-[10px] font-black uppercase mb-1">Manager's Edge</p>
              <p className="font-bold text-lg leading-tight">{selectedGrape.proTip}</p>
            </div>
          </div>
        )}

        {/* Standard Country/Region Views remain the same... */}
        {view === 'country' && activeItem && (
            <div className="animate-fadeIn">
                <button onClick={() => setView('home')} className="text-[#E2725B] font-bold mb-6">← Back</button>
                <h2 className="text-5xl font-serif mb-10">{activeItem.name}</h2>
                {activeItem.subRegions.map(reg => (
                    <div key={reg.name} onClick={() => {setActiveItem(reg); setView('region');}} 
                         className="p-6 bg-[#252525] rounded-2xl mb-3 border-l-4 border-[#E2725B] cursor-pointer">
                        {reg.name}
                    </div>
                ))}
            </div>
        )}

        {view === 'region' && activeItem && (
            <div className="animate-fadeIn">
                <button onClick={() => setView('country')} className="text-[#E2725B] font-bold mb-6">← Back</button>
                <h2 className="text-4xl font-serif text-[#E2725B] mb-8">{activeItem.name}</h2>
                <div className="bg-[#E2725B]/5 p-6 rounded-3xl border border-[#E2725B]/20 mb-8">
                    <p className="italic text-[#C6AC8F]">{activeItem.methods}</p>
                </div>
                {activeItem.wines.map((wine, i) => (
                    <div key={i} className="mb-8 border-b border-white/5 pb-6">
                        <div className="flex justify-between">
                            <h3 className="text-2xl font-bold">{wine.name}</h3>
                            <button onClick={() => openGrape(wine.grape)} className="text-[#E2725B] underline text-sm">{wine.grape}</button>
                        </div>
                        <p className="text-slate-400 mt-2">{wine.profile}</p>
                        <div className="mt-4 p-4 bg-white/5 rounded-xl border-l-2 border-[#E2725B] italic text-sm text-[#C6AC8F]">
                            <strong>Manager Pitch:</strong> {wine.pro}
                        </div>
                    </div>
                ))}
            </div>
        )}

      </main>
    </div>
  );
}
