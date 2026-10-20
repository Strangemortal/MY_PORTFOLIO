import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function MouseFollower() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverType, setHoverType] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for fluid lag-free motion
  const springConfig = { damping: 25, stiffness: 250, mass: 0.2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Aura spring (slightly softer lag)
  const auraConfig = { damping: 35, stiffness: 120, mass: 0.6 };
  const auraX = useSpring(mouseX, auraConfig);
  const auraY = useSpring(mouseY, auraConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check if hovering over interactive elements
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.interactive-hover') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
        if (target.closest('a[target="_blank"]')) {
          setHoverType('link');
        } else {
          setHoverType('button');
        }
      } else if (target.closest('.tilt-card')) {
        setIsHovered(true);
        setHoverType('card');
      } else {
        setIsHovered(false);
        setHoverType('default');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* 1. Large Ambient Radiant Glow tracking the mouse */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[1] w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x: auraX,
          y: auraY,
          background: isHovered
            ? 'radial-gradient(circle, rgba(10, 65, 116, 0.4) 0%, rgba(123, 189, 232, 0.15) 40%, transparent 70%)'
            : 'radial-gradient(circle, rgba(10, 65, 116, 0.25) 0%, rgba(78, 142, 162, 0.08) 45%, transparent 70%)',
        }}
      />

      {/* 2. Fluid Interactive Outer Ring that expands/morphs on hover */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border transition-colors duration-200"
        style={{
          x: smoothX,
          y: smoothY,
          width: isHovered ? (hoverType === 'card' ? 56 : 48) : 26,
          height: isHovered ? (hoverType === 'card' ? 56 : 48) : 26,
          borderColor: isHovered ? 'rgba(123, 189, 232, 0.7)' : 'rgba(78, 142, 162, 0.4)',
          backgroundColor: isHovered ? 'rgba(10, 65, 116, 0.3)' : 'transparent',
          boxShadow: isHovered ? '0 0 15px rgba(123, 189, 232, 0.25)' : 'none',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      >
        {isHovered && hoverType === 'card' && (
          <span className="text-[8px] font-mono font-bold tracking-widest text-[#7BBDE8] uppercase select-none">
            VIEW
          </span>
        )}
      </motion.div>

      {/* 3. Center Precision Pointer Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7BBDE8] shadow-[0_0_8px_#7BBDE8]"
        style={{
          x: mouseX,
          y: mouseY,
          scale: isHovered ? 0.6 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
