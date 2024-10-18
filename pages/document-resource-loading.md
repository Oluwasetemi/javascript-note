---
layout: center
transition: slide-up
hideInToc: true
---

# Document Resource Loading

<div mt-2 />

- <a @click="$slidev.nav.next()">Page: DOMContentLoaded, load, beforeunload, unload</a>
- <a @click="$nav.go($nav.currentPage+5)">Scripts: async, defer, dynamic scripts</a>
- <a @click="$nav.go($nav.currentPage+10)">Resource loading: onload and onerror for `<img>`, `<script>`, `<link>`, `<style>`</a>

---
hideInToc: true
---

# Page: DOMContentLoaded, load, beforeunload, unload

The lifecycle of an HTML page has three important events:

## DOMContentLoaded

The browser fully loaded HTML, and the DOM tree is built, but external resources like pictures <img> and stylesheets may not yet have loaded.
This means that the DOM is fully constructed and ready to be interacted with, making it a good event for running scripts that manipulate the page struture.

```js
// Example
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM is fully loaded and parsed')
  // Your DOM manipulation code goes here
})
```

---
hideInToc: true
---

# load

The load event occurs later than the DOMContentLoaded event, which only waits for the HTML to be parsed. In contrast, the load event waits for all content , including external resources to be ready. Not only HTML is loaded, but also all the external resources: styles are applied, image sizes are known etc.

```js
// Example
window.addEventListener('load', function () {
  console.log('the whole page is fully loaded')
  // code to execute after everything has loaded
})
```

---
hideInToc: true
---

# beforeunload/unload

The beforeunload and unload events are related to when a user is about to leave a webpage or when the page is being unloaded. However, they behave differently and are used for different purposes.

The beforeunload event is fired _right before_ the page is about to be unloaded, such as when the user is navigating away, closing the tab, or refreshing the page. This event gives you the opportunity to display a confirmation dialog to the user, asking if they are sure they want to leave the page. This is often used in situations where users might have unsaved changes, or the website needs to ensure the user intends to navigate away.

- Use this event if you need to warn the user about unsaved data or critical actions before they leave the page.

```js
window.addEventListener('beforeunload', function (e) {
  // Custom message is ignored by most modern browsers, but it still triggers a confirmation.
  e.preventDefault()
  e.returnValue = '' // Some browsers require this for the dialog to show
})
```

---
hideInToc: true
---

# unload

The unload event is fired when the page is being completely unloaded. Unlike beforeunload, it does not offer a way to stop the user from leaving or display any confirmation message. It is mostly used for cleanup purposes, such as closing WebSockets, sending analytics data, or saving state to local storage right before the user navigates away from the page.

- This event is useful for performing final tasks before the page is closed, such as saving application state, sending logging data, or cleaning up resources (like closing a WebSocket connection).

```js
// Example
window.addEventListener('unload', function () {
  // Perform cleanup or send analytics
  console.log('Page is unloading')
})
```

---
hideInToc: true
---

# Scripts: async, defer, dynamic scripts

When the browser loads HTML and comes across a script tag, it can’t continue building the DOM. It must execute the script right now. The same happens for external scripts: the browser must wait for the script to download, execute the downloaded script, and only then can it process the rest of the page.

That leads to two important issues:

- Scripts can’t see DOM elements below them, so they can’t add handlers.
- If there’s a bulky script at the top of the page, it “blocks the page”. Users can’t see the page content till it downloads and runs:

```html
<!-- // Example -->
<p>...content before script...</p>

<script src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

<!-- This isn't visible until the script loads -->
<p>...content after script...</p>
```

---
hideInToc: true
---

# async

When you add the async attribute to a script tag, the browser downloads the script in parallel with the HTML parsing, and executes it _as soon as it's ready_ (before the HTML parsing is complete). This is useful for scripts that do not rely on the DOM or other scripts being fully loaded.

- The script is fetched and executed asynchronously, independently of the DOM.
- The script might execute before or after the DOM is fully parsed.
- Other scripts that do not use async or defer might still block the page load.
  In other words, async scripts load in the background and run when ready

```html
<!-- // Example -->
<p>...content before scripts...</p>

<script>
  document.addEventListener('DOMContentLoaded', () => alert('DOM ready!'))
</script>

<script
  async
  src="https://javascript.info/article/script-async-defer/long.js"
></script>
<script
  async
  src="https://javascript.info/article/script-async-defer/small.js"
></script>

<p>...content after scripts...</p>
```

---
hideInToc: true
---

# defer

When you use the defer attribute, the browser downloads the script in parallel with HTML parsing but _executes it only after the HTML document is fully parsed_. This is ideal for scripts that need to interact with the DOM but don't need to block the page from rendering.

- Scripts are fetched asynchronously, but execution is deferred until after the document is fully parsed.
- Scripts with defer are executed in order, even if multiple defer scripts are on the page.
- It works well for large scripts that interact with the DOM.

```html
<!-- Example -->
<p>...content before scripts...</p>

<script>
  document.addEventListener('DOMContentLoaded', () =>
    alert('DOM ready after defer!'),
  )
</script>

<script
  defer
  src="https://javascript.info/article/script-async-defer/long.js?speed=1"
></script>

<p>...content after scripts...</p>
```

---
hideInToc: true
---

# dynamic

This refers to JavaScript code that is loaded and executed dynamically, rather than being included statically in the initial HTML page. This means that the script can be added to the page, loaded, or executed at runtime, often based on specific conditions like user actions, certain events, or performance optimization strategies.

### Use Cases of Dynamic Scripts

- Lazy Loading/Code Splitting: Only load a part of the JavaScript that is needed for a specific section of the page or feature, improving initial load time.

- Conditionally Loading External Libraries: Load third-party scripts or libraries only when required (e.g., loading Google Maps API only when a map is needed).

- User Interaction: Scripts that are loaded based on user interactions, such as when a user clicks a button or scrolls to a certain part of the page.

- Dynamic Imports in Modern JavaScript (ES6+): You can use the import() syntax to dynamically import JavaScript modules at runtime.

---
hideInToc: true
---

# Dynamic Script Loading

<div flex="~ row" gap-2>

```js
// Example
function loadScript(src) {
  let script = document.createElement('script')
  script.src = src
  script.async = false
  document.body.append(script)
}
```

```js
// long.js runs first because of async=false
loadScript('/article/script-async-defer/long.js')
loadScript('/article/script-async-defer/small.js')
```

</div>

<div flex="~ row" gap-2>

<!-- prettier-ignore -->
```js
function loadScript(src, callback) {
  let script = document.createElement('script')

  script.src = src
  script.onload = () => callback(null, script)
  script.onerror = () => callback(
    new Error(`Script load error for ${src}`)
  )
  document.head.append(script)
}
```

<!-- prettier-ignore -->
```js
function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')

    script.src = src
    script.onload = () => resolve(script)
    script.onerror = () => reject(
      new Error(`Script load error for ${src}`)
    )
    document.head.append(script)
  })
}
```

</div>

<!--
prettier-ignore-end
-->

---
hideInToc: true
---

# Resource loading: onload and onerror for `<img>`, `<script>`, `<link>`, `<style>`

The browser allows us to track the loading of external resources – scripts, links, pictures and so on.

- There are two events for it:

- onload – successful load,
- onerror – an error occurred.

---
hideInToc: true
---

# image

Images (`<img>`):

- You can use both inline attributes (onload/onerror) or JavaScript event listeners
- Common use cases include loading fallback images, showing loading spinners, or updating UI states

```html
<script>
  const img = document.getElementById('myImage')

  img.addEventListener('load', function () {
    console.log('Image loaded successfully!')
    // Do something with the loaded image
    this.classList.add('loaded')
  })

  img.addEventListener('error', function () {
    console.log('Error loading image')
    this.src = 'fallback.jpg'
    this.classList.add('error')
  })
</script>
```

---
hideInToc: true
---

# scripts

- Can be loaded synchronously or asynchronously
- The onload event fires when the script is loaded and executed
- Useful for loading third-party libraries or splitting code into chunks

```html
<script
  src="external.js"
  onload="console.log('Script loaded!')"
  onerror="console.log('Script failed to load')"
></script>

<script>
  function loadScript(url) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = url
      script.onload = function () {
        console.log('Script loaded successfully!')
        resolve(script)
      }

      script.onerror = function () {
        console.log('Error loading script')
        reject(new Error(`Script load error for ${url}`))
      }

      document.head.appendChild(script)
    })
  }
</script>
```

---
hideInToc: true
---

# link

- Important for loading external CSS files
- Can detect when styles are available to prevent FOUC (Flash of Unstyled Content)
- Useful for loading conditional stylesheets (e.g., theme files)

<!-- prettier-ignore -->
```html
<link rel="stylesheet" href="styles.css" onload="console.log('Stylesheet loaded!')" 
onerror="console.log('Stylesheet failed to load')" />
<script>
  function loadStylesheet(url) {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = url;
      link.onload = function () { console.log('Stylesheet loaded successfully!'); resolve(link); }
      link.onerror = function () {
        console.log('Error loading stylesheet')
        reject(new Error(`Stylesheet load error for ${url}`))
      }
      document.head.appendChild(link)
    })
  }
  // loadStylesheet('https://example.com/styles.css')
  //     .then(() => console.log('Stylesheet is ready!'))
  //     .catch(error => console.error('Stylesheet loading failed:', error));
</script>
```

---
hideInToc: true
---

# style

- Generally processed synchronously
- Don't typically need load events
- Useful for dynamic style injection

```js
// {/* Dynamic style tag creation */}
function addStyles(cssText) {
  const style = document.createElement('style')
  // For older browsers
  style.appendChild(document.createTextNode(cssText))
  // Add load event (Note: style tags don't typically need load events
  // as they're processed synchronously)
  style.onload = function () {
    console.log('Styles applied!')
  }
  document.head.appendChild(style)
}

// {/* Usage */}
// addStyles(` .custom-class { color: blue; font-size: 16px; } `);
```
