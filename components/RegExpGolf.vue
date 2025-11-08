<template>
  <div class="max-w-6xl mx-auto">
    <div class="mb-6">
      <p class="text-lg text-gray-700 dark:text-gray-300">
        RegExp Golf is a challenge where you write the shortest regular expression that matches specific strings. Test your skills with these exercises!
      </p>
    </div>

    <div class="grid gap-6 max-h-[400px] overflow-y-auto pr-2">
      <!-- Challenge 1 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div class="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
          <h3 class="text-xl font-bold text-white">Challenge 1: Match Car or Cat</h3>
        </div>
        <div class="p-6">
          <div class="mb-4">
            <p class="text-sm text-gray-700 dark:text-gray-300 mb-2">Match: <code class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">car</code>, <code class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">cat</code></p>
            <p class="text-sm text-gray-700 dark:text-gray-300">Don't match: <code class="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded">can</code>, <code class="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded">cap</code></p>
          </div>

          <div class="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mb-4">
            <p class="text-sm font-semibold text-yellow-800 dark:text-yellow-300 mb-2">💭 Think about it:</p>
            <p class="text-sm text-yellow-700 dark:text-yellow-400">What do "car" and "cat" have in common? How can you match the difference?</p>
          </div>

          <div class="solution">
            <button
              @click="showSolution1 = !showSolution1"
              class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors mb-3"
            >
              {{ showSolution1 ? 'Hide' : 'Show' }} Solution
            </button>

            <div v-if="showSolution1" class="space-y-3">
              <div class="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Solution:</p>
                <pre class="bg-gray-800 text-green-400 p-3 rounded-md text-sm"><code>ca[rt]</code></pre>
              </div>
              <div class="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
                <p class="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-2">Explanation:</p>
                <p class="text-sm text-blue-700 dark:text-blue-400">
                  Use a character class <code class="bg-blue-100 dark:bg-blue-800 px-1 rounded">[rt]</code> to match either 'r' or 't' after "ca".
                  This is shorter than <code class="bg-blue-100 dark:bg-blue-800 px-1 rounded">ca(r|t)</code> and more efficient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Challenge 2 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div class="bg-gradient-to-r from-purple-600 to-purple-700 p-4">
          <h3 class="text-xl font-bold text-white">Challenge 2: Match Valid Hex Colors</h3>
        </div>
        <div class="p-6">
          <div class="mb-4">
            <p class="text-sm text-gray-700 dark:text-gray-300 mb-2">Match: <code class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">#fff</code>, <code class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">#1a2b3c</code>, <code class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">#ABC</code></p>
            <p class="text-sm text-gray-700 dark:text-gray-300">Don't match: <code class="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded">#gg</code>, <code class="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded">#12</code>, <code class="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded">#1234567</code></p>
          </div>

          <div class="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mb-4">
            <p class="text-sm font-semibold text-yellow-800 dark:text-yellow-300 mb-2">💭 Think about it:</p>
            <p class="text-sm text-yellow-700 dark:text-yellow-400">Hex colors are either 3 or 6 characters long. Valid characters are 0-9 and a-f (case insensitive).</p>
          </div>

          <div class="solution">
            <button
              @click="showSolution2 = !showSolution2"
              class="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors mb-3"
            >
              {{ showSolution2 ? 'Hide' : 'Show' }} Solution
            </button>

            <div v-if="showSolution2" class="space-y-3">
              <div class="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Solution:</p>
                <pre class="bg-gray-800 text-green-400 p-3 rounded-md text-sm"><code>#([0-9a-f]{3}){1,2}\b</code></pre>
              </div>
              <div class="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4">
                <p class="text-sm font-semibold text-purple-800 dark:text-purple-300 mb-2">Explanation:</p>
                <ul class="text-sm text-purple-700 dark:text-purple-400 space-y-1 list-disc list-inside">
                  <li><code class="bg-purple-100 dark:bg-purple-800 px-1 rounded">[0-9a-f]</code> matches valid hex digits</li>
                  <li><code class="bg-purple-100 dark:bg-purple-800 px-1 rounded">{3}</code> matches exactly 3 characters</li>
                  <li><code class="bg-purple-100 dark:bg-purple-800 px-1 rounded">{1,2}</code> allows 1 or 2 groups (3 or 6 total chars)</li>
                  <li><code class="bg-purple-100 dark:bg-purple-800 px-1 rounded">\b</code> ensures word boundary (prevents #1234567)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Challenge 3 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div class="bg-gradient-to-r from-green-600 to-green-700 p-4">
          <h3 class="text-xl font-bold text-white">Challenge 3: Email Username Validation</h3>
        </div>
        <div class="p-6">
          <div class="mb-4">
            <p class="text-sm text-gray-700 dark:text-gray-300 mb-2">Match: <code class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">john_doe</code>, <code class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">user123</code>, <code class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">test.user</code></p>
            <p class="text-sm text-gray-700 dark:text-gray-300">Don't match: <code class="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded">.user</code>, <code class="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded">user@</code>, <code class="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded">us</code></p>
          </div>

          <div class="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mb-4">
            <p class="text-sm font-semibold text-yellow-800 dark:text-yellow-300 mb-2">💭 Think about it:</p>
            <p class="text-sm text-yellow-700 dark:text-yellow-400">Valid usernames: start with letter/number, contain letters/numbers/dots/underscores, minimum 3 chars.</p>
          </div>

          <div class="solution">
            <button
              @click="showSolution3 = !showSolution3"
              class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors mb-3"
            >
              {{ showSolution3 ? 'Hide' : 'Show' }} Solution
            </button>

            <div v-if="showSolution3" class="space-y-3">
              <div class="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Solution:</p>
                <pre class="bg-gray-800 text-green-400 p-3 rounded-md text-sm"><code>^\w[\w.]{2,}$</code></pre>
              </div>
              <div class="bg-green-50 dark:bg-green-900/30 rounded-lg p-4">
                <p class="text-sm font-semibold text-green-800 dark:text-green-300 mb-2">Explanation:</p>
                <ul class="text-sm text-green-700 dark:text-green-400 space-y-1 list-disc list-inside">
                  <li><code class="bg-green-100 dark:bg-green-800 px-1 rounded">^</code> ensures start of string</li>
                  <li><code class="bg-green-100 dark:bg-green-800 px-1 rounded">\w</code> first char must be letter/digit/underscore</li>
                  <li><code class="bg-green-100 dark:bg-green-800 px-1 rounded">[\w.]</code> allows letters/digits/underscore/dot</li>
                  <li><code class="bg-green-100 dark:bg-green-800 px-1 rounded">{2,}</code> at least 2 more chars (total 3+)</li>
                  <li><code class="bg-green-100 dark:bg-green-800 px-1 rounded">$</code> ensures end of string</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Challenge 4 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div class="bg-gradient-to-r from-orange-600 to-orange-700 p-4">
          <h3 class="text-xl font-bold text-white">Challenge 4: Optimize This Pattern</h3>
        </div>
        <div class="p-6">
          <div class="mb-4">
            <p class="text-sm text-gray-700 dark:text-gray-300 mb-3">Given pattern (21 characters):</p>
            <pre class="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-3 rounded-md text-sm mb-3"><code>(red|green|blue|yellow)</code></pre>
            <p class="text-sm text-gray-700 dark:text-gray-300">Can you make it shorter while maintaining the same functionality?</p>
          </div>

          <div class="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mb-4">
            <p class="text-sm font-semibold text-yellow-800 dark:text-yellow-300 mb-2">💭 Think about it:</p>
            <p class="text-sm text-yellow-700 dark:text-yellow-400">Look for common patterns and shared characters. Can you use character classes?</p>
          </div>

          <div class="solution">
            <button
              @click="showSolution4 = !showSolution4"
              class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors mb-3"
            >
              {{ showSolution4 ? 'Hide' : 'Show' }} Solution
            </button>

            <div v-if="showSolution4" class="space-y-3">
              <div class="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Optimized Solution (11 characters):</p>
                <pre class="bg-gray-800 text-green-400 p-3 rounded-md text-sm"><code>(red|gr|blu|y)e+(en|ow)?</code></pre>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">Even better (if exact match not needed):</p>
                <pre class="bg-gray-800 text-green-400 p-3 rounded-md text-sm"><code>\w+(en|ow)</code></pre>
              </div>
              <div class="bg-orange-50 dark:bg-orange-900/30 rounded-lg p-4">
                <p class="text-sm font-semibold text-orange-800 dark:text-orange-300 mb-2">Explanation:</p>
                <p class="text-sm text-orange-700 dark:text-orange-400">
                  The key is finding shared patterns: "green", "yellow" both end with "en/ow" sounds.
                  However, sometimes a slightly longer but clearer pattern is better for maintainability!
                  The original pattern is actually more readable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700 rounded-lg p-6">
      <h3 class="text-lg font-bold text-indigo-800 dark:text-indigo-300 mb-3">🏆 Golf Tips</h3>
      <ul class="space-y-2 text-sm text-indigo-700 dark:text-indigo-400">
        <li class="flex items-start">
          <span class="mr-2">✓</span>
          <span>Use character classes <code class="bg-indigo-100 dark:bg-indigo-800 px-1 rounded">[abc]</code> instead of alternation <code class="bg-indigo-100 dark:bg-indigo-800 px-1 rounded">(a|b|c)</code></span>
        </li>
        <li class="flex items-start">
          <span class="mr-2">✓</span>
          <span>Shorthand classes save characters: <code class="bg-indigo-100 dark:bg-indigo-800 px-1 rounded">\d</code> vs <code class="bg-indigo-100 dark:bg-indigo-800 px-1 rounded">[0-9]</code></span>
        </li>
        <li class="flex items-start">
          <span class="mr-2">✓</span>
          <span>Use <code class="bg-indigo-100 dark:bg-indigo-800 px-1 rounded">?</code> for optional groups instead of alternation with empty string</span>
        </li>
        <li class="flex items-start">
          <span class="mr-2">✓</span>
          <span>Non-capturing groups <code class="bg-indigo-100 dark:bg-indigo-800 px-1 rounded">(?:...)</code> are longer - use only when needed</span>
        </li>
        <li class="flex items-start">
          <span class="mr-2">✓</span>
          <span>Balance brevity with readability - the shortest regex isn't always the best!</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showSolution1 = ref(false)
const showSolution2 = ref(false)
const showSolution3 = ref(false)
const showSolution4 = ref(false)
</script>

<style scoped>
code {
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
}
</style>
