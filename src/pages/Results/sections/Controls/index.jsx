import { Link } from "react-router-dom";
import styles from "./controls.module.css";
import ExportDropdown from "../../../../components/ui/Dropdown";

import { saveDecision } from "@/utils/export/saveDecision.js";

function Controls({ data }) {
	return (
		<div className={styles.actions}>
			<button
				className={`${styles.btn} ${styles.primary}`}
				onClick={() => saveDecision(data)}
			>
				Save This Decision
			</button>

			<ExportDropdown data={data} />

			<Link to="/flow">
				<button className={styles.restart}>↻ Restart Analysis</button>
			</Link>
		</div>
	);
}

export default Controls;
