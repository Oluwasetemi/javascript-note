---
layout: center
transition: slide-up
hideInToc: true
---
# Data Types

<TocIcon />

<div mt-2 />

- <a @click="$slidev.nav.go($nav.currentPage+1)">Methods of Primitives</a>
- <a @click="$slidev.nav.go($nav.currentPage+3)">Numbers and BigInt</a>
- <a @click="$slidev.nav.go($nav.currentPage+5)">Strings</a>
- <a @click="$slidev.nav.go($nav.currentPage+8)">Arrays and Array Methods</a>
- <a @click="$slidev.nav.go($nav.currentPage+22)">Iterables</a>
- <a @click="$slidev.nav.go($nav.currentPage+28)">Map and Set</a>
- <a @click="$slidev.nav.go($nav.currentPage+35)">WeakMap and WeakSet</a>
- <a @click="$slidev.nav.go($nav.currentPage+38)">Object.keys, values, entries, groupBy</a>
- <a @click="$slidev.nav.go($nav.currentPage+40)">Destructuring Assignment</a>
- <a @click="$slidev.nav.go($nav.currentPage+43)">Date and Time | Intro to Intl API  | Temporal</a>
- <a @click="$slidev.nav.go($nav.currentPage+48)">JSON methods, toJSON</a>

---
hideInToc: true
---

# Methods of Primitives

<div mt-2 />

#### What Exactly is a Primitive in JavaScript 🧱📚🎯?

<p> A primitive in JavaScript is a simple, immutable data type that represents a single value. Unlike objects, which are collections of properties and methods, primitives are more basic and directly represent their contents.</p>

<div grid="~ cols-2">
<div>

- Number
- String

</div>
<div ml-30>

- Boolean
- Symbol

</div>
<div>

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
// console.log(strObj.test) // Output: 5
```

In this case, strObj is an object, and you can add properties to it using dot notation or bracket notation.

### what is Immutable values in programming?

- Are values that cannot be changed after they are created.
- Once a value is assigned to an immutable variable, it remains fixed throughout its lifetime. This means that any attempts to modify the value will result in a new value being created, rather than altering the existing one.

```js
let greeting = 'Hello'
greeting = greeting + ' World'
// console.log(greeting) // Output: "Hello World"
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

<div class="grid grid-cols-2" gap-sm>
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
console.log(0xff) // 255

// Binary (0b)
let num1 = 0b11111111 // 255

// Octal (0o)
let num2 = 0o377 // 255

// Converting to different bases
let num3 = 255
console.log(num3.toString(16)) // "ff"
console.log(num3.toString(2)) // "11111111"
```

</div>
</div>

---
hideInToc: true
title: Rounding Up
---

<div class="grid grid-cols-2"  >
<div>

- Rounding

```js {monaco-run}
Math.floor(3.6) // 3  - rounds down
Math.ceil(3.1) // 4  - rounds up
Math.round(3.5) // 4  - rounds to nearest
Math.trunc(3.6) // 3  - removes decimal

// To fixed decimal places
let num = 1.23456
console.log(num.toFixed(2)) // "1.23"
```

</div>
<div>

- Precision Issues

```js {monaco-run}
0.1 + 0.2 === 0.3 // false
0.1 + 0.2 // 0.30000000000000004

// Solutions
let sum = 0.1 + 0.2;
console.log(+sum.toFixed(2)) // 0.3
// Proposed syntax (not yet available)
// Math.sumPrecise([0.1, 0.2, 0.3]); // Would return exactly 0.6
```

</div>
</div>

---
hideInToc: true
---

# String

<div mt-2 />
<h3> 1. String Creation & Quotes</h3>
<div class="grid grid-cols-2" gap-4xl>
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
<div class="grid grid-cols-2 " gap-4xl>
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
title: String Methods & Operations
---

<h3>3. String Methods & Operations</h3>
<div class='grid grid-cols-3'>
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

<div class='grid grid-cols-2'>
<div>

- Immutability:

```js
let str = 'Hello'
str[0] = 'h' // Doesn't work
str = 'hello' // This works (creates new string)
```

</div>
<div>

- Length:

```js
let str = 'Hello'
str.length // 5
```

</div>
</div>

---
hideInToc: true
title: String Comparison
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
title: Getting and Setting of items in an Arrays
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

<div grid="~ cols-2">
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

<div grid="~ cols-2">
<div>
<ul><li> <span class='text-red'><strong>shift</strong></span> extracts the first element of the array and returns it</li></ul>
```js {monaco-run}
let names = ['faith', 'ridwan', 'wariz']
console.log(names)
let shifted = names.shift('chidinma')
console.log(names, shifted)
```
</div>

<div ml-10>
<ul><li> <span class='text-red'><strong> unshift</strong></span> add the element to the beginning of the array and return the length of the new array</li></ul>
```js {monaco-run}
let names = ['faith', 'ridwan', 'wariz', 'chidinma']
console.log(names)
let newLength = names.unshift('rola')
console.log(names, newLength)
```
</div>
</div>

---
hideInToc: true
---

# Array Methods

<div grid="~ cols-2">
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
</div>

<div>

<ul><li> <span class='text-red'><strong> slice:</strong></span> creates a new array, copies elements from index start till end (not inclusive) into it.</li></ul>

```js {monaco-run}
let names = ['faith', 'ridwan', 'wariz', 'chidinma']
console.log(names)
console.log(names.slice()) //get a copyy of the array
console.log(names.slice(0, 2))
```

</div>

---
hideInToc: true
---

# Array Static Methods

<div mt-2 />

JavaScript provides several static methods on the Array constructor for creating and working with arrays.

<div grid="~ cols-2" gap-3>
<div>

* [Array.from()]{.text-red.font-bold} - Creates array from array-like or iterable objects. `Array.fromAsync`?

```js {monaco-run}
const chars = Array.from('hello')
const numbers = Array.from(new Set([1, 2, 2, 3]))
const squares = Array.from({length: 5}, (_, i) => i * i)

console.log(chars, numbers, squares)
```

</div>
<div>

* [Array.isArray()]{.text-red.font-bold} - Checks if a value is an array

```js {monaco-run}{autorun:false}
console.log(Array.isArray([1, 2, 3]), Array.isArray('hello'), Array.isArray({})) // true

function processArray(data) {
  if (Array.isArray(data)) {
    return data.map(x => x * 2)
  }
  return 'Not an array'
}

console.log(processArray([1, 2, 3]))
```

</div>
</div>

* [Array.of()]{.text-red.font-bold} - Creates array from arguments

```js {monaco-run}
const arr1 = Array.of(1, 2, 3, 4);const arr2 = Array.of(7);const arr3 = Array(7);
console.log(arr1, arr2, arr3);
```

---
hideInToc: true
---

# Array Search Methods

<div grid="~ cols-2" gap-3>
<div>

* [indexOf()]{.text-red.font-bold} - Returns first index of element

```js {monaco-run}
const fruits = ['apple', 'banana', 'apple', 'orange']
console.log(fruits.indexOf('apple', 1)) // 2
console.log(fruits.indexOf('apple')) // 0
console.log(fruits.indexOf('grape')) // -1
```

* [lastIndexOf()]{.text-red.font-bold} - Returns last index of element

```js {monaco-run}
const fruits = ['apple', 'banana', 'apple', 'orange']
console.log(fruits.lastIndexOf('apple')) // 2
console.log(fruits.lastIndexOf('grape')) // -1
```

</div>
<div>

* [includes()]{.text-red.font-bold} - Checks if array contains element

```js {monaco-run}
const fruits = ['apple', 'banana', 'orange']
console.log(fruits.includes('banana')) // true
console.log(fruits.includes('grape')) // false
console.log(fruits.includes('apple', 1)) // false

```

* [at()]{.text-red.font-bold} - Returns element at index (supports negative)

```js {monaco-run}
const fruits = ['apple', 'banana', 'orange']
console.log(fruits.at(0)) // 'apple'
console.log(fruits.at(-1)) // 'orange'
console.log(fruits.at(-2)) // 'banana'
```

</div>
</div>

---
hideInToc: true
---

# Array Find Methods

<div grid="~ cols-2" gap-3>
<div>

* [find()]{.text-red.font-bold} - Returns first element that matches

```js {monaco-run}
const users = [{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }, { name: 'Bob', age: 20 } ]

const user = users.find(u => u.age > 25)
const notFound = users.find(u => u.age > 50)
console.log(user, notFound)

```

* [findIndex()]{.text-red.font-bold} - Returns index of first match

```js {monaco-run}
const users = [{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }, { name: 'Bob', age: 20 }]

const index = users.findIndex(u => u.age > 25)
const notFound = users.findIndex(u => u.age > 50)
console.log(index, notFound)
```

</div>
<div>

* [findLast()]{.text-red.font-bold} - Returns last element that matches

```js {monaco-run}
const numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1]

const lastEven = numbers.findLast(n => n % 2 === 0)
const lastBig = numbers.findLast(n => n > 10)
console.log(lastEven, lastBig)
```

* [findLastIndex()]{.text-red.font-bold} - Returns index of last match

```js {monaco-run}
const numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1]

const lastEvenIndex = numbers.findLastIndex(n => n % 2 === 0)
const lastBigIndex = numbers.findLastIndex(n => n > 10)
console.log(lastEvenIndex, lastBigIndex)
```

</div>
</div>

---
hideInToc: true
---

# Array Transformation Methods

<div grid="~ cols-2" gap-3>
<div>

* [map()]{.text-red.font-bold} - Creates new array with transformed elements

```js {monaco-run}
const numbers = [1, 2, 3, 4, 5]
const doubled = numbers.map(n => n * 2)
console.log(doubled) // [2, 4, 6, 8, 10]

const users = [{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }]
const names = users.map(u => u.name)
console.log(names) // ['John', 'Jane']
```

* [filter()]{.text-red.font-bold} - Creates new array with elements that pass test

```js {monaco-run}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];const users = [{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }, { name: 'Bob', age: 17 }]
const evens = numbers.filter(n => n % 2 === 0);const adults = users.filter(u => u.age >= 18)
console.log(evens, adults)
```

</div>
<div>

* [reduce()]{.text-red.font-bold} - Reduces array to single value

```js {monaco-run}
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, curr) => acc + curr, 0)
const max = numbers.reduce((acc, curr) => Math.max(acc, curr))
console.log(sum, max)


// Complex example: group by property
const users = [ { name: 'John', department: 'IT' }, { name: 'Jane', department: 'HR' }, { name: 'Bob', department: 'IT' } ]
const grouped = users.reduce((acc, user) => {
  acc[user.department] = acc[user.department] || []
  acc[user.department].push(user.name)
  return acc
}, {})
console.log(grouped)
```

</div>
</div>

---
hideInToc: true
---

# Array Iteration & Test Methods

<div grid="~ cols-2" gap-3>
<div>

* [forEach()]{.text-red.font-bold} - Executes function for each element

```js {monaco-run}
const fruits = ['apple', 'banana', 'orange']
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`)
})
```

* [reduceRight()]{.text-red.font-bold} - Reduce from right to left

```js {monaco-run}
const numbers = [1, 2, 3, 4, 5]
const rightToLeft = numbers.reduceRight((acc, curr) => { return acc + curr }, 0)
const concatenated = numbers.reduceRight((acc, curr) => { return acc + curr }, '')
console.log(rightToLeft, concatenated) // 15

```

</div>
<div>

* [some()]{.text-red.font-bold} - Tests if at least one element passes test

```js {monaco-run}
const numbers = [1, 2, 3, 4, 5]
const hasEven = numbers.some(n => n % 2 === 0)
const hasNegative = numbers.some(n => n < 0)
console.log(hasEven, hasNegative) // true
```

* [every()]{.text-red.font-bold} - Tests if all elements pass test

```js {monaco-run}
const numbers = [2, 4, 6, 8, 10]
const allEven = numbers.every(n => n % 2 === 0)
const allPositive = numbers.every(n => n > 0)
const allBig = numbers.every(n => n > 5)

console.log(allEven, allPositive, allBig)
```

</div>
</div>

---
hideInToc: true
---

# Array Joining & Manipulation

<div grid="~ cols-2" gap-3>
<div>

* [join()]{.text-red.font-bold} - Joins array elements into string

```js {monaco-run}
const fruits = ['apple', 'banana', 'orange']
const tasks = ['wash dishes', 'do laundry', 'buy groceries']
console.log( fruits.join(), fruits.join(' - '), fruits.join('') )
console.log(`Today's tasks: ${tasks.join(', ')}`)
```

* [concat()]{.text-red.font-bold} - Combines arrays into new array

```js {monaco-run}
const arr1 = [1, 2, 3]; const arr2 = [4, 5, 6]; const arr3 = [7, 8, 9];
const withElements = arr1.concat(10, 11, [12, 13])
const combined = arr1.concat(arr2, arr3)
console.log(combined, withElements) 
```

</div>
<div>

* [splice()]{.text-red.font-bold} - Changes array by removing/replacing/adding elements

```js {monaco-run}
const fruits = ['apple', 'banana', 'orange', 'grape']
console.log('Original:', fruits)
const removed = fruits.splice(1, 2)
console.log('Removed:', removed) // ['banana', 'orange']
console.log('After removal:', fruits) // ['apple', 'grape']


// Add elements at index 1
fruits.splice(1, 0, 'kiwi', 'mango')
console.log('After adding:', fruits) // ['apple', 'kiwi', 'mango', 'grape']

// Replace elements
fruits.splice(1, 2, 'pear')
console.log('After replacing:', fruits) // ['apple', 'pear', 'grape']
```

</div>
</div>

---
hideInToc: true
---

# Array Modification Methods

<div grid="~ cols-2" gap-3>
<div>

* [fill()]{.text-red.font-bold} - Fills array with static value

```js {monaco-run}
const arr1 = new Array(5).fill(0); const arr2 = [1, 2, 3, 4, 5];
arr2.fill('x', 2, 4)
const users = new Array(3).fill(null).map(() => ({ name: '', age: 0 }))
console.log(arr1, arr2) // [0, 0, 0, 0, 0]
```

* [copyWithin()]{.text-red.font-bold} - Copies part of array to another location

```js {monaco-run}
const arr = [1, 2, 3, 4, 5]; const arr2 = ['a', 'b', 'c', 'd', 'e']
console.log('Original:', arr);
arr.copyWithin(2, 0, 3); arr2.copyWithin(0, 3, 4);
console.log('After copyWithin:', arr) 
console.log('Copy d to start:', arr2)
```

</div>
<div>

* [with()]{.text-red.font-bold} - Returns new array with element replaced

```js {monaco-run}
const fruits = ['apple', 'banana', 'orange']
console.log('Original:', fruits)

const newFruits = fruits.with(1, 'kiwi')
console.log('New array:', newFruits) // ['apple', 'kiwi', 'orange']
console.log('Original unchanged:', fruits) // ['apple', 'banana', 'orange']

// Negative indices work too
const lastChanged = fruits.with(-1, 'grape')
console.log('Last changed:', lastChanged) // ['apple', 'banana', 'grape']
```

</div>
</div>

---
hideInToc: true
---

# Array Immutable Methods (ES2023)

<div grid="~ cols-2" gap-3>
<div>

* [toReversed()]{.text-red.font-bold} - Returns new reversed array

```js {monaco-run}
const original = [1, 2, 3, 4, 5]
console.log('Original:', original)
const reversed = original.toReversed()

console.log(reversed, 'Original unchanged:', original) // [5, 4, 3, 2, 1]
```

* [toSorted()]{.text-red.font-bold} - Returns new sorted array

```js {monaco-run}
const numbers = [3, 1, 4, 1, 5, 9, 2, 6]
console.log('Original:', numbers)
const sorted = numbers.toSorted()
console.log('Sorted:', sorted) // [1, 1, 2, 3, 4, 5, 6, 9]
const descending = numbers.toSorted((a, b) => b - a)
console.log(numbers, 'Descending:', descending)
```

</div>
<div>

* [toSpliced()]{.text-red.font-bold} - Returns new array with elements removed/added

```js {monaco-run}
const fruits = ['apple', 'banana', 'orange', 'grape']
console.log('Original:', fruits)
const removed = fruits.toSpliced(1, 2)

console.log('Removed:', removed) // ['apple', 'grape']

console.log('Original unchanged:', fruits)

const added = fruits.toSpliced(1, 0, 'kiwi', 'mango')
const replaced = fruits.toSpliced(1, 2, 'pear')
console.log('Added:', added, 'Replaced:', replaced)

```

</div>
</div>

---
hideInToc: true
---

# Array Flattening Methods

<div grid="~ cols-2" gap-3>
<div>

* [flat()]{.text-red.font-bold} - Flattens nested arrays

```js {monaco-run}
const nested = [1, [2, 3], [4, [5, 6]], 7]
const deepNested = [1, [2, [3, [4, [5]]]]]

const flat1 = nested.flat()
const flat2 = nested.flat(2)
const allFlat = deepNested.flat(Infinity)
console.log('Flat 1 level:', flat1, 'Flat 2 levels:', flat2) // [1, 2, 3, 4, [5, 6], 7]
console.log('All flat:', allFlat) // [1, 2, 3, 4, 5]
```

</div>
<div>

* [flatMap()]{.text-red.font-bold} - Maps and flattens in one step

```js {monaco-run}
const sentences = ['hello world', 'how are you', 'fine thanks']
const numbers = [1, 2, 3, 4]

const words = sentences.flatMap(sentence => sentence.split(' '))
const duplicated = numbers.flatMap(n => [n, n])
console.log('Words:', words, 'Duplicated:', duplicated)

const users = [ { name: 'John', hobbies: ['reading', 'swimming'] }, { name: 'Jane', hobbies: ['cooking', 'dancing'] } ]
const allHobbies = users.flatMap(user => user.hobbies)
console.log('All hobbies:', allHobbies)
```

</div>
</div>

---
hideInToc: true
---

# Array Iterator Methods

<div grid="~ cols-2" gap-3>
<div>

* [keys()]{.text-red.font-bold} - Returns iterator for array indices and can be used with spread operator

```js {monaco-run}
const fruits = ['apple', 'banana', 'orange']
const keys = fruits.keys()
console.log('Keys iterator:', keys)

for (const key of keys) // { // console.log(key) /* 0, 1, 2 */ }
```

* [values()]{.text-red.font-bold} - Returns iterator for array values and can be used with spread operator

```js {monaco-run}
const fruits = ['apple', 'banana', 'orange']
const values = fruits.values()
console.log('Values iterator:', values)
for (const value of values) //{ // console.log(value) // 'apple', 'banana', 'orange' }
```

</div>
<div>

* [entries()]{.text-red.font-bold} - Returns iterator for key-value pairs and can be used with spread operator

```js {monaco-run}
const fruits = ['apple', 'banana', 'orange']

const entries = fruits.entries()
console.log('Entries iterator:', entries)

for (const [index, value] of entries) {
  console.log(`${index}: ${value}`)
}
```

</div>
</div>

---
hideInToc: true
---

# Iterables

<div mt-2 />

**Iterables** are objects that can be iterated over with `for...of` loops. They implement the **Symbol.iterator** method that returns an iterator.

<div grid="~ cols-2" gap-3>
<div>

## What Makes an Object Iterable?

* Must have a `Symbol.iterator` method
* This method returns an **iterator object**
* Iterator has a `next()` method returning `{value, done}`

**Built-in Iterables:**

<section grid="~ cols-2" gap-3>
<div>

- Arrays
- Strings  
- Maps

</div>

<div>

- Sets
- NodeList (DOM)
- Arguments object

</div>

</section>

</div>
<div>

## Basic Iteration Example

```js {monaco-run}
const arr = [1, 2, 3]; const str = 'hello'; const set = new Set([1, 2, 3]);

// All work with for...of
for (const item of arr) console.log('Array:', item)
for (const char of str) console.log('String:', char)
for (const val of set) console.log('Set:', val)

// Manual iteration
const iterator = arr[Symbol.iterator]()
console.log('Manual:', iterator.next())
console.log('Manual:', iterator.next())
```

</div>
</div>

---
hideInToc: true
---

# Creating Custom Iterables

<div grid="~ cols-2" gap-3>
<div>

## Simple Range Iterator

```js {monaco-run}{autorun: false}
const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    let current = this.from; const last = this.to;  
    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false }
        } else {
          return { done: true }
        }
      }
    }
  }
}

for (const num of range) { console.log(num) }
```

</div>
<div>

## Fibonacci Iterator

```js {monaco-run}{autorun: false}
const fibonacci = {
  [Symbol.iterator]() {
    let a = 0, b = 1, count = 0; const max = 10;
    
    return {
      next() {
        if (count < max) {
          count++
          if (count === 1) return { value: a, done: false }
          if (count === 2) return { value: b, done: false }
          
          const next = a + b; a = b; b = next;
          return { value: next, done: false }
        }
        return { done: true }
      }
    }
  }
}

console.log([...fibonacci]) // First 10 Fibonacci numbers
```

</div>
</div>

---
hideInToc: true
---

# Array-like vs Iterables

<div grid="~ cols-2" gap-3>
<div>

## Array-like Objects

* Have indexed properties and `length`
* **Cannot** use `for...of` directly
* Common examples: `arguments`, `NodeList`

```js {monaco-run}
const arrayLike = {
  0: 'a', 1: 'b', 2: 'c', length: 3
}

// for (const item of arrayLike) console.log(item)
for (let i = 0; i < arrayLike.length; i++) {
  console.log(arrayLike[i])
}
const arr = Array.from(arrayLike)
console.log('Converted:', arr)
```

</div>
<div>

## Making Array-like Iterable

```js {monaco-run}{autorun: false}
const iterableArrayLike = {
  0: 'x', 1: 'y', 2: 'z', length: 3,
  [Symbol.iterator]() {
    let index = 0; const self = this;
    return {
      next: function() {
        if (index < self.length) {
          return { value: self[index++], done: false }
        }
        return { done: true }
      }
    }
  }
}
for (const item of iterableArrayLike) {
  console.log('for...of:', item)
}
console.log('Spread:', [...iterableArrayLike])
```

</div>
</div>

---
hideInToc: true
---

# Iterators and Destructuring

<div grid="~ cols-2" gap-3>
<div>

## Destructuring with Iterables

```js {monaco-run}
const colors = ['red', 'green', 'blue', 'yellow']

const [first, second, ...rest] = colors
console.log('First:', first, 'Second:', second, 'Rest:', rest)

const str = 'hello'
const [h, e, l1, l2, o] = str
console.log('Letters:', h, e, l1, l2, o)

const range = {
  from: 1, to: 3,
  [Symbol.iterator]: function* () {
    for (let i = this.from; i <= this.to; i++) yield i
  }
}

const [a, b, c] = range
console.log('Range values:', a, b, c)
```

</div>
<div>

## Iterator Helper Methods (ES2026)

```js {monaco-run}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
try {
  // take() - takes first n elements
  const firstThree = numbers.values().take(3)
  console.log('First three:', [...firstThree])
  
  // drop() - skips first n elements  
  const skipTwo = numbers.values().drop(2)
  console.log('Skip two:', [...skipTwo])
  
  // filter() on iterators
  const evenNums = numbers.values().filter(x => x % 2 === 0)
  console.log('Even numbers:', [...evenNums])
} catch (e) {
  console.log('Alternative:', numbers.slice(0, 3))
}
```

</div>
</div>

---
hideInToc: true
---

# Generator Functions as Iterables

<div grid="~ cols-2" gap-3>
<div>

## Simple Generator

```js {monaco-run}{autorun: false}
function* numberGenerator() {
  yield 1
  yield 2
  yield 3
}

const gen = numberGenerator()
console.log('Generator:', gen)

// console.log('Manual:', gen.next())
// console.log('Manual:', gen.next())
for (const num of numberGenerator()) {
  // console.log('Generated:', num)
}

console.log('Spread:', [...numberGenerator()])
```

</div>
<div>

## Infinite Sequence Generator

```js {monaco-run}{autorun: false}
function* infiniteSequence() {
  let i = 0
  while (true) {
    yield i++
  }
}
function* takeN(iterable, n) {
  let count = 0;
  for (const item of iterable) { if (count >= n) break; yield item; count++; }
}
const first5 = takeN(infiniteSequence(), 5);console.log('First 5:', [...first5])
const evens = []
for (const num of infiniteSequence()) {
  if (num % 2 === 0) evens.push(num)
  if (evens.length >= 2) break
}
console.log('First 2 evens:', evens)
```

</div>
</div>
---
hideInToc: true
---

# Real-world Iterator Applications

<div grid="~ cols-2" gap-3>
<div>

## DOM Node Iterator

```js {monaco-run}{autorun: false}
const createNodeIterator = (element) => ({
  [Symbol.iterator]: function* () {
    const walker = document.createTreeWalker( element, NodeFilter.SHOW_ELEMENT, null, false )
    let node
    while (node = walker.nextNode()) { yield node }
  }
})
const bodyNodes = createNodeIterator(document.body)
let count = 0
for (const node of bodyNodes) {
  count++
  if (count > 5) break // Limit output
  console.log('Node:', node.tagName)
}
```

</div>
<div>

## Pagination Iterator

```js {monaco-run}{autorun: false}
const createPaginationIterator = (data, pageSize) => ({
  [Symbol.iterator]: function* () {
    for (let i = 0; i < data.length; i += pageSize) {
      yield data.slice(i, i + pageSize)
    }
  }
})

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const pages = createPaginationIterator(numbers, 3)

let pageNum = 1
for (const page of pages) {
  console.log(`Page ${pageNum}:`, page)
  pageNum++
}

// Can also use with spread operator
console.log('All pages:', [...createPaginationIterator(numbers, 4)])
```

</div>
</div>


---
hideInToc: true
---

# Map and Set

<div></div>
Map is a collection of keyed data items, just like an Object. But the main difference is that <span class='text-red'><strong><em>Map allows keys of any type.</em></strong></span><br><br>
Same API applies to Set, but Set does not have keys, only values.

### Methods and properties are:<br>

<v-clicks>
<ul>
  <li><code>new Map()</code> / <code>new Set()</code> – creates the map or set.</li>
  <li><code>map.set(key, value)</code> / <code>set.add(value)</code> – stores the value by the key (Map) or adds a value (Set).</li>
  <li><code>map.get(key)</code> – returns the value by the key, undefined if key doesn't exist in map.</li>
  <li><code>map.has(key)</code> / <code>set.has(value)</code> – returns true if the key/value exists, false otherwise.</li>
  <li><code>map.delete(key)</code> / <code>set.delete(value)</code> – removes the element by the key (Map) or value (Set).</li>
  <li><code>map.clear()</code> / <code>set.clear()</code> – removes everything from the map or set.</li>
  <li><code>map.size</code> / <code>set.size</code> – returns the current element count.</li>
</ul>
</v-clicks>

---
hideInToc: true
title: Examples on Map
---

For example:

```js {monaco-run}
//create a new Map
const userInfo = new Map()
console.log(userInfo)
userInfo.set('name', 'snickers')
userInfo.set('age', 30)
userInfo.set('email', 'snick@gmail.com')
console.log(userInfo)
console.log(userInfo.get('name'))
console.log(userInfo.has('name'))
userInfo.delete('age')
console.log(userInfo)
console.log(userInfo.size) //returns the current element count
userInfo.clear() //removes everything from the map
console.log(userInfo)
```

---
hideInToc: true
title: Examples on Set
---

For example:

```js {monaco-run}
//create a new Set
const userInfo = new Set()
console.log(userInfo)
userInfo.add('snickers')
userInfo.add(30)
userInfo.add('snick@gmail.com')
userInfo.add('snickers') // Duplicate - won't be added
console.log(userInfo)
console.log(userInfo.has('snickers'))
console.log(userInfo.has(30))
userInfo.delete(30)
console.log(userInfo)
console.log(userInfo.size) //returns the current element count
userInfo.clear() //removes everything from the set
console.log(userInfo)
```

---
hideInToc: true
---

# New ES2025 Set Methods

<div mt-2 />

ECMAScript 2025 introduced **7 new Set methods** that provide native set operations previously requiring manual implementations.

## Set Operations Made Easy

<div grid="~ cols-2">
<div>

**Union & Intersection**
```js {monaco-run}
const frontendSkills = new Set(['JavaScript', 'React', 'CSS'])
const backendSkills = new Set(['JavaScript', 'Node.js', 'Python'])

// All skills combined
const allSkills = frontendSkills.union(backendSkills)
console.log('Union:', allSkills)

// Common skills only
const commonSkills = frontendSkills.intersection(backendSkills)
console.log('Intersection:', commonSkills)
```

</div>
<div>

**Difference Operations**
```js {monaco-run}
const teamA = new Set(['Alice', 'Bob', 'Charlie'])
const teamB = new Set(['Bob', 'Charlie', 'David'])

// Only in teamA
const uniqueToA = teamA.difference(teamB)
console.log('Difference:', uniqueToA)

// In either team but not both
const exclusive = teamA.symmetricDifference(teamB)
console.log('Symmetric Difference:', exclusive)
```

</div>
</div>

---
hideInToc: true
---

## Set Relationship Testing

<div grid="~ cols-2">
<div>

**Subset & Superset**
```js {monaco-run}
const managers = new Set(['John', 'Jane'])
const allEmployees = new Set(['John', 'Jane', 'Bob', 'Alice'])

// Are all managers employees?
const isSubset = managers.isSubsetOf(allEmployees)
console.log('Managers are subset:', isSubset)

// Do we have all managers?
const isSuperset = allEmployees.isSupersetOf(managers)
console.log('Company has all managers:', isSuperset)
```

</div>
<div>

**Disjoint Check**
```js {monaco-run}
const frontendTeam = new Set(['Alice', 'Bob'])
const backendTeam = new Set(['Charlie', 'David'])
const fullstackTeam = new Set(['Alice', 'Eve'])

// No overlap between frontend and backend?
const noOverlap = frontendTeam.isDisjointFrom(backendTeam)
console.log('Teams are separate:', noOverlap)

// Any overlap with fullstack?
const hasOverlap = frontendTeam.isDisjointFrom(fullstackTeam)
console.log('No fullstack overlap:', hasOverlap)
```

</div>
</div>

---
hideInToc: true
---

## Before vs After ES2025

<div grid="~ cols-2">
<div>

**❌ The Old Way - Manual Implementation**
```js
// Union - messy spread operator
const union = new Set([...setA, ...setB])

// Intersection - filter with has()
const intersection = new Set(
  [...setA].filter(x => setB.has(x))
)

// Difference - more filtering
const difference = new Set(
  [...setA].filter(x => !setB.has(x))
)

// Subset check - every() method
const isSubset = [...setA].every(x => setB.has(x))
```

</div>
<div>

**✅ The New Way - Native Methods**
```js {monaco-run}{autorun: false}
const setA = new Set(['a', 'b', 'c'])
const setB = new Set(['b', 'c', 'd'])


const union = setA.union(setB)
const intersection = setA.intersection(setB)
const difference = setA.difference(setB)
const isSubset = setA.isSubsetOf(setB)

console.log('Union:', union)
console.log('Intersection:', intersection)
console.log('Difference:', difference)
console.log('Is subset:', isSubset)

// Chainable operations
const result = setA.union(setB).difference(new Set(['d']))
console.log('Chained result:', result)
```

</div>
</div>

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

console.log(visitsCountMap.get(john)) // 123
```

<p><span class='text-red'>Note:</span> Using objects as keys is one of the most notable and important Map features. The same does not count for Object. String as a key in Object is fine, but we can't use another Object as a key in Object.</p>

```js {monaco-run} {autorun:false}
let john = { name: 'John' }
let ben = { name: 'Ben' }

let visitsCountObj = {} // try to use an object

visitsCountObj[ben] = 234 // try to use ben object as the key
visitsCountObj[john] = 123 // try to use john object as the key, ben object will get replaced

// That's what got written!
console.log(visitsCountObj['[object Object]']) // 123
```

---
hideInToc: true
---

# WeakMap and WeakSet

<div mt-2 />

**WeakMap** and **WeakSet** are "weak" versions of Map and Set that allow **garbage collection** of their keys/values when no other references exist.

<div grid="~ cols-2" gap-3>
<div>

## WeakMap

* Keys must be **objects** (not primitives)
* Keys are **weakly referenced**
* No iteration methods (`forEach`, `keys`, `values`)
* No `size` property
* Keys can be garbage collected

```js {monaco-run}
const wm = new WeakMap()
let user = { name: 'John' }
wm.set(user, 'user metadata')
console.log(wm.has(user), wm.get(user))
user = null
```

</div>
<div>

## WeakSet

* Values must be **objects** (not primitives)
* Values are **weakly referenced**
* No iteration methods
* No `size` property
* Values can be garbage collected

```js {monaco-run}
const ws = new WeakSet()
let user1 = { name: 'Alice' }
let user2 = { name: 'Bob' }

// Add objects to WeakSet
ws.add(user1)
ws.add(user2)
console.log(ws.has(user1), ws.has(user2));
user1 = null
```

</div>
</div>

---
hideInToc: true
---

## Real-world Use Cases

<div grid="~ cols-2" gap-3>
<div>

**🔐 Private Data Storage**
```js {monaco-run}
const privateData = new WeakMap()

class User {
  constructor(name) {
    this.name = name
    privateData.set(this, { 
      password: 'secret123',
      lastLogin: new Date()
    })
  }
  
  getPrivateData() {
    return privateData.get(this)
  }
}

const user = new User('John')
console.log(user.getPrivateData())
```

</div>
<div>

**📊 Object Metadata**
```js {monaco-run}
const visited = new WeakSet()

function markAsVisited(obj) {
  visited.add(obj)
}

function isVisited(obj) {
  return visited.has(obj)
}

const page = { url: '/home' }
markAsVisited(page)
console.log(isVisited(page)) // true

// When page is no longer referenced,
// it's automatically removed from visited
```

</div>
</div>

---
hideInToc: true
---

## Key Differences from Map/Set

| Feature                | Map/Set             | WeakMap/WeakSet            |
| ---------              | ---------           | -----------------          |
| **Keys/Values**        | Any type            | Objects only               |
| **Iteration**          | ✅ Possible         | ❌ Not allowed              |
| **Size**               | ✅ Has `.size`      | ❌ No size property         |
| **Garbage Collection** | ❌ Prevents GC       | ✅ Allows GC               |
| **Use Case**           | General collections | Private data,metadata      |


---
hideInToc: true
---

# Object Static Methods

<div mt-2 />

**Object static methods** provide powerful utilities for working with objects, especially for transforming between objects and arrays.

<div grid="~ cols-2" gap-3>
<div>

## Object.keys & Object.values

```js {monaco-run}
const user = { name: 'John', age: 30, city: 'NYC', email: 'john@example.com' }

const keys = Object.keys(user)
const values = Object.values(user)
const hasEmail = Object.keys(user).includes('email')
const allStrings = Object.values(user).every(val => typeof val === 'string')

console.log('Keys:', keys)

// Practical usage

```

</div>
<div>

## Object.entries & Object.fromEntries

```js {monaco-run}
const scores = { math: 85, english: 92, science: 78 }

const entries = Object.entries(scores)
const doubledScores = Object.fromEntries(
  entries.map(([subject, score]) => [subject, score * 2])
)
const highScores = Object.fromEntries(
  entries.filter(([subject, score]) => score > 80)
)
// console.log('Entries:', entries)
// console.log('Doubled scores:', doubledScores)
// console.log('High scores:', highScores)
```

</div>
</div>

---
hideInToc: true
---

# Object.groupBy (ES2024)

<div mt-2 />

**Object.groupBy()** groups array elements by a key function, returning an object where keys are the group identifiers.

<div grid="~ cols-2" gap-3>
<div>

## Basic Grouping

```js {monaco-run}
const students = [ { name: 'Alice', grade: 'A', age: 20 }, { name: 'Bob', grade: 'B', age: 19 }, { name: 'Charlie', grade: 'A', age: 21 }, { name: 'David', grade: 'B', age: 20 }, { name: 'Eve', grade: 'C', age: 19 } ]

// Group by grade
try {
  const byGrade = Object.groupBy(students, student => student.grade)
  // console.log('By grade:', byGrade)
} catch (e) {
  console.log('groupby is not available')
}
```

</div>
<div>

## Advanced Grouping

```js {monaco-run}
const products = [ { name: 'Laptop', price: 1200, category: 'Electronics' }, { name: 'Phone', price: 800, category: 'Electronics' }, { name: 'Shirt', price: 30, category: 'Clothing' }, { name: 'Shoes', price: 80, category: 'Clothing' }, { name: 'Book', price: 15, category: 'Education' } ]

// Group by price range
const groupByPriceRange = (product) => {
  if (product.price < 50) return 'cheap'
  if (product.price < 500) return 'moderate'
  return 'expensive'
}

try {
  const byPriceRange = Object.groupBy(products, groupByPriceRange)
  // console.log('By price range:', byPriceRange)
} catch (e) {
  // console.log('Group is not available')
}
```

</div>
</div>


---
hideInToc: true
---

# Destructuring

<div mt-2 />

**Destructuring** is a JavaScript expression that allows you to extract values from arrays or properties from objects into distinct variables.

<div grid="~ cols-2" gap-3>
<div>

## Array Destructuring

```js {monaco-run}
const colors = ['red', 'green', 'blue', 'yellow']

// Basic destructuring
const [first, second] = colors
console.log('First:', first, 'Second:', second)
const [, , third] = colors
console.log('Third:', third)
const [primary, ...others] = colors
console.log('Primary:', primary, 'Others:', others)
const [a, b, c, d, e = 'default'] = colors
console.log('Fifth:', e)
```

</div>
<div>

## Object Destructuring

```js {monaco-run}
const user = { name: 'John', age: 30, city: 'NYC', email: 'john@example.com' }

const { name, age } = user
const { name: userName, city: location } = user
const { country = 'USA', phone = 'N/A' } = user

// console.log('Name:', name, 'Age:', age)
// console.log('User:', userName, 'Location:', location)
// console.log('Country:', country, 'Phone:', phone)

```

</div>
</div>

---
hideInToc: true
---

# Nested Destructuring

<div mt-2 />

**Nested destructuring** allows you to extract values from deeply nested objects and arrays.

<div grid="~ cols-2" gap-3>
<div>

## Nested Object Destructuring

```js {monaco-run}
const user = {
  name: 'John',
  address: { street: '123 Main St', city: 'NYC', country: 'USA' },
  hobbies: ['reading', 'coding', 'gaming']
}

const { 
  name, 
  address: { city, country },
  hobbies: [firstHobby, ...otherHobbies]
} = user

console.log('Name:', name)
console.log('City:', city, 'Country:', country)
console.log('First hobby:', firstHobby)
console.log('Other hobbies:', otherHobbies)
```

</div>
<div>

## Mixed Array & Object Destructuring

```js {monaco-run}
const response = {
  status: 'success',
  data: [ { id: 1, name: 'Alice', scores: [85, 92, 78] }, { id: 2, name: 'Bob', scores: [90, 88, 85] } ]
}

// Extract from nested structure
const {
  status,
  data: [ { name: firstName, scores: [firstScore] }, { name: secondName, scores: [, secondScore] } ]
} = response

console.log('Status:', status)
console.log('First user:', firstName, 'Score:', firstScore)
console.log('Second user:', secondName, 'Score:', secondScore)
```

</div>
</div>

---
hideInToc: true
---

# Smart Function Parameters

<div mt-2 />

**Destructuring in function parameters** makes functions more readable and flexible by allowing direct extraction of needed values.

<div grid="~ cols-2" gap-3>
<div>

## Object Parameter Destructuring

```js {monaco-run}
// Instead of: function createUser(options) { ... }
function createUser({ name, age, email, role = 'user' }) {
  return { id: Date.now(), name, age, email, role, createdAt: new Date() }
}

const user1 = createUser({ name: 'John', age: 30, email: 'john@example.com' })
const user2 = createUser({ name: 'Admin', age: 25, email: 'admin@example.com', role: 'admin' })
console.log('User 1:', user1.name, user1.role)
console.log('User 2:', user2.name, user2.role)
```

</div>
<div>

## Array Parameter Destructuring

```js {monaco-run}
function processCoordinates([x, y, z = 0]) {
  return { x: x * 2, y: y * 2, z: z * 2 }
}
const point2D = [10, 20];const point3D = [5, 15, 25]
// console.log(processCoordinates(point2D), processCoordinates(point3D))
function calculateStats([first, ...rest]) {
  const sum = first + rest.reduce((a, b) => a + b, 0)
  return {
    first,sum,count: rest.length + 1,
    average: sum / (rest.length + 1)
  }
}
const numbers = [85, 92, 78, 90, 88]
// console.log('Stats:', calculateStats(numbers))
```

</div>
</div>


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
console.log(now)
```

<div grid="~ cols-2">
<div>

- new Date(date string): Create a Date object with the time equal to number of milliseconds (1/1000 of a second) passed after the Jan 1st of 1970 UTC+0.
- new Date(year,month)
- new Date(year,month,day)
- new Date(year,month,day,hours)

</div>
<div>

- new Date(year,month,day,hours,minutes)
- new Date(year,month,day,hours,minutes,seconds)
- new Date(year,month,day,hours,minutes,seconds,ms)
- new Date(milliseconds)

</div>
</div>

---
hideInToc: true
---

# Intro to Intl API

<div mt-2 />

The **Intl API** provides language-sensitive string comparison, number formatting, date and time formatting, and other internationalization features.

<div grid="~ cols-2" gap-3>
<div>

## Common Intl Objects

**Date & Time Formatting:**
- `Intl.DateTimeFormat` - Format dates/times
- `Intl.RelativeTimeFormat` - Relative time ("2 hours ago")

**Number Formatting:**
- `Intl.NumberFormat` - Format numbers
- `Intl.ListFormat` - Format lists ("A, B, and C")

**Text & Collation:**
- `Intl.Collator` - String comparison
- `Intl.PluralRules` - Plural rule selection

```js {monaco-run}
// Basic usage examples
const date = new Date()
const number = 1234567.89

console.log('US:', new Intl.DateTimeFormat('en-US').format(date))
console.log('DE:', new Intl.DateTimeFormat('de-DE').format(date))
console.log('US Number:', new Intl.NumberFormat('en-US').format(number))
console.log('DE Number:', new Intl.NumberFormat('de-DE').format(number))
```

</div>
<div>

## Real-world Examples

```js {monaco-run}
const price = 29.99;const date = new Date()
const usdFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
const eurFormatter = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' })
// console.log('USD:', usdFormatter.format(price))
// console.log('EUR:', eurFormatter.format(price))
const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
// console.log('Yesterday:', rtf.format(-1, 'day'))
// console.log('Next week:', rtf.format(1, 'week'))
const listFormatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' })
// console.log('List:', listFormatter.format(['Apple', 'Banana', 'Cherry']))
```

</div>
</div>


---
hideInToc: true
---

# Intl.DateTimeFormat Deep Dive

<div mt-2 />

**Intl.DateTimeFormat** provides locale-sensitive date and time formatting with extensive customization options.

<div grid="~ cols-2" gap-3>
<div>

## Basic Date Formatting

```js {monaco-run}{autorun: false}
const date = new Date('2024-03-15T14:30:00')
const usFormat = new Intl.DateTimeFormat('en-US')
const ukFormat = new Intl.DateTimeFormat('en-GB')
const deFormat = new Intl.DateTimeFormat('de-DE')
const jaFormat = new Intl.DateTimeFormat('ja-JP')
const longFormat = new Intl.DateTimeFormat('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

console.log(usFormat.format(date));
// console.log(ukFormat.format(date));
// console.log(deFormat.format(date));
// console.log(jaFormat.format(date));
// console.log('Long format:', longFormat.format(date))
```

</div>
<div>

## Advanced Formatting Options

```js {monaco-run}{autorun: false}
const date = new Date('2024-03-15T14:30:00')

const timeFormat = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
const dateTimeFormat = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' })
const tzFormat = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', timeZoneName: 'short' })

// console.log('24-hour time:', timeFormat.format(date))
// console.log('Full date/time:', dateTimeFormat.format(date))
// console.log('NY timezone:', tzFormat.format(date))
```

</div>
</div>

---
hideInToc: true
---

# Intl.NumberFormat & Currency

<div mt-2 />

**Intl.NumberFormat** provides locale-sensitive number formatting including currency, percentages, and units.

<div grid="~ cols-2" gap-3>
<div>

## Number & Currency Formatting

```js {monaco-run}{autorun: false}
const number = 1234567.89; const smallNumber = 0.123;

const usNumber = new Intl.NumberFormat('en-US')
const deNumber = new Intl.NumberFormat('de-DE')
const usdCurrency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
const eurCurrency = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' })
const percent = new Intl.NumberFormat('en-US', { style: 'percent' })
// console.log('US Number:', usNumber.format(number))
// console.log('DE Number:', deNumber.format(number))
// console.log('USD:', usdCurrency.format(number))
// console.log('EUR:', eurCurrency.format(number))
// console.log('Percentage:', percent.format(smallNumber))
```

</div>
<div>

## Advanced Number Formatting

```js {monaco-run}{autorun: false}
const number = 1234567.89

const customFormat = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 })
const compactFormat = new Intl.NumberFormat('en-US', { notation: 'compact', compactDisplay: 'short' })
const unitFormat = new Intl.NumberFormat('en-US', { style: 'unit', unit: 'kilometer-per-hour' })
const scientificFormat = new Intl.NumberFormat('en-US', { notation: 'scientific' })

// console.log('Custom decimals:', customFormat.format(number))
// console.log('Compact:', compactFormat.format(number))
// console.log('Speed:', unitFormat.format(120))
// console.log('Scientific:', scientificFormat.format(number))
```

</div>
</div>

---
hideInToc: true
---

# Temporal API (Experimental-Firefox only)

<div mt-2 />

**Temporal** is the modern replacement for JavaScript's `Date` object, providing a comprehensive and intuitive API for date and time manipulation.

<div grid="~ cols-2" gap-3 class="text-[12px]">
<div>

## Key Temporal Classes


<div grid="~ cols-2" gap-3>
<div>

- `Temporal.Instant` - Precise moment in time
- `Temporal.ZonedDateTime` - Date/time with timezone
- `Temporal.PlainDateTime` - Date/time without timezone
- `Temporal.PlainDate` -  Date only


</div>
<div>

- `Temporal.PlainTime` - Time only
- `Temporal.Duration` - Time spans
- `Temporal.Now` - Current time utilities
- `Temporal.PlainMonthDay`
- `Temporal.PlainYearMonth`

</div>
</div>


```js {monaco-run}
if (typeof Temporal !== 'undefined') {
  const now = Temporal.Now.plainDateISO(); const tomorrow = now.add({ days: 1 });
  console.log(now.toString(), tomorrow.toString())
} else {
  console.log('Temporal not available yet')
}
```

</div>
<div>

## Temporal vs Date Benefits

<div grid="~ cols-2" gap-3>
<div>

- Mutable (can be accidentally changed)
- Confusing API with mixed time zones
- Limited calendar support
- Poor parsing and formatting

</div>
<div>

- Immutable objects
- Clear separation of concepts
- Multiple calendar systems
- Precise nanosecond resolution
- Better string formatting

</div>
</div>


```js {monaco-run}
try {
  const date1 = Temporal.PlainDate.from('2024-03-15'); const date2 = Temporal.PlainDate.from('2024-03-20');
  const duration = date1.until(date2); const futureDate = date1.add({ months: 2, days: 5 });
  console.log(duration.toString(), futureDate.toString()) //P5D
} catch (e) {
  console.log('Temporal not available, using Date fallback')
}
```

</div>
</div>


---
hideInToc: true
---

# JSON Methods & toJSON

<div mt-2 />

JSON (JavaScript Object Notation) is a lightweight data interchange format. JavaScript provides built-in methods to work with JSON data.

## Basic JSON Methods

<div grid="~ cols-2">
<div>

**JSON.stringify()** - Converts JavaScript objects to JSON strings

```js {monaco-run}
const obj = { name: "John", age: 30, city: "New York" }
const jsonString = JSON.stringify(obj)
console.log(jsonString)
// Output: {"name":"John","age":30,"city":"New York"}
```

</div>
<div>

**JSON.parse()** - Converts JSON strings to JavaScript objects

```js {monaco-run}
const jsonString = '{"name":"John","age":30,"city":"New York"}'
const obj = JSON.parse(jsonString)
console.log(obj)
// Output: {name: "John", age: 30, city: "New York"}
```

</div>
</div>

---
hideInToc: true
---

## The toJSON() Method

Objects can define a custom `toJSON()` method to control how they are converted to JSON.

### Built-in toJSON() - Date Example

```js {monaco-run}
const date = new Date('2023-12-25T10:30:00Z')
console.log( date, date.toJSON())
console.log("Date.toJSON():", date.toJSON(), JSON.stringify(date))
```

### Custom toJSON() Implementation

```js {monaco-run}
class Person {
  constructor(name, age, email) { this.name = name; this.age = age; this.email = email; this.password = "secret123"; }
  toJSON() {
    return { name: this.name, age: this.age, email: this.email, serializedAt: new Date().toISOString() }
  }
}
const person = new Person("John Doe", 30, "john@example.com")
// console.log("JSON.stringify(person):", JSON.stringify(person))
```

---
hideInToc: true
---

## Advanced toJSON() Examples

### Security & Data Filtering

```js {monaco-run}
class BankAccount {
  constructor(accountNumber, balance, owner) { this.accountNumber = accountNumber; this.balance = balance; this.owner = owner; this.transactions = []; }
  toJSON() {
    return {
      accountNumber: this.accountNumber.slice(-4), // Only show last 4 digits
      balance: this.balance, owner: this.owner, transactionCount: this.transactions.length,
      exportedAt: new Date().toISOString()
    }
  }
}
const account = new BankAccount("1234567890", 1500.75, "Jane Smith")
// console.log("JSON.stringify(account):", JSON.stringify(account))
```

---
hideInToc: true
---

<div grid="~ cols-2" gap-3>
<div>

### toJSON() Returning Different Types

```js {monaco-run}
class Temperature {
  constructor(celsius) {
    this.celsius = celsius
  }
  toJSON() {
    return `${this.celsius}°C (${this.celsius * 9/5 + 32}°F)`
  }
}
const temp = new Temperature(25)
// console.log("JSON.stringify(temp):", JSON.stringify(temp))
```

</div>
<div>

### Conditional toJSON() Logic

```js {monaco-run}
class User {
  constructor(username, email, isAdmin = false) { this.username = username; this.email = email; this.isAdmin = isAdmin; this.loginCount = 0; }
  toJSON() {
    const baseData = { username: this.username, email: this.email }
    if (this.isAdmin) {
      baseData.isAdmin = this.isAdmin
      baseData.loginCount = this.loginCount
    }
    return baseData
  }
}
const regularUser = new User("johndoe", "john@example.com")
const adminUser = new User("admin", "admin@example.com", true)
// console.log(JSON.stringify(regularUser), JSON.stringify(adminUser))
```

</div>
</div>
