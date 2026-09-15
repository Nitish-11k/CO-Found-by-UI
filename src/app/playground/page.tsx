"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import PersonaColumns from "@/components/dashboard/PersonaColumns";
import ChatInput from "@/components/dashboard/ChatInput";
import MemoryPanel from "@/components/dashboard/MemoryPanel";
import { motion, AnimatePresence } from "framer-motion";

export default function PlaygroundPage() {
  const [hasSearched, setHasSearched] = useState(false);
  const [showVerdict, setShowVerdict] = useState(false);
  const [showMemory, setShowMemory] = useState(false);

  const handleSearch = () => {
    setHasSearched(true);
    // Simulate the verdict popping up after a delay, as seen in the video
    setTimeout(() => {
      setShowVerdict(true);
    }, 4000);
  };

  return (
    <div className="flex h-screen w-full bg-[#050505] overflow-hidden font-sans text-zinc-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative h-full">
        {/* Header */}
        <header className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-black/20 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="text-zinc-300 font-medium">Session: Pricing Pivot</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-zinc-800" />
          </div>
        </header>

        {/* Dashboard Content Grid */}
        <div className="flex-1 overflow-hidden relative">
          
          {/* Default state before search */}
          {!hasSearched && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-indigo-600/10 rounded-2xl flex items-center justify-center mx-auto border border-indigo-500/20">
                  <div className="w-8 h-8 bg-indigo-500 rounded-lg animate-pulse" />
                </div>
                <h2 className="text-2xl font-display font-medium text-zinc-300">Ready to break an idea?</h2>
                <p className="text-zinc-500">Type a new pivot, feature, or structural change below.</p>
              </div>
            </div>
          )}

          {/* Active Analysis State */}
          <div className="absolute inset-0 p-6 flex gap-6 overflow-hidden">
            <div className="flex-1 min-w-0 h-full flex flex-col pb-24">
              <PersonaColumns active={hasSearched} />
            </div>
            
            {/* Memory Sidebar - appears via toggle */}
            <AnimatePresence>
              {showMemory && (
                <motion.div 
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 320, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="h-full pb-24 hidden lg:block overflow-hidden"
                >
                  <div className="w-80 h-full">
                    <MemoryPanel active={true} onClose={() => setShowMemory(false)} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Verdict Modal overlay */}
          <AnimatePresence>
            {showVerdict && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6"
              >
                <div className="bg-zinc-900 border border-indigo-500/30 rounded-2xl p-8 max-w-lg w-full shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent pointer-events-none" />
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">C</div>
                      <h3 className="text-2xl font-display font-bold text-white">Verdict</h3>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium text-indigo-300">Confidence: Low</h4>
                      <p className="text-zinc-300 leading-relaxed">
                        The core tech might be the same, but the go-to-market is completely different. 
                        You don't have the runway to survive a 9-month enterprise sales cycle. 
                        Stick to the developer-first self-serve motion, or raise funding before pivoting.
                      </p>
                    </div>
                    <button 
                      onClick={() => setShowVerdict(false)}
                      className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors font-medium mt-4"
                    >
                      Acknowledge
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Floating Input Area */}
        <div className="absolute bottom-6 left-0 right-0 px-6 z-50 flex flex-col items-center">
          <ChatInput onSend={handleSearch} disabled={hasSearched} />
          
          <AnimatePresence>
            {hasSearched && !showMemory && (
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onClick={() => setShowMemory(true)}
                className="mt-3 text-xs font-medium text-zinc-500 hover:text-indigo-400 transition-colors flex items-center gap-1.5"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>
                View Memory Recall
              </motion.button>
            )}
          </AnimatePresence>
        </div>
        
      </div>
    </div>
  );
}
