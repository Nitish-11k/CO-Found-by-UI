export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-[#0a0a0a] border-t border-white/5 relative z-10 text-center md:text-left">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-zinc-500 text-sm font-sans">
          &copy; {new Date().getFullYear()} Cofound. All rights reserved.
        </div>

        <div className="max-w-md p-4 rounded-xl bg-zinc-900/30 border border-white/5 text-xs text-zinc-400 font-sans leading-relaxed">
          <strong className="text-zinc-300">Coming soon:</strong> Cofound is in early development. A built-in code playground is coming soon to <code className="text-indigo-400 bg-indigo-500/10 px-1 py-0.5 rounded">/playground</code>, so you can prototype ideas directly inside your conversations with your cofounder.
        </div>

      </div>
    </footer>
  );
}
