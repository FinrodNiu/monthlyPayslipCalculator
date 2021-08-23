const taxRateTable = [
	{base: 0, threshold: 20000, accumulate: 0, rate: 0},
	{base: 20000, threshold: 40000, accumulate: 0, rate: 0.1},
	{base: 40000, threshold: 80000, accumulate: 2000, rate: 0.2},
	{base: 80000, threshold: 180000, accumulate: 10000, rate: 0.3},
	{base: 18000, threshold: Number.POSITIVE_INFINITY, accumulate: 40000, rate: 0.4},
];

//regular express for input validation. eg: Generate "Mary Song" 60000
const inputRegexp = /[\w]+\s*"[a-zA-Z]+(\s[a-zA-Z]+)?"\s*[\d]+/;

//regular express to split the valid input by " and the space before or after it.
const splitRegexp = /\s*"\s*/;

/**
 * A function that will calculate the net monthly income
 * @param {number} annualSalary 
 * @param {object} taxRateTable 
 * @returns An object contains grossMonthlyIncome, monthlyIncomeTax, netMonthlyIncome
 */
const calculateEmployeeMonthlyPayslip = (annualSalary, taxRateTable) => {
	const { base, accumulate, rate } = taxRateTable.find((row) => annualSalary <= row.threshold);

	const annualIncomeTax = (annualSalary - base) * rate + accumulate;

	const monthlyIncomeTax = annualIncomeTax / 12;

	const grossMonthlyIncome = annualSalary / 12;

	const netMonthlyIncome = grossMonthlyIncome - monthlyIncomeTax;

	return {grossMonthlyIncome, monthlyIncomeTax, netMonthlyIncome};
};

/**
 * A function to validate input's formate, throw error if the input has wrong format.
 * @param {string} input 
 * @param {RegExp} inputRegexp 
 */
const validateInput = (input, inputRegexp) => {
	if (!input.match(inputRegexp)) {
		throw 'invalid input!';
	};
}

/**
 * A function to get the information from valid input.
 * @param {string} validInput 
 * @param {RegExp} splitRegexp 
 * @returns A array contains the parameter from the valid input
 */
const getInfo = (validInput, splitRegexp) => {
	return validInput.split(splitRegexp);
};

module.exports = {taxRateTable, inputRegexp, splitRegexp, calculateEmployeeMonthlyPayslip, validateInput, getInfo};