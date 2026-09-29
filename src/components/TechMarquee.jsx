import React from 'react';
import { 
  Code2, 
  Database, 
  Layers, 
  Cpu, 
  Shield, 
  Globe, 
  Terminal, 
  GitBranch, 
  Workflow, 
  Boxes,
  Zap,
  Sparkles
} from 'lucide-react';

const row1 = [
  { name: 'Python 3.12', icon: <Code2 className="w-4 h-4 text-indigo-600" /> },
  { name: 'Django REST', icon: <Database className="w-4 h-4 text-emerald-600" /> },
  { name: 'Graph ML & NetworkX', icon: <Cpu className="w-4 h-4 text-violet-600" /> },
  { name: 'Docker Containers', icon: <Layers className="w-4 h-4 text-sky-600" /> },
  { name: 'Cybersecurity & Stego', icon: <Shield className="w-4 h-4 text-rose-600" /> },
  { name: 'React & Vite', icon: <Boxes className="w-4 h-4 text-blue-600" /> },
  { name: 'CI/CD Pipelines', icon: <Workflow className="w-4 h-4 text-amber-600" /> },
  { name: 'OpenCV Vision', icon: <Sparkles className="w-4 h-4 text-pink-600" /> },
];

const row2 = [
  { name: 'Microservices Architecture', icon: <Zap className="w-4 h-4 text-amber-600" /> },
  { name: 'Git & Version Control', icon: <GitBranch className="w-4 h-4 text-orange-600" /> },
  { name: 'Shell / Bash Scripting', icon: <Terminal className="w-4 h-4 text-emerald-600" /> },
  { name: 'AWS Cloud & Deployments', icon: <Globe className="w-4 h-4 text-sky-600" /> },
  { name: 'High-Throughput Systems', icon: <Cpu className="w-4 h-4 text-indigo-600" /> },
  { name: 'End-to-End Encryption', icon: <Shield className="w-4 h-4 text-rose-600" /> },
  { name: 'Tailwind & Modern CSS', icon: <Layers className="w-4 h-4 text-teal-600" /> },
  { name: 'Conference Author (IEEE)', icon: <Sparkles className="w-4 h-4 text-purple-600" /> },
];

export default function TechMarquee() {
  return (
    <div className="relative w-full py-14 overflow-hidden border-y border-slate-200/80 bg-slate-50/70 backdrop-blur-sm">
      {/* Side gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />

      {/* Track 1: Moving Left */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] mb-4">
        {[...row1, ...row1, ...row1].map((item, index) => (
          <div
            key={`row1-${index}`}
            className="flex items-center gap-2.5 mx-2.5 px-4 py-2 rounded-full border border-slate-200/90 bg-white shadow-sm text-slate-700 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50/40 transition-all select-none group"
          >
            <span className="p-1 rounded-full bg-slate-50 group-hover:scale-110 transition-transform">
              {item.icon}
            </span>
            <span className="text-xs font-mono font-medium tracking-wide whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* Track 2: Moving Right */}
      <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
        {[...row2, ...row2, ...row2].map((item, index) => (
          <div
            key={`row2-${index}`}
            className="flex items-center gap-2.5 mx-2.5 px-4 py-2 rounded-full border border-slate-200/90 bg-white shadow-sm text-slate-700 hover:text-purple-600 hover:border-purple-300 hover:bg-purple-50/40 transition-all select-none group"
          >
            <span className="p-1 rounded-full bg-slate-50 group-hover:scale-110 transition-transform">
              {item.icon}
            </span>
            <span className="text-xs font-mono font-medium tracking-wide whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
