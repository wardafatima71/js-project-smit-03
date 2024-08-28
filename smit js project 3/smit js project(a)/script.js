// 1. Arithmetic operation and display result
let number = 10; // Change this value to test with different numbers
let arithmeticResult = ((number + 5) * 10) / 2;
document.getElementById('arithmeticResult').innerHTML = `The result of the arithmetic operation is: ${arithmeticResult}`;

// 2. Variable operation explanation
var a = 2, b = 1;
var result = --a - --b + ++b + b--;

let explanation = `
    <b>Step-by-step explanation:</b><br>
    Initial values: a = 2, b = 1<br>
    --a; // a becomes 1<br>
    --a - --b; // a = 1, b = 0, result = 1 - 0 = 1<br>
    --a - --b + ++b; // b becomes 1, result = 1 + 1 = 2<br>
    --a - --b + ++b + b--; // result = 2 + 1 = 3, then b becomes 0<br>
    Final result: ${result}
`;
document.getElementById('variableResult').innerHTML = explanation;

// 3. Greet the user
function greetUser() {
    let userName = document.getElementById('userName').value;
    if (userName) {
        document.getElementById('greeting').innerHTML = `Hello, ${userName}! Welcome to our website.`;
    } else {
        document.getElementById('greeting').innerHTML = `Hello, Guest! Welcome to my page.`;
    }
}

// 4. Generate multiplication table
function generateTable() {
    let number = document.getElementById('tableNumber').value || 5;
    let tableContent = `<h3>Multiplication Table of ${number}</h3>`;
    for (let i = 1; i <= 10; i++) {
        tableContent += `${number} x ${i} = ${number * i}<br>`;
    }
    document.getElementById('multiplicationTable').innerHTML = tableContent;
}

// 5. Calculate marks and percentage
function calculateMarks() {
    let subject1 = document.getElementById('subject1').value;
    let subject2 = document.getElementById('subject2').value;
    let subject3 = document.getElementById('subject3').value;

    let marks1 = parseInt(document.getElementById('marks1').value) || 0;
    let marks2 = parseInt(document.getElementById('marks2').value) || 0;
    let marks3 = parseInt(document.getElementById('marks3').value) || 0;

    let totalMarks = 300;
    let obtainedMarks = marks1 + marks2 + marks3;
    let percentage = (obtainedMarks / totalMarks) * 100;

    let resultContent = `
        <h3>Marks and Percentage:</h3>
        <table border="1">
            <tr>
                <th>Subject</th>
                <th>Marks Obtained</th>
                <th>Total Marks</th>
            </tr>
            <tr>
                <td>${subject1}</td>
                <td>${marks1}</td>
                <td>100</td>
            </tr>
            <tr>
                <td>${subject2}</td>
                <td>${marks2}</td>
                <td>100</td>
            </tr>
            <tr>
                <td>${subject3}</td>
                <td>${marks3}</td>
                <td>100</td>
            </tr>
        </table>
        <p>Total Marks: ${totalMarks}</p>
        <p>Obtained Marks: ${obtainedMarks}</p>
        <p>Percentage: ${percentage.toFixed(2)}%</p>
    `;

    document.getElementById('marksResult').innerHTML = resultContent;
}
