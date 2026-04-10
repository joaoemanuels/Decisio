import FlowCard from "../../../../components/shared/FlowCard";

import styles from "./flow-form.module.css";

function FlowForm({ question, onSelect, onNext, onBack, selectedOption }) {
	return (
		<>
			<section className={styles.flowForm}>
				{question.options.map((option) => (
					<div key={option.id} onClick={() => onSelect(option.id)}>
						<FlowCard
							key={option.id}
							img={option.img}
							badge={option.badge}
							text={option.label}
							content={option.description}
							onClick={() => onSelect(option.id)}
							isSelected={selectedOption === option.id}
						/>
					</div>
				))}
			</section>

			<div className={styles.actions}>
				<button className={styles.btn} onClick={onBack}>
					Voltar
				</button>

				<button
					className={styles.btn}
					onClick={onNext}
					disabled={!selectedOption}
				>
					Próximo
				</button>
			</div>
			<div className={`${styles.light} ${styles.bottomRight}`} />
		</>
	);
}

export default FlowForm;
