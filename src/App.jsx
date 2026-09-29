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
    icon: <Terminal className="w-5 h-5 text-indigo-600" />,
    iconBg: 'bg-indigo-50 border-indigo-100',
    spotlight: 'rgba(99, 102, 241, 0.12)'
  },
  {
    title: 'Stegano-Share',
    category: 'Cybersecurity',
    desc: 'High-security covert messaging system utilizing steganography to conceal encrypted payloads within images. Features symmetric keys for E2EE.',
    tech: ['Python', 'Django', 'Steganography', 'Cryptography'],
    link: 'https://github.com/Strangemortal/Stegano-Share',
    icon: <Shield className="w-5 h-5 text-rose-600" />,
    iconBg: 'bg-rose-50 border-rose-100',
    spotlight: 'rgba(244, 63, 94, 0.12)'
  },
  {
    title: 'Disease Dynamics ML',
    category: 'AI/ML',
    desc: 'Graph-based machine learning pipeline to visualize and analyze the epidemiological propagation of disease spread using network topology theory.',
    tech: ['Python', 'ML', 'NetworkX', 'Data Viz'],
    link: 'https://github.com/Strangemortal/Graph-based-Disease-Dynamics-ML',
    icon: <Activity className="w-5 h-5 text-violet-600" />,
    iconBg: 'bg-violet-50 border-violet-100',
    spotlight: 'rgba(139, 92, 246, 0.12)'
  },
  {
    title: 'Task Manager DevOps',
    category: 'DevOps',
    desc: 'Production-ready task infrastructure incorporating automated CI/CD pipelines, containerization with Docker, and shell automation scripts.',
    tech: ['Python', 'Shell', 'DevOps', 'Docker'],
    link: 'https://github.com/Strangemortal/task-manager-devops',
    icon: <Layers className="w-5 h-5 text-sky-600" />,
    iconBg: 'bg-sky-50 border-sky-100',
    spotlight: 'rgba(14, 165, 233, 0.12)'
  },
  {
    title: 'SOCIALMEET',
    category: 'Web',
    desc: 'A unified networking platform engineered to connect creators and professionals across digital social ecosystems with responsive modern UI.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX'],
    link: 'https://github.com/Strangemortal/SOCIALMEET',
    icon: <Globe className="w-5 h-5 text-emerald-600" />,
    iconBg: 'bg-emerald-50 border-emerald-100',
    spotlight: 'rgba(16, 185, 129, 0.12)'
  },
  {
    title: 'Image Processor',
    category: 'AI/ML',
    desc: 'High-performance suite of computer vision scripts for geometric image manipulation, edge detection, filtering, and pixel restoration.',
    tech: ['Python', 'OpenCV', 'NumPy', 'Matplotlib'],
    link: 'https://github.com/Strangemortal/image_processor',
    icon: <Cpu className="w-5 h-5 text-amber-600" />,
    iconBg: 'bg-amber-50 border-amber-100',
    spotlight: 'rgba(245, 158, 11, 0.12)'
  }
];

const skills = [
  { name: 'Python', level: 'Core Architecture', icon: <Code2 className="w-5 h-5 text-indigo-600" />, bg: 'bg-indigo-50 border-indigo-100', spotlight: 'rgba(99, 102, 241, 0.12)' },
  { name: 'Django', level: 'Backend & REST APIs', icon: <Database className="w-5 h-5 text-emerald-600" />, bg: 'bg-emerald-50 border-emerald-100', spotlight: 'rgba(16, 185, 129, 0.12)' },
  { name: 'React.js', level: 'Interactive UIs', icon: <Layers className="w-5 h-5 text-sky-600" />, bg: 'bg-sky-50 border-sky-100', spotlight: 'rgba(14, 165, 233, 0.12)' },
  { name: 'DevOps & CI/CD', level: 'Continuous Delivery', icon: <Terminal className="w-5 h-5 text-amber-600" />, bg: 'bg-amber-50 border-amber-100', spotlight: 'rgba(245, 158, 11, 0.12)' },
  { name: 'Machine Learning', level: 'Graph ML & Networks', icon: <Cpu className="w-5 h-5 text-violet-600" />, bg: 'bg-violet-50 border-violet-100', spotlight: 'rgba(139, 92, 246, 0.12)' },
  { name: 'Cybersecurity', level: 'Stegano & Encryption', icon: <Shield className="w-5 h-5 text-rose-600" />, bg: 'bg-rose-50 border-rose-100', spotlight: 'rgba(244, 63, 94, 0.12)' },
  { name: 'Docker', level: 'Container Orchestration', icon: <Boxes className="w-5 h-5 text-blue-600" />, bg: 'bg-blue-50 border-blue-100', spotlight: 'rgba(59, 130, 246, 0.12)' },
  { name: 'AWS Cloud', level: 'Cloud Infrastructure', icon: <Globe className="w-5 h-5 text-teal-600" />, bg: 'bg-teal-50 border-teal-100', spotlight: 'rgba(20, 184, 166, 0.12)' },
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
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-indigo-100 selection:text-indigo-700 font-sans relative overflow-x-hidden">
      
      {/* 1. DYNAMIC MOUSE FOLLOWER WITH EXPANDING AURA & RING */}
      <MouseFollower />

      {/* 2. FLOATING FROSTED GLASS NAVBAR */}
      <Navbar />

      {/* 3. LIGHT & BRIGHT INTERACTIVE CANVAS PARTICLES (Apple / Stripe style) */}
      <ParticleCanvas />

      {/* 4. SOFT LUMINOUS AMBIENT GLOWS (Bright pastel mesh, non-neon) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 40, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-5%] left-[5%] w-[45vw] h-[45vw] bg-indigo-200/40 blur-[130px] rounded-full" 
        />
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -35, 0],
            y: [0, 35, 0]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-[20%] right-[-5%] w-[45vw] h-[45vw] bg-sky-200/45 blur-[140px] rounded-full" 
        />
        <motion.div 
          animate={{
            scale: [1, 1.12, 1],
            x: [0, 25, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-[-5%] left-[20%] w-[45vw] h-[45vw] bg-violet-200/35 blur-[150px] rounded-full" 
        />
      </div>

      {/* HERO SECTION WITH DYNAMIC MOUSE PARALLAX & CONTINUOUS FLOATING ELEMENTS */}
      <section 
        onMouseMove={handleHeroMouseMove}
        className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden z-10"
      >
        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-[0.45] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute inset-0 bg-radial-gradient" />
        </div>

        {/* CONTINUOUS MOVING FLOATING BADGES WITH MOUSE PARALLAX (Raycast / Stripe style) */}
        <motion.div style={{ x: badge1X, y: badge1Y }} className="absolute inset-0 pointer-events-none">
          <div className="pointer-events-auto">
            <FloatingBadge
              icon={<Terminal className="w-4 h-4" />}
              title="Python & Django Systems"
              subtitle="High Throughput Architecture"
              className="top-[18%] left-[7%]"
              duration={5.2}
              delay={0.1}
              yOffset={14}
              themeColor="indigo"
            />

            <FloatingBadge
              icon={<Shield className="w-4 h-4" />}
              title="Stegano Cryptography"
              subtitle="Cipher Quest Winner"
              className="bottom-[18%] left-[9%]"
              duration={6.2}
              delay={1.2}
              yOffset={15}
              themeColor="emerald"
            />
          </div>
        </motion.div>

        <motion.div style={{ x: badge2X, y: badge2Y }} className="absolute inset-0 pointer-events-none">
          <div className="pointer-events-auto">
            <FloatingBadge
              icon={<Cpu className="w-4 h-4" />}
              title="Graph ML Dynamics"
              subtitle="IEEE ECMI 2026 Conference"
              className="top-[22%] right-[7%]"
              duration={6.5}
              delay={0.6}
              yOffset={16}
              themeColor="violet"
            />

            <FloatingBadge
              icon={<Layers className="w-4 h-4" />}
              title="Docker & DevOps CI/CD"
              subtitle="Automated Infrastructure"
              className="bottom-[17%] right-[8%]"
              duration={5.8}
              delay={1.8}
              yOffset={13}
              themeColor="sky"
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
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-indigo-200/80 bg-white/90 shadow-sm text-indigo-700 text-xs font-mono font-semibold tracking-wider uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-spin-slow" />
            <span>Software Engineering • AI/ML • DevOps</span>
          </motion.div>
          
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-black tracking-tight mb-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-700 bg-clip-text text-transparent drop-shadow-sm"
          >
            Bharat Bhushan
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed mb-12"
          >
            Architecting robust digital infrastructures and intelligent systems. Focused on{' '}
            <span className="text-indigo-600 font-semibold underline decoration-indigo-300 underline-offset-4">
              Scalability
            </span>
            ,{' '}
            <span className="text-violet-600 font-semibold underline decoration-violet-300 underline-offset-4">
              Security
            </span>
            , and{' '}
            <span className="text-sky-600 font-semibold underline decoration-sky-300 underline-offset-4">
              Automation
            </span>
            .
          </motion.p>

          {/* MAGNETIC BUTTONS (Raycast / Awwwards style) */}
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
              className="group relative px-8 py-4 sm:px-10 sm:py-4.5 rounded-2xl bg-slate-900 text-white font-heading font-bold text-sm tracking-wider uppercase shadow-[0_10px_25px_rgba(15,23,42,0.15)] hover:bg-indigo-600 hover:shadow-[0_15px_35px_rgba(99,102,241,0.3)] transition-all"
            >
              <span className="flex items-center gap-2.5">
                <GithubIcon className="w-5 h-5 text-white" />
                VIEW GITHUB
                <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </span>
            </MagneticButton>

            <MagneticButton
              href="https://www.linkedin.com/in/bbhushank/"
              target="_blank"
              strength={0.35}
              className="group flex items-center gap-2.5 px-8 py-4 sm:px-10 sm:py-4.5 rounded-2xl border border-slate-200/90 bg-white text-slate-800 font-heading font-bold text-sm tracking-wider uppercase shadow-sm hover:border-indigo-400 hover:text-indigo-600 hover:shadow-md transition-all"
            >
              <LinkedinIcon className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition-transform" />
              LINKEDIN
            </MagneticButton>

            <MagneticButton
              href="#projects"
              strength={0.25}
              className="flex items-center gap-2 px-6 py-4 rounded-2xl border border-transparent text-slate-600 hover:text-slate-900 text-xs font-mono uppercase tracking-wider hover:bg-white/60 transition-all"
            >
              <Compass className="w-4 h-4 text-indigo-600" />
              EXPLORE WORK
            </MagneticButton>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 pointer-events-none"
        >
          <div className="w-5 h-9 rounded-full border border-slate-300 flex justify-center pt-2 bg-white/70">
            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-indigo-600 rounded-full"
            />
          </div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">SCROLL</span>
        </motion.div>
      </section>

      {/* CONTINUOUS MOVING TECH MARQUEE (Stripe / Raycast style) */}
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-semibold uppercase tracking-wider mb-6">
                <Zap className="w-3.5 h-3.5 text-indigo-600" /> Core Philosophy
              </div>

              <h2 className="text-4xl sm:text-5xl font-heading font-black mb-8 text-slate-900 flex items-center gap-4">
                <span className="w-12 h-[3px] bg-gradient-to-r from-indigo-500 to-sky-500 rounded-full" />
                The Mission
              </h2>

              <div className="space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed font-light">
                <p>
                  I am a Computer Science Engineering student dedicated to architecting high-performance systems and intelligent applications. My journey is fueled by a relentless curiosity for how technology can solve real-world problems at scale.
                </p>
                <p>
                  From building complex{' '}
                  <span className="text-slate-900 font-medium italic underline decoration-indigo-400 underline-offset-4">
                    Django backends
                  </span>{' '}
                  to implementing{' '}
                  <span className="text-slate-900 font-medium italic underline decoration-violet-400 underline-offset-4">
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
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center hover:border-indigo-300 transition-colors">
                  <div className="text-2xl font-heading font-black text-indigo-600">IEEE</div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase mt-1">Conference Author</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center hover:border-violet-300 transition-colors">
                  <div className="text-2xl font-heading font-black text-violet-600">1st</div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase mt-1">Cipher Quest Winner</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center hover:border-emerald-300 transition-colors">
                  <div className="text-2xl font-heading font-black text-emerald-600">6+</div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase mt-1">Deployed Systems</div>
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
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-100 via-sky-100 to-transparent blur-2xl rounded-3xl" />
              <LiveTerminal />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION WITH 3D SPOTLIGHT CARDS (Linear style) */}
      <section id="skills" className="py-28 px-6 md:px-16 lg:px-28 relative z-10 bg-slate-100/60 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                <Boxes className="w-3.5 h-3.5 text-violet-600" /> Technical Arsenal
              </div>
              <h2 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-slate-900">
                Specialized <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Capabilities</span>
              </h2>
            </div>
            <p className="text-slate-600 font-mono text-sm max-w-md">
              Interactive stack matrix equipped with modern runtime tools, distributed paradigms, and defensive security.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <TiltCard
                key={skill.name}
                spotlightColor={skill.spotlight}
                className="bg-white border border-slate-200/90 shadow-sm hover:border-indigo-300 hover:shadow-[0_15px_35px_rgba(99,102,241,0.08)] group cursor-default"
              >
                <div className="p-7 flex flex-col justify-between h-44">
                  <div className="flex items-center justify-between">
                    <div className={`p-3.5 rounded-2xl border ${skill.bg} group-hover:scale-110 transition-all duration-300`}>
                      {skill.icon}
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-heading font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 mt-1">
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                <FolderGit2 className="w-3.5 h-3.5 text-indigo-600" /> Featured Repositories
              </div>
              <h2 className="text-5xl sm:text-7xl font-heading font-black italic tracking-tight uppercase text-slate-900">
                Real-World <span className="text-indigo-600">Deployments</span>
              </h2>
              <p className="text-slate-500 text-sm sm:text-base mt-2 font-mono">
                / source: github.com/Strangemortal
              </p>
            </div>

            {/* Filter Tabs with animated pill */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                    selectedCategory === cat
                      ? 'text-white font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {selectedCategory === cat && (
                    <motion.div
                      layoutId="activeFilterTab"
                      className="absolute inset-0 bg-slate-900 rounded-xl"
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
                    className="h-full bg-white border border-slate-200/90 shadow-sm hover:border-indigo-300 hover:shadow-[0_20px_45px_rgba(99,102,241,0.1)] transition-all flex flex-col justify-between"
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
                            className="p-3.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 group"
                            aria-label={`View ${project.title} repository`}
                          >
                            <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                          </a>
                        </div>

                        {/* Category tag */}
                        <div className="text-[11px] font-mono font-bold tracking-widest text-indigo-600 uppercase mb-2">
                          {project.category}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl sm:text-3xl font-heading font-black mb-3 text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-600 text-sm leading-relaxed mb-8 font-light">
                          {project.desc}
                        </p>
                      </div>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] uppercase tracking-wider font-mono px-3 py-1 rounded-lg border border-slate-200/80 bg-slate-50 text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
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
      <section id="achievements" className="py-28 px-6 md:px-16 lg:px-28 z-10 relative bg-slate-50/70 border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Recognitions & Publications
            </div>
            <h2 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-slate-900">
              Milestones & <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Honors</span>
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
                className="group relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-white border border-slate-200/90 rounded-[28px] p-8 sm:p-10 shadow-sm hover:border-indigo-300 hover:shadow-[0_15px_35px_rgba(99,102,241,0.06)] transition-all"
              >
                <div className="flex items-start md:items-center gap-6">
                  <div className="text-indigo-600 font-heading font-black text-4xl opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all font-mono">
                    0{index + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-2xl font-heading font-black text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {exp.title}
                      </h3>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 uppercase font-semibold">
                        {exp.tag}
                      </span>
                    </div>
                    <div className="text-indigo-600 text-xs mb-2 tracking-[0.2em] uppercase font-mono font-bold">
                      {exp.place}
                    </div>
                    <p className="text-slate-600 leading-relaxed font-light text-base max-w-3xl">
                      {exp.desc}
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-full bg-slate-50 border border-slate-200 text-slate-400 group-hover:text-indigo-600 group-hover:border-indigo-300 transition-colors self-end md:self-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN INSPIRATION ACKNOWLEDGMENT */}
      <section className="py-16 px-6 relative z-10 border-t border-slate-200/80 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="p-8 rounded-[24px] bg-slate-50/80 border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-indigo-600 mb-1 flex items-center gap-2 font-bold">
                <Sparkles className="w-3.5 h-3.5" /> Motion & Interactive Engineering
              </div>
              <h4 className="text-xl font-heading font-bold text-slate-900">
                Light & Bright Aesthetics Inspired by World-Class Interfaces
              </h4>
              <p className="text-slate-500 text-xs font-mono mt-1">
                Linear (3D perspective tilt & specular cursor spotlight) • Apple (interactive particle constellation physics & mouse response) • Raycast / Stripe (magnetic physics & ambient floating badges)
              </p>
            </div>
            <div className="flex gap-2 shrink-0">
              <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-mono text-slate-700 font-medium shadow-sm">Linear</span>
              <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-mono text-slate-700 font-medium shadow-sm">Apple</span>
              <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-mono text-slate-700 font-medium shadow-sm">Raycast</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION WITH MAGNETIC ACTION */}
      <section id="contact" className="py-36 px-6 relative overflow-hidden z-10 text-center bg-gradient-to-b from-white via-slate-50 to-indigo-50/30">
        
        {/* Soft center radiant aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-200/30 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-bold tracking-wider uppercase mb-8 shadow-sm">
              Initiate Collaboration
            </div>

            <h2 className="text-6xl sm:text-8xl md:text-9xl font-heading font-black tracking-tight mb-12 leading-none text-slate-950">
              LET'S <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-violet-600 bg-clip-text text-transparent">SCALE</span>.
            </h2>

            <div className="flex flex-col items-center gap-10">
              <MagneticButton
                href="mailto:bharat.workspace974@gmail.com"
                strength={0.4}
                className="group relative px-14 py-6 sm:px-20 sm:py-8 rounded-[30px] bg-slate-900 text-white font-heading font-black text-xl sm:text-2xl hover:bg-indigo-600 shadow-[0_15px_40px_rgba(15,23,42,0.18)] hover:shadow-[0_20px_50px_rgba(99,102,241,0.35)] transition-all uppercase"
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
                  className="p-5 sm:p-6 rounded-[22px] bg-white border border-slate-200 shadow-sm hover:border-indigo-300 hover:text-indigo-600 hover:shadow-md transition-all text-slate-800"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-6 h-6" />
                </MagneticButton>

                <MagneticButton
                  href="https://www.linkedin.com/in/bbhushank/"
                  target="_blank"
                  strength={0.4}
                  className="p-5 sm:p-6 rounded-[22px] bg-white border border-slate-200 shadow-sm hover:border-indigo-300 hover:text-indigo-600 hover:shadow-md transition-all text-slate-800"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-6 h-6 text-indigo-600" />
                </MagneticButton>

                <MagneticButton
                  href="mailto:bharat.workspace974@gmail.com"
                  target="_blank"
                  strength={0.4}
                  className="p-5 sm:p-6 rounded-[22px] bg-white border border-slate-200 shadow-sm hover:border-indigo-300 hover:text-indigo-600 hover:shadow-md transition-all text-slate-800"
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
      <footer className="py-12 border-t border-slate-200 text-center relative z-10 bg-white">
        <p className="text-slate-500 text-[11px] font-mono tracking-[0.25em] uppercase font-medium">
          &copy; {new Date().getFullYear()} Bharat Bhushan / Engineered for Excellence
        </p>
      </footer>
    </div>
  );
}
