import styles from "./flow-card.module.css";

function FlowCard({ img, badge, text, content, onClick, isSelected }) {
	return (
		<div
			className={`${styles.flow} ${isSelected ? styles.active : ""}`}
			onClick={onClick}
		>
			<div className={styles.flow_header}>
				<div className={styles.flow_img}>
					<img src={img} alt="" />
				</div>
				<span>{badge}</span>
			</div>
			<h4>{text}</h4>
			<p>{content}</p>
		</div>
	);
}

export default FlowCard;
