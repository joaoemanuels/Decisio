import styles from "./method-cards.module.css";

import input from "@/assets/icons/input.svg";
import analysis from "@/assets/icons/analysis.svg";
import rocket from "@/assets/icons/rocket.svg";

import MethodCard from "../../../../../components/shared/MethodCard/index";

function MethodCards() {
	return (
		<div className={styles.method_cards}>
			<MethodCard
				img={input}
				head={"Input Parameters"}
				text={
					"Define your team size, budget, scalability requirements, and existing ecosystem constraints."
				}
			/>
			<MethodCard
				img={analysis}
				head={"Input Parameters"}
				text={
					"Define your team size, budget, scalability requirements, and existing ecosystem constraints."
				}
			/>
			<MethodCard
				img={rocket}
				head={"Input Parameters"}
				text={
					"Define your team size, budget, scalability requirements, and existing ecosystem constraints."
				}
			/>
		</div>
	);
}

export default MethodCards;
