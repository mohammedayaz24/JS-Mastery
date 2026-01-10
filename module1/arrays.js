//Arrays
//An array is a special variable, which can hold more than one value at a time and it is used to store 
// multiple values in a single variable of different data types like string,
// number, boolean, object, etc in JavaScript.


//Creating an array
let marks = [10,20,30,40,50];//most common way to create an array
let arr= new Array(1,2,3,4,5); //another way to create an array

//Accessing array elements
console.log(marks[0]); //85
console.log(marks[4]); //88
console.log(marks[-1]); //88


//Modifying array elements
marks[2] = 80; 
console.log(marks);//[10,20,80,40,50]

//Array methods
let scores = [10, 20, 30, 40, 50];

//1. push() - adds an element to the end of the array
console.log("Before push:",scores);
scores.push(60);
console.log(scores); //[10,20,30,40,50,60]


//2. pop() - removes the last element from the array
console.log("Before pop:",scores);
scores.pop();
console.log(scores); //[10,20,30,40,50]


//3. shift() - removes the first element from the array
console.log("Before shift:",scores);
scores.shift();
console.log(scores); //[20,30,40,50]


//4. unshift() - adds an element to the beginning of the array
console.log("Before unshift:",scores);
scores.unshift(10);
console.log(scores); //[10,20,30,40,50]

//5. splice() - removes elements from a specific index
console.log("Before splice:",scores);
scores.splice(2,1); //removes 1 element at index 2
console.log(scores); //[10,20,40,50]


//6. slice() - returns a new array from a specific index
console.log("Before slice:",scores);
scores.splice(1,3); //returns elements from index 1 to 3 (excluding 3)
console.log(scores); //[20,30,40]


let array1 = [10, 20, 30, 40, 50];
//7. reverse() - reverses the array
console.log("Before reverse:",array1);
array1.reverse();
console.log(array1); //[50,40,30,20,10] main array is modified

//8. sort() - sorts the array
let array2 = [30, 10, 50, 20, 40];
console.log("Before sort:",array2);
let nr=array2.sort(function(a,b){
    //return a-b; //ascending order
    return b-a; //descending order
});
console.log(nr); //[10,20,30,40,50] main array is modified(a-b)
console.log(nr);//[50,40,30,20,10] main array is modified(b-a)


//9. forEach() - executes a function for each element in the array
console.log("For each");
let array3 = [10, 20, 30, 40, 50];
array3.forEach(function(val){
    console.log(val);
});


//10. map() - creates a new array by applying a function to each element in the array
//only use when u want to create a new array based on the original array

console.log("Map function");

let newarray3=array3.map(function(val){
    if(val>25) return val;
})//returns a new array
console.log(newarray3);//[undefined, undefined, 30, 40, 50]


//filter()- creates a new array with all elements that pass 
// the test implemented by the provided function
console.log("Filter function");
let filteredArray=array3.filter(function(val){
    return val>25;
});
console.log(filteredArray);//[30,40,50]


//reduce() - executes a reducer function on each element of the array
console.log("Reduce function");
let arr1=[10,20,30,40,50,10];
let sum=arr1.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
},0);//0 is the initial value of accumulator
console.log("Sum using reduce:",sum);//150


//find() - returns the value of the first element that passes the test
console.log("Find function");
let foundValue=arr1.find(function(val){
    return val===10;
});
console.log("Found value using find:",foundValue);//10


//findIndex() - returns the index of the first element that passes the test
console.log("Find Index function");
let foundIndex=arr1.findIndex(function(val){
    return val===10;
});
console.log("Found index using findIndex:",foundIndex);//0



//some() - tests whether at least one element in the array passes the test
console.log("Some function");
let someValue=arr1.some(function(val){
    return val===10;
});
console.log("Some value using some:",someValue);//true ->returns boolean


//every() - tests whether all elements in the array pass the test
console.log("Every function");
let everyValue=arr1.every(function(val){
    return val>=10;//checks if all values are greater than or equal to 10
});
console.log("Every value using every:",everyValue);//true ->returns boolean


//11. concat() - merges two or more arrays
let array4 = [60, 70, 80];
let array5 = [90, 100];
let mergedArray = array4.concat(array5);
console.log(mergedArray); //[60,70,80,90,100]


//Destructuring an array
let array6 = [1, 2, 3, 4, 5];
let [a, b, , d] = array6; //skipping the 3rd element
console.log(a); //1


//Spread operator
let array7 = [1,2,3,4,5,6,7,8,9];
let newArray7 = [...array7]; //creates a copy of array7 because of ...



//practice problems
// 1 > create a array with 3 fruits and print the second fruit
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[1]); //Banana

// 2 > add mango to the end of the array and pineapple to the beginning
fruits.push("Mango");
fruits.unshift("Pineapple");
console.log(fruits); //["Pineapple", "Apple", "Banana", "Orange", "Mango"]

// 3 > replace banana with kiwi
fruits[2] = "Kiwi";
console.log(fruits); //["Pineapple", "Apple", "Kiwi", "Orange", "Mango"]
fruits.splice(2,1,"Kiwiii");//another way to replace
console.log(fruits); //["Pineapple", "Apple", "Kiwiii", "Orange", "Mango"]

// 4 > insert red and blue at index 1 in this array
// let colors = ["Green", "Yellow"];

let colors = ["Green", "Yellow"];
colors.splice(1,0,"Red","Blue");
console.log(colors); //["Green", "Red", "Blue", "Yellow"]

// 5 .sort this array in ascending order and then reverse it
// let names=["zaara","mona","aly","sara","dina"];

let names=["zaara","mona","aly","sara","dina"];
names.sort().reverse();

//6 use .map to square eaach number

let numbers=[1,2,3,4,5];
let squaredNumbers=numbers.map(function(val){
    return val*2;
});
console.log(squaredNumbers);//[1,4,9,16,25]

//7 use .filter to filter numbers greater than 10
let numbers2=[1,2,3,4,5,6,7,8,9,10];
let filteredNumbers=numbers2.filter(val =>{
    return val>10;
});
console.log(filteredNumbers);//[] no numbers greater than 10


// 8 > use .reduce to get the sum of this array
let numArray=[10,20,30,40,50];

let total=numArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
},0);
console.log(total);//150


// 9 > use .find to get the first number greater than 10
let numArray2=[5,8,12,15,7,3];
let firstGreaterThan10=numArray2.find(val => {
    return val>10;
});
console.log(firstGreaterThan10);//12

// 10 > use .some() to check if there is any student has scored below 35;
let studentScores=[45,67,89,23,90,34];
let hasFailed=studentScores.some(val => {
    return val<35;
});
console.log(hasFailed);//true


// 11 > use .every() to check if all numbers are even
console.log("question 11");
let evenNumbers=[2,4,6,8,10];
let allEven =evenNumbers.every(val => {
        return val%2===0;
});
console.log(allEven);//true


// 12 > Destructure this array to get firstname and lastname

let fullName = ["Mohammed","Ayaz"];
let [firstName, lastName]=fullName;
console.log(firstName,lastName);//Mohammed Ayaz


// 13 > Merge to array using spraed operator
console.log("merge two arrays using spread operator");
let arr01=[1,2];
let arr2=[3,4];
let mergedArray2=[...arr01,...arr2];
console.log(mergedArray2);//[1,2,3,4]


// 14 > add india to the start of this array usning spread

let countries =["UK","USA"];
countries=["India",...countries];
console.log(countries);//["India","UK","USA"]


//15 > Clone this array properly (not by reference)

let orgarr=[1,2,3,4,5];
let clonearr=[...orgarr];
console.log(clonearr);//[1,2,3,4,5]