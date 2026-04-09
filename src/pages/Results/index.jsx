import "./results.styles.css";

import { useLocation, useNavigate } from "react-router-dom";
import { decisionEngine } from "../../engine/decisionEngine";

import Hero from "./sections/Hero";
import Match from "./sections/Match";
import Process from "./sections/Process";
import Landscapes from "./sections/Landscapes";

function Results() {
	const location = useLocation();
	const navigate = useNavigate();

	const answers = location.state;

	if (!answers) {
		navigate("/flow");
		return null;
	}

	const result = decisionEngine(answers);

	return (
		<section className="results">
			<section className="results">
				<Hero result={result} />
				<Match result={result} />
				<Process result={result} />
				<Landscapes result={result} />
			</section>
		</section>
	);
}

export default Results;
