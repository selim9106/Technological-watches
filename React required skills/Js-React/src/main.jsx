import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/styles/index.css'

// ! ------------------------------------- JAVASCRIPT

// * Template literals
    // Javascript TL

let jstlsection = document.getElementById('jstlsection');
jstlsection.innerHTML = `
<h2 class="main__title">Javascript Template Literals</h2>
<pre class="pre">
  <code class=" code language-javascript">
    let message ='Hi';
    let firstname ='Jacob';
    let jstl = document.getElementById('jstl');
    jstl.innerHTML = \`output: \${message} \${firstname}\"\`;
  </code>
</pre>`;


let jstlparagraph = document.createElement('p');
jstlparagraph.setAttribute('class', 'output');
let message = 'Hi';
let firstname ='Jacob';
jstlparagraph.innerText = `output: \"${message} ${firstname}\"`;
jstlsection.append(jstlparagraph);


// * Arrow functions

let jsarrowsection = document.getElementById('jsarrowsection');
jsarrowsection.innerHTML = `<h2 class="main__title">Javascript Arrow Functions</h2>
<pre class="pre">
  <code class=" code language-javascript">
  let displayMsg ="";
  let msg = "Hello!";

/*Javascript functions classical syntax*/
      displayMsg = function () {
        return (msg);
      }

/*JS arrow functions syntax*/
    displayMsg = () => { return msg };
    
displayMsg(); /*will output : "Hello!"*/
  </code>
</pre>

<p class="output">Output: "Hello!"</p>

<pre class="pre">
  <code class="code">
    let welcomemsg = "Welcome";
    let public = "young coders";
    
/*Javascript functions with params (classical syntax)*/
    welcomeFunc = function (param) {
      return welcomemsg + " " + param;
    }

/*Javascript arrow functions with params*/
    welcomeFunc = (param) => { return welcomemsg + " " + param + "!"; };

welcomeFunc(public); // will output "Welcome young coders !"
  </code>
</pre>

<p class="p__note">Note: Pay attention that regular syntax functions can be placed anywhere in the code while arrow functions must be declare before being called!</p>`;


// * The "This" keyword

let jsthissection = document.getElementById('jsthissection');
jsthissection.innerHTML = `<h3 class="main__subtitle">Javascript <em>"this"</em> keyword</h3>
<p class=main__paragraph>In global scope, <em>this</em> will always refer to the window object.</p>
<p class="main__paragraph">The "this" keyword acts differently wether you use regular or arrow function.</p>
<h4 class=main__smalltitle"><em>this</em>  in Regular function</h4>
<pre class="pre">
  <code class="code language-markup">
  /* Here "this" refers to the object calling the function */
    <div>
      <btn id="buttonid">Click me</btn>
      <p id="thiscontent"></p>
    </div>

    <script>
      let button = document.getElementById('buttonid');
      let thisresult = document.getElementById("thiscontent");

      function returnId () {
        thisresult.innerHTML = this.id;
      }

      button.addeventListener("click", returnId);
    </script>

/* paragraph content will output "buttonid" */
  </code>
</pre>
<h4 class=main__smalltitle"><em>this</em>  in Arrow function</h4>
<pre class="pre">
  <code class="code language-javascript">
  /* In arrow functions, "this" don't belong to the calling object\n but inherit it from the parent scope. */
  /* That's why the 'use strict' property is useless with arrow function */

    <div>
      <btn id="buttonid">Click me</btn>
      <p id="thiscontent"></p>
    </div>

    <script>
      let button = document.getElementById('buttonid');
      let thisresult = document.getElementById("thiscontent");

      returnId = () => { thisresult.innerHTML = this};

      button.addeventListener("click", returnId);
    
    </script>

    /* paragraph content will output "undefined" since "this" refers\n here to the window object which has no id */
  </code>
</pre>`;


// * JS destructuring

let jsdstection = document.getElementById('jsdestrucsection');
jsdstection.innerHTML = `<h2 class="main__title">Javascript Destructuring</h2>
<h3 class="main__subtitle">Destructuring Array</h3>
<pre class="pre">
  <code class="code language-javascript">
    let order = ["pizza", "cola", "icecream"];

/* Prior to ES6, to declare variables using properties from an array\nor an object\nyou had to declare each one separately: */

    let meal = order[0];
    let drink = order[1];
    let dessert = order[2];

/* ES6 Destructuring syntax allows to declare several variables at once: */

  let [meal, drink, dessert] = order;

  console.log ("I will have a" + drink + "for drink");
  //will output "I will have a cola for drink";
  </code>
</pre>

<h3 class="main__subtitle">Destructuring Objects</h3>
<pre class="pre">
  <code class="code language-javascript">
  let person = {
    firstName: 'John',
    lastName: 'Doe'
    personAge: 36
  };

/* Prior to ES6, to declare variables using properties from the "person" object,\nyou had to write it the following way: */

  let boyfirstname = person.firstName;
  let boylastname = person.lastName;

/* ES6 Destructuring syntax allows shorter ways to declare new variables\n from arrays or objects */

  let {firstName: boyfirstname, lastName: boylastname, nickName, personAge: age = 18 } = person;

console.log(firstName); // will output in both cases "John";
consoe.log(nickName); // will output "undefined" since it doesn't belong to the original object\nand hasn't been assigned to any value;
console.log(age); // will output "36" because we assigned it the currentAge \ndefault value when calling the person's "currentAge" object property;
  </code>
</pre>

<p class="p__note">Note: see <a href=#>my repository</a> links to learn more about JS ES6 Destructuring syntax"</p>`;


// * ES6 Default value assignement

let jsdefaultsec = document.getElementById('jsdefault');
jsdefaultsec.innerHTML = `<h2 class="main__title">ES6 Default value assignement</h2>
<p class=main__paragraph>ES6 Syntax allowes to assign default value to functions parameters. if the no value is assigned when the function is called, it will automatically use the default value.</^p>
<pre class="pre">
  <code class="code language-javascript">
    function multipliCate (a, b=2) {
      return a*b
    }

    console.log(multipliCate(4)) // will output: 8;
    console.log(multipliCate(3,7) // will output: 21;

  </code>
</pre>`;

// * JS Rest/Spread

let jsrestspreadsec = document.getElementById('jsrestspread');
jsrestspreadsec.innerHTML = `<h2 class="main__title">Javascript Rest/spread</h2>
<p class=main__paragraph>The "..." spread operator allows esier array/objects manipulation.</^p>
<pre class="pre">
  <code class="code language-javascript">
    const renaultCars = ["Twingo", "Megan", "Clio"];
    const cars1 = ["Mercedes", "Volvo", ...renaultCars];
    const cars2 = ["Fiat", "Toyota"];
    
    const allCars = [cars1, ...cars2];

    console.log(allCars);// will output: "Mercedes,Volvo,\n    Twingo,Megan,Clio,Fiat,Toyota"
  </code>
</pre>

<pre class="pre">
  <code class="code language-javascript">
    function addValues(...values) {
      let result = 2;
      for (let value of values) {
        result += value;
      }
      return result;
    }
  console.log(addValues(1,7,9));
  </code>
</pre>

<pre class="pre">
let father = {
  firstname: "John",
  lastname: "Doe",
  gender: "male",
  age: 36,
};

let son = {...father, firstname: "Hugh", age: 14};

console.log(son);// output: ">Object { "firstname": "Hugh",\n"lastname": "Doe", "gender": "male", "age": 14 }"
  </code>
</pre>

<p class="main__paragraph">The spread operator is sometimes used to copy an array the same way an empty "array.slice()" would.</p>

<pre class="pre">
  <code class="code language-javascript">
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1,3);
const copy = [...citrus];
copy.push("Pomelo");

console.log(citrus);// output "["Orange", "Lemon"]";
console.log(copy); // output "["Orange", "Lemon", "Pomelo"]";
</code>
</pre>`;

// * JS Modules

let jsmodulesection = document.getElementById('jsmodules');
jsmodulesection.innerHTML = `<h2 class="main__title">Javascript Modules</h2>
<p class="main__paragraph">Modules are probably the most important thing to understand in order to use React components. Every exported components or functions are automatically updated in every files they are imported whenever it is edited.</p>

<h3 class="main__subtitle">Named exports</h3>

<pre class="pre">
  <code class="code language-javascript">
  export const sidewidth = 2, sidelength = 3;
   export function calcArea(width,; length) {
    return width*length;
   }

  /* functions and variables can be imported in other js(x) files,\ncan be reused anytime needed et be updated once for all */

  /* You can declare variables and functions the usual way\n then export everything you need ad the end of the document */

   let variable1 = "string";
   let somecontent = "text";
   const firstComponent = () => {
    return somecontent
   }

   export { variable1, somecontent, firstComponent };
  </code>
</pre>

<p class="main__paragraph"><strong>Named imports</strong> use curly brackets for the import.</p>
<pre class="pre">
  <code class="code language-javascript">
  import { sidewidth, sidelength, calcArea } from './folder/module.js';

  console.log(calcArea(sidewidth, 5))// output: 10;
  </code>
</pre>
<p class="p__note">Note: You can <strong>import every exported content as an object</strong> using<br><strong>"import * from 'module.js'"</strong></p>
<p class="p__note">Note: It is possible to rename exported/imported content using the word <strong>"as"</strong></p>

<h3 class="main__subtitle">Default exports</h3>

<p class="main__paragraph">You can only use "export default" once per module.</p>
<pre class="pre">
  <code class="code language-javascript">
  export { element as default };

  /* is equivalent to: */

  export default element;
</code>
</pre>
<p class="main__paragraph">Importing default content don't require curly brackets</p>
<pre class="pre">
  <code class="code language-javascript">
  import element from './module.js';
</code>
</pre>
<p class="p__note">Note: Default content can't be assigned to a new value ("as" is not allowed).</p>`;


let jsternarysection = document.getElementById('jsternary');
jsternarysection.innerHTML = `<h2 class="main__title">Condition Ternary operator</h2>
<p class="main__paragraph">Ternary operators acts like a proper <em>if...else</em> statement.</p>

<pre class="pre">
  <code class="code language-javascript">
let boolean;
let number = prompt('Guess the secret number?', '');

number != 18 ? boolean = false:boolean = true;
console.log(boolean);

/* Ternary operators check if an "asking" condition is checked\nand return different actions wheter it is or not:\n
Isthisconditionchecked? (if yes) ... : (if Not) ...*/
  </code>
</pre>`;

let jsarraysection = document.getElementById('jsarrays');
jsarraysection.innerHTML = `<h2 class="main__title">Javascript Array Methods</h2>
<p class="main__paragraph">There are plenty of ways to alter arrays (<em>every, find, includes, pop, push, shift, some, sort, splice, unshift, ...</em>). Let's give a look to some of the most common used.</p>
<h3 class="main__subtitle">Array.splice()</h3>
<p class="main__paragraph">Array.splice take "3" parameters&nbsp;:</p>
<ol>
<li>index where content is updated</li>
<li>how many elements are widthdraw (and eventually replaced)</li>
<li>new content to push (optional)</li>
</ol>
<pre class="pre">
  <code class="code language-javascript">
  let webtech = ["HTML" ,"CSS", "Javascript"];
  
// from index [0], withdraw 2 elements and push 3 others:
  webtech.splice(0, 2, "Php", "Python", "Symfony");

  console.log(webtech);//output: ">Array [ "Php", "Python", "Symfony", "Javascript" ]"

  let frontendtechs = ["HTML", "CSS", "Javascript", "React", "Angular", "Vue"];

// array.splice create new array with removed content
  let removedframeworks = frontendtechs.splice(3,3);

  console.log(removedframeworks);// output ">Array [ "React", "Angular", "Vue" ]"
  </code>
</pre>

<h3 class="main__subtitle">Array.filter()</h3>
<p class="main__paragraph">The <em>filter</em> method, as its name suggests, filter array/objects checking a condition.</p>
<pre class="pre">
  <code class="code language-javascript">
  let students = [{
    id: 1,
    gender: "male",
    name: "John"
  },
  {
    id: 2,
    gender: "male",
    name: "Tony"
  },
  {
    id: 3,
    gender: "female",
    name: "Sarah"
  }
];

let boys = students.filter(std => std.gender == "male");
console.log(boys); //output: ">Array [{ "id": 1, "gender": "male", "name": "John" },\n{ "id": 2, "gender": "male", "name": "Tony" }]"

/* filter return a new object with the same structure */
console.log(boys.name)// output: "undefined"
  </code>
</pre>

<p class="p__note">Note: <strong>filter</strong> return an object/array. To return object properties, use <strong>array.map()</strong></p>

<h3 class="main__subtitle">Array.map()</h3>
<p class="main__paragraph"><br>Let's pick up boys filtered object from above</p>
<pre class="pre">
  <code class="code language-javascript">
//...
let boys = students.filter(std => std.gender == "male");
console.log(boys); //output: ">Array [{ "id": 1, "gender": "male", "name": "John" },\n{ "id": 2, "gender": "male", "name": "Tony" }]";

let boysnames = boys.map(boy => boy.name);
console.log(boysnames);// output "Array ["John", "Tony"]";
  </code>
</pre>

<pre class="pre">
  <code class="code language-javascript">
  const numbers = [4,9,16,25,36,49];

//function to return square root
  const squareRoot = num => Math.sqrt(num);

  const numSquareRoots = numbers.map(squareRoot);
  console.log(numSquareRoots); //output: ">Array [ 2, 3, 4, 5, 6, 7 ]"
  </code>
</pre>

<h3 class="main__subtitle">Array.sort()</h3>
<p class="main__paragraph">As its name suggests, the <em>sort</em> method sort array content in alphabetical order. Note that numbers are automatically converted to strings</p>


<pre class="pre">
  <code class="code language-javascript">
let letters = ["b", "d", "s", "l", "z", "x"];

// the method reorders the content of arr
letters.sort();
console.log(letters); //output: ">Array [ "b", "d", "l", "s", "x", "z" ]"

let numbers = [1, 100, 3, 2, 25];

numbers.sort();
console.log(numbers); //output "> Array [ 1, 100, 2, 25, 3 ]"
//sort interprete every character as string, so numbers aren't sort numerically

// we can remedy this by calling a comparative function into the sort method :

function compareNum(a,b) {return a-b};
numbers.sort(compareNum);
console.log(numbers); //output: ">Array [ 1, 2, 3, 25, 100 ]"
  </code>
</pre>

<h3 class="main__subtitle">Array.reduce()</h3>
<p class="main__paragraph">reduce output one value from an array by calling. Reduce is called <em>array.length-1</em> times (it excludes empty fields). It takes 4 parameters&nbsp;:</p>
<ul>
  <li>an accumulator (which is the result of the last callback except the first time)</li>
  <li>the current value</li>
  <li>the current index (optional)</li>
  <li>the array (optional)</li>
  <li>(an optional initial value). If no one is stated, reduce use first array value as first accumulator</li>
</ul>
<pre class="pre">
  <code class="code language-javascript">
let numbers = [1, 2, 3, 4, 5];
let result = numbers.reduce((num, nextnum) => num - nextnum);
console.log(result); // output: "-13";
  </code>
</pre>`;

// escape html tags in "code" tags (https://stackoverflow.com/questions/15618470/javascript-replace-html-using-innerhtml)

let codesnippets = document.querySelectorAll('.code');
codesnippets.forEach(function(snippet) {
  let snippetcontent = snippet.innerHTML;
  // let snpstr = snippetstring.toString();
  snippetcontent = escapehtmltags(snippetcontent);
  snippet.innerHTML = snippetcontent;
});

function escapehtmltags(htmlsnippets) {
  htmlsnippets = htmlsnippets.replace(/</g, '&lt');
  htmlsnippets = htmlsnippets.replace(/>/g, "&gt;");
  return htmlsnippets;
};

// escapehtml(codesnippetstostring);


// window.onload(escapehtmsnippets);


// ! ---------------------------------- REACTJS (see Apps.jsx)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)




