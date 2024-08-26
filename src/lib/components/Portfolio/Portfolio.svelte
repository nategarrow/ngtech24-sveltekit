<section id="about-me" class="py-12 md:py-20">
	<div class="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 md:flex-row lg:gap-10">
		<div class="w-full flex-1 space-y-2">
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
		</div>
		<div class="w-full flex-1">
			<div class="skills-list mt-6 flex flex-col gap-4">
				<div class="skill">
					<span class="font-code text-md mb-1 block w-full">HTML5 / CSS3</span>
					<div class="progress-bar">
						<div class="progress autoSkillsProgressbar" style="--skill-progress: 92%;"></div>
					</div>
				</div>
				<div class="skill">
					<span class="font-code text-md mb-1 block w-full">JavaScript / TypeScript</span>
					<div class="progress-bar">
						<div class="progress autoSkillsProgressbar" style="--skill-progress: 84%;"></div>
					</div>
				</div>
				<div class="skill">
					<span class="font-code text-md mb-1 block w-full">Soft Skills</span>
					<div class="progress-bar">
						<div class="progress autoSkillsProgressbar" style="--skill-progress: 91%;"></div>
					</div>
				</div>
				<div class="skill">
					<span class="font-code text-md mb-1 block w-full">Passion for Learning</span>
					<div class="progress-bar">
						<div class="progress autoSkillsProgressbar" style="--skill-progress: 100%;"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div
		class="mt-20 mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-10 px-4 md:mt-32"
	>
		<div class="flex flex-1 flex-col items-center text-center">
			<span class="font-code text-4xl font-bold lg:text-5xl">6+</span>
			<span>Years of Experience</span>
		</div>
		<div class="flex flex-1 flex-col items-center text-center">
			<span class="font-code text-4xl font-bold lg:text-5xl">100+</span>
			<span>Projects Delivered</span>
		</div>
		<div class="flex flex-1 flex-col items-center text-center">
			<span class="font-code text-4xl font-bold lg:text-5xl">$600k+</span>
			<span>Client Contract Renewals</span>
		</div>
	</div>
</section>

<style>
	.progress-bar {
		width: 100%;
		height: 8px;
		background: var(--color-offwhite);
		border-radius: 2rem;
	}
	.progress {
		height: 100%;
		background: var(--color-orange-light);
		border-radius: 2rem;
	}
</style>
