import { motion } from 'motion/react';
import { MonitorPlay, Camera, Sparkles, Palette } from 'lucide-react';
import type { Skill } from '../../data/content';

const iconMap: Record<string, React.ReactNode> = {
  MonitorPlay: <MonitorPlay className="w-8 h-8" />,
  Camera: <Camera className="w-8 h-8" />,
  Sparkles: <Sparkles className="w-8 h-8" />,
  Palette: <Palette className="w-8 h-8" />,
};

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md hover:bg-white/[0.04] transition-all overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
          {iconMap[skill.iconName]}
        </div>
        <h3 className="text-xl font-semibold text-slate-200 mb-3">{skill.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">{skill.description}</p>
        <div className="flex flex-wrap gap-2">
          {skill.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
