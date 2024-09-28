---
layout: center
transition: slide-up
hideInToc: true
---

# Fundamentals
<div mt-2 />

- Variables
- Data types
- Interaction: `alert`, `prompt`, `confirm` | `console.log`
- Type Conversions
- Operators: Math, Comparison, Logical, Bitwise, Null Coalescing, Optional Chaining
- Conditional Branching: if, '?', switch
- Loops: while, for, for..in, for..of
- Functions: Declaration, Arrow functions, Function Expressios


---
hideInToc: true
---

# Variables: `let`, `const` and `var`

```js{monaco-run} {autorun: false}
let message;
message = 'Hello';

console.log(message)
```

---
hideInToc: true
---

# Data types



```js{monaco-run} {autorun: false}
let name = 'John';
let age = 25;
let isMarried = false;
let height = null;
let weight = undefined;

console.log(name, age, isMarried, height, weight);

```

---
hideInToc: true
---

# Interaction: `alert`, `prompt`, `confirm`

```js{monaco-run} {autorun: false}

alert('Hello'); 

let name = prompt('What is your name?', 'John')

let isMarried = confirm('Are you married?');

console.log(name, isMarried);

```

---
hideInToc: true
transition: slide-up
---

# Assignment or Class Activity

- declare a variable `name` and assign your name to it
- declare a variable `age` and assign your age to it
- declare a variable `isMarried` and assign `true` or `false` to it

- use `alert`, `prompt` and `confirm` to interact with the user
- display the values of `name`, `age` and `isMarried` in the console

- **Bonus**: use `console.log` to display the values in the console

```js{monaco-run} {autorun: false}
// write your code here
```
