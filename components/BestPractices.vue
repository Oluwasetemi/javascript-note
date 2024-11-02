<template>
  <div class="h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4">
    <!-- Fixed Header -->
    <h1
      class="text-3xl font-bold mb-4 text-center text-white bg-gradient-to-r from-blue-600 to-purple-600 py-4 rounded-lg shadow-lg sticky top-0 z-10"
    >
      Best Practices for Network Requests
    </h1>

    <!-- Scrollable Container -->
    <div class="overflow-auto h-[calc(100vh-7rem)] rounded-lg custom-scrollbar">
      <div class="space-y-4 p-4">
        <!-- Memory Management Section -->
        <div class="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
          <div class="bg-blue-700 p-4 sticky top-0 z-10">
            <h2 class="text-xl font-bold text-white">Memory Management</h2>
          </div>
          <div class="divide-y divide-gray-700">
            <div
              v-for="(item, index) in memoryManagementRows"
              :key="'memory-' + index"
              class="p-4 hover:bg-gray-700 transition-colors duration-150"
            >
              <h3 class="text-lg font-semibold text-blue-400 mb-2">
                {{ item.guideline }}
              </h3>
              <p class="text-gray-300 mb-2">{{ item.explanation }}</p>
              <div v-if="item.code" class="relative">
                <pre
                  class="bg-gray-900 p-4 rounded-lg overflow-x-auto text-blue-300 font-mono text-sm max-h-[200px] custom-scrollbar"
                  >{{ item.code }}</pre
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Error Handling Section -->
        <div class="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
          <div class="bg-purple-700 p-4 sticky top-0 z-10">
            <h2 class="text-xl font-bold text-white">Error Handling</h2>
          </div>
          <div class="divide-y divide-gray-700">
            <div
              v-for="(item, index) in errorHandlingRows"
              :key="'error-' + index"
              class="p-4 hover:bg-gray-700 transition-colors duration-150"
            >
              <h3 class="text-lg font-semibold text-purple-400 mb-2">
                {{ item.guideline }}
              </h3>
              <p class="text-gray-300 mb-2">{{ item.explanation }}</p>
              <div v-if="item.code" class="relative">
                <pre
                  class="bg-gray-900 p-4 rounded-lg overflow-x-auto text-purple-300 font-mono text-sm max-h-[200px] custom-scrollbar"
                  >{{ item.code }}</pre
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Progress Reporting Section -->
        <div class="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
          <div class="bg-green-700 p-4 sticky top-0 z-10">
            <h2 class="text-xl font-bold text-white">Progress Reporting</h2>
          </div>
          <div class="divide-y divide-gray-700">
            <div
              v-for="(item, index) in progressReportingRows"
              :key="'progress-' + index"
              class="p-4 hover:bg-gray-700 transition-colors duration-150"
            >
              <h3 class="text-lg font-semibold text-green-400 mb-2">
                {{ item.guideline }}
              </h3>
              <p class="text-gray-300 mb-2">{{ item.explanation }}</p>
              <div v-if="item.code" class="relative">
                <pre
                  class="bg-gray-900 p-4 rounded-lg overflow-x-auto text-green-300 font-mono text-sm max-h-[200px] custom-scrollbar"
                  >{{ item.code }}</pre
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NetworkBestPractices',
  data() {
    return {
      memoryManagementRows: [
        {
          guideline: 'Consider implementing a size limit check',
          explanation:
            'Ensure that the size of the incoming data does not exceed a predefined limit.',
          code: `const contentLength = response.headers.get('Content-Length');
if (contentLength && contentLength > MAX_SIZE) {
  controller.abort();
}`,
        },
        {
          guideline: 'Break the download if size exceeds expectations',
          explanation:
            'Terminate the download if the size exceeds a defined size threshold to avoid memory overload.',
        },
        {
          guideline: 'Clean up chunks array when no longer needed',
          explanation: 'Ensure chunks are removed from memory once processed.',
          code: 'chunks = null;',
        },
      ],
      errorHandlingRows: [
        {
          guideline: 'Always implement try/catch blocks',
          explanation:
            'Wrap async code in try/catch to handle errors gracefully.',
          code: `try {
  let response = await fetch(url);
} catch (error) {
  console.error('Error fetching data:', error);
}`,
        },
        {
          guideline: 'Handle network errors gracefully',
          explanation: 'Notify users appropriately if network errors occur.',
          code: `if (!response.ok) {
  console.error('Failed to fetch resource');
}`,
        },
        {
          guideline: 'Consider implementing retry logic',
          explanation:
            'Use retry logic with exponential backoff for temporary issues.',
          code: `for (let i = 0; i < maxRetries; i++) {
  try {
    await fetch(url);
    break;
  } catch (error) {
    await wait(retryInterval);
    retryInterval *= 2;
  }
}`,
        },
      ],
      progressReportingRows: [
        {
          guideline: 'Use appropriate progress intervals',
          explanation:
            'Use regular intervals for progress updates to avoid overwhelming the UI.',
        },
        {
          guideline: 'Consider debouncing progress updates',
          explanation:
            'Debounce progress updates to avoid excessive UI re-renders.',
          code: `let debounceTimeout;
function updateProgressDebounced(progress) {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => updateProgressUI(progress), 100);
}`,
        },
        {
          guideline: 'Handle cases where Content-Length is not available',
          explanation:
            'If Content-Length is not available, implement a fallback for progress reporting.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #4b5563 #1f2937;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #1f2937;
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}

pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
