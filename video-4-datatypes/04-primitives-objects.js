// THERE ARE 7 DIFFERENT TYPES OF DATATYPES IN JAVASCRIPT

// n - null
// n - number
// b - boolean
// b - BigInt
// s - string
// s - symbol
// u - undefined

let a = null;
let b = 24;
let c = true; // can also be false
let d = BigInt("567") + BigInt("100");
let e = "Nikhil";
let f = Symbol("I am a Symbol");
let g = undefined;

console.log(a, b, c, d, e, f, g);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);

// OBJECTS - Onject is a Key Value Pair
const item = {
    "Name": "Nikhil",
    "Age": 30,
    "Male": true
};

console.log(item["Name"]);
console.log(item["Age"]);
console.log(item["Male"]);
console.log(item["Salary"]);