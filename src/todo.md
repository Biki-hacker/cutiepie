You are my coding assistant. Extend the existing Vite + React project with the following functional pages and logic:

---

### 🔹 Page3.jsx – Shuffle Game
- Theme: playful challenge, "If love is a game, let's see if you can win 🎲💘".
- Layout:
  - Heading at top.
  - Placeholder for character GIF (centered, 150–200px size).
  - Three "cups/glasses" horizontally aligned (simple divs with rounded borders).
  - A "Reshuffle" button below.
- Functionality:
  - Store an array `['Yes','No','']`.
  - Shuffle the array each render or when "Reshuffle" is clicked.
  - When user clicks a cup:
    - Reveal what's underneath (Yes → go to `/final`, No → go to `/page4`, Empty → do nothing).
    - Show text underneath the cup like `Yes`, `No`, or `Empty`.
- Mobile optimization:
  - Cups should be large, tappable (`w-24 h-24 sm:w-32 sm:h-32`).
  - Use flexbox with spacing for horizontal alignment, stack vertically on very small screens.
- Components:
  - Reusable `ShuffleCups.jsx` component that accepts `onResult` callback.

---

### 🔹 Page4.jsx – Blow-away "No" Button
- Theme: character waves fan and the "No" button floats away.
- Layout:
  - Heading: "You can’t escape me 💨❤️".
  - Placeholder for character GIF.
  - Two buttons: Yes and No.
- Functionality:
  - Yes button → `/final`.
  - No button:
    - Should **float around continuously** on its own.
    - Use Framer Motion or CSS keyframes to animate drifting (e.g., side-to-side, diagonal, small random paths).
    - The animation must be looped, so the button never stays still.
    - Clicking No (if user manages) → `/page5`.
- Mobile optimization:
  - Keep both buttons large and spaced.
  - Ensure No button floats but remains within screen bounds (so it’s visible but hard to tap).

---

### 🔹 Page5.jsx – Angry Yes-only
- Theme: angry/cute character, destroys the No button.
- Layout:
  - Heading: "You’ve left me no choice! 💥".
  - Placeholder for angry GIF.
  - Animation: A "No" button briefly renders, then explodes/fades away.
  - After that, show two Yes buttons side by side.
- Functionality:
  - Both Yes buttons route to `/final`.
- Mobile optimization:
  - Buttons stacked on very small screens, side-by-side on larger.
  - Use `flex-wrap` and `gap-4` for spacing.

---

### 🔹 Notes
- Use `<PageWrapper>` for consistent centered layout.
- Use existing `<YesButton>` and `<NoButton>` components for styling.
- Make sure routing works:
  - Page3 → Yes = `/final`, No = `/page4`.
  - Page4 → Yes = `/final`, No = `/page5`.
  - Page5 → Yes = `/final`.
- Animations should be light and smooth, optimized for phone screens.

---

### 🔹 Deliverables
1. Implement `ShuffleCups.jsx` with shuffle + reveal logic.
2. Complete Page3.jsx, Page4.jsx, Page5.jsx with headings, placeholder GIF areas, and button logic.
3. Use TailwindCSS for responsive design.
4. Use Framer Motion (or CSS keyframes) for animations:
   - Shuffle reveal (Page3).
   - Floating drift for No button (Page4).
   - Explosion/fade for No button (Page5).
5. No assets required — only placeholders.
6. Ensure everything runs with `npm run dev`.

