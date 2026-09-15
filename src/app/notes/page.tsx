import Sidebar from "@/components/dashboard/Sidebar";
import { Notebook, Search, Edit3, Trash2, Calendar } from "lucide-react";

export default function NotesPage() {
  const notes = [
    {
      title: "Competitor Analysis - Whoop",
      preview: "They have completely cornered the elite athlete market. If we try to compete on bio-accuracy, we will burn $5M before we even launch...",
      date: "Today, 10:42 AM",
      active: true,
      tags: ["Fitness", "Competitors"]
    },
    {
      title: "Pricing Strategy Ideas",
      preview: "Thinking about a freemium model but locking advanced AI coaching behind a $10/mo paywall. Need to check if the margins make sense...",
      date: "Yesterday",
      active: false,
      tags: ["Pricing", "SaaS"]
    },
    {
      title: "DevTools Marketing",
      preview: "Developers hate marketing. We need to focus on pure documentation and open-source utility before we try to sell them anything...",
      date: "Last Week",
      active: false,
      tags: ["DevTools", "GTM"]
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
              <Notebook className="w-5 h-5 text-indigo-400" />
              Notes
            </h1>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors text-sm font-medium shadow-[0_0_15px_rgba(79,70,229,0.3)]">
            <Edit3 className="w-4 h-4" />
            New Note
          </button>
        </header>

        {/* Content Split Pane */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Left List Pane */}
          <div className="w-80 border-r border-white/5 h-full flex flex-col bg-[#0a0a0a]">
            <div className="p-4 border-b border-white/5">
              <div className="relative">
                <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="Search notes..." 
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-9 pr-4 text-sm text-zinc-300 focus:outline-none focus:border-indigo-500/50 transition-colors"
                />
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {notes.map((note) => (
                <div 
                  key={note.title} 
                  className={`p-4 border-b border-white/5 cursor-pointer transition-colors ${note.active ? 'bg-indigo-500/10 border-l-2 border-l-indigo-500' : 'hover:bg-white/5 border-l-2 border-l-transparent'}`}
                >
                  <h3 className={`font-semibold mb-1 truncate ${note.active ? 'text-indigo-300' : 'text-zinc-200'}`}>
                    {note.title}
                  </h3>
                  <p className="text-xs text-zinc-500 line-clamp-2 mb-2">
                    {note.preview}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-[10px] text-zinc-600 font-medium">{note.date}</span>
                    <div className="flex gap-1">
                      {note.tags.map(tag => (
                        <span key={tag} className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-zinc-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Editor Pane */}
          <div className="flex-1 flex flex-col h-full relative">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none" />
            
            <div className="flex-1 overflow-y-auto p-12 relative z-10">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-between mb-8 pb-8 border-b border-white/5">
                  <div>
                    <h1 className="text-4xl font-display font-bold text-white mb-4">Competitor Analysis - Whoop</h1>
                    <div className="flex items-center gap-4 text-sm text-zinc-500">
                      <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Today, 10:42 AM</span>
                      <div className="flex gap-2">
                        <span className="px-2 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium">Fitness</span>
                        <span className="px-2 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium">Competitors</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-zinc-500 hover:text-zinc-300 transition-colors rounded-lg hover:bg-white/5">
                      <Edit3 className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-red-500/70 hover:text-red-400 transition-colors rounded-lg hover:bg-red-500/10">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="prose prose-invert prose-indigo max-w-none">
                  <p className="text-zinc-300 leading-relaxed text-lg mb-6">
                    They have completely cornered the elite athlete market. If we try to compete on bio-accuracy, we will burn $5M before we even launch. Their data moats are too deep.
                  </p>
                  
                  <h3 className="text-xl font-bold text-white mt-10 mb-4">The Vulnerability</h3>
                  <p className="text-zinc-400 leading-relaxed mb-6">
                    Whoop relies entirely on a high-churn subscription model. Users get fatigue after 6 months because the data stops providing new actionable insights. It becomes a glorified sleep tracker.
                  </p>
                  
                  <ul className="list-disc pl-5 space-y-3 text-zinc-400 mb-8">
                    <li>High subscription fatigue ($30/mo is hard to justify indefinitely)</li>
                    <li>No screen means relying entirely on the phone app</li>
                    <li>Form factor is distinct, but not fashionable for all occasions</li>
                  </ul>

                  <div className="p-6 rounded-xl bg-indigo-500/10 border border-indigo-500/20 mt-8">
                    <h4 className="font-bold text-indigo-300 mb-2">Cofound AI Insight</h4>
                    <p className="text-sm text-indigo-200/70 leading-relaxed">
                      "Instead of competing on hardware, build the software layer that sits on top of Apple Health. 80% of Whoop users already wear an Apple Watch. You can offer the exact same recovery metrics via software for $5/mo."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
