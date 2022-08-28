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

INSERT INTO Employee (first_name, last_name, role_id, manager_id)
VALUES ('Ronald', 'Brown', 1, NULL);
INSERT INTO Employee (first_name, last_name, role_id, manager_id)
VALUES ('Sam', 'Kelly', 2, NULL);
INSERT INTO Employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Lee', 3, NULL);