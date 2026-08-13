import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Network,
  ShieldCheck,
  Sparkles,
  Bell,
  Settings,
  Gift,
  Map as MapIcon,
  History,
  Search,
  ChevronRight,
  MessageSquare,
  X,
  Send,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/digital-twin", label: "Journey Digital Twin", icon: Network },
  { to: "/recovery", label: "Recovery Center", icon: ShieldCheck },
  { to: "/benefits", label: "Benefits Optimizer", icon: Gift },
  { to: "/insights", label: "AI Insights", icon: Sparkles },
  { to: "/replay", label: "Journey Replay", icon: History },
  { to: "/map", label: "Live Map", icon: MapIcon },
  { to: "/notifications", label: "Notifications", icon: Bell },
  { to: "/settings", label: "Settings", icon: Settings },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [assistantOpen, setAssistantOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground lg:flex">
        <div className="flex items-center gap-2 px-6 pt-7 pb-8">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cc-blue to-cc-light shadow-glow">
            <span className="text-sm font-black text-white">J</span>
          </div>
          <div className="leading-tight">
            <div className="text-[15px] font-semibold tracking-tight">JourneyIQ</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-sidebar-foreground/50">
              Credit Card · Autonomous
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-0.5 px-3">
          {nav.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all",
                  active
                    ? "bg-sidebar-accent text-white shadow-inner"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent/60 hover:text-white",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-y-1.5 left-0 w-0.5 rounded-full bg-cc-blue"
                  />
                )}
                <item.icon className="h-4 w-4 shrink-0" />
                <span className="truncate">{item.label}</span>
                {active && <ChevronRight className="ml-auto h-3.5 w-3.5 opacity-60" />}
              </Link>
            );
          })}
        </nav>

        <div className="m-3 rounded-2xl bg-gradient-to-br from-cc-blue/25 to-transparent p-4">
          <div className="text-[10px] uppercase tracking-widest text-sidebar-foreground/60">
            Platinum · Card
          </div>
          <div className="mt-1 text-sm font-semibold">Aarav Mehta</div>
          <div className="mt-0.5 text-xs text-sidebar-foreground/60">•••• 4821</div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-border/60 bg-background/70 px-4 py-3 backdrop-blur-xl lg:px-8">
          <div className="lg:hidden">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-hero text-white">
              <span className="text-xs font-black">J</span>
            </div>
          </div>
          <div className="relative hidden max-w-md flex-1 md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Search journeys, flights, bookings…"
              className="w-full rounded-xl border border-border bg-secondary/60 py-2 pl-9 pr-3 text-sm outline-none placeholder:text-muted-foreground/70 focus:border-primary/40 focus:bg-background"
            />
          </div>
          <div className="ml-auto flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-border bg-white/60 px-3 py-1.5 text-xs md:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              Journey Healthy
            </div>
            <button className="relative rounded-xl border border-border bg-white/60 p-2 hover:bg-white">
              <Bell className="h-4 w-4" />
              <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-cc-blue" />
            </button>
            <div className="h-8 w-8 rounded-full bg-gradient-hero ring-2 ring-white shadow-elegant" />
          </div>
        </header>

        <main className="min-w-0 flex-1 px-4 py-6 lg:px-8 lg:py-8">{children}</main>
      </div>

      {/* Floating AI Assistant */}
      <AnimatePresence>
        {assistantOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed bottom-24 right-6 z-50 flex h-[520px] w-[380px] flex-col overflow-hidden rounded-3xl border border-border bg-white/90 shadow-elegant backdrop-blur-2xl"
          >
            <div className="flex items-center gap-3 border-b border-border/60 bg-gradient-hero px-4 py-3 text-white">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-white/15">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-semibold">JourneyIQ Assistant</div>
                <div className="text-[10px] uppercase tracking-widest text-white/70">
                  Online · GPT-5.5
                </div>
              </div>
              <button
                onClick={() => setAssistantOpen(false)}
                className="ml-auto rounded-lg p-1.5 hover:bg-white/10"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex-1 space-y-3 overflow-y-auto p-4 text-sm">
              <div className="rounded-2xl rounded-tl-sm bg-secondary p-3">
                Hi Aarav — your flight AI816 is delayed by 2h 45m. I've already re-routed via
                DXB and preserved your Hilton check-in. Ask me anything.
              </div>
              <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-primary p-3 text-primary-foreground">
                Why did you pick DXB over IST?
              </div>
              <div className="rounded-2xl rounded-tl-sm bg-secondary p-3">
                DXB scored <b>97/100</b>: earlier arrival by 42m, lounge access, and full credit card
                coverage on the rebooking fee (₹18,500). IST scored 84.
              </div>
            </div>
            <div className="border-t border-border/60 p-3">
              <div className="flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-3 py-2">
                <input
                  placeholder="Ask JourneyIQ…"
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
                <button className="grid h-7 w-7 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setAssistantOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-hero text-white shadow-glow transition hover:scale-105"
      >
        <MessageSquare className="h-5 w-5" />
        <span className="absolute inset-0 -z-10 rounded-2xl bg-cc-blue/50 blur-xl" />
      </button>
    </div>
  );
}