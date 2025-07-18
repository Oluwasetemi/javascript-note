<template>
  <div>
    <h2>RegExp Golf Exercise</h2>
    <p>Minimize the regular expression pattern to achieve the desired matching.</p>

    <div class="exercise">
      <h3>Exercise</h3>
      <pre><code>.*?example.*?</code></pre>
      <p>Can you make this pattern shorter while keeping the same functionality?</p>
    </div>

    <div v-click class="solution">
      <h3>Solution</h3>
      <pre><code>.*example.*</code></pre>
      <p>Explanation: The greedy quantifiers work just as well here and are shorter.</p>
    </div>
  </div>
</template>

<script setup>
// Add any script logic here if needed
</script>

<style scoped>
.exercise {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.solution {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #28a745;
  border-radius: 4px;
  background-color: #f8f9fa;
}

pre {
  background-color: #f4f4f4;
  padding: 0.5rem;
  border-radius: 4px;
}
</style>
