<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const sections = [
  { slug: 'fundamentals', name: 'Fundamentals', icon: '🧱' },
  { slug: 'code-quality', name: 'Code Quality', icon: '✅' },
  { slug: 'data-types', name: 'Data Types', icon: '🔢' },
  { slug: 'functions', name: 'Functions', icon: '⚙️' },
  { slug: 'objects', name: 'Objects', icon: '📦' },
  { slug: 'prototypes', name: 'Prototypes', icon: '🔗' },
  { slug: 'error-handling', name: 'Error Handling', icon: '🚨' },
  { slug: 'promises-async', name: 'Promises & Async', icon: '⏳' },
  { slug: 'modules', name: 'Modules', icon: '📁' },
  { slug: 'nice-to-know', name: 'Nice to Know', icon: '💡' },
  { slug: 'document', name: 'Document (DOM)', icon: '🌐' },
  { slug: 'events', name: 'Events', icon: '🖱️' },
  { slug: 'ui-events', name: 'UI Events', icon: '🎨' },
  { slug: 'form-controls', name: 'Form Controls', icon: '📝' },
  { slug: 'document-resource-loading', name: 'Resource Loading', icon: '📂' },
  { slug: 'nice-to-know-browser', name: 'Browser APIs', icon: '🌍' },
  { slug: 'beyond-beginner', name: 'Beyond Beginner', icon: '🚀' },
  { slug: 'network-requests', name: 'Network Requests', icon: '📡' },
  { slug: 'web-components', name: 'Web Components', icon: '🧩' },
  { slug: 'regular-expressions', name: 'Regular Expressions', icon: '🔍' },
]
</script>
<template>
  <div class="min-h-screen bg-[#0f0f0f] text-[#e5e5e5] font-sans py-10 px-5">
    <div class="max-w-4xl mx-auto">
      <div class="mb-10">
        <button
          class="bg-transparent border border-[#444] text-[#999] px-3.5 py-1.5 rounded-md cursor-pointer text-sm mb-5 transition-colors duration-150 hover:border-[#666] hover:text-[#ccc]"
          @click="router.push('/')"
        >
          ← Back to slides
        </button>
        <h1 class="m-0 text-4xl font-bold mb-2">
          <span class="text-gradient">Sections</span>
        </h1>
        <p class="m-0 text-[#666] text-sm">JavaScript Class Notes — AltSchool Africa</p>
      </div>

      <div class="grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-3 mb-10">
        <button
          v-for="section in sections"
          :key="section.slug"
          class="flex flex-col items-center gap-2 py-5 px-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl cursor-pointer transition-colors duration-150 text-[#e5e5e5] font-sans hover:bg-[#222] hover:border-blue-500"
          @click="router.push(`/#/${section.slug}`)"
        >
          <span class="text-2xl">{{ section.icon }}</span>
          <span class="text-sm font-medium text-center leading-tight">{{ section.name }}</span>
        </button>
      </div>

      <div class="flex gap-4 pt-6 border-t border-[#2a2a2a]">
        <button class="bg-transparent border-0 p-0 text-blue-500 text-sm cursor-pointer transition-opacity duration-150 hover:opacity-75" @click="router.push('/changelog')">📋 Changelog</button>
        <button class="bg-transparent border-0 p-0 text-blue-500 text-sm cursor-pointer transition-opacity duration-150 hover:opacity-75" @click="router.push('/playground')">▶ Playground</button>
      </div>
    </div>
  </div>
</template>

