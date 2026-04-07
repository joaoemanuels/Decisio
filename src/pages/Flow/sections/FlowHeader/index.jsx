import styles from "./flow-header.module.css";

function FlowHeader() {
	return (
		<section className={styles.flow}>
			<span>Project strategy</span>
			<h1>What is the primary goal for your project?</h1>
			<p>
				Define the core objective to refine our logic engine's architectural
				recommendations.
			</p>
		</section>
	);
}

export default FlowHeader;
