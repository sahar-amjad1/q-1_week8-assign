"use strict";
//q1Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
Object.defineProperty(exports, "__esModule", { value: true });
function insertValueAtIndex(arr, index, value) {
    arr.splice(index, 4, value);
    return arr;
}
let originalArray = [1, 2, 3, 4, 5];
let modifiedArray = insertValueAtIndex(originalArray, 2, 10);
console.log(modifiedArray);
function displayCart(cart) {
    console.log("Cart Contents:");
    console.table(cart);
}
function addItem(cart, item) {
    cart.push(item);
    displayCart(cart);
}
function removeItem(cart, itemName) {
    const index = cart.findIndex(item => item.name === itemName);
    if (index !== -1)
        cart.splice(index, 1);
    displayCart(cart);
}
function updateQuantity(cart, itemName, newQuantity) {
    const item = cart.find(item => item.name === itemName);
    if (item)
        item.quantity = newQuantity;
    displayCart(cart);
}
const shoppingCart = [];
addItem(shoppingCart, { name: "Product A", quantity: 2, price: 10 });
addItem(shoppingCart, { name: "Product B", quantity: 1, price: 20 });
removeItem(shoppingCart, "Product A");
updateQuantity(shoppingCart, "Product B", 3);
//q3Write a program that uses a for loop to print the first 25 integers.
function printFirst25Integers() {
    for (let i = 1; i <= 25; i++) {
        console.log(i);
    }
}
printFirst25Integers();
//q4Write a program that uses a for loop to print the first 10 even numbers.
function printFirst10EvenNumbers() {
    for (let i = 2; i <= 20; i += 2) {
        console.log(i);
    }
}
printFirst10EvenNumbers();
//q5Create a function that takes a positive integer as parameter and uses a for loop to calculate and return the factorial of that number.
function calculateFactorial(n) {
    if (n < 0 || !Number.isInteger(n)) {
        throw new Error("Input must be a positive integer");
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
const number = 5;
const result = calculateFactorial(number);
console.log(`The factorial of ${number} is ${result}`);
