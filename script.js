//Phase 1 : Fundamentals 

//variables
// var, let, const- line by line comparison

// var 
var a; // declaration
var a= 12; // declare and initialization
var a=13;

// var =  "window" me add hota hai
// it is "funtional scoped" dont consider blocks ,if no function can be used in entire code
//can be declared again without expecting an error with same name


//let
let b=12;
let c=15;
//wont allow to declare it again with same name 
//let is blocked scope that respect the {}block


//const
const pi=3.14;
//one time declaration,value cant be changed


// **scope(globla,block,functional)**
//global scope - access through entire program
//functional scope - inside a function
//block scope - inside a block{}


// reassignement and redeclaration

var a=12;
a=32;//reassigment of value
var a=13//redeclaration is allowed

let newVar =12;
newVar=22;//reassignment of vale
//let newVar=13//error - redeclaration is not allowed


//Temporal Dead Zone(Interview perpective)
//It is defines the area that the js know that the vraibale exist but cannot be access the variable
// the value of x is known by js but tells you cannaot access before initialization{in simple js knows future}
// it can be done using let and const and not possible for var(will give undefined)
//console.log(x);
//let x=10;

//Hoisting
/*when a varibale is created it is divided into two parts.the declaration part is going in upward direction
 and initialization part will be going towards downward direction*/ 

console.log(a);
 var a= undefined;//go to top thats why TDZ tells it exist but cannot be accessed in terms of var(undefined)
 a= 40;

 //let
 console.log(d);
 let d=10;

 /* var-> hoist ->undefined
    let ->hoist ->X(reference error cannnot access before initialization)
    const->hoist -> X(reference error cannnot access before initialization)*/


    