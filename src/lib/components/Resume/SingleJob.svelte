<script lang="ts">
	import type { JobType } from '@lib/types/schema';
	import { stringToKebabCase } from '@lib/utils/textFunctions';
	import { PortableText } from '@portabletext/svelte';

	let { id, position, company, startDate, endDate, description }: JobType = $props();
	const startYear = startDate && new Date(startDate).getFullYear();
	const endYear = endDate && new Date(endDate).getFullYear();

	const duration = startYear && endYear ? `${startYear} - ${endYear}` : `${startYear} - Present`;
</script>

<div id={stringToKebabCase(company)} class="work-item flex flex-col gap-4 md:flex-row lg:gap-6">
	<div class="md:w-1/3">
		<span class="font-code bg-card-background-dark text-md block w-full rounded-md py-1 px-3">{duration}</span>
	</div>
	<div class="space-y-1 md:w-2/3">
		<h4 class="text-2xl text-white">{position}</h4>
		<p class="font-code text-blue text-md">{company}</p>
		{#if description}
			<div class="text-md whitespace-pre-line">
				<PortableText value={description} />
			</div>
		{/if}
	</div>
</div>
