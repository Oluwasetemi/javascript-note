<template>
  <div @dragover.prevent @drop.prevent="handleFileDrop" :class="{
    'border-blue-500 bg-blue-50': isDragging,
    'border-gray-300': !isDragging
  }" class="border-2 border-dashed p-8 text-center min-h-48 transition-colors" @dragenter="isDragging = true"
    @dragleave="isDragging = false">
    <div v-if="!uploadedFiles.length">
      <p class="text-gray-500">📁 Drag & drop files here</p>
      <p class="text-sm text-gray-400">or</p>
      <input ref="fileInput" type="file" multiple @change="handleFileSelect" class="hidden">
      <button @click="$refs.fileInput.click()" class="btn-primary mt-2">
        Choose Files
      </button>
    </div>

    <div v-else>
      <h4 class="font-semibold mb-4">Uploaded Files:</h4>
      <div v-for="file in uploadedFiles" :key="file.name" class="file-item">
        <div class="flex items-center justify-between p-2 bg-gray-100 rounded mb-2">
          <span class="text-sm">{{ file.name }}</span>
          <span class="text-xs text-gray-500">{{ formatFileSize(file.size) }}</span>
        </div>
        <div v-if="file.preview" class="preview-container">
          <img v-if="file.type.startsWith('image/')" :src="file.preview" class="max-w-32 max-h-32 object-cover" />
          <div v-else class="text-preview">{{ file.preview }}</div>
        </div>
      </div>
    </div>
  </div>

  <canvas ref="fileCanvas" width="400" height="200" class="border border-gray-300 mt-4"></canvas>

  <div class="mt-4 flex gap-2">
    <button @click="playFileDemo" class="play-btn">
      ▶️ Play File Processing Demo
    </button>
    <button @click="clearFiles" class="btn-secondary">
      🗑️ Clear Files
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isDragging = ref(false);
const uploadedFiles = ref([]);
const fileCanvas = ref(null);
const fileInput = ref(null);

const handleFileDrop = (e) => {
  isDragging.value = false;
  const files = Array.from(e.dataTransfer.files);
  processFiles(files);
};

const handleFileSelect = (e) => {
  const files = Array.from(e.target.files);
  processFiles(files);
};

const processFiles = async (files) => {
  for (const file of files) {
    const fileData = {
      name: file.name,
      size: file.size,
      type: file.type,
      preview: null,
    };

    // Create preview
    const reader = new FileReader();

    if (file.type.startsWith("image/")) {
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        fileData.preview = e.target.result;
      };
    } else if (file.type.startsWith("text/")) {
      reader.readAsText(file);
      reader.onload = (e) => {
        fileData.preview = e.target.result.substring(0, 100) + "...";
      };
    }

    uploadedFiles.value.push(fileData);
  }
};

const formatFileSize = (bytes) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

const playFileDemo = () => {
  const canvas = fileCanvas.value;
  const ctx = canvas.getContext("2d");

  // Animate file processing
  let progress = 0;
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw progress bar
    ctx.fillStyle = "#e5e7eb";
    ctx.fillRect(50, 80, 300, 20);

    ctx.fillStyle = "#3b82f6";
    ctx.fillRect(50, 80, (progress / 100) * 300, 20);

    // Draw text
    ctx.fillStyle = "black";
    ctx.font = "16px Arial";
    ctx.fillText("File Processing Demo", 50, 60);
    ctx.fillText(`Progress: ${Math.round(progress)}%`, 50, 130);

    // Draw file icons
    ctx.fillStyle = "#10b981";
    for (let i = 0; i < Math.floor(progress / 20); i++) {
      ctx.fillRect(50 + i * 60, 150, 40, 30);
      ctx.fillStyle = "white";
      ctx.fillText("📄", 60 + i * 60, 170);
      ctx.fillStyle = "#10b981";
    }

    progress += 2;
    if (progress <= 100) requestAnimationFrame(animate);
  };

  // Start animation
  animate();
};

const clearFiles = () => {
  uploadedFiles.value = [];
  if (fileInput.value) fileInput.value.value = "";
};
</script>
