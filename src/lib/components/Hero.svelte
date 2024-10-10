<script lang="ts">
	import { PortableText } from '@portabletext/svelte';

	const { heroContent } = $props();
</script>

<section
	class="hero-gradient-dark center-content relative min-h-[50svh] pt-8 pb-32 md:pb-28 lg:min-h-[60svh] lg:pt-32 lg:pb-56"
>
	<div class="relative z-10 w-full max-w-5xl px-3">
		<div class="mx-auto grid auto-rows-min grid-cols-1 items-center gap-y-4">
			<div class="flex flex-col items-center justify-center">
				<div class="aspect-square w-24 overflow-hidden rounded-full bg-gray-300 md:w-28">
					<img src="/images/profile-photo.jpg" alt="Nathan Garrow" />
				</div>
				<div class="relative -top-4 rounded-md bg-gray-300 py-0.5 px-2 text-center md:py-1 md:px-3">
					<span class="font-code gradient-text-dark text-md font-medium tracking-widest sm:text-xl xl:text-2xl">
						Nate Garrow
					</span>
				</div>
			</div>
			<div class="text-center">
				<h1
					class="flex flex-col font-medium text-transparent"
					title="What does this mean? I don't know but it sounds cool!"
				>
					<span class="gradient-text text-xl tracking-widest sm:text-3xl xl:text-4xl">Refining the web</span>
					<span class="gradient-text text-5xl lg:text-6xl">One pixel at a time</span>
				</h1>
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
	.gradient-text-dark,
	.gradient-text {
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		line-height: 1.15;
	}
	.gradient-text {
		background-image: linear-gradient(to bottom, var(--color-offwhite) 10%, var(--color-white) 35%, var(--color-slate));
	}
	.gradient-text-dark {
		background-image: linear-gradient(to bottom, var(--color-card-background) 10%, var(--color-background));
	}
	.hero-gradient-dark {
		position: relative;

		&:after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 120%;
			background: linear-gradient(
				to bottom,
				var(--color-background) 5%,
				var(--color-background-blue) 70%,
				var(--color-background) 100%
			);
			z-index: -1;
		}
	}
</style>
