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
	descriptionText={`A dedicated <b>Frontend Web Developer</b> specializing in NextJS with a passion for improving the user experience..`}
/>

<Portfolio />

<TestimonialList />

<Resume />

<Footer />
