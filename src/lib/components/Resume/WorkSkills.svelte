<script lang="ts">
	import { client } from '@lib/sanity/client';
	import { skillsQuery } from '@lib/sanity/queries';
	import SingleSkillsList from './Components/SingleSkillsList.svelte';

	let skillsList: any[] = $state([]);

	const loadSkills = async () => {
		const newSkillsList = (await client.fetch(skillsQuery)) || [];
		skillsList = newSkillsList;

		return newSkillsList;
	};

	loadSkills();
</script>

<div class="skills space-y-8 lg:space-y-12">
	<h3 class="text-3xl font-medium lg:text-5xl">Skills</h3>
	<div class="work-list space-y-10 md:space-y-16">
		{#each skillsList as skill}
			<SingleSkillsList {...skill} />
		{/each}
	</div>
</div>
