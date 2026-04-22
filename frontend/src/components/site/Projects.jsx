import React, { useState } from "react";
import { ArrowRight, ShoppingBag, Github, Linkedin, Twitter, Facebook } from "lucide-react";
import { projects } from "../../data/mock";
import { OceanWave, SeigaihaPattern } from "./WaveDecor";

// Small inline "preview" renderers so the cards feel alive.
const ProjectPreview = ({ type }) => {
  switch (type) {
    case "postres":
      return (
        <div className="grid grid-cols-3 gap-3 p-6 h-full">
          {[
            "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=200",
            "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=200",
            "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=200",
            "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=200",
            "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=200",
            "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200",
          ].map((src, i) => (
            <div
              key={i}
              className="aspect-square rounded-full overflow-hidden border-2 border-white/80 shadow-md"
            >
              <img src={src} alt="postre" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      );
    case "gear5":
      return (
        <div className="relative h-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFE7A8] via-[#FFC857] to-[#FF4B2B]" />
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_70%_30%,#fff,transparent_50%)]" />
          <span className="relative font-display text-white text-[78px] md:text-[96px] tracking-tight drop-shadow-[0_6px_0_rgba(0,0,0,0.4)]">
            GEAR<span className="text-[#FF4B2B]">5</span>
          </span>
        </div>
      );
    case "keyboard":
      return (
        <div className="h-full flex flex-col justify-center p-6">
          <div className="grid grid-cols-10 gap-1.5">
            {Array.from({ length: 30 }).map((_, i) => {
              const colors = ["#1A1A1A", "#F5B700", "#FF4B2B", "#1ABCFE", "#A259FF", "#E44D26"];
              const c = colors[(i * 7) % colors.length];
              return (
                <div
                  key={i}
                  className="aspect-square rounded-md"
                  style={{ background: c, opacity: 0.9 }}
                />
              );
            })}
          </div>
          <div className="mt-3 h-5 rounded-md bg-[#1A1A1A]" />
        </div>
      );
    case "login":
      return (
        <div className="h-full flex flex-col justify-center p-6 gap-3">
          <div className="font-display text-[#1A1A1A] tracking-[0.25em] text-sm">INICIAR SESIÓN</div>
          <div className="rounded-lg border border-[#1A1A1A]/20 px-3 py-2 text-xs text-[#1A1A1A]/60">
            Username
          </div>
          <div className="rounded-lg border border-[#1A1A1A]/20 px-3 py-2 text-xs text-[#1A1A1A]/60">
            ••••••••
          </div>
          <button className="rounded-lg bg-[#E11D48] text-white text-xs font-display tracking-[0.3em] py-2">
            LOGIN
          </button>
          <div className="text-[10px] text-[#1A1A1A]/60 text-center">o inicia sesión con</div>
          <div className="flex justify-center gap-2">
            {[Facebook, Twitter, Github, Linkedin].map((Icon, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center"
              >
                <Icon size={12} />
              </div>
            ))}
          </div>
        </div>
      );
    case "nike":
      return (
        <div className="h-full flex flex-col p-5 gap-3">
          <div className="flex gap-2">
            {["#FDE68A", "#F9A8D4", "#C4B5FD"].map((c, i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: c }}
              >
                <ShoppingBag size={18} className="text-[#1A1A1A]" />
              </div>
            ))}
          </div>
          <div className="mt-1">
            <div className="font-display tracking-[0.2em] text-[#1A1A1A] text-sm">
              NIKE AIR ZOOM
            </div>
            <div className="text-[10px] text-[#1A1A1A]/60 tracking-widest mt-1">
              SIZE: 42 · COLOR: MAUVE
            </div>
          </div>
          <div className="flex-1 rounded-2xl bg-gradient-to-br from-[#F2B5B5] to-[#7C3AED]/60 flex items-center justify-center">
            <div className="w-24 h-10 rounded-full bg-white/80 shadow-inner" />
          </div>
          <button className="rounded-full bg-[#7C3AED] text-white font-display tracking-[0.3em] text-xs py-2">
            ADD TO CART
          </button>
        </div>
      );
    case "menu":
      return (
        <div className="h-full flex flex-col justify-center px-6 gap-2">
          {["HOME", "ABOUT", "SERVICES", "PORTFOLIO", "TEAM", "CONTACT"].map(
            (l) => (
              <div
                key={l}
                className="flex items-center justify-between py-1.5 border-b border-[#FFDA6B]/30"
              >
                <span className="font-display tracking-[0.3em] text-[#FFDA6B] text-sm">
                  {l}
                </span>
                <ArrowRight size={14} className="text-[#FFDA6B]" />
              </div>
            )
          )}
        </div>
      );
    default:
      return null;
  }
};

const Projects = () => {
  const [active, setActive] = useState(null);
  return (
    <section
      id="projects"
      className="relative py-28 px-6 md:px-10 bg-[#111111] overflow-hidden"
    >
      <SeigaihaPattern className="absolute top-10 left-[-60px] w-[320px] h-[160px] opacity-15" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-10">
        {/* side label */}
        <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start gap-4">
          <div className="relative">
            <div className="rounded-full bg-gradient-to-b from-[#FFDA6B] to-[#F5B700] px-5 py-12 lg:py-16">
              <span
                className="font-display tracking-[0.5em] text-[#1A1A1A] text-xl lg:text-2xl font-black"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                PROYECTOS
              </span>
            </div>
          </div>
          <div className="hidden lg:block text-[11px] tracking-[0.35em] uppercase text-[#8A8775] font-mono">
            06 piezas<br />seleccionadas
          </div>
        </div>

        {/* project grid */}
        <div className="lg:col-span-10 grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((p) => (
            <article
              key={p.id}
              onMouseEnter={() => setActive(p.id)}
              onMouseLeave={() => setActive(null)}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#1a1a1a] shadow-[0_18px_40px_-20px_rgba(0,0,0,0.8)] hover:-translate-y-1 transition-transform duration-300"
            >
              <div
                className="h-[220px] w-full"
                style={{ background: p.bg }}
              >
                <ProjectPreview type={p.type} />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#F5B700] font-mono">
                    {p.category}
                  </span>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#8A8775] font-mono">
                    case · {p.id}
                  </span>
                </div>
                <h3 className="font-display text-[#F5EFD6] tracking-[0.2em] text-lg">
                  {p.title}
                  {p.subtitle && (
                    <span className="block text-[#FFDA6B]/90 text-sm mt-1 tracking-[0.25em]">
                      {p.subtitle}
                    </span>
                  )}
                </h3>
                <p
                  className={`mt-2 text-sm text-[#b8b4a0] leading-relaxed transition-all duration-300 ${
                    active === p.id ? "opacity-100" : "opacity-80"
                  }`}
                >
                  {p.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-[#FFDA6B]">
                  Ver caso <ArrowRight size={12} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <OceanWave className="absolute -bottom-8 right-[-40px] w-[320px] md:w-[400px] opacity-90 pointer-events-none" />
    </section>
  );
};

export default Projects;
