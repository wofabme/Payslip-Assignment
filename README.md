# Payslip 
Kindly check "Script.js" for the actual assignment.
Scripts.js is just for user input experiments
Thank You

ALGORITHM 
Start

1. Declare employee details:
   name
   job title
   role
   base salary
   hours worked
   number of sales
   sale value
   month
   year

2. Create a function called calculateTax.

3. Inside calculateTax:
   Set tax to 0.
   Set remaining salary to gross salary.

4. If remaining salary is less than or equal to 5000:
   Return 0 tax.

5. Remove the first 5000 from remaining salary.

6. Tax the next 1000 at 5%.

7. Tax the next 1500 at 7%.

8. Tax the next 3000 at 10%.

9. Tax any remaining amount at 12%.

10. Return the total tax.

11. Create a function called processSalary.

12. Inside processSalary:
   Calculate extra hours:
   extra hours = hours worked - 45

13. If extra hours is less than 0:
   Set extra hours to 0.

14. Calculate overtime:
   overtime = extra hours × 2% of base salary

15. Set bonus to 0.

16. If role is manager:
   bonus = 5% of base salary plus overtime

17. If role is c-level:
   bonus = 8% of base salary plus overtime

18. Set commission to 0.

19. If role is sales:
   commission = number of sales × sale value × 4%

20. Calculate gross salary:
   gross salary = base salary + overtime + bonus + commission

21. Calculate pension:
   pension = 12% of gross salary

22. Calculate tax using calculateTax function.

23. Calculate net salary:
   net salary = gross salary - pension - tax

24. Generate payslip with:
   month and year
   employee name
   job title
   base salary
   overtime
   bonus
   commission
   total earnings
   pension
   tax
   net salary

25. Display payslip in the console.

26. Return payslip.

27. Call processSalary.

End
