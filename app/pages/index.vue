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
