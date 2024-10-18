<script lang="ts">
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import { faLinkedin, faGithub } from '@awesome.me/kit-7afeb9cb5d/icons/classic/brands';
	import { faPaperPlane, faDownload, faAt } from '@awesome.me/kit-7afeb9cb5d/icons/sharp/light';

	import WorkSkills from './WorkSkills.svelte';
	import WorkHistory from './WorkHistory.svelte';

	import type { JobType, TestimonialType } from '@lib/types/schema';

	type Props = {
		experiences: JobType[];
		skills: {
			skill: string;
		}[];
	};

	let { experiences, skills }: Props = $props();
</script>

<section class="relative z-[1] py-12">
	<div class="mx-auto space-y-12 px-4 text-center md:max-w-[90%] lg:space-y-16 xl:max-w-6xl">
		<div class="resume-grid space-y-24 text-left md:space-y-28">
			<div class="resume-content">
				<div class="space-y-12 md:space-y-20">
					<div id="history" class="resume--work-history">
						<WorkHistory {experiences} />
					</div>
					<div id="skills" class="resume--skills">
						<WorkSkills {skills} />
					</div>
				</div>
			</div>
			<div class="profile-card mx-auto w-full max-w-3xl">
				<div
					class="bg-card-background flex flex-col gap-4 rounded-xl p-3 md:flex-row md:items-center md:gap-8 md:p-6 lg:p-12"
				>
					<div class="flex items-center gap-4">
						<div class="size-20 overflow-hidden rounded-full bg-white">
							<img src="/images/profile-photo.jpg" alt="Nathan Garrow" />
						</div>
						<div class="flex flex-1 flex-col gap-2">
							<p class="text-xl font-medium text-white md:text-2xl">{`<Nathan Garrow />`}</p>
							<p class="font-code text-blue-light mt-0 text-xs">Senior Frontend Web Developer</p>
						</div>
					</div>
					<div class="social-media">
						<ul class="space-y-2">
							<li>
								<a
									href="https://linkedin.com/in/nategarrow"
									target="_blank"
									rel="noopener noreferrer"
									class="text-offwhite hover:text-orange-light space-x-2 text-lg"
								>
									<Icon data={faLinkedin} class="text-blue-light size-6" /> <span> NateGarrow </span>
								</a>
							</li>
							<li>
								<a
									href="https://github.com/nategarrow"
									target="_blank"
									rel="noopener noreferrer"
									class="text-offwhite hover:text-orange-light space-x-2 text-lg"
								>
									<Icon data={faGithub} class="text-blue-light size-6" /> <span>NateGarrow</span>
								</a>
							</li>
							<li>
								<button type="button" class="text-offwhite hover:text-orange-light space-x-2 text-lg">
									<Icon data={faAt} class="text-blue-light size-6" /> <span>nathan@nategarrow.tech</span>
								</button>
							</li>
						</ul>
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
</style>
