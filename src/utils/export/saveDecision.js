export function saveDecision(data) {
	const existing = JSON.parse(localStorage.getItem("decisions")) || [];

	const newDecision = {
		id: Date.now(),
		...data,
	};

	existing.push(newDecision);

	localStorage.setItem("decisions", JSON.stringify(existing));
  
	alert("Salva no localStorage");
}
