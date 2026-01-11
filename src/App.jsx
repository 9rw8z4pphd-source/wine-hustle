import React, { useState } from 'react';
import { REGIONS_DATA } from './data/regions.js';
import { GRAPE_DB } from './data/grapes.js';

export default function App() {
  const [view, setView] = useState('home'); // home, country, region, grape
  const [activeItem, setActiveItem] = useState(null);
  const [prevView, setPrevView] = useState('home'); // To help the 'back' button from Grape view
  const [searchVisible, setSearchVisible] = useState(false);
  const [selectedGrape, setSelectedGrape] = useState(null);

  // --- NAVIGATION LOGIC ---
  const goHome = () => { setView('home'); setActiveItem(null); setSearchVisible(false); };
  
  const openGrape = (grapeName) => {
    // Find the grape in our DB or create a fallback
    const grapeData = GRAPE_DB[grapeName] || { 
      name: grapeName, 
      vibe: "Unknown Varietal", 
      basic: "Data for this grape is being updated.", 
      proTip: "Ask the sommelier for specific vintage details." 
    };
    setSelectedGrape({ ...grapeData, name: grapeName });
    setPrevView(view);
    setView('grape');
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#F4F1DE] font-sans pb-20 selection:bg-[#E2725B] selection:text-white">
      
      {/* HEADER NAVIGATION */}
      <nav className="flex justify-between items-center p-6 bg-[#1a1a1a] border-b border-[#E2725B]/20 sticky top-0 z-[100] backdrop-blur-md">
        <h1 onClick={goHome} className="text-xl font-black text-[#E2725B] cursor-pointer italic tracking-tighter hover:opacity-80 transition-all">
          WINE ACADEMY
        </h1>
        <button 
          onClick={() => setSearchVisible(!searchVisible)} 
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E2725B]/10 text-[#E2725B] border border-[#E2725B]/20"
        >
          {searchVisible ? '✕' : '🔍'}
        </button>
      </nav>

      {/* SEARCH OVERLAY */}
      {searchVisible && (
        <div className="p-4 bg-[#E2725B] animate-in slide-in-from-top duration-300">
          <input 
            className="w-full bg-white/20 border-none p-3 rounded-lg text-white placeholder-white/60 outline-none focus:ring-2 ring-white/30" 
            placeholder="Search regions, grapes, or profiles..." 
            autoFocus
          />
        </div>
      )}

      <main className="p-6 max-w-3xl mx-auto">

        {/* --- VIEW 1: HOME (CONTINENTS/COUNTRIES) --- */}
        {view === 'home' && (
          <div className="space-y-8 animate-fadeIn">
            <header className="mb-10">
              <h2 className="text-5xl font-serif text-[#C6AC8F] italic">World Map</h2>
              <p className="text-slate-500 mt-2 font-medium">Select a territory to begin your masterclass.</p>
            </header>
            
            {REGIONS_DATA.map(country => (
              <div 
                key={country.id} 
                onClick={() => {setActiveItem(country); setView('country');}} 
                className="group p-8 bg-[#1c1c1c] rounded-[2.5rem] border border-white/5 hover:border-[#E2725B]/50 transition-all cursor-pointer shadow-2xl"
              >
                <h3 className="text-3xl font-bold group-hover:text-[#E2725B] transition-colors">{country.name}</h3>
                <p className="text-[#A9927D] mt-2 leading-relaxed">{country.description}</p>
                <div className="mt-6 flex items-center text-[#E2725B] text-xs font-black tracking-widest uppercase">
                  Explore {country.subRegions.length} Regions <span className="ml-2">→</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* --- VIEW 2: COUNTRY (REGIONAL LIST) --- */}
        {view === 'country' && activeItem && (
          <div className="animate-fadeIn">
            <button onClick={goHome} className="text-[#E2725B] font-bold mb-6 italic hover:underline">← Back to World</button>
            <h2 className="text-6xl font-serif mb-10 text-white">{activeItem.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeItem.subRegions.map((reg, idx) => (
                <div 
                  key={idx} 
                  onClick={() => {setActiveItem(reg); setView('region');}}
                  className="p-6 bg-[#252525] rounded-2xl border-l-4 border-[#E2725B] hover:bg-[#333] transition-all cursor-pointer shadow-lg"
                >
                  <h4 className="text-xl font-bold">{reg.name}</h4>
                  <p className="text-[10px] text-[#E2725B] font-black uppercase mt-2 tracking-tighter">View Wines & Methods</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- VIEW 3: REGION (THE DEEP DIVE + FIX) --- */}
        {view === 'region' && activeItem && (
          <div className="animate-fadeIn">
            <button onClick={() => setView('country')} className="text-[#E2725B] font-bold mb-6 italic">← Back</button>
            
            <h2 className="text-4xl font-serif text-[#E2725B] mb-8">{activeItem.name}</h2>
            
            <div className="bg-[#E2725B]/5 p-6 rounded-3xl border border-[#E2725B]/20 mb-10">
              <h5 className="text-[10px] font-black uppercase text-[#E2725B] mb-2 tracking-widest">Regional Methodology</h5>
              <p className="italic text-lg text-[#C6AC8F] leading-relaxed">{activeItem.methods}</p>
            </div>

            {/* THE WINE LIST FIX: MAPS THROUGH EVERY WINE */}
            <div className="space-y-10">
              <h4 className="text-[10px] font-black text-slate-500 tracking-widest uppercase border-b border-white/10 pb-2 mb-6">Regional Wines & Grapes</h4>
              {activeItem.wines.map((wine, index) => (
                <div key={index} className="border-b border-white/5 pb-8 group">
                  <div className="flex justify-between items-end">
                    <h3 className="text-2xl font-bold group-hover:text-white transition-colors">{wine.name}</h3>
                    <button 
                      onClick={() => openGrape(wine.grape)}
                      className="text-[#E2725B] underline text-sm font-mono decoration-dotted underline-offset-4 hover:text-[#f59e8b]"
                    >
                      {wine.grape}
                    </button>
                  </div>
                  <p className="text-slate-400 mt-2">{wine.profile}</p>
                  <div className="mt-4 p-4 bg-white/5 rounded-xl text-sm border-l-2 border-[#E2725B] text-[#C6AC8F] italic">
                    <strong>Manager Pitch:</strong> {wine.pro}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- VIEW 4: GRAPE (DEDICATED FULL PAGE) --- */}
        {view === 'grape' && selectedGrape && (
          <div className="animate-fadeIn bg-[#252525] p-8 rounded-[3rem] border border-[#E2725B]/30 shadow-2xl">
            <button onClick={() => setView(prevView)} className="text-[#E2725B] font-bold mb-8 italic">← Close Deep Dive</button>
            
            <h2 className="text-5xl font-black text-[#E2725B] italic mb-2 tracking-tighter">{selectedGrape.name}</h2>
            <p className="text-[#C6AC8F] font-bold uppercase tracking-[0.3em] text-[10px] mb-10">"{selectedGrape.vibe}"</p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-[#1a1a1a] p-5 rounded-2xl border border-white/5">
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1 tracking-widest">Visual Color</p>
                <p className="text-sm font-medium">{selectedGrape.color || "Standard Varietal Color"}</p>
              </div>
              <div className="bg-[#1a1a1a] p-5 rounded-2xl border border-white/5">
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1 tracking-widest">Typical Body</p>
                <p className="text-sm font-medium">{selectedGrape.body || "Medium Body"}</p>
              </div>
            </div>

            <section className="mb-10">
              <h4 className="text-[#E2725B] font-black text-xs mb-3 uppercase tracking-widest">Aroma & Profile</h4>
              <p className="text-2xl text-white font-serif leading-relaxed italic">"{selectedGrape.basic}"</p>
            </section>

            <section className="mb-10 p-6 bg-white/5 rounded-3xl border border-white/5">
              <h4 className="text-blue-400 font-bold text-[10px] uppercase mb-3 tracking-tighter">Viticulture Science</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{selectedGrape.science || "Vineyard management data for this grape focuses on soil minerality and climate control."}</p>
            </section>

            <div className="p-8 bg-[#E2725B] rounded-[2rem] text-white shadow-2xl transform hover:scale-[1.02] transition-transform">
              <p className="text-[10px] font-black uppercase mb-2 tracking-widest opacity-80">Manager's Service Tip</p>
              <p className="font-bold text-xl leading-tight">{selectedGrape.proTip}</p>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
