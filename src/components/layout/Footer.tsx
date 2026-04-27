import { Instagram, Twitter, ArrowUp } from 'lucide-react';
import { socialLinks } from '../../data/content';

const iconMap: Record<string, React.ReactNode> = {
  Instagram: <Instagram className="w-5 h-5" />,
  Twitter: <Twitter className="w-5 h-5" />,
};

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 text-center text-slate-500">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mx-auto mb-8 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-500/20 hover:text-purple-400 transition-all group"
          aria-label="Sayfanın başına dön"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>

        {/* Social links */}
        <div className="flex justify-center gap-6 mb-6">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-500/20 hover:text-purple-400 transition-all"
            >
              {iconMap[link.iconName]}
            </a>
          ))}
        </div>

        <p>© {new Date().getFullYear()} Büşra Betül Süvari. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}
