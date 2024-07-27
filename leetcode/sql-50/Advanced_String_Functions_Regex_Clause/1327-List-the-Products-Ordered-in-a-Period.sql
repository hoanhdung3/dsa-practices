# Write your MySQL query statement below
SELECT p.product_name, SUM(o.unit) AS unit FROM Orders o JOIN Products p ON o.product_id=p.product_id WHERE order_date >= '2020-02-01' AND order_date <= '2020-02-29' GROUP BY p.product_name HAVING unit >= 100;