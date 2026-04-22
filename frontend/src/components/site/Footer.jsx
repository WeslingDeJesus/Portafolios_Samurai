import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { KatanaIcon } from "./WaveDecor";
import { personal } from "../../data/mock";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-[#0c0c0c] border-t border-white/5 py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <KatanaIcon className="w-12 h-3" />
          <span className="font-serif tracking-[0.3em] text-[#F5EFD6] text-xs uppercase">
            {personal.name} · Código Samurái
          </span>
        </div>

        <div className="flex items-center gap-5 text-[#8A8775]">
          {[
            { Icon: Github, label: "Github" },
            { Icon: Linkedin, label: "LinkedIn" },
            { Icon: Twitter, label: "Twitter" },
            { Icon: Mail, label: "Email" },
          ].map(({ Icon, label }) => (
            <button
              key={label}
              aria-label={label}
              className="w-9 h-9 rounded-full border border-[#F5B700]/40 flex items-center justify-center hover:bg-[#F5B700] hover:text-[#1A1A1A] transition-colors"
            >
              <Icon size={15} />
            </button>
          ))}
        </div>

        <div className="text-[11px] tracking-[0.3em] uppercase text-[#8A8775] font-mono">
          © {year} · Built with purpose
        </div>
      </div>
    </footer>
  );
};

export default Footer;
