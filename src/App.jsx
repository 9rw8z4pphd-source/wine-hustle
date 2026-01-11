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
    setSearchQuery('');
    window.scrollTo(0, 0);
  };

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
    <div className="mb-6">
      <div className="flex justify-between text-[10px] uppercase font-black tracking-widest mb-2 text-slate-500">
        <span>{label}</span>
        <span className="text-[#E2725B]">{level} / 5</span>
      </div>
      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#E2725B] shadow-[0_0_12px_#E2725B]" 
          style={{ width: `${(level / 5) * 100}%` }} 
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F4F1DE] font-sans selection:bg-[#E2725B] selection:text-white">
      
      {/* OVERLAY MENU */}
      <div className={`fixed inset-0 z-[200] flex transition-all duration-500 ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <div className={`w-80 bg-[#111] h-full p-12 border-r border-white/5 transform transition-transform duration-500 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <p className="text-[#E2725B] font-black tracking-[0.4em] text-[10px] uppercase mb-12">Archive v1.0</p>
          <nav className="space-y-8">
            <button onClick={() => navigate('home')} className="block text-4xl font-serif hover:text-[#E2725B] transition-colors italic">Atlas</button>
            <button onClick={() => navigate('grapes')} className="block text-4xl font-serif hover:text-[#E2725B] transition-colors italic">Genetics</button>
          </nav>
        </div>
        <div className="flex-1 bg-black/80 backdrop-blur-md" onClick={() => setMenuOpen(false)}></div>
      </div>

      {/* SEARCH & HEADER */}
      <nav className="sticky top-0 z-[100] bg-[#0D0D0D]/80 backdrop-blur-xl border-b border-white/5 px-8 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-12">
          <button onClick={() => setMenuOpen(true)} className="text-2xl hover:scale-125 transition-transform text-[#E2725B]">☰</button>
          
          <div className="flex-1 max-w-xl relative hidden md:block">
            <input 
              type="text" 
              placeholder="Search by variety, soil, or appellation..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 px-8 text-sm focus:outline-none focus:ring-1 focus:ring-[#E2725B]/50 transition-all"
            />
          </div>

          <h1 onClick={() => navigate('home')} className="text-xl font-black tracking-[0.3em] uppercase italic cursor-pointer text-[#E2725B]">Wine Scholar</h1>
        </div>
      </nav>

      <main className="px-8 py-12 max-w-7xl mx-auto">
        
        {/* VIEW: HOME (WORLD ATLAS) */}
        {view === 'home' && (
          <div className="animate-fadeIn">
            <div className="mb-20">
              <h2 className="text-8xl font-serif italic mb-6">World Terroir.</h2>
              <p className="text-slate-500 max-w-xl uppercase tracking-widest text-xs leading-loose">A comprehensive technical index of global viticultural regions and their legal production standards.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {REGIONS_DATA.map(country => (
                <div key={country.id} onClick={() => navigate('country', country)} className="group relative p-12 bg-[#111] rounded-[4rem] border border-white/5 hover:border-[#E2725B]/30 cursor-pointer transition-all">
                  <span className="text-[10px] font-black text-[#E2725B] uppercase tracking-widest mb-4 block">Archive_{country.id}</span>
                  <h3 className="text-5xl font-bold mb-4 group-hover:translate-x-2 transition-transform">{country.name}</h3>
                  <p className="text-[#A9927D] text-lg leading-relaxed">{country.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: COUNTRY (APPELLATION LIST) */}
        {view === 'country' && activeCountry && (
          <div className="animate-fadeIn">
            <button onClick={() => navigate('home')} className="text-[#E2725B] font-black text-[10px] uppercase tracking-[0.3em] mb-12 hover:pl-2 transition-all">← Back to Atlas</button>
            <h2 className="text-9xl font-serif mb-20">{activeCountry.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeCountry.subRegions.map(reg => (
                <div key={reg.id} onClick={() => navigate('region', activeCountry, reg)} className="p-10 bg-[#111] rounded-[3rem] border border-white/5 hover:bg-[#161616] cursor-pointer transition-all border-b-4 border-b-[#E2725B]/20">
                  <h4 className="text-2xl font-bold mb-4">{reg.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Access Tech Specs →</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: REGION (TECHNICAL DEEP DIVE) */}
        {view === 'region' && activeRegion && (
          <div className="animate-fadeIn">
            <header className="mb-20 border-b border-white/5 pb-20">
              <button onClick={() => navigate('country', activeCountry)} className="text-[#E2725B] font-black text-[10px] uppercase tracking-[0.3em] mb-8">← {activeCountry.name}</button>
              <h2 className="text-8xl font-serif text-[#E2725B] italic mb-8">{activeRegion.name}</h2>
              <div className="max-w-3xl">
                <p className="text-2xl text-[#C6AC8F] italic font-serif leading-relaxed mb-6">"{activeRegion.methods}"</p>
              </div>
            </header>
            
            <div className="grid grid-cols-1 gap-20">
              {WINE_LIBRARY[activeRegion.id]?.map((wine, i) => (
                <div key={i} className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  <div className="lg:col-span-7">
                    <span className="text-[10px] font-black text-slate-600 mb-4 block uppercase tracking-widest">Entry 00{i+1}</span>
                    <h3 className="text-6xl font-bold mb-6">{wine.name}</h3>
                    <button 
                      onClick={() => handleGrapeClick(wine.grape)}
                      className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[#E2725B] font-mono text-xs uppercase tracking-widest mb-8 hover:bg-[#E2725B] hover:text-white transition-all"
                    >
                      DNA: {wine.grape}
                    </button>
                    <p className="text-2xl text-[#F4F1DE] font-serif leading-relaxed italic opacity-80 mb-10">"{wine.pro}"</p>
                    
                    {wine.subTypes && (
                      <div className="space-y-4">
                        {wine.subTypes.map((t, idx) => (
                          <div key={idx} className="flex items-start gap-6 p-6 bg-white/[0.02] rounded-2xl border border-white/5">
                            <span className="text-[#E2725B] font-black text-[10px] uppercase pt-1 shrink-0">{t.level}</span>
                            <span className="text-sm text-[#A9927D] italic leading-relaxed">{t.rule}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-5 bg-[#111] p-10 rounded-[3rem] border border-white/5 sticky top-32">
                    <p className="text-[10px] font-black text-[#E2725B] uppercase tracking-[0.4em] mb-8">Technical Specification</p>
                    {wine.tech_specs ? Object.entries(wine.tech_specs).map(([label, val]) => (
                      <div key={label} className="mb-8 last:mb-0">
                        <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2">{label.replace('_', ' ')}</p>
                        <p className="text-sm text-[#C6AC8F] leading-relaxed">{val}</p>
                      </div>
                    )) : <p className="text-xs text-slate-600 italic">Advanced tech specs for this appellation are being finalized.</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: GRAPE GENETICS */}
        {view === 'grapes' && (
          <div className="animate-fadeIn">
            <h2 className="text-9xl font-serif mb-6 italic text-[#E2725B]">Genetics</h2>
            <p className="text-xl text-[#C6AC8F] mb-24 border-l-2 border-[#E2725B] pl-8 max-w-2xl">The technical pedigree and chemical analysis of the world's noble varieties.</p>
            
            <div className="space-y-40">
              {GRAPES_DATA.map(grape => (
                <div key={grape.id} id={grape.id} className="grid grid-cols-1 lg:grid-cols-12 gap-16 scroll-mt-32">
                  <div className="lg:col-span-7">
                    <h3 className="text-7xl font-bold mb-4">{grape.name}</h3>
                    <p className="text-[#E2725B] font-mono text-xs uppercase tracking-[0.3em] mb-10">{grape.origin} • {grape.style}</p>
                    <p className="text-2xl text-[#F4F1DE] font-serif italic mb-8 opacity-90 leading-relaxed">"{grape.summary}"</p>
                    <p className="text-[#A9927D] text-lg leading-relaxed mb-12">{grape.description}</p>
                    
                    <div className="bg-[#111] p-10 rounded-[3rem] border border-white/5">
                      <p className="text-[10px] font-black text-[#E2725B] uppercase tracking-[0.4em] mb-8">Pedigree & Viticulture</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {grape.technical && Object.entries(grape.technical).map(([key, value]) => (
                          <div key={key}>
                            <p className="text-[9px] uppercase text-slate-500 font-black mb-2 tracking-widest">{key.replace('_', ' ')}</p>
                            <p className="text-sm text-[#C6AC8F] leading-relaxed">{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-[#111] p-12 rounded-[4rem] border border-white/5 h-fit sticky top-32">
                    <p className="text-[10px] font-black text-[#E2725B] uppercase tracking-[0.4em] mb-12">Phenolic Analysis</p>
                    <PowerBar label="Acidity" level={grape.stats.acidity} />
                    <PowerBar label="Tannin" level={grape.stats.tannin} />
                    <PowerBar label="Body" level={grape.stats.body} />
                    <PowerBar label="Alcohol" level={grape.stats.alcohol} />
                    
                    <div className="mt-12 pt-10 border-t border-white/5">
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6">Aromatic Profile</p>
                      <div className="flex flex-wrap gap-3">
                        {grape.flavors.map(f => (
                          <span key={f} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#C6AC8F]">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
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
