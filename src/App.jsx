import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Layers, 
  Cpu, 
  Shield, 
  Activity, 
  Globe, 
  Terminal, 
  ArrowRight,
  Sparkles,
  GitBranch,
  Boxes,
  Zap,
  CheckCircle2,
  FolderGit2,
  Compass
} from 'lucide-react';

import Navbar from './components/Navbar';
import ParticleCanvas from './components/ParticleCanvas';
import MouseFollower from './components/MouseFollower';
import TiltCard from './components/TiltCard';
import MagneticButton from './components/MagneticButton';
import FloatingBadge from './components/FloatingBadge';
import TechMarquee from './components/TechMarquee';
import LiveTerminal from './components/LiveTerminal';

// Custom SVG Icons
const GithubIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const projects = [
  {
    title: 'TaskAssign',
    category: 'Systems',
    desc: 'A role-free, user-focused task assignment system designed to streamline task tracking between admins and users with real-time state synchronization.',
    tech: ['Python', 'Django', 'Bootstrap', 'REST API'],
    link: 'https://github.com/Strangemortal/TaskAssign',
    icon: <Terminal className="w-5 h-5 text-[#0A4174] dark:text-[#7BBDE8]" />,
    iconBg: 'bg-[#BDD8E9]/30 dark:bg-[#0A4174]/40 border-[#BDD8E9] dark:border-[#4E8EA2]/40',
    spotlight: 'rgba(123, 189, 232, 0.16)'
  },
  {
    title: 'Stegano-Share',
    category: 'Cybersecurity',
    desc: 'High-security covert messaging system utilizing steganography to conceal encrypted payloads within images. Features symmetric keys for E2EE.',
    tech: ['Python', 'Django', 'Steganography', 'Cryptography'],
    link: 'https://github.com/Strangemortal/Stegano-Share',
    icon: <Shield className="w-5 h-5 text-[#4E8EA2] dark:text-[#BDD8E9]" />,
    iconBg: 'bg-[#BDD8E9]/30 dark:bg-[#0A4174]/40 border-[#BDD8E9] dark:border-[#4E8EA2]/40',
    spotlight: 'rgba(189, 216, 233, 0.16)'
  },
  {
    title: 'Disease Dynamics ML',
    category: 'AI/ML',
    desc: 'Graph-based machine learning pipeline to visualize and analyze the epidemiological propagation of disease spread using network topology theory.',
    tech: ['Python', 'ML', 'NetworkX', 'Data Viz'],
    link: 'https://github.com/Strangemortal/Graph-based-Disease-Dynamics-ML',
    icon: <Activity className="w-5 h-5 text-[#0A4174] dark:text-[#6EA2B3]" />,
    iconBg: 'bg-[#BDD8E9]/30 dark:bg-[#0A4174]/40 border-[#BDD8E9] dark:border-[#4E8EA2]/40',
    spotlight: 'rgba(110, 162, 179, 0.16)'
  },
  {
    title: 'Task Manager DevOps',
    category: 'DevOps',
    desc: 'Production-ready task infrastructure incorporating automated CI/CD pipelines, containerization with Docker, and shell automation scripts.',
    tech: ['Python', 'Shell', 'DevOps', 'Docker'],
    link: 'https://github.com/Strangemortal/task-manager-devops',
    icon: <Layers className="w-5 h-5 text-[#49769F] dark:text-[#7BBDE8]" />,
    iconBg: 'bg-[#BDD8E9]/30 dark:bg-[#0A4174]/40 border-[#BDD8E9] dark:border-[#4E8EA2]/40',
    spotlight: 'rgba(123, 189, 232, 0.16)'
  },
  {
    title: 'SOCIALMEET',
    category: 'Web',
    desc: 'A unified networking platform engineered to connect creators and professionals across digital social ecosystems with responsive modern UI.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX'],
    link: 'https://github.com/Strangemortal/SOCIALMEET',
    icon: <Globe className="w-5 h-5 text-[#0A4174] dark:text-[#4E8EA2]" />,
    iconBg: 'bg-[#BDD8E9]/30 dark:bg-[#0A4174]/40 border-[#BDD8E9] dark:border-[#4E8EA2]/40',
    spotlight: 'rgba(78, 142, 162, 0.16)'
  },
  {
    title: 'Image Processor',
    category: 'AI/ML',
    desc: 'High-performance suite of computer vision scripts for geometric image manipulation, edge detection, filtering, and pixel restoration.',
    tech: ['Python', 'OpenCV', 'NumPy', 'Matplotlib'],
    link: 'https://github.com/Strangemortal/image_processor',
    icon: <Cpu className="w-5 h-5 text-[#4E8EA2] dark:text-[#BDD8E9]" />,
    iconBg: 'bg-[#BDD8E9]/30 dark:bg-[#0A4174]/40 border-[#BDD8E9] dark:border-[#4E8EA2]/40',
    spotlight: 'rgba(189, 216, 233, 0.16)'
  }
];

const skills = [
  { name: 'Python', level: 'Core Architecture', icon: <Code2 className="w-5 h-5 text-[#0A4174] dark:text-[#7BBDE8]" />, bg: 'bg-[#BDD8E9]/30 dark:bg-[#0A4174]/40 border-[#BDD8E9] dark:border-[#49769F]/40', spotlight: 'rgba(123, 189, 232, 0.16)' },
  { name: 'Django', level: 'Backend & REST APIs', icon: <Database className="w-5 h-5 text-[#4E8EA2] dark:text-[#6EA2B3]" />, bg: 'bg-[#BDD8E9]/30 dark:bg-[#0A4174]/40 border-[#BDD8E9] dark:border-[#49769F]/40', spotlight: 'rgba(110, 162, 179, 0.16)' },
  { name: 'React.js', level: 'Interactive UIs', icon: <Layers className="w-5 h-5 text-[#0A4174] dark:text-[#BDD8E9]" />, bg: 'bg-[#BDD8E9]/30 dark:bg-[#0A4174]/40 border-[#BDD8E9] dark:border-[#49769F]/40', spotlight: 'rgba(189, 216, 233, 0.16)' },
  { name: 'DevOps & CI/CD', level: 'Continuous Delivery', icon: <Terminal className="w-5 h-5 text-[#49769F] dark:text-[#4E8EA2]" />, bg: 'bg-[#BDD8E9]/30 dark:bg-[#0A4174]/40 border-[#BDD8E9] dark:border-[#49769F]/40', spotlight: 'rgba(78, 142, 162, 0.16)' },
  { name: 'Machine Learning', level: 'Graph ML & Networks', icon: <Cpu className="w-5 h-5 text-[#0A4174] dark:text-[#7BBDE8]" />, bg: 'bg-[#BDD8E9]/30 dark:bg-[#0A4174]/40 border-[#BDD8E9] dark:border-[#49769F]/40', spotlight: 'rgba(123, 189, 232, 0.16)' },
  { name: 'Cybersecurity', level: 'Stegano & Encryption', icon: <Shield className="w-5 h-5 text-[#4E8EA2] dark:text-[#BDD8E9]" />, bg: 'bg-[#BDD8E9]/30 dark:bg-[#0A4174]/40 border-[#BDD8E9] dark:border-[#49769F]/40', spotlight: 'rgba(189, 216, 233, 0.16)' },
  { name: 'Docker', level: 'Container Orchestration', icon: <Boxes className="w-5 h-5 text-[#0A4174] dark:text-[#6EA2B3]" />, bg: 'bg-[#BDD8E9]/30 dark:bg-[#0A4174]/40 border-[#BDD8E9] dark:border-[#49769F]/40', spotlight: 'rgba(110, 162, 179, 0.16)' },
  { name: 'AWS Cloud', level: 'Cloud Infrastructure', icon: <Globe className="w-5 h-5 text-[#49769F] dark:text-[#4E8EA2]" />, bg: 'bg-[#BDD8E9]/30 dark:bg-[#0A4174]/40 border-[#BDD8E9] dark:border-[#49769F]/40', spotlight: 'rgba(78, 142, 162, 0.16)' },
];

const categories = ['All', 'Systems', 'AI/ML', 'DevOps', 'Cybersecurity'];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Interactive Mouse Parallax for Hero section
  const heroMouseX = useMotionValue(0);
  const heroMouseY = useMotionValue(0);

  const heroSpringConfig = { damping: 30, stiffness: 200 };
  const smoothHeroX = useSpring(heroMouseX, heroSpringConfig);
  const smoothHeroY = useSpring(heroMouseY, heroSpringConfig);

  // Parallax offsets for floating items
  const badge1X = useTransform(smoothHeroX, [-500, 500], [-18, 18]);
  const badge1Y = useTransform(smoothHeroY, [-500, 500], [-14, 14]);

  const badge2X = useTransform(smoothHeroX, [-500, 500], [22, -22]);
  const badge2Y = useTransform(smoothHeroY, [-500, 500], [18, -18]);

  const handleHeroMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    heroMouseX.set(e.clientX - centerX);
    heroMouseY.set(e.clientY - centerY);
  };

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F0F7FC] dark:bg-[#001D39] text-[#001D39] dark:text-[#BDD8E9] font-sans relative overflow-x-hidden transition-colors duration-300">
      
      {/* 1. DYNAMIC MOUSE FOLLOWER WITH SAPPHIRE/SKY AURA & RING */}
      <MouseFollower />

      {/* 2. FLOATING FROSTED GLASS NAVBAR */}
      <Navbar />

      {/* 3. INTERACTIVE CONSTELLATION CANVAS PARTICLES */}
      <ParticleCanvas />

      {/* 4. SOFT LUMINOUS AMBIENT GLOWS */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 40, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-5%] left-[5%] w-[45vw] h-[45vw] bg-[#BDD8E9]/30 dark:bg-[#0A4174]/35 blur-[140px] rounded-full" 
        />
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -35, 0],
            y: [0, 35, 0]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-[20%] right-[-5%] w-[45vw] h-[45vw] bg-[#7BBDE8]/20 dark:bg-[#4E8EA2]/20 blur-[150px] rounded-full" 
        />
        <motion.div 
          animate={{
            scale: [1, 1.12, 1],
            x: [0, 25, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-[-5%] left-[20%] w-[45vw] h-[45vw] bg-[#4E8EA2]/15 dark:bg-[#7BBDE8]/12 blur-[160px] rounded-full" 
        />
      </div>

      {/* HERO SECTION WITH DYNAMIC MOUSE PARALLAX & CONTINUOUS FLOATING ELEMENTS */}
      <section 
        onMouseMove={handleHeroMouseMove}
        className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden z-10"
      >
        {/* Subtle architectural grid texture */}
        <div className="absolute inset-0 opacity-[0.35] dark:opacity-[0.4] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,65,116,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,65,116,0.08)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(73,118,159,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(73,118,159,0.12)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute inset-0 bg-radial-gradient" />
        </div>

        {/* CONTINUOUS MOVING FLOATING BADGES WITH MOUSE PARALLAX */}
        <motion.div style={{ x: badge1X, y: badge1Y }} className="absolute inset-0 pointer-events-none">
          <div className="pointer-events-auto">
            <FloatingBadge
              icon={<Terminal className="w-4 h-4 text-[#0A4174] dark:text-[#7BBDE8]" />}
              title="Python & Django Systems"
              subtitle="High Throughput Architecture"
              className="top-[18%] left-[7%]"
              duration={5.2}
              delay={0.1}
              yOffset={14}
              themeColor="sky"
            />

            <FloatingBadge
              icon={<Shield className="w-4 h-4 text-[#001D39] dark:text-[#BDD8E9]" />}
              title="Stegano Cryptography"
              subtitle="Cipher Quest Winner"
              className="bottom-[18%] left-[9%]"
              duration={6.2}
              delay={1.2}
              yOffset={15}
              themeColor="sapphire"
            />
          </div>
        </motion.div>

        <motion.div style={{ x: badge2X, y: badge2Y }} className="absolute inset-0 pointer-events-none">
          <div className="pointer-events-auto">
            <FloatingBadge
              icon={<Cpu className="w-4 h-4 text-[#4E8EA2] dark:text-[#6EA2B3]" />}
              title="Graph ML Dynamics"
              subtitle="IEEE ECMI 2026 Conference"
              className="top-[22%] right-[7%]"
              duration={6.5}
              delay={0.6}
              yOffset={16}
              themeColor="cadet"
            />

            <FloatingBadge
              icon={<Layers className="w-4 h-4 text-[#0A4174] dark:text-[#7BBDE8]" />}
              title="Docker & DevOps CI/CD"
              subtitle="Automated Infrastructure"
              className="bottom-[17%] right-[8%]"
              duration={5.8}
              delay={1.8}
              yOffset={13}
              themeColor="airforce"
            />
          </div>
        </motion.div>

        {/* HERO CONTENT */}
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-[#BDD8E9] dark:border-[#4E8EA2]/40 bg-white/85 dark:bg-[#0A4174]/40 backdrop-blur-md shadow-sm text-[#0A4174] dark:text-[#BDD8E9] text-xs font-mono font-semibold tracking-wider uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0A4174] dark:text-[#7BBDE8] animate-spin-slow" />
            <span>Software Engineering • AI/ML • DevOps</span>
          </motion.div>
          
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-black tracking-tight mb-8 bg-gradient-to-b from-[#001D39] via-[#0A4174] to-[#49769F] dark:from-white dark:via-[#BDD8E9] dark:to-[#7BBDE8] bg-clip-text text-transparent drop-shadow-sm dark:drop-shadow-[0_4px_30px_rgba(10,65,116,0.5)]"
          >
            Bharat Bhushan
          </motion.h1>

          {/* Subtitle with High-Readability Contrast */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-[#385c7d] dark:text-[#BDD8E9]/90 max-w-3xl mx-auto font-light leading-relaxed mb-12"
          >
            Architecting robust digital infrastructures and intelligent systems. Focused on{' '}
            <span className="text-[#0A4174] dark:text-[#7BBDE8] font-semibold underline decoration-[#0A4174]/40 dark:decoration-[#7BBDE8]/60 underline-offset-4">
              Scalability
            </span>
            ,{' '}
            <span className="text-[#001D39] dark:text-white font-semibold underline decoration-[#BDD8E9] dark:decoration-[#BDD8E9]/60 underline-offset-4">
              Defensive Security
            </span>
            , and{' '}
            <span className="text-[#4E8EA2] dark:text-[#6EA2B3] font-semibold underline decoration-[#4E8EA2]/40 dark:decoration-[#6EA2B3]/60 underline-offset-4">
              Automation
            </span>
            .
          </motion.p>

          {/* MAGNETIC BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap justify-center items-center gap-4 sm:gap-5"
          >
            <MagneticButton
              href="https://github.com/Strangemortal"
              target="_blank"
              strength={0.35}
              className="group relative px-8 py-4 sm:px-10 sm:py-4.5 rounded-2xl bg-[#0A4174] dark:bg-[#7BBDE8] text-white dark:text-[#001D39] font-heading font-black text-sm tracking-wider uppercase shadow-[0_10px_25px_rgba(10,65,116,0.18)] dark:shadow-[0_10px_30px_rgba(123,189,232,0.3)] hover:bg-[#001D39] dark:hover:bg-white hover:shadow-[0_15px_35px_rgba(10,65,116,0.25)] dark:hover:shadow-[0_15px_40px_rgba(123,189,232,0.45)] transition-all"
            >
              <span className="flex items-center gap-2.5">
                <GithubIcon className="w-5 h-5 text-white dark:text-[#001D39]" />
                VIEW GITHUB
                <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </span>
            </MagneticButton>

            <MagneticButton
              href="https://www.linkedin.com/in/bbhushank/"
              target="_blank"
              strength={0.35}
              className="group flex items-center gap-2.5 px-8 py-4 sm:px-10 sm:py-4.5 rounded-2xl border border-[#BDD8E9] dark:border-[#49769F]/50 bg-white dark:bg-[#0A4174]/50 backdrop-blur-md text-[#001D39] dark:text-white font-heading font-bold text-sm tracking-wider uppercase shadow-sm hover:border-[#0A4174] dark:hover:border-[#7BBDE8] hover:text-[#0A4174] dark:hover:text-[#7BBDE8] hover:bg-[#F0F7FC] dark:hover:bg-[#0A4174]/80 transition-all"
            >
              <LinkedinIcon className="w-5 h-5 text-[#0A4174] dark:text-[#7BBDE8] group-hover:scale-110 transition-transform" />
              LINKEDIN
            </MagneticButton>

            <MagneticButton
              href="#projects"
              strength={0.25}
              className="flex items-center gap-2 px-6 py-4 rounded-2xl border border-transparent text-[#49769F] dark:text-[#BDD8E9] hover:text-[#001D39] dark:hover:text-white hover:border-[#BDD8E9] dark:hover:border-[#7BBDE8]/60 hover:bg-white/60 dark:hover:bg-[#0A4174]/30 text-xs font-mono uppercase tracking-wider transition-all"
            >
              <Compass className="w-4 h-4 text-[#0A4174] dark:text-[#7BBDE8]" />
              EXPLORE WORK
            </MagneticButton>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#49769F] dark:text-[#6EA2B3] pointer-events-none"
        >
          <div className="w-5 h-9 rounded-full border border-[#BDD8E9] dark:border-[#49769F]/60 flex justify-center pt-2 bg-white/70 dark:bg-[#001427]/80">
            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-[#0A4174] dark:bg-[#7BBDE8] rounded-full"
            />
          </div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#49769F] dark:text-[#6EA2B3]">SCROLL</span>
        </motion.div>
      </section>

      {/* CONTINUOUS MOVING TECH MARQUEE */}
      <TechMarquee />

      {/* ABOUT & MISSION SECTION WITH LIVE TELEMETRY TERMINAL */}
      <section id="mission" className="py-28 px-6 md:px-16 lg:px-28 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* Mission Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BDD8E9]/30 dark:bg-[#0A4174]/50 border border-[#BDD8E9] dark:border-[#4E8EA2]/40 text-[#0A4174] dark:text-[#7BBDE8] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
                <Zap className="w-3.5 h-3.5 text-[#0A4174] dark:text-[#7BBDE8]" /> Core Philosophy
              </div>

              <h2 className="text-4xl sm:text-5xl font-heading font-black mb-8 text-[#001D39] dark:text-white flex items-center gap-4">
                <span className="w-12 h-[3px] bg-gradient-to-r from-[#0A4174] via-[#4E8EA2] to-[#7BBDE8] rounded-full" />
                The Mission
              </h2>

              <div className="space-y-6 text-[#385c7d] dark:text-[#BDD8E9]/90 text-base sm:text-lg leading-relaxed font-light">
                <p>
                  I am a Computer Science Engineering student dedicated to architecting high-performance systems and intelligent applications. My journey is fueled by a relentless curiosity for how technology can solve real-world problems at scale.
                </p>
                <p>
                  From building complex{' '}
                  <span className="text-[#001D39] dark:text-white font-medium italic underline decoration-[#0A4174] dark:decoration-[#7BBDE8] underline-offset-4">
                    Django backends
                  </span>{' '}
                  to implementing{' '}
                  <span className="text-[#001D39] dark:text-white font-medium italic underline decoration-[#4E8EA2] dark:decoration-[#BDD8E9] underline-offset-4">
                    Graph-based ML models
                  </span>
                  , I thrive in environments that challenge technical depth, mathematical elegance, and creative problem-solving.
                </p>
                <p>
                  Whether setting up automated CI/CD container pipelines or designing steganographic encryption protocols, I write code with a focus on speed, defensive security, and longevity.
                </p>
              </div>

              {/* Quick stats pills */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="p-4 rounded-2xl bg-white/90 dark:bg-[#001D39]/90 border border-[#BDD8E9] dark:border-[#49769F]/40 shadow-sm text-center hover:border-[#0A4174] dark:hover:border-[#7BBDE8]/60 transition-colors">
                  <div className="text-2xl font-heading font-black text-[#0A4174] dark:text-[#7BBDE8]">IEEE</div>
                  <div className="text-[11px] font-mono text-[#49769F] dark:text-[#BDD8E9]/80 uppercase mt-1">Conference Author</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/90 dark:bg-[#001D39]/90 border border-[#BDD8E9] dark:border-[#49769F]/40 shadow-sm text-center hover:border-[#0A4174] dark:hover:border-[#7BBDE8]/60 transition-colors">
                  <div className="text-2xl font-heading font-black text-[#001D39] dark:text-white">1st</div>
                  <div className="text-[11px] font-mono text-[#49769F] dark:text-[#BDD8E9]/80 uppercase mt-1">Cipher Quest Winner</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/90 dark:bg-[#001D39]/90 border border-[#BDD8E9] dark:border-[#49769F]/40 shadow-sm text-center hover:border-[#0A4174] dark:hover:border-[#7BBDE8]/60 transition-colors">
                  <div className="text-2xl font-heading font-black text-[#4E8EA2] dark:text-[#6EA2B3]">6+</div>
                  <div className="text-[11px] font-mono text-[#49769F] dark:text-[#BDD8E9]/80 uppercase mt-1">Deployed Systems</div>
                </div>
              </div>
            </motion.div>

            {/* Live Terminal & Interactive Telemetry */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#BDD8E9]/40 dark:from-[#0A4174]/40 via-[#7BBDE8]/20 dark:via-[#4E8EA2]/25 to-transparent blur-2xl rounded-3xl" />
              <LiveTerminal />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION WITH 3D SPOTLIGHT CARDS */}
      <section id="skills" className="py-28 px-6 md:px-16 lg:px-28 relative z-10 bg-white/60 dark:bg-[#001427]/70 border-y border-[#BDD8E9] dark:border-[#49769F]/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BDD8E9]/30 dark:bg-[#0A4174]/50 border border-[#BDD8E9] dark:border-[#4E8EA2]/40 text-[#0A4174] dark:text-[#7BBDE8] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                <Boxes className="w-3.5 h-3.5 text-[#0A4174] dark:text-[#7BBDE8]" /> Technical Arsenal
              </div>
              <h2 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-[#001D39] dark:text-white">
                Specialized <span className="bg-gradient-to-r from-[#0A4174] via-[#4E8EA2] to-[#7BBDE8] dark:from-[#7BBDE8] dark:via-[#BDD8E9] dark:to-white bg-clip-text text-transparent">Capabilities</span>
              </h2>
            </div>
            <p className="text-[#49769F] dark:text-[#BDD8E9]/80 font-mono text-sm max-w-md">
              Interactive stack matrix equipped with modern runtime tools, distributed paradigms, and defensive security.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <TiltCard
                key={skill.name}
                spotlightColor={skill.spotlight}
                className="bg-white dark:bg-[#001D39]/85 border border-[#BDD8E9] dark:border-[#49769F]/35 shadow-sm dark:shadow-md hover:border-[#0A4174] dark:hover:border-[#7BBDE8]/60 hover:shadow-[0_15px_35px_rgba(10,65,116,0.12)] dark:hover:shadow-[0_15px_35px_rgba(10,65,116,0.4)] group cursor-default"
              >
                <div className="p-7 flex flex-col justify-between h-44">
                  <div className="flex items-center justify-between">
                    <div className={`p-3.5 rounded-2xl border ${skill.bg} group-hover:scale-110 transition-all duration-300`}>
                      {skill.icon}
                    </div>
                    <span className="text-[10px] font-mono text-[#49769F] dark:text-[#6EA2B3] uppercase tracking-widest font-semibold">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-heading font-bold text-[#001D39] dark:text-white group-hover:text-[#0A4174] dark:group-hover:text-[#7BBDE8] transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-xs font-mono text-[#49769F] dark:text-[#BDD8E9]/70 mt-1">
                      {skill.level}
                    </p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS GRID WITH 3D PERSPECTIVE TILT & INTERACTIVE CATEGORY FILTERING */}
      <section id="projects" className="py-32 px-6 md:px-16 lg:px-28 z-10 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BDD8E9]/30 dark:bg-[#0A4174]/50 border border-[#BDD8E9] dark:border-[#4E8EA2]/40 text-[#0A4174] dark:text-[#7BBDE8] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                <FolderGit2 className="w-3.5 h-3.5 text-[#0A4174] dark:text-[#7BBDE8]" /> Featured Repositories
              </div>
              <h2 className="text-5xl sm:text-7xl font-heading font-black italic tracking-tight uppercase text-[#001D39] dark:text-white">
                Real-World <span className="bg-gradient-to-r from-[#0A4174] to-[#4E8EA2] dark:from-[#7BBDE8] dark:to-[#BDD8E9] bg-clip-text text-transparent">Deployments</span>
              </h2>
              <p className="text-[#49769F] dark:text-[#6EA2B3] text-sm sm:text-base mt-2 font-mono">
                / source: github.com/Strangemortal
              </p>
            </div>

            {/* Filter Tabs with animated pill */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/90 dark:bg-[#001427]/80 border border-[#BDD8E9] dark:border-[#49769F]/40 backdrop-blur-md shadow-sm dark:shadow-md">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                    selectedCategory === cat
                      ? 'text-white dark:text-[#001D39] font-bold'
                      : 'text-[#49769F] dark:text-[#BDD8E9]/75 hover:text-[#001D39] dark:hover:text-white'
                  }`}
                >
                  {selectedCategory === cat && (
                    <motion.div
                      layoutId="activeFilterTab"
                      className="absolute inset-0 bg-[#0A4174] dark:bg-[#7BBDE8] rounded-xl shadow-sm dark:shadow-[0_0_15px_rgba(123,189,232,0.4)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Grid of 3D Perspective Tilt Cards */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  key={project.title}
                  className="h-full"
                >
                  <TiltCard
                    spotlightColor={project.spotlight}
                    className="h-full bg-white dark:bg-[#001D39]/85 border border-[#BDD8E9] dark:border-[#49769F]/35 shadow-sm dark:shadow-md hover:border-[#0A4174] dark:hover:border-[#7BBDE8]/60 hover:shadow-[0_20px_45px_rgba(10,65,116,0.12)] dark:hover:shadow-[0_20px_45px_rgba(10,65,116,0.5)] transition-all flex flex-col justify-between"
                  >
                    <div className="p-8 sm:p-10 flex flex-col h-full justify-between">
                      <div>
                        {/* Card Header: Icon & GitHub Arrow */}
                        <div className="flex justify-between items-start mb-8">
                          <div className={`p-4 rounded-2xl border ${project.iconBg} transition-all duration-300`}>
                            {project.icon}
                          </div>
                          
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="p-3.5 rounded-full bg-[#F0F7FC] dark:bg-[#0A4174]/40 border border-[#BDD8E9] dark:border-[#49769F]/40 text-[#49769F] dark:text-[#BDD8E9] hover:bg-[#0A4174] dark:hover:bg-[#7BBDE8] hover:text-white dark:hover:text-[#001D39] hover:border-[#0A4174] dark:hover:border-[#7BBDE8] transition-all duration-300 group shadow-sm"
                            aria-label={`View ${project.title} repository`}
                          >
                            <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                          </a>
                        </div>

                        {/* Category tag */}
                        <div className="text-[11px] font-mono font-bold tracking-widest text-[#0A4174] dark:text-[#7BBDE8] uppercase mb-2">
                          {project.category}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl sm:text-3xl font-heading font-black mb-3 text-[#001D39] dark:text-white group-hover:text-[#0A4174] dark:group-hover:text-[#7BBDE8] transition-colors">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[#385c7d] dark:text-[#BDD8E9]/85 text-sm leading-relaxed mb-8 font-light">
                          {project.desc}
                        </p>
                      </div>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-[#BDD8E9]/60 dark:border-[#0A4174]/60">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] uppercase tracking-wider font-mono px-3 py-1 rounded-lg border border-[#BDD8E9] dark:border-[#49769F]/40 bg-[#F0F7FC] dark:bg-[#0A4174]/30 text-[#49769F] dark:text-[#BDD8E9] hover:border-[#0A4174] dark:hover:border-[#7BBDE8]/60 hover:text-[#001D39] dark:hover:text-white transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ACHIEVEMENTS & RESEARCH SECTION */}
      <section id="achievements" className="py-28 px-6 md:px-16 lg:px-28 z-10 relative bg-white/40 dark:bg-[#001427]/60 border-t border-[#BDD8E9] dark:border-[#49769F]/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BDD8E9]/30 dark:bg-[#0A4174]/50 border border-[#BDD8E9] dark:border-[#4E8EA2]/40 text-[#0A4174] dark:text-[#7BBDE8] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#0A4174] dark:text-[#7BBDE8]" /> Recognitions & Publications
            </div>
            <h2 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-[#001D39] dark:text-white">
              Milestones & <span className="bg-gradient-to-r from-[#0A4174] via-[#4E8EA2] to-[#7BBDE8] dark:from-[#7BBDE8] dark:via-[#BDD8E9] dark:to-white bg-clip-text text-transparent">Honors</span>
            </h2>
          </div>
          
          <div className="grid gap-5">
            {[
              { 
                title: 'Maker Space Member', 
                place: 'DSATM Technical Community', 
                desc: 'Developing embedded systems and AI-integrated prototypes that bridge the gap between software algorithms and hardware implementations.',
                tag: 'Hardware & IoT'
              },
              { 
                title: 'Cipher Quest Winner', 
                place: 'Cybersecurity Challenge', 
                desc: 'Secured top honors in an intensive cybersecurity capture-the-flag tournament, demonstrating advanced threat analysis, steganographic payload extraction, and cryptographic decryption.',
                tag: '1st Place'
              },
              { 
                title: 'Research Publications', 
                place: 'IEEE ECMI 2026', 
                desc: 'Author of research papers on TaskAssign architectural paradigm and AutoFlow intelligent workflow routing, accepted at prestigious international conferences.',
                tag: 'Peer Reviewed'
              }
            ].map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ scale: 1.01 }}
                className="group relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-white dark:bg-[#001D39]/85 border border-[#BDD8E9] dark:border-[#49769F]/35 rounded-[28px] p-8 sm:p-10 shadow-sm dark:shadow-md hover:border-[#0A4174] dark:hover:border-[#7BBDE8]/60 hover:shadow-[0_15px_35px_rgba(10,65,116,0.12)] dark:hover:shadow-[0_15px_35px_rgba(10,65,116,0.35)] transition-all"
              >
                <div className="flex items-start md:items-center gap-6">
                  <div className="text-[#0A4174] dark:text-[#7BBDE8] font-heading font-black text-4xl opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all font-mono">
                    0{index + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-2xl font-heading font-black text-[#001D39] dark:text-white group-hover:text-[#0A4174] dark:group-hover:text-[#7BBDE8] transition-colors">
                        {exp.title}
                      </h3>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#BDD8E9]/30 dark:bg-[#0A4174]/70 border border-[#BDD8E9] dark:border-[#4E8EA2]/40 text-[#0A4174] dark:text-[#7BBDE8] uppercase font-semibold">
                        {exp.tag}
                      </span>
                    </div>
                    <div className="text-[#4E8EA2] dark:text-[#6EA2B3] text-xs mb-2 tracking-[0.2em] uppercase font-mono font-bold">
                      {exp.place}
                    </div>
                    <p className="text-[#385c7d] dark:text-[#BDD8E9]/85 leading-relaxed font-light text-base max-w-3xl">
                      {exp.desc}
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-full bg-[#F0F7FC] dark:bg-[#0A4174]/40 border border-[#BDD8E9] dark:border-[#49769F]/40 text-[#49769F] dark:text-[#6EA2B3] group-hover:text-[#0A4174] dark:group-hover:text-[#7BBDE8] group-hover:border-[#0A4174] dark:group-hover:border-[#7BBDE8] transition-colors self-end md:self-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION WITH MAGNETIC ACTION */}
      <section id="contact" className="py-36 px-6 relative overflow-hidden z-10 text-center bg-gradient-to-b from-[#F0F7FC] via-white to-[#E1EFF8] dark:from-[#001D39] dark:via-[#001427] dark:to-[#001121]">
        
        {/* Soft center radiant aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#BDD8E9]/40 dark:bg-[#0A4174]/35 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#BDD8E9]/40 dark:bg-[#0A4174]/60 border border-[#BDD8E9] dark:border-[#4E8EA2]/40 text-[#0A4174] dark:text-[#7BBDE8] text-xs font-mono font-bold tracking-wider uppercase mb-8 shadow-sm">
              Initiate Collaboration
            </div>

            <h2 className="text-6xl sm:text-8xl md:text-9xl font-heading font-black tracking-tight mb-12 leading-none text-[#001D39] dark:text-white">
              LET'S <span className="bg-gradient-to-r from-[#0A4174] via-[#4E8EA2] to-[#7BBDE8] dark:from-[#7BBDE8] dark:via-[#BDD8E9] dark:to-white bg-clip-text text-transparent">SCALE</span>.
            </h2>

            <div className="flex flex-col items-center gap-10">
              <MagneticButton
                href="mailto:bharat.workspace974@gmail.com"
                strength={0.4}
                className="group relative px-14 py-6 sm:px-20 sm:py-8 rounded-[30px] bg-[#0A4174] dark:bg-[#7BBDE8] text-white dark:text-[#001D39] font-heading font-black text-xl sm:text-2xl hover:bg-[#001D39] dark:hover:bg-white shadow-[0_15px_40px_rgba(10,65,116,0.22)] dark:shadow-[0_15px_40px_rgba(123,189,232,0.35)] hover:shadow-[0_20px_50px_rgba(10,65,116,0.35)] dark:hover:shadow-[0_20px_50px_rgba(123,189,232,0.5)] transition-all uppercase"
              >
                <span className="flex items-center gap-4">
                  <span>Contact Bharat</span>
                  <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </span>
              </MagneticButton>
              
              {/* Interactive Magnetic Social Icons */}
              <div className="flex items-center gap-4 sm:gap-6">
                <MagneticButton
                  href="https://github.com/Strangemortal"
                  target="_blank"
                  strength={0.4}
                  className="p-5 sm:p-6 rounded-[22px] bg-white dark:bg-[#0A4174]/50 border border-[#BDD8E9] dark:border-[#49769F]/40 shadow-sm hover:border-[#0A4174] dark:hover:border-[#7BBDE8] hover:text-[#0A4174] dark:hover:text-[#7BBDE8] hover:shadow-md transition-all text-[#001D39] dark:text-[#BDD8E9]"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-6 h-6" />
                </MagneticButton>

                <MagneticButton
                  href="https://www.linkedin.com/in/bbhushank/"
                  target="_blank"
                  strength={0.4}
                  className="p-5 sm:p-6 rounded-[22px] bg-white dark:bg-[#0A4174]/50 border border-[#BDD8E9] dark:border-[#49769F]/40 shadow-sm hover:border-[#0A4174] dark:hover:border-[#7BBDE8] hover:text-[#0A4174] dark:hover:text-[#7BBDE8] hover:shadow-md transition-all text-[#001D39] dark:text-[#BDD8E9]"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-6 h-6 text-[#0A4174] dark:text-[#7BBDE8]" />
                </MagneticButton>

                <MagneticButton
                  href="mailto:bharat.workspace974@gmail.com"
                  target="_blank"
                  strength={0.4}
                  className="p-5 sm:p-6 rounded-[22px] bg-white dark:bg-[#0A4174]/50 border border-[#BDD8E9] dark:border-[#49769F]/40 shadow-sm hover:border-[#0A4174] dark:hover:border-[#7BBDE8] hover:text-[#0A4174] dark:hover:text-[#7BBDE8] hover:shadow-md transition-all text-[#001D39] dark:text-[#BDD8E9]"
                  aria-label="Email Bharat"
                >
                  <Mail className="w-6 h-6" />
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-[#BDD8E9] dark:border-[#49769F]/30 text-center relative z-10 bg-white/80 dark:bg-[#001427]/80 backdrop-blur-md">
        <p className="text-[#49769F] dark:text-[#6EA2B3] text-[11px] font-mono tracking-[0.25em] uppercase font-medium">
          &copy; {new Date().getFullYear()} Bharat Bhushan / Engineered for Excellence
        </p>
      </footer>
    </div>
  );
}
