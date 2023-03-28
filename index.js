// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
//const questions = [];

const formatContent = ({ title, description, install, usage, contributing, test, license, username, email }, badge) =>
`# ${title}
${badge}

## Description

${description}

## Installation

${install}

## Usage Instructions

${usage}

## How to Contribute

${contributing}

## Test Instructions

${test}

## License

${license}

## Questions

Any questions or concerns regarding the project, you can contact me:

Via my GitHub: https://github.com/${username}
Or via my email: ${email}
`


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
            const badge = generateMarkdown.renderLicenseBadge(response.license);
            const link = generateMarkdown.renderLicenseLink(response.license);
            const licenseSection = generateMarkdown.renderLicenseSection(response.license, link);
            response.license = licenseSection;
            const markdown = formatContent(response, badge);
            console.log(markdown);
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
