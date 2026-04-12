export function exportCSV(data) {
	const lines = [];

	lines.push("=== SUMMARY ===");
	lines.push("Recommended,Match Score,Date");

	const primary = data.result?.primary;
	const maxScore = data.analysis?.recommendations?.[0]?.score || 1;
	const matchScore = primary ? Math.round((primary.score / maxScore) * 100) : 0;

	lines.push(`${primary?.name},${matchScore},${data.meta?.date}`);

	lines.push("");

	lines.push("=== ANSWERS ===");

	const answerKeys = Object.keys(data.input?.answers || {});
	const answerValues = Object.values(data.input?.answers || {});

	lines.push(answerKeys.join(","));
	lines.push(answerValues.join(","));

	lines.push("");

	lines.push("=== RECOMMENDATIONS ===");
	lines.push("Name,Score,Category,Type");

	(data.analysis?.recommendations || []).forEach((rec) => {
		lines.push(`${rec.name},${rec.score},${rec.category},${rec.type}`);
	});

	const csv = lines.join("\n");

	const blob = new Blob([csv], { type: "text/csv" });
	const url = URL.createObjectURL(blob);

	const a = document.createElement("a");
	a.href = url;
	a.download = `decisio-analysis-${Date.now()}.csv`;
	a.click();

	URL.revokeObjectURL(url);
}
