---
layout: center
transition: slide-up
hideInToc: true
---

# Prototypes, Inheritance and Classes

<TocIcon />

<div mt-2 />

- <a @click="$slidev.nav.go($nav.currentPage+1)">Prototypal Inheritance and Prototype Chain(F.prototype)</a>
- <a @click="$slidev.nav.go($nav.currentPage+2)">Native Prototypes and Prototype Methods</a>
- <a @click="$slidev.nav.go($nav.currentPage+3)">Class basic syntax</a>
- <a @click="$slidev.nav.go($nav.currentPage+4)">Class Inheritance</a>
- <a @click="$slidev.nav.go($nav.currentPage+5)">Static Properties and Methods</a>
- <a @click="$slidev.nav.go($nav.currentPage+6)">Private and Protected Properties and Methods</a>
- <a @click="$slidev.nav.go($nav.currentPage+7)">Extending built-in classes</a>
- <a @click="$slidev.nav.go($nav.currentPage+8)">Class checking: `instanceof` and Mixins</a>

---
hideInToc: true
---

# Prototype Chain Diagram (SVG)

![Prototype Chain Diagram](/prototype-chain.svg)

In JavaScript, objects have a prototype chain, which is a series of linked objects that can be used to share methods and properties. Below is an SVG diagram representing a typical prototype chain for demonstration purposes.

---
hideInToc: true
---

# Native Prototype Extension Dangers

Extending native prototypes is generally discouraged in JavaScript because it can lead to conflict between code bases, especially if multiple libraries attempt to add the same property or method names to a prototype. For instance:

```javascript
Array.prototype.myFunc = function() {
  // Do something
};
```

This can be problematic if another library does the same, potentially breaking code.

---
hideInToc: true
---

# ES6 Class Syntax vs Constructor Functions Comparison

JavaScript has two main ways to create objects: using ES6 class syntax or traditional constructor functions.

### ES6 Class Syntax
- Introduced in ES6.
- Syntactical sugar over JavaScript's existing prototype-based inheritance.
- Provides a cleaner and more intuitive way to create objects and handle inheritance.

### Constructor Functions
- Used before ES6.
- A function used to create objects and set their prototype.
- Requires more manual handling of inheritance.

#### Example:
```javascript
// ES6 Class
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

// Constructor Function
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  console.log(this.name + ' makes a noise.');
};
```

---
hideInToc: true
---

# Mixins Example Using `Object.assign`

Mixins allow the addition of common functionality or properties to different classes in JavaScript. Using `Object.assign`, you can implement mixins as follows:

```javascript
const canEat = {
  eat: function() {
    console.log('Eating');
  }
};

const canWalk = {
  walk: function() {
    console.log('Walking');
  }
};

function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, canEat, canWalk);

const person = new Person('John');
person.eat(); // Eating
person.walk(); // Walking
```

---
hideInToc: true
---

# Live Demo: Extending `Array` Safely

```js{monaco-run}
class ExtendedArray extends Array {
  sum() {
    return this.reduce((acc, curr) => acc + curr, 0);
  }
}
const myArray = new ExtendedArray(1, 2, 3, 4);
console.log('Sum:', myArray.sum()); // Console output: Sum: 10
```

This demo creates a new `ExtendedArray` class that extends the native `Array` object safely by adding a `sum` method that sums all elements.

---
hideInToc: true
---

# Prototypal Inheritance and Prototype Chain(F.prototype)

---
hideInToc: true
---

# Native Prototypes and Prototype Methods

---
hideInToc: true
---

# Class basic syntax
