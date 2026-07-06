//OOP

function CreatePencil(name, price, color, company){
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
    this.write = function(text){
        let h1 = document.createElement('h1');
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
};
}


let pencil1 = new CreatePencil('Pencil', 10, 'red', 'Faber-Castell');
let pencil2 = new CreatePencil('Pencil', 20, 'blue', 'Camlin');