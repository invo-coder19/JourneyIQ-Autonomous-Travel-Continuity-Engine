import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { GlassCard, SectionTitle } from "@/components/ui-kit";
import { Sparkles, Star, Check, Leaf, Clock, Wallet, Shield, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/recovery")({
  head: () => ({
    meta: [
      { title: "Recovery Center · JourneyIQ" },
      { name: "description", content: "Autonomous recovery plans with credit card-scored alternatives." },
      { property: "og:title", content: "Autonomous Recovery Center" },
      { property: "og:description", content: "Three intelligent recovery plans, ranked and explained." },
    ],
  }),
  component: Recovery,
});

interface RecoveryPlan {
  id: string;
  label: string;
  arrival: string;
  cost: string;
  layover: string;
  reliability: string;
  journey: string;
  carbon: string;
  match: string;
  score: number;
  highlight: boolean;
  whyText: string;
  confidence: number;
  breakdown: { l: string; s: number; v: number }[];
  reasons: string[];
}

const plans: RecoveryPlan[] = [
  {
    id: "A",
    label: "Via Dubai (EK 517 · EK 001)",
    arrival: "20:35",
    cost: "₹0",
    layover: "1h 45m",
    reliability: "99%",
    journey: "13h 15m",
    carbon: "Low",
    match: "97%",
    score: 97,
    highlight: true,
    whyText: "Fastest arrival with zero out-of-pocket cost. Preserves your Hilton reservation and unlocks lounge access at DXB — fully covered by Credit Card Travel Insurance.",
    confidence: 98,
    breakdown: [
      { l: "Arrival Time", s: 5, v: 98 },
      { l: "Reliability", s: 5, v: 99 },
      { l: "Cost", s: 4, v: 82 },
      { l: "Comfort", s: 5, v: 95 },
      { l: "Risk", s: 5, v: 97 },
      { l: "Benefits", s: 5, v: 100 },
    ],
    reasons: [
      "Earliest arrival at LHR — 20:35",
      "Lowest downstream disruption risk",
      "Zero additional out-of-pocket payment",
      "Preserves Hilton Park Lane check-in",
      "Fully covered by Credit Card Travel Insurance",
      "Emirates Business Lounge unlocked",
    ],
  },
  {
    id: "B",
    label: "Via Istanbul (TK 723 · TK 1979)",
    arrival: "22:10",
    cost: "₹4,800",
    layover: "3h 05m",
    reliability: "94%",
    journey: "15h 40m",
    carbon: "Medium",
    match: "88%",
    score: 91,
    highlight: false,
    whyText: "Secondary routing via Istanbul. Arrival is delayed by 1h 35m with a ₹4,800 differential fare not fully offset by standard delay compensation.",
    confidence: 89,
    breakdown: [
      { l: "Arrival Time", s: 4, v: 86 },
      { l: "Reliability", s: 4, v: 94 },
      { l: "Cost", s: 4, v: 75 },
      { l: "Comfort", s: 4, v: 88 },
      { l: "Risk", s: 4, v: 91 },
      { l: "Benefits", s: 4, v: 84 },
    ],
    reasons: [
      "Arrival at LHR (22:10) narrows Hilton check-in window",
      "Extended 3h 05m layover in Istanbul",
      "Out-of-pocket charge of ₹4,800 required",
      "Hilton reservation preserved with tight leeway",
      "Turkish Airlines lounge requires supplementary pass",
      "Moderate connection transit risk at IST",
    ],
  },
  {
    id: "C",
    label: "Next-day direct (BA 138)",
    arrival: "07:20 +1",
    cost: "₹12,400",
    layover: "None",
    reliability: "97%",
    journey: "9h 50m",
    carbon: "High",
    match: "62%",
    score: 74,
    highlight: false,
    whyText: "Direct flight next morning. Arrives 07:20 tomorrow, creating severe risk for 09:00 keynote at The Shard and incurring hotel + fare differences.",
    confidence: 76,
    breakdown: [
      { l: "Arrival Time", s: 2, v: 52 },
      { l: "Reliability", s: 5, v: 97 },
      { l: "Cost", s: 2, v: 54 },
      { l: "Comfort", s: 4, v: 89 },
      { l: "Risk", s: 3, v: 64 },
      { l: "Benefits", s: 3, v: 62 },
    ],
    reasons: [
      "Next-day arrival (07:20 +1) risks missing The Shard keynote (09:00)",
      "Direct flight with zero layover risk",
      "High out-of-pocket ticket rebooking fare (₹12,400)",
      "Requires overnight accommodation in Delhi",
      "Credit Card covers partial accommodation only",
      "High business continuity disruption impact",
    ],
  },
];

function Recovery() {
  const [selected, setSelected] = useState("A");
  const [appliedPlan, setAppliedPlan] = useState("A");
  const currentPlan = plans.find((p) => p.id === selected) || plans[0];

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="text-[11px] uppercase tracking-[0.24em] text-primary">Innovation 03</div>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">Autonomous Recovery Center</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            JourneyIQ generated three recovery paths in 2.3 seconds. Each is dynamically scored on arrival,
            reliability, cost, comfort and credit card benefit coverage.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setAppliedPlan(selected)}
            className={cn(
              "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold shadow-sm transition",
              appliedPlan === selected
                ? "bg-emerald-600 text-white"
                : "bg-primary text-primary-foreground hover:bg-primary/90",
            )}
          >
            <CheckCircle2 className="h-4 w-4" />
            {appliedPlan === selected ? `Option ${selected} Active` : `Confirm Option ${selected}`}
          </button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {plans.map((p, i) => {
          const active = selected === p.id;
          const isApplied = appliedPlan === p.id;
          return (
            <motion.button
              key={p.id}
              onClick={() => setSelected(p.id)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={cn(
                "relative overflow-hidden rounded-2xl border bg-white/70 p-6 text-left shadow-card backdrop-blur-xl transition-all",
                active ? "border-primary/60 shadow-glow ring-2 ring-primary/40" : "border-border/60 hover:border-primary/30",
              )}
            >
              <div className="flex items-center justify-between">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Option {p.id}</div>
                <div className="flex items-center gap-1.5">
                  {isApplied && (
                    <div className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-emerald-700">
                      Dispatched
                    </div>
                  )}
                  {p.highlight && (
                    <div className="rounded-full bg-gradient-hero px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-white shadow-glow">
                      Recommended
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-1 text-base font-semibold">{p.label}</div>
              <div className="mt-5 flex items-end gap-2">
                <div className="text-5xl font-semibold tabular-nums tracking-tight text-primary">{p.score}</div>
                <div className="pb-1.5 text-xs text-muted-foreground">/ 100 Recovery Score</div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
                <MetaRow icon={Clock} label="Arrival" v={p.arrival} />
                <MetaRow icon={Wallet} label="Cost" v={p.cost} />
                <MetaRow icon={Shield} label="Reliability" v={p.reliability} />
                <MetaRow icon={Clock} label="Journey" v={p.journey} />
                <MetaRow icon={Leaf} label="Carbon" v={p.carbon} />
                <MetaRow icon={Sparkles} label="Match" v={p.match} />
              </div>
              {active && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-5 overflow-hidden rounded-xl bg-primary/5 p-4 text-xs text-foreground/80"
                >
                  <div className="mb-2 flex items-center gap-2 font-medium text-primary">
                    <Sparkles className="h-3.5 w-3.5" /> Why this plan
                  </div>
                  {p.whyText}
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <GlassCard className="flex flex-col items-center py-8">
          <ScoreGauge value={currentPlan.score} />
          <div className="mt-3 text-sm font-medium">Recovery Score</div>
          <div className="text-xs text-muted-foreground">
            Option {currentPlan.id} · {currentPlan.highlight ? "Autonomous Recommended" : "Alternative Option"}
          </div>
        </GlassCard>

        <div className="lg:col-span-2">
          <SectionTitle
            title={`Score Breakdown · Option ${currentPlan.id}`}
            subtitle="Weighted across six multi-criteria decision pillars"
          />
          <GlassCard>
            <div className="space-y-3.5">
              {currentPlan.breakdown.map((r, i) => (
                <div key={r.l} className="grid grid-cols-[110px_1fr_60px_auto] items-center gap-3">
                  <div className="text-xs font-medium">{r.l}</div>
                  <div className="h-2 rounded-full bg-secondary">
                    <motion.div
                      key={currentPlan.id + r.l}
                      initial={{ width: 0 }}
                      animate={{ width: `${r.v}%` }}
                      transition={{ delay: 0.1 + i * 0.08, duration: 0.8 }}
                      className="h-full rounded-full bg-gradient-blue"
                    />
                  </div>
                  <div className="text-right text-xs tabular-nums text-muted-foreground">{r.v}</div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className={cn("h-3 w-3", k < r.s ? "fill-primary text-primary" : "text-border")} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

      <GlassCard className="border-primary/20 bg-gradient-to-br from-white to-cc-light/40">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-primary">
              <Sparkles className="h-3.5 w-3.5" /> AI Reasoning Panel
            </div>
            <h3 className="mt-2 text-xl font-semibold">
              Evaluation Analysis for Option {currentPlan.id}
            </h3>
          </div>
          <div className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-glow">
            {currentPlan.confidence}% confidence
          </div>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {currentPlan.reasons.map((r, i) => (
            <motion.div
              key={currentPlan.id + r}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 + i * 0.06 }}
              className="flex items-center gap-2 rounded-xl bg-white/70 px-3 py-2 text-sm"
            >
              <Check className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>{r}</span>
            </motion.div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}

function MetaRow({ icon: Icon, label, v }: { icon: typeof Clock; label: string; v: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-secondary/50 px-2.5 py-2">
      <Icon className="h-3.5 w-3.5 text-primary" />
      <div className="min-w-0">
        <div className="text-[9px] uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="truncate text-xs font-medium">{v}</div>
      </div>
    </div>
  );
}

function ScoreGauge({ value }: { value: number }) {
  const r = 72;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative h-48 w-48">
      <svg viewBox="0 0 168 168" className="h-full w-full -rotate-90">
        <defs>
          <linearGradient id="sg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.58 0.19 250)" />
            <stop offset="100%" stopColor="oklch(0.34 0.13 258)" />
          </linearGradient>
        </defs>
        <circle cx="84" cy="84" r={r} stroke="oklch(0.92 0.02 240)" strokeWidth="14" fill="none" />
        <motion.circle
          cx="84" cy="84" r={r} stroke="url(#sg)" strokeWidth="14" strokeLinecap="round" fill="none"
          initial={{ strokeDasharray: `0 ${c}` }}
          animate={{ strokeDasharray: `${(value / 100) * c} ${c}` }}
          transition={{ duration: 1.4 }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-5xl font-semibold tabular-nums">{value}</div>
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">/ 100</div>
      </div>
    </div>
  );
}