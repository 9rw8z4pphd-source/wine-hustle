import React, { useState } from 'react';
import { REGIONS_DATA } from './data/regions.js';
import { GRAPE_DB } from './data/grapes.js';

export default function App() {
  const [view, setView] = useState('home'); 
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [selectedGrape, setSelectedGrape] = useState(null);

  const openGrape = (name) => {
    const data = GRAPE_DB[name] || { name, vibe: "Discovery", proTip: "Standard service temp." };
    setSelectedGrape({ ...data, name });
    setView('grape');
    setMenuOpen(false);
  };

  const goHome = () => { setView('home'); setMenuOpen(false); setActiveItem(null); };

  return (
    <div className="min-h-screen bg-[#121212] text-[#F4F1DE] font-sans pb-10">
      
      {/* SIDEBAR MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-[200] flex animate-fadeIn">
          <div className="w-72 bg-[#1a1a1a] border-r border-[#E2725B]/30 p-8 shadow-2xl flex flex-col justify-between">
            <nav className="space-y-8 mt-10">
              <button onClick={goHome} className="block text-2xl font-serif hover:text-[#E2725B]">🌍 Regions</button>
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
        <h1 onClick={goHome} className="text-xl font-black text-[#E2725B] italic cursor-pointer">WINE ACADEMY</h1>
        <div className="w-8"></div>
      </nav>

      <main className="p-6 max-w-3xl mx-auto">

        {/* --- VIEW: HOME (COUNTRIES) --- */}
        {view === 'home' && (
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-serif mb-10 italic text-[#C6AC8F]">Global Map</h2>
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

        {/* --- VIEW: COUNTRY (REGIONS) --- */}
        {view === 'country' && activeItem && (
          <div className="animate-fadeIn">
            <button onClick={goHome} className="text-[#E2725B] font-bold mb-8">← Back</button>
            <h2 className="text-5xl font-serif mb-10">{activeItem.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeItem.subRegions.map(reg => (
                <div key={reg.name} onClick={() => {setActiveItem(reg); setView('region');}} 
                     className="p-8 bg-[#252525] rounded-3xl border-l-4 border-[#E2725B] hover:bg-[#2d2d2d] cursor-pointer shadow-md transition-all">
                  <h4 className="text-2xl font-bold">{reg.name}</h4>
                  <p className="text-[10px] text-[#E2725B] uppercase font-black mt-2">Open Data</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- VIEW: REGION (WINES) --- */}
        {view === 'region' && activeItem && (
          <div className="animate-fadeIn">
            <button onClick={() => setView('country')} className="text-[#E2725B] font-bold mb-8">← Back</button>
            <h2 className="text-4xl font-serif text-[#E2725B] mb-8">{activeItem.name}</h2>
            <div className="bg-[#E2725B]/5 p-8 rounded-[2rem] border border-[#E2725B]/20 mb-10">
              <p className="italic text-[#C6AC8F] font-serif">{activeItem.methods}</p>
            </div>
            {activeItem.wines.map((wine, i) => (
              <div key={i} className="mb-10 border-b border-white/5 pb-8">
                <div className="flex justify-between">
                  <h3 className="text-2xl font-bold">{wine.name}</h3>
                  <button onClick={() => openGrape(wine.grape)} className="text-[#E2725B] underline text-sm pt-1">{wine.grape}</button>
                </div>
                <div className="mt-4 p-4 bg-white/5 rounded-xl border-l-2 border-[#E2725B] text-[#C6AC8F] italic text-sm leading-relaxed">
                  <strong>Manager Pitch:</strong> {wine.pro}
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {wine.food?.map(f => <span key={f} className="text-[10px] px-2 py-1 bg-white/5 rounded uppercase text-slate-500">#{f}</span>)}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* --- VIEW: GRAPE DETAIL --- */}
        {view === 'grape' && selectedGrape && (
          <div className="animate-fadeIn bg-[#252525] p-10 rounded-[3rem] border border-[#E2725B]/30 shadow-2xl relative">
            <button onClick={() => setView('home')} className="absolute top-8 right-8 text-2xl text-[#A9927D]">✕</button>
            <h2 className="text-5xl font-black text-[#E2725B] italic mb-8">{selectedGrape.name}</h2>
            <div className="p-8 bg-[#E2725B] rounded-3xl text-white">
              <p className="text-[10px] font-black uppercase mb-1 opacity-80">Manager's Edge</p>
              <p className="font-bold text-lg leading-tight">{selectedGrape.proTip}</p>
            </div>
          </div>
        )}

        {/* --- VIEW: PAIRINGS --- */}
        {view === 'pairings' && (
          <div className="animate-fadeIn">
            <h2 className="text-5xl font-serif mb-10 italic text-[#C6AC8F]">Food Pairings</h2>
            <div className="grid gap-4">
              {["Steak", "Seafood", "Pasta", "Thai Food", "Duck"].map(food => (
                <div key={food} className="p-6 bg-[#1c1c1c] rounded-2xl border border-white/5">
                  <h3 className="text-xl font-bold text-[#E2725B]">{food}</h3>
                  <p className="text-sm text-slate-400 mt-2">Browse the regions menu for specific {food} recommendations.</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
