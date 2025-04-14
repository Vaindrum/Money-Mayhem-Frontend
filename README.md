# 🎲 MoneyMayhem Frontend Roadmap

Built using **Next.js (TypeScript)**, **TailwindCSS**, **Zustand**, and **shadcn/ui**.

---

## 🛠️ Initial Setup (Day 1–2)

- [x] Initialize Next.js (with TypeScript & Turbopack)
- [x] Install TailwindCSS, classnames, Zustand, shadcn/ui
- [x] Create base folder structure: `components/`, `pages/`, `lib/`, `stores/`
- [x] Global layout with `Navbar`, `Footer`, and default page layout
- [x] Setup Zustand with auth & UI slices

---

## 🏠 Home Page (Day 3–6)

### Main Section
- [x] Logo, Title, Tagline
- [x] Name input + Play button
- [x] Create private game button

### Modals & Extras
- [x] Rooms Modal
- [x] Login Modal
- [x] Profile Modal (avatar, username, sign out)
- [x] Volume slider (top-left), Discord button (bottom-right)

### Others
- [x] How To Play component (text + image)
- [x] Footer (links: info, blog, terms, privacy, cookies, discord)

---

## 👤 Profile Page (Day 7–10)

- [x] Top Section (avatar, username, editable if authUser)
- [x] Achievements Section (title, % completed)
- [x] Statistics Section (games played/won, friends)
- [x] Friends Section (avatar, online status)
- [x] Games History Section (game recaps)

---

## 🎮 Game Page (Day 11–18)

### Layout
- [x] Responsive layout: lg (side sections) / sm (top-bottom stacking)
- [x] Header: logo + controls (zoom, how to play, discord)

### Board & Center
- [x] Board Component (game board UI)
- [x] Game Logs Center (real-time updates)

### Right Section (lg) / Bottom Section (sm)
- [x] Players Container
- [x] VoteKick / Bankrupt Container
- [x] Trades Container
- [x] Brief Stats + Full Stats Modal
- [x] Achievement Toast (bottom right)

### Left Section
- [x] Share Game Container
- [x] Ads Container
- [x] Chat Modal or Chat Container

---

## 🔁 Integrations & State Management (Day 19–25)

- [ ] Connect with backend API (auth, game logic, rooms)
- [ ] Use Zustand slices: `userSlice`, `gameSlice`, `chatSlice`, etc.
- [ ] Socket.io integration for real-time sync
- [ ] Update state for game actions, turns, trades, events

---

## 🧪 Final Polish & Testing (Day 26–30)

- [ ] Responsive design across all devices
- [ ] Animate UI with Framer Motion (optional)
- [ ] Add loading states, skeletons, and fallback UIs
- [ ] Accessibility pass (focus, keyboard nav, alt text)
- [ ] Testing (play a full game, check edge cases)
- [ ] Bug fixing and final cleanup

---

## 🔧 Tech Stack

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [shadcn/ui](https://ui.shadcn.com/)
- [TypeScript](https://www.typescriptlang.org/)
