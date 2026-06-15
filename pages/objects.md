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
However, we also have the non-primitive type, where we can literally say that everything in JavaScript falls under this category, and that is <kbd>Objects</kbd>.

Objects are used to store keyed collections of various data and more complex entities, arranged in <kbd>key: value</kbd> pairs inside curly braces `{}`.
You can access any property within an Object using dot notation <kbd>.</kbd> or square brackets `[]`.

An <kbd>Objects</kbd> can be created using these syntaxes:

```js
//object constructor
let user = new Object()

//object literal
let user = {}
```

In the code above, we've just created two empty <kbd>objects</kbd>.

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

A property has a key which can also be referred to as <kbd>name</kbd> or <kbd>identifier</kbd> after which the colon comes in <kbd>:</kbd>, and lastly a value to the right of it. In a property, the value at the right hand side is been stored inside the key on the left hand side.

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
Also, we can add a boolean property:
```js
school.isAdmitting = true;
```

We can also remove a property using the <kbd>delete</kbd> operator:

```js
delete school.name
```

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
Instead of <kbd>name:name</kbd> we can just write <kbd>name</kbd>, like this:

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

There are limitations to name we can use for a variable, names like <kbd>for</kbd>, <kbd>let</kbd>, <kbd>return</kbd> are language-reserved but for an object property, there's no such restriction:

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

It's possible in object to know if a property really exists, and there won't be an error if the property doesn't exist, instead it will return <kbd>undefined</kbd>.

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

When using the <kbd>in</kbd> keyword there must be a property name in a quoted string on the left side of <kbd>in</kbd>. Sometimes the property exists and it stores <kbd>undefined</kbd> which is why we can bring in the <kbd>in</kbd> method.

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
To iterates over all enumerable string properties of an object, we have the <kbd>for..in</kbd> loop.

```js
for (key in object) {
  // executes the body for each key among object properties
}
```

Let's use the <kbd>for..in</kbd> loop to output all the <kbd>user</kbd> properties.

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
In cases where you don't want the num to get rearranged, you can make the number non-integer by adding a <kbd>+</kbd> sign before the numbers.

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
You might have seen it somewhere that variables declared with <kbd>const</kbd> can’t be reassigned or redeclared. However, <kbd>objects</kbd> behave differently. 
Although an object declared with <kbd>const</kbd> cannot be reassigned to a new object, its contents (properties) can still be modified.

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
---

`Object.assign`

The <kbd>Object.assign()</kbd> method is used to copy the values of all enumerable properties from one or more source <kbd>objects</kbd> to a target object.
Let's break down how it works:

```js
Object.assign(dest, ...sources)
```

<div class="text-sm">

Let's break the syntax down:

- The first argument is the target object.
- Further arguments is a list of source <kbd>objects</kbd>.
  How does this works? It copies the properties of all source <kbd>objects</kbd> into the target object, and then returns it as the result.

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

To copy a property from a nested object within another object, you can use a cloning loop.
This allows you to access and duplicate the specific property you need while keeping the structure intact.

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

In the code above the <kbd>student</kbd> and <kbd>school</kbd> object are yet to be separated. To achieve a separation between both objects, we should
use <kbd>cloning loop</kbd> to examines each value of <kbd>student`[key]`</kbd> and, if it's an object, copy its structure - this is called <kbd>deep cloning</kbd>
or <kbd>structured cloning</kbd>.

---
hideInToc: true
---

# structuredClone()

<div></div>

This methods clones the <kbd>object</kbd> with all nested properties.
In the code below <kbd>structuredClone()</kbd> will creates a deep clone of the leader object, meaning that both leader and clone are completely separate objects in memory, including nested objects.

```js {monaco-run} {autorun: false}
let leader = {
  name: "Setemi Ojo",
  school: {
    department: "Science",
    course: "Computer Science"
  }
};

let clone = structuredClone(leader);
console.log( leader === clone );


leader.school.department = "Science";
console.log(clone.school.department);
```

---
hideInToc: true
---

# Object Methods, `this` Keyword

<div></div>

<div text-sm>

An object method is simply a function stored as a property of an object. You can define methods directly inside an object literal using the shorthand method syntax.

</div>

```js {monaco-run} {autorun: false}
let user = {
  name: "Setemi",
  greet() { return "Hello, I am " + user.name }
}
console.log(user.greet())
```

<div text-sm>

A method can also reference its own object using the <kbd>this</kbd> keyword. Inside a method, <kbd>this</kbd> refers to the object that called the method.

</div>

```js {monaco-run} {autorun: false}
let user = {
  name: "Setemi",age: 40,
  greet() { return `Hello, I am ${this.name} and I am ${this.age}` }
}
console.log(user.greet())
```

---
hideInToc: true
---

# Contd. — Arrow Functions and `this`

<div></div>

Arrow functions do not have their own <kbd>this</kbd>. They inherit <kbd>this</kbd> from the surrounding lexical context, which makes them unsuitable as object methods when you need to reference the object.

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

Use regular functions or shorthand methods for object methods that need <kbd>this</kbd>. Reserve arrow functions for callbacks inside those methods.

---
hideInToc: true
---

# Constructor Functions, Operator `new`

<div></div>

<div text-sm> 

Constructor functions are regular functions used as blueprints for creating multiple similar objects. By convention, their names start with an uppercase letter. When called with the <kbd>new</kbd> operator, JavaScript automatically creates a new empty object, assigns it to <kbd>this</kbd>, and returns it.

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

The steps when <kbd>new User(...)</kbd> is called:
1. A new empty object is created and assigned to <kbd>this</kbd>
2. The function body runs, adding properties to <kbd>this</kbd>
3. The value of <kbd>this</kbd> is returned automatically

</div>

---
hideInToc: true
---

# Contd. — `new.target` and Return in Constructors

<div></div>

Inside a function, you can check whether it was called with <kbd>new</kbd> using the special <kbd>new.target</kbd> property. If the function was called normally, <kbd>new.target</kbd> is <kbd>undefined</kbd>.

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

Constructors usually have no explicit <kbd>return</kbd> statement — they return <kbd>this</kbd> automatically. If a constructor does return an object, that object is returned instead. If it returns a primitive, it is ignored and <kbd>this</kbd> is still returned.

---
hideInToc: true
---

# Optional Chaining `?.`

<div></div>

The optional chaining operator <kbd>?.</kbd> stops evaluation and returns <kbd>undefined</kbd> if the value before it is <kbd>null</kbd> or <kbd>undefined</kbd>, instead of throwing an error. This makes accessing deeply nested properties safe without writing long `if` chains.

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

# Contd. — `?.()` and `?.[]`

<div></div>

<div text-sm>

Optional chaining also works for method calls using <kbd>?.()</kbd> and for computed property access using <kbd>?.[]</kbd>.

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

<kbd>?.</kbd> is for reading only — you cannot use it on the left side of an assignment.

---
hideInToc: true
class: text-sm
---

# Symbol Type

<div></div>

A <kbd>Symbol</kbd> is a primitive type whose value is a guaranteed unique identifier. Even two symbols created with the same description are never equal. Symbols are often used as object property keys when you need to ensure a key will never accidentally clash with another property name.

```js {monaco-run} {autorun: false}
let id1 = Symbol("id")
let id2 = Symbol("id")

console.log(id1 === id2, typeof id1, id1.description);    // // false — always unique, "symbol" "id" 
```

Symbol-keyed properties are hidden from <kbd>for..in</kbd> loops and <kbd>Object.keys()</kbd>, making them ideal for metadata that should not appear in normal enumeration.

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

When JavaScript needs a primitive value from an object (for arithmetic, string concatenation, or comparison), it calls a conversion method. The engine uses a <kbd>hint</kbd> — either `"string"`, `"number"`, or `"default"` — to decide which method to call.

You can customise this behaviour with <kbd>Symbol.toPrimitive</kbd> (preferred) or the classic <kbd>valueOf</kbd> / <kbd>toString</kbd> pair.

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

Without <kbd>Symbol.toPrimitive</kbd>, JavaScript tries <kbd>valueOf()</kbd> first (for number/default hints), then <kbd>toString()</kbd>. All objects inherit a default <kbd>toString()</kbd> that returns `"[object Object]"` — override it to provide a meaningful string representation.

---
hideInToc: true
class: 'text-sm'
---

# Object Properties Configuration

<div></div>

Every object property has three hidden boolean flags alongside its value. By default, all three are <kbd>true</kbd> for properties created the normal way.

You can inspect these flags with <kbd>Object.getOwnPropertyDescriptor()</kbd> and change them with <kbd>Object.defineProperty()</kbd>.

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

Use <kbd>Object.freeze(obj)</kbd> to make all properties non-writable and non-configurable at once, and <kbd>Object.seal(obj)</kbd> to prevent adding or removing properties while still allowing edits.

---
hideInToc: true
class: 'text-sm'
---

# Property Getters and Setters

<div></div>

In addition to regular <kbd>data properties</kbd> (which store a value directly), objects can have <kbd>accessor properties</kbd> — virtual properties defined by a <kbd>get</kbd> function that is called on read and a <kbd>set</kbd> function that is called on write.

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

You can also define accessor properties using <kbd>Object.defineProperty()</kbd> with a <kbd>get</kbd> and <kbd>set</kbd> descriptor. This is useful for adding accessors to existing objects.

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
