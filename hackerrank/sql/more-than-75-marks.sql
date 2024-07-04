SELECT NAME FROM STUDENTS WHERE (MARKS>75) ORDER BY RIGHT(NAME, 3 ), ID ASC;

/*
    RIGHT(NAME, 3 ): This part sorts the names based on the last three characters of the NAME column using the RIGHT function. The RIGHT function extracts a specified number of characters from the right end of the string in the NAME column (3 in this case).
    , ID ASC: This sorts the results by the ID column in ascending order (lowest ID first). This is a secondary sort applied within groups created by the first sort based on the last three characters of the name.
*/