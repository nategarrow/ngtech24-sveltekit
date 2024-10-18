<script lang="ts">
	import { onMount } from 'svelte';
	import { scroll, animate } from 'motion';

	onMount(() => {
		const titleH3 = document.getElementById('and-more');
		console.log('titleH3:', titleH3);
		if (titleH3) {
			scroll(animate(titleH3, { scale: [2, 1], opacity: [0.75, 0.75, 1] }), {
				target: titleH3,
			});
		}
	});
</script>

<div class="trust-bar mt-16 overflow-hidden text-center md:mt-40">
	<div class="border-orange bg-card-background w-full border-t-2 border-b-2 py-12 max-md:px-16 md:py-16">
		<div class="mx-auto flex w-max max-w-6xl flex-col gap-16">
			<h3 id="and-more" class="text-5xl font-bold">And More!</h3>
			<!-- <div class="flex items-center gap-6">
				<span>Webstacks Logo</span>
				<span>Deepgram Logo</span>
				<span>Semgrep Logo</span>
				<span>Arcesium Logo</span>
				<span>Startree Logo</span>
			</div>
			<div class="flex items-center gap-6">
				<span>RFTB Logo</span>
				<span>Van Cliburn/TCU Music Logo</span>
				<span>Hillwood Logo</span>
				<span>Winchester Safes Logo</span>
				<span>Granite Properties Logo</span>
			</div> -->
		</div>
	</div>
</div>
