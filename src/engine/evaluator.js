export function evaluateScores(scores) {
	return Object.entries(scores).sort((a, b) => b[1] - a[1]);
}
