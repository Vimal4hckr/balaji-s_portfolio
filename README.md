# 🎬 Balaji L. — Cinematic Filmmaker Portfolio

A cinematic, immersive portfolio website showcasing the filmography, creative journey, and storytelling work of **Balaji L. — Filmmaker, Writer & Director**.

Designed with a dark cinematic aesthetic, elegant typography, smooth animations, and interactive project cards, this portfolio brings filmmaking work to life through a modern web experience.

## ✨ Features

- **Cinematic Hero Section** — Full-screen visual introduction with dramatic overlays.
- **Filmmaker Profile** — Dedicated profile card and introduction.
- **Selected Filmography** — Showcase of short films, feature films, vertical web series, and advertising projects.
- **Animated Project Cards** — Interactive stacked scrolling cards powered by ScrollStack.
- **Smooth Animations** — Scroll-triggered transitions and hover effects using Framer Motion.
- **Responsive Design** — Layout adapted for desktop and mobile screens.
- **Skills & Experience** — Sections highlighting filmmaking skills and professional experience.
- **Contact Section** — A dedicated space to connect about creative collaborations and opportunities.

## 🎥 Featured Projects

| Project | Role / Category | Watch |
|---|---|---|
| Kaagangal | Short Film · Writer & Director | [YouTube](https://youtu.be/QzVDUKczDpk) |
| RING | Malayalam Feature Film · Assistant Director | [Instagram Reel](https://www.instagram.com/reel/DS983Jhko3K/) |
| Anjathe | Tamil Vertical Web Series | [Instagram Reel](https://www.instagram.com/reel/DQ11EjKk6x1/) |
| Tom & Sakthi | Tamil Vertical Web Series | [Instagram Reel](https://www.instagram.com/reel/DUukxvVk7NC/) |
| 7Screen Adfilmz | Advertising & Creative Content | [Instagram Reel](https://www.instagram.com/reel/DUqcC95kwoR/) |
| 7Screen Adfilmz — Project 06 | Short-form Video | [Instagram Reel](https://www.instagram.com/reel/DRM0lehk3yG/) |

## 🛠️ Tech Stack

- **React** — Component-based user interface
- **TypeScript** — Type-safe JavaScript development
- **Vite** — Fast development server and build tool
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — UI animations and scroll-triggered effects
- **Custom ScrollStack** — Animated stacked project presentation

## 📁 Project Structure

```text
balaji-s_portfolio/
├── public/
│   ├── images/
│   │   ├── hero-poster.png
│   │   ├── balaji-portrait.png
│   │   └── project cover images
│   └── ...
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ScrollStack.tsx
│   │   └── SkillsSection.tsx
│   ├── App.tsx
│   └── ...
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

*Note: The structure above highlights the main files; additional configuration and styling files may be present in the repository.*

## 🚀 Getting Started

### Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/)
- npm, included with Node.js
- [Git](https://git-scm.com/)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Vimal4hckr/balaji-s_portfolio.git
```

**2. Navigate into the project**

```bash
cd balaji-s_portfolio
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually `http://localhost:5173`.

### Production Build

Build the application for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 🖼️ Managing Portfolio Images

Place portfolio images in the `public/images/` directory.

For example:

```text
public/images/hero-poster.png
public/images/balaji-portrait.png
public/images/kaagangal-cover.png
public/images/anjathe-cover.png
public/images/tom-sakthi-cover.png
public/images/7screen-adfilmz-cover.png
```

Reference these assets in components using paths such as:

```tsx
<img src="/images/hero-poster.png" alt="Cinematic portfolio poster" />
```

Ensure that image filenames match the paths used in your code.

## 🎨 Design Direction

The portfolio uses a cinematic visual language built around:

- Deep black backgrounds
- Warm gold accents
- Dramatic image overlays
- Bold, condensed typography
- Subtle borders and atmospheric lighting
- Smooth transitions and interactive project thumbnails

The goal is to present filmmaking work with the atmosphere and visual impact of a film experience.

## 📬 Contact

**Balaji L.**  
Filmmaker · Writer · Director

- **Email:** [directorlbalaji@gmail.com](mailto:directorlbalaji@gmail.com)
- **Instagram:** [@7screen_adfilmz](https://www.instagram.com/7screen_adfilmz/)
- **YouTube:** [Watch Kaagangal](https://youtu.be/QzVDUKczDpk)

For filmmaking collaborations, creative projects, and professional enquiries, feel free to get in touch.

## 📄 License

This repository is a personal portfolio project. Unless a separate license is provided, the code and portfolio assets should not be assumed to be available for unrestricted reuse.

---

**Built to tell stories, one frame at a time.** 🎥
