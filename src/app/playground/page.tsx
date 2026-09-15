"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import ChatInput from "@/components/dashboard/ChatInput";
import MemoryPanel from "@/components/dashboard/MemoryPanel";
import TrendAnalyzer from "@/components/dashboard/TrendAnalyzer";
import ThinkingStatus from "@/components/dashboard/ThinkingStatus";
import { motion, AnimatePresence } from "framer-motion";

export default function PlaygroundPage() {
  const [hasSearched, setHasSearched] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [showMemory, setShowMemory] = useState(false);
  const [userQuery, setUserQuery] = useState("");
  const [queryCount, setQueryCount] = useState(0);

  const handleSearch = (query: string) => {
    if (queryCount >= 2) return;
    setQueryCount(prev => prev + 1);
    
    setUserQuery(query);
    setHasSearched(true);
    setIsThinking(true);
    
    // Simulate thinking time before showing results
    setTimeout(() => {
      setIsThinking(false);
    }, 6000);
  };

  return (
    <div className="flex h-screen w-full bg-[#050505] overflow-hidden font-sans text-zinc-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative h-full">
        {/* Header */}
        <header className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#0a0a0a]/80 backdrop-blur-md z-10 flex-shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-zinc-300 font-medium text-sm">Session: Fitness Tracker Pivot</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-zinc-800" />
          </div>
        </header>

        {/* Dashboard Content Grid */}
        <div className="flex-1 overflow-hidden relative">
          
          {/* Default state before search */}
          {!hasSearched && (
            <div className="absolute inset-0 flex items-center justify-center pb-20">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-indigo-600/10 rounded-2xl flex items-center justify-center mx-auto border border-indigo-500/20 shadow-[0_0_30px_rgba(79,70,229,0.15)]">
                  <div className="w-8 h-8 bg-indigo-500 rounded-lg animate-pulse" />
                </div>
                <h2 className="text-2xl font-display font-medium text-zinc-300">Ready to break an idea?</h2>
                <p className="text-zinc-500">Select a quick action or type a new pivot below.</p>
              </div>
            </div>
          )}

          {/* Active Analysis State */}
          <div className="absolute inset-0 p-6 flex gap-6 overflow-hidden">
            <div className="flex-1 min-w-0 h-full flex flex-col pb-32 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" style={{ maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)" }}>
              
              <AnimatePresence>
                {hasSearched && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full flex justify-end mb-8"
                  >
                    <div className="max-w-xl bg-white/5 border border-white/10 rounded-2xl rounded-tr-sm px-5 py-3 backdrop-blur-xl text-zinc-200 shadow-lg">
                      {userQuery}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence mode="wait">
                {isThinking ? (
                  <motion.div 
                    key="thinking"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex justify-start"
                  >
                    <ThinkingStatus />
                  </motion.div>
                ) : hasSearched ? (
                  <motion.div 
                    key="results"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex-1"
                  >
                    <TrendAnalyzer active={true} />
                  </motion.div>
                ) : null}
              </AnimatePresence>
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
        </div>

        {/* Floating Input Area */}
        <div className="absolute bottom-6 left-0 right-0 px-6 z-50 flex flex-col items-center pointer-events-none">
          <div className="pointer-events-auto w-full">
            <ChatInput 
              onSend={handleSearch} 
              disabled={isThinking || queryCount >= 2} 
              placeholder={queryCount >= 2 ? "Session limit reached (2/2 queries used)." : undefined}
            />
          </div>
          
          <AnimatePresence>
            {hasSearched && !showMemory && (
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onClick={() => setShowMemory(true)}
                className="mt-3 text-xs font-medium text-zinc-500 hover:text-indigo-400 transition-colors flex items-center gap-1.5 pointer-events-auto bg-[#0a0a0a] px-3 py-1.5 rounded-full border border-white/5"
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
