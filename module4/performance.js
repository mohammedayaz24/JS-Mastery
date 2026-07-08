//Debouncing -> ek delay bataaoge tum utna delay jab bhi ayega action la reaction milega
let input = document.querySelector("input");
function debounce(fnc, delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() =>{
            fnc(...args);
        },delay);
    }
}


// input.addEventListener("input",debounce(function(){
//     console.log("Hii");
// },1000));




//throttle_> interval per chalunga action hota raha and apne ek interval bataya utne interval me apka event chalega

function throttle(fnc,delay){
    let timer = 0;
    return function(...args){
        let now = Date.now();
        if(now - timer >= delay){
            timer = now;
            fnc(...args);
        }
    };
}

input.addEventListener("input",throttle(function(){
    console.log(`throttle`);
},1000));