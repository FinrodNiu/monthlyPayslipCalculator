const {calculateEmployeeMonthlyPayslip, validateInput, getInfo} = require('./employeeMonthlyPayslip');

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Please enter: GenerateMonthlyPayslip "full name" annual income":', (input) => {
	try {
		validateInput(input);
		const [service, name, annualIncome] = getInfo(input);
		switch(service) {
			case 'GenerateMonthlyPayslip':
				const employeeMonthlyPayslip = calculateEmployeeMonthlyPayslip(Number.parseInt(annualIncome));
				console.log(`Monthly Payslip for: "${name}"\n`+
						`Gross Monthly Income: \$${employeeMonthlyPayslip.grossMonthlyIncome}\n`+
						`Monthly Income Tax: \$${employeeMonthlyPayslip.monthlyIncomeTax}\n`+
						`Net Monthly Income: \$${employeeMonthlyPayslip.netMonthlyIncome}`);
				break;
			default:
				console.error('Service not find!');
		};
	} catch (e) {
		console.error(e);
	}

	rl.close();
});