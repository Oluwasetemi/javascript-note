---
layout: center
transition: none
hideInToc: true
routeAlias: chapter-code-quality
---

# Code Quality


<div mt-2 />

- <a @click="$slidev.nav.go($nav.currentPage+1)">Linters and Code Formatters</a>
- <a @click="$slidev.nav.go($nav.currentPage+2)">Types</a>
- <a @click="$slidev.nav.go($nav.currentPage+4)">Test</a>
- <a @click="$slidev.nav.go($nav.currentPage+6)">Debugging in the Browser</a>
- <a @click="$slidev.nav.go($nav.currentPage+7)">A Peep into Performance</a>

---
hideInToc: true
layout: center
---

# Linters and Code Formatters

- _Linters_ and _Formatters_ are an essential tool in Javascript development for improving code quality and consistency.
  Linters identify and flag potential errors, syntax issues, and deviations from coding standards.
  They enforce best practices, catch unused variables, bad patterns, and more. A popular linter for Javascript is {ESLint}.
  Formatters automatically format code to follow a consistent style across the codebase. They ensure proper indentation, consistent use of quotes, and other stylistic elements. A popular formatter for javascript is {Prettier}.
  Linters prevent bugs and enforce coding rules, while formatters ensure code readability.

You should configure your linter and formatter to work together in your project. This ensures that your code is both error-free and consistently formatted. Typically, you can integrate them into your code editor or build process to automatically check and format your code with tools like <span class="text-red-400">[**Husky**](https://typicode.github.io/husky)</span> or [Simple Git Hooks](https://github.com/toplenboren/simple-git-hooks){.text-red-400.font-bold} and <span class="text-red-400">[**Lint-staged**](http://lint-staged.js.org)</span>.

{TypeScript} is a statically typed superset of JavaScript that adds optional types to the language. It helps catch errors early in the development process and improves code quality by providing better documentation and code completion. TypeScript is a popular choice for large codebases and projects that require high code quality.

---
hideInToc: true
---

# Types

- Code quality refers to how well written, maintainable, and functional a piece of code is.
  High-quality code generally adheres to certain principles that ensures that it&apos;s efficient, readable, and easy to maintain. Here are several types or measures of code quality:

<br/>


<ol>
<li> <strong>Readability</strong>: code that is easy to understand, even for developers who didn't write it. Readable code is like a well-organized recipe book. Can others easily read and understand your code?</li>

```js
function add(a, b) {
  return a + b
}
add(2, 3) //5
```

<li> <strong>Maintainability</strong>: the ease with which code can be changed or updated without introducing new bugs.</li>
<li> <strong>Performance</strong>: the speed and efficiency with which the code executes.</li>
<li> <strong>Security</strong>: how well the code prevents unauthorized access or attacks.</li>
<li> <strong>Reliability</strong>: the ability of the code to run without errors or crashes under expected conditions.</li>
</ol>


---
hideInToc: true
name: More on Code Quality
---


6. <strong>Testability</strong>: the extent to which code can be easily tested. Testable code ensures that bugs can be caught early and improves the reliability of future changes.
7. <strong>Modularity</strong>: code that is divided into distinct modules, each handling a specific responsibility.
8. <strong>Scalability</strong>: how well the code can handle increased load or larger datasets.
9. <strong>Consistency</strong>: the uniformity of coding styles, conventions, and structures across a project.
10. <strong>Reusability</strong>: the degree to which code components can be reused in other projects or parts of the system.

Install {ESLint} and {Prettier} extensions in your code editor as the starting point. They will help you catch errors and enforce coding standards as you write code. We will discuss writing tests with {Vitest}, using {TypeScript}, and debugging in the browser in the next sections.

```ts twoslash
function add(a: number, b: number): number {
  return a + b
}
add(2, 3) //5
```


<br/>

---
hideInToc: true
---

# Test

<div></div>
Test is a critical part of the software development process that ensures the code works as expected and meets the requirements. Your code is only as good as the tests that verify it. Writing tests helps catch bugs early, improve code quality, and ensure that changes don't break existing functionality.

```js
function add(a, b) {
  return a + b
}

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3)
})

test('adds -1 + -1 to equal -2', () => {
  expect(add(-1, -1)).toBe(-2)
})
```


- **Unit test**: it lets you test individual components and functions in isolation. Tools include {Vitest}, Jest, Mocha, and Jasmine.

- **Integration test**: it lets you test interactions between components and modules, ensuring that they work together correctly. Tools include {Vitest}, Mocha, Cypress, and Supertest.


---
hideInToc: true
name: More on Test
---


- **End-to-end (E2E) test**: it simulates user actions and tests the entire application flow from start to finish. Tools include Cypress, Selenium, and Playwright.

- **Performance test**: it measures the system's speed, responsiveness, and stability under various conditions. Tools include Lighthouse and Apache JMeter.

- **Load and stress test**: it checks how the system behaves under heavy loads and whether it can handle traffic spikes. Tools include Apache JMeter and k6.

- **Security test**: it identifies exploitable vulnerabilities and helps protect the application from threats such as SQL injection and XSS. Tools include SonarQube and OWASP ZAP.

- **Accessibility test**: it checks whether the application meets standards such as WCAG and is usable by people with disabilities. Tools include Lighthouse and Axe.

- **Code quality and static analysis**: it analyzes code for potential bugs, style problems, and maintainability issues. Tools include ESLint.

- **Regression test**: it ensures that changes do not break existing functionality. Tools include Jest, Mocha, and Cypress.


---
hideInToc: true
---

# Debugging in the Browser

<div></div>
Debugging involves identifying and resolving errors within a script. Fortunately, 
modern browsers and many other development environments provide debugging tools. 
These tools offer a user-friendly interface within developer tools, making the debugging process much smoother.

Additionally, they allow developers to step through the code, examining it line by line to understand precisely what&apos;s happening. Every modern browser comes with built-in DevTools. These browsers are <span class="text-green-400">Chrome, Firefox, and Edge</span>. Developer Tools(DevTools) allow us to inspect and change styles, examine the webpage's code(HTML, CSS and Javascript), simulate different devices, debug Javascript, find memory and performance issues. Right click on a webpage and click `Inspect` to open the DevTools.


1. **Elements**: Inspects and modifies HTML/CSS in real time, displaying the DOM structure.
2. **Console**: Logs errors, messages, and allows execution of JavaScript for debugging.
3. **Performance**: Analyzes runtime performance, highlighting issues like slow rendering and bottlenecks.
4. **Sources**: Displays webpage files and allows code debugging with breakpoints.
5. **Network**: Tracks all network requests, helping optimize load times and resource usage.
6. **Lighthouse**: Audits page performance, accessibility, and SEO, providing improvement suggestions.
7. **Memory**: Analyzes memory usage, helping detect and resolve memory leaks.


---
hideInToc: true
---

# [A Peep into Performance](https://web.dev/learn/performance)

<div></div>
When debugging performance issues in a browser, 
Chrome DevTools offers several tools to help analyze and resolve problems. 
The Performance panel is key to understanding how your web page executes. 
By recording a session, it provides insights into page load time, JavaScript execution, rendering, and more. 
You can identify bottlenecks like long-running scripts, slow network requests, or inefficient layout recalculations.

The Timeline view gives a detailed breakdown of activities, helping you isolate delays and optimize for better performance.
It&apos;s crucial for enhancing the user experience by ensuring your site loads quickly and responds smoothly.

<span class="text-green-400">[Lighthouse](https://developer.chrome.com/docs/lighthouse)</span> is an open-source, automated tool for improving the quality of web pages.
You can run it against any web page, public or requiring authentication.
It has audits for performance, accessibility, progressive web apps, SEO, and more.
