import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function GlassCard({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.2, 0.8, 0.2, 1] }}
      whileHover={{ y: -2 }}
      className={cn(
        "relative rounded-2xl border border-border/60 bg-white/70 p-5 shadow-card backdrop-blur-xl transition-shadow hover:shadow-elegant",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <div className="min-w-0">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">{title}</h2>
        {subtitle && (
          <p className="mt-0.5 text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>
      {action}
    </div>
  );
}

export function StatusDot({
  status,
}: {
  status: "healthy" | "upcoming" | "disrupted" | "affected";
}) {
  const map = {
    healthy: "bg-emerald-500",
    upcoming: "bg-cc-blue",
    disrupted: "bg-rose-500",
    affected: "bg-amber-500",
  } as const;
  return (
    <span className="relative flex h-2.5 w-2.5">
      <span
        className={cn("absolute inline-flex h-full w-full animate-ping rounded-full opacity-60", map[status])}
      />
      <span className={cn("relative inline-flex h-2.5 w-2.5 rounded-full", map[status])} />
    </span>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  // Simple animated counter using motion
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {to}
      {suffix}
    </motion.span>
  );
}