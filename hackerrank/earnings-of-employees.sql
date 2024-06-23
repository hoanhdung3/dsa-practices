SELECT (salary * months) AS earnings, COUNT(*) FROM Employee GROUP BY 1 ORDER BY earnings DESC LIMIT 1;

/*
    GROUP BY 1: group by first column from SELECT
*/