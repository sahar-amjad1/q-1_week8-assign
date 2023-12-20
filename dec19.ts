//q1Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.

function insertValueAtIndex<T>(arr: T[], index: number, value: T): T[] {
    
    arr.splice(index, 4, value);

    
    return arr;
}


let originalArray: number[] = [1, 2, 3, 4, 5];
let modifiedArray: number[] = insertValueAtIndex(originalArray, 2, 10);

console.log(modifiedArray); 

//q2Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation



type CartItem = {
    name: string;
    quantity: number;
    price: number;
};

type ShoppingCart = CartItem[];

function displayCart(cart: ShoppingCart): void {
    console.log("Cart Contents:");
    console.table(cart);
}

function addItem(cart: ShoppingCart, item: CartItem): void {
    cart.push(item);
    displayCart(cart);
}

function removeItem(cart: ShoppingCart, itemName: string): void {
    const index = cart.findIndex(item => item.name === itemName);
    if (index !== -1) cart.splice(index, 1);
    displayCart(cart);
}

function updateQuantity(cart: ShoppingCart, itemName: string, newQuantity: number): void {
    const item = cart.find(item => item.name === itemName);
    if (item) item.quantity = newQuantity;
    displayCart(cart);
}

const shoppingCart: ShoppingCart = [];

addItem(shoppingCart, { name: "Product A", quantity: 2, price: 10 });
addItem(shoppingCart, { name: "Product B", quantity: 1, price: 20 });
removeItem(shoppingCart, "Product A");
updateQuantity(shoppingCart, "Product B", 3);


//q3Write a program that uses a for loop to print the first 25 integers.

function printFirst25Integers(): void {
    for (let i = 1; i <= 25; i++) {
        console.log(i);
    }
}


printFirst25Integers();

//q4Write a program that uses a for loop to print the first 10 even numbers.
function printFirst10EvenNumbers(): void {
    for (let i = 2; i <= 20; i += 2) {
        console.log(i);
    }
}


printFirst10EvenNumbers();


//q5Create a function that takes a positive integer as parameter and uses a for loop to calculate and return the factorial of that number.

function calculateFactorial(n: number): number {
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
//q6Write a program having an array of numbers if the number is negative it should remove the negative number from the array

function removeNegativeNumbers(arr: number[]): number[] {
    return arr.filter(x => x >= 0);
  }
  
  const numbers = [1, -2, 3, 4, 5, 6, 7, -8, 9];
  const Result = removeNegativeNumbers(numbers);
  
  console.log("Original Array:", numbers);
  console.log("Array without negative numbers:", result);

//q7Create a function that takes an array of numbers as parameter. Use a for loop to calculate and return the sum of all the numbers in the array.


  
function calculateSum(numbers: number[]): number {
    let sum = 0;
  
    for (const num of numbers) {
      sum += num;
    }
  
    return sum;
  }
  
  
  const Numbers = [1, 2, 3, 4, 5];
  const totalSum = calculateSum(numbers);
  
  console.log("Array:", numbers);
  console.log("Sum of the array:", totalSum);

  //q8  Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a for loop to perform the conversion for each temperature.
  



  function convertCelsiusToFahrenheit(celsiusTemperatures: number[]): number[] {
    const fahrenheitTemperatures: number[] = [];
  
    for (const celsius of celsiusTemperatures) {
      const fahrenheit = (celsius * 9 / 5) + 32;
      fahrenheitTemperatures.push(fahrenheit);
    }
  
    return fahrenheitTemperatures;
  }
  
  
  const celsiusTemperatures: number[] = [20, 25, 30]; 
  
  
  const fahrenheitTemperatures = convertCelsiusToFahrenheit(celsiusTemperatures);
  
  
  console.log("Celsius Temperatures:", celsiusTemperatures);
  console.log("Fahrenheit Temperatures:", fahrenheitTemperatures);
  





export{};
    
  

