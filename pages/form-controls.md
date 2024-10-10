---
layout: center
transition: slide-up
hideInToc: true
---

# Form, Controls
<div mt-2 />

- Form properties and methods
- Focusing: focus/blur
- Events: change, input, cut, copy, paste
- Form submission: event and method submit
- Form validation: novalidate, HTML attributes, constraint validation API
- Form elements: input, select, textarea, button, label, fieldset, legend





---
hideInToc: true
---

# Form properties and methods

<v-clicks>
Forms are essential components of web development, allowing users to input data and interact with web applications. Understanding how to work with forms and their elements using JavaScript is crucial for creating dynamic and interactive web pages.
Forms can be accessed using the document.forms collection. This is a "named collection," meaning you can access forms by both name and index.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
  <rect x="5" y="5" width="190" height="90" fill="#f0f0f0" stroke="#000" stroke-width="1"/>
  <text x="100" y="20" text-anchor="middle" font-size="5" font-weight="bold">document</text>
  <rect x="20" y="25" width="160" height="25" fill="#d0e0ff" stroke="#000" stroke-width="1"/>
  <text x="100" y="41" text-anchor="middle" font-size="5">forms</text>
  <rect x="30" y="60" width="60" height="20" fill="#ffe0d0" stroke="#000" stroke-width="1"/>
  <text x="60" y="74" text-anchor="middle" font-size="2">form[0]</text>
  <rect x="110" y="60" width="60" height="20" fill="#ffe0d0" stroke="#000" stroke-width="1"/>
  <text x="140" y="74" text-anchor="middle" font-size="2">form["name"]</text>
  <path d="M100 50 L60 60 M100 50 L140 60" stroke="#000" stroke-width="0.5" fill="none"/>
</svg>

</v-clicks>

---

<v-clicks>

A form may have one or many ‹fieldset› elements inside it. They also have elements property that lists form controls inside them. The HTML ‹fieldset› element gets used to group several controls as well as labels (›label›) within a web form. We can access the Fieldset properties via the form.elements property.

```js{monaco-run} {autorun: false}
// Create the form element
const form = document.createElement('form');
form.id = 'form';
const fieldset = document.createElement('fieldset');
fieldset.name = 'userFields';
// Create the legend element
const legend = document.createElement('legend');
legend.textContent = 'info';
// Create the input element
const input = document.createElement('input');
input.name = 'login';
input.type = 'text';
fieldset.appendChild(legend);
fieldset.appendChild(input);
form.appendChild(fieldset);
document.body.appendChild(form);
console.log(form.elements.login);
let userFieldset = form.elements.userFields;
console.log(userFieldset);
console.log(userFieldset.elements.login == form.elements.login); // true
```
</v-clicks> 
---

# Backreference: element.form

<v-clicks>

The form is available as element.form for any element. So, the form references every element, and all elements reference the form.

 ![backrefernce-diagram](https://res.cloudinary.com/olubebe/image/upload/v1728214102/Screenshot_2024-10-06_122618_astkg3.png)


```js
<form id="form">
  <input type="text" name="login" />
</form>

<script>
  // form -> element
  let login = form.login;

  // element -> form
  console.log(login.form); // HTMLFormElement
</script>

```
</v-clicks>

---
 
 # Form Element Properties
 <v-clicks>
Different form elements have various properties that allow you to interact with them programmatically.

### Input and Textarea
For input and textarea elements, you can access and modify their values using the value property.
We can access their value as input.value (string) or input.checked (boolean) for checkboxes and radio buttons.

```js
input.value = "New value";
textarea.value = "New text";

input.checked = true; // for a checkbox or radio button
```

<b>NOTE:</b>Use textarea.value, not textarea.innerHTML
Please note that even though textarea...textarea holds its value as nested HTML, we should never use textarea.innerHTML to access it.

It stores only the HTML that was initially on the page, not the current value.

</v-clicks>

---

# CONTD

<v-clicks>

```js{monaco-run} {autorun: false}
const form = document.createElement("form");
form.name = "myForm";
const usernameInput = document.createElement("input");
usernameInput.name = "username";
usernameInput.type = "text";
form.appendChild(usernameInput);
const rememberCheckbox = document.createElement("input");
rememberCheckbox.name = "remember";
rememberCheckbox.type = "checkbox";
form.appendChild(rememberCheckbox);
const commentTextarea = document.createElement("textarea");
commentTextarea.name = "comment";
form.appendChild(commentTextarea);
document.body.appendChild(form);
function updateValues() {
  form.username.value = "JohnDoe";
  form.remember.checked = true;
  form.comment.value = "This is a comment.";
  console.log("Username:", form.username.value);
  console.log("Remember checked:", form.remember.checked);
  console.log("Comment:", form.comment.value);
}
updateValues();
```

</v-clicks>

---

# Select and Option
<v-clicks>

The <kbd>select</kbd> element has special properties for working with its options:

- select.options: Collection of <kbd>option</kbd> elements
- select.value: Value of the currently selected option
- select.selectedIndex: Index of the currently selected option. <br/>
<b>new Option:</b>
In the specification there’s a nice short syntax to create an <kbd>option</kbd> element
- text – the text inside the option,
- value – the option value,
- defaultSelected – if true, then selected HTML-attribute is created,
- selected – if true, then the option is selected.
The difference between defaultSelected and selected is that defaultSelected sets the HTML-attribute (that we can get using option.getAttribute('selected'), while selected sets whether the option is selected or not.

````md magic-move
```js
option = new Option(text, value, defaultSelected, selected);
// This syntax is optional. We can use document.createElement('option') and set attributes manually.
```
```js
// Unselected
let option = new Option("Text", "value");
// creates 
<option value="value">Text</option>
```
```js
// selected
let option = new Option("Text", "value", true, true);
```
````


</v-clicks>

---

<v-clicks>

```js{monaco-run} {autorun: false}
// Create select element
const select = document.createElement('select');
select.id = 'select';
// Define options
const options = [
    { value: 'apple', text: 'Apple' },
    { value: 'pear', text: 'Pear' },
    { value: 'banana', text: 'Banana' }
];
// Add options to select
options.forEach(option => {
    select.add(new Option(option.text, option.value));
});
// Append select to body
document.body.appendChild(select);
// Demonstrate three ways to select the third option (Banana)
console.log("Initial selected index:", select.selectedIndex);
// Method 1: Using options[index].selected
select.options[2].selected = true;
console.log("After method 1 - Selected index:", select.selectedIndex, "Selected value:", select.value);
// Method 2: Using selectedIndex
select.selectedIndex = 2;
console.log("After method 2 - Selected index:", select.selectedIndex, "Selected value:", select.value);
// Method 3: Using value
select.value = 'banana';
console.log("After method 3 - Selected index:", select.selectedIndex, "Selected value:", select.value);
// Note: options start from zero, so index 2 means the 3rd option.
```

</v-clicks>

---

<v-clicks>

```js{monaco-run} {autorun: false}
// Create form and select elements
const form = document.createElement('form');
const select = document.createElement('select');
select.name = 'week';
// Add initial options
['Monday', 'Tuesday', 'Wednesday'].forEach(day => {
    select.add(new Option(day));
});
// Append select to form and form to body
form.appendChild(select);
document.body.appendChild(form);
// Now, modify the select element as per the script
var w = document.forms[0].week;
w.length = 0; // Clear all options
var d = [
    { text: 'Thurs', val: 'thurs' },
    { text: 'Friday', val: 'fri' },
    { text: 'Saturday', val: 'sat' },
    { text: 'Sunday', val: 'sun' },
];
for (var i = 0; i < d.length; i++) {
    w[i] = new Option(d[i].text, d[i].val, false, false);
}
// Log the final state of the select element
console.log('Final options:', Array.from(w.options).map(opt => opt.text));
```
</v-clicks>



---

## Class Activity
Task 1: 
There’s a <kbd>select</kbd>:
```js
<select id="genres">
  <option value="rock">Rock</option>
  <option value="blues" selected>Blues</option>
</select>
// Use JavaScript to:
// Show the value and the text of the selected option.
// Add an option: <option value="classic">Classic</option>.
// Make it selected.
// Note, if you’ve done everything right, your alert should show blues.
```

<details>
<summary>Answer</summary>

- [Task 1 Answer](https://codepen.io/Faith-Oluwibe/pen/OJKRXOW)

</details>


--- 


# Focusing: focus/blur

<v-clicks>

### Focusing and Blurring: Managing User Input with Events in JavaScript
In web development, managing focus and blur events is essential when dealing with user interaction in forms and other input elements. These events allow developers to control what happens when a user interacts with form fields, such as text boxes, drop-down menus, and buttons. Focusing and blurring events play a crucial role in enhancing the user experience, ensuring proper validation, and providing visual feedback.

### Focus: Preparing for User Input
Focusing occurs when an element, typically an input field or button, receives the user's attention. This usually happens when the user clicks on an element or navigates to it using the keyboard, such as by pressing the Tab key. Focus events are critical because they often indicate that a user is ready to input data into that specific element.

</v-clicks>

---

# Autofocus Attribute

<v-clicks>
In HTML, you can automatically focus on an element when the page loads using the autofocus attribute:
```js
<input type="text" id="name" autofocus>
```
In this example, the input field with the id="name" will automatically receive focus when the page is loaded, making it immediately ready for the user to type.

### Focus Event Example
A focus event can also be handled programmatically using JavaScript. For instance, you can clear error messages when a user refocuses on a field that previously failed validation:
</v-clicks>

---

# CONTD

<v-clicks>

```js
Your email please: <input type="email" id="input">
<div id="error"></div>

<script>
  const input = document.getElementById('input');
  const error = document.getElementById('error');
  
  input.onfocus = function() {
    if (this.classList.contains('invalid')) {
      this.classList.remove('invalid');
      error.innerHTML = "";
    }
  };
</script>

```
In this example, the onfocus event handler is used to remove any visual indication of an error when the user focuses on the input field again, signaling that they want to correct the mistake.

</v-clicks>

---

# Blur: When Input is Completed

<v-clicks>

Blurring happens when the user moves away from an element, typically by clicking on another element or using the Tab key to move to the next form field. Blur events are useful for validating user input because they indicate that the user has finished interacting with that specific field.
Blur Event Example
Here's an example of using a blur event to validate an email input field:
```js
Your email please: <input type="email" id="input">
<div id="error"></div>

<script>
  input.onblur = function() {
    if (!input.value.includes('@')) { // basic email validation
      input.classList.add('invalid');
      error.innerHTML = 'Please enter a correct email.';
    }
  };
</script>
```
In this example, the onblur event handler checks if the entered email contains an "@" symbol. If it doesn't, an error message is displayed, and the input field is visually marked as invalid by adding the invalid CSS class.
</v-clicks>

---

# Focus and Blur Methods

<v-clicks>
In addition to handling focus and blur events, JavaScript provides two methods, <kbd>focus()</kbd><kbd> and blur()</kbd>, which allow you to programmatically set or unset the focus on an element.

Preventing Blur with JavaScript
You can use the <kbd>focus()</kbd> method to force focus to stay on an element until valid input is entered. Here's an example:

```js
Your email please: <input type="email" id="input">
<input type="text" placeholder="Try to focus here after entering an invalid email">

<script>
  input.onblur = function() {
    if (!this.value.includes('@')) {
      this.classList.add("error");
      input.focus();  // keep focus on the email field until a valid email is entered
    } else {
      this.classList.remove("error");
    }
  };
</script>
```
In this example, if the email field doesn't contain an "@" symbol, the focus remains on the input field, preventing the user from moving to the next field until a valid email is entered.

</v-clicks>

---

## JavaScript-Initiated Focus Loss

<v-clicks>
Sometimes, focus loss is triggered by JavaScript rather than user interaction. For example:

Alert dialogs: An alert box can take focus away from the input field temporarily.
Element removal: Removing an element from the DOM can also cause the element to lose focus.
When designing with focus and blur events, it's important to be cautious about unintentionally triggering focus loss. This can lead to unexpected behavior in your application, such as prematurely validating incomplete input.

Allowing Focus on Any Element: The tabindex Attribute
By default, only certain elements, like <kbd>input</kbd>, <kbd>button</kbd>, and <kbd>a</kbd>, can receive focus. However, you can make any element focusable using the tabindex attribute.

```html
<ul>
  <li tabindex="1">One</li>
  <li tabindex="0">Zero</li>
  <li tabindex="2">Two</li>
  <li tabindex="-1">Minus one (programmatically focusable only)</li>
</ul>

<style>
  li:focus { outline: 1px dashed green; }
</style>
```
 Elements with tabindex="-1" are not focusable using the keyboard, but can still be focused programmatically using the focus() method.

tabindex="1": First in tab order
tabindex="0": Follows the natural tab order, but is still focusable
tabindex="-1": Not focusable via keyboard, but focusable via JavaScript

</v-clicks>

---

## Focus Delegation: Using focusin and focusout
Focus and blur events do not bubble up the DOM, which can make it difficult to handle these events on a parent element, such as a form. However, you can use focusin and focusout events, which do bubble.

```js
<form id="form">
  <input type="text" name="name" value="Name">
  <input type="text" name="surname" value="Surname">
</form>

<style> .focused { outline: 1px solid red; } </style>

<script>
  const form = document.getElementById('form');
  
  form.addEventListener("focusin", () => form.classList.add('focused'));
  form.addEventListener("focusout", () => form.classList.remove('focused'));
</script>
```
In this example, when any input field inside the form receives focus, the entire form is visually highlighted by adding the focused class.

---

# Food for thought

How can you balance the use of autofocus to enhance usability without taking control away from users? Could it be more frustrating than helpful in certain situations?

<details>
<summary>Answer</summary>
To balance the use of `autofocus` without taking control away from users:

1. **Use Sparingly:** Apply autofocus only where it adds clear value, like in search bars or login forms. Overusing it in complex forms can disrupt user flow.
   
2. **Respect User Navigation:** Avoid forcing focus on elements that might interfere with how users prefer to navigate, especially when using keyboards or assistive tech.

3. **Context Matters:** Ensure autofocus aligns with user intent, such as when revisiting a form—don’t reset their progress unnecessarily. 

Autofocus should guide, not control.
</details>


---

# Events: change, input, cut, copy, paste

<v-clicks>

## Event: change
The change event occurs when an element’s value has been modified and the user completes the interaction, often by leaving the input field or selecting an option.

For text inputs: It triggers when the user finishes editing and moves the focus away from the input field.
For other elements like checkboxes, radio buttons, or select menus: It triggers immediately when the value is changed.
````md magic-move
```html
<input type="text" onchange="alert(this.value)">
<input type="button" value="Click me">
```

```html
<select onchange="alert(this.value)">
  <option value="">Select something</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</select>
```
````
Here, the alert will display the selected option as soon as the user changes it.

</v-clicks>

---

## Event: input

<v-clicks>

The input event fires every time the value of an input element changes. Unlike the change event, it is triggered immediately after each modification, whether from typing, pasting, or using speech recognition.

Best for real-time validation: Since input fires on every character change, it is ideal for scenarios where immediate feedback is needed (e.g., showing password strength, live search).

```js
<input type="text" id="input">
oninput: <span id="result"></span>

<script>
  const input = document.getElementById('input');
  const result = document.getElementById('result');
  
  input.oninput = function() {
    result.innerHTML = input.value;
  };
</script>
```
In this example, the result area updates with the text as the user types in the input field.

Limitation: The input event cannot be prevented using <kbd>event.preventDefault()</kbd>, as it triggers after the value has already been modified.
</v-clicks>
---

## Events: <kbd>cut</kbd>, <kbd>copy</kbd>, <kbd>paste</kbd>
<v-clicks>
These events handle the clipboard operations: cutting, copying, and pasting data. They are part of the ClipboardEvent class, which gives access to the clipboard's contents.

ClipboardData: The <kbd>event.clipboardData</kbd> object provides access to the data being cut, copied, or pasted. You can prevent the default behavior using <kbd>event.preventDefault()</kbd>.
```js
<input type="text" id="input">

<script>
  const input = document.getElementById('input');

  input.onpaste = function(event) {
    alert("Pasting: " + event.clipboardData.getData('text/plain'));
    event.preventDefault(); // Prevents pasting
  };

  input.oncut = input.oncopy = function(event) {
    alert(event.type + ': ' + document.getSelection());
    event.preventDefault(); // Prevents cutting or copying
  };
</script>
```
</v-clicks>

---

## CONTD

<v-clicks>

- The onpaste event handler prevents pasting and displays the pasted text.
- The oncut and oncopy handlers show the selected text and prevent the action from being completed.
Note:

Clipboard contents are only accessible in the context of user-initiated events (cut, copy, paste). It is not possible to dispatch custom clipboard events with dispatchEvent in most browsers, except Firefox.

### Food for Thought Question:
 How do you decide whether to use the change or input event for form validation, and in what scenarios might one be more effective than the other?

<details>
<summary>Answer</summary>
 The input event is more suitable when you need real-time validation, as it triggers with every change in the input, allowing immediate feedback (e.g., live password strength meter or character counter). On the other hand, the change event is more effective when you want validation after the user finishes interacting with the field, like confirming the input only after the field loses focus. This might be better for complex validations or when frequent checks can interrupt the user experience. Balancing these events depends on the nature of your form and the feedback you want to provide.
</details>

</v-clicks>
---

# Form Submission Events and Methods 

<v-clicks>
Form submission allows users to input data and send it to a server for processing. In JavaScript, we have two primary ways to handle form submissions:

- The submit event
- The form.submit() method

### The submit Event
The submit event is triggered when a form is submitted. It's commonly used to validate form data before sending it to the server or to prevent the default submission behavior and handle it with JavaScript instead.

#### How Forms Are Submitted
There are two main ways to submit a form:

- Clicking on an <kbd><input type="submit"></kbd> 
- Pressing Enter while focused on an input field within the form.

Both of these actions trigger the submit event on the form.
</v-clicks>

---

# Example : Basic Submit Event Handling & Form Validation
<v-clicks>

````md magic-move
```js
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting
  console.log('Form submitted!');
  
  // You can perform validation or other actions here
});
```
```js
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
form.addEventListener('submit', function(event) {
  let isValid = true;
  if (nameInput.value.trim() === '') {
    isValid = false;
    console.error('Name is required');
  }
  if (!isValidEmail(emailInput.value)) {
    isValid = false;
    console.error('Invalid email address');
  }
  if (!isValid) {
    event.preventDefault(); // Prevent form submission if validation fails
  }
});
function isValidEmail(email) {
  // Basic email validation regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
// This example demonstrates form validation. If the name is empty or the email is invalid, the form submission is prevented.
```
````

</v-clicks>

In this example, we're preventing the default form submission and logging a message to the console instead.
---

# The Relationship Between submit and click

<v-clicks>
Interestingly, when a form is submitted by pressing Enter in an input field, a click event is also triggered on the <kbd>input type="submit"</kbd> element, even though no actual click occurred.

```js
<form id="myForm">
  <input type="text" placeholder="Press Enter to submit">
  <input type="submit" value="Submit">
</form>

<script>
  const form = document.getElementById('myForm');
  const submitButton = form.querySelector('input[type="submit"]');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submitted');
  });

  submitButton.addEventListener('click', function() {
    console.log('Submit button clicked');
  });
</script>
```

</v-clicks>
---

## The <kbd>form.submit()</kbd> Method
<v-clicks>
The form.submit() method allows you to programmatically submit a form using JavaScript. When you use this method, the submit event is not triggered. This is useful when you need to submit a form without user interaction or when you're dynamically creating and submitting forms.

#### Programmatic Form Submission
```js
function createAndSubmitForm() {
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = '/api/submit';

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = 'username';
  nameInput.value = 'John Doe';

  form.appendChild(nameInput);
  document.body.appendChild(form);

  form.submit();
}
// Call the function to create and submit the form
createAndSubmitForm();
```

This example demonstrates how to create a form dynamically, add an input field to it, and submit it programmatically.
</v-clicks>

---

# Form Validation
<v-clicks>
Form validation is a crucial aspect of web development that ensures data submitted by users is correct, complete, and secure. This guide covers three important aspects of form validation: the novalidate attribute, HTML validation attributes, and the Constraint Validation API.
1. The novalidate Attribute
The novalidate attribute is used on the <kbd>form</kbd> element to disable the browser's default validation behavior. This is useful when you want to implement custom validation logic or use a JavaScript library for form validation.
```html
<form novalidate>
  <label for="email">Email:</label>
  <input type="email" id="email" required>
  <button type="submit">Submit</button>
</form>
```
In this example, even though we've used the required attribute and type="email", the browser won't perform its default validation when the form is submitted because of the novalidate attribute.

</v-clicks>
---

 # HTML Validation Attributes
 <v-clicks>
HTML5 introduced several attributes that allow for built-in form validation. These attributes are simple to use and provide basic validation without requiring JavaScript.
Common HTML validation attributes include:

- <kbd>required</kbd>: Specifies that an input field must be filled out
- <kbd>minlength and maxlength</kbd>: Specifies the minimum and maximum length of textual data
- <kbd>min and max </kbd>: Specifies the minimum and maximum values of numerical input types
- <kbd>pattern</kbd>: Specifies a regular expression that the input's value must match
- <kbd>type</kbd>: Specifies the type of input, which can trigger built-in validation (e.g., email, url, number)

</v-clicks>

---

# Example

<v-clicks>

```js
<form>
  <label for="username">Username (4-8 characters):</label>
  <input type="text" id="username" name="username" required minlength="4" maxlength="8">
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="age">Age (18-100):</label>
  <input type="number" id="age" name="age" min="18" max="100">
  
  <label for="website">Website:</label>
  <input type="url" id="website" name="website">
  
  <label for="password">Password (must contain at least one number and one
     uppercase and lowercase letter, and at least 8 or more characters):</label>
  <input type="password" id="password" name="password" 
         pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
         required>
  
  <button type="submit">Submit</button>
</form>
```
</v-clicks>
---

# Constraint Validation API

<v-clicks>

The Constraint Validation API provides a way to check the validity of form controls, customize error messages, and handle the validation process using JavaScript.
Key methods and properties of the Constraint Validation API include:

- <kbd>checkValidity()</kbd>: Returns true if the element's value has no validity problems
- <kbd>setCustomValidity(message)</kbd>: Sets a custom error message and marks the element as invalid
- <kbd>validationMessage</kbd>: Returns the validation message for an invalid element
- <kbd>validity</kbd>: Returns a <kbd>ValidityState</kbd> object with properties like <kbd>valueMissing</kbd>, <kbd>typeMismatch</kbd>, <kbd>patternMismatch</kbd>, etc.

</v-clicks>

---

# Example

<v-clicks>

<div class="flex gap-5">

<div>

```js
<form id="myForm">
  <label for="email">Email:</label>
  <input type="email" id="email" required>
  <span id="emailError"></span>
  
  <button type="submit">Submit</button>
</form>
<script>
const form = document.getElementById('myForm');
const email = document.getElementById('email');
const emailError = document.getElementById('emailError');
email.addEventListener('input', function(event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity('Please enter a valid email address');
    emailError.textContent = email.validationMessage;
  } else {
    email.setCustomValidity('');
    emailError.textContent = '';
  }
});
form.addEventListener('submit', function(event) {
  if (!email.checkValidity()) {
    event.preventDefault();
    emailError.textContent = email.validationMessage;
  }
});
</script>
```
</div>
<div>
In this example, we're using the Constraint Validation API to:

- Check if the email input is valid using validity.typeMismatch
- Set a custom validation message using setCustomValidity()
- Display the validation message using validationMessage
- Prevent form submission if the email is invalid using checkValidity()

This approach allows for more dynamic and customized form validation compared to using HTML attributes alone.
</div>
</div>
</v-clicks>

---


# HTML Form Elements

<v-clicks>

HTML forms are essential for collecting user input on web pages. This guide covers the main form elements: input, select, textarea, button, label, fieldset, and legend. We'll explore their usage, attributes, and provide practical examples.
1. Input
The <kbd>input</kbd>> element is the most versatile form element, used to create various types of form controls.
Common Types:
<div class="flex gap-5">
<div>

- text: Single-line text input
- password: Password input (characters are masked)
- email: Email address input
- number: Numeric input
- checkbox: Checkboxes for selecting multiple options

</div>
<div>

- radio: Radio buttons for selecting one option from a group
- file: File upload control
- submit: Submit button for the form
- reset: Reset button to clear form data
- date: Date picker
- color: Color picker

</div>
</div>
</v-clicks>

---

# Example

<v-clicks>

```html
<form>
  <input type="text" name="username" placeholder="Enter username">
  <input type="password" name="password" placeholder="Enter password">
  <input type="email" name="email" placeholder="Enter email">
  <input type="number" name="age" min="0" max="120">
  <input type="checkbox" name="subscribe" id="subscribe">
  <label for="subscribe">Subscribe to newsletter</label>
  <input type="radio" name="gender" value="male" id="male">
  <label for="male">Male</label>
  <input type="radio" name="gender" value="female" id="female">
  <label for="female">Female</label>
  <input type="file" name="avatar">
  <input type="date" name="birthdate">
  <input type="color" name="favorite_color">
  <input type="submit" value="Submit">
  <input type="reset" value="Reset">
</form>
```

</v-clicks>
---

# Select
<v-clicks>

The <kbd>select</kbd> element creates a dropdown list. It contains one or more <kbd>option</kbd> elements.

````md magic-move

```html
<label for="country">Choose your country:</label>
<select name="country" id="country">
  <option value="">--Please choose an option--</option>
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="uk">United Kingdom</option>
  <option value="au">Australia</option>
</select>
```


```html
<select name="pet">
  <optgroup label="Dogs">
    <option value="labrador">Labrador</option>
    <option value="poodle">Poodle</option>
  </optgroup>
  <optgroup label="Cats">
    <option value="persian">Persian</option>
    <option value="siamese">Siamese</option>
  </optgroup>
</select>
```
````
You can also group options using the <kbd>optgroup</kbd> element

</v-clicks>

---

# Textarea & Button
<v-clicks>

- The <kbd>textarea</kbd> element creates a multi-line text input field.
- The <kbd>button</kbd> element creates a clickable button. It's more flexible than the <kbd>input type="submit"</kbd> as it can contain HTML content.
Example:

````md magic-move
```html
<label for="comments">Comments:</label>
<textarea id="comments" name="comments" rows="4" cols="50">
Enter your comments here...
</textarea>
```

```html
<button type="submit">
  <img src="icon.png" alt="Submit"> Submit Form
</button>
```
````
## Label
The <kbd>label</kbd> element is used to create a label for a form control. It improves accessibility and usability by associating a label with its form control.

````md magic-move
```html
<label for="username">Username:</label>
<input type="text" id="username" name="username">


```
```html
<!-- You can also wrap the input with the label: -->
<label>
  Username:
  <input type="text" name="username">
</label>
```
````
</v-clicks>

---

#  Fieldset and Legend

<v-clicks>
The <kbd>fieldset</kbd> element is used to group related form controls together. The <kbd>legend</kbd> element provides a caption for the <kbd>fieldset</kbd>.

```html
<fieldset>
  <legend>Personal Information</legend>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
</fieldset>
```
</v-clicks>

---

<v-clicks>

```html
<!-- Putting it together -->
<form action="/submit" method="post">
  <fieldset>
    <legend>User Registration</legend>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <label for="birthdate">Birthdate:</label>
    <input type="date" id="birthdate" name="birthdate">
    <label for="country">Country:</label>
    <select id="country" name="country">
      <option value="">--Select a country--</option>
      <option value="us">United States</option>
      <option value="ca">Canada</option>
      <option value="uk">United Kingdom</option>
    </select>
    <fieldset>
      <legend>Interests</legend>
      <label><input type="checkbox" name="interests" value="sports"> Sports</label>
      <label><input type="checkbox" name="interests" value="music"> Music</label>
      <label><input type="checkbox" name="interests" value="reading"> Reading</label>
    </fieldset>
    <label for="bio">Bio:</label>
    <textarea id="bio" name="bio" rows="4" cols="50"></textarea>
    <button type="submit">Register</button>
    <button type="reset">Clear Form</button>
  </fieldset>
</form>
```

</v-clicks>

---

# Class Activity: Create a basic registration form with client-side validation.
<v-clicks>

<div class="flex items-center gap-5">
<div>
HTML:
- Form fields: Username, Email, Password, Confirm Password, Date of Birth, Country (dropdown), Terms checkbox
- Use labels and fieldsets

Validation (JavaScript):
- Username: 4+ characters
- Email: Valid format
- Password: 8+ characters, 1 uppercase, 1 lowercase, 1 number
- Confirm Password: Matches Password
- Date of Birth: User is 18+
- Country: Selected
Terms: Checked
</div>
<div>

Styling:
- Basic CSS for layout and error messages

Accessibility:
- Use ARIA attributes where needed

Bonus:
- Real-time validation feedback
</div>

</div>




</v-clicks>

---
