---
layout: center
transition: slide-up
hideInToc: true
---

# Fundamentals

<TocIcon />

<div mt-2 />

- <a @click="$slidev.nav.go($nav.currentPage+1)">Variables</a>
- <a @click="$slidev.nav.go($nav.currentPage+4)">Data types</a>
- <a @click="$slidev.nav.go($nav.currentPage+7)">Interaction: `alert`, `prompt`, `confirm` | `console.log`</a>
- <a @click="$slidev.nav.go($nav.currentPage+9)">Type Conversions</a>
- <a @click="$slidev.nav.go($nav.currentPage+10)">Operators: Math, Comparison, Logical, Bitwise, Null Coalescing, Optional Chaining</a>
- <a @click="$slidev.nav.go($nav.currentPage+16)">Conditional Branching: if, '?', switch</a>
- <a @click="$slidev.nav.go($nav.currentPage+22)">Loops: while, for, for..in, for..of</a>
- <a @click="$slidev.nav.go($nav.currentPage+25)">Functions: Declaration, Arrow functions, Function Expressions</a>

---
hideInToc: true
---

# Variables: `let`, `const` and `var`

- Variables are containers for storing data. You can declare variables using `var`, `let`, or `const`.
<h4 class=' text-[#5D8392]'>Variables Naming convention </h4>

1. The first character must not be a digit.

2. When the name contains multiple words, use <span text-red>Camel Case. </span>

3. Reserved words ( like JavaScript keywords ) cannot be used as names.

4. Stay away from abbreviations or short names like a, b, and c, unless you know what you’re doing.

5. Make names maximally descriptive and concise.
6. Separate multiple words with underscore but camelCase(2) should be the first priority ( \_ )

```js {monaco-run} {autorun: false}
let message; // Declaration
message = 'Hello'; // Definition
// console.log(message)
const name = 'John Doe' // Combined delcaration and definition
```

---
hideInToc: true
---

## Variable{.text-common} `const`

- Variables declared with <span class='text-red'> const </span> do not change and cannot be reassigned.

```js {monaco-run} {autorun: false}
const tutor = 'Mr Setemi'
// console.log(tutor)
// the data Mr setemi is now assigned to variable tutor
tutor = 'Mr Ojo' //can not be reassigned
// Therefore values that can change later on should not be declare with const
```

### Variable{.text-common} `let` and `var`

- Variables declared with <span class="text-red">'let'</span> and <span class="text-red">'var'</span> can change and be reassigned.

```js {monaco-run} {autorun: false}
let tech_School = 'Altschool'
tech_School = 'Altschool Africa' // Tech school is now reassigned to Altschool Africa
// console.log(tech_School)
var hobby = 'reading'
hobby = 'coding'
// console.log(hobby)
```

---
hideInToc: true
title: Variable Declaration Examples
---

- Examples

```js
// The first character must not be a digit.
let 1first;    ❌
let firstName; ✅
Const test123; ✅
```

```js
// When the name contains multiple words, camelCase is used
let myVeryLongName; ✅
let MYVERYLONGNAME; 🙅🏽🙅🏽‍♀️
let myverylongname; ❌
```

```js
// Reserved words (like JavaScript keywords) cannot be used as names
let if; ❌
let boolean; ❌
let else; ❌
```

```js
// Stay away from abbreviations or short names like a, b, and c, unless you know what you’re doing.
//  Make names maximally descriptive and concise.
let currentUser = 'John Doe'
let data = 'John Doe'
let x = 'John Doe'
// Which is descriptive? currentUser
```

---
hideInToc: true
---

# [Data types]{.text-common}

- A value in javascript is always of a certain type.

- Numbers can be written with or without decimals, that is represent both integer and floating point numbers.

```js
let weight = 7.5
let length = 20
```

- A string in JavaScript must be surrounded by quotes, can be double quote, single quotes or backticks.

```js
let country = 'Nigeria'
let subject = "Software Engineering"
const greetings = `Hello Altschooler's` //backticks allow single and double quotes inside a string
//Double and Single quotes are simple quote. There is no difference between the two.
//Avoid doing this!
let snacks = "meatpie' // It is very wrong, if you want to use double quote then stick to it.
```

- Boolean type has only two values: True and False

```js
let isUserLoggedIn = true
let isLagosBig = false
```

---
hideInToc: true
title: Primitive Datatypes
---

- Undefined indicate that a variable has not been assigned a value, or not declared at all.

```js
let age // the variable age was declared but not assigned a value
let age = undefined //it also possible to explicitly assign undefined to a variable
```

- BigInt are used to store big integer values that too big to be represented by normal Javascript Number

```js
const bigInt = 123456789012345678901234567890n // the "n" at the end means it's a BigInt
```

- Object are used to store collections of data.

```js
// Object
const car = { type: 'Fiat', model: '500', color: 'white' }
```

- It used to create a unique identifier for objects

```js
const mySymbol = Symbol('unique identifier')
const person = { name: 'Alice', [mySymbol]: 'secret information' }
```

- Null: It a special value which represents "nothing", "empty" or "value unknown"

```js
let age = null
```

---
hideInToc: true
name: More on Variable Declaration
---

Example: To know the type of a value in JS use <span class="text-red"> typeof </span>

```js {monaco-run} {autorun: false}
let name = 'John Dev'
let age = 21
let isMarried = false
let height = null
let weight = undefined
const mySymbol = Symbol('unique identifier')
const person = {
  name: 'Alice',
  [mySymbol]: 'secret information',
}
// console.log(typeof name, typeof age, typeof isMarried, typeof height, typeof weight, typeof person, typeof mySymbol)
```

- Note: the typeof null returns object

```js {monaco-run} {autorun: false}
let name = 'John';
let age = 25; let isMarried = false; let height = null;
let weight = undefined;

// console.log(name, age, isMarried, height, weight);
```

---
hideInToc: true
---

# Interaction: `alert`, `prompt`, `confirm`

- The alert() method: displays an alert box with a mesage and an OK button.
- The prompt() method: It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel. It accepts two arguments.
- The confirm() method: The function shows a modal window with a question and two buttons: OK and Cancel

#### Alert{.text-common}

- The alert() method displays an alert box with a mesage and an OK button

```js {monaco-run} {autorun: false}
// alert('Hello V5 Frontend Developer, Enjoying Javascript so far?')
```

#### Prompt{.text-common}

- It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.
- It accepts two arguments. <br> The syntax:

---
hideInToc: true
---

```js
result = prompt(text to show visitor, [default]) //default is an optional parameter, the initial value for the input field
```

```js {monaco-run} {autorun: false}
interview_Question = prompt('What is the full meaning of CSS?', '')
// console.log( interview_Question === 'Cascading Style Sheet' || interview_Question === 'cascading style sheet',)
```

#### Confirm{.text-common}

- The function shows a modal window with a question and two buttons: OK and Cancel
- The syntax:

```js
result = confirm(question)
```

```js {monaco-run} {autorun: false}
let altschoolStatus = confirm('Are you a v4 student ?')
// console.log(altschoolStatus)
```

---
hideInToc: true
---

# Type conversion

- It simply means the process of converting one data type to another.

1. String Coversion - Can be done using the `String` or `.toString`.
2. Numeric conversion - Can be done using the `Number`, `parseInt`, `parseFloat` or `+` unary plus sign.
3. Boolean coversion - `Boolean` constructor or `!!`

```js {monaco-run} {autorun: false, lineNumbers: true}
// console.log(typeof String(2))
// console.log(typeof Number(2).toString())
let value = '10'
// console.log(typeof Number('12'))
// console.log(typeof +value)
// console.log(typeof parseInt(value))
// console.log(typeof parseFloat('10.34'))
// console.log(Boolean(value))
// console.log(!!value)
```

There is a concept that says everything in JavaScript is truthy while `false`, `0`, `''`, `NaN`, `null`, `undefined` are falsy.

---
hideInToc: true
---

# Operators: `Math`, `Comparison`, `Logical`,` Bitwise`, `Null Coalescing`, `Optional Chaining`

### The following operators are supported in Js

<div flex="~ row" gap-4xl>

<div>

- Addition ( + )
- Subtraction ( - )
- Multiplication ( \* )

</div>

<div ml-36>

- Division ( / )
- Remainder ( % )
- Exponentiation ( \*\* )

</div>

</div>

```js {monaco-run} {autorun: false}
let sumOfTwoNumbers = 20 + 309
let differenceOfTheIntegers = 90 - 45
let mul = 2 * 97
let div = 24 / 2
let mod = 59 % 7
let expo = 2 ** 4
// console.log({ sumOfTwoNumbers, differenceOfTheIntegers, mul, div, mod, expo })
```

---
hideInToc: true
---

# Comparison

- In JavaScript, we use special symbols called <span class="text-red">operators</span> to make these comparison. All comparison operators return a boolean value.
- Here are the main comparison operators:

1. Equals to ( == ): This checks if two values are the same, it does not care about the type.<br>
   <span text-red>Note:</span> ( = ), it an assignment operator and it is different from the double ( == ).

```js {monaco-run} {autorun: false}
// console.log(5 == '5')
```

2. Strictly equal to ( === ): This checks if two values are the same AND of the same type.

```js {monaco-run} {autorun: false}
// console.log(5 === '5')
```

---
hideInToc: true
name: More on Operators
---

3. Not equal to ( != ): This checks if two values are different.

```js {monaco-run} {autorun: false}
// console.log(5 != '6')
```

4. Greater than ( > ): Checks if the left value is bigger than the right.

```js {monaco-run} {autorun: false}
// console.log(10 > 5)
```

5. Less than ( < ): Checks if the left value is smaller is smaller than the right.

```js {monaco-run} {autorun: false}
// console.log(5 < 10)
```

6. Greater than or equal to ( >= ): Checks if the left value is bigger than or the same as the right.


```js {monaco-run} {autorun: false}
// console.log(10 >= 10)
```

---
hideInToc: true
name: More Examples on Operators
---

7. Less than or equal to ( <= ): Checks if the left is smaller than or the same as the right.

```js {monaco-run} {autorun: false}
// console.log(5 <= 5)
```

- Example: Age-based content access

```js {monaco-run} {autorun: false}
let userAge = 15
let contentRating = 13
if (userAge >= contentRating) {
  // console.log('Access granted to the content')
} else {
  // console.log("sorry, you're too young for this content")
}
```

---
hideInToc: true
---

# Logical operators

1. || (OR) : it evaluates its operands from left to right and returns the first operand that is truthy. If all operands are falsy, it returns the last operand. `result = a || b`

```js {monaco-run} {autorun: false}
console.log(true || false); console.log('Boy' || 4)
```

2. && (AND): returns true if both operands are truthy. If either operand is falsy, the entire expression evaluate to false. `result = a && b;`

```js {monaco-run} {autorun: false}
console.log(true && true); console.log(false && true)
```

3. ! (NOT): it inverts the truth value of an expression, meaning returns false if expression is truthy, and true if expression is falsy. `result = !expression;`

```js {monaco-run} {autorun: false}
console.log(!true); console.log(!0)
```

---
hideInToc: true
---

# Nullish Coalescing ?? and Optional Chaining ?.

- It provide a concise way to handle <span class='text-red'>null</span> or <span class='text-red'>undefined values</span>. It returns the left-hand side operand if it's not null or undefined; otherwise, it returns the right-hand side operand

```js
// expression1 ?? expression2
```

- Expression1 is the value to be checked.
- Expression2 is the default value to be returned if expression1 is null or undefined.

```js {monaco-run} {autorun: false}
let name
let greeting = name ?? `Hello, Stranger!`
// console.log(greeting)
```

<div text-sm>

- Optional Chaining is a JavaScript feature that allows you to safely access nested object properties and call methods without throwing errors if any part of the chain is null or undefined. It uses the `?.` operator.

</div>

```js
if (user && user.address && user.address.street) {
   console.log(user.address.street);
}

console.log(user?.address?.street);
```


---
hideInToc: true
---

# [Conditional Branching: if, '?', switch]{.text-common}

- Very often when you write code, you want to perform different actions for different conditions, Welcome to conditional branching.
- <span class='text-[#5D8392]'>The If statement </span>: it evaluate a condition and if the result is true, execute a block of code.
- Syntax:

```js
if (condition) {
  //block of code to be executed if the condition is true
}
```

<br>

```js {monaco-run} {autorun: false}
let day = 'Monday' 
if (day == 'Monday'){
  //console.log('Today is Monday')
}
```

<p><span text-red>Note:</span> If the condition  is false, the code will not run</p>

---
hideInToc: true
name: Conditional Expressions
---

```js
let size = 25
if (size == 20) {
   console.log('Your size is 20')
   console.log('Thank you')
}
```

- <span class='text-[#5D8392]'> if-else </span> : the else clause may contain an optional block if code that evaluate when the condition is false.

```js
if (condition) {
  //block of code to be executed if code is true
} else {
  //block of code to be executed if condition is false
}
```

```js {monaco-run} {autorun: false}
let age = 20
let canVote
if (age < 18) {
  canVote = `User can't vote`
} else {
  canVote = `user can vote`
}
// console.log(canVote)
```

---
hideInToc: true
name: Nested If Statements
---

- <span class='text-[#5D8392]'>The else if statement </span>: use the else if statement to specify a new condition if the first condition is false. Used to test several variants of a condition.

```js
if (condition1) {
  // block of code to be executed if condition1 is true
} else if (condition2) {
  //block of code to be executed if condition1 is false and condition2 is true
} else {
  //block of code to be executed if condition1 is false and condition2 is false
}
```

- Example:

```js {monaco-run} {autorun: false}
let age = 20
let canVote
if (age < 18) {
  canVote = `User can't vote`
} else if (age == 18) {
  canVote = `user Can vote`
} else {
  canVote = `user is a senior citizen`
}
// console.log(canVote)
```

---
hideInToc: true
name: Switch Statements
---

- <span class='text-[#5D8392]'>Switch </span>: A switch statement can replace multiple if checks. it gives a cleaner way of comparing a value with multiple variant
- Syntax

```js
switch (expression) {
  case x:
    // block code
    break
  case y:
    // block code
    break
  default:
  // code block
}
```

---
hideInToc: true
name: Switch Example
---

```js {monaco-run} {autorun: false}
let day
switch (new Date().getDay()) {
  case 0:
    { day = 'Sunday'; break}
  case 1:
    { day = 'Monday'; break}
  case 2:
    { day = 'Tuesday'; break}
  case 3:
    { day = 'Wednesday'; break}
  case 4:
    { day = 'Thursday'; break}
  case 5:
    { day = 'Friday'; break}
  case 6:
    { day = 'Saturday'; break}
  default:
    { day = 'Cannot be reached'; break}
}
// console.log(`Today is ${day}`)
```

---
hideInToc: true
name: Ternary Operator
---

<span class='text-[#5D8392]'> Conditional operator (?)</span>: also called ternary operator can be used to assign values based on a condition. It is called ternary because it takes three operands.

```js
condition ? expressionIfTrue : expressionIfFalse
```

- Example

```js {monaco-run} {autorun: false}
let age = 20
let canVote = age >= 18 ? 'Yes' : 'No'
// console.log(canVote)
```

```js {monaco-run} {autorun: false}
let temperature = 25
let weather = temperature > 30 ? 'Hot' : 'Moderate'
// console.log(weather)
```

---
hideInToc: true
---

# Loops: `while`, `for`, `for..in`, `for..of`

- <span class='text-[#5D8392]'>The 'while' loop</span> : loops through a block of code as long as a specified condition is true.

```js
while (condition) {
  // code block to be executed
}
```

<div flex="~ row" gap-10>

<div flex="1">

```js {monaco-run} {autorun: false}
let i = 0
while (i < 3) {
  // console.log(i)
  i++
}
```

</div>

<div flex="1">

```js {monaco-run} {autorun: false}
let i = 0
do {
  // console.log(i)
  i++
} while (i < 3)
```

</div>
</div>

- <span class='text-[#5D8392]'>For loop</span>: The syntax is quite simple. it has 3 major part.

```js
for (initialization part; condition check; increment part){
  // loop body
}
```

<div text-sm>

- Initialization part: is executed (one time) before the execution of the code block
- Condition Check: defines the condition for executing the code block.
- Increment: is executed (every time ) after the code block has been executed

</div>

---
hideInToc: true
name: For of Loop
---

```js {monaco-run} {autorun: false}
for (let i = 0; i < 3; i++) {
  // console.log(i)
}
```

- <span class='text-[#5D8392]'>For of loop</span>: it lets you loop over iterable data strutures such as Arrays, Strings, Maps,set.
<p>Iterable is an object that has iterable properties, simple put is an object that has countable values</p>

```js {monaco-run} {autorun: false}
let language = 'JavaScript'
for (const char of language) {
  // console.log(`character is : ${char}`)
}
```

---
hideInToc: true
name: For in Loop
---

- <span class='text-[#5D8392]'>For in loop</span>: It loops through the properties of an object.

```js
for (let property in object) {
  //loop body
}
```

```js {monaco-run} {autorun: false}
const person = {
  firstName: 'John',
  lastName: 'Doe',
  userName: 'Jdoe',
  age: '19',
}
for (let property in person) {
  // console.log(`${property}: ${person[property]}`)
}
```

---
hideInToc: true
---

# Functions: Declaration, Arrow functions, Function Expressions

- Function is a block of code designed to perform a particular task.
- To declare a function, here is the syntax:

```js
function name(parameter1, parameter2, ...parameterN) {
  // code to be executed
}
```

<h4> Important things to note: </h4>

1. The <span class='text-red'> function </span> keyword goes first.
2. The name of the function follows
3. A list of parameter (if any) is enclosed in parentheses.
4. The function body, containing the code to be executed, is enclosed in curly braces {}.
5. To execute the code, function must be called by its <b>name</b> followed by parentheses.

---
hideInToc: true
title: Function Examples
---

<h5> Example: A function to greet new users </h5>

```js {monaco-run} {autorun: false}
function greetUsers(name) {
  return 'Hello, ' + name + ' welcome to JavaScript course 101'
}
let userName = 'Busola'
let greetingMessage = greetUsers(userName)
// console.log(greetingMessage)
```

<h5> Example: A function to add two number </h5>

```js {monaco-run} {autorun: false}
function addNumber(num1, num2) {
  return num1 + num2
}
// console.log(addNumber(7, 20))
```

---
layout: image
hideInToc: true
image: '../syntax.png'
---

---
hideInToc: true
title: Global and Local Variables
---

- <h3 class='text-[#5D8392]'> Outer Variable</h3>

A variable declared outside a function, becomes <span text-red>global variable</span> also known as outer variable. A function can access an outer variable, it can modify it too.

```js {monaco-run} {autorun: false}
let university = 'AltSchool Africa'
// code here CAN use university
function school() {
  let message = `You are a student of ${university}`
  console.log(message)
  // code here CAN also use university
}
```

- Note: It's important to understand that outer variables can be modified from within functions, potentially affecting their values in the outer scope. This can lead to unexpected behavior if not handled carefully.

---
hideInToc: true
title: Local Variables
---

- <h3 class='text-[#5D8392]'>Local Variable</h3>

A variable declared inside a function is only visible inside the function. Local variables are only recognized inside their function.

```js {monaco-run} {autorun: false}
// code here can NOT use university
function university() {
  let university = 'AltSchool Africa'
  // code here CAN use university
}
// code here can NOT use university
```

---
hideInToc: true
name: Function Expression
---

- <span class='text-[#5D8392]'>Function Expression</span> are indeed another way to create functions in Javascript. They allow you to define a function as part of an expression, typically by assigning it to a variable.This approach offers flexibility in how and when you define functions.

```js
let functionName = function (parameters) {
  // function body
}
```

- Example:

```js {monaco-run} {autorun: false}
const greetUsers = function (name) {
  return `Hello, ${name} welcome to JavaScript course 101`
}

let userName = 'Busola'
// console.log(greetUsers(userName))
```

---
hideInToc: true
name: Arrow Functions
---

- Arrow functions is a very simple and concise syntax for creating functions.

```js {monaco-run} {autorun: false}
const greetUsers = (name) => `Hello, ${name} welcome to JavaScript course 101`

let userName = 'Busola'
// console.log(greetUsers(userName))
```

```js {monaco-run} {autorun: false}
let sumOfTwoNumbers = (a, b) => a + b
// console.log(sumOfTwoNumbers(8, 49))
```

---
hideInToc: true
---

# Combined Function Declaration, Arrow functions, Function Expressions

````md magic-move
```js
// Function Declaration
function greetUsers(name) {
  return 'Hello, ' + name + ' welcome to JavaScript course 101'
}
let userName = 'Busola'
let greetingMessage = greetUsers(userName)
console.log(greetingMessage)
```

```js
// Function Expression
let greetUsers = function (name) {
  return 'Hello, ' + name + ' welcome to JavaScript course 101'
}
let userName = 'Busola'
let greetingMessage = greetUsers(userName)
console.log(greetingMessage)
```

```js
// Arrow Function
let greetUsers = (name) => {
  return 'Hello, ' + name + ' welcome to JavaScript course 101'
}
let userName = 'Busola'
let greetingMessage = greetUsers(userName)
console.log(greetingMessage)
```

```js
// Arrow Function one-liner
let greetUsers = (name) =>
  'Hello, ' + name + ' welcome to JavaScript course 101'
let userName = 'Busola'
let greetingMessage = greetUsers(userName)
console.log(greetingMessage)
```
````

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
name: Exercises — Variables Q1
---

# Exercises: Variables

**Q1.** Declare three variables: `fullName` (your name), `studentAge` (your age), and `isEnrolled` (`true`/`false`). Use the most appropriate keyword (`let`, `const`, or `var`) for each. Add a comment explaining your choice.

```js {monaco-run} {autorun: false}
/*
 *
 *
 *
 *
 *
 *
 *
 */
```

---
hideInToc: true
name: Exercises — Variables Q2
---

**Q2.** The code below has errors. Identify and fix all of them:

```js {monaco-run} {autorun: false}
const 1stName = 'Ada'
let if = 30
let myverylongvariablename = 'AltSchool'
```

---
hideInToc: true
name: Exercises — Data Types Q3
---

# Exercises: Data Types

**Q3.** Declare one variable for each of the 7 JavaScript data types (string, number, boolean, null, undefined, bigint, symbol). Use `typeof` on each and log the results. Which result surprises you and why?

```js {monaco-run} {autorun: false}
/*
 *
 *
 *
 *
 *
 *
 *
 */
```

---
hideInToc: true
name: Exercises — Data Types Q4
---

**Q4.** What will each line print? Write your answer as a comment first, then run the code to verify:

```js {monaco-run} {autorun: false}
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof 42n)
console.log(typeof function () {})
```

---
hideInToc: true
name: Exercises — Type Conversion Q5
---

# Exercises: Type Conversion

**Q5.** Convert the string `"25"` to a number using **three different methods**. Log each result and verify the type is `"number"`.

```js {monaco-run} {autorun: false}
const str = '25'
/*
 * method 1:
 *
 * method 2:
 *
 * method 3:
 *
 */
```

---
hideInToc: true
name: Exercises — Type Conversion Q6
---

**Q6.** Which values below are **falsy** in JavaScript? Test each using `Boolean()` and log the result:

```js {monaco-run} {autorun: false}
console.log(Boolean(0))
console.log(Boolean('0'))
console.log(Boolean(''))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))
console.log(Boolean(false))
console.log(Boolean([]))
console.log(Boolean({}))
```

---
hideInToc: true
name: Exercises — Operators Q7
---

# Exercises: Operators

**Q7.** Write a program that takes two numbers and prints the result of all 6 math operations: `+`, `-`, `*`, `/`, `%`, `**`.

```js {monaco-run} {autorun: false}
const a = 10
const b = 3
/*
 *
 *
 *
 *
 *
 *
 */
```

---
hideInToc: true
name: Exercises — Operators Q8
---

**Q8.** What is the output of each line? Write your prediction as a comment, then run the code. Explain the difference between `==` and `===`:

```js {monaco-run} {autorun: false}
console.log(5 == '5')
console.log(5 === '5')
console.log(null == undefined)
console.log(null === undefined)
```

---
hideInToc: true
name: Exercises — Operators Q9 & Q10
---

**Q9.** Use the nullish coalescing operator (`??`) to print `"Anonymous"` if `username` is `null` or `undefined`, otherwise print the username:

```js {monaco-run} {autorun: false}
let username = null
/*
 *
 *
 *
 *
 *
 *
 */
```

**Q10.** Use optional chaining to safely access `user.address.city` without throwing an error:

```js {monaco-run} {autorun: false}
const user = { name: 'Temi' }
/*
 *
 *
 *
 *
 *
 *
 */
```

---
hideInToc: true
name: Exercises — Conditionals Q11 & Q12
---

# Exercises: Conditional Branching

**Q11.** Write an `if/else if/else` chain that checks a student's score and prints a grade:
- 90–100 → `"A"` | 70–89 → `"B"` | 50–69 → `"C"` | Below 50 → `"F"`

```js {monaco-run} {autorun: false}
const score = 75
/*
 *
 *
 *
 *
 *
 *
 */
```

**Q12.** Rewrite Q11 using only the **ternary operator**:

```js {monaco-run} {autorun: false}
const score = 75
/*
 * const grade = ?
 *
 *
 *
 *
 *
 */
console.log(grade)
```

---
hideInToc: true
name: Exercises — Conditionals Q13
---

**Q13.** Write a `switch` statement that takes a day number (0–6) and prints whether it is a `"Weekday"` or `"Weekend"` (0 = Sunday, 6 = Saturday):

```js {monaco-run} {autorun: false}
const day = 3
/*
 *
 *
 *
 *
 *
 *
 */
```

---
hideInToc: true
name: Exercises — Loops Q14 & Q15
---

# Exercises: Loops

**Q14.** Use a `for` loop to print all even numbers from 1 to 20:

```js {monaco-run} {autorun: false}
/*
 *
 *
 *
 *
 *
 *
 */
```

**Q15.** Use a `while` loop to calculate the sum of numbers from 1 to 100. Print the final sum:

```js {monaco-run} {autorun: false}
/*
 *
 *
 *
 *
 *
 *
 */
```

---
hideInToc: true
name: Exercises — Loops Q16 & Q17
---

<div class ="grid grid-cols-2 gap-4">
<div>

**Q16.** Given the string `"JavaScript"`, use a `for...of` loop to print each character on its own line:

```js {monaco-run} {autorun: false}
const language = 'JavaScript'
/*
 *
 *
 *
 *
 *
 *
 */
```
</div>
<div>

**Q17.** Use a `for...in` loop to print each property and its value from the object below:

```js {monaco-run} {autorun: false}
const student = { name: 'Chidi', age: 22, school: 'AltSchool', track: 'Frontend' }
/*
 *
 *
 *
 *
 *
 *
 */
```

</div>
<div>

---
hideInToc: true
name: Exercises — Functions Q18 & Q19
---

</div>
</div>

# Exercises: Functions

**Q18.** Write a **function declaration** `calculateArea(width, height)` that returns the area of a rectangle. Call it with values of your choice:

```js {monaco-run} {autorun: false}
/*
 * function declaration
 *
 *
 *
 *
 *
 */
```

**Q19.** Rewrite Q18 as a **function expression** and as an **arrow function** (one-liner):

```js {monaco-run} {autorun: false}
/*
 * function expression
 */
const calculateAreaExpr = function (width, height) {
  /*
   *
   */
}

// arrow function (one-liner)
const calculateAreaArrow =
```

---
hideInToc: true
name: Exercises — Functions Q20 & Q21
---

**Q20.** Write a function `gradeStudent(score)` that returns the grade letter (A/B/C/F). Then call it inside a loop for these scores and print each result:

```js {monaco-run} {autorun: false}
function gradeStudent(score) {
  /*
   * reuse your logic from Q11
   *
   *
   *
   */
}

const scores = [95, 72, 55, 43, 88]
/*
 * loop and log each grade
 *
 */
```

**Q21.** Write an arrow function `isEven(number)` that returns `true` if the number is even, `false` otherwise:

```js {monaco-run} {autorun: false}
/*
 * const isEven = one-liner arrow function
 *
 *
 *
 *
 *
 */
console.log(isEven(4))  // true
console.log(isEven(7))  // false
```

---
hideInToc: true
name: Exercises — Synthesis Q22
---

# Exercises: Synthesis

**Q22.** Write a program that uses `prompt` to ask the user for their age, converts the input to a number, then prints whether they can vote (18+):

```js {monaco-run} {autorun: false}
/*
 *
 *
 *
 *
 *
 *
 *
 */
```

---
hideInToc: true
name: Exercises — Synthesis Q23
---

**Q23.** Write a function `countVowels(str)` that returns the count of vowels (`a, e, i, o, u`) in a string using a `for...of` loop:

```js {monaco-run} {autorun: false}
function countVowels(str) {
  /*
   *
   *
   *
   *
   *
   */
}
console.log(countVowels('javascript'))  // 3
console.log(countVowels('AltSchool'))   // 3
```

---
hideInToc: true
name: Exercises — Synthesis Q24
---

**Q24.** Write a function `describeType(value)` that returns a sentence like `"The value 42 is a number"` for any value passed in:

```js {monaco-run} {autorun: false}
function describeType(value) {
  /*
   *
   *
   *
   *
   *
   */
}
console.log(describeType(42))          // "The value 42 is a number"
console.log(describeType('hello'))     // "The value hello is a string"
console.log(describeType(true))        // "The value true is a boolean"
console.log(describeType(null))        // "The value null is a object"
```

---
hideInToc: true
name: LeetCode Problems — Intro
layout: center
---

# <span class="text-gradient">LeetCode-Style</span> Challenges

Problems that combine **all fundamentals** — variables, operators, loops, conditionals, and functions working together.

<div mt-4 text-sm op70>
Solve each by writing a function that accepts inputs and returns the correct output.
</div>

---
hideInToc: true
name: LeetCode Problem 1 — FizzBuzz
---

# Problem 1 — FizzBuzz <span text-green text-sm>Easy</span>

Write a function `fizzBuzz(n)` that returns a string based on these rules:
- Divisible by **both** 3 and 5 → `"FizzBuzz"`
- Divisible by **3 only** → `"Fizz"`
- Divisible by **5 only** → `"Buzz"`
- Otherwise → the number as a **string**

```js {monaco-run} {autorun: false}
function fizzBuzz(n) {
  /*
   *
   *
   *
   *
   *
   */
}
console.log(fizzBuzz(3))   // "Fizz"
console.log(fizzBuzz(5))   // "Buzz"
console.log(fizzBuzz(15))  // "FizzBuzz"
console.log(fizzBuzz(7))   // "7"
```

<div text-xs op60 mt-2>Concepts: <code>%</code> operator, conditionals, type conversion</div>

---
hideInToc: true
name: LeetCode Problem 2 — Count Occurrences
---

# Problem 2 — Count Occurrences <span text-green text-sm>Easy</span>

Write a function `countChar(str, char)` that returns how many times a specific character appears in a string. Do **not** use any built-in count methods.

```js {monaco-run} {autorun: false}
function countChar(str, char) {
  /*
   *
   *
   *
   *
   *
   */
}
console.log(countChar('javascript', 'a'))   // 2
console.log(countChar('hello world', 'l'))  // 3
console.log(countChar('banana', 'z'))       // 0
```

<div text-xs op60 mt-2>Concepts: <code>for...of</code> loop, <code>===</code> comparison, counter variable</div>

---
hideInToc: true
name: LeetCode Problem 3 — Reverse a Number
---

# Problem 3 — Reverse a Number <span text-green text-sm>Easy</span>

Write a function `reverseNumber(n)` that takes a positive integer and returns it reversed as a number. Do **not** use any built-in array methods.

```js {monaco-run} {autorun: false}
function reverseNumber(n) {
  /*
   * Hint: convert to string first, then loop through it
   *
   *
   *
   *
   */
}
console.log(reverseNumber(123))   // 321
console.log(reverseNumber(1500))  // 51
console.log(reverseNumber(7))     // 7
console.log(reverseNumber(1000))  // 1
```

<div text-xs op60 mt-2>Concepts: type conversion, <code>for</code> loop or <code>for...of</code>, string indexing, <code>Number()</code></div>

---
hideInToc: true
name: LeetCode Problem 4 — Temperature Classifier
---

# Problem 4 — Temperature Classifier <span text-yellow text-sm>Easy-Medium</span>

Write a function `classifyTemp(celsius)` that returns a weather description:
- Below 0 → `"Freezing"` | 0–10 → `"Cold"` | 11–20 → `"Cool"` | 21–30 → `"Warm"` | Above 30 → `"Hot"`

```js {monaco-run} {autorun: false}
function classifyTemp(celsius) {
  /*
   *
   *
   *
   *
   *
   */
}
console.log(classifyTemp(-5))  // "Freezing"
console.log(classifyTemp(0))   // "Cold"
console.log(classifyTemp(15))  // "Cool"
console.log(classifyTemp(25))  // "Warm"
console.log(classifyTemp(35))  // "Hot"
```

<div text-xs op60 mt-2>Concepts: <code>if/else if/else</code>, comparison operators, function return values</div>

---
hideInToc: true
name: LeetCode Problem 5 — Find the Largest Number
---

# Problem 5 — Find the Largest Number <span text-yellow text-sm>Easy-Medium</span>

Write a function `findMax(a, b, c)` that takes three numbers and returns the largest one. You **may not** use `Math.max()`.

```js {monaco-run} {autorun: false}
function findMax(a, b, c) {
  /*
   *
   *
   *
   *
   *
   */
}
console.log(findMax(3, 7, 2))     // 7
console.log(findMax(10, 10, 5))   // 10
console.log(findMax(-1, -5, -3))  // -1
```

<div text-xs op60 mt-2>Concepts: comparison operators, conditionals, variables</div>
