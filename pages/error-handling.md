---
layout: center
transition: slide-up
hideInToc: true
---

# Error Handling
<div mt-2 />

- Error handling, "try..catch"
- Custom errors, extending Error


---
hideInToc: true
---

# Error handling, "try..catch"

<v-clicks>

Programming errors can occur due to various reasons. The `try...catch` syntax allows us to handle these errors gracefully instead of abruptly stopping the script. `try...catch` only works for runtime errors.

The `try...catch` statement includes a `try` block and either a `catch` block, a `finally` block, or both. The `try` block is executed first, and the `catch` block will be executed if it throws an exception. The `finally` block is always executed before exiting the construct. The statement works synchronously.


```js{monaco-run} {autorun: false}
try{
  alert('Try block');  // The statements to be executed.
} catch(err) {
  alert('Catch block'); // Statement that is executed if an exception or error is thrown in the try block.
} finally{
  alert('Finally block'); // Statements that are executed before control flow exits the try...catch...finally construct. It executes always
}
```

```js{monaco-run} {autorun: false}
try{
  bug;  //error, variable is not defined
  alert('Try block'); // Will not run cos there's an error
} catch(err) {
  alert('Catch block') // Statement will run since there's an exception in the try block
}
```


</v-clicks>

---
hideInToc: true
name: error handling, "try..catch" continued
---

Catch Binding

<v-clicks>

When an exception is thrown in the `try` block, the `catch` block receives the error object as `exceptionVar` (e.g., `err` in `catch (err)`). This object contains details about the error, such as error `message`, `type`, and `stack` (non-standard, but well-supported. Makes debugging easier). You can access these properties using a destructuring pattern, allowing you to assign multiple identifiers at once, instead of just a single variable.

```js{monaco-run} {autorun: false}
try{
  bug;  //error, variable is not defined
  alert('Try block'); // Will not run cos there's an error
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

In JavaScript, you can create custom errors by extending the built-in `Error` class. This allows you to define more specific types of errors with custom messages and additional properties. Custom errors are useful when you want to provide more context or handle specific types of errors in your code.
- Basic custom error by extending the `Error` class

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