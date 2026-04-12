import { useState } from "react";
import styles from "./dropdown.module.css";

import { exportJSON } from "@/utils/export/exportJSON.js";
import { exportCSV } from "@/utils/export/exportCSV.js";
import { exportPDF } from "@/utils/export/exportPDF.js";

function ExportDropdown({ data }) {
	const [open, setOpen] = useState(false);

	function handleExport(type) {
		if (type === "json") exportJSON(data);
		if (type === "csv") exportCSV(data);
		if (type === "pdf") exportPDF(data);

		setOpen(false);
	}

	return (
		<div className={styles.dropdown}>
			<button
				className={`${styles.btn} ${styles.secondary}`}
				onClick={() => setOpen(!open)}
			>
				Export Detailed Report ▼
			</button>

			{open && (
				<div className={styles.menu}>
					<button onClick={() => handleExport("pdf")}>PDF</button>
					<button onClick={() => handleExport("csv")}>CSV</button>
					<button onClick={() => handleExport("json")}>JSON</button>
				</div>
			)}
		</div>
	);
}

export default ExportDropdown;
