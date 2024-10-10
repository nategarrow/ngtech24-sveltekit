import type { InputValue } from '@portabletext/svelte';
export type JobType = {
	id?: string;
	position: string;
	company?: string;
	startDate: string;
	endDate?: string;
	description?: InputValue;
	note?: string;
};

export type TestimonialType = {
	id?: string;
	name: string;
	role: string;
	company: string;
	image: string;
	quote: InputValue;
};

export type SkillsType = {
	name: string;
	skills?: string[];
};
