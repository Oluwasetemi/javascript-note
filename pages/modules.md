---
layout: center
transition: slide-up
hideInToc: true
---

# Modules

<div mt-2 />

- Module basics
- Export and Import
- Dynamic Imports

---

hideInToc: true
---

# Module basics

-What is a module?

-A module is just a file. One script is one module. As simple as that.

-Modules can load each other and use special directives export and import to interchange functionality, call functions of one module from another one:

    export keyword labels variables and functions that should be accessible from outside the current module.
    import allows the import of functionality from other modules.

-For instance, if we have a file sayHi.js exporting a function:

```javascript
// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}
```

-here another file may import and use it🧮

```javascript
// 📁 main.js
import {sayHi} from './sayHi.js';

alert(sayHi); // function...
sayHi('John'); // Hello, John!
```

---

hideInToc: true
---

# Export and Import

-Export and import directives have several syntax variants.

-We can label any declaration as exported by placing export before it, be it a variable, function or a class.

-What is Exporting?

-Exporting is a technique used to share JavaScript code written in one file with another file or multiple files. This is crucial for building applications that are easy to update and debug.
For instance, here all exports are valid:

```js
// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}
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

-No semicolons after export class/function

-Please note that export before a class or a function does not make it a function expression. It’s still a function declaration, albeit exported.

-Most JavaScript style guides don’t recommend semicolons after function and class declarations.

-That’s why there’s no need for a semicolon at the end of export class and export function:

```js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}  //no ; at the end of export function

*/
```

# What is Importing?

-Importing is the method by which you make exported code available in another JavaScript file. This is essential for assembling various components and libraries to build complex applications.

-Import *

-Usually, we put a list of what to import in curly braces import {...}, like this:

```js
// 📁 main.js
import {sayHi, sayBye} from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!
```

-But if there’s a lot to import, we can import everything as an object using import * as <obj>, for instance:

```js
// 📁 main.js
import * as say from './say.js';

say.sayHi('John');
say.sayBye('John');
```

-At first sight, “import everything” seems such a cool thing, short to write, why should we ever explicitly list what we need to import?

-Well, there are few reasons.

- Explicitly listing what to import gives shorter names: sayHi() instead of say.sayHi().
- Explicit list of imports gives better overview of the code structure: what is used and where. It makes code support and refactoring easier.

# Import “as”

-We can also use as to import under different names.

-For instance, let’s import sayHi into the local variable hi for brevity, and import sayBye as bye:

```js
// 📁 main.js
import {sayHi as hi, sayBye as bye} from './say.js';

hi('John'); // Hello, John!
bye('John'); // Bye, John!
```

# Export “as”

-The similar syntax exists for export.

-Let’s export functions as hi and bye:

```js
// 📁 say.js
...
export {sayHi as hi, sayBye as bye};

-Now hi and bye are official names for outsiders, to be used in imports:

```js
// 📁 main.js
import * as say from './say.js';

say.hi('John'); // Hello, John!
say.bye('John'); // Bye, John!
```

# Export default

-In practice, there are mainly two kinds of modules.

  1. Modules that contain a library, pack of functions, like say.js above.
  2. Modules that declare a single entity, e.g. a module user.js exports only class User.

-Mostly, the second approach is preferred, so that every “thing” resides in its own module.

-Naturally, that requires a lot of files, as everything wants its own module, but that’s not a problem at all. Actually, code navigation becomes easier if files are well-named and structured into folders.

-Modules provide a special export default (“the default export”) syntax to make the “one thing per module” way look better.

-Put export default before the entity to export:

```js
// 📁 user.js
export default class User { // just add "default"
  constructor(name) {
    this.name = name;
  }
}
```

-There may be only one export default per file.

…And then import it without curly braces:

```js
// 📁 main.js
import User from './user.js'; // not {User}, just User

new User('John');


-Imports without curly braces look nicer. A common mistake when starting to use modules is to forget curly braces at all. So, remember, import needs curly braces for named exports and doesn’t need them for the default one.

---

hideInToc: true
---

# Dynamic Imports

-Dynamic imports revolutionize how modules are handled, offering a more flexible approach compared to static imports. Static imports require all modules to be loaded at the beginning of a script, increasing initial load times and potentially impacting performance. In contrast, dynamic imports load modules on demand, which can significantly reduce initial load times and enhance user experience.
```js
//Example:
// Static import (traditional method)
import { module } from './path/to/module.js';
```

```js
// Dynamic import
const module = await import('./path/to/module.js');
```

-Explanation: The above example contrasts the traditional static import with a dynamic import. Notice that dynamic imports use a promise-based syntax, which means they can be used within asynchronous functions or handled with .then() and .catch() for greater control over timing and error handling.

# Utilizing Dynamic Imports in Applications

-Dynamic imports are particularly beneficial in scenarios where parts of your application are conditionally used or not immediately necessary. Below are common use cases and implementations.
Code Splitting

One of the most prevalent use cases for dynamic imports is code splitting. This technique involves splitting your code into multiple bundles which can be loaded on demand, usually when a specific route is accessed or when certain functionality is required.

```js
//Example:
button.addEventListener('click', function() {
    import('./heavyScript.js').then(module => {
        module.runHeavyTask();
    });
});
```

-Explanation: This code snippet shows how to load a heavy script only when a button is clicked. Instead of loading the heavyScript.js at page load, it’s loaded dynamically, improving the page load time.

# Best Practices for Using JavaScript Modules

- Keep File Structure Organized: Arrange your modules and files logically within directories to ease maintenance and improve readability.
- Prefer Named Exports for Clarity: While default exports are useful, named exports provide better clarity on what functionalities are being used in a file.
- Use Comments Generously: Commenting your exports and imports can greatly aid in the understanding and maintenance of code, especially in larger teams.

----
