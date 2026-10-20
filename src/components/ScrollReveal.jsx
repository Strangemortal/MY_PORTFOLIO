import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.65,
  yOffset = 45,
  xOffset = 0,
  scale = 0.96,
  amount = 0.15,
  className = '',
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: yOffset,
        x: xOffset,
        scale,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount,
        margin: '-40px 0px -40px 0px',
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
