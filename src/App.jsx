import React, { useState } from 'react';
import { REGIONS_DATA } from './data/regions';

export default function App() {
  const [view, setView] = useState('home'); 
  const [activeItem, setActiveItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const goHome = () => { setView('home'); setActiveItem(null); setMenuOpen(false); };

  return (
    <div className="min-h-screen bg-[#121212] text-[#F4F1DE] font-sans pb-10">
      
      {/* SIDEBAR */}
      {menuOpen && (
        <div className="fixed inset-0 z-[200] flex animate-fadeIn">
          <div className="w-72 bg-[#1a1a1a] border-r border-[#E2725B]/30 p-8 shadow-2xl flex flex-col justify-between">
            <nav className="space-y-8 mt-10">
              <button onClick={goHome} className="block text-2xl font-serif hover:text-[#E2725B] transition-colors">🌍 All Countries</button>
              <button onClick={() => {setView('pairings'); setMenuOpen(false);}} className="block text-2xl font-serif hover:text-[#E2725B] transition-colors">🍖 Food Match</button>
            </nav>
            <button onClick={() => setMenuOpen(false)} className="text-[#E2725B] font-bold text-xs uppercase tracking-widest">Close [X]</button>
          </div>
          <div className="flex-1 bg-black/70 backdrop-blur-sm" onClick={() => setMenuOpen(false)}></div>
        </div>
      )}

      {/* HEADER */}
      <nav className="flex justify-between items-center p-6 bg-[#1a1a1a] sticky top-0 z-[100] border-b border-[#E2725B]/20">
        <button onClick={() => setMenuOpen(true)} className="text-3xl text-[#E2725B]">☰</button>
        <h1 onClick={goHome} className="text-xl font-black text-[#E2725B] italic cursor-pointer uppercase tracking-tighter">Wine Academy</h1>
        <div className="w-8"></div>
      </nav>

      <main className="p-6 max-w-3xl mx-auto">
        
        {/* VIEW: HOME - LIST ALL COUNTRIES */}
        {view === 'home' && (
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-serif mb-10 italic text-[#C6AC8F]">The World Map</h2>
            {REGIONS_DATA.map(country => (
              <div key={country.id} onClick={() => {setActiveItem(country); setView('country');}} 
                   className="p-8 bg-[#1c1c1c] rounded-[2.5rem] border border-white/5 mb-6 hover:border-[#E2725B]/40 cursor-pointer shadow-lg active:scale-95 transition-all">
                <h3 className="text-3xl font-bold">{country.name}</h3>
                <p className="text-[#A9927D] mt-2 text-lg">{country.description}</p>
                <div className="mt-6 text-[#E2725B] text-[10px] font-black tracking-widest uppercase italic">Explore {country.subRegions.length} Regions →</div>
              </div>
            ))}
          </div>
        )}

        {/* VIEW: COUNTRY - LIST SUB-REGIONS */}
        {view === 'country' && activeItem && (
          <div className="animate-fadeIn">
            <button onClick={goHome} className="text-[#E2725B] font-bold mb-8 italic flex items-center gap-2">← Back to World</button>
            <h2 className="text-6xl font-serif mb-12">{activeItem.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeItem.subRegions.map((reg, idx) => (
                <div key={idx} onClick={() => {setActiveItem(reg); setView('region');}} 
                     className="p-8 bg-[#252525] rounded-3xl border-l-4 border-[#E2725B] hover:bg-[#2d2d2d] cursor-pointer shadow-md transition-all">
                  <h4 className="text-2xl font-bold">{reg.name}</h4>
                  <p className="text-[10px] text-[#E2725B] uppercase font-black mt-2">View {reg.wines.length} Wine Types</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: REGION - LIST WINES & SUBTYPES */}
        {view === 'region' && activeItem && (
          <div className="animate-fadeIn">
            <button onClick={() => setView('country')} className="text-[#E2725B] font-bold mb-8 italic">← Back</button>
            <h2 className="text-4xl font-serif text-[#E2725B] mb-8 italic">{activeItem.name}</h2>
            <div className="bg-[#E2725B]/5 p-8 rounded-[2rem] border border-[#E2725B]/20 mb-10 shadow-inner">
              <p className="italic text-xl text-[#C6AC8F] font-serif leading-relaxed">{activeItem.methods}</p>
            </div>

            {activeItem.wines.map((wine, i) => (
              <div key={i} className="mb-12 border-b border-white/5 pb-10 group">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h3 className="text-3xl font-bold group-hover:text-white transition-colors">{wine.name}</h3>
                  <span className="text-[#E2725B] text-[10px] font-mono px-3 py-1 bg-[#E2725B]/10 rounded-full border border-[#E2725B]/20 uppercase">{wine.grape}</span>
                </div>

                {/* SUB-CATEGORY LABELS */}
                {wine.subTypes && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {wine.subTypes.map(type => (
                      <span key={type} className="text-[9px] font-bold border border-[#C6AC8F]/20 text-[#C6AC8F] px-2 py-0.5 rounded tracking-wide uppercase">
                        {type}
                      </span>
                    ))}
                  </div>
                )}

                <div className="p-5 bg-white/5 rounded-2xl border-l-2 border-[#E2725B] text-[#C6AC8F] italic leading-relaxed">
                  <strong className="text-[#E2725B] not-italic mr-2 font-black uppercase text-[10px]">Manager Pitch:</strong> {wine.pro}
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {wine.food.map(f => (
                    <span key={f} className="text-[10px] px-2 py-1 bg-white/5 rounded uppercase tracking-tighter text-slate-500">#{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VIEW: PAIRINGS (PLACEHOLDER) */}
        {view === 'pairings' && (
          <div className="animate-fadeIn py-20 text-center">
            <h2 className="text-5xl font-serif italic text-[#C6AC8F] mb-4">Food Logic</h2>
            <p className="text-slate-500 max-w-md mx-auto">This section is currently being linked to the wine database tags (#Steak, #Seafood).</p>
            <button onClick={goHome} className="mt-8 text-[#E2725B] font-bold">Return Home</button>
          </div>
        )}
      </main>
    </div>
  );
}
