// Question 1 - Create a variable of type string and try to add a number to it.
let a  = "nikhil";
let b = 1809;
console.log(a+b);
// Here, a and b gets concatenated and the out is a string

// Question 2 - Use the typeof operator to find the datatype of the variable in question 1.
console.log(typeof (a+b));

// Question 3 - Create a const object in javascript. Can you change it to hold a number later?
const c  = {
    name: "Nikhil",
    section: 1,
    isPrincipal: false
};

// c = 24;
// You cannot change the value of a constant variable

// Question 4 - Try to add a new key to the const object in problem 3.
c["friend"] = "Shubham";
c["section"] = 3;
console.log(c);

// Question 5 - Write a JS program to create a word-meaning dictionary of 5 words
const dictionary = {
    arrogant: "thinking that you are better and more important than other people.",
    beautiful: "very pretty or attractive; giving pleasure to the senses.",
    colleague: "a person who works at the same place as you.",
    democracy: "a system in which the government of a country is elected by the people."
};

console.log(dictionary);
// DIFFERENT WAYS TO PRINT THE OBJECT DATA
console.log(dictionary.arrogant);
console.log(dictionary['colleague']);

