# Write your MySQL query statement below
SELECT score, DENSE_RANK() OVER (ORDER BY score DESC) AS 'rank' FROM Scores;

-- DENSE_RANK:
-- Assigns the same rank to tied values but does not leave gaps in the ranking.
-- For example, if two scores are tied at rank 1, the next score will receive rank 2.