import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "../../hooks/use-toast";
import { SeigaihaPattern } from "./WaveDecor";
import { personal } from "../../data/mock";

const fields = [
  { key: "nombre", label: "NOMBRE", placeholder: "Tu Nombre", type: "text" },
  { key: "apellido", label: "APELLIDO", placeholder: "Tu Apellido", type: "text" },
  { key: "telefono", label: "TELEFONO", placeholder: "Tu Teléfono", type: "tel" },
  { key: "email", label: "E-MAIL", placeholder: "Tu E-mail", type: "email" },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    comentarios: "",
  });
  const [loading, setLoading] = useState(false);

  const onChange = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.comentarios) {
      toast({
        title: "Faltan campos",
        description: "Por favor completa nombre, e-mail y comentarios.",
      });
      return;
    }
    setLoading(true);
    // Frontend-only submission. Later this can call an API.
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Mensaje enviado · 込む",
        description: `Gracias ${form.nombre}, te responderé muy pronto.`,
      });
      setForm({ nombre: "", apellido: "", telefono: "", email: "", comentarios: "" });
    }, 900);
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 md:px-10 overflow-hidden"
    >
      <SeigaihaPattern className="absolute top-10 right-[-80px] w-[360px] h-[180px] opacity-15" />

      {/* title */}
      <div className="relative max-w-6xl mx-auto flex justify-center mb-16">
        <div className="relative inline-block">
          <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-2xl bg-[#8a5f00]" />
          <h2 className="relative rounded-2xl bg-gradient-to-b from-[#FFDA6B] to-[#F5B700] px-10 md:px-16 py-4 font-display tracking-[0.25em] text-[#1A1A1A] text-3xl md:text-4xl shadow-[0_20px_40px_-15px_rgba(245,183,0,0.6)]">
            CONTACTAME
          </h2>
        </div>
      </div>

      <form
        onSubmit={onSubmit}
        className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-x-10 gap-y-6"
      >
        {/* left column: 4 fields */}
        <div className="space-y-5">
          {fields.map((f) => (
            <div key={f.key}>
              <label className="block mb-2 font-display tracking-[0.3em] text-[#FFDA6B] text-xs">
                {f.label}
              </label>
              <input
                type={f.type}
                value={form[f.key]}
                onChange={(e) => onChange(f.key, e.target.value)}
                placeholder={f.placeholder}
                className="w-full rounded-full bg-[#171717] border-2 border-[#F5B700]/60 focus:border-[#FFDA6B] text-[#F5EFD6] placeholder-[#8A8775] font-script text-lg px-5 py-3 outline-none transition-colors"
              />
            </div>
          ))}
        </div>

        {/* right column: comentarios */}
        <div className="flex flex-col">
          <label className="block mb-2 font-display tracking-[0.3em] text-[#FFDA6B] text-xs">
            COMENTARIOS
          </label>
          <textarea
            value={form.comentarios}
            onChange={(e) => onChange("comentarios", e.target.value)}
            placeholder="Comenta tu propuesta"
            rows={10}
            className="flex-1 min-h-[260px] rounded-3xl bg-[#171717] border-2 border-[#F5B700]/60 focus:border-[#FFDA6B] text-[#F5EFD6] placeholder-[#8A8775] font-script text-lg px-6 py-4 outline-none transition-colors resize-none"
          />

          <div className="mt-6 grid grid-cols-3 gap-3 text-[11px] tracking-[0.2em] uppercase text-[#8A8775] font-mono">
            <div className="flex items-center gap-2"><Mail size={14} className="text-[#F5B700]"/>{personal.email.split("@")[0]}</div>
            <div className="flex items-center gap-2"><Phone size={14} className="text-[#F5B700]"/>{personal.phone}</div>
            <div className="flex items-center gap-2"><MapPin size={14} className="text-[#F5B700]"/>{personal.location}</div>
          </div>
        </div>

        {/* submit button centered */}
        <div className="md:col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            disabled={loading}
            className="group relative inline-flex items-center gap-3 rounded-full bg-[#F5B700] hover:bg-[#FFDA6B] disabled:opacity-70 text-[#1A1A1A] px-10 py-4 font-display tracking-[0.3em] uppercase text-sm shadow-[0_18px_40px_-12px_rgba(245,183,0,0.55)] transition-colors duration-300"
          >
            <span className="font-jp text-base tracking-normal">込む</span>
            <span className="w-px h-4 bg-[#1A1A1A]/40" />
            <span>{loading ? "Enviando…" : "Enviar Mensaje"}</span>
          </button>
        </div>
      </form>

      {/* lateral ocean waves replaced by ParallaxClouds (global) */}
    </section>
  );
};

export default Contact;
