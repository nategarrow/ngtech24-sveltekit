<script lang="ts">
	import type { ProjectsProps } from '@components/Portfolio/projects';

	const { title, subtitle, stats, featuredImage, link }: ProjectsProps = $props();
</script>

<div
	class="border-gradient shadow-orange-light/10 mx-auto flex w-full w-full max-w-4xl items-center justify-center rounded-lg py-10 px-12 shadow-xl"
>
	<div class="relative z-10 grid size-full grid-cols-1 gap-8 text-white md:grid-cols-[2fr_1.5fr] md:flex-row md:gap-12">
		<div class="md:row-span-2">
			<div class="flex h-full flex-col justify-between">
				<div>
					<h3 class="text-2xl font-bold text-white md:text-3xl">{title}</h3>
					<p class="text-offwhite mt-4 text-base md:text-lg">
						{subtitle}
					</p>
				</div>
				{#if link}
					<div>
						<a
							href={link}
							class="border-blue hover:bg-blue-light/10 rounded-sm border py-2 px-6 font-medium hover:border-white"
							>View Project</a
						>
					</div>
				{/if}
			</div>
		</div>
		<div class="row-start-1 md:col-start-2">
			<div class="relative aspect-video w-full rounded-md bg-gray-400"></div>
		</div>
		<div class="md:col-start-2">
			<div class="flex flex-col gap-4">
				<div class="project-stats flex flex-col justify-around gap-4 lg:flex-row">
					{#each stats as stat}
						<div class="stat flex flex-col">
							<span class="label">{stat.label}</span>
							<span class="value">{stat.value}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.border-gradient {
		position: relative;

		&::before {
			content: '';
			position: absolute;
			inset: 0;
			border-radius: inherit;
			background: linear-gradient(135deg, var(--color-card-background) 20%, var(--color-orange-light));
		}
		&::after {
			content: '';
			position: absolute;
			inset: 0;
			border-radius: inherit;
			margin: 4px;
			background: var(--color-background-blue);
		}
	}

	.project-stats {
		.stat {
			.label {
				font-family: var(--font-family-sans);
				font-size: var(--font-size-base);
				letter-spacing: 0.2em;
			}
			.value {
				font-family: var(--font-family-code);
				font-size: var(--font-size-lg);

				@media (min-width: 32rem) {
					font-size: var(--font-size-xl);
				}
			}
		}
	}
</style>
