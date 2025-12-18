//Loops -> repeatation
//for  , while  , do-while , foreach
// 1 1 1 1 1 1 1 1 1  
// 1 2 3 4 5 6 7 8 9 

//from where -> till destination -> and how
// for 
// 1 - 10

//from where -> when to stop - and how
// while
// 1 - till i say hello (destination is unknown)


//for
//for(start ; end ; change){
    //code
//}
// 1 - 10
for(let i=1;i<=10;i++){
    console.log(i);
}

//while
//while(end condition){
    //code
    //change
//}

let j=10;
while(j>=1){
    console.log(j);
    j--;
}

//do while

/* do{

}
while(condition)*/

let k=1;
do{
    console.log(k);
    k++;
}while(k<=10);


//break

for(let a=1;a<=200;a++){
    console.log(a);
    if(a===32){
        break;
    }
}

console.log("continue");
//continue
for(let b=20;b<=30;b++){
    if(b === 25){
        continue;
    }
    console.log(b);

}