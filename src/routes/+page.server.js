import { jobQuery, testimonialQuery } from '$lib/sanity/queries';

export const load = async event => {
	const { loadQuery } = event.locals;

	const jobInitial = await loadQuery(jobQuery);
	const testimonialInitial = await loadQuery(testimonialQuery);

	return {
		jobInitial,
		testimonialInitial,
		options: { jobs, testimonials },
	};
};
