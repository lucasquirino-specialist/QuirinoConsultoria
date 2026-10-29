import { motion } from "framer-motion";
import siteConfig from "../../siteConfig";

export default function About() {
  const { about, accent } = siteConfig;
  const lines = about.headline.split("\n");

  return (
    <section id="about" className="bg-white py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src={about.image}
            alt="Equipe Quirino Consultoria"
            className="w-full aspect-[4/5] object-cover"
          />
          {/* Accent border decoration */}
          <div
            className="absolute -bottom-4 -right-4 w-1/2 h-1/2 border-4 -z-10"
            style={{ borderColor: accent }}
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-xs font-bold tracking-[0.3em] uppercase mb-5"
            style={{ color: accent }}
          >
            {about.badge}
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-[#0B2545] leading-[0.95] tracking-tight mb-8">
            {lines.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>

          <p className="text-zinc-500 text-lg leading-relaxed mb-12">
            {about.body}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 border-t border-zinc-100 pt-10">
            {about.stats.map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl font-black mb-1"
                  style={{ color: accent }}
                >
                  {stat.value}
                </div>
                <div className="text-zinc-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}