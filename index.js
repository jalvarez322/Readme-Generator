const inquirer = require('inquirer');
const fs = require('fs');

// array of license choices for the user
const licenseChoices = [
  'MIT',
  'Apache',
  'GNU GPLv3',
  'ISC',
  'Unlicense'
];

// prompt questions to the user using inquirer
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a brief description of your project:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions for your project:'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage information for your project:'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license would you like to use?',
      choices: licenseChoices
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide contribution guidelines for your project:'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide test instructions for your project:'
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    }
  ])
  .then((answers) => {
    // generate the README content with the user's input
    const readmeContent = `
      # ${answers.title}

      ## Description
      ${answers.description}

      ## Table of Contents
      - [Installation](#installation)
      - [Usage](#usage)
      - [License](#license)
      - [Contributing](#contributing)
      - [Tests](#tests)
      - [Questions](#questions)

      ## Installation
      ${answers.installation}

      ## Usage
      ${answers.usage}

      ## License
      This project is licensed under the ${answers.license} license.

      ## Contributing
      ${answers.contributing}

      ## Tests
      ${answers.tests}

      ## Questions
      If you have any questions, you can reach me through my [GitHub profile](https://github.com/${answers.github}) or by email at ${answers.email}.
    `;

    // write the README file to disk
    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.error(err) : console.log('README file generated successfully!')
    );
  });
