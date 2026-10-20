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
  { name: 'Python 3.12', icon: <Code2 className="w-4 h-4 text-[#7BBDE8]" /> },
  { name: 'Django REST', icon: <Database className="w-4 h-4 text-[#6EA2B3]" /> },
  { name: 'Graph ML & NetworkX', icon: <Cpu className="w-4 h-4 text-[#BDD8E9]" /> },
  { name: 'Docker Containers', icon: <Layers className="w-4 h-4 text-[#7BBDE8]" /> },
  { name: 'Cybersecurity & Stego', icon: <Shield className="w-4 h-4 text-[#4E8EA2]" /> },
  { name: 'React & Vite', icon: <Boxes className="w-4 h-4 text-[#7BBDE8]" /> },
  { name: 'CI/CD Pipelines', icon: <Workflow className="w-4 h-4 text-[#6EA2B3]" /> },
  { name: 'OpenCV Vision', icon: <Sparkles className="w-4 h-4 text-[#BDD8E9]" /> },
];

const row2 = [
  { name: 'Microservices Architecture', icon: <Zap className="w-4 h-4 text-[#7BBDE8]" /> },
  { name: 'Git & Version Control', icon: <GitBranch className="w-4 h-4 text-[#6EA2B3]" /> },
  { name: 'Shell / Bash Scripting', icon: <Terminal className="w-4 h-4 text-[#BDD8E9]" /> },
  { name: 'AWS Cloud & Deployments', icon: <Globe className="w-4 h-4 text-[#7BBDE8]" /> },
  { name: 'High-Throughput Systems', icon: <Cpu className="w-4 h-4 text-[#4E8EA2]" /> },
  { name: 'End-to-End Encryption', icon: <Shield className="w-4 h-4 text-[#BDD8E9]" /> },
  { name: 'Tailwind & Modern CSS', icon: <Layers className="w-4 h-4 text-[#6EA2B3]" /> },
  { name: 'Conference Author (IEEE)', icon: <Sparkles className="w-4 h-4 text-[#7BBDE8]" /> },
];

export default function TechMarquee() {
  return (
    <div className="relative w-full py-14 overflow-hidden border-y border-[#49769F]/30 bg-[#001427]/60 backdrop-blur-md">
      {/* Side gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#001D39] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#001D39] to-transparent z-10 pointer-events-none" />

      {/* Track 1: Moving Left */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] mb-4">
        {[...row1, ...row1, ...row1].map((item, index) => (
          <div
            key={`row1-${index}`}
            className="flex items-center gap-2.5 mx-2.5 px-4 py-2 rounded-full border border-[#49769F]/40 bg-[#0A4174]/35 text-[#BDD8E9] shadow-sm hover:text-white hover:border-[#7BBDE8]/70 hover:bg-[#0A4174]/70 transition-all select-none group backdrop-blur-sm cursor-default"
          >
            <span className="p-1 rounded-full bg-[#001D39]/60 group-hover:scale-110 transition-transform">
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
            className="flex items-center gap-2.5 mx-2.5 px-4 py-2 rounded-full border border-[#49769F]/40 bg-[#0A4174]/35 text-[#BDD8E9] shadow-sm hover:text-white hover:border-[#7BBDE8]/70 hover:bg-[#0A4174]/70 transition-all select-none group backdrop-blur-sm cursor-default"
          >
            <span className="p-1 rounded-full bg-[#001D39]/60 group-hover:scale-110 transition-transform">
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
