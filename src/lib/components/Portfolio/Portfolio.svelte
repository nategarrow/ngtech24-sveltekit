<script>
	import SectionHeading from '@components/SectionHeading.svelte';
</script>

<section class="py-12 md:py-20">
	<div class="mx-auto max-w-7xl px-4 flex gap-6">
		<div class="flex-1 space-y-2">
			<h2 class="text-2xl font-medium">About Me</h2>
			<p class="text-sm">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
				sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis
				imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh,
				at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Just for fun, here are some
				skills progress bars. What do the percentages mean? I don't know, but they look cool!
			</p>
			<div class="skills-list flex flex-col gap-4 mt-6">
				<div class="skill">
					<span class="font-code text-md block w-full mb-1">HTML5 / CSS3</span>
					<div class="progress-bar">
						<div class="progress" style="--skill-progress: 90%;"></div>
					</div>
				</div>
				<div class="skill">
					<span class="font-code text-md block w-full mb-1">JavaScript / TypeScript</span>
					<div class="progress-bar">
						<div class="progress" style="--skill-progress: 80%;"></div>
					</div>
				</div>
				<div class="skill">
					<span class="font-code text-md block w-full mb-1">React / NextJS</span>
					<div class="progress-bar">
						<div class="progress" style="--skill-progress: 75%;"></div>
					</div>
				</div>
				<div class="skill">
					<span class="font-code text-md block w-full mb-1">Soft Skills</span>
					<div class="progress-bar">
						<div class="progress" style="--skill-progress: 85%;"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="flex-1">photos</div>
	</div>
	<div class="w-full mx-auto max-w-7xl px-4 flex justify-between gap-6 mt-32">
		<div class="flex-1 flex flex-col items-center">
			<span class="text-4xl font-bold font-code">6+</span>
			<span>Years of Experience</span>
		</div>
		<div class="flex-1 flex flex-col items-center">
			<span class="text-4xl font-bold font-code">100+</span>
			<span>Projects Delivered</span>
		</div>
		<div class="flex-1 flex flex-col items-center">
			<span class="text-4xl font-bold font-code">$400k+</span>
			<span>Contract Renewals</span>
		</div>
	</div>
</section>

<style>
	.progress-bar {
		width: 100%;
		height: 8px;
		background: var(--color-white);
		border-radius: 2rem;
		overflow: hidden;
	}
	.progress {
		height: 100%;
		width: var(--skill-progress, 70%);
		background: var(--color-orange);
		border-radius: 2rem;
	}
</style>
