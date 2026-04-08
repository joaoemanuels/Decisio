import { useState } from "react";
import { decisionEngine } from "../../engine/decisionEngine";
import questions from "../../data/questions";
import FlowHeader from "./sections/FlowHeader";
import FlowForm from "./sections/FlowForm";

import styles from "./flow.module.css";

function Flow() {
	const [selectedOption, setSelectedOption] = useState(null);
	const [step, setStep] = useState(0);
	const [answers, setAnswers] = useState({});

	const question = questions[step];

	function handleSelect(optionId) {
		setSelectedOption(optionId);
	}

	function handleNext() {
		if (!selectedOption) return;

		setAnswers((prev) => ({
			...prev,
			[question.id]: selectedOption,
		}));

		setSelectedOption(null);
		setStep((prev) => prev + 1);
	}

	function goBack() {
		if (step > 0) {
			setStep((prev) => prev - 1);
		}
		return;
	}

	if (!question) {
		const result = decisionEngine(answers);

		return (
			<div>
				<h2>Recomendação:</h2>

				<h1>{result.recommendation}</h1>

				<h3>Pontuação:</h3>

				<pre>{JSON.stringify(result.score, null, 2)}</pre>

				<h3>Respostas:</h3>

				<pre>{JSON.stringify(answers, null, 2)}</pre>
			</div>
		);
	}
	return (
		<section className={styles.flow}>
			<div className={styles.sectionForm}>
				<FlowHeader />

				<FlowForm
					question={question}
					onSelect={handleSelect}
					onNext={handleNext}
					onBack={goBack}
					selectedOption={selectedOption}
				/>
			</div>
		</section>
	);
}

export default Flow;
