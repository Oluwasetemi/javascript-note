---
layout: center
transition: slide-up
hideInToc: true
---

# Objects

<div mt-2 />

- basics of objects
- referencing and copying
- object methods, `this` keyword
- constructor functions, operator `new`
- optional chaining
- symbol type and Object to primitive conversion
- object properties configuration
- flags(writable, enumerable, configurable) and descriptors
- property getters and setters

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

In the code above, we've just created two empty objects.

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
alert(school.name)
alert(school.sector)
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
  'takes students': true,
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
  'takes students': true,
}
alert(school['takes students'])
// this will throw error
// alert( school."takes students");
```

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
alert([school[key]]);
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
alert(user.name);
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
alert(user.age);
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

alert( obj.for + obj.let + obj.return );
```

---
hideInToc: true
---

# Property existence test, "in" operator

<div></div>
It's possible in object to know if a property really exists, and there won't be an error if the property doesn't exist, instead it will return <kbd>undefined</kbd>.

```js{monaco-run}{autorun: false}
let user = {name: "Setemi", age: 40};
alert( user.noSuchProperty === undefined );
```

We can also make use of a special operator <kbd>in</kbd>

```js{monaco-run}{autorun: false}
let tutor = {name: "Setemi", age: 40};
alert( "age" in tutor );
alert( "height" in tutor );
```

When using the <kbd>in</kbd> keyword there must be a property name in a quoted string on the left side of <kbd>in</kbd>. Sometimes the property exists and it stores <kbd>undefined</kbd> which is why we can bring in the <kbd>in</kbd> method.

```js{monaco-run}{autorun: false}
let studentDetails = {
  name: undefined
};
alert( studentDetails.name );
alert( "name" in studentDetails );
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
  alert( key );
  console.log( user[key] );
}
```

---
hideInToc: true
---

# Contd.

When you loop over an objects, we get all properties in creation order but, the irony the case when the key is an integer.

```js{monaco-run}{autorun: false}
let user = {
  "2": "Messi",
  "3": "Mbappe",
  "1": "Ronaldo"
};

for (let num in user) {
  console.log(num);
  console.log( user[num] );
}
```

---

# Contd.

<div></div>
In cases where you don't want the num to get rearranged, you can make the number non-integer by adding a <kbd>+</kbd> sign before the numbers.
```js{monaco-run}{autorun: false}
let user = {
  "+2": "Messi",
  "+3": "Mbappe",
  "+1": "Ronaldo"
};

for (let num in user) {
alert(+num);
alert( user[num] );
}

```

```
