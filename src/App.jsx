import React, { useState } from 'react';
import { REGIONS_DATA } from './data/regions';

export default function App() {
  const [view, setView] = useState('home'); 
  const [activeItem, setActiveItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const goHome = () => { setView('home'); setActiveItem(null); setMenuOpen(false); };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F4F1DE] font-sans pb-20">
      {/* HEADER */}
      <nav className="flex justify-between items-center p-6 bg-[#161616] sticky top-0 z-[100] border-b border-[#E2725B]/20 shadow-2xl">
        <button onClick={() => setMenuOpen(true)} className="text-3xl text-[#E2725B]">☰</button>
        <h1 onClick={goHome} className="text-xl font-black text-[#E2725B] italic cursor-pointer uppercase tracking-widest">Wine Scholar</h1>
        <div className="w-8"></div>
      </nav>

      <main className="p-6 max-w-3xl mx-auto">
        {/* VIEW: HOME */}
        {view === 'home' && (
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-serif mb-10 italic text-[#C6AC8F]">Global Encyclopedia</h2>
            {REGIONS_DATA.map(country => (
              <div key={country.id} onClick={() => {setActiveItem(country); setView('country');}} 
                   className="p-8 bg-[#1a1a1a] rounded-[2.5rem] border border-white/5 mb-6 hover:border-[#E2725B]/40 cursor-pointer shadow-lg transition-all">
                <h3 className="text-3xl font-bold">{country.name}</h3>
                <p className="text-[#A9927D] mt-2 text-lg">{country.description}</p>
                <div className="mt-6 text-[#E2725B] text-[10px] font-black tracking-widest uppercase italic">Explore {country.subRegions.length} Regions →</div>
              </div>
            ))}
          </div>
        )}

        {/* VIEW: COUNTRY */}
        {view === 'country' && activeItem && (
          <div className="animate-fadeIn">
            <button onClick={goHome} className="text-[#E2725B] font-bold mb-8 italic flex items-center gap-2 text-sm uppercase tracking-tighter">← Back to World</button>
            <h2 className="text-6xl font-serif mb-12">{activeItem.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeItem.subRegions.map((reg, idx) => (
                <div key={idx} onClick={() => {setActiveItem(reg); setView('region');}} 
                     className="p-8 bg-[#1a1a1a] rounded-3xl border-l-4 border-[#E2725B] hover:bg-[#252525] cursor-pointer shadow-md transition-all">
                  <h4 className="text-2xl font-bold">{reg.name}</h4>
                  <p className="text-[10px] text-[#E2725B] uppercase font-black mt-2 tracking-widest italic">{reg.wines.length} Iconic Wines</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: REGION (HIERARCHY VIEW) */}
        {view === 'region' && activeItem && (
          <div className="animate-fadeIn">
            <button onClick={() => setView('country')} className="text-[#E2725B] font-bold mb-8 italic flex items-center gap-2 text-sm uppercase tracking-tighter">← Back to {activeItem.name}</button>
            <div className="mb-10">
                <h2 className="text-5xl font-serif text-[#E2725B] mb-4 italic">{activeItem.name}</h2>
                <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                    <p className="text-[#C6AC8F] text-lg leading-relaxed italic">{activeItem.methods}</p>
                </div>
            </div>
            
            {activeItem.wines.map((wine, i) => (
              <div key={i} className="mb-16 bg-[#161616] rounded-[3rem] p-10 border border-white/5 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-[6rem] font-black text-white/5 select-none -z-0 pointer-events-none">{i + 1}</div>
                <div className="relative z-10">
                    <div className="mb-6">
                    <h3 className="text-4xl font-bold text-white mb-2">{wine.name}</h3>
                    <div className="inline-block px-3 py-1 bg-[#E2725B]/10 rounded-full border border-[#E2725B]/20">
                        <span className="text-[#E2725B] font-mono text-xs tracking-widest uppercase">{wine.grape}</span>
                    </div>
                    </div>

                    <div className="mb-8 p-6 bg-white/5 rounded-2xl italic text-[#C6AC8F] border-l-2 border-[#E2725B] leading-relaxed">
                    "{wine.pro}"
                    </div>

                    {wine.subTypes && (
                    <div className="space-y-3 mb-8">
                        <p className="text-[10px] font-black text-[#E2725B] uppercase tracking-[0.3em] mb-4">Quality & Style Hierarchy</p>
                        {wine.subTypes.map((t, idx) => (
                        <div key={idx} className="bg-black/40 p-5 rounded-2xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <span className="text-[#F4F1DE] font-bold text-lg">{t.level}</span>
                            <span className="text-sm text-[#A9927D] italic md:text-right max-w-xs">{t.rule}</span>
                        </div>
                        ))}
                    </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                    {wine.food?.map(f => (
                        <span key={f} className="text-[10px] px-3 py-1 bg-[#E2725B]/20 rounded-full text-[#E2725B] font-bold uppercase tracking-widest border border-[#E2725B]/30">#{f}</span>
                    ))}
                    </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
