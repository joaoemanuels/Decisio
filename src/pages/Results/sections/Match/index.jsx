import "./match.styles.css";

import score from "@/assets/icons/score.svg";

function Match() {
	return (
		<section className="match">
			<div className="match-left">
				<div className="match-score">
					<img src={score} alt="" />
					<span>98% Match Score</span>
				</div>

				<h2>Next.js</h2>

				<p>
					The React Framework for the Web. Powering the world's largest websites
					with high-performance SSR and static generation.
				</p>

				<div class="meta">
					<div class="meta-item">
						<span class="meta-label">ECOSYSTEM</span>
						<span class="meta-value">Elite</span>
					</div>

					<div class="meta-item">
						<span class="meta-label">LEARNING CURVE</span>
						<span class="meta-value">Moderate</span>
					</div>

					<div class="meta-item">
						<span class="meta-label">SCALABILITY</span>
						<span class="meta-value">Infinite</span>
					</div>
				</div>
			</div>

			<div className="match-right">
				<img
					src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/37/aa/3d/caption.jpg?w=800&h=800&s=1"
					alt=""
				/>
			</div>
		</section>
	);
}

export default Match;
