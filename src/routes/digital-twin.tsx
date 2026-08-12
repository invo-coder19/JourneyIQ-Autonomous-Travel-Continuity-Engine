import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GlassCard, SectionTitle } from "@/components/ui-kit";
import { Home, Plane, Building2, Car, Briefcase, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/digital-twin")({
  head: () => ({
    meta: [
      { title: "Journey Digital Twin · JourneyIQ" },
      { name: "description", content: "Interactive node graph of your entire journey — every dependency visualized in real time." },
      { property: "og:title", content: "Journey Digital Twin" },
      { property: "og:description", content: "A live digital twin of every journey step." },
    ],
  }),
  component: DigitalTwin,
});

type NodeState = "healthy" | "affected" | "broken" | "recovered" | "upcoming";

const nodes: {
  id: string;
  label: string;
  sub: string;
  icon: typeof Home;
  x: number;
  y: number;
  state: NodeState;
}[] = [
  { id: "home", label: "Home", sub: "Pune", icon: Home, x: 8, y: 50, state: "healthy" },
  { id: "f1", label: "Flight AI816", sub: "PNQ→DEL", icon: Plane, x: 22, y: 30, state: "broken" },
  { id: "ap", label: "Airport", sub: "DEL Layover", icon: Building2, x: 38, y: 55, state: "affected" },
  { id: "f2", label: "Flight EK517", sub: "DEL→DXB (new)", icon: Plane, x: 54, y: 30, state: "recovered" },
  { id: "h", label: "Hilton", sub: "London", icon: Building2, x: 70, y: 55, state: "upcoming" },
  { id: "t", label: "Taxi", sub: "Rescheduled", icon: Car, x: 84, y: 32, state: "upcoming" },
  { id: "m", label: "Meeting", sub: "The Shard", icon: Briefcase, x: 94, y: 60, state: "upcoming" },
];

const edges: [string, string][] = [
  ["home", "f1"],
  ["f1", "ap"],
  ["ap", "f2"],
  ["f2", "h"],
  ["h", "t"],
  ["t", "m"],
];

const stateColor: Record<NodeState, { ring: string; bg: string; text: string; dot: string }> = {
  healthy: { ring: "ring-emerald-300", bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
  affected: { ring: "ring-amber-300", bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
  broken: { ring: "ring-rose-300", bg: "bg-rose-50", text: "text-rose-700", dot: "bg-rose-500" },
  recovered: { ring: "ring-sky-300", bg: "bg-sky-50", text: "text-sky-700", dot: "bg-sky-500" },
  upcoming: { ring: "ring-slate-200", bg: "bg-slate-50", text: "text-slate-600", dot: "bg-slate-400" },
};

function DigitalTwin() {
  const nodeById = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div className="space-y-6">
      <div>
        <div className="text-[11px] uppercase tracking-[0.24em] text-primary">Innovation 01</div>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight">Journey Digital Twin</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Every booking, transfer, and dependency modelled as a live graph. When one node breaks,
          the twin instantly propagates the impact and simulates recovery paths.
        </p>
      </div>

      <GlassCard className="p-0">
        <div className="relative h-[440px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-white via-amex-light/40 to-white">
          {/* grid */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(oklch(0.9 0.02 240) 1px, transparent 1px), linear-gradient(90deg, oklch(0.9 0.02 240) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* edges */}
          <svg className="absolute inset-0 h-full w-full">
            <defs>
              <linearGradient id="edge-flow" x1="0%" x2="100%">
                <stop offset="0%" stopColor="oklch(0.58 0.19 250)" stopOpacity="0.1" />
                <stop offset="50%" stopColor="oklch(0.58 0.19 250)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="oklch(0.58 0.19 250)" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {edges.map(([a, b], i) => {
              const na = nodeById[a];
              const nb = nodeById[b];
              const affected = na.state === "broken" || nb.state === "broken" || na.state === "affected";
              return (
                <motion.line
                  key={a + b}
                  x1={`${na.x}%`}
                  y1={`${na.y}%`}
                  x2={`${nb.x}%`}
                  y2={`${nb.y}%`}
                  stroke={affected ? "oklch(0.72 0.18 30)" : "url(#edge-flow)"}
                  strokeWidth="2"
                  strokeDasharray={affected ? "6 6" : "0"}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.15 }}
                />
              );
            })}
          </svg>

          {/* nodes */}
          {nodes.map((n, i) => {
            const c = stateColor[n.state];
            return (
              <motion.div
                key={n.id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${n.x}%`, top: `${n.y}%` }}
              >
                <div className="group relative">
                  {(n.state === "broken" || n.state === "affected") && (
                    <span
                      className={`absolute inset-0 -z-10 rounded-2xl ${c.dot} opacity-40 blur-xl`}
                    />
                  )}
                  <div
                    className={`flex items-center gap-2 rounded-2xl border bg-white/90 px-3 py-2 shadow-card ring-2 ${c.ring} backdrop-blur-md transition hover:scale-105`}
                  >
                    <div className={`grid h-8 w-8 place-items-center rounded-lg ${c.bg} ${c.text}`}>
                      <n.icon className="h-4 w-4" />
                    </div>
                    <div className="leading-tight">
                      <div className="text-xs font-semibold">{n.label}</div>
                      <div className="text-[10px] text-muted-foreground">{n.sub}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          <div className="absolute bottom-3 left-3 flex flex-wrap gap-2 text-[10px]">
            {(["healthy", "upcoming", "affected", "broken", "recovered"] as NodeState[]).map((s) => (
              <div key={s} className="flex items-center gap-1.5 rounded-full bg-white/80 px-2 py-1 backdrop-blur">
                <span className={`h-1.5 w-1.5 rounded-full ${stateColor[s].dot}`} />
                <span className="capitalize text-muted-foreground">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>

      {/* Ripple */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SectionTitle title="Ripple Effect Prediction" subtitle="Consequences propagated across the twin" />
          <GlassCard>
            <div className="mb-4 flex items-center gap-3 rounded-xl bg-rose-50 p-3 text-sm text-rose-800">
              <AlertTriangle className="h-4 w-4" />
              <div>
                <b>Flight AI816 delayed by 2h 45m</b> · impact detected at 09:35
              </div>
            </div>
            <div className="space-y-2">
              {[
                "Missed Connection · EK517 DEL→DXB",
                "Hotel Check-in Delayed · Hilton Park Lane",
                "Airport Pickup Invalid · London",
                "Business Meeting Risk · 09:00 tomorrow",
                "Travel Insurance Eligible · AMEX Platinum",
              ].map((t, i) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.15 }}
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-white/60 px-4 py-3 text-sm"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="flex-1">{t}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </div>

        <div>
          <SectionTitle title="Ripple Confidence" subtitle="Model certainty" />
          <GlassCard className="flex flex-col items-center py-8">
            <ConfidenceRing value={96} />
            <div className="mt-4 text-center text-sm text-muted-foreground">
              Predicted from 12,438 similar disruptions across the AMEX network.
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

function ConfidenceRing({ value }: { value: number }) {
  const r = 72;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative h-48 w-48">
      <svg viewBox="0 0 168 168" className="h-full w-full -rotate-90">
        <defs>
          <linearGradient id="cg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.58 0.19 250)" />
            <stop offset="100%" stopColor="oklch(0.72 0.14 235)" />
          </linearGradient>
        </defs>
        <circle cx="84" cy="84" r={r} stroke="oklch(0.92 0.02 240)" strokeWidth="14" fill="none" />
        <motion.circle
          cx="84" cy="84" r={r} stroke="url(#cg)" strokeWidth="14" strokeLinecap="round" fill="none"
          initial={{ strokeDasharray: `0 ${c}` }}
          animate={{ strokeDasharray: `${(value / 100) * c} ${c}` }}
          transition={{ duration: 1.4 }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-4xl font-semibold tabular-nums">{value}%</div>
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
          Confidence
        </div>
      </div>
    </div>
  );
}