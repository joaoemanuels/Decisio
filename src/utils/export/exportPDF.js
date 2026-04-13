import jsPDF from "jspdf";

export function exportPDF(data) {
	const doc = new jsPDF();
	const pageWidth = doc.internal.pageSize.getWidth();
	let y = 20;

	const addLine = (text, options = {}) => {
		const { fontSize = 11, bold = false, color = [30, 30, 30] } = options;
		doc.setFontSize(fontSize);
		doc.setFont("helvetica", bold ? "bold" : "normal");
		doc.setTextColor(...color);

		const lines = doc.splitTextToSize(String(text), pageWidth - 40);
		doc.text(lines, 20, y);
		y += lines.length * (fontSize * 0.5) + 4;

		if (y > 270) {
			doc.addPage();
			y = 20;
		}
	};

	const addSection = (title) => {
		y += 4;
		doc.setFillColor(240, 240, 240);
		doc.rect(15, y - 6, pageWidth - 30, 10, "F");
		addLine(title, { fontSize: 12, bold: true, color: [50, 50, 150] });
		y += 2;
	};

	addLine("Decisio — Analysis Report", {
		fontSize: 18,
		bold: true,
		color: [30, 30, 180],
	});
	addLine(`Date: ${data.meta?.date || new Date().toLocaleDateString()}`, {
		fontSize: 10,
		color: [100, 100, 100],
	});
	y += 6;

	addSection("Summary");
	const primary = data.result?.primary;
	const maxScore = data.analysis?.recommendations?.[0]?.score || 1;
	const matchScore = primary ? Math.round((primary.score / maxScore) * 100) : 0;

	addLine(`Recommended: ${primary?.name || "—"}`, { bold: true });
	addLine(`Match Score: ${matchScore}%`);
	y += 4;

	addSection("Answers");
	const answers = data.input?.answers || {};
	Object.entries(answers).forEach(([key, value]) => {
		addLine(`${key}: ${value}`);
	});
	y += 4;

	addSection("Recommendations");
	(data.analysis?.recommendations || []).forEach((rec, i) => {
		addLine(`${i + 1}. ${rec.name}`, { bold: true });
		addLine(
			`   Score: ${rec.score} | Category: ${rec.category} | Type: ${rec.type}`,
			{
				fontSize: 10,
				color: [80, 80, 80],
			},
		);
	});

	doc.save(`decisio-analysis-${Date.now()}.pdf`);
}
