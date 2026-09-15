import Sidebar from "@/components/dashboard/Sidebar";
import { Briefcase, Clock, Play, Plus, MoreHorizontal } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      name: "Enterprise SaaS Pivot",
      status: "Active",
      lastUpdated: "2 hours ago",
      sessions: 14,
      color: "bg-indigo-500",
    },
    {
      name: "Fitness Tracker AI",
      status: "Archived",
      lastUpdated: "3 days ago",
      sessions: 4,
      color: "bg-red-500",
    },
    {
      name: "DevTools Market Entry",
      status: "Draft",
      lastUpdated: "1 week ago",
      sessions: 1,
      color: "bg-emerald-500",
    }
  ];

  return (
    <div className="flex h-screen w-full bg-[#050505] overflow-hidden font-sans text-zinc-100">
      <Sidebar />

      <div className="flex-1 flex flex-col relative h-full">
        {/* Header */}
        <header className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-black/20 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-display font-bold text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-indigo-400" />
              Projects
            </h1>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors text-sm font-medium shadow-[0_0_15px_rgba(79,70,229,0.3)]">
            <Plus className="w-4 h-4" />
            New Project
          </button>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-6xl mx-auto space-y-8">
            
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-zinc-300">Recent Projects</h2>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 hover:bg-white/10 transition-colors">
                  All
                </button>
                <button className="px-3 py-1.5 rounded-lg hover:bg-white/5 text-xs font-medium text-zinc-500 transition-colors">
                  Active
                </button>
                <button className="px-3 py-1.5 rounded-lg hover:bg-white/5 text-xs font-medium text-zinc-500 transition-colors">
                  Archived
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.name} className="group bg-zinc-900/40 border border-white/5 hover:border-indigo-500/30 rounded-2xl p-6 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_30px_rgba(79,70,229,0.1)] cursor-pointer">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-10 h-10 rounded-xl ${project.color}/10 border border-${project.color}/20 flex items-center justify-center`}>
                      <Briefcase className={`w-5 h-5 text-${project.color.replace('bg-', '')}`} />
                    </div>
                    <button className="p-2 text-zinc-500 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">{project.name}</h3>
                      <div className="flex items-center gap-2 text-xs font-medium">
                        <span className="text-zinc-500">Status:</span>
                        <span className={project.status === 'Active' ? 'text-indigo-400' : 'text-zinc-400'}>{project.status}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                        <Clock className="w-3.5 h-3.5" />
                        {project.lastUpdated}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-zinc-500 font-medium">{project.sessions} sessions</span>
                        <button className="w-8 h-8 rounded-full bg-indigo-600/10 hover:bg-indigo-600 flex items-center justify-center text-indigo-400 hover:text-white transition-all group-hover:scale-110">
                          <Play className="w-3.5 h-3.5 ml-0.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
