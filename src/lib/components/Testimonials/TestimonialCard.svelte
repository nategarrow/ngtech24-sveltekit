<script lang="ts">
	import type { TestimonialType } from '@lib/types/schema';
	import { PortableText } from '@portabletext/svelte';

	const { id, name, role, company, image, quote }: TestimonialType = $props();
</script>

<div id={id || ''} class="autoBlur testimonial-card p-3 md:p-8 xl:p-16">
	<div class="image-wrapper size-24 bg-white lg:size-32"></div>
	<div class="space-y-4 md:pl-14 lg:space-y-6 xl:pl-8">
		<p class="flex flex-col gap-4 text-xl md:flex-row md:items-end">
			<span class="font-medium tracking-wider text-white">{name}</span>
			<span class="font-code text-slate align-bottom text-sm">{role}, {company}</span>
		</p>
		{#if quote}
			<div class="whitespace-pre-line text-lg font-normal leading-relaxed tracking-wide">
				<PortableText value={quote} />
			</div>
		{/if}
	</div>
</div>

<style>
	.testimonial-card {
		position: relative;
		background-image: linear-gradient(to bottom right, var(--color-card-background), var(--color-background));
		border: 4px solid var(--color-blue-light);
		border-radius: 28px;
		text-align: left;

		@media (width >= 48rem) {
			&:nth-child(2n + 1) {
				transform: translateX(-5%);
			}
			&:nth-child(2n) {
				transform: translateX(5%);
			}
		}
	}

	.image-wrapper {
		border-radius: 50%;
		overflow: hidden;
		margin-bottom: 2rem;

		@media (min-width: 768px) {
			position: absolute;
			top: 0;
			left: 0;
			transform: translate(-50%, -50%);
			outline: 12px solid var(--color-background);
		}
	}
</style>
