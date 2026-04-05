import "./process.styles.css";

function Process() {
	return (
		<section className="process">
			<div className="process-left">
				<span>Why this works</span>

				<div className="process-itens">
					<div className="process-item">
						<img src="" alt="" />
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
						<img src="" alt="" />
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
						<img src="" alt="" />
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
				<span>Score Breakdown</span>
			</div>
		</section>
	);
}

export default Process;
