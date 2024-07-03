<section class="hero-gradient center-content min-h-svh pt-32 pb-16 md:min-h-[80svh] lg:pt-24 lg:pb-20 xl:pt-32">
	<div class="mx-auto max-w-6xl px-3 text-center">
		<div class="space-y-6">
			<slot name="eyebrow" />
			<slot name="title" />
			<slot name="description" />

			<slot />
		</div>
	</div>
</section>

<style>
	.hero-gradient {
		background-image: linear-gradient(
			to bottom,
			var(--color-card-background-0),
			var(--color-card-background) 90%,
			var(--color-card-background-0)
		);
	}
</style>
