<script lang="ts">
	import { client } from '@lib/sanity/client';
	import { testimonialQuery } from '@lib/sanity/queries';

	import type { TestimonialType } from '@lib/types/schema';

	import SectionHeading from '@components/SectionHeading.svelte';
	import TestimonialCard from '@components/Testimonials/TestimonialCard.svelte';

	let testimonials: TestimonialType[] = $state([]);
	const loadTestimonials = async () => {
		const newTestimonialsList = (await client.fetch(testimonialQuery)) || [];
		testimonials = newTestimonialsList;

		return newTestimonialsList;
	};

	loadTestimonials();
</script>

<section id="success-stories" class="py-20 lg:py-28">
	<div class="mx-auto max-w-7xl space-y-12 px-4 text-center lg:space-y-16">
		<SectionHeading badge="Testimonials" heading="Success Stories" />
		{#if testimonials}
			<div class="mx-auto space-y-8 md:max-w-[80%] md:space-y-16 xl:space-y-24 2xl:max-w-5xl">
				{#each testimonials as testimonial}
					<TestimonialCard {...testimonial} />
				{/each}
			</div>
		{/if}
	</div>
</section>
