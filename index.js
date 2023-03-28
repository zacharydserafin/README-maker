const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

const formatContent = ({ title, description, install, usage, contributing, test, license, username, email }, badge) =>
`# ${title}
${badge}

## Table of Contents

1. [Description](#description)
2. [Installation](#install)
3. [Usage Instructions](#usage)
4. [How to Contribute](#contributing)
5. [Test Instructions](#test)
6. [License](#license)
7. [Questions](#questions)

## <a id="description"></a>Description 

${description}

## <a id="install"></a>Installation 

${install}

## <a id="usage"></a>Usage Instructions 

${usage}

## <a id="contributing"></a>How to Contribute 

${contributing}

## <a id="test"></a>Test Instructions 

${test}

## <a id="license"></a>License 

${license}

## <a id="questions"></a>Questions 

Any questions or concerns regarding the project, you can contact me via my email: ${email}

For more of my work, visit my GitHub: https://github.com/${username}
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
            writeToFile(markdown);
        });
}

function writeToFile(markdown) {
    fs.writeFile('README.md', markdown, (err) =>
    err ? console.log(err) : console.log("Success!")
    );
}

askUser();
