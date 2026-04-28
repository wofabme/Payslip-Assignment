
// Playing aroung with User inputs, kindly see "Script.js" 
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(function(resolve) {
    rl.question(question, function(answer) {
      resolve(answer);
    });
  });
}

function calculateTax(grossSalary) {
  let tax = 0;
  let remaining = grossSalary;

  if (remaining <= 5000) return 0;
  remaining = remaining - 5000;

  if (remaining <= 1000) return remaining * 0.05;
  tax = tax + (1000 * 0.05);
  remaining = remaining - 1000;

  if (remaining <= 1500) return tax + (remaining * 0.07);
  tax = tax + (1500 * 0.07);
  remaining = remaining - 1500;

  if (remaining <= 3000) return tax + (remaining * 0.10);
  tax = tax + (3000 * 0.10);
  remaining = remaining - 3000;

  tax = tax + (remaining * 0.12);

  return tax;
}

function processSalary(name, jobTitle, role, baseSalary, hoursWorked, sales, saleValue, month, year) {
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
    "\nEMPLOYEE PAY SLIP " + month + " " + year + "\n" +
    name + " - " + jobTitle + "\n" +
    "Base Salary GHS " + baseSalary.toFixed(2) + "\n" +
    "Overtime GHS " + overtime.toFixed(2) + "\n" +
    "Bonus GHS " + bonus.toFixed(2) + "\n" +
    "Commission GHS " + commission.toFixed(2) + "\n" +
    "Total Earnings GHS " + gross.toFixed(2) + "\n" +
    "Pension GHS " + pension.toFixed(2) + "\n" +
    "Tax GHS " + tax.toFixed(2) + "\n" +
    "Net Salary GHS " + net.toFixed(2);

  return payslip;
}

async function start() {
  let name = await ask("Enter employee name: ");
  let jobTitle = await ask("Enter job title: ");
  let role = await ask("Enter role (staff, manager, c-level, sales): ");
  let baseSalary = Number(await ask("Enter base salary: "));
  let hoursWorked = Number(await ask("Enter hours worked: "));
  let month = await ask("Enter month: ");
  let year = await ask("Enter year: ");

  let sales = 0;
  let saleValue = 0;

  if (role === "sales") {
    sales = Number(await ask("Enter number of sales: "));
    saleValue = Number(await ask("Enter value per sale: "));
  }

  let payslip = processSalary(
    name,
    jobTitle,
    role,
    baseSalary,
    hoursWorked,
    sales,
    saleValue,
    month,
    year
  );

  console.log(payslip);

  rl.close();
}

start();