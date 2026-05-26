<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let visible = $state(true);

	onMount(() => {
		const timer = setTimeout(() => {
			visible = false;
		}, 500);

		return () => clearTimeout(timer);
	});
</script>

{#if visible}
	<div
		transition:fade={{ duration: 400 }}
		class="fixed inset-0 bg-darker flex items-center justify-center z-[9999]"
		id="preloader"
	>
		<div
			class="w-[50px] h-[50px] border-[5px] border-primary/20 border-t-primary rounded-full animate-spin-loader shadow-[0_0_10px_rgba(138,43,226,0.5)]"
		></div>
	</div>
{/if}
