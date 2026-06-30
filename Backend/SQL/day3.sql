create database mydb1;
create table  tb1_enquiry
(
  id int auto_increment primary key,
  Name varchar(200),
  mobile bigint,
  email varchar(200),
  subject varchar(255),
  message text
);
INSERT INTO tb1_enquiry(Name, mobile, email, subject, message)
VALUES ('Rahul Sharma', 9876543210, 'rahul@gmail.com', 'Course Enquiry', 'I want details about the Java Full Stack course.');

INSERT INTO tb1_enquiry(Name, mobile, email, subject, message)
VALUES ('Priya Singh', 9123456789, 'priya@gmail.com', 'Fee Structure', 'Please send me the fee structure for Python training.');

INSERT INTO tb1_enquiry(Name, mobile, email, subject, message)
VALUES ('Amit Kumar', 9988776655, 'amit@gmail.com', 'Admission', 'How can I take admission in your institute?');

INSERT INTO tb1_enquiry(Name, mobile, email, subject, message)
VALUES ('Neha Verma', 9012345678, 'neha@gmail.com', 'Placement', 'Do you provide placement assistance?');

INSERT INTO tb1_enquiry(Name, mobile, email, subject, message)
VALUES ('Rohit Yadav', 9871234560, 'rohit@gmail.com', 'Web Development', 'I am interested in the MERN Stack course.');

INSERT INTO tb1_enquiry(Name, mobile, email, subject, message)
VALUES ('Anjali Gupta', 9765432109, 'anjali@gmail.com', 'Internship', 'Do you provide internships after training?');

INSERT INTO tb1_enquiry(Name, mobile, email, subject, message)
VALUES ('Vikas Mishra', 9654321098, 'vikas@gmail.com', 'Timing', 'What are the class timings for evening batches?');

INSERT INTO tb1_enquiry(Name, mobile, email, subject, message)
VALUES ('Sneha Patel', 9543210987, 'sneha@gmail.com', 'Certification', 'Will I receive a certificate after completing the course?');

INSERT INTO tb1_enquiry(Name, mobile, email, subject, message)
VALUES ('Karan Mehta', 9432109876, 'karan@gmail.com', 'React Course', 'When does the next React batch start?');

INSERT INTO tb1_enquiry(Name, mobile, email, subject, message)
VALUES ('Riya Das', 9321098765, 'riya@gmail.com', 'C Programming', 'Is there any beginner C programming course?');

INSERT INTO tb1_enquiry(Name, mobile, email, subject, message)
VALUES ('Suresh Patel', 9212345678, 'suresh@gmail.com', 'Discount', 'Are there any discounts for students?');

INSERT INTO tb1_enquiry(Name, mobile, email, subject, message)
VALUES ('Pooja Kumari', 9109876543, 'pooja@gmail.com', 'Online Classes', 'Do you offer online live classes?');

INSERT INTO tb1_enquiry(Name, mobile, email, subject, message)
VALUES ('Deepak Singh', 9098765432, 'deepak@gmail.com', 'Project Training', 'I need live project training.');

INSERT INTO tb1_enquiry(Name, mobile, email, subject, message)
VALUES ('Kavita Yadav', 9988123456, 'kavita@gmail.com', 'Android Course', 'Please share the Android course syllabus.');

INSERT INTO tb1_enquiry(Name, mobile, email, subject, message)
VALUES ('Arjun Verma', 9876501234, 'arjun@gmail.com', 'Data Science', 'Is Data Science training available?');

INSERT INTO tb1_enquiry(Name, mobile, email, subject, message)
VALUES ('Meena Sharma', 9765012345, 'meena@gmail.com', 'Demo Class', 'Can I attend a free demo class?');

INSERT INTO tb1_enquiry(Name, mobile, email, subject, message)
VALUES ('Nitin Gupta', 9650123456, 'nitin@gmail.com', 'Python', 'I want to learn Python from scratch.');

INSERT INTO tb1_enquiry(Name, mobile, email, subject, message)
VALUES ('Asha Mishra', 9541234567, 'asha@gmail.com', 'UI/UX', 'Do you have a UI/UX designing course?');

INSERT INTO tb1_enquiry(Name, mobile, email, subject, message)
VALUES ('Manoj Tiwari', 9432345678, 'manoj@gmail.com', 'SQL', 'Please provide SQL and DBMS course details.');

INSERT INTO tb1_enquiry(Name, mobile, email, subject, message)
VALUES ('Simran Kaur', 9323456789, 'simran@gmail.com', 'Contact', 'Please call me regarding course admission.');


create table tb1_employee
(
   empId int primary key,
   empname varchar(200),
   mobile_No bigint ,
   gender enum('Male','Female','Other'),
   salary int,
   joining_date date
);

INSERT INTO tb1_employee VALUES (101, 'Rahul Sharma', 9876543210, 'Male', 35000, '2023-01-15');

INSERT INTO tb1_employee VALUES (102, 'Priya Singh', 9123456789, 'Female', 42000, '2022-07-20');

INSERT INTO tb1_employee VALUES (103, 'Amit Kumar', 9988776655, 'Male', 30000, '2024-03-10');

INSERT INTO tb1_employee VALUES (104, 'Neha Verma', 9012345678, 'Female', 50000, '2021-11-05');

INSERT INTO tb1_employee VALUES (105, 'Rohit Yadav', 9871234560, 'Male', 28000, '2025-02-18');

INSERT INTO tb1_employee VALUES (106, 'Anjali Gupta', 9765432109, 'Female', 45000, '2023-08-25');

INSERT INTO tb1_employee VALUES (107, 'Vikas Mishra', 9654321098, 'Male', 38000, '2022-12-12');

INSERT INTO tb1_employee VALUES (108, 'Sneha Patel', 9543210987, 'Female', 55000, '2020-06-30');

INSERT INTO tb1_employee VALUES (109, 'Karan Mehta', 9432109876, 'Male', 32000, '2024-05-01');

INSERT INTO tb1_employee VALUES (110, 'Riya Das', 9321098765, 'Female', 47000, '2023-09-14');

INSERT INTO tb1_employee VALUES (111, 'Suresh Patel', 9212345678, 'Male', 39000, '2022-08-11');

INSERT INTO tb1_employee VALUES (112, 'Pooja Kumari', 9109876543, 'Female', 36000, '2024-01-08');

INSERT INTO tb1_employee VALUES (113, 'Deepak Singh', 9098765432, 'Male', 44000, '2021-05-22');

INSERT INTO tb1_employee VALUES (114, 'Kavita Yadav', 9988123456, 'Female', 41000, '2023-06-19');

INSERT INTO tb1_employee VALUES (115, 'Arjun Verma', 9876501234, 'Male', 52000, '2020-09-30');

INSERT INTO tb1_employee VALUES (116, 'Meena Sharma', 9765012345, 'Female', 33000, '2025-03-12');

INSERT INTO tb1_employee VALUES (117, 'Nitin Gupta', 9650123456, 'Male', 48000, '2022-02-14');

INSERT INTO tb1_employee VALUES (118, 'Asha Mishra', 9541234567, 'Female', 37000, '2023-10-05');

INSERT INTO tb1_employee VALUES (119, 'Manoj Tiwari', 9432345678, 'Male', 60000, '2019-12-01');

INSERT INTO tb1_employee VALUES (120, 'Simran Kaur', 9323456789, 'Female', 54000, '2021-07-27');
