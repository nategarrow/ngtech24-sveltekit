<script lang="ts">
	import type { ProjectsProps } from '@lib/types/schema.d';
	import { stringToKebabCase } from '@lib/utils/textFunctions';
	import { cva } from 'cva';

	type Props = ProjectsProps & {
		i: number;
	};

	const {
		id,
		title,
		client,
		description,
		techStack,
		stats,
		featuredImageUrl,
		projectLink,
		agencyLink,
		customColor,
		i,
	}: Props = $props();

	const cardStyles = cva('project-thumbnail-shadow', {
		variants: {
			shadowColor: {
				default: 'bg-blue-light/35',
				red: 'bg-red-light/25',
				green: 'bg-green-200/35',
				blue: 'bg-blue-light/35',
				purple: 'bg-purple/30',
			},
		},
		defaultVariants: {
			shadowColor: 'default',
		},
	});
</script>

<div
	id={stringToKebabCase(client)}
	class="project-card shadow-blue/30 mx-auto w-full max-w-5xl rounded-lg shadow-2xl md:sticky"
	style={`top: ${i * 40}px`}
>
	<div
		class="bg-background border-blue-light/50 relative overflow-hidden rounded-2xl border-1 px-4 py-10 backdrop-blur-lg lg:px-12"
	>
		<div
			class="relative z-10 grid size-full grid-cols-1 gap-8 text-white md:grid-cols-[2fr_1fr] md:grid-rows-1 md:flex-row md:gap-x-12"
		>
			<div class="relative z-10 md:row-span-2">
				<div class="flex h-full flex-col justify-between gap-8">
					<div>
						<p class="font-title mb-4 text-sm font-light tracking-wide text-white md:text-base">{client}</p>
						<h3 class="font-subtitle text-2xl font-medium tracking-tight text-white md:text-2xl">{title}</h3>
						<p class="text-offwhite mt-4 text-base">
							{description}
						</p>
						{#if techStack}
							<div class="mt-4 flex flex-wrap gap-2">
								<p class="text-base">
									<span class="font-subtitle font-semibold tracking-widest">Technologies: </span>
									<span class="tech-tag font-code font-light">{techStack}</span>
								</p>
							</div>
						{/if}
					</div>
					{#if projectLink?.current || agencyLink?.current}
						<div class="flex flex-col gap-4 text-center md:flex-row md:text-left">
							{#if projectLink?.current}
								<a
									href={projectLink?.current}
									rel="noopener noreferrer"
									target="_blank"
									class="border-blue hover:bg-blue-light/10 font-subtitle rounded-sm border px-6 py-2 font-medium hover:border-white"
									>View Project</a
								>
							{/if}
							{#if agencyLink?.current}
								<a
									href={agencyLink?.current}
									rel="noopener noreferrer"
									target="_blank"
									class="border-blue hover:bg-blue-light/10 font-subtitle rounded-sm border px-6 py-2 font-medium hover:border-white"
									>View Agency</a
								>
							{/if}
						</div>
					{/if}
				</div>
			</div>

			<div class="relative z-10 flex flex-col items-center justify-center md:col-start-2">
				<div class="flex w-full flex-col gap-4">
					<div class="project-stats flex flex-col items-center justify-center gap-4">
						{#each stats as stat}
							<div class="stat bg-background/70 flex w-full flex-1 flex-col">
								<span class="value">{stat.value}</span>
								<span class="label">{stat.label}</span>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
		{#if featuredImageUrl}
			<div class="absolute top-1/2 left-0 z-0 h-full w-full md:top-0 md:left-1/2">
				<div
					class="project-thumbnail before:to-card-background/30 before:from-background relative aspect-video h-full max-h-full w-full overflow-hidden before:absolute before:top-0 before:left-0 before:h-full before:w-full before:max-w-full before:bg-linear-to-b before:content-[''] md:before:bg-linear-to-r"
				>
					<div class="max-w-full">
						<img src={featuredImageUrl} alt={title} class="h-full w-full object-cover" />
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.project-stats {
		.stat {
			text-align: right;
			padding: 1rem 2rem;
			border-radius: 12px;
			border: 1px solid var(--color-orange-light);

			.label {
				font-family: var(--font-subtitle);
				font-size: var(--text-base);
				font-weight: 400;
				letter-spacing: 0.1em;
				line-height: 1.25;
			}
			.value {
				font-family: var(--font-code);
				font-size: var(--text-3xl);
			}
		}
	}
</style>
