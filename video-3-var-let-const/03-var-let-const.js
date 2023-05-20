console.log("JavaScript Tutorial: var, let, const");

// 1 - var is globally scoped while let and const are block scoped.
// 2 - var can be updated and re-declared within its scope.
// 3 - var can be re-declared and updated in its scope
// 4 - let cannot be re-declared, but updated in its scope
// 5 - const can neither be re-declared, nor be updated

// Here, we have declared a using var.
// Because of using var, the value of a that is assigned inside the block is also assigned to the value of a outside of the block
var a = "Nikhil";
{
    var a = "Nikhil Narendra Chavan";
    console.log("a in block - "+a);
}
console.log("a outside block - "+a);

// Here, we have declared a using let
//  Because of using let, the value of b inside block is different from the value of b outside of the block
let b = "Nikhil";
{
    let b = "Nikhil Narendra Chavan";
    console.log("b inside block - "+b);
}
console.log("b outside block - "+b);

// const can neither be re-declared nor be updated.
// the below code will give error
const c = "Nikhil";
c = "Nikhil Narendra Chavan";
console.log(c);

const c = "Nikhil";
c = "Nikhil Chavan";
console.log(c);