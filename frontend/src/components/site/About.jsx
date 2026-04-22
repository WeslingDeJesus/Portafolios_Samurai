import React from "react";
import { Download } from "lucide-react";
import { CloudGlyph, SeigaihaPattern } from "./WaveDecor";
import { personal, aboutImage } from "../../data/mock";

const About = () => {
  const handleDownload = () => {
    // Frontend-only: open a printable CV view in a new window.
    const w = window.open("", "_blank", "width=700,height=900");
    if (!w) return;
    w.document.write(`
      <html><head><title>CV · ${personal.name}</title>
      <style>
        body{font-family:Georgia,serif;background:#111;color:#f5efd6;padding:48px;line-height:1.6}
        h1{color:#FFDA6B;letter-spacing:.2em;text-transform:uppercase;margin:0 0 6px}
        h2{color:#F5B700;letter-spacing:.15em;text-transform:uppercase;font-size:14px;margin:28px 0 8px}
        hr{border:none;border-top:1px solid #F5B70055;margin:20px 0}
        p{margin:6px 0}
      </style></head><body>
        <h1>${personal.name}</h1>
        <p style="color:#8A8775;letter-spacing:.25em;text-transform:uppercase;font-size:12px">Web Developer · Código Samurái</p>
        <hr/>
        <h2>Perfil</h2><p>${personal.aboutP1}</p>
        <h2>Especialización</h2><p>${personal.aboutP2}</p>
        <h2>Contacto</h2>
        <p>${personal.email}</p><p>${personal.phone}</p><p>${personal.location}</p>
      </body></html>`);
    w.document.close();
    w.focus();
    w.print();
  };

  return (
    <section
      id="about"
      className="relative py-28 px-6 md:px-10 overflow-hidden"
    >
      <SeigaihaPattern className="absolute top-0 left-[-60px] w-[340px] h-[180px] opacity-15" color="#F5B700" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-14 items-center">
        {/* left text */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="w-10 h-px bg-[#F5B700]" />
            <span className="text-[#F5B700] font-display tracking-[0.4em] uppercase text-xs">About</span>
            <span className="font-jp text-[#8A8775] text-sm">私について</span>
          </div>

          <div className="flex gap-4 mb-6">
            <CloudGlyph className="w-12 h-8 shrink-0 mt-1" color="#F5EFD6" />
            <p className="font-script text-[22px] md:text-[25px] leading-[1.55] text-[#F5EFD6] max-w-xl">
              {personal.aboutP1}
            </p>
          </div>

          <p className="font-script text-[20px] md:text-[23px] leading-[1.6] text-[#EDE4C0]/95 max-w-xl mb-6 pl-16">
            {personal.aboutP2.split("REACT").map((chunk, i, arr) =>
              i < arr.length - 1 ? (
                <React.Fragment key={i}>
                  {chunk}
                  <span className="font-display text-[#FFDA6B] tracking-widest">REACT</span>
                </React.Fragment>
              ) : (
                <React.Fragment key={i}>{chunk}</React.Fragment>
              )
            )}
          </p>

          <p className="font-script text-[20px] md:text-[23px] leading-[1.6] text-[#F5EFD6] max-w-xl pl-16 mb-10">
            {personal.aboutCTA}
          </p>

          <button
            onClick={handleDownload}
            className="group inline-flex items-center gap-3 rounded-full bg-[#F5B700] hover:bg-[#FFDA6B] text-[#1A1A1A] pl-6 pr-3 py-3 font-display tracking-[0.25em] uppercase text-sm shadow-[0_14px_30px_-10px_rgba(245,183,0,0.55)] transition-colors duration-300"
          >
            <span>Descargar CV</span>
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#1A1A1A] text-[#FFDA6B] group-hover:scale-105 transition-transform">
              <Download size={16} />
            </span>
          </button>
        </div>

        {/* right portrait */}
        <div className="lg:col-span-6 order-1 lg:order-2 relative">
          <SeigaihaPattern className="absolute -top-10 -right-10 w-[280px] h-[140px] opacity-40" />
          <div className="relative mx-auto w-[340px] h-[340px] md:w-[420px] md:h-[420px]">
            <div className="absolute inset-0 rounded-full border-2 border-[#F5B700]/60" />
            <div className="absolute inset-3 rounded-full overflow-hidden border border-[#F5B700]/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]">
              <img
                src={aboutImage}
                alt="Samurai mask portrait"
                className="w-full h-full object-cover contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111]/60 via-transparent to-transparent" />
            </div>
            {/* floating clouds */}
            <CloudGlyph className="absolute -top-6 -left-8 w-20 h-12" color="#F5B700" />
            <CloudGlyph className="absolute bottom-4 -right-10 w-24 h-14" color="#F5B700" />
          </div>
        </div>
      </div>

      {/* lateral decorations handled globally by ParallaxClouds */}
    </section>
  );
};

export default About;
