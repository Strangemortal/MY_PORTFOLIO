import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
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
  Compass,
  Briefcase,
  Calendar,
  MapPin,
  GraduationCap,
  Award,
  BookOpen,
  Phone,
  Bot,
  Workflow
} from 'lucide-react';

import Navbar from './components/Navbar';
import ParticleCanvas from './components/ParticleCanvas';
import MouseFollower from './components/MouseFollower';
import TiltCard from './components/TiltCard';
import MagneticButton from './components/MagneticButton';
import FloatingBadge from './components/FloatingBadge';
import TechMarquee from './components/TechMarquee';
import LiveTerminal from './components/LiveTerminal';
import ScrollReveal from './components/ScrollReveal';

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

// EXPERIENCES DATA FROM RESUME
const experiences = [
  {
    role: 'AI Software Engineering Intern',
    company: 'SAI Vision',
    location: 'Bengaluru, India',
    period: 'Aug 2026 – Oct 2026',
    type: 'Internship',
    link: 'https://saivision.in/#',
    linkLabel: 'saivision.in',
    description: [
      'Contributed to AI-powered surveillance solutions, focusing on computer vision, face detection, and face recognition workflows.',
      'Explored on-device AI model integration and lightweight face recognition architectures for resource-constrained environments.',
      'Contributed to software functionality, UI/UX design improvements, camera connectivity, and network diagnostics.',
      'Assisted in improving system troubleshooting workflows and identifying camera connectivity and configuration issues.'
    ],
    tech: ['Computer Vision', 'Face Recognition', 'On-Device AI', 'Edge Diagnostics', 'Camera Streams', 'Python'],
    icon: <Cpu className="w-5 h-5 text-[#0A4174] dark:text-[#7BBDE8]" />,
    iconBg: 'bg-[#BDD8E9]/30 dark:bg-[#0A4174]/40 border-[#BDD8E9] dark:border-[#4E8EA2]/40',
    spotlight: 'rgba(123, 189, 232, 0.2)'
  },
  {
    role: 'Web Developer Intern',
    company: 'SkillCraft Technology',
    location: 'Remote',
    period: 'Aug 2025 – Sep 2025',
    type: 'Internship',
    link: 'https://skillcrafttech.com/',
    linkLabel: 'skillcrafttech.com',
    description: [
      'Developed backend components using Python, Node.js, PostgreSQL, and JWT-based authentication.',
      'Contributed to REST API development and automated CI/CD workflows for reliable test coverage.'
    ],
    tech: ['Python', 'Node.js', 'PostgreSQL', 'JWT Authentication', 'REST APIs', 'CI/CD'],
    icon: <Database className="w-5 h-5 text-[#4E8EA2] dark:text-[#6EA2B3]" />,
    iconBg: 'bg-[#BDD8E9]/30 dark:bg-[#0A4174]/40 border-[#BDD8E9] dark:border-[#4E8EA2]/40',
    spotlight: 'rgba(110, 162, 179, 0.2)'
  },
  {
    role: 'Humanoid Robotics Software Mentor',
    company: 'Dayananda Sagar Academy of Technology and Management',
    location: 'Bengaluru, India',
    period: 'Sep 2026 – Oct 2026',
    type: 'Mentorship',
    link: 'https://dsatm.edu.in/',
    linkLabel: 'dsatm.edu.in',
    description: [
      'Guided students in Python, Linux, OpenCV, and robotics software development for interactive robotic systems.',
      'Mentored engineering teams on computer vision integration, servo motor controllers, and real-time interaction loops.'
    ],
    tech: ['Python', 'Linux', 'OpenCV', 'Robotics Software', 'Servo Controls', 'Mentorship'],
    icon: <Bot className="w-5 h-5 text-[#0A4174] dark:text-[#7BBDE8]" />,
    iconBg: 'bg-[#BDD8E9]/30 dark:bg-[#0A4174]/40 border-[#BDD8E9] dark:border-[#4E8EA2]/40',
    spotlight: 'rgba(123, 189, 232, 0.2)'
  },
  {
    role: 'Maker Space Member',
    company: 'DSATM Maker Space',
    location: 'Bengaluru, India',
    period: 'Nov 2024 – Present',
    type: 'College Community',
    link: 'https://www.linkedin.com/company/maker-space-dsatm-college/home/',
    linkLabel: 'Maker Space LinkedIn',
    description: [
      'Contributed to collaborative technical projects and hackathon-related activities within the college community.',
      'Prototyped hardware-software embedded systems, sensor telemetry architectures, and rapid engineering solutions.'
    ],
    tech: ['Embedded Systems', 'IoT', 'Hardware-Software Interfacing', 'Hackathons', 'Prototyping'],
    icon: <Zap className="w-5 h-5 text-[#49769F] dark:text-[#BDD8E9]" />,
    iconBg: 'bg-[#BDD8E9]/30 dark:bg-[#0A4174]/40 border-[#BDD8E9] dark:border-[#4E8EA2]/40',
    spotlight: 'rgba(189, 216, 233, 0.2)'
  }
];

// PROJECTS DATA FROM RESUME
const projects = [
  {
    title: 'ComplaintLens – AI Quality Co-Pilot',
    category: 'AI/ML',
    badge: 'LangChain & LangGraph',
    desc: 'AI-assisted complaint management platform with complaint logging, risk assessment, searchable records, and document processing workflows. Benchmarked mock endpoints at 3.42 ms health-check latency (285.3 req/s) with circuit-breaker protection.',
    tech: ['Python', 'FastAPI', 'React', 'LangChain', 'LangGraph', 'SQLAlchemy', 'SQLite'],
    link: 'https://github.com/Strangemortal',
    metrics: '3.42ms health latency • 285 req/s',
    icon: <Sparkles className="w-5 h-5 text-[#0A4174] dark:text-[#7BBDE8]" />,
    iconBg: 'bg-[#BDD8E9]/30 dark:bg-[#0A4174]/40 border-[#BDD8E9] dark:border-[#4E8EA2]/40',
    spotlight: 'rgba(123, 189, 232, 0.18)'
  },
  {
    title: 'TaskAssign – Workflow Management & DevOps',
    category: 'Systems',
    badge: 'Published (IJCA 2025)',
    desc: 'Built a task management platform with authentication, task workflows, protected views, and REST API support. Measured local landing-page latency at 0.80 ms, authenticated dashboard latency at 13.31 ms, with 20 passing automated tests.',
    tech: ['Django', 'SQLite', 'REST APIs', 'Docker', 'GitHub Actions', 'PyTest'],
    link: 'https://github.com/Strangemortal/TaskAssign',
    metrics: '0.80ms landing latency • 20 passing tests',
    icon: <Terminal className="w-5 h-5 text-[#0A4174] dark:text-[#7BBDE8]" />,
    iconBg: 'bg-[#BDD8E9]/30 dark:bg-[#0A4174]/40 border-[#BDD8E9] dark:border-[#4E8EA2]/40',
    spotlight: 'rgba(123, 189, 232, 0.16)'
  },
  {
    title: 'Graph-Based Disease Dynamics ML',
    category: 'AI/ML',
    badge: 'Big Data Network Pipeline',
    desc: 'Epidemiological propagation pipeline using data preprocessing, graph topological features, clustering, and ML. Ingested 535,000 rows in 2.85s (967.5 MB peak RAM); Random Forest fitting took 130.34 ms with 0.1125 ms sample inference.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'NetworkX', 'Plotly'],
    link: 'https://github.com/Strangemortal/Graph-based-Disease-Dynamics-ML',
    metrics: '535k rows in 2.85s • 0.11ms inference',
    icon: <Activity className="w-5 h-5 text-[#0A4174] dark:text-[#6EA2B3]" />,
    iconBg: 'bg-[#BDD8E9]/30 dark:bg-[#0A4174]/40 border-[#BDD8E9] dark:border-[#4E8EA2]/40',
    spotlight: 'rgba(110, 162, 179, 0.16)'
  },
  {
    title: 'Interactive AI Humanoid Robot',
    category: 'Robotics',
    badge: 'Computer Vision & Servos',
    desc: 'Worked on robotics software integrating computer vision, face recognition, voice interaction, and servo-control workflows using Adafruit ServoKit and PCA9685. Hardened security by decoupling API credentials from language model configurations.',
    tech: ['Python', 'PyQt5', 'OpenCV', 'Adafruit ServoKit', 'PCA9685', 'Voice NLP'],
    link: 'https://github.com/Strangemortal',
    metrics: 'Multi-servo PWM control • Edge Vision',
    icon: <Bot className="w-5 h-5 text-[#4E8EA2] dark:text-[#BDD8E9]" />,
    iconBg: 'bg-[#BDD8E9]/30 dark:bg-[#0A4174]/40 border-[#BDD8E9] dark:border-[#4E8EA2]/40',
    spotlight: 'rgba(189, 216, 233, 0.16)'
  },
  {
    title: 'Stegano-Share – Covert Payload Defense',
    category: 'Cybersecurity',
    badge: 'Cipher Quest – 2nd Prize',
    desc: 'High-security covert messaging system utilizing steganography to conceal encrypted payloads within images. Features symmetric cryptographic keying, SHA-256 HMAC integrity checks, and lossless payload extraction.',
    tech: ['Python', 'Django', 'Steganography', 'Cryptography', 'AES-256'],
    link: 'https://github.com/Strangemortal/Stegano-Share',
    metrics: 'E2EE Symmetric • HMAC Verification',
    icon: <Shield className="w-5 h-5 text-[#4E8EA2] dark:text-[#BDD8E9]" />,
    iconBg: 'bg-[#BDD8E9]/30 dark:bg-[#0A4174]/40 border-[#BDD8E9] dark:border-[#4E8EA2]/40',
    spotlight: 'rgba(189, 216, 233, 0.16)'
  },
  {
    title: 'Task Manager DevOps Infrastructure',
    category: 'DevOps',
    badge: 'Automated CI/CD',
    desc: 'Production-ready task infrastructure incorporating automated GitHub Actions CI/CD pipelines, containerization with Docker, automated unit testing with PyTest, and clean code formatting enforcement.',
    tech: ['Python', 'Docker', 'GitHub Actions', 'PyTest', 'Shell / Bash'],
    link: 'https://github.com/Strangemortal/task-manager-devops',
    metrics: 'Flake8 Clean • Continuous Integration',
    icon: <Layers className="w-5 h-5 text-[#49769F] dark:text-[#7BBDE8]" />,
    iconBg: 'bg-[#BDD8E9]/30 dark:bg-[#0A4174]/40 border-[#BDD8E9] dark:border-[#4E8EA2]/40',
    spotlight: 'rgba(123, 189, 232, 0.16)'
  }
];

// TECHNICAL SKILLS GROUPED FROM RESUME
const skillGroups = [
  {
    category: 'AI/ML & Computer Vision',
    icon: <Cpu className="w-5 h-5 text-[#0A4174] dark:text-[#7BBDE8]" />,
    skills: ['Scikit-learn', 'NumPy', 'OpenCV', 'NetworkX', 'Graph Algorithms', 'Model Evaluation']
  },
  {
    category: 'Generative AI',
    icon: <Sparkles className="w-5 h-5 text-[#4E8EA2] dark:text-[#6EA2B3]" />,
    skills: ['LangChain', 'LangGraph', 'LLM API Integration', 'Prompt Architecture', 'Co-Pilots']
  },
  {
    category: 'Web & Backend',
    icon: <Globe className="w-5 h-5 text-[#0A4174] dark:text-[#BDD8E9]" />,
    skills: ['React', 'FastAPI', 'Django', 'REST APIs', 'Node.js', 'JWT Auth']
  },
  {
    category: 'Languages',
    icon: <Code2 className="w-5 h-5 text-[#49769F] dark:text-[#7BBDE8]" />,
    skills: ['Python', 'C++', 'JavaScript', 'SQL']
  },
  {
    category: 'Databases',
    icon: <Database className="w-5 h-5 text-[#0A4174] dark:text-[#6EA2B3]" />,
    skills: ['SQLite', 'PostgreSQL', 'MongoDB', 'MySQL']
  },
  {
    category: 'Tools & DevOps',
    icon: <Layers className="w-5 h-5 text-[#4E8EA2] dark:text-[#BDD8E9]" />,
    skills: ['Git', 'Docker', 'GitHub Actions', 'Linux', 'PyTest', 'Postman']
  }
];

const categories = ['All', 'AI/ML', 'Systems', 'Robotics', 'DevOps', 'Cybersecurity'];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Interactive Mouse Parallax for Hero section
  const heroMouseX = useMotionValue(0);
  const heroMouseY = useMotionValue(0);

  const heroSpringConfig = { damping: 30, stiffness: 200 };
  const smoothHeroX = useSpring(heroMouseX, heroSpringConfig);
  const smoothHeroY = useSpring(heroMouseY, heroSpringConfig);

  // Scroll driven fade-out for hero
  const { scrollY } = useScroll();
  const heroContentOpacity = useTransform(scrollY, [0, 480], [1, 0.1]);
  const heroContentY = useTransform(scrollY, [0, 480], [0, 50]);
  const heroContentScale = useTransform(scrollY, [0, 480], [1, 0.96]);

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
      
      {/* 1. DYNAMIC MOUSE FOLLOWER WITH SAPPHIRE/SKY AURA */}
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

      {/* HERO SECTION WITH DYNAMIC MOUSE PARALLAX & BADGES */}
      <section 
        onMouseMove={handleHeroMouseMove}
        className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden z-10"
      >
        {/* Architectural grid background */}
        <div className="absolute inset-0 opacity-[0.35] dark:opacity-[0.4] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,65,116,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,65,116,0.08)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(73,118,159,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(73,118,159,0.12)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute inset-0 bg-radial-gradient" />
        </div>

        {/* CONTINUOUS MOVING FLOATING BADGES WITH MOUSE PARALLAX */}
        <motion.div style={{ x: badge1X, y: badge1Y }} className="absolute inset-0 pointer-events-none">
          <div className="pointer-events-auto">
            <FloatingBadge
              icon={<Cpu className="w-4 h-4 text-[#0A4174] dark:text-[#7BBDE8]" />}
              title="SAI Vision AI Intern"
              subtitle="Computer Vision & Surveillance"
              className="top-[18%] left-[7%]"
              duration={5.2}
              delay={0.1}
              yOffset={14}
              themeColor="sky"
            />

            <FloatingBadge
              icon={<Shield className="w-4 h-4 text-[#001D39] dark:text-[#BDD8E9]" />}
              title="Cipher Quest – 2nd Prize"
              subtitle="TechFusion25 Cybersecurity"
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
              icon={<Sparkles className="w-4 h-4 text-[#4E8EA2] dark:text-[#6EA2B3]" />}
              title="ComplaintLens Co-Pilot"
              subtitle="FastAPI • LangGraph • React"
              className="top-[22%] right-[7%]"
              duration={6.5}
              delay={0.6}
              yOffset={16}
              themeColor="cadet"
            />

            <FloatingBadge
              icon={<BookOpen className="w-4 h-4 text-[#0A4174] dark:text-[#7BBDE8]" />}
              title="IEEE ECMI & IJCA Author"
              subtitle="TaskAssign & AutoFlow Papers"
              className="bottom-[17%] right-[8%]"
              duration={5.8}
              delay={1.8}
              yOffset={13}
              themeColor="airforce"
            />
          </div>
        </motion.div>

        {/* HERO CONTENT */}
        <motion.div 
          style={{ opacity: heroContentOpacity, y: heroContentY, scale: heroContentScale }}
          className="relative z-10 text-center max-w-5xl mx-auto"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#BDD8E9] dark:border-[#4E8EA2]/40 bg-white/85 dark:bg-[#0A4174]/40 backdrop-blur-md shadow-sm text-[#0A4174] dark:text-[#BDD8E9] text-xs font-mono font-semibold tracking-wider uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0A4174] dark:text-[#7BBDE8] animate-spin-slow" />
            <span>AI Engineer • Software Developer • Computer Vision</span>
          </motion.div>
          
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-black tracking-tight mb-6 bg-gradient-to-b from-[#001D39] via-[#0A4174] to-[#49769F] dark:from-white dark:via-[#BDD8E9] dark:to-[#7BBDE8] bg-clip-text text-transparent drop-shadow-sm dark:drop-shadow-[0_4px_30px_rgba(10,65,116,0.5)]"
          >
            Bharat Bhushan
          </motion.h1>

          {/* Subtitle / Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-[#385c7d] dark:text-[#BDD8E9]/90 max-w-3xl mx-auto font-light leading-relaxed mb-8"
          >
            Computer Science engineer graduating in 2027 building Python-based{' '}
            <span className="text-[#0A4174] dark:text-[#7BBDE8] font-semibold underline decoration-[#0A4174]/40 dark:decoration-[#7BBDE8]/60 underline-offset-4">
              AI applications
            </span>
            ,{' '}
            <span className="text-[#001D39] dark:text-white font-semibold underline decoration-[#BDD8E9] dark:decoration-[#BDD8E9]/60 underline-offset-4">
              Computer Vision systems
            </span>
            , and{' '}
            <span className="text-[#4E8EA2] dark:text-[#6EA2B3] font-semibold underline decoration-[#4E8EA2]/40 dark:decoration-[#6EA2B3]/60 underline-offset-4">
              Full-Stack Architectures
            </span>
            .
          </motion.p>

          {/* Quick Contact & Location Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.38 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 text-xs font-mono text-[#49769F] dark:text-[#BDD8E9]/80"
          >
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 dark:bg-[#001427]/70 border border-[#BDD8E9] dark:border-[#49769F]/40">
              <MapPin className="w-3.5 h-3.5 text-[#0A4174] dark:text-[#7BBDE8]" />
              <span>Bengaluru, India</span>
            </div>
            <a 
              href="mailto:bharat.workspace974@gmail.com" 
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 dark:bg-[#001427]/70 border border-[#BDD8E9] dark:border-[#49769F]/40 hover:text-[#0A4174] dark:hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#0A4174] dark:text-[#7BBDE8]" />
              <span>bharat.workspace974@gmail.com</span>
            </a>
            <a 
              href="tel:+919739449381" 
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 dark:bg-[#001427]/70 border border-[#BDD8E9] dark:border-[#49769F]/40 hover:text-[#0A4174] dark:hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#0A4174] dark:text-[#7BBDE8]" />
              <span>+91 9739449381</span>
            </a>
          </motion.div>

          {/* MAGNETIC ACTION BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap justify-center items-center gap-4 sm:gap-5"
          >
            <MagneticButton
              href="#experience"
              strength={0.35}
              className="group relative px-8 py-4 sm:px-10 sm:py-4.5 rounded-2xl bg-[#0A4174] dark:bg-[#7BBDE8] text-white dark:text-[#001D39] font-heading font-black text-sm tracking-wider uppercase shadow-[0_10px_25px_rgba(10,65,116,0.18)] dark:shadow-[0_10px_30px_rgba(123,189,232,0.3)] hover:bg-[#001D39] dark:hover:bg-white transition-all"
            >
              <span className="flex items-center gap-2.5">
                <Briefcase className="w-4 h-4 text-white dark:text-[#001D39]" />
                EXPLORE EXPERIENCE
                <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </span>
            </MagneticButton>

            <MagneticButton
              href="https://github.com/Strangemortal"
              target="_blank"
              strength={0.35}
              className="group flex items-center gap-2.5 px-7 py-4 sm:px-8 sm:py-4.5 rounded-2xl border border-[#BDD8E9] dark:border-[#49769F]/50 bg-white dark:bg-[#0A4174]/50 backdrop-blur-md text-[#001D39] dark:text-white font-heading font-bold text-sm tracking-wider uppercase shadow-sm hover:border-[#0A4174] dark:hover:border-[#7BBDE8] hover:text-[#0A4174] dark:hover:text-[#7BBDE8] hover:bg-[#F0F7FC] dark:hover:bg-[#0A4174]/80 transition-all"
            >
              <GithubIcon className="w-5 h-5 text-[#0A4174] dark:text-[#7BBDE8] group-hover:scale-110 transition-transform" />
              GITHUB
            </MagneticButton>

            <MagneticButton
              href="https://www.linkedin.com/in/bbhushank/"
              target="_blank"
              strength={0.35}
              className="group flex items-center gap-2.5 px-7 py-4 sm:px-8 sm:py-4.5 rounded-2xl border border-[#BDD8E9] dark:border-[#49769F]/50 bg-white dark:bg-[#0A4174]/50 backdrop-blur-md text-[#001D39] dark:text-white font-heading font-bold text-sm tracking-wider uppercase shadow-sm hover:border-[#0A4174] dark:hover:border-[#7BBDE8] hover:text-[#0A4174] dark:hover:text-[#7BBDE8] hover:bg-[#F0F7FC] dark:hover:bg-[#0A4174]/80 transition-all"
            >
              <LinkedinIcon className="w-5 h-5 text-[#0A4174] dark:text-[#7BBDE8] group-hover:scale-110 transition-transform" />
              LINKEDIN
            </MagneticButton>
          </motion.div>
        </motion.div>

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
      <ScrollReveal yOffset={30} amount={0.1}>
        <TechMarquee />
      </ScrollReveal>

      {/* ABOUT & MISSION SECTION */}
      <section id="mission" className="py-28 px-6 md:px-16 lg:px-28 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* Mission Text */}
            <ScrollReveal direction="right" xOffset={-35} yOffset={25}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BDD8E9]/30 dark:bg-[#0A4174]/50 border border-[#BDD8E9] dark:border-[#4E8EA2]/40 text-[#0A4174] dark:text-[#7BBDE8] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
                <Zap className="w-3.5 h-3.5 text-[#0A4174] dark:text-[#7BBDE8]" /> Professional Focus
              </div>

              <h2 className="text-4xl sm:text-5xl font-heading font-black mb-8 text-[#001D39] dark:text-white flex items-center gap-4">
                <span className="w-12 h-[3px] bg-gradient-to-r from-[#0A4174] via-[#4E8EA2] to-[#7BBDE8] rounded-full" />
                The Mission
              </h2>

              <div className="space-y-6 text-[#385c7d] dark:text-[#BDD8E9]/90 text-base sm:text-lg leading-relaxed font-light">
                <p>
                  I am a Computer Science engineering student at Dayananda Sagar Academy of Technology and Management (graduating 2027) with hands-on experience building Python-based AI applications, computer vision systems, full-stack web platforms, and machine learning pipelines.
                </p>
                <p>
                  From engineering on-device computer vision and surveillance models at{' '}
                  <span className="text-[#001D39] dark:text-white font-medium italic underline decoration-[#0A4174] dark:decoration-[#7BBDE8] underline-offset-4">
                    SAI Vision
                  </span>{' '}
                  to architecting LLM-driven co-pilots with{' '}
                  <span className="text-[#001D39] dark:text-white font-medium italic underline decoration-[#4E8EA2] dark:decoration-[#BDD8E9] underline-offset-4">
                    LangGraph & FastAPI
                  </span>
                  , my technical work centers on sub-millisecond efficiency, robust defensive security, and scalable automation.
                </p>
                <p>
                  I also actively mentor students in robotics and Linux systems, organize college hackathons through DSATM Maker Space, and publish peer-reviewed systems research.
                </p>
              </div>

              {/* Quick stats pills */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <ScrollReveal delay={0.08} yOffset={25}>
                  <div className="p-4 rounded-2xl bg-white/90 dark:bg-[#001D39]/90 border border-[#BDD8E9] dark:border-[#49769F]/40 shadow-sm text-center hover:border-[#0A4174] dark:hover:border-[#7BBDE8]/60 transition-colors">
                    <div className="text-2xl font-heading font-black text-[#0A4174] dark:text-[#7BBDE8]">2027</div>
                    <div className="text-[11px] font-mono text-[#49769F] dark:text-[#BDD8E9]/80 uppercase mt-1">Graduation CSE</div>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={0.16} yOffset={25}>
                  <div className="p-4 rounded-2xl bg-white/90 dark:bg-[#001D39]/90 border border-[#BDD8E9] dark:border-[#49769F]/40 shadow-sm text-center hover:border-[#0A4174] dark:hover:border-[#7BBDE8]/60 transition-colors">
                    <div className="text-2xl font-heading font-black text-[#001D39] dark:text-white">8.15</div>
                    <div className="text-[11px] font-mono text-[#49769F] dark:text-[#BDD8E9]/80 uppercase mt-1">B.Tech CGPA</div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.24} yOffset={25}>
                  <div className="p-4 rounded-2xl bg-white/90 dark:bg-[#001D39]/90 border border-[#BDD8E9] dark:border-[#49769F]/40 shadow-sm text-center hover:border-[#0A4174] dark:hover:border-[#7BBDE8]/60 transition-colors">
                    <div className="text-2xl font-heading font-black text-[#4E8EA2] dark:text-[#6EA2B3]">2x</div>
                    <div className="text-[11px] font-mono text-[#49769F] dark:text-[#BDD8E9]/80 uppercase mt-1">Research Papers</div>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>

            {/* Live Terminal & Interactive Telemetry */}
            <ScrollReveal direction="left" xOffset={35} yOffset={25}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#BDD8E9]/40 dark:from-[#0A4174]/40 via-[#7BBDE8]/20 dark:via-[#4E8EA2]/25 to-transparent blur-2xl rounded-3xl" />
                <LiveTerminal />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* DEDICATED EXPERIENCE SECTION */}
      <section id="experience" className="py-28 px-6 md:px-16 lg:px-28 relative z-10 bg-white/60 dark:bg-[#001427]/70 border-y border-[#BDD8E9] dark:border-[#49769F]/30">
        <div className="max-w-7xl mx-auto">
          
          <ScrollReveal yOffset={35}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BDD8E9]/30 dark:bg-[#0A4174]/50 border border-[#BDD8E9] dark:border-[#4E8EA2]/40 text-[#0A4174] dark:text-[#7BBDE8] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                  <Briefcase className="w-3.5 h-3.5 text-[#0A4174] dark:text-[#7BBDE8]" /> Industry & Mentorship
                </div>
                <h2 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-[#001D39] dark:text-white">
                  Work <span className="bg-gradient-to-r from-[#0A4174] via-[#4E8EA2] to-[#7BBDE8] dark:from-[#7BBDE8] dark:via-[#BDD8E9] dark:to-white bg-clip-text text-transparent">Experience</span>
                </h2>
              </div>
              <p className="text-[#49769F] dark:text-[#BDD8E9]/80 font-mono text-sm max-w-md">
                Production-grade computer vision engineering, backend API development, mentorship, and embedded hardware-software initiatives.
              </p>
            </div>
          </ScrollReveal>

          {/* Experience Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <ScrollReveal
                key={exp.company + exp.role}
                delay={index * 0.1}
                yOffset={40}
                amount={0.12}
                className="h-full"
              >
                <TiltCard
                  spotlightColor={exp.spotlight}
                  className="h-full bg-white dark:bg-[#001D39]/85 border border-[#BDD8E9] dark:border-[#49769F]/35 shadow-sm dark:shadow-md hover:border-[#0A4174] dark:hover:border-[#7BBDE8]/60 hover:shadow-[0_20px_45px_rgba(10,65,116,0.12)] dark:hover:shadow-[0_20px_45px_rgba(10,65,116,0.45)] transition-all flex flex-col justify-between group"
                >
                  <div className="p-8 sm:p-10 flex flex-col h-full justify-between">
                    <div>
                      {/* Top Header: Icon, Dates, Company Link */}
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div className="flex items-center gap-4">
                          <div className={`p-3.5 rounded-2xl border ${exp.iconBg} group-hover:scale-105 transition-transform duration-300`}>
                            {exp.icon}
                          </div>
                          <div>
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#BDD8E9]/30 dark:bg-[#0A4174]/60 text-[#0A4174] dark:text-[#7BBDE8] border border-[#BDD8E9] dark:border-[#4E8EA2]/30">
                              {exp.type}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-heading font-black text-[#001D39] dark:text-white mt-1 group-hover:text-[#0A4174] dark:group-hover:text-[#7BBDE8] transition-colors">
                              {exp.company}
                            </h3>
                          </div>
                        </div>

                        {/* Link to organization */}
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold bg-[#F0F7FC] dark:bg-[#0A4174]/40 border border-[#BDD8E9] dark:border-[#49769F]/40 text-[#49769F] dark:text-[#BDD8E9] hover:bg-[#0A4174] dark:hover:bg-[#7BBDE8] hover:text-white dark:hover:text-[#001D39] hover:border-[#0A4174] dark:hover:border-[#7BBDE8] transition-all shadow-sm"
                          title={`Visit ${exp.company}`}
                        >
                          <span className="hidden sm:inline">{exp.linkLabel}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      {/* Role & Metadata */}
                      <div className="mb-6 pb-4 border-b border-[#BDD8E9]/60 dark:border-[#0A4174]/50">
                        <div className="text-base sm:text-lg font-heading font-bold text-[#0A4174] dark:text-[#7BBDE8] mb-2">
                          {exp.role}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#49769F] dark:text-[#BDD8E9]/75">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-[#0A4174] dark:text-[#7BBDE8]" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#4E8EA2] dark:text-[#6EA2B3]" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Bullet Points */}
                      <ul className="space-y-3 mb-8">
                        {exp.description.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3 text-sm text-[#385c7d] dark:text-[#BDD8E9]/85 font-light leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0A4174] dark:bg-[#7BBDE8] mt-2 flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-[#BDD8E9]/60 dark:border-[#0A4174]/60">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] uppercase tracking-wider font-mono px-3 py-1 rounded-lg border border-[#BDD8E9] dark:border-[#49769F]/40 bg-[#F0F7FC] dark:bg-[#0A4174]/30 text-[#49769F] dark:text-[#BDD8E9] hover:border-[#0A4174] dark:hover:border-[#7BBDE8]/60 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL SKILLS SECTION (FROM RESUME MATRIX) */}
      <section id="skills" className="py-28 px-6 md:px-16 lg:px-28 relative z-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal yOffset={35}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BDD8E9]/30 dark:bg-[#0A4174]/50 border border-[#BDD8E9] dark:border-[#4E8EA2]/40 text-[#0A4174] dark:text-[#7BBDE8] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                  <Boxes className="w-3.5 h-3.5 text-[#0A4174] dark:text-[#7BBDE8]" /> Technical Arsenal
                </div>
                <h2 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-[#001D39] dark:text-white">
                  Technical <span className="bg-gradient-to-r from-[#0A4174] via-[#4E8EA2] to-[#7BBDE8] dark:from-[#7BBDE8] dark:via-[#BDD8E9] dark:to-white bg-clip-text text-transparent">Skills</span>
                </h2>
              </div>
              <p className="text-[#49769F] dark:text-[#BDD8E9]/80 font-mono text-sm max-w-md">
                Mastered frameworks, distributed systems, deep computer vision, and defensive security tooling.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, index) => (
              <ScrollReveal
                key={group.category}
                delay={(index % 3) * 0.08}
                yOffset={35}
                amount={0.12}
                className="h-full"
              >
                <TiltCard
                  spotlightColor="rgba(123, 189, 232, 0.14)"
                  className="h-full bg-white dark:bg-[#001D39]/85 border border-[#BDD8E9] dark:border-[#49769F]/35 shadow-sm dark:shadow-md hover:border-[#0A4174] dark:hover:border-[#7BBDE8]/60 transition-all flex flex-col justify-between group"
                >
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 rounded-2xl bg-[#BDD8E9]/30 dark:bg-[#0A4174]/40 border border-[#BDD8E9] dark:border-[#49769F]/40 group-hover:scale-105 transition-transform">
                        {group.icon}
                      </div>
                      <span className="text-[10px] font-mono text-[#49769F] dark:text-[#6EA2B3] uppercase tracking-widest font-semibold">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-heading font-bold text-[#001D39] dark:text-white mb-4 group-hover:text-[#0A4174] dark:group-hover:text-[#7BBDE8] transition-colors">
                      {group.category}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((s) => (
                        <span
                          key={s}
                          className="text-xs font-mono px-3 py-1.5 rounded-xl border border-[#BDD8E9] dark:border-[#4E8EA2]/30 bg-[#F0F7FC] dark:bg-[#001427]/60 text-[#001D39] dark:text-[#BDD8E9] hover:border-[#0A4174] dark:hover:border-[#7BBDE8] hover:text-[#0A4174] dark:hover:text-white transition-colors"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED PROJECTS SECTION WITH PERSPECTIVE TILT */}
      <section id="projects" className="py-32 px-6 md:px-16 lg:px-28 z-10 relative bg-white/40 dark:bg-[#001427]/50 border-t border-[#BDD8E9] dark:border-[#49769F]/30">
        <div className="max-w-7xl mx-auto">
          
          <ScrollReveal yOffset={35}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BDD8E9]/30 dark:bg-[#0A4174]/50 border border-[#BDD8E9] dark:border-[#4E8EA2]/40 text-[#0A4174] dark:text-[#7BBDE8] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                  <FolderGit2 className="w-3.5 h-3.5 text-[#0A4174] dark:text-[#7BBDE8]" /> Selected Projects
                </div>
                <h2 className="text-5xl sm:text-7xl font-heading font-black italic tracking-tight uppercase text-[#001D39] dark:text-white">
                  Engineered <span className="bg-gradient-to-r from-[#0A4174] to-[#4E8EA2] dark:from-[#7BBDE8] dark:to-[#BDD8E9] bg-clip-text text-transparent">Systems</span>
                </h2>
                <p className="text-[#49769F] dark:text-[#6EA2B3] text-sm sm:text-base mt-2 font-mono">
                  / github.com/Strangemortal
                </p>
              </div>

              {/* Filter Tabs */}
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
          </ScrollReveal>

          {/* Grid of Projects */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <ScrollReveal
                  key={project.title}
                  delay={(index % 3) * 0.1}
                  yOffset={45}
                  amount={0.15}
                  className="h-full"
                >
                  <TiltCard
                    spotlightColor={project.spotlight}
                    className="h-full bg-white dark:bg-[#001D39]/85 border border-[#BDD8E9] dark:border-[#49769F]/35 shadow-sm dark:shadow-md hover:border-[#0A4174] dark:hover:border-[#7BBDE8]/60 hover:shadow-[0_20px_45px_rgba(10,65,116,0.12)] dark:hover:shadow-[0_20px_45px_rgba(10,65,116,0.5)] transition-all flex flex-col justify-between"
                  >
                    <div className="p-8 sm:p-10 flex flex-col h-full justify-between">
                      <div>
                        {/* Header: Icon & GitHub Arrow Link */}
                        <div className="flex justify-between items-start mb-6">
                          <div className={`p-4 rounded-2xl border ${project.iconBg} transition-all duration-300`}>
                            {project.icon}
                          </div>
                          
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="p-3.5 rounded-full bg-[#F0F7FC] dark:bg-[#0A4174]/40 border border-[#BDD8E9] dark:border-[#49769F]/40 text-[#49769F] dark:text-[#BDD8E9] hover:bg-[#0A4174] dark:hover:bg-[#7BBDE8] hover:text-white dark:hover:text-[#001D39] hover:border-[#0A4174] dark:hover:border-[#7BBDE8] transition-all duration-300 group shadow-sm"
                            aria-label={`View ${project.title} on GitHub`}
                            title="View on GitHub"
                          >
                            <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                          </a>
                        </div>

                        {/* Category & Badge */}
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-mono font-bold tracking-widest text-[#0A4174] dark:text-[#7BBDE8] uppercase">
                            {project.category}
                          </span>
                          <span className="text-[#BDD8E9] dark:text-[#49769F]">•</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#BDD8E9]/30 dark:bg-[#0A4174]/50 border border-[#BDD8E9] dark:border-[#4E8EA2]/30 text-[#0A4174] dark:text-[#7BBDE8]">
                            {project.badge}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-heading font-black mb-3 text-[#001D39] dark:text-white group-hover:text-[#0A4174] dark:group-hover:text-[#7BBDE8] transition-colors">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[#385c7d] dark:text-[#BDD8E9]/85 text-sm leading-relaxed mb-6 font-light">
                          {project.desc}
                        </p>

                        {/* Latency / Performance Metrics Tag */}
                        <div className="mb-6 p-2.5 rounded-xl bg-[#F0F7FC] dark:bg-[#001427]/70 border border-[#BDD8E9] dark:border-[#4E8EA2]/30 text-xs font-mono text-[#0A4174] dark:text-[#7BBDE8] flex items-center gap-2">
                          <Activity className="w-3.5 h-3.5 text-[#0A4174] dark:text-[#7BBDE8]" />
                          <span>{project.metrics}</span>
                        </div>
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
                </ScrollReveal>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* EDUCATION & ACHIEVEMENTS SECTION */}
      <section id="achievements" className="py-28 px-6 md:px-16 lg:px-28 z-10 relative bg-white/70 dark:bg-[#001427]/80 border-t border-[#BDD8E9] dark:border-[#49769F]/30">
        <div className="max-w-6xl mx-auto">
          
          <ScrollReveal yOffset={35}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BDD8E9]/30 dark:bg-[#0A4174]/50 border border-[#BDD8E9] dark:border-[#4E8EA2]/40 text-[#0A4174] dark:text-[#7BBDE8] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                <Award className="w-3.5 h-3.5 text-[#0A4174] dark:text-[#7BBDE8]" /> Academics & Recognitions
              </div>
              <h2 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-[#001D39] dark:text-white">
                Education & <span className="bg-gradient-to-r from-[#0A4174] via-[#4E8EA2] to-[#7BBDE8] dark:from-[#7BBDE8] dark:via-[#BDD8E9] dark:to-white bg-clip-text text-transparent">Milestones</span>
              </h2>
            </div>
          </ScrollReveal>
          
          {/* Education Spotlight Card */}
          <ScrollReveal yOffset={30} className="mb-8">
            <div className="p-8 sm:p-10 rounded-[28px] bg-white dark:bg-[#001D39]/90 border border-[#BDD8E9] dark:border-[#49769F]/40 shadow-sm dark:shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#0A4174] dark:hover:border-[#7BBDE8]/60 transition-colors">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-[#BDD8E9]/30 dark:bg-[#0A4174]/40 border border-[#BDD8E9] dark:border-[#4E8EA2]/40 text-[#0A4174] dark:text-[#7BBDE8]">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#BDD8E9]/30 dark:bg-[#0A4174]/70 border border-[#BDD8E9] dark:border-[#4E8EA2]/40 text-[#0A4174] dark:text-[#7BBDE8] uppercase font-semibold">
                      Undergraduate
                    </span>
                    <span className="text-xs font-mono text-[#49769F] dark:text-[#6EA2B3]">Expected 2027</span>
                  </div>
                  <h3 className="text-2xl font-heading font-black text-[#001D39] dark:text-white">
                    Dayananda Sagar Academy of Technology and Management
                  </h3>
                  <div className="text-base text-[#0A4174] dark:text-[#7BBDE8] font-semibold mt-1">
                    B.Tech in Computer Science and Engineering
                  </div>
                  <div className="text-xs font-mono text-[#49769F] dark:text-[#BDD8E9]/75 mt-1">
                    Bengaluru, India • Academic Standing: <span className="font-bold text-[#001D39] dark:text-white">CGPA 8.15 / 10</span>
                  </div>
                </div>
              </div>

              <a
                href="https://dsatm.edu.in/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold bg-[#F0F7FC] dark:bg-[#0A4174]/40 border border-[#BDD8E9] dark:border-[#49769F]/40 text-[#0A4174] dark:text-[#7BBDE8] hover:bg-[#0A4174] dark:hover:bg-[#7BBDE8] hover:text-white dark:hover:text-[#001D39] transition-all self-start md:self-center"
              >
                <span>Institution Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </ScrollReveal>

          {/* Key Achievements List */}
          <div className="grid gap-5">
            {[
              { 
                title: 'Cipher Quest Winner', 
                place: 'TechFusion25 Cybersecurity Competition', 
                desc: 'Secured 2nd Prize in an intensive cybersecurity capture-the-flag tournament, demonstrating advanced threat analysis, steganographic payload extraction, and cryptographic decryption.',
                tag: '2nd Prize',
                link: 'https://github.com/Strangemortal/Stegano-Share'
              },
              { 
                title: 'Research Publications', 
                place: 'TaskAssign (IJCA 2025) & AutoFlow (IEEE ECMI 2026)', 
                desc: 'Author of peer-reviewed research papers on role-free workflow paradigms (TaskAssign) and intelligent permission-aware automation (AutoFlow) accepted at IEEE ECMI and IJCA.',
                tag: 'Peer Reviewed',
                link: 'https://github.com/Strangemortal/TaskAssign'
              },
              { 
                title: 'Humanoid Robot Boot Camp 2026', 
                place: 'Advanced Robotics Selection', 
                desc: 'Selected for intensive Humanoid Robot Boot Camp focusing on kinematics, multi-servo real-time control routines, OpenCV vision processing, and sensor fusion.',
                tag: 'Selected Cohort',
                link: 'https://github.com/Strangemortal'
              },
              { 
                title: 'Technical Events & Hackathons', 
                place: 'DSATM Technical Community', 
                desc: 'Participated in and contributed to organizing college technical events, hackathon activities, and open-source workshops for engineering students.',
                tag: 'Organizer & Contributor',
                link: 'https://www.linkedin.com/company/maker-space-dsatm-college/home/'
              }
            ].map((item, index) => (
              <ScrollReveal
                key={item.title}
                delay={index * 0.1}
                yOffset={35}
                amount={0.15}
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="group relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-white dark:bg-[#001D39]/85 border border-[#BDD8E9] dark:border-[#49769F]/35 rounded-[24px] p-7 sm:p-8 shadow-sm dark:shadow-md hover:border-[#0A4174] dark:hover:border-[#7BBDE8]/60 transition-all"
                >
                  <div className="flex items-start md:items-center gap-5">
                    <div className="text-[#0A4174] dark:text-[#7BBDE8] font-heading font-black text-3xl opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all font-mono">
                      0{index + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-heading font-black text-[#001D39] dark:text-white group-hover:text-[#0A4174] dark:group-hover:text-[#7BBDE8] transition-colors">
                          {item.title}
                        </h3>
                        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#BDD8E9]/30 dark:bg-[#0A4174]/70 border border-[#BDD8E9] dark:border-[#4E8EA2]/40 text-[#0A4174] dark:text-[#7BBDE8] uppercase font-semibold">
                          {item.tag}
                        </span>
                      </div>
                      <div className="text-[#4E8EA2] dark:text-[#6EA2B3] text-xs mb-2 tracking-wider uppercase font-mono font-bold">
                        {item.place}
                      </div>
                      <p className="text-[#385c7d] dark:text-[#BDD8E9]/85 leading-relaxed font-light text-sm max-w-3xl">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-[#F0F7FC] dark:bg-[#0A4174]/40 border border-[#BDD8E9] dark:border-[#49769F]/40 text-[#49769F] dark:text-[#6EA2B3] group-hover:text-[#0A4174] dark:group-hover:text-[#7BBDE8] group-hover:border-[#0A4174] dark:group-hover:border-[#7BBDE8] transition-colors self-end md:self-center"
                    title="View related link"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION WITH MAGNETIC ACTION */}
      <section id="contact" className="py-36 px-6 relative overflow-hidden z-10 text-center bg-gradient-to-b from-[#F0F7FC] via-white to-[#E1EFF8] dark:from-[#001D39] dark:via-[#001427] dark:to-[#001121]">
        
        {/* Soft center radiant aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#BDD8E9]/40 dark:bg-[#0A4174]/35 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal yOffset={40} scale={0.93}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#BDD8E9]/40 dark:bg-[#0A4174]/60 border border-[#BDD8E9] dark:border-[#4E8EA2]/40 text-[#0A4174] dark:text-[#7BBDE8] text-xs font-mono font-bold tracking-wider uppercase mb-8 shadow-sm">
              Connect With Bharat
            </div>

            <h2 className="text-6xl sm:text-8xl md:text-9xl font-heading font-black tracking-tight mb-8 leading-none text-[#001D39] dark:text-white">
              LET'S <span className="bg-gradient-to-r from-[#0A4174] via-[#4E8EA2] to-[#7BBDE8] dark:from-[#7BBDE8] dark:via-[#BDD8E9] dark:to-white bg-clip-text text-transparent">BUILD</span>.
            </h2>

            <p className="text-[#385c7d] dark:text-[#BDD8E9]/90 text-lg max-w-2xl mx-auto mb-10 font-light">
              Available for software engineering roles, computer vision research, AI development, and innovative systems collaborations.
            </p>

            <div className="flex flex-col items-center gap-10">
              <MagneticButton
                href="mailto:bharat.workspace974@gmail.com"
                strength={0.4}
                className="group relative px-14 py-6 sm:px-20 sm:py-8 rounded-[30px] bg-[#0A4174] dark:bg-[#7BBDE8] text-white dark:text-[#001D39] font-heading font-black text-xl sm:text-2xl hover:bg-[#001D39] dark:hover:bg-white shadow-[0_15px_40px_rgba(10,65,116,0.22)] dark:shadow-[0_15px_40px_rgba(123,189,232,0.35)] hover:shadow-[0_20px_50px_rgba(10,65,116,0.35)] dark:hover:shadow-[0_20px_50px_rgba(123,189,232,0.5)] transition-all uppercase"
              >
                <span className="flex items-center gap-4">
                  <span>Send an Email</span>
                  <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </span>
              </MagneticButton>
              
              {/* Interactive Magnetic Social & Direct Contact Icons */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                <MagneticButton
                  href="https://github.com/Strangemortal"
                  target="_blank"
                  strength={0.4}
                  className="p-5 sm:p-6 rounded-[22px] bg-white dark:bg-[#0A4174]/50 border border-[#BDD8E9] dark:border-[#49769F]/40 shadow-sm hover:border-[#0A4174] dark:hover:border-[#7BBDE8] hover:text-[#0A4174] dark:hover:text-[#7BBDE8] hover:shadow-md transition-all text-[#001D39] dark:text-[#BDD8E9]"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-6 h-6" />
                </MagneticButton>

                <MagneticButton
                  href="https://www.linkedin.com/in/bbhushank/"
                  target="_blank"
                  strength={0.4}
                  className="p-5 sm:p-6 rounded-[22px] bg-white dark:bg-[#0A4174]/50 border border-[#BDD8E9] dark:border-[#49769F]/40 shadow-sm hover:border-[#0A4174] dark:hover:border-[#7BBDE8] hover:text-[#0A4174] dark:hover:text-[#7BBDE8] hover:shadow-md transition-all text-[#001D39] dark:text-[#BDD8E9]"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-6 h-6 text-[#0A4174] dark:text-[#7BBDE8]" />
                </MagneticButton>

                <MagneticButton
                  href="mailto:bharat.workspace974@gmail.com"
                  strength={0.4}
                  className="p-5 sm:p-6 rounded-[22px] bg-white dark:bg-[#0A4174]/50 border border-[#BDD8E9] dark:border-[#49769F]/40 shadow-sm hover:border-[#0A4174] dark:hover:border-[#7BBDE8] hover:text-[#0A4174] dark:hover:text-[#7BBDE8] hover:shadow-md transition-all text-[#001D39] dark:text-[#BDD8E9]"
                  aria-label="Email Bharat"
                  title="bharat.workspace974@gmail.com"
                >
                  <Mail className="w-6 h-6" />
                </MagneticButton>

                <MagneticButton
                  href="tel:+919739449381"
                  strength={0.4}
                  className="p-5 sm:p-6 rounded-[22px] bg-white dark:bg-[#0A4174]/50 border border-[#BDD8E9] dark:border-[#49769F]/40 shadow-sm hover:border-[#0A4174] dark:hover:border-[#7BBDE8] hover:text-[#0A4174] dark:hover:text-[#7BBDE8] hover:shadow-md transition-all text-[#001D39] dark:text-[#BDD8E9]"
                  aria-label="Call Bharat"
                  title="+91 9739449381"
                >
                  <Phone className="w-6 h-6" />
                </MagneticButton>
              </div>

              {/* Direct textual contact summary */}
              <div className="pt-2 text-xs font-mono text-[#49769F] dark:text-[#BDD8E9]/70 space-y-1">
                <div>Bengaluru, India • (+91) 9739449381</div>
                <div>bharat.workspace974@gmail.com</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-[#BDD8E9] dark:border-[#49769F]/30 text-center relative z-10 bg-white/80 dark:bg-[#001427]/80 backdrop-blur-md">
        <p className="text-[#49769F] dark:text-[#6EA2B3] text-[11px] font-mono tracking-[0.25em] uppercase font-medium">
          &copy; {new Date().getFullYear()} Bharat Bhushan • AI Engineer & Software Developer • Bengaluru, India
        </p>
      </footer>
    </div>
  );
}
