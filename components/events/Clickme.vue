<template>
  <div m-auto style="width: 50%" @click="alert('parent')">
    <button border p-4 ml-4 @click="alert('button clicked')">Click me</button>
  </div>
</template>
<script setup>
const alert = (msg) => {
  window.alert(msg)
}
</script>
