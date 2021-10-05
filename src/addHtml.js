const fs = require("fs");

//will add function here to append html
function addHtml(employee) {
  return new Promise(function (resolve, reject) {
    // console.log(newMember)
    const name = employee.getName();
    const role = employee.getRole();
    const id = employee.getId();
    const email = employee.getEmail();
    let data2 = "";
    if (role === "Engineer") {
      const github = employee.getGitHub();
      data2 = `<div class="card mx-auto employee-card" style="width: 10rem">
            <h5 class="card-header">${name}<br /><br />${role}</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${id}</li>
              <li class="list-group-item">
                Email: <a href="mailto:${email}">${email}</a>
              </li>
              <li class="list-group-item">
                GitHub:
                <a
                  href="https://github.com/${github}"
                  target="_blank"
                  rel="noopener noreferrer"
                  >${github}</a
                >
              </li>
            </ul>
          </div>
          `;
    } else if (role === "Intern") {
      const school = employee.getSchool();
      data2 = `<div class="card mx-auto employee-card" style="width: 10rem">
            <h5 class="card-header">${name}<br /><br />${role}</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${id}</li>
              <li class="list-group-item">
                Email: <a href="mailto:${email}">${email}</a>
              </li>
              <li class="list-group-item">
                School:
               ${school}</li>
            </ul>
          </div>`;
    } else {
      const officeNumber = employee.getOfficeNumber();
      data2 = `<div class="card mx-auto employee-card" style="width: 10rem">
            <h5 class="card-header">${name}<br /><br />${role}</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${id}</li>
              <li class="list-group-item">
                Email: <a href="mailto:${email}">${email}</a>
              </li>
              <li class="list-group-item">
                Office Number:
               ${officeNumber}</li>
            </ul>
          </div>`;
    }
    console.log("adding team member");
    fs.readFile("./dist/index.html", "utf8", function (err, data) {
      if (err) {
        return console.log(err);
      }

      var toPrepand = data2;
      var result = data.replace(/\<\/section>/g, toPrepand + "</section>");

      fs.writeFile(`./dist/index.html`, result, function (err) {
        if (err) {
          return reject(err);
        }
        return resolve();
      });
    });
  });
}

// function base() {
// let base= `
// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//   <link rel="icon" href="group-icon.ico" />
//   <title> New Generated Team</title>
//   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
//       integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />
//   <link rel="stylesheet" href="../dist/style.css">
// </head>

// <body>
//   <div class="container-fluid">
//       <div class="row d-flex justify-content-center">
//           <h1 class="text-center">My Team</h1>
//       </div>
//   </div>
//   </div>
//   <div class="container">
//       <section class="row d-flex justify-content-center" id="appendhere">
//           <!-- looking to add the other employee cards here -->

//       </section>

//   </div>
// </body>

// </html>

//   `
// fs.writeFile('./dist/index.html', base,  (err) =>
// err ? console.log(err) : console.log("clearing")
// );
// }

module.exports = addHtml;
// module.exports= base;
