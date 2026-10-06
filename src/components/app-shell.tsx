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
  RotateCcw,
  Bot,
} from "lucide-react";
import { useState, useRef, useEffect, type ReactNode } from "react";
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

interface ChatMessage {
  id: string;
  role: "assistant" | "user";
  text: string;
}

const initialMessages: ChatMessage[] = [
  {
    id: "init-1",
    role: "assistant",
    text: "Hi Aarav — your flight AI816 is delayed by 2h 45m. I've re-routed your journey via DXB (Option A, score 97/100) and preserved your Hilton check-in. Ask me anything!",
  },
];

const promptSuggestions = [
  "Why DXB over IST?",
  "What benefits are applied?",
  "Check Hilton check-in",
  "Show arrival time",
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (assistantOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, assistantOpen, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      text: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      let reply = "I'm monitoring all connected legs in real time. Your journey continuity is protected at 95% health. You can also explore the Digital Twin or Recovery Center for granular telemetry.";
      const q = query.toLowerCase();

      if (q.includes("dxb") || q.includes("ist") || q.includes("why")) {
        reply = "DXB scored 97/100 vs IST's 84: earlier arrival by 42m, complimentary Emirates Lounge access, and full credit card coverage on the rebooking fee (₹18,500). IST had a 3h layover risk.";
      } else if (q.includes("benefit") || q.includes("insurance") || q.includes("cover") || q.includes("cost") || q.includes("save")) {
        reply = "Your American Express Travel Delay Insurance has absorbed the ₹18,500 rebooking fee in full. Zero out-of-pocket cost. In addition, you have lounge access at DXB Terminal 3 and chauffeur service in London.";
      } else if (q.includes("hotel") || q.includes("hilton") || q.includes("check-in") || q.includes("stay")) {
        reply = "Hilton Park Lane has confirmed late check-in for 22:10 without penalty. Your reservation, Platinum room upgrade, and breakfast perk remain fully intact.";
      } else if (q.includes("arrival") || q.includes("eta") || q.includes("time") || q.includes("lhr")) {
        reply = "Your revised itinerary arrives at London Heathrow (LHR) at 20:35 tonight via EK 001. You will reach Hilton Park Lane by 22:10, well ahead of tomorrow's 09:00 keynote at The Shard.";
      } else if (q.includes("flight") || q.includes("ai816") || q.includes("del")) {
        reply = "AI816 (PNQ to DEL) is delayed by 2h 45m due to severe monsoon thunderstorms in Delhi. Autonomous transfer onto EK517 DEL→DXB has been secured.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `a-${Date.now()}`,
          role: "assistant",
          text: reply,
        },
      ]);
      setIsTyping(false);
    }, 450);
  };

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
            <Link
              to="/notifications"
              className="relative rounded-xl border border-border bg-white/60 p-2 transition hover:bg-white"
              title="Notifications"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-cc-blue" />
            </Link>
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
            className="fixed bottom-24 right-6 z-50 flex h-[540px] w-[390px] flex-col overflow-hidden rounded-3xl border border-border bg-white/95 shadow-elegant backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-border/60 bg-gradient-hero px-4 py-3.5 text-white">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-white/15">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-semibold">JourneyIQ Concierge</div>
                <div className="text-[10px] uppercase tracking-widest text-white/70">
                  Autonomous · GPT-5.5
                </div>
              </div>
              <div className="ml-auto flex items-center gap-1">
                <button
                  onClick={() => setMessages(initialMessages)}
                  className="rounded-lg p-1.5 text-white/70 hover:bg-white/10 hover:text-white"
                  title="Reset conversation"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => setAssistantOpen(false)}
                  className="rounded-lg p-1.5 text-white/70 hover:bg-white/10 hover:text-white"
                  title="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 space-y-3 overflow-y-auto p-4 text-sm">
              {messages.map((m) => {
                const isUser = m.role === "user";
                return (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "rounded-2xl p-3 leading-relaxed",
                      isUser
                        ? "ml-auto max-w-[85%] rounded-tr-sm bg-primary text-primary-foreground shadow-sm"
                        : "mr-auto max-w-[90%] rounded-tl-sm bg-secondary text-foreground shadow-sm",
                    )}
                  >
                    {m.text}
                  </motion.div>
                );
              })}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mr-auto flex items-center gap-1.5 rounded-2xl rounded-tl-sm bg-secondary px-4 py-3 text-muted-foreground"
                >
                  <Bot className="h-3.5 w-3.5 animate-pulse text-primary" />
                  <span className="text-xs">Analyzing journey graph...</span>
                </motion.div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Suggested Prompt Chips */}
            <div className="flex flex-wrap gap-1.5 border-t border-border/40 bg-secondary/30 px-3 py-2">
              {promptSuggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleSendMessage(suggestion)}
                  className="rounded-full border border-border/80 bg-white/80 px-2.5 py-1 text-[11px] font-medium text-foreground/80 transition hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                >
                  {suggestion}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="border-t border-border/60 bg-white p-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-3 py-2 transition focus-within:border-primary/40 focus-within:bg-background"
              >
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask JourneyIQ concierge…"
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="grid h-7 w-7 place-items-center rounded-lg bg-primary text-primary-foreground transition disabled:opacity-40"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setAssistantOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-hero text-white shadow-glow transition hover:scale-105"
        title="Open AI Concierge"
      >
        <MessageSquare className="h-5 w-5" />
        <span className="absolute inset-0 -z-10 rounded-2xl bg-cc-blue/50 blur-xl" />
      </button>
    </div>
  );
}