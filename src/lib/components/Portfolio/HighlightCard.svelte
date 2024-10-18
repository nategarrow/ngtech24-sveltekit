<script lang="ts">
	import type { ProjectsProps } from '@lib/types/schema.d';
	import { cva } from 'cva';

	type Props = ProjectsProps & {
		i: number;
	};

	const { id, title, client, description, stats, featuredImageUrl, projectLink, agencyLink, i }: Props = $props();
	console.log('client:', client);

	const cardStyles = cva('project-thumbnail-shadow', {
		variants: {
			cardIndex: {
				Deepgram: 'bg-red-light/25',
				Semgrep: 'bg-green-200/35',
				'Granite Properties': 'bg-blue-light/35',
				'TCU: Van Cliburn Concert Hall': 'bg-purple/30',
			},
		},
		defaultVariants: {
			cardIndex: 'Deepgram',
		},
	});
</script>

<div
	id={client}
	class="project-card shadow-blue/30 sticky mx-auto w-full max-w-4xl rounded-lg shadow-2xl"
	style={`top: ${i * 40}px`}
>
	<div
		class="bg-card-background/70 border-orange-light/30 relative overflow-hidden rounded-lg border-[0.5px] py-10 px-6 backdrop-blur-lg lg:px-12"
	>
		<div
			class="relative z-10 grid size-full grid-cols-1 gap-8 text-white md:grid-cols-[2fr_1.5fr] md:flex-row md:gap-12"
		>
			<div class="md:row-span-2">
				<div class="flex h-full flex-col justify-between gap-8">
					<div>
						<h3 class="text-2xl font-medium text-white md:text-3xl">{title}</h3>
						<p class="text-offwhite mt-4 text-sm md:text-base">
							{description}
						</p>
					</div>
					{#if projectLink?.current || agencyLink?.current}
						<div class="flex flex-col gap-4 text-center md:flex-row md:text-left">
							{#if projectLink?.current}
								<a
									href={projectLink?.current}
									class="border-blue hover:bg-blue-light/10 rounded-sm border py-2 px-6 font-medium hover:border-white"
									>View Project</a
								>
							{/if}
							{#if agencyLink?.current}
								<a
									href={agencyLink?.current}
									class="border-blue hover:bg-blue-light/10 rounded-sm border py-2 px-6 font-medium hover:border-white"
									>View Agency</a
								>
							{/if}
						</div>
					{/if}
				</div>
			</div>
			<div class="relative row-start-1 md:col-start-2">
				<div class="project-thumbnail relative aspect-video w-full overflow-hidden rounded-md bg-gray-400">
					{#if featuredImageUrl}
						<img src={featuredImageUrl} alt={title} class="h-full w-full object-cover" />
					{/if}
				</div>
				<div class={cardStyles({ cardIndex: client })}></div>
			</div>
			<div class="md:col-start-2">
				<div class="flex flex-col gap-4">
					<div class="project-stats flex flex-col justify-around gap-4 lg:flex-row">
						{#each stats as stat}
							<div class="stat flex flex-1 flex-col">
								<span class="label">{stat.label}</span>
								<span class="value">{stat.value}</span>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.project-thumbnail-shadow {
		position: absolute;
		left: 0;
		top: 25%;
		width: 100%;
		height: 100%;
		transform: scale(1.5);
		aspect-ratio: 1;
		border-radius: 50%;
		z-index: -1;
		filter: blur(100px);
	}
	.project-stats {
		.stat {
			.label {
				font-family: var(--font-family-sans);
				font-size: var(--font-size-sm);
				letter-spacing: 0.2em;
			}
			.value {
				font-family: var(--font-family-code);
				font-size: var(--font-size-base);

				@media (min-width: 32rem) {
					font-size: var(--font-size-lg);
				}
			}
		}
	}
</style>
