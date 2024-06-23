SELECT FLOOR(AVG(POPULATION)) FROM CITY;

/*
    Use of Round is improper here since it rounds Up in cases 
    where decimal values are >= 0.5. 
    Floor should be used instead since we're asked to round Down. 
*/