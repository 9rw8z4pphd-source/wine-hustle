import React, { useState } from 'react';
import { REGIONS_DATA } from './data/regions.js';
import { GRAPE_DB } from './data/grapes.js';

export default function App() {
  const [view, setView] = useState('home'); // home, country, region, grape
  const [activeItem, setActiveItem] = useState(null);
  const [prevView, setPrevView] = useState('home'); 
  const [searchVisible, setSearchVisible] = useState(false);
  const [selectedGrape, setSelectedGrape] = useState(null);

  // --- NAVIGATION LOGIC ---
  const goHome = () => { 
    setView('home'); 
    setActiveItem(null); 
    setSearchVisible(false); 
  };
  
  const openGrape = (grapeName) => {
    const grapeData = GRAPE_DB[grapeName] || { 
      name: grapeName, 
      vibe: "Intriguing Discovery", 
      color: "Varietal Specific",
      body: "Medium",
      basic: "A unique varietal with local heritage.", 
      science: "Detailed viticulture data for this grape is currently being updated in our master database.",
      proTip: "Check the vintage bottle notes for specific tannin structure." 
    };
    setSelectedGrape({ ...grapeData, name: grapeName });
    setPrevView(view);
    setView('grape');
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#F4F1DE] font-sans pb-20 selection:bg-[#E2725B] selection:text-white">
      
      {/* GLOBAL HEADER */}
      <nav className="flex justify-between items-center p-6 bg-[#1a1a1a] border-b border-[#E2725B]/20 sticky top-0 z-[100] backdrop-blur-md">
        <h1 onClick={goHome} className="text-xl font-black text-[#E2725B] cursor-pointer italic tracking-tighter uppercase">
          Wine Academy
        </h1>
        <button 
          onClick={() => setSearchVisible(!searchVisible)} 
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E2725B]/10 text-[#E2725B] border border-[#E2725B]/20 active:scale-95 transition-transform"
        >
          {searchVisible ? '✕' : '🔍'}
        </button>
      </nav>

      {/* SEARCH OVERLAY */}
      {searchVisible && (
        <div className="p-4 bg-[#E2725B] animate-in slide-in-from-top duration-300 shadow-2xl">
          <input 
            className="w-full bg-white/20 border-none p-4 rounded-xl text-white placeholder-white/70 outline-none ring-2 ring-white/10 focus:ring-white/40" 
            placeholder="Search regions, grapes, or profiles..." 
            autoFocus
          />
        </div>
      )}

      <main className="p-6 max-w-3xl mx-auto">

        {/* VIEW 1: HOME (WORLD/COUNTRIES) */}
        {view === 'home' && (
          <div className="space-y-8 animate-fadeIn">
            <header className="mb-10 pt-4">
              <h2 className="text-5xl font-serif text-[#C6AC8F] italic leading-tight">World Regions</h2>
              <p className="text-slate-500 mt-2 font-medium tracking-wide">Select a territory to explore its heritage.</p>
            </header>
            
            {REGIONS_DATA.map(country => (
              <div 
                key={country.id} 
                onClick={() => {setActiveItem(country); setView('country');}} 
                className="group p-8 bg-[#1c1c1c] rounded-[2.5rem] border border-white/5 hover:border-[#E2725B]/50 transition-all cursor-pointer shadow-xl active:scale-[0.98]"
              >
                <h3 className="text-4xl font-bold group-hover:text-[#E2725B] transition-colors">{country.name}</h3>
                <p className="text-[#A9927D] mt-3 leading-relaxed text-lg">{country.description}</p>
                <div className="mt-6 flex items-center text-[#E2725B] text-[10px] font-black tracking-[0.2em] uppercase">
                  Explore {country.subRegions.length} Regions <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VIEW 2: COUNTRY (SUB-REGION LIST) */}
        {view === 'country' && activeItem && (
          <div className="animate-fadeIn">
            <button onClick={goHome} className="text-[#E2725B] font-bold mb-8 italic flex items-center gap-2">
              <span className="text-xl">←</span> Back to World
            </button>
            <h2 className="text-6xl font-serif mb-12 text-white">{activeItem.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeItem.subRegions.map((reg, idx) => (
                <div 
                  key={idx} 
                  onClick={() => {setActiveItem(reg); setView('region');}}
                  className="p-8 bg-[#252525] rounded-3xl border-l-4 border-[#E2725B] hover:bg-[#2d2d2d] transition-all cursor-pointer shadow-lg active:scale-[0.97]"
                >
                  <h4 className="text-2xl font-bold">{reg.name}</h4>
                  <p className="text-[10px] text-[#E2725B] font-black uppercase mt-3 tracking-widest">Deep Dive →</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 3: REGION (WINE LIST & METHODS) */}
        {view === 'region' && activeItem && (
          <div className="animate-fadeIn">
            <button onClick={() => setView('country')} className="text-[#E2725B] font-bold mb-8 italic">← Back</button>
            <h2 className="text-5xl font-serif text-[#E2725B] mb-8 leading-tight">{activeItem.name}</h2>
            
            <div className="bg-[#E2725B]/5 p-8 rounded-[2.5rem] border border-[#E2725B]/20 mb-12 shadow-inner">
              <h5 className="text-[10px] font-black uppercase text-[#E2725B] mb-3 tracking-[0.25em]">Winemaking Methodology</h5>
              <p className="italic text-xl text-[#C6AC8F] leading-relaxed font-serif">{activeItem.methods}</p>
            </div>

            {/* DYNAMIC WINE LIST */}
            <div className="space-y-12">
              <h4 className="text-[11px] font-black text-slate-500 tracking-[0.3em] uppercase border-b border-white/10 pb-3 mb-8">Iconic Wines & Varietals</h4>
              {activeItem.wines.map((wine, index) => (
                <div key={index} className="border-b border-white/5 pb-10 group">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="text-3xl font-bold group-hover:text-white transition-colors">{wine.name}</h3>
                    <button 
                      onClick={() => openGrape(wine.grape)}
                      className="text-[#E2725B] underline text-sm font-mono decoration-dotted underline-offset-8 hover:text-white transition-colors whitespace-nowrap pt-2"
                    >
                      {wine.grape}
                    </button>
                  </div>
                  <p className="text-slate-400 text-lg leading-relaxed">{wine.profile}</p>
                  <div className="mt-5 p-5 bg-white/5 rounded-2xl border-l-2 border-[#E2725B] text-[#C6AC8F] italic shadow-md">
                    <strong className="text-[#E2725B] not-italic mr-2">Manager Pitch:</strong> {wine.pro}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 4: GRAPE (DEDICATED FULL PAGE) */}
        {view === 'grape' && selectedGrape && (
          <div className="animate-fadeIn bg-[#252525] p-8 rounded-[3rem] border border-[#E2725B]/30 relative shadow-2xl">
            <button 
              onClick={() => setView(prevView)} 
              className="absolute top-8 right-8 text-2xl text-[#A9927D] hover:text-[#E2725B] transition-colors"
            >
              ✕
            </button>
            
            <h2 className="text-5xl font-black text-[#E2725B] italic mb-2 tracking-tighter">{selectedGrape.name}</h2>
            <p className="text-[#C6AC8F] font-bold uppercase tracking-[0.3em] text-[10px] mb-8">"{selectedGrape.vibe}"</p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-[#1a1a1a] p-4 rounded-2xl border border-white/5 shadow-inner">
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1 tracking-widest">Visual</p>
                <p className="text-sm">{selectedGrape.color}</p>
              </div>
              <div className="bg-[#1a1a1a] p-4 rounded-2xl border border-white/5 shadow-inner">
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1 tracking-widest">Body</p>
                <p className="text-sm">{selectedGrape.body}</p>
              </div>
            </div>

            <section className="mb-8">
              <h4 className="text-[#E2725B] font-bold text-sm mb-2 uppercase italic tracking-widest">The Profile</h4>
              <p className="text-xl text-white font-serif leading-relaxed italic">"{selectedGrape.basic}"</p>
            </section>

            <section className="mb-8 p-6 bg-white/5 rounded-3xl border border-white/5 shadow-lg">
              <h4 className="text-blue-400 font-bold text-[10px] uppercase mb-2 tracking-tighter">Production Science</h4>
              <p className="text-slate-400 text-sm italic leading-relaxed">{selectedGrape.science}</p>
            </section>

            <div className="p-6 bg-[#E2725B] rounded-2xl text-white shadow-[0_10px_30px_rgba(226,114,91,0.3)]">
              <p className="text-[10px] font-black uppercase mb-1 tracking-widest opacity-90">Manager's Edge</p>
              <p className="font-bold text-lg leading-tight">{selectedGrape.proTip}</p>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
