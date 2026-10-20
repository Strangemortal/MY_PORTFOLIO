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
            ? 'bg-[#001D39]/90 backdrop-blur-xl border border-[#49769F]/45 shadow-[0_12px_40px_rgba(0,10,25,0.7)]'
            : 'bg-[#001D39]/75 backdrop-blur-md border border-[#49769F]/30 shadow-md'
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-white font-mono font-bold text-sm tracking-tight hover:text-[#7BBDE8] transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0A4174] via-[#4E8EA2] to-[#7BBDE8] flex items-center justify-center p-0.5 shadow-sm">
            <div className="w-full h-full bg-[#001D39] rounded-full flex items-center justify-center">
              <span className="text-[#7BBDE8] font-black text-xs">BB</span>
            </div>
          </div>
          <span className="hidden sm:inline font-bold">Bharat.dev</span>
        </a>

        {/* Navigation items */}
        <div className="hidden md:flex items-center gap-1 text-xs font-mono font-medium uppercase tracking-wider text-[#BDD8E9]/80">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-[#0A4174]/40 transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Live Status indicator & CTA */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A4174]/50 border border-[#4E8EA2]/40 text-[#7BBDE8] text-[10px] font-mono font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7BBDE8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7BBDE8]"></span>
            </span>
            AVAILABLE FOR WORK
          </div>

          <MagneticButton
            href="#contact"
            className="px-4 py-1.5 rounded-full text-xs font-bold font-mono tracking-wider uppercase bg-[#7BBDE8] text-[#001D39] hover:bg-white hover:shadow-[0_0_20px_rgba(123,189,232,0.4)] transition-all font-heading"
          >
            Connect
          </MagneticButton>
        </div>
      </nav>
    </motion.header>
  );
}
