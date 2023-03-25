// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
//const questions = [];

function Project({ title, description, install, usage, contributing, test, license, username, email }) {
    this.title = title;
    this.description = description;
    this.install = install;
    this.usage = usage;
    this.contributing = contributing;
    this.test = test;
    this.license = license;
    this.username = username;
    this.email = email;
}

function askUser() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the name of your project?'
            },
            {
                type: 'input',
                name: 'description',
                message: 'How would you describe your project?'
            },
            {
                type: 'input',
                name: 'install',
                message: 'What are the installation instructions for your project?',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'What is the usage information regarding your project?', 
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'What should a fellow developer know in order to contribute to this project?',
            },
            {
                type: 'input',
                name: 'test',
                message: 'What are the test instructions for your project?',
            },
            {
                type: 'list',
                message: 'Which license are you using for this project?',
                name: 'license',
                choices: ["Apache 2.0", "MIT", "GNU GPLv3", "Mozilla Public License 2.0", "None"],
            },
            {
                type: 'input',
                name: 'username',
                message: 'What is your GitHub username?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?',
            },
        ])
        .then((response) => {
            const userInfo = new Project(response);
        })
}



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    askUser();
}

// Function call to initialize app
init();
