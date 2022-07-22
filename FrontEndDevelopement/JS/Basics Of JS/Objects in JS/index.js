let personDetails = {
    name: "Yuvaraj",
    age: 20,
    address: {
        street: "Vp Kovil Street",
        city: {
            cName: "Thanjavur",
            pinCode: 613001,
        },
        state: "Tamil Nadu",
        country: "India"
    },
    gender: "M",
    phNo: 8428480807
}

//Can able to access it in 2 ways.

//Dot notations.
// ->Commonly used method in all format.

console.log(personDetails.gender);
console.log(personDetails.address.city.pinCode);

//Bracket notations.
//  ->Only used in specific conditions. 

console.log(personDetails['age']);