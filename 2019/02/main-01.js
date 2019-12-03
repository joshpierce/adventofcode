const fs = require('fs');

let processIntCode = (program, start) => {    
    switch (program[start]) {
        case 1:  
            program[program[start+3]] = program[program[start+1]] + program[program[start+2]];
            return processIntCode(program, start+4);            
        case 2:                            
            program[program[start+3]] = program[program[start+1]] * program[program[start+2]];
            return processIntCode(program, start+4);
        case 99:                
            return program;
    }
}

//Read the inputs file and change everything over to a number
let inputs = fs.readFileSync('inputs.txt').toString().split(',').map(Number);
//Per the instructions, change inputs at position 1 and 2 to 12 and 2 respectively
inputs[1] = 12;
inputs[2] = 2;

//Process the IntCode
let final = processIntCode(inputs, 0);

console.log(`The Value Left at Postion 0 after halting is: ${final[0]}`);