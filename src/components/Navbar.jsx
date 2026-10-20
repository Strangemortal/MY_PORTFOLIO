import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Laptop } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, isDark, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Mission', href: '#mission' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none"
    >
      <nav
        className={`pointer-events-auto flex items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6 py-2 rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 dark:bg-[#001D39]/90 backdrop-blur-xl border border-[#BDD8E9] dark:border-[#49769F]/45 shadow-[0_12px_40px_rgba(10,65,116,0.12)] dark:shadow-[0_12px_40px_rgba(0,10,25,0.7)]'
            : 'bg-white/80 dark:bg-[#001D39]/75 backdrop-blur-md border border-[#BDD8E9]/70 dark:border-[#49769F]/30 shadow-sm'
        }`}
      >
        {/* Brand / Logo (Matches Favicon) */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-[#001D39] dark:text-white font-mono font-bold text-sm tracking-tight hover:text-[#0A4174] dark:hover:text-[#7BBDE8] transition-colors"
        >
          <div className="w-8 h-8 rounded-xl flex items-center justify-center shadow-sm">
            <svg className="w-8 h-8 transition-transform group-hover:scale-105" viewBox="0 0 64 64" fill="none">
              <rect
                x="3"
                y="3"
                width="58"
                height="58"
                rx="16"
                ry="16"
                className="fill-white dark:fill-[#001427] stroke-[#0A4174] dark:stroke-[#7BBDE8]"
                strokeWidth="2.5"
              />
              <path
                d="M18 19 H28 C32.5 19 35 21.2 35 24 C35 26.5 33 28 30 28.6 C34 29.2 36.5 31.2 36.5 34.5 C36.5 38 33 41 28 41 H18 Z M24 23.5 V27.5 H27 C28.8 27.5 30 26.8 30 25.5 C30 24.2 28.8 23.5 27 23.5 Z M24 32.5 V36.5 H28 C30 36.5 31.5 35.7 31.5 34.5 C31.5 33.3 30 32.5 28 32.5 Z"
                className="fill-[#001D39] dark:fill-[#FFFFFF]"
              />
              <path
                d="M37 20 L45 28 L37 36"
                fill="none"
                className="stroke-[#0A4174] dark:stroke-[#7BBDE8]"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="45" cy="38" r="2.2" className="fill-[#0A4174] dark:fill-[#7BBDE8]" />
            </svg>
          </div>
          <span className="hidden sm:inline font-bold">Bharat.dev</span>
        </a>

        {/* Navigation items */}
        <div className="hidden md:flex items-center gap-1 text-xs font-mono font-medium uppercase tracking-wider text-[#49769F] dark:text-[#BDD8E9]/80">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full hover:text-[#001D39] dark:hover:text-white hover:bg-[#BDD8E9]/30 dark:hover:bg-[#0A4174]/40 transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* System Theme Toggle & CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Selector: Light | System | Dark */}
          <div className="flex items-center p-0.5 rounded-full border border-[#BDD8E9] dark:border-[#49769F]/40 bg-[#F0F7FC] dark:bg-[#001427]/80 shadow-inner">
            <button
              onClick={() => setTheme('light')}
              title="Light Theme"
              className={`p-1.5 rounded-full transition-all ${
                theme === 'light'
                  ? 'bg-white text-[#0A4174] shadow-sm'
                  : 'text-[#49769F] hover:text-[#001D39]'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setTheme('system')}
              title="System Theme (Auto OS)"
              className={`p-1.5 rounded-full transition-all text-[10px] font-mono flex items-center gap-1 ${
                theme === 'system'
                  ? 'bg-[#0A4174] dark:bg-[#7BBDE8] text-white dark:text-[#001D39] font-bold shadow-sm'
                  : 'text-[#49769F] dark:text-[#BDD8E9]/70 hover:text-[#0A4174] dark:hover:text-white'
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setTheme('dark')}
              title="Dark Theme (Midnight)"
              className={`p-1.5 rounded-full transition-all ${
                theme === 'dark'
                  ? 'bg-[#7BBDE8] text-[#001D39] shadow-sm'
                  : 'text-[#49769F] dark:text-[#BDD8E9]/70 hover:text-[#001D39] dark:hover:text-white'
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
            </button>
          </div>

          <MagneticButton
            href="#contact"
            className="px-4 py-1.5 rounded-full text-xs font-bold font-mono tracking-wider uppercase bg-[#0A4174] dark:bg-[#7BBDE8] text-white dark:text-[#001D39] hover:bg-[#001D39] dark:hover:bg-white shadow-sm hover:shadow-[0_0_20px_rgba(123,189,232,0.4)] transition-all font-heading"
          >
            Connect
          </MagneticButton>
        </div>
      </nav>
    </motion.header>
  );
}
