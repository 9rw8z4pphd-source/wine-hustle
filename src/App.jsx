import React, { useState } from 'react';

const WINE_DB = [
  { id: 1, name: "Barolo", region: "Piedmont, Italy", grape: "Nebbiolo", pro: "King of wines. High acid/tannin. Needs fat/meat.", type: "Red" },
  { id: 2, name: "Chablis", region: "Burgundy, France", grape: "Chardonnay", pro: "Bone dry, no oak. Tastes like lemon and stones.", type: "White" },
  { id: 3, name: "Barossa Shiraz", region: "South Australia", grape: "Shiraz", pro: "Fruit bomb. Chocolate and pepper notes. High alcohol.", type: "Red" },
  { id: 4, name: "Sancerre", region: "Loire, France", grape: "Sauvignon Blanc", pro: "Benchmark SB. Flinty and elegant. Great with goat cheese.", type: "White" },
  { id: 5, name: "Rioja Reserva", region: "Spain", grape: "Tempranillo", pro: "Silky with vanilla notes from American oak barrels.", type: "Red" }
];

export default function App() {
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  const filteredWines = WINE_DB.filter(w => 
    w.name.toLowerCase().includes(search.toLowerCase()) || 
    w.region.toLowerCase().includes(search.toLowerCase())
  );

  const myCellar = WINE_DB.filter(w => favorites.includes(w.id));

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 font-sans">
      <header className="mb-8 text-center pt-6">
        <h1 className="text-4xl font-black text-amber-500 italic tracking-tighter">WINE HUSTLE</h1>
        <p className="text-slate-400 text-xs mt-1 uppercase tracking-widest">Digital Cellar v3.0</p>
      </header>

      {/* SEARCH BOX */}
      <input 
        className="w-full bg-slate-900 border border-slate-800 p-4 rounded-2xl mb-8 focus:outline-none focus:border-amber-500"
        placeholder="Search grape, region, or name..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* MY ACTIVE BAR (CELLAR) */}
      {myCellar.length > 0 && (
        <section className="mb-10">
          <h2 className="text-amber-500 font-bold mb-4 flex items-center gap-2">
            ⭐ MY ACTIVE BAR LIST
          </h2>
          <div className="grid gap-4">
            {myCellar.map(wine => (
              <div key={wine.id} className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl flex justify-between items-center animate-pulse">
                <div>
                  <h3 className="font-bold text-white">{wine.name}</h3>
                  <p className="text-xs text-amber-200">{wine.region}</p>
                </div>
                <button onClick={() => toggleFavorite(wine.id)} className="text-amber-500 text-xl">★</button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* EXPLORE DATABASE */}
      <section>
        <h2 className="text-slate-500 font-bold mb-4 uppercase text-xs tracking-widest">Explore Database</h2>
        <div className="grid gap-4">
          {filteredWines.map(wine => (
            <div key={wine.id} className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-[10px] text-amber-500 font-bold uppercase">{wine.type}</span>
                  <h3 className="text-xl font-bold">{wine.name}</h3>
                  <p className="text-slate-400 text-sm">{wine.region} ({wine.grape})</p>
                </div>
                <button 
                  onClick={() => toggleFavorite(wine.id)}
                  className={`text-2xl ${favorites.includes(wine.id) ? 'text-amber-500' : 'text-slate-700'}`}
                >
                  {favorites.includes(wine.id) ? '★' : '☆'}
                </button>
              </div>
              <div className="mt-4 p-3 bg-white/5 rounded-lg border-l-2 border-amber-500 text-sm italic text-slate-300">
                "{wine.pro}"
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
