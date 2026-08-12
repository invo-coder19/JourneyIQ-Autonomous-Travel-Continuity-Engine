import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui-kit";
import { Plane } from "lucide-react";

export const Route = createFileRoute("/map")({
  head: () => ({
    meta: [
      { title: "Live Map · JourneyIQ" },
      { name: "description", content: "Live aircraft position and re-routed flight paths." },
      { property: "og:title", content: "JourneyIQ Live Map" },
      { property: "og:description", content: "Watch the recovery unfold on a world map." },
    ],
  }),
  component: MapPage,
});

function MapPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Live Map</h1>
        <p className="mt-1 text-sm text-muted-foreground">Original and re-routed flight paths, updated in real time.</p>
      </div>
      <GlassCard className="p-0">
        <div className="relative h-[520px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-amex-navy via-primary/80 to-amex-blue">
          <div
            className="absolute inset-0 opacity-30"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)", backgroundSize: "18px 18px" }}
          />
          <svg viewBox="0 0 1000 500" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="path-old" x1="0%" x2="100%">
                <stop offset="0%" stopColor="#fff" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#fff" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="path-new" x1="0%" x2="100%">
                <stop offset="0%" stopColor="#D8F1FF" />
                <stop offset="100%" stopColor="#fff" />
              </linearGradient>
            </defs>
            <path d="M780 300 Q 720 260 660 250 Q 500 220 220 180" fill="none" stroke="url(#path-old)" strokeWidth="1.5" strokeDasharray="4 6" />
            <motion.path
              d="M780 300 Q 720 260 660 250 Q 600 260 560 290 Q 440 320 220 180"
              fill="none" stroke="url(#path-new)" strokeWidth="2.5"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, ease: "easeInOut" }}
            />
            {[
              { x: 780, y: 300, l: "PNQ" },
              { x: 660, y: 250, l: "DEL" },
              { x: 560, y: 290, l: "DXB" },
              { x: 220, y: 180, l: "LHR" },
            ].map((m) => (
              <g key={m.l}>
                <circle cx={m.x} cy={m.y} r="4" fill="#fff" />
                <circle cx={m.x} cy={m.y} r="10" fill="#fff" fillOpacity="0.2" />
                <text x={m.x + 12} y={m.y + 4} fill="#fff" fontSize="11" fontWeight="600">{m.l}</text>
              </g>
            ))}
          </svg>
          <motion.div
            initial={{ x: "78%", y: "60%", rotate: -30 }}
            animate={{ x: ["78%", "56%", "22%"], y: ["60%", "58%", "36%"], rotate: [-30, -20, -45] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
          >
            <Plane className="h-6 w-6" />
          </motion.div>
          <div className="absolute left-4 top-4 rounded-xl bg-white/10 px-3 py-2 text-[11px] text-white backdrop-blur">
            <div className="font-semibold">AI816 · re-routed</div>
            <div className="text-white/70">PNQ → DEL → DXB → LHR</div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}