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

```js {monaco-run} {autorun: false}
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

```js {monaco-run} {autorun: false}
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
  eat: function () { console.log('Eating') },
}
const canWalk = {
  walk: function () { console.log('Walking') },
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

```js {monaco-run} {autorun: false}
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
class: 'text-sm'
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

```js {monaco-run} {autorun: false}
let animal = { eats: true }
let rabbit = { jumps: true }
rabbit.__proto__ = animal

console.log(rabbit.eats, rabbit.jumps) // true (inherited)
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
class: 'text-sm'
---

# Native Prototypes and Prototype Methods

<div grid="~ cols-2" gap="4">

<div>

### Native Prototype Chain

- All built-in objects have prototypes
- `Object.prototype` is at the top of the chain
- Arrays: `arr → Array.prototype → Object.prototype → null`
- Functions: `func → Function.prototype → Object.prototype → null`

```js {monaco-run} {autorun: false}
let arr = [1, 2, 3]
// console.log(arr.__proto__ === Array.prototype)
// console.log(arr.__proto__.__proto__ === Object.prototype)

console.log(arr.toString()) // "1,2,3"
// Uses Array.prototype.toString
```

</div>

<div>

### Prototype Methods

```js {monaco-run} {autorun: false}
// Object.create - create with specific prototype
let animal = { eats: true }
let rabbit = Object.create(animal)

// Object.getPrototypeOf / setPrototypeOf
Object.getPrototypeOf(rabbit) === animal // true

// Object.keys - own keys only, Object.values / Object.entries

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

```js {monaco-run} {autorun: false}
class User {
  constructor(name) {
    this.name = name
  }

  sayHi() { console.log(`Hello, ${this.name}!`) }

  get name() { return this._name }

  set name(value) { this._name = value }
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

```js {monaco-run} {autorun: false}
console.log(typeof User) // "function"
console.log(User === User.prototype.constructor) // true
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

```js {monaco-run} {autorun: false}
class Animal {
  constructor(name) {
    this.name = name
  }
  speak() { console.log(`${this.name} makes a sound.`) }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name) // Must call super() first
    this.breed = breed
  }
  speak() { console.log(`${this.name} barks.`) }
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
cat.speak()// Whiskers makes a sound.// Whiskers meows.
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

```js {monaco-run} {autorun: false}
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
class: 'text-sm'
---

# Private and Protected Properties and Methods

<div grid="~ cols-2" gap="4">

<div>

### Private Fields (`#`)

```js {monaco-run} {autorun: false}
class BankAccount {
  #balance = 0 // Private field

  deposit(amount) {
    if (amount > 0) this.#balance += amount
  }

  getBalance() {
    return this.#balance
  }

  // Private method
  #validateAmount(amount) {
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

```js {monaco-run} {autorun: false}
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

### `Symbol.species`

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

```js {monaco-run} {autorun: false}
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

```js {monaco-run} {autorun: false}
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

---
hideInToc: true
transition: slide-up
---

# Assignment or Class Activity

- Build a `Shape` prototype chain manually with `Object.create`, then redo it with `class`
- Create a `Vehicle` → `Car` class hierarchy using `extends` and `super`
- Add a static factory method and a private field to one of your classes
- Extend the native `Map` class with a custom method
- Implement a mixin that adds logging to any class via `Object.assign`

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
name: Exercises — Prototype Chain Q1 & Q2
---

# Exercises: Prototypal Inheritance

<div class="grid grid-cols-2 gap-4">
<div>

**Q1.** Create a plain object `vehicle` with a property `hasWheels: true`. Create a second object `car` and set its `__proto__` to `vehicle`. Confirm `car.hasWheels` is inherited, then add `car.brand = 'Toyota'` and log both `Object.keys(car)` and a `for..in` loop over `car` — explain the difference in a comment.

```js {monaco-run} {autorun: false}
let vehicle = { hasWheels: true }
let car = {}
/*
 * set car's prototype to vehicle
 *
 * add brand to car
 *
 * log Object.keys(car) vs for..in over car
 *
 */
```

</div>
<div>

**Q2.** Write a constructor function `Animal(name)` that sets `this.name` and adds an `eats = true` property to `Animal.prototype`. Create two instances and prove that `eats` is shared on the prototype (changing `Animal.prototype.eats` affects both instances) while `name` is unique per instance.

```js {monaco-run} {autorun: false}
function Animal(name) {
  //
}
/*
 * add eats to Animal.prototype
 */
let dog = new Animal('Rex')
let cat = new Animal('Whiskers')
/*
 * change Animal.prototype.eats and log dog.eats, cat.eats
 * then log dog.name, cat.name to show they differ
 */
```

</div>
</div>

---
hideInToc: true
name: Exercises — Native Prototypes Q3
---

**Q3.** Use `Object.create(proto)` to build a small prototype chain three levels deep: `livingThing` → `animal` → `dog`, where each level adds one new property (`alive: true`, `warmBlooded: true`, `barks: true`). Create a `dog` instance and log all three inherited properties, then use `Object.getPrototypeOf()` twice to walk back up to `livingThing` and confirm it.

```js {monaco-run} {autorun: false}
const livingThing = { alive: true }
/*
 * const animal = Object.create(livingThing) with warmBlooded: true
 *
 * const dog = Object.create(animal) with barks: true
 *
 * log dog.alive, dog.warmBlooded, dog.barks
 *
 * walk up the chain with Object.getPrototypeOf twice
 *
 */
```

---
hideInToc: true
name: Exercises — Class Syntax Q4 & Q5
---

# Exercises: Class Basics

<div class="grid grid-cols-2 gap-4">
<div>

**Q4.** Write a `Rectangle` class with a constructor taking `width` and `height`, a regular method `area()`, and a getter `perimeter` (computed, not stored). Confirm `typeof Rectangle === 'function'` and that `area` lives on `Rectangle.prototype`, not on the instance.

```js {monaco-run} {autorun: false}
class Rectangle {
  /*
   *
   *
   *
   *
   */
}
const r = new Rectangle(4, 5)
console.log(r.area())        // 20
console.log(r.perimeter)     // 18
console.log(typeof Rectangle)                         // "function"
console.log(r.hasOwnProperty('area'))                 // false
console.log(Rectangle.prototype.hasOwnProperty('area')) // true
```

</div>
<div>

**Q5.** Rewrite the `Rectangle` class from Q4 as a **constructor function** with methods attached to `Rectangle.prototype` instead of using `class`. Confirm both versions behave identically for `area()` and produce the same `constructor` reference.

```js {monaco-run} {autorun: false}
function RectangleFn(width, height) {
  /*
   *
   */
}
/*
 * attach area to RectangleFn.prototype
 *
 */
const r = new RectangleFn(4, 5)
console.log(r.area()) // 20
console.log(RectangleFn.prototype.constructor === RectangleFn) // true
```

</div>
</div>

---
hideInToc: true
name: Exercises — Inheritance Q6 & Q7
---

# Exercises: Class Inheritance

<div class="grid grid-cols-2 gap-4">
<div>

**Q6.** Write a `Vehicle` class with `constructor(make, year)` and a `describe()` method. Write a `Car` class that `extends Vehicle`, calls `super()`, adds a `doors` property, and **overrides** `describe()` while still calling `super.describe()` inside it.

```js {monaco-run} {autorun: false}
class Vehicle {
  /*
   *
   *
   */
}
class Car extends Vehicle {
  /*
   *
   *
   *
   */
}
const car = new Car('Toyota', 2024, 4)
car.describe()
// e.g. "2024 Toyota" then "This car has 4 doors"
```

</div>
<div>

**Q7.** Predict, then verify: what happens if you try to use `this` in a `Car` subclass constructor **before** calling `super()`? Wrap the attempt in a `try/catch` and log the error message. Then fix it by moving `super()` to the top.

```js {monaco-run} {autorun: false}
class Vehicle {
  constructor(make) {
    this.make = make
  }
}
class BrokenCar extends Vehicle {
  constructor(make, doors) {
    /*
     * try using this.doors = doors BEFORE calling super(make)
     * wrap in try/catch and log the error
     */
  }
}
/*
 * now write FixedCar with super() called first
 */
```

</div>
</div>

---
hideInToc: true
name: Exercises — Static Members Q8
---

**Q8.** Write a `Temperature` class with a private-free static counter `static instancesCreated = 0` that increments every time a new instance is made, plus a static method `Temperature.compare(a, b)` for sorting instances by their `celsius` value. Create three instances, sort them, and log the final `instancesCreated` count.

```js {monaco-run} {autorun: false}
class Temperature {
  /*
   * static instancesCreated = 0
   *
   * constructor(celsius) { ... increment static counter ... }
   *
   * static compare(a, b) { ... }
   *
   */
}
const readings = [new Temperature(30), new Temperature(10), new Temperature(20)]
readings.sort(Temperature.compare)
console.log(readings.map(r => r.celsius)) // [10, 20, 30]
console.log(Temperature.instancesCreated) // 3
```

---
hideInToc: true
name: Exercises — Private Fields Q9
---

**Q9.** Write a `PasswordVault` class with a truly private field `#password` set in the constructor, a public method `checkPassword(guess)` that compares it, and a public method `resetPassword(oldPass, newPass)` that only updates `#password` if `oldPass` matches. Prove that `vault.#password` throws a `SyntaxError` if accessed directly (explain this in a comment instead of running it, since it fails at parse time).

```js {monaco-run} {autorun: false}
class PasswordVault {
  /*
   * #password
   *
   * constructor(password) { ... }
   *
   * checkPassword(guess) { ... }
   *
   * resetPassword(oldPass, newPass) { ... }
   *
   */
}
const vault = new PasswordVault('secret123')
console.log(vault.checkPassword('wrong'))      // false
console.log(vault.checkPassword('secret123'))  // true
console.log(vault.resetPassword('secret123', 'newpass'))
console.log(vault.checkPassword('newpass'))    // true
// vault.#password would throw SyntaxError — explain why in a comment
```

---
hideInToc: true
name: Exercises — Mixins and instanceof Q10
---

**Q10.** Create two mixin objects, `serializableMixin` (adds a `toJSON()` method) and `comparableMixin` (adds an `equals(other)` method comparing `JSON.stringify` output). Apply both to a `Product` class using `Object.assign(Product.prototype, ...)`, then confirm `product instanceof Product` still works normally after mixing in.

```js {monaco-run} {autorun: false}
const serializableMixin = {
  /*
   * toJSON() { ... }
   */
}
const comparableMixin = {
  /*
   * equals(other) { ... }
   */
}
class Product {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
}
/*
 * Object.assign(Product.prototype, serializableMixin, comparableMixin)
 */
const p1 = new Product('Keyboard', 50)
const p2 = new Product('Keyboard', 50)
console.log(p1.equals(p2))          // true
console.log(JSON.stringify(p1))     // uses toJSON
console.log(p1 instanceof Product)  // true
```

---
hideInToc: true
name: LeetCode Prototypes & Classes — Intro
layout: center
---

# <span class="text-gradient">LeetCode-Style</span> Challenges

Problems that combine **prototypes, classes, inheritance, and mixins** — the tools of this chapter.

<div mt-4 text-sm op70>
Each problem has one clean solution using the patterns you just learned.
</div>

---
hideInToc: true
name: LeetCode Prototypes & Classes — Problem 1
---

# Problem 1 — Implement `myInstanceOf` <span text-yellow text-sm>Medium</span>

Write `myInstanceOf(obj, Constructor)` that replicates the `instanceof` operator by manually walking the prototype chain with `Object.getPrototypeOf`, **without** using the real `instanceof` keyword.

```js {monaco-run} {autorun: false}
function myInstanceOf(obj, Constructor) {
  /*
   *
   *
   *
   *
   *
   */
}
class Animal {}
class Dog extends Animal {}
const dog = new Dog()

console.log(myInstanceOf(dog, Dog))     // true
console.log(myInstanceOf(dog, Animal))  // true
console.log(myInstanceOf(dog, Array))   // false
```

<div text-xs op60 mt-2>Concepts: prototype chain traversal, <code>Object.getPrototypeOf</code>, <code>Constructor.prototype</code></div>

---
hideInToc: true
name: LeetCode Prototypes & Classes — Problem 2
---

# Problem 2 — Build `myNew` <span text-yellow text-sm>Medium</span>

Write a function `myNew(Constructor, ...args)` that replicates what the `new` keyword does internally: create an object linked to `Constructor.prototype`, run `Constructor` with `this` bound to it, and return the object (or the constructor's returned object if it returns one).

```js {monaco-run} {autorun: false}
function myNew(Constructor, ...args) {
  /*
   *
   *
   *
   *
   *
   */
}
function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.greet = function () {
  return `Hi, I'm ${this.name}`
}

const p = myNew(Person, 'Ada', 21)
console.log(p.name, p.age)   // "Ada" 21
console.log(p.greet())       // "Hi, I'm Ada"
console.log(p instanceof Person) // true
```

<div text-xs op60 mt-2>Concepts: <code>Object.create</code>, <code>.call()</code>/<code>.apply()</code>, constructor return semantics</div>

---
hideInToc: true
name: LeetCode Prototypes & Classes — Problem 3
---

# Problem 3 — Class-Based LRU Cache <span text-yellow text-sm>Medium</span>

Implement an `LRUCache` class with `constructor(capacity)`, `get(key)`, and `put(key, value)`. When capacity is exceeded, evict the **least recently used** entry. Use a `Map`, whose insertion order you can leverage for recency tracking.

```js {monaco-run} {autorun: false}
class LRUCache {
  /*
   *
   *
   *
   *
   *
   *
   */
}
const cache = new LRUCache(2)
cache.put(1, 'a')
cache.put(2, 'b')
console.log(cache.get(1))   // "a" — 1 is now most recent
cache.put(3, 'c')           // evicts 2 (least recently used)
console.log(cache.get(2))   // undefined
console.log(cache.get(3))   // "c"
```

<div text-xs op60 mt-2>Concepts: classes, private-ish state via fields, <code>Map</code> ordering, eviction logic</div>

---
hideInToc: true
name: LeetCode Prototypes & Classes — Problem 4
---

# Problem 4 — Deep Inheritance Chain Sum <span text-green text-sm>Easy</span>

Given a chain of classes `A extends B extends C`, where each class defines a static `value`, write `sumStaticChain(Klass)` that walks up the **static** prototype chain (`Object.getPrototypeOf` on the class itself) and sums every `value` it finds.

```js {monaco-run} {autorun: false}
class C { static value = 10 }
class B extends C { static value = 20 }
class A extends B { static value = 30 }

function sumStaticChain(Klass) {
  /*
   *
   *
   *
   *
   */
}
console.log(sumStaticChain(A))  // 60 (30 + 20 + 10)
console.log(sumStaticChain(B))  // 30 (20 + 10)
```

<div text-xs op60 mt-2>Concepts: static inheritance, <code>Object.getPrototypeOf</code> on constructors (not instances), loop termination at <code>Function.prototype</code></div>

---
hideInToc: true
name: LeetCode Prototypes & Classes — Problem 5
---

# Problem 5 — Composable Mixin Applier <span text-yellow text-sm>Medium</span>

Write a function `applyMixins(BaseClass, ...mixins)` that returns a **new class** extending `BaseClass` with all mixin methods merged onto its prototype — without mutating the original `BaseClass` or any mixin object.

```js {monaco-run} {autorun: false}
function applyMixins(BaseClass, ...mixins) {
  /*
   *
   *
   *
   *
   *
   */
}
const flyMixin = { fly() { return `${this.name} is flying` } }
const swimMixin = { swim() { return `${this.name} is swimming` } }

class Animal {
  constructor(name) { this.name = name }
}

const Duck = applyMixins(Animal, flyMixin, swimMixin)
const donald = new Duck('Donald')
console.log(donald.fly())    // "Donald is flying"
console.log(donald.swim())   // "Donald is swimming"
console.log(donald instanceof Animal) // true
console.log(Animal.prototype.fly)     // undefined — original untouched
```

<div text-xs op60 mt-2>Concepts: dynamic <code>class ... extends</code>, <code>Object.assign</code> on a subclass prototype, non-mutating composition</div>
