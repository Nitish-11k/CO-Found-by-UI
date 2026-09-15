"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageSquare, Users, Database, CheckSquare, History } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Adversarial self-critique",
    description: "It proposes a solution, then immediately tries to break its own idea before it ever shows it to you.",
    icon: MessageSquare,
    uiSnippet: (
      <div className="flex flex-col gap-3 w-full max-w-sm">
        <div className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-700/50 text-sm text-zinc-300">
          <span className="text-emerald-400 font-medium mb-1 block">Proposal:</span>
          We should switch to a freemium model to boost user acquisition.
        </div>
        <div className="bg-indigo-900/20 p-4 rounded-xl border border-indigo-500/20 text-sm text-zinc-300 self-end">
          <span className="text-indigo-400 font-medium mb-1 block">Critique:</span>
          Wait. Our churn rate is 8%. Adding free users will drown support and spike infrastructure costs without fixing retention.
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Multiple personas",
    description: "It simulates a skeptical investor, a cynical engineer, and a confused customer, showing you exactly where they disagree.",
    icon: Users,
    uiSnippet: (
      <div className="flex flex-col gap-2 w-full max-w-sm">
        <div className="flex items-center gap-3 bg-zinc-800/40 p-3 rounded-lg border border-zinc-700/50">
          <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold">INV</div>
          <p className="text-xs text-zinc-400">"Market is too crowded."</p>
        </div>
        <div className="flex items-center gap-3 bg-zinc-800/40 p-3 rounded-lg border border-zinc-700/50">
          <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-xs font-bold">ENG</div>
          <p className="text-xs text-zinc-400">"Migration will take 3 months."</p>
        </div>
        <div className="flex items-center gap-3 bg-zinc-800/40 p-3 rounded-lg border border-zinc-700/50">
          <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 text-xs font-bold">CUS</div>
          <p className="text-xs text-zinc-400">"I just want a simpler dashboard."</p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Real-data grounding",
    description: "It searches for actual market data and comparable startup failures instead of offering generalized platitudes.",
    icon: Database,
    uiSnippet: (
      <div className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-700/50 text-sm text-zinc-300 w-full max-w-sm">
        <div className="flex items-center gap-2 text-xs text-zinc-500 mb-3">
          <Database className="w-3 h-3" />
          <span>Searching YC combinator database...</span>
        </div>
        <p className="mb-2">Found 14 similar startups in the last 3 years.</p>
        <div className="space-y-1">
          <div className="w-full bg-zinc-700/50 h-2 rounded-full overflow-hidden">
            <div className="bg-red-500/80 h-full w-[70%]" />
          </div>
          <p className="text-xs text-zinc-500">70% pivoted away from B2C</p>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Domain-specific checklists",
    description: "It runs your decisions through rigid checklists built from real founder experience, catching the small things you miss.",
    icon: CheckSquare,
    uiSnippet: (
      <div className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-700/50 text-sm text-zinc-300 w-full max-w-sm space-y-2">
        <div className="flex items-start gap-2">
          <div className="mt-0.5 text-emerald-400">☑</div>
          <p className="text-zinc-400">Clear value prop</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="mt-0.5 text-emerald-400">☑</div>
          <p className="text-zinc-400">Technical feasibility</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="mt-0.5 text-red-400">☒</div>
          <p className="text-zinc-100">Distribution advantage</p>
        </div>
        <p className="text-xs text-red-400 mt-2 pl-6">Missing: How do we acquire users cheaper than incumbents?</p>
      </div>
    )
  },
  {
    id: 5,
    title: "Long-term memory",
    description: "It remembers your past decisions, tracks your pivots, and flags when you're repeating the same mistakes.",
    icon: History,
    uiSnippet: (
      <div className="bg-indigo-900/20 p-4 rounded-xl border border-indigo-500/20 text-sm text-zinc-300 w-full max-w-sm">
        <div className="flex items-center gap-2 text-indigo-400 mb-2">
          <History className="w-4 h-4" />
          <span className="font-medium text-xs uppercase tracking-wider">Memory Recall</span>
        </div>
        <p>
          "You proposed a similar architecture rewrite 4 months ago. We decided against it because it delayed the MVP launch. Are we in a better position to absorb that delay now?"
        </p>
      </div>
    )
  }
];

function getBoundedValues(inputs: number[], outputs: number[]) {
  const resultInputs: number[] = [];
  const resultOutputs: number[] = [];

  for (let i = 0; i < inputs.length - 1; i++) {
    const x0 = inputs[i];
    const x1 = inputs[i + 1];
    const y0 = outputs[i];
    const y1 = outputs[i + 1];

    if (x1 <= 0 || x0 >= 1) continue;

    const startX = Math.max(0, x0);
    const endX = Math.min(1, x1);

    if (resultInputs.length === 0 || resultInputs[resultInputs.length - 1] !== startX) {
      resultInputs.push(startX);
      const startY = y0 + ((startX - x0) / (x1 - x0)) * (y1 - y0);
      resultOutputs.push(startY);
    }

    if (resultInputs[resultInputs.length - 1] !== endX) {
      resultInputs.push(endX);
      const endY = y0 + ((endX - x0) / (x1 - x0)) * (y1 - y0);
      resultOutputs.push(endY);
    }
  }
  
  if (resultInputs.length === 0) {
    return { inputs: [0, 1], outputs: [outputs[0], outputs[outputs.length - 1]] };
  }
  
  // Ensure the animation timeline starts at exactly 0 and ends at exactly 1
  // This prevents elements from falling back to default opacity: 1 outside their active ranges
  if (resultInputs[0] > 0) {
    resultInputs.unshift(0);
    resultOutputs.unshift(resultOutputs[0]);
  }
  
  if (resultInputs[resultInputs.length - 1] < 1) {
    resultInputs.push(1);
    resultOutputs.push(resultOutputs[resultOutputs.length - 1]);
  }

  return { inputs: resultInputs, outputs: resultOutputs };
}

export default function ReasoningSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative bg-[#0a0a0a]" style={{ height: "500vh" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
        {/* Progress indicator */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
          {steps.map((step, index) => {
            const rawInputs = [
              (index - 0.5) / steps.length, 
              index / steps.length, 
              (index + 0.5) / steps.length
            ];
            const rawOutputs = [0.3, 1, 0.3];
            const { inputs, outputs } = getBoundedValues(rawInputs, rawOutputs);
            
            const isActive = useTransform(scrollYProgress, inputs, outputs);
            return (
              <motion.div
                key={`dot-${step.id}`}
                className="w-1.5 h-1.5 rounded-full bg-zinc-400"
                style={{ opacity: isActive, scale: isActive }}
              />
            );
          })}
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="max-w-6xl w-full px-12 md:px-24 mx-auto relative h-full flex items-center">
            {steps.map((step, index) => {
              const start = index / steps.length;
              const end = (index + 1) / steps.length;
              const peak = (start + end) / 2;

              // Opacity logic: fade in, hold, fade out
              const opacityRawInputs = [start - 0.05, peak, end + 0.05];
              const opacityRawOutputs = [0, 1, 0];
              const { inputs: opacityInputs, outputs: opacityOutputs } = getBoundedValues(opacityRawInputs, opacityRawOutputs);
              const opacity = useTransform(scrollYProgress, opacityInputs, opacityOutputs);

              // Translate Y for subtle movement
              const yRawInputs = [start, peak, end];
              const yRawOutputs = [50, 0, -50];
              const { inputs: yInputs, outputs: yOutputs } = getBoundedValues(yRawInputs, yRawOutputs);
              const y = useTransform(scrollYProgress, yInputs, yOutputs);

              const Icon = step.icon;

              return (
                <motion.div
                  key={step.id}
                  style={{ opacity, y }}
                  className="absolute inset-0 flex flex-col md:flex-row items-center justify-between gap-12 pointer-events-auto"
                >
                  <div className="flex-1 space-y-6 md:pr-12">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                      <Icon className="w-6 h-6 text-indigo-400" />
                    </div>
                    <h3 className="text-3xl md:text-5xl font-display font-bold text-zinc-100">
                      {step.title}
                    </h3>
                    <p className="text-lg text-zinc-400 font-sans leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  <div className="flex-1 flex justify-center md:justify-end">
                    <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-purple-500/5 rounded-3xl border border-white/5" />
                      <div className="relative z-10 p-8 w-full flex items-center justify-center">
                        {step.uiSnippet}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
