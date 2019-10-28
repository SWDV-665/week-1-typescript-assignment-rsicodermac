class Grocery {
    fullItem: string;
    constructor(public product: string, public price: string, public quantity: string) {
        this.fullItem = "Product: " + product + " " + price + " Quantity: " + quantity
    }
}

interface Item {
    product: string,
    price: string,
    quantity: string
}

function Cart(products: Item) {
    return products.quantity + "x " + products.product + " $ " + products.price + " per item ";
}

let productOne = new Grocery("Ground Beef", "6.05", " 2");
let productTwo = new Grocery("Gatorade", ".80", " 3");
let productThree = new Grocery("Water", "4.99", " 1");
let productFour = new Grocery("Chips", "2.50", " 4");

let List = [Cart(productOne), Cart(productTwo), Cart(productThree), Cart(productFour)];

document.body.textContent = List.toString();


//document.body.textContent = Cart(productOne);
//document.body.textContent = Cart(productTwo);
//document.body.textContent = Cart(productThree);
//document.body.textContent = Cart(productFour);