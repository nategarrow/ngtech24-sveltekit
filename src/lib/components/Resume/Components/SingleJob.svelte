<script lang="ts">
	import type { JobType } from '@lib/types/schema';
	import { stringToKebabCase } from '@lib/utils/textFunctions';

	let { id, position, company, startDate, endDate, note }: JobType = $props();
	const startYear = startDate && new Date(startDate).getFullYear();
	const endYear = endDate && new Date(endDate).getFullYear();

	const duration = startYear && endYear ? `${startYear} - ${endYear}` : `${startYear} - Present`;
</script>

<div
	id={stringToKebabCase(company)}
	class="work-item grid grid-cols-2 gap-2 border-b border-b-slate-300/50 py-4 px-2 md:px-6 lg:grid-cols-[3fr_1fr]"
>
	<h4 class="col-span-2 text-xl text-white md:col-span-1 md:col-start-1">{position}</h4>
	{#if note}
		<p class="font-code row-start-2 text-sm text-slate-400 md:col-start-1">{note}</p>
	{/if}
	<p class="font-code text-blue text-md md:col-start-2">{company}</p>
	<span class="font-code text-md block w-full rounded-md text-slate-400 md:col-start-2">{duration}</span>
</div>
