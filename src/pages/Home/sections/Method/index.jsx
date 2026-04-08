import styles from "./method.module.css";

import MethodCards from "./MethodCards";

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

			<MethodCards/>
		</section>
	);
}

export default Method;
