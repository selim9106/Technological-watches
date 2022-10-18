// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
//     personAge: 36
//   };

/* Prior to ES6, to declare variables using properties from the "person" object,\nyou had to write it the following way: */

//   let boyfirstname = person.firstName;
//   let boylastname = person.lastName;

/* ES6 Destructuring syntax allows shorter ways to declare new variables\n from arrays or objects */

//   let {firstName: boyfirstname, lastName: boylastname, nickName, personAge: age = 18 } = person;

// console.log(firstName); // will output in both cases "John";
// consoe.log(nickName); // will output "undefined" since it doesn't belong to the original object\nand hasn't been assigned to any value;
// console.log(age); // will output "36" because we assigned it the currentAge \ndefault value when calling the person's "currentAge" object property;