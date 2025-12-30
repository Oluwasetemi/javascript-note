---
layout: two-cols
transition: slide-up
hideInToc: true
---

# Regular Expressions

<TocIcon />

<div mt-2 />

- <a @click="$slidev.nav.go($nav.currentPage+1)">Patterns and flags</a>
- <a @click="$slidev.nav.go($nav.currentPage+3)">Character classes</a>
- <a @click="$slidev.nav.go($nav.currentPage+4)">Unicode: flag `"u"` and class `"\p{...}"`</a>
- <a @click="$slidev.nav.go($nav.currentPage+5)">Anchors: string start "^" and end "$"</a>
- <a @click="$slidev.nav.go($nav.currentPage+6)">Multiline mode of anchors "^" "$", flag "m"</a>
- <a @click="$slidev.nav.go($nav.currentPage+7)">Word boundary "\b"</a>
- <a @click="$slidev.nav.go($nav.currentPage+8)">Escaping, special characters</a>
- <a @click="$slidev.nav.go($nav.currentPage+9)">Sets and ranges "[...]"</a>
- <a @click="$slidev.nav.go($nav.currentPage+10)">Quantifiers "+", "\*", "?" and "{n}"</a>
- <a @click="$slidev.nav.go($nav.currentPage+11)">Greedy and lazy quantifiers</a>

::right::

<div mt-15 />

- <a @click="$slidev.nav.go($nav.currentPage+12)">Capturing groups "(...)"</a>
- <a @click="$slidev.nav.go($nav.currentPage+13)">Backreferences in patterns: `"\N"` and `"\k<name>"`</a>
- <a @click="$slidev.nav.go($nav.currentPage+14)">Alternation "|"</a>
- <a @click="$slidev.nav.go($nav.currentPage+15)">Lookahead and lookbehind "(?=...)", "(?<=...)"</a>
- <a @click="$slidev.nav.go($nav.currentPage+16)">Catastrophic backtracking</a>
- <a @click="$slidev.nav.go($nav.currentPage+17)">Named groups: `"(?<name>...)"`</a>
- <a @click="$slidev.nav.go($nav.currentPage+18)">Sticky flag "y", searching at position</a>
- <a @click="$slidev.nav.go($nav.currentPage+19)">Methods of RegExp and String</a>
- <a @click="$slidev.nav.go($nav.currentPage+20)">RegExp Golf Exercise</a>
- <a @click="$slidev.nav.go($nav.currentPage+21)">Performance Tips</a>

---
hideInToc: true
---

# Patterns and flags

<div class="grid grid-cols-2 gap-4 text-sm">

<div>

## What is a Regular Expression?

A **pattern** used to search and manipulate text. In JavaScript, regex are objects.

<div class="mt-3 text-xs">

> Two ways to create:

**1. Literal notation** (most common)

```js
const re = /pattern/flags
```

**2. Constructor**

```js
const re = new RegExp("pattern", "flags")
```

</div>

<div class="mt-0 p-1 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-100 rounded text-[10px]">

**💡 When to use constructor:**

- Pattern is dynamic/from variable
- Pattern contains forward slashes

</div>

</div>

<div>

### Basic Example

<div style="font-size: 0.7rem;">

```js {monaco-run} {autorun: false}
// Simple pattern - literal
const pattern1 = /hello/
// console.log(pattern1.test("hello world"))  // true

// Using constructor
const word = "hello"
const pattern2 = new RegExp(word)
// console.log(pattern2.test("say hello"))    // true

// Case-sensitive by default
// console.log(/hello/.test("Hello"))   // false
// console.log(/hello/i.test("Hello"))  // true (with i flag)

// Find all occurrences
const text = "cat bat cat rat"
// console.log(text.match(/cat/))    // ["cat"] - first only
// console.log(text.match(/cat/g))   // ["cat", "cat"] - all
```

</div>

</div>

</div>

---
hideInToc: true
---

# Common Flags

<div class="grid grid-cols-2 gap-4 text-sm">

<div>


Flags modify how the pattern matches:

<div class="grid grid-cols-1 gap-2 mt-3 text-xs">

<div class="p-2 bg-green-50 dark:bg-green-900/30 dark:text-green-100 rounded">

**`g`** - Global
Find all matches (not just first)

</div>

<div class="p-2 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-100 rounded">

**`i`** - Ignore case
Case-insensitive matching

</div>

<div class="p-2 bg-yellow-50 dark:bg-yellow-900/30 dark:text-yellow-100 rounded">

**`m`** - Multiline
`^` and `$` match line starts/ends

</div>

<div class="p-2 bg-purple-50 dark:bg-purple-900/30 dark:text-purple-100 rounded">

**`s`** - Dotall
`.` matches newlines too

</div>

<div class="p-2 bg-pink-50 dark:bg-pink-900/30 dark:text-pink-100 rounded">

**`u`** - Unicode
Correct Unicode handling

</div>

<div class="p-2 bg-orange-50 dark:bg-orange-900/30 dark:text-orange-100 rounded">

**`y`** - Sticky
Match at exact position

</div>

</div>

</div>

<div>

### Flag Examples

<div style="font-size: 0.7rem;">

```js {monaco-run} {autorun: false}
const text = "Cat cat CAT"

// console.log(text.match(/cat/))     // ["cat"]
// console.log(text.match(/cat/i))    // ["Cat"]

// g flag - all matches
// console.log(text.match(/cat/g))    // ["cat"]
// g + i - all matches, case-insensitive
// console.log(text.match(/cat/gi))   // ["Cat", "cat", "CAT"]
// Multiple lines
const lines = "line1\nline2\nline3"
// Without m flag
// console.log(lines.match(/^line/g))   // ["line"]
// With m flag - matches each line start
// console.log(lines.match(/^line/gm))  // ["line", "line", "line"]
// Combine flags as needed
const pattern = /test/gimu
// console.log(pattern.flags)  // "gimu"
```

</div>

</div>

</div>

---
hideInToc: true
---

# Character classes

<div class="grid grid-cols-2 gap-4 text-sm">

<div>


Special notations that match **types** of characters.

<div class="grid grid-cols-1 gap-2 mt-3 text-xs">

<div class="p-1 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-100 rounded">

**`\d`** - Digit (0-9)
Same as `[0-9]`

</div>

<div class="p-1 bg-green-50 dark:bg-green-900/30 dark:text-green-100 rounded">

**`\D`** - Non-digit
Same as `[^0-9]`

</div>

<div class="p-1 bg-yellow-50 dark:bg-yellow-900/30 dark:text-yellow-100 rounded">

**`\w`** - Word character
Letters, digits, underscore `[a-zA-Z0-9_]`

</div>

<div class="p-1 bg-purple-50 dark:bg-purple-900/30 dark:text-purple-100 rounded">

**`\W`** - Non-word character
Same as `[^a-zA-Z0-9_]`

</div>

<div class="p-1 bg-pink-50 dark:bg-pink-900/30 dark:text-pink-100 rounded">

**`\s`** - Whitespace
Space, tab, newline

</div>

<style scoped>
  p {
    margin: 0;
    padding: 4px;
  }
</style>

<div class="p-1 bg-orange-50 dark:bg-orange-900/30 dark:text-orange-100 rounded">

**`\S`** - Non-whitespace
Any non-space character

</div>

<div class="p-1 bg-red-50 dark:bg-red-900/30 dark:text-red-100 rounded">

**`.`** - Any character
(except newline by default)

</div>

</div>

</div>

<div>

### Examples

<div style="font-size: 0.7rem;">

```js {monaco-run} {autorun: false}
// console.log("Room 404".match(/\d+/g))// ["404"]
// console.log("abc123xyz".match(/\D+/g))// ["abc", "xyz"]

// console.log("hello_world123".match(/\w+/))// ["hello_world123"]

// console.log("hello, world!".match(/\W+/g))// [", ", "!"]

// console.log("a b\tc\nd".match(/\s/g))// [" ", "\t", "\n"]

// console.log("a b c".match(/\S+/g))// ["a", "b", "c"]

// console.log("abc".match(/a.c/))     // ["abc"]
// console.log("a\nc".match(/a.c/))    // null
// console.log("a\nc".match(/a.c/s))   // ["a\nc"] (with s flag)

// Practical: extract words and numbers
// console.log("Price: $99".match(/\w+/g))// ["Price", "99"]
```

</div>

</div>

</div>

---
hideInToc: true
---

# Unicode: flag "u" and class "\p{...}"

<div class="grid grid-cols-2 gap-4 text-sm">

<div>

The `u` flag enables proper Unicode support:

<ul class="text-xs leading-tight mt-3">
<li v-click>Correct handling of surrogate pairs</li>
<li v-click>Unicode property escapes `\p{...}`</li>
<li v-click>Proper character counting</li>
</ul>

<div class="mt-4 text-xs">

### Unicode Properties `\p{...}`

Match characters by Unicode property:

- `\p{L}` - Any letter
- `\p{N}` - Any number
- `\p{P}` - Any punctuation
- `\p{Emoji}` - Emoji characters
- `\p{Script=Greek}` - Greek letters

**Negate with:** `\P{...}`

</div>

</div>

<div>

### Examples

<div style="font-size: 0.65rem;">

```js {monaco-run} {autorun: false}
const smile = "😀"
// console.log(/^.$/.test(smile))      // false (2 code units)
// console.log(/^.$/u.test(smile))     // true (1 character)

const text = "Hello мир 世界"
// console.log(text.match(/\p{L}+/gu))// ["Hello", "мир", "世界"]
// console.log("Price: ₹১২৩".match(/\p{N}+/gu))// ["১২৩"] - Bengali digits
const msg = "Hello 👋 World 🌍"
// console.log(msg.match(/\p{Emoji}/gu))// ["👋", "🌍"]

const mixed = "Hello Привет مرحبا"
// console.log(mixed.match(/\p{Script=Cyrillic}+/gu))// ["Привет"]
// console.log(mixed.match(/\p{Script=Arabic}+/gu))// ["مرحبا"]

// \P{L} - NOT a letter
// console.log("abc123!@#".match(/\P{L}+/gu))// ["123!@#"]

// Practical: validate international names
const name = "José María"
// console.log(/^\p{L}+(\s\p{L}+)*$/u.test(name))// true
```

</div>

</div>

</div>

---
hideInToc: true
---

# Anchors: string start "^" and end "$"

<div class="grid grid-cols-2 gap-4 text-sm">

<div>

Anchors don't match characters - they match **positions** in the text.

- `^` - Matches the **start** of the string
- `$` - Matches the **end** of the string

<div class="mt-4">

### Common Use Cases

<ul class="text-xs leading-tight">
<li v-click>Validate entire input (e.g., email, phone)</li>
<li v-click>Check if string starts/ends with pattern</li>
<li v-click>Ensure exact match (no extra characters)</li>
</ul>

</div>

</div>

<div>

### Examples

<div style="font-size: 0.7rem;">

```js {monaco-run} {autorun: false}
const text = "Hello World"
// console.log(/^Hello/.test(text))     // true
// console.log(/^World/.test(text))     // false

// console.log(/World$/.test(text))     // true
// console.log(/Hello$/.test(text))     // false

const exactPattern = /^Hello$/
// console.log(exactPattern.test("Hello"))        // true
// console.log(exactPattern.test("Hello World"))  // false
// console.log(exactPattern.test("Say Hello"))    // false

// Practical: validate 5-digit zip code
const zipCode = /^\d{5}$/
// console.log(zipCode.test("12345"))   // true
// console.log(zipCode.test("123"))     // false
// console.log(zipCode.test("123456"))  // false
```

</div>

</div>

</div>

---
hideInToc: true
---

# Multiline mode of anchors "^" "$", flag "m"

<div class="grid grid-cols-2 gap-4 text-sm">

<div>

## The "m" Flag

By default, `^` and `$` only match the **very start/end** of the entire string.

With the `m` (multiline) flag:
- `^` matches start of **each line**
- `$` matches end of **each line**

<div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-100 rounded text-xs">

**💡 Tip:** Lines are separated by `\n` (newline character)

</div>

</div>

<div>


<div style="font-size: 0.7rem;">

```js {monaco-run} {autorun: false}
const multiline = `First line
Second line
Third line`

// WITHOUT multiline flag
// console.log(/^\w+/.exec(multiline))
// Matches: ["First"] - only first line

// console.log(multiline.match(/^\w+/g))
// Matches: ["First"] - only first line

// WITH multiline flag (m)
// console.log(multiline.match(/^\w+/gm))
// Matches: ["First", "Second", "Third"]

// console.log(multiline.match(/line$/gm))
// Matches: ["line", "line", "line"]

// Practical: extract all lines starting with numbers
const log = `1. First task \n Note: reminder \n 2. Second task \n 3. Third task`

const tasks = log.match(/^\d+\..+$/gm)
// console.log(tasks)// ["1. First task", "2. Second task", "3. Third task"]
```

</div>

</div>

</div>

---
hideInToc: true
---


<div class="grid grid-cols-2 gap-4 text-sm">

<div>

## What is \b?

`\b` matches a **word boundary** - the position between a word character and a non-word character.

**Word characters:** Letters, digits, underscore (`\w` = `[a-zA-Z0-9_]`)

**Non-word characters:** Spaces, punctuation, start/end of string

<div class="mt-4">

### Three boundary positions:

<ul class="text-xs leading-tight">
<li v-click>Between word char and non-word char</li>
<li v-click>At string start (if starts with word char)</li>
<li v-click>At string end (if ends with word char)</li>
</ul>

</div>

<div class="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/30 dark:text-yellow-100 rounded text-xs">

**⚠️ Note:** `\B` is the opposite - matches where `\b` doesn't

</div>

</div>

<div>


<div style="font-size: 0.7rem;">

```js {monaco-run} {autorun: false}
const text = "The cat in the catalog"

// Without \b - finds "cat" in "catalog" too
// console.log(text.match(/cat/g))// ["cat", "cat"] - not what we want!

// With \b - only whole word "cat"
// console.log(text.match(/\bcat\b/g))// ["cat"] - perfect!

// Find words starting with "cat"
// console.log(text.match(/\bcat/g))// ["cat", "cat"] (both "cat" and "catalog")

// Find words ending with "log"
// console.log(text.match(/log\b/g))// ["log"] (from "catalog")

// Practical: find standalone numbers
const prices = "Item $99, code A99B, total $199"
// console.log(prices.match(/\b\d+\b/g))// ["99", "199"] - only standalone numbers

// Replace whole word only
// console.log("I like cats and catfish"
  .replace(/\bcat\b/g, "dog"))
// "I like dogs and catfish"
```

</div>

</div>

</div>

---
hideInToc: true
---

# Escaping, special characters

<div class="grid grid-cols-2 gap-4 text-sm">

<div>


These characters have special meaning and must be **escaped** with `\` to match literally:

<div class="grid grid-cols-2 gap-2 mt-3 text-xs">

<div class="p-2 bg-red-50 dark:bg-red-900/30 dark:text-red-100 rounded">

**Most common:**
- `.` (any character)
- `*` (0 or more)
- `+` (1 or more)
- `?` (0 or 1)
- `^` (start)
- `$` (end)

</div>

<div class="p-2 bg-red-50 dark:bg-red-900/30 dark:text-red-100 rounded">

**Also special:**
- `|` (OR)
- `()` (group)
- `[]` (set)
- `{}` (quantifier)
- `\` (escape)

</div>

</div>

<div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-100 rounded text-xs">

**💡 Rule:** To match a special character literally, put `\` before it

</div>

</div>

<div>


<div style="font-size: 0.7rem;">

```js {monaco-run} {autorun: false}
// Match a literal dot (.)
const domain = "site.com"
// console.log(/site.com/.test("siteXcom"))    // true (. = any char)
// console.log(/site\.com/.test("siteXcom"))   // false
// console.log(/site\.com/.test("site.com"))   // true

// Match literal dollar sign ($)
const price = "$99.99"
// console.log(price.match(/\$\d+\.\d+/))// ["$99.99"]

// Match literal parentheses
const phone = "(555) 123-4567"
// console.log(phone.match(/\(\d{3}\) \d{3}-\d{4}/))// ["(555) 123-4567"]

// Match literal backslash (\)
const path = "C:\\Users\\John"
// console.log(path.match(/\w:\\\\/))// ["C:\\"] - need \\\\ to match \\

// Match literal question mark (?)
const url = "page.html?id=5"
// console.log(url.match(/\.html\?/))// [".html?"]

// Match literal brackets
// console.log("[123]".match(/\[\d+\]/))// ["[123]"]
```

</div>

</div>

</div>

---
hideInToc: true
---

# Sets and ranges "[...]"

<div class="grid grid-cols-2 gap-4 text-sm">

<div>


Square brackets `[]` match **any one character** from the set.

<div class="mt-3 text-xs">

### Common patterns:

- `[abc]` - Match a, b, OR c
- `[a-z]` - Any lowercase letter
- `[A-Z]` - Any uppercase letter
- `[0-9]` - Any digit
- `[a-zA-Z]` - Any letter
- `[a-z0-9]` - Letter or digit

</div>

<div class="mt-4 p-3 bg-purple-50 dark:bg-purple-900/30 dark:text-purple-100 rounded text-xs">

**Negation:** `[^...]` matches any character **NOT** in the set

`[^0-9]` = not a digit

</div>

</div>

<div>


<div style="font-size: 0.7rem;">

```js {monaco-run} {autorun: false}
// Match vowels
// console.log("hello".match(/[aeiou]/g))// ["e", "o"]
// console.log("Room 42B".match(/[0-9]/g))// ["4", "2"]

// Ranges: match letters a-f
// console.log("abc123xyz".match(/[a-f]/g))// ["a", "b", "c"]

// Multiple ranges combined
// console.log("Test123".match(/[a-zA-Z0-9]/g))// ["T", "e", "s", "t", "1", "2", "3"]

// console.log("ab12cd".match(/[^0-9]/g))// ["a", "b", "c", "d"]

// Negation: NOT a letter
// console.log("Test 123!".match(/[^a-zA-Z]/g))
// [" ", "1", "2", "3", "!"]

// Special chars in sets (no escape needed)
// console.log("1+2=3".match(/[+=-]/g))// ["+", "="]

// Practical: hex color validation
const hex = "#A5F"
// console.log(hex.match(/#[0-9A-Fa-f]+/))// ["#A5F"]
```

</div>

</div>

</div>

---
hideInToc: true
---

# Quantifiers "+", "*", "?" and "{n}"

<div class="grid grid-cols-2 gap-4 text-sm">

<div>


Quantifiers specify **how many times** a pattern should repeat.

<div class="mt-3">

<div class="grid grid-cols-2 gap-2 text-xs">

<div class="p-2 bg-green-50 dark:bg-green-900/30 dark:text-green-100 rounded">

**`+`** = 1 or more
`\d+` = one or more digits

</div>

<div class="p-2 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-100 rounded">

**`*`** = 0 or more
`\w*` = zero or more word chars

</div>

<div class="p-2 bg-yellow-50 dark:bg-yellow-900/30 dark:text-yellow-100 rounded">

**`?`** = 0 or 1 (optional)
`colou?r` = color OR colour

</div>

<div class="p-2 bg-purple-50 dark:bg-purple-900/30 dark:text-purple-100 rounded">

**`{n}`** = exactly n times
`\d{3}` = exactly 3 digits

</div>

<div class="p-2 bg-pink-50 dark:bg-pink-900/30 dark:text-pink-100 rounded">

**`{n,}`** = n or more
`\d{2,}` = 2+ digits

</div>

<div class="p-2 bg-red-50 dark:bg-red-900/30 dark:text-red-100 rounded">

**`{n,m}`** = between n and m
`\d{2,4}` = 2 to 4 digits

</div>

</div>

</div>

</div>

<div>


<div style="font-size: 0.65rem;">

```js {monaco-run} {autorun: false}
// console.log("Gooooal!".match(/o+/))// ["oooo"]
// console.log("123 456".match(/\d+/g))// ["123", "456"]

// console.log("Gal Goal Goooal".match(/Go*al/g))// ["Gal", "Goal", "Goooal"]

// console.log("color".match(/colou?r/))    // ["color"]
// console.log("colour".match(/colou?r/))   // ["colour"]

const zip = "12345"
// console.log(/^\d{5}$/.test(zip))         // true
// console.log(/^\d{5}$/.test("123"))       // false

const pass = "abc12345"
// console.log(/^[a-z]{3,5}\d{4,8}$/.test(pass))  // true

// Practical: phone number
const phone = "(555) 123-4567"
// console.log(phone.match(/\(\d{3}\) \d{3}-\d{4}/))// ["(555) 123-4567"]

// Practical: find all words (1+ letters)
// console.log("Hello world 123".match(/[a-z]+/gi))// ["Hello", "world"]
```

</div>

</div>

</div>

---
hideInToc: true
---

# Greedy and lazy quantifiers

<div class="grid grid-cols-2 gap-4 text-sm">

<div>


**Greedy (default):** Match as **much** as possible

**Lazy:** Match as **little** as possible

<div class="mt-3 text-xs">

### Making quantifiers lazy:

Add `?` after the quantifier:

- `+?` - lazy one or more
- `*?` - lazy zero or more
- `??` - lazy zero or one
- `{n,m}?` - lazy range

</div>

<div class="mt-4 p-3 bg-orange-50 dark:bg-orange-900/30 dark:text-orange-100 rounded text-xs">

**🔥 Key difference:**
- Greedy: `.*` matches until **last** match
- Lazy: `.*?` matches until **first** match

</div>

</div>

<div>


<div style="font-size: 0.65rem;">

```js {monaco-run} {autorun: false}
const html = '<div>Hello</div><div>World</div>'

// GREEDY: .* matches as much as possible
// console.log(html.match(/<div>.*<\/div>/))// ["<div>Hello</div><div>World</div>"]
// Matched from FIRST < to LAST >

// LAZY: .*? matches as little as possible
// console.log(html.match(/<div>.*?<\/div>/g))// ["<div>Hello</div>", "<div>World</div>"]
// Matched minimal content between tags

// Another example with quotes
const str = 'a "witch" and "cat"'

// Greedy - gets everything between first and last quote
// console.log(str.match(/".*"/))// [""witch" and "cat""]

// Lazy - gets minimal content between quotes
// console.log(str.match(/".*?"/g))// [""witch"", ""cat""]

// Practical: extract tag content
const text = '<h1>Title</h1><p>Text</p>'
const tags = text.match(/<.+?>/g)
// console.log(tags)// ["<h1>", "</h1>", "<p>", "</p>"]
```

</div>

</div>

</div>

---
hideInToc: true
---

# Capturing groups "(...)"

<div class="grid grid-cols-2 gap-4 text-sm">

<div>


Parentheses `()` create groups that:

<ul class="text-xs leading-tight mt-2">
<li v-click>**Capture** matched text for later use</li>
<li v-click>Allow **quantifiers** on multiple characters</li>
<li v-click>Enable **extraction** of specific parts</li>
</ul>

<div class="mt-4 text-xs">

### Accessing captured groups:

**In match results:**
- `result[0]` = full match
- `result[1]` = first group
- `result[2]` = second group, etc.

**In replace:**
- `$1`, `$2`, etc. reference groups

</div>

</div>

<div>


<div style="font-size: 0.65rem;">

```js {monaco-run} {autorun: false}
// console.log("hahaha".match(/(ha)+/))// ["hahaha", "ha"] - matches repeating "ha"

// Capturing parts of a date
const date = "2024-12-25"
const match = date.match(/(\d{4})-(\d{2})-(\d{2})/)
// console.log(match[0])  // "2024-12-25" (full)
// console.log(match[1])  // "2024" (year)
// console.log(match[2])  // "12" (month)
// console.log(match[3])  // "25" (day)

// Using groups in replace
const name = "John Doe"
const swapped = name.replace(/(\w+) (\w+)/, '$2, $1')
// console.log(swapped)  // "Doe, John"

// Extract email parts
const email = "user@example.com"
const parts = email.match(/(.+)@(.+)\.(.+)/)
// console.log(parts[1])  // "user"
// console.log(parts[2])  // "example"
// console.log(parts[3])  // "com"

// Use when you need grouping but not capturing
// console.log("abc abc".match(/(?:abc)+/))// ["abcabc"] - no capture, just grouping
```

</div>

</div>

</div>

---
hideInToc: true
---

# Backreferences in patterns: `"\N"` and `"\k<name>"`

<div class="grid grid-cols-2 gap-4 text-sm">

<div>


Backreferences let you **reuse** a captured group later in the same pattern.

<div class="mt-3 text-xs">

### Syntax:

- `\N` - Reference group N (e.g., `\1`, `\2`)
- `\k<name>` - Reference named group

</div>

<div class="mt-4 p-3 bg-teal-50 dark:bg-teal-900/30 dark:text-teal-100 rounded text-xs">

**Common use:** Find repeated words, matching quotes, duplicate patterns

</div>

</div>

<div>


<div style="font-size: 0.7rem;">

```js {monaco-run} {autorun: false}
const text = "hello hello world"
// console.log(text.match(/\b(\w+) \1\b/))// ["hello hello", "hello"]
// \1 references first captured group

// Match same quote type
const quoted = `"hello" 'world' "test"`
// console.log(quoted.match(/(['"])(.*?)\1/g))// [""hello"", "'world'", ""test""]
// \1 ensures closing quote matches opening

// Find repeated characters
// console.log("bookkeeper".match(/(\w)\1/g))// ["oo", "kk", "ee"]

// Named backreference
const date = "2024-12-12"
// console.log(date.match(/(?<month>\d{2})-\k<month>/))// Matches when month == day
```

</div>

</div>

</div>

---
hideInToc: true
---

# Alternation "|"

<div class="grid grid-cols-2 gap-4 text-sm">

<div>


The pipe `|` means **OR** - match one pattern **or** another.

<div class="mt-3 text-xs">

**Syntax:** `pattern1|pattern2|pattern3`

</div>

<div class="mt-4 p-3 bg-indigo-50 dark:bg-indigo-900/30 dark:text-indigo-100 rounded text-xs">

**⚠️ Tip:** Alternation checks from **left to right** and stops at first match

</div>

</div>

<div>


<div style="font-size: 0.7rem;">

```js {monaco-run} {autorun: false}
// Match different options
// console.log("cat".match(/cat|dog|bird/))  // ["cat"]
// console.log("dog".match(/cat|dog|bird/))  // ["dog"]

// With word boundaries
const text = "I like cats and dogs"
// console.log(text.match(/\b(cat|dog)s?\b/g))// ["cats", "dogs"]

// Match file extensions
const file = "image.jpg"
// console.log(file.match(/\.(jpg|png|gif|webp)$/))// [".jpg", "jpg"]

// Match different date formats
const dates = ["2024-12-25", "12/25/2024", "25.12.2024"]
const pattern = /\d{4}-\d{2}-\d{2}|\d{2}\/\d{2}\/\d{4}|\d{2}\.\d{2}\.\d{4}/
// dates.forEach(d => console.log(d.match(pattern)[0]))// Matches all three formats

// Order matters!
// console.log("aa".match(/a|aa/))   // ["a"] - stops at first
// console.log("aa".match(/aa|a/))   // ["aa"] - longer first
```

</div>

</div>

</div>

---
hideInToc: true
---

# Lookahead and lookbehind "(?=...)", "(?<=...)"

<div class="grid grid-cols-2 gap-3 text-sm">

<div>


Check if pattern exists **without including it** in match.

<div class="text-xs mt-2">

<div class="grid grid-cols-1 gap-2">

<div class="p-2 bg-green-50 dark:bg-green-900/30 dark:text-green-100 rounded">

**`(?=...)`** Positive lookahead
Match if followed by...

</div>

<div class="p-2 bg-red-50 dark:bg-red-900/30 dark:text-red-100 rounded">

**`(?!...)`** Negative lookahead
Match if NOT followed by...

</div>

<div class="p-2 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-100 rounded">

**`(?<=...)`** Positive lookbehind
Match if preceded by...

</div>

<div class="p-2 bg-yellow-50 dark:bg-yellow-900/30 dark:text-yellow-100 rounded">

**`(?<!...)`** Negative lookbehind
Match if NOT preceded by...

</div>

</div>

</div>

</div>

<div>


<div style="font-size: 0.65rem;">

```js {monaco-run} {autorun: false}
// Lookahead: find numbers followed by €
// console.log("1€ 2$ 3€".match(/\d(?=€)/g))// ["1", "3"] - matches digits before €

// Negative lookahead: NOT followed by
// console.log("file.txt file.js".match(/file(?!\.txt)/g))// ["file"] - from file.js only

// Lookbehind: preceded by $
// console.log("$100 €200".match(/(?<=\$)\d+/))// ["100"] - number after $

// Negative lookbehind: NOT preceded by
// console.log("$100 €200".match(/(?<!\$)\d+/g))// ["200"] - not after $

// Password validation (lookahead)
const hasDigit = /(?=.*\d)/
const hasLower = /(?=.*[a-z])/
const hasUpper = /(?=.*[A-Z])/
const pass = "Abc123"
// console.log( hasDigit.test(pass) && hasLower.test(pass) && hasUpper.test(pass) )  // true
```

</div>

</div>

</div>

---
hideInToc: true
---

# Catastrophic backtracking

<div class="grid grid-cols-2 gap-4 text-sm">

<div>


Some regex patterns cause **exponential time** to match, freezing your app!

<div class="mt-3 text-xs">

### Dangerous patterns:

- `(a+)+` - nested quantifiers
- `(a|a)*` - overlapping alternatives
- `(a|ab)*` - alternative prefixes

</div>

<div class="mt-4 p-3 bg-red-50 dark:bg-red-900/30 dark:text-red-100 rounded text-xs">

**⚠️ Warning:** These patterns can take seconds or minutes on long strings!

</div>

</div>

<div>


<div class="text-xs">

<div style="font-size: 0.7rem;">

```js {monaco-run} {autorun: false}
// BAD: Catastrophic! (Don't run on long strings)
// /^(a+)+$/ on "aaaa...b" = VERY SLOW
// GOOD: Use atomic groups or possessive quantifiers
// /^(a+)$/ - simple, fast
// BAD: Nested quantifiers
// /(x+)*/
// GOOD: Single quantifier
// /x*/

// Tips to avoid:
// 1. Avoid nested quantifiers: (a+)+
// 2. Be specific with patterns
// 3. Use anchors (^ $) when possible
// 4. Test with long strings
// 5. Use regex validators/linters

const safe = "hello"
const pattern = /^[a-z]+$/  // Simple, safe
// console.log(pattern.test(safe))  // true

// If you must use complex patterns,
// add timeouts or use specialized libraries
```

</div>

</div>

</div>

</div>

---
hideInToc: true
---

# Named groups: `"(?<name>...)"`

<div class="grid grid-cols-2 gap-4 text-sm">

<div>


Use `(?<name>...)` to give groups **descriptive names** instead of numbers.

<div class="mt-3 text-xs">

### Benefits:

- More readable code
- Self-documenting patterns
- Easier maintenance

### Access via:
- `match.groups.name`
- `$<name>` in replace

</div>

</div>

<div>


<div style="font-size: 0.7rem;">

```js {monaco-run} {autorun: false}
// Parse date with named groups
const date = "2024-12-25"
const pattern = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
const match = date.match(pattern)

// console.log(match.groups.year)   // "2024"
// console.log(match.groups.month)  // "12"
// console.log(match.groups.day)    // "25"

const formatted = date.replace( pattern, '$<day>/$<month>/$<year>' )
// console.log(formatted)  // "25/12/2024"

// Parse URL
const url = "https://example.com:8080/path"
const urlPattern = /(?<protocol>https?):\/\/(?<domain>[^:\/]+)(:(?<port>\d+))?/

const urlMatch = url.match(urlPattern)
// console.log(urlMatch.groups.protocol)  // "https"
// console.log(urlMatch.groups.domain)    // "example.com"
// console.log(urlMatch.groups.port)      // "8080"
```

</div>

</div>

</div>

---
hideInToc: true
---

# Sticky flag "y", searching at position

<div class="grid grid-cols-2 gap-4 text-sm">

<div>


The sticky flag makes regex match **only at the exact position** (`lastIndex`).

<div class="mt-3 text-xs">

**Without `y`:** Searches anywhere after `lastIndex`

**With `y`:** Must match exactly at `lastIndex`

</div>

<div class="mt-4 p-3 bg-purple-50 dark:bg-purple-900/30 dark:text-purple-100 rounded text-xs">

**Use case:** Tokenizers, parsers - when you need precise position matching

</div>

</div>

<div>


<div style="font-size: 0.7rem;">

```js {monaco-run} {autorun: false}
const text = "let x = 10"

// Without sticky - searches from position
const reg = /\w+/g
reg.lastIndex = 4
// console.log(reg.exec(text))  // ["x"] - found later

// With sticky - must match AT position
const sticky = /\w+/y
sticky.lastIndex = 0
// console.log(sticky.exec(text))  // ["let"]

sticky.lastIndex = 4
// console.log(sticky.exec(text))  // ["x"] - at position 4

sticky.lastIndex = 3  // space position
// console.log(sticky.exec(text))  // null - no match at 3

// Practical: simple tokenizer
function tokenize(str) {
  const pattern = /\w+|[^\w\s]/y
  const tokens = []
  let match

  while (match = pattern.exec(str)) {
    tokens.push(match[0])
  }
  return tokens
}

// console.log(tokenize("x = 5"))// ["x", "=", "5"]
```

</div>

</div>

</div>

---
hideInToc: true
---

# Methods of RegExp and String

<div class="grid grid-cols-2 gap-3 text-xs max-h-[500px] overflow-y-auto pb-20">

<div>

## String Methods

<div class="space-y-2 mt-2">

<div class="p-2 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-100 rounded">

**`str.match(regexp)`**
Returns array of matches or null

```js
"abc".match(/\w/g)  // ["a","b","c"]
```

</div>

<div class="p-2 bg-green-50 dark:bg-green-900/30 dark:text-green-100 rounded">

**`str.matchAll(regexp)`**
Returns iterator of all matches with groups

```js
[..."a1 b2".matchAll(/(\w)(\d)/g)]
```

</div>

<div class="p-2 bg-yellow-50 dark:bg-yellow-900/30 dark:text-yellow-100 rounded">

**`str.search(regexp)`**
Returns index of first match or -1

```js
"hello".search(/l/)  // 2
```

</div>

<div class="p-2 bg-purple-50 dark:bg-purple-900/30 dark:text-purple-100 rounded">

**`str.replace(regexp, replacement)`**
Replace matches

```js
"hi".replace(/i/, "ello")  // "hello"
```

</div>

<div class="p-2 bg-pink-50 dark:bg-pink-900/30 dark:text-pink-100 rounded">

**`str.split(regexp)`**
Split string by pattern

```js
"a1b2c".split(/\d/)  // ["a","b","c"]
```

</div>

</div>

</div>

<div>

## RegExp Methods

<div class="space-y-2 mt-2">

<div class="p-2 bg-red-50 dark:bg-red-900/30 dark:text-red-100 rounded">

**`regexp.test(str)`**
Returns true/false

```js
/\d/.test("abc")  // false
/\d/.test("a1c")  // true
```

</div>

<div class="p-2 bg-indigo-50 dark:bg-indigo-900/30 dark:text-indigo-100 rounded">

**`regexp.exec(str)`**
Returns match details or null

```js
const r = /(\w)(\d)/
r.exec("a1")  // ["a1", "a", "1"]
```

</div>

</div>

<div style="font-size: 0.65rem;">

```js {monaco-run} {autorun: false}
const text = "abc 123 xyz 456"

// test - boolean check
// console.log(/\d+/.test(text))  // true
// match - get all matches
// console.log(text.match(/\d+/g))  // ["123", "456"]
// search - find position
// console.log(text.search(/\d/))  // 4
// replace - substitute
// console.log(text.replace(/\d+/g, '#'))// "abc # xyz #"
// split - break apart
// console.log(text.split(/\s+/))// ["abc", "123", "xyz", "456"]
// exec - detailed match
const re = /(\w+) (\d+)/g
// console.log(re.exec(text))// ["abc 123", "abc", "123"]
```

</div>

</div>

</div>

---
hideInToc: true
---

# RegExp Golf Exercise

<RegExpGolf />

---
hideInToc: true
---

# Performance Tips

<PerformanceTips />
