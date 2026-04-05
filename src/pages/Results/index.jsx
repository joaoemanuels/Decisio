import "./results.styles.css";

import Hero from "./sections/Hero";
import Match from "./sections/Match";
import Process from "./sections/Process";

function Results() {
	return (
		<section className="results">
			<Hero />;
			<Match />
			<Process />
		</section>
	);
}

export default Results;
