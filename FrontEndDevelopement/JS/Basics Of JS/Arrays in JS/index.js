//Creating an array which holds the multiple all subject mark.

let studMark = [90, 95, 87, 97, 100];

// To show the length of array.
console.log(studMark.length)

// To show all the marks in studMark array.
console.log(studMark);

// To show the maths mark from studMark array.
// Arrays are indexed based type and start from 0th index not from first index.
console.log(studMark[2]);

// To add additional subject for that student.
studMark[6] = 99;
// Suppose if the index has not exists in array it will automatically created and if the added number is higher then the exists array all the other indexed values will be declared "null".
console.log(studMark);