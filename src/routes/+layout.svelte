<script>
	import '@styles/theme.css';
	import '@styles/animations.css';
	import '@fontsource-variable/georama';
</script>

<header class="w-full">
	<div class="gradient-border-bottom mx-auto max-w-6xl">
		<div class="mx-auto flex w-full max-w-5xl items-center justify-between py-5 px-4">
			<span class="font-code text-lg font-medium tracking-wider text-white lg:text-xl">Nate Garrow</span>
			<nav class="hidden md:block">
				<ul class="flex gap-4 text-sm text-white lg:gap-8">
					<li><a href="#about-me" class="hover:text-blue-200 focus-visible:text-blue-200">About Me</a></li>
					<li>
						<a href="#success-stories" class="hover:text-blue-200 focus-visible:text-blue-200">Success Stories</a>
					</li>
				</ul>
			</nav>
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
</style>
