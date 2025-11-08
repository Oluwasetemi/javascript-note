---
layout: center
transition: slide-up
hideInToc: true
---

# UI Events

<TocIcon />

<div mt-2 />

- <a @click="$slidev.nav.next()">Mouse events</a>
- <a @click="$slidev.nav.go($page + 3)">Moving the mouse: mouseover/out, mouseenter/leave</a>
- <a @click="$slidev.nav.go($page + 3)">Drag'n'Drop with mouse events</a>
- <a @click="$slidev.nav.go($page + 3)">Pointer events</a>
- <a @click="$slidev.nav.go($page + 3)">Keyboard: keydown and keyup</a>
- <a @click="$slidev.nav.go($page + 3)">Scrolling</a>

---
hideInToc: true
---

# Mouse events

<v-clicks>

JavaScript mouse events are actions that can be detected by a web page when the user interacts with the mouse. These interactions are crucial for executing scripts on user actions, making websites more interactive.

Key Mouse Events

- `click`: Detects when a button is pressed and released on a single element.

- `dbclick`: Occurs when an element is clicked twice in quick succession.

- `mouseover`: Fired when the mouse comes over an element.

- `mousemove`: Occurs when the mouse is moving while over an element.

- `mousedown`: Fires when a button is pressed down on an element.

- `mouseup`: Detects when a mouse button is released over an element.

- `contextmenu`: Fired when the right mouse button is pressed on an element to open the context menu.

</v-clicks>

---
hideInToc: true
---

# Implementing Basic Mouse Event Handlers

<v-clicks>

Example: Creating a Clickable Button

Consider a button that changes its color every time it is clicked. This simple interaction can be implemented using the click event.

 <div grid grid-col-2>

```html
<div>
  <button id="colorButton">Click me to change color</button>
</div>
```

```js
document.getElementById('colorButton').addEventListener('click', function () {
  this.style.backgroundColor =
    this.style.backgroundColor === 'red' ? 'blue' : 'red'
})
```

</div>

</v-clicks>

---
hideInToc: true
---

# mouseover/out, mouseenter/leave

<v-clicks>

Mouse movement events in JavaScript provide developers with the ability to react to the cursor's movement over elements within a web page.

These events are essential for creating interactive and responsive interfaces that respond to user actions. This guide will explore the differences between mouseover, mouseout, mouseenter, and mouseleave events, offering practical examples to demonstrate their usage

The mouseover event occurs when a mouse pointer comes over an element, and mouseout – when it leaves

Example: Text Highlighting on Mouse Over

<div flex='~ row' gap='10'>

<div>

![alt mouseout/mouseover](/image2.png)

```html
<div>
  <p id="hoverText">Hover over me to highlight.</p>
</div>
```

</div>

```js
<script>
document.getElementById('box')
  .addEventListener('mouseover', function() {
    this.style.backgroundColor = 'cyan';
  });
document.getElementById('box')
  .addEventListener('mouseout', function() {
    this.style.backgroundColor = 'lightblue';
  });
</script>
```

</div>

</v-clicks>

---
hideInToc: true
---

# Events mouseenter and mouseleave

<v-clicks>

- Events mouseenter/mouseleave do not bubble

- When the pointer enters an element – mouseenter triggers. The exact location of the pointer inside the element or its descendants doesn’t matter.

When the pointer leaves an element – mouseleave triggers.

<div grid="~ cols-2" gap='10'>

```html
<div id="parent" onmouseenter="mouselog(event)" onmouseleave="mouselog(event)">
  parent
  <div id="child">child</div>
</div>

<textarea id="text"></textarea>
<input type="button" onclick="text.value=''" value="Clear" />
```

<!-- prettier-ignore -->
```js
function mouselog(event) {
  let d = new Date()
  text.value +=
  `${d.getHours().toString().padStart(2, '0')}
  :${d.getMinutes().toString().padStart(2, '0')}
  :${d.getSeconds().toString().padStart(2, '0')} 
  | ${event.type} [target: ${event.target.id}]\n`;

  text.scrollTop = text.scrollHeight
}
```

</div>

`event.button` is a number that represents the mouse button that was pressed when the event was triggered. The value is 0 for the left button, 1 for the middle button, and 2 for the right button. 3 and 4 are additional buttons depending on the mouse.

</v-clicks>

---
hideInToc: true
---

# Modifier keys: Shift, Alt, Ctrl, Meta

<v-clicks>

<div class="text-[10px] leading-tight">

- The event object also has properties that allow us to check whether the Ctrl, Alt, and Shift keys were pressed during the event.

- These properties are: `event.shiftKey`, `event.altKey`, `event.ctrlKey`, and `event.metaKey`.

- For instance, to check if the Ctrl key was pressed during a click:

</div>

<div grid="~ cols-2" gap='10'>

```js
element.onclick = function (event) {
  if (event.ctrlKey) {
    alert('The combination of keys is pressed!')
  }
}
```

```html
<button id="button">Alt+Shift+Click on me!</button>
<script>
  button.onclick = function (event) {
    if (event.altKey && event.shiftKey) { alert('Hooray!') }
  }
</script>
```

</div>

<div class="text-[10px] leading-tight">

Coordinates: clientX/clientY, pageX/pageY

- The event object has the coordinates of the mouse pointer in event.clientX/event.clientY (relative to the window) and event.pageX/event.pageY (relative to the whole document).

</div>

<div grid="~ cols-2" gap='10'>

```html
<input
  class="input"
  onmousemove="this.value=event.clientX+':'+event.clientY"
  value="Mouse over me"
/>
```

<div>
<input class="input" onmousemove="this.value=event.clientX+':'+event.clientY" value="Mouse over me">
</div>

</div>

</v-clicks>

---
hideInToc: true
layout: iframe
url: https://www.toptal.com/developers/keycode
---

---
hideInToc: true
layout: full
dragPos:
  square: Left,Top,Width,Height,Rotate
---

# Drag'n'Drop with mouse events

<v-clicks>

Drag-and-drop is a user interface interaction that allows users to grab an object and move it to a different location on the screen. This interaction is common in file management on your computer, arranging items in games, or editing tools online. Double click the JS logo and drag.The basic Drag’n’Drop algorithm looks like this:

<div class="overflow-auto h-full pb40 grid grid-cols-[70%_30%] gap-10">

```js
ball.onmousedown = function (event) {
  // (1) prepare to moving: make absolute and on top by z-index
  ball.style.position = 'absolute'
  ball.style.zIndex = 1000

  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(ball)

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    ball.style.left = pageX - ball.offsetWidth / 2 + 'px'
    ball.style.top = pageY - ball.offsetHeight / 2 + 'px'
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY)

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY)
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove)

  // (3) drop the ball, remove unneeded handlers
  ball.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove)
    ball.onmouseup = null
  }
}
```

<div class="grid place-items-center">
<img v-drag="square" class="i-logos-javascript text-7xl "></img>
</div>

</div>

</v-clicks>

---
hideInToc: true
layout: full
---

# Pointer events

<v-clicks>

Pointer events are a modern way to handle input from a variety of pointing devices, such as a mouse, a pen/stylus, a touchscreen, and so on.
Pointer events are named similarly to mouse events. With just three different events such as.

- `pointcancel`
- `gotpointercapture`
- `lostpointercapture`

`pointerId`: the unique identifier of the pointer causing the event. Browser-generated. Allows us to handle multiple pointers, such as a touchscreen with stylus and multi-touch (examples will follow).

`pointerType` – the pointing device type. Must be a string, one of: “mouse”, “pen” or “touch”.

`Width` - the width of the area where the pointer (e.g. a finger) touches the device. Where unsupported, e.g. for a mouse, it’s always 1.

`Height`: the height of the area where the pointer touches the device. Where unsupported, it’s always 1.

`pressure`: the pressure of the pointer tip, in range from 0 to 1. For devices that don’t support pressure must be either 0.5 (pressed) or 0.

</v-clicks>

---
hideInToc: true
---

# Keyboard: keydown and keyup

<v-clicks>

Before we get to keyboard, please note that on modern devices there are other ways to “input something”. For instance, people use speech recognition (especially on mobile devices) or copy/paste with the mouse.

So if we want to track any input into an `<input>` field, then keyboard events are not enough. There’s another event named input to track changes of an `<input>` field, by any means. And it may be a better choice for such task. More on it will be discussed later Events: change, input, cut, copy, paste.

Keyboard events should be used when we want to handle keyboard actions (virtual keyboard also counts). For instance, to react on arrow keys Up and Down or hotkeys (including combinations of keys).

The keydown events happens when a key is pressed down, and then keyup – when it’s released.
event.code and event.key

The key property of the event object allows to get the character, while the code property of the event object allows to get the “physical key code”.

For instance, the same key Z can be pressed with or without Shift. That gives us two different characters: lowercase <kbd>z</kbd> and uppercase Z.

The `event.key` is exactly the character, and it will be different. But event.code is the same:

</v-clicks>

---
hideInToc: true
class: overflow-y-auto
---

# Scrolling

<v-clicks>

The scroll event allows reacting to a page or element scrolling. There are quite a few good things we can do here.

For instance:

Show/hide additional controls or information depending on where in the document the user is.
Load more data when the user scrolls down till the end of the page.

Here’s a small function to show the current scroll:

```js
window.addEventListener('scroll', function () {
  document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px'
})
```

The scroll event works both on the window and on scrollable elements.

<Scroll />

</v-clicks>
