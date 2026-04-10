const rules = {
	seo: {
		next: 4,
	},

	performance: {
		next: 2,
		vite: 3,
	},

	interactivity: {
		react: 4,
		vue: 2,
	},

	complexity: {
		next: 3,
		node: 2,
	},

	backend: {
		node: 4,
		express: 2,
	},

	database: {
		postgres: 3,
		mongodb: 2,
	},

	scalability: {
		next: 3,
		node: 3,
		postgres: 2,
	},

	security: {
		node: 2,
		postgres: 2,
	},

	content: {
		next: 3,
	},

	conversion: {
		vite: 2,
		next: 2,
	},

	realtime: {
		react: 3,
		node: 2,
	},
};

export default rules;
