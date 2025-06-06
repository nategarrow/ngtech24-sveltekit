<script lang="ts">
	import { onMount } from 'svelte';
	import { animate, inView } from 'motion';
	import { PortableText } from '@portabletext/svelte';

	import ProfileCard from '@components/AboutMe/ProfileCard.svelte';

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
					console.log(' endValue:', endValue);

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

<section id="about-me" class="relative z-[1] pt-14 pb-24 lg:pt-24 lg:pb-36">
	<div class="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 md:pt-20 lg:flex-row lg:gap-10 lg:pt-40">
		<div class="grid-rows-auto grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
			<h2 class="font-title text-3xl font-medium lg:text-4xl">About Me</h2>
			<div class="col-start-1 row-start-3 content-end lg:row-start-2"><ProfileCard /></div>
			<div class=" w-full flex-1 space-y-2 lg:row-span-2">
				<div class="text-md mx-auto">
					{#if aboutContent}
						<PortableText value={aboutContent} />
					{/if}
				</div>
				{#if !!aboutStats?.length}
					<div
						id="stats-list"
						class="mx-auto mt-10 flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-10 lg:mt-12"
					>
						{#each aboutStats as stat}
							<div class="flex flex-1 flex-col">
								<span class="stat font-code flex text-4xl font-bold lg:text-5xl">
									<span>{stat?.valuePrefix || ''}</span>
									<span data-value={stat.value} class="stat-counter">{stat.value}</span>
									<span>{stat?.valueSuffix || ''}</span>
								</span>
								<span class="font-subtitle text-orange-white text-base">{stat.title}</span>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>
