Interactive Portfolio (Desktop-Style Web OS)

An interactive, desktop-inspired portfolio that feels like a mini operating system: draggable windows, a customizable dock, theming (light/dark + gradients), multiple window styles (classic/flat/neumorphic/glassmorphic), keyboard shortcuts, and performance‑minded UX. Built to showcase software engineering projects in a playful, high‑polish UI.

## Demo Highlights
- Launchable app windows: About, Projects, Settings, Terminal (configurable via HTML)
- Desktop metaphors: Menu bar, dock with active indicators, draggable/resizable/maximizable windows
- Personalization: Theme gradients, dark/light mode, window style, dock position, animation speed
- UX touches: Bounce/scale animations, glassmorphism, shadows, backdrop blur, reduced‑motion support

## Features

### Window Management
- Drag via titlebar with viewport bounds
- Activate on click; z-index focus management
- Maximize/restore with original geometry memory
- Minimize with animated scale toward dock
- Open/close via dock or keyboard
- Smooth bounce animation on open

### Theming & Styles
- Light/Dark mode toggle + mode buttons
- Gradient themes: aurora, flamingo, skywave, meadow, sunsetglow, deepocean
- Window styles:
  - classic (mac‑style gradients)
  - flat (modern, minimal)
  - neumorphic (soft shadow UI)
  - glassmorphic (frosted, blurred)
- Persistent preferences via localStorage
- Adjustable animation speed

### Dock & Layout
- Dock positions: bottom, left, right
- Active app indicator
- Responsive container queries for small screens
- Desktop icons with hover scaling

### Accessibility & Performance
- Prefers‑reduced‑motion support
- Will‑change and GPU transform hints
- IntersectionObserver for lazy‑loading hooks
- Debounced scroll and RAF animation loop scaffolding
- High‑contrast adjustments in dark mode

### Keyboard Shortcuts
- Cmd/Ctrl + W: Close active window
- Cmd/Ctrl + M: Minimize active window
- Cmd/Ctrl + D: Toggle dark mode

## Project Structure

- index.html
  - Menu bar with clock and theme toggle
  - Desktop area with windows and dock
  - Project content: brief bio, education (DSATM), and 3 highlighted projects:
    - Role‑based workflow web app with dashboards and status flows
    - GUI computer vision toolkit (Inpainting, Sobel/Canny, boundary extraction)
    - Real‑time audio analysis web app (noise filtering, chant frequency compare, session history + export)
  - Contact and social links (email, LinkedIn)

- style.css
  - CSS variables and design tokens
  - Dark mode overrides
  - Four window style systems and glassmorphic tweaks
  - Menu bar, desktop, windows, dock, terminal, settings, responsiveness, animations
  - Reduced motion and performance hints

- script.js
  - WindowManager: drag/move/activate/minimize/maximize/open/close, clock
  - ThemeManager: gradient themes, persistence, UI feedback
  - StyleManager: dark/light controls, window style, dock position, animation speed, persistence
  - Performance utilities: debounce, IntersectionObserver lazy‑load, RAF hooks
  - Keyboard shortcuts and bounce animation keyframes

## Getting Started

### Prerequisites
- Any modern browser (Chrome, Edge, Firefox, Safari)
- Static server recommended for best results (optional)

### Run Locally
1. Clone or download the repository
2. Open index.html directly in a browser, or serve with a simple static server:
   - Python: python3 -m http.server 8080
   - Node: npx serve .
3. Interact with the desktop: open apps from the dock, drag windows, change themes/styles in Settings

### Deploy
- Static hosting friendly (GitHub Pages, Netlify, Vercel)
- No build step required; deploy the three files as is
- Optional: add a service worker for offline support (scaffold comment present)

## Customization

- Add/edit apps:
  - Create a .window block in index.html with id="{app}-window"
  - Add a .dock-item with data-app="{app}"
  - WindowManager.openApp will manage lifecycle automatically

- Add themes:
  - Extend ThemeManager.themes with a new gradient key/value
  - Add a .color-option in Settings with data-theme matching the new key

- Window styles:
  - Extend StyleManager.windowStyles and add CSS under body.style-{name}

- Settings UI wires:
  - .mode-btn[data-mode="light|dark"]
  - #window-style-select
  - .dock-position-btn[data-position="bottom|left|right"]
  - #animation-speed + #speed-value
  - All state persists via localStorage

## Known Limitations
- Service worker registration is commented out (no offline by default)
- Some script sections may be minified/ellipsized in the snapshot; ensure matching braces/blocks when editing
- Drag bounds rely on viewport measurements; extreme browser zoom may affect feel
- Glassmorphic style works best with vibrant backgrounds and backdrop-filter support

## Roadmap
- App launcher grid and app switcher (Cmd/Ctrl + Tab)
- Snap assist and window tiling
- Persistence of window positions/sizes
- In‑portfolio project demos (iframes/sandboxes)
- Accessibility passes (keyboard dragging, ARIA roles, focus rings)
- Offline mode with asset caching and fallback pages

## License
Personal portfolio; reuse the framework with attribution or fork for learning.

## Contact
- Email: bharat.workspace974@gmail.com
- LinkedIn: linkedin.com/in/bharat-bhushan-2183b5218
