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
	class="work-item grid auto-rows-min grid-cols-2 items-center gap-2 border-b border-b-slate-300/50 px-2 py-4 md:px-6 lg:grid-cols-[3fr_1fr]"
>
	<h4 class="font-subtitle col-span-2 text-lg text-white md:col-span-1 md:col-start-1 md:text-xl">{position}</h4>
	<p class="font-title text-blue text-md md:col-start-2 md:text-right">{company}</p>
	{#if note}
		<p
			class="font-code col-span-2 row-start-3 text-sm text-slate-400 md:col-span-1 md:col-start-1 md:row-start-2 md:mt-0"
		>
			{note}
		</p>
	{/if}
	<span class="font-code md:text-md block w-full rounded-md text-sm text-slate-400 md:col-start-2 md:text-right"
		>{duration}</span
	>
</div>
