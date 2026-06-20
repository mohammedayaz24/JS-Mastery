//Even numbers from array
console.log("Even numbers from array");
const nums = [1,2,3,4,5,6,7,8];

let evenarray=nums.filter(function(num){
    return num%2===0;
});

console.log(evenarray);


//Student name fetching
console.log("Stent name");
const students = [
    {name:"ayaz",age:20},
    {name:"Ahmed",age:21},
    {name:"Ali",age:22}
];

let studentName=students.map(function(student){
    return student.name;
});
console.log(studentName);


//total price of products
console.log("total price of products");
const prices = [100,200,300,400];
let totalprice=prices.reduce(function(accumulator,currentvalue){
    return accumulator+currentvalue;
},0);
console.log(totalprice);


//merge user
console.log("merge user");

const user = {
  name:"Ayaz",
  age:21
};

const update = {
  city:"Ambur"
};

let mergedUser={...user,...update};
console.log(mergedUser);

//destructuring
console.log("destructuring");

const employee = {
  name:"Ayaz",
  salary:50000,
  role:"Developer"
};
const name = employee.name;
const salary = employee.salary;
const role = employee.role;
console.log(name,salary,role);


const user2 = {
  name: "Ayaz",
  city: "Ambur"
};

const { name: username } = user2;

console.log(username);


//map

let numbers = [1, 2, 3];
let squaredNumbers = numbers.map(function(num) {
    return num * num;
});
console.log(squaredNumbers);

let numberasString = numbers.map(function(num) {
    return num.toString();
});
console.log(squaredNumbers);

let numberasObject = numbers.map(function(num) {
    
});
console.log(numberasObject);