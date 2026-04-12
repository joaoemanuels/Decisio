import styles from "./landscapes.module.css";

function Landscapes({ result }) {
	const recommendations = result.recommendations || [];

	if (!recommendations.length) return null;

	const others = recommendations.slice(1);

	return (
		<div className={styles.landscapes}>
			<h3>Alternative Landscapes</h3>

			<div className={styles.landscapes__cards}>
				{others.map((item) => (
					<div key={item.id} className={styles.landscapes__card}>
						<div className={styles.landscapes__card_top}>
							<h4>{item.name}</h4>
							<span>Runner Up</span>
						</div>

						<p>{item.description}</p>

						<div className={styles.landscapes__card_bottom}>
							<span>Compatibility</span>
							<span>{item.score}%</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Landscapes;