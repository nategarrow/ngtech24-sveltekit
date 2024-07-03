<script>
	import Heading from '@components/Heading.svelte';
	import Hero from '@components/Hero.svelte';
	import Resume from '@components/Resume/Resume.svelte';
	import TestimonialList from '@components/Testimonials/TestimonialList.svelte';
</script>

<Hero>
	<span slot="eyebrow" class="font-code text-slate text-lg tracking-widest xl:text-xl">Nate Garrow</span>
	<h1 slot="title" class="flex flex-col font-medium text-transparent">
		<span class="title-span gradient-text text-4xl xl:text-6xl">Refining the web </span>
		<span class="title-span gradient-text relative text-5xl lg:-top-3 xl:text-8xl">One pixel at a time</span>
	</h1>
	<div slot="description" class="max-w-5xl text-lg leading-normal md:text-xl xl:text-2xl">
		<p>
			As a <b class="font-medium text-white">Frontend Web Developer</b>, I weave pixels into captivating experiences.
			Whether it's crafting elegant interfaces from scratch or breathing life into existing designs, I thrive on turning
			ideas into reality.
		</p>
	</div>

	<div class="mt-12 mx-auto w-fit">
		<a
			href="#success-stories"
			class="bg-offwhite text-background rounded-md py-2 px-6 text-lg font-medium transition-colors duration-150 hover:bg-white"
			>Success Stories</a
		>
	</div>
</Hero>

<Heading>
	<h2 slot="heading" class="text-3xl font-semibold tracking-widest text-white xl:text-4xl">The Web is Evolving</h2>
	<div slot="subheading" class="mx-auto max-w-3xl text-lg xl:text-xl">
		<p>
			Web development is constantly evolving, and so is my portfolio. I continuously rebuild and update it to stay ahead
			with the latest technologies and trends, ensuring cutting-edge solutions for every project.
		</p>
	</div>
</Heading>

<TestimonialList badge="Success Stories">
	<h2 slot="heading" class="font-regular text-4xl tracking-widest text-white sm:text-5xl xl:text-6xl">Testimonials</h2>
</TestimonialList>

<Resume badge="Down to Business">
	<h2 slot="heading" class="font-regular text-4xl tracking-widest text-white sm:text-5xl xl:text-6xl">Resume</h2>
</Resume>

<style>
	.title-span {
		position: relative;
		display: inline-block;
	}
	.gradient-text {
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;

		background-image: linear-gradient(to bottom, var(--color-offwhite) 10%, var(--color-white) 35%, var(--color-slate));
		line-height: 1.15;
	}
</style>
