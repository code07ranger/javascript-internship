//Assignment 3: Conditional Logic Implementation

//Task: Create a script that evaluates a user's numerical test score using if...else statements, determines a letter grade using a switch statement, and uses a ternary operator to print whether they passed or failed.


let score = 85;
let grade;
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}
switch (grade) {
    case "A":
        grade ="A";
        break;
    case "B":
        grade ="B";
        break;
    case "C":
        grade ="C";
        break;
    case "D":
        grade ="D";
        break;
    case "F":
        grade ="F";
        break;
}
let status=score>=60?"Passed":"Failed";
console.log("Score:",score);
console.log("Grade:",grade);
console.log("Status:",status);