const inquirer = require('inquirer');

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
  });