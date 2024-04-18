const inquirer = require('inquirer');


// function Logo(text, color, shape) {
//     this.text = text;
//     this.textColor = textColor;
//     this.shape = shape;
//     this.shapeColor = shapeColor;
// }

//questions that should appear in terminal
inquirer
.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter text with at least 3 characters',
    },{
        type: 'input',
        name: 'textColor',
        message: 'What color do you want the text to be? Enter a color keyword or hexadecimal number',
    },{
        type: 'list',
        message: 'What shape would you like to choose?',
        name: 'shape',
        choices: ['circle', 'triangle', 'square'],
    },{
        type: 'input',
        name: 'shapeColor',
        message: 'What color do you want your shape to be? Enter a color keyword or hexadecimal number',
    },

]).then(answers => {
console.log(answers);
})

