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

<div>Programming errors can occur due to various reasons. The <span class="text-red">try...catch</span> syntax allows us to handle these errors gracefully instead of abruptly stopping the script. <span class="text-red">try...catch</span> only works for runtime errors.</div>

The <span class="text-red">try...catch</span> statement includes a <span class="text-red">try</span> block and either a <span class="text-red">catch</span> block, a <span class="text-red">finally</span> block, or both. The <span class="text-red">try</span> block is executed first, and the <span class="text-red">catch</span> block will be executed if it throws an exception. The <span class="text-red">finally</span> block is always executed before exiting the construct. The statement works synchronously.

```js{monaco-run} {autorun: false}
try{
  console.log('Try block');  // The statements to be executed.
} catch(err) {
  console.log('Catch block'); // Statement that is executed if an exception or error is thrown in the try block.
} finally{
  console.log('Finally block'); // Statements that are executed before control flow exits the try...catch...finally construct. It executes always
}
```

```js{monaco-run} {autorun: false}
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
name: error handling, "try..catch" continued
---

Catch Binding

<v-clicks>

When an exception is thrown in the <span class="text-red">try</span> block, the <span class="text-red">catch</span> block receives the error object as <span class="text-red">exceptionVar</span> (e.g., <span class="text-red">err</span> in <span class="text-red">catch (err)</span>). This object contains details about the error, such as error <span class="text-red">message</span>, <span class="text-red">type</span>, and <span class="text-red">stack</span> (non-standard, but well-supported. Makes debugging easier). You can access these properties using a destructuring pattern, allowing you to assign multiple identifiers at once, instead of just a single variable.

```js{monaco-run} {autorun: false}
try{
  bug;  //error, variable is not defined
  console.log('Try block'); // Will not run cos there's an error
} catch({ name, message, stack}) {
  console.log(name)// Error name or type
  console.log(message) // Actual error message
  console.log(stack) // the stack at the moment of error creation
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

```js{monaco-run} {autorun: false}
class ValidationError extends Error {
  constructor(message) {
    super(message); // Pass the message to the parent Error class
    this.name = 'ValidationError'; // Optional, but good practice
  }
}
try {
  throw new ValidationError("Invalid Inputs!");
} catch (error) {
  console.log(error.name);    // ValidationError
  console.log(error.message); // Invalid Inputs!
  console.log(error.stack);   // Stack trace. The stack will include where the error originated, making it easier to debug.
}

```

</v-clicks>
