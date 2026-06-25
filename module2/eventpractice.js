let inp = document.querySelector("#input");
let span = document.querySelector("span");
let span1 = document.querySelector("#span1");


inp.addEventListener("input",function(details){
    span.textContent=details.target.value.length;
});


inp.addEventListener("input",function(details){
    let left= 20-(details.target.value.length);
    if(left<0){
        span1.textContent=left;
        span1.style.color="red";
    }
    else{
        span1.textContent=left;
        span1.style.color="black";

    }
});