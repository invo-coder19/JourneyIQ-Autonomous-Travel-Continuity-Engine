# JourneyIQ

**AI-powered Self-Healing Travel Intelligence Platform**

Built for the American Express Autonomous Travel Disruption Concierge Hackathon. JourneyIQ doesn't just notify travelers about disruptions — it understands the entire journey, predicts every consequence, intelligently restores the itinerary, and maximizes AMEX benefits automatically.

---

## Overview

JourneyIQ is a premium enterprise travel dashboard that combines real-time disruption detection with autonomous recovery. The platform models every leg of a journey as a connected graph, propagates disruption ripples across dependencies, and orchestrates recovery — all without manual intervention.

## Core Features

| Feature | Description |
|---|---|
| **Journey Digital Twin** | Interactive node graph representing every flight, hotel, and transfer as a live dependency chain |
| **Ripple Effect Prediction** | Automatically identifies downstream consequences of any disruption with confidence scoring |
| **Autonomous Recovery Score** | Ranks recovery options across arrival time, cost, reliability, comfort, and risk |
| **Dynamic Benefit Optimizer** | Applies eligible AMEX benefits in real time — insurance, lounge access, hotel coverage, and more |
| **Journey Replay** | Scrub through the full disruption → recovery timeline with animated playback |
| **AI Reasoning Panel** | Natural language explanations of every autonomous decision made by the system |

## Tech Stack

- **Framework** — [TanStack Start](https://tanstack.com/start) (React + SSR)
- **Routing** — [TanStack Router](https://tanstack.com/router)
- **Styling** — [Tailwind CSS v4](https://tailwindcss.com)
- **Animations** — [Framer Motion](https://www.framer.com/motion/)
- **UI Components** — [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Charts** — [Recharts](https://recharts.org/)
- **Build** — [Vite](https://vitejs.dev/)

## Getting Started

**Prerequisites:** Node.js ≥ 18 and `npm` or `bun`

```sh
# Clone the repository
git clone https://github.com/invo-coder19/JourneyIQ-Autonomous-Travel-Continuity-Engine.git
cd JourneyIQ-Autonomous-Travel-Continuity-Engine

# Install dependencies
npm install        # or: bun install

# Start the dev server
npm run dev        # or: bun dev
```

The app will be available at `http://localhost:5173`.

## Project Structure

```
src/
├── components/         # Shared UI components and shadcn/ui primitives
├── routes/             # File-based pages (TanStack Router)
│   ├── index.tsx           # Dashboard
│   ├── digital-twin.tsx    # Journey Digital Twin graph
│   ├── recovery.tsx        # Autonomous Recovery Center
│   ├── benefits.tsx        # Dynamic Benefit Optimizer
│   ├── insights.tsx        # AI Insights & reasoning
│   ├── notifications.tsx   # Event timeline
│   ├── replay.tsx          # Journey Replay
│   ├── map.tsx             # Interactive flight map
│   └── settings.tsx        # Settings
├── lib/                # Utilities and helpers
└── styles.css          # Global styles & design tokens
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

---

> *Hackathon project — American Express Autonomous Travel Disruption Concierge 2026*
