import React, { useState } from 'react';
import { REGIONS_DATA } from './data/regions';
import { WINE_LIBRARY } from './data/wines';

export default function App() {
  const [view, setView] = useState('home'); 
  const [activeCountry, setActiveCountry] = useState(null);
  const [activeRegion, setActiveRegion] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Navigation Handlers
  const goHome = () => { 
    setView('home'); 
    setActiveCountry(null); 
    setActiveRegion(null); 
    setMenuOpen(false); 
  };

  const selectCountry = (country) => {
    setActiveCountry(country);
    setView('country');
  };

  const selectRegion = (region) => {
    setActiveRegion(region);
    setView('region');
  };

  // Logic to pull wines for the specific region ID
  const currentWines = activeRegion ? WINE_LIBRARY[activeRegion.id] || [] : [];

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F4F1DE] font-sans pb-20 selection:bg-[#E2725B] selection:text-white">
      
      {/* MOBILE/SIDE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-[200] flex animate-fadeIn">
          <div className="w-72 bg-[#161616] border-r border-[#E2725B]/30 p-8 shadow-2xl flex flex-col justify-between">
            <nav className="space-y-8 mt-10">
              <button onClick={goHome} className="block text-2xl font-serif hover:text-[#E2725B] transition-colors uppercase tracking-widest">🌍 World Map</button>
              <div className="pt-4 border-t border-white/10">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-4 font-black">Quick Access</p>
                {REGIONS_DATA.map(c => (
                  <button 
                    key={c.id} 
                    onClick={() => { selectCountry(c); setMenuOpen(false); }}
                    className="block py-2 text-sm text-[#C6AC8F] hover:text-white"
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </nav>
            <button onClick={() => setMenuOpen(false)} className="text-[#E2725B] font-bold text-xs tracking-widest border border-[#E2725B]/40 py-2 rounded-full">CLOSE [X]</button>
          </div>
          <div className="flex-1 bg-black/80 backdrop-blur-sm" onClick={() => setMenuOpen(false)}></div>
        </div>
      )}

      {/* STICKY HEADER */}
      <nav className="flex justify-between items-center p-6 bg-[#161616]/90 backdrop-blur-md sticky top-0 z-[100] border-b border-[#E2725B]/20">
        <button onClick={() => setMenuOpen(true)} className="text-3xl text-[#E2725B] hover:scale-110 transition-transform">☰</button>
        <h1 onClick={goHome} className="text-xl font-black text-[#E2725B] italic cursor-pointer uppercase tracking-[0.2em]">Wine Scholar</h1>
        <div className="w-8"></div> {/* Spacer for symmetry */}
      </nav>

      <main className="p-6 max-w-4xl mx-auto">
        
        {/* VIEW: HOME (WORLD MAP) */}
        {view === 'home' && (
          <div className="animate-fadeIn">
            <header className="mb-12">
              <h2 className="text-5xl font-serif mb-4 italic text-[#C6AC8F]">Global Encyclopedia</h2>
              <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">Select a country to explore its terroir</p>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {REGIONS_DATA.map(country => (
                <div 
                  key={country.id} 
                  onClick={() => selectCountry(country)} 
                  className="group p-8 bg-[#1a1a1a] rounded-[2.5rem] border border-white/5 hover:border-[#E2725B]/50 cursor-pointer shadow-xl transition-all hover:-translate-y-1"
                >
                  <h3 className="text-3xl font-bold group-hover:text-[#E2725B] transition-colors">{country.name}</h3>
                  <p className="text-[#A9927D] mt-2 text-lg leading-relaxed">{country.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-[#E2725B] text-[10px] font-black tracking-[0.2em] uppercase italic opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore {country.subRegions.length} Regions <span className="text-lg">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: COUNTRY (REGION LIST) */}
        {view === 'country' && activeCountry && (
          <div className="animate-fadeIn">
            <button onClick={goHome} className="text-[#E2725B] font-black mb-8 italic flex items-center gap-2 text-xs uppercase tracking-widest hover:translate-x-[-4px] transition-transform">
              ← Back to World
            </button>
            <h2 className="text-7xl font-serif mb-12 text-white">{activeCountry.name}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeCountry.subRegions.map((reg) => (
                <div 
                  key={reg.id} 
                  onClick={() => selectRegion(reg)} 
                  className="p-8 bg-[#1a1a1a] rounded-3xl border-l-4 border-[#E2725B] hover:bg-[#222] cursor-pointer shadow-lg transition-all"
                >
                  <h4 className="text-2xl font-bold text-white">{reg.name}</h4>
                  <p className="text-[10px] text-[#E2725B] uppercase font-black mt-2 tracking-widest opacity-70">
                    {WINE_LIBRARY[reg.id]?.length || 0} Specialties Catalogued
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: REGION (THE DEEP DIVE) */}
        {view === 'region' && activeRegion && (
          <div className="animate-fadeIn pb-20">
            <button onClick={() => setView('country')} className="text-[#E2725B] font-black mb-8 italic flex items-center gap-2 text-xs uppercase tracking-widest hover:translate-x-[-4px] transition-transform">
              ← {activeCountry.name}
            </button>
            
            <div className="mb-12 border-b border-white/10 pb-12">
              <h2 className="text-6xl font-serif text-[#E2725B] mb-6 italic">{activeRegion.name}</h2>
              <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/5">
                <p className="text-[#C6AC8F] text-xl leading-relaxed italic font-serif">
                  {activeRegion.methods}
                </p>
              </div>
            </div>

            {currentWines.length > 0 ? (
              <div className="space-y-16">
                {currentWines.map((wine, i) => (
                  <div key={i} className="bg-[#161616] rounded-[3rem] p-10 border border-white/5 shadow-2xl relative overflow-hidden group">
                    {/* Background Numbering */}
                    <div className="absolute -top-4 -right-4 text-[10rem] font-black text-white/[0.03] select-none pointer-events-none group-hover:text-[#E2725B]/[0.05] transition-colors">
                      {i + 1}
                    </div>

                    <div className="relative z-10">
                      <div className="mb-6">
                        <h3 className="text-4xl font-bold text-white mb-3">{wine.name}</h3>
                        <span className="px-4 py-1.5 bg-[#E2725B]/10 rounded-full border border-[#E2725B]/30 text-[#E2725B] font-mono text-xs uppercase tracking-widest">
                          {wine.grape}
                        </span>
                      </div>

                      <div className="mb-10 p-6 bg-black/40 rounded-2xl italic text-[#C6AC8F] border-l-2 border-[#E2725B] text-lg leading-relaxed shadow-inner">
                        "{wine.pro}"
                      </div>

                      {wine.subTypes && (
                        <div className="space-y-4 mb-10">
                          <p className="text-[10px] font-black text-[#E2725B] uppercase tracking-[0.4em] mb-4 opacity-80">Understanding the Hierarchy</p>
                          {wine.subTypes.map((t, idx) => (
                            <div key={idx} className="bg-white/[0.02] p-6 rounded-2xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/[0.05] transition-colors">
                              <span className="text-[#F4F1DE] font-bold text-xl">{t.level}</span>
                              <span className="text-sm text-[#A9927D] italic md:text-right max-w-sm leading-snug">{t.rule}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-3">
                        {wine.food?.map(f => (
                          <span key={f} className="text-[10px] px-4 py-2 bg-white/5 rounded-full text-slate-400 font-bold uppercase tracking-widest border border-white/10">
                            #{f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
                <p className="text-[#C6AC8F] italic">Expanding database for this region...</p>
              </div>
            )}
          </div>
        )}

      </main>
    </div>
  );
}
