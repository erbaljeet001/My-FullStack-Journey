import { students } from "./student.js";
import marks from "./marks.js";
import { grade } from "./grade.js";

let total = marks(90, 85, 88, 95);



console.log("Name :", students[0].name);
console.log("Roll No :", students[0].roll_no);
console.log("Age :", students[0].age);
console.log("Branch:", students[0].branch);
console.log("Course:", students[0].course);

console.log("CN  : 90");
console.log("SE  : 85");
console.log("IBM : 88");
console.log("ML : 95");

console.log("Total :", total);
console.log("Percentage:", total / 4);
console.log("Grade :", grade(total));