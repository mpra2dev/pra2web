import { Clients } from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Why } from "@/components/Why";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060b11] text-white">
      <div className="relative isolate min-h-screen overflow-hidden">
        <style>{`
          @keyframes page-aurora-shift {
            0% {
              transform: translate3d(-2%, -1%, 0) scale(1);
            }
            100% {
              transform: translate3d(2%, 1%, 0) scale(1.04);
            }
          }
        `}</style>

        {/* The shared base keeps a slight blue-green tint, but stays dark enough that the hero still dominates the page. */}
        <div className="absolute inset-0 -z-40 bg-[linear-gradient(180deg,#060b11_0%,#071018_34%,#08111a_64%,#060a10_100%)]" />

        {/* Instead of a visible grid, the page now uses a soft diagonal veil so the canvas feels richer but less mechanical. */}
        <div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage:
              "linear-gradient(125deg, rgba(255,255,255,0.022) 0%, rgba(255,255,255,0.01) 18%, transparent 38%), linear-gradient(305deg, rgba(76,161,252,0.035) 0%, transparent 34%), linear-gradient(35deg, rgba(168,85,247,0.028) 0%, transparent 30%)",
            animation: "page-aurora-shift 20s ease-in-out infinite alternate",
          }}
        />

        {/* These glows are intentionally restrained so they add atmosphere without competing with the hero art direction. */}
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_14%_10%,rgba(76,161,252,0.08),transparent_24%),radial-gradient(circle_at_86%_12%,rgba(168,85,247,0.07),transparent_22%),radial-gradient(circle_at_52%_88%,rgba(34,197,94,0.05),transparent_26%)]" />

        {/* A light wash keeps the canvas from feeling dead, but now stays well below the hero in visual intensity. */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.018),transparent_18%),radial-gradient(circle_at_top,rgba(255,255,255,0.025),transparent_26%)]" />
        <Navbar />
        <Hero />

        {/* All non-hero sections sit inside one shared background surface so they read as a continuous lower half of the landing. */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_8%,rgba(76,161,252,0.045),transparent_24%),radial-gradient(circle_at_82%_12%,rgba(168,85,247,0.04),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(34,197,94,0.03),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.012),transparent_12%)]" />
          <Why />
          <Process />
          <Services />
          <Clients />
          <FAQ />
          <Contact />
        </div>
      </div>
    </main>
  );
}
