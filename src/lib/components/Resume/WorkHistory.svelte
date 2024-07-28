<script lang="ts">
	import type { JobType } from '@lib/types/schema';
	import SingleJob from './Components/SingleJob.svelte';

	type Props = {
		jobs: JobType[];
	};

	const { jobs }: Props = $props();
</script>

<div class="work-history space-y-8 lg:space-y-12">
	<h3 class="text-3xl font-medium lg:text-5xl">Work History</h3>
	<div class="work-list space-y-10 md:space-y-16">
		{#each jobs as job}
			<SingleJob {...job} />
		{/each}
	</div>
</div>
