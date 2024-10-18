<script lang="ts">
	import type { TestimonialType } from '@lib/types/schema';
	import { PortableText } from '@portabletext/svelte';

	const { id, name, role, company, imageUrl, quote }: TestimonialType = $props();
</script>

<div id={id || ''} class="autoBlur testimonial-card p-3 md:p-8 xl:p-16">
	<div class="space-y-4 lg:space-y-6">
		{#if quote}
			<div class="quote-text whitespace-pre-line text-lg font-normal leading-relaxed tracking-wide">
				<PortableText value={quote} />
			</div>
		{/if}
		<div class="flex items-center gap-4">
			<div class="image-wrapper grid size-12 place-items-center overflow-hidden rounded-full bg-white p-3 lg:size-16">
				{#if imageUrl}
					<img src={imageUrl} alt={name} class="size-full" />
				{/if}
			</div>
			<p class="flex flex-col gap-2 text-xl">
				<span class="font-medium tracking-wider text-white">{name}</span>
				<span class="font-code text-slate align-bottom text-sm">{role}, {company}</span>
			</p>
		</div>
	</div>
</div>

<style>
	.testimonial-card {
		flex: 1 45%;
	}

	.quote-text {
		color: var(--color-offwhite);
	}

	:global(.quote-text strong) {
		color: var(--color-orange-white);
	}
</style>
