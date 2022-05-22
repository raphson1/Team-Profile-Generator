const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const bodyContent = require("./src/htmlBody");

const inquirer = require("inquirer");
const fs = require('fs');

var employee = [ ]

inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the Id?"
        },
        {
            type: "input",
            name: "email",
            message: "what is your Email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your office phone number",
        },
       
    ]).then(response => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
        employee.push(manager)
        addEmployee()

    })

    function addEmployee(){
       
        inquirer.prompt([
                {
                    type: "confirm",
                    name: "name",
                    message: "do you want to add another employee?"
                }

            ]).then(choice => {
                if(choice.name === true){
                    menu()
                } else{
                  console.log(employee)
                  const pageContent = bodyContent(employee);
                  fs.writeFile('dist/index.html', pageContent, (err) =>
                  err ? console.log(err) : console.log('Successfully created index.html')
    );

                }

            })
    }

    function menu(){
        
        inquirer.prompt([
            {
                type: "list",
                name: "selection",
                choices: ["Engineer", "Intern"]
            }

        ]).then(response => {
            if(response.selection === "Engineer"){
                addEngineer()
            } else{
                addIntern()
            }
        })
    };

    function addEngineer(){
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the Id?"
            },
            {
                type: "input",
                name: "email",
                message: "what is your Email?"
            },
            {
                type: "input",
                name: "github",
                message: "what is your GitHub user name?"
            }
        ]).then(response => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github)
            employee.push(engineer)
            addEmployee()
        })
        
    };

    function addIntern(){
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the Id?"
            },
            {
                type: "input",
                name: "email",
                message: "what is your Email?"
            },
            {
                type: "input",
                name: "school",
                message: "what is your school?"
            }
        ]).then(response => {
            const intern = new Intern(response.name, response.id, response.email, response.school)
            employee.push(intern)
            addEmployee()
        })
    }


