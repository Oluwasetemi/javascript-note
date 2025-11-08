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

<div class="grid grid-cols-2 gap-4 mb-4">
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

## Complete Web API Reference (A-Z)

<div class="grid grid-cols-3 gap-3 text-xs max-h-[500px] overflow-y-auto pr-2">

<details name="web-apis">
<summary class="font-bold cursor-pointer mb-2">A-B APIs</summary>

<div class="ml-2">

- [Attribution Reporting API](https://mdn.io/Attribution_Reporting_API)
- [Audio Output Devices API](https://mdn.io/Audio_Output_Devices_API)
- [AbortController](https://mdn.io/AbortController) / [AbortSignal](https://mdn.io/AbortSignal)
- [Background Fetch API](https://mdn.io/Background_Fetch_API)
- [Background Sync API](https://mdn.io/Background_Synchronization_API)
- [Background Tasks API](https://mdn.io/Background_Tasks_API)
- [Badging API](https://mdn.io/Badging_API)
- [Barcode Detection API](https://mdn.io/Barcode_Detection_API)
- [Battery Status API](https://mdn.io/Battery_Status_API)
- [Beacon API](https://mdn.io/Beacon_API)
- [Web Bluetooth API](https://mdn.io/Web_Bluetooth_API)
- [Broadcast Channel API](https://mdn.io/Broadcast_Channel_API)

</div>

</details>

<details name="web-apis">
<summary class="font-bold cursor-pointer mb-2">C APIs</summary>

<div class="ml-2">

- [CSS Custom Highlight API](https://mdn.io/CSS_Custom_Highlight_API)
- [CSS Font Loading API](https://mdn.io/CSS_Font_Loading_API)
- [CSS Painting API](https://mdn.io/CSS_Painting_API)
- [CSS Properties and Values API](https://mdn.io/CSS_Properties_and_Values_API)
- [CSS Typed Object Model](https://mdn.io/CSS_Typed_OM_API)
- [CSSOM](https://mdn.io/CSSOM)
- [CSSOM View](https://mdn.io/CSSOM_View)
- [Canvas API](https://mdn.io/Canvas_API)
- [Channel Messaging API](https://mdn.io/Channel_Messaging_API)
- [Clipboard API](https://mdn.io/Clipboard_API)
- [Compression Streams API](https://mdn.io/Compression_Streams_API)
- [Compute Pressure API](https://mdn.io/Compute_Pressure_API)
- [Console API](https://mdn.io/Console_API)
- [Contact Picker API](https://mdn.io/Contact_Picker_API)
- [Content Index API](https://mdn.io/Content_Index_API)
- [Cookie Store API](https://mdn.io/Cookie_Store_API)
- [Credential Management API](https://mdn.io/Credential_Management_API)

</div>

</details>

<details name="web-apis">
<summary class="font-bold cursor-pointer mb-2">D-E APIs</summary>

<div class="ml-2">

- [Document Object Model (DOM)](https://mdn.io/DOM)
- [Device Memory API](https://mdn.io/Device_Memory_API)
- [Device Orientation Events](https://mdn.io/Device_orientation_events)
- [Device Posture API](https://mdn.io/Device_Posture_API)
- [Document Picture-in-Picture API](https://mdn.io/Document_Picture-in-Picture_API)
- [EditContext API](https://mdn.io/EditContext_API)
- [Encoding API](https://mdn.io/Encoding_API)
- [Encrypted Media Extensions](https://mdn.io/Encrypted_Media_Extensions_API)
- [EyeDropper API](https://mdn.io/EyeDropper_API)

</div>

</details>

<details name="web-apis">
<summary class="font-bold cursor-pointer mb-2">F-G APIs</summary>

<div class="ml-2">

- [Federated Credential Management (FedCM)](https://mdn.io/FedCM_API)
- [Fenced Frame API](https://mdn.io/Fenced_Frame_API)
- [Fetch API](https://mdn.io/Fetch_API)
- [File API](https://mdn.io/File_API)
- [File System API](https://mdn.io/File_System_API)
- [File and Directory Entries API](https://mdn.io/File_and_Directory_Entries_API)
- [Force Touch Events](https://mdn.io/Force_Touch_events)
- [Fullscreen API](https://mdn.io/Fullscreen_API)
- [Gamepad API](https://mdn.io/Gamepad_API)
- [Geolocation API](https://mdn.io/Geolocation_API)
- [Geometry Interfaces](https://mdn.io/Geometry_interfaces)

</div>

</details>

<details name="web-apis">
<summary class="font-bold cursor-pointer mb-2">H-I APIs</summary>

<div class="ml-2">

- [HTML DOM API](https://mdn.io/HTML_DOM_API)
- [HTML Drag and Drop API](https://mdn.io/HTML_Drag_and_Drop_API)
- [HTML Sanitizer API](https://mdn.io/HTML_Sanitizer_API)
- [History API](https://mdn.io/History_API)
- [Houdini APIs](https://mdn.io/Houdini)
- [Idle Detection API](https://mdn.io/Idle_Detection_API)
- [MediaStream Image Capture API](https://mdn.io/MediaStream_Image_Capture_API)
- [IndexedDB](https://mdn.io/IndexedDB_API)
- [Ink API](https://mdn.io/Ink_API)
- [InputDeviceCapabilities](https://mdn.io/InputDeviceCapabilities)
- [Insertable Streams API](https://mdn.io/Insertable_Streams_API)
- [Intersection Observer API](https://mdn.io/Intersection_Observer_API)
- [Invoker Commands API](https://mdn.io/Invoker_Commands_API)

</div>

</details>

<details name="web-apis">
<summary class="font-bold cursor-pointer mb-2">J-L APIs</summary>

<div class="ml-2">

- [JS Self-Profiling API](https://mdn.io/JS_Self-Profiling_API)
- [Keyboard API](https://mdn.io/Keyboard_API)
- [Launch Handler API](https://mdn.io/Launch_Handler_API)
- [Local Font Access API](https://mdn.io/Local_Font_Access_API)

</div>

</details>

<details name="web-apis">
<summary class="font-bold cursor-pointer mb-2">M-N APIs</summary>

<div class="ml-2">

- [Media Capabilities API](https://mdn.io/Media_Capabilities_API)
- [Media Capture and Streams API](https://mdn.io/Media_Capture_and_Streams_API)
- [Media Session API](https://mdn.io/Media_Session_API)
- [Media Source API](https://mdn.io/Media_Source_Extensions_API)
- [MediaStream Recording API](https://mdn.io/MediaStream_Recording_API)
- [Navigation API](https://mdn.io/Navigation_API)
- [Network Information API](https://mdn.io/Network_Information_API)
- [Notifications API](https://mdn.io/Notifications_API)

</div>

</details>

<details name="web-apis">
<summary class="font-bold cursor-pointer mb-2">P APIs</summary>

<div class="ml-2">

- [Page Visibility API](https://mdn.io/Page_Visibility_API)
- [Payment Handler API](https://mdn.io/Payment_Handler_API)
- [Payment Request API](https://mdn.io/Payment_Request_API)
- [Performance API](https://mdn.io/Performance_API)
- [Web Periodic Background Sync](https://mdn.io/Web_Periodic_Background_Synchronization_API)
- [Permissions API](https://mdn.io/Permissions_API)
- [Picture-in-Picture API](https://mdn.io/Picture-in-Picture_API)
- [Pointer Events](https://mdn.io/Pointer_events)
- [Pointer Lock API](https://mdn.io/Pointer_Lock_API)
- [Popover API](https://mdn.io/Popover_API)
- [Presentation API](https://mdn.io/Presentation_API)
- [Prioritized Task Scheduling API](https://mdn.io/Prioritized_Task_Scheduling_API)
- [Push API](https://mdn.io/Push_API)

</div>

</details>

<details name="web-apis">
<summary class="font-bold cursor-pointer mb-2">R-S APIs (Part 1)</summary>

<div class="ml-2">

- [Remote Playback API](https://mdn.io/Remote_Playback_API)
- [Reporting API](https://mdn.io/Reporting_API)
- [Resize Observer API](https://mdn.io/Resize_Observer_API)
- [SVG API](https://mdn.io/SVG)
- [Screen Capture API](https://mdn.io/Screen_Capture_API)
- [Screen Orientation API](https://mdn.io/Screen_Orientation_API)
- [Screen Wake Lock API](https://mdn.io/Screen_Wake_Lock_API)
- [Selection API](https://mdn.io/Selection_API)
- [Sensor APIs](https://mdn.io/Sensor_APIs)
- [Server-sent Events](https://mdn.io/Server-sent_events)
- [Service Worker API](https://mdn.io/Service_Worker_API)

</div>

</details>

<details name="web-apis">
<summary class="font-bold cursor-pointer mb-2">S APIs (Part 2)</summary>

<div class="ml-2">

- [Shared Storage API](https://mdn.io/Shared_Storage_API)
- [Speculation Rules API](https://mdn.io/Speculation_Rules_API)
- [Storage API](https://mdn.io/Storage_API)
- [Storage Access API](https://mdn.io/Storage_Access_API)
- [Streams API](https://mdn.io/Streams_API)
- [Summarizer API](https://mdn.io/Summarizer_API)

</div>

</details>

<details name="web-apis">
<summary class="font-bold cursor-pointer mb-2">T APIs</summary>

<div class="ml-2">

- [Topics API](https://mdn.io/Topics_API)
- [Touch Events](https://mdn.io/Touch_events)
- [Translator API](https://mdn.io/Translator_API)
- [Language Detector API](https://mdn.io/Language_Detector_API)
- [Trusted Types API](https://mdn.io/Trusted_Types_API)

</div>

</details>

<details name="web-apis">
<summary class="font-bold cursor-pointer mb-2">U-V APIs</summary>

<div class="ml-2">

- [UI Events](https://mdn.io/UI_Events)
- [URL API](https://mdn.io/URL_API)
- [URL Fragment Text Directives](https://mdn.io/Fragment_directive)
- [URL Pattern API](https://mdn.io/URL_Pattern_API)
- [User-Agent Client Hints API](https://mdn.io/User-Agent_Client_Hints_API)
- [Vibration API](https://mdn.io/Vibration_API)
- [View Transition API](https://mdn.io/View_Transition_API)
- [Viewport Segments API](https://mdn.io/Viewport_Segments_API)
- [VirtualKeyboard API](https://mdn.io/VirtualKeyboard_API)

</div>

</details>

<details name="web-apis">
<summary class="font-bold cursor-pointer mb-2">W APIs (Part 1)</summary>

<div class="ml-2">

- [Web Animations API](https://mdn.io/Web_Animations_API)
- [Web Audio API](https://mdn.io/Web_Audio_API)
- [Web Authentication API](https://mdn.io/Web_Authentication_API)
- [Web Components](https://mdn.io/Web_Components)
- [Web Crypto API](https://mdn.io/Web_Crypto_API)
- [Web Locks API](https://mdn.io/Web_Locks_API)
- [Web MIDI API](https://mdn.io/Web_MIDI_API)
- [Web NFC API](https://mdn.io/Web_NFC_API)
- [Web Serial API](https://mdn.io/Web_Serial_API)
- [Web Share API](https://mdn.io/Web_Share_API)

</div>

</details>

<details name="web-apis">
<summary class="font-bold cursor-pointer mb-2">W APIs (Part 2)</summary>

<div class="ml-2">

- [Web Speech API](https://mdn.io/Web_Speech_API)
- [Web Storage API](https://mdn.io/Web_Storage_API)
- [Web Workers API](https://mdn.io/Web_Workers_API)
- [WebCodecs API](https://mdn.io/WebCodecs_API)
- [WebGL API](https://mdn.io/WebGL_API)
- [WebGPU API](https://mdn.io/WebGPU_API)
- [WebHID API](https://mdn.io/WebHID_API)
- [WebOTP API](https://mdn.io/WebOTP_API)
- [WebRTC API](https://mdn.io/WebRTC_API)
- [WebSocket API](https://mdn.io/WebSockets_API)
- [WebTransport API](https://mdn.io/WebTransport_API)
- [WebUSB API](https://mdn.io/WebUSB_API)
- [WebVR API](https://mdn.io/WebVR_API)
- [WebVTT API](https://mdn.io/WebVTT_API)
- [WebXR Device API](https://mdn.io/WebXR_Device_API)
- [Window Controls Overlay API](https://mdn.io/Window_Controls_Overlay_API)
- [Window Management API](https://mdn.io/Window_Management_API)

</div>

</details>

<details name="web-apis">
<summary class="font-bold cursor-pointer mb-2">X APIs</summary>

<div class="ml-2">

- [XMLHttpRequest](https://mdn.io/XMLHttpRequest)

</div>

</details>

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

<canvas-web />

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

<div class="text-[10px]">

- `File`: Represents file information
- `FileReader`: Reads file contents
- `Blob`: Binary Large Object
- `ArrayBuffer`: Raw binary data

</div>

<div class="text-sm">Reading Files</div>

```js
const reader = new FileReader();
reader.readAsText(file);
reader.readAsDataURL(file);
reader.readAsArrayBuffer(file);
reader.onload = (e) => {
  console.log('File content:', e.target.result);
};
```

<div class="text-sm">Blob Operations</div>

```js
const blob = new Blob(['Hello World'], {
  type: 'text/plain'
});

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

<!-- ## Animation Principles -->

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

---

## Interactive Animation

<AnimationFrame />
