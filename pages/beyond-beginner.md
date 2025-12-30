---
layout: center
transition: slide-up
hideInToc: true
---

# Beyond Beginner

<TocIcon />

<div mt-2 />

- <a @click="$slidev.nav.go($nav.currentPage+1)">Mutation Observer</a>
- <a @click="$slidev.nav.go($nav.currentPage+2)">Resize Observer</a>
- <a @click="$slidev.nav.go($nav.currentPage+3)">Intersection Observer</a>
- <a @click="$slidev.nav.go($nav.currentPage+4)">Selection API</a>
- <a @click="$slidev.nav.go($nav.currentPage+5)">Range API</a>
- <a @click="$slidev.nav.go($nav.currentPage+6)">Web Workers</a>
- <a @click="$slidev.nav.go($nav.currentPage+8)">Service Workers</a>
- <a @click="$slidev.nav.go($nav.currentPage+10)">Event loop: microtasks and macrotasks</a>

---
hideInToc: true
---

# Mutation [Observer]{.text-red.transition-colors.duration-50}

<div></div>

<div text-sm>
Mutation Observers allow you to get notified when DOM changes occur. They are particularly useful when you need to react to changes dynamically rather than polling for changes.
</div>

<div class="grid grid-cols-2 gap-4 text-xs">
<div>

<div class="text-base font-bold mb-2">Overview</div>

<div text-xs>
MutationObserver provides the ability to watch for changes being made to the DOM tree:
</div>

<ul class="text-[10px] leading-tight">
<li ><strong>Child nodes</strong> being added/removed</li>
<li><strong>Attributes</strong> being modified</li>
<li><strong>Text content</strong> changes</li>
<li><strong>Subtree</strong> modifications</li>
</ul>

<div class="text-base mb-2 mt-3">Configuration Options</div>

```js
const config = {
  childList: true,    // Children
  attributes: true,   // Attributes
  characterData: true,// Text
  subtree: true,      // Descendants
  attributeOldValue: true
}
```

<div class="text-base mb-1 mt-1">Performance Tips</div>

<ul class="text-[10px] leading-tight" >
<li v-click>Use specific targets to minimize overhead</li>
<li v-click>Disconnect observers when no longer needed</li>
<li v-click>Batch DOM changes to reduce callbacks</li>
</ul>

</div>
<div>


<div style="font-size: 0.65rem;">

```html {monaco}
<div id="box"></div> <button onclick="add()">Add</button>
<script>
  const observer = new MutationObserver(
    (mutations) => {
      mutations.forEach((m) => {
        // console.log('Type and Added', m.type, m.addedNodes.length)
      })
    })

  const config = { childList: true, subtree: true};
  const target = document.getElementById('box');
  observer.observe(target, config);

  function add() {
    const div = document.createElement('div')
    div.textContent = 'New!'
    target.appendChild(div)
  }
</script>
```

</div>

</div>
</div>



---
hideInToc: true
---

# Resize [Observer]{.text-red.transition-colors.duration-50}

<div></div>

<div text-sm>
Resize Observers provide notifications when an element's content rectangle changes size, allowing dynamic layout updates without the need for polling or window resize events.
</div>

<div class="grid grid-cols-2 gap-4 text-xs">
<div>

<div class="text-base mb-2">Overview</div>

<div text-xs>
ResizeObserver watches for changes to:
</div>

<ul text-xs leading-tight>
<li><strong>Element dimensions</strong> (width, height)</li>
<li><strong>Content box</strong> size</li>
<li><strong>Border box</strong> size</li>
<li><strong>Device pixel</strong> content box size</li>
</ul>

<div class="text-base mb-2 mt-3">Use Cases</div>

<ul text-xs leading-tight>
<li>Responsive components</li>
<li>Dynamic chart/graph updates</li>
<li>Textarea auto-resize</li>
<li>Container query polyfills</li>
<li>Performance monitoring</li>
</ul>

<h3 class="text-base mb-2 mt-3">Performance Tips</h3>

<ul text-xs leading-tight>
<li v-click>Throttle callbacks for frequently resizing elements</li>
<li v-click>Disconnect observers when components unmount</li>
<li v-click>Use requestAnimationFrame for DOM updates</li>
</ul>

</div>
<div>

<h3 class="text-base mb-2">Demo</h3>

<div style="font-size: 0.65rem !important;">

```html {monaco}
<div id="box" style="resize: both; overflow: auto; width: 150px; height: 100px; border: 2px solid blue; padding: 10px;">
  Resize me!
</div>
<div id="output"></div>
<script>
  const ro = new ResizeObserver(e => {
    for (let entry of e) {
      const { width, height } = entry.contentRect
      document.getElementById('output')
        .innerHTML = `W: ${width.toFixed(0)}px H: ${height.toFixed(0)}px`
    }
  })

  ro.observe(document.getElementById('box'))
</script>
```

</div>

</div>
</div>




---
hideInToc: true
---

# Intersection [Observer]{.text-red.transition-colors.duration-50}

<div></div>

<div text-sm>
Intersection Observers provide a way to asynchronously observe changes in the intersection of a target element with an ancestor element or the viewport - perfect for lazy loading, infinite scroll, and visibility tracking.
</div>

<div class="grid grid-cols-3 gap-3 text-xs">
<div>

<h3 class="text-base mb-2">Overview</h3>

<div text-xs>
IntersectionObserver detects when:
</div>

<ul text-xs leading-tight>
<li><strong>Element enters</strong> the viewport</li>
<li><strong>Element exits</strong> the viewport</li>
<li><strong>Intersection ratio</strong> changes</li>
<li><strong>Element crosses</strong> thresholds</li>
</ul>

<h3 class="text-base mb-1 mt-1">Common Use Cases</h3>

<ul text-xs leading-tight>
<li>Lazy loading images/content</li>
<li>Infinite scroll pagination</li>
<li>Ad viewability tracking</li>
<li>Animation triggers on scroll</li>
<li>Analytics and impressions</li>
</ul>

<h3 class="text-base mb-1 mt-1">Performance Tips</h3>

<ul text-xs leading-tight>
<li v-click>Set thresholds appropriately</li>
<li v-click>Use rootMargin for predictive loading</li>
<li v-click>Disconnect when removed from DOM</li>
</ul>

</div>
<div>

<h3 class="text-base mb-2">HTML Demo</h3>

<div style="font-size: 0.65rem;">

```html
<div style="height: 200px; overflow: auto; border: 1px solid #ccc;">
  <div style="height: 150px;">
    Scroll down...
  </div>
  <div id="target" style="padding: 20px; background: lightblue;">
    Watch me! 👀
  </div>
  <div style="height: 150px;"></div>
</div>
<div id="status"></div>
```

</div>

</div>
<div>

<h3 class="text-base mb-1">JavaScript</h3>

<div style="font-size: 0.65rem !important;">

```js {monaco-run} {autorun: false}
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach(e => {
      const status = document.getElementById('status');

      status.innerHTML = `Visible: ${e.isIntersecting}<br> Ratio: ${(e.intersectionRatio * 100).toFixed(0)}%`

      e.target.style.background =
        e.isIntersecting
          ? 'lightgreen'
          : 'lightblue'
    })
  },
  { threshold: [0, 0.5, 1] }
)

const target = document.getElementById('target');
io.observe(target)
```

</div>

</div>
</div>

---
hideInToc: true
---

# Selection API

<div></div>

<div text-sm>
The Selection API allows you to programmatically select text content in the DOM. Essential for building rich text editors, text selection tools, and copy/paste functionality.
</div>

<div class="grid grid-cols-2 gap-4 text-xs">
<div>

<h3 class="text-base mb-2">Selection Demo</h3>

<div style="font-size: 0.65rem;">

```html {monaco}
<p id="text">This is some selectable text for demonstration.</p>
<button onclick="selectText()"> Select All </button>
<button onclick="clearSel()"> Clear </button>
<script>
  function selectText() {
    const el = document.getElementById('text');
    const sel = window.getSelection()
    const range = document.createRange()
    range.selectNodeContents(el)
    sel.removeAllRanges()
    sel.addRange(range)
  }

  function clearSel() {
    window.getSelection().removeAllRanges()
  }
</script>
```

</div>

</div>

<div>

<div class="grid grid-cols-2 gap-3 mt-0.5">
<div>
<h3 class="text-base mb-2">Key Concepts</h3>

<ul class="text-[9px] leading-tight">
<li><strong>window.getSelection()</strong>: Get current selection</li>
<li><strong>removeAllRanges()</strong>: Clear all selections</li>
<li><strong>addRange()</strong>: Add range to selection</li>
<li><strong>selectNodeContents()</strong>: Select all content</li>
<li><strong>toString()</strong>: Get selected text</li>
<li><strong>getRangeAt(index)</strong>: Get range at index</li>
<li><strong>rangeCount</strong>: Number of ranges</li>
<li><strong>isCollapsed</strong>: Check if collapsed</li>
</ul>
</div>


<div style="font-size: 0.65rem;">
<h3 class="text-base mb-2 mt-3">Common Methods</h3>

```js lineNumbers="false"
// Get selected text
const text = window.getSelection().toString()
// Get selection range
const range = window.getSelection().getRangeAt(0)
// Check if anything is selected
const hasSelection = window.getSelection().rangeCount > 0
```

</div>



</div>

<div class="grid grid-cols-2 gap-3 mt-3">
<div>

<h3 class="text-base mb-1">Performance Tips</h3>

<ul text-xs leading-tight>
<li v-click>Cache selection objects</li>
<li v-click>Clear when done</li>
<li v-click>Use <code>selectionchange</code> event</li>
<li v-click>Avoid frequent calls</li>
</ul>

</div>
<div>

<h3 class="text-base mb-1">Use Cases</h3>

<ul text-xs leading-tight>
<li>Rich text editors</li>
<li>Copy/paste functionality</li>
<li>Text annotation tools</li>
<li>Selection-based actions</li>
</ul>

</div>
</div>

</div>
</div>

---
hideInToc: true
---

# Range API

<div></div>

<div text-sm>
The Range API allows you to manipulate portions of the document. Perfect for text highlighting, content extraction, and DOM manipulation within specific boundaries.
</div>

<div class="grid grid-cols-2 gap-4 text-xs">
<div>

<h3 class="text-base mb-2">Range Manipulation Demo</h3>

<div style="font-size: 0.65rem;">

```html {monaco}
<div id="content"> Hello <strong>World</strong>! </div>
<button onclick="highlight()"> Highlight </button>
<button onclick="reset()">Reset</button>
<script>
  function highlight() {
    const range = document.createRange()
    const node = document.getElementById('content').firstChild
    range.setStart(node, 0)
    range.setEnd(node, 5)
    const span = document.createElement('span')
    span.style.backgroundColor = 'yellow'
    range.surroundContents(span)
  }

  function reset() {
    document.getElementById('content').innerHTML = 'Hello <strong>World</strong>!'
  }
</script>
```

</div>

</div>

<div>

<div class="grid grid-cols-2 gap-3 mt-0.5">
<div>
<h3 class="text-base mb-2">Key Concepts</h3>

<ul class="text-[9px] leading-tight">
<li><strong>document.createRange()</strong>: Create new range</li>
<li><strong>setStart(node, offset)</strong>: Set start position</li>
<li><strong>setEnd(node, offset)</strong>: Set end position</li>
<li><strong>surroundContents()</strong>: Wrap with element</li>
<li><strong>extractContents()</strong>: Remove and return</li>
<li><strong>cloneContents()</strong>: Copy content</li>
<li><strong>deleteContents()</strong>: Delete content</li>
<li><strong>selectNode()</strong>: Select entire node</li>
<li><strong>collapse()</strong>: Collapse to point</li>
</ul>
</div>


<div style="font-size: 0.65rem;">
<h3 class="text-base mb-2 mt-3">Common Methods</h3>

```js lineNumbers="false"
// Create range
const range = document.createRange()
// Select node contents
range.selectNodeContents(element)
// Extract text
const text = range.toString()
// Delete content
range.deleteContents()
```

</div>



</div>

<div class="grid grid-cols-2 gap-3 mt-3">
<div>

<h3 class="text-base mb-1">Performance Tips</h3>

<ul text-xs leading-tight>
<li v-click>Reuse ranges when possible</li>
<li v-click>Detach with <code>detach()</code></li>
<li v-click>Batch DOM operations</li>
<li v-click>Use DocumentFragment</li>
</ul>

</div>
<div>

<h3 class="text-base mb-1">Use Cases</h3>

<ul text-xs leading-tight>
<li>Text highlighting</li>
<li>Content extraction</li>
<li>Custom text selection</li>
<li>DOM manipulation</li>
</ul>

</div>
</div>

</div>
</div>

---
hideInToc: true
---

# Web Workers

<div></div>

<div text-sm>
Web Workers allow you to run JavaScript in background threads, preventing blocking of the main UI thread. Perfect for CPU-intensive tasks like data processing, calculations, or heavy computations.
</div>

<div class="grid grid-cols-2 gap-4 text-xs">
<div>

<h3 class="text-base mb-2">Overview</h3>

<div text-xs font-bold>Key Features:</div>

<ul text-xs leading-tight>
<li>Run JavaScript off the main thread</li>
<li>No DOM access (for safety)</li>
<li>Communicate via messages</li>
<li>Can make network requests</li>
<li>Shared or dedicated workers</li>
</ul>

<div text-xs font-bold mt-2>Types:</div>

<ul text-xs leading-tight>
<li><strong>Dedicated Workers</strong>: Single page</li>
<li><strong>Shared Workers</strong>: Multiple pages/tabs</li>
<li><strong>Service Workers</strong>: Network proxy</li>
</ul>

</div>
<div>


<div style="font-size: 0.65rem;">

```html {monaco}
<button onclick="start()">Calculate</button> <div id="result"></div>
<script>
  function start() {
    const blob = new Blob([`
      self.onmessage = function(e) {
        let r = 0
        for (let i = 0; i < e.data; i++) {
          r += Math.sqrt(i)
        }
        self.postMessage(r.toFixed(2))
      }
    `], {type: 'application/javascript'})

    const w = new Worker(URL.createObjectURL(blob))
    w.postMessage(100000)

    w.onmessage = function(e) {
      document.getElementById('result').textContent = 'Result: ' + e.data; 
      w.terminate()
    }
  }
</script>
```

</div>

</div>
</div>

---
hideInToc: true
---

# Web Workers: Advanced

<div></div>

<div class="grid grid-cols-2 gap-4 text-xs">
<div>

<h3 class="text-base mb-2">Shared Worker Demo</h3>

<div text-xs>
Shared workers can be accessed by multiple scripts, windows or iframes.
</div>

<div style="font-size: 0.65rem;">

```html {monaco}
<button onclick="connect()"> Increment </button> <div id="sharedResult"></div>
<script>
  function connect() {
    const blob = new Blob([`
      let count = 0
      self.onconnect = function(e) {
        const p = e.ports[0]
        p.onmessage = function() {
          count++
          p.postMessage('Count: ' + count)
        }
      }
    `], {type: 'application/javascript'})

    const w = new SharedWorker(URL.createObjectURL(blob));

    w.port.onmessage = function(e) {
      document.getElementById('sharedResult').textContent = e.data
    }
    w.port.postMessage('inc')
  }
</script>
```

</div>

</div>
<div>

<h3 class="text-base mb-2 mt-3">Communication Patterns</h3>

<div text-xs font-bold>Structured Clone:</div>
```js
worker.postMessage({ data: [1, 2, 3] })
```

<div text-xs font-bold mt-2>Transferable Objects:</div>
```js
const buffer = new ArrayBuffer(1024)
worker.postMessage(buffer, [buffer])
// buffer is now empty in main thread
```

<div class="grid grid-cols-2 gap-3 mt-0.5">

<div>
<h3 class="text-base mb-2 mt-3">Worker Limitations</h3>

<ul text-xs leading-tight>
<li>❌ No DOM access</li>
<li>❌ No window object</li>
<li>✅ XMLHttpRequest / fetch</li>
<li>✅ setTimeout / setInterval</li>
<li>✅ IndexedDB</li>
</ul>
</div>

<div>
<h3 class="text-base mb-2 mt-3">Performance Tips</h3>

<ul text-xs leading-tight>
<li v-click>Use transferable objects for large data</li>
<li v-click>Terminate workers when done</li>
<li v-click>Consider worker pools for concurrent tasks</li>
</ul>
</div>

</div>

</div>
</div>


---
hideInToc: true
---

# Service Workers

<div></div>

<div class="text-[10px]">
Service Workers act as a proxy between your web app and the network, enabling offline functionality, background sync, and push notifications. Essential for Progressive Web Apps (PWAs).
</div>

<div class="grid grid-cols-2 gap-4 text-xs">
<div>

<h3 class="text-base mb-2">Overview</h3>

<div text-xs font-bold>Capabilities:</div>

<ul text-xs leading-tight>
<li>Intercept network requests</li>
<li>Cache resources for offline use</li>
<li>Background synchronization</li>
<li>Push notifications</li>
<li>Update strategies</li>
</ul>

<div text-xs font-bold mt-2>Lifecycle:</div>

<ol text-xs leading-tight>
<li><strong>Install</strong> - Download & cache assets</li>
<li><strong>Activate</strong> - Clean up old caches</li>
<li><strong>Fetch</strong> - Intercept requests</li>
</ol>

<h3 class="text-base mb-2 mt-3">Performance Tips</h3>

<ul text-xs leading-tight>
<li v-click>Choose appropriate caching strategy per resource</li>
<li v-click>Implement cache versioning and cleanup</li>
<li v-click>Precache critical resources only</li>
</ul>

</div>
<div>

<!-- <h3 class="text-[9px] mb-1">Basic Registration Demo</h3> -->

<div style="font-size: 0.65rem !important;">

```html {monaco}
<button onclick="regSW()"> Register SW </button> <div id="status"></div>
<script>
  function regSW() {
    if ('serviceWorker' in navigator) {
      const blob = new Blob([`
        self.addEventListener('install',
          e => {
            // console.log('SW installed')
            self.skipWaiting()
          })
        self.addEventListener('activate',
          e => {
            // console.log('SW activated')
          })
        self.addEventListener('fetch',
          e => {
            // console.log('Fetch:', e.request.url)
          })
      `], {type: 'application/javascript'})
      navigator.serviceWorker.register(URL.createObjectUR L(blob))
        .then(() => { document.getElementById('status').textContent = 'SW registered!' })
    }
  }
</script>
```

</div>

</div>
</div>

---
hideInToc: true
---

# Service Workers: Caching Strategies

<div></div>

<div class="grid grid-cols-2 gap-4 text-xs">
<div>

<h3 class="text-base mb-2">Caching Strategy Demo</h3>

<div style="font-size: 0.65rem;">

```html {monaco}
<button onclick="regCache()"> Register Caching SW </button> <div id="cache"></div>
<script>
  function regCache() {
    const blob = new Blob([`
      const C = 'v1';
      self.addEventListener('install',
        e => {
          e.waitUntil(caches.open(C).then(c => c.addAll(['/'])))
        })

      self.addEventListener('fetch',
        e => {
          e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)))
        })
    `], {type: 'application/javascript'})

    navigator.serviceWorker
      .register(URL.createObjectURL(blob))
      .then(() => {
        document.getElementById('cache').textContent = 'Caching SW OK!'
      })
  }
</script>
```

</div>

</div>
<div>

<h3 class="text-base mb-2 mt-3">Common Caching Patterns</h3>

<div text-xs font-bold>Cache First:</div>

```js
// Best for static assets
caches.match(req).then(res => res || fetch(req))
```

<div text-xs font-bold mt-2>Network First:</div>

```js
// Best for API calls
fetch(req).catch(() => caches.match(req))
```

<div text-xs font-bold mt-2>Stale While Revalidate:</div>

```js
// Return cache, update in background
caches.match(req)
  .then(res => {
    const fp = fetch(req)
      .then(nr => {
        cache.put(req, nr.clone())
        return nr
      })
    return res || fp
  })
```

</div>
</div>


---
hideInToc: true
---

# Event Loop: Microtasks and Macrotasks

<div></div>

<div text-sm>
The Event Loop is JavaScript's concurrency model that handles asynchronous operations. Understanding microtasks and macrotasks is crucial for predicting execution order and avoiding performance issues.
</div>

<div class="grid grid-cols-2 gap-4 text-xs">
<div>

<h3 class="text-base mb-2">Overview</h3>

<div text-xs font-bold>Task Queues:</div>

<ul text-xs leading-tight>
<li><strong>Call Stack</strong>: Currently executing code</li>
<li><strong>Microtask Queue</strong>: Promises, queueMicrotask</li>
<li><strong>Macrotask Queue</strong>: setTimeout, setInterval, I/O</li>
</ul>

<div text-xs font-bold mt-2>Execution Order:</div>

<ol text-xs leading-tight>
<li>Execute synchronous code</li>
<li>Process all microtasks</li>
<li>Render (if needed)</li>
<li>Execute one macrotask</li>
<li>Repeat from step 2</li>
</ol>

<h3 class="text-base mb-2 mt-3">Performance Tips</h3>

<ul text-xs leading-tight>
<li v-click>Avoid blocking main thread with heavy sync ops</li>
<li v-click>Use microtasks sparingly to avoid starvation</li>
<li v-click>Use requestAnimationFrame for UI updates</li>
<li v-click>Break long tasks into chunks</li>
</ul>

</div>
<div>

<h3 class="text-base mb-2">Execution Order Demo</h3>

<div style="font-size: 0.65rem;">

```html {monaco}
<button onclick="demo()"> Run Demo </button> <div id="output"></div>
<script>
  function demo() {
    const out = document.getElementById('output')
    out.innerHTML = ''

    const log = (msg) => {
      out.innerHTML += msg + '<br>'
    }

    log('1: Sync start')

    setTimeout(() => log('2: Macro (setTimeout)'), 0)

    Promise.resolve().then(() => log('3: Micro (Promise)'))

    queueMicrotask(() => log('4: Micro (queueMicrotask)'))

    log('5: Sync end')
  }
</script>
```

</div>

</div>
</div>

---
hideInToc: true
---

# Event Loop: Task Priority

<div></div>

<div class="grid grid-cols-2 gap-4 text-xs">
<div>

<h3 class="text-base mb-2">Task Priority Demo</h3>

<div style="font-size: 0.65rem;">

```html {monaco}
<button onclick="priority()"> Show Priority </button> <div id="pOut"></div>
<script>
  function priority() {
    const out = document.getElementById('pOut')
    out.innerHTML = ''

    const log = (msg) => {
      out.innerHTML += msg + '<br>'
    }

    setTimeout(() => log('Macro 1'), 0)
    setTimeout(() => log('Macro 2'), 0)

    Promise.resolve().then(() => {
      log('Micro 1')
      return Promise.resolve()
    }).then(() => log('Micro 2'))

    Promise.resolve().then(() => log('Micro 3'))

    log('Sync')
  }
</script>
```

</div>

</div>
<div>

<h3 class="text-base mb-2 mt-3">Key Concepts</h3>

<div text-xs font-bold>Microtasks have priority:</div>
<ul text-xs leading-tight>
<li>All microtasks run before next macrotask</li>
<li>Can delay rendering if too many</li>
<li>Promise callbacks</li>
<li><code>queueMicrotask()</code></li>
<li>MutationObserver callbacks</li>
</ul>

<div text-xs font-bold mt-2>Macrotasks:</div>
<ul text-xs leading-tight>
<li>One per event loop iteration</li>
<li><code>setTimeout()</code>, <code>setInterval()</code></li>
<li>I/O operations</li>
<li>UI rendering happens between</li>
</ul>

<div text-xs font-bold mt-2>Expected Output:</div>
```
Sync
Micro 1
Micro 3
Micro 2
Macro 1
Macro 2
```

</div>
</div>


---
hideInToc: true
transition: slide-up
---

# Summary: Beyond Beginner
 
<div></div>

<div text-sm>
You've explored advanced browser APIs that enable powerful web applications:
</div>

<div class="grid grid-cols-2 gap-4 text-xs">
<div>

<h3 class="text-base mb-2">Observers</h3>

<ul text-xs leading-tight>
<li><strong>MutationObserver</strong>: Watch DOM changes</li>
<li><strong>ResizeObserver</strong>: Track element sizing</li>
<li><strong>IntersectionObserver</strong>: Detect visibility</li>
</ul>

<h3 class="text-base mb-2 mt-3">Text Manipulation</h3>

<ul text-xs leading-tight>
<li><strong>Selection & Range</strong>: Programmatic text selection</li>
</ul>

</div>
<div>

<h3 class="text-base mb-2">Background Processing</h3>

<ul text-xs leading-tight>
<li><strong>Web Workers</strong>: CPU-intensive tasks</li>
<li><strong>Service Workers</strong>: Offline & PWA features</li>
</ul>

<h3 class="text-base mb-2 mt-3">Fundamentals</h3>

<ul text-xs leading-tight>
<li><strong>Event Loop</strong>: Microtasks vs Macrotasks</li>
</ul>

</div>
</div>

<div text-sm mt-4>
These APIs unlock professional-grade web development capabilities. Use them to build responsive, performant, and feature-rich applications!
</div>
