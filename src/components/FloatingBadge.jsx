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
  themeColor = 'sky',
}) {
  const colorMap = {
    sky: {
      border: 'hover:border-[#0A4174]/50 dark:hover:border-[#7BBDE8]/60',
      badgeBg: 'bg-[#BDD8E9]/40 dark:bg-[#7BBDE8]/15 text-[#0A4174] dark:text-[#7BBDE8] border-[#BDD8E9] dark:border-[#7BBDE8]/30',
      shadow: 'shadow-[0_10px_30px_rgba(10,65,116,0.08)] dark:shadow-[0_10px_30px_rgba(10,65,116,0.35)]',
    },
    sapphire: {
      border: 'hover:border-[#0A4174]/50 dark:hover:border-[#4E8EA2]/60',
      badgeBg: 'bg-[#E1EFF8] dark:bg-[#0A4174]/70 text-[#001D39] dark:text-[#BDD8E9] border-[#BDD8E9] dark:border-[#49769F]/40',
      shadow: 'shadow-[0_10px_30px_rgba(10,65,116,0.08)] dark:shadow-[0_10px_30px_rgba(0,29,57,0.5)]',
    },
    cadet: {
      border: 'hover:border-[#0A4174]/50 dark:hover:border-[#6EA2B3]/60',
      badgeBg: 'bg-[#BDD8E9]/30 dark:bg-[#4E8EA2]/25 text-[#0A4174] dark:text-[#BDD8E9] border-[#BDD8E9] dark:border-[#4E8EA2]/40',
      shadow: 'shadow-[0_10px_30px_rgba(10,65,116,0.08)] dark:shadow-[0_10px_30px_rgba(78,142,162,0.25)]',
    },
    airforce: {
      border: 'hover:border-[#0A4174]/50 dark:hover:border-[#7BBDE8]/50',
      badgeBg: 'bg-[#E1EFF8] dark:bg-[#6EA2B3]/20 text-[#0A4174] dark:text-[#7BBDE8] border-[#BDD8E9] dark:border-[#6EA2B3]/35',
      shadow: 'shadow-[0_10px_30px_rgba(10,65,116,0.08)] dark:shadow-[0_10px_30px_rgba(110,162,179,0.25)]',
    },
  };

  const style = colorMap[themeColor] || colorMap.sky;

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
      className={`absolute z-20 hidden md:flex items-center gap-3.5 px-4 py-3 rounded-2xl border border-[#BDD8E9] dark:border-[#49769F]/40 bg-white/90 dark:bg-[#001D39]/85 backdrop-blur-xl ${style.shadow} ${style.border} cursor-default select-none transition-all duration-300 ${className}`}
    >
      <div className={`p-2.5 rounded-xl border flex items-center justify-center ${style.badgeBg}`}>
        {icon}
      </div>
      <div>
        <div className="text-[13px] font-bold text-[#001D39] dark:text-white tracking-tight leading-tight flex items-center gap-2">
          {title}
        </div>
        {subtitle && (
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#49769F] dark:text-[#BDD8E9]/80 mt-0.5">
            {subtitle}
          </div>
        )}
      </div>
    </motion.div>
  );
}
