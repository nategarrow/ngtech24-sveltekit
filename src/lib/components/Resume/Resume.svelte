<script lang="ts">
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import { faLinkedin, faGithub } from '@awesome.me/kit-7afeb9cb5d/icons/classic/brands';
	import { faPaperPlane, faDownload, faAt } from '@awesome.me/kit-7afeb9cb5d/icons/sharp/light';
	import SectionHeading from '@components/SectionHeading.svelte';
	import { cva } from 'cva';

	import WorkSkills from './WorkSkills.svelte';
	import WorkHistory from './WorkHistory.svelte';

	let resumeTab = $state('history');

	const resumeTabClass = cva(
		'hidden cursor-pointer rounded-md border-2 py-1 px-5 text-white sm:inline-block transition-colors duration-150',
		{
			variants: {
				isActive: {
					true: 'border-orange-light',
					false: 'border-blue-light',
				},
			},
			defaultVariants: {
				isActive: false,
			},
		}
	);
</script>

<section class="py-20 lg:py-28" id="success-stories">
	<div class="xl:max-w-8xl mx-auto space-y-12 px-4 text-center md:max-w-[90%] lg:space-y-16">
		<SectionHeading badge="Resume" heading="Down to Business" />
		<div class="resume-grid text-left">
			<div class="profile-card">
				<div class="bg-card-background space-y-6 rounded-xl p-3 md:p-6 lg:p-8">
					<div class="flex items-center gap-4">
						<div class="size-20 overflow-hidden rounded-full bg-white">
							<img src="/images/profile-photo.jpg" alt="Nathan Garrow" />
						</div>
						<div class="flex flex-1 flex-col gap-1">
							<p class="text-xl font-medium text-white md:text-2xl">{`<Nathan Garrow />`}</p>
							<p class="font-code text-slate text-xs">Frontend Web Developer</p>
						</div>
					</div>
					<div class="social-media">
						<ul class="space-y-2">
							<li>
								<a
									href="https://linkedin.com/in/nategarrow"
									target="_blank"
									rel="noopener noreferrer"
									class="text-offwhite hover:text-blue-light space-x-2 text-lg"
								>
									<Icon data={faLinkedin} class="text-blue-light size-6" /> <span> NateGarrow </span>
								</a>
							</li>
							<li>
								<a
									href="https://github.com/nategarrow"
									target="_blank"
									rel="noopener noreferrer"
									class="text-offwhite hover:text-blue-light space-x-2 text-lg"
								>
									<Icon data={faGithub} class="text-blue-light size-6" /> <span>NateGarrow</span>
								</a>
							</li>
							<li>
								<button type="button" class="text-offwhite hover:text-blue-light space-x-2 text-lg">
									<Icon data={faAt} class="text-blue-light size-6" /> <span>nathan@nategarrow.tech</span>
								</button>
							</li>
						</ul>
					</div>
					<div class="hidden">
						<div class="flex justify-between gap-4">
							<button
								disabled
								class="bg-orange text-md hover:bg-orange-light disabled:bg-orange-light flex flex-1 items-center justify-center gap-2 rounded-md py-2 px-6 text-center font-medium text-white transition-colors duration-150 disabled:cursor-not-allowed disabled:text-white/50"
							>
								Download
								<Icon data={faDownload} class="size-4 text-white" />
							</button>
							<button
								disabled
								class="border-orange text-md hover:border-orange-light disabled:border-orange-light flex flex-1 items-center justify-center gap-2 rounded-md border-3 py-2 px-6 text-center font-medium text-white transition-colors duration-150 disabled:cursor-not-allowed"
							>
								Share
								<Icon data={faPaperPlane} class="size-4 text-white" />
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="about-me space-y-4 p-3 md:p-6 lg:p-8">
				<h3 class="text-4xl">About Me</h3>
				<p class="text-md leading-relaxed lg:text-lg">
					Innovative and driven frontend engineer with over six years of expertise in developing cutting-edge, reactive,
					and responsive websites for the modern web. Specializing in NextJS, with a keen interest in learning
					pioneering frameworks such as Astro, Svelte(Kit), and Remix. Known for solving intricate challenges and
					thriving in dynamic environments where I take ownership of the codebase. Passionate about continuous learning
					and pushing the boundaries of web development.
				</p>
			</div>
			<div class="resume-content">
				<div class="bg-card-background min-h-full rounded-xl pt-6 px-3 pb-16 md:p-6 lg:p-8">
					<div class="mb-6 hidden w-full flex-col items-center justify-center gap-6 sm:flex sm:flex-row md:gap-8">
						<button
							type="button"
							class={resumeTabClass({ isActive: resumeTab === 'history' })}
							onclick={() => (resumeTab = 'history')}
						>
							Work
						</button>
						<button
							type="button"
							class={resumeTabClass({ isActive: resumeTab === 'skills' })}
							onclick={() => (resumeTab = 'skills')}
							>Skills
						</button>
					</div>

					<div id="history" class="resume-tab" data-visible={resumeTab === 'history'}>
						<WorkHistory />
					</div>
					<div id="skills" class="resume-tab" data-visible={resumeTab === 'skills'}>
						<WorkSkills />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.resume-grid {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(3, min-content);
		grid-gap: 12px;
		align-items: start;
	}

	@media (min-width: 80rem) {
		.resume-grid {
			grid-template-columns: 480px 1fr;
			grid-template-rows: min-content min-content auto;
			grid-gap: 32px;
		}
		.profile-card {
			grid-row: 1 / span 1;
		}
		.about-me {
			grid-row: 2 / span 1;
		}
		.resume-content {
			grid-row: 1 / span 3;
			grid-column: 2 / span 1;
		}
	}

	.resume-tab[data-visible='false'] {
		display: none;
	}
</style>
