import rules from "./rules";

export function applyRules(featureScores) {
	const techScores = {};

	for (const [feature, value] of Object.entries(featureScores)) {
		const rule = rules[feature];

		if (!rule) continue;

		for (const tech in rule) {
			techScores[tech] = (techScores[tech] || 0) + rule[tech] * value;
		}
	}

	return techScores;
}
