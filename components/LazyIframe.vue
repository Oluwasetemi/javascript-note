<template>
  <div ref="containerRef" class="relative w-full min-h-[200px]">
    <div
      v-if="!isLoaded"
      class="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer min-h-[200px] transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-400"
      @click="loadIframe"
    >
      <div class="text-center text-gray-500 dark:text-gray-400">
        <div v-if="isLoading" class="flex items-center justify-center">
          <div class="w-10 h-10 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin" />
        </div>
        <div v-else class="flex flex-col items-center gap-2">
          <div class="text-5xl text-blue-500 transition-transform duration-200 hover:scale-110">▶</div>
          <p class="m-0">Click to load iframe</p>
          <small class="text-xs text-gray-400">{{ src }}</small>
        </div>
      </div>
    </div>
    <iframe
      v-show="isLoaded"
      ref="iframeRef"
      :src="isLoaded ? src : undefined"
      :title="title || 'Embedded content'"
      :width="width"
      :height="height"
      :style="style"
      :allow="allow"
      :sandbox="sandbox"
      class="rounded-lg border-0"
      frameborder="0"
      allowfullscreen
      @load="onIframeLoad"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

interface Props {
  src: string
  title?: string
  width?: string | number
  height?: string | number
  allow?: string
  sandbox?: string
  autoLoad?: boolean
  style?: string
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '400',
  autoLoad: false,
})

const iframeRef = ref<HTMLIFrameElement>()
const containerRef = ref<HTMLElement>()
const isLoaded = ref(false)
const isLoading = ref(false)

const loadIframe = async () => {
  if (isLoaded.value || isLoading.value) return
  isLoading.value = true
  await new Promise((resolve) => setTimeout(resolve, 100))
  isLoaded.value = true
  isLoading.value = false
}

const onIframeLoad = () => {
  isLoading.value = false
}

onMounted(() => {
  if (props.autoLoad) {
    const { stop } = useIntersectionObserver(
      containerRef,
      ([{ isIntersecting }]) => {
        if (isIntersecting && !isLoaded.value) {
          loadIframe()
          stop()
        }
      },
      { threshold: 0.1 },
    )
  }
})
</script>
