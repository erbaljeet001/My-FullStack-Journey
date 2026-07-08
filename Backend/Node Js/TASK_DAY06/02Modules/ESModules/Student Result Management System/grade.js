export function grade(total) {

    let percentage = total / 4;

    if (percentage >= 90) {
        return "A+";
    }
    else if (percentage >= 80) {
        return "A";
    }
    else if (percentage >= 70) {
        return "B";
    }
    else if (percentage >= 60) {
        return "C";
    }
    else {
        return "Fail";
    }
}