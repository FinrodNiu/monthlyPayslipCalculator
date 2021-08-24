
# Introducion #

This is a console app to calculate monthly pay slip depends on annual income and tax rule.

# Getting Started #

1. Run `npm install -g yarn` in terminal to install yarn.

2. Run `yarn install` in terminal to build this app.

3. Run `yarn start` in terminal to run the app in the console.

4. Run `yarn test` in terminal to run the test.

# Design Decision #

1. Follow SOLID principle, try to make code readable, maintainable and reusable.

2. Create multiple functions, each function has a single responsibility.

3. Inject the independency of taxRateTable to the function calculateEmployeeMonthlyPayslip, so that if the tax rate updated, only taxRateTable need to be changed. More maintainable and scalable.

4. CamelCase naming convention, comments and documentations to make code more readable.

5. Use yarn instead of npm because yarn is faster. 
