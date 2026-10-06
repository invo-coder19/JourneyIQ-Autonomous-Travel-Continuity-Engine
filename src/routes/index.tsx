import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Plane,
  Hotel,
  ShieldCheck,
  Activity,
  Gift,
  Bell,
  ArrowUpRight,
  Clock,
  Cloud,
  MapPin,
  ChevronRight,
  Sparkles,
  AlertTriangle,
} from "lucide-react";
import { GlassCard, SectionTitle, StatusDot } from "@/components/ui-kit";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard · JourneyIQ" },
      { name: "description", content: "Live journey status, disruption recovery, and Credit Card benefits — at a glance." },
      { property: "og:title", content: "JourneyIQ Dashboard" },
      { property: "og:description", content: "AI-powered self-healing travel intelligence." },
    ],
  }),
  component: Dashboard,
});

const metrics = [
  { label: "Flights", value: "3", trend: "+1 today", icon: Plane },
  { label: "Hotels", value: "2", trend: "London · Dubai", icon: Hotel },
  { label: "Recovery Score", value: "97", trend: "Optimal plan", icon: ShieldCheck },
  { label: "Journey Health", value: "95%", trend: "Recovered", icon: Activity },
  { label: "Active Benefits", value: "8", trend: "₹18,500 saved", icon: Gift },
  { label: "Notifications", value: "4", trend: "1 critical", icon: Bell },
];

const itinerary = [
  { city: "Pune", detail: "PNQ · Home", status: "healthy" as const, time: "07:20" },
  { city: "Delhi", detail: "DEL · Layover", status: "healthy" as const, time: "10:40" },
  { city: "Dubai", detail: "DXB · Re-routed", status: "affected" as const, time: "14:15" },
  { city: "London", detail: "LHR · Arrival", status: "upcoming" as const, time: "20:35" },
  { city: "Hilton Park Lane", detail: "Check-in", status: "upcoming" as const, time: "22:10" },
  { city: "Conference", detail: "The Shard", status: "upcoming" as const, time: "09:00 +1" },
];

function CountdownTimer({ initialSeconds = 8048 }: { initialSeconds?: number }) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="mt-1 flex items-baseline gap-2 text-3xl font-semibold tabular-nums">
      {pad(hours)}<span className="text-sm text-white/60">h</span>
      {pad(minutes)}<span className="text-sm text-white/60">m</span>
      {pad(seconds)}<span className="text-sm text-white/60">s</span>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl gradient-hero p-8 text-white shadow-elegant"
      >
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-10 h-64 w-64 rounded-full bg-cc-blue/40 blur-3xl" />

        <div className="relative flex flex-wrap items-start justify-between gap-6">
          <div className="min-w-0 max-w-xl">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-white/70">
              <span className="h-1 w-1 rounded-full bg-white/70" />
              American Express · Autonomous Concierge
            </div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              JourneyIQ
            </h1>
            <p className="mt-2 max-w-md text-sm text-white/75">
              AI-powered Self-Healing Travel Intelligence Platform. It predicts every consequence
              of a disruption and restores your itinerary — automatically.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/60">Traveler</div>
                <div className="text-sm font-medium">Aarav Mehta</div>
              </div>
              <div className="h-8 w-px bg-white/15" />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/60">Loyalty</div>
                <div className="text-sm font-medium">Platinum · Elite</div>
              </div>
              <div className="h-8 w-px bg-white/15" />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/60">Trip</div>
                <div className="text-sm font-medium">PNQ → LHR · 24 Jul</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-4">
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs backdrop-blur">
              <StatusDot status="healthy" />
              Current Journey Status · Healthy
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-right backdrop-blur">
              <div className="text-[10px] uppercase tracking-widest text-white/60">
                Countdown to departure
              </div>
              <CountdownTimer initialSeconds={8048} />
              <div className="mt-2 flex items-center gap-1.5 text-xs text-white/70">
                <Plane className="h-3.5 w-3.5" /> AI816 · PNQ → DEL · Gate 4B
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Autonomous Continuity Status Banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-amber-200/80 bg-gradient-to-r from-amber-50 via-white to-sky-50/60 p-4 text-xs shadow-card"
      >
        <div className="flex items-center gap-3">
          <div className="grid h-8 w-8 place-items-center rounded-xl bg-amber-500 text-white shadow-sm">
            <AlertTriangle className="h-4 w-4" />
          </div>
          <div>
            <div className="font-semibold text-amber-950">
              Active Disruption Remediated: Flight AI816 (+2h 45m weather delay)
            </div>
            <div className="text-muted-foreground">
              Autonomous recovery Option A executed via Dubai (EK517) · Hilton check-in protected · ₹18,500 insurance applied.
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/digital-twin"
            className="inline-flex items-center gap-1 rounded-xl border border-amber-300 bg-white px-3 py-1.5 font-medium text-amber-900 transition hover:bg-amber-100/50"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Inspect Twin Graph
          </Link>
          <Link
            to="/recovery"
            className="inline-flex items-center gap-1 rounded-xl bg-primary px-3 py-1.5 font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90"
          >
            Review Plan (Score 97)
            <ChevronRight className="h-3 w-3" />
          </Link>
        </div>
      </motion.div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {metrics.map((m, i) => (
          <GlassCard key={m.label} delay={i * 0.05} className="p-4">
            <div className="flex items-center justify-between">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">
                <m.icon className="h-4 w-4" />
              </div>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
            </div>
            <div className="mt-3 text-2xl font-semibold tracking-tight tabular-nums">
              {m.value}
            </div>
            <div className="mt-0.5 text-xs text-muted-foreground">{m.label}</div>
            <div className="mt-2 text-[11px] font-medium text-primary/80">{m.trend}</div>
          </GlassCard>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Itinerary Timeline */}
        <div className="lg:col-span-2">
          <SectionTitle
            title="Current Itinerary"
            subtitle="Live timeline with dependency health"
            action={
              <Link
                to="/digital-twin"
                className="group inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
              >
                Open Digital Twin
                <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
            }
          />
          <GlassCard className="p-6">
            <div className="space-y-1">
              {itinerary.map((n, i) => (
                <motion.div
                  key={n.city}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="group relative flex items-center gap-4 rounded-xl px-2 py-3 transition hover:bg-secondary/70"
                >
                  <div className="relative flex flex-col items-center">
                    <StatusDot status={n.status} />
                    {i < itinerary.length - 1 && (
                      <span className="absolute top-4 h-8 w-px bg-gradient-to-b from-border to-transparent" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{n.city}</span>
                      <span
                        className={
                          "rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider " +
                          {
                            healthy: "bg-emerald-50 text-emerald-700",
                            upcoming: "bg-primary/10 text-primary",
                            affected: "bg-amber-50 text-amber-700",
                            disrupted: "bg-rose-50 text-rose-700",
                          }[n.status]
                        }
                      >
                        {n.status}
                      </span>
                    </div>
                    <div className="mt-0.5 text-xs text-muted-foreground">{n.detail}</div>
                  </div>
                  <div className="text-sm font-medium tabular-nums text-foreground/80">
                    {n.time}
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Journey Health circle */}
        <div>
          <SectionTitle title="Journey Health" subtitle="Post-disruption recovery" />
          <GlassCard className="flex flex-col items-center p-6">
            <HealthRing value={95} />
            <div className="mt-4 grid w-full grid-cols-3 gap-2 text-center">
              {[
                { l: "Before", v: "97%", c: "text-emerald-600" },
                { l: "Impact", v: "42%", c: "text-rose-600" },
                { l: "Recovered", v: "95%", c: "text-emerald-600" },
              ].map((x) => (
                <div key={x.l} className="rounded-xl bg-secondary/60 p-2">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {x.l}
                  </div>
                  <div className={"mt-0.5 text-sm font-semibold " + x.c}>{x.v}</div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Live Flight Monitor */}
      <div>
        <SectionTitle title="Live Flight Monitor" subtitle="Real-time telemetry across your itinerary" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <FlightCard
            flight="AI816"
            route="PNQ → DEL"
            status="Delayed"
            statusColor="amber"
            delay="+2h 45m"
            weather="Thunderstorm · Delhi"
            gate="4B"
            terminal="T1"
            countdown="02:14:08"
          />
          <FlightCard
            flight="EK 517"
            route="DEL → DXB"
            status="On Time"
            statusColor="emerald"
            weather="Clear · 34°C"
            gate="A22"
            terminal="T3"
            countdown="05:42:31"
          />
          <FlightCard
            flight="EK 001"
            route="DXB → LHR"
            status="Scheduled"
            statusColor="sky"
            weather="Overcast · London"
            gate="—"
            terminal="T3"
            countdown="09:18:00"
          />
        </div>
      </div>
    </div>
  );
}

function HealthRing({ value }: { value: number }) {
  const r = 70;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative h-44 w-44">
      <svg viewBox="0 0 160 160" className="h-full w-full -rotate-90">
        <defs>
          <linearGradient id="hg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.68 0.17 155)" />
            <stop offset="100%" stopColor="oklch(0.58 0.19 250)" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r={r} stroke="oklch(0.92 0.02 240)" strokeWidth="12" fill="none" />
        <motion.circle
          cx="80"
          cy="80"
          r={r}
          stroke="url(#hg)"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
          initial={{ strokeDasharray: `0 ${c}` }}
          animate={{ strokeDasharray: `${(value / 100) * c} ${c}` }}
          transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
          Health
        </div>
        <div className="text-4xl font-semibold tabular-nums">{value}%</div>
        <div className="mt-1 text-[10px] font-medium text-emerald-600">Recovered</div>
      </div>
    </div>
  );
}

function FlightCard({
  flight,
  route,
  status,
  statusColor,
  delay,
  weather,
  gate,
  terminal,
  countdown,
}: {
  flight: string;
  route: string;
  status: string;
  statusColor: "amber" | "emerald" | "sky";
  delay?: string;
  weather: string;
  gate: string;
  terminal: string;
  countdown: string;
}) {
  const colors = {
    amber: "bg-amber-50 text-amber-700 border-amber-200",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
    sky: "bg-sky-50 text-sky-700 border-sky-200",
  }[statusColor];
  return (
    <GlassCard>
      <div className="flex items-start justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
            Flight
          </div>
          <div className="mt-0.5 text-lg font-semibold">{flight}</div>
          <div className="text-xs text-muted-foreground">{route}</div>
        </div>
        <div className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${colors}`}>
          {status}
          {delay && <span className="ml-1 opacity-70">{delay}</span>}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3 text-center">
        <Meta label="Gate" value={gate} />
        <Meta label="Terminal" value={terminal} />
        <Meta label="ETA" value={countdown} />
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-xl bg-secondary/60 px-3 py-2 text-xs">
        <Cloud className="h-3.5 w-3.5 text-primary" />
        <span className="text-muted-foreground">{weather}</span>
        <Clock className="ml-auto h-3.5 w-3.5 text-muted-foreground" />
        <span className="font-medium tabular-nums">{countdown}</span>
      </div>

      {statusColor === "amber" && (
        <div className="mt-3 flex items-center gap-2 rounded-xl border border-amber-200/60 bg-amber-50/60 px-3 py-2 text-[11px] text-amber-800">
          <MapPin className="h-3 w-3" />
          Weather-related delay · autonomous recovery ready
        </div>
      )}
    </GlassCard>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-secondary/50 p-2">
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
      <div className="mt-0.5 text-sm font-semibold tabular-nums">{value}</div>
    </div>
  );
}