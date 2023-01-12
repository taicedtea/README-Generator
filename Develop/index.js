// Required packages for application
const inquirer = require('inquirer');
const fs = require('fs');

// README.md Formatting
const generateREADME = ({ name, description, installation, usage, license, contributing, test, email }) =>
`# ${name}
## Description
${description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)  
4. [Contributing](#contributing)  
5. [Test](#test)  
6. [Questions?](#questions)

## Installation 
${installation}

## Usage 
${usage}

## License 
This project is under the following license: ${license}

## Contributing 
${contributing}

## Test 
${test}

## Questions? 
Feel free to email me at: ${email}`;

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Give your project a short description.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install this project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use this project?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Who can contribute to this project?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'How to test this app',
    },
    {
      type: 'input',
      name: 'email',
      message: 'How can someone send you questions about this project?',
    },
    {
      type: 'list',
      name: 'license',
      choices: ['MIT', 'test1', 'test2', 'none'],
    },
  ])

  // Creates README with user given information
  .then((data) => {
    const readmePageContent = generateREADME(data);

    fs.writeFile('READMEnew.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });

