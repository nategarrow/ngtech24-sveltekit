<script lang="ts">
	import { animate, scroll } from 'motion';

	import HighlightCard from '@components/Portfolio/HighlightCard.svelte';
	import Trustbar from '@components/Portfolio/Trustbar.svelte';
	import { projects } from '@components/Portfolio/projects';
	import { onMount } from 'svelte';

	onMount(() => {
		const projectItems = document.querySelectorAll('.project-card');
		if (projectItems) {
			Array.from(projectItems).forEach(item => {
				const element = item as HTMLElement;
				scroll(animate(element, { scale: [1, 1, 1, 0.95] }), {
					target: item,
				});
			});
		}
	});
</script>

<section class="py-16">
	<div class="mx-auto max-w-7xl space-y-28 md:space-y-32">
		<div id="project-list" class="flex flex-col gap-16 px-16 md:gap-32">
			{#each projects as project, idx}
				<HighlightCard {...project} i={idx + 1} />
			{/each}
		</div>
	</div>
	<Trustbar />
</section>
