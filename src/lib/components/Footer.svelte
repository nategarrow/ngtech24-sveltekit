<footer class="py-12">
	<div class="relative mx-auto flex max-w-5xl justify-between items-center px-4">
		<span class="text-background stretch-left z-10 block max-w-max flex-1 py-3 px-4"
			>Made with {`<3`} &amp; SvelteKit + Sanity</span
		>
		<div class="flex flex-1 justify-end">Stay Curious {`:)`}</div>
	</div>
</footer>

<style>
	.stretch-left {
		&:before {
			content: '';
			position: absolute;
			height: 100%;
			width: 50vw;
			left: 50%;
			top: 0;
			transform: translateX(-50vw);
			background: var(--color-blue);
			border-radius: 0 2rem 2rem 0;
			z-index: -1;
		}
	}
</style>
