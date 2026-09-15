import { Home, LayoutDashboard, Notebook, Search, Settings, HelpCircle, Briefcase } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

export default function Sidebar() {
  const items = [
    { icon: Home, label: "Home", active: false, href: "/" },
    { icon: LayoutDashboard, label: "Playground", active: true, href: "/playground" },
    { icon: Briefcase, label: "Projects", active: false, href: "#" },
    { icon: Notebook, label: "Notes", active: false, href: "#" },
  ];

  return (
    <div className="w-16 md:w-64 h-full bg-[#0a0a0a] border-r border-white/5 flex flex-col pt-6 pb-4">
      {/* Logo */}
      <div className="px-4 md:px-6 mb-8 flex items-center gap-3">
        <div className="w-8 h-8 rounded bg-indigo-600 flex items-center justify-center text-white font-bold flex-shrink-0">
          C
        </div>
        <span className="font-display font-bold text-xl hidden md:block">Cofound</span>
      </div>

      {/* Search (collapsed on mobile) */}
      <div className="px-4 md:px-6 mb-6 hidden md:block">
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
      <nav className="flex-1 px-2 md:px-4 space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link 
              key={item.label}
              href={item.href}
              className={clsx(
                "flex items-center gap-3 px-3 md:px-4 py-2.5 rounded-lg transition-colors group",
                item.active 
                  ? "bg-indigo-500/10 text-indigo-400" 
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
              )}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium hidden md:block">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="px-2 md:px-4 space-y-1 mt-auto">
        <button className="w-full flex items-center gap-3 px-3 md:px-4 py-2.5 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-colors">
          <Settings className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm font-medium hidden md:block">Settings</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 md:px-4 py-2.5 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-colors">
          <HelpCircle className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm font-medium hidden md:block">Help</span>
        </button>
      </div>
    </div>
  );
}
