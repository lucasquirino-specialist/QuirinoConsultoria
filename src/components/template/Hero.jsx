import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import siteConfig from "../../siteConfig";

export default function Hero() {
  const { hero, accent } = siteConfig;
  const lines = hero.headline.split("\n");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0B2545]">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={hero.image}
          alt="Hero"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545] via-[#0B2545]/80 to-transparent" />
      </div>

      {/* Accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ backgroundColor: accent }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm font-bold tracking-[0.3em] uppercase mb-6"
            style={{ color: accent }}
          >
            {siteConfig.brand.tagline}
          </motion.p>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tight mb-8">
            {lines.map((line, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="text-white/60 text-lg md:text-xl leading-relaxed max-w-xl mb-10"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={hero.cta.href}
              className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:gap-5"
              style={{ backgroundColor: accent, color: "#000" }}
            >
              {hero.cta.label}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-widest uppercase border border-white/20 text-white hover:border-white/50 transition-all duration-300"
            >
              {hero.secondaryCta.label}
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-6 flex items-center gap-3"
        >
          <div className="w-8 h-px bg-white/30" />
          <span className="text-white/30 text-xs tracking-widest uppercase">Role para baixo</span>
        </motion.div>
      </div>
    </section>
  );
}