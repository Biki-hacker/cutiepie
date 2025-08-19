You are my coding assistant. Create a new Vite + React project with the following requirements:  

### 🔹 Tech Stack
- React (with JSX, not TSX).
- Vite as the bundler.
- TailwindCSS for styling.
- React Router DOM for navigation.
- Framer Motion (animations, optional).
- React Confetti (for the final celebratory page).

### 🔹 Project Structure
Inside `src/`, create these folders and files:

📂 src/
│
├── assets/
│   ├── images/     # placeholder for PNG/JPG art
│   ├── gifs/       # placeholder for GIF animations
│   └── audio/      # placeholder for bg music & sfx
│
├── components/
│   ├── Buttons/
│   │   ├── YesButton.jsx
│   │   └── NoButton.jsx
│   ├── Animations/
│   │   ├── BlowAwayNo.jsx       # Logic for drifting "No" button
│   │   └── ConfettiEffect.jsx   # Hearts/confetti on final page
│   └── Layout/
│       └── PageWrapper.jsx      # Common centered layout
│
├── pages/
│   ├── Page1.jsx     # First proposal
│   ├── Page2.jsx     # Second chance
│   ├── Page3.jsx     # Shuffle game
│   ├── Page4.jsx     # Blow-away No
│   ├── Page5.jsx     # Angry Yes-only
│   └── FinalPage.jsx # Acceptance + celebration
│
├── App.jsx
└── main.jsx

---

### 🔹 Routing
- Use `react-router-dom`.
- Routes:
  - `/` → Page1
  - `/page2` → Page2
  - `/page3` → Page3
  - `/page4` → Page4
  - `/page5` → Page5
  - `/final` → FinalPage

---

### 🔹 Base Layout
Create a `PageWrapper.jsx` component:
- Full-screen flexbox container (`min-h-screen flex flex-col items-center justify-center`).
- Soft pastel background (e.g., `bg-pink-100`).
- Responsive text (`text-center px-4`) so it works on **phones and desktops**.
- All pages should wrap their content inside `<PageWrapper>` for consistency.

---

### 🔹 Buttons
- `YesButton.jsx` → Green rounded button (`bg-green-400 hover:bg-green-500 px-6 py-3 rounded-xl text-white font-semibold shadow-md`).
- `NoButton.jsx` → Red rounded button (`bg-red-400 hover:bg-red-500 px-6 py-3 rounded-xl text-white font-semibold shadow-md`).
- Both buttons should be **large enough for mobile taps** (`min-w-[120px] text-lg`).

---

### 🔹 Pages
Each page should:
1. Import `PageWrapper`.
2. Have a heading (`<h1>` with `text-2xl md:text-3xl font-bold text-pink-600 mb-6`).
3. Placeholder `<div>` for GIF/image (`className="w-48 h-48 bg-gray-200 rounded-xl mx-auto mb-6"`).
4. Buttons below (using Yes/NoButton components and `<Link>` from react-router-dom).

Example `Page1.jsx`:
```jsx
import PageWrapper from "../components/Layout/PageWrapper";
import YesButton from "../components/Buttons/YesButton";
import NoButton from "../components/Buttons/NoButton";
import { Link } from "react-router-dom";

export default function Page1() {
  return (
    <PageWrapper>
      <h1 className="text-2xl md:text-3xl font-bold text-pink-600 mb-6">
        Will you be my girlfriend? 💕
      </h1>
      <div className="w-48 h-48 bg-gray-200 rounded-xl mx-auto mb-6" />
      <div className="flex gap-4 justify-center">
        <Link to="/final"><YesButton>Yes</YesButton></Link>
        <Link to="/page2"><NoButton>No</NoButton></Link>
      </div>
    </PageWrapper>
  );
}
