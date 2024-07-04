SELECT CITY FROM STATION WHERE SUBSTR(CITY, 1, 1) IN ('a', 'e', 'i', 'o', 'u');
/*
    SUBSTR:
    - param 1: string
    - param 2: starting from index
    - param 3: length
*/

SELECT CITY FROM STATION WHERE CITY REGEXP('^[aeiou]');
/*
    city REGEXP '^[aeiou]': This part uses the Regular Expression (REGEXP) operator to match a pattern in the city column.
        ^[aeiou]: This is the regular expression pattern.
            ^: Matches the beginning of the string.
            [aeiou]: Matches any single character from the set a, e, i, o, or u (vowels).
*/