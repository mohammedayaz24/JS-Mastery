// print numbers 1 to 10 using a for loop
console.log("print numbers 1 to 10 using a for loop");
for(let i=1;i<=10;i++){
    console.log(i);
}

//2.print numbers 10 to 1 using a while loop
console.log("print numbers 10 to 1 using a while loop");
let a=10;
while(a>=1){
    console.log(a);
    a--;
}

//3.print even numbers from 1to 20 using a for loop
console.log("print even numbers from 1to 20 using a for loop");
for(let b=1;b<=20;b++){
    if(b%2===0){
        console.log(b);
    }
}

//4.print odd numbers from 1 to 15 using while loop
console.log("print odd numbers from 1 to 15 using while loop");
let c=1;
while(c<=15){
    if((c%2!==0)||c%2===1){
        console.log(c);
    }
    c++;
}

//print the multiplication table of 5(5 x 1 = 5)
console.log("print the multiplication table of 5(5 x 1 = 5)");
n=5;
for(let d=1;d<=10;d++){
    table=n*d
    console.log(n,"x",d,"=",table);
}

//6.print the sum of numbers from 1 t 100 using loop
console.log("print the sum of numbers from 1 t 100 using loop");
let sum=0;
for(let e=1;e<=100;e++){
    sum=sum+e;
}
console.log(sum);


//7.print all number between 1 to 50 that are divisible by 3
console.log("print all number between 1 to 50 that are divisible by 3");
for(let f=1;f<=50;f++){
    if(f%3===0){
        console.log(f);
    }
}

//8.ask the user for a number and print whether each number fro 1 to that num is even or odd

let val=prompt("enter a number");
for(let g=1;g<=val;g++){
    if(g%2===0){
        console.log(`${g} is even`);
    }
    else{
        console.log(`${g} is odd`);
    }
}

//9.count how many number between 1 to 100 are divisible by 3 and 5
console.log("count how many number between 1 to 100 are divisible by 3 and 5");
for(let h=1;h<=100;h++){
    if((h%3===0) && (h%5===0)){
        console.log(h);
    }
}


//problems related break and continue
/* q1. write a loop from to 100 that:
    print each number
    stop completely when it finds the first number divisible by 7
*/

console.log("q1. write a loop that stops at divisible by 7:");
for(let i=1;i<=100;i++){
    console.log(i);
    if(i%7===0){
        break;
    }
}

/*q2 : skip multiples of 3 
    write a loop from 1 to 20 
        skips numbers divisible by 3 and the prints others all
 use continue*/
//expected output ( 1 2 4 5 7 8 10)

console.log("q2 : skip multiples of 3");
for (let j=1;j<=20;j++){
    if(j%3===0){
        continue;
    }
    console.log(j);
}

/*q3 : print firdt 5 od  numbers only
    write a loop from 1 to 100 that:
        print only 5 odd numbers
        then stop the loop
    use both if ,continue and counter+ break
    expected op{ 1 3 5 7 9}
    */
console.log("q3 : print firdt 5 od  numbers only");
let count=0;
for(let k=1;k<=100;k++){
    if(k%2!==0){
        count++;
        console.log(k);
    }
    if(count===5){
        break;
    }
}


for(let l=1;l<=5;l++){
    for(let m=1;m<=l;m++){
        console.log(l);
    }
    console.log("\n");

}