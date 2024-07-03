<script>
	import Badge from '@molecules/Badge.svelte';
	import TestimonialCard from '@components/Testimonials/TestimonialCard.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {string} [badge] - The optional badge string.
	 */

	/** @type {Props} */
	const { badge } = $props();

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

	/** @type {TestimonialsData} */
	const data = testimonialsData;
</script>

<section class="py-20 lg:py-28" id="success-stories">
	<div class="mx-auto max-w-7xl space-y-12 px-4 text-center lg:space-y-16">
		<!-- svelte-ignore slot_element_deprecated -->
		<div class="center-content space-y-3">
			{#if badge}
				<Badge label={badge} />
			{/if}
			<slot name="heading" />
			<slot name="subheading" />
		</div>
		{#if data?.testimonials}
			<div class="mx-auto space-y-8 md:max-w-[80%] md:space-y-16 xl:space-y-24 2xl:max-w-full">
				{#each data.testimonials as testimonial}
					<TestimonialCard {...testimonial} />
				{/each}
			</div>
		{/if}
	</div>
</section>
