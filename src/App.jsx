import React, { useState } from 'react';
import { REGIONS_DATA } from './data/regions.js';
import { GRAPE_DB } from './data/grapes.js';

export default function App() {
  const [view, setView] = useState('home'); // home, country, region, grape
  const [activeItem, setActiveItem] = useState(null);
  const [searchVisible, setSearchVisible] = useState(false);
  const [selectedGrape, setSelectedGrape] = useState(null);

  const openGrape = (grapeName) => {
    setSelectedGrape(GRAPE_DB[grapeName] || { name: grapeName, info: "Deep dive data coming soon..." });
    setView('grape');
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#F4F1DE] pb-20">
      {/* GLOBAL NAV */}
      <nav className="flex justify-between items-center p-6 bg-[#1a1a1a] border-b border-[#E2725B]/20 sticky top-0 z-[100]">
        <h1 onClick={() => setView('home')} className="text-xl font-black text-[#E2725B] cursor-pointer italic">WINE ACADEMY</h1>
        <button onClick={() => setSearchVisible(!searchVisible)} className="text-[#E2725B] text-xl">🔍</button>
      </nav>

      <main className="p-6 max-w-3xl mx-auto">
        
        {/* VIEW: HOME (WORLD MAP) */}
        {view === 'home' && (
          <div className="space-y-8 animate-fadeIn">
            <h2 className="text-4xl font-serif text-[#C6AC8F]">The Global Curriculum</h2>
            {REGIONS_DATA.map(country => (
              <div key={country.id} onClick={() => {setActiveItem(country); setView('country');}} 
                   className="p-8 bg-[#1c1c1c] rounded-[2.5rem] border border-white/5 hover:border-[#E2725B]/50 transition-all cursor-pointer">
                <h3 className="text-3xl font-bold">{country.name}</h3>
                <p className="text-[#A9927D] mt-2">{country.description}</p>
                <p className="text-[#E2725B] text-xs font-bold mt-4 uppercase tracking-widest">Explore {country.subRegions.length} Regions</p>
              </div>
            ))}
          </div>
        )}

        {/* VIEW: COUNTRY (REGIONAL LIST) */}
        {view === 'country' && (
          <div className="animate-fadeIn">
            <button onClick={() => setView('home')} className="text-[#E2725B] font-bold mb-6 italic">← Back to World</button>
            <h2 className="text-5xl font-serif mb-10">{activeItem.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeItem.subRegions.map(reg => (
                <div key={reg.name} onClick={() => {setActiveItem(reg); setView('region');}}
                     className="p-6 bg-[#252525] rounded-2xl border-l-4 border-[#E2725B] hover:bg-[#333] cursor-pointer">
                  <h4 className="text-xl font-bold">{reg.name}</h4>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: REGION (THE DEEP DIVE) */}
        {view === 'region' && (
          <div className="animate-fadeIn">
            <button onClick={() => setView('country')} className="text-[#E2725B] font-bold mb-6 italic">← Back</button>
            <h2 className="text-4xl font-serif text-[#E2725B] mb-8">{activeItem.name}</h2>
            
            <div className="bg-[#E2725B]/5 p-6 rounded-3xl border border-[#E2725B]/20 mb-10">
              <h5 className="text-[10px] font-black uppercase text-[#E2725B] mb-2 tracking-widest">Technique & Method</h5>
              <p className="italic text-lg text-[#C6AC8F]">{activeItem.methods}</p>
            </div>

            <div className="space-y-10">
              {activeItem.wines.map(wine => (
                <div key={wine.name} className="border-b border-white/5 pb-8">
                  <div className="flex justify-between items-end">
                    <h3 className="text-2xl font-bold">{wine.name}</h3>
                    <button 
                      onClick={() => openGrape(wine.grape)}
                      className="text-[#E2725B] underline text-sm font-mono decoration-dotted underline-offset-4"
                    >
                      {wine.grape}
                    </button>
                  </div>
                  <p className="text-slate-400 mt-2">{wine.profile}</p>
                  <div className="mt-4 p-4 bg-white/5 rounded-xl text-sm border-l-2 border-[#E2725B]">
                    <strong>Manager Pitch:</strong> {wine.pro}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: GRAPE (THE DEDICATED GRAPE PAGE) */}
        {view === 'grape' && (
          <div className="animate-fadeIn bg-[#252525] p-8 rounded-[3rem] border border-[#E2725B]/30 relative">
            <button onClick={() => setView('region')} className="absolute top-8 right-8 text-2xl">✕</button>
            <h2 className="text-5xl font-black text-[#E2725B] mb-2 italic tracking-tighter">{selectedGrape.name || "Grape Detail"}</h2>
            <p className="text-[#C6AC8F] uppercase text-xs font-bold tracking-widest mb-10">Varietal Deep-Dive</p>

            <div className="space-y-8">
              <section>
                <h4 className="text-xs font-black text-slate-500 uppercase mb-2">Style & Profile</h4>
                <p className="text-xl font-serif text-white">{selectedGrape.style || "Tannic and Bold"}</p>
              </section>
              <section>
                <h4 className="text-xs font-black text-slate-500 uppercase mb-2">Primary Aromas</h4>
                <p className="text-lg text-slate-200">{selectedGrape.characteristics || "Notes of red fruit and earth."}</p>
              </section>
              <section className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/5">
                <h4 className="text-[#E2725B] text-xs font-black uppercase mb-2 tracking-widest">Professional Viticulture</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{selectedGrape.viticulture || "Detailed growing info coming soon."}</p>
              </section>
              <section className="p-6 bg-[#E2725B] text-white rounded-2xl shadow-xl">
                <h4 className="text-xs font-black uppercase mb-1">Expert Serving Tip</h4>
                <p className="font-bold text-lg leading-tight">{selectedGrape.proTip || "Always decant for maximum aroma."}</p>
              </section>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
