// Updated form of simple if-else Statement.

let age = 27;

function oldStatement(age) {
    if (age >= 18) {
        console.log("Eligible for vote.");
    } else {
        console.log("Not eligible for vote.");
    }
}

function updatedStatment(age) {
    console.log((age >= 18) ? "Eligible for vote." : "Not eligible for vote.");
}

// oldStatement(age);
updatedStatment(age);