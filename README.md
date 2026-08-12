# Journey Guardian

Design a premium, modern, highly interactive web dashboard called "JourneyIQ" — an AI-powered Self-Healing Travel Intelligence Platform built for the American Express Autonomous Travel Disruption Concierge Hackathon.

The UI should feel like a premium fintech product from American Express—minimal, elegant, futuristic, and highly polished.

Design Language

 Minimal UI

 Premium FinTech aesthetic

 Glassmorphism with subtle transparency

 Rounded corners (16–20px)

 Soft shadows

 Plenty of white space

 Smooth micro-interactions

 Animated status changes

 Responsive layout

 Dark Blue (#016FD0), Navy Blue (#003A70), White (#FFFFFF), Light Blue (#D8F1FF), and subtle shades of gray

 Use gradients inspired by the American Express brand without copying the official interface

 Use modern icons (Lucide/Heroicons)

The dashboard should feel like Stripe Dashboard × Apple × Linear × American Express.

Landing Dashboard

Large Hero Card

JourneyIQ

AI-powered Self-Healing Travel Intelligence Platform

Current Journey Status

Healthy

Show

 Traveler Name

 Loyalty Tier

 Upcoming Trip

 Countdown to Departure

 Live Flight Status

Top metric cards

 Flights

 Hotels

 Recovery Score

 Journey Health

 Active Benefits

 Notifications

Sidebar

Elegant minimal sidebar

Dashboard

Journey Digital Twin

Recovery Center

Benefits Optimizer

AI Insights

Notifications

Settings

Dashboard Layout

Section 1

Current Itinerary Timeline

Pune

↓

Delhi

↓

London

↓

Hilton Hotel

↓

Conference

Every node should have

Green

Healthy

Blue

Upcoming

Red

Disrupted

Orange

Affected

Section 2

Live Flight Monitor

Beautiful cards

Flight AI816

Status

Delayed

Animated delay indicator

Weather

Boarding Gate

Terminal

Countdown Timer

Live updates

Section 3

Journey Health

Circular progress

Journey Health

97%

Green

After disruption

Animate

97%

↓

42%

↓

Recovered

95%

Journey Digital Twin

The most beautiful page.

Create an interactive node graph.

Home

↓

Flight 1

↓

Airport

↓

Flight 2

↓

Hotel

↓

Taxi

↓

Business Meeting

↓

Return Flight

Every node connected.

Hover

Shows details.

Click

Expands dependency.

When disruption happens

Entire graph animates.

Affected nodes become orange.

Broken node becomes red.

Recovered nodes become blue then green.

Show ripple animations travelling across connections.

Ripple Effect Prediction

Beautiful dependency visualization.

When Flight Delay occurs

Animated cards appear one after another

✓ Missed Connection

✓ Hotel Check-in Delayed

✓ Airport Pickup Invalid

✓ Business Meeting Risk

✓ Travel Insurance Eligible

Each card connected with animated arrows.

Display

"Ripple Confidence"

96%

Autonomous Recovery Center

Premium comparison cards.

Three recovery plans.

Each card displays

Arrival Time

Cost

Layover

Reliability

Journey Time

Carbon Impact

Customer Preference Match

Recovery Score

Example

Option A

Recovery Score

97

Highlighted with glowing blue border

Button

Recommended

Option B

Score

91

Option C

Score

74

Selecting a card expands AI explanation.

Recovery Score Visualization

Beautiful radial gauge.

Recovery Score

97/100

Below it

Score Breakdown

Arrival Time

★★★★★

Reliability

★★★★★

Cost

★★★★☆

Comfort

★★★★★

Risk

★★★★★

Benefits

★★★★★

Animated progress bars.

Dynamic Benefit Optimizer

Premium AMEX-style cards.

Show

Travel Delay Insurance

Applied

Airport Lounge Access

Available

Hotel Coverage

Covered

Airport Transfer

Rescheduled

Trip Cancellation

Protected

Large savings card

Recovery Cost

₹18,500

AMEX Coverage

₹18,500

Customer Pays

₹0

Use subtle blue gradients.

AI Reasoning Panel

Looks like ChatGPT.

Title

Why did JourneyIQ choose this recovery?

AI explanation

 Earliest arrival

 Lowest disruption

 Zero additional payment

 Keeps hotel reservation valid

 Covered under AMEX insurance

 Lowest overall journey risk

Confidence

98%

Notifications

Timeline

09:35

Flight delayed

09:36

Ripple detected

09:36

Recovery initiated

09:37

Benefits applied

09:38

Hotel updated

09:39

Taxi rescheduled

09:39

Journey recovered

Animated checkmarks.

Journey Replay

One of the coolest pages.

Playback slider.

User can replay

Entire disruption.

09:32

Journey Healthy

↓

09:35

Flight Delay

↓

09:36

Ripple Prediction

↓

09:37

Recovery Score

↓

09:38

Benefits Applied

↓

09:39

Journey Restored

Everything animates.

Maps

Interactive world map.

Flight path animation.

Moving aircraft.

Current aircraft location.

Updated route after recovery.

AI Assistant

Floating assistant.

User can ask

"Why was this flight selected?"

"What benefits did I use?"

"Show alternate recovery."

Beautiful chat UI.

Animations

Use Framer Motion.

Smooth transitions.

Animated graphs.

Live counters.

Loading skeletons.

Animated node connections.

Pulse effects.

Floating cards.

Timeline animations.

Lottie success animations.

No abrupt transitions.

UX

Every interaction should feel premium.

Every card should slightly elevate on hover.

Buttons should have soft ripple animations.

Charts should animate on load.

Journey graph should animate when disruptions occur.

Recovery cards should smoothly expand.

Notifications should slide in elegantly.

Overall Feel

The product should feel like a real enterprise dashboard that American Express could deploy tomorrow.

Avoid clutter.

Avoid excessive colors.

Keep everything clean, modern, premium, data-driven, and highly interactive.

The final result should resemble a production-ready SaaS dashboard that combines the visual quality of Stripe Dashboard, the simplicity of Apple, the elegance of Linear, and the trustworthiness of American Express, while showcasing the four core innovations:

Journey Digital Twin

Ripple Effect Prediction

Autonomous Recovery Score

Dynamic Benefit Optimizer

The experience should immediately communicate one idea:

JourneyIQ doesn't just notify travelers about disruptions—it understands the entire journey, predicts every consequence, intelligently restores the itinerary, and maximizes AMEX benefits automatically.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
