<template>
  <div>
    <h2>Unicode: flag "u" and class "\p{...}"</h2>
    <p>Explains how the <code>u</code> flag allows Unicode support, and how to match Unicode properties with
      <code>\p{}</code>.</p>

    <div class="visual-placeholder">
      <p><strong>Visual:</strong> Show support for different Unicode categories.</p>
    </div>

    <div class="tester">
      <h3>{monaco-run} Tester</h3>
      <pre><code>const regex = /\p{L}/u;
console.log(regex.test('Hello'));
console.log(regex.test('こんにちは'));
console.log(regex.test('123'));</code></pre>
    </div>
  </div>
</template>

<script setup>
// Add any script logic here if needed
</script>
