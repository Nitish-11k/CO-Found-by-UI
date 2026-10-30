"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

export function NetworkAnimation() {
  const prefersReducedMotion = useReducedMotion();
  const [sequenceKey, setSequenceKey] = useState(0);

  // Loop every 12 seconds
  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setSequenceKey((k) => k + 1);
    }, 12000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const nodes = [
    { id: "n1", cx: 200, cy: 100, delay: 0.5 },
    { id: "n2", cx: 300, cy: 150, delay: 1.0 },
    { id: "n3", cx: 250, cy: 250, delay: 1.5 },
    { id: "n4", cx: 120, cy: 200, delay: 2.0 },
    { id: "n5", cx: 150, cy: 50, delay: 2.5 },
  ];

  const edges = [
    { id: "e1", x1: 200, y1: 100, x2: 300, y2: 150, delay: 1.2 },
    { id: "e2", x1: 300, y1: 150, x2: 250, y2: 250, delay: 1.7 },
    { id: "e3", x1: 250, y1: 250, x2: 120, y2: 200, delay: 2.2 },
    { id: "e4", x1: 120, y1: 200, x2: 200, y2: 100, delay: 2.7 },
    { id: "e5", x1: 200, y1: 100, x2: 150, y2: 50, delay: 3.0 },
    { id: "e6", x1: 150, y1: 50, x2: 120, y2: 200, delay: 3.5 },
  ];

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (custom: number) => ({
      pathLength: 1,
      opacity: 0.4,
      transition: {
        pathLength: { delay: custom, type: "spring", duration: 1.5, bounce: 0 } as const,
        opacity: { delay: custom, duration: 0.2 } as const,
      },
    }),
  } satisfies Variants;

  return (
    <div className="absolute inset-0 z-0 flex items-start justify-end opacity-40 pointer-events-none overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 relative h-full flex items-start justify-end mt-12 md:mt-24">
        <svg
          key={sequenceKey}
          viewBox="0 0 400 400"
          className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] absolute -right-12 lg:right-0 opacity-70"
        >
          {/* Edges */}
          {edges.map((edge) => (
            <motion.line
              key={edge.id}
              x1={edge.x1}
              y1={edge.y1}
              x2={edge.x2}
              y2={edge.y2}
              stroke="#6366f1" // indigo-500
              strokeWidth="2"
              custom={edge.delay}
              initial={prefersReducedMotion ? { pathLength: 1, opacity: 0.4 } : "hidden"}
              animate={prefersReducedMotion ? { pathLength: 1, opacity: 0.4 } : "visible"}
              variants={pathVariants}
            />
          ))}

          {/* Nodes */}
          {nodes.map((node) => (
            <motion.circle
              key={node.id}
              cx={node.cx}
              cy={node.cy}
              r="6"
              fill="#1e1b4b" // indigo-950
              stroke="#818cf8" // indigo-400
              strokeWidth="2"
              initial={prefersReducedMotion ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              animate={prefersReducedMotion ? { scale: 1, opacity: 1 } : { scale: 1, opacity: 1 }}
              transition={{
                delay: node.delay,
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
            />
          ))}

          {/* Pulsing highlights on specific nodes to simulate data transfer */}
          <motion.circle
            cx={200}
            cy={100}
            r="12"
            fill="#a5b4fc" // indigo-300
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0 }}
            animate={prefersReducedMotion ? { opacity: 0 } : { opacity: [0, 0.4, 0], scale: [0.5, 1.5, 2] }}
            transition={{
              delay: 4,
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
          />
        </svg>
      </div>
    </div>
  );
}
