// If - Else Statements.

// Run time example for greet the user according to that present time by the computer.

// Gather our computer time.
let time = new Date();
console.log(time);

// Gather the hour of our time.
let time_hour = new Date().getHours();
console.log(time_hour);

// Check for whether the hour is Morning, Afternoon or Evening.
if (time_hour >= 0 && time_hour <= 13) {
    console.log("Good Morning!!!");
} else if (time_hour >= 13 && time_hour <= 17) {
    console.log("Good Afternoon!!!");
} else {
    console.log("Good Evening!!!");
}