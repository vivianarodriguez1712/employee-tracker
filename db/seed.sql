INSERT INTO Department (name)
VALUES ('Sales');
INSERT INTO Department (name)
VALUES ('Finance');
INSERT INTO Department (name)
VALUES ('Customer Service');

INSERT INTO Role (title, salary, department_id)
VALUES ('manager', '50000', 1);
INSERT INTO Role (title, salary, department_id)
VALUES ('consultant', '70000', 2);
INSERT INTO Role (title, salary, department_id)
VALUES ('cashier', '30000', 3);

INSERT INTO Employee (role_id, first_name, last_name, job_title, department, salary, manager)
VALUES (1, 'Ronald', 'Brown', 'manager', 'sales', '50000', 'Ronald');
INSERT INTO Employee (role_id, first_name, last_name, job_title, department, salary, manager)
VALUES (2, 'Sam', 'Kelly', 'consultant', 'finance', '70000', 'Ronald');
INSERT INTO Employee (role_id, first_name, last_name, job_title, department, salary, manager)
VALUES (3, 'John', 'Lee', 'cashier', 'customer service', '30000', 'Ronald');