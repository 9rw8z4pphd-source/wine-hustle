// src/App.jsx
import React, { useMemo, useState } from "react";
import { COUNTRIES, REGIONS } from "./data/entities/regions";
import { GRAPES } from "./data/entities/grapes";
import { getWinesByRegion } from "./lib/selectors";

export default function App() {
  const [view, setView] = useState("home");
  const [activeCountryId, setActiveCountryId] = useState(null);
  const [activeRegionId, setActiveRegionId] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const activeCountry = activeCountryId ? COUNTRIES[activeCountryId] : null;

  const activeCountryRegions = useMemo(() => {
    if (!activeCountryId) return [];
    return Object.values(REGIONS).filter((r) => r.country_id === activeCountryId);
  }, [activeCountryId]);

  const activeRegion = activeRegionId ? REGIONS[activeRegionId] : null;

  const winesInActiveRegion = useMemo(() => {
    if (!activeRegionId) return [];
    return getWinesByRegion(activeRegionId);
  }, [activeRegionId]);

  const allCountries = useMemo(() => Object.values(COUNTRIES), []);
  const allGrapes = useMemo(() => Object.values(GRAPES), []);

  const navigate = (newView, countryId = null, regionId = null) => {
    setView(newView);
    setActiveCountryId(countryId);
    setActiveRegionId(regionId);
    setMenuOpen(false);
    setSearchQuery("");
    window.scrollTo(0, 0);
  };

  const handleGrapeClick = (grapeName) => {
    const grapeId = grapeName.toLowerCase().replace(/ /g, "-").split("/")[0].trim();
    const exists = GRAPES[grapeId];
    if (exists) {
      navigate("grapes");
      setTimeout(() => {
        document.getElementById(grapeId)?.scrollIntoView({ behavior: "smooth" });
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

  // Optional: Quick lightweight search (kept simple for v2 foundation)
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return null;

    const countryHits = allCountries.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        (c.description ?? "").toLowerCase().includes(q) ||
        c.id.toLowerCase().includes(q)
    );

    const regionHits = Object.values(REGIONS).filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        (r.methods ?? "").toLowerCase().includes(q) ||
        r.id.toLowerCase().includes(q)
    );

    const grapeHits = allGrapes.filter((g) => {
      const hay = [
        g.name,
        g.id,
        g.origin,
        g.style,
        g.summary,
        g.description,
        ...(g.flavors ?? []),
        ...(g.technical ? Object.values(g.technical) : []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });

    return { countryHits, regionHits, grapeHits };
  }, [searchQuery, allCountries, allGrapes]);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F4F1DE] font-sans selection:bg-[#E2725B] selection:text-white">
      {/* OVERLAY MENU */}
      <div
        className={`fixed inset-0 z-[200] flex transition-all duration-500 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`w-80 bg-[#111] h-full p-12 border-r border-white/5 transform transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <p className="text-[#E2725B] font-black tracking-[0.4em] text-[10px] uppercase mb-12">
            Archive v2.0
          </p>
          <nav className="space-y-8">
            <button
              onClick={() => navigate("home")}
              className="block text-4xl font-serif hover:text-[#E2725B] transition-colors italic"
            >
              Atlas
            </button>
            <button
              onClick={() => navigate("grapes")}
              className="block text-4xl font-serif hover:text-[#E2725B] transition-colors italic"
            >
              Genetics
            </button>
          </nav>
        </div>
        <div
          className="flex-1 bg-black/80 backdrop-blur-md"
          onClick={() => setMenuOpen(false)}
        ></div>
      </div>

      {/* SEARCH & HEADER */}
      <nav className="sticky top-0 z-[100] bg-[#0D0D0D]/80 backdrop-blur-xl border-b border-white/5 px-8 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-12">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-2xl hover:scale-125 transition-transform text-[#E2725B]"
          >
            ☰
          </button>

          <div className="flex-1 max-w-xl relative hidden md:block">
            <input
              type="text"
              placeholder="Search by variety, soil, or appellation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 px-8 text-sm focus:outline-none focus:ring-1 focus:ring-[#E2725B]/50 transition-all"
            />
          </div>

          <h1
            onClick={() => navigate("home")}
            className="text-xl font-black tracking-[0.3em] uppercase italic cursor-pointer text-[#E2725B]"
          >
            Wine Scholar
          </h1>
        </div>
      </nav>

      <main className="px-8 py-12 max-w-7xl mx-auto">
        {/* SEARCH RESULTS (optional panel) */}
        {searchResults && (
          <div className="animate-fadeIn mb-16 p-10 bg-[#111] rounded-[3rem] border border-white/5">
            <p className="text-[10px] font-black text-[#E2725B] uppercase tracking-[0.4em] mb-6">
              Search Results
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Countries */}
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">
                  Countries
                </p>
                <div className="space-y-3">
                  {searchResults.countryHits.length === 0 ? (
                    <p className="text-xs text-slate-600 italic">No matches.</p>
                  ) : (
                    searchResults.countryHits.slice(0, 8).map((c) => (
                      <button
                        key={c.id}
                        onClick={() => navigate("country", c.id, null)}
                        className="block w-full text-left p-4 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 rounded-2xl transition-all"
                      >
                        <p className="text-sm font-bold">{c.name}</p>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">
                          Open atlas →
                        </p>
                      </button>
                    ))
                  )}
                </div>
              </div>

              {/* Regions */}
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">
                  Regions
                </p>
                <div className="space-y-3">
                  {searchResults.regionHits.length === 0 ? (
                    <p className="text-xs text-slate-600 italic">No matches.</p>
                  ) : (
                    searchResults.regionHits.slice(0, 8).map((r) => (
                      <button
                        key={r.id}
                        onClick={() => navigate("region", r.country_id, r.id)}
                        className="block w-full text-left p-4 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 rounded-2xl transition-all"
                      >
                        <p className="text-sm font-bold">{r.name}</p>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">
                          Open tech specs →
                        </p>
                      </button>
                    ))
                  )}
                </div>
              </div>

              {/* Grapes */}
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">
                  Grapes
                </p>
                <div className="space-y-3">
                  {searchResults.grapeHits.length === 0 ? (
                    <p className="text-xs text-slate-600 italic">No matches.</p>
                  ) : (
                    searchResults.grapeHits.slice(0, 8).map((g) => (
                      <button
                        key={g.id}
                        onClick={() => {
                          navigate("grapes");
                          setTimeout(() => {
                            document
                              .getElementById(g.id)
                              ?.scrollIntoView({ behavior: "smooth" });
                          }, 100);
                        }}
                        className="block w-full text-left p-4 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 rounded-2xl transition-all"
                      >
                        <p className="text-sm font-bold">{g.name}</p>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">
                          Jump to DNA →
                        </p>
                      </button>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW: HOME (WORLD ATLAS) */}
        {view === "home" && (
          <div className="animate-fadeIn">
            <div className="mb-20">
              <h2 className="text-8xl font-serif italic mb-6">World Terroir.</h2>
              <p className="text-slate-500 max-w-xl uppercase tracking-widest text-xs leading-loose">
                A comprehensive technical index of global viticultural regions and their legal production
                standards.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {allCountries.map((country) => (
                <div
                  key={country.id}
                  onClick={() => navigate("country", country.id, null)}
                  className="group relative p-12 bg-[#111] rounded-[4rem] border border-white/5 hover:border-[#E2725B]/30 cursor-pointer transition-all"
                >
                  <span className="text-[10px] font-black text-[#E2725B] uppercase tracking-widest mb-4 block">
                    Archive_{country.id}
                  </span>
                  <h3 className="text-5xl font-bold mb-4 group-hover:translate-x-2 transition-transform">
                    {country.name}
                  </h3>
                  <p className="text-[#A9927D] text-lg leading-relaxed">{country.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: COUNTRY (REGION LIST) */}
        {view === "country" && activeCountry && (
          <div className="animate-fadeIn">
            <button
              onClick={() => navigate("home")}
              className="text-[#E2725B] font-black text-[10px] uppercase tracking-[0.3em] mb-12 hover:pl-2 transition-all"
            >
              ← Back to Atlas
            </button>

            <h2 className="text-9xl font-serif mb-20">{activeCountry.name}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeCountryRegions.map((reg) => (
                <div
                  key={reg.id}
                  onClick={() => navigate("region", activeCountry.id, reg.id)}
                  className="p-10 bg-[#111] rounded-[3rem] border border-white/5 hover:bg-[#161616] cursor-pointer transition-all border-b-4 border-b-[#E2725B]/20"
                >
                  <h4 className="text-2xl font-bold mb-4">{reg.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">
                    Access Tech Specs →
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: REGION (TECHNICAL DEEP DIVE) */}
        {view === "region" && activeRegion && (
          <div className="animate-fadeIn">
            <header className="mb-20 border-b border-white/5 pb-20">
              <button
                onClick={() => navigate("country", activeRegion.country_id, null)}
                className="text-[#E2725B] font-black text-[10px] uppercase tracking-[0.3em] mb-8"
              >
                ← {COUNTRIES[activeRegion.country_id]?.name ?? "Back"}
              </button>

              <h2 className="text-8xl font-serif text-[#E2725B] italic mb-8">{activeRegion.name}</h2>

              <div className="max-w-3xl">
                <p className="text-2xl text-[#C6AC8F] italic font-serif leading-relaxed mb-6">
                  "{activeRegion.methods}"
                </p>
              </div>
            </header>

            <div className="grid grid-cols-1 gap-20">
              {winesInActiveRegion.length === 0 ? (
                <div className="p-10 bg-[#111] rounded-[3rem] border border-white/5">
                  <p className="text-sm text-slate-600 italic">
                    No wines yet for this region. Add entries in <code className="text-[#E2725B]">src/data/entities/wines.js</code>.
                  </p>
                </div>
              ) : (
                winesInActiveRegion.map((wine, i) => (
                  <div key={wine.id ?? i} className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-7">
                      <span className="text-[10px] font-black text-slate-600 mb-4 block uppercase tracking-widest">
                        Entry {String(i + 1).padStart(3, "0")}
                      </span>

                      <h3 className="text-6xl font-bold mb-6">{wine.name}</h3>

                      {/* GRAPE BUTTONS */}
                      <div className="flex flex-wrap gap-3 mb-8">
                        {(wine.grape_ids ?? []).map((gid) => {
                          const g = GRAPES[gid];
                          const label = g?.name ?? gid;
                          return (
                            <button
                              key={gid}
                              onClick={() => handleGrapeClick(label)}
                              className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[#E2725B] font-mono text-xs uppercase tracking-widest hover:bg-[#E2725B] hover:text-white transition-all"
                            >
                              DNA: {label}
                            </button>
                          );
                        })}
                      </div>

                      <p className="text-2xl text-[#F4F1DE] font-serif leading-relaxed italic opacity-80 mb-10">
                        "{wine.pro}"
                      </p>

                      {wine.subTypes && (
                        <div className="space-y-4">
                          {wine.subTypes.map((t, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-6 p-6 bg-white/[0.02] rounded-2xl border border-white/5"
                            >
                              <span className="text-[#E2725B] font-black text-[10px] uppercase pt-1 shrink-0">
                                {t.level}
                              </span>
                              <span className="text-sm text-[#A9927D] italic leading-relaxed">
                                {t.rule}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="lg:col-span-5 bg-[#111] p-10 rounded-[3rem] border border-white/5 sticky top-32">
                      <p className="text-[10px] font-black text-[#E2725B] uppercase tracking-[0.4em] mb-8">
                        Technical Specification
                      </p>

                      {wine.tech_specs ? (
                        Object.entries(wine.tech_specs).map(([label, val]) => (
                          <div key={label} className="mb-8 last:mb-0">
                            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                              {label.replaceAll("_", " ")}
                            </p>
                            <p className="text-sm text-[#C6AC8F] leading-relaxed">{val}</p>
                          </div>
                        ))
                      ) : (
                        <p className="text-xs text-slate-600 italic">
                          Advanced tech specs for this appellation are being finalized.
                        </p>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* VIEW: GRAPE GENETICS */}
        {view === "grapes" && (
          <div className="animate-fadeIn">
            <h2 className="text-9xl font-serif mb-6 italic text-[#E2725B]">Genetics</h2>
            <p className="text-xl text-[#C6AC8F] mb-24 border-l-2 border-[#E2725B] pl-8 max-w-2xl">
              The technical pedigree and chemical analysis of the world's noble varieties.
            </p>

            <div className="space-y-40">
              {allGrapes.map((grape) => (
                <div
                  key={grape.id}
                  id={grape.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-16 scroll-mt-32"
                >
                  <div className="lg:col-span-7">
                    <h3 className="text-7xl font-bold mb-4">{grape.name}</h3>
                    <p className="text-[#E2725B] font-mono text-xs uppercase tracking-[0.3em] mb-10">
                      {grape.origin} • {grape.style}
                    </p>

                    <p className="text-2xl text-[#F4F1DE] font-serif italic mb-8 opacity-90 leading-relaxed">
                      "{grape.summary}"
                    </p>

                    <p className="text-[#A9927D] text-lg leading-relaxed mb-12">{grape.description}</p>

                    <div className="bg-[#111] p-10 rounded-[3rem] border border-white/5">
                      <p className="text-[10px] font-black text-[#E2725B] uppercase tracking-[0.4em] mb-8">
                        Pedigree & Viticulture
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {grape.technical &&
                          Object.entries(grape.technical).map(([key, value]) => (
                            <div key={key}>
                              <p className="text-[9px] uppercase text-slate-500 font-black mb-2 tracking-widest">
                                {key.replaceAll("_", " ")}
                              </p>
                              <p className="text-sm text-[#C6AC8F] leading-relaxed">{value}</p>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-[#111] p-12 rounded-[4rem] border border-white/5 h-fit sticky top-32">
                    <p className="text-[10px] font-black text-[#E2725B] uppercase tracking-[0.4em] mb-12">
                      Phenolic Analysis
                    </p>

                    <PowerBar label="Acidity" level={grape.stats?.acidity ?? 0} />
                    <PowerBar label="Tannin" level={grape.stats?.tannin ?? 0} />
                    <PowerBar label="Body" level={grape.stats?.body ?? 0} />
                    <PowerBar label="Alcohol" level={grape.stats?.alcohol ?? 0} />

                    <div className="mt-12 pt-10 border-t border-white/5">
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6">
                        Aromatic Profile
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {(grape.flavors ?? []).map((f) => (
                          <span
                            key={f}
                            className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#C6AC8F]"
                          >
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