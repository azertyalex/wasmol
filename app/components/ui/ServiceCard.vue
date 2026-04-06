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
