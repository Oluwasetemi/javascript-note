---
layout: center
transition: slide-up
hideInToc: true
---

# UI Events

<div mt-2 />

- Mouse events
- Moving the mouse: mouseover/out, mouseenter/leave
- Drag'n'Drop with mouse events
- Pointer events
- Keyboard: keydown and keyup
- Scrolling

---
hideInToc: true
layout: center
---

# Mouse events

<v-clicks>

JavaScript mouse events are actions that can be detected by a web page when the user interacts with the mouse. These interactions are crucial for executing scripts on user actions, making websites more interactive.

Key Mouse Events

- click- Detects when a button is pressed and released on a single element.

- dbclick- Occurs when an element is clicked twice in quick succession.

- mouseover- Fired when the mouse comes over an element.

- mousemove - Occurs when the mouse is moving while over an element.

- mousedown - Fires when a button is pressed down on an element.

- mouseup - Detects when a mouse button is released over an element.

Implementing Basic Mouse Event Handlers

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

# Moving the mouse: mouseover/out, mouseenter/leave

<v-clicks>

Mouse movement events in JavaScript provide developers with the ability to react to the cursor's movement over elements within a web page. These events are essential for creating interactive and responsive interfaces that respond to user actions. This guide will explore the differences between mouseover, mouseout, mouseenter, and mouseleave events, offering practical examples to demonstrate their usage

The mouseover event occurs when a mouse pointer comes over an element, and mouseout – when it leaves

![alt mouseout/mouseover](image.png)

Example: Text Highlighting on Mouse Over

<div flex='~ row' gap='10'>

```html
<div>
  <p id="hoverText">Hover over me to highlight.</p>
</div>
```

```js
<script>
    document.getElementById('box').addEventListener('mouseover', function() {
        this.style.backgroundColor = 'cyan';
    });
    document.getElementById('box').addEventListener('mouseout', function() {
        this.style.backgroundColor = 'lightblue';
    });
</script>

```

</div>

</v-clicks>

<br/>

<v-clicks>

## Events mouseenter and mouseleave

- Events mouseenter/mouseleave do not bubble

- When the pointer enters an element – mouseenter triggers. The exact location of the pointer inside the element or its descendants doesn’t matter.

When the pointer leaves an element – mouseleave triggers.

<div flow="~ row" gap='10'>

```html
<div id="parent" onmouseenter="mouselog(event)" onmouseleave="mouselog(event)">
  parent
  <div id="child">child</div>
</div>

<textarea id="text"></textarea>
<input type="button" onclick="text.value=''" value="Clear" />
```

```js
function mouselog(event) {
  let d = new Date()
  text.value +=
    `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} | ${event.type} [target: ${event.target.id}]\n`.replace(
      /(:|^)(\d\D)/,
      '$10$2',
    )
  text.scrollTop = text.scrollHeight
}
```

</div>

</v-clicks>

---
hideInToc: true
---

# Drag'n'Drop with mouse events

<v-clicks>

Drag-and-drop is a user interface interaction that allows users to grab an object and move it to a different location on the screen. This interaction is common in file management on your computer, arranging items in games, or editing tools online

- The basic Drag’n’Drop algorithm looks like this:

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

</v-clicks>

---
hideInToc: true
---

# Pointer events

<v-clicks>

Pointer events are a modern way to handle input from a variety of pointing devices, such as a mouse, a pen/stylus, a touchscreen, and so on.
Pointer events are named similarly to mouse events. With just three different events such as.

- pointcancel
- gotpointercapture
- lostpointercapture

Pointer events have the same properties as mouse events, such as clientX/Y, target, etc., plus some others:

<!-- <div grid="~ col-2" gap-10> -->

pointerId: the unique identifier of the pointer causing the event. Browser-generated. Allows us to handle multiple pointers, such as a touchscreen with stylus and multi-touch (examples will follow).

pointerType – the pointing device type. Must be a string, one of: “mouse”, “pen” or “touch”.

Width - the width of the area where the pointer (e.g. a finger) touches the device. Where unsupported, e.g. for a mouse, it’s always 1.

Height: the height of the area where the pointer touches the device. Where unsupported, it’s always 1.

pressure: the pressure of the pointer tip, in range from 0 to 1. For devices that don’t support pressure must be either 0.5 (pressed) or 0.

<!-- </div> -->

</v-clicks>

---
hideInToc: true
---

# Keyboard: keydown and keyup

<v-clicks>

Before we get to keyboard, please note that on modern devices there are other ways to “input something”. For instance, people use speech recognition (especially on mobile devices) or copy/paste with the mouse.

So if we want to track any input into an `<input>` field, then keyboard events are not enough. There’s another event named input to track changes of an `<input>` field, by any means. And it may be a better choice for such task. We’ll cover it later in the chapter Events: change, input, cut, copy, paste.

Keyboard events should be used when we want to handle keyboard actions (virtual keyboard also counts). For instance, to react on arrow keys Up and Down or hotkeys (including combinations of keys).

Keydown and keyup

The keydown events happens when a key is pressed down, and then keyup – when it’s released.
event.code and event.key

The key property of the event object allows to get the character, while the code property of the event object allows to get the “physical key code”.

For instance, the same key Z can be pressed with or without Shift. That gives us two different characters: lowercase z and uppercase Z.

The event.key is exactly the character, and it will be different. But event.code is the same:

</v-clicks>

---
hideInToc: true
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

In action:

Current scroll = 284px

The scroll event works both on the window and on scrollable elements.

</v-clicks>
