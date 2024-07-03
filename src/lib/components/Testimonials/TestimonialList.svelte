<script>
	import TestimonialCard from '@components/Testimonials/TestimonialCard.svelte';

	/**
	 * @typedef {Object} Testimonial
	 * @property {number} id - The ID of the testimonial.
	 * @property {string} name - The name of the person giving the testimonial.
	 * @property {string} role - The role of the person giving the testimonial.
	 * @property {string} company - The company the person works for.
	 * @property {string} image - The image URL of the person.
	 * @property {string} testimonial - The testimonial text.
	 */

	/**
	 * @typedef {Object} TestimonialsData
	 * @property {Testimonial[]} testimonials - An array of testimonials.
	 */

	import testimonialsData from './testimonial.json';
	import SectionHeading from '@components/SectionHeading.svelte';

	/** @type {TestimonialsData} */
	const data = testimonialsData;
</script>

<section class="py-20 lg:py-28" id="success-stories">
	<div class="mx-auto max-w-7xl space-y-12 px-4 text-center lg:space-y-16">
		<SectionHeading badge="Testimonials" heading="Success Stories" />
		{#if data?.testimonials}
			<div class="mx-auto space-y-8 md:max-w-[80%] md:space-y-16 xl:space-y-24 2xl:max-w-full">
				{#each data.testimonials as testimonial}
					<TestimonialCard {...testimonial} />
				{/each}
			</div>
		{/if}
	</div>
</section>
