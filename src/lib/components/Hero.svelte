<script lang="ts">
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import { faGithub, faLinkedin, faReact } from '@awesome.me/kit-7afeb9cb5d/icons/classic/brands';

	type Props = {
		eyebrowText: string;
		titleText: string;
		descriptionText: string;
	};
	const { eyebrowText, titleText, descriptionText }: Props = $props();
</script>

{#snippet salutation(eyebrowText: string)}
	<span class="gradient-text text-xl tracking-widest sm:text-3xl xl:text-4xl">
		{eyebrowText}
	</span>
{/snippet}

{#snippet title(title: string)}
	<h1 class="flex flex-col font-medium text-5xl lg:text-7xl text-transparent gradient-text leading-none">
		{title}
	</h1>
{/snippet}

{#snippet description(descriptionText: string)}
	<div class="text-md w-full leading-snug xl:max-w-4xl xl:text-xl">
		<p>{@html descriptionText}</p>
	</div>
{/snippet}

<section
	class="hero-gradient-dark center-content relative min-h-[50svh] pt-8 pb-32 md:pb-28 lg:min-h-[60svh] lg:pt-32 lg:pb-56"
>
	<div class="relative z-10 max-w-6xl px-3 w-full">
		<div class="flex flex-col gap-2 md:gap-8 md:flex-row md:justify-between md:items-center">
			<div class="flex flex-col flex-1">
				{@render salutation(eyebrowText)}

				{@render title(titleText)}

				<div class="socials flex gap-4 mt-6">
					<a
						href="https://linkedin.com/in/nategarrow"
						title="Linkedin"
						class="border-t border-white pt-1 py-2 hover:border-orange-light"
					>
						<Icon data={faLinkedin} class="text-blue-200 size-8 lg:size-10 px-2" />
					</a>
					<a
						href="https://github.com/nategarrow"
						title="GitHub"
						class="border-t border-white pt-1 py-2 hover:border-orange-light"
					>
						<Icon data={faGithub} class="text-blue-200 size-8 lg:size-10 px-2" />
					</a>
				</div>
			</div>

			<div class="max-w-lg flex-1">
				{@render description(descriptionText)}
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
	.hero-gradient,
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
	.hero-gradient:after {
		background: linear-gradient(to bottom, #1b3168 10%, #b74618 95%, var(--color-background));
	}

	.hero-gradient-dark:after {
		background: linear-gradient(
			to bottom,
			var(--color-card-background) 10%,
			var(--color-orange-40) 95%,
			var(--color-background)
		);
	}
</style>
