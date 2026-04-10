import { Link } from "react-router-dom";
import styles from "./cta.module.css";

function Cta() {
	return (
		<section className={styles.cta}>
			<div className={styles.cta_content}>
				<h2>Ready to build the right way?</h2>
				<Link to="/flow">
					<button className={styles.btn}>Start Decision</button>
				</Link>
			</div>
		</section>
	);
}

export default Cta;
