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
---

# Mouse events

JavaScript mouse events are actions that can be detected by a web page when the user interacts with the mouse. These interactions are crucial for executing scripts on user actions, making websites more interactive.

- Key Mouse Events

`click` -  Detects when a button is pressed and released on a single element.

`dbclick` - Occurs when an element is clicked twice in quick succession.

`mouseover` - Fired when the mouse comes over an element.

`mousemove` - Occurs when the mouse is moving while over an element.

`mousedown` - Fires when a button is pressed down on an element.

`mouseup` - Detects when a mouse button is released over an element.

- Implementing Basic Mouse Event Handlers

Example: Creating a Clickable Button

Consider a button that changes its color every time it is clicked. This simple interaction can be implemented using the click event

 <div flex='~ row' gap-10>

```html
    <div>
    <button id="colorButton">Click me to change color</button>
</div>
```

```js
    document.getElementById('colorButton').addEventListener('click', function() {
        this.style.backgroundColor = this.style.backgroundColor === 'red' ? 'blue' : 'red';
    });

```

</div>

---
hideInToc: true
---

# Moving the mouse: mouseover/out, mouseenter/leave

<v-clicks>

Mouse movement events in JavaScript provide developers with the ability to react to the cursor's movement over elements within a web page. These events are essential for creating interactive and responsive interfaces that respond to user actions. This guide will explore the differences between mouseover, mouseout, mouseenter, and mouseleave events, offering practical examples to demonstrate their usage

The mouseover event occurs when a mouse pointer comes over an element, and mouseout – when it leaves

![alt mouseout/mouseover](image.png)

Example: Text Highlighting on Mouse Over
<div flex='~ row' gap='10>'

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

- Events mouseenter and mouseleave
    Events mouseenter/mouseleave do not bubble

    When the pointer enters an element – mouseenter triggers. The exact location of the pointer inside the element or its descendants doesn’t matter.

    When the pointer leaves an element – mouseleave triggers.

<div flow="~ row" gap='10'>

```html
    <div id="parent" onmouseenter="mouselog(event)" onmouseleave="mouselog(event)">parent
    <div id="child">child</div>
  </div>

  <textarea id="text"></textarea>
  <input type="button" onclick="text.value=''" value="Clear"/>

```

```js

 function mouselog(event) {
  let d = new Date();
  text.value += `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} | ${event.type} [target: ${event.target.id}]\n`.replace(/(:|^)(\d\D)/, '$10$2');
  text.scrollTop = text.scrollHeight;
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

    ball.onmousedown = function(event) {
  // (1) prepare to moving: make absolute and on top by z-index
  ball.style.position = 'absolute';
  ball.style.zIndex = 1000;

  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(ball);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
    ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  ball.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    ball.onmouseup = null;
  };

};

```

![alt text](../../../../AppData/Local/Temp/ball.svg)

</v-clicks>

---
hideInToc: true
---

# Pointer events

---
hideInToc: true
---

# Keyboard: keydown and keyup

---
hideInToc: true
---

# Scrolling
