<script>
	import '@styles/theme.css';
	import '@styles/animations.css';
	import '@fontsource-variable/georama';
	import '@fontsource/germania-one';
	import '@fontsource-variable/unbounded';

	import { onMount } from 'svelte';
	import { injectSpeedInsights } from '@vercel/speed-insights';
	import { inject } from '@vercel/analytics';
	import { PUBLIC_RESUME_FILENAME } from '$env/static/public';

	let { children } = $props();

	onMount(() => {
		injectSpeedInsights();
		inject();
	});

	let activeNavItem = $state('home');

	// Add event listener for <section> elements with an ID matching the href hash of the nav
	onMount(() => {
		const sections = document.querySelectorAll('section[id]');
		const navLinks = document.querySelectorAll('.nav-wrapper a');

		window.addEventListener('scroll', () => {
			const scrollPosition = window.scrollY + window.innerHeight;
			const pageHeight = document.documentElement.scrollHeight;

			if (scrollPosition === 0) {
				const firstSection = [...sections].at(0);
				const firstId = firstSection?.id;
				if (firstId) {
					console.log('manually activating at bottom:', firstId);
					activeNavItem = firstId;
				}
			}
			if (scrollPosition >= pageHeight - 1) {
				const lastSection = [...sections].at(-1);
				const lastId = lastSection?.id;
				if (lastId) {
					console.log('manually activating at bottom:', lastId);
					activeNavItem = lastId;
				}
			}
		});

		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						const id = entry.target.id;

						navLinks.forEach(link => {
							if (link.getAttribute('href') === `#${id}`) {
								console.log('changing to ', id);
								activeNavItem = id;
							}
						});
					}
				});
			},
			{ rootMargin: '-30% 0px -70% 0px' }
		);

		sections.forEach(section => {
			observer.observe(section);
		});
	});
</script>

<header class="fixed top-0 left-0 z-50 w-full backdrop-blur-xs">
	<div class="mx-auto max-w-7xl px-6">
		<div class="mx-auto flex w-full items-center justify-center px-4 py-5 lg:justify-between">
			<span class="font-germania-one flex-1 text-xl font-medium text-white lg:text-3xl">NG</span>
			<div class="nav-wrapper hidden w-full flex-1 items-center justify-center gap-4 lg:flex">
				<div class="bg-card-background flex items-center gap-6 rounded-2xl p-2">
					<nav>
						<ul class="flex w-fit flex-col gap-4 text-right text-sm text-white lg:flex-row lg:gap-2 lg:text-center">
							<li class="flex justify-end lg:justify-center">
								<a class:active={activeNavItem === 'home'} class="nav-item" href="#home">Home</a>
							</li>
							<li class="flex justify-end lg:justify-center">
								<a class:active={activeNavItem === 'about-me'} class="nav-item" href="#about-me">About Me</a>
							</li>
							<li class="flex justify-end lg:justify-center">
								<a class:active={activeNavItem === 'portfolio'} class="nav-item" href="#portfolio">Portfolio</a>
							</li>
							<li class="flex justify-end lg:justify-center">
								<a class:active={activeNavItem === 'success-stories'} class="nav-item" href="#success-stories"
									>Success Stories</a
								>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<div class="hidden flex-1 justify-end gap-2 sm:flex">
				<a
					href={PUBLIC_RESUME_FILENAME}
					title="Resume"
					target="_blank"
					class="btn bg-violet font-subtitle text-offwhite text-xs hover:bg-violet-600 md:text-sm"
				>
					View Resume
				</a>
			</div>
		</div>
	</div>
</header>

<main>
	{@render children()}
	<div class="dark-star fixed"></div>
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

	.nav-item {
		display: block;
		padding: 0.5rem 1rem;
		border-radius: 0.8rem;
		width: max-content;

		&.active {
			background: var(--color-violet);
		}
	}

	.dark-star {
		position: relative;

		&:after {
			content: '';
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: radial-gradient(
				circle at 90% 10%,
				var(--color-background-blue, #0f172a),
				var(--color-background, #04020a) 30%
			);
			z-index: -1;
		}
	}
</style>
