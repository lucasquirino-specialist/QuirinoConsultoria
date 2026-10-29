import { motion } from "framer-motion";
import { Scale, TrendingUp, BarChart2, Workflow, Check } from "lucide-react";
import siteConfig from "../../siteConfig";

const iconMap = { Scale, TrendingUp, BarChart2, Workflow };

export default function Services() {
  const { services, accent } = siteConfig;
  const lines = services.headline.split("\n");

  return (
    <section id="services" className="bg-[#0B2545] py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: accent }}>
            {services.badge}
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.95] tracking-tight">
            {lines.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.items.map((service, i) => {
            const Icon = iconMap[service.icon] || Scale;
            const hl = service.highlight;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className={`p-8 md:p-10 flex flex-col gap-6 transition-all duration-300 ${
                  hl ? "text-[#0B2545]" : "bg-[#12335E] border border-white/5 text-white hover:border-white/20"
                }`}
                style={hl ? { backgroundColor: accent } : {}}
              >
                <Icon size={30} className={hl ? "text-[#0B2545]" : "text-white/50"} />
                <div>
                  <h3 className="text-2xl font-black mb-2">{service.title}</h3>
                  <p className={`text-sm leading-relaxed ${hl ? "text-[#0B2545]/80" : "text-white/60"}`}>
                    {service.description}
                  </p>
                </div>
                <ul className={`space-y-3 pt-5 border-t ${hl ? "border-black/10" : "border-white/10"}`}>
                  {service.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm leading-relaxed">
                      <Check size={16} className="mt-0.5 shrink-0" style={hl ? {} : { color: accent }} />
                      <span className={hl ? "" : "text-white/80"}>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}