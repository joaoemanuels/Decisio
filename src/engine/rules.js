const rules = {
	seo: {
		astro: 3,
		next: 3,
		nuxt: 2,
	},

	performance: {
		vite: 3,
		sveltekit: 3,
		astro: 2, 
		next: 2,
	},

	interactivity: {
		react: 4,
		vue: 3,
		sveltekit: 3,
		astro: -3, 
	},

	complexity: {
		react: 3,
		next: 2,
		sveltekit: 2,
	},

	scalability: {
		react: 3,
		next: 2,
		nuxt: 2,
	},

	security: {
		next: 2,
	},

	content: {
		astro: 3,
		next: 2,
		nuxt: 2,
	},

	conversion: {
		next: 3, 
		astro: 2,
	},

	realtime: {
		react: 4,
		sveltekit: 3,
		next: 1,
		astro: -2, 
	},
};

export default rules;
