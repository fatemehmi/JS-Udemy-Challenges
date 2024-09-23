/*Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement*/

function BMI(mass, height) {
	const BMI = mass / height ** 2;
	return BMI;
}

const MarkMass1 = 78,
	MarkHeight1 = 1.69;
const JohnMass1 = 92,
	JohnHeight1 = 1.95;
const BMIMark1 = BMI(MarkMass1, MarkHeight1);
const BMIJohn1 = BMI(JohnMass1, JohnHeight1);

const MarkMass2 = 95,
	MarkHeight2 = 1.88;
const JohnMass2 = 85,
	JohnHeight2 = 1.76;
const BMIMark2 = BMI(MarkMass2, MarkHeight2);
const BMIJohn2 = BMI(JohnMass2, JohnHeight2);

if (BMIMark1 > BMIJohn1) {
	console.log(`In first test Mark has Higher BMI!`);
} else {
	console.log(`In first test John has Higher BMI!`);
}
if (BMIMark2 > BMIJohn2) {
	console.log(`In second test Mark has Higher BMI!`);
} else {
	console.log(`In second test John has Higher BMI!`);
}
