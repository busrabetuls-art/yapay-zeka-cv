import { motion } from 'motion/react';
import type { PortfolioItem } from '../../data/content';

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
  onClick: (item: PortfolioItem) => void;
}

export default function PortfolioCard({ item, index, onClick }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
      onClick={() => onClick(item)}
      role="button"
      tabIndex={0}
      aria-label={`${item.title} projesini görüntüle`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(item);
        }
      }}
    >
      <img
        src={item.img}
        alt={`${item.title} - ${item.category}`}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <p className="text-purple-400 text-sm font-medium mb-1">{item.category}</p>
        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
      </div>
    </motion.div>
  );
}
