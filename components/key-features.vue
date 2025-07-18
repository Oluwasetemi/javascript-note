<template>
  <div class="max-w-4xl mx-auto min-h-[2400px] overflow-auto px-4">
  <div class="space-y-8 py-4">
    <div class="bg-white rounded-lg shadow-lg overflow-hidden max-h-[400px] flex flex-col">
      <div class="bg-blue-600 p-4 sticky top-0 z-10">
          <h2 class="text-xl font-bold text-white">1. Automatic Reconnection</h2>
      </div>

      <div class="p-6 space-y-4 overflow-y-auto">
        <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>Built-in reconnection mechanism</li>
            <li>Configurable retry timeout using <code class="bg-gray-100 px-2 py-1 rounded text-blue-600">retry: milliseconds</code></li>
        </ul>

        <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <h3 class="text-sm font-semibold text-gray-600 mb-2">Example:</h3>
          <code class="block bg-gray-800 text-green-400 p-4 rounded-md">
              retry: 15000<br>
              data: Reconnection delay set to 15 seconds
          </code>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-lg overflow-hidden max-h-[400px] flex flex-col">
      <div class="bg-purple-600 p-4 sticky top-0 z-10">
          <h2 class="text-xl font-bold text-white">2. Message ID and State Recovery</h2>
      </div>

      <div class="p-6 overflow-y-auto">
        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li>Server can assign IDs to messages</li>
                <li>Browser tracks last received ID</li>
                <li>Automatic recovery after disconnection</li>
                <li>State tracking via <code class="bg-gray-100 px-2 py-1 rounded text-purple-600">eventSource.lastEventId</code></li>
            </ul>
          </div>

          <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <code class=" text-sm text-gray-700">
              id: 1
              data: Message 1
              id: 2
              data: Message 2
              Last-Event-ID: 2
            </code>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-lg overflow-hidden max-h-[600px] flex flex-col">
      <div class="bg-green-600 p-4 sticky top-0 z-10">
        <h2 class="text-xl font-bold text-white">3. Connection States (readyState)</h2>
      </div>

      <div class="p-6 overflow-y-auto">
        <div class="grid gap-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">

              <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div class="font-mono text-sm text-yellow-800 mb-2">EventSource.CONNECTING = 0</div>
                <div class="text-sm text-yellow-600">Connecting or Reconnecting</div>
              </div>


            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                <div class="font-mono text-sm text-green-800 mb-2">EventSource.OPEN = 1</div>
                <div class="text-sm text-green-600">Connected</div>
              </div>


              <div class="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div class="font-mono text-sm text-red-800 mb-2">EventSource.CLOSED = 2</div>
                  <div class="text-sm text-red-600">Connection closed</div>
                </div>
              </div>

              <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 class="text-sm font-semibold text-gray-600 mb-2">Usage Example:</h3>
                <code class="block bg-gray-800 text-green-400 p-4 rounded-md">
const eventSource = new EventSource('/events');
switch(eventSource.readyState) {
    case EventSource.CONNECTING:
        console.log('Connecting...');
        break;
    case EventSource.OPEN:
        console.log('Connected');
        break;
    case EventSource.CLOSED:
        console.log('Connection closed');
        break;
}
                        </code>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>