import React, { useState } from 'react';
// IMPORT CHECK: Ensure these paths match your folder structure exactly
import { REGIONS_DATA } from './data/regions'; 
import { GRAPE_DB } from './data/grapes';

export default function App() {
  const [view, setView] = useState('home'); // home, country, region, grape, pairings
  const [activeItem, setActiveItem] = useState(null);
  const [selectedGrape, setSelectedGrape] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Helper to find Grape Data
  const openGrape = (name) => {
    const data = GRAPE_DB[name] || { name, vibe: "Discovery", proTip: "Standard service." };
    setSelectedGrape({ ...data, name });
    setView('grape');
    setMenuOpen(false);
  };

  // Helper for Breadcrumbs
  const goHome = () => { setView('home'); setActiveItem(null); setMenuOpen(false); };

  return (
    <div className="min-h-screen bg-[#121212] text-[#F4F1DE] font-sans pb-10">
      
      {/* SIDEBAR NAVIGATION */}
      {menuOpen && (
        <div className="fixed inset-0 z-[200] flex animate-fadeIn">
          <div className="w-72 bg-[#1a1a1a] border-r border-[#E2725B]/30 p-8 shadow-2xl flex flex-col justify-between">
            <nav className="space-y-8 mt-10">
              <button onClick={goHome} className="block text-2xl font-serif hover:text-[#E2725B] transition-colors">🌍 Regions</button>
              <button onClick={() => {setView('pairings'); setMenuOpen(false);}} className="block text-2xl font-serif hover:text-[#E2725B] transition-colors">🍖 Food Pairings</button>
            </nav>
            <button onClick={() => setMenuOpen(false)} className="text-[#E2725B] font-bold uppercase tracking-widest text-xs">Close Menu [X]</button>
          </div>
          <div className="flex-1 bg-black/70 backdrop-blur-sm" onClick={() => setMenuOpen(false)}></div>
        </div>
      )}

      {/* GLOBAL TOP NAV */}
      <nav className="flex justify-between items-center p-6 bg-[#1a1a1a] sticky top-0 z-[100] border-b border-[#E2725B]/20 shadow-xl">
        <button onClick={() => setMenuOpen(true)} className="text-3xl text-[#E2725B]">☰</button>
        <h1 onClick={goHome} className="text-xl font-black text-[#E2725B] italic tracking-tighter cursor-pointer">WINE ACADEMY</h1>
        <div className="w-8"></div>
      </nav>

      <main className="p-6 max-w-3xl mx-auto">

        {/* 1. COUNTRY SELECTION (Pulling from REGIONS_DATA) */}
        {view === 'home' && (
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-serif mb-10 italic text-[#C6AC8F]">Global Territories</h2>
            {REGIONS_DATA.map(country => (
              <div key={country.id} onClick={() => {setActiveItem(country); setView('country');}} 
                   className="p-8 bg-[#1c1c1c] rounded-[2.5rem] border border-white/5 mb-6 hover:border-[#E2725B]/40 cursor-pointer transition-all shadow-lg active:scale-95">
                <h3 className="text-3xl font-bold">{country.name}</h3>
                <p className="text-[#A9927D] mt-2 text-lg">{country.description}</p>
                <div className="mt-6 text-[#E2725B] text-[10px] font-black tracking-widest uppercase">
                  Explore {country.subRegions.length} Regions →
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2. SUB-REGION LIST (Pulling from activeItem.subRegions) */}
        {view === 'country' && activeItem && (
          <div className="animate-fadeIn">
            <button onClick={goHome} className="text-[#E2725B] font-bold mb-8">← Back to World</button>
            <h2 className="text-6xl font-serif mb-12">{activeItem.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeItem.subRegions.map((reg, idx) => (
                <div key={idx} onClick={() => {setActiveItem(reg); setView('region');}} 
                     className="p-8 bg-[#252525] rounded-3xl border-l-4 border-[#E2725B] hover:bg-[#2d2d2d] cursor-pointer shadow-md transition-all">
                  <h4 className="text-2xl font-bold">{reg.name}</h4>
                  <p className="text-[10px] text-[#E2725B] uppercase font-black mt-2 tracking-widest">Open {reg.wines.length} Wines</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. WINE LIST (Pulling from activeItem.wines) */}
        {view === 'region' && activeItem && (
          <div className="animate-fadeIn">
            <button onClick={() => setView('country')} className="text-[#E2725B] font-bold mb-8">← Back</button>
            <h2 className="text-4xl font-serif text-[#E2725B] mb-8 italic">{activeItem.name}</h2>
            <div className="bg-[#E2725B]/5 p-8 rounded-[2rem] border border-[#E2725B]/20 mb-10 shadow-inner">
              <p className="italic text-xl text-[#C6AC8F] font-serif leading-relaxed">{activeItem.methods}</p>
            </div>
            {activeItem.wines.map((wine, i) => (
              <div key={i} className="mb-12 border-b border-white/5 pb-10 group">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-3xl font-bold group-hover:text-white transition-colors">{wine.name}</h3>
                  <button onClick={() => openGrape(wine.grape)} className="text-[#E2725B] underline text-sm font-mono pt-2">{wine.grape}</button>
                </div>
                <div className="mt-5 p-5 bg-white/5 rounded-2xl border-l-2 border-[#E2725B] text-[#C6AC8F] italic leading-relaxed">
                  <strong className="text-[#E2725B] not-italic mr-2 font-black uppercase text-[10px]">Manager Pitch:</strong> {wine.pro}
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {wine.food?.map(f => (
                    <span key={f} className="text-[10px] px-2 py-1 bg-[#E2725B]/10 rounded uppercase tracking-tighter text-[#E2725B]">#{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 4. GRAPE DEEP DIVE */}
        {view === 'grape' && selectedGrape && (
          <div className="animate-fadeIn bg-[#252525] p-8 rounded-[3rem] border border-[#E2725B]/30 relative shadow-2xl">
            <button onClick={() => setView('home')} className="absolute top-8 right-8 text-2xl text-[#A9927D]">✕</button>
            <h2 className="text-5xl font-black text-[#E2725B] italic mb-6 tracking-tighter">{selectedGrape.name}</h2>
            <div className="p-8 bg-[#E2725B] rounded-3xl text-white shadow-xl">
              <p className="text-[10px] font-black uppercase mb-1 tracking-widest opacity-80">Manager's Edge</p>
              <p className="font-bold text-lg leading-tight">{selectedGrape.proTip}</p>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
