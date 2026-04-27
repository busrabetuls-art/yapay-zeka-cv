import { motion } from 'motion/react';

interface SectionTitleProps {
  label: string;
  gradientText: string;
  description?: string;
}

export default function SectionTitle({ label, gradientText, description }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {label}{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          {gradientText}
        </span>
      </h2>
      {description && (
        <p className="text-slate-400 max-w-2xl mx-auto">{description}</p>
      )}
    </motion.div>
  );
}
