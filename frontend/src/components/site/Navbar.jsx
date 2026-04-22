import React, { useEffect, useState } from "react";
import { KatanaIcon } from "./WaveDecor";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = links.map((l) => document.getElementById(l.id));
      const current = sections.find((s) => {
        if (!s) return false;
        const rect = s.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleGo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-[#121212]/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      {/* gradient accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#F5B700] via-[#FFDA6B] to-[#7FB069] opacity-70" />

      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <button
          onClick={() => handleGo("home")}
          className="flex items-center gap-3 group"
          aria-label="Go to top"
        >
          <KatanaIcon className="w-12 h-3" />
          <span className="font-serif tracking-[0.35em] text-[#F5EFD6] text-sm hidden sm:inline group-hover:text-[#FFDA6B] transition-colors">
            WESLING
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.id} className="flex flex-col items-center">
              <button
                onClick={() => handleGo(l.id)}
                className={`font-serif text-[15px] tracking-[0.2em] uppercase transition-colors ${
                  active === l.id
                    ? "text-[#FFDA6B]"
                    : "text-[#EDE4C0] hover:text-[#FFDA6B]"
                }`}
              >
                {l.label}
              </button>
              {active === l.id && (
                <KatanaIcon className="w-10 h-2 mt-1" color="#FFDA6B" />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Open menu"
        >
          <span
            className={`block h-[2px] w-6 bg-[#FFDA6B] transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span className={`block h-[2px] w-6 bg-[#FFDA6B] ${open ? "opacity-0" : "opacity-100"}`} />
          <span
            className={`block h-[2px] w-6 bg-[#FFDA6B] transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#141414] border-t border-white/5">
          <ul className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => handleGo(l.id)}
                  className={`w-full text-left py-3 font-serif tracking-[0.2em] uppercase ${
                    active === l.id ? "text-[#FFDA6B]" : "text-[#EDE4C0]"
                  }`}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
