import { useState } from "react";
import { decisionEngine } from "../../engine/decisionEngine";
import questions from "../../data/questions";

function Flow() {
	const [step, setStep] = useState(0);
	const [answers, setAnswers] = useState({});

	const question = questions[step];
	const progress = (step / questions.length) * 100;

	function handleAnswer(optionId) {
		setAnswers((prev) => ({
			...prev,
			[question.id]: optionId,
		}));
		setStep(step + 1);
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
		<div>
			<h2>{question.text}</h2>
			<div>
				<div style={{ width: progress + "%" }} />
			</div>

			{question.options.map((option) => (
				<button key={option.id} onClick={() => handleAnswer(option.id)}>
					{option.label}
				</button>
			))}

			<button onClick={goBack}>Voltar</button>
		</div>
	);
}

export default Flow;
