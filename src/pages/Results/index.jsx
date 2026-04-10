import styles from "./results.module.css";

import { useLocation, useNavigate } from "react-router-dom";
import { decisionEngine } from "../../engine/decisionEngine";

import Hero from "./sections/Hero";
import Match from "./sections/Match";
import Process from "./sections/Process";
import Landscapes from "./sections/Landscapes";
import Controls from "./sections/Controls";

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
		<section className={styles.results}>
			<Hero result={result} />
			<Match result={result} />
			<Process result={result} />
			<Landscapes result={result} />
			<Controls result={result} />
			
		</section>
	);
}

export default Results;
