---
# theme: seriph
background: https://res.cloudinary.com/drnqdd87d/image/upload/f_auto/nmgakkzd3lmlibnfosps
title: JavaScript Class Note
info: |
  AltSchool JavaScript Class Notes
  making of world class developers
  join at [AltSchool Africa](https://altschoolafrica.com)
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: slide-left
mdc: true
hideInToc: true
---

# JavaScript [Class]{.text-8xl.font-hand.mr-4.text-gradient} Notes

JavaScript Class Note

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Are you ready to build functional web app UI with your HTML and CSS skills? Press <kbd>space</kbd> on your keyboard <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/oluwasetemi/javascript-note" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
  <a href="https://github.com/Oluwasetemi/javascript-note/releases" target="_blank" alt="Download" title="Download PDF or PPTX version of the slide"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-download />
  </a>
</div>

<!--
Notes: show on the speaker view
-->
---
hideInToc: true
---

# Table of contents

<Toc columns="2" minDepth="1" maxDepth="2"></Toc>
---

# Getting Started With JavaScript?

---
hideInToc: true
---

# What is JavaScript?

---
name: Fundamentals
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left transition duration-500 :class="$clicks <= 2 ? 'scale-150' : 'op50'">
  <span v-click>Fundamentals of </span>
  <span>JavaScript</span>
  <sup v-click>let, functions, loop, if</sup>
</div>
<div mt1 forward:delay-300 v-click>Building Blocks 🧱</div>
</h1>

---
src: ./pages/fundamentals.md
---


---
name: Code Quality
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left transition duration-500 :class="$clicks <= 2 ? 'scale-150' : 'op50'">
  <span v-click>Code </span>
  <span>Quality </span>
  <sup v-click>linter, formater, test, types</sup>
</div>
<div mt1 forward:delay-300 v-click>Importance Spice for Quality Development</div>
</h1>

---
src: ./pages/code-quality.md
---

---
name: Data Types
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left transition duration-500 :class="$clicks <= 2 ? 'scale-150' : 'op50'">
  <span v-click>Data </span>
  <span>Types </span>
  <sup v-click>string, bigint, numbers, object</sup>
</div>
<div mt1 forward:delay-300 v-click>Type of Data</div>
</h1>

---
src: ./pages/data-types.md
---

---
name: Functions
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left transition duration-500 :class="$clicks <= 2 ? 'scale-150' : 'op50'">
  <span v-click>Functions </span>
  <span>in JavaScript </span>
  <sup v-click>recursion, closure, arrow</sup>
</div>
<div mt1 forward:delay-300 v-click>Deep Dive into Functions</div>
</h1>


---
src: ./pages/functions.md
---


---
name: Objects
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left transition duration-500 :class="$clicks <= 2 ? 'scale-150' : 'op50'">
  <span v-click>Object in </span>
  <span> JavaScript </span>
  <sup v-click>{}, property, value</sup>
</div>
<div mt1 forward:delay-300 v-click>Dive Deep into Object</div>
</h1>

---
src: ./pages/objects.md
---

---
name: Prototypes
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left transition duration-500 :class="$clicks <= 2 ? 'scale-150' : 'op50'">
  <span v-click>Prototypal </span>
  <span>Inheritance</span>
  <sup v-click>recursion, closure, arrow</sup>
</div>
<div mt1 forward:delay-300 v-click>Understanding the Prototypal Nature of JavaScript</div>
</h1>

---
src: ./pages/prototypes.md
---

---
name: Error Handling
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left transition duration-500 :class="$clicks <= 2 ? 'scale-150' : 'op50'">
  <span v-click>Error </span>
  <span>Handling </span>
  <sup v-click>e.message, Error, SyntaxError</sup>
</div>
<div mt1 forward:delay-300 v-click>Handle your mistakes</div>
</h1>

---
src: ./pages/error-handling.md
---


---
name: Promises and Async
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left transition duration-500 :class="$clicks <= 2 ? 'scale-150' : 'op50'">
  <span v-click>Promise and </span>
  <span>Async </span>
  <sup v-click>fetch, async, await</sup>
</div>
<div mt1 forward:delay-300 v-click>Asynchronous Programming</div>
</h1>

---
src: ./pages/promises-async.md
---

<h1 flex="~ col">
<div text-2xl origin-top-left transition duration-500 :class="$clicks <= 2 ? 'scale-150' : 'op50'">
  <span v-click>Modules in</span>
  <span> JavaScript </span>
  <sup v-click>export, import, dynamic imports</sup>
</div>
<div mt1 forward:delay-300 v-click>Organize your code</div>
</h1>

---
src: ./pages/modules.md
---

---
name: Nice to Know Basics
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left transition duration-500 :class="$clicks <= 2 ? 'scale-150' : 'op50'">
  <span v-click>Nice to know </span>
  <span>Concepts </span>
  <sup v-click>generators, proxy, currying, 🦄code</sup>
</div>
<div mt1 forward:delay-300 v-click>Async Iterators, Eval, and Reflect</div>
</h1>

---
src: ./pages/nice-to-know.md
---

---
name: Document
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left transition duration-500 :class="$clicks <= 2 ? 'scale-150' : 'op50'">
  <span v-click>document.</span>
  <span>*</span>
  <sup v-click>document, window, navigator</sup>
</div>
<div mt1 forward:delay-300 v-click>Document Object Model</div>
</h1>

---
src: ./pages/document.md
---

---
name: Events
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left transition duration-500 :class="$clicks <= 2 ? 'scale-150' : 'op50'">
  <span v-click>browser </span>
  <span>event</span>
  <sup v-click>e.target, bubbling, capturing</sup>
</div>
<div mt1 forward:delay-300 v-click>Handling Events In JavaScript</div>
</h1>

---
src: ./pages/events.md
---

---
name: UI Events
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left transition duration-500 :class="$clicks <= 2 ? 'scale-150' : 'op50'">
  <span v-click>ui </span>
  <span>event</span>
  <sup v-click>mouse, pointer, keyboard, scroll</sup>
</div>
<div mt1 forward:delay-300 v-click>Handling UI Events</div>
</h1>

---
src: ./pages/ui-events.md
---

---
name: Forms
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left transition duration-500 :class="$clicks <= 2 ? 'scale-150' : 'op50'">
  <span v-click>form </span>
  <span>controls</span>
  <sup v-click>methods, form-events, validation</sup>
</div>
<div mt1 forward:delay-300 v-click>Controlling Forms In JavaScript</div>
</h1>

---
src: ./pages/form-controls.md
---

---
name: Resource Loading
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left transition duration-500 :class="$clicks <= 2 ? 'scale-150' : 'op50'">
  <span v-click>resource </span>
  <span>loading</span>
  <sup v-click>page, load, unload, scripts</sup>
</div>
<div mt1 forward:delay-300 v-click>Document Resource Loading</div>
</h1>

---
src: ./pages/document-resource-loading.md
---

---
name: Events
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left transition duration-500 :class="$clicks <= 2 ? 'scale-150' : 'op50'">
  <span v-click>deep </span>
  <span>browser stuffs</span>
  <sup v-click>web apis, popups, file, local storage</sup>
</div>
<div mt1 forward:delay-300 v-click>Frames & Windows, Storing Data, Animation</div>
</h1>

---
src: ./pages/nice-to-know-browser.md
---

---
name: Events
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left transition duration-500 :class="$clicks <= 2 ? 'scale-150' : 'op50'">
  <span v-click>beyond </span>
  <span>beginner browser js</span>
  <sup v-click>observers, workers, event loop</sup>
</div>
<div mt1 forward:delay-300 v-click>Going Deeper</div>
</h1>

---
src: ./pages/beyond-beginner.md
---

---
name: Events
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left transition duration-500 :class="$clicks <= 2 ? 'scale-150' : 'op50'">
  <span v-click>network </span>
  <span>requests 🛜</span>
  <sup v-click>fetch, sockets, server-sent events</sup>
</div>
<div mt1 forward:delay-300 v-click>Making API Calls</div>
</h1>

---
src: ./pages/network-requests.md
---

---
name: Events
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left transition duration-500 :class="$clicks <= 2 ? 'scale-150' : 'op50'">
  <span v-click>web </span>
  <span>components</span>
  <sup v-click>shadow dom, templates, slots</sup>
</div>
<div mt1 forward:delay-300 v-click>Custom HTML Element</div>
</h1>

---
src: ./pages/web-components.md
---

---
name: Events
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left transition duration-500 :class="$clicks <= 2 ? 'scale-150' : 'op50'">
  <span v-click>regular </span>
  <span class="text-yellow font-hand">expressions</span>
  <sup v-click>patters, flags, anchors, boundary</sup>
</div>
<div mt1 forward:delay-300 text-gradient v-click>Pattern Matching In JavaScript</div>
</h1>

---
src: ./pages/regular-expressions.md
---

---

# Assignments

<ul>
  <li ><a @click="$slidev.nav.next()">Assignment 1</a></li>
  <!-- <li ><a @click="$nav.currentPage + 1">Assignment 2</a></li> -->
</ul>

---
hideInToc: true
---

# Contributors


<!-- - [Adebosin Ridwan](https://github.com/RidwanAdebosin)
- [Olubebe Faith](https://github.com/Olubebe) -->
