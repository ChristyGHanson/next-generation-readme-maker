
// This downloads Inquirer.
const inquirer = require('inquirer');
const fs = require('fs');
const readmeMarkdown = require('./utils/markdown-generation.js')

// This is an array of questions for user input.
// This function will write the Markdown content to a file. 
function writeToFile(fileName, data) {
    // for(const question of data ){
    fs.writeFile(fileName, readmeMarkdown(data), (err) => {
        if (err) {
            console.log('Sorry. Error creating Markdown file: ', err);
            return
        }
        console.log('A new version of the README has been written! Markdown file created.')
    }
    )
};

// The function initApplication will initialize app
function initApplication() {

    // These prompts will appear in the terminal. The user will be able to respond to these prompts.
    // Pressing the 'ENTER' key after answering each question will produce the next question in the sequence.
    inquirer.prompt([
        {
            type: 'input',
            message: 'Type the title of your project here. This will be the title of the README: ',
            name: 'title'
        },

        {
            type: 'input',
            message: 'Type a description for the project. Describe how it works.: ',
            name: 'description'
        },

        {
            type: 'input',
            message: 'Describe how to install this program: ',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Describe how users should use this app: ',
            name: 'usage'
        },
        {
            type: 'list',
            message: 'For licenses, please type one of the following (Use the UP and DOWN arrow keys. Press Enter to select the license.): ',
            name: 'license',
            choices: ['MIT', 'Apache', 'Mozilla', 'GNU', 'Boost', 'ISC']
        },
        {
            type: 'input',
            message: 'Explain which license the application is covered under.: ',
            name: 'licensenotice',
        },
        {
            type: 'input',
            message: 'How can other developers contribute to this repo or project?: ',
            name: 'contributing'
        },
        {
            type: 'input',
            message: 'List test guidelines here. List some examples of how to run tests: ',
            name: 'tests'
        },
        {
            type: 'input',
            message: 'Type your GitHub username (exactly as it appears) here: ',
            name: 'githubusername'
        },
        {
            type: 'input',
            message: 'Type your email. This will be added at the end of the README.: ',
            name: 'emailcontact'
        }
    ])
        .then((data) =>
            writeToFile('README.md', data))
}

// Calling initApplication function here initializes the app.
initApplication();
