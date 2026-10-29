import siteConfig from "../../siteConfig";

export default function Footer() {
  const { brand, footer, accent } = siteConfig;

  return (
    <footer className="bg-[#0B2545] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div>
          <div className="text-white font-black text-sm tracking-widest mb-1">{brand.name}</div>
          <div className="text-white/30 text-xs">{footer.tagline}</div>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-6">
          {footer.socials.map((s) => (
            <a
              key={s.platform}
              href={s.href}
              className="text-white/30 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors"
            >
              {s.platform}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-white/20 text-xs">{footer.copyright}</div>
      </div>
    </footer>
  );
}