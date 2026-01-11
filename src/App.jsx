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

  // Helper for visual power bars (Grapes DNA)
  const PowerBar = ({ label, level }) => (
    <div className="mb-4">
      <div className="flex justify-between text-[10px] uppercase tracking-tighter mb-1 text-slate-400">
        <span>{label}</span>
        <span>{level} / 5</span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#E2725B] transition-all duration-1000" 
          style={{ width: `${(level / 5) * 100}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F4F1DE] font-sans">
      
      {/* HAMBURGER SIDEBAR */}
      <div className={`fixed inset-0 z-[200] flex transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <div className={`w-80 bg-[#161616] h-full p-10 border-r border-[#E2725B]/30 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full shadow-[20px_0_60px_rgba(0,0,0,0.8)]"}`}>
          <div className="mb-12">
            <h2 className="text-[#E2725B] font-black tracking-[0.3em] text-[10px] uppercase mb-8">Main Menu</h2>
            <nav className="space-y-6">
              <button onClick={() => navigate('home')} className="block text-3xl font-serif hover:text-[#E2725B] transition-colors italic">World Regions</button>
              <button onClick={() => navigate('grapes')} className="block text-3xl font-serif hover:text-[#E2725B] transition-colors italic">Grape DNA</button>
            </nav>
          </div>
          
          <div className="pt-10 border-t border-white/5">
            <h2 className="text-slate-500 font-black tracking-[0.3em] text-[10px] uppercase mb-6">Top Countries</h2>
            <div className="grid grid-cols-1 gap-3">
              {REGIONS_DATA.slice(0, 6).map(c => (
                <button key={c.id} onClick={() => navigate('country', c)} className="text-left text-sm text-[#C6AC8F] hover:text-white transition-colors">
                  {c.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 bg-black/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)}></div>
      </div>

      {/* HEADER */}
      <nav className="flex justify-between items-center p-6 bg-[#161616]/90 backdrop-blur-md sticky top-0 z-[100] border-b border-[#E2725B]/20">
        <button onClick={() => setMenuOpen(true)} className="text-3xl text-[#E2725B] hover:scale-110 transition-transform">☰</button>
        <h1 onClick={() => navigate('home')} className="text-xl font-black text-[#E2725B] italic cursor-pointer uppercase tracking-widest">Wine Scholar</h1>
        <div className="w-8"></div>
      </nav>

      <main className="p-6 max-w-4xl mx-auto">
        
        {/* VIEW: GRAPE ENCYCLOPEDIA */}
        {view === 'grapes' && (
          <div className="animate-fadeIn">
            <h2 className="text-6xl font-serif mb-4 text-[#E2725B] italic">The Grapes</h2>
            <p className="text-[#C6AC8F] mb-16 text-lg">A deep-dive into the varietals that define global terroir.</p>
            
            <div className="space-y-24">
              {GRAPES_DATA.map(grape => (
                <div key={grape.id} className="relative group">
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#E2725B] opacity-20 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* LEFT: INFO */}
                    <div>
                      <h3 className="text-5xl font-bold mb-2">{grape.name}</h3>
                      <p className="text-[#E2725B] font-mono text-xs uppercase tracking-[0.2em] mb-6 italic">{grape.origin} • {grape.style}</p>
                      <p className="text-xl text-[#F4F1DE] font-serif leading-relaxed mb-6 italic">"{grape.summary}"</p>
                      <p className="text-[#A9927D] leading-relaxed mb-8">{grape.description}</p>
                      
                      <div className="space-y-2">
                        <p className="text-[10px] font-black text-white uppercase tracking-widest mb-3">Key Flavor Notes</p>
                        <div className="flex flex-wrap gap-2">
                          {grape.flavors.map(f => (
                            <span key={f} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-[#C6AC8F]">{f}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* RIGHT: STATS & REGIONS */}
                    <div className="bg-[#161616] p-8 rounded-[3rem] border border-white/5 shadow-2xl">
                      <p className="text-[10px] font-black text-[#E2725B] uppercase tracking-[0.3em] mb-8">Varietal DNA</p>
                      <PowerBar label="Acidity" level={grape.stats.acidity} />
                      <PowerBar label="Tannin" level={grape.stats.tannin} />
                      <PowerBar label="Body" level={grape.stats.body} />
                      <PowerBar label="Alcohol" level={grape.stats.alcohol} />

                      <div className="mt-12 pt-8 border-t border-white/5">
                        <p className="text-[10px] font-black text-white uppercase tracking-widest mb-4">Major Regions</p>
                        <div className="text-sm text-[#A9927D] leading-relaxed">
                          {grape.regions.join(" • ")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* REGION & COUNTRY VIEWS ... (Logic stays the same as previous step) */}
        {view === 'home' && (
           <div className="animate-fadeIn">
             <h2 className="text-5xl font-serif mb-10 italic text-[#C6AC8F]">Global Regions</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {REGIONS_DATA.map(country => (
                 <div key={country.id} onClick={() => navigate('country', country)} className="p-10 bg-[#161616] rounded-[3rem] border border-white/5 hover:border-[#E2725B]/40 cursor-pointer transition-all">
                   <h3 className="text-3xl font-bold">{country.name}</h3>
                   <p className="text-[#A9927D] mt-2">{country.description}</p>
                 </div>
               ))}
             </div>
           </div>
        )}

      </main>
    </div>
  );
}
