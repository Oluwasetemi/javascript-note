<template>
  <div class="max-w-4xl mx-auto overflow-y-auto px-4">
    <div class="space-y-8 py-4">
      <!-- Standard Events -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col">
        <div class="bg-indigo-600 dark:bg-indigo-700 p-4 sticky top-0 z-10">
          <h2 class="text-xl font-bold text-white">Standard Events</h2>
        </div>

        <div class="p-6">
          <div class="grid gap-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <!-- Message Event -->
              <div class="bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700 rounded-lg p-4">
                <div class="font-mono text-sm text-indigo-800 dark:text-indigo-300 mb-2">message</div>
                <div class="text-sm text-indigo-600 dark:text-indigo-400">Regular message received</div>
                <div class="block bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 mt-2 p-2 rounded text-xs font-mono">
                  eventSource.onmessage = (event) => {
                    console.log(event.data);
                  }
                </div>
              </div>

              <!-- Open Event -->
              <div class="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg p-4">
                <div class="font-mono text-sm text-green-800 dark:text-green-300 mb-2">open</div>
                <div class="text-sm text-green-600 dark:text-green-400">Connection established</div>
                <div class="block bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 mt-2 p-2 rounded text-xs font-mono">
                  eventSource.onopen = () => {
                    console.log("Connected!");
                  }
                </div>
              </div>

              <!-- Error Event -->
              <div class="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg p-4">
                <div class="font-mono text-sm text-red-800 dark:text-red-300 mb-2">error</div>
                <div class="text-sm text-red-600 dark:text-red-400">Connection error occurred</div>
                <div class="block bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 mt-2 p-2 rounded text-xs font-mono">
                  eventSource.onerror = (error) => {
                    console.error(error);
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Custom Events -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col">
        <div class="bg-purple-600 dark:bg-purple-700 p-4 sticky top-0 z-10">
          <h2 class="text-xl font-bold text-white">Custom Events</h2>
        </div>

        <div class="p-6">
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Server Sends -->
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
              <h3 class="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">Server Sends:</h3>
              <div class="block bg-gray-800 dark:bg-gray-900 text-green-400 p-4 rounded-md text-xs font-mono">
event: userUpdate
data: {
  "id": 123,
  "status": "online"
}
              </div>
            </div>

            <!-- Client Handles -->
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
              <h3 class="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">Client Handles:</h3>
              <div class="block bg-gray-800 dark:bg-gray-900 text-green-400 p-4 rounded-md text-xs font-mono">
eventSource.addEventListener('userUpdate',
  event => {
    const userData = JSON.parse(event.data);
    updateUserStatus(userData);
  }
);
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Cross-Origin Requests -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col">
        <div class="bg-blue-600 dark:bg-blue-700 p-4 sticky top-0 z-10">
          <h2 class="text-xl font-bold text-white">Cross-Origin Requests</h2>
        </div>

        <div class="p-6">
          <div class="space-y-6">
            <!-- Basic Cross-Origin -->
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
              <h3 class="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">Basic Cross-Origin Connection:</h3>
              <code class="block bg-gray-800 dark:bg-gray-900 text-green-400 p-4 rounded-md text-xs">
const source = new EventSource("https://api.example.com/events");
              </code>
            </div>

            <!-- With Credentials -->
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
              <h3 class="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">With Credentials:</h3>
              <code class="block bg-gray-800 dark:bg-gray-900 text-green-400 p-4 rounded-md text-xs">
const source = new EventSource("https://api.example.com/events", {
  withCredentials: true
});
              </code>
            </div>

            <!-- CORS Requirements -->
            <div class="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700">
              <h3 class="text-sm font-semibold text-yellow-800 dark:text-yellow-300 mb-2">⚠️ CORS Requirements</h3>
              <ul class="list-disc list-inside space-y-1 text-sm text-yellow-700 dark:text-yellow-400">
                <li>Server must send <code class="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">Access-Control-Allow-Origin</code> header</li>
                <li>For credentials, server must explicitly allow the requesting origin</li>
                <li>Wildcards (*) not allowed with credentials</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
