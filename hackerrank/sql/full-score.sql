/*
    https://www.hackerrank.com/challenges/full-score/problem
*/
SELECT h.hacker_id, h.name
FROM Submissions s
INNER JOIN Challenges c ON c.challenge_id = s.challenge_id
INNER JOIN Difficulty d ON d.difficulty_level = c.difficulty_level
INNER JOIN Hackers h ON h.hacker_id = s.hacker_id
WHERE s.score = d.score AND d.difficulty_level = c.difficulty_level
GROUP BY h.hacker_id, h.name
HAVING COUNT(s.hacker_id) > 1
ORDER BY COUNT(s.hacker_id) DESC, s.hacker_id ASC;