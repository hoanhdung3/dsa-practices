# Write your MySQL query statement below
select 
   distinct s1.id ,s1.visit_date, s1.people 
from 
   Stadium s1,Stadium s2 
where 
   (s1.people>=100 
        and s1.id+1=s2.id 
            and s2.people>=100 
                and exists(select * from Stadium s3 where s1.id+2=s3.id and s3.people>=100)
                )
or
   (s1.people>=100 
        and s1.id-1=s2.id 
            and s2.people>=100 
                and exists(select * from Stadium s3 where s1.id-2=s3.id and s3.people>=100))
or
    s1.people>=100 
       and s1.id+1=s2.id 
           and s2.people>=100 
               and exists(select * from Stadium s3 where s1.id-1=s3.id and s3.people>=100)
order by s1.visit_date;