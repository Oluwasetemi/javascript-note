
<template>
  <button @click="openSecurePopup" class="btn-primary">
    🔒 Open Secure Popup
  </button>

  <div v-if="popupMessage" class="message-box">
    {{ popupMessage }}
  </div>

  <canvas
    ref="securityCanvas"
    width="300"
    height="200"
    @click="demonstrateClickjacking"
    class="border border-gray-300 cursor-pointer"
  ></canvas>

  <button @click="playSecurityDemo" class="play-btn">
    ▶️ Play Security Demo
  </button>
</template>

<script setup>
import { ref } from "vue";

const popupMessage = ref("");
const securityCanvas = ref(null);

const openSecurePopup = () => {
  const popup = window.open("", "_blank", "width=400,height=300");
  popup.document.write(`
    <html><body>
      <h3>Secure Popup</h3>
      <p>This popup demonstrates secure communication.</p>
      <button onclick="parent.postMessage('Hello from popup', '*')">Send Message</button>
    </body></html>
  `);
};

const demonstrateClickjacking = () => {
  const canvas = securityCanvas.value;
  const ctx = canvas.getContext("2d");

  // Draw clickjacking visualization
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.font = "16px Arial";
  ctx.fillText("Clickjacking Protection Active", 10, 100);
};

const playSecurityDemo = () => {
  const canvas = securityCanvas.value;
  const ctx = canvas.getContext("2d");

  // Animate security demonstration
  let frame = 0;
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw frame border
    ctx.strokeStyle = frame % 60 < 30 ? "green" : "red";
    ctx.lineWidth = 3;
    ctx.strokeRect(5, 5, canvas.width - 10, canvas.height - 10);

    ctx.fillStyle = "black";
    ctx.font = "14px Arial";
    ctx.fillText(
      `Frame Security: ${frame % 60 < 30 ? "SAFE" : "BLOCKED"}`,
      10,
      30
    );

    frame++;
    if (frame < 120) requestAnimationFrame(animate);
  };

  animate();
};

// Listen for popup messages
window.addEventListener("message", (event) => {
  popupMessage.value = event.data;
});
</script>
