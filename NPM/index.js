// var generateName = require("sillyname");
// var sillyName = generateName();
// var codename = require("codename")();
// console.log("My name is:", sillyName);

// var filters = ["alliterative", "random"],
//   lists = ["crayons", "adjectives", "cities", "animals"],
//   myName = codename.generate(filters, lists);

// console.log(myName);
//above code wont work if i put "type" : "module" in package.json

// var generateName = require('sillyname');
import {randomSuperhero} from "superheroes";
import generateName from "sillyName";
var sillyName = generateName();
var superhero = randomSuperhero();

console.log(`My silly name is ${sillyName}`);
console.log(`My superhero name is ${superhero}`);