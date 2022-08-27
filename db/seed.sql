INSERT INTO Department (name)
VALUES ('Sales');

INSERT INTO Role (title, salary, department_id)
VALUES ('manager', '50000', 1);

INSERT INTO Employee (first_name, last_name, role_id, manager_id)
VALUES ('Ronald', 'Brown', 1, NULL);

