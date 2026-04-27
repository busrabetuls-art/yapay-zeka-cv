import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';
import { personalInfo } from '../../data/content';

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section
      id="hakkimda"
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 overflow-hidden"
      aria-label="Hakkımda"
    >
      {/* Mouse-following gradient */}
      <div
        className="pointer-events-none fixed inset-0 opacity-20 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139,92,246,0.15), transparent 60%)`,
        }}
      />

      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-6 text-center md:text-left"
      >
        <h2 className="text-purple-400 font-medium tracking-wider uppercase text-sm">
          {personalInfo.title}
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Dijital Dünyayı <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {personalInfo.tagline.replace('Dijital Dünyayı ', '')}
          </span>
        </h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
          {personalInfo.description}
        </p>
        <div className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="#portfolyo"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:-translate-y-1"
          >
            Çalışmalarımı Gör
          </a>
          <a
            href="#iletisim"
            className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
          >
            İletişime Geç
          </a>
          <a
            href="/cv-busra-betul-suvari.pdf"
            download
            className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all flex items-center gap-2"
            aria-label="CV'yi indir"
          >
            <Download className="w-4 h-4" />
            CV İndir
          </a>
        </div>
      </motion.div>

      {/* Profile image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 flex justify-center md:justify-end"
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />
          <img
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            className="relative w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl"
            onError={(e) => {
              e.currentTarget.src = personalInfo.fallbackImage;
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
