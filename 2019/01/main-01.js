const fs = require('fs');
const _ = require('lodash');

let inputs = fs.readFileSync('inputs.txt').toString().split('\n');

let fuelReq = (mass) => {
    return Math.floor(mass / 3) - 2;
}

console.log(`Total Fuel Required: ${ _.sumBy(inputs, (i) => fuelReq(i) ) }`);