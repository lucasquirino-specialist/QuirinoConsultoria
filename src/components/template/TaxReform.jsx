import { motion } from "framer-motion";
import siteConfig from "../../siteConfig";

export default function TaxReform() {
  const { reforma, accent } = siteConfig;
  const lines = reforma.headline.split("\n");

  return (
    <section id="reforma" className="bg-white py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-end mb-14">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: accent }}>
              {reforma.badge}
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-[#0B2545] leading-[0.95] tracking-tight">
              {lines.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h2>
          </div>
          <p className="text-zinc-500 text-lg leading-relaxed">{reforma.intro}</p>
        </div>

        <div className="hidden md:grid grid-cols-3 bg-[#0B2545] text-white text-xs font-bold tracking-widest uppercase">
          {reforma.columns.map((c) => (
            <div key={c} className="px-6 py-4">{c}</div>
          ))}
        </div>

        {reforma.rows.map((row, i) => (
          <motion.div
            key={row[0]}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="grid md:grid-cols-3 border-b border-zinc-100 even:bg-zinc-50"
          >
            <div className="px-6 pt-6 md:py-6 font-black text-[#0B2545]">{row[0]}</div>
            <div className="px-6 py-2 md:py-6 text-zinc-500 text-sm leading-relaxed">{row[1]}</div>
            <div className="px-6 pb-6 pt-2 md:py-6 text-zinc-700 text-sm leading-relaxed font-medium">{row[2]}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}