# MADCORE FITNESS 💪

A premium, production-ready fitness club website built with React 19 + Vite, JavaScript ES6+, Bootstrap 5, Bootstrap Icons and custom CSS3.

**Slogan:** UNLEASH YOUR POWER.

---

## Features

- **Premium dark design system** — editorial layouts, Bebas Neue + Inter typography, orange accent palette, and a custom MADCORE brand mark.
- **Responsive sticky navbar** with smooth-scroll navigation, scroll-spy active states, a fully functional mobile hamburger menu and a Join Now CTA.
- **Full-screen hero** with photographic background, animated statistics and dual CTAs.
- **About** section with an asymmetric image collage, mission/vision and four core differentiators.
- **Six fitness programs** with working category filters, hover animations and image zoom.
- **Expert trainers** with hover-revealed social links.
- **Four membership plans** with a monthly/yearly pricing toggle, a highlighted "Most Popular" plan and Join Now buttons that pre-fill the contact form.
- **BMI calculator** with input validation, category detection and a visual scale indicator.
- **Daily calorie calculator** using the Mifflin-St Jeor equation with activity level and gender inputs, plus a clear "estimate only" disclaimer.
- **Testimonial carousel**, **filterable-free gallery with lightbox** (keyboard navigation supported), **validated contact form**, and a **newsletter** with email validation.
- **Premium five-column footer** with an in-footer CTA, working navigation, legal modals and an animated Back to Top button.
- **LocalStorage persistence** for calculator inputs, contact enquiries and newsletter subscriptions.
- **Scroll-reveal animations, reduced-motion support, lazy-loaded images with branded fallbacks, and zero horizontal overflow** from 360px upward.

---

## Getting started

```bash
npm install
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`).

Production build and preview:

```bash
npm run build
npm run preview
```

Lint:

```bash
npm run lint
```

---

## Project structure

```
src/
  components/   Reusable UI sections (Navbar, Hero, About, Programs, ...)
  data/site.js  All site copy, images, plans, trainers and links
  hooks/        useLocalStorage persistence hook
  App.jsx       Section composition + selected-plan state
  index.css     Complete design system and responsive rules
  main.jsx      Entry point
```

---

## Before going live

Update the placeholder contact details in `src/data/site.js` → `contactInfo` (phone, email, location), replace the Unsplash photography URLs with your own licensed brand assets if desired, and connect the contact/newsletter forms to your preferred backend or CRM.

---

## Deployment

Ready for Vercel/Netlify: run `npm run build`, deploy the `dist/` directory with the default Vite SPA settings. No environment variables are required.
