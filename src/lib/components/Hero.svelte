<script lang="ts">
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import { faReact } from '@awesome.me/kit-7afeb9cb5d/icons/classic/brands';

	import { cva } from 'cva';
	import BrandToken from '@lib/molecules/BrandToken.svelte';

	type Props = {
		eyebrowText?: string;
		titleTop?: string;
		titleBottom?: string;
		descriptionText?: string;
		children: any;
	};
	const { eyebrowText, titleTop, titleBottom, descriptionText, children }: Props = $props();
	let activeGradient: 'default' | 'svelte' | 'react' | 'gatsby' = $state('default');

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

{#snippet eyebrow(eyebrowText)}
	<span slot="eyebrow" class="font-code text-slate text-sm tracking-widest sm:text-lg xl:text-xl">{eyebrowText}</span>
{/snippet}

{#snippet title(titleTextTop, titleTextBottom)}
	<h1 slot="title" class="flex flex-col font-medium text-transparent">
		<span class="title-span gradient-text text-2xl sm:text-4xl">{titleTextTop}</span>
		<span class="title-span gradient-text relative text-4xl sm:text-5xl lg:-top-3 xl:text-7xl">
			{titleTextBottom}
		</span>
	</h1>
{/snippet}

{#snippet description(descriptionText)}
	<div class="text-md max-w-2xl leading-tight xl:max-w-4xl xl:text-lg">
		{@html descriptionText}
	</div>
{/snippet}

<section class={heroClass({ gradient: activeGradient })}>
	<div class="relative z-10 mx-auto max-w-6xl px-3 text-center">
		<div class="space-y-6">
			{@render eyebrow(eyebrowText)}
			<!-- <slot name="eyebrow" />
			<slot name="title" />
			<slot name="description" /> -->
			{@render title(titleTop, titleBottom)}

			{@render description(descriptionText)}

			<!-- <slot /> -->
			{@render children()}
		</div>
	</div>
	<div class="absolute inset-0 z-[2] size-full" aria-hidden="true">
		<BrandToken
			name="react"
			onclick={() => (activeGradient = 'react')}
			position="top-[8%] left-[20%] md:top-[10%]"
			size="sm"
			rotate="rotate-5"
		/>
		<BrandToken
			name="svelte"
			onclick={() => (activeGradient = 'svelte')}
			position="top-[20%] left-[5%] md:top-[35%]"
			size="lg"
			rotate="-rotate-2"
		/>
		<BrandToken
			icon="nextjs"
			onclick={() => (activeGradient = 'default')}
			name="nextjs"
			position="top-[85%] left-[10%] md:top-[75%]"
			size="sm"
			rotate="-rotate-12"
		/>
		<BrandToken
			icon="gatsby"
			onclick={() => (activeGradient = 'gatsby')}
			name="gatsby"
			position="top-[15%] right-[30%] md:top-[6%]"
			size="xs"
			rotate="-rotate-12"
		/>
		<BrandToken
			icon="svelte"
			onclick={() => (activeGradient = 'svelte')}
			name="svelte"
			position="top-[83%] right-[38%] md:top-[13%] md:right-[18%]"
			size="sm"
			rotate="rotate-12"
		/>
		<BrandToken
			icon="nextjs"
			onclick={() => (activeGradient = 'default')}
			name="nextjs"
			position="top-[12%] right-[8%] md:top-[30%]"
			size="md"
			rotate="rotate-8"
		/>
		<BrandToken
			icon="react"
			onclick={() => (activeGradient = 'react')}
			name="react"
			position="top-[90%] right-[10%] md:top-[70%]"
			size="sm"
			rotate="-rotate-6"
		/>
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

	.title-span {
		position: relative;
		display: inline-block;
	}
	.gradient-text {
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;

		background-image: linear-gradient(to bottom, var(--color-offwhite) 10%, var(--color-white) 35%, var(--color-slate));
		line-height: 1.15;
	}
</style>
