//timers and controls

//It will run once after the time
let tm = setTimeout(function(){
    console.log("Hello")

},5000)

clearTimeout(tm);
//it will repeat running after every 2 second

let ti= setInterval(function(){
    console.log("hiii")
},2000)


//to clear the setInterval nut we hane to add variable
clearInterval(ti);



//count task

// let count = 10;

// setInterval(function() {
//     if(count >= 1){
//         console.log(count);
//         count--;
//     }
// },1000)


let count = 0;

const progress = document.querySelector('.progress-bar');
const percent = document.querySelector('#percentage');
let second = 5;

const intervalId = setInterval(function () {

    if (count <= 99) {
        count++;
        progress.style.width = `${count}%`;
        percent.textContent = `${count}%`;
    } else {
        document.querySelector("h2").textContent = "Downloaded";
        progress.style.background="lightgreen";
    }
},((second * 1000)/100));

setInterval(function(){
    document.querySelector("#status").style.display="none";

},6000);