// Adding Elements in Arrays.

const colors = ['red', 'blue', 'green'];
console.log(colors);

// Pushing a element to the array at the last index.
colors.push('violet', 'rose');
console.log(colors);

// Pushing a element to the array at the first index.
colors.unshift('black', 'white');
console.log(colors);

// Pushing a element in the particular index.
colors.splice(4, 0, 'cyan', 'brown', 'grey');
console.log(colors);