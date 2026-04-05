import styles from "./method.module.css";

function Method() {
	return (
		<section className={styles.method}>
			<h1>Engineered for architectural clarity.</h1>

			<div className={styles.method_header}>
				<p>
					Stop debating. Start building. Decisio uses a deterministic weighted
					matrix to solve technical paralysis.
				</p>
				<p>Decisio Protocol 1.0</p>
			</div>

			<div className={styles.method_cards}>
				<div className={styles.method_card}>
					<img src="" alt="" />
					<p>Input Parameters</p>
					<span>
						Define your team size, budget, scalability requirements, and
						existing ecosystem constraints.
					</span>
				</div>

				<div className={styles.method_card}>
					<img src="" alt="" />
					<p>Neural Analysis</p>
					<span>
						Our engine cross-references 500+ benchmarks and industry performance
						data in real-time.
					</span>
				</div>

				<div className={styles.method_card}>
					<img src="" alt="" />
					<p>Final Verdict</p>
					<span>
						Receive a comprehensive PDF report with the recommended stack and
						technical justification.
					</span>
				</div>
			</div>
		</section>
	);
}

export default Method;
