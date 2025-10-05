<h1 align="center">🖼️ PhotoEditor Web App</h1>

<p align="center">
  <b>A modern, lightweight, and powerful web-based image editor.</b><br>
  Edit, enhance, and transform your photos directly in the browser — no installation required.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-success?style=flat-square" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/Build-Gulp-orange?style=flat-square" />
  <img src="https://img.shields.io/badge/Language-HTML%2C%20CSS%2C%20JS-yellow?style=flat-square" />
</p>

---

## 🌟 Overview

**PhotoEditor** is a full-featured web app that brings professional-grade image editing to your browser.  
Built with pure **HTML, CSS, and JavaScript**, it integrates with advanced client-side libraries for effects, filters, and annotations — and even supports **offline editing** through a **Service Worker**.

It’s designed for creators, photographers, and developers who want a sleek, minimal, and responsive photo editing experience that works everywhere.

---

## ✨ Key Features

- 🎨 **Powerful Editor:** Crop, draw, resize, blur, filter, and adjust brightness/contrast.  
- ⚡ **Real-Time Rendering:** Edits apply instantly using client-side JavaScript.  
- 📁 **Offline-Ready:** Built with a service worker (`sw.js`) for caching & PWA support.  
- 🧩 **Modular Integration:** Easy integration with the Pixie Editor or other JS libraries.  
- 🧠 **Configurable:** Change defaults via `config.json`.  
- 💾 **Server-Side Safety:** PHP backend (`launderer.php`) for secure uploads or processing.  
- 📱 **Fully Responsive:** Works smoothly on desktop, tablet, and mobile browsers.  
- 🧰 **Automated Build:** Managed through **Gulp** with minification and asset bundling.

---

## 🧭 Project Structure

```bash
photoeditor/
├── assets/              # CSS, images, and static resources
├── config.json          # Editor configuration and settings
├── gulpfile.js          # Build tasks (Gulp)
├── index.html           # Main UI entry point
├── manifest.json        # Progressive Web App (PWA) manifest
├── package.json         # Project dependencies and npm scripts
├── pixie-integrate.js   # JS integration with Pixie image editor
├── sw.js                # Service Worker for offline support
└── launderer.php        # Backend for uploads / sanitization
````

---

## ⚙️ Installation Guide

> 🧩 **Prerequisites**
>
> * Node.js v14+
> * npm or yarn
> * PHP-enabled server (Apache, Nginx + PHP-FPM)
> * (Optional) Gulp CLI for builds
>
>   ```bash
>   npm install -g gulp
>   ```

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/suchit2025/photoeditor.git
cd photoeditor
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure the App

Edit **`config.json`** to update:

* Default image size / theme
* Backend upload endpoint (if needed)
* Editor settings and default values

### 4️⃣ Start Local Development

Run in development mode:

```bash
npm run dev
```

or with Gulp:

```bash
gulp watch
```

### 5️⃣ Serve via PHP (for upload / backend features)

* Place the project inside a PHP-enabled server (e.g., `htdocs/photoeditor/`).
* Verify that `launderer.php` is accessible for image uploads.

### 6️⃣ Build for Production

```bash
npm run build
```

or

```bash
gulp build
```

---

## 💡 Usage Instructions

1. Open the app in your browser:

   ```
   http://localhost/photoeditor
   ```
2. Click **Upload Image** or drag & drop a file.
3. Use toolbar options to:

   * Apply filters
   * Adjust colors
   * Add shapes or text
   * Crop, rotate, resize, or annotate
4. Save or export your final image.
5. (Optional) Upload edited images to your server or cloud location.

---

## ⚙️ Configuration Reference

| File            | Description                                                             |
| --------------- | ----------------------------------------------------------------------- |
| `config.json`   | Controls default brush color, toolset visibility, and backend endpoints |
| `manifest.json` | Defines PWA name, icons, theme colors                                   |
| `sw.js`         | Manages offline caching and updates                                     |
| `gulpfile.js`   | Automates build tasks — concatenation, minification, and optimization   |
| `launderer.php` | Sanitizes uploads and ensures security for backend image operations     |

---

## 🧪 Testing Checklist

* ✅ Browser compatibility: Chrome, Edge, Firefox, Safari
* ✅ Offline caching test via Service Worker
* ✅ Image upload & size validation
* ✅ Undo/redo accuracy
* ✅ PWA installability (manifest + HTTPS)

---

## 🛠 Development Tips

* Use **`gulp watch`** during development for automatic rebuilds.
* Update **`pixie-integrate.js`** if integrating a different editor library.
* Clear cache after each major change to `sw.js` to reload service workers.
* Use browser dev tools → *Application > Service Workers* to debug offline features.

---

## 🧩 Possible Enhancements

* ✨ Add AI-based auto-enhance & background removal
* ☁️ Cloud save/export integration (Google Drive, Dropbox, etc.)
* 📱 Add gesture support for mobile editing
* 🎞️ Layer-based editing (advanced mode)
* 🧑‍💻 Electron build for offline desktop version

---

## 🤝 Contributing

Contributions are welcome!
If you'd like to improve PhotoEditor:

1. Fork the repository
2. Create a feature branch:

   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit changes with clear messages
4. Push and submit a Pull Request

---

## 📜 License

This project is licensed under the **MIT License**.
See the [LICENSE](LICENSE) file for details.

---

## 📸 Preview (Optional)

You can add a screenshot here once the UI is finalized:

```markdown
![PhotoEditor Preview](assets/screenshot.png)
```

---

## 💬 Contact

👤 **Author:** [Suchit Gaikwad](https://github.com/suchit2025)
📧 **Email:** [suchitgaikwad10@gmail.com] 
🌐 **Project URL:** [https://github.com/suchit2025/photoeditor](https://github.com/suchit2025/photoeditor)

> *“Every picture tells a story — make yours unforgettable.”*


