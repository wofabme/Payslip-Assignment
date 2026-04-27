let name = prompt("Enter Your Name:");
let role = prompt("Role: manager, c-level, sales, staff");
let baseSalary = parseFloat(prompt("Enter Base Salary:"));
let hoursWorked = parseFloat(prompt("Enter Hours Worked:"));

let sales = 0;
let saleValue = 0;

if (role === "sales") {
  sales = parseInt(prompt("Enter Number of Sales:"));
  saleValue = parseFloat(prompt("Enter Value per Sale:"));
}

function calculateTax(grossSalary) {
  let tax = 0;
  let remaining = grossSalary;

  if (remaining <= 5000) return 0;
  remaining -= 5000;

  if (remaining <= 1000) return remaining * 0.05;
  tax += 1000 * 0.05;
  remaining -= 1000;

  if (remaining <= 1500) return tax + remaining * 0.07;
  tax += 1500 * 0.07;
  remaining -= 1500;

  if (remaining <= 3000) return tax + remaining * 0.10;
  tax += 3000 * 0.10;
  remaining -= 3000;

  tax += remaining * 0.12;
  return tax;
}

function processSalary() {
  let extraHours = hoursWorked - 45;

  if (extraHours < 0) {
    extraHours = 0;
  }

  let overtime = extraHours * (baseSalary * 0.02);

  let bonus = 0;

  if (role === "manager") {
    bonus = (baseSalary + overtime) * 0.05;
  }

  if (role === "c-level") {
    bonus = (baseSalary + overtime) * 0.08;
  }

  let commission = 0;

  if (role === "sales") {
    commission = sales * saleValue * 0.04;
  }

  let gross = baseSalary + overtime + bonus + commission;
  let pension = gross * 0.12;
  let tax = calculateTax(gross);
  let net = gross - pension - tax;

  let payslip =
    "EMPLOYEE PAY SLIP\n" +
    name + " - " + role.toUpperCase() + "\n" +
    "Total Earnings GHS " + gross.toFixed(2) + "\n" +
    "Pension GHS " + pension.toFixed(2) + "\n" +
    "Tax GHS " + tax.toFixed(2) + "\n" +
    "Net Salary GHS " + net.toFixed(2);

  console.log(payslip);
}

processSalary();
