let p = document.querySelector("p");

//adding event listener to the paragraph
p.addEventListener("click",function(){
    p.style.color="red";
    p.style.backgroundColor="lightgrey";
    p.style.fontFamily="Arial";
    p.style.textTransform="capitalize";
    p.style.fontSize="30px";
    p.innerHTML="<b>Abubakar</b>: wait bro she is already mine";
})


//adding event listener to the paragraph throgh outer function
let h3 = document.createElement("h3");
h3.innerHTML="Click me to change color";
document.body.appendChild(h3);
h3 = document.querySelector("h3");


function changeColor(){
    h3.style.color="blue";
}

h3.addEventListener("click",changeColor)

//removing event listener from the paragraph
h3.removeEventListener("click",changeColor)

//there are many events in javascript so don't worry about it just learn the ones you need and you can always 
// look up the documentation for more events
//common events in javascript
//input event
let input = document.querySelector("input");
input.addEventListener("input",function(value){
    if(value.data!==null){
        console.log("you typed",value.data);
    }
})

//change event
//change event is triggered when the input field loses focus and the value has changed

let sel= document.querySelector("select");

let selectedValue = document.querySelector("#selectedValue");
sel.addEventListener("change",function(details){
    console.log("selected value:",details.target.value);
    selectedValue.innerHTML=`<b>Selected Value:</b> ${details.target.value}`;
})


let main = document.querySelector("#main");
window.addEventListener("keydown",function(){
    if(event.key===" "){
        main.textContent="Space";
    }
    else{
        main.textContent=event.key;
    }
});


let fileinput = document.querySelector("#fileInput");
let input1 = document.querySelector("#input");

input1.addEventListener("click",function() {
    fileinput.click();
});

fileinput.addEventListener("change",function(dets){
    const file=dets.target.files[0];
    if(file){
        input1.textContent=file.name;
    }
});

let form= document.querySelector("form");

form.addEventListener("submit",function(e){
    e.preventDefault();
});


//Event bubbling and event capturing
//event bubbling is when an event is triggered on a child element and it
//  bubbles up to the parent element

let nav = document.querySelector("#nav");
nav.addEventListener("click",function(){
    alert("nav clicked");
});

//event capturing is when an event is triggered on a parent element and it
//  captures the event before it reaches the child element

