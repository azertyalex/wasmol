<template>
  <section id="hero" class="min-h-screen flex flex-col justify-center px-6 relative overflow-hidden pb-20 sm:pb-0">
    <div class="relative z-10 max-w-5xl mx-auto w-full" data-animate>
      <!-- Eyebrow -->
      <div class="flex items-center gap-3 mb-10">
        <div class="w-8 h-px bg-accent"></div>
        <span class="text-xs font-medium tracking-[0.25em] uppercase text-accent">Car Detailing</span>
      </div>

      <!-- Brand name -->
      <h1
        class="font-display font-black text-white uppercase leading-none"
        style="font-size: clamp(72px, 16vw, 200px); letter-spacing: -0.02em"
      >
        Wasm<span class="text-accent">ol</span>
      </h1>

      <!-- Tagline row -->
      <div class="flex items-center gap-6 mt-8 mb-14">
        <p class="text-xl text-white/50 font-light">Your car, spotless.</p>
        <div class="h-px flex-1 max-w-24 bg-white/10"></div>
      </div>

      <!-- CTA -->
      <a href="#contact" class="inline-flex items-center gap-3 text-white font-medium text-lg group">
        <span class="border-b border-white/20 group-hover:border-accent transition-colors pb-0.5">
          Get in touch
        </span>
        <svg
          class="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-25 hidden sm:flex">
      <span class="text-xs tracking-widest uppercase text-white">Scroll</span>
      <div class="w-px h-8 bg-white/30"></div>
    </div>
  </section>
</template>
