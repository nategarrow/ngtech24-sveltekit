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

<Heading
	headingText="The Web is Evolving"
	subheadingText={`<p>
			Web development is constantly evolving, and so is my portfolio. I continuously rebuild and update it to stay ahead
			with the latest technologies and trends, ensuring cutting-edge solutions for every project.
		</p>`}
/>

<Portfolio />

<TestimonialList />

<Resume />

<Footer />
