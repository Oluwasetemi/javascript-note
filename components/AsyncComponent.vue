<template>
  <div>
    <button @click="run">Run Async Iterator</button>
    <div v-for="num in numbers" :key="num" class="text-sm animate-pulse text-center">{{ num }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let numbers = ref([]);

const run = async () => {
  async function* generateAsyncSequence(start, end) {
    for (let i = start; i <= end; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      numbers.value.push(i);
    }
  }
  const iterator = generateAsyncSequence(1, 5);
  for await (const num of iterator) {
    console.log("Generated:", num);
  }
}
</script>
