//Quick little script to throw out all the daily folders for the advent of code challenges, and run npm init on the folders
//so that way they can be immediately added to git and are ready to be used each day.
var fs = require('fs');
var shell = require('shelljs');

for (var i = 1; i <= 25; i++) {
    let dir = `./${i.toString().padStart(2, '0')}`;
    
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    shell.cd(dir);
    if (!fs.existsSync('./package.json')) {
        console.log(`Creating Package.json for ${dir}`);
        shell.exec('npm init --y');
    }    
    shell.cd('..');
}