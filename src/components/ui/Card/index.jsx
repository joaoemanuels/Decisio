import styles from "./card.module.css";

function Card({ title, description, category, score, isPrimary }) {
	return (
		<div
			className={`${styles.card} ${
				isPrimary ? styles.primary : ""
			}`}
		>
			<div className={styles.header}>
				<span className={styles.category}>{category}</span>
				<span className={styles.score}>{score}</span>
			</div>

			<h3 className={styles.title}>{title}</h3>

			<p className={styles.description}>{description}</p>
		</div>
	);
}

export default Card;