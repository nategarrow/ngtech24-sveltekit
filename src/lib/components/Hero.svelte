<script lang="ts">
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import { faGithub, faLinkedin } from '@awesome.me/kit-7afeb9cb5d/icons/classic/brands';

	type Props = {
		eyebrowText: string;
		titleText: string;
		descriptionText: string;
	};
	const { eyebrowText, titleText, descriptionText }: Props = $props();
</script>

<section
	class="hero-gradient-dark center-content relative min-h-[50svh] pt-8 pb-32 md:pb-28 lg:min-h-[60svh] lg:pt-32 lg:pb-56"
>
	<div class="relative z-10 w-full max-w-5xl px-3">
		<div class="grid auto-rows-min grid-cols-1 items-end gap-y-4 md:grid-cols-2">
			<div class="col-span-1">
				<span class="gradient-text text-xl tracking-widest sm:text-3xl xl:text-4xl">
					{eyebrowText}
				</span>
				<h1 class="gradient-text flex flex-col text-5xl font-medium leading-none text-transparent lg:text-7xl">
					{titleText}
				</h1>
			</div>

			<div class="socials row-start-2 flex gap-4">
				<a href="https://linkedin.com/in/nategarrow" title="Linkedin" class="social-link">
					<Icon data={faLinkedin} class="size-8 px-2 lg:size-10" />
				</a>
				<a href="https://github.com/nategarrow" title="GitHub" class="social-link">
					<Icon data={faGithub} class="size-8 px-2 lg:size-10" />
				</a>
			</div>

			<div class="max-w-lg flex-1">
				<div class="text-md w-full leading-snug xl:max-w-4xl xl:text-xl">
					<p>{@html descriptionText}</p>
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

		background-image: linear-gradient(to bottom, var(--color-offwhite) 10%, var(--color-white) 35%, var(--color-slate));
		line-height: 1.15;
	}
	/* .hero-gradient, */
	.hero-gradient-dark {
		position: relative;

		&:after {
			content: '';
			position: absolute;
			top: -20%;
			left: 0;
			width: 100%;
			height: 120%;
			transform: skewY(-8deg);
			transform-origin: calc(calc(calc(100vw - 0px) / 2 - 1080px / 2) * 0.8);
			overflow: hidden;
			z-index: -1;
		}
	}
	/* .hero-gradient:after {
		background: linear-gradient(to bottom, #1b3168 10%, #b74618 95%, var(--color-background));
	} */

	.hero-gradient-dark:after {
		background: linear-gradient(
			to bottom,
			var(--color-blue-40),
			var(--color-card-background) 10%,
			var(--color-card-background) 40%,
			var(--color-orange-light-40) 95%,
			var(--color-background)
		);
	}

	.social-link {
		color: var(--color-orange-light-40);
		border-top: 1px solid white;
		padding-block: 0.5rem;
		transition:
			color 0.15s ease-in-out,
			border-color 0.15s ease-in-out;

		&:hover,
		&:focus-visible {
			color: var(--color-blue-light);
			border-color: var(--color-orange-light);
			color: var(--color-blue-light);
			outline: none;
		}
	}
</style>
