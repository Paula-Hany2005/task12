// /*Task
// Task 01 — Order Calculator
// Description
// Build a JavaScript program that calculates the total cost of an order, applies a membership discount, and determines the shipping fee. Display the order details in the browser console.
// Required Data
// - Product name.
// - Unit price.
// - Quantity.
// - Membership: true or false.
// Requirements
// 1. Store the order data using let and const.
// 2. Calculate the subtotal: unit price * quantity.
// 3. Apply a 10% discount if the customer is a member and the subtotal is 1,000 EGP or more.
// 4. Add a 50 EGP shipping fee if the total after the discount is below 500 EGP. Otherwise, shipping is free.
// 5. Calculate the final total.
// 6. Use template literals to display the order details.
// 7. If the price or quantity is zero or negative, display Invalid order instead of calculating the order. */

// // ----------------------------------------------------------
const name = prompt("Enter Product name.");
let price = +prompt("Enter Unit price.");
let quantity = +prompt("Enter Quantity");
let Membership = prompt("Enter Membership (true/false)").toLowerCase() === 'true'; 

let shipping = 0; 
let total = 0;
let discount = 0;
let afterdiscount = 0;
let finaltotal = 0;

if (price <= 0 || quantity <= 0) {
    console.log(`Invalid price or quantity`);
} else {
    total = price * quantity;

    if (price >= 1000 && Membership === true) {
        discount = 0.1 * total;
        
        if (afterdiscount <= 500) {
            shipping = 50;
        }
    }
    afterdiscount = total - discount; 
    finaltotal = afterdiscount + shipping;

    console.log(`total : ${total}`);
    console.log(`discount: ${discount}`);
    console.log(`after discount: ${afterdiscount}`);
    console.log(`shipping ${shipping}`);
    console.log(`final total: ${finaltotal}`);
}
