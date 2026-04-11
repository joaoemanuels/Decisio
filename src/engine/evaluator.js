export function evaluateScores(techScores) {
	const entries = Object.entries(techScores);

	if (!entries.length) return [];

	const maxRaw = Math.max(...entries.map(([, v]) => v)) || 1;

	const adjusted = entries.map(([tech, score]) => {
		const ratio = score / maxRaw;

		const decayFactor = ratio > 0.9 ? 0.85 : ratio > 0.75 ? 0.9 : 1;

		return [tech, score * decayFactor];
	});

	const newMax = Math.max(...adjusted.map(([, v]) => v)) || 1;

	return adjusted
		.map(([tech, score]) => [tech, Math.round((score / newMax) * 100)])
		.sort((a, b) => b[1] - a[1]);
}
