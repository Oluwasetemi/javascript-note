---
layout: center
transition: slide-up
hideInToc: true
---

# Objects

<TocIcon />

<div mt-2 />

- <a @click="$slidev.nav.go($nav.currentPage+1)">basics of objects</a>
- <a @click="$slidev.nav.go($nav.currentPage+7)">referencing and copying</a>
- <a @click="$slidev.nav.go($nav.currentPage+9)">object methods, `this` keyword</a>
- <a @click="$slidev.nav.go($nav.currentPage+11)">constructor functions, operator `new`</a>
- <a @click="$slidev.nav.go($nav.currentPage+13)">optional chaining</a>
- <a @click="$slidev.nav.go($nav.currentPage+15)">symbol type and Object to primitive conversion</a>
- <a @click="$slidev.nav.go($nav.currentPage+17)">object properties configuration</a>
- <a @click="$slidev.nav.go($nav.currentPage+19)">flags(writable, enumerable, configurable) and descriptors</a>
- <a @click="$slidev.nav.go($nav.currentPage+21)">property getters and setters</a>

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

```js {monaco-run}{autorun: false}
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

```js {monaco-run}{autorun: false}
let school = {
  name: 'AltSchool',
  sector: 'Education',
  'takes users': true,
}
console.log(school)
```

If you've noticed, we’ve been adding a comma after the last property in the list. This is called a "trailing" or "hanging" comma. It's not mandatory, but it makes it easier to add, remove, or rearrange properties since all the lines follow the same format.

---
hideInToc: true
---

# Square brackets

<div></div>

In JavaScript, property names with spaces or special characters need to be enclosed in quotes, and dot notation doesn't work with those kinds of properties. You must use square brackets instead. Here's a corrected version:

Note: For multi-word properties (or properties with spaces or special characters), dot notation won't work because JavaScript will treat them as invalid. In such cases, you need to use square bracket notation.

```js {monaco-run}{autorun: false}
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

```js{monaco-run}{autorun: false}
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

```js{monaco-run}{autorun: false}
let school = prompt("Which tech school are you attending?", "");

let college = {
  [school]: "AltSchool Africa",
};

console.log(college)
```

```js{monaco-run}{autorun: false}
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

```js{monaco-run}{autorun: false}
const getUser = (name, age) => {
  return {
    name: name,
    age: age,
  };
};
let user = getUser("Setemi", 40);
console.log(user.name);
```

Checking the block scope above, we have the same words representing the values and the property key.
Instead of <kbd>name:name</kbd> we can just write <kbd>name</kbd>, like this:

```js{monaco-run}{autorun: false}
const getUser = (name, age) => {
  return {
    name,
    age,
  };
};
let user = getUser("Setemi", 40);
console.log(user.age);
```

---
hideInToc: true
---

# Property names limitations

There are limitations to name we can use for a variable, names like <kbd>for</kbd>, <kbd>let</kbd>, <kbd>return</kbd> are language-reserved but for an object property, there's no such restriction:

```js{monaco-run}{autorun: false}
let obj = {
  for: 3,
  let: 1,
  return: 9
};

console.log( obj.for + obj.let + obj.return );
```

---
hideInToc: true
---

# Property existence test, "in" operator

<div></div>
It's possible in object to know if a property really exists, and there won't be an error if the property doesn't exist, instead it will return <kbd>undefined</kbd>.

```js{monaco-run}{autorun: false}
let user = {name: "Setemi", age: 40};
console.log( user.noSuchProperty === undefined );
```

We can also make use of a special operator <kbd>in</kbd>

```js{monaco-run}{autorun: false}
let user = {name: "Setemi", age: 40};
console.log( "age" in user );
console.log( "height" in user );
```

When using the <kbd>in</kbd> keyword there must be a property name in a quoted string on the left side of <kbd>in</kbd>. Sometimes the property exists and it stores <kbd>undefined</kbd> which is why we can bring in the <kbd>in</kbd> method.

```js{monaco-run}{autorun: false}
let userDetails = {
  name: undefined
};
console.log( userDetails.name );
console.log( "name" in userDetails );
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

```js{monaco-run}{autorun: false}
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

```js{monaco-run}{autorun: false}
let footballers = {
  "2": "Messi",
  "3": "Mbappe",
  "1": "Ronaldo"
};

for (let footballer in footballers) {
  console.log(footballer);
  console.log( footballers[footballer] );
}
```

---
hideInToc: true
---

# Contd.

<div></div>
In cases where you don't want the num to get rearranged, you can make the number non-integer by adding a <kbd>+</kbd> sign before the numbers.

```js{monaco-run}{autorun: false}
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

```js{monaco-run}{autorun:false}
// 'obj1' references an empty object
let obj1 = {};
// 'obj2' is assigned the same reference as 'obj1'
let obj2 = obj1;
console.log(obj1 == obj2);
console.log(obj1 === obj2);
```

Take a look at this:

```js{monaco-run}{autorun:false}
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

```js{monaco-run}{autorun:false}
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

# Object.assign

<div></div>

The <kbd>Object.assign()</kbd> method is used to copy the values of all enumerable properties from one or more source <kbd>objects</kbd> to a target object.
Let's break down how it works:

```js
Object.assign(dest, ...sources)
```

Let's break the syntax down:

- The first argument is the target object.
- Further arguments is a list of source <kbd>objects</kbd>.
  How does this works? It copies the properties of all source <kbd>objects</kbd> into the target object, and then returns it as the result.

```js{monaco-run}{autorun:false}
// Original person object
let person = { name: "Setemi Ojo" };

 // Create an empty object for age
let age = {};
// Use Object.assign to copy the 'age' property into the 'person' object
Object.assign(age, { age: 40 });
// Now merge the 'age' object into 'person' to add the age property
Object.assign(person, age);
console.log(person);
```

Note: If the property name already exists, it gets overwritten.
We can also use <kbd>Object.assign()</kbd> method to perform a simple object clone.

---
hideInToc: true
---

# Deep cloning

<div></div>

To copy a property from a nested object within another object, you can use a cloning loop.
This allows you to access and duplicate the specific property you need while keeping the structure intact.

```js{monaco-run}{autorun:false}
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

```js{monaco-run}{autorun:false}
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
