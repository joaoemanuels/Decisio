import "./process.styles.css";

import zap from "@/assets/icons/zap.svg";
import search from "@/assets/icons/search.svg";
import dev from "@/assets/icons/dev.svg";

function Process() {
	return (
		<section className="process">
			<div className="process-left">
				<span>Why this works</span>

				<div className="process-itens">
					<div className="process-item">
						<img src={zap} alt="" />
						<div>
							<p>Performance-First Architecture</p>
							<span>
								Next.js enables automatic code splitting and optimized
								prefetching, ensuring your users experience sub-second load
								times regardless of project complexity.
							</span>
						</div>
					</div>

					<div className="process-item">
						<img src={search} alt="" />
						<div>
							<p>Optimized for Visibility</p>
							<span>
								Built-in support for SSR and SSG provides the metadata and
								content density required for top-tier search engine rankings out
								of the box.
							</span>
						</div>
					</div>

					<div className="process-item">
						<img src={dev} alt="" />
						<div>
							<p>Developer Experience</p>
							<span>
								Hot Module Replacement, superior error reporting, and the vast
								npm ecosystem significantly reduce time-to-market for your
								engineering team.
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className="process-right">
				<span className="title">Score Breakdown</span>

				<div className="item">
					<div className="item-top">
						<span>User Experience</span>
						<span>9.8</span>
					</div>
					<div className="bar">
						<div className="fill" style={{ width: "98%" }}></div>
					</div>
				</div>

				<div className="item">
					<div className="item-top">
						<span>Efficiency</span>
						<span>9.4</span>
					</div>
					<div className="bar">
						<div className="fill" style={{ width: "94%" }}></div>
					</div>
				</div>

				<div className="item">
					<div className="item-top">
						<span>Maintainability</span>
						<span>9.1</span>
					</div>
					<div className="bar">
						<div className="fill" style={{ width: "91%" }}></div>
					</div>
				</div>

				<div className="item">
					<div className="item-top">
						<span>Community Strength</span>
						<span>9.9</span>
					</div>
					<div className="bar">
						<div className="fill" style={{ width: "99%" }}></div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Process;
