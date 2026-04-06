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
