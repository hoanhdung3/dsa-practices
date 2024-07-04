SELECT 
    CASE
        WHEN NOT ((A + B > C) AND (A + C > B) AND (B + C) > A) THEN 'Not A Triangle'
        WHEN  (A = B) AND (B = C) THEN 'Equilateral'
        WHEN (A = B) OR (B = C) OR (C = A) THEN 'Isosceles'
        ELSE 'Scalene'
    END
FROM TRIANGLES;

/*
    CASE Statement: This powerful construct allows for conditional logic within the SELECT clause.

        The CASE statement evaluates different conditions and returns a specific value based on the first matching condition.
        END: This keyword marks the end of the CASE statement.
*/