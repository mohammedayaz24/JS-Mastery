//async 
//async/await is just cleaner syntax built on top of Promises. It doesn't replace Promises—it makes them easier to work with.


let pr = new Promise(function (res , rej){
    setTimeout(() => {
        let rn = Math.floor(Math.random()*10);
        if(rn>5) res("resolved with: " + rn);
        else rej("rejected with: " + rn) 
    }, 3000);
});

async function abcd(){
    try{
        let value = await pr;
        console.log(val);
    }catch(err){
        console.log(err);
    }
}

abcd();