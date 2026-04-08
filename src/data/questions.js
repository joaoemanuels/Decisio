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
				badge: "+2 React",
				scores: { react: 2, next: 1 },
			},
			{
				id: "dashboard",
				label: "Dashboard",
				description: "Interface com dados e métricas em tempo real.",
				img: scale,
				badge: "+3 Next.js",
				scores: { next: 3, react: 1 },
			},
			{
				id: "ecommerce",
				label: "E-commerce",
				description: "Sistema completo de vendas online.",
				img: security,
				badge: "+4 Fullstack",
				scores: { next: 2, node: 2, database: 2 },
			},
			{
				id: "blog",
				label: "Blog",
				description: "Conteúdo dinâmico com foco em SEO.",
				img: star,
				badge: "+2 SEO",
				scores: { next: 2, seo: 2 },
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
				badge: "+0 SEO",
				scores: { seo: 0 },
			},
			{
				id: "medium",
				label: "Importante",
				description: "SEO ajuda, mas não é o foco principal.",
				img: star,
				badge: "+2 SEO",
				scores: { seo: 2 },
			},
			{
				id: "high",
				label: "Muito importante",
				description: "SEO é essencial para o projeto.",
				img: scale,
				badge: "+4 SEO",
				scores: { seo: 4, next: 1 },
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
				badge: "+0 Perf",
				scores: { performance: 0 },
			},
			{
				id: "medium",
				label: "Seria bom",
				description: "Performance é desejável.",
				img: star,
				badge: "+2 Perf",
				scores: { performance: 2, next: 1 },
			},
			{
				id: "high",
				label: "Muito importante",
				description: "Alta performance é essencial.",
				img: scale,
				badge: "+4 Perf",
				scores: { performance: 4, next: 2 },
			},
		],
	},

	{
		id: "security_level",
		category: "Security",
		title: "Qual o nível de segurança?",
		description: "Defina a criticidade dos dados e necessidade de proteção.",
		options: [
			{
				id: "low",
				label: "Baixo",
				description: "Sem dados sensíveis.",
				img: zap,
				badge: "+0 Sec",
				scores: { security: 0 },
			},
			{
				id: "medium",
				label: "Moderado",
				description: "Alguns dados precisam proteção.",
				img: star,
				badge: "+2 Sec",
				scores: { security: 2 },
			},
			{
				id: "high",
				label: "Alto",
				description: "Dados críticos e sensíveis.",
				img: security,
				badge: "+4 Sec",
				scores: { security: 4, backend: 2 },
			},
		],
	},

	{
		id: "scalability",
		category: "Architecture",
		title: "Precisa escalar?",
		description: "O projeto deve suportar crescimento de usuários e dados?",
		options: [
			{
				id: "no",
				label: "Não",
				description: "Projeto pequeno e controlado.",
				img: zap,
				badge: "+0 Scale",
				scores: { scalability: 0 },
			},
			{
				id: "maybe",
				label: "Talvez",
				description: "Pode crescer no futuro.",
				img: star,
				badge: "+2 Scale",
				scores: { scalability: 2, next: 1 },
			},
			{
				id: "yes",
				label: "Sim",
				description: "Alta escalabilidade é essencial.",
				img: scale,
				badge: "+4 Scale",
				scores: { scalability: 4, backend: 3, database: 2 },
			},
		],
	},
];

export default questions;
