// Change the Employee details here
let name = "Bernard Acquah";
let jobTitle = "Chief Compliance Officer";
let role = "manager";   // staff, manager, c-level, sales
let baseSalary = 23000;
let hoursWorked = 55;
let numberOfSales = 0;     // calculated only for sales
let saleValue = 0;         // calculated only for sales
let month = "April";
let year = 2026;


//  Funtion to Cal Tax
function calculateTax(grossSalary) {
  let tax = 0;
  let remaining = grossSalary;
  if (remaining <= 5000) return 0;
  remaining = remaining - 5000;
  if (remaining <= 1000) return remaining * 0.05;
  tax += 1000 * 0.05;
  remaining -= 1000;
  if (remaining <= 1500) return tax + (remaining * 0.07);
  tax += 1500 * 0.07;
  remaining -= 1500;
  if (remaining <= 3000) return tax + (remaining * 0.10);
  tax += 3000 * 0.10;
  remaining -= 3000;
  tax += remaining * 0.12;
  return tax;
}

// Core Function
function processSalary() {
  let extraHours = hoursWorked - 45;
  if (extraHours < 0) extraHours = 0;
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
    commission = numberOfSales * saleValue * 0.04;
  }
  let gross = baseSalary + overtime + bonus + commission;
  let pension = gross * 0.12;
  let tax = calculateTax(gross);
  let net = gross - pension - tax;

  // note toFixed(2) is to place the figure to 2 decimal place
  let payslip =
    "EMPLOYEE PAY SLIP " + month + " " + year + "\n" +
    name + " - " + jobTitle + "\n" +
    "Base Salary GH¢ " + baseSalary.toFixed(2) + "\n" +
    "Overtime GH¢ " + overtime.toFixed(2) + "\n" +
    "Bonus GH¢ " + bonus.toFixed(2) + "\n" +
    "Commission GH¢ " + commission.toFixed(2) + "\n" +
    "Total Earnings GH¢ " + gross.toFixed(2) + "\n" +
    "Pension GH¢ " + pension.toFixed(2) + "\n" +
    "Tax GH¢ " + tax.toFixed(2) + "\n" +
    "Net Salary GH¢ " + net.toFixed(2);

  console.log(payslip);

  return payslip;
}

// Run
processSalary();