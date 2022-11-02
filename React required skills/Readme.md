# React Required skills

## React
### Rappel
React ou *ReactJS* est une bibliothèque[^1] Javascript opensource dévelopée par Meta (à l'origine *Facebook Inc.*) en 2013 dans le but de faciliter la&nbsp;création de *single-page applications*[^2]. Cette bibliothèque gère l' interace utilisateur (ou UI, soit la "Vue" dans le le modèle MVC[^3]).   
React fonctionne majoritairement sur la création de composants réutilisables, généralement rédigé en JSX (*Javascrit Syntax Extension* ou *Javascript XML*)[^4].   
La Bibliothèque React est utilisée par des entreprises renomées telles que *Netflix*, *Airbnb*, *Discord*, *New York Times*, *Dropbox*, *Yahoo!*, ...

### Les composants
Les composants (en anglais *components*) s'apparentent à des fragments d'interface appelé dans une interface globale.

```jsx
const title = "Big title";
const Title = () => <h1 className="header__title">{title}</h1>;

const Header = () => {
    return <header className="header">
    < Title />
  </header>
  };
  
export {Header};
```

Le composant *Header* peut a présent être importé dans un autre fichier.

```jsx
// App.js

import {Header} from './components/header.js';

const Body = () => {
    return (<body>
              <Header />
              <main>
                //...
              </main>
            </body>
            )
    }
```

## Retour sur Javascript

Puisque React adopte majoritairement une syntaxe JSX, il est important de maîtriser Javascript pour faciliter sa prise en main.   Retour sur quelques concepts clés.

### Les Templates literals

```html
<html>
  <body>

    <p id='jstl'><p>

    <script>
      let message ='Hi';
      let name ='Jacob';
      let jstl = document.getElementById('jstl');
      jstl.innerHTML = `${message} ${name}!`;

      //output: "<p id='jstl'>Hi Jacob</p>"
    </script>

  </body>
</html>
```

### Les fonctions fléchées

#### Basiques

```javascript
let displayMsg ="";
  let msg = "Hello!";

/*Javascript functions classical syntax*/
      displayMsg = function () {
        return (msg);
      }

/*JS arrow functions syntax*/
    displayMsg = () => { return msg };
    
displayMsg(); // output: "Hello!"

```
#### Avec paramètres

```javascript
    let welcomemsg = "Welcome";
    let public = "young coders";
    
/*Javascript functions with params (classical syntax)*/
    welcomeFunc = function (param) {
      return welcomemsg + " " + param;
    }

/*Javascript arrow functions with params*/
    welcomeFunc = (param) => { return welcomemsg + " " + param + "!"; };

welcomeFunc(public); // output: "Welcome young coders !"
```

Note: Contrairement aux fonctions "classiques", les fonctions fléchées doivent être déclarées avant d'être appelées.

#### Le keyword ***this***

L'usage de *this* diffère selon le type de fonction.   
Dans une scope globale, this fait référence au *window object*.   
Dans une fonction classique il fait référence à l'objet qui appelle la fonction.

```html
  <!-- Here, "this" refers to the object calling the function -->
  
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

<!-- paragraph content will output "buttonid" -->
```

Dans les **fonctions fléchées**, this appartient à la scope parent.

```html
  <!-- In arrow functions, "this" inherit it from the parent scope. -->
  <!-- That's why the 'use strict' property is useless with arrow function -->

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

    <!-- paragraph content will output "undefined" since "this" refers here to the window object which has no id. -->
  ```
  
 ### Javascript Destructuring Objects/Arrays
 
 Depuis ES6, il est désormais possible de déclarer simultanément plusieurs variables qui appellent les propriétés d'un objet.
 ```javascript
  let order = ["pizza", "cola", "icecream"];

/* Prior to ES6, to declare variables using properties from an array (or an object), you had to declare each one separately: */

    let meal = order[0];
    let drink = order[1];
    let dessert = order[2];

/* ES6 Destructuring syntax allows to declare several variables at once: */

  let [meal, drink, dessert] = order;

  console.log ("I will have a" + drink + "for drink"); //output: "I will have a cola for drink";
  
 ```
 
 ```javascript
 let person = {
    firstName: 'John',
    lastName: 'Doe'
    personAge: 36
  };

/* Prior to ES6, to declare variables using properties from the "person" object, you had to write it the following way: */

  let boyfirstname = person.firstName;
  let boylastname = person.lastName;

/* ES6 Destructuring syntax allows shorter ways to declare new variables from arrays or objects: */

  let {firstName: boyfirstname, lastName: boylastname, nickName, personAge: age = 18 } = person;

console.log(firstName); // will output in both cases "John";
consoe.log(nickName); // output: "undefined" since it doesn't belong to the original object and hasn't been assigned to any value;
console.log(age); // output: "36" because we assigned it the currentAge default value when calling the person's "currentAge" object property;
 
 ```
 
 ### ES6 Default values
 
 Depuis ES6, il est possible d'attribuer des valeurs par défaut à des paramètres de fonction. Elles sont utilisées lorsque le paramètre n'est pas redéfini lors de l'appel de la fonction.
 
 ```javascript
     function multipliCate (a, b=2) {
      return a*b
    }

    console.log(multipliCate(4)) // output: 8;
    console.log(multipliCate(3,7)) // output: 21;
 ```
 
 ### Rest/Spread Operator
 L'opérateur *spread*, noté "..." permet d'appeler l'ensemble des propriétés d'un objet de façon intuitive et d'en manipuler plus facilement le contenu.
 
 ```javascript
    const renaultCars = ["Twingo", "Megan", "Clio"];
    const cars1 = ["Mercedes", "Volvo", ...renaultCars];
    const cars2 = ["Fiat", "Toyota"];
    
    const allCars = [cars1, ...cars2];

    console.log(allCars);// output: ["Mercedes" ,"Volvo", "Twingo", "Megan", "Clio", "Fiat", "Toyota"]
 ```
 
 ```javascript
 function addValues(...values) {
      let result = 2;
      for (let value of values) {
        result += value;
      }
      return result;
    }
  console.log(addValues(1,7,9)) //output: 19;
 ```
 
 ```javascript
 let father = {
  firstname: "John",
  lastname: "Doe",
  gender: "male",
  age: 36,
};

let son = {...father, firstname: "Hugh", age: 14};

console.log(son);// output: ">Object { "firstname": "Hugh", "lastname": "Doe", "gender": "male", "age": 14 }"
 ```
 
L'opérateur spread permet de copier une array (comme un *array.slice()* vide le ferait).

```javascript
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1,3);

console.log(citrus);// output "["Orange", "Lemon"]";

const copy = [...citrus];
copy.push("Pomelo");

console.log(copy); // output: ["Orange", "Lemon", "Pomelo"];
```




### Javascript Modules
Les modules constituent le socle essentiel de la structure des composants React. Chaque fonctions/composants exportés peut être réutilisé dans les fichiers où il est importé. Toute modification apportée au contenu exporté sera automatiquement mise à jour dans les fichiers correspondants.


#### Named exports

```javascript
export const sidewidth = 2, sidelength = 3;
   export function calcArea(width,; length) {
    return width*length;
   }

  /* functions and variables can be imported in other js(x) files, can be reused anytime needed et be updated once for all */

  /* You can also export everything you need ad the end of the document */

   let variable1 = "string";
   let somecontent = "text";
   const firstComponent = () => {
    return somecontent
   }

   export { variable1, somecontent, firstComponent };
```
Les imports de type "named" requièrent l'usage des *curly brackets*.

```javascript
  import { sidewidth, sidelength, calcArea } from './folder/module.js';

  console.log(calcArea(sidewidth, 5))// output: 10;
```

Importer tout le contenu exporté d'un fichier:
```javascript
  import * from './module.js';
```
Note: il est possible de réatribuer une variable à l'import : *import element **as** newname* ...

### *Default* exports

L'export *default* ne peut être usé qu'une fois par module.

```javascript
  export { element as default };

  /* is equivalent to: */

  export default element;
```

Importer un export de type *default* ne nécessite pas les curly brackets:

```javascript
import element from './module.js';
```
Il n'est en revanche pas possible d'assigner un nouveau nom aux éléments exportés avec *default*.

### Condition ternary operators

Les *ternary operators* agissent comme le *if...else* mais avec un syntaxe plus propre.

```javascript
let boolean;
let number = prompt('Guess the secret number?', '');

number != 18 ? boolean = false:boolean = true;
console.log(boolean);

/* Ternary operators check if an "asking" condition is checked and return different actions wheter it is or not:

Isthisconditionchecked? (if yes) ... : (if Not) ...*/
```

### Javascript Array Methods

Javascript regorge de méthodes qui permettent de manipuler les arrays: *every, find, includes, pop, push, shift, some, sort, splice, unshift, ...*   Parmis celles-ci:

#### Array.splice()

Splice prend 3 paramètres:
- l'index ou le contenu est altéré
- le nombre d'éléments à supprimer (et éventuellement remplacés)
- le contenu à pusher (optionnel)

```javascript
  
  let webtech = ["HTML" ,"CSS", "Javascript"];
  
// from index [0], withdraw 2 elements and push 3 others:
  webtech.splice(0, 2, "Php", "Python", "Symfony");

  console.log(webtech);//output: ">Array [ "Php", "Python", "Symfony", "Javascript" ]"

  let frontendtechs = ["HTML", "CSS", "Javascript", "React", "Angular", "Vue"];

// array.splice create new array with removed content:
  let removedframeworks = frontendtechs.splice(3,3);

  console.log(removedframeworks);// output ">Array [ "React", "Angular", "Vue" ]"
```

#### Array.filter()
Comme son nom l'indique, *filter* use d'une condition pour filtrer un array et le retourner. A noter que l'objet/array est retourné selon la même structure.

```javascript
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
console.log(boys); // output: ">Array [{ "id": 1, "gender": "male", "name": "John" }, { "id": 2, "gender": "male", "name": "Tony" }]"

/* filter return a new object with the same structure */
console.log(boys.name)// output: "undefined"
```
*filter* ne permet pas de retourner les propriétés d'un objet, pour ce faire il faut utiliser *array.map()*.

#### Array.map()

Reprenon l'objet filtré ci-dessus:

```javascript
//...
let boys = students.filter(std => std.gender == "male");
console.log(boys); //output: ">Array [{ "id": 1, "gender": "male", "name": "John" }, { "id": 2, "gender": "male", "name": "Tony" }]";

let boysnames = boys.map(boy => boy.name);
console.log(boysnames);// output "Array ["John", "Tony"]";
```

Autre exemple:
```javascript
  const numbers = [4,9,16,25,36,49];

//function to return square root
  const squareRoot = num => Math.sqrt(num);

  const numSquareRoots = numbers.map(squareRoot);
  console.log(numSquareRoots); //output: ">Array [ 2, 3, 4, 5, 6, 7 ]"
```

#### Array.sort()
*sort* permet de trier un array part ordre alphabétique.

```javascript
let letters = ["b", "d", "s", "l", "z", "x"];
letters.sort();

console.log(letters); //output: ">Array [ "b", "d", "l", "s", "x", "z" ]"
```

*sort* interprète chaque item, y compris les nombres en *string*.
```javascript
let numbers = [1, 100, 3, 2, 25];

numbers.sort();
console.log(numbers); //output: "> Array [ 1, 100, 2, 25, 3 ]"

//sort interprete every character as string, so numbers aren't sort numerically
```

Pour trier les nombres de façon croissantes/décroissante, il faut appeler une fonction dans *sort*:

```javascript
//...
function compareNum(a,b) {return a-b};
numbers.sort(compareNum);
console.log(numbers); //output: ">Array [ 1, 2, 3, 25, 100 ]"
```

#### Array.reduce()

*Reduce* procède à un appel de fonction à chaque element de l'array (à l'exception des éléments vides) et retourne une valeur qui deviendra le nouvel accumulateur appelé dans le callback. Elle est définie selon plusieurs paramètres:
- un accumulateur (lors du premier appel, l'accumulateur correspond soit à une valeur initiale définie au préalable, soit au premier élément de l'array)
- la valeur courante (soit le nouvel élément de l'array a qui on fait passer le callback)
- l'index courant (optionnel)
- l'array (optionnel)
- une valeur initiale (= "accumulateur initial")

```javascript
let numbers = [1, 2, 3, 4, 5];
let result = numbers.reduce((num, nextnum) => num - nextnum);

console.log(result); // output: "-13";
```


## Links
- [freeCodeCamp | "Top JavaScript Concepts to Know Before Learning React"](https://www.freecodecamp.org/news/top-javascript-concepts-to-know-before-learning-react/)
- [Robin Wieruch | "JavaScript fundamentals before learning React"](https://www.robinwieruch.de/javascript-fundamentals-react-requirements/#map-reduce-and-filter-in-react)
- [Medium | "The 2022 React JS Developer RoadMap [Updated]"](https://medium.com/javarevisited/the-2019-react-js-developer-roadmap-9a8e290b8a56)
- [KentCDodds | "Javascript to know for React"](https://kentcdodds.com/blog/javascript-to-know-for-react)
- [freeCodeCamp | "The JavaScript Skills You Need For React (+ Practical Examples)"](https://www.freecodecamp.org/news/javascript-skills-you-need-for-react-practical-examples/)
- [Youtube (Kodaps Academy) | "The 7 JavaScript Skills You Need For React!"](https://www.youtube.com/watch?v=pL703Vv-9bY)
- [w3docs | "Learn Javascript"](https://www.w3docs.com/learn-javascript.html)


[^1]: Une bibliothèque ou *library* permet au développeur d'utiliser des fonctionnalités qui n'ont pas nécessairement de corrélations entre elles. Le *framework* est un cadre de travail applicatif qui permet au développeur de bénéficier d'une architecture efficace afin de structurer son travail. Les frameworks empruntent la plupart du temps leurs composants et fonctionnalités aux librairies ([source](https://code-garage.fr/blog/librairie-vs-framework-quelle-est-la-difference/#:~:text=En%20fran%C3%A7ais%2C%20on%20traduit%20le,d%C3%A9corr%C3%A9l%C3%A9es%20les%20unes%20des%20autres.))
[^2]: Les application web monopage permettent d'afficher du contenu dynamique en fonction de l'expérience utilisateur sur une page web unique et d'ainsi éviter le chargement d'une nouvelle page à chaque action ([source](https://fr.wikipedia.org/wiki/Application_web_monopage))
[^3]: [Modèle Vue Contrôleur](https://fr.wikipedia.org/wiki/Mod%C3%A8le-vue-contr%C3%B4leur)
[^4]: Le langage JSX, similaire en apparence au HTML, permet de structurer le rendu des composants à l'aide d'une syntaxe familière ([source]:(https://fr.wikipedia.org/wiki/JSX_(JavaScript)))

## Bibliographie
[Coursera | How to Become a React Developer in 3 Steps](https://www.coursera.org/articles/react-developer)   
[Wikipedia | Application web monopage](https://fr.wikipedia.org/wiki/Application_web_monopage)   
[Geeksforgeeks | "JavaScript | Spread Operator](https://www.geeksforgeeks.org/javascript-spread-operator/#:~:text=Spread%20operator%20allows%20an%20iterable,of%20parameters%20from%20an%20array.)   


