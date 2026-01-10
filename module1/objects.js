//Objects
//objects is a key value pair(structure)

//onject creation
let obj={
    name:"ayaz",
    age:20,
    email:"mohammedayaz2411@gmail.com"
};

//accessing object 
console.log(obj.name);
console.log(obj["name"]);//another way to access


//nesting and deep access
let user ={
    name:"ayaz",
    age:20,
    address : {
        city : "Ambur",
        pin : 635802,
        location :{
            lat : 56.07,
            lng : 19.24
        },

    },
};
console.log(user.address.location.lat);//56.07

//destructuring
let {lat,lng}=user.address.location;
console.log(lat,lng);//56.07 19.24

//loop
let obj2={
    name:"Ayaz",
    age:20,
    email:"mohammedayaz2411@gmail.com"
};

//for-in
console.log("for in loop");
for(let key in obj2){
    console.log(key,obj2[key]);
}


//object.keys
//returns the keys in array format
console.log(Object.keys(obj2));


//object.entries
//returs the arrays of arrays
console.log(Object.entries(obj2));


//copying objects

//spread operator
console.log("copying an object")
console.log("spread opearator")
let obj3={...obj2}
console.log(obj2);
console.log(obj3);


//object.assign
console.log("object.assign")
let obj4=Object.assign({city : "ambur" },obj2);
console.log(obj4);


//deep cloning
//in nested object one change in new variable even using spread will change the original in deep cloning

console.log("deep cloning")
let user1 ={
    name : "ayaz",
    age : 20,
    address:{
        city:"ambur",
        pin : 635802
    },
};

//let user2={...user1}

//user2.address.city="vaniyambadi";
//console.log(user2);
//console.log(user1);

//nested objects passes reference value even in spread
//only top level passes real value

let user2=JSON.parse(JSON.stringify(user1));
console.log(user1);
console.log(user2);
console.log("after cloning and change in value");

user2.address.city="vaniyambadi";
console.log(user1);
console.log(user2);


//optional chaining and computed properties

let role= "admin"; 
let stud1 ={
    name : "ayaz",
    age : 20,
    addressss:{  //even key name is change to handle this
        city:"ambur",
        pin : 635802,
        [role]:"ayaz" //computed properties
    },
};
console.log(stud1);

console.log(stud1?.address?.city);// returns undefined





//practice question
console.log("practice question");
//1 > create an object for a student with name,age ,and isenrolled
console.log("1");
let student={
    name:"Ayaz",
    age:20,
    isenrolled:true
};
console.log(student);

// 2 given a dynamic key let key="age",how will you access user[key]

let key="age";
const users={
    name:"ayaz",
    age:20
}
console.log(users[key]);

//destructure the key "first-name" as a variable called firstNmae

const user5={
    "first-name":"ayaz",
};

let { "first-name": firstName}=user5;
console.log(firstName);//ayaz


//use object.ebtries to print all key value pairs as 
//title : javascript
//duration: 4 weeks

const course={
    titlt:"javascript",
    duration:"4 weeks"
};

let entries=Object.entries(course).forEach(function(val){
    console.log(val[0],val[1]);
})
