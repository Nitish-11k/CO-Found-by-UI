"use client";

import { Home, LayoutDashboard, Notebook, Search, Settings, HelpCircle, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem("cofound_sidebar_collapsed");
    if (saved) {
      setIsCollapsed(saved === "true");
    }
  }, []);

  const toggleCollapse = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    localStorage.setItem("cofound_sidebar_collapsed", String(newState));
  };

  const items = [
    { icon: Home, label: "Home", active: pathname === "/", href: "/" },
    { icon: LayoutDashboard, label: "Playground", active: pathname === "/playground", href: "/playground" },
    { icon: Briefcase, label: "Projects", active: pathname === "/projects", href: "/projects" },
    { icon: Notebook, label: "Notes", active: pathname === "/notes", href: "/notes" },
  ];

  // Prevent hydration mismatch on width
  if (!isMounted) return <div className="w-64 h-full bg-[#0a0a0a] border-r border-white/5" />;

  return (
    <motion.div 
      initial={false}
      animate={{ width: isCollapsed ? 72 : 256 }}
      className="h-full bg-[#0a0a0a] border-r border-white/5 flex flex-col pt-6 pb-4 relative z-50 flex-shrink-0"
    >
      {/* Toggle Button */}
      <button 
        onClick={toggleCollapse}
        className="absolute -right-3 top-8 w-6 h-6 bg-zinc-800 border border-white/10 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors z-50"
      >
        {isCollapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
      </button>

      {/* Logo */}
      <div className={clsx("px-4 mb-8 flex items-center gap-3 transition-all", isCollapsed ? "justify-center" : "")}>
        <div className="w-8 h-8 rounded bg-indigo-600 flex items-center justify-center text-white font-bold flex-shrink-0 shadow-[0_0_15px_rgba(79,70,229,0.5)]">
          C
        </div>
        <AnimatePresence>
          {!isCollapsed && (
            <motion.span 
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              className="font-display font-bold text-xl overflow-hidden whitespace-nowrap"
            >
              Cofound
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Search */}
      <div className={clsx("px-4 mb-6", isCollapsed ? "hidden" : "block")}>
        <div className="relative">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search sessions..." 
            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-9 pr-4 text-sm text-zinc-300 focus:outline-none focus:border-indigo-500/50"
          />
        </div>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-3 space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="relative group">
              <Link 
                href={item.href}
                className={clsx(
                  "flex items-center gap-3 py-2.5 rounded-lg transition-colors overflow-hidden",
                  isCollapsed ? "justify-center px-0" : "px-3",
                  item.active 
                    ? "bg-indigo-500/10 text-indigo-400" 
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
                )}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <AnimatePresence>
                  {!isCollapsed && (
                    <motion.span 
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      className="text-sm font-medium whitespace-nowrap"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
              
              {/* Tooltip for collapsed state */}
              {isCollapsed && (
                <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-zinc-800 text-xs text-white rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap">
                  {item.label}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="px-3 space-y-1 mt-auto">
        <div className="relative group">
          <button className={clsx(
            "w-full flex items-center gap-3 py-2.5 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-colors overflow-hidden",
            isCollapsed ? "justify-center px-0" : "px-3"
          )}>
            <Settings className="w-5 h-5 flex-shrink-0" />
            <AnimatePresence>
              {!isCollapsed && (
                <motion.span 
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  className="text-sm font-medium whitespace-nowrap"
                >
                  Settings
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          {isCollapsed && (
            <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-zinc-800 text-xs text-white rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap">
              Settings
            </div>
          )}
        </div>
        
        <div className="relative group">
          <button className={clsx(
            "w-full flex items-center gap-3 py-2.5 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-colors overflow-hidden",
            isCollapsed ? "justify-center px-0" : "px-3"
          )}>
            <HelpCircle className="w-5 h-5 flex-shrink-0" />
            <AnimatePresence>
              {!isCollapsed && (
                <motion.span 
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  className="text-sm font-medium whitespace-nowrap"
                >
                  Help
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          {isCollapsed && (
            <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-zinc-800 text-xs text-white rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap">
              Help
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
