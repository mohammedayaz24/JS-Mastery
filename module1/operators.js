//Operators
//Arithemtic , comparison , assignment , logical , unary ,ternary

//arithmetic operators
//+ - / * % **

let a=2;
let b=3;
let sum=a+b; //5
let difference=a-b;//-1
let product=a*b;
let quotient=a/b;
let remainder=a%b;
let power=a**b;


//comparison
// = , == , === ,!= , !== , >= , <= , < , >

c = 10; // assigment operator
12 == 13 //false
12 == "12"//true -> compares the value not the type->not strict
12 ==="12"//false -> compares the value and type -> opeartor
12 != 13 //true -> 12 is not equal to 13 -> not strict
12 != "12"//false -> 
12 !=="12"//true -> strict operator
12 > 13 //false -> greater than
12 < 13 //true -> less than
12 >= 13 //false ->greater than equal
12 <= 13 //true -less than equal

//Asssignment
// = , += , -= , *= , /= , %=

let x =10;
x+=3; // 13
x-=3; // 10
x*=3; // 30
x/=3; // 10
x%=3; // 1

//Logical operator
// && , || , !

true && true //true
true && false //false
false && true //false
false && false //false

true || true //true
true || false //true
false || true //true
false || false //false

!true //false
!false //true


//Unary opearator
// + , - , ! , typeof , ++ , --

+"5" // 5  string to number
-5   // -5 negative value
let p =10;
p++; // 10 -> post increment
++p; // 12 -. pre increment

let q=10;
--q; // 9 -> pre decrement
q--; // 9 -> post decrement


//ternary operator
// ?:

//syntax
// condotion ? true block  : false block
// 

let age=15>13 ? console.log("true") : console.log("false");
console.log("age",age);

//instanceof work with reference datatypes

let score =78;
let grade = score >=90 ? "A" : score >=75 ? "B" : score >=60 ? "C" : "fail";
console.log(grade);




