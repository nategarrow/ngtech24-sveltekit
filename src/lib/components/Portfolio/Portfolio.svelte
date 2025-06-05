<script lang="ts">
	import { animate, scroll } from 'motion';

	import HighlightCard from '@components/Portfolio/HighlightCard.svelte';
	import Trustbar from '@components/Portfolio/Trustbar.svelte';
	import { onMount } from 'svelte';
	import type { ProjectsProps } from '@lib/types/schema';
	import { cva } from 'cva';

	type Props = {
		projectHighlights: ProjectsProps[];
	};

	const { projectHighlights }: Props = $props();

	let activeClient = $state(projectHighlights[0].client);
	const clientData = $derived(
		projectHighlights.find(project => project.client === activeClient) || projectHighlights[0]
	);

	const buttonClasses = cva(
		'relative cursor-pointer flex-1 py-2 px-6 text-center rounded-xl font-bold text-xl tracking-wide gradient-text before:content-[""] before:absolute before:inset-0 before:-z-10 before:rounded-xl',
		{
			variants: {
				active: {
					true: 'before:bg-linear-to-tr before:from-blue before:to-blue-light bg-background',
					false: 'before:bg-transparent bg-linear-to-tr from-offwhite',
				},
				accentColor: {
					default: '',
					red: '',
					green: '',
					blue: '',
					purple: '',
				},
			},
			compoundVariants: [
				{
					active: false,
					accentColor: 'default',
					class: 'via-blue-light/65 to-blue-light/65',
				},
				{
					active: false,
					accentColor: 'red',
					class: 'via-red-light/45 to-red-light/45',
				},
				{
					active: false,
					accentColor: 'green',
					class: 'via-green-200/65 to-green-200/65',
				},
				{
					active: false,
					accentColor: 'blue',
					class: 'via-blue-light/65 to-blue-light/65',
				},
				{
					active: false,
					accentColor: 'purple',
					class: 'via-purple/60 to-purple/60',
				},
			],
			defaultVariants: {
				active: false,
				accentColor: 'default',
			},
		}
	);
</script>

<section class="py-16">
	<div class="border-wrap-top mx-auto max-w-7xl space-y-16 md:space-y-24">
		<div id="project-list" class="flex flex-col gap-16 px-4">
			<div class="border-blue-light/50 flex justify-between gap-4 rounded-2xl border p-2">
				{#each projectHighlights as project, idx}
					<button
						class={buttonClasses({ active: activeClient === project.client, accentColor: project.customColor })}
						aria-label={project.client}
						class:isactive={activeClient === project.client}
						onclick={() => (activeClient = project.client)}>{project.client}</button
					>
				{/each}
			</div>
			<div>
				<HighlightCard {...clientData} />
			</div>
		</div>
	</div>
	<!-- <Trustbar /> -->
</section>

<style>
	.border-wrap-top {
		position: relative;
		padding: 2rem 1rem 1rem;

		&:before {
			content: '';
			position: absolute;
			inset: 0;
			border-radius: 1.5rem;
			padding: 1.5px;
			background: linear-gradient(to bottom, var(--color-orange), transparent);
			-webkit-mask:
				linear-gradient(#fff 0 0) content-box,
				linear-gradient(#fff 0 0);
			-webkit-mask-composite: xor;
			mask-composite: exclude;
			pointer-events: none;
			z-index: 1;
		}
	}
</style>
