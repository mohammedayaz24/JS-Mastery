//this is a keyword in JavaScript that refers to the object that is currently executing the function.
//  Its value depends on how the function is called, not where it is defined.

//this keyword in global scope
console.log(this);//window


//this keyword in functional scope

function abcd(){
    console.log(this);
}
abcd();
