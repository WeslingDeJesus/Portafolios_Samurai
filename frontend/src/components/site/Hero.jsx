import React from "react";
import { CloudGlyph, OceanWave, SeigaihaPattern } from "./WaveDecor";
import { personal, heroImage } from "../../data/mock";

const Hero = () => {
  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 px-6 md:px-10 overflow-hidden bg-[#111111]"
    >
      {/* subtle seigaiha top-right */}
      <SeigaihaPattern
        className="absolute top-24 right-[-60px] w-[420px] h-[220px] opacity-20"
        color="#F5B700"
      />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
        {/* Left: vertical badge + portrait */}
        <div className="lg:col-span-6 relative flex gap-4 md:gap-6 items-stretch">
          {/* vertical yellow badge */}
          <div className="shrink-0 w-[72px] md:w-[92px] rounded-2xl bg-gradient-to-b from-[#FFDA6B] via-[#F5B700] to-[#E09A00] relative overflow-hidden shadow-[0_20px_40px_-12px_rgba(245,183,0,0.35)]">
            <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.6),transparent_55%)]" />
            <div className="h-full flex items-center justify-center py-10">
              <span
                className="block font-display text-[#1A1A1A] text-[34px] md:text-[42px] tracking-[0.35em] font-black leading-none"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                {personal.role}
              </span>
            </div>
          </div>

          {/* portrait */}
          <div className="relative flex-1 rounded-[28px] overflow-hidden bg-[#1c1c1c] border border-[#F5B700]/30 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.8)] aspect-[4/5] max-h-[560px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#F5B700]/15 via-transparent to-transparent z-10 pointer-events-none" />
            <img
              src={heroImage}
              alt="Masked developer portrait"
              className="w-full h-full object-cover grayscale-[30%] contrast-110"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono tracking-[0.25em] text-[#F5EFD6] z-20">
              <span>侍 · CODE</span>
              <span>01 / 04</span>
            </div>
          </div>
        </div>

        {/* Right: copy */}
        <div className="lg:col-span-6 relative">
          <div className="flex items-start gap-4 mb-8">
            <CloudGlyph className="w-12 h-8 shrink-0 mt-2" color="#F5EFD6" />
            <p className="font-script text-[22px] md:text-[26px] leading-[1.5] text-[#F5EFD6] max-w-xl">
              {personal.heroTagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <button
              onClick={scrollToAbout}
              className="group relative inline-flex items-center gap-3 rounded-full bg-[#F5B700] hover:bg-[#FFDA6B] text-[#1A1A1A] px-7 py-3.5 font-display tracking-[0.25em] uppercase text-sm shadow-[0_14px_30px_-10px_rgba(245,183,0,0.55)] transition-colors duration-300"
            >
              <span className="font-jp text-base">私を知る</span>
              <span className="w-px h-4 bg-[#1A1A1A]/40" />
              <span>Conóceme</span>
              <span className="ml-1 translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>

            <div className="flex items-center gap-3 text-[#8A8775] font-mono text-xs tracking-[0.3em] uppercase">
              <span className="inline-block w-10 h-px bg-[#F5B700]/70" />
              Portfolio · 2025
            </div>
          </div>

          {/* spec block */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "04", v: "Years" },
              { k: "20+", v: "Projects" },
              { k: "100%", v: "Passion" },
            ].map((s) => (
              <div key={s.v} className="border-l border-[#F5B700]/40 pl-3">
                <div className="font-display text-3xl text-[#FFDA6B] leading-none">{s.k}</div>
                <div className="mt-1 text-[11px] tracking-[0.3em] uppercase text-[#8A8775]">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* bottom right wave */}
      <OceanWave className="absolute -bottom-4 -right-10 w-[360px] md:w-[480px] opacity-90 pointer-events-none" />
    </section>
  );
};

export default Hero;
