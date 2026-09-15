"use client";

import { motion } from "framer-motion";

export default function DemoShowcase() {
  return (
    <section className="py-32 px-6 bg-[#0a0a0a] relative z-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl border border-white/10 bg-zinc-900/50 shadow-2xl overflow-hidden backdrop-blur-sm max-w-3xl mx-auto"
        >
          {/* Mac-style window header */}
          <div className="flex items-center px-4 py-3 border-b border-white/5 bg-black/40">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
            </div>
            <div className="mx-auto text-xs font-medium text-zinc-500">cofound.ai / session</div>
          </div>
          
          {/* Video Player Body */}
          <div className="relative w-full aspect-video bg-black/50 overflow-hidden">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Subtle overlay to blend it slightly with the dark theme */}
            <div className="absolute inset-0 pointer-events-none mix-blend-overlay bg-indigo-500/5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
