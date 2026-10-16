<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'

interface ChapterNavigation {
  title: string
  toc: string
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function getFrontmatter(slide: unknown): Record<string, unknown> | undefined {
  if (!isRecord(slide) || !isRecord(slide.frontmatter)) return undefined

  return slide.frontmatter
}

const { currentSlideNo, currentSlideRoute, go, isPrintMode, slides } = useNav()

const currentChapter = computed<ChapterNavigation | undefined>(() => {
  for (let index = currentSlideNo.value - 1; index >= 0; index -= 1) {
    const frontmatter = getFrontmatter(slides.value[index]?.meta?.slide)
    const title = frontmatter?.chapterTitle
    const toc = frontmatter?.chapterToc

    if (typeof title === 'string' && typeof toc === 'string')
      return { title, toc }
  }

  return undefined
})

const currentRouteAlias = computed(
  () => getFrontmatter(currentSlideRoute.value.meta?.slide)?.routeAlias,
)
const isCourseToc = computed(() => currentRouteAlias.value === 'course-toc')
const isChapterToc = computed(
  () => currentRouteAlias.value === currentChapter.value?.toc,
)
</script>

<template>
  <nav
    v-if="!isPrintMode"
    class="absolute top-2 left-2 z-20 flex items-center gap-1 rounded-full border border-black/10 bg-white/75 p-1 shadow-sm backdrop-blur-md dark:border-white/15 dark:bg-black/55"
    aria-label="Table of contents navigation"
  >
    <button
      type="button"
      class="slidev-icon-btn !border-none p-1.5 transition-colors disabled:cursor-default disabled:opacity-35"
      :disabled="isCourseToc"
      :aria-current="isCourseToc ? 'page' : undefined"
      aria-label="Go to the course table of contents"
      title="Course table of contents"
      @click="go('course-toc')"
    >
      <span
        class="i-mdi-format-list-bulleted block text-xl"
        aria-hidden="true"
      />
    </button>

    <span
      v-if="currentChapter"
      class="h-5 w-px bg-black/10 dark:bg-white/15"
      aria-hidden="true"
    />

    <button
      v-if="currentChapter"
      type="button"
      class="slidev-icon-btn !border-none p-1.5 transition-colors disabled:cursor-default disabled:opacity-35"
      :disabled="isChapterToc"
      :aria-current="isChapterToc ? 'page' : undefined"
      :aria-label="`Go to the ${currentChapter.title} table of contents`"
      :title="`${currentChapter.title} table of contents`"
      @click="go(currentChapter.toc)"
    >
      <span
        class="i-mdi-book-open-page-variant-outline block text-xl"
        aria-hidden="true"
      />
    </button>
  </nav>
</template>
