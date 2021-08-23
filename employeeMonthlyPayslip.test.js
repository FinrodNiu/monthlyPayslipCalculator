const {calculateEmployeeMonthlyPayslip, validateInput, getInfo} = require('./employeeMonthlyPayslip');

test('invalid input should throw an error', () => {
    const invalidInputs = ['abc', 'abc "123" 456'];
    invalidInputs.map((invalidInput) => expect(() => validateInput(invalidInput)).toThrow('invalid input!'));
});

test('given valid input, getInfo should return the service, name and annual income', () => {
    const validInput = 'GenerateMonthlyPayslip "Mary Song" 60000';
    expect(getInfo(validInput)).toContain('GenerateMonthlyPayslip');
    expect(getInfo(validInput)).toContain('Mary Song');
    expect(getInfo(validInput)).toContain('60000');
});

test('given annual income should return the right result', () => {
    const result = calculateEmployeeMonthlyPayslip(60000);
    expect(result.grossMonthlyIncome).toBe(5000);
    expect(result.monthlyIncomeTax).toBe(500);
    expect(result.netMonthlyIncome).toBe(4500);
});