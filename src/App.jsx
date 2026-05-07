import React from 'react';
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
  ArrowRight
} from 'lucide-react';

// Custom SVG Icons for Brands
const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const projects = [
  {
    title: 'TaskAssign',
    desc: 'A role-free, user-focused task assignment system designed to streamline task tracking between admins and users with a clean UI.',
    tech: ['Python', 'Django', 'Bootstrap'],
    link: 'https://github.com/Strangemortal/TaskAssign',
    icon: <Terminal className="w-6 h-6 text-cyan-400" />
  },
  {
    title: 'Stegano-Share',
    desc: 'Secure messaging system utilizing steganography to hide encrypted messages within images. Features unique symmetric keys for E2EE.',
    tech: ['Python', 'Django', 'Steganography'],
    link: 'https://github.com/Strangemortal/Stegano-Share',
    icon: <Shield className="w-6 h-6 text-purple-400" />
  },
  {
    title: 'Disease Dynamics ML',
    desc: 'Graph-based machine learning project to visualize and analyze the complex dynamics of disease spread using network theory.',
    tech: ['Python', 'ML', 'NetworkX', 'Data Viz'],
    link: 'https://github.com/Strangemortal/Graph-based-Disease-Dynamics-ML',
    icon: <Activity className="w-6 h-6 text-red-400" />
  },
  {
    title: 'Task Manager DevOps',
    desc: 'Efficiency-focused management system incorporating DevOps principles, CI/CD pipelines, and containerization.',
    tech: ['Python', 'Shell', 'DevOps', 'Docker'],
    link: 'https://github.com/Strangemortal/task-manager-devops',
    icon: <Layers className="w-6 h-6 text-blue-400" />
  },
  {
    title: 'SOCIALMEET',
    desc: 'A streamlined platform designed to help users connect across various social media platforms effortlessly.',
    tech: ['HTML', 'CSS', 'UI/UX'],
    link: 'https://github.com/Strangemortal/SOCIALMEET',
    icon: <Globe className="w-6 h-6 text-green-400" />
  },
  {
    title: 'Image Processor',
    desc: 'High-performance collection of Python scripts for image manipulation, edge detection, and restoration using OpenCV.',
    tech: ['Python', 'OpenCV', 'NumPy', 'Matplotlib'],
    link: 'https://github.com/Strangemortal/image_processor',
    icon: <Cpu className="w-6 h-6 text-yellow-400" />
  }
];

const skills = [
  { name: 'Python', icon: <Code2 className="w-5 h-5" /> },
  { name: 'Django', icon: <Database className="w-5 h-5" /> },
  { name: 'React.js', icon: <Layers className="w-5 h-5" /> },
  { name: 'DevOps', icon: <Terminal className="w-5 h-5" /> },
  { name: 'Machine Learning', icon: <Cpu className="w-5 h-5" /> },
  { name: 'Cybersecurity', icon: <Shield className="w-5 h-5" /> },
  { name: 'Docker', icon: <Layers className="w-5 h-5" /> },
  { name: 'AWS', icon: <Globe className="w-5 h-5" /> },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-cyan-500/30 selection:text-cyan-200 font-sans">
      {/* GLOW BACKGROUNDS */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden z-10">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="inline-block mb-6 px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-widest uppercase">
            Software Engineering • AI/ML • DevOps
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            Bharat Bhushan
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-12">
            Building robust digital infrastructures and intelligent systems. Focused on <span className="text-cyan-400 font-medium">Scalability</span>, <span className="text-purple-400 font-medium">Security</span>, and <span className="text-blue-400 font-medium">Automation</span>.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://github.com/Strangemortal"
              target="_blank"
              className="group flex items-center gap-2 px-10 py-5 rounded-2xl bg-cyan-500 text-black font-black transition-all hover:scale-105"
            >
              <GithubIcon className="w-5 h-5" />
              VIEW GITHUB
            </a>

            <a
              href="https://www.linkedin.com/in/bbhushank/"
              target="_blank"
              className="flex items-center gap-2 px-10 py-5 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md transition-all hover:bg-white/10"
            >
              <LinkedinIcon className="w-5 h-5 text-cyan-400" />
              LINKEDIN
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT & SKILLS */}
      <section className="py-32 px-6 md:px-16 lg:px-28 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-5xl font-bold mb-10 flex items-center gap-6">
                <span className="w-16 h-[2px] bg-cyan-500"></span>
                The Mission
              </h2>
              <div className="space-y-8 text-gray-400 text-lg leading-relaxed font-light">
                <p>
                  I am a Computer Science Engineering student dedicated to architecting high-performance systems and intelligent applications. My journey is fueled by a relentless curiosity for how technology can solve real-world problems at scale.
                </p>
                <p>
                  From building complex <span className="text-white font-medium italic underline decoration-cyan-500/50">Django backends</span> to implementing <span className="text-white font-medium italic underline decoration-purple-500/50">Graph-based ML models</span>, I thrive in environments that challenge my technical depth and creative problem-solving.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-4 bg-white/[0.02] border border-white/10 rounded-2xl p-6 transition-all group hover:border-cyan-500/40 hover:bg-white/[0.04]"
                >
                  <div className="p-3 rounded-xl bg-white/5 text-cyan-400 group-hover:text-white transition-colors">
                    {skill.icon}
                  </div>
                  <span className="font-bold text-xs tracking-widest text-gray-400 group-hover:text-white transition-colors uppercase">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="py-32 px-6 md:px-16 lg:px-28 bg-[#050505] z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-6xl font-black italic tracking-tighter uppercase relative z-10">Real-World <span className="text-cyan-500">Deployments</span></h2>
            <p className="text-gray-500 text-xl mt-4 font-mono">/ source: github.com/Strangemortal</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative flex flex-col h-full"
              >
                <div className="relative z-10 flex flex-col h-full bg-white/[0.02] border border-white/5 rounded-[40px] p-10 transition-all duration-500 group-hover:border-cyan-500/30 group-hover:bg-white/[0.04] group-hover:-translate-y-4 overflow-hidden">
                  
                  <div className="flex justify-between items-start mb-10">
                    <div className="p-4 rounded-[20px] bg-white/5 border border-white/5 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-500">
                      {project.icon}
                    </div>
                    <a href={project.link} target="_blank" className="p-3 rounded-full hover:bg-white/10 transition-colors">
                      <ArrowRight className="w-6 h-6 text-gray-500 -rotate-45 group-hover:rotate-0 group-hover:text-cyan-400 transition-all duration-500" />
                    </a>
                  </div>

                  <h3 className="text-3xl font-black mb-6 group-hover:tracking-wider transition-all duration-500">
                    {project.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-10 flex-grow group-hover:text-gray-300 transition-colors">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] uppercase tracking-[0.2em] font-black px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 text-gray-500 group-hover:border-cyan-500/20 group-hover:text-cyan-400 transition-all">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-32 px-6 md:px-16 lg:px-28 z-10 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black mb-20 text-center tracking-widest uppercase text-white/50">Achievements</h2>
          
          <div className="grid gap-8">
            {[
              { title: 'Maker Space Member', place: 'DSATM', desc: 'Developing embedded systems and AI-integrated prototypes that bridge the gap between software and hardware.' },
              { title: 'Cipher Quest Winner', place: 'Cybersecurity', desc: 'Secured top honors in a high-stakes cybersecurity challenge, demonstrating advanced threat analysis and mitigation skills.' },
              { title: 'Research Publications', place: 'IEEE/ECMI', desc: 'Author of research papers on TaskAssign and AutoFlow, accepted at prestigious conferences like IEEE ECMI 2026.' }
            ].map((exp, index) => (
              <div
                key={exp.title}
                className="group flex flex-col md:flex-row gap-8 bg-white/[0.01] border border-white/5 rounded-[32px] p-10 hover:bg-white/[0.03] hover:border-white/10 transition-all"
              >
                <div className="text-cyan-500 font-black text-4xl opacity-20 group-hover:opacity-100 transition-opacity">0{index + 1}</div>
                <div>
                  <h3 className="text-3xl font-black mb-2">{exp.title}</h3>
                  <div className="text-cyan-400 text-sm mb-6 tracking-[0.3em] uppercase font-black">{exp.place}</div>
                  <p className="text-gray-500 leading-relaxed font-light text-lg group-hover:text-gray-300 transition-colors">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-48 px-6 relative overflow-hidden z-10 text-center">
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-7xl md:text-9xl font-black tracking-tighter mb-16 leading-none">
            LET'S <span className="text-cyan-500">SCALE</span>.
          </h2>

          <div className="flex flex-col items-center gap-12">
            <a
              href="mailto:bharat.workspace974@gmail.com"
              className="px-16 py-8 rounded-[30px] bg-white text-black font-black text-2xl hover:bg-cyan-500 shadow-[0_0_60px_rgba(6,182,212,0.2)] transition-all uppercase hover:scale-105"
            >
              Contact Bharat
            </a>
            
            <div className="flex items-center gap-6">
                <a href="https://github.com/Strangemortal" target="_blank" className="p-6 rounded-[24px] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-all">
                  <GithubIcon className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/bbhushank/" target="_blank" className="p-6 rounded-[24px] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-all">
                  <LinkedinIcon className="w-6 h-6" />
                </a>
                <a href="mailto:bharat.workspace974@gmail.com" target="_blank" className="p-6 rounded-[24px] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-all">
                  <Mail className="w-6 h-6" />
                </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center relative z-10">
        <p className="text-gray-600 text-[10px] tracking-[0.3em] uppercase">
          &copy; 2024 Bharat Bhushan / Engineered for Excellence
        </p>
      </footer>
    </div>
  );
}
