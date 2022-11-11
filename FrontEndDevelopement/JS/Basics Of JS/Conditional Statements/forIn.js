person = {
    name: "Yuvaraj",
    age: 20,
    sex: "Male"
};

colors = ['red', 'blue', 'green'];

for (let key in person) {
    console.log(key + ": " + person[key]);
}

for (let color of colors) {
    console.log("colors : " + color);
}