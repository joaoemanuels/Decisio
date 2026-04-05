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

				<div>
					<button>Start Decision</button>
					<button>View Demo</button>
				</div>
			</div>
		</section>
	);
}

export default Hero;
