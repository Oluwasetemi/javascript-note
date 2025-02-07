<script setup lang="ts">
import { ref } from 'vue'

const html = ref(`
  <!DOCTYPE HTML>
  <html>
    <head>
      <title>Title</title>
    </head>
    <body>
      Body content
      <!-- comment -->
      <p>Hello World</p>
    </body>
  </html>
`)

const dom = new DOMParser().parseFromString(html.value, 'text/html')

// handle html and its children
const htmlChildren = Array.from(dom.documentElement.children)
const headChildren = Array.from(dom.head.childNodes)
const bodyChildren = Array.from(dom.body.childNodes)
</script>

<template>
  <div class="DOM px-2 h-50 w-full overflow-auto border">
    <!-- <h1>DOM</h1> -->
    <!-- <pre>{{ html }}</pre> -->
    <details>
      <summary>HTML</summary>
      <details ml-5 v-for="(child, index) in htmlChildren" :key="index">
        <summary>{{ child.tagName }}</summary>
        <details
          v-if="child.tagName == 'HEAD'"
          ml-5
          v-for="(headChild, hIndex) in headChildren"
          :key="hIndex"
        >
          <summary>{{ headChild.tagName || headChild.nodeName }}</summary>
          <p>{{ headChild.textContent.replaceAll('\n', 'n') }}</p>
        </details>
        <details
          v-if="child.tagName == 'BODY'"
          ml-5
          v-for="(bodyChild, bIndex) in bodyChildren"
          :key="bIndex"
        >
          <summary>{{ bodyChild.nodeName }}</summary>
          <p>{{ bodyChild.textContent.replaceAll('\n', 'n') }}</p>
        </details>
      </details>
    </details>
  </div>
</template>
