---
layout: center
transition: slide-up
hideInToc: true
---

# Data Types

<div mt-2 />

- Methods of Primitives
- Numbers
- BigInt
- Strings
- Arrays and Array Methods
- Iterables
- Map and Set
- WeakMap and WeakSet
- Object.keys, values, entries, groupBy
- Destructuring Assignment
- Date and Time | Intro to Intl API | Temporal
- JSON methods, toJSON

---
hideInToc: true
---

# Methods of Primitives

<div mt-2 />

#### What Exactly is a Primitive in JavaScript 🧱📚🎯?

<p> A primitive in JavaScript is a simple, immutable data type that represents a single value. Unlike objects, which are collections of properties and methods, primitives are more basic and directly represent their contents.</p>

<div flex="~ row" gap-4xl>
<div>

- Number
- String
</div>
<div ml-30>

- Boolean
- Symbol
</div>
<div ml-30>

- Undefined.
- Bigint
</div>
<div ml-30>

- Null
</div>
</div>

Primitive in Js do not have properties. They are immutable values, and attempting to add a property to them will result in an error.
Here's a breakdown of what happens:

1. let str = `"Hello";` creates a string primitive str with the value "Hello".
2. str.test = `5;` tries to add a property test with the value 5 to the str primitive.
3. JavaScript detects that str is a primitive and does not allow properties to be added to it.
4. An error is thrown, indicating that str is not an object.

---
hideInToc: true
---

- To add properties to a value, you need to create an object. For example:

```js {monaco-run}
let strObj = { value: 'Hello' }
strObj.test = 5
console.log(strObj.test) // Output: 5
```

In this case, strObj is an object, and you can add properties to it using dot notation or bracket notation.

### what is Immutable values in programming?

- Are values that cannot be changed after they are created.
- Once a value is assigned to an immutable variable, it remains fixed throughout its lifetime. This means that any attempts to modify the value will result in a new value being created, rather than altering the existing one.

```js
let greeting = 'Hello'
greeting = greeting + ' World'
console.log(greeting) // Output: "Hello World"
```

Strings are sequences of characters that are considered immutable. If you want to modify a string, you need to create a new string.

---
hideInToc: true
---

# Numbers

### Types

<ul>
<li>Regular numbers (64-bit IEEE-754 "double precision")</li>
<li>BigInt (for integers of arbitrary length)</li>
</ul>
<div mt-3 />

<div flex="~ row" gap-xl between>
<div>

#### Writing Numbers

```js
// Large numbers
let billion = 1000000000
let billion = 1_000_000_000 // With separator
let billion = 1e9 // Scientific notation

// Small numbers
let microsec = 0.000001
let microsec = 1e-6 // Scientific notation
```

</div>
<div ml-10>

#### Number Systems

```js {monaco-run} {autorun:false}
// Hexadecimal (0x)
alert(0xff) // 255

// Binary (0b)
let num1 = 0b11111111 // 255

// Octal (0o)
let num2 = 0o377 // 255

// Converting to different bases
let num3 = 255
alert(num3.toString(16)) // "ff"
alert(num3.toString(2)) // "11111111"
```

</div>
</div>

---
hideInToc: true
---

<div class="flex justify-between"  >
<div>

- Rounding

```js {monco-run}
Math.floor(3.6) // 3  - rounds down
Math.ceil(3.1) // 4  - rounds up
Math.round(3.5) // 4  - rounds to nearest
Math.trunc(3.6) // 3  - removes decimal

// To fixed decimal places
let num = 1.23456
num.toFixed(2) // "1.23"
```

</div>
<div>

- Precision Issues

```js {monco-run}
0.1 + 0.2 === 0.3 // false
0.1 + 0.2 // 0.30000000000000004

// Solutions
let sum = 0.1 + 0.2
;+sum.toFixed(2) // 0.3
```

</div>
</div>

---
hideInToc: true
---

# String

<div mt-2 />
<h3> 1. String Creation & Quotes</h3>
<div class="flex justify-evenly" gap-4xl>
<div>

- Single/Double Quotes

```js
let name = 'John'
let name = 'John'
```

- Interchangeable <br>
- Cannot span multiple lines <br>
- Need escaping for same quotes inside: 'I\'m here'
</div>
<div>

- Backticks:

```js
let name = `John`
let greeting = `Hello, ${name}!`
let multiline = `
  Line 1
  Line 2
`
```

- Allows expressions: ${...} <br>
- Supports multiple lines <br>
- No need to escape quotes <br>
</div>
</div>

<h3>2. Character Access & Special Characters</h3>
<div class="flex justify-evenly " gap-4xl>
<div>

- Accessing Characters:

```js
let str = 'Hello'
str[0] // "H"
str.at(-1) // "o" (last character)
```

</div>
<div>

- Special Characters:

```js
'\n' // New line
'\t' // Tab
'\\' // Backslash
"\'" // Single quote
"\"" // Double quote
```

</div>
</div>

---
hideInToc: true
---

<h3>3. String Methods & Operations</h3>
<div class='flex justify-evenly'>
<div>

- Searching:

```js
let str = 'Hello World'
str.indexOf('World') // 6
str.includes('Hello') // true
str.startsWith('He') // true
str.endsWith('ld') // true
```

</div>
<div>

- Extracting:

```js
let str = 'Hello World'
str.slice(0, 5) // "Hello"
str.substring(6, 11) // "World"
str.substr(6, 5) // "World" (deprecated)
```

</div>
<div>

- Case Manipulation:

```js
let str = 'Hello'
str.toUpperCase() // "HELLO"
str.toLowerCase() // "hello"
```

</div>
</div>
<h3>4. Important Characteristics</h3>

- Immutability:

```js
let str = 'Hello'
str[0] = 'h' // Doesn't work
str = 'hello' // This works (creates new string)
```

- Length:

```js
let str = 'Hello'
str.length // 5
```

---
hideInToc: true
---

<h3> 5. String Comparison </h3>

Basic Comparison:

```js
'a' > 'Z' // true (lowercase > uppercase)
'2' > '12' // true (string comparison, not numeric)
```

<h3> 6. Common Use Cases </h3>
```js
// Trimming whitespace
"  hello  ".trim()  // "hello"
// Checking content
let email = "test@example.com";
email.includes("@")  // true
// Creating substrings
let filename = "document.pdf";
filename.slice(-3)  // "pdf"
// Template strings
let user = "John";
let age = 30;
`${user} is ${age} years old`  // "John is 30 years old"
```

---
hideInToc: true
---

# Arrays

<div></div>
<p>It is important to know data structure, data structure are things used to store and manipulate data in JavaScript. We have Array, Set, Map, and object. </p>
<p> <em><strong>ARRAY-></strong></em> are used to store ordered collections of items. Array can store any value like number, object, string. Array is not a primitive type.</p>

- Array Declaration

```js
let arr = new Array() // using class method of creating an array
let arr = [] // a shorter syntax and it is the preferred method
```

<p>Let declare an array of fruits and find the length of the array</p>
```js {monaco-run}
let fruits = ["mango", "orange", "apple", "grape"] // An array of fruits
console.log(fruits)
console.log(fruits.length) // The total count of the elements in the array is its length
```

---
hideInToc: true
---

<ul><li>How do we get values from an array and how do we update an item in an array?🤔</li></ul>
```js {monaco-run}
let fruits = ["mango", "orange", "apple", "grape"] 
console.log(fruits[3]) //syntax: console.log(name of the array[position])
console.log(fruits[0] ); // Mango
console.log(fruits[1] ); // Orange
console.log(fruits[2] ); // Apple
fruits [1] = "plum" //this will replace the element
console.log(fruits) //["mango", "plum", "apple", "grape"]
fruits [4] = "lemon" //this add a new element to the item.
console.log(fruits)
```
<p><span class='text-red'>Note:</span> Array elements are numbered, starting with zero. The total count of the elements in the array is its length.</p>

---
hideInToc: true
---

# Array Methods

<div flex="~ row" justify-between>
<div>
<ul><li><span class='text-red'><strong>push</strong></span> adds an element to the end.</li></ul>
```js {monaco-run}
let names = ['faith', 'ridwan', 'wariz']
console.log(names)
names.push('chidinma')
console.log(names)
```
</div>

<div>
<ul><li> <span class='text-red'><strong> pop</strong></span> takes an element from the end.</li></ul>
```js {monaco-run}
let names = ['faith', 'ridwan', 'wariz', 'chidinma']
console.log(names)
names.pop()
console.log(names)
```
</div>
</div>

<div flex="~ row" justify-between>
<div>
<ul><li> <span class='text-red'><strong>shift</strong></span> extracts the first element of the array and returns it</li></ul>
```js {monaco-run}
let names = ['faith', 'ridwan', 'wariz']
console.log(names)
names.shift('chidinma')
console.log(names)
```
</div>

<div ml-10>
<ul><li> <span class='text-red'><strong> unshift</strong></span> add the element to the beginning of the array</li></ul>
```js {monaco-run}
let names = ['faith', 'ridwan', 'wariz', 'chidinma']
console.log(names)
names.unshift('rola')
console.log(names)
```
</div>
</div>

---
hideInToc: true
---

# Array Methods

<div flex="~ row" justify-between>
<div>
<ul><li> <span class='text-red'><strong>reverse:</strong></span> reverses the array in-place, then returns it.</li></ul>
```js {monaco-run}
let names = ['faith', 'ridwan', 'wariz']
console.log(names)
names.reverse()
console.log(names)
```
</div>
<div>
<ul><li><span class='text-red'><strong>sort:</strong></span> sort the values alphabetically.</li></ul>
```js {monaco-run}
let names = ['ridwan', 'wariz', 'faith']
console.log(names)
console.log(names.sort())
```
</div>
</div>
<div>

<div ml-10>
<ul><li> <span class='text-red'><strong> slice:</strong></span> creates a new array, copies elements from index start till end (not inclusive) into it.</li></ul>
```js {monaco-run}
let names = ['faith', 'ridwan', 'wariz', 'chidinma']
console.log(names)
console.log(names.slice()) //get a copyy of the array
console.log(names.slice(0,2))
```
</div>
</div>

---
hideInToc: true
---

# Map and Set

<div></div>
Map is a collection of keyed data items, just like an Object. But the main difference is that <span class='text-red'><strong><em>Map allows keys of any type.</em></strong></span><br><br>

### Methods and properties are:<br>

<v-clicks>
<ul>
<li>new Map() - creates the map.</li>
<li>map.set(key, value) – stores the value by the key.</li>
<li>map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.</li>
<li>map.has(key) – returns true if the key exists, false otherwise.</li>
<li>map.delete(key) – removes the element (the key/value pair) by the key.</li>
<li>map.clear() – removes everything from the map.</li>
<li>map.size – returns the current element count.</li>
</ul>
</v-clicks>

---
hideInToc: true
---

For example:

```js {monaco-run}
//create a new Map
const userInfo = new Map();
console.log(userInfo)
userInfo.set('name', 'snickers')
userInfo.set('age', 30)
userInfo.set('email', 'snick@gmail.com')
console.log(userInfo);
console.log(userInfo.get('name')
console.log(userInfo.has('name'));
userInfo.delete('age');
console.log(userInfo)
console.log(userInfo.size) //returns the current element count
userInfo.clear() //removes everything from the map
console.log(userInfo)

```

---
hideInToc: true
---

### Map can also use objects as keys. How tho 🤔?

```js {monaco-run} {autorun:false}
let john = { name: 'John' }

// for every user, let's store their visits count
let visitsCountMap = new Map()

// john is the key for the map
visitsCountMap.set(john, 123)

alert(visitsCountMap.get(john)) // 123
```

<p><span class='text-red'>Note:</span> Using objects as keys is one of the most notable and important Map features. The same does not count for Object. String as a key in Object is fine, but we can't use another Object as a key in Object.</p>

```js {monaco-run} {autorun:false}
let john = { name: 'John' }
let ben = { name: 'Ben' }

let visitsCountObj = {} // try to use an object

visitsCountObj[ben] = 234 // try to use ben object as the key
visitsCountObj[john] = 123 // try to use john object as the key, ben object will get replaced

// That's what got written!
alert(visitsCountObj['[object Object]']) // 123
```

---
hideInToc: true
---

# Date and time

<div mt-2 />

JavaScript `Date` Objects let us work with dates. It stores the date, time and provides methods for date/time management.

### Creation

To create a new Date object call `new Date()` with one of the following arguments:

- new Date() : Without arguments – create a Date object for the current date and time:

```js {monaco-run} {autorun:false}
let now = new Date()
alert(now)
```

- new Date(date string): Create a Date object with the time equal to number of milliseconds (1/1000 of a second) passed after the Jan 1st of 1970 UTC+0.
- new Date(year,month)
- new Date(year,month,day)
- new Date(year,month,day,hours)

- new Date(year,month,day,hours,minutes)
- new Date(year,month,day,hours,minutes,seconds)
- new Date(year,month,day,hours,minutes,seconds,ms)
- new Date(milliseconds)
