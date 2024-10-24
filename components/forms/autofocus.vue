<template>
  <div>
    <label for="input">Your email please:</label>
    <input
      class="p-1 text-sm border border-blue border-2 focus:outline-none"
      type="email"
      id="input"
    />
    <div class="text-red-600" id="error"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const input = document.getElementById('input') as HTMLInputElement
  const error = document.getElementById('error') as HTMLDivElement

  input.addEventListener('input', () => {
    if (!input.value.includes('@')) {
      error.textContent = 'Please enter a valid email'
    } else {
      error.textContent = ''
    }
  })

  input.addEventListener('focus', () => {
    if (!input.value.includes('@')) {
      input.value = ''
      error.textContent = ''
    }
  })

  // input.focus();
})
</script>

<style></style>
