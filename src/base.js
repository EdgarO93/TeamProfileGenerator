const fs = require("fs");
function base() {
  let base = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="icon" href="group-icon.ico" />
      <title> New Generated Team</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />
      <link rel="stylesheet" href="../dist/style.css">
    </head>
    
    <body>
      <div class="container-fluid">
          <div class="row d-flex justify-content-center">
              <h1 class="text-center">My Team</h1>
          </div>
      </div>
      </div>
      <div class="container">
          <section class="row d-flex justify-content-center" id="appendhere">
              <!-- looking to add the other employee cards here -->
    
          </section>
    
         
      </div>
    </body>
    
    </html>
    
    
      `;
  fs.writeFile("./dist/index.html", base, (err) => {
    if (err) throw err;
    // console.log('Clearing file');
  });
}

module.exports = base;
