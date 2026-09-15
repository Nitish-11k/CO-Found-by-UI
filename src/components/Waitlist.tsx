"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("submitting");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1000);
  };

  return (
    <section className="py-32 px-6 bg-[#0a0a0a] relative z-10 border-t border-white/5">
      <div className="max-w-2xl mx-auto text-center space-y-12">
        
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-100">
            Stop building in an echo chamber.
          </h2>
          <p className="text-xl text-zinc-400 font-sans">
            Cofound is currently in private beta. Join the waitlist to get early access.
          </p>
        </div>

        <div className="max-w-md mx-auto h-16 relative">
          <AnimatePresence mode="wait">
            {status !== "success" ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit}
                className="relative flex items-center h-full"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@startup.com"
                  className="w-full h-full bg-zinc-900 border border-white/10 rounded-full px-6 pr-32 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 font-sans"
                  disabled={status === "submitting"}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={status === "submitting" || !email}
                  className="absolute right-2 top-2 bottom-2 px-6 bg-zinc-100 text-zinc-900 rounded-full font-medium flex items-center gap-2 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <div className="w-5 h-5 border-2 border-zinc-900/30 border-t-zinc-900 rounded-full animate-spin" />
                  ) : (
                    <>
                      Join
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex items-center justify-center gap-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full px-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                >
                  <CheckCircle2 className="w-6 h-6" />
                </motion.div>
                <span className="font-medium">You're on the list. We'll be in touch.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
      </div>
    </section>
  );
}
