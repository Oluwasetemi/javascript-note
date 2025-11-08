<template>
  <div class="flex flex-col items-center">
    <canvas
      id="animationCanvas"
      ref="animationCanvas"
      width="500"
      height="150"
      class="border border-gray-300 mb-4"
    ></canvas>

    <button @click="toggleAnimation" class="play-btn">
      {{ isAnimating ? '⏸️ Stop Animation' : '▶️ Start Animation' }}
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const animationCanvas = ref(null);
const isAnimating = ref(false);
let animationId = null;

const toggleAnimation = () => {
  if (isAnimating.value) {
    stopAnimation();
  } else {
    startAnimation();
  }
};

const startAnimation = () => {
  if (!animationCanvas.value) return;

  const canvas = animationCanvas.value;
  const ctx = canvas.getContext("2d");

  if (!ctx) return;

  isAnimating.value = true;
  let startTime = null;

  const draw = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw moving box
    ctx.fillStyle = "#e74c3c";
    const boxWidth = 60;
    const boxHeight = 30;
    const speed = 0.1; // pixels per millisecond
    const position = (progress * speed) % (canvas.width - boxWidth);

    ctx.fillRect(position, 70, boxWidth, boxHeight);

    // Continue animation if still running
    if (isAnimating.value) {
      animationId = requestAnimationFrame(draw);
    }
  };

  animationId = requestAnimationFrame(draw);
};

const stopAnimation = () => {
  isAnimating.value = false;
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }

  // Clear canvas
  if (animationCanvas.value) {
    const canvas = animationCanvas.value;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
};

// Clean up on component unmount
onUnmounted(() => {
  stopAnimation();
});
</script>

<style scoped>
.play-btn {
  @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors;
}
</style>
