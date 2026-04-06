import styles from "./cta.module.css";

function Cta() {
	return (
		<section className={styles.cta}>
			<div className={styles.cta_content}>
				<h2>Ready to build the right way?</h2>
				<button>Start Decision</button>
			</div>
		</section>
	);
}

export default Cta;
