import React from "react";
import { DiagonalStripes, OceanWave, SeigaihaPattern } from "./WaveDecor";
import { technologies } from "../../data/mock";

// Tech logos (inline SVGs to avoid extra dependencies).
const TechLogo = ({ slug }) => {
  switch (slug) {
    case "html5":
      return (
        <svg viewBox="0 0 64 64" className="w-12 h-12">
          <path d="M10 6l4 44 18 6 18-6 4-44H10z" fill="#E44D26" />
          <path d="M32 10v44l14-4 3-32H32z" fill="#F16529" />
          <path d="M20 20h24l-1 8H28l1 6h14l-2 14-9 2-9-2-1-8h5l1 4 5 1 5-1 1-6H19l-2-12h25l1-6H20l-1-6z" fill="#fff" />
        </svg>
      );
    case "css3":
      return (
        <svg viewBox="0 0 64 64" className="w-12 h-12">
          <path d="M10 6l4 44 18 6 18-6 4-44H10z" fill="#264DE4" />
          <path d="M32 10v44l14-4 3-32H32z" fill="#2965F1" />
          <path d="M20 20h24l-1 6H26l1 6h16l-1 12-9 3-9-3-1-6h5l1 3 4 1 4-1 1-6H19l-2-12h27l1-3H20l-1-3z" fill="#fff" />
        </svg>
      );
    case "javascript":
      return (
        <svg viewBox="0 0 64 64" className="w-12 h-12">
          <rect width="64" height="64" rx="6" fill="#F7DF1E" />
          <path d="M32 50c0 4-2 6-6 6-3 0-5-1-6-4l4-2c1 2 2 2 3 2s2-1 2-3V30h5v20zm10 6c-4 0-7-2-9-5l4-2c1 2 3 3 5 3 2 0 3-1 3-2 0-2-1-3-5-4-4-2-7-3-7-7 0-4 3-6 7-6 3 0 5 1 7 4l-4 2c-1-2-2-2-4-2s-3 1-3 2c0 2 1 2 5 4 5 2 7 4 7 8-1 4-4 5-8 5z" fill="#111" />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 64 64" className="w-12 h-12">
          <circle cx="32" cy="32" r="4" fill="#61DAFB" />
          <g fill="none" stroke="#61DAFB" strokeWidth="2">
            <ellipse cx="32" cy="32" rx="22" ry="8" />
            <ellipse cx="32" cy="32" rx="22" ry="8" transform="rotate(60 32 32)" />
            <ellipse cx="32" cy="32" rx="22" ry="8" transform="rotate(120 32 32)" />
          </g>
        </svg>
      );
    case "figma":
      return (
        <svg viewBox="0 0 64 64" className="w-12 h-12">
          <path d="M24 6h8v20h-8a10 10 0 010-20z" fill="#F24E1E" />
          <path d="M32 6h8a10 10 0 010 20h-8V6z" fill="#FF7262" />
          <path d="M32 26h8a10 10 0 010 20 10 10 0 010-20z" fill="#A259FF" />
          <path d="M24 26h8v20h-8a10 10 0 010-20z" fill="#1ABCFE" />
          <path d="M14 56a10 10 0 0010 10h0v-20h0a10 10 0 00-10 10z" fill="#0ACF83" />
        </svg>
      );
    default:
      return null;
  }
};

const Technologies = () => {
  const goProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="tech"
      className="relative py-24 px-6 md:px-10 bg-[#111111] overflow-hidden"
    >
      <SeigaihaPattern className="absolute top-10 right-[-80px] w-[360px] h-[180px] opacity-15" />

      <div className="relative max-w-6xl mx-auto">
        {/* title badge */}
        <div className="flex justify-center mb-14">
          <div className="relative inline-block">
            <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-2xl bg-[#8a5f00]" />
            <h2 className="relative rounded-2xl bg-gradient-to-b from-[#FFDA6B] to-[#F5B700] px-10 md:px-16 py-4 font-display tracking-[0.25em] text-[#1A1A1A] text-3xl md:text-4xl shadow-[0_20px_40px_-15px_rgba(245,183,0,0.6)]">
              TECNOLOGIAS
            </h2>
          </div>
        </div>

        {/* icons strip */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-[#F5B700]/50 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.8)]">
          <DiagonalStripes className="absolute inset-0 w-full h-full" />
          <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-8">
            {technologies.map((tech) => (
              <div
                key={tech.slug}
                className="group relative flex flex-col items-center gap-3 py-4"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#FFE8A8] border border-[#F5B700] flex items-center justify-center shadow-[0_10px_25px_-10px_rgba(0,0,0,0.4)] group-hover:-translate-y-1 transition-transform duration-300">
                  <TechLogo slug={tech.slug} />
                </div>
                <span className="font-display tracking-[0.2em] text-[#1A1A1A] text-xs uppercase">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">
          <button
            onClick={goProjects}
            className="group inline-flex items-center gap-3 rounded-full bg-[#F5B700] hover:bg-[#FFDA6B] text-[#1A1A1A] px-8 py-4 font-display tracking-[0.3em] uppercase text-sm shadow-[0_18px_40px_-12px_rgba(245,183,0,0.55)] transition-colors duration-300"
          >
            <span className="font-jp text-base tracking-normal">プロジェクト</span>
            <span className="w-px h-4 bg-[#1A1A1A]/40" />
            <span>Ver Proyectos</span>
            <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>

      <OceanWave className="absolute -bottom-8 -right-10 w-[320px] md:w-[420px] opacity-90 pointer-events-none" />
      <OceanWave className="absolute -bottom-8 -left-10 w-[260px] md:w-[340px] opacity-80 pointer-events-none" flip />
    </section>
  );
};

export default Technologies;
