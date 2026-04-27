import { useState } from 'react';
import { portfolioItems, portfolioCategories } from '../../data/content';
import type { PortfolioItem } from '../../data/content';
import SectionTitle from '../ui/SectionTitle';
import PortfolioCard from '../ui/PortfolioCard';
import PortfolioModal from '../ui/PortfolioModal';

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('Tümü');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems =
    activeCategory === 'Tümü'
      ? portfolioItems
      : portfolioItems.filter((item) => item.categorySlug === activeCategory);

  return (
    <section id="portfolyo" className="py-32 px-6 bg-slate-950" aria-label="Portfolyo">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="Seçilmiş"
          gradientText="Çalışmalar"
          description="Üniversite projeleri, freelance işler ve sosyal sorumluluk kampanyalarından örnekler."
        />

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/20'
                  : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, i) => (
            <PortfolioCard
              key={item.id}
              item={item}
              index={i}
              onClick={setSelectedItem}
            />
          ))}
        </div>

        {/* Modal */}
        <PortfolioModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      </div>
    </section>
  );
}
