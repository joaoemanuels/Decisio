const questions = [
	{
		id: "project_type",
		text: "Qual o tipo de projeto?",
		options: [
			{ id: "landing", label: "Landing page" },
			{ id: "dashboard", label: "Dashboard" },
			{ id: "ecommerce", label: "E-commerce" },
			{ id: "blog", label: "Blog" },
			{ id: "institutional", label: "Site institucional" },
		],
	},

	{
		id: "seo_importance",
		text: "SEO é importante?",
		options: [
			{ id: "low", label: "Não muito" },
			{ id: "medium", label: "Importante" },
			{ id: "high", label: "Muito importante" },
		],
	},

	{
		id: "performance_priority",
		text: "Performance é crítica?",
		options: [
			{ id: "low", label: "Não" },
			{ id: "medium", label: "Seria bom" },
			{ id: "high", label: "Muito importante" },
		],
	},

	{
		id: "project_complexity",
		text: "Qual a complexidade do projeto?",
		options: [
			{ id: "simple", label: "Simples" },
			{ id: "medium", label: "Média" },
			{ id: "complex", label: "Alta" },
		],
	},

	{
		id: "interactivity_level",
		text: "O projeto terá muita interatividade?",
		options: [
			{ id: "low", label: "Pouca" },
			{ id: "medium", label: "Moderada" },
			{ id: "high", label: "Alta (muitos estados e eventos)" },
		],
	},

	{
		id: "content_frequency",
		text: "O conteúdo será atualizado com frequência?",
		options: [
			{ id: "rare", label: "Raramente" },
			{ id: "sometimes", label: "Às vezes" },
			{ id: "often", label: "Frequentemente" },
		],
	},

	{
		id: "backend_need",
		text: "Precisa de backend?",
		options: [
			{ id: "no", label: "Não" },
			{ id: "simple", label: "Sim, algo simples" },
			{ id: "complex", label: "Sim, algo robusto" },
		],
	},

	{
		id: "team_size",
		text: "Qual o tamanho do time?",
		options: [
			{ id: "solo", label: "Só eu" },
			{ id: "small", label: "2 a 5 pessoas" },
			{ id: "large", label: "Mais de 5 pessoas" },
		],
	},

	{
		id: "deadline",
		text: "Qual o prazo?",
		options: [
			{ id: "urgent", label: "Curto (preciso rápido)" },
			{ id: "normal", label: "Normal" },
			{ id: "flexible", label: "Flexível" },
		],
	},

	{
		id: "experience",
		text: "Qual sua experiência?",
		options: [
			{ id: "junior", label: "Iniciante" },
			{ id: "mid", label: "Intermediário" },
			{ id: "senior", label: "Avançado" },
		],
	},
];

export default questions;
