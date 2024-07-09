# Write your MySQL query statement below
SELECT name FROM Employee e1 JOIN (SELECT COUNT(*) AS countId, managerId FROM Employee GROUP BY managerId HAVING countId > 4) e2 ON e1.id=e2.managerId;

# Write your MySQL query statement below
SELECT e1.name FROM Employee e1
INNER JOIN Employee e2 ON e1.id=e2.managerId
GROUP BY e1.managerId
HAVING COUNT(e1.id) > 4;