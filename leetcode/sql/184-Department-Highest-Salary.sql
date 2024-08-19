# Write your MySQL query statement below
SELECT d.name AS Department, e.name AS Employee, e.salary as Salary FROM Employee e JOIN Department d ON e.departmentId = d.id WHERE e.salary = (
    SELECT MAX(e2.salary) FROM Employee e2 GROUP BY e2.departmentId HAVING e.departmentId = e2.departmentId
);