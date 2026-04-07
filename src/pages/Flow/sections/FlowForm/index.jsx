import FlowCard from "../../../../components/shared/FlowCard";
import styles from "./flow-form.module.css";

import zap from "@/assets/icons/zap.svg";
import scale from "@/assets/icons/scale.svg";
import star from "@/assets/icons/star.svg";
import security from "@/assets/icons/security.svg";

function FlowForm() {
	return (
		<>
			<section className={styles.flowForm}>
				<FlowCard
					img={zap}
					badge={"+2 React"}
					text={"High Velocity"}
					content={"Prioritize time-to-market and rapid iteration cycles."}
				/>
				<FlowCard
					img={scale}
					badge={"+3 Go"}
					text={"Extreme Scale"}
					content={"Built for massive concurrent data processing and uptime"}
				/>
				<FlowCard
					img={star}
					badge={"+4 Next.js"}
					text={"Seamless UX"}
					content={"Focus on premium animations and fluid user interactions."}
				/>
				<FlowCard
					img={security}
					badge={"+2 Rust"}
					text={"Robust Security"}
					content={"Compliance-first approach for fintech or sensitive data."}
				/>
			</section>

			<div className={styles.actions}>
				<button className={styles.btn}>Voltar</button>
				<button className={styles.btn}>Próximo </button>
			</div>
		</>
	);
}

export default FlowForm;
