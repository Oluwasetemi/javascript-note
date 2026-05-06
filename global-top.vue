<!-- global-top.vue -->
<script setup>
import { useNav } from '@slidev/client'

const { currentSlideNo } = useNav()

// Slides that already render their own TOC — skip the floating icon on these
const TOC_SLIDES = new Set([
  4, 27, 43, 58, 71, 85, 117, 131, 156, 187, 212, 227, 254, 271, 
])
</script>

<template>
  <TocIcon v-if="!TOC_SLIDES.has(currentSlideNo)" />
</template>
