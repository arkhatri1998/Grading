function calculate() {
    let resultGrade = document.getElementById("resultGrade");
    let total = document.getElementById("total");
    let obtained = document.getElementById("obtained");
    var per = (obtained * 100) / total;
    var pretyPer = per.toFixed(2);

    if (total >= obtained) {
        if (per >= 80) {
            document.getElementById("resultGrade").innerHTML = "Your Percentage is " + pretyPer + " and your grade is A+1.";
        } else if (per >= 70) {
            document.getElementById("resultGrade").innerHTML = "Your Percentage is " + pretyPer + " and your grade is A.";
        } else if (per >= 60) {
            document.getElementById("resultGrade").innerHTML = "Your Percentage is " + pretyPer + " and your grade is B.";
        } else if (per >= 50) {
            document.getElementById("resultGrade").innerHTML = "Your Percentage is " + pretyPer + " and your grade is C.";
        } else if (per >= 40) {
            document.getElementById("resultGrade").innerHTML = "Your Percentage is " + pretyPer + " and your grade is D.";
        } else if (per < 40) {
            document.getElementById("resultGrade").innerHTML = "Your Percentage is " + pretyPer + " and you are FAILED.";
        }
    } else {
        alert("Please enter correct numbers.")
    }
}