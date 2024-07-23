# Write your MySQL query statement below
SELECT * FROM Patients WHERE conditions LIKE 'DIAB1%' OR conditions LIKE '% DIAB1%';

# Write your MySQL query statement below
SELECT * FROM Patients WHERE conditions REGEXP '\\bDIAB1';
/*
    \b: matches either a non-word character (in this problem is a space) or the position before the first character is the string.
    The first \ in \\b used to escape a backslash with another backslash.
*/