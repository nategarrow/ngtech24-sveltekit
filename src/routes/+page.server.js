import { jobQuery, skillsQuery, testimonialQuery } from '$lib/sanity/queries';
import { client } from '@lib/sanity/client.js';

export const load = async () => {
	const jobs = await client.fetch(jobQuery);
	const testimonials = await client.fetch(testimonialQuery);
	const skillsList = await client.fetch(skillsQuery);

	return {
		testimonials,
		jobs,
		skillsList,
	};
};
