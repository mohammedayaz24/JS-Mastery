//mini projects on functions in JavaScript

//1 >BMI Calculator

function BMI(weight, height){
    let bmi = weight / (height * 2);
    console.log(`Your BMI is ${bmi.toFixed(2)}`);
    if(bmi < 18.5) return console.log("You are underweight");
    if(bmi >= 18.5 && bmi < 24.9) return console.log("You have normal weight");
    if(bmi >= 25 && bmi < 29.9) return console.log("You are overweight");
    if(bmi >= 30) return console.log("You are obese");
    return;

}
BMI(74, 1.75);



// 2 > Create a reusable discount calculator function(HoF)

function discountCalculator(discount){
    return function(price){
        return price - price * (discount/100);
    }
}
let discounter = discountCalculator(10);//10% discount
console.log(discounter(1000));
//price=1000 => 1000 * (10/100)=100 => final price= 1000-100=900



// 3 > build a counter using closure

function counter(){
    let count=0;
    return function(){
        count++;
        console.log(count);
    }
}
let c=counter();
console.log(c());//1
console.log(c());//2
console.log(c());//3

let d=counter();
console.log(d());//1
console.log(d());//2

//4 > create a pure function to transform a value

function transformValue(val){
    return val*2;
}
console.log(transformValue(5)); //10

//5 > use IIFE to create a private variable

let password = (function(){
    let pwd="mySecret123";
    console.log(pwd);//will work here

})();
console.log(pwd); //undefined, pwd is not accessible outside the IIFE