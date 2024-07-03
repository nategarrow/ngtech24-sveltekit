<script>
	import '@styles/theme.css';
	import '@styles/animations.css';
	import '@fontsource-variable/georama';
</script>

<header class="announcement-bar">
	<div class="font-code mx-auto max-w-6xl py-1 px-4 text-center text-sm">
		Pardon the mess. Website under construction.
	</div>
</header>

<main>
	<slot />
</main>

<style>
	.announcement-bar {
		position: fixed;
		z-index: 100;
		top: 0;
		width: 100%;
		background: linear-gradient(to right, var(--color-red) 25%, var(--color-purple));
	}
</style>
