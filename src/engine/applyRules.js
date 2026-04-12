import rules from "./rules";

const FEATURE_CAP = 5;
const TECH_CAP = 20;

export function applyRules(featureScores) {
	const techScores = {};

	for (const [feature, value] of Object.entries(featureScores)) {
		const rule = rules[feature];
		if (!rule) continue;

		const normalizedValue = Math.min(value, FEATURE_CAP);

		for (const tech in rule) {
			const impact = rule[tech] * normalizedValue;

			techScores[tech] = (techScores[tech] || 0) + impact;

			if (techScores[tech] > TECH_CAP) {
				techScores[tech] = TECH_CAP;
			}
		}
	}

	return techScores;
}
