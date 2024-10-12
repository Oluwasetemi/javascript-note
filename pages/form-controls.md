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

Handling forms in JavaScript is crucial for creating interactive websites. This guide provides detailed examples that demonstrate effective ways to access, manipulate, and validate form data.

Forms and control elements, such as <input> have a lot of special properties and events.

Working with forms will be much more convenient when we learn them.

To work with forms in JavaScript, you typically use the document.forms collection. 

# Navigation: form and elements

That’s a so-called “named collection”: it’s both named and ordered. We can use both the name or the number in the document to get the form.

document.forms.my; // the form with name="my"
document.forms[0]; // the first form in the document

When we have a form, then any element is available in the named collection form.elements.

For instance

<form name="my">
  <input name="one" value="1">
  <input name="two" value="2">
</form>

<script>
  // get the form
  let form = document.forms.my; // <form name="my"> element

  // get the element
  let elem = form.elements.one; // <input name="one"> element

  alert(elem.value); // 1
</script>

There may be multiple elements with the same name. This is typical with radio buttons and checkboxes.

In that case, form.elements[name] is a collection. For instance:

<form>
  <input type="radio" name="age" value="10">
  <input type="radio" name="age" value="20">
</form>

<script>
let form = document.forms[0];

let ageElems = form.elements.age;

alert(ageElems[0]); // [object HTMLInputElement]
</script>

# Fieldsets as “subforms”

A form may have one or many <fieldset> elements inside it. They also have elements property that lists form controls inside them.

For instance:

<body>
  <form id="form">
    <fieldset name="userFields">
      <legend>info</legend>
      <input name="login" type="text">
    </fieldset>
  </form>

  <script>
    alert(form.elements.login); // <input name="login">

    let fieldset = form.elements.userFields;
    alert(fieldset); // HTMLFieldSetElement

    // we can get the input by name both from the form and from the fieldset
    alert(fieldset.elements.login == form.elements.login); // true
  </script>
</body>


---
hideInToc: true
---

# Focusing: focus/blur

An element receives the focus when the user either clicks on it or uses the Tab key on the keyboard. There’s also an autofocus HTML attribute that puts the focus onto an element by default when a page loads and other means of getting the focus.

Focusing on an element generally means: “prepare to accept the data here”, so that’s the moment when we can run the code to initialize the required functionality.

The moment of losing the focus (“blur”) can be even more important. That’s when a user clicks somewhere else or presses Tab to go to the next form field, or there are other means as well.

Losing the focus generally means: “the data has been entered”, so we can run the code to check it or even to save it to the server and so on.

There are important peculiarities when working with focus events.

## Events focus/blur

The focus event is called on focusing, and blur – when the element loses the focus.

Let’s use them for validation of an input field.

In the example below:

    The blur handler checks if the field has an email entered, and if not – shows an error.
    The focus handler hides the error message (on blur it will be checked again):

<style>
  .invalid { border-color: red; }
  #error { color: red }
</style>

Your email please: <input type="email" id="input">

<div id="error"></div>

<script>
input.onblur = function() {
  if (!input.value.includes('@')) { // not email
    input.classList.add('invalid');
    error.innerHTML = 'Please enter a correct email.'
  }
};

input.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // remove the "error" indication, because the user wants to re-enter something
    this.classList.remove('invalid');
    error.innerHTML = "";
  }
};
</script>

/**Modern HTML allows us to do many validations using input attributes: required, pattern and so on. And sometimes they are just what we need. JavaScript can be used when we want more flexibility. Also we could automatically send the changed value to the server if it’s correct.*/


## Delegation: focusin/focusout

Events focus and blur do not bubble.

For instance, we can’t put onfocus on the <form> to highlight it, like this🧮 

<!-- on focusing in the form -- add the class -->
<form onfocus="this.className='focused'">
  <input type="text" name="name" value="Name">
  <input type="text" name="surname" value="Surname">
</form>

<style> .focused { outline: 1px solid red; } </style>


The example above doesn’t work, because when user focuses on an <input>, the focus event triggers on that input only. It doesn’t bubble up. So form.onfocus never triggers.

There are two solutions.

First, there’s a funny historical feature: focus/blur do not bubble up, but propagate down on the capturing phase.

This will work:

<form id="form">
  <input type="text" name="name" value="Name">
  <input type="text" name="surname" value="Surname">
</form>

<style> .focused { outline: 1px solid red; } </style>

<script>
  // put the handler on capturing phase (last argument true)
  form.addEventListener("focus", () => form.classList.add('focused'), true);
  form.addEventListener("blur", () => form.classList.remove('focused'), true);
</script>

Second, there are focusin and focusout events – exactly the same as focus/blur, but they bubble.

Note that they must be assigned using elem.addEventListener, not on<event>.

So here’s another working variant:<form id="form">
  <input type="text" name="name" value="Name">
  <input type="text" name="surname" value="Surname">
</form>

<style> .focused { outline: 1px solid red; } </style>

<script>
  form.addEventListener("focusin", () => form.classList.add('focused'));
  form.addEventListener("focusout", () => form.classList.remove('focused'));
</script>


## Summary

Events focus and blur trigger on an element focusing/losing focus.

Their specials are:

    They do not bubble. Can use capturing state instead or focusin/focusout.
    Most elements do not support focus by default. Use tabindex to make anything focusable.

The current focused element is available as document.activeElement.
---
hideInToc: true
---

# Events: change, input, cut, copy, paste

Understanding and implementing JavaScript event handling is essential for creating dynamic and user-friendly web applications. This article focuses on the key events associated with form inputs and user interactions: change, input, cut, copy, and paste. By mastering these events, developers can enhance data entry experiences and provide immediate feedback in web forms.

## Utilizing the Change Event

The change event in JavaScript is triggered when the value of an <input>, <textarea>, or <select> element is altered and subsequently loses focus. This event is crucial for performing validation or other actions after user input is finalized.

Example: Monitoring Select Changes

<div>

<pre>

<select id="colorSelector">

  <option value="red">Red</option>

  <option value="blue">Blue</option>

  <option value="green">Green</option>

</select>

<script>

  document.getElementById('colorSelector').addEventListener('change', function(event) {

    alert('You selected ' + event.target.value);

  });

</script>

</pre>

</div>

## Harnessing the Input Event

The input event is triggered every time the value of an element changes, providing real-time feedback. This is particularly useful for validating input as it is entered, such as checking the strength of a password.

## Example: Dynamic Input Validation

<div>

<pre>

<input type="password" id="passwordInput" placeholder="Enter your password">

<div id="passwordStrength"></div>

<script>

  document.getElementById('passwordInput').addEventListener('input', function(event) {

    var strength = event.target.value.length;

    var strengthMessage = 'Weak';

    if(strength > 5) strengthMessage = 'Moderate';

    if(strength > 10) strengthMessage = 'Strong';

    document.getElementById('passwordStrength').textContent = 'Strength: ' + strengthMessage;

  });

</script>

</pre>

</div>


## Handling Cut, Copy, and Paste Events

<div>

<pre>

<input type="text" id="copyInput" value="Copy this text">

<button onclick="document.getElementById('copyInput').select(); document.execCommand('copy'); alert('Text copied!');">Copy</button>

<script>

  document.getElementById('copyInput').addEventListener('paste', function(event) {

    alert('Pasted content: ' + event.clipboardData.getData('text'));

  });

</script>

</pre>

</div>

Conclusion

Implementing JavaScript events like change, input, cut, copy, and paste not only enhances the interactivity of web pages but also provides the users with immediate feedback and a more engaging experience. This guide offers practical examples and insights into effectively using these JavaScript events to improve your web applications' usability and responsiveness.