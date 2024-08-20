<script>
	import '@styles/theme.css';
	import '@styles/animations.css';
	import '@fontsource-variable/georama';
</script>

<!-- <header class="announcement-bar">
	<div class="font-code mx-auto max-w-5xl py-1 px-4 text-center text-sm">
		Pardon the mess. Website under construction.
	</div>
</header> -->

<header class="w-full">
	<div class="gradient-border-bottom max-w-6xl mx-auto">
		<div class="py-5 max-w-5xl w-full flex justify-between mx-auto px-4 items-center">
			<span class="text-white text-lg font-medium lg:text-xl tracking-wider font-code">Nate Garrow</span>
			<nav class="hidden md:block">
				<ul class="text-white text-sm flex gap-4 lg:gap-8">
					<li><a href="#about" class="hover:text-blue-200 focus-visible:text-blue-200">About Me</a></li>
					<li><a href="#testimonials" class="hover:text-blue-200 focus-visible:text-blue-200">Success Stories</a></li>
				</ul>
			</nav>
		</div>
	</div>
</header>

<main>
	<slot />
</main>

<style>
	/* .announcement-bar {
		position: fixed;
		z-index: 100;
		top: 0;
		width: 100%;
		background: linear-gradient(to right, var(--color-orange), var(--color-orange-light), var(--color-blue));
	} */

	.gradient-border-bottom {
		position: relative;

		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 1px;
			background: linear-gradient(
				to right,
				var(--color-orange-0),
				var(--color-orange) 20%,
				var(--color-orange) 80%,
				var(--color-orange-0)
			);
		}
	}
</style>
