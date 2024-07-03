<script>
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import { faReact } from '@awesome.me/kit-7afeb9cb5d/icons/classic/brands';
</script>

<section
	class="hero-gradient center-content relative min-h-svh pt-32 pb-16 md:min-h-[80svh] lg:pt-24 lg:pb-20 xl:pt-32"
>
	<div class="absolute inset-0 z-[2] size-full">
		<div
			class="icon shadow-blue/20 text-blue hover:text-blue-light top-[5%] left-[25%] size-20 rotate-5 shadow-xl md:top-[10%] lg:size-24"
		>
			<Icon data={faReact} class="size-full" />
		</div>
		<div
			class="icon shadow-orange/20 text-orange hover:text-orange-light top-[25%] left-[7%] size-20 -rotate-2 shadow-xl md:top-[35%] lg:size-36"
		>
			<i class="fa-kit fa-svelte !size-full"></i>
		</div>
		<div
			class="icon shadow-offwhite/20 text-offwhite top-[80%] left-[12%] size-20 -rotate-12 shadow-xl hover:text-white md:top-[70%] lg:size-20"
		>
			<i class="fa-kit fa-nextjs !size-full"></i>
		</div>
		<div
			class="icon shadow-purple/20 text-purple hover:text-purple-light top-[15%] right-[42%] size-14 -rotate-3 opacity-65 shadow-xl md:top-[6%]"
		>
			<i class="fa-kit fa-gatsby !size-full"></i>
		</div>
		<div
			class="icon shadow-orange/20 text-orange hover:text-orange-light top-[75%] right-[26%] size-20 rotate-12 shadow-xl md:top-[13%] lg:size-24"
		>
			<i class="fa-kit fa-svelte !size-full"></i>
		</div>
		<div
			class="icon text-offwhite top-[10%] right-[10%] size-20 -rotate-6 shadow-xl shadow-white/20 hover:text-white md:top-[30%] lg:size-40"
		>
			<i class="fa-kit fa-nextjs !size-full"></i>
		</div>
		<div
			class="icon shadow-blue/20 text-blue hover:text-blue-light top-[85%] right-[10%] size-20 rotate-8 shadow-xl md:top-[65%] lg:size-24"
		>
			<Icon data={faReact} class="size-full" />
		</div>
	</div>
	<div class="relative z-10 mx-auto max-w-6xl px-3 text-center">
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

	.icon {
		position: absolute;
		transition: all 0.2s ease-in-out;
		border-radius: 8px;
		padding: 16px;
		background-color: var(--color-card-background);
		opacity: 0.3;

		@media (width >= 40rem) {
			opacity: 0.75;
		}

		@media (width >= 64rem) {
			opacity: 1;
		}
	}
</style>
