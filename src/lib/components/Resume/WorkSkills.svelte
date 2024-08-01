<script lang="ts">
	import SingleSkillsList from './Components/SingleSkillsList.svelte';

	import type { SkillsType } from '@lib/types/schema';

	type Props = {
		skillsList: SkillsType[];
	};
	let { skillsList }: Props = $props();
</script>

<div class="work-skills space-y-8 lg:space-y-12">
	{#if skillsList && skillsList?.length > 0}
		<h3 class="text-3xl font-medium lg:text-5xl">Skills</h3>
		{#each skillsList as skill}
			<SingleSkillsList {...skill} />
		{/each}
	{/if}
</div>
