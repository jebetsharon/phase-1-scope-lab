// 1. Declare a variable `customerName` in global scope and assign it the value 'bob'
var customerName = 'bob';

// 2. Function to uppercase `customerName`
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Function to declare `bestCustomer` and assign it the value 'not bob'
function setBestCustomer() {
  bestCustomer = 'not bob'; // This is declared in global scope, but should be avoided
}

// 4. Function to overwrite `bestCustomer` with 'maybe bob'
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // Overwrites the previous value of `bestCustomer`
}

// 5. Declare `leastFavoriteCustomer` with const and try to change it in `changeLeastFavoriteCustomer()`
const leastFavoriteCustomer = 'Alice'; // Constant declared

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Bob'; // This will result in an error because `leastFavoriteCustomer` is a constant
}
