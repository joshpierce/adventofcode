const fs = require('fs');
const _ = require('lodash');

let inputs = fs.readFileSync('inputs.txt').toString().split('\n');

let fuelReq = (mass) => {
    let req = Math.floor(mass / 3) - 2;
    if (req > 0) {
        return req + fuelReq(req);
    } else {
        return 0;
    }
}

console.log(`Total Fuel Required: ${ _.sumBy(inputs, (i) => fuelReq(i) ) }`);