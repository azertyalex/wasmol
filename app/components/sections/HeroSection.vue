<template>
  <section id="hero" class="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
    <!-- Subtle radial glow -->
    <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse at center, rgba(59,130,246,0.12) 0%, transparent 70%)" />

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
