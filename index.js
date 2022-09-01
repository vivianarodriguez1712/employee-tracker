const inquirer = require('inquirer');
const mysql = require('mysql2');

//////to run type source db/schema.sql; (in schema file)
//-- FOREIGN KEY (manager_id) REFERENCES Employee(id)

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

        switch (answers.options) {
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
                addDept();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case 'Update an employee role':
                updateEmployee();
                break;
            default:
        }
    });


function viewDept() {
    connection.query(
        'SELECT * FROM department',
        function (err, results) {
            console.table(results);
        }
    );
 }    


function viewRoles() {
    connection.query(
        'SELECT * FROM Role',
        function (err, results) {
            console.table(results);
        }
    );
}
//    )}

function viewEmployees() {
    connection.query(
        'SELECT * FROM Employee',
        function (err, results) {
            console.table(results);
        }
    );
}
//    )}

function addDept() {
    inquirer
        .prompt(
            {
                name: 'name',
                type: 'input',
                message: "Enter department name"
            }
        ).then(function ({ name }) {
            connection.query(`INSERT INTO department (name) VALUES ('${name}')`, function (err, data) {
                if (err) throw err;
                console.log(`Added`)
            })
        })
}

function addRole() {
    let department = []

    connection.query(`SELECT * FROM department`, function (err, data) {
        if (err) throw err;

        for (let i = 0; i < data.length; i++) {
            department.push(data[i].name)

        }

        inquirer
            .prompt([
                {
                    name: 'job_title',
                    type: 'input',
                    message: "Enter the role"
                },
                {
                    name: 'salary',
                    type: 'input',
                    message: 'Enter the salary'
                },
                {
                    name: 'department',
                    type: 'list',
                    message: 'Enter the department this role belongs to',
                    choices: department
                }

            ]).then(function ({ job_title, salary, department }) {
                let index = department.indexOf(department) + 1
                console.log(typeof index)
                connection.query(`INSERT INTO Role (title, salary, department_id) VALUES ('${job_title}', '${salary}', ${index})`, function (err, data) {
                    if (err) throw err;
                    console.log(`Added`)
                })
            })
    })
}

function addEmployee() {
    let employees = [];
    let roles = [];

    connection.query(`SELECT * FROM role`, function (err, data) {
        if (err) throw err;

        for (let i = 0; i < data.length; i++) {
            roles.push(data[i].title);
        }

        connection.query(`SELECT * FROM employee`, function (err, data) {
            if (err) throw err;

            for (let i = 0; i < data.length; i++) {
                employees.push(data[i].first_name);
            }

            inquirer
                .prompt([
                    {
                        name: 'first_name',
                        type: 'input',
                        message: "Enter the employees first name"
                    },
                    {
                        name: 'last_name',
                        type: 'input',
                        message: 'Enter the employees last name'
                    },
                    {
                        name: 'role_id',
                        type: 'list',
                        message: 'Enter the employees role',
                        choices: roles
                    },
                    {
                        name: 'manager',
                        type: 'list',
                        message: "Enter the employees manager",
                        choices: ['null'].concat(employees)
                    }

                ]).then(function ({ first_name, last_name, role_id, manager }) {
                    let queryText = `INSERT INTO employee (first_name, last_name, role_id`;
                    // if (manager != 'none') {
                    queryText += `, manager) VALUES ('${first_name}', '${last_name}', ${roles.indexOf(role_id) + 1}, ${manager})`
                    // } else {
                    //     queryText += `) VALUES ('${first_name}', '${last_name}', ${roles.indexOf(role_id) + 1})`
                    // }
                    console.log(queryText)

                    connection.query(queryText, function (err, data) {
                        if (err) throw err;
                        console.log('employee added')
                    })
                })

        })
    })
}


function updateEmployee() {
    connection.query(`SELECT * FROM employee`, function (err, data) {
        if (err) throw err;

        let employees = [];
        let roles = [];

        for (let i = 0; i < data.length; i++) {
            employees.push(data[i].first_name)
        }

        connection.query(`SELECT * FROM role`, function (err, data) {
            if (err) throw err;

            for (let i = 0; i < data.length; i++) {
                roles.push(data[i].title)
            }

            inquirer
                .prompt([
                    {
                        name: 'employee_id',
                        type: 'list',
                        message: "Select which employee you want to update",
                        choices: employees
                    },
                    {
                        name: 'roles',
                        type: 'list',
                        message: "Enter the employees new role",
                        choices: roles
                    }
                ]).then(function ({ employee, role_id }) {
                    connection.query(`UPDATE employee SET role_id = ${roles.indexOf(role_id) + 1} WHERE id = ${employees.indexOf(employee) + 1}`, function (err, data) {
                        if (err) throw err;
                    })
                })
        })

    })
}
