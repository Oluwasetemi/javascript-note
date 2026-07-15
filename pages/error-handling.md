---
layout: center
transition: slide-up
hideInToc: true
---

# Error Handling

<TocIcon />

<div mt-2 />

- <a @click="$slidev.nav.go($nav.currentPage+1)">Error handling, "try..catch"</a>
- <a @click="$slidev.nav.go($nav.currentPage+3)">Custom errors, extending Error</a>

---
hideInToc: true
---

# Error handling, "try..catch"

<v-clicks>

<div class="text-sm">Programming errors can occur due to various reasons. The <span class="text-red">try...catch</span> syntax allows us to handle these errors gracefully instead of abruptly stopping the script. <span class="text-red">try...catch</span> only works for runtime errors.The <span class="text-red">try...catch</span> statement includes a <span class="text-red">try</span> block and either a <span class="text-red">catch</span> block, a <span class="text-red">finally</span> block, or both. The <span class="text-red">try</span> block is executed first, and the <span class="text-red">catch</span> block will be executed if it throws an exception. The <span class="text-red">finally</span> block is always executed before exiting the construct. The statement works synchronously.</div>

```js {monaco-run} {autorun: false}
try{
  console.log('Try block');  // The statements to be executed.
} catch(err) {
  console.log('Catch block'); // Statement that is executed if an exception or error is thrown in the try block.
} finally{
  console.log('Finally block'); // Statements that are executed before control flow exits the try...catch...finally construct. It executes always
}
```

```js {monaco-run} {autorun: false}
try{
  bug;  //error, variable is not defined
  console.log('Try block'); // Will not run cos there's an error
} catch(err) {
  console.log('Catch block') // Statement will run since there's an exception in the try block
}
```

</v-clicks>

---
hideInToc: true
name: 'error handling, "try..catch" continued'
---

Catch Binding

<v-clicks>

When an exception is thrown in the <span class="text-red">try</span> block, the <span class="text-red">catch</span> block receives the error object as <span class="text-red">exceptionVar</span> (e.g., <span class="text-red">err</span> in <span class="text-red">catch (err)</span>). This object contains details about the error, such as error <span class="text-red">message</span>, <span class="text-red">type</span>, and <span class="text-red">stack</span> (non-standard, but well-supported. Makes debugging easier). You can access these properties using a destructuring pattern, allowing you to assign multiple identifiers at once, instead of just a single variable.

```js {monaco-run} {autorun: false}
try{
  bug;  //error, variable is not defined
  console.log('Try block'); // Will not run cos there's an error
} catch({ name, message, stack}) {
  // console.log(name)// Error name or type
  // console.log(message) // Actual error message
  // console.log(stack) // the stack at the moment of error creation
}
```

</v-clicks>

---
hideInToc: true
---

# Custom errors, extending Error

<v-clicks>

<div>In JavaScript, you can create custom errors by extending the built-in <span class="text-red">Error</span> class. This allows you to define more specific types of errors with custom messages and additional properties. Custom errors are useful when you want to provide more context or handle specific types of errors in your code.</div>

- Basic custom error by extending the <span class="text-red">Error</span> class

```js {monaco-run} {autorun: false}
class ValidationError extends Error {
  constructor(message) {
    super(message); // Pass the message to the parent Error class
    this.name = 'ValidationError'; // Optional, but good practice
  }
}
try {
  throw new ValidationError("Invalid Inputs!");
} catch (error) {
  // console.log(error.name);    // ValidationError
  // console.log(error.message); // Invalid Inputs!
  // console.log(error.stack);   // Stack trace. The stack will include where the error originated, making it easier to debug.
}

```

</v-clicks>

---
hideInToc: true
transition: slide-up
---
 
# Assignment or Class Activity
 
- Write a `try...catch...finally` block and predict the exact print order before running it
- Throw and catch three different built-in error types (`TypeError`, `RangeError`, `SyntaxError`) and log `error.name` for each
- Create a `NotFoundError` class extending `Error` and throw it from a lookup function
- Build a small hierarchy: `AppError` extends `Error`, then `ValidationError` and `AuthError` both extend `AppError`
- Wrap a `JSON.parse` call in `try...catch` and return a fallback value instead of crashing
```js {monaco-run} {autorun: false}
/*
write your code here
write your code here
write your code here
write your code here
write your code here
write your code here
*/
```
 
---
hideInToc: true
name: Exercises — try..catch Q1 & Q2
---
 
# Exercises: try..catch..finally
 
<div class="grid grid-cols-2 gap-4">
<div>

**Q1.** Write a function `safeDivide(a, b)` that throws a plain `Error` if `b` is `0`, otherwise returns `a / b`. Wrap the call in `try...catch...finally`, logging `"Division succeeded"` or `"Division failed"` in the `catch`, and `"Attempt complete"` in the `finally` — regardless of outcome.
 
```js {monaco-run} {autorun: false}
function safeDivide(a, b) {
  /*
   *
   *
   */
}
try {
  console.log(safeDivide(10, 2))
} catch (err) {
  //
} finally {
  //
}
```
 
</div>
<div>

**Q2.** Predict the exact console output order **before** running this code, then verify. Explain in a comment why `finally` still runs even though the function `return`s from inside `try`.
 
```js {monaco-run} {autorun: false}
function test() {
  try {
    console.log('1. try')
    return 'from try'
  } finally {
    console.log('2. finally')
  }
}
console.log(test())
// predicted order: ?
```
 
</div>
</div>
---
hideInToc: true
name: Exercises — Catch Binding Q3
---
 
**Q3.** Write a function `parseAge(input)` that calls `Number(input)` and throws a `new Error('Not a number')` if the result is `NaN`. Catch the error using **destructuring** on the catch binding (`{ name, message }`) and log a formatted string: `"${name}: ${message}"`.
 
```js {monaco-run} {autorun: false}
function parseAge(input) {
  /*
   *
   *
   */
}
try {
  parseAge('abc')
} catch ({ name, message }) {
  /*
   *
   */
}
```
 
---
hideInToc: true
name: Exercises — Built-in Error Types Q4
---
 
**Q4.** Write three small snippets that each naturally trigger a different **built-in** error type without you constructing it manually: one that throws a `ReferenceError` (accessing an undeclared variable), one that throws a `TypeError` (calling something that isn't a function), and one that throws a `RangeError` (e.g. an invalid array length or `toFixed` argument). Catch each and log `error.name`.
 
```js {monaco-run} {autorun: false}
/*
 * trigger a ReferenceError, catch it, log error.name
 *
 *
 * trigger a TypeError, catch it, log error.name
 *
 *
 * trigger a RangeError, catch it, log error.name
 *
 *
 */
```
 
---
hideInToc: true
name: Exercises — Custom Errors Q5
---
 
**Q5.** Create a `NotFoundError` class extending `Error` that sets `this.name = 'NotFoundError'` and stores an extra `resourceId` property. Write a function `findUser(id, users)` that throws `NotFoundError` when the id isn't found. Catch it and log `error.name`, `error.message`, and `error.resourceId`.
 
```js {monaco-run} {autorun: false}
class NotFoundError extends Error {
  /*
   *
   *
   */
}
function findUser(id, users) {
  /*
   *
   *
   */
}
const users = [{ id: 1, name: 'Ada' }, { id: 2, name: 'Chidi' }]
try {
  findUser(99, users)
} catch (error) {
  /*
   * log error.name, error.message, error.resourceId
   */
}
```
 
---
hideInToc: true
name: LeetCode Error Handling — Intro
layout: center
---
 
# <span class="text-gradient">LeetCode-Style</span> Challenges
 
Problems that combine **try..catch, custom error classes, and error hierarchies** — the tools of this chapter.
 
<div mt-4 text-sm op70>
Each problem has one clean solution using the patterns you just learned.
</div>

---
hideInToc: true
name: LeetCode Error Handling — Problem 1
---
 
# Problem 1 — Safe JSON Parse <span text-green text-sm>Easy</span>
 
Write `safeJsonParse(str, fallback)` that returns `JSON.parse(str)` if it succeeds, or `fallback` if parsing throws — without letting the error escape the function.
 
```js {monaco-run} {autorun: false}
function safeJsonParse(str, fallback) {
  /*
   *
   *
   */
}
console.log(safeJsonParse('{"a":1}', {}))     // { a: 1 }
console.log(safeJsonParse('not json', {}))    // {}
console.log(safeJsonParse('[1,2,3]', null))   // [1, 2, 3]
```
 
<div text-xs op60 mt-2>Concepts: <code>try...catch</code>, fallback values, never letting a parse error crash the caller</div>

---
hideInToc: true
name: LeetCode Error Handling — Problem 2
class: 'text-sm'
---
 
# Problem 2 — Retry With Backoff <span text-yellow text-sm>Medium</span>
 
Write `retry(fn, times)` that calls a function which might throw, retrying up to `times` attempts. If it succeeds, return the result immediately. If every attempt fails, rethrow the **last** error encountered.
 
```js {monaco-run} {autorun: false}
function retry(fn, times) {
  /*
   *
   */
}
let attempts = 0
function flaky() {
  attempts++
  if (attempts < 3) throw new Error(`Attempt ${attempts} failed`)
  return 'success'
}
console.log(retry(flaky, 5))  // "success" after 3 attempts
let failCount = 0
function alwaysFails() {
  failCount++
  throw new Error(`Failure #${failCount}`)
}
try {
  retry(alwaysFails, 3)
} catch (err) {
  console.log(err.message)  // "Failure #3" — the last error
}
```
 
<div text-xs op60 mt-2>Concepts: loops inside <code>try...catch</code>, rethrowing, tracking the last error</div>

---
hideInToc: true
name: LeetCode Error Handling — Problem 3
class: 'text-sm'
---
 
# Problem 3 — Custom Error Hierarchy <span text-yellow text-sm>Medium</span>
 
Build a base `AppError extends Error` class, then `ValidationError` and `AuthError` both extending `AppError`. Write `handleError(error)` that uses `instanceof` checks to return a different HTTP-style status code for each error type (`ValidationError` → 400, `AuthError` → 401, any other `AppError` → 500, unknown errors → 500).
 
```js {monaco-run} {autorun: false}
class AppError extends Error {
  /*
   *
   */
}
class ValidationError extends AppError {
  /*
   *
   */
}
class AuthError extends AppError {
  /*
   *
   */
}
function handleError(error) {
  /*
   *
   *
   */
}
console.log(handleError(new ValidationError('Bad input')))  // 400
console.log(handleError(new AuthError('Not logged in')))    // 401
console.log(handleError(new AppError('Something broke')))   // 500
console.log(handleError(new Error('Unexpected')))           // 500
```
 
<div text-xs op60 mt-2>Concepts: multi-level class inheritance, <code>instanceof</code> chains, mapping error types to responses</div>

---
hideInToc: true
name: LeetCode Error Handling — Problem 4
---
 
# Problem 4 — Validate and Collect All Errors <span text-yellow text-sm>Medium</span>
 
Write `validateUser(user)` that checks multiple rules (`name` required, `age` must be a number ≥ 0, `email` must include `"@"`). Instead of throwing on the **first** failure, collect every failing rule's message into an array and throw a single custom `ValidationError` whose `.errors` property holds all of them.
 
```js {monaco-run} {autorun: false}
class ValidationError extends Error {
  /*
   * constructor(errors) { ... this.errors = errors ... }
   */
}
function validateUser(user) {
  /*
   *
   *
   */
}
try {
  validateUser({ name: '', age: -5, email: 'not-an-email' })
} catch (err) {
  console.log(err.name)     // "ValidationError"
  console.log(err.errors)   // ["name is required", "age must be >= 0", "email must contain @"]
}
console.log(validateUser({ name: 'Ada', age: 21, email: 'ada@x.com' }))  // no throw
```
 
<div text-xs op60 mt-2>Concepts: accumulating errors instead of failing fast, custom error with extra data, array of messages</div>
---
hideInToc: true
name: LeetCode Error Handling — Problem 5
---
 
# Problem 5 — Async Error Wrapper <span text-yellow text-sm>Medium</span>
 
Write `asyncHandler(promiseFn)` that wraps an async function so it never rejects — instead it resolves to a tuple-like array `[error, result]`, where exactly one of the two is `null` (Go-style error handling). Use `async/await` with `try...catch` internally.
 
```js {monaco-run} {autorun: false}
function asyncHandler(promiseFn) {
  /*
   *
   *
   *
   *
   */
}
async function fetchUser(id) {
  if (id !== 1) throw new Error('User not found')
  return { id, name: 'Ada' }
}
 
asyncHandler(fetchUser)(1).then(([err, result]) => {
  console.log(err, result)   // null { id: 1, name: 'Ada' }
})
asyncHandler(fetchUser)(99).then(([err, result]) => {
  console.log(err.message, result)   // "User not found" null
})
```
 
<div text-xs op60 mt-2>Concepts: <code>async/await</code>, <code>try...catch</code> around <code>await</code>, error-as-value pattern instead of throwing</div>
