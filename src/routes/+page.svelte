<script lang="ts">
	import Footer from '@components/Footer.svelte';
	import Heading from '@components/Heading.svelte';
	import Hero from '@components/Hero.svelte';
	import Portfolio from '@components/Portfolio/Portfolio.svelte';
	import Resume from '@components/Resume/Resume.svelte';
	import TestimonialList from '@components/Testimonials/TestimonialList.svelte';
</script>

<Hero
	eyebrowText="Nate Garrow"
	titleTop="Enhancing the Web"
	titleBottom="One Line at a Time"
	descriptionText={`<p>
			As a <b class="font-medium text-white">Frontend Web Developer</b> driven by a passion for innovation, I specialize
			in crafting seamless web solutions that elevate user experiences. With meticulous attention to detail and expertise
			in cutting-edge technologies like React, each line of code contributes to a more dynamic and user-friendly digital
			world.
		</p>`}
>
	<div class="mt-12 mx-auto w-fit">
		<a
			href="#success-stories"
			class="bg-offwhite text-background rounded-md py-2 px-6 text-lg font-medium transition-colors duration-150 hover:bg-white"
			>Success Stories</a
		>
	</div>
</Hero>

<Heading
	headingText="The Web is Evolving"
	subheadingText={`<p>
			Web development is constantly evolving, and so is my portfolio. I continuously rebuild and update it to stay ahead
			with the latest technologies and trends, ensuring cutting-edge solutions for every project.
		</p>`}
/>

<Portfolio />

<!-- {#if testimonials?.length > 0}
	<TestimonialList {testimonials} />
{/if} -->

<Resume />

<Footer />
