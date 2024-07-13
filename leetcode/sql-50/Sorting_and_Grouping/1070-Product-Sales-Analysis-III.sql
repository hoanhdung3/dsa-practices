# Write your MySQL query statement below
SELECT s.product_id, s.year AS first_year, s.quantity, s.price FROM Sales s
WHERE (s.product_id, s.year) IN (
    SELECT product_id, MIN(year) FROM Sales WHERE s.product_id=product_id GROUP BY product_id
);