const fs = require('fs');
const inquirer = require('inquirer');
const { choices } = require('yargs');
// const Engineer = require('./lib/Engineer');
// const Employee = require('./lib/Employee');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
// const Manager = require('./lib/Manager');

const employees = [];

// MANAGER PROMPT
// Function that prompts user for the manager's information
const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the team Manager\'s name?',
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
            message: 'Enter the Manager\'s employee ID.',
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
            message: 'Enter the Manager\'s email address.',
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
        message: 'Enter the Manager\'s office number.',
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
      // console.log(employees);
    })
  };

// MENU PROMPT
// Function that prompts user with option to add an engineer or an intern
const menuPrompt = () => {
  return inquirer.prompt([
      {
          type: 'list',
          name: 'menuList',
          message: 'Would you like to add anyone else to the team?',
          choices: ['Engineer', 'Intern', 'No. My team profile is complete.'],
          }
  ])
  .then(answers => {
    console.log(answers.menuList);
    if (answers.menuList === 'Engineer') {
      console.log("you selected Engineer");
      engineerPrompt();
    } else if (answers.menuList === 'Intern') {
      console.log("you selected Intern");
      internPrompt();
    } else {
      console.log('You chose to complete your team');
      console.log(employees);
      return
    }
  })
};

// ENGINEER PROMPT
// Function that prompts user for the engineer's information
const engineerPrompt = () => {
  return inquirer.prompt([
      {
          type: 'input',
          name: 'engineerName',
          message: 'What is the Engineer\'s name?',
          validate: engineerNameInput => {
            if (engineerNameInput) {
              return true;
            } else {
              console.log('Please enter a valid name!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'engineerId',
          message: 'Enter the Engineer\'s employee ID.',
          validate: engineerIdInput => {
            if (engineerIdInput) {
              return true;
            } else {
              console.log('Please enter a valid employee ID!');
              return false;
            }
          }
        },
      {
          type: 'input',
          name: 'engineerEmail',
          message: 'Enter the Engineer\'s email address.',
          validate: engineerEmailInput => {
            if (engineerEmailInput) {
              return true;
            } else {
              console.log('Please enter a valid email address!');
              return false;
            }
          }
        },
    {
      type: 'input',
      name: 'engineerGithub',
      message: 'Enter the Engineer\'s GitHub username.',
      validate: engineerGithubInput => {
          if (engineerGithubInput) {
            return true;
          } else {
            console.log('Please enter a valid GitHub username!');
            return false;
          }
        }
    }
  ])
  .then(answers => {
    employees.push(answers);
    // console.log(employees);
    return menuPrompt();
  })
};

// INTERN PROMPT
// Function that prompts user for the intern's information
const internPrompt = () => {
  return inquirer.prompt([
      {
          type: 'input',
          name: 'internName',
          message: 'What is the Intern\'s name?',
          validate: internNameInput => {
            if (internNameInput) {
              return true;
            } else {
              console.log('Please enter a valid name!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'internId',
          message: 'Enter the Intern\'s employee ID.',
          validate: internIdInput => {
            if (internIdInput) {
              return true;
            } else {
              console.log('Please enter a valid employee ID!');
              return false;
            }
          }
        },
      {
          type: 'input',
          name: 'internEmail',
          message: 'Enter the Intern\'s email address.',
          validate: internEmailInput => {
            if (internEmailInput) {
              return true;
            } else {
              console.log('Please enter a valid email address!');
              return false;
            }
          }
        },
    {
      type: 'input',
      name: 'internSchool',
      message: 'Enter the Intern\'s school.',
      validate: internSchoolInput => {
          if (internSchoolInput) {
            return true;
          } else {
            console.log('Please enter a valid School!');
            return false;
          }
        }
    }
  ])
  .then(answers => {
    employees.push(answers);
    // console.log(employees);
    return menuPrompt();
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
.then(answers => {
  return menuPrompt(answers);
})
// menuPrompt();
  // .then(projectData => {
  //   return generateMarkdown(projectData);
  // })
  // .then(readme => {
  //   return writeFile(readme);
  // })
  // .catch(err => {
  //   console.log(err);
  // });



