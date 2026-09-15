"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ExternalLink, CheckCircle2 } from "lucide-react";

type TrendAnalyzerProps = {
  active: boolean;
};

// Inline citation component
const Citation = ({ source }: { source: string }) => (
  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 mx-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[10px] cursor-help group relative">
    {source}
    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block w-48 p-2 bg-zinc-800 text-zinc-300 text-xs rounded border border-white/10 shadow-xl z-50">
      Source: {source} database. Verified 2 hours ago.
    </span>
  </span>
);

export default function TrendAnalyzer({ active }: TrendAnalyzerProps) {
  const [completedPhases, setCompletedPhases] = useState<Record<string, boolean>>({});
  const [showVerdict, setShowVerdict] = useState(false);

  useEffect(() => {
    if (!active) {
      setCompletedPhases({});
      setShowVerdict(false);
      return;
    }

    // Simulate asynchronous parallel agent completion
    const timers = [
      setTimeout(() => setCompletedPhases(prev => ({ ...prev, "Timing Risk": true })), 2000),
      setTimeout(() => setCompletedPhases(prev => ({ ...prev, "Customer Demand": true })), 3500),
      setTimeout(() => setCompletedPhases(prev => ({ ...prev, "Historical Pattern": true })), 4500),
      setTimeout(() => setCompletedPhases(prev => ({ ...prev, "Market Signals": true })), 5500),
      setTimeout(() => setShowVerdict(true), 6500)
    ];

    return () => timers.forEach(clearTimeout);
  }, [active]);

  if (!active) return null;

  const analysts = [
    {
      title: "Market Signals",
      content: (
        <div className="space-y-3">
          <p>Oura and Whoop already saturate the premium segment.<Citation source="G2 Data" /> High barrier to entry for new hardware players.</p>
          <p>Consumer hardware funding dropped 43% YoY in Q3.<Citation source="Crunchbase" /> VCs are avoiding capital-intensive wearables.</p>
        </div>
      )
    },
    {
      title: "Customer Demand",
      content: (
        <div className="space-y-3">
          <p>Search volume for "AI fitness tracker" is up 12%<Citation source="Google Trends" /> but sentiment analysis shows skepticism regarding subscription fatigue.</p>
          <p>Users prefer software integrations with existing Apple Watches over new hardware.</p>
        </div>
      )
    },
    {
      title: "Timing Risk",
      content: (
        <div className="space-y-3">
          <p>Supply chain lead times for custom bio-sensors currently sit at 6-8 months.<Citation source="Supplier Index" /></p>
          <p>Launching now places hardware delivery perfectly in the post-holiday slump.</p>
        </div>
      )
    },
    {
      title: "Historical Pattern",
      content: (
        <div className="space-y-3">
          <p>Pattern match: 4 similar hardware startups pivoted to software-only within 18 months of seed funding.<Citation source="YC Archive" /></p>
          <p>Hardware pivots from software founders have a 92% failure rate before Series A.</p>
        </div>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <div className="w-full">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {analysts.map((analyst) => {
          const isComplete = completedPhases[analyst.title];
          
          return (
            <motion.div 
              key={analyst.title}
              variants={itemVariants}
              className={`bg-zinc-900/40 border rounded-xl p-5 backdrop-blur-md h-fit transition-colors duration-500 ${isComplete ? 'border-white/10' : 'border-indigo-500/30 shadow-[0_0_15px_rgba(79,70,229,0.1)]'}`}
            >
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  {isComplete ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin" />
                  )}
                  <h3 className="text-sm font-medium text-zinc-100">{analyst.title}</h3>
                </div>
              </div>
              
              <div className="text-sm text-zinc-300 leading-relaxed">
                {isComplete ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    {analyst.content}
                  </motion.div>
                ) : (
                  <div className="space-y-2 animate-pulse">
                    <div className="h-3 bg-white/5 rounded w-full"></div>
                    <div className="h-3 bg-white/5 rounded w-5/6"></div>
                    <div className="h-3 bg-white/5 rounded w-4/6"></div>
                    <div className="h-3 bg-white/5 rounded w-full mt-4"></div>
                    <div className="h-3 bg-white/5 rounded w-3/6"></div>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Team Verdict Synthesis */}
      {showVerdict && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
          className="mt-8 bg-zinc-900/80 border border-red-500/30 rounded-2xl p-6 backdrop-blur-xl relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
              <ExternalLink className="w-6 h-6 text-red-400" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-display font-bold text-white flex items-center gap-3">
                Team Verdict: High Hardware Risk
                <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-red-500/20 text-red-400 border border-red-500/30">
                  Critical Warning
                </span>
              </h3>
              <p className="text-zinc-300 leading-relaxed max-w-3xl">
                The analysts agree: building an AI fitness tracker introduces severe capital and supply chain risks that you are not equipped to handle. Search demand exists, but it's dominated by entrenched incumbents. <strong className="text-red-300">Stick to software.</strong> If you proceed, you have a 92% historical probability of failing before Series A.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
