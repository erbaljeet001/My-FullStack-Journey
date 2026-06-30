use db1 ;
Create table tb2 (
   EmployeeID int primary key,
   Name varchar(255) not null,
   Address varchar(255),
   Salary decimal(18,2)
);
Insert into tb2 values(50, 'baljeet','Bihar', '200000');
Insert into tb2 (EmployeeID , Name) values(100,'rahul');

Insert into tb2 values(1,'Tom', 'Hydrabad',20000.00);
Insert into tb2 values(2,'Hannah','Hydrabad',30000.00);
Insert into tb2 values(3,'Harry','Bangolore',25000.00);
Insert into tb2 values(4,'Thomas_the_3rd','Delhi', 57000.40);
Insert into tb2 (EmployeeID, Name) values(5,'Jerry');
Insert into tb2 (EmployeeID, Name,Salary) values(6,'Sturat',15600);
Insert into tb2 (EmployeeID, Name, Address) values(8,'Radha','Mumbai');