<script>
	import '@styles/theme.css';
	import '@styles/animations.css';
	import '@fontsource-variable/georama';
	import '@fontsource/germania-one';
	import '@fontsource-variable/unbounded';

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

<header class="absolute top-0 left-0 w-full">
	<div class="styled-border-orange-bottom mx-auto max-w-7xl px-6">
		<div class="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-5">
			<div class="nav-wrapper flex w-full items-center justify-between gap-4">
				<div class="flex items-center gap-6">
					<span class="font-germania-one text-xl font-medium text-white lg:text-2xl">NG</span>
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
	<div class="super-circ"></div>
</main>

<style>
	.nav-wrapper a {
		color: var(--color-offwhite);
		transition: color 0.2s ease-in-out;

		&:hover,
		&:focus-visible {
			color: var(--color-blue-200);
		}
	}

	.super-circ {
		position: absolute;
		top: 550px;
		left: 0;
		background: radial-gradient(
			350% 220% at 50% 100%,
			var(--color-background) 28%,
			#2885f637 35%,
			#5500ff47 41%,
			#ffffffc8 42%,
			var(--color-card-background-0) 44%
		);
		width: 100%;
		height: 50svh;
		z-index: -1;

		@media (min-width: 768px) {
			top: min(800px, 50vh);
			background: radial-gradient(
				285% 220% at 50% 100%,
				var(--color-background) 28%,
				#2885f637 35%,
				#5500ff47 41%,
				#ffffffc8 42%,
				var(--color-card-background-0) 44%
			);
		}
	}
</style>
