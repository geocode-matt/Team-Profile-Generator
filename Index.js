const fs = require('fs');
const inquirer = require('inquirer');
// const Employee = require('./lib/Employee');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
// const Manager = require('./lib/Manager');

const employees = [];


// Function that prompts user for the manager's information
const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the team manager\'s name?',
            validate: managerNameInput => {
              if (managerNameInput) {
                return true;
              } else {
                console.log('Please enter a valid name!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'managerId',
            message: 'Enter the manager\'s employee ID.',
            validate: managerIdInput => {
              if (managerIdInput) {
                return true;
              } else {
                console.log('Please enter a valid employee ID!');
                return false;
              }
            }
          },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Enter the manager\'s email address.',
            validate: managerEmailInput => {
              if (managerEmailInput) {
                return true;
              } else {
                console.log('Please enter a valid email address!');
                return false;
              }
            }
          },
      {
        type: 'input',
        name: 'managerOffice',
        message: 'Enter the manager\'s office number.',
        validate: managerOfficeInput => {
            if (managerOfficeInput) {
              return true;
            } else {
              console.log('Please enter a valid office number!');
              return false;
            }
          }
      }
    ])
    .then(answers => {
      employees.push(answers);
      console.log(employees);
    })
  };

// Function that prompts user with option to add an engineer or an intern
const managerPrompt = () => {
  return inquirer.prompt([
      {
          type: 'input',
          name: 'managerName',
          message: 'What is the team manager\'s name?',
          validate: managerNameInput => {
            if (managerNameInput) {
              return true;
            } else {
              console.log('Please enter a valid name!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'managerId',
          message: 'Enter the manager\'s employee ID.',
          validate: managerIdInput => {
            if (managerIdInput) {
              return true;
            } else {
              console.log('Please enter a valid employee ID!');
              return false;
            }
          }
        },
      {
          type: 'input',
          name: 'managerEmail',
          message: 'Enter the manager\'s email address.',
          validate: managerEmailInput => {
            if (managerEmailInput) {
              return true;
            } else {
              console.log('Please enter a valid email address!');
              return false;
            }
          }
        },
    {
      type: 'input',
      name: 'managerOffice',
      message: 'Enter the manager\'s office number.',
      validate: managerOfficeInput => {
          if (managerOfficeInput) {
            return true;
          } else {
            console.log('Please enter a valid office number!');
            return false;
          }
        }
    }
  ])
  .then(answers => {
    employees.push(answers);
    console.log(employees);
  })
};

// function to write README file
// const writeFile = data => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile('./README.md', data, err => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve({
//         ok: true,
//         message: 'File created!'
//       });
//     });
//   });
// };

// function call to initialize program
managerPrompt()
  // .then(projectData => {
  //   return generateMarkdown(projectData);
  // })
  // .then(readme => {
  //   return writeFile(readme);
  // })
  // .catch(err => {
  //   console.log(err);
  // });



