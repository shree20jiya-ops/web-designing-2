let employees = [];

function addEmployee() {

    let name = document.getElementById("name").value;
    let id = document.getElementById("empid").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;

    if (name === "" || id === "" || isNaN(salary) || dept === "") {
    alert("All fields should be filled");
    return;
}

    let emp = {
        name: name,
        id: id,
        salary: parseFloat(salary),
        dept: dept
    };

    employees.push(emp);

    alert("Employee added successfully");

    document.getElementById("name").value = "";
    document.getElementById("empid").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";
}

function displayEmployee() {

    let output = "";

    if (employees.length === 0) {
        document.getElementById("output").innerHTML = "<h3>No employees added</h3>";
        return;
    }

    employees.forEach(emp => {
        output += `Name: ${emp.name} | ID: ${emp.id} | Salary: ${emp.salary} | Dept: ${emp.dept} <br>`;
    });

    document.getElementById("output").innerHTML = output;
}

function filterSalary() {

    let output = "";
    let filtered = employees.filter(emp => emp.salary > 50000);

    if (filtered.length === 0) {
        document.getElementById("output").innerHTML = "<h3>No employees with salary greater than 50000</h3>";
        return;
    }

    filtered.forEach(emp => {
        output += `Name: ${emp.name} | Salary: ${emp.salary}<br>`;
    });

    document.getElementById("output").innerHTML = output;
}

function totalSalary() {

    let total = 0;

    employees.forEach(emp => {
        total += emp.salary;
    });

    document.getElementById("output").innerHTML = "<h3>Total Salary = " + total + "</h3>";
}

function averageSalary() {

    if (employees.length === 0) {
        document.getElementById("output").innerHTML = "<h3>No employees added</h3>";
        return;
    }

    let total = 0;

    employees.forEach(emp => {
        total += emp.salary;
    });

    let avg = total / employees.length;

    document.getElementById("output").innerHTML = "<h3>Average Salary = ₹" + avg.toFixed(2) + "</h3>";
}

function countDepartment() {

    let deptName = prompt("Enter department name");

    if (deptName === "" || deptName === null) {
        alert("Please enter a department name");
        return;
    }

    let count = 0;

    employees.forEach(emp => {
        if (emp.dept.toLowerCase() === deptName.toLowerCase()) {
            count++;
        }
    });
    document.getElementById("output").innerHTML = "<h3>No. of employees in " + deptName + " department = " + count + "</h3>";

}