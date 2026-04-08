import "./match.styles.css";

import score from "@/assets/icons/score.svg";

function Match({ result }) {
	const primary = result.primary;

	return (
		<section className="match">
			<div className="match-left">
				<div className="match-score">
					<img src={score} alt="" />
					<span>{primary?.score || 0}% Match Score</span>
				</div>

				<h2>{primary?.name}</h2>

				<p>{primary?.description}</p>

				<div className="meta">
					<div className="meta-item">
						<span className="meta-label">CATEGORY</span>
						<span className="meta-value">{primary?.category}</span>
					</div>
					<div className="meta-item">
						<span className="meta-label">CATEGORY</span>
						<span className="meta-value">{primary?.category}</span>
					</div>
					<div className="meta-item">
						<span className="meta-label">CATEGORY</span>
						<span className="meta-value">{primary?.category}</span>
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
