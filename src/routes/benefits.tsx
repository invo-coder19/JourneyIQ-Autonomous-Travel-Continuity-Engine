import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GlassCard, SectionTitle } from "@/components/ui-kit";
import { ShieldCheck, Coffee, Building2, Car, Ban, Sparkles, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/benefits")({
  head: () => ({
    meta: [
      { title: "Benefits Optimizer · JourneyIQ" },
      { name: "description", content: "Automatically apply AMEX Platinum benefits to your recovery — zero out-of-pocket." },
      { property: "og:title", content: "Dynamic Benefit Optimizer" },
      { property: "og:description", content: "AMEX benefits, applied automatically." },
    ],
  }),
  component: Benefits,
});

const benefits = [
  { label: "Travel Delay Insurance", state: "Applied", icon: ShieldCheck, tone: "emerald", detail: "₹15,000 · rebooking fee waived" },
  { label: "Airport Lounge Access", state: "Available", icon: Coffee, tone: "sky", detail: "DXB Emirates Lounge · 1h 45m" },
  { label: "Hotel Coverage", state: "Covered", icon: Building2, tone: "emerald", detail: "Hilton Park Lane · late check-in" },
  { label: "Airport Transfer", state: "Rescheduled", icon: Car, tone: "sky", detail: "London chauffeur · 20:50" },
  { label: "Trip Cancellation", state: "Protected", icon: Ban, tone: "emerald", detail: "Full refund eligibility" },
  { label: "Concierge Priority", state: "Active", icon: Sparkles, tone: "sky", detail: "Human agent standby" },
];

function Benefits() {
  return (
    <div className="space-y-8">
      <div>
        <div className="text-[11px] uppercase tracking-[0.24em] text-primary">Innovation 04</div>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight">Dynamic Benefit Optimizer</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Every AMEX Platinum benefit relevant to this disruption is applied automatically — no
          claim forms, no waiting.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -3 }}
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-white via-white to-amex-light/30 p-5 shadow-card backdrop-blur-xl"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/20" />
            <div className="flex items-start justify-between">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-hero text-white shadow-glow">
                <b.icon className="h-4 w-4" />
              </div>
              <span
                className={
                  "rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider " +
                  (b.tone === "emerald" ? "bg-emerald-50 text-emerald-700" : "bg-sky-50 text-sky-700")
                }
              >
                {b.state}
              </span>
            </div>
            <div className="mt-4 text-sm font-semibold">{b.label}</div>
            <div className="mt-1 text-xs text-muted-foreground">{b.detail}</div>
          </motion.div>
        ))}
      </div>
      <SectionTitle title="Savings Summary" subtitle="Powered by AMEX Platinum" />
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative overflow-hidden rounded-3xl gradient-hero p-8 text-white shadow-elegant"
      >
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { l: "Recovery Cost", v: "₹18,500", sub: "Total incurred" },
            { l: "AMEX Coverage", v: "₹18,500", sub: "Auto-applied" },
            { l: "Customer Pays", v: "₹0", sub: "Out-of-pocket" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * i }}
              className={"rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur " + (i === 2 ? "ring-2 ring-white/60" : "")}
            >
              <div className="text-[10px] uppercase tracking-widest text-white/70">{s.l}</div>
              <div className="mt-2 text-4xl font-semibold tabular-nums">{s.v}</div>
              <div className="mt-1 flex items-center gap-1 text-xs text-white/70">
                <CheckCircle2 className="h-3 w-3" />
                {s.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}