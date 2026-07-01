//this is a keyword in JavaScript that refers to the object that is currently executing the function.
//  Its value depends on how the function is called, not where it is defined.

//this keyword in global scope
console.log("this keyword in global scope");
console.log(this);//window


//this keyword in functional scope
function abcd(){
    console.log(this);
}
abcd();//window


//this keyword.a function inside an object is known as a method. When a method is called, this refers to the object that owns the method.
console.log("this keyword in functional scope");
let obj = {
    name : "ayaz",
    sayName : function(){
        console.log(this);
    },
};
obj.sayName();//{name: 'ayaz', sayName: ƒ} the value is an object now



//this in Event handlers: In an event handler, this refers to the element that received the event.
console.log("this keyword in event handler");
document.querySelector("#btn").addEventListener("click", function(){
    alert("this keyword in event handler");
    console.log(this);//<button id="btn">Click Me</button>
});


//this in class : in a class, this refers to the instance of the class.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
new Person("ayaz", 20);//Person {name: 'ayaz', age: 20} the value is an object now



//Global - window
//function - window
//object - object
//class - instance of the class(blank object)
//method with es5 fnc - object
//method with es6 fnc - window
//es5 function inside a es5 function - window
//arrow function inside a es5 function - window
//arrow function - window




//Manual binding,bind call and apply are used to manually set the value of this in a function.
//call,apply and bind

console.log("Manual binding,bind call and apply are used to manually set the value of this in a function.");

console.log("call")
let obj1 = {
    name : "ayaz",
}
function abcd1(){
    console.log(this.name);
}
abcd1.call(obj1)//always call function with the object as a parameter to set the value of this in the function.



//apply it can only pass one object and remaining as an array
console.log("apply- it can only pass one object and remaining as an array")
let obj2 = {
    age : 12,
};
function abcd2(a,b,c){
    console.log(this,a,b,c)
}
abcd2.apply(obj2,[1,2,3])//always apply function with the object as a parameter to set the value of this
// in the function and remaining as an array.


//bind it can only pass one object and remaining as an array
console.log("bind - it can only pass one object and remaining as an array ")
let obj3 = {
    age : 12,
};
function abcd3(a){
    console.log(this,a)
}
let bind = abcd3.bind(obj3,[1,2,3]);
bind();

//end of this keyword in JavaScript


// example of this keyword in JavaScript
// name card or item card rendering