//functions
//function is a block of code designed to perform a particular task

//syntax
/*function declaration
function functionName(){
    //code to be executed
}
functionName(); //function call*/


//function declaration
function dance(){
    console.log("dance");
    console.log("dance");
    console.log("dance");
}
dance(); //function call



// Function Expression syntax
/* let fnc = function(){
    //code
}
fnc(); call variable name because variable fnc contains function()*/

let fnc = function(){
    console.log("function stored in variable");
}
fnc(); //call variable name because variable fnc contains function()


//fat arrow function syntax
/* let fnc = () => {
    //code
}
fnc(); call variable name because variable fnc contains function()*/

let fnc2 = () => {
    console.log("fat arrow function stored in variable");
}
fnc2(); //call variable name because variable fnc2 contains function()

//parameters and arguments
//parameters are the names listed in the function definition
//arguments are the real values passed to the function

//function with parameters
function sing(song){
    console.log(`${song} is singing`);
}
sing("lion");
sing("tiger");

//function with multiple parameters
function add(a, b){
    console.log(a + b);
}
add(5, 10);

//Default,rest and spread parameters

//Default parameters
console.log("Default parameters");
function add1(v1=0,v2=0){//we can set default values to parameters
    console.log(v1 + v2);
}
add1(10,12);


//Rest parameters
console.log("Rest parameters");
function abcd(...values){//rest operator collects all arguments into an array
    console.log(values);
}
abcd(1,2,3,4,5,6,7,8,9);

//example 2
function abcd2(a,b,c,...values){
    console.log(a,b,c,values);
}
abcd2("a","b","c","d","e");



//rest parameters 
//when we want to pass multiple arguments as an array to a function we use rest parameters
//to collect all arguments into an array we use rest operator(...)
// ... if it is in parameter space then it is rest operator
// ... if it is in argument space then it is spread operator


//return values and early return

//return statement is used to return a value from a function

function aaa(v){
    return "hello "+ v;
}
let val= aaa("ayaz");
console.log(val);

//early return already explained in conditional statements file
//early return is used to exit a function before it reaches the end


//first class functions
//functions are treated as first class citizens in javascript
/*this means that functions can be assigned to variables, 
passed as arguments to other functions, and returned from other functions*/

//example of first class functions
console.log("First class functions example");
function greet(){
    return "hello world";
}
function display(fn){
    console.log(fn());
}
display(greet); //passing function as argument

//Higher order functions
//a function that takes another function as an argument or
// returns a function as a result or accepts a function as a parameter is called higher order function
console.log("Higher order functions example");

function higherOrder(){
    return function(){
        console.log("Higher order function");
    }
}
higherOrder()(); //calling the returned function immediately


//pure vs impure functions

//pure function
//a function that given the same input will always return the same output
//and does not have any side effects(is not modifying any external state)
console.log("Pure function example");

function pureAdd(a,b){
    return a + b;
}
console.log(pureAdd(2,3)); //5

//impure function
//a function that given the same input may return different output
//or has side effects(modifying external state)
console.log("Impure function example");
let count = 0;
function impureAdd(){
    count++;
}
impureAdd(); //undefined if we try to print return value
console.log(count); //value of count is modified outside the function

//closures
//a closure is a function that returns another function
//the inner function has access to the outer function(parent function)varoiables
console.log("Closures example");
function abcd3(){
    let a=10;
    return function(){
        console.log(a);
    }
}

//lexical scoping
//lexical scoping means that the inner function has access to the variables of the outer function
console.log("Lexical scoping example");
function grandParent(){
    let a= "grandParent variable";
    function parent(){
        let b= "parent variable";
        function child(){
            let c= "child variable";
            console.log(a); //accessing grandParent variable
        }
        child();
    }
    parent();
}
grandParent();



//IIFE(Immediately Invoked Function Expression)
console.log("IIFE example");
(function(){
    console.log("IIFE function executed");
})();

//hoisting
//hoisting is a javascript mechanism where variables and function declarations are moved
//  to the top of their scope before code execution

console.log("Hoisting example");
hoistedFunction(); //function can be called before its declaration due to hoisting

function hoistedFunction(){
    console.log("This function is hoisted");
}//works only for function declarations not for function expressions or arrow functions

