import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Twitter, Menu, X } from 'lucide-react';
import { socialLinks } from '../../data/content';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const iconMap: Record<string, React.ReactNode> = {
  Instagram: <Instagram className="w-5 h-5" />,
  Twitter: <Twitter className="w-5 h-5" />,
};

const navLinks = [
  { href: '#hakkimda', label: 'Hakkımda' },
  { href: '#ozgecmis', label: 'Özgeçmiş' },
  { href: '#portfolyo', label: 'Portfolyo' },
  { href: '#iletisim', label: 'İletişim' },
];

export default function Navbar() {
  const isScrolled = useScrollPosition(50);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const closeMobile = () => setIsMobileOpen(false);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/80 backdrop-blur-md border-b border-white/10 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          aria-label="Ana sayfa"
        >
          BBS.
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300" aria-label="Ana navigasyon">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition-colors relative group">
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Social links + mobile toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-4">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="text-slate-400 hover:text-purple-400 transition-colors"
              >
                {iconMap[link.iconName]}
              </a>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-slate-300 hover:text-white transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={closeMobile}
            />
            {/* Panel */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-72 bg-slate-900/95 backdrop-blur-xl border-l border-white/10 p-8 flex flex-col gap-8 md:hidden z-50"
              aria-label="Mobil navigasyon"
            >
              <button
                onClick={closeMobile}
                className="self-end text-slate-400 hover:text-white"
                aria-label="Menüyü kapat"
              >
                <X className="w-6 h-6" />
              </button>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className="text-lg font-medium text-slate-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="flex gap-4 mt-auto">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:bg-purple-500/20 transition-all"
                  >
                    {iconMap[link.iconName]}
                  </a>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
