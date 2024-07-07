import { jobQuery, testimonialQuery } from '$lib/sanity/queries';
import { client } from '@lib/sanity/client.js';

export const load = async () => {
	const jobs = await client.fetch(jobQuery);
	const testimonials = await client.fetch(testimonialQuery);

	return {
		jobs,
		testimonials,
	};
};
