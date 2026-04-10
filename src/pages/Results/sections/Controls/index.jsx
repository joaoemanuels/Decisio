import styles from "./controls.module.css";

function Controls() {
	return (
		<div className={styles.actions}>
			<button className={`${styles.btn} ${styles.primary}`}>
				Save This Decision
			</button>

			<button className={`${styles.btn} ${styles.secondary}`}>
				Export Detailed Report
			</button>

			<button className={styles.restart}>↻ Restart Analysis</button>
		</div>
	);
}

export default Controls;
