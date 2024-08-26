<section id="about-me" class="py-12 md:py-20">
	<div class="mx-auto flex max-w-5xl flex-col gap-6 px-4 md:flex-row lg:gap-10">
		<div class="flex-1 space-y-2">
			<h2 class="text-2xl font-medium lg:text-4xl">About Me</h2>
			<div class="text-md">
				<p>
					I'm a senior frontend developer from Wichita, Kansas, with 6 years of web experience, including 4 years in
					agencies. I specialize in creating efficient, user-friendly web solutions. When I'm not coding, you'll find me
					camping, hiking, mixing sound at church, or exploring new places with my wife.
				</p>
				<p>
					Just for fun, here are some CSS-animation skills progress bars. What do the percentages mean? I don't know,
					but they look cool!
				</p>
			</div>
			<div class="skills-list mt-6 flex flex-col gap-4">
				<div class="skill">
					<span class="font-code text-md mb-1 block w-full">HTML5 / CSS3</span>
					<div class="progress-bar">
						<div class="progress autoSkillsProgressbar" style="--skill-progress: 90%;"></div>
					</div>
				</div>
				<div class="skill">
					<span class="font-code text-md mb-1 block w-full">JavaScript / TypeScript</span>
					<div class="progress-bar">
						<div class="progress autoSkillsProgressbar" style="--skill-progress: 82%;"></div>
					</div>
				</div>
				<div class="skill">
					<span class="font-code text-md mb-1 block w-full">Soft Skills</span>
					<div class="progress-bar">
						<div class="progress autoSkillsProgressbar" style="--skill-progress: 85%;"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="flex-1">
			<div class="flex size-full items-center justify-center rounded-md bg-gray-800">Something cool here</div>
		</div>
	</div>
	<div
		class="mt-20 mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-6 px-4 md:mt-32 md:flex-row"
	>
		<div class="flex flex-1 flex-col items-center">
			<span class="font-code text-4xl font-bold">6+</span>
			<span>Years of Experience</span>
		</div>
		<div class="flex flex-1 flex-col items-center">
			<span class="font-code text-4xl font-bold">100+</span>
			<span>Projects Delivered</span>
		</div>
		<div class="flex flex-1 flex-col items-center">
			<span class="font-code text-4xl font-bold">$600k+</span>
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
	}
	.progress {
		height: 100%;
		background: var(--color-orange);
		border-radius: 2rem;
	}
</style>
