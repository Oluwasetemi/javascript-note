---
layout: center
transition: slide-up
hideInToc: true
---

# Objects

<TocIcon />

<div mt-2 />

- <a @click="$slidev.nav.go($nav.currentPage+1)">basics of objects</a>
- <a @click="$slidev.nav.go($nav.currentPage+13)">referencing and copying</a>
- <a @click="$slidev.nav.go($nav.currentPage+20)">object methods, `this` keyword</a>
- <a @click="$slidev.nav.go($nav.currentPage+22)">constructor functions, operator `new`</a>
- <a @click="$slidev.nav.go($nav.currentPage+24)">optional chaining</a>
- <a @click="$slidev.nav.go($nav.currentPage+26)">symbol type and Object to primitive conversion</a>
- <a @click="$slidev.nav.go($nav.currentPage+28)">object properties configuration</a>
- <a @click="$slidev.nav.go($nav.currentPage+29)">flags(writable, enumerable, configurable) and descriptors</a>
- <a @click="$slidev.nav.go($nav.currentPage+31)">property getters and setters</a>

---
hideInToc: true
---

# Basics of Objects

<div></div>

In data types, we have primitive and non-primitive types. If you recall, primitive data types are those that contain a single value.
However, we also have the non-primitive type, where we can literally say that everything in JavaScript falls under this category, and that is `Objects`.

Objects are used to store keyed collections of various data and more complex entities, arranged in `key: value` pairs inside curly braces `{}`.
You can access any property within an Object using dot notation `.` or square brackets `[]`.

An `Objects` can be created using these syntaxes:

```js
//object constructor
let user = new Object()

//object literal
let user = {}
```

In the code above, we've just created two empty `objects`.

---
hideInToc: true
---

# Literals and properties

<div></div>

Using the object literal syntax, let's create an object that has its properties filled.

```js
let school = {
  //key     value
  name: 'AltSchool',
  sector: 'Education',
}
```

A property has a key which can also be referred to as `name` or `identifier` after which the colon comes in `:`, and lastly a value to the right of it. In a property, the value at the right hand side is been stored inside the key on the left hand side.

```js {monaco-run} {autorun: false}
let school = {
  //lets get the property values of the object:
  name: 'AltSchool',
  sector: 'Education',
}
console.log(school.name)
console.log(school.sector)
```

---
hideInToc: true
---

# Contd.

<div></div>

Also, we can add a boolean property and We can also remove a property using the `delete` operator:

<div grid="~ cols-2" gap="2">

```js
school.isAdmitting = true;
```

```js
delete school.name
```

</div>

We can use multiword property names, but to achieve this we have to wrap the name in a quote:

```js {monaco-run} {autorun: false}
let school = {
  name: 'AltSchool',
  sector: 'Education',
  'takes users': true,
}
// console.log(school)
```

If you've noticed, we’ve been adding a comma after the last property in the list. This is called a "trailing" or "hanging" comma. It's not mandatory, but it makes it easier to add, remove, or rearrange properties since all the lines follow the same format.

---
hideInToc: true
---

# Square brackets

<div></div>

In JavaScript, property names with spaces or special characters need to be enclosed in quotes, and dot notation doesn't work with those kinds of properties. You must use square brackets instead. Here's a corrected version:

Note: For multi-word properties (or properties with spaces or special characters), dot notation won't work because JavaScript will treat them as invalid. In such cases, you need to use square bracket notation.

```js {monaco-run} {autorun: false}
let school = {
  name: 'AltSchool',
  sector: 'Education',
  'takes users': true,
}
console.log(school['takes users'])
// this will throw error
// console.log( school."takes users");
```

---
hideInToc: true
---

# Contd.

<div></div>

Also, square brackets provide a way to access property names dynamically, which literal strings in dot notation do not allow. This means you can use variables or expressions within square brackets to obtain the property name.

```js {monaco-run} {autorun: false}
let school = {
  name: "Setemi Ojo",
  department: "Engineering",
}
let key = prompt("What do you want to know about the user?", "department");
console.log([school[key]]);
```

---
hideInToc: true
---

# Computed properties

<div></div>

When creating an object in JavaScript, we can put an expression in square brackets, and this means that the property name will be taken from what's inside the square bracket.

```js {monaco-run} {autorun: false}
let school = prompt("Which tech school are you attending?", "");

let college = {
  [school]: "AltSchool Africa",
};

// console.log(college)
```

```js {monaco-run} {autorun: false}
let school = prompt("Which school are you attending?", "AltSchool");
let sector = {};

// take property name from the school variable
sector[school] = "AltSchool Africa";
```

---
hideInToc: true
---

# Property value shorthand

<div></div>

Sometimes, we use existing values for property name. Instead of repeating this we can implement the shorthand property.

```js {monaco-run} {autorun: false}
const getUser = (name, age) => {
  return { name: name, age: age, };
};
let user = getUser("Setemi", 40);
console.log(user.name);
```

Checking the block scope above, we have the same words representing the values and the property key.
Instead of `name:name` we can just write `name`, like this:

```js {monaco-run} {autorun: false}
const getUser = (name, age) => {
  return { name, age, };
};
let user = getUser("Setemi", 40);
console.log(user.age);
```

---
hideInToc: true
---

# Property names limitations

There are limitations to name we can use for a variable, names like `for`, `let`, `return` are language-reserved but for an object property, there's no such restriction:

```js {monaco-run} {autorun: false}
let obj = {
  for: 3,
  let: 1,
  return: 9
};

console.log( obj.for + obj.let + obj.return );
```

---
hideInToc: true
class: text-sm
---

# Property existence test, `in` operator, `Object.hasOwn`

It's possible in object to know if a property really exists, and there won't be an error if the property doesn't exist, instead it will return `undefined`.

```js {monaco-run} {autorun: false}
let user = {name: "Setemi", age: 40};
console.log( user.noSuchProperty === undefined );
```

<div grid="~ cols-2" gap="2">

<section>


```js {monaco-run} {autorun: false}
let user = {name: "Setemi", age: 40};
console.log( "age" in user );
console.log( "height" in user );
```

The `Object.hasOwn()` static method returns true if the specified object has the indicated property as its own property. If the property is inherited, or does not exist, the method returns false.

</section>

<section>

When using the `in` keyword there must be a property name in a quoted string on the left side of `in`. Sometimes the property exists and it stores `undefined` which is why we can bring in the `in` method.

```js {monaco-run} {autorun: false}
let userDetails = { name: undefined };
console.log(userDetails.name, "name" in userDetails);
```

</section>

</div>

```js {monaco-run} {autorun: false}
const object = { prop: "exists", };
console.log(Object.hasOwn(object, "prop"));
```

---
hideInToc: true
---

# The "for..in" loop

<div></div>

To iterates over all enumerable string properties of an object, we have the `for..in` loop.

```js
for (key in object) {
  // executes the body for each key among object properties
}
```

Let's use the `for..in` loop to output all the `user` properties.

```js {monaco-run} {autorun: false}
let user = {
  name: "Vinicius",
  age: 24,
  playsFootball: true
};

for (let key in user) {
  console.log( key );
  console.log( user[key] );
}
```

---
hideInToc: true
---

# Contd.

When you loop over an objects, we get all properties in creation order but, the irony the case when the key is an integer.

```js {monaco-run} {autorun: false}
let footballers = {
  "2": "Messi",
  "3": "Mbappe",
  "1": "Ronaldo"
};

for (let footballer in footballers) {
  // console.log(footballer);
  // console.log( footballers[footballer] );
}
```

---
hideInToc: true
---

# Contd.

<div></div>

In cases where you don't want the num to get rearranged, you can make the number non-integer by adding a `+` sign before the numbers.

```js {monaco-run} {autorun: false}
let footballers = {
  "+2": "Messi",
  "+3": "Mbappe",
  "+1": "Ronaldo"
}
for (let footballer in footballers) {
console.log(+footballer);
console.log( footballers[footballer] );
};
```

---
hideInToc: true
---

# Referencing and Copying

<div></div>

In JavaScript, copying values is straightforward with primitive data types like strings and numbers, but it’s different with objects.
Objects are stored and copied by reference, meaning that a variable assigned to an object doesn’t hold the object itself but rather its
memory address.

Imagine you have a piece of paper (a variable) with an address written on it (the reference to an object).

When you give someone a copy of this paper, they don’t get a new house; they just get the address. If they go to that address and make changes,
they’re modifying the same house.

In JavaScript, copying an object works like this. If you assign an object to another variable, both variables still point to the same object in memory.
Changes made through one variable will reflect in the other because they both "live at" the same address.

However, with simple values like numbers or strings, JavaScript actually gives each variable a fresh piece of paper with the value written directly on it.
So when you copy it, you get an entirely separate value, not just a shared reference.

---
hideInToc: true
---

# Comparison by reference

<div></div>

If two objects reference the same object, they are considered equal. However, if they reference different objects, they are not considered equal, even if their contents are identical.

```js {monaco-run} {autorun: false}
// 'obj1' references an empty object
let obj1 = {};
// 'obj2' is assigned the same reference as 'obj1'
let obj2 = obj1;
console.log(obj1 == obj2);
console.log(obj1 === obj2);
```

Take a look at this:

```js {monaco-run} {autorun: false}
let obj1 = {};      // 'obj1' references a new empty object
let obj2 = {};      // 'obj2' references another new empty object
console.log(obj1 == obj2);  // false, because both variables reference different objects
```

---
hideInToc: true
---

# Contd.

<div></div>
You might have seen it somewhere that variables declared with `const` can’t be reassigned or redeclared. However, `objects` behave differently. 
Although an object declared with `const` cannot be reassigned to a new object, its contents (properties) can still be modified.

This is because the const keyword only protects the variable's reference to the object, not the object's internal structure.
The variable will always point to the same object in memory, but the object itself can have its properties added, updated, or deleted.

Take a look at this:

```js {monaco-run} {autorun: false}
const user = {
  name: "Setemi Ojo"
}

user.name = "Oluwasetemi Ojo";
console.log(user.name);
```

---
hideInToc: true
---

# Cloning and merging, Object.assign

To duplicate an object, one way is to manually create a new object and copy over the properties from the original object.
This approach involves iterating over each property and copying them individually, which creates a shallow copy.

```js
const person = {
  name: 'Setemi Ojo',
  age: 40,
}
// Create a new empty object to store the copied properties
let copy = {}

// Iterate over each property in the 'person' object
for (let key in person) {
  // Copy each property from 'person' to 'copy' on the primitive level
  copy[key] = person[key]
}
// Modify the 'name' property in the 'copy' object
copy.name = 'Oluwasetemi Ojo'

// Display the 'name' property of the original 'person' object
console.log(person.name)
```

---
hideInToc: true
class: 'text-sm'
---

`Object.assign`

The `Object.assign()` method is used to copy the values of all enumerable properties from one or more source `objects` to a target object. Let's break down how it works:

```js
Object.assign(dest, ...sources)
```

<div class="text-sm">

Let's break the syntax down:

- The first argument is the target object.
- Further arguments is a list of source `objects`.

How does this works? It copies the properties of all source `objects` into the target object, and then returns it as the result.

</div>

<div grid="~ cols-2" gap="2">

```js {monaco-run} {autorun: false}
let person = { name: "Setemi Ojo" };
 // Create an empty object for age
let age = {};
// Use Object.assign to copy the 'age' property into the 'person' object
Object.assign(age, { age: 40 });
// Now merge the 'age' object into 'person' to add the age property
Object.assign(person, age);
console.log(JSON.stringify(person));
```

<div>

Note: If the property name already exists, it gets overwritten.
We can also use `Object.assign()` method to perform a simple object clone.

</div>

</div>


---
hideInToc: true
---

# Deep cloning

<div></div>

To copy a property from a nested object within another object, you can use a cloning loop or `Object.assign`. This allows you to access and duplicate the specific property you need while keeping the structure intact.

```js {monaco-run} {autorun: false}
let student = {
  name: "Setemi Ojo",
  school: {
    department: "Science",
    course: "Computer Science"
  }
};

let clone = Object.assign({}, student);
console.log( student.school === clone.school );

student.school.department = "Science";
console.log(clone.school.department);
```

In the code above the `student` and `school` object are yet to be separated. So its clone seems to be a new Object but the `clone.school` is still referencing the `student.school`. To achieve a separation between both objects, we should
use `cloning loop` to examines each value of `student` `[key]` and, if it's an object that is nested, copy its structure cleanly - this is called `deep cloning` or `structured cloning`.

---
hideInToc: true
---

# structuredClone()

<div></div>

This methods clones the `object` with all nested properties. In the code below `structuredClone()` will creates a deep clone of the leader object, meaning that both leader and clone are completely separate objects in memory, including nested objects.

```js {monaco-run} {autorun: false}
let leader = {
  name: "Setemi Ojo",
  school: { department: "Science", course: "Computer Science" }
};

let clone = structuredClone(leader);
// console.log(leader === clone);
// console.log(leader.school === clone.school);

leader.school.department = "Science"; // Update on leader does not affect the cloned
console.log(clone.school.department);
```

---
hideInToc: true
class: 'text-sm'
---

# Object Methods, `this` Keyword

<div></div>

<div text-sm>

An object method is simply a function stored as a property of an object. You can define methods directly inside an object literal using the shorthand method syntax.

</div>

```js {monaco-run} {autorun: false}
let user = {
  name: "Setemi",
  greet: function() { return "Hello, I am " + user.name }
  // greet() { return "Hello, I am " + user.name }
}
console.log(user.greet())
```

<div text-sm>

A method can also reference its own object using the `this` keyword. Inside a method, `this` refers to the object that called the method.

</div>

```js {monaco-run} {autorun: false}
let user = {
  name: "Setemi", age: 40,
  greet() { return `Hello, I am ${this.name} and I am ${this.age}` }
}
console.log(user.greet())
```

---
hideInToc: true
---

# Contd. — Arrow Functions and `this`

<div></div>

Arrow functions do not have their own `this`. They inherit `this` from the surrounding lexical context, which makes them unsuitable as object methods when you need to reference the object.

<div grid="~ cols-2" gap="2">

```js {monaco-run} {autorun: false}
// Regular method — 'this' works as expected
let counter = {
  count: 0,
  increment() {
    this.count++
    console.log(this.count)
  }
}
counter.increment()
counter.increment()
```

```js {monaco-run} {autorun: false}
// Arrow function — 'this' is undefined in strict mode
// or refers to the outer scope (window in browsers)
let counter = {
  count: 0,
  increment: () => {
    // 'this' is NOT the counter object here
    console.log(this) // undefined or global
  }
}
counter.increment()
```

</div>

Use regular functions or shorthand methods for object methods that need `this`. Reserve arrow functions for callbacks inside those methods.

---
hideInToc: true
---

# Constructor Functions, Operator `new`

<div></div>

<div text-sm> 

Constructor functions are regular functions used as blueprints for creating multiple similar objects. By convention, their names start with an uppercase letter. When called with the `new` operator, JavaScript automatically creates a new empty object, assigns it to `this`, and returns it.

</div>

```js {monaco-run} {autorun: false}
function User(name, age) {
  this.name = name
  this.age = age
  this.greet = function() {
    return `Hi, I am ${this.name}`
  }
}
let user1 = new User("Setemi", 40)
let user2 = new User("Vinicius", 24)
console.log(user1.greet(), user2.name, user1 instanceof User); 
```

<div text-sm>

The steps when `new User(...)` is called:

1. A new empty object is created and assigned to `this`
2. The function body runs, adding properties to `this`
3. The value of `this` is returned automatically

</div>

---
hideInToc: true
---

# Contd. — `new.target` and Return in Constructors

<div></div>

Inside a function, you can check whether it was called with `new` using the special `new.target` property. If the function was called normally, `new.target` is `undefined`.

```js {monaco-run} {autorun: false}
function User(name) {
  if (!new.target) {
    return new User(name) // auto-correct a missing 'new'
  }
  this.name = name
}

let u1 = new User("Setemi")
let u2 = User("Vinicius") // called without new, still works
console.log(u1.name, u2.name)
```

Constructors usually have no explicit `return` statement — they return `this` automatically. If a constructor does return an object, that object is returned instead. If it returns a primitive, it is ignored and `this` is still returned.

---
hideInToc: true
---

# Optional Chaining `?.`

<div></div>

The optional chaining operator `?` stops evaluation and returns `undefined` if the value before it is `null` or `undefined`, instead of throwing an error. This makes accessing deeply nested properties safe without writing long `if` chains.

<div grid="~ cols-2" gap="2">

```js {monaco-run} {autorun: false}
// Without optional chaining — throws if user is null
let user = null
// console.log(user.address.city) // TypeError!

// With optional chaining — safely returns undefined
console.log(user?.address?.city) // undefined
```

```js {monaco-run} {autorun: false}
let user = {
  name: "Setemi",
  address: {
    city: "Lagos",
    country: "Nigeria"
  }
}

console.log(user?.address?.city)    // "Lagos"
console.log(user?.phone?.number)    // undefined (no error)
```

</div>

---
hideInToc: true
---

# Contd. — `?.()` - Using with a method and `?.[]` - Using with an Array

<div></div>

<div text-sm>

Optional chaining also works for method calls using `?.()` and for computed property access using `?.[]`.

</div>

```js {monaco-run} {autorun: false}
let user = {
  name: "Setemi",
  admin() { return "I am admin" }
}
let guest = { name: "Vinicius" }
// ?.() — call method only if it exists
console.log(user.admin?.())   // "I am admin"
console.log(guest.admin?.())  // undefined (no error)
```

```js {monaco-run} {autorun: false}
let key = "name"
let user = { name: "Setemi" }
let empty = null
// ?.[] — access computed property safely
console.log(user?.[key], empty?.[key])   // "Setemi" // undefined (no error)
```

`?.` is for reading only — you cannot use it on the left side of an assignment.

---
hideInToc: true
class: text-sm
---

# Symbol Type

<div></div>

A `Symbol` is a primitive type whose value is a guaranteed unique identifier. Even two symbols created with the same description are never equal. Symbols are often used as object property keys when you need to ensure a key will never accidentally clash with another property name.

```js {monaco-run} {autorun: false}
let id1 = Symbol("id")
let id2 = Symbol("id")

console.log(id1 === id2, typeof id1, id1.description);    // // false — always unique, "symbol" "id" 
```

Symbol-keyed properties are hidden from `for..in` loops and `Object.keys()`, making them ideal for metadata that should not appear in normal enumeration.

```js {monaco-run} {autorun: false}
let id = Symbol("id")
let user = { name: "Setemi", [id]: 123 }        // symbol key — computed property syntax

console.log(user[id], Object.keys(user))           // 123 // ["name"] — symbol hidden
for (let key in user) console.log(key) // only "name"
```

---
hideInToc: true
class: 'text-sm'
---

# Object to Primitive Conversion

<div></div>

When JavaScript needs a primitive value from an object (for arithmetic, string concatenation, or comparison), it calls a conversion method. The engine uses a `hint` — either `"string"`, `"number"`, or `"default"` — to decide which method to call.

You can customise this behaviour with `Symbol.toPrimitive` (preferred) or the classic `valueOf` / `toString` pair.

```js {monaco-run} {autorun: false}
let money = {
  amount: 100, currency: "USD",
  [Symbol.toPrimitive](hint) {
    if (hint === "string") return `${this.amount} ${this.currency}`
    if (hint === "number") return this.amount
    return this.amount // "default"
  }
}
console.log(`${money}`, +money, money+50)   // "100 USD"  (string hint) // 100        (number hint) // 150        (default hint)
```

Without `Symbol.toPrimitive`, JavaScript tries `valueOf()` first (for number/default hints), then `toString()`. All objects inherit a default `toString()` that returns `"[object Object]"` — override it to provide a meaningful string representation.

---
hideInToc: true
class: 'text-sm'
---

# Object Properties Configuration

<div></div>

Every object property has three hidden boolean flags alongside its value. By default, all three are `true` for properties created the normal way.

You can inspect these flags with `Object.getOwnPropertyDescriptor()` and change them with `Object.defineProperty()`.

```js {monaco-run} {autorun: false}
let user = { name: "Setemi" }

let descriptor = Object.getOwnPropertyDescriptor(user, "name")
console.log(JSON.stringify(descriptor, null, 2)) // { "value": "Setemi", "writable": true, "enumerable": true, "configurable": true }
```

```js {monaco-run} {autorun: false}
let user = {}
Object.defineProperty(user, "id", {
  value: 42,
  writable: false, enumerable: false, configurable: false
})
console.log(user.id)           // 42
user.id = 99                   // silently ignored in non-strict mode
console.log(user.id, Object.keys(user))           // still 42  // [] — not enumerable
```

---
hideInToc: true
---

# Flags: `writable`, `enumerable`, `configurable`

<div></div>

Each flag controls a specific kind of access to a property:

<div grid="~ cols-3" gap="2" class="text-sm">

<section>

**`writable: false`**

The value cannot be changed. Assignment is silently ignored in non-strict mode and throws in strict mode.

```js {monaco-run} {autorun: false}
let obj = {}
Object.defineProperty(obj, "PI", {
  value: 3.14159,
  writable: false
})
obj.PI = 0
console.log(obj.PI) // 3.14159
```

</section>

<section>

<div class="mb-10">

**`enumerable: false`**

The property is hidden from `for..in` and `Object.keys()`.

</div>

```js {monaco-run} {autorun: false} 
let user = { name: "Setemi" }
Object.defineProperty(user, "_id", {
  value: 1,
  enumerable: false
})
console.log(Object.keys(user))
// ["name"] — _id hidden
```

</section>

<section>

**`configurable: false`**

The property cannot be deleted and its descriptor cannot be changed again.

```js {monaco-run} {autorun: false}
let obj = {}
Object.defineProperty(obj, "type", {
  value: "admin",
  configurable: false
})
delete obj.type         // silently ignored
console.log(obj.type)   // "admin"
```

</section>

</div>

Use `Object.freeze(obj)` to make all properties non-writable and non-configurable at once, and `Object.seal(obj)` to prevent adding or removing properties while still allowing edits.

---
hideInToc: true
class: 'text-sm'
---

# Property Getters and Setters

<div></div>

In addition to regular `data properties` (which store a value directly), objects can have `accessor properties` — virtual properties defined by a `get` function that is called on read and a `set` function that is called on write.

```js {monaco-run} {autorun: false}
let user = {
  firstName: "Oluwasetemi", lastName: "Ojo",
  get fullName() { return `${this.firstName} ${this.lastName}` },
  set fullName(value) {
    let parts = value.split(" ")
    this.firstName = parts[0]
    this.lastName = parts[1]
  }
}

console.log(user.fullName)       // "Oluwasetemi Ojo"
user.fullName = "Vinicius Junior"
console.log(user.firstName, user.lastName)      // "Vinicius"
```

From the outside, getters and setters look exactly like regular properties — no parentheses needed on read.

---
hideInToc: true
class: 'text-sm'
---

# Contd. — Getters and Setters via `defineProperty`

<div></div>

You can also define accessor properties using `Object.defineProperty()` with a `get` and `set` descriptor. This is useful for adding accessors to existing objects.

```js {monaco-run} {autorun: false}
function User(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}
Object.defineProperty(User.prototype, "fullName", {
  get() { return `${this.firstName} ${this.lastName}` },
  set(value) {
    let [first, last] = value.split(" ")
    this.firstName = first; this.lastName = last
  },
  enumerable: true, configurable: true,
})

let user = new User("Setemi", "Ojo"); console.log(user.fullName)   // "Setemi Ojo"
user.fullName = "Vinicius Junior"; console.log(user.firstName)     // "Vinicius"
```

A common pattern is using a getter to compute a derived value and a setter to validate input before storing it — keeping the validation logic in one place.

---
hideInToc: true
transition: slide-up
---

# Assignment or Class Activity

- Create an object literal for a `course` with at least 4 properties, then add and delete one
- Write a function that takes a `key` and an object and safely reads a nested value with optional chaining
- Clone an object two ways: shallow (`Object.assign`) and deep (`structuredClone`), then prove the difference
- Build a `BankAccount` constructor function with a `deposit` method using `this`
- Add a `fullName` getter/setter pair to a plain object

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
name: Exercises — Object Basics Q1
---

# Exercises: Object Basics

**Q1.** Create an object `mentee` with properties `name`, `track`, and `cohort`. Add a new property `isGraduated` set to `false`, then delete the `cohort` property. Log the object after each step.

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
name: Exercises — Object Basics Q2
---

**Q2.** Create an object with a multiword property name (e.g. `'years of experience'`). Show that dot notation fails to access it and that square-bracket notation succeeds. Explain in a comment why dot notation breaks here.

```js {monaco-run} {autorun: false}
const engineer = {
  name: 'Setemi',
  'years of experience': 7,
}
/*
 * try dot notation here (comment it out if it errors)
 *
 * use square brackets here
 *
 */
```

---
hideInToc: true
name: Exercises — Dynamic & Computed Q3 & Q4
---

# Exercises: Dynamic and Computed Properties

<div class="grid grid-cols-2 gap-4">
<div>

**Q3.** Write a function `getField(obj, fieldName)` that uses square-bracket notation to dynamically return the value of any property name passed in as a string.

```js {monaco-run} {autorun: false}
function getField(obj, fieldName) {
  /*
   *
   *
   */
}
const project = { name: 'Chunk8', stack: 'Next.js' }
console.log(getField(project, 'name'))   // "Chunk8"
console.log(getField(project, 'stack'))  // "Next.js"
```

</div>
<div>

**Q4.** Write a function `buildConfig(envName, value)` that returns an object where the key is computed from `envName` (e.g. `envName = "PORT"` → `{ PORT: value }`) using computed property syntax `[ ]`.

```js {monaco-run} {autorun: false}
function buildConfig(envName, value) {
  /*
   *
   *
   */
}
console.log(buildConfig('PORT', 3000))     // { PORT: 3000 }
console.log(buildConfig('NODE_ENV', 'dev')) // { NODE_ENV: "dev" }
```

</div>
</div>

---
hideInToc: true
name: Exercises — Shorthand Q5
---

# Exercises: Property Shorthand

**Q5.** Write a function `createRepo(name, stars, language)` that returns an object using **property value shorthand** (not `name: name`). Then write a second version, `createRepoVerbose`, the long way, and confirm both produce identical objects with `JSON.stringify`.

```js {monaco-run} {autorun: false}
function createRepo(name, stars, language) {
  /*
   * shorthand version
   *
   */
}
function createRepoVerbose(name, stars, language) {
  /*
   * long version
   *
   */
}
console.log(JSON.stringify(createRepo('repo-score', 42, 'TypeScript')))
console.log(JSON.stringify(createRepoVerbose('repo-score', 42, 'TypeScript')))
```

---
hideInToc: true
name: Exercises — Property Existence Q6 & Q7
---

# Exercises: Property Existence

<div class="grid grid-cols-2 gap-4">
<div>

**Q6.** Given the object below, write checks using `in`, `Object.hasOwn()`, and `=== undefined` to test for the `middleName` property (which exists but is `undefined`). Explain why only some of these checks correctly detect it.

```js {monaco-run} {autorun: false}
const user = { firstName: 'Setemi', middleName: undefined }
/*
 * check with 'in'
 *
 * check with Object.hasOwn
 *
 * check with === undefined
 *
 */
```

</div>
<div>

**Q7.** Write a function `hasAllFields(obj, fields)` that takes an object and an array of required field names, returning `true` only if **every** field exists on the object (use `Object.hasOwn` in a loop or `.every`).

```js {monaco-run} {autorun: false}
function hasAllFields(obj, fields) {
  /*
   *
   *
   */
}
const student = { name: 'Ada', email: 'ada@altschool.com' }
console.log(hasAllFields(student, ['name', 'email']))          // true
console.log(hasAllFields(student, ['name', 'email', 'phone']))  // false
```

</div>
</div>

---
hideInToc: true
name: Exercises — for..in Q8 & Q9
---

# Exercises: The for..in Loop

<div class="grid grid-cols-2 gap-4">
<div>

**Q8.** Write a function `sumNumericProps(obj)` that uses a `for..in` loop to sum only the properties whose values are numbers, skipping strings and booleans.

```js {monaco-run} {autorun: false}
function sumNumericProps(obj) {
  /*
   *
   *
   *
   */
}
console.log(sumNumericProps({ age: 40, name: 'Setemi', score: 10, active: true }))
// 50
```

</div>
<div>

**Q9.** Given the object below with integer-like string keys, log the keys using `for..in` and observe the ordering. Then rewrite the keys with a leading `+` so the original insertion order is preserved. Explain the difference in a comment.

```js {monaco-run} {autorun: false}
const rankings = { '10': 'Bronze', '2': 'Gold', '5': 'Silver' }
/*
 * loop and log keys here
 *
 *
 * now rewrite with '+' prefixed keys and loop again
 *
 *
 */
```

</div>
</div>

---
hideInToc: true
name: Exercises — Referencing and Copying Q10 & Q11
---

# Exercises: Referencing and Copying

<div class="grid grid-cols-2 gap-4">
<div>

**Q10.** Predict the output of each `console.log` **before** running the code, then verify. Explain in a comment why objects behave differently from primitives here.

```js {monaco-run} {autorun: false}
let a = 5
let b = a
b = 10
console.log(a, b) // ?

let obj1 = { count: 5 }
let obj2 = obj1
obj2.count = 10
console.log(obj1.count, obj2.count) // ?
```

</div>
<div>

**Q11.** Write a function `isSameReference(objA, objB)` that returns `true` only if both variables point to the **exact same object** in memory (not just equal contents).

```js {monaco-run} {autorun: false}
function isSameReference(objA, objB) {
  /*
   *
   */
}
const settings = { theme: 'dark' }
const settingsAlias = settings
const settingsCopy = { theme: 'dark' }

console.log(isSameReference(settings, settingsAlias)) // true
console.log(isSameReference(settings, settingsCopy))  // false
```

</div>
</div>

---
hideInToc: true
name: Exercises — const Objects Q12
---

**Q12.** Declare a `const project` object with a `status` property. Show that you **can** update `project.status` but **cannot** reassign `project` to a brand-new object (wrap the reassignment attempt in a `try/catch` and log the error message).

```js {monaco-run} {autorun: false}
const project = { name: 'SafeReport', status: 'in-progress' }
/*
 * update project.status directly here — should work
 *
 *
 * try reassigning project to a new object inside try/catch — should throw
 *
 *
 */
```

---
hideInToc: true
name: Exercises — Cloning Q13 & Q14
---

# Exercises: Cloning and Merging

<div class="grid grid-cols-2 gap-4">
<div>

**Q13.** Write `shallowClone(obj)` two ways: manually with a `for..in` loop, and with `Object.assign`. Confirm both produce a new top-level object but still share references to any **nested** object inside.

```js {monaco-run} {autorun: false}
function shallowCloneManual(obj) {
  //
}
function shallowCloneAssign(obj) {
  //
}
const original = { name: 'Chunk8', meta: { version: 1 } }
const clone1 = shallowCloneManual(original)
const clone2 = shallowCloneAssign(original)
console.log(clone1 === original)          // false
console.log(clone1.meta === original.meta) // true — still shared!
console.log(clone2.meta === original.meta) // true — still shared!
```

</div>
<div>

**Q14.** Write `mergeSettings(defaults, overrides)` using `Object.assign` that merges two config objects, with `overrides` taking priority for any duplicate keys. Do **not** mutate either input object.

```js {monaco-run} {autorun: false}
function mergeSettings(defaults, overrides) {
  /*
   *
   */
}
const defaults = { theme: 'light', fontSize: 14, autosave: true }
const overrides = { theme: 'dark', fontSize: 16 }
console.log(mergeSettings(defaults, overrides)) // { theme: 'dark', fontSize: 16, autosave: true }
console.log(defaults.theme) // "light" — untouched
```

</div>
</div>

---
hideInToc: true
name: Exercises — Deep Cloning Q15
---

**Q15.** Given a nested `user` object, prove that `Object.assign({}, user)` produces a **shallow** clone (the nested `address` object is still shared) but `structuredClone(user)` produces a **true deep clone** (mutating the original's nested object does not affect the clone).

```js {monaco-run} {autorun: false}
const user = {
  name: 'Oluwasetemi',
  address: { city: 'Kingston', country: 'Jamaica' },
}
/*
 * shallow clone with Object.assign, then mutate user.address.city
 * and show the shallow clone changed too
 *
 *
 *
 * deep clone with structuredClone, then mutate user.address.city
 * again and show the deep clone did NOT change
 *
 *
 */
```

---
hideInToc: true
name: Exercises — Methods and this Q16 & Q17
---

# Exercises: Object Methods and `this`

<div class="grid grid-cols-2 gap-4">
<div>

**Q16.** Create a `stopwatch` object with a `seconds` property starting at `0` and a regular method `tick()` that increments `seconds` by 1 and returns it. Call `tick()` three times.

```js {monaco-run} {autorun: false}
const stopwatch = {
  seconds: 0,
  /*
   * tick() method here
   */
}
console.log(stopwatch.tick()) // 1
console.log(stopwatch.tick()) // 2
console.log(stopwatch.tick()) // 3
```

</div>
<div>

**Q17.** Rewrite `tick` from Q16 as an **arrow function** property instead of a shorthand method. Run it and explain in a comment why `this.seconds` no longer works as expected.

```js {monaco-run} {autorun: false}
const stopwatch = {
  seconds: 0,
  tick: () => {
    // 
  }
}
stopwatch.tick()
```

</div>
</div>

---
hideInToc: true
name: Exercises — Constructor Functions Q18 & Q19
---

# Exercises: Constructor Functions

<div class="grid grid-cols-2 gap-4">
<div>

**Q18.** Write a `BankAccount(owner, balance)` constructor function with a `deposit(amount)` method that increases `this.balance` and returns the new balance. Create two separate accounts and prove they don't share state.

```js {monaco-run} {autorun: false}
function BankAccount(owner, balance) {
  /*
   *
   */
}
const acc1 = new BankAccount('Setemi', 100)
const acc2 = new BankAccount('Dennis', 50)
console.log(acc1.deposit(50)) // 150
console.log(acc2.balance)     // 50 — unaffected
```

</div>
<div>

**Q19.** Write a `Course(title)` constructor that uses `new.target` to auto-correct a missing `new` keyword (like the `User` example), so that calling `Course('Rust')` without `new` still returns a properly constructed object.

```js {monaco-run} {autorun: false}
function Course(title) {
  /*
   *
   */
}
const c1 = new Course('Rust')
const c2 = Course('WebAssembly') // called without new
console.log(c1.title, c2.title)
console.log(c1 instanceof Course, c2 instanceof Course)
```

</div>
</div>

---
hideInToc: true
name: Exercises — Optional Chaining Q20
---

**Q20.** Write a function `getCity(user)` that safely reads `user.address.city` using optional chaining, returning `"Unknown"` via `??` if the value is missing at any level. Test it against a user with a full address, a user with no address, and `null`.

```js {monaco-run} {autorun: false}
function getCity(user) {
  /*
   *
   */
}
console.log(getCity({ address: { city: 'Kingston' } })) // "Kingston"
console.log(getCity({ name: 'Guest' }))                  // "Unknown"
console.log(getCity(null))                               // "Unknown"
```

---
hideInToc: true
name: Exercises — Symbols Q21
---

**Q21.** Create an object `user` with a normal `name` property and a `Symbol('id')`-keyed property holding a unique ID. Show that `Object.keys(user)` and a `for..in` loop both skip the symbol-keyed property, but you can still read it directly with the symbol reference.

```js {monaco-run} {autorun: false}
const idSymbol = Symbol('id')
const user = {
  name: 'Setemi',
  /*
   * add the symbol-keyed property here
   */
}
/*
 * log Object.keys(user)
 * loop with for..in and log each key
 * log the value at the symbol key directly
 */
```

---
hideInToc: true
name: Exercises — Object to Primitive Q22
---

**Q22.** Create an object `duration` with `hours` and `minutes` properties, and implement `Symbol.toPrimitive` so that: string hint returns `"Xh Ym"`, number hint returns the total minutes, and default hint returns the same as number hint.

```js {monaco-run} {autorun: false}
const duration = {
  hours: 2,
  minutes: 30,
  /*
   * [Symbol.toPrimitive](hint) { ... }
   *
   *
   *
   *
   */
}
console.log(`${duration}`)   // "2h 30m"
console.log(+duration)       // 150
console.log(duration + 0)    // 150
```

---
hideInToc: true
name: Exercises — Property Descriptors Q23 & Q24
---

# Exercises: Property Descriptors

<div class="grid grid-cols-2 gap-4">
<div>

**Q23.** Create an object `apiConfig` with a `baseUrl` property. Use `Object.defineProperty` to make it `writable: false` and `enumerable: false`. Prove that reassignment is silently ignored and that the property is hidden from `Object.keys`.

```js {monaco-run} {autorun: false}
const apiConfig = {}
/*
 * define baseUrl with defineProperty here
 *
 *
 */
apiConfig.baseUrl = 'https://changed.com' // should be ignored
console.log(apiConfig.baseUrl)   // original value
console.log(Object.keys(apiConfig)) // []
```

</div>
<div>

**Q24.** Write a function `lockObject(obj)` that uses `Object.freeze` to make an object fully immutable. Verify that after freezing, you cannot add new properties, change existing ones, or delete any.

```js {monaco-run} {autorun: false}
function lockObject(obj) {
  /*
   *
   */
}
const settings = lockObject({ theme: 'dark' })
settings.theme = 'light'    // ignored
settings.fontSize = 14      // ignored
delete settings.theme       // ignored
console.log(settings)       // { theme: 'dark' }
```

</div>
</div>

---
hideInToc: true
name: Exercises — Getters and Setters Q25
---

**Q25.** Create a `temperature` object storing `celsius` internally, with a getter `fahrenheit` that computes `celsius * 9/5 + 32` and a setter `fahrenheit` that converts an incoming Fahrenheit value back into `celsius`. Test reading and writing through `fahrenheit`.

```js {monaco-run} {autorun: false}
const temperature = {
  celsius: 25,
  /*
   * get fahrenheit() { ... }
   * set fahrenheit(value) { ... }
   *
   *
   *
   *
   */
}
console.log(temperature.fahrenheit)  // 77
temperature.fahrenheit = 32
console.log(temperature.celsius)     // 0
```

---
hideInToc: true
name: LeetCode Objects — Intro
layout: center
---

# <span class="text-gradient">LeetCode-Style</span> Challenges

Problems that combine **object literals, cloning, descriptors, and this-binding** — the tools of this chapter.

<div mt-4 text-sm op70>
Each problem has one clean solution using the patterns you just learned.
</div>

---
hideInToc: true
name: LeetCode Objects — Problem 1
---

# Problem 1 — Deep Equal <span text-green text-sm>Easy</span>

Write `deepEqual(objA, objB)` that returns `true` if two objects have the same keys and values recursively (including nested objects), **without** using `JSON.stringify`.

```js {monaco-run} {autorun: false}
function deepEqual(objA, objB) {
  /*
   *
   *
   *
   *
   *
   */
}
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })) // true
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })) // false
console.log(deepEqual({ a: 1 }, { a: 1, b: 2 }))                     // false
```

<div text-xs op60 mt-2>Concepts: recursion, <code>Object.keys</code>, typeof checks, nested object traversal</div>

---
hideInToc: true
name: LeetCode Objects — Problem 2
---

# Problem 2 — Object Diff <span text-yellow text-sm>Medium</span>

Write `diffObjects(oldObj, newObj)` that returns an object describing what changed: `{ added: {...}, removed: {...}, changed: {...} }`, comparing only top-level keys.

```js {monaco-run} {autorun: false}
function diffObjects(oldObj, newObj) {
  /*
   *
   *
   *
   *
   *
   */
}
console.log(diffObjects(
  { name: 'Setemi', role: 'Engineer', country: 'Jamaica' },
  { name: 'Setemi', role: 'Senior Engineer', city: 'Kingston' }
))
// { added: { city: 'Kingston' }, removed: { country: 'Jamaica' }, changed: { role: { from: 'Engineer', to: 'Senior Engineer' } } }
```

<div text-xs op60 mt-2>Concepts: <code>Object.keys</code>, <code>Set</code> for key comparison, building a result object</div>

---
hideInToc: true
name: LeetCode Objects — Problem 3
---

# Problem 3 — Deep Freeze <span text-yellow text-sm>Medium</span>

`Object.freeze` only freezes the top level. Write `deepFreeze(obj)` that recursively freezes an object and all of its nested objects, then returns it.

```js {monaco-run} {autorun: false}
function deepFreeze(obj) {
  /*
   *
   *
   *
   *
   *
   */
}
const config = deepFreeze({ api: { baseUrl: 'https://x.com', retries: 3 }, debug: false })
config.api.baseUrl = 'https://changed.com' // should be ignored
config.debug = true                        // should be ignored
console.log(config.api.baseUrl, config.debug) // "https://x.com" false
console.log(Object.isFrozen(config.api))       // true
```

<div text-xs op60 mt-2>Concepts: recursion, <code>Object.freeze</code>, <code>Object.values</code>, type checking for nested objects</div>

---
hideInToc: true
name: LeetCode Objects — Problem 4
---

# Problem 4 — Private Counter Factory <span text-green text-sm>Easy</span>

Write `createCounter()` that returns an object with `increment()`, `decrement()`, and `value` as a **getter** (not a plain property), keeping the internal count truly private via closure.

```js {monaco-run} {autorun: false}
function createCounter() {
  /*
   *
   *
   *
   *
   *
   */
}
const counter = createCounter()
counter.increment()
counter.increment()
counter.decrement()
console.log(counter.value)  // 1
console.log(counter.count)  // undefined — not directly accessible
```

<div text-xs op60 mt-2>Concepts: closures, getters, encapsulation, object methods</div>

---
hideInToc: true
name: LeetCode Objects — Problem 5
---

# Problem 5 — Schema Validator <span text-yellow text-sm>Medium</span>

Write `validateSchema(obj, schema)` where `schema` maps each key to an expected `typeof` string (e.g. `{ name: 'string', age: 'number' }`). Return an array of error messages for missing keys or type mismatches; return an empty array if valid.

```js {monaco-run} {autorun: false}
function validateSchema(obj, schema) {
  /*
   *
   *
   *
   *
   *
   *
   */
}
const schema = { name: 'string', age: 'number', isAdmin: 'boolean' }
console.log(validateSchema({ name: 'Ada', age: 21, isAdmin: false }, schema))
// []
console.log(validateSchema({ name: 'Ada', age: '21' }, schema))
// ['age: expected number, got string', 'isAdmin: missing property']
```

<div text-xs op60 mt-2>Concepts: <code>Object.hasOwn</code>, <code>typeof</code>, <code>Object.entries</code>, building an errors array</div>
