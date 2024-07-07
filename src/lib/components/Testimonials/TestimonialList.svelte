<script lang="ts">
	import TestimonialCard from '@components/Testimonials/TestimonialCard.svelte';
	import type { TestimonialType } from '@lib/types/schema';

	export let testimonials: TestimonialType[] = [];
	console.log('testimonials:', testimonials);

	import SectionHeading from '@components/SectionHeading.svelte';
</script>

<section class="py-20 lg:py-28" id="success-stories">
	<div class="mx-auto max-w-7xl space-y-12 px-4 text-center lg:space-y-16">
		<SectionHeading badge="Testimonials" heading="Success Stories" />
		{#if testimonials}
			<div class="mx-auto space-y-8 md:max-w-[80%] md:space-y-16 xl:space-y-24 2xl:max-w-full">
				{#each testimonials as testimonial}
					<TestimonialCard {...testimonial} />
				{/each}
			</div>
		{/if}
	</div>
</section>
