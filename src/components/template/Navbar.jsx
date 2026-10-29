import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import siteConfig from "../../siteConfig";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { brand, nav } = siteConfig;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0B2545]/95 backdrop-blur-md border-b border-white/5 py-2" : "bg-transparent py-3"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-white font-black text-lg tracking-widest" aria-label={brand.name}>
          {brand.logo ? (
            <img
              src={brand.logo}
              alt="Quirino Consultoria"
              className="h-[92px] md:h-[106px] w-auto"
            />
          ) : (
            brand.name
          )}
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {nav.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-white/60 hover:text-white text-sm font-medium tracking-wider uppercase transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={nav.cta.href}
          className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-semibold tracking-wider uppercase transition-all duration-200"
          style={{ backgroundColor: siteConfig.accent, color: "#000" }}
        >
          {nav.cta.label}
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0B2545] border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/70 hover:text-white text-base font-medium tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center px-5 py-3 text-sm font-bold tracking-wider uppercase"
            style={{ backgroundColor: siteConfig.accent, color: "#000" }}
          >
            {nav.cta.label}
          </a>
        </div>
      )}
    </header>
  );
}