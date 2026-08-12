import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui-kit";
import { Check, AlertTriangle, Sparkles, Building2, Car, Plane, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/notifications")({
  head: () => ({
    meta: [
      { title: "Notifications · JourneyIQ" },
      { name: "description", content: "Timeline of every disruption event and autonomous action." },
      { property: "og:title", content: "JourneyIQ Notifications" },
      { property: "og:description", content: "Recovery timeline in real time." },
    ],
  }),
  component: Notifications,
});

const events = [
  { t: "09:35", title: "Flight AI816 delayed", detail: "Weather · Delhi thunderstorm", icon: AlertTriangle, tone: "rose" },
  { t: "09:36", title: "Ripple effect detected", detail: "5 downstream dependencies impacted", icon: Sparkles, tone: "amber" },
  { t: "09:36", title: "Recovery initiated", detail: "Generated 3 alternative paths in 2.3s", icon: ShieldCheck, tone: "sky" },
  { t: "09:37", title: "Benefits applied", detail: "AMEX Platinum insurance · ₹18,500 covered", icon: Check, tone: "emerald" },
  { t: "09:38", title: "Hotel updated", detail: "Hilton Park Lane late check-in confirmed", icon: Building2, tone: "emerald" },
  { t: "09:39", title: "Taxi rescheduled", detail: "London chauffeur re-timed to 20:50", icon: Car, tone: "emerald" },
  { t: "09:39", title: "Journey recovered", detail: "Health score restored to 95%", icon: Plane, tone: "emerald" },
];

const tone: Record<string, string> = {
  rose: "bg-rose-50 text-rose-700 ring-rose-200",
  amber: "bg-amber-50 text-amber-700 ring-amber-200",
  sky: "bg-sky-50 text-sky-700 ring-sky-200",
  emerald: "bg-emerald-50 text-emerald-700 ring-emerald-200",
};

function Notifications() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Notifications</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Every autonomous action, in order. Nothing hidden.
        </p>
      </div>
      <GlassCard>
        <div className="relative">
          <div className="absolute bottom-2 left-[70px] top-2 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
          <div className="space-y-4">
            {events.map((e, i) => (
              <motion.div
                key={e.title + e.t}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative flex items-start gap-4"
              >
                <div className="w-14 pt-2 text-right text-xs font-medium tabular-nums text-muted-foreground">{e.t}</div>
                <div className={`relative z-10 grid h-10 w-10 place-items-center rounded-full ring-4 ring-background ${tone[e.tone]}`}>
                  <e.icon className="h-4 w-4" />
                </div>
                <div className="flex-1 rounded-xl border border-border/60 bg-white/70 p-3">
                  <div className="text-sm font-medium">{e.title}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">{e.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </GlassCard>
    </div>
  );
}