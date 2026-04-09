import styles from "./landscapes.module.css";

function Landscapes() {
	return (
		<div className={styles.landscapes}>
			<h3>Alternative Landscapes</h3>
			<div className={styles.landscapes__cards}>
				<div className={styles.landscapes__card}>
					<div className={styles.landscapes__card_top}>
						<h4>Remix</h4>
						<span>Runner Up</span>
					</div>
					<p>Superior data loading and mutation handling via web standards.</p>
					<div className={styles.landscapes__card_bottom}>
						<span>Compatibility</span>
						<span>88%</span>
					</div>
				</div>

				<div className={styles.landscapes__card}>
					<span>Runner Up</span>
					<h4>Remix</h4>
					<p>Superior data loading and mutation handling via web standards.</p>
					<div className={styles.landscapes__card_bottom}>
						<span>Compatibility</span>
						<span>88%</span>
					</div>
				</div>

				<div className={styles.landscapes__card}>
					<span>Runner Up</span>
					<h4>Remix</h4>
					<p>Superior data loading and mutation handling via web standards.</p>
					<div className={styles.landscapes__card_bottom}>
						<span>Compatibility</span>
						<span>88%</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Landscapes;
