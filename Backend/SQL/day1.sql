
use techpile_db;
Create table tbl_student
(
   Name varchar(100) not null,
   Emailid varchar(150) primary key,
   Mobile bigint,
   Fee int check (Fee>0),
   Dob date,
   Gender enum('Male','Female','Other')  default 'Male'
);
Insert into tbl_student values('Baljeet','baljeetydv0001@gmail.com',6206007224, 5000,'2026-05-20','Male');
Insert into tbl_student value('x','abc12@gmail.com',343232133,1000,'2034-04-10',default);
Insert into tbl_student(Name, Emailid) value('Aman','amn123@gmail.com');