import "./process.styles.css";

import zap from "@/assets/icons/zap.svg";
import search from "@/assets/icons/search.svg";
import dev from "@/assets/icons/dev.svg";

function Process({ result }) {
	const primary = result.primary;
	const icons = [zap, search, dev];

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

				<div className="item">
					<div className="item-top">
						<span>User Experience</span>
						<span>9.8</span>
					</div>
					<div className="bar">
						<div className="fill" style={{ width: "98%" }}></div>
					</div>
				</div>

				<div className="item">
					<div className="item-top">
						<span>Efficiency</span>
						<span>9.4</span>
					</div>
					<div className="bar">
						<div className="fill" style={{ width: "94%" }}></div>
					</div>
				</div>

				<div className="item">
					<div className="item-top">
						<span>Maintainability</span>
						<span>9.1</span>
					</div>
					<div className="bar">
						<div className="fill" style={{ width: "91%" }}></div>
					</div>
				</div>

				<div className="item">
					<div className="item-top">
						<span>Community Strength</span>
						<span>9.9</span>
					</div>
					<div className="bar">
						<div className="fill" style={{ width: "99%" }}></div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Process;
