import { motion } from "framer-motion";
import siteConfig from "../../siteConfig";

export default function Methodology() {
  const { metodologia, accent } = siteConfig;
  const lines = metodologia.headline.split("\n");

  return (
    <section id="metodologia" className="bg-zinc-50 py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: accent }}>
          {metodologia.badge}
        </p>
        <h2 className="text-4xl md:text-6xl font-black text-[#0B2545] leading-[0.95] tracking-tight mb-16">
          {lines.map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metodologia.steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-zinc-100 p-8"
            >
              <div
                className="w-10 h-10 flex items-center justify-center font-black text-[#0B2545] mb-6"
                style={{ backgroundColor: accent }}
              >
                {i + 1}
              </div>
              <h3 className="text-xl font-black text-[#0B2545] mb-3">{step.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="border-l-4 bg-white p-8 md:p-12" style={{ borderColor: accent }}>
          <h3 className="text-2xl md:text-3xl font-black text-[#0B2545] mb-4">{metodologia.why.title}</h3>
          <p className="text-zinc-500 text-lg leading-relaxed max-w-4xl">{metodologia.why.body}</p>
        </div>
      </div>
    </section>
  );
}