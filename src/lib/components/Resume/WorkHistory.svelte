<script lang="ts">
	import SingleJob from './SingleJob.svelte';
	import { client } from '@lib/sanity/client.js';
	import { jobQuery } from '$lib/sanity/queries';

	import type { JobType } from '@lib/types/schema';

	let jobList: JobType[] = $state([]);

	$effect(() => {
		const loadJobs = async () => {
			const newJobList = (await client.fetch(jobQuery)) || [];

			return newJobList;
		};

		console.log('effect');
		jobList = loadJobs();
	});
</script>

<div class="work-history space-y-8 lg:space-y-12">
	<h3 class="text-3xl font-medium lg:text-5xl">Work History</h3>
	<div class="work-list space-y-10 md:space-y-16">
		<!-- {#each jobList as job}
			<SingleJob {...job} />
		{/each} -->
	</div>
</div>
