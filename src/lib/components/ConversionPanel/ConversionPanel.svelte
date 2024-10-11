<section class="bg-gradient -mt-96 min-h-[800px] py-12">
	<div class="mx-auto max-w-5xl px-4"></div>
</section>

<style>
	.bg-gradient {
		position: relative;

		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 50%;
			background: linear-gradient(to top, var(--color-orange-light-40), var(--color-orange-light) 5%, transparent);
			z-index: -1;
		}
	}
</style>
