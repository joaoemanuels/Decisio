import { useState } from "react";
import { decisionEngine } from "../../engine/decisionEngine";
import questions from "../../data/questions";
import FlowHeader from "./sections/FlowHeader";
import FlowForm from "./sections/FlowForm";

import styles from "./flow.module.css";
import Card from "../../components/ui/Card";

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
		if (step === 0) return;

		const prevStep = step - 1;
		const prevQuestion = questions[prevStep];

		setStep(prevStep);

		setSelectedOption(answers[prevQuestion.id] || null);
	}

	if (!question) {
		const result = decisionEngine(answers);

		return (
			<section className={styles.results}>
				<h1 className={styles.title}>
					Stack recomendada: {result.primary?.name}
				</h1>

				<p className={styles.description}>{result.primary?.description}</p>

				<div className={styles.cards}>
					{result.recommendations.map((item, index) => (
						<Card
							key={item.id}
							title={item.name}
							description={item.description}
							category={item.category}
							score={item.score}
							isPrimary={index === 0}
						/>
					))}
				</div>
			</section>
		);
	}

	return (
		<section className={styles.flow}>
			<div className={styles.sectionForm}>
				<FlowHeader question={question} />

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
