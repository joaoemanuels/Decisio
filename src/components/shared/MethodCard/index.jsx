import styles from "./method-card.module.css";

function MethodCard({ head, text, img }) {
	return (
		<>
			<div className={styles.method_card}>
				<div className={styles.method_card_img}>
					<img src={img} alt="" />
				</div>
				<p>{head}</p>
				<span>{text}</span>
			</div>
		</>
	);
}

export default MethodCard;
