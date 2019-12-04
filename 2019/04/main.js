const _ = require('lodash');
let validCounts = [0, 0];

let isValidPassword = (p) => {    
    //get digits repeated at least twice (part 1)
    let multiples = _.pickBy(_.countBy(p), (v, k) => v >= 2);
    //get digits repeated only twice (part 2)
    let doubles = _.pickBy(_.countBy(p), (v, k) => v == 2); 
    
    //if increasing & has multiples then it at least satisfies #1
    //then check if it has at least one set of a single double, if so it satisfies #2
    return isIncreasing(p) && _.size(multiples) >= 1 ? _.size(doubles) >= 1 ? 2 : 1 : 0; 
};

//helper function to ensure all digits are increasing (assumes 6 digits)
let isIncreasing = p => (p[0] <=  p[1] && p[1] <=  p[2] && p[2] <=  p[3] && p[3] <=  p[4] && p[4] <=  p[5]);

//loop over our valid range and check for valid passwords for part 1 and part 2
for (var i = 265275; i <= 781584; i++) {
    let x = isValidPassword(i.toString().split(''));
    validCounts[0] += x >= 1 ? 1 : 0; 
    validCounts[1] += x == 2 ? 1 : 0;
}

console.log(`Total Part 1 Valid Passwords Count Is ${validCounts[0]}`);
console.log(`Total Part 2 Valid Passwords Count Is ${validCounts[1]}`);