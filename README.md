# JS-Mastery
EAT-CODE-SLEEP-REPEAT
<br>

 📘 JavaScript Fundamentals
**Chapters 1 & 2 — Variables, Declarations & Data Types**
📦 Chapter 1: Variables & Declarations
🧠 What are Variables?

Variables are containers for storing data in JavaScript.
They allow data to be stored, reused, and updated throughout a program.

Think of a variable as a named box that holds a value.

JavaScript provides three keywords to declare variables:

var

let

const

🔍 var vs let vs const
🧓 var — Old & Risky

Function-scoped (ignores block scope)

Can be redeclared and reassigned

Hoisted and initialized as undefined

Can cause unexpected bugs

var score = 10;
var score = 20; // Allowed

🧑‍💻 let — Modern & Safe

Block-scoped { }

Can be reassigned, but not redeclared in the same scope

Hoisted but exists in Temporal Dead Zone (TDZ)

let age = 25;
age = 30;      // ✅ Allowed
let age = 40; // ❌ Error

🔐 const — Constant Binding

Block-scoped

Must be initialized at declaration

Cannot be redeclared or reassigned

TDZ applies

const PI = 3.14;
PI = 3.14159; // ❌ Error

⚠ Objects & Arrays with const

The variable binding is constant, not the internal value.

const student = { name: "Riya" };
student.name = "Priya"; // ✅ Allowed
student = {};           // ❌ Error

🔥 Scope Explained
Scope Type	Description
Block Scope	Code inside {} (if, for, etc.)
Function Scope	Code inside a function

let and const → Block Scoped

var → Function Scoped

{
  var x = 5;
  let y = 10;
  const z = 15;
}

console.log(x); // ✅ 5
console.log(y); // ❌ ReferenceError
console.log(z); // ❌ ReferenceError

🧨 Hoisting

JavaScript moves declarations to the top of their scope before execution.

Keyword	Hoisted	Initialized
var	Yes	undefined
let	Yes	❌ (TDZ)
const	Yes	❌ (TDZ)
console.log(a); // undefined
var a = 10;

console.log(b); // ❌ ReferenceError
let b = 20;

🧠 Best Practice Rule

Use const by default

Use let only when reassignment is needed

Avoid var

🧪 Practice Checks (Chapter 1)
let x = 5;
let x = 10; // ❌ Error (redeclaration)

console.log(count);
var count = 42; // Output: undefined

<br>

**📦 Chapter 2: Data Types & Type System**
🧠 What Are Data Types?

Every value in JavaScript has a data type.

Two categories:

Primitive Types (stored by value)

Reference Types (stored by reference)

🔹 Primitive Data Types
Type	Example
String	"hello"
Number	3, -99, 3.14
Boolean	true, false
Undefined	let x;
Null	let x = null;
Symbol	Symbol("id")
BigInt	123456789n


🔹 Reference Data Types
Type	Example
Object	{ name: "Harsh" }
Array	[10, 20, 30]
Function	function greet() {}
🔍 typeof Operator
typeof "Sheryians"    // "string"
typeof 99             // "number"
typeof true           // "boolean"
typeof undefined      // "undefined"
typeof null           // "object" ❗ (JS bug)
typeof []             // "object"
typeof {}             // "object"
typeof function(){}   // "function"


⚠ typeof null === "object" is a long-standing JavaScript bug.

🔁 Type Coercion (Auto Conversion)
"5" + 1        // "51"
"5" - 1        // 4
true + 1       // 2
null + 1       // 1
undefined + 1 // NaN

🚨 Equality Operators
Operator	Behavior
==	Loose equality (type conversion)
===	Strict equality (value + type)
5 == "5"   // true
5 === "5"  // false


✅ Always prefer ===

🧪 NaN (Not a Number)
typeof NaN // "number"


Occurs when a numeric operation fails:

0 / 0

parseInt("abc")

🔦 Truthy & Falsy Values
❌ Falsy Values
false, 0, "", null, undefined, NaN

✅ Truthy Values
"0", "false", [], {}, function(){}

Boolean(0);        // false
Boolean("0");      // true
Boolean([]);       // true
Boolean(undefined);// false

🧠 Common Confusions

undefined → not assigned

null → intentionally empty

'5' + 1 → "51"

'5' - 1 → 4

🧪 Practice Outputs (Chapter 2)
console.log(null + 1);       // 1
console.log("5" + 3);        // "53"
console.log("5" - 3);        // 2
console.log(true + false);   // 1

console.log(typeof []);      // "object"
console.log(typeof null);    // "object"
console.log(typeof 123n);    // "bigint"

<br>
📌 Summary

JavaScript is loosely typed

Type awareness prevents bugs

Prefer const and ===

Understand coercion and scope deeply
