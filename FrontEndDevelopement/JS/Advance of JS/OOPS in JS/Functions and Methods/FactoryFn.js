// Factory Functions.

// Create the details from the other functions. 
// For eg. In milk factory produce the milk and the milk products.

function creatingPerson(name) {
    return {
        name,
        age: 20,
        greeting() {
            let mgs = `My name is ${this.name}, and my age is ${this.age}`;
            console.log(mgs);
        }
    }
}

let p1 = creatingPerson('Yuvaraj');
p1.greeting();