var Grocery = /** @class */ (function () {
    function Grocery(product, price, quantity) {
        this.product = product;
        this.price = price;
        this.quantity = quantity;
        this.fullItem = "Product: " + product + " " + price + " Quantity: " + quantity;
    }
    return Grocery;
}());
function Cart(products) {
    return products.quantity + "x " + products.product + " $ " + products.price + " per item </br>";
}
var productOne = new Grocery("Ground Beef", "6.05", " 2");
var productTwo = new Grocery("Gatorade", ".80", " 3");
var productThree = new Grocery("Water", "4.99", " 1");
var productFour = new Grocery("Chips", "2.50", " 4");
var List = [Cart(productOne), Cart(productTwo), Cart(productThree), Cart(productFour)];
document.body.textContent = List.toString();
//document.body.textContent = Cart(productOne);
//document.body.textContent = Cart(productTwo);
//document.body.textContent = Cart(productThree);
//document.body.textContent = Cart(productFour);
