//style using .style


let h1 =document.querySelector("h1");
h1.style.color="red";
h1.style.backgroundColor="lightgrey";
h1.style.fontFamily="Gilroy";
h1.style.tectTransform="Capitalize";
console.dir(h1);


//style using class
//simply write css in style tag of css file and then name it as .name to make it class & access it

let h2 = document.querySelector("h2");
//to add classList
h2.classList.add("styleclass");
//to remove classList
h2.classList.remove("styleclass");
//to toggle classList  -> works like if class presents remove if not add it
h2.classList.toggle("styleclass");



///practice question

let cl=document.querySelectorAll("li");
cl.forEach(function(val){
    console.log(val.textContent);
});

//adding title to an element
let ol=document.querySelector("li");
ol.setAttribute("title","hiiiiiiiii");

//remove a disabled buttom
let btn=document.querySelector("button");
btn.removeAttribute("disabled");