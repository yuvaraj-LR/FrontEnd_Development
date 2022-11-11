const myDetails = {
    name: "yuvaraj",
    age: 20
}

// We can add more data into our object by dotNotation.
myDetails.dob = "17-08-2002";

// Suppose if we have to delete some details in our object means we use delete method to remove our details.

delete myDetails.age;

console.log(myDetails);