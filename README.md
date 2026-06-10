# Nonagni David — AI Automation Builder Portfolio

A premium, interactive personal portfolio website designed with a B&W cinematic aesthetic, editorial typography, and high-performance micro-interactions.

---

## 🚀 Key Features

* **Cinematic Hero Load Animation**: On load, the page starts with a clear background image which transitions into a frosted-glass/acrylic blur over 1.8 seconds using GSAP. Following the blur, headers and text copy animate into view.
* **Interactive Spotlight**: Hovering your cursor over the blurred hero background reveals a crisp spotlight circle underneath.
* **Capabilities / Services Grid**: Highlighted services (n8n, AI, ETL, Web/App Dev) styled with custom inline SVGs and a triangular diagonal color sweep on hover.
* **Circular Process Carousel**: A trigonometric step wheel on the left that rotates automatically (6s interval) or via manual clicks/arrows, showing active details in a sidebar with smooth GSAP transition fades. Autoplay pauses automatically on hover.
* **Work Proof Case Studies (11 Projects)**: Grid displaying real case screenshots with a "Show More" toggle (loads first 3 initially). Clicking a project opens a dynamic details modal displaying tools used, screenshot, and detailed specifications.
* **Bilingual Support (EN / FR)**: Full internationalization (i18n) translation toggle supporting English and French for the entire page, including dynamically loaded project modals.
* **Advanced SEO & Schema.org**: Fully optimized meta properties (Open Graph, Twitter Cards) and JSON-LD Person structured data.

---

## 📁 File Structure

The project follows a clean organization structure, keeping **only the primary HTML page in the root directory** and grouping all other files under the `/assets` directory:

```text
/ (Root)
├── index.html          # Main portfolio page
└── assets/
    ├── css/
    │   └── style.css   # Main stylesheet (Cinematic B&W theme)
    ├── js/
    │   └── script.js   # Interactivity (i18n, carousels, modals, canvas)
    ├── images/
    │   ├── background.png
    │   ├── design.jpg
    │   └── profile.png # About portrait image
    ├── icons/
    │   ├── favicon.ico
    │   ├── favicon-16x16.png
    │   ├── favicon-32x32.png
    │   ├── apple-touch-icon.png
    │   └── android-chrome-*.png
    ├── screenshots/    # Project case study images
    │   └── [11 project webps/pngs]
    ├── rubix-loader/   # Rubix loader script experiments
    └── backups/        # Archived backup files (.bak)
```

---

## 🛠️ Technology Stack

* **Structure**: HTML5
* **Styling**: Vanilla CSS3 (utilizing modern OKLCH color spaces, CSS Variables, and CSS transitions)
* **Logic & Canvas**: Vanilla JavaScript (ES6+), HTML5 Canvas (Matrix/ASCII ambient background)
* **Animations**: 
  * [GSAP & ScrollTrigger](https://greensock.com/gsap/) (Page entrance timelines, scroll-driven offsets)
  * [AOS (Animate on Scroll)](https://michalsnik.github.io/aos/) (Scroll triggers on text sections)
* **Typography**: Google Fonts (Syne, Big Shoulders Display, JetBrains Mono)
* **CDN Integrations**: simpleicons.org (Logo integrations)

---

## 💻 Setup & Deployment

1. Clone or download the files.
2. The portfolio runs entirely on the client side. You can open `index.html` directly in any web browser.
3. For local testing with asset loads (e.g. favicon or scroll behaviors), run a simple local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```
