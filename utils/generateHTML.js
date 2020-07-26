// function to generate HTML
const generateHTML = employees => {
  // console.log("test start");
  // console.log(employees);
  // console.log(employees[0].managerName);
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

        <div class="card manager" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${employees[0].manager}</h5>
            <h6 class="card-subtitle mb-2">Manager</h6>
            <ul class="list-group">
              <li class="list-group-item">Employee ID: ${employees[0].managerId}</li>
              <li class="list-group-item">Email: ${employees[0].managerEmail}</li>
              <li class="list-group-item">Office Number: ${employees[0].managerOffice}</li>
            </ul>
          </div>
        </div>

        <div class="card engineer" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${employees[1].engineer}</h5>
            <h6 class="card-subtitle mb-2">Engineer</h6>
            <ul class="list-group">
              <li class="list-group-item">Employee ID: ${employees[1].engineerId}</li>
              <li class="list-group-item">Email: ${employees[1].engineerEmail}</li>
              <li class="list-group-item">GitHub: ${employees[1].engineerGithub}</li>
            </ul>
          </div>
        </div>

        <div class="card intern" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${employees[2].intern}</h5>
            <h6 class="card-subtitle mb-2">Intern</h6>
            <ul class="list-group">
              <li class="list-group-item">Employee ID: ${employees[2].internId}</li>
              <li class="list-group-item">Email: ${employees[2].internEmail}</li>
              <li class="list-group-item">School: ${employees[2].internSchool}</li>
            </ul>
          </div>
        </div>

      </main>
      
    </body>
    </html>
    `;
  };
  
  module.exports = generateHTML;
  