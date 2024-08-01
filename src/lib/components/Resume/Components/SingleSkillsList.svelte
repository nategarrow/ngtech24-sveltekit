<script lang="ts">
	type SkillsProps = {
		name: string;
		skills?: string[];
	};
  
	let { name, skills }: SkillsProps = $props();
</script>

<div class="skills-list flex flex-col gap-4 md:flex-row md:gap-6">
	<div class="md:w-1/3">
		<span class="font-code bg-card-background-dark text-md block w-full rounded-md py-1 px-3">{name}</span>
	</div>
	<div class="md:w-2/3">
		{#if skills && skills?.length > 0}
			<ul class="skills-grid">
				{#each skills as skill}
					<li>{skill}</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>

<style>
	.skills-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 8px 12px;

		@media (min-width: 499px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (min-width: 999px) {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
