<script>
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import { faReact } from '@awesome.me/kit-7afeb9cb5d/icons/classic/brands';
	import { cva } from 'cva';

	/**
	 * @typedef {'default' | 'svelte' | 'react' | 'gatsby'} ActiveGradient
	 * @type {ActiveGradient}
	 */
	let activeGradient = $state('default');

	const heroClass = cva('center-content relative min-h-svh pt-32 pb-16 md:min-h-[95svh] lg:pt-24 lg:pb-20 xl:pt-32', {
		variants: {
			gradient: {
				default: 'hero-gradient-default',
				svelte: 'hero-gradient-svelte',
				react: 'hero-gradient-react',
				gatsby: 'hero-gradient-gatsby',
			},
		},

		defaultVariants: {
			gradient: 'default',
		},
	});
</script>

<section class={heroClass({ gradient: activeGradient })}>
	<div class="relative z-10 mx-auto max-w-6xl px-3 text-center">
		<div class="space-y-6">
			<slot name="eyebrow" />
			<slot name="title" />
			<slot name="description" />

			<slot />
		</div>
	</div>
	<div class="absolute inset-0 z-[2] size-full" aria-hidden="true">
		<button
			type="button"
			onclick={() => (activeGradient = 'react')}
			class="icon shadow-blue/20 text-blue hover:text-blue-light top-[8%] left-[20%] size-16 rotate-5 shadow-xl md:top-[10%] lg:size-24"
		>
			<Icon data={faReact} class="size-full" />
		</button>
		<button
			type="button"
			onclick={() => (activeGradient = 'svelte')}
			class="icon shadow-orange/20 text-orange hover:text-orange-light top-[20%] left-[5%] size-16 -rotate-2 shadow-xl md:top-[35%] lg:size-28"
		>
			<i class="fa-kit fa-svelte !size-full"></i>
		</button>
		<button
			type="button"
			onclick={() => (activeGradient = 'default')}
			class="icon shadow-offwhite/20 text-offwhite top-[85%] left-[10%] size-16 -rotate-12 shadow-xl hover:text-white md:top-[75%] lg:size-20"
		>
			<i class="fa-kit fa-nextjs !size-full"></i>
		</button>
		<button
			type="button"
			onclick={() => (activeGradient = 'gatsby')}
			class="icon shadow-purple/20 text-purple hover:text-purple-light top-[15%] right-[30%] size-14 -rotate-3 opacity-65 shadow-xl md:top-[6%]"
		>
			<i class="fa-kit fa-gatsby !size-full"></i>
		</button>
		<button
			type="button"
			onclick={() => (activeGradient = 'svelte')}
			class="icon shadow-orange/20 text-orange hover:text-orange-light top-[83%] right-[38%] size-16 rotate-12 shadow-xl md:top-[13%] md:right-[18%] lg:size-20"
		>
			<i class="fa-kit fa-svelte !size-full"></i>
		</button>
		<button
			type="button"
			onclick={() => (activeGradient = 'default')}
			class="icon text-offwhite top-[12%] right-[8%] size-16 -rotate-6 shadow-xl shadow-white/20 hover:text-white md:top-[30%] lg:size-24"
		>
			<i class="fa-kit fa-nextjs !size-full"></i>
		</button>
		<button
			type="button"
			onclick={() => (activeGradient = 'react')}
			class="icon shadow-blue/20 text-blue hover:text-blue-light top-[90%] right-[10%] size-16 rotate-8 shadow-xl md:top-[70%] lg:size-20"
		>
			<Icon data={faReact} class="size-full" />
		</button>
	</div>
</section>

<style>
	.hero-gradient-default {
		background-image: linear-gradient(
			to bottom,
			var(--color-card-background-0),
			var(--color-card-background) 90%,
			var(--color-card-background-0)
		);
	}
	.hero-gradient-svelte {
		background-image: linear-gradient(
			to bottom,
			var(--color-orange-0),
			var(--color-orange-40) 90%,
			var(--color-orange-0)
		);
	}
	.hero-gradient-react {
		background-image: linear-gradient(to bottom, var(--color-blue-0), var(--color-blue-40) 90%, var(--color-blue-0));
	}
	.hero-gradient-gatsby {
		background-image: linear-gradient(
			to bottom,
			var(--color-purple-0),
			var(--color-purple-40) 90%,
			var(--color-purple-0)
		);
	}

	.icon {
		position: absolute;
		transition: all 0.2s ease-in-out;
		border-radius: 8px;
		padding: 16px;
		background-color: var(--color-card-background);
		cursor: pointer;
		opacity: 0.3;

		@media (width >= 40rem) {
			opacity: 0.75;
		}

		@media (width >= 64rem) {
			opacity: 1;
		}
	}
</style>
