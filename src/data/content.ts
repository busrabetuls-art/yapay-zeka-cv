export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  description: string;
  email: string;
  location: string;
  profileImage: string;
  fallbackImage: string;
}

export interface SocialLink {
  iconName: 'Instagram' | 'Twitter';
  href: string;
  label: string;
}

export interface Education {
  institution: string;
  program: string;
  description: string;
}

export interface Experience {
  title: string;
  subtitle: string;
  description: string;
}

export interface Skill {
  iconName: 'MonitorPlay' | 'Camera' | 'Sparkles' | 'Palette';
  title: string;
  description: string;
  tags: string[];
}

export interface PortfolioItem {
  id: number;
  img: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  tools: string[];
  year: string;
}

export const personalInfo: PersonalInfo = {
  name: 'Büşra Betül Süvari',
  title: 'Yeni Medya Tasarımcısı & Video Prodüktör',
  tagline: 'Dijital Dünyayı Görselleştiriyorum',
  description:
    'Merhaba, ben Büşra Betül Süvari. Hikayeleri görsel bir şölene dönüştürüyor, dijital medyada iz bırakan yaratıcı içerikler üretiyorum.',
  email: 'busrabetulsuvari@gmail.com',
  location: 'İstanbul, Türkiye',
  profileImage: 'https://i.imgur.com/CoHKdc9.jpeg',
  fallbackImage:
    'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop',
};

export const socialLinks: SocialLink[] = [
  {
    iconName: 'Instagram',
    href: 'https://www.instagram.com/mananinmaddesi?igsh=ZTc0ZG1hd3J1a3Ey&utm_source=qr',
    label: 'Instagram',
  },
  {
    iconName: 'Twitter',
    href: 'https://x.com/bsrsvri?s=21',
    label: 'Twitter/X',
  },
];

export const education: Education[] = [
  {
    institution: 'Üsküdar Üniversitesi',
    program: 'Yeni Medya ve İletişim (3. Sınıf)',
    description:
      'Modern medya araçları, dijital içerik üretimi ve iletişim stratejileri üzerine akademik eğitim.',
  },
];

export const experience: Experience[] = [
  {
    title: 'Haber Atölyesi',
    subtitle: 'Üsküdar Üniversitesi (Sertifikalı)',
    description:
      'Haber yazımı, kurgu ve prodüksiyon süreçlerinde aktif rol alma ve sertifikalı eğitim.',
  },
  {
    title: 'Video İçerik Üretimi',
    subtitle: 'Freelance & Sosyal Sorumluluk',
    description:
      'Sosyal sorumluluk kampanyaları için video kurgu ve bağımsız içerik üretimi.',
  },
];

export const skills: Skill[] = [
  {
    iconName: 'MonitorPlay',
    title: 'Adobe Premiere Pro',
    description: 'Profesyonel video kurgu, renk düzenleme ve ses miksajı.',
    tags: ['Video Kurgu', 'Color Grading', 'Ses'],
  },
  {
    iconName: 'Camera',
    title: 'Sony PXW-Z280V',
    description: 'Profesyonel kamera kullanımı ve çekim teknikleri.',
    tags: ['Kamera', 'Çekim', '4K'],
  },
  {
    iconName: 'Sparkles',
    title: 'Stüdyo Sistemleri',
    description: 'Profesyonel ışık ve ses sistemleri kurulumu ve yönetimi.',
    tags: ['Işık', 'Ses', 'Stüdyo'],
  },
  {
    iconName: 'Palette',
    title: 'Canva',
    description: 'Hızlı ve etkili sosyal medya görselleri ve grafik tasarım.',
    tags: ['Grafik', 'Sosyal Medya', 'Tasarım'],
  },
];

export const portfolioCategories = ['Tümü', 'Video', 'Tasarım', 'Fotoğraf'];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1574717024453-354056a3df3c?q=80&w=800&auto=format&fit=crop',
    title: 'Haber Atölyesi',
    category: 'Video Kurgu & Prodüksiyon',
    categorySlug: 'Video',
    description:
      'Üsküdar Üniversitesi Haber Atölyesi kapsamında gerçekleştirilen profesyonel haber prodüksiyonu. Çekim, kurgu ve son işlem süreçlerinin tamamı tarafımdan yönetilmiştir.',
    tools: ['Adobe Premiere Pro', 'Sony PXW-Z280V', 'Stüdyo Ekipmanları'],
    year: '2024',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800&auto=format&fit=crop',
    title: 'Sosyal Sorumluluk',
    category: 'Kampanya Videosu',
    categorySlug: 'Video',
    description:
      'Toplumsal farkındalık yaratmayı amaçlayan sosyal sorumluluk kampanyası için hazırlanan etkileyici video içerik.',
    tools: ['Adobe Premiere Pro', 'After Effects', 'Canva'],
    year: '2024',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=800&auto=format&fit=crop',
    title: 'Freelance İçerik',
    category: 'Sosyal Medya Yönetimi',
    categorySlug: 'Tasarım',
    description:
      'Markaların dijital varlıklarını güçlendirmek için oluşturulan sosyal medya içerik stratejisi ve görsel tasarım çalışmaları.',
    tools: ['Canva', 'Instagram', 'İçerik Stratejisi'],
    year: '2023',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop',
    title: 'Stüdyo Çekimleri',
    category: 'Işık & Ses Yönetimi',
    categorySlug: 'Fotoğraf',
    description:
      'Profesyonel stüdyo ortamında gerçekleştirilen çekim projeleri. Işık tasarımı, ses yönetimi ve kamera operatörlüğü.',
    tools: ['Stüdyo Işık Sistemleri', 'Ses Ekipmanları', 'Sony Kamera'],
    year: '2024',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1516280440502-65f536af1213?q=80&w=800&auto=format&fit=crop',
    title: 'Kısa Film',
    category: 'Görüntü Yönetmenliği',
    categorySlug: 'Video',
    description:
      'Bağımsız kısa film projesi kapsamında görüntü yönetmenliği ve post-prodüksiyon süreçlerinin yürütülmesi.',
    tools: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Sony Kamera'],
    year: '2023',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1626379953822-ba319505cefa?q=80&w=800&auto=format&fit=crop',
    title: 'Dijital Tasarım',
    category: 'Canva & Görsel İletişim',
    categorySlug: 'Tasarım',
    description:
      'Dijital platformlar için oluşturulan görsel iletişim materyalleri. Banner, poster ve sosyal medya grafikleri.',
    tools: ['Canva', 'Adobe Photoshop', 'Figma'],
    year: '2024',
  },
];

/** System prompt for the Gemini chatbot */
export const chatbotSystemPrompt = `Sen Büşra Betül Süvari'nin kişisel portfolyo sitesindeki yardımcı AI asistanısın. Adın "BBS Asistan".

Büşra hakkında bilgiler:
- İsim: Büşra Betül Süvari
- Meslek: Yeni Medya Tasarımcısı & Video Prodüktör
- Eğitim: Üsküdar Üniversitesi, Yeni Medya ve İletişim bölümü, 3. sınıf öğrencisi
- Konum: İstanbul, Türkiye
- E-posta: busrabetulsuvari@gmail.com
- Yetenekler: Adobe Premiere Pro, Sony PXW-Z280V kamera kullanımı, Stüdyo ışık ve ses sistemleri, Canva
- Deneyimler: Üsküdar Üniversitesi Haber Atölyesi (sertifikalı), Freelance video içerik üretimi, Sosyal sorumluluk kampanyaları
- Sosyal Medya: Instagram (@mananinmaddesi), Twitter/X (@bsrsvri)

Kurallar:
- Türkçe yanıt ver
- Kısa ve öz cevaplar ver (en fazla 2-3 cümle)
- Sadece Büşra ve portfolyosuyla ilgili sorulara cevap ver
- Bilmediğin konularda "Bu konuda bilgim yok, Büşra'ya doğrudan ulaşabilirsiniz" de
- Samimi ve profesyonel ol`;
