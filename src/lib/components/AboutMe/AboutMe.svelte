<script lang="ts">
	import { onMount } from 'svelte';
	import { animate, inView } from 'motion';
	import { PortableText } from '@portabletext/svelte';

	type Props = {
		aboutContent: any;
		aboutStats: {
			title: string;
			value: string;
			valuePrefix?: string;
			valueSuffix?: string;
		}[];
	};

	let { aboutContent, aboutStats }: Props = $props();

	onMount(() => {
		const stats = document.querySelectorAll('.stat');

		if (!!Array.from(stats)?.length) {
			Array.from(stats).forEach((stat, i) => {
				const statCounterEl = stat.querySelector('.stat-counter') as HTMLElement;
				if (statCounterEl) {
					const endValue = Number(statCounterEl.getAttribute('data-value'));

					inView('#stats-list', () => {
						animate((progress: number) => (statCounterEl.innerHTML = Math.round(progress * endValue).toString()), {
							duration: 1.75,
							delay: i * 0.325,
							easing: [0.35, 0.79, 0.71, 1],
						});
					});
				}
			});
		}
	});
</script>

<section id="about-me" class="relative z-[1] py-12">
	<div class="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 md:flex-row lg:gap-10">
		<div class="w-full flex-1 space-y-2 text-center">
			<h2 class="text-2xl font-medium lg:text-4xl">About Me</h2>
			<div class="text-md mx-auto max-w-prose">
				{#if aboutContent}
					<PortableText value={aboutContent} />
				{/if}
			</div>
		</div>
	</div>
	{#if !!aboutStats?.length}
		<div
			id="stats-list"
			class="mt-20 mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-10 px-4 md:mt-24"
		>
			{#each aboutStats as stat}
				<div class="flex flex-1 flex-col items-center text-center">
					<span class="stat font-code flex text-4xl font-bold lg:text-5xl">
						<span>{stat?.valuePrefix || ''}</span>
						<span data-value={stat.value} class="stat-counter">0</span>
						<span>{stat?.valueSuffix || ''}</span>
					</span>
					<span>{stat.title}</span>
				</div>
			{/each}
		</div>
	{/if}
</section>
