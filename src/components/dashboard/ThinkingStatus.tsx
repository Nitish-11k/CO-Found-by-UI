"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export default function ThinkingStatus() {
  const statuses = [
    "Analyzing intent...",
    "Querying Market Data (Live)...",
    "Running the skeptic pass...",
    "Cross-referencing past decisions...",
    "Synthesizing team verdict..."
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= statuses.length - 1) return;
    
    const timeouts = [
      setTimeout(() => setCurrentIndex(1), 1000),
      setTimeout(() => setCurrentIndex(2), 2500),
      setTimeout(() => setCurrentIndex(3), 4000),
      setTimeout(() => setCurrentIndex(4), 5500)
    ];
    
    return () => timeouts.forEach(clearTimeout);
  }, [currentIndex]);

  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full w-fit">
      <Loader2 className="w-4 h-4 text-indigo-400 animate-spin" />
      <div className="relative h-5 overflow-hidden w-64">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute inset-0 text-sm font-medium text-zinc-300 truncate"
          >
            {statuses[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
