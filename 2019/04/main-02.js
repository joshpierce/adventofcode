const _ = require('lodash');

let passwordMin = 265275;
let passwordMax = 781584;
let countValid = 0;

let isValidPassword = (p) => {
    let doubles = _.pickBy(_.countBy(p), (v, k) => {
        return v == 2;
    });        
    
    return (p[0] === p[1] || p[1] === p[2] || p[2] === p[3] || p[3] === p[4] || p[4] === p[5]) &&
           (p[0] <=  p[1] && p[1] <=  p[2] && p[2] <=  p[3] && p[3] <=  p[4] && p[4] <=  p[5]) &&
           _.size(doubles) >= 1;
};

for (var i = passwordMin; i <= passwordMax; i++) {
    if (isValidPassword(i.toString().split(''))) {
        countValid++;
    }    
}

console.log(`Total Valid Passwords Count Is ${countValid}`);