<template>
  <div class="tip" :class="type">
    <div class="tip-icon">
      <div v-if="type === 'tip'" class="slidev-icon i-carbon-idea" />
      <div v-else-if="type === 'info'" class="slidev-icon i-carbon-information" />
      <div v-else-if="type === 'success'" class="slidev-icon i-carbon-checkmark" />
      <div v-else-if="type === 'danger'" class="slidev-icon i-carbon-warning-alt" />
    </div>
    <div class="tip-body">
      <div class="tip-type">{{ capitalizedType }}</div>
      <div class="tip-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'info',
    validator: (value) => ['tip', 'info', 'success', 'danger'].includes(value)
  }
});

const capitalizedType = computed(() => {
  return props.type.charAt(0).toUpperCase() + props.type.slice(1);
});
</script>

<style scoped>
.tip {
  display: flex;
  padding: 12px 16px;
  border-radius: 4px;
  margin-bottom: 16px;
  align-items: flex-start;
  max-width: 600px;
}

.tip-icon {
  flex-shrink: 0;
  margin-right: 12px;
  display: flex;
  align-items: center;
}

.tip-body {
  flex-grow: 1;
}

.tip-type {
  font-weight: medium;
  margin-bottom: 4px;
}

.slidev-icon {
  font-size: 1.25em;
}

.tip {
  background-color: #1a2617;
  color: #ffffff;
}

.tip .slidev-icon, .tip .tip-type {
  color: #4caf50;
}

.info {
  background-color: #111a2b;
  color: #ffffff;
}

.info .slidev-icon, .info .tip-type {
  color: #2196f3;
}

.success {
  background-color: #132a1a;
  color: #ffffff;
}

.success .slidev-icon, .success .tip-type {
  color: #4caf50;
}

.danger {
  background-color: #2b1518;
  color: #ffffff;
}

.danger .slidev-icon, .danger .tip-type {
  color: #ff4d4f;
}

.tip :deep(p) {
  color: #ffffff;
  margin: 0;
}

.tip :deep(code) {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 2px 4px;
  border-radius: 3px;
  font-family: monospace;
}
</style>