<template>
  <div m-auto style="width: 50%">
    <button id="helloEvent" border p-4 ml-4 @click="handleClick">
      Click me
    </button>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'

let elem = ref(null)

onMounted(() => {
  elem = document.querySelector('#helloEvent')
  elem.addEventListener('hello', handleHello)
})

const alert = (msg) => {
  window.alert(msg)
}

let helloEvent = new Event('hello', { bubbles: true, cancelable: true })
const handleHello = (event) => {
  console.log('hello event dispatched from ' + event.target.tagName)
  alert('Hello from ' + event.target.tagName)
}
const handleClick = () => {
  console.log('dispatched the hello event when the user clicked the button')
  elem.dispatchEvent(helloEvent)
}
</script>
