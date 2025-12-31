<style>
    body {
        font-family: sans-serif;
        line-height: 1.6;
        background-color: #f5f5f5;
        color: #333;
    }
    .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
    }
    .topic {
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 5px;
        padding: 20px;
        margin-bottom: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
    .topic h2 {
        grid-column: 1 / -1;
        margin-top: 0;
        border-bottom: 2px solid #007bff;
        padding-bottom: 10px;
        color: #007bff;
    }
    .definition, .why-used, .types-methods {
        grid-column: 1 / 2;
    }
    .example {
        grid-column: 2 / 3;
        background-color: #f9f9f9;
        padding: 15px;
        border-radius: 5px;
        border: 1px solid #eee;
    }
    h3 {
        color: #333;
        margin-top: 0;
    }
    pre {
        background-color: #eee;
        padding: 10px;
        border-radius: 5px;
        white-space: pre-wrap;
    }
    code {
        font-family: 'Courier New', Courier, monospace;
    }
</style>

<div class="container">

# JS-Mastery: A Structured Guide to JavaScript Concepts

This document provides a structured overview of the JavaScript topics covered in this project. Each section is divided into a definition, why it's used, its types or methods, and a simple example.

<div class="topic">
    <h2>Variables (var, let, const)</h2>
    <div class="definition">
        <h3>Definition</h3>
        <p>Variables are used to store data values. JavaScript has three ways to declare variables: <code>var</code>, <code>let</code>, and <code>const</code>.</p>
    </div>
    <div class="why-used">
        <h3>Why Used</h3>
        <p>To hold data that can be used and manipulated throughout the program. The choice between <code>var</code>, <code>let</code>, and <code>const</code> depends on the desired scope and whether the variable's value needs to be reassigned.</p>
    </div>
    <div class="types-methods">
        <h3>Key Differences</h3>
        <ul>
            <li><strong>var:</strong> Function-scoped, can be redeclared and reassigned. Hoisted with a default value of <code>undefined</code>.</li>
            <li><strong>let:</strong> Block-scoped, can be reassigned but not redeclared in the same scope. Hoisted but in the Temporal Dead Zone (TDZ).</li>
            <li><strong>const:</strong> Block-scoped, cannot be reassigned or redeclared. Must be initialized at declaration. Hoisted but in the TDZ.</li>
        </ul>
    </div>
    <div class="example">
        <h3>Example</h3>
        <pre><code>
// var
var name = "John";

// let
let age = 30;
age = 31; // Allowed

// const
const PI = 3.14;
// PI = 3.14159; // Error: Assignment to constant variable.
        </code></pre>
    </div>
</div>

<div class="topic">
    <h2>Data Types</h2>
    <div class="definition">
        <h3>Definition</h3>
        <p>JavaScript has two main categories of data types: Primitive and Reference.</p>
    </div>
    <div class="why-used">
        <h3>Why Used</h3>
        <p>To classify the type of data a variable can hold, which determines the operations that can be performed on it.</p>
    </div>
    <div class="types-methods">
        <h3>Types</h3>
        <ul>
            <li><strong>Primitive:</strong> <code>string</code>, <code>number</code>, <code>boolean</code>, <code>null</code>, <code>undefined</code>, <code>symbol</code>, <code>bigint</code>. They are immutable and passed by value.</li>
            <li><strong>Reference:</strong> <code>object</code>, <code>array</code>, <code>function</code>. They are mutable and passed by reference.</li>
        </ul>
    </div>
    <div class="example">
        <h3>Example</h3>
        <pre><code>
// Primitive
let message = "Hello";
let count = 100;
let isDone = true;

// Reference
let person = { name: "Alice", age: 25 };
let numbers = [1, 2, 3];
function greet() {
    return "Hello!";
}
        </code></pre>
    </div>
</div>

<div class="topic">
    <h2>Operators</h2>
    <div class="definition">
        <h3>Definition</h3>
        <p>Symbols used to perform operations on operands (values and variables).</p>
    </div>
    <div class="why-used">
        <h3>Why Used</h3>
        <p>For mathematical calculations, comparisons, logical evaluations, and value assignments.</p>
    </div>
    <div class="types-methods">
        <h3>Common Types</h3>
        <ul>
            <li><strong>Arithmetic:</strong> <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>, <code>**</code></li>
            <li><strong>Comparison:</strong> <code>==</code>, <code>===</code>, <code>!=</code>, <code>!==</code>, <code>></code>, <code><</code>, <code>>=</code>, <code><=</code></li>
            <li><strong>Logical:</strong> <code>&&</code> (AND), <code>||</code> (OR), <code>!</code> (NOT)</li>
            <li><strong>Assignment:</strong> <code>=</code>, <code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code></li>
            <li><strong>Ternary:</strong> <code>condition ? exprIfTrue : exprIfFalse</code></li>
        </ul>
    </div>
    <div class="example">
        <h3>Example</h3>
        <pre><code>
let x = 10;
let y = 5;

// Arithmetic
let sum = x + y; // 15

// Comparison
let isEqual = (x === y); // false

// Logical
let bothTrue = (x > 0 && y > 0); // true

// Ternary
let canVote = (age >= 18) ? "Yes" : "No";
        </code></pre>
    </div>
</div>

<div class="topic">
    <h2>Control Flow</h2>
    <div class="definition">
        <h3>Definition</h3>
        <p>The order in which the computer executes statements in a script. Structures like <code>if-else</code> and <code>switch</code> allow for conditional execution.</p>
    </div>
    <div class="why-used">
        <h3>Why Used</h3>
        <p>To make decisions in code and execute different blocks of code based on certain conditions.</p>
    </div>
    <div class="types-methods">
        <h3>Structures</h3>
        <ul>
            <li><strong>if/else if/else:</strong> Executes a block of code if a specified condition is true.</li>
            <li><strong>switch:</strong> Selects one of many code blocks to be executed based on the value of an expression.</li>
            <li><strong>Early Return:</strong> A pattern to exit a function early if a condition is met, reducing nesting.</li>
        </ul>
    </div>
    <div class="example">
        <h3>Example</h3>
        <pre><code>
let score = 85;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else {
    console.log("Grade C or lower");
}

// Early Return
function checkAccess(user) {
    if (!user) {
        return "Access Denied";
    }
    // ... continue with logic
}
        </code></pre>
    </div>
</div>

<div class="topic">
    <h2>Loops</h2>
    <div class="definition">
        <h3>Definition</h3>
        <p>Loops are used to repeatedly execute a block of code as long as a certain condition is true.</p>
    </div>
    <div class="why-used">
        <h3>Why Used</h3>
        <p>To automate repetitive tasks, such as iterating over an array or processing data until a condition is met.</p>
    </div>
    <div class="types-methods">
        <h3>Types</h3>
        <ul>
            <li><strong>for:</strong> Repeats a block of code a known number of times.</li>
            <li><strong>while:</strong> Repeats a block of code as long as a specified condition is true.</li>
            <li><strong>do...while:</strong> Similar to <code>while</code>, but the code block is executed at least once.</li>
            <li><strong>break:</strong> Exits a loop.</li>
            <li><strong>continue:</strong> Skips the current iteration and proceeds to the next.</li>
        </ul>
    </div>
    <div class="example">
        <h3>Example</h3>
        <pre><code>
// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
        </code></pre>
    </div>
</div>

<div class="topic">
    <h2>Arrays</h2>
    <div class="definition">
        <h3>Definition</h3>
        <p>A special variable that can hold more than one value at a time. It is a list-like object.</p>
    </div>
    <div class="why-used">
        <h3>Why Used</h3>
        <p>To store and manage a collection of multiple values in a single variable.</p>
    </div>
    <div class="types-methods">
        <h3>Common Methods</h3>
        <ul>
            <li><code>push()</code> / <code>pop()</code>: Add/remove from the end.</li>
            <li><code>unshift()</code> / <code>shift()</code>: Add/remove from the beginning.</li>
            <li><code>forEach()</code>: Executes a function for each element.</li>
            <li><code>map()</code>: Creates a new array by transforming every element.</li>
            <li><code>filter()</code>: Creates a new array with elements that pass a test.</li>
            <li><code>reduce()</code>: Reduces the array to a single value.</li>
        </ul>
    </div>
    <div class="example">
        <h3>Example</h3>
        <pre><code>
let fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Orange");

// Using map to create a new array
let lengths = fruits.map(fruit => fruit.length);
// lengths is [5, 6, 6, 6]
        </code></pre>
    </div>
</div>

<div class="topic">
    <h2>Objects</h2>
    <div class="definition">
        <h3>Definition</h3>
        <p>A collection of key-value pairs. The keys are strings (or Symbols), and the values can be any data type.</p>
    </div>
    <div class="why-used">
        <h3>Why Used</h3>
        <p>To group related data and functionality together in a structured way.</p>
    </div>
    <div class="types-methods">
        <h3>Key Concepts</h3>
        <ul>
            <li><strong>Accessing:</strong> Dot notation (<code>obj.key</code>) or bracket notation (<code>obj['key']</code>).</li>
            <li><strong>Destructuring:</strong> Easily extract properties into variables.</li>
            <li><strong>Looping:</strong> <code>for...in</code>, <code>Object.keys()</code>, <code>Object.values()</code>, <code>Object.entries()</code>.</li>
            <li><strong>Cloning:</strong> Spread operator (<code>{...obj}</code>) for shallow copies, or <code>JSON.parse(JSON.stringify(obj))</code> for deep copies.</li>
        </ul>
    </div>
    <div class="example">
        <h3>Example</h3>
        <pre><code>
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2022
};

// Accessing
console.log(car.make); // "Toyota"

// Destructuring
const { make, model } = car;
        </code></pre>
    </div>
</div>

<div class="topic">
    <h2>Functions</h2>
    <div class="definition">
        <h3>Definition</h3>
        <p>A block of reusable code designed to perform a particular task.</p>
    </div>
    <div class="why-used">
        <h3>Why Used</h3>
        <p>To organize code into manageable, reusable pieces, making the code more modular and easier to debug.</p>
    </div>
    <div class="types-methods">
        <h3>Key Concepts</h3>
        <ul>
            <li><strong>Declarations, Expressions, Arrow Functions:</strong> Different ways to define functions.</li>
            <li><strong>Parameters & Arguments:</strong> For passing data into functions.</li>
            <li><strong>Higher-Order Functions:</strong> Functions that operate on other functions (take them as arguments or return them).</li>
            <li><strong>Closures:</strong> A function that "remembers" the environment in which it was created.</li>
            <li><strong>IIFE:</strong> Immediately Invoked Function Expression.</li>
        </ul>
    </div>
    <div class="example">
        <h3>Example</h3>
        <pre><code>
// Function Declaration
function add(a, b) {
    return a + b;
}

// Arrow Function
const subtract = (a, b) => a - b;

// Higher-Order Function (map)
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2); // [2, 4, 6]
        </code></pre>
    </div>
</div>

</div>