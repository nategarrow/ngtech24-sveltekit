<script lang="ts">
	import Footer from '@components/Footer.svelte';
	import Hero from '@components/Hero.svelte';
	import Portfolio from '@components/Portfolio/Portfolio.svelte';
	import Resume from '@components/Resume/Resume.svelte';
	import TestimonialList from '@components/Testimonials/TestimonialList.svelte';

	export let data;
	const { homeData } = data;
	const { heroContent, aboutContent, aboutStats, experiences, skills, testimonials } = homeData?.[0];
</script>

<Hero {heroContent} />

<Portfolio {aboutContent} {aboutStats} />

<Resume {experiences} {skills} />

<TestimonialList {testimonials} />

<Footer />
