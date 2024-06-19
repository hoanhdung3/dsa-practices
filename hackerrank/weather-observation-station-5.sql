(SELECT CITY, LENGTH(CITY) FROM STATION ORDER BY LENGTH(CITY) ASC, CITY LIMIT 1) UNION (SELECT CITY, LENGTH(CITY) FROM STATION ORDER BY LENGTH(CITY) DESC, CITY LIMIT 1);

/*
    - SELECT CITY, LENGTH(CITY) FROM STATION:
      This part selects two columns from the STATION table: CITY and the result of the LENGTH function applied to CITY.
      The LENGTH function calculates the number of characters in the CITY column.
    
    - ORDER BY LENGTH(CITY) ASC, CITY: 
      This clause sorts the results based on the length of the city name in ascending order (shortest to longest) first. 
      Then, for cities with the same length, it sorts them alphabetically by city name.

    - LIMIT 1: 
      This limits the results to only the top 1 row, 
      which will be the city with the shortest name based on the sorting applied.
*/