"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function BuildingAnimation() {
  const prefersReducedMotion = useReducedMotion();
  const [sequenceKey, setSequenceKey] = useState(0);

  // Loop the animation every 8 seconds if reduced motion is false
  useEffect(() => {
    if (prefersReducedMotion) return;
    
    const interval = setInterval(() => {
      setSequenceKey((k) => k + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const blocks = [
    {
      id: "foundation",
      label: "Idea",
      labelPos: { x: 50, y: 320 },
      shape: { x: 100, y: 300, w: 200, h: 30 },
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      delay: 0,
    },
    {
      id: "floor1",
      label: "Customer validation",
      labelPos: { x: -10, y: 285 },
      shape: { x: 120, y: 260, w: 160, h: 40 },
      initial: { x: -50, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      delay: 0.3,
    },
    {
      id: "pillar-l",
      label: "Hard question asked",
      labelPos: { x: -20, y: 200 },
      shape: { x: 130, y: 140, w: 30, h: 120 },
      initial: { y: -50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      delay: 0.6,
    },
    {
      id: "pillar-r",
      label: "Pattern spotted",
      labelPos: { x: 285, y: 200 },
      shape: { x: 240, y: 140, w: 30, h: 120 },
      initial: { y: -50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      delay: 0.8,
    },
    {
      id: "capstone",
      label: "Decision",
      labelPos: { x: 40, y: 125 },
      shape: { x: 110, y: 100, w: 180, h: 40 },
      initial: { y: -50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      delay: 1.2,
    },
  ];

  return (
    <div className="absolute inset-0 z-0 flex items-center justify-start opacity-40 pointer-events-none overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 relative h-full flex items-center mt-32">
        <svg
          key={sequenceKey}
          viewBox="0 0 400 400"
          className="w-[600px] h-[600px] max-w-full absolute -left-24 md:left-0 lg:left-12 opacity-80"
        >
        {blocks.map((block) => (
          <g key={block.id}>
            {/* The Label */}
            <motion.text
              x={block.labelPos.x}
              y={block.labelPos.y}
              fill="#a1a1aa" // zinc-400
              fontSize="12"
              fontFamily="sans-serif"
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
              animate={prefersReducedMotion ? { opacity: 0 } : { opacity: [0, 1, 1, 0] }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { delay: block.delay + 0.2, duration: 2.5, times: [0, 0.1, 0.8, 1] }
              }
            >
              {block.label}
            </motion.text>

            {/* The Shape */}
            <motion.rect
              x={block.shape.x}
              y={block.shape.y}
              width={block.shape.w}
              height={block.shape.h}
              rx={4}
              fill="#1e1b4b" // indigo-950 base
              stroke="#4f46e5" // indigo-600 accent
              strokeWidth="1.5"
              initial={prefersReducedMotion ? { ...block.animate } : block.initial}
              animate={block.animate}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { delay: block.delay, type: "spring", stiffness: 100, damping: 15 }
              }
            />
          </g>
        ))}
        
        {/* Subtle ground line */}
        <motion.line 
          x1="50" 
          y1="330" 
          x2="350" 
          y2="330" 
          stroke="#ffffff" 
          strokeOpacity="0.1" 
          strokeWidth="1"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        </svg>
      </div>
    </div>
  );
}
