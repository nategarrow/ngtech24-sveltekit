export const projects = [
	{
		id: 1,
		title: 'Documenting the AI Boom',
		subtitle: 'something really cool I did for Deepgram. AI Apps, Glossary, Optimization, etc.',
		client: 'Deepgram',
		stats: [
			{
				id: 'stat-1',
				label: 'Total AI Apps',
				value: '4000+',
			},
			{
				id: 'stat-2',
				label: 'Years on the Project',
				value: '2',
			},
		],
		featuredImage: '',
		link: 'https://deepgram.com/',
	},
	{
		id: 2,
		title: 'Semgrep',
		subtitle:
			'something really cool I did for Semgrep. Site rebuild, refactor from Styled Components to Tailwind, etc.',
		client: 'Semgrep',
		stats: [
			{
				id: 'stat-1',
				label: 'Successful Product Launches',
				value: '4',
			},
			{
				id: 'stat-2',
				label: 'Duration of Contract',
				value: '2 years',
			},
		],
		featuredImage: '',
		link: 'https://semgrep.dev/',
	},
	{
		id: 3,
		title: 'Arcesium',
		subtitle:
			'something really cool I did for Arcesium. Tech lead of 3 contractors with a tight deadline, launched on time with continued support, etc.',
		client: 'Arcesium',
		stats: [
			{
				id: 'stat-1',
				label: 'Stat 1',
				value: 'Value 1',
			},
			{
				id: 'stat-2',
				label: 'Stat 2',
				value: 'Value 2',
			},
		],
		featuredImage: '',
		link: 'https://www.arcesium.com/',
	},
] as const;

export type ProjectsProps = (typeof projects)[number];
