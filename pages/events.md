---
layout: center
transition: slide-up
hideInToc: true
---

# Events
<div mt-2 />

- <a @click="$slidev.nav.next()">Basic Concepts</a>
- <a @click="$nav.go($nav.currentPage+5)">Bubbling and Capturing</a>
- <a @click="$nav.go($nav.currentPage+8)">Event Delegation</a>
- <a @click="$nav.go($nav.currentPage+10)">Browser Default Actions</a>
- <a @click="$nav.go($nav.currentPage+11)">Dispatching Custom Events</a>


---
hideInToc: true
clicksStart: 1
---

# Events: Basic Concepts 

<v-clicks>

Events are actions or occurrences that happen in the system you are programming, which the system tells you about so you can respond to them in some way if desired. Its like a signal that something has happened. All DOM nodes generate such signals when we interact with them or the browser does something with them. Here are some examples of events: 

- A mouse `click`, `contextmenu`, `mouseover`/`mouseout`, `mousedown`/`mouseup`. `mousemove`, touch screen tap, or key press `keydown`, `keyup`
- A form input field was changed `change`, the form was submitted `submit`, a file was dragged over the element.
- The page has loaded `load`, `DOMContentLoaded`, the video is ready `loadeddata`, the window was resized `resize`, etc.

Handlers are functions that run in response to events. They can be assigned to handle events. We have the HTML-attribute, DOM-property, and `addEventListener` method to assign handlers. Use `on<event>` properties to assign handlers in HTML or DOM properties.

```html
<button onclick="alert('Click!')">Click me</button>
```


</v-clicks>

---
hideInToc: true
---

# More on Event Handlers


DOM properties are assigned to the event handler. They are not strings like HTML attributes. They are functions. 



```html {hide|none|*|1|2,6|3-5|*}
<button id="elem">Click me</button>
<script>
  elem.onclick = function() {
    alert('Click!');
  };
</script>
```

<v-clicks>

The `addEventListener` method allows adding multiple handlers on the same event, with additional configuration options and ability to remove them with `removeEventListener`. 

```js {monaco}
elem.addEventListener('click', function() {
  alert('First handler');
});
elem.addEventListener('click', function() {
  alert('Second handler');
});
```

</v-clicks>

---
hideInToc: true
name: Syntax of addEventListener
---

# [`element.addEventListener(event, handler, [options|useCapture]);`](https://mdn.io/addEventListener)

<v-clicks>

event - type of event to listen for, e.g. "click", "keydown", etc.

handler - the function to call when the event occurs, it called the listener.

options - additional options, like `once`, `capture`, `passive`, `signal` or useCapture - boolean, if true, then the handler is set on the capturing phase, otherwise the bubbling phase. 

```ts twoslash
interface AddEventListenerOptions extends EventListenerOptions {
  once?: boolean;
  passive?: boolean;
  signal?: AbortSignal;
}
```

```js {monaco-run}
const elem = document.querySelector(`[data-slidev-no="111"] h1`)
const handler = () => alert('Click!');
elem.addEventListener('click', handler, {once: true});
// elem.addEventListener('mouseover', handler);
```

Let us see what is an event object and how to use it.

</v-clicks>

---
hideInToc: true
---

# Event Object

<v-clicks>

When an event happens, the browser creates an event object, puts details into it, and passes it as an argument to the handler. 

```js {monaco-run}{autorun: false}
const elem = document.querySelector(`[data-slidev-no="112"] h1`)

elem.addEventListener('click', function(event) {
  // show the event type, the element and the coordinates of the click
  console.log(event.type + " at " + event.currentTarget + " " + event.eventPhase);
  console.log(`Coordinates: ${event.clientX}:${event.clientY}`);
  console.dir(event);
});
```

```html {monaco}
<button id="elem">Click me</button>
<script>
  let obj = {
    handleEvent(event) {
      alert(event.type + " at " + event.currentTarget);
    }
  };

  elem.addEventListener('click', obj);
</script>
```

</v-clicks>



---
hideInToc: true
clicksStart: 1
---

# Events: Bubbling and Capturing

<v-clicks>

When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors. This is called "bubbling". The bubbling principle is simple. When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors. Capturing is the opposite. The event starts from the top element(top most parent) and goes down to the target element.

`event.target` - the "target" element that initiated the event, it doesn't change through the bubbling process.

`event.currentTarget` - the current element, the "this" of the handler.

You can stop the bubbling by calling `event.stopPropagation()` or `event.stopImmediatePropagation()`. 

<div flex="~">

```html
<body onclick="alert('body click')">
  <div id="elem" style="border: 1px solid black; padding: 10px">
    <button @click="alert('button clicked')">Click me</button>
  </div>
</body>
```

  <Clickme />
</div>

</v-clicks>

---
hideInToc: true
---

# Events: Bubbling and Capturing

<v-clicks>

```js {monaco-run}
const elem = document.querySelector(`[data-slidev-no="114"] h1`)
const parent = elem.parentElement;
const grandParent = parent.parentElement;

function listener(e) {
  console.log('clicked', e.currentTarget.tagName);
}

elem.addEventListener('click', listener)
parent.addEventListener('click', listener)
grandParent.addEventListener('click', listener)

// document.body.addEventListener('click', listener);
```

</v-clicks>

--- 
hideInToc: true
---

# Events: Capturing

<v-clicks>

Knowing the bubbling and capturing principles can be useful. For instance, if we want to catch an event on the way down, we can use the capturing phase especially during a concept called "event delegation".

```js {monaco-run}
const elems = document.querySelectorAll(`*`)

function listener(e) {
  console.log('capturing', e.currentTarget.tagName);
}

for (let elem of elems) {
  elem.addEventListener('click', listener, true);
}
```


</v-clicks>



---
hideInToc: true
clicksStart: 1
---

# Events: Event Delegation

<v-clicks>

Event delegation is a technique involving adding a single event listener to a common parent rather than adding them to multiple child nodes. The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor. 

```html
<ul id="menu">
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
</ul>

<script>
  menu.onclick = function(event) {
    let target = event.target;
    if (target.tagName != 'LI') return;
    console.log(target.innerHTML);
  };
</script>
```

</v-clicks>

---
hideInToc: true
---

# Behaviour Pattern: Event Delegation


````md magic-move {lines: true, class: 'flex items-center justify-center'}
```html
<div id="menu">
  <button data-action="save">Save</button>
  <button data-action="load">Load</button>
  <button data-action="search">Search</button>
</div>
```

```js
class Menu {
  constructor(elem) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this);
  }
  save() { alert('saving'); }
  load() { alert('loading'); }
  search() { alert('searching'); }

  onClick(event) {
    let action = event.target.dataset.action;
    if (action) {
      this[action]();
    }
  };
}

new Menu(menu);
```

```html
Counter: <input type="button" value="1" data-counter>
One more counter: <input type="button" value="2" data-counter>
```

```js
document.addEventListener('click', function(event) {
  if (event.target.dataset.counter != undefined) { // if the attribute exists...
    event.target.value++;
  }
});
```

```html
<button data-toggle-id="subscribe-mail">
  Show the subscription form
</button>

<form id="subscribe-mail" hidden>
  Your mail: <input type="email">
</form>
```

```js
document.addEventListener('click', function(event) {
  let id = event.target.dataset.toggleId;
  if (!id) return;
  let elem = document.getElementById(id);
  elem.hidden = !elem.hidden;
});
```
````

Event delegation is really cool! It’s one of the most helpful patterns for DOM events. It allows us to set a single handler on the parent element and wait for events to bubble up. This handler will know the exact element where it happened due to the event object.

---
hideInToc: true
clicksStart: 1
---

# Events: Browser Default Actions

<v-clicks>

<a href="https://oluwasetemi.dev">Google</a>

When an event happens, the browser does something with it. For instance, a click on a link navigates to the link. The browser has a default action for many events. Clicking on a submit button submits the form, right-clicking a web page shows the context menu etc. It added `event.defaultPrevented` to event object.

To prevent the default action, we can use `event.preventDefault()`. returning `false` from an event handler is the same as calling `event.preventDefault()` and `event.stopPropagation()`.

```js {monaco-run}
const link = document.querySelector(`[data-slidev-no="118"] a`)
link.addEventListener('click', function(event) {
  event.preventDefault(); event.stopPropagation();
  alert('Link click!');
});
```
```js {monaco-run}
const h1 = document.querySelector(`[data-slidev-no="118"] h1`)
h1.oncontextmenu = function(event) {
  alert('Content menu clicked');
};
```

</v-clicks>

---
hideInToc: true
clicksStart: 1
---

# Events: Dispatching Custom Events

<v-clicks>  

Custom events are events that we can create ourselves. They are supported by all browsers. They are a way to communicate between different parts of our UIs. We can create a new event object using the `CustomEvent` constructor and dispatch it on an element using the `dispatchEvent` method.

Since built in events are not cancelable by default (except with a hack), we can make our custom events cancelable by setting the `cancelable` option to `true`. The `detail` property can be used to pass custom data to the event handler. We can customize the event object to do whatever we want. React event system is built on top of the browser event system.

```js
let event = new Event(type[, options]);
```

`type` - the event type, e.g. "click".
`options` - an object with three optional properties: `bubbles`, `cancelable`, `composed`.

```ts twoslash
interface CustomEventInit<T = any> extends EventInit {
  detail?: T;
}
```

Next we will see how to create a custom event and dispatch it(programatically trigger it).

</v-clicks>

---
hideInToc: true
---

# Events: Dispatching Custom Events

`event.isTrusted` - read-only property that returns a boolean value indicating whether or not the event was initiated by the browser (true) or by a script (false).

```html
<button id="elem">Click me</button>
```

<div flex="~">

```js
let helloEvent = new Event('hello', {bubbles: true, cancelable: true});
elem.addEventListener('hello', function(event) {
  alert('Hello from ' + event.target.tagName);
});
```

  <Hello />
</div>

<v-clicks>

For completely new events, we can use `CustomEvent` class. It has an additional `detail` property to pass custom data.

```js {monaco-run}{autorun: false}
const element = document.querySelector(`[data-slidev-no="120"] h1`)
element.onclick = function() { element.dispatchEvent(new CustomEvent("hello", { detail: { name: "John" } })); };
element.addEventListener('hello', function(event) {
  console.log('Hello, ' + event.detail.name + '!, you fired ' + event.type + ' event');
});
```

</v-clicks>
