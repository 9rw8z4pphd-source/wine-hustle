import React, { useState, useMemo } from 'react';
import { REGIONS_DATA } from './data/regions';
import { WINE_LIBRARY } from './data/wines';
import { GRAPES_DATA } from './data/grapes';

export default function App() {
  const [view, setView] = useState('home'); 
  const [activeCountry, setActiveCountry] = useState(null);
  const [activeRegion, setActiveRegion] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = (newView, country = null, region = null) => {
    setView(newView);
    setActiveCountry(country);
    setActiveRegion(region);
    setMenuOpen(false);
    setSearchQuery(''); // Clear search on navigate
    window.scrollTo(0, 0);
  };

  // CROSS-DATA SEARCH LOGIC
  const searchResults = useMemo(() => {
    if (!searchQuery) return null;
    const query = searchQuery.toLowerCase();
    
    return {
      grapes: GRAPES_DATA.filter(g => g.name.toLowerCase().includes(query) || g.flavors.some(f => f.toLowerCase().includes(query))),
      countries: REGIONS_DATA.filter(c => c.name.toLowerCase().includes(query)),
      // Finding regions by searching their methods or names
      regions: REGIONS_DATA.flatMap(c => c.subRegions).filter(r => r.name.toLowerCase().includes(query) || r.methods.toLowerCase().includes(query))
    };
  }, [searchQuery]);

  const handleGrapeClick = (grapeName) => {
    const grapeId = grapeName.toLowerCase().replace(/ /g, '-').split('/')[0].trim();
    const exists = GRAPES_DATA.find(g => g.id === grapeId);
    if (exists) {
      navigate('grapes');
      setTimeout(() => {
        document.getElementById(grapeId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const PowerBar = ({ label, level }) => (
    <div className="mb-4">
      <div className="flex justify-between text-[10px] uppercase tracking-tighter mb-1 text-slate-400">
        <span>{label}</span>
        <span>{level} / 5</span>
      </div>
      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-[#E2725B] shadow-[0_0_8px_#E2725B]" style={{ width: `${(level / 5) * 100}%` }} />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F4F1DE] font-sans pb-20">
      
      {/* SIDEBAR NAVIGATION */}
      <div className={`fixed inset-0 z-[200] flex transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <div className={`w-80 bg-[#161616] h-full p-10 border-r border-[#E2725B]/30 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <h2 className="text-[#E2725B] font-black tracking-[0.3em] text-[10px] uppercase mb-10 italic">Menu</h2>
          <nav className="space-y-6">
            <button onClick={() => navigate('home')} className="block text-3xl font-serif hover:text-[#E2725B] italic">World Regions</button>
            <button onClick={() => navigate('grapes')} className="block text-3xl font-serif hover:text-[#E2725B] italic">Grape DNA</button>
          </nav>
        </div>
        <div className="flex-1 bg-black/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)}></div>
      </div>

      {/* HEADER WITH SEARCH BAR */}
      <nav className="bg-[#161616]/90 backdrop-blur-md sticky top-0 z-[100] border-b border-white/5 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center gap-6">
          <button onClick={() => setMenuOpen(true)} className="text-3xl text-[#E2725B]">☰</button>
          
          <div className="flex-1 relative">
            <input 
              type="text" 
              placeholder="Search grapes, regions, or food pairings..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-2 px-6 focus:outline-none focus:border-[#E2725B]/50 text-sm transition-all"
            />
            {searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl p-4 max-h-[60vh] overflow-y-auto z-[300]">
                {searchResults?.grapes.length > 0 && (
                  <div className="mb-4">
                    <p className="text-[10px] uppercase font-black text-[#E2725B] mb-2">Grapes</p>
                    {searchResults.grapes.map(g => (
                      <div key={g.id} onClick={() => handleGrapeClick(g.name)} className="py-2 px-3 hover:bg-white/5 rounded-lg cursor-pointer">
                        {g.name} <span className="text-slate-500 text-xs">— {g.style}</span>
                      </div>
                    ))}
                  </div>
                )}
                {searchResults?.countries.length > 0 && (
                  <div className="mb-4">
                    <p className="text-[10px] uppercase font-black text-[#E2725B] mb-2">Countries</p>
                    {searchResults.countries.map(c => (
                      <div key={c.id} onClick={() => navigate('country', c)} className="py-2 px-3 hover:bg-white/5 rounded-lg cursor-pointer">{c.name}</div>
                    ))}
                  </div>
                )}
                {(!searchResults?.grapes.length && !searchResults?.countries.length && !searchResults?.regions.length) && (
                  <p className="text-xs text-slate-500 italic p-2">No direct matches found...</p>
                )}
              </div>
            )}
          </div>

          <h1 onClick={() => navigate('home')} className="hidden md:block text-xl font-black text-[#E2725B] italic cursor-pointer uppercase tracking-widest">Wine Scholar</h1>
        </div>
      </nav>

      <main className="p-6 max-w-5xl mx-auto">
        
        {/* VIEW: HOME */}
        {view === 'home' && (
          <div className="animate-fadeIn">
            <h2 className="text-5xl font-serif mb-4 italic text-[#C6AC8F]">Global Terroir</h2>
            <p className="text-slate-500 mb-12 uppercase tracking-widest text-[10px] font-black italic">Select a country to explore the map</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {REGIONS_DATA.map(country => (
                <div key={country.id} onClick={() => navigate('country', country)} className="group p-10 bg-[#161616] rounded-[3.5rem] border border-white/5 hover:border-[#E2725B]/40 cursor-pointer transition-all hover:scale-[1.02]">
                  <h3 className="text-4xl font-bold group-hover:text-[#E2725B] transition-colors">{country.name}</h3>
                  <p className="text-[#A9927D] mt-3 text-lg leading-relaxed">{country.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: COUNTRY */}
        {view === 'country' && activeCountry && (
          <div className="animate-fadeIn">
            <button onClick={() => navigate('home')} className="text-[#E2725B] font-bold mb-8 text-[10px] uppercase tracking-[0.3em]">← Back to Map</button>
            <h2 className="text-8xl font-serif mb-16 opacity-90">{activeCountry.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeCountry.subRegions.map(reg => (
                <div key={reg.id} onClick={() => navigate('region', activeCountry, reg)} className="p-10 bg-[#1a1a1a] rounded-[2.5rem] border-l-4 border-[#E2725B] hover:bg-[#222] cursor-pointer transition-all">
                  <h4 className="text-3xl font-bold mb-2">{reg.name}</h4>
                  <p className="text-xs text-slate-500 italic">Explore regional styles →</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: REGION */}
        {view === 'region' && activeRegion && (
          <div className="animate-fadeIn pb-20">
            <button onClick={() => navigate('country', activeCountry)} className="text-[#E2725B] font-bold mb-8 text-[10px] uppercase tracking-[0.3em]">← {activeCountry.name}</button>
            <h2 className="text-7xl font-serif text-[#E2725B] mb-8 italic">{activeRegion.name}</h2>
            <div className="max-w-2xl bg-white/5 p-8 rounded-[2rem] border border-white/5 mb-16">
                <p className="text-xl text-[#C6AC8F] italic leading-relaxed">{activeRegion.methods}</p>
            </div>
            
            <div className="grid grid-cols-1 gap-12">
              {WINE_LIBRARY[activeRegion.id]?.map((wine, i) => (
                <div key={i} className="bg-[#161616] rounded-[4rem] p-12 border border-white/5 shadow-2xl group overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-8 text-white/5 text-8xl font-black">{i+1}</div>
                  <div className="relative z-10">
                    <h3 className="text-5xl font-bold mb-4">{wine.name}</h3>
                    <button 
                      onClick={() => handleGrapeClick(wine.grape)}
                      className="px-5 py-2 bg-[#E2725B]/10 rounded-full border border-[#E2725B]/30 text-[#E2725B] font-mono text-xs uppercase tracking-widest mb-10 hover:bg-[#E2725B] hover:text-white transition-all"
                    >
                      {wine.grape} • View DNA 🧬
                    </button>
                    <p className="text-2xl text-[#C6AC8F] italic leading-relaxed mb-10">"{wine.pro}"</p>
                    
                    {wine.subTypes && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {wine.subTypes.map((t, idx) => (
                                <div key={idx} className="bg-black/40 p-5 rounded-2xl border border-white/5">
                                    <span className="block font-black text-[#E2725B] text-[10px] uppercase tracking-widest mb-1">{t.level}</span>
                                    <span className="text-sm text-[#F4F1DE] italic">{t.rule}</span>
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

        {/* VIEW: GRAPES */}
        {view === 'grapes' && (
          <div className="animate-fadeIn">
            <h2 className="text-7xl font-serif mb-4 text-[#E2725B] italic">Grape DNA</h2>
            <p className="text-[#C6AC8F] mb-20 text-xl border-l border-[#E2725B] pl-6">The molecular characteristics and flavor profiles of the world's noble varieties.</p>
            <div className="space-y-32">
              {GRAPES_DATA.map(grape => (
                <div key={grape.id} id={grape.id} className="grid grid-cols-1 md:grid-cols-2 gap-16 scroll-mt-32 border-b border-white/5 pb-32">
                  <div>
                    <h3 className="text-6xl font-bold mb-4">{grape.name}</h3>
                    <p className="text-[#E2725B] font-mono text-xs uppercase tracking-widest mb-8 italic">{grape.origin} • {grape.style}</p>
                    <p className="text-xl text-[#F4F1DE] font-serif leading-relaxed mb-8 italic opacity-80">"{grape.summary}"</p>
                    <p className="text-[#A9927D] leading-relaxed mb-10 text-lg">{grape.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {grape.flavors.map(f => (
                        <span key={f} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-[#C6AC8F]">{f}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#161616] p-12 rounded-[4rem] border border-white/5 shadow-2xl h-fit sticky top-32">
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
