const fs = require('fs');
const inquirer = require('inquirer');
const { choices } = require('yargs');
const generateHTML = require('./utils/generateHTML');
// const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
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
            name: 'manager',
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
      answers['role'] = 'manager';
      employees.push(answers);
      // employees.push({'role': 'manager'});
      // menuPrompt();
      // return employees
      // console.log(employees);
      return employees
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
      return engineerPrompt();
    } else if (answers.menuList === 'Intern') {
      console.log("you selected Intern");
      return internPrompt();
    } else {
      console.log('You chose to complete your team');
      console.log(employees);
      return employees
    }
  })
};

// ENGINEER PROMPT
// Function that prompts user for the engineer's information
const engineerPrompt = () => {
  return inquirer.prompt([
      {
          type: 'input',
          name: 'engineer',
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
    answers['role'] = 'engineer';
    employees.push(answers);
    return menuPrompt();
  })
};

// INTERN PROMPT
// Function that prompts user for the intern's information
const internPrompt = () => {
  return inquirer.prompt([
      {
          type: 'input',
          name: 'intern',
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
    answers['role'] = 'intern';
    employees.push(answers);
    // console.log(employees);
    return menuPrompt();
  })
};

// function to write HTML file
const writeFile = employees => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./index.html', employees, err => {
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

////// FUNCTION TO PUSH TO SEPARATE ARRAYS (Managers, Engineers, Interns)
// const managers = employees.filter(manager => manager.manager)
// const engineers = employees.filter(engineer => engineer.engineer)
// const interns = employees.filter(intern => intern.intern)

// var filter = function() {
//   console.log("<----------->");
//   console.log(managers);
//   console.log("<----------->");
//   console.log(engineers);
//   console.log("<----------->");
//   console.log(interns);
// }

// TEST CODE TO GENERATE HTML
const buildHTML = employees => {
  let cardsArray = [];

  employees.forEach((item) => {
    let cardHTML
    switch (item.role) {
      case 'manager':
        cardHTML = managerCard(item);
        break
      // case 'engineer':
      //   cardHTML = engineerCard(item);
      //   break
      // case 'intern':
      //   cardHTML = internCard(item);
      //   break
    }
    cardsArray.push(cardHTML);
  })
  return cardsArray;
};
      
// TEST CODE TO GENERATE MANAGER CARD
const managerCard = ({ manager, managerId, managerEmail, managerOffice }) => {
  return `
  <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${manager}</h5>
            <h6 class="card-subtitle mb-2">Manager</h6>
            <ul class="list-group">
              <li class="list-group-item">Employee ID: ${managerId}</li>
              <li class="list-group-item">Email: ${managerEmail}</li>
              <li class="list-group-item">Office Number: ${managerOffice}</li>
            </ul>
          </div>
        </div>
  `;
};
// TEST CODE TO GENERATE ENGINEER CARD
// const managerCard = ({ manager, managerId, managerEmail, managerOffice }) => {
//   return `
//   <div class="card" style="width: 18rem;">
//           <div class="card-body">
//             <h5 class="card-title">${manager}</h5>
//             <h6 class="card-subtitle mb-2">Manager</h6>
//             <ul class="list-group">
//               <li class="list-group-item">Employee ID: ${managerId}</li>
//               <li class="list-group-item">Email: ${managerEmail}</li>
//               <li class="list-group-item">Office Number: ${managerOffice}</li>
//             </ul>
//           </div>
//         </div>
//   `;
// };
// TEST CODE TO GENERATE INTERN CARD
// const managerCard = ({ manager, managerId, managerEmail, managerOffice }) => {
//   return `
//   <div class="card" style="width: 18rem;">
//           <div class="card-body">
//             <h5 class="card-title">${manager}</h5>
//             <h6 class="card-subtitle mb-2">Manager</h6>
//             <ul class="list-group">
//               <li class="list-group-item">Employee ID: ${managerId}</li>
//               <li class="list-group-item">Email: ${managerEmail}</li>
//               <li class="list-group-item">Office Number: ${managerOffice}</li>
//             </ul>
//           </div>
//         </div>
//   `;
// };

// function call to initialize program
managerPrompt()
.then(employees => {
  return menuPrompt(employees);
})
.then(employees => {
  console.log(employees);
  // console.log(generateHTML(employees));
  // return generateHTML(employees);
 })
 .then(employees => {
   return writeFile(employees);
 })
 .then(employees => {
   buildHTML(employees);
 })
 .then(employees => {
  managerCard(employees);
})
.catch(err => {
  console.log(err);
});
