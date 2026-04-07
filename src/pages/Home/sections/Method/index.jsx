import styles from "./method.module.css";

import input from "@/assets/icons/input.svg";
import analysis from "@/assets/icons/analysis.svg";
import rocket from "@/assets/icons/rocket.svg";

import MethodCard from "../../../../components/shared/MethodCard";

function Method() {
	return (
		<section className={styles.method}>
			<h1>Engineered for architectural clarity.</h1>

			<div className={styles.method_header}>
				<p>
					Stop debating. Start building. Decisio uses a deterministic weighted
					matrix to solve technical paralysis.
				</p>
				<p>Decisio Protocol 1.0</p>
			</div>

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
		</section>
	);
}

export default Method;
