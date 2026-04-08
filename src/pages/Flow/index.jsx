import { useState } from "react";
import { useNavigate } from "react-router-dom";

import questions from "../../data/questions";
import FlowHeader from "./sections/FlowHeader";
import FlowForm from "./sections/FlowForm";

import styles from "./flow.module.css";

function Flow() {
	const navigate = useNavigate();

	const [selectedOption, setSelectedOption] = useState(null);
	const [step, setStep] = useState(0);
	const [answers, setAnswers] = useState({});

	const question = questions[step];

	function handleSelect(optionId) {
		setSelectedOption(optionId);
	}

	function handleNext() {
		if (!selectedOption) return;

		const updatedAnswers = {
			...answers,
			[question.id]: selectedOption,
		};

		setAnswers(updatedAnswers);
		setSelectedOption(null);

		const nextStep = step + 1;

		if (!questions[nextStep]) {
			navigate("/results", {
				state: updatedAnswers,
			});
			return;
		}

		setStep(nextStep);
	}

	function goBack() {
		if (step === 0) return;

		const prevStep = step - 1;
		const prevQuestion = questions[prevStep];

		setStep(prevStep);
		setSelectedOption(answers[prevQuestion.id] || null);
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
