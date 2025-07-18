<template>
  <div>
    <h2>Performance Tips</h2>

    <h3>Lazy vs Greedy</h3>
    <p>
      Greedy quantifiers (e.g., <code>*</code>, <code>+</code>) try to match as much
      as possible.
    </p>
    <p>
      Lazy quantifiers (e.g., <code>*?</code>, <code>+?</code>) try to match as
      little as possible.
    </p>

    <h3>Catastrophic Backtracking</h3>
    <p>
      Be aware of patterns that can backtrack excessively and cause performance
      issues.
    </p>
  </div>
</template>

<script setup>
// Add any script logic here if needed
</script>
