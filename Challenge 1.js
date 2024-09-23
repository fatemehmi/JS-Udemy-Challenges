/*Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

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
console.log(`BMI of Mark is ${BMIMark1} and BMI of John is ${BMIJohn1}`);

const MarkMass2 = 95,
	MarkHeight2 = 1.88;
const JohnMass2 = 85,
	JohnHeight2 = 1.76;
const BMIMark2 = BMI(MarkMass2, MarkHeight2);
const BMIJohn2 = BMI(JohnMass2, JohnHeight2);

const MarkHeightBMI1 = BMIMark1 > BMIJohn1;
const MarkHeightBMI2 = BMIMark2 > BMIJohn2;

console.log(
	`In BMI 1 the result is ${BMIMark1 > BMIJohn1} and in BMI 2 the result is ${
		BMIMark2 > BMIJohn2
	}`
);
