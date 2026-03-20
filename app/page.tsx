import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Why } from "@/components/Why";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="relative isolate min-h-screen overflow-hidden">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_18%),radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_30%)]" />
        <Navbar />
        <Hero />
        <Why />
        <Process />
        <Services />
      </div>
    </main>
  );
}
