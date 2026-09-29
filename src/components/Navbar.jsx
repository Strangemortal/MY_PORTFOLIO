import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
        className={`pointer-events-auto flex items-center justify-between gap-4 sm:gap-8 px-5 py-2.5 rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.08)]'
            : 'bg-white/75 backdrop-blur-md border border-slate-200/60 shadow-sm'
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-slate-900 font-mono font-bold text-sm tracking-tight hover:text-indigo-600 transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 via-sky-500 to-violet-500 flex items-center justify-center p-0.5 shadow-sm">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
              <span className="text-indigo-600 font-black text-xs">BB</span>
            </div>
          </div>
          <span className="hidden sm:inline font-bold">Bharat.dev</span>
        </a>

        {/* Navigation items */}
        <div className="hidden md:flex items-center gap-1 text-xs font-mono font-medium uppercase tracking-wider text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full hover:text-indigo-600 hover:bg-slate-100/70 transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Live Status indicator & CTA */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-mono font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            AVAILABLE FOR WORK
          </div>

          <MagneticButton
            href="#contact"
            className="px-4 py-1.5 rounded-full text-xs font-bold font-mono tracking-wider uppercase bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm hover:shadow-[0_4px_16px_rgba(99,102,241,0.35)] transition-all"
          >
            Connect
          </MagneticButton>
        </div>
      </nav>
    </motion.header>
  );
}
