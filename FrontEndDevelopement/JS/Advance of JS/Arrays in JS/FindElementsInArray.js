// Find the position of the element that occurs in the referenced data type.
let veg = [
    { id: 1, vegName: 'Onion' },
    { id: 2, vegName: 'Tomato' },
    { id: 3, vegName: 'Potato' }
]

let result = veg.findIndex(function(veg) {
    return veg.vegName === 'Potato'
})
console.log(result);