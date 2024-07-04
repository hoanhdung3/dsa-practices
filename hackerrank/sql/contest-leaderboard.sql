SELECT h.hacker_id, h.name, SUM(score) AS s_score
FROM Hackers h 
INNER JOIN 
    (SELECT hacker_id, MAX(score) AS score FROM Submissions GROUP BY challenge_id, hacker_id) max_score
ON h.hacker_id = max_score.hacker_id
GROUP BY h.hacker_id, h.name
HAVING s_score > 0
ORDER BY s_score DESC, h.hacker_id ASC;