# Write your MySQL query statement below
SELECT e.name AS Employee FROM Employee e WHERE e.managerId IS NOT NULL AND e.salary > (SELECT salary FROM Employee WHERE e.managerId = id);

# Write your MySQL query statement below
SELECT e1.name AS Employee FROM Employee e1 INNER JOIN Employee e2 ON e1.managerId = e2.id WHERE e1.salary > e2.salary;