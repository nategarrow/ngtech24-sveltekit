<script>
	import '@styles/theme.css';
	import '@styles/animations.css';
	import '@fontsource-variable/georama';

	import { onMount } from 'svelte';
	import { injectSpeedInsights } from '@vercel/speed-insights';
	import { inject } from '@vercel/analytics';

	import Icon from 'svelte-awesome/components/Icon.svelte';
	import { faGithub, faLinkedin } from '@awesome.me/kit-7afeb9cb5d/icons/classic/brands';

	onMount(() => {
		injectSpeedInsights();
		inject();
	});
</script>

<header class="w-full">
	<div class="gradient-border-bottom mx-auto max-w-7xl px-6">
		<div class="mx-auto flex w-full max-w-5xl items-center justify-between py-5 px-4">
			<div class="nav-wrapper flex w-full items-center justify-between gap-4">
				<div class="flex items-center gap-6">
					<span class="text-lg font-medium text-white lg:text-xl">NG</span>
					<nav class="hidden border-l border-l-white pl-6 md:block">
						<ul class="flex gap-4 text-sm text-white lg:gap-8">
							<li><a href="#about-me">About Me</a></li>
							<li>
								<a href="#success-stories">Success Stories</a>
							</li>
						</ul>
					</nav>
				</div>
				<div class="socials row-start-2 flex justify-center gap-2">
					<a href="https://linkedin.com/in/nategarrow" title="Linkedin" class="social-link">
						<Icon data={faLinkedin} class="size-9 px-2" />
					</a>
					<a href="https://github.com/nategarrow" title="GitHub" class="social-link">
						<Icon data={faGithub} class="size-9 px-2" />
					</a>
				</div>
			</div>
		</div>
	</div>
</header>

<main>
	<slot />
</main>

<style>
	.gradient-border-bottom {
		position: relative;

		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0%;
			width: 100%;
			height: 1px;
			background: linear-gradient(
				to right,
				var(--color-orange-0),
				var(--color-orange) 20%,
				var(--color-orange) 80%,
				var(--color-orange-0)
			);

			@media (min-width: 1199px) {
				left: -5%;
				width: 110%;
			}
		}
	}

	.nav-wrapper a {
		color: var(--color-offwhite);
		transition: color 0.2s ease-in-out;

		&:hover,
		&:focus-visible {
			color: var(--color-blue-200);
		}
	}
</style>
