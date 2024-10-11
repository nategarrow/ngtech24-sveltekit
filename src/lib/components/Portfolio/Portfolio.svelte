<script lang="ts">
	import HighlightCard from '@components/Portfolio/HighlightCard.svelte';
	import { projects } from '@components/Portfolio/projects';
</script>

<section class="py-16">
	<div class="mx-auto max-w-7xl space-y-28 md:space-y-32">
		<div class="flex flex-col gap-16 max-md:px-16">
			{#each projects as project}
				<HighlightCard {...project} />
			{/each}
		</div>
	</div>
	<div class="trust-bar mt-16 text-center">
		<h3 class="mb-8">And More!</h3>
		<div class="border-orange bg-card-background w-full border-t-2 border-b-2 py-12 max-md:px-16 md:py-16">
			<div class="mx-auto flex w-max max-w-6xl flex-col gap-16">
				<div class="flex items-center gap-6">
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
				</div>
			</div>
		</div>
	</div>
</section>
