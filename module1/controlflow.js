//Control flow
// if, else, else if,
//  switch case
//early return paattern

//if

if(10>2){
    console.log("10 is greater than 2");
}

//if else

if(10>2){
    console.log("10 is greater than 2");
}
else{
    console.log("10 is not greater than 2");
}

//if else if

if(10>21){
    console.log("10 is greater than 21");
}
else if(25>21){
    console.log("25 is greater than 21");
}
else{
    console.log("21 is greter number");

}

//example 2

let loggedin,admin;
if(loggedin && admin){
    console.log("admin");
}
else if(loggedin){
    console.log("user");
}
else{
    console.log("guest");

}


//switch case

let key=2;
switch(key){
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    default:
        console.log("default");
}


//early return pattern

function getVal(val){
    if(val<100) return 'A';
    else if(val<75) return 'B';
    else if(val<60) return 'C';
    else return 'fail';
}
getVal(89);
//it has a big issue used



// practice question 

function getGrade(score){
    if(score>=90 && score<=100){
        return 'A';
    }
    else if(score>=80 && score<90){
        return 'B';
    }
    else if(score>=70 && score<80){
        return 'C';
    }
    else if(score>=60 && score<70){
        return 'D';
    }
    else if(score>=33 && score<60){
        return 'E';
    }
    else if(score>=0 && score<33){
        return 'Fail';
    }
    else{
        return 'Invalid Score';
    
    }
}

console.log(getGrade(89));
getGrade(1000);


//Rock paper scissors logic

function rps(user,computer){
    if(user === computer) return 'draw';
    if(user === 'rock' && computer === 'scissors') return 'user win';
    if(user === 'scissors' && computer === 'paper') return 'user win';
    if(user === 'paper' && computer === 'rock') return 'user win';
    return 'computer win';
}
rps("rock","scissors");