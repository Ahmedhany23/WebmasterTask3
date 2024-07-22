/* First Question
---------------------- */

/* Destructing Assignment */

//Easy to extract values from objects and arrays

const product = {
  name: "iphone",
  price: 100,
};
const { name, price } = product;

console.log(name); //iphone

const [a, b] = [1, 2];

console.log(a); //1

/* Spread Operator */

// Used to spread element in arrays or objects and handle variable numbers
const arr = [1, 2, 3, 5];

const arr2 = [...arr, 6, 4, 4, 6];

console.log(arr2); // [1,2,3,5,6,4,4,6]

function distinct(...numbers) {
  return [...new Set(numbers)];
}

let DistinctArray = distinct(...arr2);

console.log(DistinctArray); // [ 1, 2, 3, 5, 6, 4 ]

/* Default Parameter */

// Used to set default value for parameters

const PrintA = (a = "a") => {
  console.log(a);
};
PrintA(); //a

/* Arrow Function */

//Provides a shorter syntax for writing function and binds {This} value

const sum = (a, b) => a + b;

console.log(sum(1, 2)); //3

/* Promises */

//Provides a way to handle asynchronous operations more easily

const promise = new Promise((res, rej) => {
  res();
}).then(() => {
  console.log("resolve");
});

/* Template Literals */

//String Template is ${} and is used inside of string
const Age = 23;
console.log(`i Am ${Age} years old`);

/* Modules */

//Export DataValue or Function from another file

export const unknown = "unknown";
export const getUnknown = (unknown) => unknown;

import { unknown, getUnkown } from "Module";

/* Enhanced Object Literals */

//Simplifies the creation of objects with properties and methods
function getName(name) {
  return {
    name,
    print() {
      return `Hello , ${this.name}`;
    },
  };
}
const person = getName("Ahmed");

console.log(person.print()); //Hello , Ahmed

/* Second Question
---------------------- */

const base_Url = "https://api.coindesk.com/v1/bpi/currentprice.json";

//using fetch

fetch(base_Url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// using Aysnc/Await with fetch

async function fetchData() {
  try {
    const response = await fetch(base_Url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
fetchData();

//using axios
import axios from 'axios'

axios
  .get(base_Url)
  .then((response) => console.log(response.data))
  .catch((error) => console.error("Error:", error));
