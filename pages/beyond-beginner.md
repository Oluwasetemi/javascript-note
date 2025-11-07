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
- <a @click="$slidev.nav.go($nav.currentPage+4)">Selection and Range</a>
- <a @click="$slidev.nav.go($nav.currentPage+5)">Web Workers</a>
- <a @click="$slidev.nav.go($nav.currentPage+6)">Service Workers</a>
- <a @click="$slidev.nav.go($nav.currentPage+7)">Event loop: microtasks and macrotasks</a>

---
hideInToc: true
---

# Mutation Observer

## Overview
Mutation Observers allow you to get notified when DOM changes occur. They are particularly useful when you need to react to changes dynamically rather than polling for changes.

## Demo
```html{monaco-run}
<div id="container"></div>
<script>
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      console.log(mutation);
    });
  });
  const config = { childList: true };
  const targetNode = document.getElementById('container');
  observer.observe(targetNode, config);
  // Dynamically change the DOM
  targetNode.appendChild(document.createElement('div'));
</script>
```

## Performance Tips
- <v-click>Use specific targets to minimize overhead.</v-click> 
- <v-click>Avoid unnecessary levels of observation complexity.</v-click>

## Mini-Quiz
- [ ] What does a MutationObserver watch for?
- [ ] Can it watch attribute changes by default?
- [ ] Is it more efficient than polling?



---
hideInToc: true
---

# Resize Observer

## Overview
Resize Observers provide notifications when an element's content rectangle changes size, allowing dynamic layout updates.

## Demo
```html{monaco-run}
<div id="box" style="resize: both; overflow: auto; width: 100px; height: 100px;">
  Resize me!
</div>
<script>
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      console.log('Size:', entry.contentRect);
    }
  });
  resizeObserver.observe(document.getElementById('box'));
</script>
```

## Performance Tips
- <v-click>Avoid observing elements with frequent size changes.</v-click>
- <v-click>Throttle the callback function to enhance performance.</v-click>

## Mini-Quiz
- [ ] What does a ResizeObserver observe?
- [ ] Does it observe style changes?


---
hideInToc: true
---

# Intersection Observer

## Overview
Intersection Observers provide a way to asynchronously observe changes in the intersection of a target element with an ancestor element or top-level document viewport.

## Demo
```html{monaco-run}
<div id="sentinel"></div>
<div id="target">Intersect me!</div>
<script>
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      console.log('Intersection Ratio:', entry.intersectionRatio);
    });
  });
  observer.observe(document.getElementById('target'));
</script>
```

## Performance Tips
- <v-click>Use thresholds effectively to minimize frequent callbacks.</v-click>
- <v-click>Disconnect observers when not needed.</v-click>

## Mini-Quiz
- [ ] What can an IntersectionObserver be used for?
- [ ] Can it observe scrolling elements?

---
hideInToc: true
---

# Selection and Range

## Overview
Selection and Range APIs allow you to programmatically select text content and manipulate text ranges in the DOM. They're essential for building rich text editors and text manipulation features.

## Demo 1: Basic Selection
```html{monaco-run}
<p id="text">This is some selectable text content for demonstration.</p>
<button onclick="selectText()">Select Text</button>
<script>
  function selectText() {
    const element = document.getElementById('text');
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
  }
</script>
```

## Demo 2: Range Manipulation
```html{monaco-run}
<div id="content">Hello <strong>World</strong>!</div>
<button onclick="highlightRange()">Highlight Range</button>
<script>
  function highlightRange() {
    const range = document.createRange();
    const textNode = document.getElementById('content').firstChild;
    range.setStart(textNode, 0);
    range.setEnd(textNode, 5);
    const span = document.createElement('span');
    span.style.backgroundColor = 'yellow';
    range.surroundContents(span);
  }
</script>
```

## Performance Tips
- <v-click>Cache selection objects when performing multiple operations</v-click>
- <v-click>Use Range methods efficiently to avoid unnecessary DOM traversal</v-click>
- <v-click>Clear selections when not needed to free memory</v-click>

## Mini-Quiz
- [ ] What is the difference between Selection and Range?
- [ ] Can you have multiple ranges in a single selection?
- [ ] Does Range work with text nodes only?

---
hideInToc: true
---

# Web Workers

## Overview
Web Workers allow you to run JavaScript in background threads, preventing blocking of the main UI thread. They're perfect for CPU-intensive tasks like data processing, calculations, or API calls.

## Demo 1: Basic Web Worker
```html{monaco-run}
<button onclick="startWorker()">Start Heavy Calculation</button>
<div id="result"></div>
<script>
  function startWorker() {
    const worker = new Worker(URL.createObjectURL(new Blob([
      `
      self.onmessage = function(e) {
        const num = e.data;
        let result = 0;
        for (let i = 0; i < num; i++) {
          result += Math.sqrt(i);
        }
        self.postMessage(result);
      }
      `
    ], {type: 'application/javascript'})));
    
    worker.postMessage(1000000);
    worker.onmessage = function(e) {
      document.getElementById('result').textContent = 'Result: ' + e.data;
      worker.terminate();
    };
  }
</script>
```

## Demo 2: Shared Worker
```html{monaco-run}
<button onclick="connectShared()">Connect to Shared Worker</button>
<div id="sharedResult"></div>
<script>
  function connectShared() {
    const worker = new SharedWorker(URL.createObjectURL(new Blob([
      `
      let counter = 0;
      self.onconnect = function(e) {
        const port = e.ports[0];
        port.onmessage = function(e) {
          counter++;
          port.postMessage('Counter: ' + counter);
        };
      }
      `
    ], {type: 'application/javascript'})));
    
    worker.port.onmessage = function(e) {
      document.getElementById('sharedResult').textContent = e.data;
    };
    worker.port.postMessage('increment');
  }
</script>
```

## Performance Tips
- <v-click>Use transferable objects to avoid copying large data</v-click>
- <v-click>Terminate workers when done to free memory</v-click>
- <v-click>Consider using SharedWorkers for shared state between tabs</v-click>

## Mini-Quiz
- [ ] Can Web Workers access the DOM directly?
- [ ] What's the difference between Web Workers and Service Workers?
- [ ] Can Web Workers make network requests?

---
hideInToc: true
---

# Service Workers

## Overview
Service Workers act as a proxy between your web app and the network, enabling offline functionality, background sync, and push notifications. They're essential for Progressive Web Apps (PWAs).

## Demo 1: Basic Service Worker Registration
```html{monaco-run}
<button onclick="registerSW()">Register Service Worker</button>
<div id="swStatus"></div>
<script>
  function registerSW() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register(URL.createObjectURL(new Blob([
        `
        self.addEventListener('install', event => {
          console.log('SW installed');
          self.skipWaiting();
        });
        
        self.addEventListener('activate', event => {
          console.log('SW activated');
        });
        
        self.addEventListener('fetch', event => {
          console.log('Fetch:', event.request.url);
        });
        `
      ], {type: 'application/javascript'})))
      .then(reg => {
        document.getElementById('swStatus').textContent = 'Service Worker registered!';
      })
      .catch(err => {
        document.getElementById('swStatus').textContent = 'Registration failed: ' + err;
      });
    }
  }
</script>
```

## Demo 2: Caching Strategy
```html{monaco-run}
<button onclick="registerCachingSW()">Register Caching SW</button>
<div id="cacheStatus"></div>
<script>
  function registerCachingSW() {
    navigator.serviceWorker.register(URL.createObjectURL(new Blob([
      `
      const CACHE_NAME = 'v1';
      
      self.addEventListener('install', event => {
        event.waitUntil(
          caches.open(CACHE_NAME)
            .then(cache => cache.addAll(['/']))
        );
      });
      
      self.addEventListener('fetch', event => {
        event.respondWith(
          caches.match(event.request)
            .then(response => response || fetch(event.request))
        );
      });
      `
    ], {type: 'application/javascript'})))
    .then(() => {
      document.getElementById('cacheStatus').textContent = 'Caching SW registered!';
    });
  }
</script>
```

## Performance Tips
- <v-click>Implement proper caching strategies (Cache First, Network First, etc.)</v-click>
- <v-click>Use cache versioning to manage updates</v-click>
- <v-click>Avoid caching large files unnecessarily</v-click>

## Mini-Quiz
- [ ] Can Service Workers run without a network connection?
- [ ] Do Service Workers persist across browser sessions?
- [ ] Can multiple Service Workers control the same scope?

---
hideInToc: true
---

# Event Loop: Microtasks and Macrotasks

## Overview
The Event Loop is JavaScript's concurrency model that handles asynchronous operations. Understanding microtasks and macrotasks is crucial for predicting execution order and avoiding performance issues.

## Demo 1: Execution Order
```html
{monaco-run}
<button onclick="demonstrateEventLoop()">Demonstrate Event Loop</button>
<div id="output"></div>
<script>
  function demonstrateEventLoop() {
    const output = document.getElementById('output');
    output.innerHTML = '';
    
    const log = (msg) => {
      output.innerHTML += msg + '<br>';
    };
    
    console.log = log;
    
    console.log('1: Sync');
    
    setTimeout(() => console.log('2: Macrotask (setTimeout)'), 0);
    
    Promise.resolve().then(() => console.log('3: Microtask (Promise)'));
    
    queueMicrotask(() => console.log('4: Microtask (queueMicrotask)'));
    
    console.log('5: Sync');
  }
</script>
```

## Demo 2: Task Queue Priority
```html{monaco-run}
<button onclick="demonstrateTaskPriority()">Demonstrate Task Priority</button>
<div id="priorityOutput"></div>
<script>
  function demonstrateTaskPriority() {
    const output = document.getElementById('priorityOutput');
    output.innerHTML = '';
    
    const log = (msg) => {
      output.innerHTML += msg + '<br>';
    };
    
    setTimeout(() => log('Macrotask 1'), 0);
    setTimeout(() => log('Macrotask 2'), 0);
    
    Promise.resolve().then(() => {
      log('Microtask 1');
      return Promise.resolve();
    }).then(() => log('Microtask 2'));
    
    Promise.resolve().then(() => log('Microtask 3'));
    
    log('Synchronous');
  }
</script>
```

## Performance Tips
- <v-click>Avoid blocking the main thread with heavy synchronous operations</v-click>
- <v-click>Use microtasks sparingly to prevent starving macrotasks</v-click>
- <v-click>Consider using scheduler.postTask() for better control</v-click>

## Mini-Quiz
- [ ] Do microtasks have higher priority than macrotasks?
- [ ] Can microtasks create more microtasks?
- [ ] What happens if you create an infinite microtask loop?
