const fs = require('fs'); 
const inquire = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { default: inquirer } = require('inquirer');

const workers = []; 
let manager; 
let companyName; 

function bossInfo() {
    inquirer.prompt([
        type: "input",
        message: ""

    ])
}

function init() {
    managerData();
}

function managerData() {
    inquirer.prompt([
        {   
            type: "input",
            message: "What is the name of this team/project?",
            name: "teamTitle"
        },
        {  
            type: "input",
            message: "Who is the manager of this project?",
            name: "managerName"
        },
        {  
            type: "input",
            message: "What is the manager's ID?",
            name: "managerID"
        },
        {   
            type: "input",
            message: "What is the manager's email?",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "officeNumber"
        }]).then(managerAnswers => {
            manager = new Manager(managerAnswers.managerName, managerAnswers.managerID, managerAnswers.managerEmail, managerAnswers.officeNumber);
            teamTitle = managerAnswers.teamTitle;
            console.log("Now we will ask for employee information.")
        });
}



init();