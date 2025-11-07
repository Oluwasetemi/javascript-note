---
layout: center
transition: slide-up
hideInToc: true
---

# Promises and Async/Await

<TocIcon />

<div mt-2 />

- <a @click="$slidev.nav.go($nav.currentPage+1)">Introduction: Callbacks</a>
- <a @click="$slidev.nav.go($nav.currentPage+2)">Promise basics</a>
- <a @click="$slidev.nav.go($nav.currentPage+3)">Promise chaining</a>
- <a @click="$slidev.nav.go($nav.currentPage+4)">Error handling in Promises</a>
- <a @click="$slidev.nav.go($nav.currentPage+5)">Promise API</a>
- <a @click="$slidev.nav.go($nav.currentPage+6)">Promisify</a>
- <a @click="$slidev.nav.go($nav.currentPage+7)">Microtasks</a>
- <a @click="$slidev.nav.go($nav.currentPage+8)">Async/Await</a>
- <a @click="$slidev.nav.go($nav.currentPage+9)">Callback Hell Problem</a>
- <a @click="$slidev.nav.go($nav.currentPage+10)">Promise Static Methods</a>
- <a @click="$slidev.nav.go($nav.currentPage+11)">Advanced Async/Await Patterns</a>
- <a @click="$slidev.nav.go($nav.currentPage+12)">Common Pitfalls & Best Practices</a>

---
hideInToc: true
---

# Introduction: Callbacks

Callback is a function that will be called when something has finished running or data is returned.

```js
getData(
  function (data) {},
  function (err) {},
) {
  if (true) {

  }

  err()
}
```

---
hideInToc: true
---

# Promise

A Promise is an object that represents a future result of an asynchronous operation.

- Promises have 3 states:
  - **Pending**: initial state
  - **Fulfilled**: successful completion
  - **Rejected**: operation failed

```js
const p = new Promise((resolve, reject) => {
  // executor function
  if (/* success */) {
    resolve(value)
  } else {
    reject(error)
  }
})
```

---
hideInToc: true
---

# Promise chaining

Promise chaining allows you to perform a sequence of asynchronous operations, where each operation starts when the previous one succeeds.

```js
fetch('url')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    return fetch('another-url')
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error))
```

---
hideInToc: true
---

# Error handling in Promises

Errors in Promises can be handled using `.catch()` method.

```js
fetch('url')
  .then((response) => response.json())
  .then((data) => {
    throw new Error('Something went wrong')
  })
  .catch((error) => console.error('Error:', error))
```

You can also use `.finally()` to execute code after the Promise is settled, regardless of its outcome.

```js
fetch('url')
  .then((response) => response.json())
  .catch((error) => console.error('Error:', error))
  .finally(() => console.log('Operation completed'))
```

---
hideInToc: true
---

# Promise API

The Promise API provides several static methods:

- `Promise.all(iterable)`: Waits for all promises to be resolved or any to be rejected.
- `Promise.race(iterable)`: Waits for the first promise to be resolved or rejected.
- `Promise.allSettled(iterable)`: Waits until all promises have settled (each may resolve or reject).
- `Promise.any(iterable)`: Waits for any promise to be resolved.

```js
Promise.all([promise1, promise2])
  .then((results) => console.log(results))
  .catch((error) => console.error('Error:', error))
```

---
hideInToc: true
---

# Promisify

Promisify is the process of converting a callback-based function to a function that returns a Promise.

```js
const fs = require('fs')
const util = require('util')
const readFile = util.promisify(fs.readFile)

readFile('file.txt', 'utf8')
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error))
```

---
hideInToc: true
---

# Microtasks

Microtasks are tasks that are executed after the currently executing script and before the next event loop tick.

Promises use microtasks to handle `.then()` and `.catch()` callbacks.

```js
console.log('Start')

Promise.resolve().then(() => {
  console.log('Promise resolved')
})

console.log('End')

// Output:
// Start
// End
// Promise resolved
```

---
hideInToc: true
---

# Async/Await

Async/Await is syntactic sugar built on top of Promises, making asynchronous code look and behave like synchronous code.

- `async` function always returns a Promise.
- `await` pauses the execution of the async function and waits for the Promise to resolve.

```js
async function fetchData() {
  try {
    const response = await fetch('url')
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error('Error:', error)
  }
}

fetchData()
```

---
hideInToc: true
---

# Callback Hell Problem

Callbacks can lead to deeply nested code, making it hard to read and maintain.

```js
// Callback Hell - "Pyramid of Doom"
getData(id, (data, err) => {
  if (err) throw err
  processData(data, (processed, err) => {
    if (err) throw err
    saveData(processed, (result, err) => {
      if (err) throw err
      notifyUser(result, (notification, err) => {
        if (err) throw err
        console.log('Success!')
      })
    })
  })
})
```

This is why Promises were created - to solve this "callback hell" problem.

---
hideInToc: true
---

# Promise Static Methods

Beyond Promise.all(), there are other useful static methods:

```js
// Create immediately resolved/rejected promises
const resolved = Promise.resolve(42)
const rejected = Promise.reject(new Error('Failed'))

// Promise.resolve() is useful for converting values to promises
Promise.resolve('Hello')
  .then(value => console.log(value)) // 'Hello'

// Promise.reject() for immediate rejection
Promise.reject(new Error('Something went wrong'))
  .catch(error => console.error(error.message))

// Converting thenable objects to promises
const thenable = { then: (resolve) => resolve('Converted!') }
Promise.resolve(thenable).then(value => console.log(value))
```

---
hideInToc: true
---

# Advanced Async/Await Patterns

Understanding sequential vs parallel execution is crucial for performance:

```js
// Sequential execution (slower - 6 seconds total)
async function sequential() {
  const result1 = await delay(3000) // Wait 3 seconds
  const result2 = await delay(3000) // Wait another 3 seconds
  return [result1, result2]
}

// Parallel execution (faster - 3 seconds total)
async function parallel() {
  const promise1 = delay(3000) // Start both immediately
  const promise2 = delay(3000)
  const [result1, result2] = await Promise.all([promise1, promise2])
  return [result1, result2]
}

// Error handling with multiple operations
async function withErrorHandling() {
  try {
    const results = await Promise.allSettled([
      fetchUser(), fetchPosts(), fetchComments()
    ])
    return results.filter(r => r.status === 'fulfilled')
  } catch (error) {
    console.error('Unexpected error:', error)
  }
}
```

---
hideInToc: true
---

# Common Pitfalls & Best Practices

Avoid these common mistakes when working with Promises and async/await:

<div grid="~ cols-3" gap-1>
<div>

```js
// ❌ Forgetting to return promises in chains
fetch('url')
  .then(response => {response.json()}) // Missing return!
  .then(data => {console.log(data)}) // data is undefined

// ✅ Always return promises
fetch('url')
  .then(response => response.json())
  .then(data => console.log(data))

```

</div>
<div>


```js

// ❌ Mixing callbacks with promises
async function badExample() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Done'), 1000) // Unnecessary Promise wrapper
  })
}

// ✅ Use async/await consistently
async function goodExample() {
  await delay(1000)
  return 'Done'
}

```

</div>
<div>

```js

// ❌ Unhandled promise rejections
fetch('url') // No .catch()!

// ✅ Always handle errors
fetch('url').catch(error => console.error(error))
```

</div>
</div>

---
hideInToc: true
---

# Conclusion

- Callbacks are the traditional way of handling asynchronous operations.
- Promises provide a more powerful and flexible way to handle async operations.
- Async/Await makes asynchronous code easier to read and write.
- Understanding execution patterns and avoiding common pitfalls is crucial for robust code.

Thank you for your attention!

```

```
