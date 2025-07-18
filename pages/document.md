---
layout: center
transition: slide-up
hideInToc: true
---

# Document

<div mt-2 />

- <a @click="$slidev.nav.next()">DOM tree and Walking the DOM</a>
- <a @click="$nav.go($nav.currentPage+8)">Searching: `getElement*`, `querySelector*`</a>
- <a @click="$nav.go($nav.currentPage+9)">Node properties: type, tag and contents</a>
- <a @click="$nav.go($nav.currentPage+10)">Attributes and properties</a>
- <a @click="$nav.go($nav.currentPage+11)">Modifying the document</a>
- <a @click="$nav.go($nav.currentPage+14)">Styles and classes</a>
- <a @click="$nav.go($nav.currentPage+15)">Element size and scrolling</a>
- <a @click="$nav.go($nav.currentPage+16)">Window sizes and scrolling</a>
- <a @click="$nav.go($nav.currentPage+19)">Coordinates</a>

---
hideInToc: true
clicksStart: 1
---

# window, DOM, CSSOM and BOM

<v-clicks>

ECMAScript is a language specification. It doesn't cover the browser environment. The browser environment is provided by the host environment. The host environment provides the global object `window` and the `document` object. JavaScript contains the core language and the host environment provides the objects to interact with the browser environment.

JavaScript contains Object, Array, Function and many others as described by the [ECMAScript 262](https://tc39.es/ecma262/){.text-gradient}.

[DOM](https://dom.spec.whatwg.org/){.text-gradient} - Document Object Model is the interface between JavaScript and HTML + CSS. It allows JavaScript to interact with the HTML and CSS. `document` object is the main object of the [DOM](https://dom.spec.whatwg.org/){.text-gradient}. It represents the web page described in an object.

[CSSOM](https://www.w3.org/TR/cssom-1/){.text-gradient} - CSS Object Model is the interface between JavaScript and CSS. It allows JavaScript to interact with the CSS.

[BOM](https://html.spec.whatwg.org/){.text-gradient} - Browser Object Model is the interface between JavaScript and the browser. It allows JavaScript to interact with the browser. `window` object is the main object of the BOM. It represents the browser window. It allows web scripting - allowing JavaScript to interact with the browser as a interface to the host computer. It provides objects like `navigator`, `screen`, `location`, `history`, `XMLHttpRequest`, `setTimeout`, `setInterval` etc. Additional specification can be found [WHATWG](https://spec.whatwg.org/){.text-gradient}.

</v-clicks>

---
hideInToc: true
clicksStart: 1
---

# DOM tree and Walking the DOM

<v-clicks>

HTML tags are the core of DOM. The browser converts the HTML tags into a tree structure called the DOM tree. The DOM tree is a representation of the HTML tags in a tree structure. The DOM tree is a hierarchical representation of the HTML tags. The DOM tree is a collection of nodes. Each node is an object representing a part of the document.

```js{monaco-run} {autorun: false}
console.log(document.documentElement); console.log(document.body); console.log(document.head); console.log(document.title);
```

The nodes are connected in a tree structure, parent-child relationship, sibling relationship, next-previous relationship, first-last relationship, ancestor-descendant relationship, root-leaf relationship, text-element relationship, comment-element relationship, and in a document type.

<span>Tags <span class="i-mdi-forward color-amber">-></span></span>Elements <span class="i-mdi-forward color-amber">-></span> Nodes

<span>Text <span class="i-mdi-forward color-amber">-></span></span>Text Nodes

<span>Comment <span class="i-mdi-forward color-amber">-></span></span>Comment Nodes

</v-clicks>

---
hideInToc: true
clicksStart: 1
---

# DOM, BOM and CSSOM {{ $page }}

<v-clicks>

```js{monaco-run} {autorun: false}
const element = document.querySelector(`[data-slidev-no="238"]`)
const h1 = element.querySelector('h1');
console.log(h1.textContent)

h1.classList.add('text-gradient');
setTimeout(() => h1.classList.remove('text-gradient'), 3000); // return back
```

This will lead us to the next section where we discuss the first steps in modifying the document. The ability to search for elements in the DOM tree is a key feature to understand how to modify the document.

<div flex="~ row" gap-8>

```html
<!doctype html>
<html>
  <head>
    <title>Title</title>
  </head>
  <body>
    Body content
    <!-- comment -->
    <p>Hello World</p>
  </body>
</html>
```

<DOM />

</div>

</v-clicks>

---
hideInToc: true
clicksStart: 1
layout: image
name: DOM Traversal Image
---

![](/children-structure-nodes.svg)

<!--
<tldraw class="w-200 h-140" />
-->

---
hideInToc: true
---

# Walking the DOM {{ $page }}

<v-clicks>

You can now traverse the DOM tree using the following based the relationships between the nodes:

- `parentNode`, `childNodes`, `firstChild`, `lastChild`, `nextSibling`, `previousSibling`
- `parentElement`, `children`, `firstElementChild`, `lastElementChild`, `nextElementSibling`, `previousElementSibling`
- `nodeType`, `nodeName`, `nodeValue`

```js{monaco-run} {autorun: false}
const element = document.querySelector(`[data-slidev-no="240"]`)

console.log(element.parentNode);console.log(element.parentElement)
console.log(element.childNodes.length);console.log(element.children.length)
console.log(element.firstChild);console.log(element.firstElementChild)
console.log(element.lastChild);console.log(element.lastElementChild)
console.log(element.nextSibling);console.log(element.nextElementSibling)
console.log(element.previousSibling);console.log(element.previousElementSibling)
console.log(element.nodeType);console.log(element.nodeName);console.log(element.nodeValue)
```

</v-clicks>

---
hideInToc: true
clicksStart: 1
---

# Walking the DOM: Tables {{ $page }}

<v-clicks>

[Tables](https://html.spec.whatwg.org/multipage/tables.html) have a special structure. They have `rows`, `tBodies`, `tHead`, `tFoot` and `cells`. We will look at [forms](https://html.spec.whatwg.org/multipage/forms.html) later.

<!-- draw a markdown table -->

| School | Courses  |           |           |       |
| ------ | -------- | --------- | --------- | ----- |
| SOE    | Frontend | Backend   | Cloud     | Cyber |
| SOD    | Design   | Marketing | Marketing |       |

```js{monaco-run} {autorun: false}
// TODO: Fix the bug on the querySelector
const table = document.querySelector(`[data-slidev-no="241"]`)
console.log(table);
console.log(table.rows); console.log(table.tBodies); console.log(table.tHead); console.log(table.tFoot);
console.log(table.rows[0]); console.log(table.rows[0].cells); console.log(table.rows[0].cells[0]); //tbody //tr //td //th
//cells, //sectionRowIndex, //rowIndex, //cellIndex
```

</v-clicks>

---
hideInToc: true
transition: fade
clicksStart: 1
---

# Food for Thought{title="Use ChaptGPT for your research"}

<div :class="$clicks >= 1 ? 'op50' : 'scale-70'">

- What is the difference between `childNodes` and `children`?
- What is the difference between `NODELIST` and `HTMLCOLLECTION`?
- Is it true that `elem.lastChild.nextSibling` is always null?

</div>

<v-click>

<details>
<summary>Answer</summary>

- `childNodes` includes all nodes, `children` includes only element nodes.

- `NODELIST` is a collection of nodes, `HTMLCOLLECTION` is a collection of elements. `HTMLCOLLECTION` is a live collection, `NODELIST` is a static collection. `HTMLCOLLECTION` has additional methods like `namedItem`, `namedItem`, `item`, `length` and it is read-only

- Yes, it is true that `elem.lastChild.nextSibling` is always null. This is because the `lastChild` property refers to the last child node of an element, and there can be no nodes after the last one. Therefore, its `nextSibling` will always be null, as there are no further siblings beyond the last child.

</details>

</v-click>

---
hideInToc: true
clicksStart: 1
---

# Searching: getElement*, querySelector* {{ $page }}

<v-clicks>

You can search for elements in the DOM tree using the following methods:

- `getElementById`, `getElementsByClassName`, `getElementsByTagName`, `getElementsByName`(live - always reflect the current state of the document and “auto-update” when it changes.)
- `querySelector`, `querySelectorAll`
- `matches`, `closest`

```js{monaco-run} {autorun: false}
const element = document.querySelector(`[data-slidev-no="243"]`);
// add a id, class to the element
console.log(element.id); console.log(element.className); console.log(element.tagName); console.log(element.tagName.toLowerCase());console.log(element.name);
```

</v-clicks>

---
hideInToc: true
clicksStart: 1
---

# Node properties: type, tag and contents {{ $page }}

<v-clicks>

Important classes to understand the node properties includes - `EventTarget`, `Node`, `Element`, `HTMLElement`-`HTMLBodyElement`-other interface discussed in the [HTML Note](https://karatu.oluwasetemi.dev/85), `Document`-`HTMLDocument`-`DocumentFragment`, `CharacterData`-`Text`-`Comment`.

```js{monaco-run} {autorun: false}
const element = document.querySelector(`[data-slidev-no="244"]`);

console.dir(element)
```

## `innerHTML`, `outerHTML`, `textContent`, `innerText`, `nodeValue` or `data`, `hidden`

```js{monaco-run} {autorun: false}
const element = document.querySelector(`[data-slidev-no="244"]`);

console.log(element.innerHTML); console.log(element.outerHTML); console.log(element.textContent); console.log(element.innerText); console.log(element.nodeValue); console.log(element.data); console.log(element.hidden);
```

NB: other properties include `id`, `className`, `tagName`, `name`, `type`, `value`, `checked`, `selected`, `href`, `src`, `alt`, `title`, `lang`, `dir`, `style`, `dataset`, `attributes`, `classList`.
</v-clicks>

---
hideInToc: true
clicksStart: 1
---

# Attributes and properties {{ $page }}

<v-clicks>

Attributes are the properties of the elements. They are the key-value pairs of the elements from the [convertion]{.text-xl.font-fast.text-red title='parsed or read'} of HTML to DOM. You can add your own properties to the element but the html attributes set is fixed according to the [specification](https://html.spec.whatwg.org/){.text-gradient}.

```js{monaco-run} {autorun: false}
const element = document.querySelector(`[data-slidev-no="245"]`);

console.log(element.getAttribute('data-slidev-no')); console.log(element.getAttribute('data-slidev-no') === element.dataset.slidevNo); console.log(element.dataset.slidevNo);
```

## `setAttribute`, `removeAttribute`, `hasAttribute`, `attributes`

```js{monaco-run} {autorun: false}
const element = document.querySelector(`[data-slidev-no="245"]`);

element.setAttribute('data-slidev-no', '96'); console.log(element.dataset.slidevNo);
element.removeAttribute('data-slidev-no'); console.log(element.dataset.slidevNo);
console.log(element.hasAttribute('data-slidev-no')); console.log(element.attributes);
```

</v-clicks>

---
hideInToc: true
clicksStart: 1
---

# Modifying the document {{ $page }}

<v-clicks>

You can modify the document with several methods provided that the html has been written and parsed into the DOM tree. You can add, remove, replace, clone, insert, append, prepend, before, after. You can also create new elements, text nodes, comment nodes, document fragments, and document type nodes.

Consider the following `html` and `css`.

```html
<style>
  .alert {
    padding: 15px;
    border: 1px solid #d6e9c6;
    border-radius: 4px;
    color: #3c763d;
    background-color: #dff0d8;
    --uno: p-[15px] border border-[#d6e9c6] rounded-[4px] bg-[#dff0d8]
      text-[#3c763d]; /* @apply in place of --uno */
  }
</style>
<div class="alert">
  <strong>Hi there!</strong> You've read an important message.
</div>
```

<style>
/* .alert {
  padding: 15px;
  border: 1px solid #d6e9c6;
  border-radius: 4px;
  color: #3c763d;
  background-color: #dff0d8;
} */

.alert {
  @apply p-[15px] border border-[#d6e9c6] rounded-[4px] bg-[#dff0d8] text-[#3c763d];
}
</style>

<div class="alert">
  <strong>Hi there!</strong> You've read an important message.
</div>

</v-clicks>

---
hideInToc: true
name: modify the document continued
clicksStart: 1
---

<div class="p-[15px] border border-[#d6e9c6] rounded-[4px] bg-[#dff0d8] text-[#3c763d]">
  <strong>Hi there!</strong> You've read an important message. {{ $page }}
</div>

<v-clicks>

Let us create this element using JavaScript.

```js{monaco-run} {autorun: false}
const div = document.createElement('div');
div.className = "alert p-[15px] border border-[#d6e9c6] rounded-[4px] bg-[#dff0d8] text-[#3c763d]";
// div.innerHTML = '<strong>Hi there!</strong> You\'ve read an important message.';
const textNode1 = document.createTextNode('Hi there!');
const strong = document.createElement('strong');
const textNode2 = document.createTextNode(' You\'ve read an important message.');
strong.appendChild(textNode1);
div.appendChild(strong);
div.appendChild(textNode2);

const element = document.querySelector(`[data-slidev-no="247"] .default`);
element.prepend(div);
```

More insertion methods are `append`, `before`, `after`, `replaceWith`, `remove`, `cloneNode`, `insertBefore`, `insertAdjacentElement`, `insertAdjacentHTML`, `insertAdjacentText`.

`element.insertAdjacentElement('where', element);` // beforebegin, afterbegin, beforeend, afterend. Replace Element with HTML or Text.
</v-clicks>

---
hideInToc: true
clicksStart: 1
---

# DocumentFragment {{ $page }}

<v-clicks>

`DocumentFragment` is a lightweight container that can hold nodes. It is not part of the main DOM tree. It is used to hold nodes before they are inserted into the main DOM tree. It is used to improve performance when you want to insert multiple nodes at once.

```js{monaco-run} {autorun: false}
const fragment = new DocumentFragment();

const div = document.createElement('div');
div.className = "alert p-[15px] border border-[#d6e9c6] rounded-[4px] bg-[#dff0d8] text-[#3c763d]";
const textNode1 = document.createTextNode('Hi there!');
const strong = document.createElement('strong');
const textNode2 = document.createTextNode(' You\'ve read an important message.');
strong.appendChild(textNode1);
div.appendChild(strong);
div.appendChild(textNode2);

fragment.appendChild(div);
// fragment.appendChild(div.cloneNode(true));

const element = document.querySelector(`[data-slidev-no="248"] .default`);
element.prepend(fragment);
```

</v-clicks>

---
hideInToc: true
clicksStart: 1
---

# Styles and classes {{ $page }}

<v-clicks>

You can modify the styles and classes of the elements using the following methods:

- `style`, `classList`
- `getComputedStyle`

```js{monaco-run} {autorun: false}

const element = document.querySelector(`[data-slidev-no="249"]`);

element.style.color = 'red'; element.style.backgroundColor = 'yellow'; element.style.padding = '15px'; element.style.border = '1px solid #d6e9c6'; element.style.borderRadius = '4px';
element.style.setProperty('--uno', 'p-[15px] border border-[#d6e9c6] rounded-[4px] bg-[#dff0d8] text-[#3c763d]');

element.classList.add('alert'); element.classList.add('p-[15px]'); element.classList.add('border'); element.classList.add('border-[#d6e9c6]'); element.classList.add('rounded-[4px]'); element.classList.add('bg-[#dff0d8]'); element.classList.add('text-[#3c763d]');
element.classList.remove('alert'); element.classList.remove('p-[15px]'); element.classList.remove('border'); element.classList.remove('border-[#d6e9c6]'); element.classList.remove('rounded-[4px]'); element.classList.remove('bg-[#dff0d8]'); element.classList.remove('text-[#3c763d]');

console.log(getComputedStyle(element).color); console.log(getComputedStyle(element).backgroundColor); console.log(getComputedStyle(element).padding); console.log(getComputedStyle(element).border); console.log(getComputedStyle(element).borderRadius);
```

</v-clicks>

---
hideInToc: true
---

# Element size and scrolling {{ $page }}

<v-clicks>

You can get the size and position of the elements using the following methods:

- `offsetWidth`, `offsetHeight`, `offsetLeft`, `offsetTop`, `offsetParent`
- `clientWidth`, `clientHeight`, `clientLeft`, `clientTop`
- `scrollWidth`, `scrollHeight`, `scrollLeft`, `scrollTop`

```js{monaco-run} {autorun: false}
const element = document.querySelector(`[data-slidev-no="250"] .view-lines`);

console.log(element.offsetWidth); console.log(element.offsetHeight); console.log(element.offsetLeft); console.log(element.offsetTop); console.log(element.offsetParent);
console.log(element.clientWidth); console.log(element.clientHeight); console.log(element.clientLeft); console.log(element.clientTop);
console.log(element.scrollWidth); console.log(element.scrollHeight); console.log(element.scrollLeft); console.log(element.scrollTop);
```

NB: `offsetWidth` includes padding, border, and scrollbar, `clientWidth` includes padding, `scrollWidth` includes padding and overflowed content. Accurate measurements are gotten from [`getBoundingClientRect`](https://mdn.io/getboundingclientrect) method. Its returns a `DOMRect` object with the size of an element and its position relative to the viewport. `x`, `y`, `width`, `height`, `top`, `right`, `bottom`, `left`. Most geometry properties are read-only but `scrollLeft` and `scrollTop` can be changed.

</v-clicks>

---
hideInToc: true
clicksStart: 1
---

# Window sizes and scrolling {{ $page }}

<v-clicks>

You can get the size and position of the window using the following methods:

- `innerWidth`, `innerHeight`, `clientWidth`, `clientHeight` of the `document.documentElement`
- `outerWidth`, `outerHeight`
- `scrollX` - ~~`pageXOffset`~~, `scrollY` - ~~`pageYOffset`~~, `scrollWidth`, `scrollHeight`
- `screenX`, `screenY`
- `screenLeft`, `screenTop`

```js{monaco-run} {autorun: false}
console.log({innerWidth: window.innerWidth, innerHeight: window.innerHeight, clientWidth: document.documentElement.clientWidth, clientHeight: document.documentElement.clientHeight});
console.log(window.outerWidth); console.log(window.outerHeight);
console.log(window.scrollX); console.log(window.scrollY);
console.log(window.screenX); console.log(window.screenY);
console.log(window.screenLeft); console.log(window.screenTop);
```

NB: `innerWidth` and `innerHeight` are the viewport size but always prefer `document.documentElement`\* `clientHeight` and `clientWidth`, `outerWidth` and `outerHeight` are the window size, `scrollX` and `scrollY` are the scroll position, `screenX` and `screenY` are the screen position.

</v-clicks>

---
hideInToc: true
name: More on Window sizes and scrolling
clicksStart: 1
---

```js{monaco-run} {autorun: false}
window.addEventListener('resize', () => {
  console.log({innerWidth: window.innerWidth, innerHeight: window.innerHeight, clientWidth: document.documentElement.clientWidth, clientHeight: document.documentElement.clientHeight});
});
```

---
hideInToc: true
name: Getting the scrollHeight and scrollLeft
clicksStart: 1
---

<v-clicks>

```js
let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);

let scrollLeft = Math.max(
  document.body.scrollLeft, document.documentElement.scrollLeft
  document.body.offsetLeft, document.documentElement.offsetLeft
  document.body.clientLeft, document.documentElement.clientLeft
);
```

Scrolling can be done using `scrollTo(pageX, pageY)`, `scrollBy(x, y)`, `scrollIntoView(top)` methods or use the `scroll` event or auto-increase/descrease the `scrollLeft` and `scrollTop` on `document.documentElement` properties.

You can disable the scrolling using `overflow: hidden` on the `html` or `body` element.

```js
document.body.style.overflow = 'hidden' // enable by setting it to ''
```

</v-clicks>

---
hideInToc: true
clicksStart: 1
---

# Coordinates {{ $page }}

<v-clicks>

This allow movement of elements on the screen and can be done relative to the window similar to the behavior of `position: fixed` `clientY` or `clientX` or relative to the document similar to the behavior of `position: absolute` `pageY` or `pageX`.Back to `getBoundingClientRect` methods, it returns a `DOMRect` object with the size of an element and its position relative to the viewport. `x`, `y`, `width`, `height`, `top`, `right`, `bottom`, `left`. `x/y` and `width/height` full describes the rectangle.

left = x, top = y, right = x + width, bottom = y + height.

`elementFromPoint(x, y)` returns the topmost element at the specified coordinates.

Remember that element appended to a page using coordinates from another element as `top/left` will be positioned fixed to the element and not the page, setting pos-absolute will make it relative to the page.

```js{monaco-run} {autorun: false}
// FIX: use the deprecated pageXOffset and pageYOffset with the right values
const element = document.querySelector(`[data-slidev-no="254"] h1`);
function getCoords(elem) { let box = elem.getBoundingClientRect(); return { top: box.top + window.pageYOffset, right: box.right + window.pageXOffset, bottom: box.bottom + window.pageYOffset, left: box.left + window.pageXOffset }; }
console.log(getCoords(element));
```

</v-clicks>

---
hideInToc: true
name: Class Activity
clicksStart: 1
---

Build out the content of the image with html,css. Use JavaScript to append a note(tooltip) on all the three corners of an element as shown in the image. Create a function `positionAt(anchor, position, elem)` that positions elem, depending on position near anchor element. Position can be `top`, `right`, `bottom` according to the image.

BONUS: The function should be able to handle the case when there is not enough space for the tooltip to be displayed in the specified position. Consider implementing [floating ui](https://floating-ui.com/) to help.

![alt text](/image.png){.w-full.h-80}

---
hideInToc: true
name: Assignment
clicksStart: 1
---

# Assignment

<div mt-2 />

[Use JavaScript to create the class activity image entirely.]{.text-xl}

<GeneralQuote @click="$slidev.nav.next()" quote="See you on the other side, where we will discuss the Events in JavaScript, May the fourth be with you." />

# References

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model){.text-gradient}
- [JavaScriptdotInfo](https://javascript.info/dom-nodes){.text-gradient}
