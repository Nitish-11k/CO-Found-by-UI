"use client";

import { motion } from "framer-motion";

export default function Explainer() {
  return (
    <section className="py-32 px-6 bg-[#0a0a0a] relative z-10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-100">
            A daily check-in that actually pushes your business forward.
          </h2>
          
          <div className="space-y-8 text-lg md:text-xl text-zinc-400 font-sans leading-relaxed">
            <p>
              Most tools are designed to agree with you. When you pitch an idea to a chatbot, it tells you why you're a genius. That feels good, but it's dangerous for a solo founder. You don't need another yes-man—you need someone to ask the hard questions before the market does.
            </p>
            <p>
              Cofound is a thinking-partner built for the reality of building alone. It doesn't just nod along. It looks for the flaws in your logic, runs your ideas against real market data, and forces you to defend your decisions.
            </p>
            <p>
              Instead of guessing what works, it acts as your skeptical investor, your lead engineer, and your toughest customer. It remembers your past choices, spots bad patterns over time, and keeps you honest. It's the friction you need to build something real.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
