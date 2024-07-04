/*
    https://www.hackerrank.com/challenges/challenges/problem
*/
SELECT h.hacker_id, h.name, COUNT(c.challenge_id) as challenge_count
FROM Hackers h INNER JOIN Challenges c ON h.hacker_id = c.hacker_id
GROUP BY (c.hacker_id)
HAVING
    /*  check if challenge_count is equal to the maximum of challenge count*/
    challenge_count = 
        (SELECT MAX(temp1.cnt) 
            FROM (SELECT COUNT(hacker_id) AS cnt
                            FROM Challenges GROUP BY hacker_id
                                ORDER BY hacker_id) temp1)
    /* init a set of count, every same value is not exist in the set. check if challenge_count in the set */
    OR challenge_count IN
        (SELECT temp2.cnt
            FROM (SELECT COUNT(*) AS cnt
                            FROM Challenges GROUP BY hacker_id) temp2
                                GROUP BY temp2.cnt
                                    HAVING COUNT(temp2.cnt) = 1)
ORDER BY challenge_count DESC, c.hacker_id DESC ;