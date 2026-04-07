<template>
  <!--
    Mole mark — front-facing, arms spread wide.
    The two key recognisable features: big paddle paws + pointed snout.
  -->
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <!-- Rounded square background -->
    <rect width="80" height="80" rx="18" :fill="dark ? '#e8e6e0' : '#141412'" />

    <!-- ─── Mole silhouette ─── -->

    <!-- Left paddle paw (large, spread out) -->
    <ellipse cx="17" cy="50" rx="13" ry="9" :fill="amber" />
    <!-- Left claws — 3 tapered wedges radiating outward from the paw -->
    <path d="M 8 44 L 3 39 L 6 45 Z" :fill="amber" />
    <path d="M 6 50 L 1 49 L 6 54 Z" :fill="amber" />
    <path d="M 8 56 L 3 61 L 7 59 Z" :fill="amber" />

    <!-- Right paddle paw (mirror) -->
    <ellipse cx="63" cy="50" rx="13" ry="9" :fill="amber" />
    <!-- Right claws -->
    <path d="M 72 44 L 77 39 L 74 45 Z" :fill="amber" />
    <path d="M 74 50 L 79 49 L 74 54 Z" :fill="amber" />
    <path d="M 72 56 L 77 61 L 73 59 Z" :fill="amber" />

    <!-- Ears (drawn first so head covers the inner portion, leaving bumps) -->
    <ellipse cx="29" cy="19" rx="7" ry="8" :fill="amber" />
    <ellipse cx="51" cy="19" rx="7" ry="8" :fill="amber" />

    <!-- Head -->
    <circle cx="40" cy="34" r="16" :fill="amber" />

    <!-- Body (merges with head) -->
    <ellipse cx="40" cy="52" rx="17" ry="14" :fill="amber" />

    <!-- Eyes — tiny dark dots (moles are nearly blind) -->
    <circle cx="34" cy="31" r="2.5" :fill="dark ? '#e8e6e0' : '#141412'" />
    <circle cx="46" cy="31" r="2.5" :fill="dark ? '#e8e6e0' : '#141412'" />

    <!-- Snout — elongated oval, pointing toward viewer (rendered as downward bulge) -->
    <ellipse cx="40" cy="41" rx="7" ry="5" :fill="amberDark" />

    <!-- Nose tip -->
    <circle cx="40" cy="46" r="3" :fill="dark ? '#a16207' : '#78350f'" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ size?: number; dark?: boolean }>()

const amber = computed(() => (props.dark ? '#D97706' : '#F59E0B'))
const amberDark = computed(() => (props.dark ? '#b45309' : '#D97706'))
</script>
