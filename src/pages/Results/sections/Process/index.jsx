import "./process.styles.css";

import zap from "@/assets/icons/zap.svg";
import search from "@/assets/icons/search.svg";
import dev from "@/assets/icons/dev.svg";

function Process({ result }) {
	const primary = result.primary;
	const featureScores = result.featureScores || {};

	const icons = [zap, search, dev];

	const labelMap = {
		ux: "User Experience",
		efficiency: "Efficiency",
		maintainability: "Maintainability",
		community: "Community Strength",
	};

	const scoreMap = primary?.analysis?.scoreMap || {};

	const scores = Object.entries(scoreMap).map(([key, feature]) => {
		const raw = featureScores[feature];

		const safeValue = typeof raw === "number" ? raw : 0;

		const value = safeValue * 2.5;
		const percentage = (value / 10) * 100;

		return {
			label: labelMap[key],
			value: value.toFixed(1),
			percentage,
		};
	});
	console.log("RESULT:", result);
	console.log("FEATURE SCORES:", result.featureScores);
	console.log("PRIMARY:", result.primary);
	console.log("SCORE MAP:", result.primary?.analysis?.scoreMap);
	return (
		<section className="process">
			<div className="process-left">
				<span>Por que isso funciona</span>

				<div className="process-itens">
					{primary?.analysis?.why?.map((item, index) => (
						<div className="process-item" key={index}>
							<img src={icons[index]} alt="" />

							<div>
								<p>{item.title}</p>
								<span>{item.text}</span>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="process-right">
				<span className="title">Score Breakdown</span>

				{scores.map((item, index) => (
					<div className="item" key={index}>
						<div className="item-top">
							<span>{item.label}</span>
							<span>{item.value}</span>
						</div>

						<div className="bar">
							<div
								className="fill"
								style={{ width: `${item.percentage}%` }}
							></div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Process;
