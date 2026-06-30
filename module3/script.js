//scope
//Which refers to how we can access the variable and function

//functional scope,global scope and blocks scope

//functional scope - can be used within the function Eg : var
//Global Scope that can be used anywhere in the function : ed var
//Block scope - can be accessed only within {} braces


//Execution Context
//Execution Context is the environment where JavaScript executes your code.
//  It stores variables, functions, and the value of this. 
// It works in 2 phases: Memory Creation Phase (variables are initialized as undefined and functions are stored in memory).
// and Execution Phase (code runs line by line and variables get their actual values). 
// JavaScript creates one Global Execution Context and a new Function Execution Context whenever a function is called.


//Lexical scoping 
//Javascript is lexical scoped language

// let lex = 7;
// function lex1(){
//     console.log(a);
//     function lex2(){
//         let lex=20;
//         lex1()
//     }
//     let func = lex2()
// func()
// }



//closures
//It is a function that presents inside parent function and it returns another function and the 
// return function uses the variable 

function abcd(){
    let a =1;
    return function(){
        a++;
        console.log(a);
    }
}
let fun=abcd()
fun();//1
fun();//2
fun();//3
fun();//3
fun();//4
fun();//5


//Encapsulation
console.log("encapsulation");

function clickLimiter(){
    let click = 0;//Private counter cant be accessed from global declaration
    return function(){
        if(click < 3){
            click++;
            console.log(`Clicked : ${click} times`);
        }else{
            console.error("LIMIT EXCEEDED")
        }
    };
}
let fnc = clickLimiter();
fnc();
fnc();
fnc();
fnc();


