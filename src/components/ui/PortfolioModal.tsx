import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import type { PortfolioItem } from '../../data/content';

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export default function PortfolioModal({ item, onClose }: PortfolioModalProps) {
  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [item]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${item.title} detayları`}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image */}
            <div className="relative aspect-video">
              <img
                src={item.img}
                alt={`${item.title} - ${item.category}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-8 -mt-16 relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium border border-purple-500/30 mb-4">
                {item.category}
              </span>
              <h3 className="text-3xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm mb-6">{item.year}</p>
              <p className="text-slate-300 leading-relaxed mb-8">{item.description}</p>

              {/* Tools */}
              <div>
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Kullanılan Araçlar
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 rounded-xl bg-white/5 text-slate-300 text-sm border border-white/10"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
