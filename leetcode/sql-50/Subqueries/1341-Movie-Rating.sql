# Write your MySQL query statement below
(SELECT name AS results FROM MovieRating JOIN Users USING(user_id) GROUP BY user_id ORDER BY COUNT(rating) DESC, name LIMIT 1)
UNION ALL
(SELECT title AS results FROM MovieRating JOIN Movies USING(movie_id) WHERE YEAR(created_at)=2020 AND MONTH(created_at)=02 GROUP BY movie_id ORDER BY AVG(rating) DESC, title LIMIT 1);