<div class="work-history space-y-8 lg:space-y-12">
	<h3 class="text-3xl font-medium lg:text-5xl">Skills</h3>
	<div class="skills-list flex flex-col gap-4 md:flex-row md:gap-8">
		<div class="md:flex-[30%]">
			<span class="font-code bg-card-background-dark text-md block w-full rounded-md py-1 px-3">Frontend Skills</span>
		</div>
		<div class="md:flex-[70%]">
			<ul class="skills-grid">
				<li>HTML/HTML5</li>
				<li>CSS/CSS3</li>
				<li>JavaScript</li>
				<li>TypeScript</li>
				<li>React</li>
				<li>NextJS/Gatsby</li>
				<li>CMS Architecture</li>
			</ul>
		</div>
	</div>
	<div class="skills-list flex flex-col gap-4 md:flex-row md:gap-8">
		<div class="md:flex-[30%]">
			<span class="font-code bg-card-background-dark text-md block w-full rounded-md py-1 px-3">Services</span>
		</div>
		<div class="md:flex-[70%]">
			<ul class="skills-grid">
				<li>Sanity.io</li>
				<li>Contentful</li>
				<li>DatoCMS</li>
				<li>Storyblok</li>
				<li>Builder.io</li>
				<li>Sentry</li>
			</ul>
		</div>
	</div>
</div>

<style>
	.skills-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 8px 12px;

		@media (min-width: 799px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (min-width: 999px) {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
