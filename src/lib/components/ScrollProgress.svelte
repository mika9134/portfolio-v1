<script lang="ts">
	import { onMount } from 'svelte';

	let width = $state(0);

	onMount(() => {
		const updateScrollProgress = () => {
			const scrollTop = window.scrollY;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
			width = scrollPercent;
		};

		window.addEventListener('scroll', updateScrollProgress);
		// Call once to initialize
		updateScrollProgress();

		return () => {
			window.removeEventListener('scroll', updateScrollProgress);
		};
	});
</script>

<div
	class="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-primary to-accent z-[1001] shadow-[0_0_10px_rgba(138,43,226,0.5)] transition-[width] duration-75 ease-out"
	style="width: {width}%"
	id="scrollProgress"
></div>
