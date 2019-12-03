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
var output = 0;

//Iterate through the possible nouns and verbs and process the IntCode for each

//﴾͡๏̯͡๏﴿ O'RLY?
loop1:
for (var noun = 0; noun <= 99; noun++) {    
    for (var verb = 0; verb <= 99; verb++) {
        //start by resetting the memory and replacing the noun and verb
        input = inputs.slice();
        input[1] = noun;
        input[2] = verb;        
        
        if (processIntCode(input, 0)[0] == 19690720) {
            console.log(`Final Noun: ${noun}`);
            console.log(`Final Verb: ${verb}`);
            console.log(`Puzzle Answer: ${100 * noun + verb}`);
            //﴾͡๏̯͡๏﴿ O'RLY WTF?
            break loop1;
        } 
    }
}