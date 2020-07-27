// GENERATE HTML
const generateHTML = (employees) => {
  let cardsArray = [];
  employees.forEach((item) => {
    let cardHTML
    switch (item.role) {
      case 'manager':
        cardHTML = managerCard(item);
        break
      case 'engineer':
        cardHTML = engineerCard(item);
        break
      case 'intern':
        cardHTML = internCard(item);
        break
    }
    cardsArray.push(cardHTML);
  })
  return cardsArray;
};
      
// GENERATE MANAGER CARD
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
// GENERATE ENGINEER CARD
const engineerCard = ({ engineer, engineerId, engineerEmail, engineerGithub }) => {
  return `
  <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${engineer}</h5>
            <h6 class="card-subtitle mb-2">Engineer</h6>
            <ul class="list-group">
              <li class="list-group-item">Employee ID: ${engineerId}</li>
              <li class="list-group-item">Email: ${engineerEmail}</li>
              <li class="list-group-item">GitHub: ${engineerGithub}</li>
            </ul>
          </div>
        </div>
  `;
};
// GENERATE INTERN CARD
const internCard = ({ intern, internId, internEmail, internSchool }) => {
  return `
  <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${intern}</h5>
            <h6 class="card-subtitle mb-2">Intern</h6>
            <ul class="list-group">
              <li class="list-group-item">Employee ID: ${internId}</li>
              <li class="list-group-item">Email: ${internEmail}</li>
              <li class="list-group-item">School: ${internSchool}</li>
            </ul>
          </div>
        </div>
  `;
};

// GENERATE HTML
module.exports = templateData => {

  let cards = generateHTML(templateData);
  let mgrCard = cards.shift();
  let subCard = cards.join().replace(/,/g, '');

    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
    <link rel="stylesheet" href="./src/style.css" />
      <title>Team Profile</title>
    </head>
  
    <body>
      <header class="jumbotron">
        <h1 class="row">My Team</h1>
      </header>

      <main class="container row">
    ${mgrCard}
    ${subCard}
      </main>
      
    </body>
    </html>
    `;
  };
  
  