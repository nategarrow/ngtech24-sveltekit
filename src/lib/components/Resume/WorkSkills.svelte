<script lang="ts">
	type Props = {
		skills: {
			skill: string;
		}[];
	};
	const { skills }: Props = $props();
</script>

<div class="skills space-y-8">
	<h3 class="text-3xl font-medium lg:text-3xl">Skills</h3>
	<div class="skills-list flex flex-wrap gap-2">
		{#each skills as skill}
			<span class="border-offwhite bg-blue-light/10 rounded-sm border py-0.5 px-2 text-blue-50">{skill}</span>
		{/each}
	</div>
</div>
