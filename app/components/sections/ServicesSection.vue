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
