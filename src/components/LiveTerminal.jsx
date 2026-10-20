import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Cpu, Activity, GitCommit } from 'lucide-react';

export default function LiveTerminal() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full rounded-[24px] border border-[#49769F]/40 bg-[#001427]/90 backdrop-blur-xl p-5 shadow-[0_20px_50px_rgba(0,10,25,0.8)] font-mono text-xs text-[#BDD8E9]">
      {/* Terminal Top Window Bar */}
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#0A4174]/60">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#49769F]" />
          <div className="w-3 h-3 rounded-full bg-[#6EA2B3]" />
          <div className="w-3 h-3 rounded-full bg-[#7BBDE8]" />
          <span className="ml-2 text-[#6EA2B3] text-[11px] font-medium">bharat@node-core:~</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#7BBDE8] animate-pulse" />
          <span className="text-[10px] text-[#7BBDE8] font-bold tracking-widest uppercase">SYSTEM READY</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="space-y-3.5">
        <div className="flex items-center gap-2 text-[#7BBDE8] font-medium">
          <span className="text-[#49769F]">$</span>
          <span>python manage.py runserver --production --telemetry</span>
        </div>

        <div className="p-3.5 rounded-xl bg-[#0A4174]/30 border border-[#4E8EA2]/30 space-y-2">
          <div className="flex justify-between items-center text-[#BDD8E9]">
            <span className="flex items-center gap-1.5 text-white font-medium">
              <Cpu className="w-3.5 h-3.5 text-[#7BBDE8]" /> Neural Engine / ML Pipeline
            </span>
            <span className="text-[#7BBDE8] font-bold">ONLINE [99.8%]</span>
          </div>
          <div className="w-full bg-[#001D39] rounded-full h-1.5 overflow-hidden border border-[#0A4174]">
            <motion.div
              className="h-full bg-gradient-to-r from-[#0A4174] via-[#4E8EA2] to-[#7BBDE8] rounded-full"
              initial={{ width: '40%' }}
              animate={{ width: ['40%', '88%', '74%', '96%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#0A4174]/30 border border-[#4E8EA2]/30 space-y-2">
          <div className="flex justify-between items-center text-[#BDD8E9]">
            <span className="flex items-center gap-1.5 text-white font-medium">
              <Shield className="w-3.5 h-3.5 text-[#6EA2B3]" /> E2EE Steganography Layer
            </span>
            <span className="text-[#BDD8E9] font-bold">AES-256 SYMMETRIC</span>
          </div>
          <div className="text-[11px] text-[#BDD8E9]/70">
            Payload verification: 0x8F92... verified via SHA-256 HMAC
          </div>
        </div>

        <div className="flex items-center justify-between pt-1 text-[11px] text-[#6EA2B3]">
          <div className="flex items-center gap-2">
            <GitCommit className="w-3.5 h-3.5 text-[#7BBDE8]" />
            <span className="text-[#BDD8E9]/80">Latest build: IEEE ECMI-26 commit</span>
          </div>
          <span className="text-[#6EA2B3]">RTT: 14ms</span>
        </div>

        <div className="flex items-center gap-2 text-[#7BBDE8] font-medium pt-1">
          <span className="text-[#49769F]">$</span>
          <span>awaiting next instruction{dots}</span>
          <span className="w-2 h-4 bg-[#7BBDE8] animate-pulse inline-block" />
        </div>
      </div>
    </div>
  );
}
