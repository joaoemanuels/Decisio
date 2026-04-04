const rules = {
	project_type: {
		landing: {
			next: 3,
			vite: 2,
		},

		dashboard: {
			react: 3,
			next: 2,
		},

		ecommerce: {
			next: 4,
		},

		blog: {
			next: 4,
		},
	},

	seo_importance: {
		high: {
			next: 4,
		},

		medium: {
			next: 2,
		},
	},

	performance_priority: {
		high: {
			next: 2,
			vite: 2,
		},
	},

	project_complexity: {
		complex: {
			next: 3,
			react: 2,
		},

		simple: {
			vite: 2,
		},
	},

	interactivity_level: {
		high: {
			react: 4,
		},
	},

	content_frequency: {
		often: {
			next: 3,
		},
	},

	backend_need: {
		complex: {
			next: 4,
		},

		simple: {
			next: 2,
			react: 1,
		},
	},

	team_size: {
		large: {
			next: 2,
		},
	},

	deadline: {
		urgent: {
			vite: 2,
		},
	},

	experience: {
		junior: {
			react: 2,
			vite: 2,
		},

		senior: {
			vue: 1,
		},
	},
};

export default rules;
