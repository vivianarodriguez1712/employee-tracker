const inquirer = require('inquirer');
const mysql = require('mysql2');

//////to run type source db/schema.sql; (in schema file)

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '171367',
    database: 'tracker'
  });

inquirer
  .prompt([
    {
      type: 'list',
      name: 'options',
      message: 'What would you like to choose?',
      choices: ['View all deptartments', 'View all roles', 'View all employees', 'Add a department',
       'Add a role', 'Add an employee', 'Update an employee role', 'exit'],
    },
  ])
  .then(answers => {
    console.info('Answer:', answers.options);

 switch(answers.options) {
    case 'View all deptartments':
      viewDept();  //put the function call in here 
      break;
    case 'View all roles':
      viewRoles();
      break;
    case 'View all employees':
      viewEmployees();
      break;
    case 'Add a department':
      console.log('Add a departmetnt')
      break;
    case 'Add a role':
      console.log('Add a role')
      break;
    case 'Add an employee':
      console.log('Add an employee')
      break;
    case 'Update an employee role':
      console.log('Update an employee role')
      break;
    default:
      // code block
  }
});


function viewDept() {
 inquirer
    .prompt([
       {
         type: 'list',
         name: 'viewDepartments',
         message: 'All current departments',
         choices: ['Sales', 'Finance', 'Customer Serice', 'exit'],
       },
    ])       

 .then(answers => {
   console.info('Answer:', answers.viewDepartments);
 }
)}

function viewRoles() {
    inquirer
       .prompt([
          {
            type: 'list',
            name: 'viewRoles',
            message: 'All current roles',
            choices: ['Manager', 'Consultant', 'Casheir', 'exit'],
          },
       ])       
   
    .then(answers => {
      console.info('Answer:', answers.viewRoles);
    }
   )}

   function viewEmployees() {
    inquirer
       .prompt([
          {
            type: 'list',
            name: 'viewEmployees',
            message: 'All current employees',
            choices: ['Ronald Brown', 'Sam Kelly', 'John Lee', 'exit'],
          },
       ])       
   
    .then(answers => {
      console.info('Answer:', answers.viewEmployees);
    }
   )}