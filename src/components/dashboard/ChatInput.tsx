"use client";

import { Paperclip, Smile, Send, Sparkles, TrendingUp, Users, Target } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ChatInputProps = {
  onSend: (text: string) => void;
  disabled?: boolean;
  placeholder?: string;
};

export default function ChatInput({ onSend, disabled, placeholder }: ChatInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto relative">
      
      {/* Animated Glassmorphism Options Panel */}
      <AnimatePresence>
        {isFocused && !disabled && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: -10, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            className="absolute bottom-full left-0 right-0 mb-2 flex gap-3 px-4"
          >
            <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-xl rounded-full text-xs font-medium text-zinc-300 transition-colors shadow-lg shadow-black/50">
              <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />
              View Market Trends
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-xl rounded-full text-xs font-medium text-zinc-300 transition-colors shadow-lg shadow-black/50">
              <Users className="w-3.5 h-3.5 text-indigo-400" />
              Search YC Database
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-xl rounded-full text-xs font-medium text-zinc-300 transition-colors shadow-lg shadow-black/50 hidden sm:flex">
              <Target className="w-3.5 h-3.5 text-indigo-400" />
              Run Persona Checks
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`relative transition-all duration-300 rounded-2xl p-2 shadow-2xl flex items-center gap-2 border backdrop-blur-2xl ${isFocused ? 'bg-[#111111]/80 border-indigo-500/50 shadow-indigo-500/20' : 'bg-[#111111]/60 border-white/10 shadow-black/50'}`}>
        <div className="flex items-center gap-2 px-3 border-r border-white/10 text-indigo-400">
          <Sparkles className="w-4 h-4" />
          <span className="text-xs font-semibold tracking-wide whitespace-nowrap hidden sm:block">Core v2</span>
        </div>
        
        <input 
          type="text" 
          placeholder={placeholder || "I'm thinking of pivoting to enterprise sales..."}
          className="flex-1 bg-transparent border-none outline-none text-zinc-100 placeholder-zinc-500 text-sm md:text-base py-3 px-2"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)} // delay to allow clicks on options
          onKeyDown={(e) => {
            if (e.key === 'Enter' && e.currentTarget.value.trim()) {
              onSend(e.currentTarget.value);
              e.currentTarget.value = '';
            }
          }}
          disabled={disabled}
        />
        
        <div className="flex items-center gap-2 pr-1">
          <button className="p-2 text-zinc-500 hover:text-zinc-300 transition-colors">
            <Smile className="w-5 h-5" />
          </button>
          <button className="p-2 text-zinc-500 hover:text-zinc-300 transition-colors">
            <Paperclip className="w-5 h-5" />
          </button>
          <button 
            className="p-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-colors disabled:opacity-50 disabled:hover:bg-indigo-600"
            disabled={disabled}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
