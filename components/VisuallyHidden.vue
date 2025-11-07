<template>
  <span :class="[
    'sr-only',
    'absolute',
    'w-px',
    'h-px',
    'p-0',
    '-m-px',
    'overflow-hidden',
    'whitespace-nowrap',
    'border-0',
    'clip-path-rect(0,0,0,0)',
    'clip-path-inset(50%)'
  ]" v-bind="$attrs">
    <slot />
  </span>
</template>

<script setup lang="ts">
interface VisuallyHiddenProps {
  /**
   * Whether the content should be visually hidden
   * @default true
   */
  hidden?: boolean
}

withDefaults(defineProps<VisuallyHiddenProps>(), {
  hidden: true
})

// Allow all attributes to be passed through
defineOptions({
  inheritAttrs: false
})
</script>

<style scoped>
/* Additional CSS for better browser support */
.sr-only {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

/* Modern clip-path approach for better support */
.clip-path-rect-0-0-0-0 {
  clip-path: rect(0, 0, 0, 0);
}

.clip-path-inset-50 {
  clip-path: inset(50%);
}
</style>
