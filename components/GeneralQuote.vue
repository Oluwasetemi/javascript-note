<script setup lang="ts">
const props = defineProps({
  quote: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: false,
  },
})
</script>
<template>
  <div>
    <blockquote>
      <p>{{ quote }}</p>
      <footer v-if="url">
        <a :href="url">Source</a>
      </footer>
    </blockquote>
  </div>
</template>

<style scoped>
blockquote {
  border-left: 5px solid #007bff;
  /* Add a left border */
  padding: 10px 20px;
  /* Add padding */
  margin: 20px 0;
  /* Add margin */
  background-color: #f9f9f9;
  /* Light background */
  color: #333;
  /* Text color */
  font-style: italic;
  /* Italicize text */
  --uno: font-hand text-2xl;
}

blockquote p {
  margin: 0;
  /* Remove margin from paragraph inside blockquote */
}

blockquote::before {
  content: '“';
  /* Add a quotation mark before the blockquote */
  font-size: 2em;
  color: #007bff;
  vertical-align: -0.4em;
  margin-right: 10px;
}

blockquote::after {
  content: '”';
  /* Add a quotation mark after the blockquote */
  font-size: 2em;
  color: #007bff;
  vertical-align: -0.4em;
  margin-left: 10px;
}
</style>
