import React, { useState } from 'react';
import { WINE_DATA } from './wines.js';

export default function App() {
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...f, id]
    );
  };

  const filtered = WINE_DATA.filter(w => 
    w.name.toLowerCase().includes(search.toLowerCase()) || 
    w.region.toLowerCase().includes(search.toLowerCase()) ||
    w.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-200 p-4 pb-20 font-sans">
      <header className="py-8 text-center">
        <h1 className="text-5xl font-black text-amber-500 italic tracking-tighter">WINE MASTER</h1>
        <p className="text-slate-500 text-[10px] tracking-[0.3em] uppercase mt-2">Global Knowledge Base</p>
      </header>

      {/* SEARCH INTERFACE */}
      <div className="sticky top-4 z-50 mb-8">
        <input 
          className="w-full bg-slate-900/80 backdrop-blur-md border border-slate-700 p-4 rounded-2xl shadow-2xl focus:border-amber-500 outline-none transition-all"
          placeholder="Search Grapes, Countries, or Profiles..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="space-y-6">
        {filtered.map(wine => (
          <div key={wine.id} className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 transition-all">
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-[10px] bg-amber-500/10 text-amber-500 px-2 py-1 rounded font-bold uppercase mr-2">{wine.tier}</span>
                  <h2 className="text-2xl font-bold mt-2">{wine.name}</h2>
                  <p className="text-slate-400 text-sm">{wine.region} • {wine.grape}</p>
                </div>
                <button onClick={() => toggleFavorite(wine.id)} className="text-2xl">
                   {favorites.includes(wine.id) ? '⭐' : '☆'}
                </button>
              </div>

              <p className="mt-4 text-lg text-slate-300 leading-relaxed">{wine.basic}</p>

              {/* THE TOGGLE SECTION */}
              <button 
                onClick={() => setExpandedId(expandedId === wine.id ? null : wine.id)}
                className="mt-6 w-full py-3 bg-slate-800 rounded-xl text-xs font-bold tracking-widest text-amber-500 hover:bg-slate-700 transition-all"
              >
                {expandedId === wine.id ? "HIDE DETAILS" : "DEEP DIVE (PRO + SCIENCE)"}
              </button>

              {expandedId === wine.id && (
                <div className="mt-4 space-y-4 animate-fadeIn">
                  <div className="p-4 bg-amber-500/5 border-l-2 border-amber-500 rounded-r-lg">
                    <h4 className="text-[10px] font-bold text-amber-500 uppercase mb-1">Sommelier Intel</h4>
                    <p className="text-sm italic">{wine.proIntel}</p>
                  </div>
                  <div className="p-4 bg-blue-500/5 border-l-2 border-blue-500 rounded-r-lg">
                    <h4 className="text-[10px] font-bold text-blue-500 uppercase mb-1">Production Science</h4>
                    <p className="text-sm text-slate-400">{wine.science}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
