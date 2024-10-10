<script lang="ts">
	import { PortableText } from '@portabletext/svelte';

	type Props = {
		aboutContent: any;
		aboutStats: {
			title: string;
			value: string;
		}[];
	};

	let { aboutContent, aboutStats }: Props = $props();
</script>

<section id="about-me" class="relative z-[1] py-12 md:py-28">
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
			class="mt-20 mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-10 px-4 md:mt-36"
		>
			{#each aboutStats as stat}
				<div class="flex flex-1 flex-col items-center text-center">
					<span class="font-code text-4xl font-bold lg:text-5xl">{stat.title}</span>
					<span>{stat.value}</span>
				</div>
			{/each}
		</div>
	{/if}
</section>
