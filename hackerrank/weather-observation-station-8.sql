SELECT DISTINCT CITY FROM STATION WHERE (CITY REGEXP('^[a,e,i,o,u]')) AND (CITY REGEXP('[a,e,i,o,u]$'));

SELECT DISTINCT CITY FROM STATION WHERE CITY REGEXP('^[a,e,i,o,u].*[a,e,i,o,u]$');
/*
    ^: Matches the beginning of the string. This ensures the city name must start with a vowel.
    [a,e,i,o,u]: This character class matches any single character one time from the set a, e, i, o, or u (vowels).
    .: Matches any single character zero or more times. This part essentially allows any combination of characters (letters, spaces, etc.) between the starting and ending vowels.
    $: Matches the end of the string. This ensures the city name must end with a vowel.
*/