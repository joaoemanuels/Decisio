import questions from "../data/questions";
import candidates from "../data/candidates.json";

import { evaluateScores } from "./evaluator";
import { calculateScores } from "./scorer";
import { applyRules } from "./applyRules";

export function decisionEngine(answers) {
	const featureScores = calculateScores(answers, questions);

	const techScores = applyRules(featureScores);

	const ranking = evaluateScores(techScores);

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
