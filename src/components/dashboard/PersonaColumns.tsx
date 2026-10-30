"use client";

import { motion, type Variants } from "framer-motion";

type PersonaColumnProps = {
  active: boolean;
};

export default function PersonaColumns({ active }: PersonaColumnProps) {
  if (!active) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  } satisfies Variants;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 } as const,
    },
  } satisfies Variants;

  const personas = [
    {
      title: "Investor",
      points: [
        "How to capital efficiently rebuild this?",
        "How to ensure margins don't compress during the transition?",
        "A reserve nominal change could impact mutual implementations.",
        "Are the early adopters ready for this?"
      ]
    },
    {
      title: "Engineer",
      points: [
        "Complex architecture rebuilds with iterative compliance are non-trivial.",
        "The conjectures of performance have not been stress-tested.",
        "Time horizons: perpetual cascading refactors.",
        "Employing host architecture here dismantles previous optimizations."
      ]
    },
    {
      title: "Customer",
      points: [
        "Long onboarding friction for simple actions.",
        "Test me with the current friction points first.",
        "Advanced features just get in my way right now.",
        "Only limits me from acting quickly.",
        "Current workflow has less clicks than proposed workflow."
      ]
    }
  ];

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full overflow-y-auto pr-2 pb-32 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      style={{ maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)" }}
    >
      {personas.map((persona, index) => (
        <motion.div 
          key={persona.title}
          variants={itemVariants}
          className="bg-zinc-900/40 border border-white/5 rounded-xl p-5 backdrop-blur-md h-fit"
        >
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
            <h3 className="text-xl font-display font-medium text-zinc-100">{persona.title}</h3>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
            </div>
          </div>
          <ul className="space-y-4">
            {persona.points.map((point, i) => (
              <li key={i} className="text-sm text-zinc-300 flex items-start gap-3">
                <span className="text-indigo-500 mt-1 flex-shrink-0">•</span>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
}
