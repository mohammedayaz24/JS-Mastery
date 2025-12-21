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