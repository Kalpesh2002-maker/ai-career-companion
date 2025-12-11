# AI Career Companion

**AI-powered Resume & Cover Letter Builder** — a small React + Vite app that helps you craft resumes and cover letters quickly with context-driven previews and (mock) AI generation.

---

## 🔎 Overview

This project is a portfolio-ready frontend demonstrating:

- Live resume preview (right-side panel) while editing details.
- Cover letter generator that builds a tailored letter from a job description.
- Experience bullet generator (mock AI) to convert role details into strong bullets.
- Clean, responsive dark UI with printable/preview-ready resume card.

---

## ✨ Features

- Personal info form with live preview
- Experience section with add/edit and AI-style bullets
- Cover letter builder (paste job description → generate letter)
- Copy-to-clipboard for generated content
- Responsive layout with two-column builder + preview
- Ready for PDF export (hooks in place for `react-to-print`)

---

## 🛠 Tech stack

- React (Vite)
- Context API for global state
- CSS (modular, with theme-ready classes)
- Optional: OpenAI / server integration (future)

---

## ▶️ Run locally

```bash
# Clone (if not already)
git clone https://github.com/Kalpesh2002-maker/ai-career-companion.git
cd ai-career-companion

# Install deps
npm install

# Dev server
npm run dev
