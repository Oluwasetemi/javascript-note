---
layout: center
transition: slide-up
hideInToc: true
---

# Nice to know Concepts

<TocIcon />

<div mt-2 />

- <a @click="$slidev.nav.go($nav.currentPage+1)">Generators and Async Iterators</a>
- <a @click="$slidev.nav.go($nav.currentPage+5)">Proxy and Reflect</a>
- <a @click="$slidev.nav.go($nav.currentPage+8)">Eval: Run a code string</a>
- <a @click="$slidev.nav.go($nav.currentPage+10)">Currying</a>
- <a @click="$slidev.nav.go($nav.currentPage+12)">Reference Type</a>
- <a @click="$slidev.nav.go($nav.currentPage+14)">Unicode, String internals</a>
- <a @click="$slidev.nav.go($nav.currentPage+16)">WeakRef and FinalizationRegistry</a>

---
hideInToc: true
---

# Generators and Async Iterators

<div></div>

Generators simplify iterator-authoring using `function*` and `yield`. They are special functions that can pause and resume execution, making them perfect for creating iterators and handling asynchronous operations.

### What are Generators?

Generators are functions that can return multiple values, one at a time, by pausing and resuming execution. They are defined using the `function*` syntax and use the `yield` keyword to produce values.

```js {monaco-run} {autorun: false}
function* numberGenerator() {
  yield 1
  yield 2
  yield 3
}

const gen = numberGenerator()
// console.log(gen.next().value) // 1
// console.log(gen.next().value) // 2
// console.log(gen.next().value) // 3
```

---
hideInToc: true
---

# Generator Syntax

<div></div>

The syntax for creating a generator is straightforward. You use `function*` (note the asterisk) and `yield` to produce values.

```js
function* generatorFunction() {
  yield value1
  yield value2
  // ... more yields
}
```

### Example: Infinite Sequence

```js {monaco-run} {autorun: false}
function* infiniteSequence() {
  let i = 0
  while (true) {
    yield i++
  }
}

const gen = infiniteSequence()
// console.log(gen.next().value) // 0
// console.log(gen.next().value) // 1
// console.log(gen.next().value) // 2
```

---
hideInToc: true
---

# Generator with Parameters

<div></div>

Generators can accept parameters and even receive values through the `next()` method.

<div class="grid grid-cols-2 gap-4">
<div>

```js {monaco-run} {autorun: false}
function* counter(start = 0) {
  let count = start
  while (true) {
    const increment = yield count
    if (increment) {
      count += increment
    } else {
      count++
    }
  }
}

const gen = counter(10)
// console.log(gen.next().value) // 10
// console.log(gen.next(5).value) // 15
// console.log(gen.next().value) // 16
```

</div>
<div>

### Key Points

- Generators maintain state between calls
- `yield` pauses execution
- `next()` resumes execution
- Can pass values back into the generator

</div>
</div>

---
hideInToc: true
---

# Async Iterators

<div></div>

Async iterators allow you to work with asynchronous data sources in a synchronous-looking manner using `for await...of` loops.

```js
async function* asyncGenerator() {
  yield await Promise.resolve(1)
  yield await Promise.resolve(2)
  yield await Promise.resolve(3)
}

;(async () => {
  for await (const value of asyncGenerator()) {
    // console.log(value)
  }
})()
```

### Real-world Example: Fetching Pages

```js
async function* fetchPages(urls) {
  for (const url of urls) {
    const response = await fetch(url)
    yield await response.json()
  }
}
```

---
hideInToc: true
---

# Proxy and Reflect

<div></div>

Proxy objects enable you to intercept and customize operations performed on objects. The Reflect API provides methods for interceptable JavaScript operations.

### What is a Proxy?

A Proxy wraps around an object and allows you to intercept fundamental operations like property access, assignment, enumeration, and function invocation.

```js
const target = {
  message: 'Hello, World!',
}

const handler = {
  get: function (target, prop) {
    return prop in target ? target[prop] : 'Property not found'
  },
}

const proxy = new Proxy(target, handler)
```

---
hideInToc: true
---

# Proxy Handlers

<div></div>

Proxy handlers (also called traps) intercept operations on the target object.

<div class="grid grid-cols-2 gap-4">
<div>

### Common Traps

- `get` - property access
- `set` - property assignment
- `has` - `in` operator
- `deleteProperty` - `delete` operator
- `apply` - function call
- `construct` - `new` operator

</div>
<div>

```js {monaco-run} {autorun: false}
const user = {
  name: 'John',
  age: 30,
}

const handler = {
  get(target, prop) {
    // console.log(`Getting ${prop}`)
    return target[prop]
  },
  set(target, prop, value) {
    // console.log(`Setting ${prop} to ${value}`)
    target[prop] = value
    return true
  },
}

const proxy = new Proxy(user, handler)
// console.log(proxy.name) // Getting name
proxy.age = 31 // Setting age to 31
```

</div>
</div>

---
hideInToc: true
---

# Reflect API

<div></div>

The Reflect API provides methods that mirror Proxy handler traps. It's useful for forwarding operations and avoiding repetitive code.

```js {monaco-run} {autorun: false}
const target = { name: 'AltSchool', type: 'Education' }

// Using Reflect
// console.log(Reflect.get(target, 'name')) // AltSchool
Reflect.set(target, 'location', 'Nigeria')
// console.log(Reflect.has(target, 'location')) // true
// console.log(Reflect.ownKeys(target)) // ['name', 'type', 'location']
```

### Why Reflect?

- Provides programmatic access to object operations
- Returns meaningful values instead of throwing errors
- Cleaner than using `Object` methods in some cases

---
hideInToc: true
---

# Eval: Run a Code String

<div></div>

The `eval()` function evaluates JavaScript code represented as a string. However, it's generally considered dangerous and should be used with extreme caution.

```js
eval(string)
```

### Example

```js {monaco-run} {autorun: false}
let code = '2 + 2'
let result = eval(code)
// console.log(result) // 4

let x = 10
eval('x = x + 5')
// console.log(x) // 15
```

---
hideInToc: true
---

# Why Avoid Eval?

<div></div>

### Security Risks

<div class="grid grid-cols-2 gap-4">
<div>

**Problems with `eval()`:**

- **Security vulnerabilities**: Code injection attacks
- **Performance issues**: Can't be optimized by JavaScript engines
- **Debugging difficulties**: Hard to trace errors
- **Scope issues**: Has access to local variables

</div>
<div>

**Better Alternatives:**

```js
// Instead of eval for JSON
const data = JSON.parse('{"name": "John"}')

// Instead of eval for calculations
const calculate = new Function('a', 'b', 'return a + b')
// console.log(calculate(2, 3)) // 5

// For dynamic property access
const obj = { name: 'John' }
const prop = 'name'
// console.log(obj[prop]) // John
```

</div>
</div>

---
hideInToc: true
---

# Currying

<div></div>

Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.

### Basic Concept

```js {monaco-run} {autorun: false}
// Regular function
function add(a, b, c) {
  return a + b + c
}
// console.log(add(1, 2, 3)) // 6

// Curried version
function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}
// console.log(curriedAdd(1)(2)(3)) // 6
```

---
hideInToc: true
---

# Currying with Arrow Functions

<div></div>

Arrow functions make currying syntax more concise and elegant.

<div class="grid grid-cols-2 gap-4">
<div>

```js {monaco-run} {autorun: false}
// Curried arrow function
const multiply = (a) => (b) => (c) => a * b * c

// console.log(multiply(2)(3)(4)) // 24

// Partial application
const double = multiply(2)
const doubleAndTriple = double(3)
// console.log(doubleAndTriple(5)) // 30
```

</div>
<div>

### Practical Example

```js {monaco-run} {autorun: false}
const greet = (greeting) => (name) => (punctuation) =>
  `${greeting}, ${name}${punctuation}`

const sayHello = greet('Hello')
const sayHelloToJohn = sayHello('John')

// console.log(sayHelloToJohn('!')) // Hello, John!
// console.log(sayHelloToJohn('.')) // Hello, John.

const sayGoodbye = greet('Goodbye')
// console.log(sayGoodbye('Jane')('!')) // Goodbye, Jane!
```

</div>
</div>

---
hideInToc: true
---

# Reference Type

<div></div>

In JavaScript, objects are stored and passed by reference, while primitives are stored and passed by value. Understanding this concept is crucial for avoiding bugs.

### Primitives vs References

<div class="grid grid-cols-2 gap-4">
<div>

**Primitives (by value)**

```js {monaco-run} {autorun: false}
let a = 10
let b = a // Copy the value
b = 20

// console.log(a) // 10
// console.log(b) // 20
// a and b are independent
```

</div>
<div>

**Objects (by reference)**

```js {monaco-run} {autorun: false}
let obj1 = { value: 10 }
let obj2 = obj1 // Copy the reference
obj2.value = 20

// console.log(obj1.value) // 20
// console.log(obj2.value) // 20
// obj1 and obj2 point to same object
```

</div>
</div>

---
hideInToc: true
---

# Comparing References

<div></div>

When comparing objects, JavaScript compares references, not the actual content.

```js {monaco-run} {autorun: false}
// Same content, different references
let obj1 = { name: 'John' }
let obj2 = { name: 'John' }
// console.log(obj1 === obj2) // false (different references)

// Same reference
let obj3 = obj1
// console.log(obj1 === obj3) // true (same reference)

// Cloning objects
let obj4 = { ...obj1 } // Shallow copy
// console.log(obj1 === obj4) // false (different reference)
// console.log(obj1.name === obj4.name) // true (same value)
```

### Deep vs Shallow Copy

- **Shallow copy**: Copies only the first level
- **Deep copy**: Copies all nested levels recursively

---
hideInToc: true
---

# Unicode and String Internals

<div></div>

JavaScript strings use UTF-16 encoding. Understanding Unicode is essential for working with international text and emoji.

### UTF-16 Encoding

```js {monaco-run} {autorun: false}
// Regular characters
// console.log('A'.charCodeAt(0)) // 65
// console.log('A'.codePointAt(0)) // 65

// Emoji (uses surrogate pairs in UTF-16)
// console.log('😀'.length) // 2 (2 code units)
// console.log('😀'.charCodeAt(0)) // 55357 (high surrogate)
// console.log('😀'.charCodeAt(1)) // 56832 (low surrogate)
// console.log('😀'.codePointAt(0)) // 128512 (actual code point)
```

### String Iteration

```js {monaco-run} {autorun: false}
const text = 'Hello 🌍'
// console.log([...text]) // ['H', 'e', 'l', 'l', 'o', ' ', '🌍']
// console.log(text.length) // 8 (7 + 1 surrogate pair)
```

---
hideInToc: true
---

# Working with Unicode

<div></div>

<div class="grid grid-cols-2 gap-4">
<div>

### Unicode Escape Sequences

```js {monaco-run} {autorun: false}
// Using \u (4 digits)
// console.log('\u0041') // A

// Using \u{} (variable length)
// console.log('\u{1F600}') // 😀
// console.log('\u{1F4A1}') // 💡

// String.fromCodePoint
// console.log(String.fromCodePoint(128512)) // 😀
```

</div>
<div>

### Normalization

```js {monaco-run} {autorun: false}
// Combining characters
let s1 = 'café' // é as single character
let s2 = 'café' // é as e + combining acute

// console.log(s1 === s2) // false (different)
// console.log(s1.length, s2.length) // 4, 5

// Normalize to compare
// console.log(s1.normalize() === s2.normalize()) // true
```

</div>
</div>

---
hideInToc: true
---

# WeakRef and FinalizationRegistry

<div></div>

WeakRef and FinalizationRegistry are advanced features for managing object lifecycle and memory, particularly useful in caching scenarios.

### WeakRef

A WeakRef lets you hold a weak reference to an object that doesn't prevent garbage collection.

```js
let obj = { data: 'important' }
let weakRef = new WeakRef(obj)

// Access the object
let value = weakRef.deref()
if (value) {
  // console.log(value.data) // "important"
} else {
  // console.log('Object was garbage collected')
}

// After obj is no longer referenced elsewhere, it can be GC'd
obj = null
```

---
hideInToc: true
---

# FinalizationRegistry

<div></div>

FinalizationRegistry lets you request a callback when an object is garbage collected.

```js
const registry = new FinalizationRegistry((heldValue) => {
  // console.log(`Object ${heldValue} was garbage collected`)
})

let obj = { name: 'test' }
registry.register(obj, 'myObject')

// When obj is garbage collected, the callback will be invoked
obj = null
```

### Use Cases

<div class="grid grid-cols-2 gap-4">
<div>

**WeakRef:**
- Caching without preventing GC
- Optional data that can be recreated
- Memory-sensitive applications

</div>
<div>

**FinalizationRegistry:**
- Cleaning up external resources
- Debugging memory leaks
- Logging object lifecycle

</div>
</div>

<div class="text-sm"><b>Warning</b>: These are advanced features. Use only when necessary, as they can make code harder to reason about.</div>

---
hideInToc: true
transition: slide-up
---

# Summary

<div></div>

You've learned about advanced JavaScript concepts that enhance your programming toolkit:

<div class="grid grid-cols-2 gap-4">
<div>

### Core Concepts

- **Generators**: Create iterators with `function*` and `yield`
- **Async Iterators**: Handle async data with `for await...of`
- **Proxy & Reflect**: Intercept and customize object operations
- **Currying**: Transform multi-argument functions into sequences

</div>
<div>

### Advanced Topics

- **Eval**: Execute string code (use cautiously!)
- **Reference Types**: Understand value vs reference semantics
- **Unicode**: Work with international text and emoji
- **WeakRef & Registry**: Manage memory and object lifecycle

</div>
</div>

These concepts are "nice to know" because they solve specific problems. Use them when appropriate, but don't overcomplicate your code!
