// Include packages needed for this application
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const addHtml = require("./src/addHtml.js");
const base = require("./src/base.js");

//variables for employees classes 
const employees = [];
let newMember;


// function for prompts starting with Manager
function managerQuestions() {
  base();
  inquirer
    .prompt([
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
      let employeeInfo = "office number";

      inquirer
        .prompt([
          {
            type: "input",
            name: "employeeInfo",
            message: `Enter team manager's ${employeeInfo}:`,
          },
          {
            type: "list",
            name: "addMembers",
            message: "Would you like to add an intern or engineer?",
            choices: ["yes", "no"],
          },
        ])
        .then(function ({ employeeInfo, addMembers }) {
          newMember = new Manager(name, id, email, employeeInfo);
          employees.push(newMember);
          addHtml(newMember);
          if (addMembers === "yes") {
            addingMember();
          } else {
            //in case user doesn't want to add more team members, invokes the function to add the html, and adds to array of employeses
            newMember = new Manager(name, id, email, employeeInfo);
            employees.push(newMember);
            addHtml(newMember);
            console.log("Team Profile Generator has Finished! See index.html in dist folder!");
          }
        });
    });
}

//function to add new non Manager employees
function addingMember() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Hello, enter team member's name:",
      },
      {
        type: "list",
        name: "role",
        message: "Select team member's role",
        choices: ["Engineer", "Intern"],
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
    ])
    .then(function ({ name, role, id, email }) {
      let employeeInfo = "";
      if (role === "Engineer") {
        employeeInfo = "GitHub username";
      } else if (role === "Intern") {
        employeeInfo = "school name";
      }
      inquirer
        .prompt([
          {
            type: "input",
            name: "employeeInfo",
            message: `Enter team member's ${employeeInfo}:`,
          },
          {
            type: "list",
            name: "moreMembers",
            message: "Would you like to add more team members?",
            choices: ["yes", "no"],
          },
        ])
        .then(function ({ employeeInfo, moreMembers }) {
          let newMember = "";
          if (role === "Engineer") {
            newMember = new Engineer(name, id, email, employeeInfo);
          } else if (role === "Intern") {
            newMember = new Intern(name, id, email, employeeInfo);
          }
          employees.push(newMember);
          addHtml(newMember).then(function () {
            if (moreMembers === "yes") {
              addingMember();
            } else {
              console.log("Team Profile Generator has Finished! See index.html in dist folder!");
            }
          });
        });
    });
}


// A function to initialize app
function init() {
  managerQuestions();
}


// Function call to initialize app
init();
