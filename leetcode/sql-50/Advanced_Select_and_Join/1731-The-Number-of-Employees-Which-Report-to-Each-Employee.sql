# Write your MySQL query statement below
SELECT r.employee_id, r.name, COUNT(e.employee_id) AS reports_count, ROUND(AVG(e.age)) AS average_age FROM Employees r
INNER JOIN Employees e ON r.employee_id=e.reports_to
GROUP BY r.employee_id ORDER BY r.employee_id