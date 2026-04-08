export function calculateScores(answers, questions) {
	return Object.entries(answers).reduce((acc, [questionId, optionId]) => {

    const question = questions.find((q) => q.id === questionId);
		if (!question) return acc;


    const option = question.options.find((opt) => opt.id === optionId);
		if (!option) return acc;


    for (const key in option.scores) {
			acc[key] = (acc[key] || 0) + option.scores[key];
		}

		return acc;
	}, {});
}
