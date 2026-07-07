//promises
//promise is a object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value
//pending-->fulfilled-->rejected
//promise can be in one of the two states: resolve and reject

let pr = new Promise(function (res , rej){
    setTimeout(() => {
        let rn = Math.floor(Math.random()*10);
        if(rn>5) res("resolved with: " + rn);
        else rej("rejected with: " + rn) 
    }, 3000);
});

pr.then(function(val){
    console.log(val);
}).catch(function(val){
    console.log(val);
})