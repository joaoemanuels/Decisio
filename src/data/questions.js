import zap from "@/assets/icons/zap.svg";
import scale from "@/assets/icons/scale.svg";
import star from "@/assets/icons/star.svg";
import security from "@/assets/icons/security.svg";

const questions = [
	{
		id: "project_type",
		text: "Qual o tipo de projeto?",
		options: [
			{
				id: "landing",
				label: "Landing page",
				description: "Página focada em conversão e marketing.",
				img: zap,
				badge: "+2 React",
			},
			{
				id: "dashboard",
				label: "Dashboard",
				description: "Interface com dados e métricas em tempo real.",
				img: scale,
				badge: "+3 Next.js",
			},
			{
				id: "ecommerce",
				label: "E-commerce",
				description: "Sistema completo de vendas online.",
				img: security,
				badge: "+4 Fullstack",
			},
			{
				id: "blog",
				label: "Blog",
				description: "Conteúdo dinâmico com foco em SEO.",
				img: star,
				badge: "+2 SEO",
			},
			// {
			// 	id: "institutional",
			// 	label: "Site institucional",
			// 	description: "Apresentação da empresa ou serviço.",
			// 	img: zap,
			// 	badge: "+1 HTML",
			// },
		],
	},

	{
		id: "seo_importance",
		text: "SEO é importante?",
		options: [
			{
				id: "low",
				label: "Não muito",
				description: "SEO não é prioridade no momento.",
				img: zap,
				badge: "+0 SEO",
			},
			{
				id: "medium",
				label: "Importante",
				description: "SEO ajuda, mas não é o foco principal.",
				img: star,
				badge: "+2 SEO",
			},
			{
				id: "high",
				label: "Muito importante",
				description: "SEO é essencial para o projeto.",
				img: scale,
				badge: "+4 SEO",
			},
		],
	},

	{
		id: "performance_priority",
		text: "Performance é crítica?",
		options: [
			{
				id: "low",
				label: "Não",
				description: "Performance não é um problema crítico.",
				img: zap,
				badge: "+0 Perf",
			},
			{
				id: "medium",
				label: "Seria bom",
				description: "Performance é desejável.",
				img: star,
				badge: "+2 Perf",
			},
			{
				id: "high",
				label: "Muito importante",
				description: "Alta performance é essencial.",
				img: scale,
				badge: "+4 Perf",
			},
		],
	},

	// você pode seguir esse padrão pro resto
];

export default questions;
