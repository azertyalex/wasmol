<template>
  <section id="gallery" class="py-24 px-6 max-w-5xl mx-auto">
    <div class="flex items-center gap-6 mb-16" data-animate>
      <h2 class="text-4xl font-bold text-white shrink-0">Gallery</h2>
      <div class="h-px flex-1 bg-white/10"></div>
    </div>

    <div class="relative overflow-hidden rounded-2xl border border-white/5 bg-card" data-animate>
      <!-- Watermark -->
      <div
        class="select-none pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        <span
          class="font-display font-black text-white/[0.03] uppercase leading-none whitespace-nowrap"
          style="font-size: clamp(80px, 18vw, 220px)"
        >
          Before &amp; After
        </span>
      </div>

      <!-- Content -->
      <div class="relative z-10 py-24 px-8 md:px-16 text-center">
        <p class="text-xs font-medium tracking-[0.25em] uppercase text-white/20 mb-6">
          Coming soon
        </p>
        <p class="text-2xl md:text-3xl text-white/40 font-light leading-relaxed">
          Real work. Real results.<br />Photos in progress.
        </p>
      </div>
    </div>
  </section>
</template>
