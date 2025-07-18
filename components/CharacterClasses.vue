<template>
  <div>
    <h2>Character Classes</h2>
    <p>Character classes such as <code>[a-z]</code>, <code>\w</code>, and <code>\d</code> match different sets of
      characters.</p>

    <div class="visual-placeholder">
      <p><strong>Visual:</strong> Illustration of character ranges and classes.</p>
    </div>

    <div class="tester">
      <h3>{monaco-run} Tester</h3>
      <pre><code>const regex = /[a-z]/;
console.log(regex.test('Hello'));
console.log(regex.test('123'));
console.log(regex.test('hello'));</code></pre>
    </div>
  </div>
</template>

<script setup>
// Add any script logic here if needed
</script>
