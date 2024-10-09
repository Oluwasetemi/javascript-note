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

- *Linters* and *Formatters* are an essential tool in Javascript development for improving code quality and consistency.
 Linters identify and flag potential errors, syntax issues, and deviations from coding standards.
They enforce best practices, catch unused variables, bad patterns, and more. A popular linter for Javascript is <span className="text-red-400">[**ESLint**](https://eslint.org)</span>. 
Formatters automatically format code to follow a consistent style across the codebase. They ensure proper indentation, consistent use of quotes, and other stylistic elements. A popular formatter  for javascript is <span className="text-red-400">[**Prettier**](https://prettier.io)</span>. 
Linters prevent bugs and enforce coding rules, while formatters ensure code readability.

---
hideInToc: true
---

# Types

- Code quality refers to how well written, maintainable, and  functional a piece of code is. 
High-quality code generally adheres to certain principles that ensures that it&apos;s efficient, readable, 
and easy to maintain. Here are several types or measures of code quality:

<br/>
<v-clicks>
<ol>
<li> <strong>Readabilty</strong>: code that is easy to understand, even for developers who didn't write it. Readable code is like a well organized recipe book. Can others easily read and understand your code?</li>

```js
 function add(a, b){
   return a + b
 }
add(2,3); //5
```

<li> <strong>Maintainability</strong>: the ease with which code can be changed or updated without introducing new bugs.</li>
<li> <strong>Performance</strong>: the speed and efficiency with which the code executes.</li>
<li> <strong>Security</strong>: how well the code prevents unauthorized access or attacks.</li>
<li> <strong>Reliability</strong>: the ability of the code to run without errors or crashes under expected conditions.</li>
<li><strong>Testability</strong>: the extent to which code can be easily tested. Testable code ensures that bugs can be caught early and improves the reliability of future changes.</li>
</ol>
</v-clicks>

---
hideInToc: true
--- 

<v-clicks>

7. <strong>Modularity</strong>: code that is divided into distinct modules, each handling a specific responsibility.
8. <strong>Scalability</strong>: how well the code can handle increased load or larger datasets.
9. <strong>Consistency</strong>: the uniformity of coding styles, conventions, and structures across a project.
10. <strong>Reusability</strong>: the degree to which code components can be reused in other projects or parts of the system.
</v-clicks>

<br/>

# Test
<div></div>
There are several types of tests used to check code quality, each designed to target different aspects of a software project. Here's a breakdown of the most common types:

<v-clicks>

- **Unit test**: it allows you test individual components and functions in isolation to ensure that each part of the code works. Tools you can use are Jest, Mocha and Jasmine.

- **Integration test**: it allows you test the interaction between components and modules, ensuring that the combined parts work together. Tools you can use are Mocha, Cypress, Supertest.

- **End-to-End(E2E) test**: it allows you simulate user actions and test the entire application flow from start to finish. Tools you can use are Cypress, Selenium, Playwright.
</v-clicks>

---
hideInToc: true
---

<v-clicks>

- **Performance test**: it allows you to measure the speed, responsiveness, and stability of the system under various conditions. Tools you can use are Lighthouse, Apache JMeter.

- **Load and stress test**: it checks how the system behaves under heavy loads or stress conditions, ensuring that the system can handle expected and unexpected spikes in traffic. eg Apache JMeter, K6.

- **Security test**: it identifies vulnerabilities in the code that could be exploited, ensuring the application is secure from common threats like SQL injection or XSS attacks eg SonarQube, OWASP ZAP.

- **Accessibility test**: Ensure the application meets accessibility standards (like WCAG) to be usable by all users, including those with disabilities eg Lighthouse, Axe.

- **Code quality and static analysis**: it analyzes the code for potential bugs, stylistic errors, and maintainability issues eg ESLint.

-  **Regression test**: it ensures that new changes or updates do not break existing functionality in your appliaction eg Jest , Mocha, Cypress.
</v-clicks>

--- 
hideInToc: true
--- 

# Debugging in the Browser

<div></div>
Debugging involves identifying and resolving errors within a script. Fortunately, 
modern browsers and many other development environments provide debugging tools. 
These tools offer a user-friendly interface within developer tools, making the debugging process much smoother.
Additionally, they allow developers to step through the code, examining it line by line to understand precisely what&apos;s happening. 
Every modern browser comes with built-in DevTools. These browsers are <span className="text-green-400">Chrome, Firefox, and Edge</span>.
Developer Tools(DevTools) allow us to inspect and change styles, examine the webpage's code(HTML, CSS and Javascript), simulate different devices,
debug Javascript, find memory and performance issues.
<br/>
Here&apos;s a summarized description for each of the Chrome DevTools:
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

# A Peep into Performance
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








---