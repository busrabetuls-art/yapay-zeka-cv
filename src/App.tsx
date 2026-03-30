/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Instagram, Twitter, Mail, MapPin, GraduationCap, Briefcase, Camera, Video, MonitorPlay, Sparkles, Palette } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/mananinmaddesi?igsh=ZTc0ZG1hd3J1a3Ey&utm_source=qr", label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/bsrsvri?s=21", label: "Twitter" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-purple-500/30">
      {/* Navbar */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            BBS.
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#hakkimda" className="hover:text-white transition-colors">Hakkımda</a>
            <a href="#ozgecmis" className="hover:text-white transition-colors">Özgeçmiş</a>
            <a href="#portfolyo" className="hover:text-white transition-colors">Portfolyo</a>
            <a href="#iletisim" className="hover:text-white transition-colors">İletişim</a>
          </nav>
          <div className="flex gap-4">
            {socialLinks.map((link, i) => (
              <a key={i} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} className="text-slate-400 hover:text-purple-400 transition-colors">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hakkimda" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6 text-center md:text-left"
          >
            <h2 className="text-purple-400 font-medium tracking-wider uppercase text-sm">Yeni Medya Tasarımcısı & Video Prodüktör</h2>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Dijital Dünyayı <br/>
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Görselleştiriyorum</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
              Merhaba, ben Büşra Betül Süvari. Hikayeleri görsel bir şölene dönüştürüyor, dijital medyada iz bırakan yaratıcı içerikler üretiyorum.
            </p>
            <div className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#portfolyo" className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:-translate-y-1">
                Çalışmalarımı Gör
              </a>
              <a href="#iletisim" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all">
                İletişime Geç
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img 
                src="https://i.imgur.com/CoHKdc9.jpeg" 
                alt="Büşra Betül Süvari" 
                className="relative w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl"
                onError={(e) => {
                  // Fallback if the imgur link is not a direct image
                  e.currentTarget.src = "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop";
                }}
              />
            </div>
          </motion.div>
        </section>

        {/* Resume & Education */}
        <section id="ozgecmis" className="py-20 bg-slate-800/50 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
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
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-slate-900 border-2 border-purple-500"></div>
                  <h4 className="text-xl font-semibold text-slate-200">Üsküdar Üniversitesi</h4>
                  <p className="text-purple-400 font-medium mt-1">Yeni Medya ve İletişim (3. Sınıf)</p>
                  <p className="text-slate-400 mt-2">Modern medya araçları, dijital içerik üretimi ve iletişim stratejileri üzerine akademik eğitim.</p>
                </div>
              </div>
            </motion.div>

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
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-slate-900 border-2 border-blue-500"></div>
                  <h4 className="text-xl font-semibold text-slate-200">Haber Atölyesi</h4>
                  <p className="text-blue-400 font-medium mt-1">Üsküdar Üniversitesi (Sertifikalı)</p>
                  <p className="text-slate-400 mt-2">Haber yazımı, kurgu ve prodüksiyon süreçlerinde aktif rol alma ve sertifikalı eğitim.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-slate-900 border-2 border-blue-500"></div>
                  <h4 className="text-xl font-semibold text-slate-200">Video İçerik Üretimi</h4>
                  <p className="text-blue-400 font-medium mt-1">Freelance & Sosyal Sorumluluk</p>
                  <p className="text-slate-400 mt-2">Sosyal sorumluluk kampanyaları için video kurgu ve bağımsız içerik üretimi.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Teknik <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Yetkinlikler</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Prodüksiyon ve post-prodüksiyon süreçlerinde kullandığım temel araçlar ve teknolojiler.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <MonitorPlay className="w-8 h-8" />, title: "Adobe Premiere Pro", desc: "Profesyonel video kurgu, renk düzenleme ve ses miksajı." },
              { icon: <Camera className="w-8 h-8" />, title: "Sony PXW-Z280V", desc: "Profesyonel kamera kullanımı ve çekim teknikleri." },
              { icon: <Sparkles className="w-8 h-8" />, title: "Stüdyo Sistemleri", desc: "Profesyonel ışık ve ses sistemleri kurulumu ve yönetimi." },
              { icon: <Palette className="w-8 h-8" />, title: "Canva", desc: "Hızlı ve etkili sosyal medya görselleri ve grafik tasarım." }
            ].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md hover:bg-white/[0.04] transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-200 mb-3">{skill.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{skill.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolyo" className="py-32 px-6 bg-slate-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Seçilmiş <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Çalışmalar</span></h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Üniversite projeleri, freelance işler ve sosyal sorumluluk kampanyalarından örnekler.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { img: "https://images.unsplash.com/photo-1574717024453-354056a3df3c?q=80&w=800&auto=format&fit=crop", title: "Haber Atölyesi", category: "Video Kurgu & Prodüksiyon" },
                { img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800&auto=format&fit=crop", title: "Sosyal Sorumluluk", category: "Kampanya Videosu" },
                { img: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=800&auto=format&fit=crop", title: "Freelance İçerik", category: "Sosyal Medya Yönetimi" },
                { img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop", title: "Stüdyo Çekimleri", category: "Işık & Ses Yönetimi" },
                { img: "https://images.unsplash.com/photo-1516280440502-65f536af1213?q=80&w=800&auto=format&fit=crop", title: "Kısa Film", category: "Görüntü Yönetmenliği" },
                { img: "https://images.unsplash.com/photo-1626379953822-ba319505cefa?q=80&w=800&auto=format&fit=crop", title: "Dijital Tasarım", category: "Canva & Görsel İletişim" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
                >
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-purple-400 text-sm font-medium mb-1">{item.category}</p>
                      <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="iletisim" className="py-32 px-6 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 p-12 rounded-3xl bg-gradient-to-b from-slate-800/50 to-transparent border border-white/5"
          >
            <h2 className="text-3xl md:text-5xl font-bold">Birlikte <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Çalışalım</span></h2>
            <p className="text-slate-400 text-lg">Yeni projeler ve işbirlikleri için benimle iletişime geçebilirsiniz.</p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
              <a href="mailto:busrabetulsuvari@gmail.com" className="flex items-center gap-3 px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 w-full md:w-auto justify-center">
                <Mail className="text-purple-400" />
                <span>busrabetulsuvari@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 px-6 py-4 rounded-full bg-white/5 border border-white/10 w-full md:w-auto justify-center">
                <MapPin className="text-blue-400" />
                <span>İstanbul, Türkiye</span>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center text-slate-500">
        <div className="flex justify-center gap-6 mb-6">
          {socialLinks.map((link, i) => (
            <a key={i} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-500/20 hover:text-purple-400 transition-all">
              {link.icon}
            </a>
          ))}
        </div>
        <p>© {new Date().getFullYear()} Büşra Betül Süvari. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}
