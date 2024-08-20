<script lang="ts">
	import Footer from '@components/Footer.svelte';
	import Heading from '@components/Heading.svelte';
	import Hero from '@components/Hero.svelte';
	import Portfolio from '@components/Portfolio/Portfolio.svelte';
	import Resume from '@components/Resume/Resume.svelte';
	import TestimonialList from '@components/Testimonials/TestimonialList.svelte';
</script>

<Hero
	eyebrowText="Hello!"
	titleText="I'm Nathan"
	descriptionText={`A dedicated <b>Frontend Web Developer</b> specializing in NextJS, TailwindCSS, and Headless CMS integration with six years of total experience, with four years of agency experience.`}
/>

<Portfolio />

<TestimonialList />

<Resume />

<Footer />
