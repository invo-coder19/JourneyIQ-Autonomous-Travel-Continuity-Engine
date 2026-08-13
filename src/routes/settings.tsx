import { createFileRoute } from "@tanstack/react-router";
import { GlassCard, SectionTitle } from "@/components/ui-kit";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings · JourneyIQ" },
      { name: "description", content: "Preferences for autonomous recovery and notifications." },
      { property: "og:title", content: "JourneyIQ Settings" },
      { property: "og:description", content: "Control autonomy, notifications, and privacy." },
    ],
  }),
  component: Settings,
});

function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Settings</h1>
        <p className="mt-1 text-sm text-muted-foreground">Control how JourneyIQ acts on your behalf.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <SectionTitle title="Autonomy" subtitle="How aggressively should AI act" />
          <GlassCard>
            <div className="space-y-4">
              {[
                { l: "Auto-accept recovery plans", d: "Apply best plan when confidence > 95%", on: true },
                { l: "Auto-apply Credit Card benefits", d: "Zero-touch benefit activation", on: true },
                { l: "Auto-rebook hotels", d: "Preserve loyalty properties", on: true },
                { l: "Auto-reschedule transfers", d: "Local ground transport", on: false },
              ].map((r) => (
                <div key={r.l} className="flex items-center gap-3 rounded-xl border border-border/60 bg-white/60 p-3">
                  <div className="flex-1">
                    <div className="text-sm font-medium">{r.l}</div>
                    <div className="text-xs text-muted-foreground">{r.d}</div>
                  </div>
                  <Switch defaultChecked={r.on} />
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
        <div>
          <SectionTitle title="Preferences" subtitle="Tune the recovery scoring model" />
          <GlassCard>
            <div className="space-y-4 text-sm">
              {[
                { l: "Prefer earliest arrival", v: 90 },
                { l: "Prefer lowest cost", v: 55 },
                { l: "Prefer highest comfort", v: 75 },
                { l: "Prefer lowest carbon", v: 40 },
              ].map((r) => (
                <div key={r.l}>
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="font-medium">{r.l}</span>
                    <span className="text-xs tabular-nums text-muted-foreground">{r.v}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary">
                    <div className="h-full rounded-full bg-gradient-blue" style={{ width: `${r.v}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}