import styles from "./intelligence.module.css";

import ecosystem from "@/assets/icons/ecosystem.svg";
import shield from "@/assets/icons/shield.svg";
import cost from "@/assets/icons/cost.svg";

function Intelligence() {
	return (
		<section className={styles.intelligence}>
			<div className={styles.intelligence_top}>
				<div className={styles.intelligence_top_left}>
					<div className={styles.intelligence_top_left_content}>
						<div className={styles.intelligence_top_content_left}>
							<h3>Ecosystem Intelligence</h3>
							<p>
								We don't just look at code. We look at documentation quality,
								community momentum, and long-term maintainability.
							</p>
						</div>
						<div className={styles.intelligence_top_content_right}>
							<img src={ecosystem} alt="" />
						</div>
					</div>
					<div className={styles.intelligence_top_btn}>
						<button>NPM Stats</button>
						<button>GitHub Trends</button>
					</div>
				</div>
				<div className={styles.intelligence_top_right}>
					<div className={styles.intelligence_top_right_img}>
						<img src={shield} alt="" />
						<div className={styles.light}></div>
					</div>
					<h3>Bias Elimination</h3>
					<p>
						Mathematical weighting removes <br /> personal developer bias from
						the selection process.
					</p>
				</div>
			</div>

			<div className={styles.bottom}>
				<div className={styles.bottom_left}>
					<img src={cost} alt="" />
					<h3>Cost Projection</h3>
					<p>
						Estimate long-term cloud and infrastructure costs based on your
						decision.
					</p>
				</div>

				<div className={styles.bottom_right}>
					<div className={styles.bottom_right_content}>
						<div className={styles.bottom_right_contentText}>
							<h3>Instant Reports</h3>
							<p>
								Export high-fidelity documentation to present to stakeholders
								and CTOs.
							</p>
						</div>
						<button>&gt;</button>
					</div>

					<div className={styles.bottom_right_btn}>
						<span>PDF</span>
						<span>CSV</span>
						<span>JSON</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Intelligence;
