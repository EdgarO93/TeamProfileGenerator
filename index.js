// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employees = [];
let newMember;
const addHtml = require("./src/addHtml.js");
// const base = require("./src/base.js");
// function for prompts starting with Manager
function managerQuestions() {

    inquirer.prompt(
        [
            {
                type: "input",
                name: "name",
                message: "Hello, enter team manager's name:",
            },
            {
                type: "input",
                name: "id",
                message: "Hello, enter team manager's ID:",
            },
            {
                type: "input",
                name: "email",
                message: "Hello, enter team manager's email address:",
            },

        ])
        .then(function ({ name, id, email }) {

            let employeeInfo = "office Number"

            inquirer.prompt([{
                type: "input",
                name: "employeeInfo",
                message: `Enter team manager's ${employeeInfo}`,

            },
            {
                type: "list",
                name: "addMembers",
                message: "Would you like to add an intern or engineer?",
                choices: [
                    "yes",
                    "no"
                ],



            }]).then(function ({ employeeInfo, addMembers }) {
                newMember = new Manager(name, id, email, employeeInfo)
                employees.push(newMember);
                addHtml(newMember)
                if (addMembers === "yes") {
                    addingMember();
                } else {
                    //in case user doesn't want to add more team members, invokes the function to add the html, and adds to array of employeses
                    newMember = new Manager(name, id, email, employeeInfo)
                    employees.push(newMember);
                    addHtml(newMember)
                    console.log("Team Profile Generator has Finished!");
                

                }
            })

        })
}

//function to add new non Manager employees
function addingMember() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Hello, enter team member's name:",
        },
        {
            type: "list",
            name: "role",
            message: "Select team member's role",
            choices: [
                "Engineer",
                "Intern",],
        },
        {
            type: "input",
            name: "id",
            message: "Hello, enter employee's ID:",
        },
        {
            type: "input",
            name: "email",
            message: "Hello, enter employee's email address:",
        },

    ]).then(function ({ name, role, id, email }) {
        let employeeInfo = "";
        if (role === "Engineer") {
            employeeInfo = "GitHub username";
        } else if (role === "Intern") {
            employeeInfo = "school name";
        }
        inquirer.prompt([{
            type: "input",
            name: "employeeInfo",
            message: `Enter team member's ${employeeInfo}`,

        },
        {
            type: "list",
            name: "moreMembers",
            message: "Would you like to add more team members?",
            choices: [
                "yes",
                "no"
            ],
        }]).then(function ({ employeeInfo, moreMembers }) {
            let newMember = ""
            if (role === "Engineer") {
                newMember = new Engineer(name, id, email, employeeInfo);
            } else if (role === "Intern") {
                newMember = new Intern(name, id, email, employeeInfo);
            }
            employees.push(newMember);
            addHtml(newMember)
                .then(function () {
                    if (moreMembers === "yes") {
                        addingMember();
                    } else {
                        console.log("Team Profile Generator has Finished!");
                    }
                });

        })


    })
}





// function endofHTML(){
//    const end =` </div>
//     </div>
// </body>

// </html>`;
// fs.appendFile("./dist/index.html", end, function (err) {
//     if (err) {
//         console.log(err);
//     };
// });
// console.log("end");

// }

    // A function to initialize app
    function init() {
        // writeToFile("index.html",base())
        managerQuestions();
    }



//unlink function to delete the previous README
// function writeToFile(fileName, data) {
//     let newFile = `./dist/index.html`
//     fs.unlink(newFile, (err) => {
  
//       if (err) {
//         console.log("No html to overwrite, will make new one!");
//       }
  
  
    //   fs.writeFile(fileName, data, (err) =>
    //     err ? console.log(err) : console.log("Success! You have a new file(index.html) in the dist folder.")
//     //   );
//     })
  
//   }

    // Function call to initialize app
    init();
