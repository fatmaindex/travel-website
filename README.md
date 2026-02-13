✈️ Travel & Tour Landing Page (React.js)

A high-performance, modern landing page for a travel agency. This project focuses on a seamless user experience, featuring immersive visual elements and a highly responsive interface.

🚀 Key Features

Immersive Video Hero:
A full-screen background video with a hard-light color overlay for a premium look.

Dynamic Search & Filtering:
A functional search bar allowing users to filter holidays by destination, date, and a custom-styled price range slider.

Smooth On-Scroll Animations:
Integrated AOS (Animate On Scroll) with a consistent 2000ms duration for elegant content transitions.

Lazy Loading Images:
Optimized performance by using loading="lazy" on destination cards to ensure fast initial page loads.

Responsive Card Grid:
A beautifully structured layout for destination packages (Angkor Wat, Taj Mahal, Bali) that adapts perfectly to mobile screens.

Professional Footer:
A detailed footer with social media integration, quick links, and a newsletter subscription section.

🛠 Tech Stack & Performance

Frontend: React.js (Functional Components & Hooks)

Styling:
Advanced SCSS with BEM methodology, CSS variables, and complex mixins for hover effects.

Icons:
react-icons (Hi, Fa, Fi, Md) for a consistent UI.

⚡ Optimization

Used mix-blend-mode for cinematic visual effects without extra assets.

Implemented Hardware-Accelerated CSS transforms for smooth 60FPS animations.

Clean component architecture for high maintainability.

📂 Project Highlights
1️⃣ Optimized Hero Section

The hero section uses a preload="auto" video tag with muted and playsInline attributes to ensure immediate playback across all mobile browsers while saving battery and data.

2️⃣ Reusable UI Components

The destination section is built using a reusable Card component, which maps through a data helper to render content dynamically, reducing code duplication and improving performance.

🌐 Live Preview

Note: Check out the live version here:
[Your-Link-Here]

⚙️ How to Run Locally
# Clone the repo
git clone [Your-Repo-URL]

# Install dependencies
npm install

# Run the project
npm run dev     # for Vite
# or
npm start
