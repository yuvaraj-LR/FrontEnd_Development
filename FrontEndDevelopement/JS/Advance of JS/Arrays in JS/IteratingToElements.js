const dept = ['CS', 'Phy', 'Chem', 'Bio', 'Mat'];

// for-of loop.  
//      => Show direct values.
for (let deptName of dept) {
    console.log(deptName);
}

// for-in loop.  
//      => Show the iterating values.
for (let deptName in dept) {
    console.log(deptName, dept[deptName]);
}

// for-each loop.
//      =>Show direct values.
dept.forEach(function(deptName) {
    console.log(deptName);
});

// Reduce the complexity of for-each loop by arrow function.
dept.forEach((deptName) => { console.log(deptName) });