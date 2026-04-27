import { skills } from '../../data/content';
import SectionTitle from '../ui/SectionTitle';
import SkillCard from '../ui/SkillCard';

export default function SkillsSection() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto" aria-label="Teknik Yetkinlikler">
      <SectionTitle
        label="Teknik"
        gradientText="Yetkinlikler"
        description="Prodüksiyon ve post-prodüksiyon süreçlerinde kullandığım temel araçlar ve teknolojiler."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <SkillCard key={i} skill={skill} index={i} />
        ))}
      </div>
    </section>
  );
}
