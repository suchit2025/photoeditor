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
