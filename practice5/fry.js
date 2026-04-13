let employees = [];

// 1. Add Employee
function addEmployee() {

    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let salary = Number(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;

    employees.push({ name, id, salary, dept });

    // Clear inputs
    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";
}


// 2. Display All Employees
function displayAll() {

    let result = "";

    for (let e of employees) {
        result += "Name: " + e.name +
                  " ID: " + e.id +
                  "  Salary: " + e.salary +
                  "  Dept: " + e.dept + "<br>";
    }

    document.getElementById("output").innerHTML = result;
}


// 3. Salary > 50000
function highSalary() {

    let result = "";

    for (let e of employees) {
        if (e.salary > 50000) {
            result += "Name: " + e.name +
                      " | Salary: " + e.salary + "<br>";
        }
    }

    document.getElementById("output").innerHTML = result;
}


// 4. Total Salary
function totalSalary() {

    let sum = 0;

    for (let e of employees) {
        sum += e.salary;
    }

    document.getElementById("output").innerHTML =
        "Total Salary: " + sum;
}


// 5. Average Salary
function averageSalary() {

    let sum = 0;

    for (let e of employees) {
        sum += e.salary;
    }

    let avg = employees.length > 0 ? sum / employees.length : 0;

    document.getElementById("output").innerHTML =
        "Average Salary: " + avg;
}


// 6. Count by Department
function countDept() {

    let counts = {};

    for (let e of employees) {
        if (counts[e.dept]) {
            counts[e.dept]++;
        } else {
            counts[e.dept] = 1;
        }
    }

    let result = "";

    for (let dept in counts) {
        result += dept + " : " + counts[dept] + "<br>";
    }

    document.getElementById("output").innerHTML = result;
}