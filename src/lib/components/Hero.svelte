<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import { faReact } from '@awesome.me/kit-7afeb9cb5d/icons/classic/brands';

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
			<div class="mb-6 text-center">
				<h1
					class="flex flex-col font-medium text-transparent"
					title="What does this mean? I don't know but it sounds cool!"
				>
					<span class="gradient-text text-3xl tracking-widest xl:text-6xl">Redefining the Frontend:</span>
					<span class="gradient-text text-2xl md:text-3xl lg:text-4xl"
						>Turning Visions into Vibrant Digital Experiences</span
					>
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
		<div class=" mt-16 mx-auto flex w-full max-w-5xl px-8 md:mt-24">
			<div class="icon-group flex w-full flex-wrap justify-around gap-x-2 gap-y-6 sm:gap-x-4 md:gap-8">
				<div
					class="border-blue-light icon text-blue shadow-blue/30 hover:text-blue-light size-16 rotate-5 border-4 bg-transparent p-3 shadow-xl md:size-28"
				>
					<Icon data={faReact} class="size-full" />
				</div>
				<div
					class="icon text-offwhite size-16 -rotate-15 border-4 border-white bg-transparent p-3 shadow-xl shadow-white/30 hover:text-white md:size-28"
				>
					<i class="fa-kit fa-nextjs !size-full"></i>
				</div>
				<div
					class="border-orange-light icon text-orange shadow-orange/30 hover:text-orange-light size-16 border-4 bg-transparent p-3 shadow-xl md:size-28"
				>
					<i class="fa-kit fa-svelte !size-full"></i>
				</div>
				<div
					class="border-orange-light icon text-orange shadow-orange/30 hover:text-orange-light size-16 rotate-25 border-4 bg-transparent p-3 shadow-xl md:size-28"
				>
					<img src="/images/sanity-icon.svg" alt="Sanity logo" class="size-full" />
				</div>
				<div
					class="border-blue-light icon text-blue shadow-blue/30 hover:text-blue-light size-16 -rotate-5 border-4 bg-transparent p-3 shadow-xl md:size-28"
				>
					<i class="fa-kit fa-tailwindcss !size-full"></i>
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
	.icon-group {
		padding-top: 1rem;
		padding-bottom: 3rem;
		opacity: 1;
		mask-image: linear-gradient(
			to right,
			var(--color-background-blue-0) 0%,
			var(--color-background-blue) 12.5%,
			var(--color-background-blue) 88.5%,
			var(--color-background-blue-0) 100%
		);
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
	.icon {
		transition: all 0.2s ease-in-out;
		border-radius: 8px;
		padding: 16px;
		background-color: var(--color-card-background);
		opacity: 0.3;

		@media (width >= 40rem) {
			opacity: 0.75;
		}

		@media (width >= 64rem) {
			opacity: 1;
		}
	}
</style>
