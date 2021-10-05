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
          </div>`
        }
        console.log("adding team member");
        fs.readFile('./dist/index.html', 'utf8', function (err,data) {
            if (err) {
              return console.log(err);
            }
          
            var toPrepand = data2;
            var result = data.replace(/\<\/section>/g, toPrepand+ '</section>');

        fs.writeFile(`./dist/index.html`, result, function (err) {
                if (err) {
                    return reject(err);
                };
                return resolve();
                
            });
        })
 
})}






module.exports = addHtml;