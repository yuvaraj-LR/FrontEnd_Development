// Constructor Function

function personDetail(name, age) {
    this.name = name;
    this.age = age;
    this.greeting = function() {
        console.log(`My name is ${this.name}, my age is ${this.age}`);
    }
}

let person = new personDetail("yuvaraj", 20);
person.greeting();