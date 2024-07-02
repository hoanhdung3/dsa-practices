SELECT s.Name FROM Students S
INNER JOIN Friends f ON s.ID = f.ID
INNER JOIN Packages p ON p.ID = s.ID
INNER JOIN Packages p2 ON p2.ID = f.Friend_ID
WHERE p.Salary < p2.Salary
ORDER BY p2.Salary;
