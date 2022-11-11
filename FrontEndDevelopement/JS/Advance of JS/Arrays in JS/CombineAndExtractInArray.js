const fruitsBasket1 = ['Apple', 'Mango', 'Banana', 'Grapes'];
const fruitsBasket2 = ['Pine Apple', 'Guava', 'Orange', 'Watermelon'];

// Old Method.

/*
const billProducts = fruitsBasket1.concat(fruitsBasket2);
console.log(billProducts);
*/

// New Method.
const billProducts = [...fruitsBasket1, 'Kiwi', ...fruitsBasket2];
console.log(billProducts);