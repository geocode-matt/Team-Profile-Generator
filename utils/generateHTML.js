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
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${employees[0].managerName}</h1>
      <h1>${employees[0].managerId}</h1>
      <h1>${employees[0].managerEmail}</h1>
      <h1>${employees[0].managerOffice}</h1>
    </body>
    </html>
    `;
  };
  
  module.exports = generateHTML;
  