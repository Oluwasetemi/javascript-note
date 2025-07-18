<template>
  <canvas
    ref="webApiCanvas"
    width="300"
    height="150"
    class="border border-gray-300 mt-4"
  ></canvas>

  <button @click="demoWebAPIs" class="play-btn mt-2">
    ▶️ Demo Web APIs
  </button>

</template>

<script setup>
import { ref, onMounted } from "vue";

const webApiCanvas = ref(null);

const demoWebAPIs = () => {
  const canvas = webApiCanvas.value;
  const ctx = canvas.getContext("2d");

  // Canvas API demo
  ctx.fillStyle = "#3498db";
  ctx.fillRect(10, 10, 80, 80);

  ctx.fillStyle = "#e74c3c";
  ctx.fillRect(100, 10, 80, 80);

  ctx.fillStyle = "#2ecc71";
  ctx.fillRect(190, 10, 80, 80);

  // Text API demo
  ctx.fillStyle = "black";
  ctx.font = "16px Arial";
  ctx.fillText("Web APIs in Action!", 50, 120);

  // Web Storage API demo
  localStorage.setItem("demo_timestamp", Date.now());

  // Notification API demo (if permission granted)
  if (Notification.permission === "granted") {
    new Notification("Web API Demo", {
      body: "Canvas and Storage APIs demonstrated!",
      icon: "🎨",
    });
  }
};
</script>
