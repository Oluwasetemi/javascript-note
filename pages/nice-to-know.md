---
layout: center
transition: slide-up
hideInToc: true
---

# Nice to know Concepts

<TocIcon />

<div mt-2 />

- <a @click="$slidev.nav.go($nav.currentPage+1)">Generators and Async Iterators</a>
- <a @click="$slidev.nav.go($nav.currentPage+2)">Proxy and Reflect</a>
- <a @click="$slidev.nav.go($nav.currentPage+3)">Eval: Run a code string</a>
- <a @click="$slidev.nav.go($nav.currentPage+4)">Currying</a>
- <a @click="$slidev.nav.go($nav.currentPage+5)">Reference Type</a>
- <a @click="$slidev.nav.go($nav.currentPage+6)">Unicode, String internals</a>
- <a @click="$slidev.nav.go($nav.currentPage+7)">WeakRef and FinalizationRegistry</a>

---
hideInToc: true
---

# Generators and Async Iterators

Generators simplify iterator-authoring using function* and yield. The async iterator is an experimental feature that allows for async iteration.

<div class="grid grid-cols-2 gap-4">
  <div>
    <h3>Generates Values on Demand</h3>
    <p>Generators are functions that can return multiple values, one at a time, by pausing and resuming execution.</p>
    
  </div>
  <div>
    <!-- <h3>Diagram</h3> -->
    <!-- <img src="/assets/generators_diagram.png" alt="Generators Diagram"/> -->
  </div>
</div>

---
hideInToc: true
---

### Proxy and Reflect

Proxy objects enable attendance to actions by defining custom behavior for fundamental operations.


### Eval: Run a Code String Safely

Eval is a function in JavaScript that allows you to execute a string as a JavaScript code.


### Currying

Currying is a process in functional programming in which a function with multiple arguments is transformed into a sequence of functions each taking a single argument.


### Reference Type

In JavaScript, objects are stored in memory as references.


### Unicode and String Internals

Understanding Unicode is key to managing strings and internationalization in JavaScript.


### WeakRef and FinalizationRegistry

Weak references allow you to retain a weak reference to an object, which does not prevent the object from being collected by GC.
