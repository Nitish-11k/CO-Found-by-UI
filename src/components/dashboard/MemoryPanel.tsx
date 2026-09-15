"use client";

import { motion } from "framer-motion";
import { History, X } from "lucide-react";

type MemoryPanelProps = {
  active: boolean;
  onClose?: () => void;
};

export default function MemoryPanel({ active, onClose }: MemoryPanelProps) {
  if (!active) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="w-full h-full bg-zinc-900/60 border-l border-white/5 backdrop-blur-xl flex flex-col"
    >
      <div className="flex items-center justify-between p-4 border-b border-white/5">
        <div className="flex items-center gap-2 text-indigo-400">
          <History className="w-5 h-5" />
          <span className="font-medium">Memory Recall</span>
        </div>
        {onClose && (
          <button onClick={onClose} className="p-1 text-zinc-500 hover:text-zinc-300">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <div 
        className="flex-1 overflow-y-auto p-4 space-y-4 pb-32 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        style={{ maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)" }}
      >
        <div className="bg-black/30 rounded-lg p-3 border border-white/5">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs text-zinc-500 font-medium">17 weeks ago</span>
            <span className="px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-[10px] uppercase">Pivoted</span>
          </div>
          <p className="text-sm text-zinc-300">"Enterprise pivot wasn't the nominal pattern. Foundational base set to 5 months."</p>
        </div>

        <div className="bg-black/30 rounded-lg p-3 border border-white/5">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs text-zinc-500 font-medium">12 weeks ago</span>
          </div>
          <p className="text-sm text-zinc-300">"We need a self-serve motion to survive."</p>
        </div>

        <div className="mt-6">
          <div className="text-xs font-medium text-zinc-500 mb-3 uppercase tracking-wider">Market Data Match</div>
          <div className="w-full aspect-video bg-[#050505] rounded-lg border border-white/5 p-3 flex flex-col justify-end relative overflow-hidden">
            <div className="absolute top-3 left-3 text-xs text-zinc-400">6-9 month sales cycles</div>
            
            {/* Fake graph lines */}
            <svg viewBox="0 0 100 50" className="w-full h-full mt-4 stroke-indigo-500 fill-none" preserveAspectRatio="none">
              <path d="M 0 40 L 20 30 L 40 45 L 60 20 L 80 10 L 100 15" strokeWidth="2" />
              <path d="M 0 50 L 20 30 L 40 45 L 60 20 L 80 10 L 100 15 L 100 50 Z" className="fill-indigo-500/10 stroke-none" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
