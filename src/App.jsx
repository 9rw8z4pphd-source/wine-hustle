// src/App.jsx
import React, { useMemo, useState } from "react";
import { COUNTRIES, REGIONS } from "./data/entities/regions";
import { GRAPES } from "./data/entities/grapes";
import { WINES } from "./data/entities/wines";
import { getWinesByRegion } from "./data/lib/selectors";
import { getAllLessons, getLessonById, getTermsForLesson } from "./data/lib/academy";

export default function App() {
  const [view, setView] = useState("home");
  const [activeCountryId, setActiveCountryId] = useState(null);
  const [activeRegionId, setActiveRegionId] = useState(null);
  const [activeLessonId, setActiveLessonId] = useState(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const activeCountry = activeCountryId ? COUNTRIES[activeCountryId] : null;
  const activeRegion = activeRegionId ? REGIONS[activeRegionId] : null;

  const allCountries = useMemo(() => Object.values(COUNTRIES), []);
  const allRegions = useMemo(() => Object.values(REGIONS), []);
  const allGrapes = useMemo(() => Object.values(GRAPES), []);
  const allWines = useMemo(() => Object.values(WINES), []);

  const wineCountByRegion = useMemo(
    () =>
      allWines.reduce((acc, wine) => {
        acc[wine.region_id] = (acc[wine.region_id] ?? 0) + 1;
        return acc;
      }, {}),
    [allWines]
  );

  const activeCountryRegions = useMemo(() => {
    if (!activeCountryId) return [];
    return Object.values(REGIONS).filter((r) => r.country_id === activeCountryId);
  }, [activeCountryId]);

  const winesInActiveRegion = useMemo(() => {
    if (!activeRegionId) return [];
    return getWinesByRegion(activeRegionId);
  }, [activeRegionId]);

  const lessons = useMemo(() => getAllLessons(), []);
  const activeLesson = useMemo(() => (activeLessonId ? getLessonById(activeLessonId) : null), [activeLessonId]);
  const activeLessonTerms = useMemo(() => (activeLesson ? getTermsForLesson(activeLesson) : []), [activeLesson]);

  const navigate = (newView, countryId = null, regionId = null, lessonId = null) => {
    setView(newView);
    setActiveCountryId(countryId);
    setActiveRegionId(regionId);
    setActiveLessonId(lessonId);
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

  const getGrapeLabel = (grapeId) => {
    if (GRAPES[grapeId]?.name) return GRAPES[grapeId].name;
    return grapeId
      .replaceAll("-", " ")
      .replaceAll("_", " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
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

  // Basic cross-entity search (countries, regions, grapes only for now)
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return null;

    const countryHits = allCountries.filter(
      (c) => c.name.toLowerCase().includes(q) || (c.description ?? "").toLowerCase().includes(q) || c.id.toLowerCase().includes(q)
    );

    const regionHits = Object.values(REGIONS).filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        (r.methods ?? "").toLowerCase().includes(q) ||
        (r.climate ?? "").toLowerCase().includes(q) ||
        (r.soils ?? "").toLowerCase().includes(q) ||
        (r.key_grapes ?? []).join(" ").toLowerCase().includes(q) ||
        (r.flagship_styles ?? []).join(" ").toLowerCase().includes(q) ||
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

  const Card = ({ children, className = "" }) => (
    <div className={`bg-[#111] border border-white/5 rounded-[3rem] ${className}`}>{children}</div>
  );

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F4F1DE] font-sans selection:bg-[#E2725B] selection:text-white">
      {/* OVERLAY MENU */}
      <div className={`fixed inset-0 z-[200] flex transition-all duration-500 ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <div className={`w-80 bg-[#111] h-full p-12 border-r border-white/5 transform transition-transform duration-500 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <p className="text-[#E2725B] font-black tracking-[0.4em] text-[10px] uppercase mb-12">Archive v2.0</p>
          <nav className="space-y-8">
            <button onClick={() => navigate("home")} className="block text-4xl font-serif hover:text-[#E2725B] transition-colors italic">
              Atlas
            </button>
            <button onClick={() => navigate("grapes")} className="block text-4xl font-serif hover:text-[#E2725B] transition-colors italic">
              Genetics
            </button>
            <button onClick={() => navigate("academy")} className="block text-4xl font-serif hover:text-[#E2725B] transition-colors italic">
              Academy
            </button>
          </nav>
        </div>
        <div className="flex-1 bg-black/80 backdrop-blur-md" onClick={() => setMenuOpen(false)}></div>
      </div>

      {/* SEARCH & HEADER */}
      <nav className="sticky top-0 z-[100] bg-[#0D0D0D]/80 backdrop-blur-xl border-b border-white/5 px-8 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-12">
          <button onClick={() => setMenuOpen(true)} className="text-2xl hover:scale-125 transition-transform text-[#E2725B]">
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

          <h1 onClick={() => navigate("home")} className="text-xl font-black tracking-[0.3em] uppercase italic cursor-pointer text-[#E2725B]">
            Wine Scholar
          </h1>
        </div>
      </nav>

      <main className="px-8 py-12 max-w-7xl mx-auto">
        {/* SEARCH RESULTS */}
        {searchResults && (
          <Card className="animate-fadeIn mb-16 p-10">
            <p className="text-[10px] font-black text-[#E2725B] uppercase tracking-[0.4em] mb-6">Search Results</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Countries</p>
                <div className="space-y-3">
                  {searchResults.countryHits.length === 0 ? (
                    <p className="text-xs text-slate-600 italic">No matches.</p>
                  ) : (
                    searchResults.countryHits.slice(0, 8).map((c) => (
                      <button
                        key={c.id}
                        onClick={() => navigate("country", c.id)}
                        className="block w-full text-left p-4 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 rounded-2xl transition-all"
                      >
                        <p className="text-sm font-bold">{c.name}</p>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">Open atlas →</p>
                      </button>
                    ))
                  )}
                </div>
              </div>

              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Regions</p>
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
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">Open tech specs →</p>
                      </button>
                    ))
                  )}
                </div>
              </div>

              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Grapes</p>
                <div className="space-y-3">
                  {searchResults.grapeHits.length === 0 ? (
                    <p className="text-xs text-slate-600 italic">No matches.</p>
                  ) : (
                    searchResults.grapeHits.slice(0, 8).map((g) => (
                      <button
                        key={g.id}
                        onClick={() => {
                          navigate("grapes");
                          setTimeout(() => document.getElementById(g.id)?.scrollIntoView({ behavior: "smooth" }), 100);
                        }}
                        className="block w-full text-left p-4 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 rounded-2xl transition-all"
                      >
                        <p className="text-sm font-bold">{g.name}</p>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">Jump to DNA →</p>
                      </button>
                    ))
                  )}
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* VIEW: HOME */}
        {view === "home" && (
          <div className="animate-fadeIn">
            <div className="mb-20">
              <h2 className="text-8xl font-serif italic mb-6">World Terroir.</h2>
              <p className="text-slate-500 max-w-xl uppercase tracking-widest text-xs leading-loose">
                A comprehensive technical index of global viticultural regions and their legal production standards.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              <Card className="p-6">
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">Countries</p>
                <p className="text-3xl font-bold text-[#E2725B]">{allCountries.length}</p>
              </Card>
              <Card className="p-6">
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">Regions</p>
                <p className="text-3xl font-bold text-[#E2725B]">{allRegions.length}</p>
              </Card>
              <Card className="p-6">
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">Grapes</p>
                <p className="text-3xl font-bold text-[#E2725B]">{allGrapes.length}</p>
              </Card>
              <Card className="p-6">
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">Wines</p>
                <p className="text-3xl font-bold text-[#E2725B]">{allWines.length}</p>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {allCountries.map((country) => (
                <div
                  key={country.id}
                  onClick={() => navigate("country", country.id)}
                  className="group relative p-12 bg-[#111] rounded-[4rem] border border-white/5 hover:border-[#E2725B]/30 cursor-pointer transition-all"
                >
                  <span className="text-[10px] font-black text-[#E2725B] uppercase tracking-widest mb-4 block">Archive_{country.id}</span>
                  <h3 className="text-5xl font-bold mb-4 group-hover:translate-x-2 transition-transform">{country.name}</h3>
                  <p className="text-[#A9927D] text-lg leading-relaxed">{country.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: COUNTRY */}
        {view === "country" && activeCountry && (
          <div className="animate-fadeIn">
            <button onClick={() => navigate("home")} className="text-[#E2725B] font-black text-[10px] uppercase tracking-[0.3em] mb-12 hover:pl-2 transition-all">
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
                  {reg.climate && <p className="text-sm text-[#A9927D] mb-3">{reg.climate}</p>}
                  {!!reg.key_grapes?.length && (
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-4">
                      Key grapes: {reg.key_grapes.slice(0, 3).map((g) => getGrapeLabel(g)).join(" • ")}
                    </p>
                  )}
                  <p className="text-[10px] uppercase tracking-widest text-slate-600 mb-5">
                    {wineCountByRegion[reg.id] ?? 0} mapped wine styles
                  </p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Access Tech Specs →</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: REGION */}
        {view === "region" && activeRegion && (
          <div className="animate-fadeIn">
            <header className="mb-20 border-b border-white/5 pb-20">
              <button onClick={() => navigate("country", activeRegion.country_id)} className="text-[#E2725B] font-black text-[10px] uppercase tracking-[0.3em] mb-8">
                ← {COUNTRIES[activeRegion.country_id]?.name ?? "Back"}
              </button>

              <h2 className="text-8xl font-serif text-[#E2725B] italic mb-8">{activeRegion.name}</h2>

              <div className="max-w-3xl">
                <p className="text-2xl text-[#C6AC8F] italic font-serif leading-relaxed mb-6">"{activeRegion.methods}"</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-5xl">
                {activeRegion.climate && (
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5">
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">Climate</p>
                    <p className="text-sm text-[#C6AC8F]">{activeRegion.climate}</p>
                  </div>
                )}
                {activeRegion.soils && (
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5">
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">Soils</p>
                    <p className="text-sm text-[#C6AC8F]">{activeRegion.soils}</p>
                  </div>
                )}
                {!!activeRegion.flagship_styles?.length && (
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5">
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">Flagship Styles</p>
                    <p className="text-sm text-[#C6AC8F]">{activeRegion.flagship_styles.join(", ")}</p>
                  </div>
                )}
              </div>

              {!!activeRegion.key_grapes?.length && (
                <div className="mt-6 flex flex-wrap gap-3 max-w-5xl">
                  {activeRegion.key_grapes.map((grapeId) => {
                    const grape = GRAPES[grapeId];
                    const label = getGrapeLabel(grapeId);
                    return (
                      <button
                        key={grapeId}
                        onClick={() => grape && handleGrapeClick(grape.name)}
                        className={`px-4 py-2 bg-white/5 border border-white/10 rounded-full font-mono text-[10px] uppercase tracking-widest transition-all ${
                          grape
                            ? "text-[#E2725B] hover:bg-[#E2725B] hover:text-white"
                            : "text-[#C6AC8F] cursor-default"
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              )}
            </header>

            <div className="grid grid-cols-1 gap-20">
              {winesInActiveRegion.length === 0 ? (
                <Card className="p-10">
                  <p className="text-sm text-slate-600 italic">
                    No wines yet for this region. Add entries in <code className="text-[#E2725B]">src/data/entities/wines.js</code>.
                  </p>
                </Card>
              ) : (
                winesInActiveRegion.map((wine, i) => (
                  <div key={wine.id ?? i} className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-7">
                      <span className="text-[10px] font-black text-slate-600 mb-4 block uppercase tracking-widest">Entry {String(i + 1).padStart(3, "0")}</span>
                      <h3 className="text-6xl font-bold mb-6">{wine.name}</h3>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {wine.classification && (
                          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#C6AC8F]">
                            {wine.classification}
                          </span>
                        )}
                        {wine.style_profile && (
                          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#C6AC8F]">
                            {wine.style_profile}
                          </span>
                        )}
                      </div>

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
                      {wine.tech_specs ? (
                        Object.entries(wine.tech_specs).map(([label, val]) => (
                          <div key={label} className="mb-8 last:mb-0">
                            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2">{label.replaceAll("_", " ")}</p>
                            <p className="text-sm text-[#C6AC8F] leading-relaxed">{val}</p>
                          </div>
                        ))
                      ) : (
                        <p className="text-xs text-slate-600 italic">Advanced tech specs for this appellation are being finalized.</p>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* VIEW: GRAPES */}
        {view === "grapes" && (
          <div className="animate-fadeIn">
            <h2 className="text-9xl font-serif mb-6 italic text-[#E2725B]">Genetics</h2>
            <p className="text-xl text-[#C6AC8F] mb-24 border-l-2 border-[#E2725B] pl-8 max-w-2xl">
              The technical pedigree and chemical analysis of the world's noble varieties.
            </p>

            <div className="space-y-40">
              {allGrapes.map((grape) => (
                <div key={grape.id} id={grape.id} className="grid grid-cols-1 lg:grid-cols-12 gap-16 scroll-mt-32">
                  <div className="lg:col-span-7">
                    <h3 className="text-7xl font-bold mb-4">{grape.name}</h3>
                    <p className="text-[#E2725B] font-mono text-xs uppercase tracking-[0.3em] mb-10">
                      {grape.origin} • {grape.style}
                    </p>

                    <p className="text-2xl text-[#F4F1DE] font-serif italic mb-8 opacity-90 leading-relaxed">"{grape.summary}"</p>
                    <p className="text-[#A9927D] text-lg leading-relaxed mb-12">{grape.description}</p>

                    <div className="bg-[#111] p-10 rounded-[3rem] border border-white/5">
                      <p className="text-[10px] font-black text-[#E2725B] uppercase tracking-[0.4em] mb-8">Pedigree & Viticulture</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {grape.technical &&
                          Object.entries(grape.technical).map(([key, value]) => (
                            <div key={key}>
                              <p className="text-[9px] uppercase text-slate-500 font-black mb-2 tracking-widest">{key.replaceAll("_", " ")}</p>
                              <p className="text-sm text-[#C6AC8F] leading-relaxed">{value}</p>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-[#111] p-12 rounded-[4rem] border border-white/5 h-fit sticky top-32">
                    <p className="text-[10px] font-black text-[#E2725B] uppercase tracking-[0.4em] mb-12">Phenolic Analysis</p>

                    <PowerBar label="Acidity" level={grape.stats?.acidity ?? 0} />
                    <PowerBar label="Tannin" level={grape.stats?.tannin ?? 0} />
                    <PowerBar label="Body" level={grape.stats?.body ?? 0} />
                    <PowerBar label="Alcohol" level={grape.stats?.alcohol ?? 0} />

                    <div className="mt-12 pt-10 border-t border-white/5">
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6">Aromatic Profile</p>
                      <div className="flex flex-wrap gap-3">
                        {(grape.flavors ?? []).map((f) => (
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

        {/* VIEW: ACADEMY */}
        {view === "academy" && (
          <div className="animate-fadeIn">
            <div className="mb-20">
              <h2 className="text-8xl font-serif italic mb-6 text-[#E2725B]">Academy.</h2>
              <p className="text-slate-500 max-w-2xl uppercase tracking-widest text-xs leading-loose">
                WSET-style concepts turned into modular lessons. This is the knowledge base that will power dynamic quizzes next.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {lessons.map((l) => (
                <div
                  key={l.id}
                  onClick={() => navigate("lesson", null, null, l.id)}
                  className="group relative p-12 bg-[#111] rounded-[4rem] border border-white/5 hover:border-[#E2725B]/30 cursor-pointer transition-all"
                >
                  <span className="text-[10px] font-black text-[#E2725B] uppercase tracking-widest mb-4 block">
                    Module_{l.id}
                  </span>
                  <h3 className="text-5xl font-bold mb-4 group-hover:translate-x-2 transition-transform">{l.title}</h3>
                  <p className="text-[#A9927D] text-lg leading-relaxed mb-6">
                    {l.read_time} • Knowledge Pack
                  </p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Open lesson →</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: LESSON */}
        {view === "lesson" && activeLesson && (
          <div className="animate-fadeIn">
            <button
              onClick={() => navigate("academy")}
              className="text-[#E2725B] font-black text-[10px] uppercase tracking-[0.3em] mb-12 hover:pl-2 transition-all"
            >
              ← Back to Academy
            </button>

            <header className="mb-16 border-b border-white/5 pb-16">
              <h2 className="text-7xl font-serif italic text-[#E2725B] mb-4">{activeLesson.title}</h2>
              <p className="text-slate-500 uppercase tracking-widest text-xs">{activeLesson.read_time}</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Lesson content */}
              <div className="lg:col-span-7 space-y-10">
                {activeLesson.sections.map((s, idx) => (
                  <div key={idx} className="p-10 bg-[#111] rounded-[3rem] border border-white/5">
                    <p className="text-[10px] font-black text-[#E2725B] uppercase tracking-[0.4em] mb-4">Section {String(idx + 1).padStart(2, "0")}</p>
                    <h3 className="text-3xl font-bold mb-6">{s.title}</h3>
                    <ul className="space-y-3 text-[#C6AC8F] leading-relaxed">
                      {s.bullets.map((b, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-[#E2725B] font-black">—</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Terms sidebar */}
              <div className="lg:col-span-5 sticky top-28 h-fit">
                <div className="p-10 bg-[#111] rounded-[3rem] border border-white/5">
                  <p className="text-[10px] font-black text-[#E2725B] uppercase tracking-[0.4em] mb-8">Key Terms</p>

                  <div className="space-y-6">
                    {activeLessonTerms.map((t) => (
                      <div key={t.id} className="p-6 bg-white/[0.02] rounded-2xl border border-white/5">
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 font-black mb-2">{t.category}</p>
                        <p className="text-lg font-bold mb-2">{t.title}</p>
                        <p className="text-sm text-[#C6AC8F] leading-relaxed mb-4">{t.definition}</p>
                        {t.bullets?.length ? (
                          <ul className="space-y-2 text-xs text-slate-400 leading-relaxed">
                            {t.bullets.map((b, i) => (
                              <li key={i} className="flex gap-2">
                                <span className="text-[#E2725B] font-black">•</span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 p-8 bg-[#111] rounded-[3rem] border border-white/5">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Next</p>
                  <p className="text-sm text-[#C6AC8F] leading-relaxed">
                    Step 3 will use these Terms + Lessons to generate quizzes automatically (MCQ, True/False, Matching).
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
