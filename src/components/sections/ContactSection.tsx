import { motion } from 'motion/react';
import { Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../../data/content';

export default function ContactSection() {
  return (
    <section id="iletisim" className="py-32 px-6 max-w-4xl mx-auto text-center" aria-label="İletişim">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8 p-12 rounded-3xl bg-gradient-to-b from-slate-800/50 to-transparent border border-white/5"
      >
        <h2 className="text-3xl md:text-5xl font-bold">
          Birlikte{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Çalışalım
          </span>
        </h2>
        <p className="text-slate-400 text-lg">
          Yeni projeler ve işbirlikleri için benimle iletişime geçebilirsiniz.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-3 px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 w-full md:w-auto justify-center group"
          >
            <Mail className="text-purple-400 group-hover:scale-110 transition-transform" />
            <span>{personalInfo.email}</span>
          </a>
          <div className="flex items-center gap-3 px-6 py-4 rounded-full bg-white/5 border border-white/10 w-full md:w-auto justify-center">
            <MapPin className="text-blue-400" />
            <span>{personalInfo.location}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
