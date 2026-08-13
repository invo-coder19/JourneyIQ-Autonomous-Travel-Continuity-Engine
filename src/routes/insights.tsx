import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GlassCard, SectionTitle } from "@/components/ui-kit";
import { Sparkles, TrendingUp, Brain, Zap } from "lucide-react";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "AI Insights · JourneyIQ" },
      { name: "description", content: "Model-driven insights across your travel history." },
      { property: "og:title", content: "AI Insights" },
      { property: "og:description", content: "Data intelligence for smarter journeys." },
    ],
  }),
  component: Insights,
});

function Insights() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">AI Insights</h1>
        <p className="mt-1 text-sm text-muted-foreground">Patterns and predictions distilled from your journey history.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          { icon: Brain, l: "Predicted disruptions", v: "12", s: "Next 30 days" },
          { icon: Zap, l: "Avg recovery time", v: "2.3s", s: "-84% vs baseline" },
          { icon: TrendingUp, l: "Benefit utilization", v: "94%", s: "Across 8 policies" },
          { icon: Sparkles, l: "Model confidence", v: "96%", s: "Cross-validated" },
        ].map((k, i) => (
          <GlassCard key={k.l} delay={i * 0.05}>
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10 text-primary">
              <k.icon className="h-4 w-4" />
            </div>
            <div className="mt-4 text-3xl font-semibold tabular-nums">{k.v}</div>
            <div className="text-xs text-muted-foreground">{k.l}</div>
            <div className="mt-1 text-[11px] font-medium text-primary">{k.s}</div>
          </GlassCard>
        ))}
      </div>
      <SectionTitle title="Insight Feed" subtitle="Curated for Aarav" />
      <div className="grid gap-4 lg:grid-cols-2">
        {[
          { t: "Weather-related delays out of PNQ increased 23% this monsoon.", d: "Consider shifting outbound legs to morning slots — model predicts 41% lower disruption probability." },
          { t: "Your Hilton stays consistently score 4.8/5 for late-check-in reliability.", d: "Preserving Hilton bookings during recovery has a 97% success rate." },
          { t: "Dubai layovers unlock the highest credit card benefit density.", d: "Lounge, transfer, and hotel coverage all activate on 92% of DXB routings." },
          { t: "Your recovery success rate is 3.2× the credit card network median.", d: "Attribution: early acceptance of AI recommendations within 8 minutes." },
        ].map((x, i) => (
          <motion.div
            key={x.t}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl border border-border/60 bg-white/70 p-5 shadow-card backdrop-blur-xl"
          >
            <div className="flex items-start gap-3">
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-hero text-white">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-medium">{x.t}</div>
                <div className="mt-1 text-xs text-muted-foreground">{x.d}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}