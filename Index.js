const fs = require('fs');
const inquirer = require('inquirer');
// const generateMarkdown = require('./utils/generateMarkdown.js');

// Function that prompts user for employee information
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'githubUserName',
            message: 'What is your GitHub username?',
            validate: githubUserNameInput => {
              if (githubUserNameInput) {
                return true;
              } else {
                console.log('Please enter your your GitHub username!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'emailName',
            message: 'What is email address?',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter your your email address!');
                return false;
              }
            }
          },
        {
            type: 'input',
            name: 'projectName',
            message: 'What is project title?',
            validate: projectNameInput => {
              if (projectNameInput) {
                return true;
              } else {
                console.log('Please enter your project title!');
                return false;
              }
            }
          },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project.',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter a project description!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions for your project.',
        validate: installationInput => {
            if (installationInput) {
              return true;
            } else {
              console.log('Please enter installation instructions!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter instructions for usage of your project.',
        validate: usageInput => {
            if (usageInput) {
              return true;
            } else {
              console.log('Please enter usage instructions!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Enter guidelines of how to contribute to this project.',
        validate: contributionInput => {
            if (contributionInput) {
              return true;
            } else {
              console.log('Please enter contribution guidelines!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'test',
        message: 'Enter instructions for testing this project.',
        validate: testInput => {
            if (testInput) {
              return true;
            } else {
              console.log('Please enter testing instructions!');
              return false;
            }
          }
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Which licenses did you use in this project? (Check all that apply)',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'NONE']
      }
    ])
  };

// function to write README file
const writeFile = data => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./README.md', data, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

// function call to initialize program
promptUser()
  .then(projectData => {
    return generateMarkdown(projectData);
  })
  .then(readme => {
    return writeFile(readme);
  })
  .catch(err => {
    console.log(err);
  });



