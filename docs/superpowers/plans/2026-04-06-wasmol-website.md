# Wasmol Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page portfolio website for Wasmol, a personal car detailing hobby business, using Nuxt 3 + Tailwind CSS, deployed as a static site to Scaleway Object Storage.

**Architecture:** Single `pages/index.vue` assembles five section components (Hero, Services, Gallery, About, Contact). Each section lives in `components/sections/`. Reusable UI pieces (ServiceCard, GalleryPlaceholder) live in `components/ui/`. Global dark theme and Inter font configured in Tailwind + a global CSS file.

**Tech Stack:** Nuxt 3, Tailwind CSS v3, @nuxt/test-utils, Vitest, happy-dom

---

## File Map

| File | Responsibility |
|---|---|
| `nuxt.config.ts` | Static generation, Tailwind module, app head (fonts) |
| `tailwind.config.ts` | Custom colors (`#0f0f0f` bg, `#3B82F6` accent), Inter font |
| `assets/css/main.css` | Base body styles, smooth scroll |
| `app.vue` | Root shell, imports global CSS |
| `pages/index.vue` | Assembles all sections + sticky nav |
| `components/ui/ServiceCard.vue` | Single service card (icon, title, description) |
| `components/ui/GalleryPlaceholder.vue` | "Coming soon" photo tile |
| `components/sections/HeroSection.vue` | Hero: logo, tagline, CTA |
| `components/sections/ServicesSection.vue` | Grid of ServiceCard components |
| `components/sections/GallerySection.vue` | Grid of GalleryPlaceholder components |
| `components/sections/AboutSection.vue` | About blurb |
| `components/sections/ContactSection.vue` | WhatsApp + email links |
| `tests/components/ServiceCard.test.ts` | Renders title, description, icon slot |
| `tests/components/GalleryPlaceholder.test.ts` | Renders placeholder text |
| `tests/components/HeroSection.test.ts` | Renders tagline + CTA |
| `tests/components/ServicesSection.test.ts` | Renders 3 service cards |
| `tests/components/GallerySection.test.ts` | Renders placeholder grid |
| `tests/components/AboutSection.test.ts` | Renders name-origin blurb |
| `tests/components/ContactSection.test.ts` | Renders WhatsApp + email links |

---

## Task 1: Scaffold Nuxt 3 project

**Files:**
- Create: `nuxt.config.ts`
- Create: `tailwind.config.ts`
- Create: `assets/css/main.css`
- Create: `package.json` (via nuxi)

- [ ] **Step 1: Initialise Nuxt 3 project**

Run in `/home/amol/code/wasmol` (answer prompts: package manager = npm, no Git init since repo already exists):

```bash
npx nuxi@latest init . --no-install
```

When asked "Directory not empty, continue?", choose **yes**.
When asked about package manager, choose **npm**.

- [ ] **Step 2: Install dependencies**

```bash
npm install
npm install -D @nuxtjs/tailwindcss tailwindcss
npm install -D @nuxt/test-utils vitest @vue/test-utils happy-dom
```

- [ ] **Step 3: Generate Tailwind config**

```bash
npx tailwindcss init
```

- [ ] **Step 4: Replace `tailwind.config.ts` with custom theme**

Create `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,ts}',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        surface: '#0f0f0f',
        card: '#1a1a1a',
        accent: '#3B82F6',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
} satisfies Config
```

- [ ] **Step 5: Configure `nuxt.config.ts`**

```typescript
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    configPath: 'tailwind.config.ts',
  },
  app: {
    head: {
      title: 'Wasmol — Car Detailing',
      meta: [
        { name: 'description', content: 'Professional car cleaning and detailing by Wasmol.' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap',
        },
      ],
    },
  },
})
```

- [ ] **Step 6: Create `assets/css/main.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  @apply bg-surface text-white font-sans;
}
```

- [ ] **Step 7: Update `app.vue` to import global CSS**

```vue
<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
@import '~/assets/css/main.css';
</style>
```

- [ ] **Step 8: Configure Vitest**

Create `vitest.config.ts`:

```typescript
import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'happy-dom',
    globals: true,
  },
})
```

Add test script to `package.json` (under `"scripts"`):

```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 9: Verify dev server starts**

```bash
npm run dev
```

Expected: Server starts on `http://localhost:3000`, no errors in terminal.

- [ ] **Step 10: Commit**

```bash
git add -A
git commit -m "feat: scaffold Nuxt 3 project with Tailwind and Vitest"
```

---

## Task 2: ServiceCard component

**Files:**
- Create: `components/ui/ServiceCard.vue`
- Create: `tests/components/ServiceCard.test.ts`

- [ ] **Step 1: Write the failing test**

Create `tests/components/ServiceCard.test.ts`:

```typescript
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ServiceCard from '~/components/ui/ServiceCard.vue'

describe('ServiceCard', () => {
  it('renders title and description', () => {
    const wrapper = mount(ServiceCard, {
      props: {
        title: 'Exterior Wash',
        description: 'Full exterior hand wash.',
        icon: '🚗',
      },
    })
    expect(wrapper.text()).toContain('Exterior Wash')
    expect(wrapper.text()).toContain('Full exterior hand wash.')
    expect(wrapper.text()).toContain('🚗')
  })

  it('has hover border class', () => {
    const wrapper = mount(ServiceCard, {
      props: { title: 'X', description: 'Y', icon: '🔧' },
    })
    expect(wrapper.html()).toContain('hover:border-accent')
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test
```

Expected: FAIL — `Cannot find module '~/components/ui/ServiceCard.vue'`

- [ ] **Step 3: Implement `ServiceCard.vue`**

```vue
<template>
  <div class="bg-card border border-white/10 rounded-2xl p-6 flex flex-col gap-3 hover:border-accent transition-colors duration-300">
    <span class="text-4xl">{{ icon }}</span>
    <h3 class="text-xl font-semibold text-white">{{ title }}</h3>
    <p class="text-white/60 text-sm leading-relaxed">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: string
}>()
</script>
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test
```

Expected: PASS — 2 tests pass

- [ ] **Step 5: Commit**

```bash
git add components/ui/ServiceCard.vue tests/components/ServiceCard.test.ts
git commit -m "feat: add ServiceCard component"
```

---

## Task 3: GalleryPlaceholder component

**Files:**
- Create: `components/ui/GalleryPlaceholder.vue`
- Create: `tests/components/GalleryPlaceholder.test.ts`

- [ ] **Step 1: Write the failing test**

Create `tests/components/GalleryPlaceholder.test.ts`:

```typescript
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import GalleryPlaceholder from '~/components/ui/GalleryPlaceholder.vue'

describe('GalleryPlaceholder', () => {
  it('renders coming soon text', () => {
    const wrapper = mount(GalleryPlaceholder)
    expect(wrapper.text()).toContain('Coming soon')
  })

  it('has an aspect-ratio class for consistent sizing', () => {
    const wrapper = mount(GalleryPlaceholder)
    expect(wrapper.html()).toContain('aspect-square')
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test
```

Expected: FAIL — `Cannot find module '~/components/ui/GalleryPlaceholder.vue'`

- [ ] **Step 3: Implement `GalleryPlaceholder.vue`**

```vue
<template>
  <div class="aspect-square bg-card border border-white/10 rounded-xl flex flex-col items-center justify-center gap-2 text-white/30">
    <span class="text-3xl">📷</span>
    <span class="text-xs font-medium tracking-wide uppercase">Coming soon</span>
  </div>
</template>
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test
```

Expected: PASS — 2 tests pass

- [ ] **Step 5: Commit**

```bash
git add components/ui/GalleryPlaceholder.vue tests/components/GalleryPlaceholder.test.ts
git commit -m "feat: add GalleryPlaceholder component"
```

---

## Task 4: HeroSection component

**Files:**
- Create: `components/sections/HeroSection.vue`
- Create: `tests/components/HeroSection.test.ts`

- [ ] **Step 1: Write the failing test**

Create `tests/components/HeroSection.test.ts`:

```typescript
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeroSection from '~/components/sections/HeroSection.vue'

describe('HeroSection', () => {
  it('renders the brand name', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.text()).toContain('Wasmol')
  })

  it('renders the tagline', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.text()).toContain('Your car, spotless.')
  })

  it('renders a CTA link to the contact section', () => {
    const wrapper = mount(HeroSection)
    const cta = wrapper.find('a[href="#contact"]')
    expect(cta.exists()).toBe(true)
    expect(cta.text()).toContain('Get in touch')
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test
```

Expected: FAIL — `Cannot find module '~/components/sections/HeroSection.vue'`

- [ ] **Step 3: Implement `HeroSection.vue`**

```vue
<template>
  <section id="hero" class="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
    <!-- Subtle radial glow -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.12)_0%,_transparent_70%)] pointer-events-none" />

    <div class="relative z-10 flex flex-col items-center gap-6">
      <h1 class="text-7xl md:text-9xl font-black tracking-tighter text-white">
        Wasm<span class="text-accent">ol</span>
      </h1>
      <p class="text-xl md:text-2xl text-white/60 font-light max-w-md">
        Your car, spotless.
      </p>
      <a
        href="#contact"
        class="mt-4 inline-block bg-accent hover:bg-blue-400 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200"
      >
        Get in touch
      </a>
    </div>
  </section>
</template>
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test
```

Expected: PASS — 3 tests pass

- [ ] **Step 5: Commit**

```bash
git add components/sections/HeroSection.vue tests/components/HeroSection.test.ts
git commit -m "feat: add HeroSection component"
```

---

## Task 5: ServicesSection component

**Files:**
- Create: `components/sections/ServicesSection.vue`
- Create: `tests/components/ServicesSection.test.ts`

- [ ] **Step 1: Write the failing test**

Create `tests/components/ServicesSection.test.ts`:

```typescript
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ServicesSection from '~/components/sections/ServicesSection.vue'

describe('ServicesSection', () => {
  it('renders the section heading', () => {
    const wrapper = mount(ServicesSection)
    expect(wrapper.text()).toContain('Services')
  })

  it('renders all three service cards', () => {
    const wrapper = mount(ServicesSection)
    expect(wrapper.text()).toContain('Exterior Wash')
    expect(wrapper.text()).toContain('Interior Clean')
    expect(wrapper.text()).toContain('Tire & Rim Treatment')
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test
```

Expected: FAIL — `Cannot find module '~/components/sections/ServicesSection.vue'`

- [ ] **Step 3: Implement `ServicesSection.vue`**

```vue
<template>
  <section id="services" class="py-24 px-6 max-w-5xl mx-auto">
    <h2 class="text-4xl font-bold text-white text-center mb-12">Services</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ServiceCard
        v-for="service in services"
        :key="service.title"
        :title="service.title"
        :description="service.description"
        :icon="service.icon"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ServiceCard from '~/components/ui/ServiceCard.vue'

const services = [
  {
    title: 'Exterior Wash',
    description: 'Full hand wash of the exterior — bodywork, windows, and door sills — leaving your car squeaky clean.',
    icon: '🚗',
  },
  {
    title: 'Interior Clean',
    description: 'Vacuum, wipe-down, and detail of seats, dashboard, and all interior surfaces.',
    icon: '🪣',
  },
  {
    title: 'Tire & Rim Treatment',
    description: 'Tires scrubbed and dressed, rims cleaned to a shine.',
    icon: '⚙️',
  },
]
</script>
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test
```

Expected: PASS — 2 tests pass

- [ ] **Step 5: Commit**

```bash
git add components/sections/ServicesSection.vue tests/components/ServicesSection.test.ts
git commit -m "feat: add ServicesSection component"
```

---

## Task 6: GallerySection component

**Files:**
- Create: `components/sections/GallerySection.vue`
- Create: `tests/components/GallerySection.test.ts`

- [ ] **Step 1: Write the failing test**

Create `tests/components/GallerySection.test.ts`:

```typescript
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import GallerySection from '~/components/sections/GallerySection.vue'

describe('GallerySection', () => {
  it('renders the section heading', () => {
    const wrapper = mount(GallerySection)
    expect(wrapper.text()).toContain('Gallery')
  })

  it('renders 6 placeholder tiles', () => {
    const wrapper = mount(GallerySection)
    const tiles = wrapper.findAll('.aspect-square')
    expect(tiles.length).toBe(6)
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test
```

Expected: FAIL — `Cannot find module '~/components/sections/GallerySection.vue'`

- [ ] **Step 3: Implement `GallerySection.vue`**

```vue
<template>
  <section id="gallery" class="py-24 px-6 max-w-5xl mx-auto">
    <h2 class="text-4xl font-bold text-white text-center mb-12">Gallery</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
      <GalleryPlaceholder v-for="n in 6" :key="n" />
    </div>
  </section>
</template>

<script setup lang="ts">
import GalleryPlaceholder from '~/components/ui/GalleryPlaceholder.vue'
</script>
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test
```

Expected: PASS — 2 tests pass

- [ ] **Step 5: Commit**

```bash
git add components/sections/GallerySection.vue tests/components/GallerySection.test.ts
git commit -m "feat: add GallerySection component"
```

---

## Task 7: AboutSection component

**Files:**
- Create: `components/sections/AboutSection.vue`
- Create: `tests/components/AboutSection.test.ts`

- [ ] **Step 1: Write the failing test**

Create `tests/components/AboutSection.test.ts`:

```typescript
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AboutSection from '~/components/sections/AboutSection.vue'

describe('AboutSection', () => {
  it('renders the section heading', () => {
    const wrapper = mount(AboutSection)
    expect(wrapper.text()).toContain('About')
  })

  it('mentions the name origin story', () => {
    const wrapper = mount(AboutSection)
    expect(wrapper.text().toLowerCase()).toContain('mol')
    expect(wrapper.text().toLowerCase()).toContain('wash')
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test
```

Expected: FAIL — `Cannot find module '~/components/sections/AboutSection.vue'`

- [ ] **Step 3: Implement `AboutSection.vue`**

```vue
<template>
  <section id="about" class="py-24 px-6 max-w-3xl mx-auto text-center">
    <h2 class="text-4xl font-bold text-white mb-8">About</h2>
    <p class="text-white/70 text-lg leading-relaxed mb-6">
      Wasmol is a personal car cleaning and detailing side project — a hobby I do for friends and family.
    </p>
    <p class="text-white/50 text-base leading-relaxed">
      The name? Simple: <span class="text-white font-medium">was</span> is Dutch for "wash",
      and <span class="text-white font-medium">Mol</span> is my last name.
      Wasmol — wash by Mol.
    </p>
  </section>
</template>
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test
```

Expected: PASS — 2 tests pass

- [ ] **Step 5: Commit**

```bash
git add components/sections/AboutSection.vue tests/components/AboutSection.test.ts
git commit -m "feat: add AboutSection component"
```

---

## Task 8: ContactSection component

**Files:**
- Create: `components/sections/ContactSection.vue`
- Create: `tests/components/ContactSection.test.ts`

> ⚠️ Replace `YOUR_WHATSAPP_NUMBER` with your actual number in international format (e.g. `31612345678` for a Dutch number), and `YOUR_EMAIL` with your email address.

- [ ] **Step 1: Write the failing test**

Create `tests/components/ContactSection.test.ts`:

```typescript
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactSection from '~/components/sections/ContactSection.vue'

describe('ContactSection', () => {
  it('renders the section heading', () => {
    const wrapper = mount(ContactSection)
    expect(wrapper.text()).toContain('Contact')
  })

  it('renders a WhatsApp link', () => {
    const wrapper = mount(ContactSection)
    const link = wrapper.find('a[href^="https://wa.me/"]')
    expect(link.exists()).toBe(true)
  })

  it('renders an email link', () => {
    const wrapper = mount(ContactSection)
    const link = wrapper.find('a[href^="mailto:"]')
    expect(link.exists()).toBe(true)
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test
```

Expected: FAIL — `Cannot find module '~/components/sections/ContactSection.vue'`

- [ ] **Step 3: Implement `ContactSection.vue`**

```vue
<template>
  <section id="contact" class="py-24 px-6 max-w-xl mx-auto text-center">
    <h2 class="text-4xl font-bold text-white mb-4">Contact</h2>
    <p class="text-white/50 mb-10">Interested? Reach out via WhatsApp or email.</p>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
        href="https://wa.me/YOUR_WHATSAPP_NUMBER"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200"
      >
        <span>💬</span> WhatsApp
      </a>
      <a
        href="mailto:YOUR_EMAIL"
        class="flex items-center gap-2 bg-card border border-white/20 hover:border-accent text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200"
      >
        <span>✉️</span> Email
      </a>
    </div>
  </section>
</template>
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test
```

Expected: PASS — 3 tests pass

- [ ] **Step 5: Commit**

```bash
git add components/sections/ContactSection.vue tests/components/ContactSection.test.ts
git commit -m "feat: add ContactSection component"
```

---

## Task 9: Assemble single page with navigation

**Files:**
- Create: `pages/index.vue`

- [ ] **Step 1: Implement `pages/index.vue`**

```vue
<template>
  <div class="bg-surface min-h-screen">
    <!-- Sticky nav -->
    <nav class="fixed top-0 inset-x-0 z-50 bg-surface/80 backdrop-blur border-b border-white/5">
      <div class="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#hero" class="text-white font-black text-xl tracking-tighter">
          Wasm<span class="text-accent">ol</span>
        </a>
        <div class="flex items-center gap-6 text-sm text-white/60">
          <a href="#services" class="hover:text-white transition-colors">Services</a>
          <a href="#gallery" class="hover:text-white transition-colors">Gallery</a>
          <a href="#about" class="hover:text-white transition-colors">About</a>
          <a
            href="#contact"
            class="bg-accent hover:bg-blue-400 text-white px-4 py-1.5 rounded-full font-semibold transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>

    <main>
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <AboutSection />
      <ContactSection />
    </main>

    <footer class="py-8 text-center text-white/20 text-sm border-t border-white/5">
      © {{ new Date().getFullYear() }} Wasmol
    </footer>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/sections/HeroSection.vue'
import ServicesSection from '~/components/sections/ServicesSection.vue'
import GallerySection from '~/components/sections/GallerySection.vue'
import AboutSection from '~/components/sections/AboutSection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'
</script>
```

- [ ] **Step 2: Start dev server and manually verify all sections render**

```bash
npm run dev
```

Open `http://localhost:3000`. Check:
- [ ] Nav is sticky and links scroll to correct sections
- [ ] Hero shows "Wasmol" and tagline
- [ ] Services shows 3 cards
- [ ] Gallery shows 6 placeholder tiles
- [ ] About mentions "wash" and "Mol"
- [ ] Contact shows WhatsApp + email buttons

- [ ] **Step 3: Run full test suite**

```bash
npm test
```

Expected: All tests pass (no failures)

- [ ] **Step 4: Commit**

```bash
git add pages/index.vue
git commit -m "feat: assemble single-page layout with sticky nav"
```

---

## Task 10: Static build verification

**Files:**
- Modify: `nuxt.config.ts` (confirm `ssr: false` or static preset)

- [ ] **Step 1: Ensure static output is configured**

In `nuxt.config.ts`, add the `nitro` preset for static generation:

```typescript
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    configPath: 'tailwind.config.ts',
  },
  nitro: {
    preset: 'static',
  },
  app: {
    head: {
      title: 'Wasmol — Car Detailing',
      meta: [
        { name: 'description', content: 'Professional car cleaning and detailing by Wasmol.' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap',
        },
      ],
    },
  },
})
```

- [ ] **Step 2: Run static generation**

```bash
npm run generate
```

Expected: Completes with no errors. Output in `.output/public/`.

- [ ] **Step 3: Preview the static build locally**

```bash
npx serve .output/public
```

Open the URL shown. Verify the site loads and all sections work without a dev server.

- [ ] **Step 4: Commit**

```bash
git add nuxt.config.ts
git commit -m "chore: configure static nitro preset for Scaleway deployment"
```

---

## Deployment Notes (manual, post-build)

After `npm run generate`:

1. Log in to [Scaleway Console](https://console.scaleway.com)
2. Create an Object Storage bucket in the EU region (Paris or Amsterdam)
3. Enable **Static website hosting** on the bucket (index document: `index.html`)
4. Upload contents of `.output/public/` to the bucket root
5. The bucket endpoint (e.g. `https://wasmol.s3-website.fr-par.scw.cloud`) is your live URL
6. (Optional) Add a custom domain via Scaleway Edge Services

---

## Replacing Contact Placeholders

Before deploying, update `components/sections/ContactSection.vue`:
- Replace `YOUR_WHATSAPP_NUMBER` with your number in international format (no `+`), e.g. `31612345678`
- Replace `YOUR_EMAIL` with your email address
