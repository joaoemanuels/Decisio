import styles from "./analysis.module.css";

import star from "@/assets/icons/star.svg";
import time from "@/assets/icons/time.svg";
import peoples from "@/assets/icons/peoples.svg";
import shield_home from "@/assets/icons/shield_home.svg";

function Analysis() {
	return (
		<section className={styles.analysis}>
			<div className={styles.analysis_header}>
				<div className={styles.analysis_header_icon}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<h3>Decision Analysis / Web_Framework_2024</h3>
			</div>

			<div className={styles.analysis_content}>
				<div className={styles.analysis_content_left}>
					<div className={styles.container_top}>
						<div className={styles.content_left_top}>
							<div className={styles.content_left_topText}>
								<h4>Recommended Stack</h4>
								<p>Confidence Score: 98.4%</p>
							</div>
							<img src={star} alt="" />
						</div>

						<div className={styles.content_left_cards}>
							<div className={styles.content_left_card}>
								<h4>Frontend</h4>
								<p>Next.js</p>
							</div>
							<div className={styles.content_left_card}>
								<h4>Frontend</h4>
								<p>Next.js</p>
							</div>
						</div>
					</div>

					<div className={styles.container_cards}>
						<div className={styles.container_card}>
							<img src={time} alt="" />
							<h4>0.8s</h4>
							<p>ttfb bench</p>
						</div>

						<div className={styles.container_card}>
							<img src={peoples} alt="" />
							<h4>12k</h4>
							<p>dev support</p>
						</div>

						<div className={styles.container_card}>
							<img src={shield_home} alt="" />
							<h4>A+</h4>
							<p>sec rating</p>
						</div>
					</div>
				</div>

				<div className={styles.analysis_content_right}>
					<h4>Alternatives</h4>
					<div className={styles.content_right_cards}>
						<div className={styles.content_right_card}>
							<p>Remix.run</p>
							<span> 92%</span>
						</div>

						<div className={styles.content_right_card}>
							<p>Remix.run</p>
							<span> 92%</span>
						</div>

						<div className={styles.content_right_card}>
							<p>Remix.run</p>
							<span> 92%</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Analysis;
