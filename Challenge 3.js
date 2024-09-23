/*There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

let dolpoint1, dolpoint2, dolpoint3;
let koapoint1, koapoint2, koapoint3;

function normal(averageDol, averageKoa) {
	if (averageDol > averageKoa) {
		console.log("The winner is Dolphins");
	} else if (averageDol < averageKoa) {
		console.log("The winner is Koalas");
	} else {
		console.log("There is no winner!");
	}
}

function Bonus1(averageDol, averageKoa) {
	if (averageDol > 100 && averageDol > averageKoa) {
		console.log("The winner is Dolphins");
	} else if (averageKoa > 100 && averageDol < averageKoa) {
		console.log("The winner is Koalas");
	} else {
		console.log("There is no winner!");
	}
}

function Bonus2(averageDol, averageKoa) {
	if (averageDol > averageKoa) {
		console.log("The winner is Dolphins");
	} else if (averageDol === averageKoa > 100) {
		console.log("There is no winner!");
	} else {
		console.log("The winner is Koalas");
	}
}

(dolpoint1 = 96),
	(dolpoint2 = 108),
	(dolpoint3 = 89),
	(koapoint1 = 88),
	(koapoint2 = 91),
	(koapoint3 = 110);
let averageDol = (dolpoint1 + dolpoint2 + dolpoint3) / 3;
let averageKoa = (koapoint1 + koapoint2 + koapoint3) / 3;
normal(averageDol, averageKoa);

(dolpoint1 = 97),
	(dolpoint2 = 112),
	(dolpoint3 = 101),
	(koapoint1 = 109),
	(koapoint2 = 95),
	(koapoint3 = 123);
averageDol = (dolpoint1 + dolpoint2 + dolpoint3) / 3;
averageKoa = (koapoint1 + koapoint2 + koapoint3) / 3;
Bonus1(averageDol, averageKoa);

(dolpoint1 = 97),
	(dolpoint2 = 112),
	(dolpoint3 = 101),
	(koapoint1 = 109),
	(koapoint2 = 95),
	(koapoint3 = 106);
averageDol = (dolpoint1 + dolpoint2 + dolpoint3) / 3;
averageKoa = (koapoint1 + koapoint2 + koapoint3) / 3;
Bonus2(averageDol, averageKoa);
