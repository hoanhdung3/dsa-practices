# Write your MySQL query statement below
SELECT DISTINCT l1.num AS ConsecutiveNums FROM Logs l1
WHERE l1.num = (
    SELECT l2.num FROM Logs l2 WHERE l1.id = l2.id+1 AND l2.num = l1.num
    AND l2.num = (
        SELECT l3.num FROM Logs l3 WHERE l2.id = l3.id+1 AND l3.num = l2.num
    )
);

# Write your MySQL query statement below
SELECT DISTINCT l1.num AS ConsecutiveNums FROM Logs l1
JOIN Logs l2 ON l2.num = l1.num AND l2.id = l1.id + 1
JOIN Logs l3 ON l3.num = l2.num AND l3.id = l2.id + 1
WHERE l1.num = l2.num AND l1.num = l3.num;