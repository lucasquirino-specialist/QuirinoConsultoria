import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, ChevronDown } from "lucide-react";
import siteConfig from "../../siteConfig";

export default function Contact() {
  const { contact, accent } = siteConfig;
  const lines = contact.headline.split("\n");
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Olá! Sou ${form.name} (${form.email}). Tenho interesse em: ${form.service || "diagnóstico gratuito"}.\n\n${form.message}`;
    window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contact" className="bg-white py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        {/* Left — Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-5" style={{ color: accent }}>
            {contact.badge}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#0B2545] leading-[0.95] tracking-tight mb-6">
            {lines.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
          <p className="text-zinc-500 text-lg leading-relaxed mb-12">
            {contact.subtext}
          </p>

          <div className="flex flex-col gap-5">
            {contact.email && (
              <a href={`mailto:${contact.email}`} className="flex items-center gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center border border-zinc-200 group-hover:border-zinc-400 transition-colors">
                  <Mail size={16} className="text-zinc-400" />
                </div>
                <span className="text-zinc-600 group-hover:text-[#0B2545] transition-colors text-sm">
                  {contact.email}
                </span>
              </a>
            )}
            {contact.phone && (
              <a href={`https://wa.me/${contact.whatsapp}`} className="flex items-center gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center border border-zinc-200 group-hover:border-zinc-400 transition-colors">
                  <Phone size={16} className="text-zinc-400" />
                </div>
                <span className="text-zinc-600 group-hover:text-[#0B2545] transition-colors text-sm">
                  {contact.phone}
                </span>
              </a>
            )}
            {contact.location && (
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-zinc-200">
                  <MapPin size={16} className="text-zinc-400" />
                </div>
                <span className="text-zinc-600 text-sm">{contact.location}</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <CheckCircle size={48} className="mb-5" style={{ color: accent }} />
              <h3 className="text-2xl font-black text-[#0B2545] mb-3">Mensagem pronta!</h3>
              <p className="text-zinc-500">Continue a conversa pelo WhatsApp que acabou de abrir. Retornamos o mais breve possível.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-bold tracking-widest uppercase text-zinc-400 block mb-2">Nome</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-zinc-200 px-4 py-3 text-sm text-[#0B2545] outline-none focus:border-[#0B2545] transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold tracking-widest uppercase text-zinc-400 block mb-2">E-mail</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-zinc-200 px-4 py-3 text-sm text-[#0B2545] outline-none focus:border-[#0B2545] transition-colors"
                    placeholder="voce@suaempresa.com.br"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="text-xs font-bold tracking-widest uppercase text-zinc-400 block mb-2">Serviço de interesse</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full border border-zinc-200 px-4 py-3 text-sm text-[#0B2545] outline-none focus:border-[#0B2545] transition-colors bg-white appearance-none pr-10"
                >
                  <option value="">Selecione um serviço...</option>
                  {contact.services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-4 top-1/2 translate-y-1 pointer-events-none text-zinc-400" />
              </div>

              <div>
                <label className="text-xs font-bold tracking-widest uppercase text-zinc-400 block mb-2">Mensagem</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-zinc-200 px-4 py-3 text-sm text-[#0B2545] outline-none focus:border-[#0B2545] transition-colors resize-none"
                  placeholder="Conte um pouco sobre a sua empresa e o que você precisa..."
                />
              </div>

              <button
                type="submit"
                className="group flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 self-start"
                style={{ backgroundColor: accent, color: "#000" }}
              >
                Falar com Consultor
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}