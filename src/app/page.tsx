import Hero from "@/components/Hero";
import Explainer from "@/components/Explainer";
import ReasoningSequence from "@/components/ReasoningSequence";
import DemoShowcase from "@/components/DemoShowcase";
import Comparison from "@/components/Comparison";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-indigo-500/30">
      <Hero />
      <Explainer />
      <ReasoningSequence />
      <DemoShowcase />
      <Comparison />
      <Waitlist />
      <Footer />
    </main>
  );
}
