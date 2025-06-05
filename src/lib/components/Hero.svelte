<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import { faReact } from '@awesome.me/kit-7afeb9cb5d/icons/classic/brands';

	const { heroContent } = $props();
</script>

<section class="hero-gradient-dark center-content relative pt-40 pb-32 md:pb-28 lg:pt-64">
	<div class="relative z-10 w-full max-w-5xl px-3">
		<div class="mx-auto grid auto-rows-min grid-cols-1 items-center gap-y-4">
			<div class="flex flex-col items-center justify-center">
				<div class="aspect-square w-24 overflow-hidden rounded-full bg-gray-300 md:w-28">
					<img src="/images/profile-photo.jpg" alt="Nathan Garrow" />
				</div>
			</div>
			<div class="mb-6 text-center">
				<h1 class="flex flex-col font-medium text-transparent">
					<span class="gradient-text font-germania-one text-3xl tracking-widest md:text-5xl xl:text-7xl"
						>Nate Garrow</span
					>
				</h1>
				<span class="font-subtitle gradient-text text-2xl md:text-3xl lg:text-4xl">Senior Frontend Web Developer</span>
			</div>

			<div class="mx-auto max-w-lg flex-1 space-y-6 text-center">
				<div class="text-md w-full max-w-prose leading-snug xl:text-xl">
					{#if heroContent}
						<PortableText value={heroContent} />
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.gradient-text {
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		line-height: 1.15;
	}
	.gradient-text {
		background-image: linear-gradient(to bottom, var(--color-offwhite) 10%, var(--color-white) 35%, var(--color-slate));
	}
	.hero-gradient-dark {
		position: relative;

		&:after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: radial-gradient(circle at 90% 10%, var(--color-background-blue), var(--color-background) 30%);
			z-index: -1;
		}
	}
</style>
