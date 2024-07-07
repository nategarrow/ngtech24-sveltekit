<script lang="ts">
	import Heading from '@components/Heading.svelte';
	import Hero from '@components/Hero.svelte';
	import Portfolio from '@components/Portfolio/Portfolio.svelte';
	import Resume from '@components/Resume/Resume.svelte';
	import TestimonialList from '@components/Testimonials/TestimonialList.svelte';

	import type { JobType, TestimonialType } from '@lib/types/schema';
	export let data;

	type Props = {
		jobs?: JobType[];
		testimonials?: TestimonialType[];
	};
	let { jobs = [], testimonials = [] }: Props = data;
	// console.log('testimonials:', testimonials?.length);
</script>

<Hero>
	<span slot="eyebrow" class="font-code text-slate text-sm tracking-widest sm:text-lg xl:text-xl">Nate Garrow</span>
	<h1 slot="title" class="flex flex-col font-medium text-transparent">
		<span class="title-span gradient-text text-2xl sm:text-4xl">Enhancing the Web</span>
		<span class="title-span gradient-text relative text-4xl sm:text-5xl lg:-top-3 xl:text-7xl">
			One Line at a Time
		</span>
	</h1>
	<div slot="description" class="max-w-2xl text-md leading-tight xl:max-w-5xl xl:text-lg">
		<p>
			As a <b class="font-medium text-white">Frontend Web Developer</b> driven by a passion for innovation, I specialize
			in crafting seamless web solutions that elevate user experiences. With meticulous attention to detail and expertise
			in cutting-edge technologies like React, each line of code contributes to a more dynamic and user-friendly digital
			world.
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

<Portfolio />

{#if testimonials?.length > 0}
	<TestimonialList {testimonials} />
{/if}

{#if jobs?.length > 0}
	<Resume {jobs} />
{/if}

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
