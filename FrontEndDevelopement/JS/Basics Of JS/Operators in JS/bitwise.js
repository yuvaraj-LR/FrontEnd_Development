// Bitwise -> always deal with 0's and 1's.

const writePermission = 4; // Binary number for 4 -> 0000 0100
const readPermission = 2; // Binary number for 2 -> 0000 0010
const executePermission = 1; // Binary number for 1 -> 0000 0001

let myPermission = 0;

myPermission = writePermission | readPermission & executePermission;

console.log(myPermission);