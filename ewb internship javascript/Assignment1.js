//Assignment 1: Variables, Data Types, and Console Operations

//Task: Declare variables using var, let, and const to store a user's name, age, employment status, and a list of skills. Use typeof to check each variable's type and log them to the console.
  

var name = "Alice";
let age = 25;
const isEmployed = true;
let skills = ["HTML", "CSS", "JavaScript"];

console.log("Name:",name,"(Type:", typeof name + ")");
console.log("Age:",age,"(Type:", typeof age + ")");
console.log("Is Employed:",isEmployed,"(Type:", typeof isEmployed + ")");
console.log("Skills:",JSON.stringify(skills),"(Type:", typeof skills + ")");