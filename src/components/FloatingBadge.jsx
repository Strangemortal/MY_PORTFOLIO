import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingBadge({
  icon,
  title,
  subtitle,
  className = '',
  duration = 5,
  delay = 0,
  yOffset = 14,
  themeColor = 'indigo',
}) {
  const colorMap = {
    indigo: {
      border: 'hover:border-indigo-300',
      badgeBg: 'bg-indigo-50 text-indigo-600 border-indigo-100',
      shadow: 'shadow-[0_10px_30px_rgba(99,102,241,0.1)]',
    },
    sky: {
      border: 'hover:border-sky-300',
      badgeBg: 'bg-sky-50 text-sky-600 border-sky-100',
      shadow: 'shadow-[0_10px_30px_rgba(14,165,233,0.1)]',
    },
    violet: {
      border: 'hover:border-violet-300',
      badgeBg: 'bg-violet-50 text-violet-600 border-violet-100',
      shadow: 'shadow-[0_10px_30px_rgba(139,92,246,0.1)]',
    },
    emerald: {
      border: 'hover:border-emerald-300',
      badgeBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      shadow: 'shadow-[0_10px_30px_rgba(16,185,129,0.1)]',
    },
  };

  const style = colorMap[themeColor] || colorMap.indigo;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [-yOffset, yOffset, -yOffset],
        rotate: [-1, 1, -1],
      }}
      transition={{
        y: {
          duration,
          repeat: Infinity,
          ease: 'easeInOut',
          delay,
        },
        rotate: {
          duration: duration * 1.3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay,
        },
        opacity: { duration: 0.8, delay: delay * 0.4 },
        scale: { duration: 0.8, delay: delay * 0.4 },
      }}
      whileHover={{ scale: 1.06, y: -yOffset }}
      className={`absolute z-20 hidden md:flex items-center gap-3.5 px-4 py-3 rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-xl ${style.shadow} ${style.border} cursor-default select-none transition-all duration-300 ${className}`}
    >
      <div className={`p-2 rounded-xl border flex items-center justify-center ${style.badgeBg}`}>
        {icon}
      </div>
      <div>
        <div className="text-[13px] font-bold text-slate-800 tracking-tight leading-tight flex items-center gap-2">
          {title}
        </div>
        {subtitle && (
          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mt-0.5">
            {subtitle}
          </div>
        )}
      </div>
    </motion.div>
  );
}
