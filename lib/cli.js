const inquirer = require('inquirer');
const SVG = require('./svg.js');
const { Square, Triangle, Circle } = require('./shapes.js');
const { writeFile } = require('fs/promises');

class CLI {
    run() {
        const questions = [
            {
                name: "text",
                type: "input",
                message: "Enter text with at least 3 characters",
                validate: (text) => {
                    return text.length <= 3 || "The message must not exceed 3 characters";
                }
            }
        ]
        return inquirer.prompt(questions).then((answers) => {
            console.log(answers);
        })
    }
}
module.exports = CLI;