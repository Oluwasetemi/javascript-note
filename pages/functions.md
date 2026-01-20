---
layout: center
transition: slide-up
class: center
hideInToc: true
---

# Functions

<TocIcon />

<div mt-2 />

- <a @click="$slidev.nav.next()">Introduction to Functions</a>
- <a @click="$nav.go($nav.currentPage + 6)">Recursion and Stack</a>
- <a @click="$nav.go($nav.currentPage + 15)">Rest Parameters and Spread Syntax</a>
- <a @click="$nav.go($nav.currentPage + 20)">Closure and Variable Scope</a>
- <a @click="$nav.go($nav.currentPage + 31)">Global Object</a>
- <a @click="$nav.go($nav.currentPage + 32)">Function Object, NFE and `new Function` syntax</a>
- <a @click="$nav.go($nav.currentPage + 39)">Scheduling</a>
- <a @click="$nav.go($nav.currentPage + 54)">Decorators and Forwarding, call/apply, bind</a>
- <a @click="$nav.go($nav.currentPage + 60)">Function binding</a>
- <a @click="$nav.go($nav.currentPage + 63)">Arrow functions in details</a>

---
hideInToc: true
---

# Functions

<div> </div>
Functions are one of the fundamental building block in JavaScript.
In programming, we often need to perform tasks such as returning a value based on an argument or performing calculations. These tasks can be encapsulated within a function, creating a reusable block of code.

Check the code below for examples of how functions can be used to perform tasks:

<div class=" mb-4">

```js {monaco-run} {autorun: false}
function greetAllUsers() {
  // console.log('Hello Everyone')
}
greetAllUsers()
```

</div>

<div class="">

```js {monaco-run} {autorun: false}
const getAverageResult = () => {
  let results = [2, 3, 4, 5, 6, 7, 8]
  let sum = results.reduce((acc, num) => acc + num, 0)
  let average = sum / results.length
  // console.log(average)
}
getAverageResult()
```

</div>

---
hideInToc: true
---

# Creating a Function

<div> </div>

There are three common ways to create a function:

- Function Declaration
- Function Expression
- Arrow Function

---
hideInToc: true
---

# Function Declaration

<div></div>

Function Declaration: In a function declaration, the <kbd>function</kbd> keyword comes first, followed by the function's name. After that, parentheses <kbd>()</kbd> are used, where you can pass a comma-separated list of parameters. Finally, the function's code is enclosed within curly braces <kbd>{}</kbd>.

<div class=" mb-4">

```js {monaco-run} {autorun: false}
function name(parameter1, parameter2, parameter3) {
  // body
}
// calling the function by its name
```

</div>

<div class=" mb-4">

```js {monaco-run} {autorun: false}
function declarationMethod(name, age, course) {
  // console.log(`${name} is ${age} years, and they offer ${course} courses`)
}
declarationMethod('AltSchool', 3, 'Engineering')
```

</div>

---
hideInToc: true
---

# Function Expression

<div> </div>

Function Expression: A function expression involves creating a function and assigning it to a variable.
Unlike function declarations, function expressions can be anonymous (without a name) or named. When using a function expression, the function can only be called after its definition.

<div class=" mb-4">

```js {monaco-run} {autorun: false}
const name = function (parameter1, parameter2, parameter3) {
  // body
}
// calling the function by its name
```

</div>
<div class=" mb-4">

```js {monaco-run} {autorun: false}
const expressionMethod = function (name, age, course) {
  // console.log(`${name} is ${age} years, and they offer ${course} courses`)
}
expressionMethod('AltSchool', 3, 'Engineering')
```

</div>

---
hideInToc: true
---

# Arrow Function

<div> </div>

Arrow Function: Arrow functions provide a more concise syntax for writing functions in JavaScript. They were introduced in ES6 and are particularly useful for maintaining the lexical scope of the this keyword. Arrow functions can be anonymous and are often used for short functions.

<div class=" mb-4">

```js {monaco-run} {autorun: false}
const name = (parameter1, parameter2, parameter3) => {
  // body
}
// calling the function by its name
```

</div>
<div class=" mb-4">

```js {monaco-run} {autorun: false}
const arrowMethod = (name, age, course) => {
  // console.log(`${name} is ${age} years, and they offer ${course} courses`)
}
arrowMethod('AltSchool', 3, 'Engineering')
```

</div>

---
hideInToc: true
---

# Recursion and Stack

<div> </div>

Recursion, as the name implies, is a process where a function calls itself to solve a problem. By breaking the task into smaller, simpler parts, the function repeatedly invokes itself until it reaches a base case.

This pattern is particularly useful when a problem can be naturally divided into smaller, similar tasks that are easier to solve recursively.

A recursive function can receive two inputs: a base case (ends recursion) or a recursive case (resumes recursion).

<div class=" mb-4">

```js {monaco-run} {autorun: false}
function factorial(n) {
  if (n === 0) {
    return 1 // Base case: factorial of 0 is 1
  } else {
    return n * factorial(n - 1) // Recursive case: n * (n-1)!
  }
}

// console.log(factorial(5)) // Output: 120
```

</div>

---

## Let's dive deep into Recursion

Let's write a function <kbd>raisePower(x, n)</kbd> that raises <kbd>x</kbd> to a natural power of <kbd>n</kbd>. <br/>
To achieve this we can use the:

- Iterative thinking: the <kbd>for</kbd>loop, or

```js {monaco-run} {autorun: false}
// Using the for loop method
function raisePower(x, n) {
  let result = 1
  for (let i = 0; i < n; i++) {
    result *= x
  }
  return result
}
// console.log(raisePower(2, 3))
```

---
title: Recursive thinking
hideInToc: true
---

- Recursive thinking: simplify the task and call itself:

```js {monaco-run} {autorun: false}
// Using the recursive method
function raisePower(x, n){
  if ( n == 1 ){
    return x;
  } else {
    return x * raisePower(x, n - 1);
  }
}
// console.log(raisePower(2, 3))
```

Let's break down the recursive method we just used in the code above.
When the raisePower(x, n) is called, the execution splits into two branches:

1. Base Case:
   If n == 1, the function returns x. This is the stopping condition for the recursion.
   Example: If you call raisePower(2, 1), it will return 2.

2. Recursive Case:
   If n > 1, the function returns x \* raisePower(x, n - 1). This means the function calls itself with n decreased by 1.

---
title: Example
hideInToc: true
---

Example: If you call raisePower(2, 3), the execution follows these steps:

<hr/>
Step 1: raisePower(2, 3)
- Since n is not equal to 1, it calls raisePower(2, 2).
<hr/>

Step 2: raisePower(2, 2)
Again, n is not 1, so it calls raisePower(2, 1).

<hr/>

Step 3: raisePower(2, 1)
Here, n equals 1, so it returns 2.

<hr/>

Now we backtrack to Step 2:

- Back to Step 2: raisePower(2, 2) returns 2 \* 2 (which is 4).
<hr/>
Then we backtrack to Step 1:
- Back to Step 1: raisePower(2, 3) returns 2 \* 4 (which is 8).
<hr/>

To simplify the explanation above:

- The function effectively breaks down the problem into smaller subproblems until it reaches the base case.
- Each recursive call multiplies <kbd>x</kbd> by the result of the next recursive call, gradually building up the final result.

---
hideInToc: true
---

# Why recursive function?

<div> </div>

A recursive solution is often more concise than an iterative one, which can lead to better performance and efficiency.
The total number of calls a recursive function makes, starting from the first call to the last, is referred to as the recursion depth.

---
hideInToc: true
---

# The execution context and stack

<div> </div>

When a function is running, the information about its execution is stored in an "execution context." This is created when the JavaScript engine processes a script file. Each function call has exactly one execution context linked to it.

In the case of the recursive function from the previous slide, here's what happens behind the scenes during nested calls:

<ol>
<li>The current function pauses.</li>
<li>Its execution context is saved in a special data structure called the execution context stack.</li>
<li>The nested function call runs.</li>
<li>Once the nested call finishes, the saved execution context is restored, and the outer function continues from where it left off.</li>
</ol>

---
title: Callstack
hideInToc: true
---

A call stack, where execution contexts are saved, is a mechanism used by the interpreter to track its position in a script with multiple function calls. It keeps track of which function is currently running and which functions are being called within it. This helps the interpreter manage and execute functions in the correct order.

When a script calls a function, the interpreter adds that function to the call stack and begins executing it. If the function calls other functions, they are added to the stack in order and executed when their calls are reached. Once a function finishes, the interpreter removes it from the stack and continues executing the previous function where it left off. If the stack exceeds its allocated space, a "stack overflow" error occurs.

Here's the process broken down:

<ol>
<li>The interpreter adds the function call to the call stack and begins execution.</li>
<li>If the function calls another function, that new function is added to the stack.</li>
<li>The process continues, with each called function being added to the stack.</li>
<li>Once a function completes, it is removed from the stack, and execution resumes from the previous function.</li>
<li>If the call stack exceeds its limit, a "stack overflow" error is triggered.</li>
</ol>

---
hideInToc: true
---

# Recursive traversals

<div> </div>

As mentioned earlier, recursive functions are functions that call themselves repeatedly until they reach a specific end condition or target. This process continues until the base case is met, at which point the function stops calling itself and begins to return the results back up the call stack.

<p class="pb-16">
Let’s explore an excellent example of recursive traversal in action. Recursive traversal is commonly used to navigate data structures like trees or graphs. By using recursion, we can efficiently explore each node or element in the structure without needing complex loops or additional data tracking mechanisms.
</p>

# Check next slide for the code example 🐱‍🏍👉🤸‍♂️

In the code:

- Each employee has a name and a list of reports(direct reports).
- The <kbd>traverseHierarchy</kbd> function prints the employee's name, then recursively calls itself for each of their reports.

---
title: Recursive Travesal Example
hideInToc: true
---


```js {monaco-run} {autorun: false}
const company = {
  name: 'CEO',
  reports: [ { name: 'Manager 1', reports: [] }, { name: 'Manager 2', reports: [ { name: 'Team Lead', reports: [], }, ], }, ],
}

function traverseHierarchy(employee) {
  // console.log(employee.name)
  employee.reports.forEach(traverseHierarchy)
}

traverseHierarchy(company)
```

A recursive data structure is a data structure that replicates itself in parts.

---
hideInToc: true
---

# Rest Parameters and Spread Syntax

<div> </div>

The rest parameter syntax in JavaScript allows a function to accept any number of arguments as an array. This is useful when you don't know how many arguments will be passed in, or when you want to simplify handling multiple inputs.
For example, if you want a function that accepts 20 arguments but only needs to explicitly write out the first two, you can use the rest parameter <kbd>(...)</kbd> to handle the remaining arguments. This keeps the code cleaner and more manageable.
Here's what you need to remember about rest parameters:

<ol>
<li>A function can have only one rest parameter.</li>
<li>The rest parameter must be the last parameter in the function definition.</li>
<li>Trailing commas after the rest parameter are not allowed.</li>
<li>The rest parameter cannot have a default value.</li>
</ol>

```js {monaco-run} {autorun: false}
function example(first, second, ...others) {
  //  logs first and second arguments
   console.log(first, second)
  //  logs the rest of the arguments as an array
   console.log(others)
}
example(1, 2, 3, 4, 5)
```

---
hideInToc: true
---

# The arguments variable

<div> </div>

<div class="overflow-scroll h-70">

In JavaScript, there is a special array-like object called <kbd>arguments</kbd> that contains all the arguments passed to a function, indexed by their position. Unlike rest parameters, <kbd>arguments</kbd> is automatically available inside every function and holds the complete list of arguments, even if they aren’t explicitly defined in the function parameters.

Key points about the arguments object:

<ol>
<li>Array-like structure: The arguments object behaves like an array, as it contains indexed values (e.g., arguments[0], arguments[1]), but it lacks array methods like <kbd>forEach()</kbd>, <kbd>map()</kbd>, <kbd>sort()</kbd>, or <kbd>pop()</kbd>, etc.</li>
<li>Access to all arguments: It allows you to access all arguments passed to a function, even if they aren't explicitly defined as parameters in the function.</li>
<li>Not available in arrow functions: The arguments object exists in regular functions, but it is not available in arrow functions, where rest parameters <kbd>(...args)</kbd> are recommended instead.</li>
</ol>

This makes arguments useful in older code, but rest parameters are preferred in modern JavaScript for handling variable numbers of arguments more flexibly.

</div>

```js {monaco-run} {autorun: false}
function showArguments() {
  // Logs all the arguments as an array-like object
  console.log(arguments)
}

showArguments(1, 'test', true)
```

---
hideInToc: true
---

# Spread syntax

<div> </div>

We’ve already discussed the rest parameters, represented by three dots <kbd>...</kbd>. Now, let’s explore the spread syntax, which is also represented by three dots <kbd>...</kbd>, but it serves the opposite purpose.

While rest parameters gather multiple elements into an array, the spread syntax expands an iterable (like an array or a string) into individual elements.

The spread syntax allows you to take elements from an iterable (such as an array or string) and expand them where multiple elements are expected.

```js {monaco-run} {autorun: false}
const numbers = [1, 2, 3]
console.log(...numbers)
```

---
title: Spread
hideInToc: true
---

- Spread operators can be used to combine arrays

```js {monaco-run} {autorun: false}
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const combined = [...arr1, ...arr2]
```

- Spread operators can be used to clone arrays

```js {monaco-run} {autorun: false}
const original = [1, 2, 3]
// Creates a shallow copy of the array
const copy = [...original]
```

- Spread operators can be used to spread a string into individual characters

```js {monaco-run} {autorun: false}
const str = 'hello'
// console.log([...str])
```

---
hideInToc: true
title: Difference Between Spread and Rest
---

Note:

- When <kbd>...</kbd> is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.
- When <kbd>...</kbd> occurs in a function call or alike, it’s called a “spread syntax” and expands an array into a list.
- Rest parameters are used to create functions that accept any number of arguments.
- The spread syntax is used to pass an array to functions that normally require a list of many arguments.

---
hideInToc: true
---

# Closure and Variable Scope

<div> </div>

In JavaScript, a closure is formed every time a function is created. A closure allows a function to remember and access variables from its outer scope, even after that function has finished executing. Essentially, closures give functions the ability to "remember" the environment in which they were created. While almost all functions in JavaScript are naturally closures, there is one important exception: arrow functions that don't reference any variables from their outer scope do not create closures.

In JavaScript, there are 3 ways to declare a variable and these are:

<ol>
<li><kbd>let</kbd></li>
<li><kbd>const</kbd></li>
<li><kbd>var</kbd></li>
</ol>

<kbd>var</kbd> is the remnant of the past.

---
hideInToc: true
---

# Code blocks

<div> </div>

In JavaScript, statements can be grouped together inside code blocks, which are enclosed in curly brackets <kbd>...</kbd>. The purpose of these code blocks is to group statements that should be executed together.

If a variable is declared inside a code block, it is only accessible within that block. This is called block scope. Variables declared with let or const inside a block are not visible outside of it.

```js {monaco-run} {autorun: false}
{
  // this variable is only visible inside this block
  let isItPresent = 'I am visible only inside my block'
  // console.log(isItPresent)
}
// this variable is not seen outside the block so it will throw error
// console.log(isItPresent)
```

This helps in keeping the scope of variables limited to specific parts of the code, reducing potential conflicts.

---
hideInToc: true
---

# Contd.

<div> </div>

```js {monaco-run} {autorun: false}
{
  // show message
  let message = 'I am visible only inside my block'
  // console.log(message)
}

{
  // show another message
  let message = 'This message is different from the one inside previous block'
  // console.log(message)
}
```

---
hideInToc: true
---

# Nested functions

<div> </div>

You can create a function inside another function and this is what we referred to as <kbd>nested functions</kbd><br/>
There are two ways to create a nested functions:

1. Call a function within another function: This involves invoking a separate function from within a function.

```js {monaco-run} {autorun: false}
function outerFunction() {
  function innerFunction() {
    // console.log('This is the inner function')
  }
  // Calling the inner function inside the outer function
  innerFunction()
}
// Outputs: This is the inner function
outerFunction()
```

---
title: Example
hideInToc: true
---

2. Write a function within a function: In this case, you define a new function entirely inside another function.

```js {monaco-run} {autorun: false}
function outerFunction() {
  function innerFunction() {
    // console.log('This is the inner function')
  }
  // Call the nested function
  innerFunction()
}
// Outputs: This is the inner function
outerFunction()
```

In both cases, the inner (nested) function has access to the outer function's variables and scope, which is a key feature of closures.

---
hideInToc: true
---

# Lexical Environment

<div> </div>

In JavaScript, a lexical environment refers to the structure that holds variable bindings (variable names and their values)
within a specific scope at a particular time. It defines how variables are resolved based on where the code is written and executed.

Let's break this down into steps:

Step 1: Every running function, code block <kbd>...</kbd>, and the entire script itself has an internal (hidden) object known as the Lexical Environment.
This object stores the variables defined in that scope and provides access to its outer lexical environment (parent scope).

- Scope: The context in which a variable is accessible. A lexical environment is tied to a specific scope, such as global scope or function scope.
- Lexical scoping: Variables are resolved based on their position in the code, meaning inner functions can access variables from outer
  functions, but not the other way around.

---
title: Example
hideInToc: true
---

When a function is executed, a new lexical environment is created for that function, containing:

- Environment Record: an object that stores all local variables as its properties (and some other information like the value of <kbd>this</kbd>).
- A reference to the outer lexical environment, the one associated with the outer code.

A “variable” is just a property of the special internal object, <kbd>Environment Record</kbd>.
“To get or change a variable” means “to get or change a property of that object”.

```js {monaco-run} {autorun: false}
function outerFunction() {
  let outerVar = 'I am outside'

  function innerFunction() {
    let innerVar = 'I am inside'
    // Can access outerVar due to lexical scoping
    // console.log(outerVar)
  }

  innerFunction()
}
outerFunction()
```

---
hideInToc: true
---

# Contd.

<div> </div>

<kbd>innerFunction</kbd> has access to <kbd>outerVar</kbd> because it’s in the outer function’s lexical environment.
This environment is created during the function definition and execution process, preserving the context in which variables are declared.

---
title: More on Functions
hideInToc: true
---

<strong>Step 2: Function Declarations</strong> <br/>
In JavaScript, a function is treated as a value, much like a variable. <br/>

When a lexical environment is created, function declarations are hoisted, meaning they are fully initialized and ready to be used before the actual place in the code where they are declared.
This is why Function Declarations can be invoked even before the line where they are defined. During the creation phase of
the lexical environment, the JavaScript engine processes all function declarations and makes them available in the current scope.

```js {monaco-run} {autorun: false}
// Works even though the function is declared later
sayHello()

function sayHello() {
  // console.log('Hello!')
}
```

In this example, the function <kbd>sayHello()</kbd> can be called before its declaration because it is hoisted to the top of the current scope during the creation of the lexical environment.

---
hideInToc: true
---

# Contd.

<div> </div>

This behavior only applies to Function Declarations, not Function Expressions. For example, if you declare a function using a variable (let or const), it won’t be available before the declaration.

```js {monaco-run} {autorun: false}
// Error: Cannot access 'sayHello' before initialization
sayHello()

const sayHello = function () {
  // console.log('Hello!')
}
```

In this case, since sayHello is a function expression, it won’t be available until the line where it’s defined is executed.

---
hideInToc: true
---

# Garbage collection

<div> </div>

<div class="overflow-scroll h-40">
When a function call finishes, the associated lexical environment (which holds all the variables and functions in that scope) is removed from memory. This is because once the function has executed, there are no more references to the lexical environment, and JavaScript no longer needs to keep it.
Variables inside the function are also removed unless they are referenced by something outside (e.g., closures).

JavaScript uses garbage collection to automatically free up memory that is no longer reachable. As with any JavaScript object, the lexical environment and its variables are only kept in memory while they are reachable. Once there are no references left, the garbage collector cleans them up to free memory. This memory management process is important for performance, helping prevent memory leaks by discarding data that is no longer needed.

</div>

```js {monaco-run} {autorun: false}
function createUser() {
    let name = "John";
    return function() {
        // console.log(`User name is: ${name}`);
    };
}
// Function call returns the inner function, keeping 'name' alive
const user = createUser(); 
// Outputs: User name is: John
user(); 
// 'name' is still accessible here due to closure, so it won’t be garbage collected yet
```

A Lexical Environment object dies when it becomes unreachable.

---
hideInToc: true
---

# Global Object

<div> </div>

The global object in JavaScript provides variables and functions that are accessible from anywhere in your code. These are built-in by default, meaning they are part of the JavaScript language or the runtime environment (like the browser or Node.js).
In contrast, local objects (variables or functions declared within a function) are only accessible within the block scope where they are declared. Once that block or function finishes execution, those local objects are no longer available.

```js {monaco-run} {autorun: false}
// Global variable
let globalVar = "I'm global";

function localFunction() {
  let localVar = "I'm local";
  // console.log(globalVar);
  // console.log(localVar);
}
localFunction();

// console.log(globalVar);
// console.log(localVar);
```

---
hideInToc: true
---

# Function Object, NFE and `new Function` syntax

<div> </div>

Earlier, we discussed functions in JavaScript, but did you know that a function is actually an object?
In JavaScript, functions are values, and since every value has a type, functions fall under the "object" type.
When declaring a function, there are some properties to be put in place, let's take a look at the properties:

There is a <strong>name property</strong>, which is one of the useful properties of the function object.
It holds the name of the function and can be accessed programmatically.

```js {monaco-run} {autorun: false}
// Function declaration
function greet() {
  // console.log('Hello!')
}

// Accessing the name property of the function
// console.log(greet.name)

// Function expression
const sayHi = function () {
  // console.log('Hi!')
}
// console.log(sayHi.name)
```

---
title: Contextual Name 
hideInToc: true
---

Some functions are declared anonymously, but JavaScript's engine can still assign a name to them based on the context in
which they're defined. This is known as the "contextual name".
For example, when an anonymous function is assigned to a variable or used as a method in an object, JavaScript automatically
assigns the variable or property name as the function's name.
Sometimes, it fails to achieve this task of figuring a right name for the function and it leaves it empty.
Here's a code example:

```js {monaco-run} {autorun: false}
// Anonymous function assigned to a variable
const myFunction = function() {
  // console.log("Hello, world!");
};

// console.log(myFunction.name);
// Anonymous function used as an object method
const obj = {
  sayHello: function() {
    // console.log("Hi!");
  }
};
// console.log(obj.sayHello.name);
```

In both cases, although the functions were declared anonymously, JavaScript assigns them a contextual name based on the
variable <kbd>(myFunction)</kbd> and the object property<kbd>(sayHello)</kbd> to which they are assigned.

---
hideInToc: true
---

# The "length" property

<div></div>
A function object's <kbd>length</kbd> property indicates how many arguments the function expects, i.e., the number of formal parameters. Here are some key points to note:

- Rest parameters `(e.g., ...args)` are excluded from the count.
- Only parameters before the first one with a default value are counted.
- A destructuring pattern `(e.g., {a, b} or [x, y])` counts as a single parameter.

```js {monaco-run} {autorun: false}
function example(a, b = 5, ...rest) {
  // Function body
}
// Output: 1 (only 'a' is counted)
// console.log(example.length);

function exampleWithDestructure({x, y}, z) {
  // Function body
}
// Output: 2 (destructured object and 'z' are counted)
// console.log(exampleWithDestructure.length);

function exampleWithRest(a, ...rest) {
  // Function body
}
// Output: 1 (only 'a' is counted, rest parameter is excluded)
console.log(exampleWithRest.length);
```

---
hideInToc: true
---

# The "custom" property

<div> </div>

In JavaScript, functions are objects, which means we can add custom properties to them, just like any other object.
This allows us to attach additional data or behavior directly to the function.

```js {monaco-run} {autorun: false}
// Declare a function
function greet() {
  // console.log('Hello!')
}

// Add a custom property to the function
greet.customMessage = 'This is a custom property.'

// Access the custom property
// console.log(greet.customMessage)

// Call the function
greet()
```

<div class="overflow-scroll h-37">
Note: A property is not the same as a variable. While a variable holds data that can be accessed directly in the function’s scope 
or globally, a property is associated with an object (in this case, a function object) and accessed using dot notation.

For example:
Variable: A standalone value accessible in a function or scope.
Property: A value attached to an object, accessed via the object.

</div>

---
hideInToc: true
---

# Named Function Expression (NFE)

<div> </div>

As the name implies, a Named Function Expression (NFE) is a term used for a function expression that has a name.
Unlike regular function expressions, which can be anonymous, an NFE includes a specific name, allowing it to
refer to itself internally (useful for recursion) and aiding in debugging.

```js {monaco-run} {autorun: false}
const square = function calculateSquare(x) {
  return x * x
}

// console.log(square(4))
```

In this example, the function is assigned to the variable square, but it is also named calculateSquare within its definition.
The name calculateSquare can be used inside the function body for recursion or reference, while the function is called using
the square variable externally.

---
hideInToc: true
---

# new Function

<div> </div>

We have another sheriff in town when creating a function, and though it’s rarely used, sometimes we just have to pull out the
new Function constructor. It’s like the sheriff who rolls into town and says, "I’m here to handle the dynamic situations!"

Just remember, this sheriff can create functions from strings, but be careful—using this method can be risky!
You wouldn’t want just any outlaw to take advantage of that kind of power.

```js
const myFunction = new Function(param1, param2, ..., functionBody);
```

The function is created with the arguments <kbd>param1...param2</kbd> and the given <kbd>functionBody</kbd>.
In the code below, the function is created literally from a string, that's passed at runtime.

```js
// Create a function that adds three numbers-
const addThreeNumbers = new Function('a', 'b', 'c', 'return a + b + c;')

// Call the function with arguments
const result = addThreeNumbers(5, 10, 15)

// console.log(result)
```

---
hideInToc: true
title: Function as a string
---

Earlier, we mentioned that when you create a new function, it automatically becomes a closure and creates its own Environment.
Here's the catch: if you use new Function to create a function, its Environment is set to reference not the current Lexical Environment,
but the global one.

This means that functions created with new Function do not have access to the variables defined in the scope where they were created.
Instead, they can only access global variables. This behavior is different from regular functions that retain a reference to their
lexical scope.

```js {monaco-run} {autorun: false}
let globalVar = 'I am a global variable';

function createClosure() {
  let localVar = 'I am a local variable';

  // Using new Function to create a function
  // Attempts to access localVar
  const myFunc = new Function('return localVar;');

  return myFunc;
}

const func = createClosure();
// console.log(func());

```

---
hideInToc: true
---

# Scheduling: setTimeout and setInterval | process.nextTick | requestAnimationFrame | microtasks

<div> </div>

Sometimes, we may want to execute a function at a later time. This is known as "scheduling a call" in JavaScript. There are two primary ways to schedule a function call:

setTimeout – Executes a function once, after a specified delay.
setInterval – Repeatedly executes a function at regular intervals.

---
hideInToc: true
---

# setTimeout

<div> </div>

The setTimeout method allows us to schedule a function to be executed once after a certain delay (in milliseconds).

```js
setTimeout(function, delay);
```

Let's run a code using the <kbd>setTimeout</kbd> syntax above

```js {monaco-run} {autorun: false}
function greet() {
  // console.log("Hello, world!");
}

// Schedule the function to run after 2 seconds (2000 ms)
setTimeout(greet, 2000);
```

After 2 seconds delay, the function greet will run.

---
hideInToc: true
---

# clearTimeout

<div> </div>

A call to setTimeout returns a "timer identifier" (timerId) that we can use to cancel the scheduled function execution before it occurs.

```js
let timerId = setTimeout(...);
clearTimeout(timerId);
```

1. <kbd>setTimeout</kbd>: Schedules a function to run after a specified delay, and returns a timerId.
2. <kbd>clearTimeout</kbd>: Cancels the scheduled function using the timerId.

```js {monaco-run} {autorun: false}
function greet() {
  // console.log('Hello, world!')
}

// Schedule the function to run after 5 seconds (5000 ms)
let timerId = setTimeout(greet, 5000)

// Cancel the execution before the 5 seconds pass
clearTimeout(timerId)
```

---
hideInToc: true
---

# Contd

<div> </div>

The function greet was scheduled to run after 5 seconds.
But before the timeout occurred, we called clearTimeout(timerId), which canceled the scheduled execution.
Therefore, "Hello, world!" will not be logged to the console.

This feature is useful when you want to prevent a delayed action from happening based on certain conditions or user interactions.

---
hideInToc: true
---

# setInterval

<div> </div>

The <kbd>setInterval</kbd> function repeatedly executes a function at regular intervals.
It schedules the function to be called continuously after the specified interval (in milliseconds) until it is explicitly stopped.
This method returns an interval ID which uniquely identifies the interval, so you can remove it later by calling <kbd>clearInterval()</kbd>

```js
let intervalId = setInterval(function, interval);
clearInterval(intervalId);
```

1. <kbd>function</kbd>: The function to execute.<br/>
2. <kbd>interval</kbd>: The time in milliseconds between each function call.

```js {monaco-run} {autorun: false}
function sayHello() {
  // console.log('Hello!')
}

// Schedule the function to run every 2 seconds
let intervalId = setInterval(sayHello, 2000)

// Stop the interval after 6 seconds
setTimeout(() => clearInterval(intervalId), 6000)
```

---
hideInToc: true
---

# Contd.

<div> </div>

In the code we have in the previous slide, the <kbd>sayHello()</kbd> function runs every 2 seconds.
After 6 seconds, the <kbd>clearInterval</kbd> function stops the repeated execution of sayHello by using <kbd>intervalId</kbd>.
The <kbd>setInterval</kbd> method is useful for tasks that need to be repeated continuously, such as updating a clock, refreshing data,
or creating animations, until manually cancelled.

---
hideInToc: true
---

Nested setTimeout


<div class="text-sm"> 

Using nested <kbd>setTimeout</kbd> gives you more control over scheduling compared to <kbd>setInterval</kbd>.
In <kbd>setInterval</kbd>, the next iteration is scheduled regardless of whether the previous one has finished.
With nested <kbd>setTimeout</kbd>, you can dynamically schedule the next delay based on conditions or the results of the current task.

</div>

```js {monaco-run} {autorun: false}
function dynamicTimeout(counter = 1) {
  // console.log(`Execution #${counter}`);
  // Adjust the delay dynamically, If counter is less than 5, delay is 1 second, otherwise 2 seconds
  let delay = counter < 5 ? 1000 : 2000;
  setTimeout(() => {
    // Continue until counter reaches 10
    if (counter < 10) { // Recursive call to schedule the next execution
      dynamicTimeout(counter + 1);
    } else {
      // console.log("Completed.");
    }
  }, delay);
}
dynamicTimeout();
```

<div class="overflow-scroll h-10">

- Dynamic Scheduling: The next execution time can be adjusted dynamically (in this case, based on counter).
- Sequential Execution: You ensure that the next setTimeout only starts after the current one finishes.
- Customizable Conditions: The recursion can stop or modify behavior based on the results of the current task, giving more flexibility.

</div>

---
hideInToc: true
---

# Zero delay setTimeout

<div> </div>

There’s a unique use case for <kbd>setTimeout(func, 0)</kbd> or simply <kbd>setTimeout(func)</kbd>, which schedules the execution of
func as soon as possible. However, the function will only be called after the current script finishes executing.

This means the function is queued to run "right after" the current script.

For example, in the following code, "Hello" is printed first, followed immediately by "World":

```js {monaco-run} {autorun: false}
setTimeout(() => {
  // console.log("World");
}, 0);

// console.log("Hello");
```

---
hideInToc: true
---

# Contd.

<div> </div>

Note: All scheduling methods do not guarantee the exact delay.

For example, the in-browser timer may slow down for a lot of reasons:

- The CPU is overloaded.
- The browser tab is in the background mode.
- The laptop is on battery saving mode.

All that may increase the minimal timer resolution (the minimal delay) to 300ms or even 1000ms depending on
the browser and OS-level performance settings.

---
hideInToc: true
---

# process.nextTick()

<div> </div>

Every time the event loop makes a complete cycle in Node.js, it's referred to as a "tick."

In earlier slides, we discussed setTimeout(), which schedules the execution of a function once after a specified delay.
However, Node.js provides an even more immediate mechanism with process.nextTick().

While setTimeout() schedules code to run after a minimum delay (often after the current tick),
process.nextTick() allows you to queue a callback to be executed before the next event loop tick. This means the function
passed to process.nextTick() is executed immediately after the current operation completes, but before any I/O tasks or timers are handled.

```js {monaco-run} {autorun: false}
// console.log('Start')

process.nextTick(() => {
  // console.log('Executed in next tick')
})

setTimeout(() => {
  // console.log('Executed in setTimeout')
}, 0)

// console.log('End')
```

---
hideInToc: true
---

# Contd.

<div> </div>

I am sure you might think why do we need all these timer methods in JavaScript, but they all have their unique functions.

- process.nextTick(): Executes the callback before the next event loop iteration, right after the current operation completes.
- setTimeout(func, 0): Schedules the callback to run after at least one event loop cycle.
  This makes process.nextTick() suitable for deferring work until the current operation is complete, but without waiting for the next event loop cycle.

---
hideInToc: true
---

# requestAnimationFrame()

<div> </div>

<kbd>requestAnimationFrame()</kbd> is a JavaScript method specifically designed to handle animations that go beyond what CSS can manage.
It synchronizes animations with the browser's refresh rate, ensuring smooth performance by allowing the browser to optimize the animation rendering.

Unlike <kbd>setTimeout()</kbd> or <kbd>setInterval()</kbd>, which fire at specified intervals regardless of the browser's performance,
requestAnimationFrame() ensures that animations run at an ideal 60 frames per second (or whatever the display supports), avoiding stutters or frame drops.
It pauses the animation when the page is in the background, saving resources.

Syntax:

```js
let requestId = requestAnimationFrame(callback)
```

---
hideInToc: true
---

# Contd.

<div> </div>

<kbd>requestAnimationFrame()</kbd> schedules the callback function to run at the next optimal time when the browser is ready to perform an animation.
This ensures that the animation is synced with the browser’s refresh rate for smooth rendering.
When you make changes to elements inside the callback, those changes are grouped together with other requestAnimationFrame callbacks and CSS animations.
This reduces the number of geometry recalculations and repaints, which would otherwise happen if multiple changes were triggered separately.
As a result, the browser can handle the rendering process more efficiently by combining all the updates into a single cycle.

The <kbd>requestAnimationFrame()</kbd> method also returns a unique requestId, which can be used to cancel the scheduled animation if needed, using <kbd>cancelAnimationFrame()</kbd>.

```js
// cancel the scheduled execution of callback
cancelAnimationFrame(requestId)
```

<div class="overflow-scroll h-40">
The callback function passed to <kbd>requestAnimationFrame()</kbd> receives one argument: a timestamp that represents the time elapsed since the page began loading, in milliseconds. 
This timestamp allows you to synchronize animations with the actual time that has passed, making it easier to manage smooth transitions and avoid frame skips.

This timestamp is similar to what you would get by calling <kbd>performance.now()</kbd>, which provides high-resolution timestamps.
It’s particularly useful for calculating animation progress based on time instead of frame count.

<a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame" target="_blank">Read more on MDN</a>

</div>

---
hideInToc: true
---

# microtasks()

<div> </div>

In JavaScript we have <kbd>task</kbd> and <kbd>microtask</kbd> but before we dwell into <kbd>microtask</kbd> let's talk about <kbd>task</kbd> in JavaScript.

<kbd>task</kbd> represent units of work or operations that are placed in the event loop’s task queue. Tasks are processed sequentially, and each task is executed from start to finish without interruption.
A task can be created by various mechanisms, such as user interactions (clicks, key presses), <kbd>setTimeout()</kbd>, <kbd>setInterval()</kbd>, or events like DOMContentLoaded.

<kbd>task</kbd> are important because they control the flow of JavaScript execution in an asynchronous environment, ensuring that even asynchronous code (like timers or event listeners) is handled in a predictable,
ordered manner.

<!-- Code Example of a Task -->

```js {monaco-run} {autorun: false}
 // Synchronous task
// console.log('Start');

setTimeout(() => {
  // Task
  // console.log('This is a task in the event queue');
}, 0);
 // Synchronous task
// console.log('End');
```

---
title: Microtask
hideInToc: true
---

A microtask is a small function that gets executed after the currently running function completes, but before the JavaScript engine moves on to the next task in the event loop.
Microtasks are typically used for operations that need to be performed immediately after the current code execution, such as resolving promises, mutation observer callbacks, or other asynchronous operations
that need to happen very soon.

Code Example of a Microtask

```js {monaco-run} {autorun: false}
// console.log('Start')

setTimeout(() => {
  // console.log('Task (setTimeout)')
}, 0)

Promise.resolve().then(() => {
  // console.log('Microtask (Promise)')
})

// console.log('End')
```

---
hideInToc: true
---

# Decorators and Forwarding, call/apply, bind

<div> </div>

When working with functions, JavaScript offers flexibility, allowing developers to easily pass functions around like objects.
Additionally, functions can be forwarded or enhanced (decorated) for more complex use cases.

## Transparent caching

In a scenario where a function consistently returns the same result, and we anticipate calling it frequently, we may want to
cache (store) the results. This prevents unnecessary recalculations and saves time by returning the cached result when the function is called again.

---
hideInToc: true
---

# Contd.

<div> </div>

```js {monaco-run} {autorun: false}
// Function that caches results of an expensive computation
function cachedFunction(fn) {
  // Object to store cached results
  let cache = {} // or use new Map()

  return function (arg) {
    if (cache[arg] !== undefined) {
      console.log('Returning cached result')
      return cache[arg]
    }
    console.log('Calculating result')
    let result = fn(arg)
    cache[arg] = result
    return result
  }
}

const memoizedCacheFunction = cachedFunction(n => n ** 10000)

memoizedCacheFunction(5)
memoizedCacheFunction(5) // cached result
```

---
title: Example
hideInToc: true
---

```js {monaco-run} {autorun: false}
// Example function with an expensive operation
function expensiveOperation(num) {
  // In a real scenario, this could be a more complex calculation
    return num * num;
}

// Create a cached version of the expensive function
const cachedExpensiveOperation = cachedFunction(expensiveOperation);

// Calling the cached function
console.log(cachedExpensiveOperation(5));
console.log(cachedExpensiveOperation(5));
```

In this example, the <kbd>cachedFunction</kbd> wraps any function you provide and stores the result of each call in the cache object.
The next time you call the function with the same argument, it will return the cached result instead of recalculating.

---
hideInToc: true
---

Using `func.call` for the context

<div class="text-sm">

In JavaScript, func.call allows you to call a function with a specific this context. This is useful when you need to set the <kbd>this</kbd> value 
explicitly for a function, especially when working with object methods that might be called in different contexts.

```js
func.call(context, arg1, arg2, ...)
```

However, caching can be tricky when dealing with object methods because each object might have different data, and caching without
consideration of this can lead to incorrect results. If you want to use caching with methods while respecting this, you'll need to
ensure that the cache is tied to the specific context (this) of the object.

</div>

<div class='overflow-scroll h-60'>

```js {monaco-run} {autorun: false}
// Constructor function for Vehicle - // Set the 'make' and 'year' property for the vehicle
function Vehicle(make, year) {
  this.make = make
  this.year = year
}
// Constructor function for Toyota, inheriting from Vehicle // Call the Vehicle constructor, using 'this' to bind to the Toyota instance
function Toyota(make, year) {
  Vehicle.call(this, make, year)
  // Add a specific property 'category' for Toyota cars
  this.category = 'car'
}
// Create a new Toyota object and console.log the 'year' property
console.log(new Toyota('Camry', 2024).year)
```

</div>

---
title: Constructor Functions
hideInToc: true
---

<h3>To get a better understanding of how the code in the previous slide works, read through this:</h3>

- <kbd>Constructor Functions</kbd>:
  In JavaScript, functions like <kbd>Vehicle</kbd> and <kbd>Toyota</kbd> are called constructor functions. They are used to create objects with specific properties.
  When you create an object using <kbd>new</kbd>, the constructor function is called and the <kbd>this</kbd> keyword inside the function refers to the new object being created.

- <kbd>Vehicle</kbd> Constructor:
  The <kbd>Vehicle</kbd> function accepts two arguments: make (e.g., 'Toyota') and year (e.g., 2024).
  <kbd>this.make = make;</kbd> sets the <kbd>make</kbd> property of the object to the value passed in.
  <kbd>this.year = year;</kbd> sets the <kbd>year</kbd> property of the object to the year passed in.

- <kbd>Toyota</kbd> Constructor:
  <kbd>Toyota</kbd> is another constructor function that uses the <kbd>Vehicle</kbd> constructor to set the make and year properties.
  <kbd>Vehicle.call(this, make, year);</kbd> means: "Call the <kbd>Vehicle</kbd> function, and make sure the this keyword inside <kbd>Vehicle</kbd> refers to the new <kbd>Toyota</kbd> object."
  After calling <kbd>Vehicle</kbd>, the <kbd>Toyota</kbd> constructor also adds a <kbd>category</kbd> property to the object and sets it to 'car'.

- Calling <kbd>new Toyota('Camry', 2024)</kbd>:
  This creates a new <kbd>Toyota</kbd> object with the <kbd>make</kbd> <kbd>'Camry'</kbd> and <kbd>year</kbd> <kbd>2024</kbd>, as well as the <kbd>category</kbd> <kbd>'car'</kbd>.

- console.log:
  The <kbd>console.log</kbd> function pops up a message box.
  <kbd>new Toyota('Camry', 2024).year</kbd> creates a new <kbd>Toyota</kbd> object and accesses its <kbd>year</kbd> property, which is <kbd>2024</kbd>. So, the console.log will show <kbd>2024</kbd>.

---
hideInToc: true
class: text-sm
---

# func.apply

<div></div>

The <kbd>apply()</kbd> method could be used instead of <kbd>call()</kbd>.
This method of <kbd>Function</kbd> instances calls this function with a given <kbd>this</kbd> value, and <kbd>argument</kbd> provided as an array (or an array-like object) unlike <kbd>call()</kbd> that expects a list of arguments.

```js
//This accepts list of arguments
func.call(context, ...args)

//This accepts only array-like args
func.apply(context, args)
```

In cases where your objects fit into the two conditions- both iterable and array like, you can either use the <kbd>func.call()</kbd> or <kbd>func.apply()</kbd> but the later will be faster, because of its natural
handling of array-like structures and potential optimizations in the JavaScript engines.

```js
let wrapper = function () {
  return func.apply(this, arguments)
}
```

If you use an external code to call this function, it is indistinguishable from the call of the original function <kbd>func</kbd> because:

<div class="overflow-scroll h-20 p-5">
<ul>
<li>The context <kbd>this</kbd> is preserved.</li>
<li>The arguments are forwarded.</li>
<li>The result of <kbd>func</kbd> is returned by the wrapper.</li>
</ul>
</div>

---
hideInToc: true
---

# Function binding

<div></div>

The <kbd>bind()</kbd> method on <kbd>function</kbd> instances creates a new function,
it invokes the original function with its this keyword set to the value you specify and with any arguments you provide in <kbd>bind()</kbd> appearing before any arguments passed when calling the set function.

```js
func.bind(context, ...args)
```

This function above is going to returns a "bound variant" of function <kbd>func</kbd>. This new function will have:

<ul>
<li>The <kbd>this</kbd> context fixed to the provided context value.</li>
<li>The first argument(s) (if any are provided in <kbd>this</kbd> ...args <kbd>this</kbd>) pre-set, meaning they will be used when the new function is called, followed by any additional arguments passed during the call.</li>
</ul>

---

## Let's take a look at this code

```js {monaco-run} {autorun: false}
function greet(greeting, name) {
  console.log(`${greeting}, ${name}!`);
}

// Use bind to create a new function with a preset 'this' value and argument
const greetJohn = greet.bind(null, 'Hello');

// When greetJohn is called, it will use the bound greeting ('Hello')
greetJohn('John');
greetJohn('Alice');
```

---

## So, why <kbd>bind()</kbd>

As said earlier, the <kbd>bind()</kbd> method is useful for controlling the <kbd>this</kbd> context and presetting arguments but also, we can use it to achieve these as well:

<ul>
<li>Control the <kbd>this</kbd> value</li>
It allows you to lock in a specific <kbd>this</kbd> value, ensuring that the function will always use the context you want.
<li>Partial Application</li>
It allows you to preset arguments for a function, creating a new function with some arguments already provided.
<li>Method borrowing</li>
It gives you the room to borrow methods from one object and use them in another, while ensuring the correct <kbd>this</kbd> context is maintained.
<li>Function Currying</li>
It can also be used to implement currying, where you transform a function with multiple arguments into a series of functions that take one argument at a time.
</ul>

This makes <kbd>bind()</kbd> particularly valuable in situations involving event handlers, callbacks, or when you want to reuse functions with certain preset parameters.

---
hideInToc: true
---

# Arrow function in details

<div class="text-sm">

We've already discused the beautiful arrow function at the beginning of this module, but let's go little deeper in what arrow function entails.
As a developer, you often need to write arrow functions in your code for various tasks like calling <kbd>useEffect</kbd> hooks in React or using <kbd>setTimeout()</kbd> in JavaScript. Arrow functions offer a more concise syntax and have specific benefits, particularly in handling the this context.

- Firstly, arrow functions do not have their own "arguments" object. But, they inherit <kbd>argument</kbd> from their lexical scope.

This second code will throw an error because unlike traditional function in the first scope, argument is not defined.

</div>

```js {monaco-run} {autorun: false}
function traditionalFunction() {
  console.log(arguments);
}
traditionalFunction(1, 2, 3);

const arrowFunction = () => {
  console.log(arguments);
}
arrowFunction(1, 2, 3);
```

---
hideInToc: true
---

# Contd.

<div></div>
To handle <kbd>argument</kbd> in Arrow functions, we have use two methods:<br/>

1. Using of rest parameters <kbd>(...args)</kbd>

```js {monaco-run} {autorun: false}
const arrowFunction = (...args) => {
  console.log(args);
};

arrowFunction(1, 2, 3);
```

2. Using the <kbd>arguments</kbd> object from the non-arrow function in the lexical scope.

```js {monaco-run} {autorun: false}
function outerFunction() {
  const arrowFunction = () => {
    console.log(arguments);
  }

  arrowFunction();
}
```

---
title: Limitations of Arrow Functions
hideInToc: true
---

- Secondly, Arrow functions have no `this`

Arrow functions do not have their own<kbd>this</kbd>. Instead, when a developer access <kbd>this</kbd> inside an arrow function, it is taken from the surrounding lexical scope.

In the code below, the arrow function inside the <kbd>setTimeout</kbd> retains the <kbd>this</kbd> value from the <kbd>greet</kbd> method, which refers to <kbd>obj</kbd>.

```js {monaco-run} {autorun: false}
const obj = {
  name: 'Alice',
  greet: function() {
    console.log(`Hello, ${this.name}`);

    setTimeout(() => {
      console.log(`Hello again, ${this.name}`);
    }, 1000);
  }
};

obj.greet();

```

---
title: Limitations
hideInToc: true
---

- Thirdly, Arrow functions can't be called with <kbd>new</kbd>

Since arrow functions do not have their own<kbd>this</kbd> they can't be used as constructors.

This will throw an error:

```js {monaco-run} {autorun: false}
const Person = (name) => {
  this.name = name
}
try {
  const person1 = new Person('Alice')
} catch (error) {
  // console.log(error)
}
```

But, with a regular function declaration or expression you can define a constuctor

```js {monaco-run} {autorun: false}
function Person(name) {
  this.name = name;
}
const person1 = new Person('Alice');
console.log(person1.name);
```
