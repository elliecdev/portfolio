# Portfolio

A modern, interactive portfolio website built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**. Features dark mode, smooth animations, and a fully tested component suite.

## Features

- ⚡ **Fast & Responsive** — Next.js 16 with SSR and optimized images
- 🌙 **Dark Mode** — Toggle between light and dark themes (localStorage persisted)
- ✨ **Smooth Animations** — Intersection Observer for scroll-triggered reveals, RAF-driven effects
- 🧪 **Fully Tested** — 100% component coverage with Vitest, React Testing Library, behavior/interaction tests
- ♿ **Accessible** — semantic HTML, ARIA labels, keyboard navigation
- 📱 **Mobile-First** — responsive design with Tailwind CSS

## Tech Stack

- **Framework:** Next.js 16, React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Testing:** Vitest, React Testing Library, @testing-library/dom
- **CI/CD:** GitHub Actions
- **Coverage:** c8 + @vitest/coverage-v8

## Getting Started

### Prerequisites

- Node.js 18+ (or 20+)
- npm

### Installation

```bash
cd /Users/ellie/code/portfolio
npm install --legacy-peer-deps
```

### Development

```bash
npm run dev
# Open http://localhost:3000 in your browser
```

### Build & Production

```bash
npm run build
npm run start
```

## Testing

```bash
# Run all tests
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run coverage
# or CI mode
npm run coverage:ci
```

All components have behavior/interaction tests (dark mode toggle, mobile menu, animations, etc.). See `.github/workflows/ci.yml` for automated test runs on push/PR.

## Project Structure

```
src/
├── app/                 # Next.js App Router (13+)
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── ...              # Other routes
├── components/          # Reusable React components (tested)
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Card.tsx
│   ├── Timeline.tsx
│   ├── Technologies.tsx
│   └── ...
├── data/                # Static data (projects, experience, tech, etc.)
│   ├── projects.ts
│   ├── experience.ts
│   └── ...
├── hooks/               # Custom React hooks
│   ├── useDarkMode.ts
│   └── ...
├── test/
│   ├── setupTests.ts    # Vitest config & mocks
│   └── renderWithProviders.tsx  # Test utility with router/theme
└── public/              # Static assets
```

## Key Features Explained

### Dark Mode

- Toggle in Header component
- Theme state stored in `localStorage`
- Applied via `document.documentElement.classList`

### Animations

- **Scroll reveals:** IntersectionObserver detects viewport entry, applies animation classes
- **Icon animations:** RequestAnimationFrame (RAF) for smooth, GPU-accelerated effects
- **Page transitions:** Fade in/out on route changes

### Testing Strategy

- **Smoke tests:** component renders without crash
- **Behavior tests:** user interactions (toggle, menu, visibility on scroll)
- **Custom util:** `renderWithProviders` sets up router & theme context for isolated tests

## GitHub Actions CI

Push to main/PR triggers:

1. Checkout code
2. Setup Node.js
3. Install dependencies
4. Run tests with coverage
5. Upload coverage artifact

See `.github/workflows/ci.yml` for details.

## Deployment

Deploy to **Vercel**:

```bash
npm install -g vercel
vercel
# follow prompts
```

---

Built with ❤️ using Next.js, React, and TypeScript.
