/*
    https://www.hackerrank.com/challenges/the-company/problem
*/
SELECT c.company_code, c.founder, COUNT(DISTINCT e.lead_manager_code), COUNT(DISTINCT e.senior_manager_code), COUNT(DISTINCT e.manager_code), COUNT(DISTINCT e.employee_code)
FROM Company c
INNER JOIN  Employee e ON e.company_code = c.company_code
GROUP BY c.company_code, c.founder
ORDER BY c.company_code ASC;

/*
GROUP BY Clause:
    c.company_code, c.founder: Groups the results by company code and founder's name. This means the query will return separate rows for each unique combination of company code and founder.
*/