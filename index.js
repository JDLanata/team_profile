const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generateHtml = require('./util/generateHtml');
const inquirer = require('inquirer');
const fs = require('fs');


const employList =[];

const start = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'question',
            choices: ['Add Manager', 'Add Engineer', 'Add Intern', 'Build Team Profile']
        }
    ]).then(answers => {
        switch (answers.question) {
            case 'Add Manager':
                console.log('Add Manager');
                addManager();
                break;

            case 'Add Engineer':
                console.log('Add Engineer');
                addEngineer();
                break;

            case 'Add Intern':
                console.log('Add Intern');
                addIntern();
                break;

            default:
                console.log('Build the team site!');
                teamProfile();
                break;

        }//end of switch
    })//end of .then switch case
}//end of start function

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Managers name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their ID number?'
        },
        {
            type: 'input',
            name: 'email',
            message: "What is their email?",
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is their office number?'
        }
    ])//end of Inquirer Prompt
        .then(({name,id,email,office}) => {
            console.log(name,id,email,office);
            const lead = new Manager(name,id,email,office);
            employList.push(lead);

            start();
        })//end of .Then
}//end of addManager

function addEngineer(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Engineers name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their ID number?'
        },
        {
            type: 'input',
            name: 'email',
            message: "What is their email?",
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is their GitHub user name?'
        }
    ])//end of Inquirer Prompt
        .then(({name,id,email,gitHub}) => {
            console.log(name,id,email,gitHub);
            const progarmer = new Engineer(name,id,email,gitHub);
            employList.push(progarmer);
            start();
        })//end of .Then

}//end of addEngineer

function addIntern(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Interns name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their ID number?'
        },
        {
            type: 'input',
            name: 'email',
            message: "What is their email?",
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school are they attending?'
        }
    ])//end of Inquirer Prompt
        .then(({name,id,email,school}) => {
            console.log(name,id,email,school);
            const student = new Intern(name,id,email,school);
            employList.push(student);
            start();
        })//end of .Then


}//end of addIntern

function teamProfile(){
    fs.writeFile('./dist/index.html', generateHtml(employList),(err) =>
    err ? console.log(err) : console.log('Your profile site has been written.'))

}//end of teamProfile


start();