/*Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300*/

const bill1 = 275;
const bill2 = 40;
const bill3 = 430;
let tip;

console.log(
	`The bill was ${bill1}, the tip was ${
		50 <= bill1 && bill1 <= 300
			? (tip = (15 * bill1) / 100)
			: (tip = (20 * bill1) / 100)
	}, and the total value is ${bill1 + tip} `
);
console.log(
	`The bill was ${bill2}, the tip was ${
		50 <= bill2 && bill2 <= 300
			? (tip = (15 * bill2) / 100)
			: (tip = (20 * bill2) / 100)
	}, and the total value is ${bill2 + tip} `
);
console.log(
	`The bill was ${bill3}, the tip was ${
		50 <= bill3 && bill3 <= 300
			? (tip = (15 * bill3) / 100)
			: (tip = (20 * bill3) / 100)
	}, and the total value is ${bill3 + tip} `
);
