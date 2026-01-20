---
layout: center
transition: slide-up
hideInToc: true
---

# Prototypes, Inheritance and Classes

<TocIcon />

<div mt-2 />

- <a @click="$slidev.nav.go($nav.currentPage+1)">Prototypal Inheritance and Prototype Chain(F.prototype)</a>
- <a @click="$slidev.nav.go($nav.currentPage+2)">Native Prototypes and Prototype Methods</a>
- <a @click="$slidev.nav.go($nav.currentPage+3)">Class basic syntax</a>
- <a @click="$slidev.nav.go($nav.currentPage+4)">Class Inheritance</a>
- <a @click="$slidev.nav.go($nav.currentPage+5)">Static Properties and Methods</a>
- <a @click="$slidev.nav.go($nav.currentPage+6)">Private and Protected Properties and Methods</a>
- <a @click="$slidev.nav.go($nav.currentPage+7)">Extending built-in classes</a>
- <a @click="$slidev.nav.go($nav.currentPage+8)">Class checking: `instanceof` and Mixins</a>

---
hideInToc: true
---

# Prototype Chain Diagram (SVG)

![Prototype Chain Diagram](/prototype-chain.svg)

In JavaScript, objects have a prototype chain, which is a series of linked objects that can be used to share methods and properties. Below is an SVG diagram representing a typical prototype chain for demonstration purposes.

---
hideInToc: true
---

# Native Prototype Extension Dangers

Extending native prototypes is generally discouraged in JavaScript because it can lead to conflict between code bases, especially if multiple libraries attempt to add the same property or method names to a prototype. For instance:

```javascript
Array.prototype.myFunc = function () {
  // Do something
}
```

This can be problematic if another library does the same, potentially breaking code.

---
hideInToc: true
class: text-sm
---

# ES6 Class Syntax vs Constructor Functions Comparison

JavaScript has two main ways to create objects: using ES6 class syntax or traditional constructor functions.

<div grid="~ cols-2" gap="2">

<div>

### ES6 Class Syntax

- Introduced in ES6.
- Syntactical sugar over JavaScript's existing prototype-based inheritance.
- Provides a cleaner and more intuitive way to create objects and handle inheritance.

</div>

<div>

### Constructor Functions

- Used before ES6.
- A function used to create objects and set their prototype.
- Requires more manual handling of inheritance.

</div>
</div>

<div grid="~ cols-2" gap="2">

<div>

```javascript
// ES6 Class
class Animal {
  constructor(name) {
    this.name = name
  }
  speak() {
    // console.log(`${this.name} makes a noise.`);
  }
}
```

</div>
<div>

```js
// Constructor Function
function Animal(name) {
  this.name = name
}
Animal.prototype.speak = function () {
  // console.log(this.name + ' makes a noise.');
}
```

</div>
</div>

---
hideInToc: true
class: text-sm
---

# Mixins Example Using `Object.assign`

Mixins allow the addition of common functionality or properties to different classes in JavaScript. Using `Object.assign`, you can implement mixins as follows:

```js {monaco-run} {autorun: false}
const canEat = {
  eat: function () {
    console.log('Eating')
  },
}
const canWalk = {
  walk: function () {
    console.log('Walking')
  },
}
function Person(name) {
  this.name = name
}
Object.assign(Person.prototype, canEat, canWalk)
const person = new Person('John')
person.eat() // Eating
person.walk() // Walking
```

---
hideInToc: true
---

# Live Demo: Extending `Array` Safely

```js {monaco-run}
class ExtendedArray extends Array {
  sum() {
    return this.reduce((acc, curr) => acc + curr, 0)
  }
}
const myArray = new ExtendedArray(1, 2, 3, 4)
// console.log('Sum:', myArray.sum()); // Console output: Sum: 10
```

This demo creates a new `ExtendedArray` class that extends the native `Array` object safely by adding a `sum` method that sums all elements.

---
hideInToc: true
class: text-sm
---

# Prototypal Inheritance and Prototype Chain(F.prototype)

<div grid="~ cols-2" gap="4">

<div>

### Key Concepts

- Every object has a hidden `[[Prototype]]` property
- `__proto__` is a getter/setter for `[[Prototype]]`
- `F.prototype` is used when `new F()` is called
- The prototype chain enables inheritance
- Property lookup traverses the chain until found or `null`

```js
let animal = { eats: true }
let rabbit = { jumps: true }
rabbit.__proto__ = animal

console.log(rabbit.eats) // true (inherited)
console.log(rabbit.jumps) // true (own)
```

</div>

<div>

### F.prototype in Action

```js
function Animal(name) {
  this.name = name
}
Animal.prototype.eats = true

let rabbit = new Animal('Bunny')
console.log(rabbit.eats) // true

// Default F.prototype
console.log(Animal.prototype.constructor === Animal) // true
```

- `new Animal()` sets `rabbit.__proto__ = Animal.prototype`
- `constructor` property points back to the function
- Modifying `prototype` affects all instances

</div>
</div>

---
hideInToc: true
class: text-sm
---

# Native Prototypes and Prototype Methods

<div grid="~ cols-2" gap="4">

<div>

### Native Prototype Chain

- All built-in objects have prototypes
- `Object.prototype` is at the top of the chain
- Arrays: `arr → Array.prototype → Object.prototype → null`
- Functions: `func → Function.prototype → Object.prototype → null`

```js
let arr = [1, 2, 3]
// arr.__proto__ === Array.prototype
// arr.__proto__.__proto__ === Object.prototype

console.log(arr.toString()) // "1,2,3"
// Uses Array.prototype.toString
```

</div>

<div>

### Prototype Methods

```js
// Object.create - create with specific prototype
let animal = { eats: true }
let rabbit = Object.create(animal)

// Object.getPrototypeOf / setPrototypeOf
Object.getPrototypeOf(rabbit) === animal // true

// Object.keys - own keys only
// Object.values / Object.entries

// hasOwnProperty - check own property
for (let key in rabbit) {
  if (rabbit.hasOwnProperty(key)) {
    console.log('Own:', key)
  }
}
```

- Avoid modifying native prototypes in production

</div>
</div>

---
hideInToc: true
class: text-sm
---

# Class Basic Syntax

<div grid="~ cols-2" gap="4">

<div>

```js
class User {
  constructor(name) {
    this.name = name
  }

  sayHi() {
    console.log(`Hello, ${this.name}!`)
  }

  get name() {
    return this._name
  }

  set name(value) {
    this._name = value
  }
}

let user = new User('John')
user.sayHi() // Hello, John!
```

</div>

<div>

### What Class Really Is

- `class` is a function (syntactic sugar)
- Methods go to `Class.prototype`
- Classes are not hoisted like functions
- Always runs in strict mode
- Must call with `new`, cannot call directly

```js
typeof User // "function"
User === User.prototype.constructor // true
// Class expression and Named class expression
let User = class {
  sayHi() {
    console.log('Hi')
  }
}
let User = class MyClass {
  // MyClass only visible inside
}
```

</div>
</div>

---
hideInToc: true
---

# Class Inheritance

<div grid="~ cols-2" gap="4">

<div>

### Extending Classes

```js
class Animal {
  constructor(name) {
    this.name = name
  }
  speak() {
    console.log(`${this.name} makes a sound.`)
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name) // Must call super() first
    this.breed = breed
  }
  speak() {
    console.log(`${this.name} barks.`)
  }
}

let dog = new Dog('Rex', 'German Shepherd')
dog.speak() // Rex barks.
```

</div>

<div>

### Key Inheritance Concepts

- `extends` creates a child class
- `super()` calls the parent constructor
- `super.method()` calls parent methods
- Must call `super()` before using `this`
- Child methods override parent methods

```js
class Cat extends Animal {
  speak() {
    super.speak() // Call parent method
    console.log(`${this.name} meows.`)
  }
}

let cat = new Cat('Whiskers')
cat.speak()
// Whiskers makes a sound.
// Whiskers meows.
```

</div>
</div>

---
hideInToc: true
---

# Static Properties and Methods

<div grid="~ cols-2" gap="4">

<div>

### Static Methods

- Belong to the class, not instances
- Called on the class itself
- Cannot access instance properties via `this`
- Useful for utility functions

```js
class MathHelper {
  static PI = 3.14159

  static square(x) {
    return x * x
  }

  static cube(x) {
    return x * x * x
  }
}

console.log(MathHelper.PI) // 3.14159
console.log(MathHelper.square(4)) // 16
```

</div>

<div>

### Static in Inheritance

```js
class Animal {
  static planet = 'Earth'

  static compare(a, b) {
    return a.name.localeCompare(b.name)
  }
}

class Dog extends Animal {}

// Static properties are inherited
console.log(Dog.planet) // Earth

let dogs = [new Dog('Rex'), new Dog('Buddy')]
dogs.sort(Animal.compare)
```

- Static methods are inherited
- `this` in static method refers to the class

</div>
</div>

---
hideInToc: true
class: text-sm
---

# Private and Protected Properties and Methods

<div grid="~ cols-2" gap="4">

<div>

### Private Fields (`#`)

```js
class BankAccount {
  #balance = 0 // Private field

  deposit(amount) {
    if (amount > 0) this.#balance += amount
  }

  getBalance() {
    return this.#balance
  }

  #validateAmount(amount) {
    // Private method
    return amount > 0
  }
}

let account = new BankAccount()
account.deposit(100)
console.log(account.getBalance()) // 100
// account.#balance // SyntaxError!
```

</div>

<div>

### Protected Convention (`_`)

```js
class CoffeeMachine {
  _waterAmount = 0 // Protected by convention

  get waterAmount() {
    return this._waterAmount
  }

  set waterAmount(value) {
    if (value < 0) value = 0
    this._waterAmount = value
  }
}

class AutoCoffeeMachine extends CoffeeMachine {
  brew() {
    // Can access _waterAmount
    console.log(`Brewing with ${this._waterAmount}ml`)
  }
}
```

- `_` prefix is a convention, not enforced
- `#` is truly private (ES2022+)

</div>
</div>

---
hideInToc: true
---

# Extending Built-in Classes

<div grid="~ cols-2" gap="4">

<div>

### Extending Native Classes

```js
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0
  }

  first() {
    return this[0]
  }

  last() {
    return this[this.length - 1]
  }
}

let arr = new PowerArray(1, 2, 3, 4, 5)
console.log(arr.isEmpty()) // false
console.log(arr.first()) // 1
console.log(arr.last()) // 5
console.log(arr.filter((n) => n > 2)) // PowerArray
```

</div>

<div>

### Symbol.species

```js
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0
  }

  // Return regular Array for built-in methods
  static get [Symbol.species]() {
    return Array
  }
}

let arr = new PowerArray(1, 2, 3)
let filtered = arr.filter((n) => n > 1)

console.log(filtered instanceof PowerArray) // false
console.log(filtered instanceof Array) // true
```

- `Symbol.species` controls return type
- Built-in methods use it for new instances

</div>
</div>

---
hideInToc: true
---

# Class Checking: `instanceof` and Mixins

<div grid="~ cols-2" gap="4">

<div>

### instanceof Operator

```js
class Animal {}
class Dog extends Animal {}

let dog = new Dog()

console.log(dog instanceof Dog) // true
console.log(dog instanceof Animal) // true
console.log(dog instanceof Object) // true

// Custom instanceof with Symbol.hasInstance
class MyClass {
  static [Symbol.hasInstance](obj) {
    return obj.canFly
  }
}

let bird = { canFly: true }
console.log(bird instanceof MyClass) // true
```

</div>

<div>

### Mixins Pattern

```js
let sayMixin = {
  say(phrase) {
    console.log(phrase)
  },
}

let greetMixin = {
  greet() {
    this.say(`Hello, ${this.name}!`)
  },
}

class User {
  constructor(name) {
    this.name = name
  }
}

Object.assign(User.prototype, sayMixin, greetMixin)

let user = new User('Alice')
user.greet() // Hello, Alice!
```

- Mixins add methods without inheritance
- Use `Object.assign` to copy methods

</div>
</div>
