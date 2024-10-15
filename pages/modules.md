---
layout: center
transition: slide-up
hideInToc: true
---

# Modules

<div mt-2 />

- <a @click="$slidev.nav.next()">Module basics</a>
- <a @click="$slidev.nav.next()">Export and Import</a>
- <a @click="$slidev.nav.next()">Dynamic Imports</a>
  
---
hideInToc: true
---

# Module basics

<div />

[What is a module?]{.text-gradient.font-hand.text-10.pr-3.pl-0}

- A module is just a file. One script is one module. As simple as that.

- Modules can load each other and use special directives export and import to interchange functionality, call functions of one module from another one:

- Export keyword labels variables and functions that should be accessible from outside the current module.
- Import allows the import of functionality from other modules.

For instance, if we have a file `sayHi.js` exporting a function:

<div flex="~ row" gap-10>

```js
// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}
```

```js
// 📁 main.js
import {sayHi} from './sayHi.js';
```

</div>


---
hideInToc: true
---

# Export and Import

- Export and import directives have several syntax variants.

- We can label any declaration as exported by placing export before it, be it a variable, function or a class.

- What is Exporting?

- Exporting is a technique used to share JavaScript code written in one file with another file or multiple files. This is crucial for building applications that are easy to update and debug.

For instance, here all exports are valid:

```js
// export an array
export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// export a constant
export const MODULES_BECAME_STANDARD_YEAR = 2015;
// export a class
export class User {
  constructor(name) {
    this.name = name;
  }
}
```

---
hideInToc: true
name: Export and Import
---


- No semicolons after export class/function

- Please note that export before a class or a function does not make it a function expression. It’s still a function declaration, albeit exported.

- Most JavaScript style guides don’t recommend semicolons after function and class declarations.

- That’s why there’s no need for a semicolon at the end of export class and export function:

---
hideInToc: true
---

#  What is Importing?

- Importing is the method by which you make exported code available in another JavaScript file. This is essential for assembling various components and libraries to build complex applications.

- Import * as `<var name>`: This syntax allows you to import all exported code from a module and assign it to a single object. This is useful when you want to import multiple modules into a single file.

- Usually, we put a list of what to import in curly braces import {...}, like this:

```js
// 📁 main.js
import {sayHi, sayBye} from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!
```

---
hideInToc: true
name: Export and Import
---

- But if there’s a lot to import, we can import everything as an object using `import * as <var name>`, for instance:

```js
// 📁 main.js
import * as say from './say.js';

say.sayHi('John');
say.sayBye('John');
```

- At first sight, “import everything” seems such a cool thing, short to write, why should we ever explicitly list what we need to import?

- Explicitly listing what to import gives shorter names: sayHi() instead of say.sayHi().
- Explicit list of imports gives better overview of the code structure: what is used and where. It makes code support and refactoring easier.

<div flex="~ row" gap-10>

```js
// 📁 say.js
...
export {sayHi as hi, sayBye as bye};

//Now hi and bye are official names to be used in imports:
```

```js
// 📁 main.js
import * as say from './say.js';

say.hi('John'); // Hello, John!
say.bye('John'); // Bye, John!
```

</div>

---
hideInToc: true
---

# Dynamic Imports

- Dynamic imports revolutionize how modules are handled, offering a more flexible approach compared to static imports. Static imports require all modules to be loaded at the beginning of a script, increasing initial load times and potentially impacting performance. In contrast, dynamic imports load modules on demand, which can significantly reduce initial load times and enhance user experience.

<div flex="~ row" gap-10>

```js
// Static import (traditional method)
import { module } from './path/to/module.js';
```

```js
// Dynamic import
const module = await import('./path/to/module.js');
```

</div>

- Explanation: The above example contrasts the traditional static import with a dynamic import. Notice that dynamic imports use a promise-based syntax, which means they can be used within asynchronous functions or handled with .then() and .catch() for greater control over timing and error handling.


- Dynamic imports are particularly beneficial in scenarios where parts of your application are conditionally used or not immediately necessary. Below are common use cases and implementations.
Code Splitting.
