---
layout: center
transition: slide-up
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
- Variables are containers for storing data.
- You can declare variables using var, let, or const. 
<h4 class='mt-5 text-[#5D8392]'>Variables Naming convention </h4>
<p class='mt-5'> 1. The first character must not be a digit. <br> </p> 
<p class='mt-5'> 2. When the name contains multiple words, use <span text-red>Camel Case. </span> <br> </p>
<p class='mt-5'> 3. Reserved words ( like JavaScript keywords ) cannot be used as names. <br></p>
<p class='mt-5'> 4. Stay away from abbreviations or short names like a, b, and c, unless you know what you’re doing.</p>
<p class='mt-5'> 5.  Make names maximally descriptive and concise.</p>
<p class='mt-5'> 6. Seperate multiple worlds with underscore ( _ )</p>

---
hideInToc: true
---

<h3  class='mt-5 text-[#5D8392]'> Variable ( const ) </h3>
- Variables declared with <span class='text-red'> const </span> do not change and cannot be reassigned.
```js {monaco-run}
const tutor = "Mr Setemi"
console.log(tutor)
// the data Mr setemi is now assigned to variable tutor
tutor = "Mr Ojo" //can not be reassigned
// Therefore values that can change later on should not be declare with const
```
<h3 class='mt-5 text-[#5D8392]'>Variable ( let ) and ( var ) </h3>
- Variables declared with  <span class="text-red">'let'</span> and <span class="text-red">'var'</span> can change and be reassigned. 
```js {monaco-run}
let tech_School = "Altschool"
tech_School = "Altschool Africa"  // Tech school is now reassigned to Altschool Africa
console.log(tech_School)
var hobby = 'reading'
hobby = 'coding'
console.log(hobby)
```

---
hideInToc: true
---

- Examples
```js
// The first character must not be a digit. 
let 1first;    Wrong
let firstName; CORRECT
Const test123; CORRECT
```

```js
// When the name contains multiple words, camelCase is used
let myVeryLongName; CORRECT
let MYVERYLONGNAME; NOT ADVISABLE
let myverylongname; WRONG
```

```js
// Reserved words (like JavaScript keywords) cannot be used as names 
let if; WRONG
let boolean; WRONG
let else; WRONG
```

```js
// Stay away from abbreviations or short names like a, b, and c, unless you know what you’re doing.
//  Make names maximally descriptive and concise.
let currentUser = 'John Doe' ; 
let data = 'John Doe'
let x = 'John Doe'
// Which is descriptive? currentUser
```
        
---
hideInToc: true
---

# Data types
- A value in javascript is always of a certain type.
```js
//  Number Datatype
- Numbers can be written with or without decimals, that is represent both integer and floating point numbers.
let weight = 7.5
let length = 20

//String DataType
- A string in JavaScript must be surrounded by quotes, can be double quote, single quotes or backticks.
let country = 'Nigeria'
let subject = "Software Engineering"
const greetings = `Hello Altschooler's` //backticks allow single and double quotes inside a string

//Note
//Double and Single quotes are simple quote. There is no difference between the two.
//Avoid doing this!
let snacks = "meatpie' // It is very wrong, if you want to use double quote then stick to it.

//Boolean Datatype
- Boolean type has only two values: True and False
let isUserLoggedIn = true;
let isLagosBig = false 

```

---
hideInToc: true
---

```js
//Undefined Datatype
- Undefined indicate that a variable has not been assigned a value, or not declared at all.
let age; // the variable age was declared but not assigned a value
let age = undefined //it also possible to explicitly assign undefined to a variable

//BigInt Datatype 
- BigINt are used to store big integer values that too big to be represented by normal Javascript Number
const bigInt = 123456789012345678901234567890n; // the "n" at the end means it's a BigInt

//Object
- Object are used to store collections of data.
const car = {
    type: 'Fiat',
    model: '500',
    color: 'white'
}

//Symbol
-It used to create a unique identifier for objects
const mySymbol = Symbol('unique identifier');

const person = {
  name: 'Alice',
  [mySymbol]: 'secret information'
};

```
---
hideInToc: true
---

```js
//Null
- It a special value which represents "nothing", "empty" or "value unknown"
let age = null;
```
Example: To know the type of a value in JS use <span class="text-red"> typeof </span>
```js {monaco-run}
let name = 'John Dev';
let age = 21;
let isMarried = false;
let height = null;
let weight = undefined
const mySymbol = Symbol('unique identifier');
const person = {
  name: 'Alice',
  [mySymbol]: 'secret information'
};
console.log(typeof name, typeof age, typeof isMarried, typeof height, typeof weight, typeof person, typeof mySymbol)
```

- Note: the typeof null returns object

---
hideInToc: true
---

# Interaction: `alert`, `prompt`, `confirm`
<h4  class='text-[#5D8392]'> Alert </h4>

- The alert() method displays an alert box with a mesage and an OK button
```js {monaco-run} {autorun:false}
alert('Hello V4 Frontend Developer, Enjoying Javascript so far?')
```
<h4  class='text-[#5D8392]'> Prompt </h4>

- It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.
- It accepts two arguments. <br> The syntax:
```js
result = prompt(text to show visitor, [default]) 
//default is an optional parameter, the initial value for the input field
```
```js {monaco-run} {autorun:false}
interview_Question = prompt('What is the full meaning of CSS?', '')
```

---
hideInToc: true
---
<h4  class='text-[#5D8392]'> Confirm </h4>

- The function shows a modal window with a question and two buttons: OK and Cancel
- The syntax:
```js
result = confirm(question);
```

```js {monaco-run} {autorun:false}
let altschoolStatus = confirm("Are you a v4 student ?")
```
---
hideInToc: true
---
# Type Conversions
#### String conversion


---
hideInToc: true
---
# Operators: Math, Comparison, Logical, Bitwise, Null Coalescing, Optional Chaining

### The following operators are suported in Js 
- Additon  ( + )
- Subtraction ( - )
- Multiplication  ( * )
- Division ( / )
- Remainder ( % )
- Exponential ( ** ) 

```js {monaco-run}

let sumOfTwoNumbers = 20 + 309
let differenceOfTheIntegers = 90 - 45
let x = 2 * 97
let y = 24 / 2
let t =  59 % 7
let a = 2 ** 4
console.log(sumOfTwoNumbers, differenceOfTheIntegers, x, y, a)

```

````
---
hideInToc: true
---
<h3  class='text-[#5D8392]'> Comparison</h3>

- In JavaScript, we use special symbols called <span class="text-red">operators</span> to make these comparison. All comparison operators return a boolean value.
- Here are the main comparison operators:
1. Equals to ( == ):  This checks if two values are the same, it does not care about the type.<br>
<span text-red>Note:</span> ( = ), it an assignment operator and it is different from the double ( == ).
```js {monaco-run}
console.log(5 == '5')
```
2. Strictly equal to ( === ): This checks if two values are the same AND of the same type.
```js {monaco-run}
console.log( 5 === "5")
```

---
hideInToc: true
---

3. Not equal to ( != ): This checks if two values are different.
```js {monaco-run}
console.log( 5 != '6')
```
4. Greater than ( > ): Checks if the left value is bigger than the right.
```js {monaco-run}
console.log(10 > 5)
```
5. Less than ( < ): Checks if the left value is smaller is smaller than the right.
```js {monaco-run}
console.log( 5 < 10)
```
6. Greater than or equal to ( >= ): Checks if the left value is bigger than or the same as the right.
```js  {monaco-run}
console.log(10 >= 10)
```

---
hideInToc: true
---

7. Less than or equal to ( <= ): Checks if the left is smaller than or the same as the right. 
```js {monaco-run}
console.log(5 <= 5 )
```

- Example: Age-based content access
```js {monaco-run}
let userAge = 15
let contentRating = 13

if (userAge >= contentRating) {
    console.log('Access granted to the content');
} else {
    console.log("sorry, you're too young for this content")
}
```



---
hideInToc: true
---

# Conditional Branching: if, '?', switch
- Very often when you write code, you want to perform different actions for different conditions, Welcome to conditional branching.
- <span class='text-[#5D8392]'>The If statement </span>:  it evaluate a condition and if the result is true, execute a block of code.
- Syntax:
```js
if (condition) {
    //block of code to be executed if the condition is true
}
```
<br>

```js {monaco-run} {autorun:false}
let day = 'Monday' 
if (day == 'Monday'){
    console.log('Today is Monday')
}
```
<p><span text-red>Note:</span> If the condition  is false, the code will not run</p>

---
hideInToc: true
---

- Example
```js
let size = 25
if (size == 20){
    alert('Your size is 20')
    alert('Thank you')
}
```

- <span class='text-[#5D8392]'> if-else </span> : the else clause may contain an optional block if code that evaluate when the condition is false

```js
if (condition) {
    //block of code to be executed if code is true
} else {
    //block of code to be executed if condition is false
}
```
```js {monaco-run} {autorun:false}
let age = 20
if (age < 18) {
    canVote = `User can't vote`;
} else {
    canVote = `user can vote`
}
console.log(canVote)
```

---
hideInToc: true
---

- <span class='text-[#5D8392]'>The else if statement </span>: use the else if statement to specify a new condition if the first condition is false. Used to test several variants of a condition.
- Syntax:
```js 
if (condition1) {
    // block of code to be executed if condition1 is true
}else if (condition2) {
    //block of code to be executed if condition1 is false and condition2 is true
} else {
    //block of code to be executed if condition1 is false and condition2 is false
} 
```

- Example:
```js {monaco-run} {autorun:false}
let age = 20
if (age < 18) {
    canVote = `User can't vote`;
}else if ( age == 18 ) {
    canVote = `user Can vote`;
} else {
    canVote = `user is a senior citizen`
}
console.log(canVote)
```

---
hideInToc: true
---

- <span class='text-[#5D8392]'>Switch </span>: A switch statement can replace multiple if checks. it gives a cleaner way of comparing a value with multiple variant
- Syntax

```js
switch (expression)
 case x:
 // block code
 break;
 case y:
 // block code
 break;
 default:
 // code block
 }
```

---
hideInToc: true
---
- Example:

```js {monaco-run} 
let day;
switch (new Date().getDay()){
case 0:
day = "sunday"
break;
case 1:
day = 'Monday'
case 2:
day = 'Tuesday'
case 3:
day = 'Wednesday'
case 4:
day = 'Thursday'
case 5:
day = 'Friday'
case 6:
day = 'Saturday'
}
console.log(`Today is ${day}`)
```
---
hideInToc: true
---

<span class='text-[#5D8392]'> Conditional operator (?)</span>: also called ternary operator can be used to assign values based on a condition. It is called ternary because it takes three operands.

- Syntax
```js
condition ? expressionIfTrue : expressionIfFalse
```

- Example
```js {monaco-run} {autorun:false}
let age = 20;
let canVote = age >=18 ? 'Yes' : 'No'
console.log(canVote)
```

```js {monaco-run} {autorun:false}
let temperature = 25;
let weather = temperature  > 30 ? 'Hot' : 'Moderate';
console.log(weather)
```

---
hideInToc: true
---

# Loops: while, for, for..in, for..of
- <span class='text-[#5D8392]'>The 'while' loop</span> : loops through a block of code as long as a specified condition is true.

```js
while(condition){
    //code block to be executed
} 
```
```js {monaco-run} {autorun:false}
let i = 0;
while ( i < 3 ){
    console.log(i);
    i++;
}
```

- <span class='text-[#5D8392]'>For loop</span>: The syntax is quite simple. it has 3 major part.

```js
for (initialization part, condition check, increment part){
    // loop body
}
```

- Initialization part: is executed (one time) before the excecution of the code block
- Condition Check: defines the condition for executing the code block.
- Increment: is executed (every time )  after the code block has been executed

---
hideInToc: true
---

```js {monaco-run} {autorun:false}
for (let i = 0; i < 3; i++) {
    console.log(i)
}
```

- <span class='text-[#5D8392]'>For of loop</span>: it lets you loop over iterable data strutures such as Arrays, Strings, Maps,set.
<p>Iterable is an object that has iterable properties, simple put is an object that has countable values</p>

```js {monaco-run} {autorun:false}
let language = 'JavaScript' 
for (const char of language) {
    console.log(`character is : ${char}`)
}
```
---
hideInToc: true
---

- <span class='text-[#5D8392]'>For in loop</span>: It loops through the properties of an array.
```js
for (let property in object){
    //loop body
}
```
```js {monaco-run} {autorun:false}
const person= {
    firstName: 'John',
    lastName: 'Doe',
    userName: 'Jdoe',
    age: '19'
};
for(let property in person){
    console.log(`${property}: ${person[property]}`)
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
    //code to be executed
}
```
<h4> Important things to note: </h4>

1. The <span class='text-red'> function </span> keyword goes first.
2. The name of the function follows
3. A list of parameter (if any) is enclosed in parentheses.
4. The function body, containing the code to be executed, is enclosed in curly braces {}.
5. To execute the code, function must be called by its name followed by parentheses.

---
hideInToc: true
---

<h5> Example: A function to greet new users </h5>

```js {monaco-run} {autorun:false}
function greetUsers (name) {
    return 'Hello, ' + name + ' welcome to JavaScript course 101';
}
let userName = 'Busola'
let greetingMessage = greetUsers(userName);
console.log(greetingMessage)
```
<h5> Example: A function to add two number </h5>

```js {monaco-run} {autorun:false}
function addNumber (num1, num2){
    return num1 + num2
}
console.log(addNumber(7, 20))
```
---
hideInToc: true
---
- <h3 class='text-[#5D8392]'> Outer Variable</h3>A variable declared outside a function, becomes <span text-red>global variable</span> also known as outer variable. A function can access an outer variable, it can modify it too.
- Example
```js {monaco-run}
let university = 'AltSchool Africa';
// code here CAN use university
function school() {
let message = `You are a student of ${university}`;
alert(message)

//code here CAN also use university
}

```
- Note: It's important to understand that outer variables can be modified from within functions, potentially affecting their values in the outer scope. This can lead to unexpected behavior if not handled carefully.

---
hideInToc: true
---
- <h3 class='text-[#5D8392]'>Local Variable</h3>
A variable declared inside a function is only visible inside the function. Local variables are only recognized inside their function.
- Example
```js {monaco-run}
// code here can NOT use university
function university () {
let university = 'AltSchool Africa'
//code here CAN use university
}
// code here can NOT use university
```
---
hideInToc: true
---

- <span class='text-[#5D8392]'>Function Expression</span> are indeed another way to create functions in Javascript. They allow you to define a function as part of an expression, typically by assigning it to a variable.This approach offers flexibility in how and when you define functions.

- Basic syntax:
```js
let functionName = function (parameters){
    //function body
}
```

- Example: 

```js {monaco-run} {autorun:false}
const greetUsers = function (name) {
  return `Hello, ${name} welcome to JavaScript course 101`;
};

let userName = 'Busola';
console.log( greetUsers(userName));
```

---
hideInToc: true
---

- Arror functions is a very simple and concise syntax for creating functions.
- Example: 
```js {monaco-run} {autorun:false}
const greetUsers = (name) => `Hello, ${name} welcome to JavaScript course 101`;

let userName = 'Busola';
console.log(greetUsers(userName))
```
- Example:
```js  {monaco-run} {autorun:false}
let sumOfTwoNumbers = (a, b) => a + b;

console.log(sumOfTwoNumbers(8 , 49))
```


