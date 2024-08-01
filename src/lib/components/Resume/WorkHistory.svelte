<script lang="ts">
	import { client } from '@lib/sanity/client';
	import { jobQuery } from '@lib/sanity/queries';

	import type { JobType } from '@lib/types/schema';

	import SingleJob from './Components/SingleJob.svelte';

	let jobList: JobType[] = $state([]);

	const loadJobs = async () => {
		const newJobList = (await client.fetch(jobQuery)) || [];
		jobList = newJobList;
		console.log('jobList:', jobList);

		return newJobList;
	};

	loadJobs();
</script>

<div class="work-history space-y-8 lg:space-y-12">
	<h3 class="text-3xl font-medium lg:text-5xl">Work History</h3>
	<div class="work-list space-y-10 md:space-y-16">
		{#each jobList as job}
			<SingleJob {...job} />
		{/each}
	</div>
</div>
