let studMark1 = 50;
let studMark2 = 80;

// AND operator.
// Return TRUE only if all the conditions are met.
let eligibleForComp1 = (studMark1 > 90) && (studMark2 > 90);

console.log("Eligible for competition-1 : " + eligibleForComp1);

// OR operator.
// Return TRUE if atleast anyone of the conditions are met.

let eligibleForComp2 = (studMark1 > 90) || (studMark2 > 70);

console.log("Eligible for competition-2 : " + eligibleForComp2);

// NOT operator.
// Return the reverse of the condition.
console.log("Not Eligible for competition-1 : " + !eligibleForComp1);