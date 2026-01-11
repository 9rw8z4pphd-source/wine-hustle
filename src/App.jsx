import React, { useState } from 'react';
import { REGIONS_DATA } from './wines.js';

export default function App() {
  const [view, setView] = useState('home');
  const [activeItem, setActiveItem] = useState(null);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const goHome = () => { setView('home'); setActiveItem(null); };

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-[#F4F1DE] font-sans pb-12">
      {/* HEADER BAR */}
      <nav className="flex justify-between items-center p-6 bg-[#252525] border-b border-white/5 sticky top-0 z-50">
        <h1 onClick={goHome} className="text-xl font-black tracking-widest text-[#E2725B] cursor-pointer">WINE ACADEMY</h1>
        <button 
          onClick={() => setSearchVisible(!searchVisible)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E2725B]/10 text-[#E2725B] border border-[#E2725B]/20"
        >
          {searchVisible ? '✕' : '🔍'}
        </button>
      </nav>

      {/* SEARCH OVERLAY */}
      {searchVisible && (
        <div className="p-4 bg-[#E2725B] animate-slideDown">
          <input 
            className="w-full bg-white/20 border-none p-3 rounded-lg text-white placeholder-white/60 outline-none"
            placeholder="Search grapes, regions, or methods..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      <main className="p-6 max-w-2xl mx-auto">
        {/* BREADCRUMB */}
        {view !== 'home' && (
          <button onClick={goHome} className="text-[#E2725B] text-xs font-bold mb-6 tracking-widest uppercase">
            ← Back to World
          </button>
        )}

        {/* HOME VIEW: COUNTRIES */}
        {view === 'home' && (
          <div className="space-y-6">
            <header className="mb-10">
              <h2 className="text-4xl font-serif text-[#F4F1DE]">Global Regions</h2>
              <p className="text-slate-500 mt-2">Select a territory to begin your training.</p>
            </header>
            {REGIONS_DATA.map(country => (
              <div 
                key={country.id}
                onClick={() => { setView('country'); setActiveItem(country); }}
                className="group p-8 rounded-[2rem] bg-[#252525] border border-white/5 hover:border-[#E2725B]/40 transition-all cursor-pointer shadow-xl"
              >
                <h3 className="text-3xl font-bold group-hover:text-[#E2725B] transition-colors">{country.name}</h3>
                <p className="text-slate-400 mt-2">{country.description}</p>
                <div className="mt-6 flex items-center text-[#E2725B] text-xs font-black tracking-widest uppercase">
                  Explore {country.subRegions.length} Regions <span className="ml-2">→</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* COUNTRY VIEW: SUB-REGIONS */}
        {view === 'country' && activeItem && (
          <div className="animate-fadeIn">
            <h2 className="text-5xl font-serif mb-10">{activeItem.name}</h2>
            <div className="grid gap-4">
              {activeItem.subRegions.map(region => (
                <div 
                  key={region.name}
                  onClick={() => { setView('region'); setActiveItem(region); }}
                  className="p-6 bg-[#252525] rounded-2xl border-l-4 border-[#E2725B] hover:bg-[#2D2D2D] transition-all cursor-pointer"
                >
                  <h3 className="text-xl font-bold">{region.name}</h3>
                  <p className="text-xs text-[#E2725B] uppercase tracking-tighter mt-1 font-bold">Deep Dive Available</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* REGION VIEW: WINES & METHODS */}
        {view === 'region' && activeItem && (
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-serif text-[#E2725B] mb-2">{activeItem.name}</h2>
            
            <div className="my-8 p-6 bg-[#E2725B]/5 border border-[#E2725B]/20 rounded-3xl">
              <h4 className="text-[10px] font-black text-[#E2725B] tracking-widest mb-3 uppercase">Regional Methodology</h4>
              <p className="text-lg leading-relaxed text-slate-300 italic">{activeItem.methods}</p>
            </div>

            <div className="space-y-10">
              <h4 className="text-[10px] font-black text-slate-500 tracking-widest uppercase border-b border-white/10 pb-2">Iconic Wines & Grapes</h4>
              {activeItem.wines.map(wine => (
                <div key={wine.name} className="group">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-2xl font-bold text-white">{wine.name}</h3>
                    <span className="text-[#E2725B] font-mono text-sm">{wine.grape}</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed mb-4">{wine.profile}</p>
                  <div className="p-4 bg-white/5 rounded-xl border-l-2 border-[#E2725B] text-sm italic text-slate-300">
                    "{wine.pro}"
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
