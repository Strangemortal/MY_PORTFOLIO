import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function TiltCard({
  children,
  className = '',
  spotlightColor,
}) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coordinates relative to card
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Smooth springs for 3D rotation
  const springConfig = { damping: 20, stiffness: 220, mass: 0.4 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  // 3D rotation (-7deg to 7deg)
  const rotateX = useTransform(mouseYSpring, [0, 1], [7, -7]);
  const rotateY = useTransform(mouseXSpring, [0, 1], [-7, 7]);

  // Spotlight coordinates in pixels
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    const normalizedX = clientX / rect.width;
    const normalizedY = clientY / rect.height;

    x.set(normalizedX);
    y.set(normalizedY);
    setSpotlightPos({ x: clientX, y: clientY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: 1.018 }}
      transition={{ duration: 0.2 }}
      className={`tilt-card relative rounded-[28px] overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Specular cursor spotlight reflection */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(380px circle at ${spotlightPos.x}px ${spotlightPos.y}px, ${
            spotlightColor || 'rgba(123, 189, 232, 0.14)'
          }, transparent 75%)`,
        }}
      />

      {/* Dynamic border reflection highlight */}
      <div
        className="pointer-events-none absolute inset-0 z-20 rounded-[28px] border border-[#0A4174]/20 dark:border-[#7BBDE8]/30 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Card Content with 3D Depth */}
      <div className="relative z-0 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
