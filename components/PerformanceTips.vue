<template>
  <div class="max-w-6xl mx-auto">
    <div class="mb-6">
      <p class="text-lg text-gray-700 dark:text-gray-300">
        Writing efficient regular expressions is crucial for application performance. Learn these optimization techniques to avoid common pitfalls.
      </p>
    </div>

    <div class="grid gap-6 max-h-[400px] overflow-y-auto pr-2">
      <!-- Tip 1: Anchors -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div class="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
          <h3 class="text-xl font-bold text-white">1. Use Anchors to Limit Search Space</h3>
        </div>
        <div class="p-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <div class="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg p-4 mb-3">
                <p class="text-sm font-semibold text-red-800 dark:text-red-300 mb-2">❌ Slow - searches entire string:</p>
                <pre class="bg-gray-800 text-red-400 p-3 rounded-md text-xs"><code>/\d{3}-\d{4}/</code></pre>
              </div>
            </div>
            <div>
              <div class="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg p-4 mb-3">
                <p class="text-sm font-semibold text-green-800 dark:text-green-300 mb-2">✅ Fast - anchored to start:</p>
                <pre class="bg-gray-800 text-green-400 p-3 rounded-md text-xs"><code>/^\d{3}-\d{4}/</code></pre>
              </div>
            </div>
          </div>
          <div class="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 mt-3">
            <p class="text-sm text-blue-700 dark:text-blue-400">
              <strong>Why:</strong> Anchors like <code class="bg-blue-100 dark:bg-blue-800 px-1 rounded">^</code> and <code class="bg-blue-100 dark:bg-blue-800 px-1 rounded">$</code> tell the engine exactly where to look,
              eliminating unnecessary position checks throughout the string.
            </p>
          </div>
        </div>
      </div>

      <!-- Tip 2: Specific over General -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div class="bg-gradient-to-r from-purple-600 to-purple-700 p-4">
          <h3 class="text-xl font-bold text-white">2. Be Specific Instead of Generic</h3>
        </div>
        <div class="p-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <div class="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg p-4 mb-3">
                <p class="text-sm font-semibold text-red-800 dark:text-red-300 mb-2">❌ Too generic:</p>
                <pre class="bg-gray-800 text-red-400 p-3 rounded-md text-xs"><code>/.*@.*\..*/</code></pre>
              </div>
            </div>
            <div>
              <div class="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg p-4 mb-3">
                <p class="text-sm font-semibold text-green-800 dark:text-green-300 mb-2">✅ Specific:</p>
                <pre class="bg-gray-800 text-green-400 p-3 rounded-md text-xs"><code>/[\w.]+@[\w.]+\.\w+/</code></pre>
              </div>
            </div>
          </div>
          <div class="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4 mt-3">
            <p class="text-sm text-purple-700 dark:text-purple-400">
              <strong>Why:</strong> The wildcard <code class="bg-purple-100 dark:bg-purple-800 px-1 rounded">.*</code> matches everything including newlines (with <code class="bg-purple-100 dark:bg-purple-800 px-1 rounded">s</code> flag).
              Character classes like <code class="bg-purple-100 dark:bg-purple-800 px-1 rounded">[\w.]</code> are more targeted and faster.
            </p>
          </div>
        </div>
      </div>

      <!-- Tip 3: Catastrophic Backtracking -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div class="bg-gradient-to-r from-red-600 to-red-700 p-4">
          <h3 class="text-xl font-bold text-white">3. Avoid Catastrophic Backtracking</h3>
        </div>
        <div class="p-6">
          <div class="bg-red-100 dark:bg-red-900/30 border-l-4 border-red-500 p-4 mb-4">
            <p class="text-sm font-bold text-red-800 dark:text-red-300 mb-2">⚠️ DANGER - Exponential backtracking:</p>
            <pre class="bg-gray-800 text-red-400 p-3 rounded-md text-xs mb-2"><code>/(a+)+b/</code></pre>
            <p class="text-xs text-red-700 dark:text-red-400">Testing "aaaaaaaaaaaaaaaaaaaaac" can freeze your app!</p>
          </div>

          <div class="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg p-4 mb-3">
            <p class="text-sm font-semibold text-green-800 dark:text-green-300 mb-2">✅ Safe alternatives:</p>
            <pre class="bg-gray-800 text-green-400 p-3 rounded-md text-xs mb-2"><code>/a+b/          // Simplified
/(a+)b/        // Single group
/(?:a+)+b/     // Non-capturing, still risky
/a++b/         // Possessive (not JS)</code></pre>
          </div>

          <div class="bg-orange-50 dark:bg-orange-900/30 rounded-lg p-4">
            <p class="text-sm font-semibold text-orange-800 dark:text-orange-300 mb-2">🔍 How to identify:</p>
            <ul class="text-xs text-orange-700 dark:text-orange-400 space-y-1 list-disc list-inside">
              <li>Nested quantifiers: <code class="bg-orange-100 dark:bg-orange-800 px-1 rounded">(a+)+</code>, <code class="bg-orange-100 dark:bg-orange-800 px-1 rounded">(a*)*</code>, <code class="bg-orange-100 dark:bg-orange-800 px-1 rounded">(a+)*</code></li>
              <li>Overlapping alternatives: <code class="bg-orange-100 dark:bg-orange-800 px-1 rounded">(a|a)*</code>, <code class="bg-orange-100 dark:bg-orange-800 px-1 rounded">(.*|.+)</code></li>
              <li>Multiple paths to same match</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Tip 4: Lazy vs Greedy -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div class="bg-gradient-to-r from-green-600 to-green-700 p-4">
          <h3 class="text-xl font-bold text-white">4. Choose Quantifiers Wisely</h3>
        </div>
        <div class="p-6">
          <div class="mb-4">
            <p class="text-sm text-gray-700 dark:text-gray-300 mb-3">
              For string: <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">"&lt;div&gt;content&lt;/div&gt;&lt;p&gt;more&lt;/p&gt;"</code>
            </p>

            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                <p class="text-sm font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Greedy <code class="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">.*</code></p>
                <pre class="bg-gray-800 text-yellow-400 p-3 rounded-md text-xs mb-2"><code>/&lt;.*&gt;/</code></pre>
                <p class="text-xs text-yellow-700 dark:text-yellow-400">Matches: <code class="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">&lt;div&gt;content&lt;/div&gt;&lt;p&gt;more&lt;/p&gt;</code></p>
                <p class="text-xs text-yellow-700 dark:text-yellow-400 mt-2">Takes whole string!</p>
              </div>

              <div class="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg p-4">
                <p class="text-sm font-semibold text-green-800 dark:text-green-300 mb-2">Lazy <code class="bg-green-100 dark:bg-green-800 px-1 rounded">.*?</code></p>
                <pre class="bg-gray-800 text-green-400 p-3 rounded-md text-xs mb-2"><code>/&lt;.*?&gt;/g</code></pre>
                <p class="text-xs text-green-700 dark:text-green-400">Matches: <code class="bg-green-100 dark:bg-green-800 px-1 rounded">&lt;div&gt;</code>, <code class="bg-green-100 dark:bg-green-800 px-1 rounded">&lt;/div&gt;</code>, <code class="bg-green-100 dark:bg-green-800 px-1 rounded">&lt;p&gt;</code>, <code class="bg-green-100 dark:bg-green-800 px-1 rounded">&lt;/p&gt;</code></p>
                <p class="text-xs text-green-700 dark:text-green-400 mt-2">Individual tags!</p>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
            <p class="text-sm text-blue-700 dark:text-blue-400">
              <strong>Performance note:</strong> Lazy quantifiers can be slower as they try to match as little as possible,
              requiring more steps. Use negated character classes when possible: <code class="bg-blue-100 dark:bg-blue-800 px-1 rounded">/&lt;[^&gt;]*&gt;/</code> (fastest!)
            </p>
          </div>
        </div>
      </div>

      <!-- Tip 5: Atomic Groups -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div class="bg-gradient-to-r from-indigo-600 to-indigo-700 p-4">
          <h3 class="text-xl font-bold text-white">5. Limit Alternation Scope</h3>
        </div>
        <div class="p-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <div class="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg p-4 mb-3">
                <p class="text-sm font-semibold text-red-800 dark:text-red-300 mb-2">❌ Broad alternation:</p>
                <pre class="bg-gray-800 text-red-400 p-3 rounded-md text-xs"><code>/https?:\/\/.*|http?:\/\/.*/</code></pre>
                <p class="text-xs text-red-700 dark:text-red-400 mt-2">Duplicates pattern</p>
              </div>
            </div>
            <div>
              <div class="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg p-4 mb-3">
                <p class="text-sm font-semibold text-green-800 dark:text-green-300 mb-2">✅ Narrowed scope:</p>
                <pre class="bg-gray-800 text-green-400 p-3 rounded-md text-xs"><code>/https?:\/\/.*/</code></pre>
                <p class="text-xs text-green-700 dark:text-green-400 mt-2">Single pattern handles both</p>
              </div>
            </div>
          </div>
          <div class="bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-4 mt-3">
            <p class="text-sm text-indigo-700 dark:text-indigo-400">
              <strong>Why:</strong> Factor out common parts. Put alternation only where needed:
              <code class="bg-indigo-100 dark:bg-indigo-800 px-1 rounded">/cat|car/</code> → <code class="bg-indigo-100 dark:bg-indigo-800 px-1 rounded">/ca[tr]/</code> or
              <code class="bg-indigo-100 dark:bg-indigo-800 px-1 rounded">/ca(t|r)/</code>
            </p>
          </div>
        </div>
      </div>

      <!-- Tip 6: Compile Once -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div class="bg-gradient-to-r from-pink-600 to-pink-700 p-4">
          <h3 class="text-xl font-bold text-white">6. Compile RegExp Outside Loops</h3>
        </div>
        <div class="p-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <div class="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg p-4">
                <p class="text-sm font-semibold text-red-800 dark:text-red-300 mb-2">❌ Recompiles each iteration:</p>
                <pre class="bg-gray-800 text-red-400 p-3 rounded-md text-xs"><code>for (let str of strings) {
  if (/^\d+$/.test(str)) {
    // ...
  }
}</code></pre>
              </div>
            </div>
            <div>
              <div class="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg p-4">
                <p class="text-sm font-semibold text-green-800 dark:text-green-300 mb-2">✅ Compile once, reuse:</p>
                <pre class="bg-gray-800 text-green-400 p-3 rounded-md text-xs"><code>const digitRegex = /^\d+$/
for (let str of strings) {
  if (digitRegex.test(str)) {
    // ...
  }
}</code></pre>
              </div>
            </div>
          </div>
          <div class="bg-pink-50 dark:bg-pink-900/30 rounded-lg p-4 mt-3">
            <p class="text-sm text-pink-700 dark:text-pink-400">
              <strong>Impact:</strong> RegExp compilation has a cost. Literal patterns are optimized by JavaScript engines,
              but it's still better to define them once and reuse, especially in hot code paths.
            </p>
          </div>
        </div>
      </div>

      <!-- Tip 7: Test Complexity -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div class="bg-gradient-to-r from-teal-600 to-teal-700 p-4">
          <h3 class="text-xl font-bold text-white">7. Benchmark Your Patterns</h3>
        </div>
        <div class="p-6">
          <div class="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <pre class="text-xs text-gray-800 dark:text-gray-200"><code>// Simple benchmark
const start = performance.now()
for (let i = 0; i < 100000; i++) {
  /pattern/.test(testString)
}
const end = performance.now()
console.log(\`Time: \${end - start}ms\`)

// Use RegExp.test() for boolean checks
// Use String.match() for capturing groups
// Use String.replace() for transformations</code></pre>
          </div>
          <div class="bg-teal-50 dark:bg-teal-900/30 rounded-lg p-4 mt-3">
            <p class="text-sm font-semibold text-teal-800 dark:text-teal-300 mb-2">Performance ranking (fastest to slowest):</p>
            <ol class="text-sm text-teal-700 dark:text-teal-400 space-y-1 list-decimal list-inside">
              <li><code class="bg-teal-100 dark:bg-teal-800 px-1 rounded">RegExp.test()</code> - for boolean checks</li>
              <li><code class="bg-teal-100 dark:bg-teal-800 px-1 rounded">String.indexOf()</code> - for literal strings</li>
              <li><code class="bg-teal-100 dark:bg-teal-800 px-1 rounded">String.match()</code> - for extracting matches</li>
              <li><code class="bg-teal-100 dark:bg-teal-800 px-1 rounded">String.replace()</code> - for transformations</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <!-- Summary Box -->
    <div class="mt-6 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6">
      <h3 class="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">📊 Quick Reference</h3>
      <div class="grid md:grid-cols-2 gap-4 text-sm">
        <div>
          <p class="font-semibold text-gray-700 dark:text-gray-300 mb-2">✅ Do:</p>
          <ul class="space-y-1 text-gray-600 dark:text-gray-400 list-disc list-inside">
            <li>Use anchors <code class="bg-gray-300 dark:bg-gray-600 px-1 rounded">^</code>, <code class="bg-gray-300 dark:bg-gray-600 px-1 rounded">$</code></li>
            <li>Be specific with character classes</li>
            <li>Compile patterns outside loops</li>
            <li>Use negated classes over lazy <code class="bg-gray-300 dark:bg-gray-600 px-1 rounded">[^x]*</code></li>
            <li>Test with worst-case input</li>
          </ul>
        </div>
        <div>
          <p class="font-semibold text-gray-700 dark:text-gray-300 mb-2">❌ Avoid:</p>
          <ul class="space-y-1 text-gray-600 dark:text-gray-400 list-disc list-inside">
            <li>Nested quantifiers <code class="bg-gray-300 dark:bg-gray-600 px-1 rounded">(a+)+</code></li>
            <li>Overlapping alternations</li>
            <li>Generic wildcards <code class="bg-gray-300 dark:bg-gray-600 px-1 rounded">.*</code></li>
            <li>Recompiling in loops</li>
            <li>Complex patterns on user input</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Performance tips component - no interactive state needed
</script>

<style scoped>
code {
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
}

pre {
  overflow-x: auto;
}
</style>
