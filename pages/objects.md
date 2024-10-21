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

Objects are used to store keyed collections of various data and more complex entities, arranged in <kbd>key: value</kbd> pairs inside curly braces <kbd>{}</kbd>.
You can access any property within an Object using dot notation <kbd>.</kbd> or square brackets <kbd>[]</kbd>.

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

A property has a key which can also be referred to as <kbd>name</kbd> or <kbd>identifier</kbd> after which the colon comes in <kbd>:</kbd> and lastly a value to the right of it. In a property, the value at the right hand side is been stored inside the key on the left hand side.

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

Also, we can add a boolean property:

```js
school.isAdmitting = true
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
```

If you've noticed, we’ve been adding a comma after the last property in the list. This is called a "trailing" or "hanging" comma. It's not mandatory, but it makes it easier to add, remove, or rearrange properties since all the lines follow the same format.

---
hideInToc: true
---

# Square brackets

In JavaScript, property names with spaces or special characters need to be enclosed in quotes, and dot notation doesn't work with those kinds of properties. You must use square brackets instead. Here's a corrected version:

Note: For multi-word properties (or properties with spaces or special characters), dot notation won't work because JavaScript will treat them as invalid. In such cases, you need to use square bracket notation.

```js {monaco-run}{autorun: false}
let school = {
  name: "AltSchool",
  sector: "Education",
  "takes students": true,
}
alert( school.takes students);
alert( school["takes students"]);
```

Also, square brackets provide a way to access property names dynamically, which literal strings in dot notation do not allow. This means you can use variables or expressions within square brackets to obtain the property name.

```js{monaco-run}{autorun: false}
let school = {
  name: "Setemi Ojo",
  department: "Engineering",
}
let key = prompt("What do you want to know about the user?", "department");
alert([user[key]]);
```
