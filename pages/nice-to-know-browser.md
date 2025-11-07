---
layout: center
transition: slide-up
hideInToc: true
---

# Nice to know about the browser

<TocIcon />

<div mt-2 />

- <a @click="$slidev.nav.go($nav.currentPage+1)">Web APIs</a>
- <a @click="$slidev.nav.go($nav.currentPage+2)">Frames and windows - Popups and window methods, cross-window communication, the clickjacking problem</a>
- <a @click="$slidev.nav.go($nav.currentPage+3)">Binary data, File API - ArrayBuffer, Blob, File, FileReader, readAsArrayBuffer, readAsText, readAsDataURL, TextDecoder, TextEncoder</a>
- <a @click="$slidev.nav.go($nav.currentPage+4)">Storing data in the browser - Cookies, document.cookie, localStorage, sessionStorage, IndexedDB(Dexie.js)</a>
- <a @click="$slidev.nav.go($nav.currentPage+5)">Animation - Bezier curve, CSS animations, JavaScript animations, requestAnimationFrame</a>

---
hideInToc: true
---

# Web APIs

<div class="grid grid-cols-2 gap-4">
<div>

## Overview

### What are Web APIs?

- Built-in browser functionality
- JavaScript interfaces to browser features
- Enable rich, interactive web applications

</div>
<div>


### Categories

1. **DOM APIs** - Document manipulation
2. **Storage APIs** - Client-side data persistence
3. **Network APIs** - Communication with servers
4. **Media APIs** - Audio/video handling
5. **Device APIs** - Hardware access
6. **Security APIs** - Cryptography and authentication

### Key Features

- **Asynchronous operations** (Promises, async/await)
- **Event-driven programming**
- **Cross-origin security**
- **Progressive enhancement**

</div>
</div>

---
hideInToc: true
---

# Modern Web API Examples

````md magic-move
```js
// Fetch API
fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data));
```

```js
// Geolocation API
navigator.geolocation.getCurrentPosition(
  position => {
    console.log('Lat:', position.coords.latitude);
    console.log('Lng:', position.coords.longitude);
  }
);
```

```js
// Web Storage API
localStorage.setItem('user', 'john');
const user = localStorage.getItem('user');
```

```js
// Canvas API
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
ctx.fillRect(10, 10, 100, 100);
```
````

---
hideInToc: true
title: Canvas API
---

<canvas />

---
hideInToc: true
---

# Frames and Windows Security

<div class="grid grid-cols-2 gap-4">
<div>

## Security Model

### Same-Origin Policy

- **Origin**: `protocol://domain:port`
- Restricts script access between different origins
- Prevents malicious cross-origin data access

</div>
<div>

### Cross-Window Communication

```js
// Parent window
const popup = window.open('https://example.com');

// Safe communication via postMessage
popup.postMessage('Hello from parent', 'https://example.com');

// Listen for messages
window.addEventListener('message', (event) => {
  if (event.origin !== 'https://example.com') return;
  console.log('Received:', event.data);
});
```

### Clickjacking Protection

```js
// X-Frame-Options header
if (top !== self) {
  top.location = self.location;
}
```

</div>
</div>

---
hideInToc: true
title: Click-Jacking
---

## Interactive Demo

<click-hack />

---
hideInToc: true
---

# Binary data, File API

<div class="grid grid-cols-2 gap-4">
<div>

## File API Overview

### Core APIs

- **File**: Represents file information
- **FileReader**: Reads file contents
- **Blob**: Binary Large Object
- **ArrayBuffer**: Raw binary data

### Reading Files
```js
const reader = new FileReader();

// Read as text
reader.readAsText(file);

// Read as data URL (base64)
reader.readAsDataURL(file);

// Read as array buffer
reader.readAsArrayBuffer(file);

reader.onload = (e) => {
  console.log('File content:', e.target.result);
};
```

### Blob Operations

```js
// Create blob
const blob = new Blob(['Hello World'], {
  type: 'text/plain'
});

// Create download link
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = 'file.txt';
a.click();
```

</div>
<div>

## Drag & Drop File Upload

<drag-drop />

</div>
</div>

---
hideInToc: true
---

# Storing Data in the Browser

## Comparison of Storage Methods

| Feature                  | Cookies                       | LocalStorage           | SessionStorage         | IndexedDB                     |
| ------------------------ | ----------------------------- | ---------------------- | -------------------    | -----------------             |
| Storage Limit            | ~4KB per cookie               | ~5-10MB per origin     | ~5-10MB per origin     | Depends on the browser        |
| Persistency              | Via expiration date           | Persistent             | Session only           | Persistent                    |
| Server Communication     | Sent with every HTTP request  | No                     | No                     | No                            |
| Data Format              | String                        | String                 | String                 | Objects                       |
| Accessibility            | Any window/tab                | Same-origin window/tab | Same-origin window/tab | Any script on the same origin |

## Usage Example

### LocalStorage

```js
// Save data
localStorage.setItem('username', 'JohnDoe');

// Retrieve data
const username = localStorage.getItem('username');

// Remove data
localStorage.removeItem('username');
```

### IndexedDB
```js
// Open the database
const request = indexedDB.open('myDatabase');

request.onsuccess = (event) => {
   const db = event.target.result;
   const transaction = db.transaction(['store'], 'readwrite');
   const store = transaction.objectStore('store');

   // Add data
   store.add({ id: 1, name: 'John' });
};

request.onerror = (event) => {
   console.error('Database error:', event.target.error);
};
```

---
hideInToc: true
---

# Animation with requestAnimationFrame

## Animation Principles

### Using requestAnimationFrame
- Provides a smooth 60fps rendering
- Automatically pauses method invocation when window is hidden, optimizing performance

### JavaScript Animation Demo

```js
const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');
let startTime;

function draw(timestamp) {
  if (!startTime) startTime = timestamp;
  const progress = timestamp - startTime;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#3498db';
  ctx.fillRect(progress % canvas.width, 50, 50, 50);

  requestAnimationFrame(draw);
}

requestAnimationFrame(draw);
```

## Interactive Animation

<request-animation />
---
