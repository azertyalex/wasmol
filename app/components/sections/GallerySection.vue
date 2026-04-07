<template>
  <section id="gallery" class="py-24 px-6 max-w-5xl mx-auto">
    <div class="flex items-center gap-6 mb-16" data-animate>
      <h2 class="text-4xl font-bold text-white shrink-0">Gallery</h2>
      <div class="h-px flex-1 bg-white/10"></div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" data-animate>
      <div
        v-for="(photo, i) in photos"
        :key="i"
        class="group relative overflow-hidden rounded-2xl border border-white/5 bg-card aspect-[4/3] cursor-zoom-in"
        @click="openLightbox(i)"
      >
        <img
          :src="photo.src"
          :alt="photo.alt"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5"
        >
          <span
            class="text-xs font-medium tracking-[0.2em] uppercase text-white/70"
            >{{ photo.label }}</span
          >
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div
          v-if="activeIndex !== null"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          @click.self="closeLightbox"
        >
          <button
            class="absolute top-5 right-5 text-white/60 hover:text-white transition-colors"
            aria-label="Close"
            @click="closeLightbox"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          <button
            v-if="photos.length > 1"
            class="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
            aria-label="Previous"
            @click="prev"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          <img
            :src="photos[activeIndex].src"
            :alt="photos[activeIndex].alt"
            class="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
          />

          <button
            v-if="photos.length > 1"
            class="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
            aria-label="Next"
            @click="next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>

          <div class="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs font-medium tracking-[0.2em] uppercase text-white/50">
            {{ photos[activeIndex].label }}
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
const photos = [
  {
    src: "/gallery/opelastra.jpg",
    alt: "Car detail — Opel Astra PHEV",
    label: "Detail clean",
  },
  {
    src: "/gallery/polestar3.jpg",
    alt: "Car detail — Polestar 3",
    label: "Detail clean",
  },
];

const activeIndex = ref<number | null>(null);

function openLightbox(i: number) {
  activeIndex.value = i;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  activeIndex.value = null;
  document.body.style.overflow = "";
}

function prev() {
  if (activeIndex.value === null) return;
  activeIndex.value = (activeIndex.value - 1 + photos.length) % photos.length;
}

function next() {
  if (activeIndex.value === null) return;
  activeIndex.value = (activeIndex.value + 1) % photos.length;
}

function onKeydown(e: KeyboardEvent) {
  if (activeIndex.value === null) return;
  if (e.key === "ArrowLeft") prev();
  else if (e.key === "ArrowRight") next();
  else if (e.key === "Escape") closeLightbox();
}

onMounted(() => window.addEventListener("keydown", onKeydown));
onUnmounted(() => {
  window.removeEventListener("keydown", onKeydown);
  document.body.style.overflow = "";
});
</script>

<style scoped>
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.2s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
