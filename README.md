# JourneyIQ

**AI-powered Self-Healing Travel Continuity Engine**

[![Framework](https://img.shields.io/badge/Framework-TanStack%20Start%20%28React%2019%29-blue.svg)](https://tanstack.com/start)
[![Routing](https://img.shields.io/badge/Routing-TanStack%20Router-teal.svg)](https://tanstack.com/router)
[![Styling](https://img.shields.io/badge/Styling-Tailwind%20CSS%20v4-38bdf8.svg)](https://tailwindcss.com)
[![Animations](https://img.shields.io/badge/Animations-Framer%20Motion-f43f5e.svg)](https://www.framer.com/motion/)
[![Build](https://img.shields.io/badge/Build-Vite%208-646cff.svg)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6.svg)](https://www.typescriptlang.org/)

Built for the **American Express Autonomous Travel Disruption Concierge Hackathon (2026)**. JourneyIQ doesn't just notify travelers about disruptions — it models the entire journey as a connected digital twin, calculates downstream ripple effects, generates multi-criteria recovery options, and autonomously applies American Express benefits to eliminate out-of-pocket expenses.

---

## 🚀 Overview

Flight delays and missed connections cost travelers countless hours in call center queues and manual insurance claim filings. When **Flight AI816** experiences a 2h 45m weather delay out of Pune, standard apps simply send a push alert.

**JourneyIQ takes autonomous action:**
1. **Detects the disruption** and evaluates downstream dependency failures (missed Emirates layover in Delhi, delayed Hilton check-in, invalid chauffeur pickup).
2. **Computes 3 alternative recovery routes** in under 3 seconds using a 6-pillar weighted decision model.
3. **Applies American Express benefits automatically** (waives ₹18,500 in rebooking costs, unlocks Emirates Business Lounge access at Dubai Terminal 3, preserves hotel reservations and re-times airport transfers).
4. **Keeps the traveler in control** with natural language AI reasoning, interactive digital twin graphs, and second-by-second journey replay.

---

## 🌟 Core Innovations

```
                               ┌─────────────────────────────┐
                               │   Disruption Detected       │
                               │   AI816 (+2h 45m Delay)     │
                               └──────────────┬──────────────┘
                                              │
                                              ▼
                               ┌─────────────────────────────┐
                               │   Journey Digital Twin      │
                               │   Graph Dependency Analysis │
                               └──────────────┬──────────────┘
                                              │
                        ┌─────────────────────┴─────────────────────┐
                        ▼                                           ▼
          ┌───────────────────────────┐               ┌───────────────────────────┐
          │  Ripple Effect Prediction │               │  Autonomous Recovery Engine│
          │  5 Downstream Conseq.     │               │  Multi-Pillar Scoring     │
          │  (96% Model Confidence)   │               │  Option A (Score 97/100)  │
          └─────────────┬─────────────┘               └─────────────┬─────────────┘
                        │                                           │
                        └─────────────────────┬─────────────────────┘
                                              │
                                              ▼
                               ┌─────────────────────────────┐
                               │  Dynamic Benefit Optimizer  │
                               │  Amex Delay Coverage: ₹18.5k│
                               │  DXB Lounge Access + Hotel  │
                               │  Out-of-Pocket: ₹0          │
                               └──────────────┬──────────────┘
                                              │
                                              ▼
                               ┌─────────────────────────────┐
                               │  Full Continuity Restored   │
                               │  Health: 95% (From 42%)     │
                               └─────────────────────────────┘
```

| Innovation | Route | Description |
|---|---|---|
| **Journey Digital Twin** | [`/digital-twin`](file:///c:/Users/ASUS/Downloads/JourneyIQ-Autonomous-Travel-Continuity-Engine-main/src/routes/digital-twin.tsx) | Live interactive node graph of every flight, hotel, and chauffeur. Click any node to inspect real-time telemetry, failure ripples, and autonomous mitigation actions. |
| **Ripple Effect Prediction** | [`/digital-twin`](file:///c:/Users/ASUS/Downloads/JourneyIQ-Autonomous-Travel-Continuity-Engine-main/src/routes/digital-twin.tsx) | Models cascading impacts across connections, hotels, and business meetings with 96% model confidence. |
| **Autonomous Recovery Center** | [`/recovery`](file:///c:/Users/ASUS/Downloads/JourneyIQ-Autonomous-Travel-Continuity-Engine-main/src/routes/recovery.tsx) | Ranks recovery paths (Option A via Dubai, Option B via Istanbul, Option C next-day direct) across 6 weighted pillars (Arrival, Reliability, Cost, Comfort, Risk, Benefits) with dynamic score gauges and dispatch confirmation. |
| **Dynamic Benefit Optimizer** | [`/benefits`](file:///c:/Users/ASUS/Downloads/JourneyIQ-Autonomous-Travel-Continuity-Engine-main/src/routes/benefits.tsx) | Zero-touch benefit activation covering ₹18,500 in rebooking costs, lounge access, and chauffeur re-timing with ₹0 out-of-pocket payment. |
| **Interactive AI Concierge** | Global Drawer | Floating conversational assistant (GPT-5.5 simulated) answering traveler queries on routing rationale, insurance coverage, and arrival forecasts with quick suggestions. |
| **Journey Replay** | [`/replay`](file:///c:/Users/ASUS/Downloads/JourneyIQ-Autonomous-Travel-Continuity-Engine-main/src/routes/replay.tsx) | Interactive time-scrubber enabling travelers and operations teams to step second-by-second through the 7-minute autonomous healing timeline. |
| **Live Flight Vector Map** | [`/map`](file:///c:/Users/ASUS/Downloads/JourneyIQ-Autonomous-Travel-Continuity-Engine-main/src/routes/map.tsx) | Geodesic flight corridor trajectories comparing original and re-routed flight paths via Dubai with animated aircraft telemetry. |
| **Audit Log & Settings** | [`/notifications`](file:///c:/Users/ASUS/Downloads/JourneyIQ-Autonomous-Travel-Continuity-Engine-main/src/routes/notifications.tsx) / [`/settings`](file:///c:/Users/ASUS/Downloads/JourneyIQ-Autonomous-Travel-Continuity-Engine-main/src/routes/settings.tsx) | Transparent audit record of every autonomous decision taken and granular autonomy preference threshold controls. |

---

## 💳 American Express Benefit Matrix

JourneyIQ automatically identifies and orchestrates cardholder benefits in real time:

| Benefit | Status | Impact & Value |
|---|---|---|
| **Travel Delay Insurance** | `Auto-Applied` | Full ₹18,500 rebooking differential covered immediately |
| **Airport Lounge Access** | `Unlocked` | Complimentary access to Emirates Business Lounge at DXB Terminal 3 |
| **Hotel Protection** | `Secured` | Hilton Park Lane reservation preserved with late check-in notice |
| **Ground Transfer Sync** | `Rescheduled` | London chauffeur pickup automatically re-timed to 20:50 |
| **Trip Cancellation** | `Standby` | Full refund eligibility maintained if cascading delay exceeds 4 hours |
| **Concierge Priority** | `Active` | Dedicated Platinum concierge agent standing by |

---

## 🛠️ Tech Stack

- **Framework** — [TanStack Start](https://tanstack.com/start) (React 19 + SSR powered by Nitro & H3)
- **Routing** — [TanStack Router](https://tanstack.com/router) (file-based routing + auto-generated route tree)
- **Styling** — [Tailwind CSS v4](https://tailwindcss.com) with `@theme inline` and custom OKLCH executive color tokens
- **Animations** — [Framer Motion v12](https://www.framer.com/motion/) for spring physics, layout animations, and SVG morphs
- **UI Components** — [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/) (New York style)
- **Charts & Vectors** — [Recharts](https://recharts.org/) and animated SVG gauges & flight trajectories
- **Build Engine** — [Vite 8](https://vitejs.dev/) with native ESM

---

## 📁 Project Structure

```
JourneyIQ/
├── public/                 # Static assets and favicon
├── src/
│   ├── start.ts            # TanStack Start instance with SSR error middleware
│   ├── server.ts           # Nitro/H3 server entry with error normalizer
│   ├── router.tsx          # Router factory with React Query integration
│   ├── routeTree.gen.ts    # Auto-generated typed route tree
│   ├── styles.css          # Tailwind CSS v4 tokens, OKLCH theme, glassmorphism
│   ├── components/
│   │   ├── app-shell.tsx   # Sidebar, header, and interactive AI Concierge drawer
│   │   ├── ui-kit.tsx      # Reusable GlassCard, SectionTitle, StatusDot
│   │   └── ui/             # 46 shadcn/ui headless primitives
│   ├── hooks/
│   │   └── use-mobile.tsx  # Responsive viewport detection
│   ├── lib/
│   │   ├── utils.ts        # cn() class merging utility
│   │   ├── error-capture.ts# Error recording with circular cause chain tracking
│   │   ├── error-page.ts   # Standalone HTML fallback page
│   │   └── error-reporting.ts # Client error telemetry dispatcher
│   └── routes/             # File-based routes
│       ├── __root.tsx      # HTML shell, metadata, QueryClientProvider, AppShell
│       ├── index.tsx       # Command center dashboard with live countdown & alerts
│       ├── digital-twin.tsx# Interactive Digital Twin graph & telemetry inspector
│       ├── recovery.tsx    # Multi-pillar recovery scoring & execution center
│       ├── benefits.tsx    # Dynamic Benefit Optimizer & savings ledger
│       ├── insights.tsx    # AI pattern predictions & travel analytics
│       ├── replay.tsx      # Second-by-second disruption recovery playback
│       ├── map.tsx         # Live vector flight path map
│       ├── notifications.tsx # Chronological autonomous event log
│       └── settings.tsx    # Autonomy controls & scoring weights
```

---

## ⚡ Quickstart

### Prerequisites
- Node.js ≥ 18 or [Bun](https://bun.sh/)
- `npm` or `bun`

### Installation & Execution

```sh
# Clone repository
git clone https://github.com/invo-coder19/JourneyIQ-Autonomous-Travel-Continuity-Engine.git
cd JourneyIQ-Autonomous-Travel-Continuity-Engine

# Install dependencies
npm install
# or with bun:
bun install

# Start local development server
npm run dev
# or with bun:
bun dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to experience JourneyIQ.

---

## 📋 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Launch local development server with HMR on port 5173 |
| `npm run build` | Compile optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint across code and routes |
| `npm run format` | Format codebase using Prettier |

---

## 🎯 Hackathon Showcase Walkthrough

When evaluating or demonstrating JourneyIQ:

1. **Dashboard (`/`)**: Note the live countdown timer ticking down to departure, the **Active Disruption Remediated** banner, and the 95% Journey Health recovery ring.
2. **AI Travel Concierge**: Click the floating sparkling icon in the lower-right corner. Try clicking prompt pills such as *"Why DXB over IST?"* or *"What benefits are applied?"* to inspect autonomous reasoning.
3. **Journey Digital Twin (`/digital-twin`)**: Click on any node (`Flight AI816`, `DEL Layover`, `Flight EK517`, `Hilton Park Lane`). The inspector displays real-time telemetry, downstream impact, and autonomous action taken.
4. **Recovery Center (`/recovery`)**: Switch between **Option A (Dubai)**, **Option B (Istanbul)**, and **Option C (Next-day direct)**. Observe the recovery gauge, 6-pillar breakdown bars, and AI reasoning adapt dynamically, and test the **"Confirm Option"** button.
5. **Benefits Optimizer (`/benefits`)**: Review the ₹18,500 total insurance coverage ledger showing zero out-of-pocket liability.
6. **Journey Replay (`/replay`)**: Drag the scrubber slider or hit Play to watch the 7-minute autonomous healing sequence unfold step-by-step.

---

*Built with ❤️ for the American Express Autonomous Travel Disruption Concierge Hackathon 2026.*
