<template>
  <section id="services" class="py-24 px-6 max-w-5xl mx-auto">
    <div class="flex items-center gap-6 mb-16" data-animate>
      <h2 class="text-4xl font-bold text-white shrink-0">Services</h2>
      <div class="h-px flex-1 bg-white/10"></div>
    </div>

    <div class="divide-y divide-white/5">
      <div
        v-for="(service, i) in services"
        :key="service.title"
        class="flex gap-6 md:gap-10 py-10 md:py-12 group"
        data-animate
        :style="{ transitionDelay: `${i * 0.12}s` }"
      >
        <span
          class="font-display font-black leading-none text-white/5 group-hover:text-accent/20 transition-colors select-none shrink-0"
          style="font-size: clamp(52px, 8vw, 96px)"
        >
          {{ String(i + 1).padStart(2, '0') }}
        </span>
        <div class="flex flex-col justify-center gap-2">
          <h3 class="text-xl md:text-2xl font-semibold text-white group-hover:text-accent transition-colors duration-300">
            {{ service.title }}
          </h3>
          <p class="text-white/50 leading-relaxed">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    title: 'Exterior Wash',
    description:
      'Full hand wash of the exterior — bodywork, windows, and door sills — leaving your car squeaky clean.',
  },
  {
    title: 'Interior Clean',
    description: 'Vacuum, wipe-down, and detail of seats, dashboard, and all interior surfaces.',
  },
  {
    title: 'Tire & Rim Treatment',
    description: 'Tires scrubbed and dressed, rims cleaned to a shine.',
  },
]
</script>
