//data types
//Types 
//premitives -> whenever we copy the values we get real copy it
//string,number,boolean,null,undefined,symbol,bigint

//Reference  -> whenever we copy the value we get the reference of parent not the real value
//arrays,object,function
// []     {}      ()


//primitives
//string
// '' single quotes ; ""double quotes ; ``back ticks

//Number
// 12- integer -> Number
// 12.3 - Number

//boolean
// True and False

//null
//no value assigned as of now due to unavailability of value
let selectedStudents=null;

//undefined
//a varibale is declared but not initialized we get undefined
let a;

//symbol
//unique and immutable value
let u01 =Symbol("uid");
let u2 =Symbol("uid");

let obj={
    uid:1,
    name:"ayaz",
    age:20,
    email:"mohammedayaz2411@gmail.com"
}

let u1 =Symbol("uid");
obj[u1]="12";


//bigInt
let num=9007199254740991n;
num +3n;//whenever a value is added include n in last

//Reference datatype
//array,objects,function
//Array

let arr=[1,2,3,4,5];
let brr=arr;
arr.pop()

//Object
let p={
    name:"ayaz",
    age:20
}
p.name="mohamemed";


//**Dynamic Typing **//
//Js is not static means in js dynamic typing allow changing data because it is dynamkic data type

//example we can chamge the datatype
let r=10;
r=true;
r="ayaz";
r=[1,2,3]
r=null;
r=undefined;


//typeof quirks 
//(eg, typeof(null)==='object;)


//type coersion(== vs ===)
//its a concept where one type automatically converts

//t="5"+1;  -> 51  because + has 2 option (addition and concate)so first it consider as string
//t="5"-1;  ->4  (-)no option so subtract


//truthy and falsy
//0,false,"",null,undefined,NaN,document.all;  -> false
// Remaing all even -1 is -> True

//practice question
//true + false => 1 + 0 => 1
//null + 1 => falsy value(0) + 1 => 1
//5 + "5" =>55
// !!undefined =>false


//why type of NaN is a number
//Js consider NaN as a failed operation number
//Eg : when we try to multiply a number lets say 2 * string ("appple") it is not possible right


