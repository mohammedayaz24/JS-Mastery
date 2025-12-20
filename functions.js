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
function abcd(...values){//rest operator collects all arguments into an array
    console.log(values);
}
abcd(1,2,3,4,5,6,7,8,9);