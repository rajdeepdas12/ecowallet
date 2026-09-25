# ecowallet


Goal:
Create a single-page animated website inspired by the uploaded wallet dashboard UI.
The website should have smooth scrolling transitions, 3D-like parallax animations, and an eco-modern aesthetic.
It’s for a project called EcoWallet — a platform that turns user uploads into carbon credit tokens (for sustainability tracking).
The website must be frontend-only, deployable on Vercel, and built using Next.js + Tailwind + Framer Motion.

⚙️ Tech Stack

Next.js (App Router) — for a fast, production-ready frontend.

Tailwind CSS — for responsive, modern styling.

Framer Motion — for animations and scroll-based effects.

GSAP (optional) — for parallax scrolling and timeline animations.

Lottie Animations — for eco visuals like floating leaves or glowing globe.

🌍 Website Structure (Single Scrolling Page)

Each section should appear with smooth scroll-triggered animations, blending visually into the next — like Apple or Tesla landing pages.

1. Hero Section

Fullscreen animated hero with gradient overlay inspired by uploaded image #1.

Headline: “Banking That Makes Every Dollar Count.”

Subtext: “EcoWallet brings sustainability, transparency, and smarter digital finance.”

CTA button: “Get Started” → scrolls smoothly to next section.

Background: soft parallax movement + glowing sun animation.

2. About Section

Text fade-in + horizontal scroll animation.

Headline: “Turning Everyday Banking into Effortless Momentum.”

3 cards (like in uploaded image #3):

Partnership Over Projects

Data-Driven Decisions

Instant Transfers

Hover animations for cards (lift + shadow glow).

3. Dashboard Preview Section

Scroll into an animated “mock dashboard” (from uploaded image #2).

Animated statistics counters (Total Balance, Spending, Savings Goal).

Cards slide in from left/right with smooth easing.

Hover effect shows tooltips like “Bank-grade Security”.

4. Upload / Token Section

Upload button appears with smooth upward animation.

When clicked → plays “token creation” animation (using Lottie).

Show example: “Your Upload Earned 5 Carbon Tokens!”

Floating eco icons (leaves, coins, tokens) around button.

5. Impact Section

Counter animation: “12M+ Transfers Processed Monthly”, “98% Satisfaction Rate”.

Parallax forest/earth background that subtly moves while scrolling.

Text fades up dynamically.

6. Footer

Gradient-glass footer with rounded corners.

Minimal text: “© 2025 EcoWallet | Built for Sustainability.”

“Made in Lovable” badge animation on hover.

🎨 Design Language

Dark modern UI (like your uploaded screenshots).

Gradient mix of amber-orange + forest-green + deep black.

Glassmorphism effects on cards.

Smooth scroll snapping for every section.

Subtle particle effects for atmosphere.

✨ Animation Style

Scroll-triggered fade-ins and zoom-outs.

Parallax effect on images and text.

Hover motion on buttons and cards.

Counter & timeline animations for dashboard stats.

Framer Motion variants for reusable animations.

🚀 Output Requirements

Frontend-only, deployable on Vercel.

No backend or data logic.

Use mock JSON data for dashboard numbers.

Must include responsive layout for mobile/tablet.

One long, scrollable page (no page routing).

✅ Expected Output

A single-scroll animated website with the storytelling feel of the uploaded designs — elegant, cinematic, and eco-themed — ready to deploy instantly to Vercel.



## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
