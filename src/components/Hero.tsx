"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";

import { BuildingAnimation } from "./BuildingAnimation";
import { NetworkAnimation } from "./NetworkAnimation";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Abstract Animations */}
      <NetworkAnimation />
      <BuildingAnimation />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }} // Synchronize with the 1.2s building sequence
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 backdrop-blur-md mb-4">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            Cofound is currently in private beta
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-gradient">
            The cofounder who<br />tells you the truth.
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-sans leading-relaxed">
            Stop relying on yes-men and generic AI. Get a skeptical thinking-partner that pushes back on your ideas, finds edge cases, and grounds its critique in real market data.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/playground" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-zinc-100 text-zinc-900 rounded-full font-medium flex items-center gap-2 hover:bg-white transition-colors w-full justify-center"
              >
                Go to Dashboard
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 text-white rounded-full font-medium flex items-center gap-2 border border-white/10 hover:bg-white/10 transition-colors w-full sm:w-auto justify-center"
            >
              <PlayCircle className="w-5 h-5 text-indigo-400" />
              See how it thinks
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
