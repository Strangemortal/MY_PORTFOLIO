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
    <div className="w-full rounded-[24px] border border-slate-200/90 bg-white/95 backdrop-blur-xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.06)] font-mono text-xs">
      {/* Terminal Top Window Bar */}
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-emerald-400" />
          <span className="ml-2 text-slate-500 text-[11px] font-medium">bharat@node-core:~</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] text-emerald-700 font-bold tracking-widest uppercase">SYSTEM READY</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="space-y-3 text-slate-700">
        <div className="flex items-center gap-2 text-indigo-600 font-medium">
          <span className="text-slate-400">$</span>
          <span>python manage.py runserver --production --telemetry</span>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-2">
          <div className="flex justify-between items-center text-slate-600">
            <span className="flex items-center gap-1.5 text-indigo-600 font-medium">
              <Cpu className="w-3.5 h-3.5" /> Neural Engine / ML Pipeline
            </span>
            <span className="text-emerald-600 font-bold">ONLINE [99.8%]</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 to-sky-500 rounded-full"
              initial={{ width: '40%' }}
              animate={{ width: ['40%', '88%', '74%', '96%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-2">
          <div className="flex justify-between items-center text-slate-600">
            <span className="flex items-center gap-1.5 text-violet-600 font-medium">
              <Shield className="w-3.5 h-3.5" /> E2EE Steganography Layer
            </span>
            <span className="text-violet-700 font-bold">AES-256 SYMMETRIC</span>
          </div>
          <div className="text-[11px] text-slate-500">
            Payload verification: 0x8F92... verified via SHA-256 HMAC
          </div>
        </div>

        <div className="flex items-center justify-between pt-1 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <GitCommit className="w-3.5 h-3.5 text-indigo-500" />
            <span>Latest build: IEEE ECMI-26 commit</span>
          </div>
          <span className="text-slate-400">RTT: 14ms</span>
        </div>

        <div className="flex items-center gap-2 text-indigo-600 font-medium pt-1">
          <span className="text-slate-400">$</span>
          <span>awaiting next instruction{dots}</span>
          <span className="w-2 h-4 bg-indigo-600 animate-pulse inline-block" />
        </div>
      </div>
    </div>
  );
}
