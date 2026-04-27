import { motion } from 'motion/react';
import { GraduationCap, Briefcase } from 'lucide-react';
import { education, experience } from '../../data/content';
import TimelineItem from '../ui/TimelineItem';

export default function ResumeSection() {
  return (
    <section id="ozgecmis" className="py-20 bg-slate-800/50 border-y border-white/5" aria-label="Özgeçmiş">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3 text-2xl font-bold">
            <GraduationCap className="text-purple-400" />
            <h3>Eğitim</h3>
          </div>
          <div className="relative pl-8 border-l border-purple-500/30 space-y-8">
            {education.map((edu, i) => (
              <TimelineItem
                key={i}
                title={edu.institution}
                subtitle={edu.program}
                description={edu.description}
                accentColor="purple"
              />
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3 text-2xl font-bold">
            <Briefcase className="text-blue-400" />
            <h3>Deneyim & Projeler</h3>
          </div>
          <div className="relative pl-8 border-l border-blue-500/30 space-y-8">
            {experience.map((exp, i) => (
              <TimelineItem
                key={i}
                title={exp.title}
                subtitle={exp.subtitle}
                description={exp.description}
                accentColor="blue"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
