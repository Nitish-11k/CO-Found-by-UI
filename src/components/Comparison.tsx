"use client";

import { motion } from "framer-motion";
import { Bot, Brain } from "lucide-react";

export default function Comparison() {
  return (
    <section className="py-32 px-6 bg-[#0a0a0a] relative z-10">
      <div className="max-w-5xl mx-auto space-y-16">
        
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-zinc-100">
            "Isn't this just a chatbot?"
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            If you just want a text generator, use ChatGPT. Cofound is an entirely different architecture built for decision making.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl border border-white/5 bg-zinc-900/30"
          >
            <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6">
              <Bot className="w-6 h-6 text-zinc-400" />
            </div>
            <h3 className="text-xl font-bold text-zinc-200 mb-4">Generic AI Chatbots</h3>
            <ul className="space-y-4 text-zinc-400 font-sans">
              <li className="flex gap-3">
                <span className="text-red-400 shrink-0">✕</span>
                <p>Designed to be agreeable and helpful, leading to false validation of bad ideas.</p>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 shrink-0">✕</span>
                <p>Amnesia by default. Forgets who you are and what you're building every session.</p>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 shrink-0">✕</span>
                <p>One-shot generation. It outputs the first statistically likely string of words it thinks of.</p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl border border-indigo-500/20 bg-indigo-900/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Brain className="w-48 h-48" />
            </div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mb-6 border border-indigo-500/30">
                <Brain className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Cofound Architecture</h3>
              <ul className="space-y-4 text-zinc-300 font-sans">
                <li className="flex gap-3">
                  <span className="text-emerald-400 shrink-0">✓</span>
                  <p>Designed to be skeptical. Forces you to defend your assumptions with data.</p>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 shrink-0">✓</span>
                  <p>Persistent memory graph. Tracks your pivots, runway, and repeating mistakes over time.</p>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 shrink-0">✓</span>
                  <p>Structured reasoning loop. Simulates multiple personas and critiques its own answers before replying.</p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
