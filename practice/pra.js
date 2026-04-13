function calculate() {

    let n = document.getElementById("subjects").value;

    let total = 0;

    for (let i = 0; i < n; i++) {
        let marks = Number(prompt("Enter marks for subject " + (i + 1)));
        total = total + marks;
    }

    let average = total / n;

    let grade;

    if (average >= 80) {
        grade = "A";
    }
    else if (average >= 60) {
        grade = "B";
    }
    else {
        grade = "C";
    }

    document.getElementById("result").innerHTML =
        "Total Marks: " + total + "<br>" +
        "Average: " + average + "<br>" +
        "Grade: " + grade;
}