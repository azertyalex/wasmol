<template>
  <div class="bg-surface min-h-screen">
    <!-- Sticky nav -->
    <nav class="fixed top-0 inset-x-0 z-50 bg-surface sm:bg-surface/80 sm:backdrop-blur border-b border-white/5 will-change-transform">
      <div class="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#hero" class="font-display font-black text-xl uppercase tracking-tight text-white">
          Was<span class="text-accent">mol</span>
        </a>
        <div class="flex items-center gap-6 text-sm">
          <a href="#services" :class="activeSection === 'services' ? 'text-white' : 'text-white/50'" class="hover:text-white transition-colors hidden sm:block">Services</a>
          <a href="#gallery" :class="activeSection === 'gallery' ? 'text-white' : 'text-white/50'" class="hover:text-white transition-colors hidden sm:block">Gallery</a>
          <a href="#about" :class="activeSection === 'about' ? 'text-white' : 'text-white/50'" class="hover:text-white transition-colors hidden sm:block">About</a>
          <a
            href="#contact"
            class="bg-accent hover:bg-amber-400 text-white px-4 py-1.5 rounded-full font-semibold transition-colors text-sm"
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

    <footer class="py-8 px-6 text-center text-white/20 text-sm border-t border-white/5">
      © {{ new Date().getFullYear() }} Wasmol
    </footer>

    <!-- Mobile sticky contact bar -->
    <div class="fixed bottom-0 inset-x-0 z-40 sm:hidden p-4 bg-surface border-t border-white/5 will-change-transform">
      <a href="#contact" class="block w-full text-center bg-accent hover:bg-amber-400 text-white font-semibold py-3 rounded-full transition-colors">
        Get in touch
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import HeroSection from '~/components/sections/HeroSection.vue'
import ServicesSection from '~/components/sections/ServicesSection.vue'
import GallerySection from '~/components/sections/GallerySection.vue'
import AboutSection from '~/components/sections/AboutSection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'

const activeSection = ref('hero')
let sectionObserver: IntersectionObserver | null = null
let animateObserver: IntersectionObserver | null = null

onMounted(() => {
  // Scroll-spy
  sectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) activeSection.value = entry.target.id
      }
    },
    { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
  )

  for (const id of ['hero', 'services', 'gallery', 'about', 'contact']) {
    const el = document.getElementById(id)
    if (el) sectionObserver.observe(el)
  }

  // Entrance animations
  animateObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          animateObserver!.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.05, rootMargin: '0px 0px -40px 0px' },
  )

  document.querySelectorAll('[data-animate]').forEach((el) => {
    animateObserver!.observe(el)
  })
})

onUnmounted(() => {
  sectionObserver?.disconnect()
  animateObserver?.disconnect()
})
</script>
