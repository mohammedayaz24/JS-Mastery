//OOP
//Onject Oriented Programming is a programming paradigm based on the concept of "objects",
// which can contain data and code: data in the form of fields (often known as attributes or properties), 
// and code, in the form of procedures (often known as methods).

// we can create a blueprint once,then create multiple objects based on that blueprint.


function CreatePencil(name, price, color, company){
    this.name = name;
    this.price = price;
    this.color = color;
    // this.company = company;
    this.write = function(text){
        let h1 = document.createElement('h1');
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
};
}

//constructor function is a special function that is used to create and initialize objects.
let pencil1 = new CreatePencil('Pencil', 10, 'red', 'Faber-Castell');
let pencil2 = new CreatePencil('Pencil', 20, 'blue', 'Camlin');


//prototype is a mechanism by which JavaScript objects inherit features from one another.
CreatePencil.prototype.company = 'Faber-Castell'; 
//adding a property to the prototype of the constructor function.Its a shared property 
// that will be available to all instances of the constructor function.



//Classes are a template for creating objects. They encapsulate data with code to work on that data.
//class 

class Pencil {
    constructor(name, price, color, company){
        this.name = name;
        this.price = price;
        this.color = color;
        this.company = company;
    }

    write(text){
        let h1 = document.createElement('h1');
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    }
}

let p1 = new Pencil('Pencil', 10, 'red', 'Faber-Castell');
let p2 = new Pencil('Pencil', 20, 'blue', 'Camlin');



//Extends

class User {
    constructor(name,address,username, email,role){
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
        this.role = role;
    }

    checkRole(){
        console.log(`You are a ${this.role}`);
    }

    write(text){
        let h1 = document.createElement('h1');
        h1.textContent = `${this.name}: ${text}`;
        document.body.appendChild(h1);
    }
}

class Admin extends User {
    constructor(name,address,username,email,role){
        super(name,address,username,email,role);
        this.role = 'Admin';
    }

    remove(){
        document.querySelectorAll('h1').forEach(function(element){
            element.remove();
        });
    }
}


let u1 = new User('John Doe', '123 Main St', 'johndoe', 'john.doe@example.com', 'User');
let u2 = new User('Jaane', '456 Oak Ave', 'janedoe', 'jane.doe@example.com', 'User');
let a1 = new Admin('Jane Smith', '456 Oak Ave', 'janesmith', 'jane.smith@example.com', 'Admin');
//