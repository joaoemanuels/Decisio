import zap from "@/assets/icons/zap.svg";
import scale from "@/assets/icons/scale.svg";
import star from "@/assets/icons/star.svg";
import security from "@/assets/icons/security.svg";

const questions = [
	{
		id: "project_type",
		category: "Project Strategy",
		title: "Qual o tipo de projeto?",
		description:
			"Defina o formato principal para orientar as decisões arquiteturais.",
		options: [
			{
				id: "landing",
				label: "Landing page",
				description: "Página focada em conversão e marketing.",
				img: zap,
				badge: "+Conversão +Performance",
				scores: {
					conversion: 3,
					performance: 2,
					seo: 2,
					interactivity: 1,
					complexity: 1,
				},
			},
			{
				id: "dashboard",
				label: "Dashboard",
				description: "Interface com dados e métricas em tempo real.",
				img: scale,
				badge: "+Alta interatividade",
				scores: {
					interactivity: 4,
					realtime: 3,
					complexity: 3,
					performance: 2,
				},
			},
			{
				id: "ecommerce",
				label: "E-commerce",
				description: "Sistema completo de vendas online.",
				img: security,
				badge: "+Alta complexidade",
				scores: {
					complexity: 4,
					scalability: 3,
					security: 3,
					performance: 2,
					seo: 2,
				},
			},
			{
				id: "blog",
				label: "Blog",
				description: "Conteúdo dinâmico com foco em SEO.",
				img: star,
				badge: "+Conteúdo +SEO",
				scores: {
					seo: 4,
					content: 4,
					performance: 2,
					complexity: 1,
				},
			},
		],
	},

	{
		id: "seo_importance",
		category: "Optimization",
		title: "SEO é importante?",
		description: "Determine o nível de prioridade para mecanismos de busca.",
		options: [
			{
				id: "low",
				label: "Não muito",
				description: "SEO não é prioridade no momento.",
				img: zap,
				badge: "Baixo SEO",
				scores: { seo: 0 },
			},
			{
				id: "medium",
				label: "Importante",
				description: "SEO ajuda, mas não é o foco principal.",
				img: star,
				badge: "+SEO",
				scores: { seo: 2 },
			},
			{
				id: "high",
				label: "Muito importante",
				description: "SEO é essencial para o projeto.",
				img: scale,
				badge: "SEO crítico",
				scores: { seo: 4 },
			},
		],
	},

	{
		id: "performance_priority",
		category: "Performance",
		title: "Performance é crítica?",
		description: "Defina o nível de exigência para velocidade e otimização.",
		options: [
			{
				id: "low",
				label: "Não",
				description: "Performance não é um problema crítico.",
				img: zap,
				badge: "Baixa performance",
				scores: { performance: 0 },
			},
			{
				id: "medium",
				label: "Seria bom",
				description: "Performance é desejável.",
				img: star,
				badge: "+Performance",
				scores: { performance: 2 },
			},
			{
				id: "high",
				label: "Muito importante",
				description: "Alta performance é essencial.",
				img: scale,
				badge: "Performance crítica",
				scores: { performance: 4 },
			},
		],
	},

	{
		id: "interactivity_level",
		category: "UX",
		title: "Nível de interatividade?",
		description: "Quanto o usuário interage com a interface?",
		options: [
			{
				id: "low",
				label: "Baixa",
				description: "Pouca interação (conteúdo estático).",
				img: zap,
				badge: "Pouca interatividade",
				scores: { interactivity: 1 },
			},
			{
				id: "medium",
				label: "Moderada",
				description: "Algumas interações.",
				img: star,
				badge: "+Interatividade",
				scores: { interactivity: 2 },
			},
			{
				id: "high",
				label: "Alta",
				description: "Interface dinâmica e reativa.",
				img: scale,
				badge: "Alta interatividade",
				scores: { interactivity: 4 },
			},
		],
	},

	{
		id: "scalability",
		category: "Architecture",
		title: "Precisa escalar?",
		description: "O projeto deve suportar crescimento de usuários?",
		options: [
			{
				id: "no",
				label: "Não",
				description: "Projeto pequeno.",
				img: zap,
				badge: "Baixa escala",
				scores: { scalability: 0 },
			},
			{
				id: "maybe",
				label: "Talvez",
				description: "Pode crescer.",
				img: star,
				badge: "+Escalabilidade",
				scores: { scalability: 2 },
			},
			{
				id: "yes",
				label: "Sim",
				description: "Alta escalabilidade.",
				img: scale,
				badge: "Alta escala",
				scores: {
					scalability: 4,
					performance: 2,
				},
			},
		],
	},
];

export default questions;
