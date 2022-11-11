// We can clone our objects in 3 ways. 

const user = {
    name: 'Yuvaraj',
    age: 20
}

// Method - 1 (for loop)
/*
let cloneTheUserObject = {};

for (let key in user) {
    cloneTheUserObject[key] = user[key];
}

console.log(cloneTheUserObject);
*/

// Method - 2 (Object.assign)
/*
let cloneTheUserObject = Object.assign({}, user);
console.log(cloneTheUserObject);
*/

// Method -3 (By spread operator)
let cloneTheUserObject = {
    ...user
};

console.log(cloneTheUserObject);