SELECT DISTINCT CITY FROM STATION WHERE CITY REGEXP('[a,e,i,o,u]$');
/*
    CITY REGEXP '[a,e,i,o,u]$':
        [a,e,i,o,u]: This character class matches any single character from the set a, e, i, o, or u (vowels).
        $: Matches the end of the string.

*/

SELECT DISTINCT CITY FROM STATION WHERE RIGHT(CITY, 1) IN ('a', 'e', 'i', 'o', 'u');