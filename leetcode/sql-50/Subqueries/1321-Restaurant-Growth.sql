# Write your MySQL query statement below
SELECT c.visited_on,
 (
    SELECT SUM(amount) FROM Customer WHERE visited_on BETWEEN DATE_SUB(c.visited_on, INTERVAL 6 DAY) AND c.visited_on
 ) AS amount, 
 (
    SELECT ROUND((SUM(amount) / 7), 2) FROM Customer WHERE visited_on BETWEEN DATE_SUB(c.visited_on, INTERVAL 6 DAY) AND c.visited_on
 ) AS average_amount 
 FROM Customer c
 WHERE DATE_SUB(visited_on, INTERVAL 6 DAY) IN (SELECT visited_on FROM Customer) 
 GROUP BY visited_on;

/*
    Can not using the AVG func instead of (SUM(amount) / 7) because there will be a day with multiple record
*/