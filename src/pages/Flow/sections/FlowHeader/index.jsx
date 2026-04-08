import styles from "./flow-header.module.css";

function FlowHeader({ question }) {
	return (
		<section className={styles.flow}>
			<span>{question.category}</span>
			<h1>{question.title}</h1>
			<p>{question.description}</p>
		</section>
	);
}

export default FlowHeader;
