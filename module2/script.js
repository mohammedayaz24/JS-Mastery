//dom manipulation
//how to select element in html
//how to change tsxt
//how to chnage html
//how to change css
//then attributes
//event listeners



//Selecting Elements
//getElementById  , getElementsByClassName ,[modern selectors] -> querySelector, querySelectorAll


//Text and Content Access
//innerText, textContent , innerHTML(to chnage HTML)

let h1=document.querySelector("h1");
console.dir(h1);
h1.textContent="hello ayaz from changeContent";
h1.innerText="hello ayaz from innerText";
//textContent and innerText are same


//innerHTML adds html to content
let h2=document.querySelector("h2");
h2.innerHTML="<i>hello ayaz from innerHTML</i>";
h2.hidden=true;



//Attributes

//Attribute manipulation
//getAttribute  ,setAtribute, removeAttribute

//setAttribute
//syntax->         variable.setAttribute("attribute_name",value_u_want to chanage);

let a = document.querySelector("a");
a.setAttribute("href","https://www.google.com");


let img = document.querySelector("img");
img.setAttribute("src","https://images.unsplash.com/photo-1766921466771-29bd27bf2d4e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");


//getAttribute
//syntax->         variable.getAttribute("attribute_name");
console.log(a.getAttribute("href"));


//remove attributes
a.removeAttribute("href");//removed check in elements


//** important **
//Dynamic DOM mainipulation
//createElement, appendChild , removeChild, prepend

//createElement
//appendElement(add after script) or prepend(add before script)

let h3=document.createElement("h3");
console.log(h3);
h3.textContent="doing dynamic dom manipulation";
document.querySelector("body").appendChild(h3);

//removeChild
document.querySelector("body").removeChild(h3);


//shorthand
let nh1=document.createElement("h1");
nh1.textContent="helloooo";
document.querySelector("div").append(nh1);