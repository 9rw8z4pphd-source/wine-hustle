import React, { useState } from 'react';
import { REGIONS_DATA } from './wines.js';

export default function App() {
  const [currentLevel, setCurrentLevel] = useState('home'); // home, country, region
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  // --- NAVIGATION HELPERS ---
  const goHome = () => { setCurrentLevel('home'); setSelectedCountry(null); setSelectedRegion(null); };
  const selectCountry = (c) => { setSelectedCountry(c); setCurrentLevel('country'); };
  const selectRegion = (r) => { setSelectedRegion(r); setCurrentLevel('region'); };

  return (
    <div className="min-h-screen bg-[#121212] text-[#EAE0D5] font-sans pb-10">
      {/* TOP NAV BAR */}
      <nav className="flex justify-between items-center p-6 border-b border-white/10 bg-[#1a1a1a] sticky top-0 z-50">
        <div onClick={goHome} className="cursor-pointer">
          <h1 className="text-2xl font-black tracking-tighter text-[#E2725B]">WINE ACADEMY</h1>
        </div>
        <button 
          onClick={() => setSearchOpen(!searchOpen)}
          className="p-2 bg-[#E2725B]/10 rounded-full text-[#E2725B] hover:bg-[#E2725B]/20 transition-all"
        >
          🔍
        </button>
      </nav>

      {/* SEARCH OVERLAY */}
      {searchOpen && (
        <div className="p-4 bg-[#E2725B] text-white animate-fadeIn">
          <input className="w-full bg-white/20 placeholder-white/60 p-3 rounded-lg outline-none" placeholder="Search grapes or regions..." />
        </div>
      )}

      {/* BREADCRUMBS (ADD Focus Helper) */}
      <div className="px-6 py-4 text-[10px] uppercase tracking-widest text-[#E2725B] font-bold">
        <span onClick={goHome} className="cursor-pointer">World</span> 
        {selectedCountry && <span onClick={() => setCurrentLevel('country')}> / {selectedCountry.name}</span>}
        {selectedRegion && <span> / {selectedRegion.name}</span>}
      </div>

      <main className="p-6 max-w-2xl mx-auto">
        
        {/* LEVEL 1: WORLD VIEW (HOME) */}
        {currentLevel === 'home' && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-4xl font-serif mb-8 text-[#C6AC8F]">The Wine Regions</h2>
            {REGIONS_DATA.map(country => (
              <div 
                key={country.id} 
                onClick={() => selectCountry(country)}
                className="group relative overflow-hidden rounded-3xl bg-[#1c1c1c] border border-white/5 p-8 cursor-pointer hover:border-[#E2725B]/50 transition-all"
              >
                <h3 className="text-3xl font-bold mb-2">{country.name}</h3>
                <p className="text-[#A9927D] leading-relaxed">{country.description}</p>
                <div className="mt-6 text-[#E2725B] font-bold text-sm">Explore {country.subRegions.length} Regions →</div>
              </div>
            ))}
          </div>
        )}

        {/* LEVEL 2: COUNTRY VIEW */}
        {currentLevel === 'country' && selectedCountry && (
          <div className="animate-fadeIn">
            <button onClick={goHome} className="mb-6 text-sm text-[#A9927D]">← Back to World</button>
            <h2 className="text-4xl font-serif mb-8">{selectedCountry.name}</h2>
            <div className="grid gap-4">
              {selectedCountry.subRegions.map(region => (
                <div 
                  key={region.name}
                  onClick={() => selectRegion(region)}
                  className="p-6 bg-[#1c1c1c] rounded-2xl border-l-4 border-[#E2725B] hover:bg-[#252525] transition-all cursor-pointer"
                >
                  <h3 className="text-xl font-bold">{region.name}</h3>
                  <p className="text-sm text-[#A9927D] mt-1">Climate: {region.climate}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* LEVEL 3: REGION DETAIL (DEEP DIVE) */}
        {currentLevel === 'region' && selectedRegion && (
          <div className="animate-fadeIn">
            <button onClick={() => setCurrentLevel('country')} className="mb-6 text-sm text-[#A9927D]">← Back to {selectedCountry.name}</button>
            <h2 className="text-4xl font-serif text-[#E2725B] mb-2">{selectedRegion.name}</h2>
            
            <div className="mt-8 p-6 bg-[#252525] rounded-3xl border border-white/5">
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#A9927D] mb-4">Winemaking Methods</h4>
              <p className="text-lg italic leading-relaxed text-[#C6AC8F]">{selectedRegion.methods}</p>
            </div>

            <div className="mt-10 space-y-8">
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#A9927D]">Key Wines & Grapes</h4>
              {selectedRegion.wines.map(wine => (
                <div key={wine.name} className="border-b border-white/10 pb-6">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-2xl font-bold">{wine.name}</h3>
                    <span className="text-[#E2725B] text-xs font-mono">{wine.grape}</span>
                  </div>
                  <p className="mt-2 text-[#A9927D]">{wine.profile}</p>
                  <div className="mt-4 p-4 bg-white/5 rounded-xl border-l-2 border-[#E2725B] text-sm italic">
                    "Manager's Pitch: {wine.pro}"
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
