---
layout: center
transition: slide-up
hideInToc: true
---

# Modules

<TocIcon />

<div mt-2 />

- <a @click="$slidev.nav.next()">Module basics</a>
- <a @click="$nav.go($nav.currentPage+2)">Export and Import</a>
- <a @click="$nav.go($nav.currentPage+6)">Dynamic Imports</a>

---
hideInToc: true
---

# Module basics

<div />

[What is a module?]{.text-gradient.font-hand.text-10.pr-3.pl-0}

A module is just a file. Modules can load each other and use special directives `export` and `import` to share functionality. Modularity is a key aspect of large-scale software development. It is the process of breaking a program into separate, interchangeable components that can be used in different parts of the program.

Export keyword labels variables and functions that should be accessible from outside the current module then import allows the usage in other modules. Modules have come to JavaScript relatively recently. Before, there were no modules in JavaScript, and every script included in the HTML had access to all other scripts. Which could be a problem for global variables and functions and the order is important. So, modules are a way to solve these problems.

For instance, if we have a file `sayHi.js` exporting a function:

<div class="grid grid-cols-3 gap-4 text-sm">

<div>

**Inline Export**

```js
// 📁 sayHi.js
export function sayHi(user) {
  // alert(`Hello, ${user}!`)
}
```

</div>

<div>

**Separate Export**

```js
// 📁 sayHi.js
function sayHi(user) {
  // alert(`Hello, ${user}!`)
}
export { sayHi }
```

</div>

<div>

**Named Import**

```js
// 📁 main.js
import { sayHi } from './sayHi.js'

sayHi('World')
```

</div>

</div>

---
hideInToc: true
---

# Import Variations

Importing is the method by which you make exported code available in another JavaScript file. This is essential for assembling various components and libraries to build complex applications.

<div class="grid grid-cols-3 gap-4 text-sm">

<div>

**Named Import**

```js
// 📁 main.js
import { sayHi, sayBye } from './say.js'

sayHi('John')
sayBye('John')
```

Import specific exports by name.

</div>

<div>

**Aliased Import**

```js
// 📁 main.js
import {
  sayHi as hi,
  sayBye as bye
} from './say.js'

hi('John')
bye('John')
```

Rename imports to avoid conflicts.

</div>

<div>

**Namespace Import**

```js
// 📁 main.js
import * as say from './say.js'

say.sayHi('John')
say.sayBye('John')
```

Import all exports as a single object.

</div>

</div>

---
hideInToc: true
name: Export and Import
---

# Export & Import Best Practices

<div class="grid grid-cols-3 gap-4 text-sm">

<div>

**Why Named Imports?**

- Shorter, cleaner names
- Better code structure overview
- Easier refactoring
- Explicit dependencies

```js
// Clear what you need
import { formatDate, parseDate }
  from './utils.js'
```

</div>

<div>

**Renamed Exports**

```js
// 📁 say.js
export {
  sayHi as hi,
  sayBye as bye
}
```

```js
// 📁 main.js
import * as say from './say.js'

say.hi('John')
say.bye('John')
```

</div>

<div>

**Export Types**

- **Named**: Multiple exports per module
- **Default**: One default export
- **Renamed**: Alias during export/import

```js
// Named
export let x = 1
// Default
export default class User {}
```

</div>

</div>

---
hideInToc: true
name: Export and Import
---

# Module System Benefits

<div class="grid grid-cols-3 gap-4 text-sm">

<div>

**Encapsulation**

- Avoid namespace pollution
- No global variable conflicts
- Clean separation of concerns

```js
// Module scope is private
let privateVar = 'hidden'
export let publicVar = 'visible'
```

</div>

<div>

**Code Organization**

- Reusability across projects
- Better maintainability
- Clear dependencies
- Code splitting support

```js
// utils.js - reusable
export const format = (str) => {...}
export const validate = (data) => {...}
```

</div>

<div>

**Import Examples**

```js
// Named
import { months } from './months.js'

// Aliased
import { months as M } from './months.js'

// Default
import User from './user.js'

// Namespace
import * as Utils from './utils.js'
```

</div>

</div>

---
hideInToc: true
---

# Dynamic Imports

Dynamic imports load modules on demand, reducing initial load times and enhancing user experience by only loading code when needed.

<div class="grid grid-cols-3 gap-4 text-sm">

<div>

**Static Import**

```js
// Loaded at start
import { heavy } from './heavy.js'

// Always included in bundle
```

**Issues:**
- Increases initial load time
- Loads unused code
- No conditional loading

</div>

<div>

**Dynamic Import**

```js
// Loaded when needed
const module = await import(
  './path/to/module.js'
)

module.doSomething()
```

**Benefits:**
- On-demand loading
- Code splitting
- Conditional imports

</div>

<div>

**Use Cases**

**1. Code Splitting**
```js
button.addEventListener('click', async () => {
  const { chart } = await import('./chart.js')
  chart.render()
})
```

**2. Conditional Loading**
```js
if (condition) {
  const mod = await import('./feature.js')
  mod.init()
}
```

</div>

</div>
