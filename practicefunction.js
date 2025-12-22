//Functions practice file

//Q1 : whats the difference between function declaration and function expression in terms of hositing?

//function declaration is hoisted completely, meaning you can call the function before its declaration in the code.
abcd(); //function call before declaration

function abcd(){
    console.log("function declaration hoisted completely");
}

//function expression is not hoisted, meaning you cannot call the function before its declaration in the code.
//efgh(); //uncommenting this line will throw an error

let efgh = function(){
    console.log("function expression not hoisted");
}//will throw error if called before this line



//Q2 : covert te following function intpo fat arrow function
/*function multiply(x, y){
    return x * y;
}*/

let multiply=(x,y) => {
    return x * y;
}
console.log(multiply(5,10));


//Q3 : use rest parameter to accepet any number of scores and return their sum
console.log("Q3 : average of scores using rest parameter");

function getScore(...scores){
    let total=0;
    scores.forEach(function(val){
        total += val;
    });
    return total;
}
console.log (getScore(90, 80, 70, 60));

//q4 early return

function checkAge(age){
    if(age < 18) return age + " "+ "minor";
    return age+ " " + "adult";
}
console.log(checkAge(16));
console.log(checkAge(20));

//Q5 pass a function to another function and execute it inside

function abcd(val){
   // val();
}

abcd(function(){
    console.log("function passed as argument and executed inside another function");
});


//Q6what is higeher order function?

//A higher-order function is a function that either takes one or more functions as arguments 
// or returns a function as its result or takes a function as a parameter

function higherOrderFunction(fn){
    fn();
}
higherOrderFunction(function(){
    console.log("this is a higher order function");
})

//Q7 Idenrtitfy the which function is higher order function
/*[1,2,3,4].map(function(x){
    return x * 2;
});//map is higher order function as it takes a function as argument*/

//Q8 convert the following function into pure function
/*let counter = 0;
function addTotal(num){
    counter += num;
} */

let counter = 0;
function addTotal(counter, num){
    let newCounter = counter;
    newCounter += num;
    return newCounter;
}

//Q9 what is closure? give an example
//A closure is a feature in JavaScript where an inner function has access to the outer 
// (enclosing) function's variables and parameters, even after the outer function has returned.
console.log("Q9 Closure example:");
function outerFunction(){
    let outerVar = 0;
    return function(){
        outerVar++;
        console.log(outerVar);
    };
}
const innerFunction = outerFunction();
innerFunction(); //logs "I am from outer function"
innerFunction();

//q10 convert the normal function into IIFE
/*function init(){
    console.log("IIFE example");
    }*/

(function()
{
    console.log("IIFE example");
})
();//function call

//Q11 use of iife in real world example
//IIFE can be used to create a private scope for variables and functions
let password= (function(){
    let secret ="pasword123";
    return{
        getSecret: function(){//accessing the private variable
            console.log(secret);
        },
        setSecret: function(newSecret){//modifying the private variable
            secret = newSecret;
        }
    }
})();//secret variable is not accessible from outside
console.log(password.getSecret());
password.setSecret("newPassword456");
console.log(password.getSecret());