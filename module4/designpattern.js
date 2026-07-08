// Design  pattern

//Module pattern
//Module pattern is a design pattern in which the code is written inside a self
// executing function(IIFE) and the variables and methods are kept private to that function.
//  It helps in keeping the code organized and prevents global namespace pollution.

//we have to create  a IIFE

let fnc = (function(){
    return 12;

})();

//example

let bank = (function(){
    let balance = 12000;

    function checkbalance(){
        console.log(`Your balance is ${balance}`);
    }

    function deposit(amount){
        balance += amount;
    }

    function withdraw(amount){
        if(amount > balance){
            console.log("Insufficient balance");
            return;
        }
        balance -= amount;
    }

// Revealing module pattern
    // Revealing module pattern-- we can return the methods we want to expose to the
    //  outside world and keep the rest private.we can return an object with the methods we want to expose and the methods(name) we want to keep private will not be returned.
    return {
        check: checkbalance,
        set: deposit,
        draw: withdraw
    };
})();


//factory function Pattern
//Factory function pattern is a design pattern in which we create a function that returns an object.
//it can return new objects without using class or constructor function. 
//the main idea of this pattern is to control oject creation through functions.
//every time we call the factory function it will return a new object with the same properties and methods.
//it is specifically used when we want to create multiple objects with the same properties and methods.like users,products,orders etc.

function factory(name, price){
    let stock = 10;

    return{
        name,
        price,
        checkStock(){
            console.log(`Stock is ${stock}`);
        },
        buy(qty){
            if(qty < stock){
                stock -= qty;
                console.log(`${qty} pieces of ${name} bought and ${stock} pieces left`);
            }
            else{
                console.error(`Insufficient stock. Only ${stock} pieces left`);
            }
        },
        refill(qty){
            stock += qty;
            console.log(`${qty} pieces of ${name} added and ${stock} pieces now in stock`);
        }
    };
}

let iphone = factory("iphone", 1000);
// iphone.checkStock();
// iphone.buy(5);
// iphone.checkStock();
// iphone.buy(6);



//Subscriber pattern

class YoutubeChannel{
    constructor(){
        this.subscribers = [];
    }

    subscribe(user){
        this.subscribers.push(user);
        user.update("You have subscribed to the channel");
    }
    unsubscribe(user){
        this.subscribers = this.subscribers.filter((u) => u !== user);
        user.update("You have unsubscribed from the channel");
    }
    notification(message){
        this.subscribers.forEach((sub) => sub.update(message));
    }
}

class User{
    constructor(name){
        this.name = name;
    }
    update(data){
        console.log(`${this.name} you have received a notification: ${data}`);
    }
}

let sherian = new YoutubeChannel();
let user1 = new User("John");
let user2 = new User("Jane");

sherian.subscribe(user1);
sherian.subscribe(user2);

sherian.notification("New video uploaded");