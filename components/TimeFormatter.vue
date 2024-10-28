<template>
  <div class="flex flex-col items-center justify-center">
    <!-- Clock Container -->
    <div
      class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-8 text-white"
    >
      <!-- Digital Clock Display -->
      <div class="text-4xl font-mono font-bold tracking-wider">
        {{ currentTime }}
      </div>

      <!-- Date Display -->
      <div class="text-blue-200 mt-2 text-center text-sm">
        {{ currentDate }}
      </div>
    </div>

    <!-- Controls -->
    <div class="mt-4 space-x-2">
      <button
        @click="toggleTimer"
        class="px-4 py-2 rounded-md transition-colors duration-200"
        :class="
          isRunning
            ? 'bg-red-500 hover:bg-red-600'
            : 'bg-green-500 hover:bg-green-600'
        "
      >
        {{ isRunning ? 'Stop' : 'Start' }}
      </button>
      <button
        @click="resetTimer"
        class="px-4 py-2 bg-gray-500 hover:bg-gray-600 rounded-md text-white transition-colors duration-200"
      >
        Reset
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Reactive state
const currentTime = ref('')
const currentDate = ref('')
const intervalId = ref(null)
const isRunning = ref(false)

// Format time function
const formatTime = (date) => {
  return new Intl.DateTimeFormat('default', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(date)
}

// Format date function
const formatDate = (date) => {
  return new Intl.DateTimeFormat('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

// Update time function
const updateTime = () => {
  const now = new Date()
  currentTime.value = formatTime(now)
  currentDate.value = formatDate(now)
}

// Timer control functions
const startTimer = () => {
  if (!isRunning.value) {
    updateTime()
    intervalId.value = setInterval(updateTime, 1000)
    isRunning.value = true
  }
}

const stopTimer = () => {
  if (intervalId.value) {
    clearInterval(intervalId.value)
    intervalId.value = null
    isRunning.value = false
  }
}

const toggleTimer = () => {
  isRunning.value ? stopTimer() : startTimer()
}

const resetTimer = () => {
  stopTimer()
  updateTime()
  startTimer()
}

// Lifecycle hooks
onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  stopTimer()
})
</script>
