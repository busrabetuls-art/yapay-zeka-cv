/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ResumeSection from './components/sections/ResumeSection';
import SkillsSection from './components/sections/SkillsSection';
import PortfolioSection from './components/sections/PortfolioSection';
import ContactSection from './components/sections/ContactSection';
import ChatBot from './components/ui/ChatBot';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-purple-500/30">
      {/* Skip to content */}
      <a
        href="#hakkimda"
        className="skip-link"
      >
        İçeriğe geç
      </a>

      <Navbar />

      <main>
        <HeroSection />
        <ResumeSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
}
