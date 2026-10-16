---
background: https://res.cloudinary.com/drnqdd87d/image/upload/f_auto/nmgakkzd3lmlibnfosps
title: JavaScript Class Note
titleTemplate: '%s - Oluwasetemi Ojo'
info: |
  AltSchool JavaScript Class Notes
  making of world class developers
  join at [AltSchool Africa](https://altschoolafrica.com)
author: Oluwasetemi
download: false
browserExporter: true
exportFilename: javascript-note
export:
  format: pdf
  timeout: 600000
  dark: false
  withClicks: false
  withToc: false
mermaid:
  theme: default
  timeout: 180000
# TODO: add a svg favicon
# favicon: https://oluwasetemi.dev/favicon-32x32.png
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: none
mdc: true
hideInToc: true
overviewSnapshots: false
selectable: true
lineNumbers: true
monacoTypesIgnoreDefaults: true
---

# JavaScript [Class]{.text-8xl.font-hand.mr-4.text-gradient} Notes

## JavaScript Class Note

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Are you ready to build functional web app UIs with your HTML and CSS skills? Press <kbd>space</kbd> on your keyboard <carbon:arrow-right class="inline"/>
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
routeAlias: course-toc
---

# Table of contents

<Toc columns="2" minDepth="1" maxDepth="2"></Toc>

<div class="flex gap-3 mt-6">
  <button @click="$router.push('/routes')" class="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm cursor-pointer hover:bg-blue-500/20 transition-colors flex items-center gap-1.5"><span class="i-mdi-format-list-bulleted inline-block" /> All Sections</button>
  <button @click="$router.push('/playground')" class="px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm cursor-pointer hover:bg-green-500/20 transition-colors flex items-center gap-1.5"><span class="i-mdi-code-braces inline-block" /> JS/TS Playground</button>
  <button @click="$router.push('/changelog')" class="px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm cursor-pointer hover:bg-purple-500/20 transition-colors flex items-center gap-1.5"><span class="i-mdi-history inline-block" /> Changelog</button>
</div>

---
hideInToc: true
---

# Getting Started With JavaScript?

<div />

JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.

Mastering JavaScript is a long journey, but it is worth the effort. We will take a practical approach: first building a strong foundation in the language, then learning how JavaScript works in the browser—its original environment before it expanded to many other platforms.

JavaScript skills can prepare you for frontend, backend, mobile, desktop, and even game development. So, let's get started. These notes include features such as code highlighting, code execution, and drawing on slides. You can also export the slides to PDF or PPTX. Enjoy the journey. <span class="i-mdi-rocket inline-block" />.

> We can't wait to see you at the top.

---
hideInToc: true
---

# What is JavaScript?

<div />

To get started with JavaScript, you need to understand what JavaScript is. JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. ECMAScript is the standard that JavaScript is based on - ECMAScript 262.

To a beginner, JavaScript is a programming language that is used to make web pages interactive. It is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and much more.

Frontend developers use JavaScript to create interactive user interfaces and add functionality such as form validation and animations to web pages.

Backend developers use JavaScript to build server-side applications, create APIs and CLI tools, handle requests, and interact with databases.

Full-stack developers use JavaScript to create complete web applications, from the user interface to the server-side logic.

---
name: Fundamentals
chapterTitle: Fundamentals
chapterToc: chapter-fundamentals
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left>
  <span>Fundamentals of </span>
  <span>JavaScript</span>
  <sup>let, functions, loop, if</sup>
</div>
<div mt1>Building Blocks <span class="i-mdi-view-grid inline-block" /></div>
</h1>

---
src: ./pages/fundamentals.md
---

---
name: Code Quality
chapterTitle: Code Quality
chapterToc: chapter-code-quality
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left>
  <span>Code </span>
  <span>Quality </span>
  <sup>linter, formater, test, types</sup>
</div>
<div mt1>Importance Spice for Quality Development</div>
</h1>

---
src: ./pages/code-quality.md
---

---
name: Data Types
chapterTitle: Data Types
chapterToc: chapter-data-types
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left>
  <span>Data </span>
  <span>Types </span>
  <sup>string, bigint, numbers, object</sup>
</div>
<div mt1>Type of Data</div>
</h1>

---
src: ./pages/data-types.md
---

---
name: Functions
chapterTitle: Functions
chapterToc: chapter-functions
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left>
  <span>Functions </span>
  <span>in JavaScript </span>
  <sup>recursion, closure, arrow</sup>
</div>
<div mt1>Deep Dive into Functions</div>
</h1>

---
src: ./pages/functions.md
---

---
name: Objects
chapterTitle: Objects
chapterToc: chapter-objects
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left>
  <span>Object in </span>
  <span> JavaScript </span>
  <sup>{}, property, value</sup>
</div>
<div mt1>Dive Deep into Object</div>
</h1>

---
src: ./pages/objects.md
---

---
name: Prototypes
chapterTitle: Prototypes
chapterToc: chapter-prototypes
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left>
  <span>Prototypal </span>
  <span>Inheritance</span>
  <sup>recursion, closure, arrow</sup>
</div>
<div mt1>Understanding the Prototypal Nature of JavaScript</div>
</h1>

---
src: ./pages/prototypes.md
---

---
name: Error Handling
chapterTitle: Error Handling
chapterToc: chapter-error-handling
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left>
  <span>Error </span>
  <span>Handling </span>
  <sup>e.message, Error, SyntaxError</sup>
</div>
<div mt1>Handle your mistakes</div>
</h1>

---
src: ./pages/error-handling.md
---

---
name: Promises and Async
chapterTitle: Promises and Async
chapterToc: chapter-promises-async
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left>
  <span>Promise and </span>
  <span>Async </span>
  <sup>fetch, async, await</sup>
</div>
<div mt1>Asynchronous Programming</div>
</h1>

---
src: ./pages/promises-async.md
---

---
name: Modules and Dynamic Imports
chapterTitle: Modules and Dynamic Imports
chapterToc: chapter-modules
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left>
  <span>Modules in</span>
  <span> JavaScript </span>
  <sup>export, import, dynamic imports</sup>
</div>
<div mt1>Organize your code</div>
</h1>

---
src: ./pages/modules.md
---

---
name: Nice to Know Basics
chapterTitle: Nice to Know Basics
chapterToc: chapter-nice-to-know
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left>
  <span>Nice to know </span>
  <span>Concepts </span>
  <sup>generators, proxy, currying, <span class="i-mdi-auto-fix inline-block" />code</sup>
</div>
<div mt1>Async Iterators, Eval, and Reflect</div>
</h1>

---
src: ./pages/nice-to-know.md
---

---
name: Document
chapterTitle: Document
chapterToc: chapter-document
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left>
  <span>document.</span>
  <span>*</span>
  <sup>document, window, navigator</sup>
</div>
<div mt1>Document Object Model</div>
</h1>

---
src: ./pages/document.md
---

---
name: Events
chapterTitle: Events
chapterToc: chapter-events
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left>
  <span>browser </span>
  <span>event</span>
  <sup>e.target, bubbling, capturing</sup>
</div>
<div mt1>Handling Events In JavaScript</div>
</h1>

---
src: ./pages/events.md
---

---
name: UI Events
chapterTitle: UI Events
chapterToc: chapter-ui-events
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left>
  <span>ui </span>
  <span>event</span>
  <sup>mouse, pointer, keyboard, scroll</sup>
</div>
<div mt1>Handling UI Events</div>
</h1>

---
src: ./pages/ui-events.md
---

---
name: Forms
chapterTitle: Forms
chapterToc: chapter-forms
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left>
  <span>form </span>
  <span>controls</span>
  <sup>methods, form-events, validation</sup>
</div>
<div mt1>Controlling Forms In JavaScript</div>
</h1>

---
src: ./pages/form-controls.md
---

---
name: Resource Loading
chapterTitle: Resource Loading
chapterToc: chapter-resource-loading
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left>
  <span>resource </span>
  <span>loading</span>
  <sup>page, load, unload, scripts</sup>
</div>
<div mt1>Document Resource Loading</div>
</h1>

---
src: ./pages/document-resource-loading.md
---

---
name: Web APIs
chapterTitle: Web APIs
chapterToc: chapter-web-apis
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left>
  <span>deep </span>
  <span>browser stuffs</span>
  <sup>web apis, popups, file, local storage</sup>
</div>
<div mt1>Frames & Windows, Storing Data, Animation</div>
</h1>

---
src: ./pages/nice-to-know-browser.md
---

---
name: Beyond Beginner JavaScript
chapterTitle: Beyond Beginner JavaScript
chapterToc: chapter-beyond-beginner
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left>
  <span>beyond </span>
  <span>beginner browser js</span>
  <sup>observers, workers, event loop</sup>
</div>
<div mt1>Going Deeper</div>
</h1>

---
src: ./pages/beyond-beginner.md
---

---
name: Making API Calls
chapterTitle: Making API Calls
chapterToc: chapter-network-requests
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left>
  <span>network </span>
  <span>requests <span class="i-mdi-wifi inline-block" /></span>
  <sup>fetch, sockets, server-sent events</sup>
</div>
<div mt1>Making API Calls</div>
</h1>

---
src: ./pages/network-requests.md
---

---
name: Web Components
chapterTitle: Web Components
chapterToc: chapter-web-components
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left>
  <span>web </span>
  <span>components</span>
  <sup>shadow dom, templates, slots</sup>
</div>
<div mt1>Custom HTML Elements</div>
</h1>

---
src: ./pages/web-components.md
---

---
name: Regular Expressions
chapterTitle: Regular Expressions
chapterToc: chapter-regular-expressions
layout: center
---

<h1 flex="~ col">
<div text-2xl origin-top-left>
  <span>regular </span>
  <span class="text-yellow font-hand">expressions</span>
  <sup>patterns, flags, anchors, boundaries</sup>
</div>
<div mt1 text-gradient>Pattern Matching In JavaScript</div>
</h1>

---
src: ./pages/regular-expressions.md
---

---
name: Appendix and Resources
chapterTitle: Appendix and Resources
chapterToc: chapter-appendix
layout: center
---

# Appendix and Resources

Assignments and contributor acknowledgements.

---
hideInToc: true
routeAlias: chapter-appendix
---

# Appendix and Resources

- <a @click="$slidev.nav.next()">Assignments</a>
- <a @click="$slidev.nav.go($nav.currentPage + 2)">Contributors</a>

---
hideInToc: true
---

# Assignments

<ul>
  <li><a @click="$slidev.nav.next()">Assignment 1</a></li>
  <!-- <li><a @click="$nav.currentPage + 1">Assignment 2</a></li> -->
</ul>

---
hideInToc: true
---

# Contributors

- {@Rolalove}
- {@Racheal-cloud}
- {@kolapowariz}
- {@ChidinmaNwosu}
- {@RidwanAdebosin}
- {@Olubebe}
- {@Joker4mas}
- {@OladimejiPraise}
- {@Aycrescendo}
- {@Oluwatosin-Ajayi}
- {@Ayanfe8}
