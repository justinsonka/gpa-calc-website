function below3o() {
    const numCourses = parseInt(document.getElementById('numCourses').value);
    const numA = parseInt(document.getElementById('numA').value);
    const numB = parseInt(document.getElementById('numB').value);
    const numC = parseInt(document.getElementById('numC').value);
    const numD = parseInt(document.getElementById('numD').value);
    const numF = parseInt(document.getElementById('numF').value);


    const totalGradePoints = (numA * 4.0) + (numB * 3.0) + (numC * 2.0) + (numD * 1.0) + (numF * 0);
    const gpa = totalGradePoints / numCourses;


    document.getElementById('result').textContent = `Your GPA is: ${gpa.toFixed(2)}`;
}





