// Window Management System
class WindowManager {
    constructor() {
     this.windows = new Map();
     this.activeWindow = null;
     this.zIndex = 100;
     this.init();
    }
    init() {
     // Initialize draggable windows
     document.querySelectorAll(".window").forEach((window) => {
      this.makeWindowDraggable(window);
      this.setupWindowControls(window);
      this.windows.set(window.id, window);
     });
     // Setup app launchers
     document.querySelectorAll("[data-app]").forEach((launcher) => {
      launcher.addEventListener("click", (e) => {
       const appName = launcher.dataset.app;
       this.openApp(appName);
      });
     });
     // Click on window to activate
     document.querySelectorAll(".window").forEach((window) => {
      window.addEventListener("mousedown", () => {
       this.activateWindow(window);
      });
     });
     // Update clock
     this.updateClock();
     setInterval(() => this.updateClock(), 1000);
    }
    makeWindowDraggable(window) {
     const titlebar = window.querySelector(".window-titlebar");
     let isDragging = false;
     let currentX;
     let currentY;
     let initialX;
     let initialY;
     titlebar.addEventListener("mousedown", (e) => {
      if (e.target.closest(".window-controls")) return;
      isDragging = true;
      initialX = e.clientX - window.offsetLeft;
      initialY = e.clientY - window.offsetTop;
      window.style.cursor = "move";
     });
     document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      e.preventDefault();
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
      // Keep window within viewport
      currentX = Math.max(
       0,
       Math.min(currentX, window.innerWidth - window.offsetWidth)
      );
      currentY = Math.max(
       24,
       Math.min(currentY, window.innerHeight - window.offsetHeight - 60)
      );
      window.style.left = currentX + "px";
      window.style.top = currentY + "px";
     });
     document.addEventListener("mouseup", () => {
      isDragging = false;
      window.style.cursor = "default";
     });
    }
    setupWindowControls(window) {
     const closeBtn = window.querySelector(".window-control.close");
     const minimizeBtn = window.querySelector(".window-control.minimize");
     const maximizeBtn = window.querySelector(".window-control.maximize");
     closeBtn?.addEventListener("click", () => {
      this.closeWindow(window);
     });
     minimizeBtn?.addEventListener("click", () => {
      this.minimizeWindow(window);
     });
     maximizeBtn?.addEventListener("click", () => {
      this.maximizeWindow(window);
     });
    }
    openApp(appName) {
     const windowId = `${appName}-window`;
     const window = document.getElementById(windowId);
     if (window) {
      window.style.display = "flex";
      this.activateWindow(window);
      // Add bounce animation
      window.style.animation = "none";
      setTimeout(() => {
       window.style.animation = "bounce 0.5s ease";
      }, 10);
      // Update dock
      document.querySelectorAll(".dock-item").forEach((item) => {
       if (item.dataset.app === appName) {
        item.classList.add("active");
       }
      });
     }
    }
    closeWindow(window) {
     window.style.display = "none";
     const appName = window.id.replace("-window", "");
     // Update dock
     document.querySelectorAll(".dock-item").forEach((item) => {
      if (item.dataset.app === appName) {
       item.classList.remove("active");
      }
     });
    }
    minimizeWindow(window) {
     const dock = document.getElementById("dock");
     const dockPosition = dock.classList.contains("left")
      ? "left"
      : dock.classList.contains("right")
      ? "right"
      : "bottom";
     // Animate to dock position
     window.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
     window.style.transform = "scale(0)";
     if (dockPosition === "bottom") {
      window.style.transformOrigin = "bottom center";
     } else if (dockPosition === "left") {
      window.style.transformOrigin = "left center";
     } else {
      window.style.transformOrigin = "right center";
     }
     setTimeout(() => {
      window.style.display = "none";
      window.style.transform = "";
      window.style.transformOrigin = "";
     }, 300);
    }
    maximizeWindow(window) {
     if (window.dataset.maximized === "true") {
      // Restore
      window.style.left = window.dataset.originalLeft;
      window.style.top = window.dataset.originalTop;
      window.style.width = window.dataset.originalWidth;
      window.style.height = window.dataset.originalHeight;
      window.dataset.maximized = "false";
     } else {
      // Maximize
      window.dataset.originalLeft = window.style.left;
      window.dataset.originalTop = window.style.top;
      window.dataset.originalWidth = window.style.width;
      window.dataset.originalHeight = window.style.height;
      window.style.left = "10px";
      window.style.top = "34px";
      window.style.width = "calc(100vw - 20px)";
      window.style.height = "calc(100vh - 104px)";
      window.dataset.maximized = "true";
     }
    }
    activateWindow(window) {
     // Remove active class from all windows
     document.querySelectorAll(".window").forEach((w) => {
      w.classList.remove("active");
     });
     // Add active class and bring to front
     window.classList.add("active");
     window.style.zIndex = ++this.zIndex;
     this.activeWindow = window;
    }
    updateClock() {
     const clock = document.getElementById("clock");
     const now = new Date();
     const hours = now.getHours();
     const minutes = now.getMinutes().toString().padStart(2, "0");
     const ampm = hours >= 12 ? "PM" : "AM";
     const displayHours = hours % 12 || 12;
     clock.textContent = `${displayHours}:${minutes} ${ampm}`;
    }
   }
   // Theme Manager
   class ThemeManager {
    constructor() {
        this.themes = {
            aurora: "linear-gradient(135deg, #70e1f5 0%, #ffd194 100%)",
            flamingo: "linear-gradient(135deg,rgb(248, 108, 93) 0%,rgb(252, 170, 203) 100%)",
            skywave: "linear-gradient(135deg,rgb(140, 187, 245) 0%,rgb(6, 32, 163) 100%)",
            meadow: "linear-gradient(135deg,rgb(200, 237, 154) 0%,rgb(31, 94, 1) 100%)",
            sunsetglow: "linear-gradient(135deg,rgb(247, 102, 30) 0%,rgb(255, 208, 0) 100%)",
            deepocean: "linear-gradient(135deg,rgb(175, 208, 216) 0%,rgb(2, 23, 48) 100%)"
            };
     this.init();
    }
    init() {
     document.querySelectorAll(".color-option").forEach((option) => {
      option.addEventListener("click", (e) => {
       const theme = e.target.dataset.theme;
       this.applyTheme(theme);
      });
     });
    }
    applyTheme(themeName) {
     const gradient = this.themes[themeName];
     if (gradient) {
      document.body.style.background = gradient;
      // Store preference
      localStorage.setItem("portfolio-theme", themeName);
      // Visual feedback
      document.querySelectorAll(".color-option").forEach((option) => {
       option.style.border =
        option.dataset.theme === themeName
         ? "2px solid var(--accent-color)"
         : "2px solid transparent";
      });
     }
    }
    loadSavedTheme() {
     const savedTheme = localStorage.getItem("portfolio-theme");
     if (savedTheme) {
      this.applyTheme(savedTheme);
     }
    }
   }
   // Style Manager for Window Styles and Dock Position
   class StyleManager {
    constructor() {
     this.windowStyles = ["classic", "flat", "neumorphic", "glassmorphic"];
     this.dockPositions = ["bottom", "left", "right"];
     this.init();
    }
    init() {
     // Theme toggle
     const themeToggle = document.getElementById("theme-toggle");
     const themeIcon = document.getElementById("theme-icon");
     if (themeToggle) {
      themeToggle.addEventListener("click", () => {
       this.toggleDarkMode();
      });
     }
     // Mode buttons in settings
     document.querySelectorAll(".mode-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
       const mode = e.target.closest(".mode-btn").dataset.mode;
       const isDark = mode === "dark";
       this.setDarkMode(isDark);
      });
     });
     // Window style selector
     const styleSelect = document.getElementById("window-style-select");
     if (styleSelect) {
      styleSelect.addEventListener("change", (e) => {
       this.setWindowStyle(e.target.value);
      });
     }
     // Dock position buttons
     document.querySelectorAll(".dock-position-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
       const position = e.target.dataset.position;
       this.setDockPosition(position);
       // Update button states
       document.querySelectorAll(".dock-position-btn").forEach((b) => {
        b.style.background = b === e.target ? "var(--accent-color)" : "white";
        b.style.color = b === e.target ? "white" : "black";
       });
      });
     });
     // Animation speed slider
     const speedSlider = document.getElementById("animation-speed");
     const speedValue = document.getElementById("speed-value");
     if (speedSlider && speedValue) {
      speedSlider.addEventListener("input", (e) => {
       const speed = e.target.value;
       speedValue.textContent = speed + "ms";
       document.documentElement.style.setProperty(
        "--transition-speed",
        speed + "ms"
       );
       localStorage.setItem("animation-speed", speed);
      });
     }
     // Load saved preferences
     this.loadSavedStyles();
    }
    toggleDarkMode() {
     const isDarkMode = document.body.classList.toggle("dark-mode");
     this.setDarkMode(isDarkMode);
    }
    setDarkMode(isDark) {
     const themeIcon = document.getElementById("theme-icon");
     if (isDark) {
      document.body.classList.add("dark-mode");
      if (themeIcon) themeIcon.textContent = "🌙";
     } else {
      document.body.classList.remove("dark-mode");
      if (themeIcon) themeIcon.textContent = "☀️";
     }
     localStorage.setItem("dark-mode", isDark);
     this.updateSettingsForTheme(isDark);
     // Update mode buttons
     document.querySelectorAll(".mode-btn").forEach((btn) => {
      const mode = btn.dataset.mode;
      if ((mode === "dark" && isDark) || (mode === "light" && !isDark)) {
       btn.style.background = "var(--accent-color)";
       btn.style.color = "white";
      } else {
       btn.style.background = isDark ? "#2a2a2a" : "white";
       btn.style.color = isDark ? "#fff" : "black";
      }
     });
    }
    updateSettingsForTheme(isDark) {
     const styleSelect = document.getElementById("window-style-select");
     const speedSlider = document.getElementById("animation-speed");
     const buttons = document.querySelectorAll(".dock-position-btn");
     const modeButtons = document.querySelectorAll(".mode-btn");
     if (isDark) {
      if (styleSelect) {
       styleSelect.style.background = "#2a2a2a";
       styleSelect.style.color = "#fff";
       styleSelect.style.borderColor = "#555";
      }
      if (speedSlider) {
       speedSlider.style.background = "#2a2a2a";
      }
      buttons.forEach((btn) => {
       if (btn.style.background !== "var(--accent-color)") {
        btn.style.background = "#2a2a2a";
        btn.style.color = "#fff";
       }
       btn.style.borderColor = "#555";
      });
      modeButtons.forEach((btn) => {
       if (btn.dataset.mode === "dark") {
        btn.style.background = "var(--accent-color)";
        btn.style.color = "white";
       } else {
        btn.style.background = "#2a2a2a";
        btn.style.color = "#fff";
       }
       btn.style.borderColor = "#555";
      });
     } else {
      if (styleSelect) {
       styleSelect.style.background = "white";
       styleSelect.style.color = "black";
       styleSelect.style.borderColor = "#ccc";
      }
      if (speedSlider) {
       speedSlider.style.background = "";
      }
      buttons.forEach((btn) => {
       if (btn.style.background !== "var(--accent-color)") {
        btn.style.background = "white";
        btn.style.color = "black";
       }
       btn.style.borderColor = "#ccc";
      });
      modeButtons.forEach((btn) => {
       if (btn.dataset.mode === "light") {
        btn.style.background = "var(--accent-color)";
        btn.style.color = "white";
       } else {
        btn.style.background = "white";
        btn.style.color = "black";
       }
       btn.style.borderColor = "#ccc";
      });
     }
    }
    setWindowStyle(style) {
     // Remove all style classes
     this.windowStyles.forEach((s) => {
      document.body.classList.remove(`style-${s}`);
     });
     // Add new style class
     document.body.classList.add(`style-${style}`);
     // Save preference
     localStorage.setItem("window-style", style);
     // Special handling for glassmorphic style
     if (style === "glassmorphic") {
      // Make desktop background more vibrant for glass effect
      const currentBg = document.body.style.background;
      if (!currentBg || currentBg.includes("667eea")) {
       document.body.style.background =
        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
      }
     }
    }
    setDockPosition(position) {
     const dock = document.getElementById("dock");
     if (dock) {
      // Remove all position classes
      this.dockPositions.forEach((pos) => {
       dock.classList.remove(pos);
      });
      // Add new position class
      dock.classList.add(position);
      // Save preference
      localStorage.setItem("dock-position", position);
     }
    }
    loadSavedStyles() {
     // Load dark mode preference
     const isDarkMode = localStorage.getItem("dark-mode") === "true";
     if (isDarkMode) {
      this.setDarkMode(true);
     } else {
      // Update mode buttons for light mode
      document.querySelectorAll(".mode-btn").forEach((btn) => {
       const mode = btn.dataset.mode;
       if (mode === "light") {
        btn.style.background = "var(--accent-color)";
        btn.style.color = "white";
       }
      });
     }
     // Load window style
     const savedStyle = localStorage.getItem("window-style") || "classic";
     this.setWindowStyle(savedStyle);
     const styleSelect = document.getElementById("window-style-select");
     if (styleSelect) {
      styleSelect.value = savedStyle;
     }
     // Load dock position
     const savedPosition = localStorage.getItem("dock-position") || "bottom";
     this.setDockPosition(savedPosition);
     // Update dock position button states
     document.querySelectorAll(".dock-position-btn").forEach((btn) => {
      if (btn.dataset.position === savedPosition) {
       btn.style.background = "var(--accent-color)";
       btn.style.color = "white";
      }
     });
     // Load animation speed
     const savedSpeed = localStorage.getItem("animation-speed");
     if (savedSpeed) {
      const speedSlider = document.getElementById("animation-speed");
      const speedValue = document.getElementById("speed-value");
      if (speedSlider && speedValue) {
       speedSlider.value = savedSpeed;
       speedValue.textContent = savedSpeed + "ms";
       document.documentElement.style.setProperty(
        "--transition-speed",
        savedSpeed + "ms"
       );
      }
     }
    }
   }
   // Performance optimizations
   const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
     const later = () => {
      clearTimeout(timeout);
      func(...args);
     };
     clearTimeout(timeout);
     timeout = setTimeout(later, wait);
    };
   };
   // Lazy loading for heavy content
   const lazyLoad = () => {
    const options = {
     root: null,
     rootMargin: "0px",
     threshold: 0.1
    };
    const observer = new IntersectionObserver((entries, observer) => {
     entries.forEach((entry) => {
      if (entry.isIntersecting) {
       // Load content when visible
       const element = entry.target;
       element.classList.add("loaded");
       observer.unobserve(element);
      }
     });
    }, options);
    document.querySelectorAll(".lazy-load").forEach((el) => {
     observer.observe(el);
    });
   };
   // Initialize everything
   document.addEventListener("DOMContentLoaded", () => {
    const windowManager = new WindowManager();
    const themeManager = new ThemeManager();
    const styleManager = new StyleManager();
    themeManager.loadSavedTheme();
    // Add keyboard shortcuts
    document.addEventListener("keydown", (e) => {
     // Cmd/Ctrl + W to close active window
     if ((e.metaKey || e.ctrlKey) && e.key === "w") {
      if (windowManager.activeWindow) {
       windowManager.closeWindow(windowManager.activeWindow);
      }
     }
     // Cmd/Ctrl + M to minimize active window
     if ((e.metaKey || e.ctrlKey) && e.key === "m") {
      if (windowManager.activeWindow) {
       windowManager.minimizeWindow(windowManager.activeWindow);
      }
     }
     // Cmd/Ctrl + D to toggle dark mode
     if ((e.metaKey || e.ctrlKey) && e.key === "d") {
      e.preventDefault();
      styleManager.toggleDarkMode();
     }
    });
    // Add bounce animation
    const style = document.createElement("style");
    style.textContent = `
                   @keyframes bounce {
                       0% { transform: scale(0.8); opacity: 0; }
                       50% { transform: scale(1.05); }
                       100% { transform: scale(1); opacity: 1; }
                   }
               `;
    document.head.appendChild(style);
    // Progressive enhancement - check for advanced features
    if ("IntersectionObserver" in window) {
     lazyLoad();
    }
    // Service worker for offline support (progressive enhancement)
    if ("serviceWorker" in navigator) {
     // Register service worker for offline capabilities
     // navigator.serviceWorker.register('/sw.js');
    }
   });
   // Optimize animations with RAF
   let ticking = false;
   
   function requestTick() {
    if (!ticking) {
     requestAnimationFrame(updateAnimations);
     ticking = true;
    }
   }
   
   function updateAnimations() {
    ticking = false;
    // Animation updates here
   }
   // Listen for scroll events with debouncing
   window.addEventListener("scroll", debounce(requestTick, 100));
