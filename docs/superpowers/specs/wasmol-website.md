# Wasmol Website — Design Spec

## Overview

A single-page portfolio/showcase website for **Wasmol**, a personal car cleaning and detailing side business run as a hobby for friends and family. The name is a play on words: *was* (Dutch for "wash") + *Mol* (owner's last name).

The goal is to show off the service and build credibility, not to handle bookings or payments.

---

## Stack

| Concern | Choice |
|---|---|
| Framework | Nuxt 3 |
| Styling | Tailwind CSS |
| Output | Static (`nuxt generate`) |
| Hosting | Scaleway Object Storage (static website mode) |
| CDN | Scaleway Edge Services (optional, for custom domain + HTTPS) |

---

## Design

**Theme:** Bold & sporty — dark background, white text, electric blue accent  
**Background:** `#0f0f0f` (near-black)  
**Accent:** `#3B82F6` (electric blue)  
**Typography:** Clean sans-serif (Inter or similar)  
**Layout:** Single-page, scroll-based sections

---

## Sections

### 1. Hero
- Large "Wasmol" wordmark / logo
- Tagline: *"Your car, spotless."* (placeholder, can be changed)
- Dark background with a subtle gradient or car silhouette
- CTA button: "Get in touch" → scrolls to Contact section

### 2. Services
- Card grid listing offered services:
  - Exterior wash
  - Interior clean
  - Tire & rim treatment
  - *(no paint correction, waxing, or paint protection)*
- Each card: icon + title + short description
- Cards styled with dark surface + blue accent border on hover

### 3. Gallery
- Photo grid (placeholder tiles for now)
- "Photos coming soon" state with placeholder styling
- Grid is ready to accept real before/after photos later

### 4. About
- Short personal blurb
- Mention the name origin: "Wash + Mol = Wasmol"
- Friendly, personal tone — this is a hobby, not a corporation

### 5. Contact
- Since it's friends & family: WhatsApp link and/or email address
- No contact form needed (no backend)
- Simple layout: icon + link

---

## Deployment

1. Run `nuxt generate` → outputs static files to `dist/` (or `.output/public/`)
2. Create a Scaleway Object Storage bucket
3. Enable "Static website hosting" on the bucket
4. Upload output folder contents to the bucket
5. (Optional) Configure Scaleway Edge Services for custom domain + HTTPS

---

## Out of Scope

- Paint correction, waxing, paint protection
- Online booking / scheduling
- Payments
- User accounts
- Contact form with backend
- Blog
