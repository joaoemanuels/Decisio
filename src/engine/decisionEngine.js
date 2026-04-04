import rules from "./rules";

export function decisionEngine(answers) {
	let score = {
		react: 0,
		next: 0,
		vue: 0,
		vite: 0,
	};

	for (const questionId in answers) {
		const answerValue = answers[questionId];

		const ruleSet = rules[questionId]?.[answerValue];

		if (!ruleSet) continue;

		for (const tech in ruleSet) {
			score[tech] += ruleSet[tech];
		}
	}

	const ranking = Object.entries(score).sort((a, b) => b[1] - a[1]);

	return {
		recommendation: ranking[0][0],
		score,
		ranking,
	};
}
