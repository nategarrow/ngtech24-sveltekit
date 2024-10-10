<script lang="ts">
	import type { TestimonialType } from '@lib/types/schema';

	import TestimonialCard from '@components/Testimonials/TestimonialCard.svelte';

	const { testimonials }: { testimonials: TestimonialType[] } = $props();
</script>

<div id="success-stories" class="relative z-[1]">
	<div class="mx-auto max-w-7xl space-y-12 px-4 lg:space-y-16">
		{#if testimonials}
			<div class="mx-auto flex flex-wrap gap-6">
				{#each testimonials as testimonial}
					<TestimonialCard {...testimonial} />
				{/each}
			</div>
		{/if}
	</div>
</div>
