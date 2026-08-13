import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { GlassCard } from "@/components/ui-kit";
import { Play, Pause, RotateCcw } from "lucide-react";

export const Route = createFileRoute("/replay")({
  head: () => ({
    meta: [
      { title: "Journey Replay · JourneyIQ" },
      { name: "description", content: "Replay any journey disruption second-by-second." },
      { property: "og:title", content: "Journey Replay" },
      { property: "og:description", content: "Time-scrub the entire recovery." },
    ],
  }),
  component: Replay,
});

const frames = [
  { t: "09:32", title: "Journey Healthy", tone: "emerald" },
  { t: "09:35", title: "Flight Delay Detected", tone: "rose" },
  { t: "09:36", title: "Ripple Prediction Generated", tone: "amber" },
  { t: "09:37", title: "Recovery Score Computed", tone: "sky" },
  { t: "09:38", title: "Credit Card Benefits Applied", tone: "sky" },
  { t: "09:39", title: "Journey Restored", tone: "emerald" },
];

const toneMap: Record<string, string> = {
  emerald: "from-emerald-500 to-emerald-400",
  rose: "from-rose-500 to-rose-400",
  amber: "from-amber-500 to-amber-400",
  sky: "from-sky-500 to-sky-400",
};

function Replay() {
  const [step, setStep] = useState(5);
  const [playing, setPlaying] = useState(false);
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Journey Replay</h1>
        <p className="mt-1 text-sm text-muted-foreground">Scrub through the full disruption timeline — 7 minutes, replayed in seconds.</p>
      </div>
      <GlassCard className="p-8">
        <div className="flex items-center gap-3">
          <button onClick={() => setPlaying((p) => !p)} className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-hero text-white shadow-glow">
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
          <button onClick={() => setStep(0)} className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-white/60">
            <RotateCcw className="h-4 w-4" />
          </button>
          <div className="ml-2 text-xs font-medium tabular-nums text-muted-foreground">{frames[step].t}</div>
          <div className="ml-auto text-xs text-muted-foreground">Step {step + 1} / {frames.length}</div>
        </div>
        <div className="mt-6">
          <input type="range" min={0} max={frames.length - 1} value={step} onChange={(e) => setStep(Number(e.target.value))} className="w-full accent-primary" />
          <div className="mt-6 grid grid-cols-3 gap-3 md:grid-cols-6">
            {frames.map((f, i) => (
              <button key={f.t} onClick={() => setStep(i)} className="text-left">
                <div className={`h-1.5 rounded-full bg-gradient-to-r ${toneMap[f.tone]} transition-opacity ${i <= step ? "opacity-100" : "opacity-20"}`} />
                <div className="mt-2 text-[10px] font-medium tabular-nums text-muted-foreground">{f.t}</div>
                <div className={`text-[11px] font-medium ${i === step ? "text-primary" : "text-foreground/70"}`}>{f.title}</div>
              </button>
            ))}
          </div>
        </div>
        <motion.div key={step} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-8 rounded-2xl bg-gradient-to-br from-white via-cc-light/40 to-white p-8 text-center">
          <div className={`inline-block rounded-full bg-gradient-to-r ${toneMap[frames[step].tone]} px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white shadow-glow`}>{frames[step].t}</div>
          <div className="mt-4 text-3xl font-semibold tracking-tight">{frames[step].title}</div>
        </motion.div>
      </GlassCard>
    </div>
  );
}