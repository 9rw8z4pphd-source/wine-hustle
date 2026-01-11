import React, { useState } from 'react';
import { REGIONS_DATA } from './data/regions';
import { WINE_LIBRARY } from './data/wines';
import { GRAPES_DATA } from './data/grapes';

export default function App() {
  const [view, setView] = useState('home'); 
  const [activeCountry, setActiveCountry] = useState(null);
  const [activeRegion, setActiveRegion] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (newView, country = null, region = null) => {
    setView(newView);
    setActiveCountry(country);
    setActiveRegion(region);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // Helper for DNA Power Bars
  const PowerBar = ({ label, level }) => (
    <div className="mb-4">
      <div className="flex justify-between text-[10px] uppercase tracking-tighter mb-1 text-slate-400">
        <span>{label}</span>
        <span>{level} / 5</span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#E2725B] transition-all duration-700" 
          style={{ width: `${(level / 5) * 100}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F4F1DE] font-sans pb-20">
      
      {/* SIDEBAR MENU */}
      <div className={`fixed inset-0 z-[200] flex transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <div className={`w-80 bg-[#161616] h-full p-10 border-r border-[#E2725B]/30 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <h2 className="text-[#E2725B] font-black tracking-[0.3em] text-[10px] uppercase mb-10">Wine Scholar</h2>
          <nav className="space-y-6">
            <button onClick={() => navigate('home')} className="block text-3xl font-serif hover:text-[#E2725B] italic">World Regions</button>
            <button onClick={() => navigate('grapes')} className="block text-3xl font-serif hover:text-[#E2725B] italic">Grape DNA</button>
          </nav>
        </div>
        <div className="flex-1 bg-black/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)}></div>
      </div>

      {/* STICKY HEADER */}
      <nav className="flex justify-between items-center p-6 bg-[#161616]/90 backdrop-blur-md sticky top-0 z-[100] border-b border-white/5">
        <button onClick={() => setMenuOpen(true)} className="text-3xl text-[#E2725B]">☰</button>
        <h1 onClick={() => navigate('home')} className="text-xl font-black text-[#E2725B] italic cursor-pointer uppercase tracking-widest">Wine Scholar</h1>
        <div className="w-8"></div>
      </nav>

      <main className="p-6 max-w-5xl mx-auto">
        
        {/* VIEW: HOME (WORLD REGIONS) */}
        {view === 'home' && (
          <div className="animate-fadeIn">
            <h2 className="text-5xl font-serif mb-12 italic text-[#C6AC8F]">Global Terroir</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {REGIONS_DATA.map(country => (
                <div key={country.id} onClick={() => navigate('country', country)} className="group p-10 bg-[#161616] rounded-[3rem] border border-white/5 hover:border-[#E2725B]/40 cursor-pointer transition-all">
                  <h3 className="text-4xl font-bold group-hover:text-[#E2725B] transition-colors">{country.name}</h3>
                  <p className="text-[#A9927D] mt-3 text-lg">{country.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: COUNTRY (SUB-REGION LIST) */}
        {view === 'country' && activeCountry && (
          <div className="animate-fadeIn">
            <button onClick={() => navigate('home')} className="text-[#E2725B] font-bold mb-8 text-xs uppercase tracking-widest">← Back to World</button>
            <h2 className="text-7xl font-serif mb-12">{activeCountry.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeCountry.subRegions.map(reg => (
                <div key={reg.id} onClick={() => navigate('region', activeCountry, reg)} className="p-8 bg-[#1a1a1a] rounded-[2rem] border-l-4 border-[#E2725B] hover:bg-[#222] cursor-pointer shadow-lg transition-all">
                  <h4 className="text-2xl font-bold">{reg.name}</h4>
                  <p className="text-[10px] text-[#E2725B] uppercase font-black mt-2 tracking-widest opacity-70">Explore Specialist Wines</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: REGION (THE DEEP DIVE) */}
        {view === 'region' && activeRegion && (
          <div className="animate-fadeIn pb-20">
            <button onClick={() => navigate('country', activeCountry)} className="text-[#E2725B] font-bold mb-8 text-xs uppercase tracking-widest">← {activeCountry.name}</button>
            <h2 className="text-6xl font-serif text-[#E2725B] mb-6 italic">{activeRegion.name}</h2>
            <p className="text-xl text-[#C6AC8F] mb-12 italic border-b border-white/5 pb-10 leading-relaxed">{activeRegion.methods}</p>
            
            <div className="space-y-12">
              {WINE_LIBRARY[activeRegion.id]?.map((wine, i) => (
                <div key={i} className="bg-[#161616] rounded-[3rem] p-10 border border-white/5 shadow-2xl relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-4xl font-bold mb-3">{wine.name}</h3>
                    <span className="px-4 py-1.5 bg-[#E2725B]/10 rounded-full border border-[#E2725B]/30 text-[#E2725B] font-mono text-xs uppercase tracking-widest mb-6 inline-block">
                      {wine.grape}
                    </span>
                    <p className="text-xl text-[#C6AC8F] italic leading-relaxed mb-8">"{wine.pro}"</p>
                    {wine.subTypes && (
                      <div className="space-y-3">
                        {wine.subTypes.map((t, idx) => (
                          <div key={idx} className="bg-white/[0.02] p-4 rounded-xl border border-white/5 flex justify-between gap-4">
                            <span className="font-bold text-[#F4F1DE]">{t.level}</span>
                            <span className="text-sm text-[#A9927D] italic text-right">{t.rule}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: GRAPE ENCYCLOPEDIA */}
        {view === 'grapes' && (
          <div className="animate-fadeIn">
            <h2 className="text-6xl font-serif mb-4 text-[#E2725B] italic">Grape DNA</h2>
            <p className="text-[#C6AC8F] mb-16 text-lg">The chemical blueprint of the world's finest fruit.</p>
            <div className="space-y-24">
              {GRAPES_DATA.map(grape => (
                <div key={grape.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/5 pt-12">
                  <div>
                    <h3 className="text-5xl font-bold mb-2">{grape.name}</h3>
                    <p className="text-[#E2725B] font-mono text-xs uppercase tracking-widest mb-6 italic">{grape.origin} • {grape.style}</p>
                    <p className="text-[#A9927D] leading-relaxed mb-8">{grape.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {grape.flavors.map(f => (
                        <span key={f} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-[#C6AC8F]">{f}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#161616] p-8 rounded-[2.5rem] border border-white/5 shadow-xl">
                    <PowerBar label="Acidity" level={grape.stats.acidity} />
                    <PowerBar label="Tannin" level={grape.stats.tannin} />
                    <PowerBar label="Body" level={grape.stats.body} />
                    <PowerBar label="Alcohol" level={grape.stats.alcohol} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
