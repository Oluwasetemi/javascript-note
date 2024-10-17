---
layout: center
transition: slide-up
hideInToc: true
---

# Code Quality

- Code quality is a set of practices that help to ensure that your code is readable, maintainable, and reliable.
- Linters
- Formatters
- Standards.
- Types
- Debugging in the Browser.
- Writing Tests
- Performance

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

You should configure your linter and formatter to work together in your project. This ensures that your code is both error-free and consistently formatted. Typically, you can integrate them into your code editor or build process to automatically check and format your code with tools like <span className="text-red-400">[**Husky**](https://typicode.github.io/husky)</span> or [Simple Git Hooks](https://github.com/toplenboren/simple-git-hooks){.text-red-400.font-bold} and <span className="text-red-400">[**Lint-staged**](http://lint-staged.js.org)</span>.

{TypeScript} is a statically typed superset of JavaScript that adds optional types to the language. It helps catch errors early in the development process and improves code quality by providing better documentation and code completion. TypeScript is a popular choice for large codebases and projects that require high code quality.

---
hideInToc: true
---

# Types

- Code quality refers to how well written, maintainable, and functional a piece of code is.
  High-quality code generally adheres to certain principles that ensures that it&apos;s efficient, readable, and easy to maintain. Here are several types or measures of code quality:

<br/>

<v-clicks>

<ol>
<li> <strong>Readability</strong>: code that is easy to understand, even for developers who didn't write it. Readable code is like a well organized recipe book. Can others easily read and understand your code?</li>

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

</v-clicks>

---
hideInToc: true
name: More on Code Quality
clicksStart: 1
---

<v-clicks>

6. <strong>Testability</strong>: the extent to which code can be easily tested. Testable code ensures that bugs can be caught early and improves the reliability of future changes.
7. <strong>Modularity</strong>: code that is divided into distinct modules, each handling a specific responsibility.
8. <strong>Scalability</strong>: how well the code can handle increased load or larger datasets.
9. <strong>Consistency</strong>: the uniformity of coding styles, conventions, and structures across a project.
10. <strong>Reusability</strong>: the degree to which code components can be reused in other projects or parts of the system.

Install {ESLint} and {Prettier} extensions in your code editor as the starting point. They will help you catch errors and enforce coding standards as you write code. We will discuss more about writing tests using {Vitest}, {TypeScript} and debugging in the browser in the next sections.

```ts twoslash
function add(a: number, b: number): number {
  return a + b
}
add(2, 3) //5
```

</v-clicks>

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

<v-clicks>

- **Unit test**: it allows you test individual components and functions in isolation to ensure that each part of the code works. Tools you can use are {Vitest}, Jest, Mocha and Jasmine.

- **Integration test**: it allows you test the interaction between components and modules, ensuring that the combined parts work together. Tools you can use are {Vitest}, Mocha, Cypress, Supertest.

</v-clicks>

---
hideInToc: true
name: More on Test
clicksStart: 1
---

<v-clicks>

- **End-to-End(E2E) test**: it allows you simulate user actions and test the entire application flow from start to finish. Tools you can use are Cypress, Selenium, Playwright, Storybook.

- **Performance test**: it allows you to measure the speed, responsiveness, and stability of the system under various conditions. Tools you can use are Lighthouse, Apache JMeter.

- **Load and stress test**: it checks how the system behaves under heavy loads or stress conditions, ensuring that the system can handle expected and unexpected spikes in traffic. eg Apache JMeter, K6.

- **Security test**: it identifies vulnerabilities in the code that could be exploited, ensuring the application is secure from common threats like SQL injection or XSS attacks eg SonarQube, OWASP ZAP.

- **Accessibility test**: Ensure the application meets accessibility standards (like WCAG) to be usable by all users, including those with disabilities eg Lighthouse, Axe.

- **Code quality and static analysis**: it analyzes the code for potential bugs, stylistic errors, and maintainability issues eg ESLint.

- **Regression test**: it ensures that new changes or updates do not break existing functionality in your application eg Jest , Mocha, Cypress.

</v-clicks>

---
hideInToc: true
---

# Debugging in the Browser

<div></div>
Debugging involves identifying and resolving errors within a script. Fortunately, 
modern browsers and many other development environments provide debugging tools. 
These tools offer a user-friendly interface within developer tools, making the debugging process much smoother.

Additionally, they allow developers to step through the code, examining it line by line to understand precisely what&apos;s happening. Every modern browser comes with built-in DevTools. These browsers are <span className="text-green-400">Chrome, Firefox, and Edge</span>. Developer Tools(DevTools) allow us to inspect and change styles, examine the webpage's code(HTML, CSS and Javascript), simulate different devices, debug Javascript, find memory and performance issues. Right click on a webpage and click `Inspect` to open the DevTools.

<v-clicks>

1. **Elements**: Inspects and modifies HTML/CSS in real time, displaying the DOM structure.
2. **Console**: Logs errors, messages, and allows execution of JavaScript for debugging.
3. **Performance**: Analyzes runtime performance, highlighting issues like slow rendering and bottlenecks.
4. **Sources**: Displays webpage files and allows code debugging with breakpoints.
5. **Network**: Tracks all network requests, helping optimize load times and resource usage.
6. **Lighthouse**: Audits page performance, accessibility, and SEO, providing improvement suggestions.
7. **Memory**: Analyzes memory usage, helping detect and resolve memory leaks.

</v-clicks>

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

<span className="text-green-400">[Lighthouse](https://developer.chrome.com/docs/lighthouse)</span> is an open-source, automated tool for improving the quality of web pages.
You can run it against any web page, public or requiring authentication.
It has audits for performance, accessibility, progressive web apps, SEO, and more.
