<section id="about-me" class="py-12 md:py-20">
	<div class="mx-auto max-w-5xl px-4 flex gap-6 lg:gap-10">
		<div class="flex-1 space-y-2">
			<h2 class="text-2xl font-medium lg:text-4xl">About Me</h2>
			<div class="text-md">
				<p>
					I'm a senior frontend developer from Wichita, Kansas, with 6 years of web experience, including 4 years in
					agencies. I specialize in creating efficient, user-friendly web solutions. When I'm not coding, you'll find me
					camping, hiking, mixing sound at church, or exploring new places with my wife.
				</p>
				<p>
					Just for fun, here are some CSS-animation skills progress bars. What do the percentages mean? I don't know, but
					they look cool!
				</p>
			</div>
			<div class="skills-list flex flex-col gap-4 mt-6">
				<div class="skill">
					<span class="font-code text-md block w-full mb-1">HTML5 / CSS3</span>
					<div class="progress-bar">
						<div class="progress autoSkillsProgressbar" style="--skill-progress: 90%;"></div>
					</div>
				</div>
				<div class="skill">
					<span class="font-code text-md block w-full mb-1">JavaScript / TypeScript</span>
					<div class="progress-bar">
						<div class="progress autoSkillsProgressbar" style="--skill-progress: 82%;"></div>
					</div>
				</div>
				<div class="skill">
					<span class="font-code text-md block w-full mb-1">Soft Skills</span>
					<div class="progress-bar">
						<div class="progress autoSkillsProgressbar" style="--skill-progress: 85%;"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="flex-1">
			<div class="size-full bg-gray-800 flex justify-center items-center rounded-md">
				Something cool here
			</div>
		</div>
	</div>
	<div class="w-full mx-auto max-w-5xl px-4 flex justify-between gap-6 mt-32">
		<div class="flex-1 flex flex-col items-center">
			<span class="text-4xl font-bold font-code">6+</span>
			<span>Years of Experience</span>
		</div>
		<div class="flex-1 flex flex-col items-center">
			<span class="text-4xl font-bold font-code">100+</span>
			<span>Projects Delivered</span>
		</div>
		<div class="flex-1 flex flex-col items-center">
			<span class="text-4xl font-bold font-code">$600k+</span>
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
