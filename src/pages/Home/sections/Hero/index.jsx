import { Link } from "react-router-dom";
import Button from "../../../../components/ui/Button";
import Analysis from "./Analysis";
import styles from "./hero.module.css";

function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.hero_content}>
				<h1>
					Make better tech <br /> <span>decisions</span> faster
				</h1>

				<p>
					Architect the future with precision. Decisio translates complex
					technical requirements into actionable framework recommendations using
					real-world benchmarks.
				</p>

					<Link className={styles.hero_content_btn} to="/flow">
						<Button btn={"Start Decision"} />
						<Button btn={"View Demo"} />
					</Link>
			</div>

			<Analysis />

			<div className={`${styles.light} ${styles.topLeft}`} />
			<div className={`${styles.light} ${styles.bottomRight}`} />
		</section>
	);
}

export default Hero;
