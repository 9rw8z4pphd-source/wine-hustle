import React, { useState } from 'react';
import { REGIONS_DATA } from './data/regions';

export default function App() {
  const [view, setView] = useState('home'); 
  const [activeItem, setActiveItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const goHome = () => { setView('home'); setActiveItem(null); setMenuOpen(false); };

  return (
    <div className="min-h-screen bg-[#121212] text-[#F4F1DE] font-sans">
      {/* HEADER */}
      <nav className="flex justify-between items-center p-6 bg-[#1a1a1a] sticky top-0 z-[100] border-b border-[#E2725B]/20">
        <button onClick={() => setMenuOpen(true)} className="text-3xl text-[#E2725B]">☰</button>
        <h1 onClick={goHome} className="text-xl font-black text-[#E2725B] italic cursor-pointer uppercase">Wine Scholar</h1>
        <div className="w-8"></div>
      </nav>

      <main className="p-6 max-w-3xl mx-auto">
        
        {/* VIEW: HOME */}
        {view === 'home' && (
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-serif mb-10 italic text-[#C6AC8F]">Global Knowledge</h2>
            {REGIONS_DATA.map(country => (
              <div key={country.id} onClick={() => {setActiveItem(country); setView('country');}} 
                   className="p-8 bg-[#1c1c1c] rounded-[2.5rem] border border-white/5 mb-6 hover:border-[#E2725B]/40 cursor-pointer shadow-lg active:scale-95 transition-all">
                <h3 className="text-3xl font-bold">{country.name}</h3>
                <p className="text-[#A9927D] mt-2 text-lg">{country.description}</p>
                <div className="mt-6 text-[#E2725B] text-[10px] font-black tracking-widest uppercase">Learn {country.subRegions.length} Regions →</div>
              </div>
            ))}
          </div>
        )}

        {/* VIEW: COUNTRY */}
        {view === 'country' && activeItem && (
          <div className="animate-fadeIn">
            <button onClick={goHome} className="text-[#E2725B] font-bold mb-8 italic">← Back</button>
            <h2 className="text-6xl font-serif mb-12">{activeItem.name}</h2>
            <div className="grid grid-cols-1 gap-4">
              {activeItem.subRegions.map((reg, idx) => (
                <div key={idx} onClick={() => {setActiveItem(reg); setView('region');}} 
                     className="p-8 bg-[#252525] rounded-3xl border-l-4 border-[#E2725B] hover:bg-[#2d2d2d] cursor-pointer shadow-md">
                  <h4 className="text-2xl font-bold">{reg.name}</h4>
                  <p className="text-[10px] text-[#E2725B] uppercase font-black mt-2">Study {reg.wines.length} Wine Families</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: REGION (HIERARCHY VIEW) */}
        {view === 'region' && activeItem && (
          <div className="animate-fadeIn pb-20">
            <button onClick={() => setView('country')} className="text-[#E2725B] font-bold mb-8 italic">← Back</button>
            <h2 className="text-4xl font-serif text-[#E2725B] mb-8">{activeItem.name}</h2>
            
            {activeItem.wines.map((wine, i) => (
              <div key={i} className="mb-16 bg-[#1a1a1a] rounded-[3rem] p-8 border border-white/5 shadow-2xl">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-4xl font-bold text-white mb-2">{wine.name}</h3>
                    <span className="text-[#E2725B] font-mono text-sm tracking-widest uppercase">{wine.grape}</span>
                  </div>
                </div>

                <div className="mb-8 p-6 bg-[#252525] rounded-2xl italic text-[#C6AC8F] border-l-2 border-[#E2725B]">
                  "{wine.pro}"
                </div>

                {/* THE EXPLANATION OF DIFFERENCES */}
                {wine.subTypes && (
                  <div className="space-y-4">
                    <p className="text-[10px] font-black text-[#E2725B] uppercase tracking-[0.3em] mb-4">{wine.hierarchyTitle || "The Hierarchy"}</p>
                    {wine.subTypes.map((t, idx) => (
                      <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/5">
                        <span className="text-white font-bold block mb-1">{t.level}</span>
                        <span className="text-sm text-slate-400 leading-snug">{t.rule}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex gap-2 mt-8">
                  {wine.food.map(f => <span key={f} className="text-[10px] px-3 py-1 bg-[#E2725B]/10 rounded-full text-[#E2725B]">#{f}</span>)}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
