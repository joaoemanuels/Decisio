import questions from "../data/questions";
import candidates from "../data/candidates.json";

import { evaluateScores } from "./evaluator";
import { calculateScores } from "./scorer";

export function decisionEngine(answers) {
	const scores = calculateScores(answers, questions);

	const ranking = evaluateScores(scores);

	const enriched = ranking
		.map(([id, score]) => {
			const candidate = candidates.find((c) => c.id === id);

			if (!candidate) return null;

			return {
				...candidate,
				score,
			};
		})
		.filter(Boolean);

	if (!enriched.length) {
		return {
			primary: null,
			recommendations: [],
			meta: {
				totalAnswers: 0,
				generatedAt: new Date().toISOString(),
			},
		};
	}

	return {
		primary: enriched[0],

		recommendations: enriched.slice(0, 3),

		meta: {
			totalAnswers: Object.keys(answers).length,
			generatedAt: new Date().toISOString(),
		},
	};
}
