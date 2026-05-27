# Shrey Varsani | Portfolio

A lightweight, high-performance developer portfolio built entirely with **Web Technologies**. No frameworks, no build steps, and zero-configuration required.

</div>

## Features

- **Dynamic Project Gallery:** Renders projects dynamically from data objects with support for category filtering and live search.
- **Interactive Modals:** Detailed project deep-dives with image galleries and technology tagging.
- **Responsive UI:** Seamless experience across mobile, tablet, and desktop using CSS Grid and Flexbox.
- **Theme Management:** Smart dark-mode detection with persistence using `localStorage`.
- **Animated Expertise:** Skill visualization with intersection-observer triggered animations.
- **Contact System:** Integrated form handling via Formspree for direct client communication.

## Tech Stack

**Frontend:**

- **Structure:** Pure HTML5
- **Styling:** Modern CSS3 (utilizing CSS Variables and Grid/Flexbox)
- **Logic:** Vanilla JavaScript (ES6+) — _No frameworks or external libraries for core functionality_
- **Icons:** Lucide, Font Awesome 6, Boxicons

## Local Development

This project is a **static web application**. It does not require a build process, compilers, or complex environment variables to run.

### Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/shrey-varsani/shrey-portfolio.git
   cd shrey-portfolio
   ```

2. **Launch the environment:**

   You can view the portfolio using following method:

   **Method A: Direct Launch (No Setup)**
   Simply double-click `index.html` to open it directly in your web browser.

## Project Structure

- `index.html` - The structural foundation and SEO metadata.
- `style.css` - All styling logic, including theme variables (Dark/Light mode).
- `script.js` - Application logic: data management, UI interactions, and state.
- `package.json` - Defines the build-less execution environment and local server.
- `metadata.json` - Configuration for AI Studio / Gemini API capabilities.
- `files/` - Static assets including resume (PDF) and profile imagery.
