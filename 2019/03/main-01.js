const fs = require('fs');

let getSegments = (start, dir, count) => {
    let segs = [];
    let current = start.slice();

    for (var i = 0; i < count; i++) {
        switch (dir) {
            case 'R':
                current[0]++;
                segs.push(current.slice());
                break;
            case 'L':
                current[0]--;
                segs.push(current.slice());
                break;
            case 'U':
                current[1]++;
                segs.push(current.slice());
                break;
            case 'D':
                current[1]--;
                segs.push(current.slice());
                break;
        }
    }

    return segs;
}

let inputs = fs.readFileSync('inputs.txt').toString().split('\n');

//Get the wirepath instructions into arrays
let wirepaths = [];
for (var p = 0; p < inputs.length; p++) {
    wirepaths.push(inputs[p].split(',').map(x => [x.substring(0, 1), x.substring(1)]));
}

//Declare array to hold segments
let wires = [];

//iterate over the paths
for (var x = 0; x < wirepaths.length; x++) {
    wires.push([[0,0]]);
    //iterate over the instructions for the path        
    for (var i = 0; i < wirepaths[x].length; i++) {           
        //Append the next set of segments based on current position, direction, and number of segments
        wires[x].push(...getSegments(wires[x][wires[x].length-1], wirepaths[x][i][0], wirepaths[x][i][1]));        
    }
}

//Find Intersections
//This part is slow as can be, and would be faster if I would have used sets
let intersections = [];
for (var x = 0; x < wires[0].length; x++) {    
    for (var y = 0; y < wires[1].length; y++) {
        if (wires[0][x][0] == wires[1][y][0] &&
            wires[0][x][1] == wires[1][y][1]) {
            intersections.push({location: wires[0][x], distance: Math.abs(0-wires[0][x][0]) + Math.abs(wires[0][x][1]-0) });
        }
    }
}
intersections.sort((a,b) => (a.distance > b.distance) ? 1 : -1);

console.log(`The manhattan distance to the closest intersection is ${intersections[1].distance}`);